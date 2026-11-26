import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{t as a}from"./split-view-B9nRmEfk.js";import{g as o,h as s,t as c}from"./dock-B6jyBTRi.js";import{t as l}from"./panels-COzw_Krp.js";import{n as u,r as d}from"./parts-x1DgzehZ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";var p=e(n(),1),m=i();function h({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var g=l({note:{component:h}}),_=o({id:`main`,panels:[{id:`a`,component:`note`,title:`One`},{id:`b`,component:`note`,title:`Two`},{id:`c`,component:`note`,title:`Three`}]});function v(){let[e,t]=(0,p.useState)(_);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`code`,{"data-testid":`basic-drag-outline`,className:`block truncate font-mono text-[11px] text-muted-foreground`,children:s(e)}),(0,m.jsx)(`div`,{"data-testid":`basic-drag`,className:`mt-1 h-[220px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{panels:g,defaultLayout:_,parts:u,label:`Drag`,onLayoutChange:t})})]})}var y=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, type DockLayout, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

const initial = createLayout({ id: "main", panels: [{ id: "a", component: "note", title: "One" }, { id: "b", component: "note", title: "Two" }, { id: "c", component: "note", title: "Three" }] })

/** Drag a tab onto an edge of the group to split it there; drop on the centre to join a group. */
export function BasicDragToSplit() {
  const [layout, setLayout] = useState<DockLayout>(initial)
  return (
    <>
      <DockStyles />
      <code data-testid="basic-drag-outline" className="block truncate font-mono text-[11px] text-muted-foreground">{layoutOutline(layout)}</code>
      <div data-testid="basic-drag" className="mt-1 h-[220px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Drag" onLayoutChange={setLayout} />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./drag-to-split-CTnXp0_l.js`),[]));function b({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var x=l({note:{component:b}}),S=o({orientation:`horizontal`,children:[{id:`left`,size:.4,panels:[{id:`inbox`,component:`note`,title:`Inbox`},{id:`sent`,component:`note`,title:`Sent`}]},{id:`right`,panels:[{id:`draft`,component:`note`,title:`Draft`}]}]});function C(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`div`,{"data-testid":`basic-groups`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{panels:x,defaultLayout:S,parts:u,label:`Mail`})})]})}var w=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

/** A horizontal split of two groups; the sash between them resizes. */
const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.4, panels: [{ id: "inbox", component: "note", title: "Inbox" }, { id: "sent", component: "note", title: "Sent" }] },
    { id: "right", panels: [{ id: "draft", component: "note", title: "Draft" }] },
  ],
})

export function BasicSideBySide() {
  return (
    <>
      <DockStyles />
      <div data-testid="basic-groups" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Mail" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./side-by-side-D5zhG5lb.js`),[]));function T(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`div`,{"data-dock":``,"data-testid":`basic-split`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,m.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.35,.65],panes:[{minPx:100},{minPx:160}],paneLabels:[`List`,`Detail`],children:[(0,m.jsx)(`div`,{className:`p-3 text-[12.5px]`,children:`List`}),(0,m.jsx)(`div`,{className:`bg-muted/40 p-3 text-[12.5px]`,children:`Detail`})]})})]})}var E=`import { DockStyles, SplitView } from "@kitora/dock"

/** Two panes and a draggable sash, no dock needed: sizes are fractions, limits are px. */
export function BasicSplitView() {
  return (
    <>
      <DockStyles />
      <div data-dock="" data-testid="basic-split" className="h-[160px] overflow-hidden rounded-md border">
        <SplitView orientation="horizontal" defaultSizes={[0.35, 0.65]} panes={[{ minPx: 100 }, { minPx: 160 }]} paneLabels={["List", "Detail"]}>
          <div className="p-3 text-[12.5px]">List</div>
          <div className="bg-muted/40 p-3 text-[12.5px]">Detail</div>
        </SplitView>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./split-view-CVLT0MyR.js`),[]));function D({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var O=l({note:{component:D}}),k=o({id:`files`,panels:[{id:`a`,component:`note`,title:`index.ts`},{id:`b`,component:`note`,title:`app.ts`},{id:`c`,component:`note`,title:`README.md`}]});function A(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`div`,{"data-testid":`basic-tabs`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{panels:O,defaultLayout:k,parts:u,label:`Files`})})]})}var j=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

/** One group: its panels show as tabs. */
const layout = createLayout({ id: "files", panels: [{ id: "a", component: "note", title: "index.ts" }, { id: "b", component: "note", title: "app.ts" }, { id: "c", component: "note", title: "README.md" }] })

export function BasicTabGroup() {
  return (
    <>
      <DockStyles />
      <div data-testid="basic-tabs" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Files" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>r(()=>import(`./tab-group-AyklBM7t.js`),[]));function M(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: splits and tab groups`,children:`The building blocks: a splitter on its own, then a dock with one group of tabs, two groups side by side, and a drag that splits a group.`}),(0,m.jsx)(f,{n:1,title:`Two panes in a SplitView`,blurb:`Drag the sash, or focus it with Tab and use the arrow keys. No dock needed.`,code:E,children:(0,m.jsx)(T,{})}),(0,m.jsx)(f,{n:2,title:`A single tab group`,blurb:`One group: its panels are tabs. Drag a tab to reorder; × or middle-click closes.`,code:j,children:(0,m.jsx)(A,{})}),(0,m.jsx)(f,{n:3,title:`Two groups side by side`,blurb:`A horizontal split of two groups, each with its own tabs.`,code:w,children:(0,m.jsx)(C,{})}),(0,m.jsx)(f,{n:4,title:`Drag a tab to split`,blurb:`Drag a tab onto an edge of the group to split it there. The line above is the layout as data, updated on every change.`,code:y,children:(0,m.jsx)(v,{})})]})}export{M as component};