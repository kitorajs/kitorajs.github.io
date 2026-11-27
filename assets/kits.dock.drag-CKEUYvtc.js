import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{g as a,h as o,i as s,l as c,t as l,u}from"./dock-CVAc3kEG.js";import{o as d}from"./kit-Dinrg2gH.js";import{t as f}from"./panels-yb_hfL-N.js";import{n as p,r as m}from"./parts-CGX_mU_k.js";import"./kit-gallery-BBavj2rC.js";import{t as h}from"./example-B67lLz1F.js";var g=e(r(),1),_=i();function v({title:e,params:t}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] leading-relaxed text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`mb-1 font-medium text-foreground`,children:e}),(0,_.jsx)(`p`,{"data-selectable-text":``,children:t.text??`Select this text with the mouse: only tabs and strips start a docking drag, never panel content.`}),(0,_.jsx)(`input`,{"aria-label":`${e} field`,className:`mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring`,placeholder:`Type, or compose with an IME`})]})}function y({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var b=f({doc:{component:v,kind:`document`},note:{component:y,kind:`tool`}}),x=(e,t)=>({id:e,component:`doc`,title:t,kind:`document`}),S=(e,t)=>({id:e,component:`note`,title:t,kind:`tool`});function C(){return a({orientation:`horizontal`,children:[{id:`docs`,size:.55,panels:[x(`intro`,`intro.md`),x(`guide`,`guide.md`),x(`api`,`api.md`),x(`faq`,`faq.md`)]},{orientation:`vertical`,children:[{id:`tools`,panels:[S(`outline`,`Outline`),S(`timeline`,`Timeline`)]},{id:`logs`,panels:[S(`logs`,`Logs`),S(`trace`,`Trace`)]}]}]})}function w(){let[e]=(0,g.useState)(C),[t,n]=(0,g.useState)(e);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(`code`,{"data-testid":`drag-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:o(t)}),(0,_.jsx)(`div`,{"data-testid":`drag-dock`,className:`mt-1 h-[420px] overflow-hidden rounded-md border`,children:(0,_.jsx)(l,{panels:b,defaultLayout:e,parts:p,label:`Drag demo`,onLayoutChange:n})})]})}var T=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, type DockLayout, type PanelInit, type PanelProps } from "@kitora/dock"

type DocParams = { text?: string }

/** A document with selectable text and a field: selecting or typing never starts a docking drag (stub: replace with your panels). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] leading-relaxed text-muted-foreground">
      <div className="mb-1 font-medium text-foreground">{title}</div>
      <p data-selectable-text="">{params.text ?? "Select this text with the mouse: only tabs and strips start a docking drag, never panel content."}</p>
      <input aria-label={\`\${title} field\`} className="mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Type, or compose with an IME" />
    </div>
  )
}

/** A tool panel. */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" }, note: { component: Note, kind: "tool" } })

const doc = (id: string, title: string): PanelInit => ({ id, component: "doc", title, kind: "document" })
const tool = (id: string, title: string): PanelInit => ({ id, component: "note", title, kind: "tool" })

/** Four documents on the left; Outline and Timeline over Logs and Trace on the right. */
function dragLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "docs", size: 0.55, panels: [doc("intro", "intro.md"), doc("guide", "guide.md"), doc("api", "api.md"), doc("faq", "faq.md")] },
      {
        orientation: "vertical",
        children: [
          { id: "tools", panels: [tool("outline", "Outline"), tool("timeline", "Timeline")] },
          { id: "logs", panels: [tool("logs", "Logs"), tool("trace", "Trace")] },
        ],
      },
    ],
  })
}

/** Drag a tab or a group's strip: edges split, the centre joins, a strip inserts at the marker, the outer edge docks along the whole dock; Escape cancels. */
export function DropZones() {
  const [initial] = useState(dragLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  return (
    <>
      <DockStyles />
      <code data-testid="drag-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="drag-dock" className="mt-1 h-[420px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Drag demo" onLayoutChange={setLayout} />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./drag-zones-CDNgd7kz.js`),[]));function E({title:e,params:t}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] leading-relaxed text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`mb-1 font-medium text-foreground`,children:e}),(0,_.jsx)(`p`,{"data-selectable-text":``,children:t.text??`Select this text with the mouse: only tabs and strips start a docking drag, never panel content.`}),(0,_.jsx)(`input`,{"aria-label":`${e} field`,className:`mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring`,placeholder:`Type, or compose with an IME`})]})}function D({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var O=f({doc:{component:E,kind:`document`},note:{component:D,kind:`tool`}}),k=[{id:`report`,component:`doc`,title:`report.md`,kind:`document`},{id:`notes`,component:`note`,title:`Notes`,kind:`tool`},{id:`todo`,component:`doc`,title:`todo.md`,kind:`document`}],A=a({id:`drop-here`,keepWhenEmpty:!0,panels:[{id:`welcome`,component:`doc`,title:`welcome.md`,kind:`document`}]});function j(){let[e,t]=(0,g.useState)(A);return(0,_.jsxs)(`div`,{className:`flex gap-3`,children:[(0,_.jsx)(m,{}),(0,_.jsx)(`ul`,{"aria-label":`Palette`,className:`w-40 shrink-0 space-y-1 text-[12.5px]`,children:k.map(e=>(0,_.jsx)(`li`,{children:(0,_.jsx)(`div`,{...s(e),"data-palette":e.id,className:`flex h-7 cursor-grab items-center rounded border bg-background px-2 hover:bg-muted`,children:e.title})},e.id))}),(0,_.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,_.jsx)(`code`,{"data-testid":`outside-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:o(e)}),(0,_.jsx)(`div`,{"data-testid":`outside-dock`,className:`mt-1 h-[260px] overflow-hidden rounded-md border`,children:(0,_.jsx)(l,{panels:O,defaultLayout:A,parts:p,label:`Outside drops`,onLayoutChange:t,onExternalDrop:e=>{let t=e.files[0];return t?{id:`file:${t.name}`,component:`doc`,title:t.name,kind:`document`,params:{text:`${t.size} bytes, ${t.type||`unknown type`}`}}:null}})})]})]})}var M=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, dockDragSourceProps, DockStyles, layoutOutline, type DockLayout, type PanelInit, type PanelProps } from "@kitora/dock"

type DocParams = { text?: string }

/** A document with selectable text and a field: selecting or typing never starts a docking drag (stub: replace with your panels). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] leading-relaxed text-muted-foreground">
      <div className="mb-1 font-medium text-foreground">{title}</div>
      <p data-selectable-text="">{params.text ?? "Select this text with the mouse: only tabs and strips start a docking drag, never panel content."}</p>
      <input aria-label={\`\${title} field\`} className="mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Type, or compose with an IME" />
    </div>
  )
}

/** A tool panel. */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" }, note: { component: Note, kind: "tool" } })

/** Items outside the dock that open as panels where they are dropped. */
const PALETTE: readonly PanelInit[] = [
  { id: "report", component: "doc", title: "report.md", kind: "document" },
  { id: "notes", component: "note", title: "Notes", kind: "tool" },
  { id: "todo", component: "doc", title: "todo.md", kind: "document" },
]

const layout = createLayout({ id: "drop-here", keepWhenEmpty: true, panels: [{ id: "welcome", component: "doc", title: "welcome.md", kind: "document" }] })

/** Any element can carry a panel into the dock (dockDragSourceProps); files from the desktop arrive through onExternalDrop. */
export function DragFromOutside() {
  const [now, setNow] = useState<DockLayout>(layout)
  return (
    <div className="flex gap-3">
      <DockStyles />
      <ul aria-label="Palette" className="w-40 shrink-0 space-y-1 text-[12.5px]">
        {PALETTE.map((p) => (
          <li key={p.id}>
            <div {...dockDragSourceProps(p)} data-palette={p.id} className="flex h-7 cursor-grab items-center rounded border bg-background px-2 hover:bg-muted">
              {p.title}
            </div>
          </li>
        ))}
      </ul>
      <div className="min-w-0 flex-1">
        <code data-testid="outside-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
          {layoutOutline(now)}
        </code>
        <div data-testid="outside-dock" className="mt-1 h-[260px] overflow-hidden rounded-md border">
          <Dock
            panels={panels}
            defaultLayout={layout}
            parts={DOCK_UI}
            label="Outside drops"
            onLayoutChange={setNow}
            // A file from the desktop: turn it into a panel, or return null to refuse it.
            onExternalDrop={(data) => {
              const file = data.files[0]
              return file ? { id: \`file:\${file.name}\`, component: "doc", title: file.name, kind: "document", params: { text: \`\${file.size} bytes, \${file.type || "unknown type"}\` } } : null
            }}
          />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>n(()=>import(`./drag-outside-ncSKmcMD.js`),[]));function N({title:e,params:t}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] leading-relaxed text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`mb-1 font-medium text-foreground`,children:e}),(0,_.jsx)(`p`,{"data-selectable-text":``,children:t.text??`Select this text with the mouse: only tabs and strips start a docking drag, never panel content.`}),(0,_.jsx)(`input`,{"aria-label":`${e} field`,className:`mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring`,placeholder:`Type, or compose with an IME`})]})}function P({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var F=f({doc:{component:N,kind:`document`},note:{component:P,kind:`tool`}}),I=(e,t)=>({id:e,component:`doc`,title:t,kind:`document`}),L=(e,t)=>({id:e,component:`note`,title:t,kind:`tool`});function R(){return a({orientation:`horizontal`,children:[{id:`docs`,size:.55,panels:[I(`intro`,`intro.md`),I(`guide`,`guide.md`),I(`api`,`api.md`),I(`faq`,`faq.md`)]},{orientation:`vertical`,children:[{id:`tools`,panels:[L(`outline`,`Outline`),L(`timeline`,`Timeline`)]},{id:`logs`,panels:[L(`logs`,`Logs`),L(`trace`,`Trace`)]}]}]})}var z=(e,t,n)=>e.kind===`panel`&&e.panel.kind===`document`&&(t.type===`group`&&t.group===`tools`||t.type===`split`&&t.node===`tools`)?!1:c(e,t,n);function B(){let[e]=(0,g.useState)(R),[t,n]=(0,g.useState)(e),[r,i]=(0,g.useState)(.25);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-2 text-[12px]`,children:[(0,_.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Edge zone`,(0,_.jsx)(`input`,{type:`range`,min:.1,max:.45,step:.05,value:r,onChange:e=>i(Number(e.target.value)),"aria-label":`Edge zone depth`}),(0,_.jsxs)(`span`,{className:`w-10 tabular-nums`,children:[Math.round(r*100),` %`]})]}),(0,_.jsx)(`code`,{"data-testid":`rules-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:o(t)})]}),(0,_.jsx)(`div`,{"data-testid":`rules-dock`,className:`h-[320px] overflow-hidden rounded-md border`,children:(0,_.jsx)(l,{panels:F,defaultLayout:e,parts:p,label:`Rules demo`,accept:z,geometry:{edgeFraction:r},onLayoutChange:n})})]})}var V=`import { useState } from "react"
import { createLayout, defaultAccept, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, type DockAcceptRule, type DockLayout, type PanelInit, type PanelProps } from "@kitora/dock"

type DocParams = { text?: string }

/** A document with selectable text and a field: selecting or typing never starts a docking drag (stub: replace with your panels). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] leading-relaxed text-muted-foreground">
      <div className="mb-1 font-medium text-foreground">{title}</div>
      <p data-selectable-text="">{params.text ?? "Select this text with the mouse: only tabs and strips start a docking drag, never panel content."}</p>
      <input aria-label={\`\${title} field\`} className="mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Type, or compose with an IME" />
    </div>
  )
}

/** A tool panel. */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" }, note: { component: Note, kind: "tool" } })

const doc = (id: string, title: string): PanelInit => ({ id, component: "doc", title, kind: "document" })
const tool = (id: string, title: string): PanelInit => ({ id, component: "note", title, kind: "tool" })

/** Four documents on the left; Outline and Timeline over Logs and Trace on the right. */
function dragLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "docs", size: 0.55, panels: [doc("intro", "intro.md"), doc("guide", "guide.md"), doc("api", "api.md"), doc("faq", "faq.md")] },
      {
        orientation: "vertical",
        children: [
          { id: "tools", panels: [tool("outline", "Outline"), tool("timeline", "Timeline")] },
          { id: "logs", panels: [tool("logs", "Logs"), tool("trace", "Trace")] },
        ],
      },
    ],
  })
}

/** Documents may not join or split the tools group; everything else follows the default rule. */
const noDocsInTools: DockAcceptRule = (source, target, layout) => {
  const isDocument = source.kind === "panel" && source.panel.kind === "document"
  if (isDocument && ((target.type === "group" && target.group === "tools") || (target.type === "split" && target.node === "tools"))) return false
  return defaultAccept(source, target, layout)
}

/** An acceptance rule, and the depth of each group's edge zones (geometry.edgeFraction). */
export function AcceptRules() {
  const [initial] = useState(dragLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [edge, setEdge] = useState(0.25)
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-2 text-[12px]">
        <label className="flex items-center gap-2">
          Edge zone
          <input type="range" min={0.1} max={0.45} step={0.05} value={edge} onChange={(e) => setEdge(Number(e.target.value))} aria-label="Edge zone depth" />
          <span className="w-10 tabular-nums">{Math.round(edge * 100)} %</span>
        </label>
        <code data-testid="rules-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
          {layoutOutline(layout)}
        </code>
      </div>
      <div data-testid="rules-dock" className="h-[320px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Rules demo" accept={noDocsInTools} geometry={{ edgeFraction: edge }} onLayoutChange={setLayout} />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>n(()=>import(`./drag-rules-D0jbVxWp.js`),[]));function H({title:e,params:t}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] leading-relaxed text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`mb-1 font-medium text-foreground`,children:e}),(0,_.jsx)(`p`,{"data-selectable-text":``,children:t.text??`Select this text with the mouse: only tabs and strips start a docking drag, never panel content.`}),(0,_.jsx)(`input`,{"aria-label":`${e} field`,className:`mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring`,placeholder:`Type, or compose with an IME`})]})}function U({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function W({id:e,params:t}){let n=u();return d({onDragStart(r){t.armed&&r.source?.id===e&&n.closePanel(e)}}),(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:`Scratch`}),t.armed?`Armed: drag this tab and the app removes the panel mid-drag.`:`Not armed.`]})}var G=f({doc:{component:H,kind:`document`},note:{component:U,kind:`tool`},scratch:{component:W,kind:`tool`}}),K=a({orientation:`horizontal`,children:[{id:`text`,panels:[{id:`selectable`,component:`doc`,title:`selectable.md`,kind:`document`}]},{id:`scratch-group`,panels:[{id:`scratch`,component:`scratch`,title:`Scratch`,params:{armed:!0}},{id:`keep`,component:`note`,title:`Keep`,kind:`tool`}]}]});function q(){let[e,t]=(0,g.useState)(K);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(`code`,{"data-testid":`edges-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:o(e)}),(0,_.jsx)(`div`,{"data-testid":`edges-dock`,className:`mt-1 h-[240px] overflow-hidden rounded-md border`,children:(0,_.jsx)(l,{panels:G,defaultLayout:K,parts:p,label:`Edge cases`,onLayoutChange:t})})]})}var J=`import { useState } from "react"
import { useDndMonitor } from "@kitora/dnd"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockLayout, type PanelProps } from "@kitora/dock"

type DocParams = { text?: string }

/** A document with selectable text and a field: selecting or typing never starts a docking drag (stub: replace with your panels). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] leading-relaxed text-muted-foreground">
      <div className="mb-1 font-medium text-foreground">{title}</div>
      <p data-selectable-text="">{params.text ?? "Select this text with the mouse: only tabs and strips start a docking drag, never panel content."}</p>
      <input aria-label={\`\${title} field\`} className="mt-2 h-7 w-56 rounded border bg-background px-2 text-[12px] outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Type, or compose with an IME" />
    </div>
  )
}

/** A tool panel. */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type ScratchParams = { armed?: boolean }

/** While armed, closes itself the moment its own tab starts dragging: the drag ends cleanly with no overlay left behind. */
function Scratch({ id, params }: PanelProps<ScratchParams>) {
  const api = useDock()
  useDndMonitor({
    onDragStart(state) {
      if (params.armed && state.source?.id === id) void api.closePanel(id)
    },
  })
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">Scratch</div>
      {params.armed ? "Armed: drag this tab and the app removes the panel mid-drag." : "Not armed."}
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" }, note: { component: Note, kind: "tool" }, scratch: { component: Scratch, kind: "tool" } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "text", panels: [{ id: "selectable", component: "doc", title: "selectable.md", kind: "document" }] },
    { id: "scratch-group", panels: [{ id: "scratch", component: "scratch", title: "Scratch", params: { armed: true } }, { id: "keep", component: "note", title: "Keep", kind: "tool" }] },
  ],
})

/** A panel removed mid-drag, and panel content that never starts a drag. */
export function DragEdgeCases() {
  const [now, setNow] = useState<DockLayout>(layout)
  return (
    <>
      <DockStyles />
      <code data-testid="edges-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(now)}
      </code>
      <div data-testid="edges-dock" className="mt-1 h-[240px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Edge cases" onLayoutChange={setNow} />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>n(()=>import(`./drag-edge-cases-C4LUiIIi.js`),[]));function Y(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Docking drag`,children:`Drag a tab, or a whole group by the empty part of its strip, and drop it where the overlay shows: a group's edges split it, its centre joins it, a strip inserts at the marker, and the main area's outer edge docks along the whole dock. Escape cancels. The drag runs on Pointer Events through the repo's drag engine, so mouse, touch and pen all work.`}),(0,_.jsx)(h,{n:1,title:`Drop zones`,blurb:`Drag intro.md onto the right edge of the Outline group to split it, onto the Logs body to join it, between two tabs of another strip to insert it, or onto the far left edge of the dock for a full-height column. Press on the empty strip right of the tabs to drag the whole group. Press Escape mid-drag to cancel: the layout is unchanged.`,code:T,children:(0,_.jsx)(w,{})}),(0,_.jsx)(h,{n:2,title:`Drag in from outside`,blurb:`Drag an item from the palette into the dock: it opens as a panel where you drop it (a tab, a split, or a new group). A file dragged from the desktop opens as a panel named after it.`,code:M,children:(0,_.jsx)(j,{})}),(0,_.jsx)(h,{n:3,title:`Acceptance rules and zone geometry`,blurb:`Documents may not join or split the Outline group here (the overlay never appears there for them); tools may. The slider sets how deep each edge zone reaches into a group.`,code:V,children:(0,_.jsx)(B,{})}),(0,_.jsx)(h,{n:4,title:`Edge cases`,blurb:`Drag the Scratch tab: the app removes that panel while it is being dragged, and the drag ends cleanly with no overlay left behind. Select text or type in selectable.md: no drag starts from panel content.`,code:J,children:(0,_.jsx)(q,{})})]})}export{Y as component};