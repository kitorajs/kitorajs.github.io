import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./search-C2WkThP4.js";import{Bc as i,Cc as a,Ic as o}from"./index-q72zUtm9.js";import{g as s,t as c}from"./dock-HBvjciWi.js";import{t as l}from"./panels-COzw_Krp.js";import{n as u,r as d}from"./parts-Qzyy3T3e.js";import"./kit-gallery-Atvibnty.js";import{t as f}from"./example-B8EaWveR.js";var p=e(i(),1),m=o();function h({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var g=l({note:{component:h}}),_=s({id:`main`,panels:[{id:`doc`,component:`note`,title:`editor.ts`},{id:`preview`,component:`note`,title:`Preview`}]});function v(){let[e,t]=(0,p.useState)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`button`,{type:`button`,className:`mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,"data-action":`float`,onClick:()=>e?.float(`preview`,{left:140,top:50,width:240,height:140}),children:`Float the preview`}),(0,m.jsx)(`div`,{"data-testid":`basic-float`,className:`h-[240px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{ref:t,panels:g,defaultLayout:_,parts:u,label:`Floating`})})]})}var y=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

const layout = createLayout({ id: "main", panels: [{ id: "doc", component: "note", title: "editor.ts" }, { id: "preview", component: "note", title: "Preview" }] })

/** float(panel) moves it into a window over the dock; drag the window's tab back onto a group, or close the window, to dock it again. */
export function BasicFloating() {
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  return (
    <>
      <DockStyles />
      <button type="button" className="mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" data-action="float" onClick={() => api?.float("preview", { left: 140, top: 50, width: 240, height: 140 })}>
        Float the preview
      </button>
      <div data-testid="basic-float" className="h-[240px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Floating" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>a(()=>import(`./floating-CTThZCFk.js`),[]));function b({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var x=l({note:{component:b}}),S=s({orientation:`horizontal`,children:[{id:`side`,size:.3,panels:[{id:`files`,component:`note`,title:`Files`}]},{id:`editor`,panels:[{id:`doc`,component:`note`,title:`editor.ts`}]}]});function C(){let[e,t]=(0,p.useState)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`button`,{type:`button`,className:`mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,"data-action":`maximise`,onClick:()=>e?.toggleMaximize(`editor`),children:`Maximise / restore the editor`}),(0,m.jsx)(`div`,{"data-testid":`basic-max`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{ref:t,panels:x,defaultLayout:S,parts:u,label:`Maximise`})})]})}var w=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

const layout = createLayout({ orientation: "horizontal", children: [{ id: "side", size: 0.3, panels: [{ id: "files", component: "note", title: "Files" }] }, { id: "editor", panels: [{ id: "doc", component: "note", title: "editor.ts" }] }] })

/** toggleMaximize(group) shows that group alone and restores on the next call; the group header's maximise button does the same. */
export function BasicMaximise() {
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  return (
    <>
      <DockStyles />
      <button type="button" className="mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" data-action="maximise" onClick={() => api?.toggleMaximize("editor")}>
        Maximise / restore the editor
      </button>
      <div data-testid="basic-max" className="h-[160px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Maximise" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>a(()=>import(`./maximise-WHeD9OVX.js`),[]));function T({title:e}){return(0,m.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var E=l({note:{component:T},explorer:{component:T,icon:(0,m.jsx)(n,{className:`size-4`})},search:{component:T,icon:(0,m.jsx)(r,{className:`size-4`})}}),D=s({id:`main`,panels:[{id:`doc`,component:`note`,title:`editor.ts`}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:180}}});function O(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(`div`,{"data-testid":`basic-border`,className:`h-[200px] overflow-hidden rounded-md border`,children:(0,m.jsx)(c,{panels:E,defaultLayout:D,parts:u,label:`Border`})})]})}var k=`import { FilesIcon, SearchIcon } from "lucide-react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

// \`icon\` is what the activity bar shows for a border view.
const panels = defineDockPanels({ note: { component: Note }, explorer: { component: Note, icon: <FilesIcon className="size-4" /> }, search: { component: Note, icon: <SearchIcon className="size-4" /> } })

/** The main area is one group; the left border holds tool panels behind an activity bar (click an icon to open or collapse). */
const layout = createLayout(
  { id: "main", panels: [{ id: "doc", component: "note", title: "editor.ts" }] },
  { borders: { left: { panels: [{ id: "explorer", component: "explorer", title: "Explorer", kind: "tool" }, { id: "search", component: "search", title: "Search", kind: "tool" }], open: "explorer", sizePx: 180 } } },
)

export function BasicSideBorder() {
  return (
    <>
      <DockStyles />
      <div data-testid="basic-border" className="h-[200px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Border" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./side-border-DK3SvWnk.js`),[]));function A(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: maximise, borders and floats`,children:`Three places a panel can go besides a group: filling the dock, in a side border, and in a floating window.`}),(0,m.jsx)(f,{n:1,title:`Maximise a panel`,blurb:`The button calls toggleMaximize; the group header's maximise button does the same.`,code:w,children:(0,m.jsx)(C,{})}),(0,m.jsx)(f,{n:2,title:`A side border panel`,blurb:`Tool panels in the left border, behind an activity bar. Click an icon to switch views; click the open one to collapse.`,code:k,children:(0,m.jsx)(O,{})}),(0,m.jsx)(f,{n:3,title:`Floating a panel`,blurb:`Float the preview into a window over the dock. Drag its tab back onto the group, or close the window, to dock it again.`,code:y,children:(0,m.jsx)(v,{})})]})}export{A as component};