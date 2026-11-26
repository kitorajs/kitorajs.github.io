import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./search-BZ0gLa1o.js";import{Bc as i,Cc as a,Ic as o}from"./index-9y5uwRd3.js";import{a as s,c,g as l,o as u,s as d,t as f}from"./dock-B6jyBTRi.js";import{t as p}from"./panels-COzw_Krp.js";import{n as m,r as h,t as g}from"./parts-x1DgzehZ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as _}from"./example-CZLJLtIC.js";var v=o();function y({title:e}){return(0,v.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var b=p({note:{component:y}});function x(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsx)(`div`,{"data-testid":`basic-jsx`,className:`h-[180px] overflow-hidden rounded-md border`,children:(0,v.jsx)(f,{panels:b,parts:m,label:`Declared`,children:(0,v.jsxs)(c,{orientation:`horizontal`,children:[(0,v.jsx)(u,{size:.3,children:(0,v.jsx)(d,{id:`files`,component:`note`,title:`Files`})}),(0,v.jsxs)(c,{orientation:`vertical`,children:[(0,v.jsx)(u,{children:(0,v.jsx)(d,{id:`editor`,component:`note`,title:`editor.ts`})}),(0,v.jsx)(u,{size:.35,children:(0,v.jsx)(d,{id:`terminal`,component:`note`,title:`Terminal`})})]})]})})})]})}var S=`import { defineDockPanels, Dock, DOCK_UI, DockGroup, DockPanel, DockSplit, DockStyles, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

/** The default layout written as JSX: DockSplit, DockGroup and DockPanel describe it and render nothing themselves. */
export function BasicJsxLayout() {
  return (
    <>
      <DockStyles />
      <div data-testid="basic-jsx" className="h-[180px] overflow-hidden rounded-md border">
        <Dock panels={panels} parts={DOCK_UI} label="Declared">
          <DockSplit orientation="horizontal">
            <DockGroup size={0.3}>
              <DockPanel id="files" component="note" title="Files" />
            </DockGroup>
            <DockSplit orientation="vertical">
              <DockGroup>
                <DockPanel id="editor" component="note" title="editor.ts" />
              </DockGroup>
              <DockGroup size={0.35}>
                <DockPanel id="terminal" component="note" title="Terminal" />
              </DockGroup>
            </DockSplit>
          </DockSplit>
        </Dock>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./jsx-layout-CeNxu2GB.js`),[]));function C({title:e}){return(0,v.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var w=p({note:{component:C},explorer:{component:C,icon:(0,v.jsx)(n,{className:`size-4`})},search:{component:C,icon:(0,v.jsx)(r,{className:`size-4`})}}),T={...m,closeIcon:(0,v.jsx)(g,{})};function E(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsx)(`div`,{"data-testid":`basic-jsx-border`,className:`h-[200px] overflow-hidden rounded-md border`,children:(0,v.jsxs)(f,{panels:w,parts:T,label:`Border in JSX`,children:[(0,v.jsxs)(s,{side:`left`,open:`explorer`,sizePx:180,children:[(0,v.jsx)(d,{id:`explorer`,title:`Explorer`}),(0,v.jsx)(d,{id:`search`,title:`Search`})]}),(0,v.jsxs)(u,{children:[(0,v.jsx)(d,{id:`doc`,component:`note`,title:`editor.ts`}),(0,v.jsx)(d,{id:`readme`,component:`note`,title:`README.md`})]})]})})]})}var D=`import { FilesIcon, SearchIcon } from "lucide-react"
import { CloseGlyph, defineDockPanels, Dock, DOCK_UI, DockBorder, DockGroup, DockPanel, DockStyles, type PanelProps } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

// \`icon\` is what the activity bar shows for a border view.
const panels = defineDockPanels({ note: { component: Note }, explorer: { component: Note, icon: <FilesIcon className="size-4" /> }, search: { component: Note, icon: <SearchIcon className="size-4" /> } })

// CloseGlyph is the kit's own close icon; pass it (or any node) as the tab close glyph.
const parts = { ...DOCK_UI, closeIcon: <CloseGlyph /> }

/** A side border written as JSX: DockBorder's DockPanel children are its views, \`open\` picks the one shown first. */
export function BasicJsxBorder() {
  return (
    <>
      <DockStyles />
      <div data-testid="basic-jsx-border" className="h-[200px] overflow-hidden rounded-md border">
        <Dock panels={panels} parts={parts} label="Border in JSX">
          <DockBorder side="left" open="explorer" sizePx={180}>
            <DockPanel id="explorer" title="Explorer" />
            <DockPanel id="search" title="Search" />
          </DockBorder>
          <DockGroup>
            <DockPanel id="doc" component="note" title="editor.ts" />
            <DockPanel id="readme" component="note" title="README.md" />
          </DockGroup>
        </Dock>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./jsx-border-BYD1f45-.js`),[]));var O=e(i(),1);function k({title:e}){return(0,v.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:e})}var A=p({note:{component:k}}),j=l({orientation:`horizontal`,children:[{panels:[{id:`a`,component:`note`,title:`One`},{id:`b`,component:`note`,title:`Two`}]},{panels:[{id:`c`,component:`note`,title:`Three`}]}]}),M=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function N(){let[e,t]=(0,O.useState)(null),[n,r]=(0,O.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsxs)(`div`,{className:`mb-2 flex gap-1.5`,children:[(0,v.jsx)(`button`,{type:`button`,className:M,"data-action":`save`,onClick:()=>r(e?.save()??null),children:`Save`}),(0,v.jsx)(`button`,{type:`button`,className:M,"data-action":`restore`,disabled:!n,onClick:()=>n&&e?.load(n),children:`Restore`}),(0,v.jsx)(`button`,{type:`button`,className:M,"data-action":`reset`,onClick:()=>e?.reset(),children:`Reset`})]}),(0,v.jsx)(`div`,{"data-testid":`basic-save`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,v.jsx)(f,{ref:t,panels:A,defaultLayout:j,parts:m,label:`Saved layout`})})]})}var P=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A panel body (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return <div className="p-3 text-[12.5px] text-muted-foreground">{title}</div>
}

const panels = defineDockPanels({ note: { component: Note } })

const layout = createLayout({ orientation: "horizontal", children: [{ panels: [{ id: "a", component: "note", title: "One" }, { id: "b", component: "note", title: "Two" }] }, { panels: [{ id: "c", component: "note", title: "Three" }] }] })

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** save() returns the layout as JSON-safe data; load() puts it back (keep it in localStorage, a server, anywhere). */
export function BasicSaveRestore() {
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [saved, setSaved] = useState<DockLayout | null>(null)
  return (
    <>
      <DockStyles />
      <div className="mb-2 flex gap-1.5">
        <button type="button" className={BUTTON} data-action="save" onClick={() => setSaved(api?.save() ?? null)}>Save</button>
        <button type="button" className={BUTTON} data-action="restore" disabled={!saved} onClick={() => saved && api?.load(saved)}>Restore</button>
        <button type="button" className={BUTTON} data-action="reset" onClick={() => api?.reset()}>Reset</button>
      </div>
      <div data-testid="basic-save" className="h-[160px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Saved layout" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./save-restore-BmGZtHZu.js`),[]));function F(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Basics: layouts`,children:`A layout is plain data. Write the default one in JSX, then save the live layout and restore it later.`}),(0,v.jsx)(_,{n:1,title:`A layout in JSX`,blurb:`DockSplit, DockGroup and DockPanel describe the default layout: a file list beside an editor over a terminal.`,code:S,children:(0,v.jsx)(x,{})}),(0,v.jsx)(_,{n:2,title:`A side border in JSX`,blurb:`DockBorder puts its DockPanel children in a side border behind an activity bar; CloseGlyph is the tab close icon.`,code:D,children:(0,v.jsx)(E,{})}),(0,v.jsx)(_,{n:3,title:`Save and restore`,blurb:`Rearrange the tabs, press Save, change things again, then Restore. Reset goes back to the default layout.`,code:P,children:(0,v.jsx)(N,{})})]})}export{F as component};