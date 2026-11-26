import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{t as a}from"./split-view-B76XE1hO.js";import{r as o}from"./parts-C6pvJFbp.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";var c=e(n(),1),l=i();function u({label:e,hint:t,tone:n=`bg-background`,testId:r}){return(0,l.jsxs)(`div`,{"data-testid":r,className:`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] ${n}`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:e}),t?(0,l.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t}):null]})}function d({change:e,testId:t}){return(0,l.jsx)(`p`,{"data-testid":t,className:`mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums`,children:e?`sizes ${e.sizes.map(e=>`${Math.round(e*100)}%`).join(` · `)}${e.collapsed.some(Boolean)?` · collapsed ${e.collapsed.map(e=>e?`yes`:`no`).join(` · `)}`:``} · at ${Math.round(e.basisPx)}px`:`Drag a sash, or focus one and press the arrow keys.`})}function f(){let[e,t]=(0,c.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(`div`,{"data-dock":``,"data-testid":`split-alone`,className:`h-[220px] overflow-hidden rounded-md border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.25,.5,.25],panes:[{minPx:120,maxPx:320},{minPx:200},{minPx:120}],paneLabels:[`Left`,`Middle`,`Right`],onSizesChange:t,children:[(0,l.jsx)(u,{label:`Left`,hint:`120–320 px`}),(0,l.jsx)(u,{label:`Middle`,hint:`min 200 px`,tone:`bg-muted/40`}),(0,l.jsx)(u,{label:`Right`,hint:`min 120 px`})]})}),(0,l.jsx)(d,{change:e,testId:`split-alone-sizes`})]})}var p=`import { useState } from "react"
import { DockStyles, SplitView, type SplitChange } from "@kitora/dock"

/** A labelled pane body. */
function Pane({ label, hint, tone = "bg-background", testId }: { readonly label: string; readonly hint?: string; readonly tone?: string; readonly testId?: string }) {
  return (
    <div data-testid={testId} className={\`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] \${tone}\`}>
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

/** The last committed sizes as percentages (onSizesChange fires once per drag, never per pointer move). */
function SizesLine({ change, testId }: { readonly change: SplitChange | null; readonly testId: string }) {
  return (
    <p data-testid={testId} className="mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums">
      {change ? \`sizes \${change.sizes.map((s) => \`\${Math.round(s * 100)}%\`).join(" · ")}\${change.collapsed.some(Boolean) ? \` · collapsed \${change.collapsed.map((c) => (c ? "yes" : "no")).join(" · ")}\` : ""} · at \${Math.round(change.basisPx)}px\` : "Drag a sash, or focus one and press the arrow keys."}
    </p>
  )
}

/** SplitView works without a dock: px limits over stored fractions, cascading drags, double-click to share, a keyboard-operable splitter. */
export function ThreeColumns() {
  const [change, setChange] = useState<SplitChange | null>(null)
  return (
    <>
      <DockStyles />
      <div data-dock="" data-testid="split-alone" className="h-[220px] overflow-hidden rounded-md border">
        <SplitView orientation="horizontal" defaultSizes={[0.25, 0.5, 0.25]} panes={[{ minPx: 120, maxPx: 320 }, { minPx: 200 }, { minPx: 120 }]} paneLabels={["Left", "Middle", "Right"]} onSizesChange={setChange}>
          <Pane label="Left" hint="120–320 px" />
          <Pane label="Middle" hint="min 200 px" tone="bg-muted/40" />
          <Pane label="Right" hint="min 120 px" />
        </SplitView>
      </div>
      <SizesLine change={change} testId="split-alone-sizes" />
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>r(()=>import(`./splits-alone-Czcnp1Dn.js`),[]));function m({label:e,hint:t,tone:n=`bg-background`,testId:r}){return(0,l.jsxs)(`div`,{"data-testid":r,className:`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] ${n}`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:e}),t?(0,l.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t}):null]})}function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(`div`,{"data-dock":``,className:`h-[260px] overflow-hidden rounded-md border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.3,.7],paneLabels:[`Side`,`Work area`],children:[(0,l.jsx)(m,{label:`Side`}),(0,l.jsxs)(a,{orientation:`vertical`,defaultSizes:[.6,.4],paneLabels:[`Editors`,`Panel`],children:[(0,l.jsxs)(a,{orientation:`horizontal`,paneLabels:[`Editor 1`,`Editor 2`,`Editor 3`],children:[(0,l.jsx)(m,{label:`Editor 1`,tone:`bg-muted/40`}),(0,l.jsx)(m,{label:`Editor 2`,tone:`bg-muted/40`}),(0,l.jsx)(m,{label:`Editor 3`,tone:`bg-muted/40`})]}),(0,l.jsx)(m,{label:`Panel`})]})]})})]})}var g=`import { DockStyles, SplitView } from "@kitora/dock"

/** A labelled pane body. */
function Pane({ label, hint, tone = "bg-background", testId }: { readonly label: string; readonly hint?: string; readonly tone?: string; readonly testId?: string }) {
  return (
    <div data-testid={testId} className={\`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] \${tone}\`}>
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

/** Splits nest to any depth, alternating direction; each is n-ary, so three editors side by side are one row. */
export function NestedSplits() {
  return (
    <>
      <DockStyles />
      <div data-dock="" className="h-[260px] overflow-hidden rounded-md border">
        <SplitView orientation="horizontal" defaultSizes={[0.3, 0.7]} paneLabels={["Side", "Work area"]}>
          <Pane label="Side" />
          <SplitView orientation="vertical" defaultSizes={[0.6, 0.4]} paneLabels={["Editors", "Panel"]}>
            <SplitView orientation="horizontal" paneLabels={["Editor 1", "Editor 2", "Editor 3"]}>
              <Pane label="Editor 1" tone="bg-muted/40" />
              <Pane label="Editor 2" tone="bg-muted/40" />
              <Pane label="Editor 3" tone="bg-muted/40" />
            </SplitView>
            <Pane label="Panel" />
          </SplitView>
        </SplitView>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>r(()=>import(`./splits-nested-BnBZDkdI.js`),[]));function _({label:e,hint:t,tone:n=`bg-background`,testId:r}){return(0,l.jsxs)(`div`,{"data-testid":r,className:`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] ${n}`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:e}),t?(0,l.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t}):null]})}function v({change:e,testId:t}){return(0,l.jsx)(`p`,{"data-testid":t,className:`mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums`,children:e?`sizes ${e.sizes.map(e=>`${Math.round(e*100)}%`).join(` · `)}${e.collapsed.some(Boolean)?` · collapsed ${e.collapsed.map(e=>e?`yes`:`no`).join(` · `)}`:``} · at ${Math.round(e.basisPx)}px`:`Drag a sash, or focus one and press the arrow keys.`})}function y(){let[e,t]=(0,c.useState)([!1,!1]),[n,r]=(0,c.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(`div`,{"data-dock":``,"data-testid":`split-rail`,className:`h-[220px] overflow-hidden rounded-md border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.25,.75],collapsed:e,onSizesChange:e=>{t([...e.collapsed]),r(e)},panes:[{minPx:160,collapsible:!0,collapsedPx:40},{minPx:200}],paneLabels:[`Side bar`,`Editor`],children:[e[0]?(0,l.jsxs)(`div`,{"data-testid":`rail`,className:`flex size-full flex-col items-center gap-3 bg-muted/40 pt-3 text-[13px] text-muted-foreground`,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,children:`≡`}),(0,l.jsx)(`span`,{"aria-hidden":`true`,children:`⌕`}),(0,l.jsx)(`span`,{"aria-hidden":`true`,children:`⎇`})]}):(0,l.jsx)(_,{label:`Side bar`,hint:`drag me closed`,tone:`bg-muted/40`,testId:`side`}),(0,l.jsx)(_,{label:`Editor`})]})}),(0,l.jsx)(v,{change:n,testId:`split-rail-sizes`})]})}var b=`import { useState } from "react"
import { DockStyles, SplitView, type SplitChange } from "@kitora/dock"

/** A labelled pane body. */
function Pane({ label, hint, tone = "bg-background", testId }: { readonly label: string; readonly hint?: string; readonly tone?: string; readonly testId?: string }) {
  return (
    <div data-testid={testId} className={\`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] \${tone}\`}>
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

/** The last committed sizes as percentages (onSizesChange fires once per drag, never per pointer move). */
function SizesLine({ change, testId }: { readonly change: SplitChange | null; readonly testId: string }) {
  return (
    <p data-testid={testId} className="mt-1.5 font-mono text-[11px] text-muted-foreground tabular-nums">
      {change ? \`sizes \${change.sizes.map((s) => \`\${Math.round(s * 100)}%\`).join(" · ")}\${change.collapsed.some(Boolean) ? \` · collapsed \${change.collapsed.map((c) => (c ? "yes" : "no")).join(" · ")}\` : ""} · at \${Math.round(change.basisPx)}px\` : "Drag a sash, or focus one and press the arrow keys."}
    </p>
  )
}

/** Past half of its 160 px minimum the side bar snaps to a 40 px rail; drag out (or Enter on the focused sash) to reopen it. */
export function CollapseToRail() {
  const [collapsed, setCollapsed] = useState<readonly boolean[]>([false, false])
  const [change, setChange] = useState<SplitChange | null>(null)
  return (
    <>
      <DockStyles />
      <div data-dock="" data-testid="split-rail" className="h-[220px] overflow-hidden rounded-md border">
        <SplitView
          orientation="horizontal"
          defaultSizes={[0.25, 0.75]}
          collapsed={collapsed}
          onSizesChange={(next) => {
            setCollapsed([...next.collapsed])
            setChange(next)
          }}
          panes={[{ minPx: 160, collapsible: true, collapsedPx: 40 }, { minPx: 200 }]}
          paneLabels={["Side bar", "Editor"]}
        >
          {collapsed[0] ? (
            <div data-testid="rail" className="flex size-full flex-col items-center gap-3 bg-muted/40 pt-3 text-[13px] text-muted-foreground">
              <span aria-hidden="true">≡</span>
              <span aria-hidden="true">⌕</span>
              <span aria-hidden="true">⎇</span>
            </div>
          ) : (
            <Pane label="Side bar" hint="drag me closed" tone="bg-muted/40" testId="side" />
          )}
          <Pane label="Editor" />
        </SplitView>
      </div>
      <SizesLine change={change} testId="split-rail-sizes" />
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./splits-rail-C8WYSl8f.js`),[]));function x({label:e,hint:t,tone:n=`bg-background`,testId:r}){return(0,l.jsxs)(`div`,{"data-testid":r,className:`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] ${n}`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:e}),t?(0,l.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t}):null]})}function S(){let[e,t]=(0,c.useState)(100);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsxs)(`label`,{className:`mb-2 flex items-center gap-2 text-[12px] text-muted-foreground`,children:[`Container width`,(0,l.jsx)(`input`,{type:`range`,min:20,max:100,value:e,onChange:e=>t(Number(e.target.value)),"aria-label":`Container width`,"data-testid":`priority-width`,className:`w-48`}),(0,l.jsxs)(`span`,{className:`tabular-nums`,children:[e,`%`]})]}),(0,l.jsx)(`div`,{style:{width:`${e}%`},children:(0,l.jsx)(`div`,{"data-dock":``,"data-testid":`split-priority`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.2,.6,.2],panes:[{priority:`low`,minPx:100},{priority:`high`,minPx:100},{priority:`low`,minPx:100}],paneLabels:[`Explorer`,`Editor`,`Outline`],children:[(0,l.jsx)(x,{label:`Explorer`,hint:`low`,tone:`bg-muted/40`}),(0,l.jsx)(x,{label:`Editor`,hint:`high`}),(0,l.jsx)(x,{label:`Outline`,hint:`low`,tone:`bg-muted/40`})]})})})]})}var C=`import { useState } from "react"
import { DockStyles, SplitView } from "@kitora/dock"

/** A labelled pane body. */
function Pane({ label, hint, tone = "bg-background", testId }: { readonly label: string; readonly hint?: string; readonly tone?: string; readonly testId?: string }) {
  return (
    <div data-testid={testId} className={\`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] \${tone}\`}>
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

/** Low-priority side bars keep their px while the high-priority editor takes a container resize; below the sum of the minimums every pane shrinks in proportion. */
export function ResizePriority() {
  const [width, setWidth] = useState(100)
  return (
    <>
      <DockStyles />
      <label className="mb-2 flex items-center gap-2 text-[12px] text-muted-foreground">
        Container width
        <input type="range" min={20} max={100} value={width} onChange={(e) => setWidth(Number(e.target.value))} aria-label="Container width" data-testid="priority-width" className="w-48" />
        <span className="tabular-nums">{width}%</span>
      </label>
      <div style={{ width: \`\${width}%\` }}>
        <div data-dock="" data-testid="split-priority" className="h-[160px] overflow-hidden rounded-md border">
          <SplitView orientation="horizontal" defaultSizes={[0.2, 0.6, 0.2]} panes={[{ priority: "low", minPx: 100 }, { priority: "high", minPx: 100 }, { priority: "low", minPx: 100 }]} paneLabels={["Explorer", "Editor", "Outline"]}>
            <Pane label="Explorer" hint="low" tone="bg-muted/40" />
            <Pane label="Editor" hint="high" />
            <Pane label="Outline" hint="low" tone="bg-muted/40" />
          </SplitView>
        </div>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./splits-priority-hN28xr3R.js`),[]));function w({label:e,hint:t,tone:n=`bg-background`,testId:r}){return(0,l.jsxs)(`div`,{"data-testid":r,className:`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] ${n}`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:e}),t?(0,l.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t}):null]})}function T(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,"data-testid":`toggle-hidden`,children:e?`Hide`:`Show`}),(0,l.jsx)(`div`,{hidden:!e,children:(0,l.jsx)(`div`,{"data-dock":``,"data-testid":`split-hidden`,className:`h-[120px] overflow-hidden rounded-md border`,children:(0,l.jsxs)(a,{orientation:`horizontal`,defaultSizes:[.3,.7],paneLabels:[`Thirty`,`Seventy`],children:[(0,l.jsx)(w,{label:`30 %`,tone:`bg-muted/40`}),(0,l.jsx)(w,{label:`70 %`})]})})})]})}var E=`import { useState } from "react"
import { DockStyles, SplitView } from "@kitora/dock"

/** A labelled pane body. */
function Pane({ label, hint, tone = "bg-background", testId }: { readonly label: string; readonly hint?: string; readonly tone?: string; readonly testId?: string }) {
  return (
    <div data-testid={testId} className={\`flex size-full flex-col items-center justify-center gap-0.5 overflow-hidden p-2 text-center text-[12px] \${tone}\`}>
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

/** Mounted under display: none the split has no size: it renders its fractions as flex-basis percentages, then solved px once a ResizeObserver reports a real size. */
export function MountedHidden() {
  const [shown, setShown] = useState(false)
  return (
    <>
      <DockStyles />
      <button type="button" onClick={() => setShown((s) => !s)} className="mb-2 h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" data-testid="toggle-hidden">
        {shown ? "Hide" : "Show"}
      </button>
      <div hidden={!shown}>
        <div data-dock="" data-testid="split-hidden" className="h-[120px] overflow-hidden rounded-md border">
          <SplitView orientation="horizontal" defaultSizes={[0.3, 0.7]} paneLabels={["Thirty", "Seventy"]}>
            <Pane label="30 %" tone="bg-muted/40" />
            <Pane label="70 %" />
          </SplitView>
        </div>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./splits-hidden-wpW-F42C.js`),[]));function D(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Splits`,children:"`SplitView` is the kit's one splitter: the dock renders every split through it, and it works on its own. Sizes are stored as fractions and solved to pixels against px minimums and maximums, so a side bar keeps a useful width at any window size. Every sash is a keyboard-operable window splitter."}),(0,l.jsx)(s,{n:1,title:`SplitView on its own`,blurb:`Three panes with px limits: the left one stays between 120 and 320 px. Drag a sash past a neighbour's limit and the drag cascades to the next pane. Double-click a sash to share the two neighbours' space equally. Focus a sash (Tab) and use ←/→, Shift for bigger steps, Home and End for the left pane's min and max.`,code:p,children:(0,l.jsx)(f,{})}),(0,l.jsx)(s,{n:2,title:`Nested rows and columns`,blurb:`Splits nest to any depth, alternating direction. Each split is n-ary: two editors side by side are one row, not a tree of pairs.`,code:g,children:(0,l.jsx)(h,{})}),(0,l.jsx)(s,{n:3,title:`Collapse to a rail`,blurb:`The side bar is collapsible with a 40 px collapsed size. Drag its sash below half of its 160 px minimum and it snaps to the rail; drag out and it reopens at its minimum. On a focused sash, Enter toggles it.`,code:b,children:(0,l.jsx)(y,{})}),(0,l.jsx)(s,{n:4,title:`Resize priority and tight containers`,blurb:`Narrow the container with the slider. The side bars are low priority, so they keep their pixels while the high-priority editor takes the change; once the editor is at its minimum, the side bars give way. Below the sum of the minimums, every pane shrinks in proportion: no overlap, and they recover when the container grows again. Layout follows the container through a ResizeObserver, not window resize events.`,code:C,children:(0,l.jsx)(S,{})}),(0,l.jsx)(s,{n:5,title:`Mounted hidden`,blurb:`This split mounts inside a hidden element, where it has no size. It renders its fractions as percentages, then settles to solved pixels when shown: 30 / 70, as stored.`,code:E,children:(0,l.jsx)(T,{})})]})}export{D as component};