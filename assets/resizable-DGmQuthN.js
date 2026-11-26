import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{t as a}from"./split-view-B9nRmEfk.js";import{r as o}from"./parts-x1DgzehZ.js";var s=e({ResizableHorizontal:()=>u}),c=t(n(),1),l=i();function u(){let[e,t]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{className:`w-full`,children:[(0,l.jsx)(o,{}),(0,l.jsx)(`div`,{"data-dock":``,className:`h-56 overflow-hidden rounded-md border border-border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.3,.7],panes:[{minPx:140,maxPx:320},{minPx:200}],paneLabels:[`Files`,`Editor`],onSizesChange:t,children:[(0,l.jsx)(`div`,{className:`grid size-full place-items-center text-xs`,children:`Files`}),(0,l.jsx)(`div`,{className:`grid size-full place-items-center bg-muted/40 text-xs`,children:`Editor`})]})}),(0,l.jsx)(`p`,{className:`mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums`,children:e?`sizes ${e.sizes.map(e=>`${Math.round(e*100)}%`).join(` · `)}`:`Drag the sash, or focus it and press the arrow keys.`})]})}var d=e({ResizableNestedCollapsible:()=>f});function f(){return(0,l.jsxs)(`div`,{className:`w-full`,children:[(0,l.jsx)(o,{}),(0,l.jsx)(`div`,{"data-dock":``,className:`h-64 overflow-hidden rounded-md border border-border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.25,.75],panes:[{minPx:160,collapsible:!0,collapsedPx:0},{minPx:240}],paneLabels:[`Sidebar`,`Main`],children:[(0,l.jsx)(`div`,{className:`grid size-full place-items-center text-xs`,children:`Sidebar`}),(0,l.jsxs)(a,{orientation:`vertical`,defaultSizes:[.65,.35],panes:[{minPx:80},{minPx:60,collapsible:!0,collapsedPx:0}],paneLabels:[`Editor`,`Terminal`],children:[(0,l.jsx)(`div`,{className:`grid size-full place-items-center bg-muted/40 text-xs`,children:`Editor`}),(0,l.jsx)(`div`,{className:`grid size-full place-items-center font-mono text-xs`,children:`Terminal`})]})]})})]})}var p=`import { useState } from "react"
import { DockStyles, SplitView, type SplitChange } from "@kitora/dock"

// Two panes and a sash: drag it, or focus it and use the arrow keys (Home and End jump to the limits,
// Enter collapses a collapsible pane). Sizes are fractions; \`minPx\` / \`maxPx\` hold in pixels at any width.
// \`onSizesChange\` fires once per drag, never per pointer move. The dock styles draw the sash.
export function ResizableHorizontal() {
  const [change, setChange] = useState<SplitChange | null>(null)
  return (
    <div className="w-full">
      <DockStyles />
      <div data-dock="" className="h-56 overflow-hidden rounded-md border border-border">
        <SplitView orientation="horizontal" defaultSizes={[0.3, 0.7]} panes={[{ minPx: 140, maxPx: 320 }, { minPx: 200 }]} paneLabels={["Files", "Editor"]} onSizesChange={setChange}>
          <div className="grid size-full place-items-center text-xs">Files</div>
          <div className="grid size-full place-items-center bg-muted/40 text-xs">Editor</div>
        </SplitView>
      </div>
      <p className="mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums">{change ? \`sizes \${change.sizes.map((s) => \`\${Math.round(s * 100)}%\`).join(" · ")}\` : "Drag the sash, or focus it and press the arrow keys."}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>r(()=>import(`./horizontal-DT2FJC3E.js`),[]));var m=`import { DockStyles, SplitView } from "@kitora/dock"

// A vertical split inside a horizontal one: an editor over a terminal next to a sidebar. \`collapsible\`
// panes fold to \`collapsedPx\` when dragged past their minimum (or with Enter on the sash), and a
// double-click on a sash shares the space evenly.
export function ResizableNestedCollapsible() {
  return (
    <div className="w-full">
      <DockStyles />
      <div data-dock="" className="h-64 overflow-hidden rounded-md border border-border">
        <SplitView orientation="horizontal" defaultSizes={[0.25, 0.75]} panes={[{ minPx: 160, collapsible: true, collapsedPx: 0 }, { minPx: 240 }]} paneLabels={["Sidebar", "Main"]}>
          <div className="grid size-full place-items-center text-xs">Sidebar</div>
          <SplitView orientation="vertical" defaultSizes={[0.65, 0.35]} panes={[{ minPx: 80 }, { minPx: 60, collapsible: true, collapsedPx: 0 }]} paneLabels={["Editor", "Terminal"]}>
            <div className="grid size-full place-items-center bg-muted/40 text-xs">Editor</div>
            <div className="grid size-full place-items-center font-mono text-xs">Terminal</div>
          </SplitView>
        </SplitView>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>r(()=>import(`./nested-collapsible-CkY5kpHg.js`),[]));var h={"./demos/resizable/horizontal.tsx":s,"./demos/resizable/nested-collapsible.tsx":d},g={"./demos/resizable/horizontal.tsx":p,"./demos/resizable/nested-collapsible.tsx":m};export{h as modules,g as sources};