import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,S as n,T as r,k as i,s as a,t as o,y as s}from"./editor-BJCAQnLm.js";import{s as c}from"./kit-docs-DpYhPoxM.js";import{Bc as l,Cc as u,Ic as d}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as f}from"./example-B8EaWveR.js";import{t as p}from"./-kits.whiteboard.shared-C4nfCTfX.js";function m(e=`kitora.whiteboard:`){return{async load(t){try{return globalThis.localStorage?.getItem(e+t)??null}catch{return null}},async save(t,n){globalThis.localStorage?.setItem(e+t,n)}}}var h=d(),g=t(r([i({id:`core-only-1`,kind:`rect`,x:0,y:0,w:120,h:60,text:`core`,style:{fill:`#ffec99`}}),i({id:`core-only-2`,kind:`arrow`,points:[{x:120,y:30},{x:190,y:30}]}),i({id:`core-only-3`,kind:`ellipse`,x:190,y:0,w:120,h:60,text:`SVG string`,style:{fill:`#eebefa`}})]),{background:`#ffffff`,padding:12});function _(){return(0,h.jsx)(`div`,{className:`grid h-full place-items-center bg-muted/30 p-4`,children:(0,h.jsx)(`img`,{alt:`Board exported by the core`,src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(g)}`,className:`max-w-full rounded border shadow-sm`})})}var v=`import { createShape, docFromShapes, exportSvg } from "@kitora/whiteboard/core"

// The core layer alone: no React, no DOM. The same call runs on a server to render thumbnails.
const svg = exportSvg(
  docFromShapes([
    createShape({ id: "core-only-1", kind: "rect", x: 0, y: 0, w: 120, h: 60, text: "core", style: { fill: "#ffec99" } }),
    createShape({ id: "core-only-2", kind: "arrow", points: [{ x: 120, y: 30 }, { x: 190, y: 30 }] }),
    createShape({ id: "core-only-3", kind: "ellipse", x: 190, y: 0, w: 120, h: 60, text: "SVG string", style: { fill: "#eebefa" } }),
  ]),
  { background: "#ffffff", padding: 12 },
)

/** A board rendered to SVG without React, shown as an image. */
export function BasicCoreOnly() {
  return (
    <div className="grid h-full place-items-center bg-muted/30 p-4">
      <img alt="Board exported by the core" src={\`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`} className="max-w-full rounded border shadow-sm" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>u(()=>import(`./core-only-BnvPL8E-.js`),[]));var y=e(l(),1),b=r([i({id:`custom-adapters-1`,kind:`rect`,x:40,y:40,w:170,h:80,text:`Export from the ⋯ menu`,style:{fill:`#a5d8ff`}})]),x=n(r([i({id:`custom-adapters-2`,kind:`sticky`,x:60,y:30,w:180,h:110,text:`Opened from the template adapter`})]));function S(){let e=new Map,t=e=>new Promise(t=>setTimeout(()=>t(e),150));return{load:n=>t(e.get(n)??null),save:async(n,r)=>{await t(null),e.set(n,r)}}}function C({storage:e,onStatus:t}){let n=a(),r=`h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted`;return(0,h.jsxs)(`div`,{className:`absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end`,children:[(0,h.jsx)(`button`,{type:`button`,className:r,onClick:()=>void n.save(e,`demo`).then(()=>t(`Saved to server`)),children:`Save to server`}),(0,h.jsx)(`button`,{type:`button`,className:r,onClick:()=>void n.load(e,`demo`).then(e=>t(e===`empty`?`Server has nothing yet`:e??`Loaded from server`)),children:`Load from server`})]})}function w(){let[e,t]=(0,y.useState)([]),[n,r]=(0,y.useState)(`Idle`),i=(0,y.useMemo)(S,[]);return(0,h.jsxs)(`div`,{className:`grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_200px] sm:grid-rows-1`,children:[(0,h.jsx)(o,{defaultDoc:b,files:(0,y.useMemo)(()=>({rasterize:s.rasterize,save:(e,n)=>t(t=>[{name:n,bytes:e.size},...t].slice(0,6)),pick:async()=>({name:`template.json`,text:async()=>x})}),[]),stylePanel:!1,label:`Board with custom adapters`,onFileError:r,overlay:(0,h.jsx)(C,{storage:i,onStatus:r})}),(0,h.jsxs)(`aside`,{"aria-label":`Adapter status`,tabIndex:0,className:`flex flex-col gap-1.5 max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:[(0,h.jsxs)(`p`,{className:`text-muted-foreground`,"aria-live":`polite`,children:[`Status: `,(0,h.jsx)(`span`,{"data-testid":`adapter-status`,children:n})]}),(0,h.jsx)(`div`,{className:`font-medium`,children:`Outbox`}),e.length===0?(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`Export or save from the ⋯ menu.`}):null,(0,h.jsx)(`ul`,{"data-testid":`adapter-outbox`,className:`flex flex-col gap-1`,children:e.map((e,t)=>(0,h.jsxs)(`li`,{className:`flex justify-between gap-2 rounded border bg-card px-1.5 py-1`,children:[(0,h.jsx)(`span`,{className:`truncate`,children:e.name}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.bytes.toLocaleString(),` B`]})]},`${t}-${e.name}`))})]})]})}var T=`import { useMemo, useState } from "react"
import { type BoardFiles, type BoardStorage, WhiteboardEditor, browserBoardFiles, createShape, docFromShapes, serializeBoard, useBoardActions } from "@kitora/whiteboard"

const START = docFromShapes([createShape({ id: "custom-adapters-1", kind: "rect", x: 40, y: 40, w: 170, h: 80, text: "Export from the ⋯ menu", style: { fill: "#a5d8ff" } })])

/** A board the "Open…" item loads instead of showing a file picker. */
const TEMPLATE = serializeBoard(docFromShapes([createShape({ id: "custom-adapters-2", kind: "sticky", x: 60, y: 30, w: 180, h: 110, text: "Opened from the template adapter" })]))

interface Sent {
  readonly name: string
  readonly bytes: number
}

/** stub: replace with your API. A storage that answers after a short delay, like a server would. */
function serverStorage(): BoardStorage {
  const rows = new Map<string, string>()
  const later = <T,>(value: T) => new Promise<T>((resolve) => setTimeout(() => resolve(value), 150))
  return {
    load: (key) => later(rows.get(key) ?? null),
    save: async (key, json) => {
      await later(null)
      rows.set(key, json)
    },
  }
}

function SaveButtons({ storage, onStatus }: { readonly storage: BoardStorage; readonly onStatus: (s: string) => void }) {
  const actions = useBoardActions()
  const btn = "h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted"
  return (
    <div className="absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end">
      <button type="button" className={btn} onClick={() => void actions.save(storage, "demo").then(() => onStatus("Saved to server"))}>
        Save to server
      </button>
      <button type="button" className={btn} onClick={() => void actions.load(storage, "demo").then((err) => onStatus(err === "empty" ? "Server has nothing yet" : (err ?? "Loaded from server")))}>
        Load from server
      </button>
    </div>
  )
}

/**
 * Two adapters swapped in: a \`BoardFiles\` that collects every export in an outbox (where your upload
 * call would go) and opens a template instead of a file picker, and a \`BoardStorage\` that behaves
 * like a server. The ⋯ menu and the buttons use them without knowing.
 */
export function BasicCustomAdapters() {
  const [outbox, setOutbox] = useState<readonly Sent[]>([])
  const [status, setStatus] = useState("Idle")
  const storage = useMemo(serverStorage, [])
  const files = useMemo<BoardFiles>(
    () => ({
      rasterize: browserBoardFiles.rasterize,
      save: (blob, name) => setOutbox((list) => [{ name, bytes: blob.size }, ...list].slice(0, 6)),
      pick: async () => ({ name: "template.json", text: async () => TEMPLATE }),
    }),
    [],
  )
  return (
    <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_200px] sm:grid-rows-1">
      <WhiteboardEditor
        defaultDoc={START}
        files={files}
        stylePanel={false}
        label="Board with custom adapters"
        onFileError={setStatus}
        overlay={<SaveButtons storage={storage} onStatus={setStatus} />}
      />
      <aside aria-label="Adapter status" tabIndex={0} className="flex flex-col gap-1.5 max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
        <p className="text-muted-foreground" aria-live="polite">
          Status: <span data-testid="adapter-status">{status}</span>
        </p>
        <div className="font-medium">Outbox</div>
        {outbox.length === 0 ? <p className="text-muted-foreground">Export or save from the ⋯ menu.</p> : null}
        <ul data-testid="adapter-outbox" className="flex flex-col gap-1">
          {outbox.map((f, i) => (
            <li key={\`\${i}-\${f.name}\`} className="flex justify-between gap-2 rounded border bg-card px-1.5 py-1">
              <span className="truncate">{f.name}</span>
              <span className="tabular-nums text-muted-foreground">{f.bytes.toLocaleString()} B</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>u(()=>import(`./custom-adapters-Coq1XhSw.js`),[]));var E=r([i({id:`export-1`,kind:`ellipse`,x:30,y:30,w:110,h:70,text:`Start`,style:{fill:`#b2f2bb`}}),i({id:`export-2`,kind:`arrow`,points:[{x:140,y:65},{x:210,y:65}]}),i({id:`export-3`,kind:`rect`,x:210,y:30,w:130,h:70,text:`Export me`,style:{fill:`#a5d8ff`}})]);function D({onPreview:e}){let t=a(),n=`h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted`;return(0,h.jsxs)(`div`,{className:`absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end`,children:[(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>e(t.toSvg({background:`#ffffff`})),children:`Preview SVG`}),(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>t.downloadSvg(`diagram.svg`),children:`Download SVG`}),(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>void t.downloadPng(`diagram.png`),children:`Download PNG`})]})}function O(){let[e,t]=(0,y.useState)(null);return(0,h.jsxs)(`div`,{className:`grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_220px] sm:grid-rows-1`,children:[(0,h.jsx)(o,{options:{doc:E},stylePanel:!1,label:`Export board`,overlay:(0,h.jsx)(D,{onPreview:t})}),(0,h.jsxs)(`aside`,{"aria-label":`SVG preview`,tabIndex:0,className:`flex flex-col gap-2 max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:[(0,h.jsx)(`div`,{className:`font-medium`,children:`SVG preview`}),e?(0,h.jsx)(`img`,{alt:`Exported board`,src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,className:`w-full rounded border bg-white`}):(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`Press Preview SVG.`}),e?(0,h.jsxs)(`p`,{className:`tabular-nums text-muted-foreground`,children:[e.length.toLocaleString(),` bytes`]}):null]})]})}var k=`import { useState } from "react"
import { WhiteboardEditor, createShape, docFromShapes, useBoardActions } from "@kitora/whiteboard"

const START = docFromShapes([
  createShape({ id: "export-1", kind: "ellipse", x: 30, y: 30, w: 110, h: 70, text: "Start", style: { fill: "#b2f2bb" } }),
  createShape({ id: "export-2", kind: "arrow", points: [{ x: 140, y: 65 }, { x: 210, y: 65 }] }),
  createShape({ id: "export-3", kind: "rect", x: 210, y: 30, w: 130, h: 70, text: "Export me", style: { fill: "#a5d8ff" } }),
])

/** Sits inside the board, so it reaches the board's actions through context. */
function ExportBar({ onPreview }: { readonly onPreview: (svg: string) => void }) {
  const actions = useBoardActions()
  const btn = "h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted"
  return (
    <div className="absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end">
      <button type="button" className={btn} onClick={() => onPreview(actions.toSvg({ background: "#ffffff" }))}>
        Preview SVG
      </button>
      <button type="button" className={btn} onClick={() => actions.downloadSvg("diagram.svg")}>
        Download SVG
      </button>
      <button type="button" className={btn} onClick={() => void actions.downloadPng("diagram.png")}>
        Download PNG
      </button>
    </div>
  )
}

/** Undo and redo (the bottom-left controls, ⌘Z / ⇧⌘Z) and export from the same drawing descriptions the canvas uses. */
export function BasicExport() {
  const [svg, setSvg] = useState<string | null>(null)
  return (
    <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_220px] sm:grid-rows-1">
      <WhiteboardEditor options={{ doc: START }} stylePanel={false} label="Export board" overlay={<ExportBar onPreview={setSvg} />} />
      <aside aria-label="SVG preview" tabIndex={0} className="flex flex-col gap-2 max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
        <div className="font-medium">SVG preview</div>
        {svg ? <img alt="Exported board" src={\`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`} className="w-full rounded border bg-white" /> : <p className="text-muted-foreground">Press Preview SVG.</p>}
        {svg ? <p className="tabular-nums text-muted-foreground">{svg.length.toLocaleString()} bytes</p> : null}
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>u(()=>import(`./export-D-RYVrFi.js`),[]));var A=m(),j=`basics-save-load`,M=r([i({id:`save-load-1`,kind:`sticky`,x:40,y:40,w:170,h:120,text:`Change me, Save, reload the page, Load.`})]);function N({onStatus:e}){let t=a(),n=`h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted`;return(0,h.jsxs)(`div`,{className:`absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end`,children:[(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>void t.save(A,j).then(()=>e(`Saved ${new Date().toLocaleTimeString()}`)),children:`Save`}),(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>void t.load(A,j).then(t=>e(t===`empty`?`Nothing saved yet`:t??`Loaded`)),children:`Load`}),(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>t.downloadJson(`board.json`),children:`Download JSON`}),(0,h.jsx)(`button`,{type:`button`,className:n,onClick:()=>void t.openJson().then(t=>e(t??`Opened`)),children:`Open JSON…`})]})}function P(){let[e,t]=(0,y.useState)(`Not saved`);return(0,h.jsx)(o,{options:{doc:M},stylePanel:!1,label:`Save and load`,overlay:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N,{onStatus:t}),(0,h.jsx)(`span`,{className:`absolute right-2 top-2 rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground`,"aria-live":`polite`,children:e})]})})}var F=`import { useState } from "react"
import { WhiteboardEditor, createShape, docFromShapes, localBoardStorage, useBoardActions } from "@kitora/whiteboard"

// Any BoardStorage works here: localStorage, memory, or your server behind the same two methods.
const storage = localBoardStorage()
const KEY = "basics-save-load"

const START = docFromShapes([createShape({ id: "save-load-1", kind: "sticky", x: 40, y: 40, w: 170, h: 120, text: "Change me, Save, reload the page, Load." })])

function SaveBar({ onStatus }: { readonly onStatus: (s: string) => void }) {
  const actions = useBoardActions()
  const btn = "h-7 shrink-0 whitespace-nowrap rounded-md border bg-card px-2.5 text-[12px] shadow-sm hover:bg-muted"
  return (
    <div className="absolute right-2 bottom-2 flex gap-1.5 max-sm:bottom-12 max-sm:left-2 max-sm:flex-wrap max-sm:justify-end">
      <button type="button" className={btn} onClick={() => void actions.save(storage, KEY).then(() => onStatus(\`Saved \${new Date().toLocaleTimeString()}\`))}>
        Save
      </button>
      <button type="button" className={btn} onClick={() => void actions.load(storage, KEY).then((err) => onStatus(err === "empty" ? "Nothing saved yet" : (err ?? "Loaded")))}>
        Load
      </button>
      <button type="button" className={btn} onClick={() => actions.downloadJson("board.json")}>
        Download JSON
      </button>
      <button type="button" className={btn} onClick={() => void actions.openJson().then((err) => onStatus(err ?? "Opened"))}>
        Open JSON…
      </button>
    </div>
  )
}

/** Save and load a versioned JSON file, through a pluggable storage. */
export function BasicSaveLoad() {
  const [status, setStatus] = useState("Not saved")
  return <WhiteboardEditor options={{ doc: START }} stylePanel={false} label="Save and load" overlay={<><SaveBar onStatus={setStatus} /><span className="absolute right-2 top-2 rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground" aria-live="polite">{status}</span></>} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>u(()=>import(`./save-load-DKRm3OvV.js`),[]));function I(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(c,{title:`Basics: undo, export, save`,children:`One gesture is one undo step. Exports come from the same drawing descriptions as the canvas, and saving goes through a two-method storage interface.`}),(0,h.jsx)(f,{n:1,title:`Undo and export`,blurb:`Edit, then undo and redo from the bottom-left controls. Preview the SVG, or download SVG and PNG.`,code:k,children:(0,h.jsx)(p,{testId:`basic-export`,height:340,children:(0,h.jsx)(O,{})})}),(0,h.jsx)(f,{n:2,title:`Save and load`,blurb:`Save to localStorage and load it back after a reload, or download and open a versioned JSON file.`,code:F,children:(0,h.jsx)(p,{testId:`basic-save`,height:300,children:(0,h.jsx)(P,{})})}),(0,h.jsx)(f,{n:3,title:`Your own adapters`,blurb:"A `BoardFiles` adapter sends every export to an outbox (where an upload would go) and opens a template instead of a file picker; a `BoardStorage` behaves like a server. Pass `files` to the root and the ⋯ menu uses it.",code:T,children:(0,h.jsx)(p,{testId:`basic-adapters`,height:300,children:(0,h.jsx)(w,{})})}),(0,h.jsx)(f,{n:4,title:`The core alone`,blurb:"`exportSvg` from `@kitora/whiteboard/core`: no React, no DOM, so a server can render thumbnails.",code:v,children:(0,h.jsx)(p,{testId:`basic-core`,height:160,children:(0,h.jsx)(_,{})})})]})}export{I as component};