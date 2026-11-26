import{s as e}from"./kit-docs-CvNs0WqT.js";import{i as t}from"./opener-CB2z166a.js";import{Cc as n,Ic as r}from"./index-9y5uwRd3.js";import{g as i,t as a}from"./dock-B6jyBTRi.js";import{t as o}from"./panels-COzw_Krp.js";import{n as s,r as c}from"./parts-x1DgzehZ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";var u=r();function d({title:e}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var f=o({note:{component:d}}),p=i({id:`basics`,panels:((e,t)=>Array.from({length:t},(t,n)=>({id:`${e}${n+1}`,component:`note`,title:`${e}${n+1}.ts`})))(`tab`,6)});function m(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-basics`,className:`h-[200px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:f,defaultLayout:p,parts:s,label:`Basics`})})]})}var h=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note } })

/** \`n\` note panels named \`\${prefix}1.ts\`, \`\${prefix}2.ts\`, … */
const notes = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => ({ id: \`\${prefix}\${i + 1}\`, component: "note", title: \`\${prefix}\${i + 1}.ts\` }))

const layout = createLayout({ id: "basics", panels: notes("tab", 6) })

// Drag a tab to reorder · middle-click or × closes · right-click: close others / to the right / all, split, rename
// Keys on a focused tab: ←/→ Home End · Delete closes · F2 renames · Ctrl+Shift+PageUp/PageDown moves it
export function TabBasics() {
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-basics" className="h-[200px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Basics" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./tabs-basics-CJXbPQJ_.js`),[]));function g({title:e,params:t}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),t.dirty?`Unsaved changes: closing asks first.`:`Saved.`]})}var _=o({doc:{component:g,kind:`document`}}),v={ts:`TS`,md:`M↓`,json:`{}`},y={ts:`text-sky-700 dark:text-sky-400`,md:`text-violet-600 dark:text-violet-300`,json:`text-amber-700 dark:text-amber-300`},b={...s,renderTab:({panel:e,close:t,group:n})=>{let r=e.params?.kind,i=r===`ts`||r===`md`||r===`json`?r:null;return(0,u.jsxs)(u.Fragment,{children:[i?(0,u.jsx)(`span`,{className:`font-mono text-[9.5px] font-semibold ${y[i]}`,children:v[i]}):null,(0,u.jsx)(`span`,{"data-dock-tab-title":``,children:e.title}),e.params?.dirty===!0?(0,u.jsx)(`span`,{"aria-label":`unsaved`,className:`size-2 rounded-full bg-foreground/60`}):n.locked?null:(0,u.jsx)(`span`,{"data-dock-tab-close":``,"aria-hidden":`true`,onPointerDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),t()},children:`×`})]})}},x=i({id:`veto`,panels:[{id:`index.ts`,component:`doc`,params:{dirty:!0,kind:`ts`}},{id:`README.md`,component:`doc`,params:{kind:`md`}},{id:`notes.md`,component:`doc`,params:{dirty:!0,kind:`md`}}]});function S(){let e=t();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-veto`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:_,defaultLayout:x,parts:b,beforeClose:t=>t.params?.dirty===!0?e.confirm({title:`Close ${t.title}?`,description:`Unsaved changes will be lost.`,confirmLabel:`Close`,destructive:!0}):!0,label:`Veto`})})]})}var C=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockParts, type PanelProps, type PanelState } from "@kitora/dock"
import { useOverlays } from "@kitora/overlay"

type DocParams = { dirty?: boolean; kind?: "ts" | "md" | "json" }

/** A document panel that shows whether it has unsaved changes (stub: replace with your editor). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      {params.dirty ? "Unsaved changes: closing asks first." : "Saved."}
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" } })

/** Tiny glyph per document kind. */
const KIND_GLYPH = { ts: "TS", md: "M↓", json: "{}" } as const
const KIND_TONE = { ts: "text-sky-700 dark:text-sky-400", md: "text-violet-600 dark:text-violet-300", json: "text-amber-700 dark:text-amber-300" } as const

/** Custom tab bodies (a type glyph, and an unsaved dot in place of the ×); the tab element, its drag and its keys stay the dock's. */
const parts: DockParts = {
  ...DOCK_UI,
  renderTab: ({ panel, close, group }) => {
    const kind = panel.params?.kind
    const known = kind === "ts" || kind === "md" || kind === "json" ? kind : null
    return (
      <>
        {known ? <span className={\`font-mono text-[9.5px] font-semibold \${KIND_TONE[known]}\`}>{KIND_GLYPH[known]}</span> : null}
        <span data-dock-tab-title="">{panel.title}</span>
        {panel.params?.dirty === true ? (
          <span aria-label="unsaved" className="size-2 rounded-full bg-foreground/60" />
        ) : group.locked ? null : (
          <span
            data-dock-tab-close=""
            aria-hidden="true"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
          >
            ×
          </span>
        )}
      </>
    )
  },
}

const layout = createLayout({
  id: "veto",
  panels: [
    { id: "index.ts", component: "doc", params: { dirty: true, kind: "ts" } },
    { id: "README.md", component: "doc", params: { kind: "md" } },
    { id: "notes.md", component: "doc", params: { dirty: true, kind: "md" } },
  ],
})

/** beforeClose is asked before every close (×, middle-click, Delete, the menus, the API); false keeps the tab. The confirm comes from the overlay kit (its provider sits at the app root). */
export function CloseVeto() {
  const overlays = useOverlays()
  const beforeClose = (panel: PanelState) => (panel.params?.dirty === true ? overlays.confirm({ title: \`Close \${panel.title}?\`, description: "Unsaved changes will be lost.", confirmLabel: "Close", destructive: true }) : true)
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-veto" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={parts} beforeClose={beforeClose} label="Veto" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>n(()=>import(`./tabs-veto-CGTJol2G.js`),[]));function w({title:e}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var T=o({note:{component:w}}),E=i({orientation:`horizontal`,children:[{id:`narrow`,size:.45,panels:((e,t)=>Array.from({length:t},(t,n)=>({id:`${e}${n+1}`,component:`note`,title:`${e}${n+1}.ts`})))(`file`,14)},{panels:[{id:`other`,component:`note`,title:`Other group`}]}]});function D(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-overflow`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:T,defaultLayout:E,parts:s,label:`Overflow`})})]})}var O=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note } })

/** \`n\` note panels named \`\${prefix}1.ts\`, \`\${prefix}2.ts\`, … */
const notes = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => ({ id: \`\${prefix}\${i + 1}\`, component: "note", title: \`\${prefix}\${i + 1}.ts\` }))

const layout = createLayout({ orientation: "horizontal", children: [{ id: "narrow", size: 0.45, panels: notes("file", 14) }, { panels: [{ id: "other", component: "note", title: "Other group" }] }] })

/** Nothing to configure: a full strip scrolls (wheel or trackpad), keeps the active tab in view, and its chevron lists every tab. */
export function TabOverflow() {
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-overflow" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Overflow" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>n(()=>import(`./tabs-overflow-CwRHrish.js`),[]));function k({title:e}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var A=o({note:{component:k}}),j=(e,t)=>Array.from({length:t},(t,n)=>({id:`${e}${n+1}`,component:`note`,title:`${e}${n+1}.ts`})),M=i({orientation:`horizontal`,children:[{orientation:`vertical`,children:[{tabPosition:`top`,panels:j(`top`,3)},{tabPosition:`bottom`,panels:j(`bottom`,3)}]},{orientation:`vertical`,children:[{tabPosition:`left`,panels:j(`left`,3)},{tabPosition:`right`,panels:j(`right`,3)}]}]});function N(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-positions`,className:`h-[320px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:A,defaultLayout:M,parts:s,label:`Positions`})})]})}var P=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note } })

/** \`n\` note panels named \`\${prefix}1.ts\`, \`\${prefix}2.ts\`, … */
const notes = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => ({ id: \`\${prefix}\${i + 1}\`, component: "note", title: \`\${prefix}\${i + 1}.ts\` }))

// tabPosition per group: "top" (default), "bottom", or "left" / "right" for vertical tabs.
const layout = createLayout({
  orientation: "horizontal",
  children: [
    { orientation: "vertical", children: [{ tabPosition: "top", panels: notes("top", 3) }, { tabPosition: "bottom", panels: notes("bottom", 3) }] },
    { orientation: "vertical", children: [{ tabPosition: "left", panels: notes("left", 3) }, { tabPosition: "right", panels: notes("right", 3) }] },
  ],
})

export function TabPositions() {
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-positions" className="h-[320px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Positions" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>n(()=>import(`./tabs-positions-Cw1ySaGb.js`),[]));function F({title:e,params:t}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),t.dirty?`Unsaved changes: closing asks first.`:`Saved.`]})}var I=o({doc:{component:F,kind:`document`}}),L={ts:`TS`,md:`M↓`,json:`{}`},R={ts:`text-sky-700 dark:text-sky-400`,md:`text-violet-600 dark:text-violet-300`,json:`text-amber-700 dark:text-amber-300`},z={...s,renderTab:({panel:e,close:t,group:n})=>{let r=e.params?.kind,i=r===`ts`||r===`md`||r===`json`?r:null;return(0,u.jsxs)(u.Fragment,{children:[i?(0,u.jsx)(`span`,{className:`font-mono text-[9.5px] font-semibold ${R[i]}`,children:L[i]}):null,(0,u.jsx)(`span`,{"data-dock-tab-title":``,children:e.title}),e.params?.dirty===!0?(0,u.jsx)(`span`,{"aria-label":`unsaved`,className:`size-2 rounded-full bg-foreground/60`}):n.locked?null:(0,u.jsx)(`span`,{"data-dock-tab-close":``,"aria-hidden":`true`,onPointerDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),t()},children:`×`})]})}},B=i({panels:[{id:`main.ts`,component:`doc`,params:{kind:`ts`}},{id:`CHANGELOG.md`,component:`doc`,params:{kind:`md`,dirty:!0}},{id:`tsconfig.json`,component:`doc`,params:{kind:`json`}}]});function V(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-custom`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:I,defaultLayout:B,parts:z,label:`Custom`})})]})}var H=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockParts, type PanelProps } from "@kitora/dock"

type DocParams = { dirty?: boolean; kind?: "ts" | "md" | "json" }

/** A document panel that shows whether it has unsaved changes (stub: replace with your editor). */
function Doc({ title, params }: PanelProps<DocParams>) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      {params.dirty ? "Unsaved changes: closing asks first." : "Saved."}
    </div>
  )
}

const panels = defineDockPanels({ doc: { component: Doc, kind: "document" } })

/** Tiny glyph per document kind. */
const KIND_GLYPH = { ts: "TS", md: "M↓", json: "{}" } as const
const KIND_TONE = { ts: "text-sky-700 dark:text-sky-400", md: "text-violet-600 dark:text-violet-300", json: "text-amber-700 dark:text-amber-300" } as const

/** Custom tab bodies (a type glyph, and an unsaved dot in place of the ×); the tab element, its drag and its keys stay the dock's. */
const parts: DockParts = {
  ...DOCK_UI,
  renderTab: ({ panel, close, group }) => {
    const kind = panel.params?.kind
    const known = kind === "ts" || kind === "md" || kind === "json" ? kind : null
    return (
      <>
        {known ? <span className={\`font-mono text-[9.5px] font-semibold \${KIND_TONE[known]}\`}>{KIND_GLYPH[known]}</span> : null}
        <span data-dock-tab-title="">{panel.title}</span>
        {panel.params?.dirty === true ? (
          <span aria-label="unsaved" className="size-2 rounded-full bg-foreground/60" />
        ) : group.locked ? null : (
          <span
            data-dock-tab-close=""
            aria-hidden="true"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
          >
            ×
          </span>
        )}
      </>
    )
  },
}

const layout = createLayout({
  panels: [
    { id: "main.ts", component: "doc", params: { kind: "ts" } },
    { id: "CHANGELOG.md", component: "doc", params: { kind: "md", dirty: true } },
    { id: "tsconfig.json", component: "doc", params: { kind: "json" } },
  ],
})

/** renderTab replaces the inside of every tab; the group header carries Split right and a ⋯ menu (split down, lock, close group). */
export function CustomTabs() {
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-custom" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={parts} label="Custom" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>n(()=>import(`./tabs-custom-F-t_QAA9.js`),[]));function U({title:e}){return(0,u.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,u.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var W=o({note:{component:U}}),G=i({orientation:`horizontal`,children:[{id:`locked`,locked:!0,panels:[{id:`spec`,component:`note`,title:`spec.md`},{id:`plan`,component:`note`,title:`plan.md`}]},{id:`pinned`,keepWhenEmpty:!0,panels:[{id:`home`,component:`note`,title:`Home`,closable:!1,draggable:!1},{id:`scratch`,component:`note`,title:`scratch.ts`}]},{id:`empty`,keepWhenEmpty:!0,panels:[{id:`temp`,component:`note`,title:`temp.ts`}]}]});function K(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(`div`,{"data-testid":`tabs-locked`,className:`h-[180px] overflow-hidden rounded-md border`,children:(0,u.jsx)(a,{panels:W,defaultLayout:G,parts:s,label:`Locked`})})]})}var q=`import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
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
    // No reorder, no drops, no closing, no splitting from this group (its ⋯ menu unlocks it).
    { id: "locked", locked: true, panels: [{ id: "spec", component: "note", title: "spec.md" }, { id: "plan", component: "note", title: "plan.md" }] },
    // A pinned tab: never closes, never moves.
    { id: "pinned", keepWhenEmpty: true, panels: [{ id: "home", component: "note", title: "Home", closable: false, draggable: false }, { id: "scratch", component: "note", title: "scratch.ts" }] },
    // keepWhenEmpty: the group survives its last tab and shows a watermark.
    { id: "empty", keepWhenEmpty: true, panels: [{ id: "temp", component: "note", title: "temp.ts" }] },
  ],
})

export function LockedGroups() {
  return (
    <>
      <DockStyles />
      <div data-testid="tabs-locked" className="h-[180px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Locked" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>n(()=>import(`./tabs-locked-Dbmfpqm3.js`),[]));function J(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(e,{title:`Tab groups`,children:`A group is a stack of panels with a tab strip that follows the ARIA tabs pattern: one tab stop, arrows to move, Delete to close, F2 to rename. Tabs reorder by dragging along the strip with a mouse, a pen or a finger.`}),(0,u.jsx)(l,{n:1,title:`Reorder, close and the tab menu`,blurb:`Drag a tab along the strip to reorder it. The × or a middle-click closes; right-click for Close others, Close to the right, Close all, Split right / down and Rename. Double-click a tab (or F2) to rename it inline. Keyboard: Tab into the strip, ←/→ to switch, Ctrl+Shift+PageUp/PageDown to move the tab.`,code:h,children:(0,u.jsx)(m,{})}),(0,u.jsx)(l,{n:2,title:`Close veto for unsaved changes`,blurb:`index.ts and notes.md have unsaved changes. Closing either one, by any path, asks first; Cancel keeps the tab. README.md closes straight away.`,code:C,children:(0,u.jsx)(S,{})}),(0,u.jsx)(l,{n:3,title:`Overflow`,blurb:`Fourteen tabs in a narrow group: the strip scrolls (wheel or trackpad), the active tab stays in view, and the chevron lists every tab.`,code:O,children:(0,u.jsx)(D,{})}),(0,u.jsx)(l,{n:4,title:`Tab strip position`,blurb:`Per group: top, bottom, or left and right with vertical tabs. Arrow keys follow the strip's direction.`,code:P,children:(0,u.jsx)(N,{})}),(0,u.jsx)(l,{n:5,title:`Custom tabs and header actions`,blurb:`renderTab replaces the inside of every tab: here a type glyph and an unsaved dot in place of the ×. The header carries Split right and a ⋯ menu (split down, lock, close group).`,code:H,children:(0,u.jsx)(V,{})}),(0,u.jsx)(l,{n:6,title:`Locked groups, pinned tabs and watermarks`,blurb:`The left group is locked: its tabs do not move, close or accept drops (unlock it from ⋯). Home is pinned: no close, no drag. The right group keeps its place after its last tab closes and shows a watermark.`,code:q,children:(0,u.jsx)(K,{})})]})}export{J as component};