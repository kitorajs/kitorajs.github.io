import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{E as a,c as o,g as s,m as c,o as l,s as u,t as d}from"./dock-HBvjciWi.js";import{t as f}from"./panels-COzw_Krp.js";import{n as p,r as m}from"./parts-Qzyy3T3e.js";import"./kit-gallery-Atvibnty.js";import{t as h}from"./example-B8EaWveR.js";var g=e(n(),1),_=i();function v({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function y({params:e}){let[t,n]=(0,g.useState)(e.start);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 text-[12.5px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 hover:bg-muted`,onClick:()=>n(e=>e+1),children:`+1`}),(0,_.jsx)(`span`,{className:`tabular-nums`,"data-testid":`counter-value`,children:t})]})}var b=f({note:{component:v},counter:{component:y,title:`Counter`}});function x(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(`div`,{"data-testid":`api-jsx`,className:`h-[180px] overflow-hidden rounded-md border`,children:(0,_.jsx)(d,{panels:b,parts:p,label:`Declared`,children:(0,_.jsxs)(o,{orientation:`horizontal`,children:[(0,_.jsx)(l,{size:.3,minPx:120,children:(0,_.jsx)(u,{id:`inbox`,component:`note`,title:`Inbox`})}),(0,_.jsxs)(l,{children:[(0,_.jsx)(u,{id:`draft`,component:`note`,title:`Draft`}),(0,_.jsx)(u,{id:`count`,component:`counter`,params:{start:5}})]})]})})})]})}var S=`import { useState } from "react"
import { defineDockPanels, Dock, DOCK_UI, DockGroup, DockPanel, DockSplit, DockStyles, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type CounterParams = { start: number }

/** A panel with typed params: \`start\` must be a number wherever a counter is added. */
function Counter({ params }: PanelProps<CounterParams>) {
  const [n, setN] = useState(params.start)
  return (
    <div className="flex items-center gap-2 p-3 text-[12.5px]">
      <button type="button" className="h-6 rounded border px-2 hover:bg-muted" onClick={() => setN((x) => x + 1)}>
        +1
      </button>
      <span className="tabular-nums" data-testid="counter-value">
        {n}
      </span>
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, counter: { component: Counter, title: "Counter" } })

/** DockSplit, DockGroup and DockPanel describe the default layout (what reset() returns to) and render nothing themselves; a saved or controlled layout wins. */
export function DeclaredInJsx() {
  return (
    <>
      <DockStyles />
      <div data-testid="api-jsx" className="h-[180px] overflow-hidden rounded-md border">
        <Dock panels={panels} parts={DOCK_UI} label="Declared">
          <DockSplit orientation="horizontal">
            <DockGroup size={0.3} minPx={120}>
              <DockPanel id="inbox" component="note" title="Inbox" />
            </DockGroup>
            <DockGroup>
              <DockPanel id="draft" component="note" title="Draft" />
              <DockPanel id="count" component="counter" params={{ start: 5 }} />
            </DockGroup>
          </DockSplit>
        </Dock>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./api-jsx-DpxOn0QH.js`),[]));function C({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function w({params:e}){let[t,n]=(0,g.useState)(e.start);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 text-[12.5px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 hover:bg-muted`,onClick:()=>n(e=>e+1),children:`+1`}),(0,_.jsx)(`span`,{className:`tabular-nums`,"data-testid":`counter-value`,children:t})]})}var T=f({note:{component:C},counter:{component:w,title:`Counter`}}),E=s({orientation:`horizontal`,children:[{id:`left`,size:.3,minPx:120,panels:[{id:`inbox`,component:`note`,title:`Inbox`}]},{id:`main`,panels:[{id:`draft`,component:`note`,title:`Draft`},{id:`count`,component:`counter`,params:{start:5}}]}]});function D(){let[e,t]=(0,g.useState)(E),[n,r]=(0,g.useState)([]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(`div`,{"data-testid":`api-data`,className:`h-[180px] overflow-hidden rounded-md border`,children:(0,_.jsx)(d,{panels:T,layout:e,onLayoutChange:(e,n)=>{t(e),r(e=>[n.type,...e].slice(0,8))},parts:p,label:`Controlled`})}),(0,_.jsx)(`p`,{"data-testid":`api-log`,className:`mt-1.5 font-mono text-[11px] text-muted-foreground`,children:n.length?n.join(` · `):`No actions yet: switch a tab, drag a sash or reorder.`})]})}var O=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockLayout, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type CounterParams = { start: number }

/** A panel with typed params: \`start\` must be a number wherever a counter is added. */
function Counter({ params }: PanelProps<CounterParams>) {
  const [n, setN] = useState(params.start)
  return (
    <div className="flex items-center gap-2 p-3 text-[12.5px]">
      <button type="button" className="h-6 rounded border px-2 hover:bg-muted" onClick={() => setN((x) => x + 1)}>
        +1
      </button>
      <span className="tabular-nums" data-testid="counter-value">
        {n}
      </span>
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, counter: { component: Counter, title: "Counter" } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.3, minPx: 120, panels: [{ id: "inbox", component: "note", title: "Inbox" }] },
    { id: "main", panels: [{ id: "draft", component: "note", title: "Draft" }, { id: "count", component: "counter", params: { start: 5 } }] },
  ],
})

/** Controlled: the layout is your state, and every change arrives with the action that made it (newest first). */
export function DrivenAsData() {
  const [controlled, setControlled] = useState<DockLayout>(layout)
  const [log, setLog] = useState<readonly string[]>([])
  return (
    <>
      <DockStyles />
      <div data-testid="api-data" className="h-[180px] overflow-hidden rounded-md border">
        <Dock
          panels={panels}
          layout={controlled}
          onLayoutChange={(next, action) => {
            setControlled(next)
            setLog((l) => [action.type, ...l].slice(0, 8))
          }}
          parts={DOCK_UI}
          label="Controlled"
        />
      </div>
      <p data-testid="api-log" className="mt-1.5 font-mono text-[11px] text-muted-foreground">
        {log.length ? log.join(" · ") : "No actions yet: switch a tab, drag a sash or reorder."}
      </p>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./api-data-DLj2yru_.js`),[]));function k({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function A({params:e}){let[t,n]=(0,g.useState)(e.start);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 text-[12.5px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 hover:bg-muted`,onClick:()=>n(e=>e+1),children:`+1`}),(0,_.jsx)(`span`,{className:`tabular-nums`,"data-testid":`counter-value`,children:t})]})}var j=f({note:{component:k},counter:{component:A,title:`Counter`}}),M=s({orientation:`horizontal`,children:[{id:`left`,size:.3,minPx:120,panels:[{id:`inbox`,component:`note`,title:`Inbox`}]},{id:`main`,panels:[{id:`draft`,component:`note`,title:`Draft`},{id:`count`,component:`counter`,params:{start:5}}]}]}),N=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function P(){let[e,t]=(0,g.useState)(null),[n,r]=(0,g.useState)(0);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsxs)(`div`,{className:`mb-2 flex flex-wrap gap-1.5`,children:[(0,_.jsx)(`button`,{type:`button`,className:N,"data-action":`add-counter`,onClick:()=>{let t=n+1;r(t),e?.addPanel({id:`counter-${t}`,component:`counter`,title:`Counter ${t}`,params:{start:t*10}})},children:`Add counter`}),(0,_.jsx)(`button`,{type:`button`,className:N,onClick:()=>e?.addPanel({id:`note-${n}`,component:`note`,title:`Bottom note`},{type:`root`,side:`bottom`}),children:`Dock a note at the bottom`}),(0,_.jsx)(`button`,{type:`button`,className:N,onClick:()=>e?.split(`draft`,`right`),children:`Split Draft right`}),(0,_.jsx)(`button`,{type:`button`,className:N,onClick:()=>e?.movePanel(`inbox`,{type:`group`,group:`main`,index:0}),children:`Move Inbox into the main group`}),(0,_.jsx)(`button`,{type:`button`,className:N,onClick:()=>e?.reset(),children:`Reset`})]}),(0,_.jsx)(`div`,{"data-testid":`api-imperative`,className:`h-[200px] overflow-hidden rounded-md border`,children:(0,_.jsx)(d,{ref:t,panels:j,defaultLayout:M,parts:p,label:`Imperative`})})]})}var F=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type CounterParams = { start: number }

/** A panel with typed params: \`start\` must be a number wherever a counter is added. */
function Counter({ params }: PanelProps<CounterParams>) {
  const [n, setN] = useState(params.start)
  return (
    <div className="flex items-center gap-2 p-3 text-[12.5px]">
      <button type="button" className="h-6 rounded border px-2 hover:bg-muted" onClick={() => setN((x) => x + 1)}>
        +1
      </button>
      <span className="tabular-nums" data-testid="counter-value">
        {n}
      </span>
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, counter: { component: Counter, title: "Counter" } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.3, minPx: 120, panels: [{ id: "inbox", component: "note", title: "Inbox" }] },
    { id: "main", panels: [{ id: "draft", component: "note", title: "Draft" }, { id: "count", component: "counter", params: { start: 5 } }] },
  ],
})

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** Calls through the dock's ref; addPanel checks params against the component's own props (a counter needs { start: number }). */
export function ImperativeApi() {
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [added, setAdded] = useState(0)
  return (
    <>
      <DockStyles />
      <div className="mb-2 flex flex-wrap gap-1.5">
        <button
          type="button"
          className={BUTTON}
          data-action="add-counter"
          onClick={() => {
            const n = added + 1
            setAdded(n)
            api?.addPanel({ id: \`counter-\${n}\`, component: "counter", title: \`Counter \${n}\`, params: { start: n * 10 } })
          }}
        >
          Add counter
        </button>
        <button type="button" className={BUTTON} onClick={() => api?.addPanel({ id: \`note-\${added}\`, component: "note", title: "Bottom note" }, { type: "root", side: "bottom" })}>
          Dock a note at the bottom
        </button>
        <button type="button" className={BUTTON} onClick={() => api?.split("draft", "right")}>
          Split Draft right
        </button>
        <button type="button" className={BUTTON} onClick={() => api?.movePanel("inbox", { type: "group", group: "main", index: 0 })}>
          Move Inbox into the main group
        </button>
        <button type="button" className={BUTTON} onClick={() => api?.reset()}>
          Reset
        </button>
      </div>
      <div data-testid="api-imperative" className="h-[200px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Imperative" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>r(()=>import(`./api-imperative-CJpRc8yF.js`),[]));function I({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function L({params:e}){let[t,n]=(0,g.useState)(e.start);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 text-[12.5px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 hover:bg-muted`,onClick:()=>n(e=>e+1),children:`+1`}),(0,_.jsx)(`span`,{className:`tabular-nums`,"data-testid":`counter-value`,children:t})]})}var R=f({note:{component:I},counter:{component:L,title:`Counter`}}),z=s({orientation:`horizontal`,children:[{id:`left`,size:.3,minPx:120,panels:[{id:`inbox`,component:`note`,title:`Inbox`}]},{id:`main`,panels:[{id:`draft`,component:`note`,title:`Draft`},{id:`count`,component:`counter`,params:{start:5}}]}]});function B(){let[e,t]=(0,g.useState)([]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(`div`,{"data-testid":`api-veto`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,_.jsx)(d,{panels:R,defaultLayout:z,parts:p,label:`Guarded`,onAction:e=>{let n=e.type===`close-panel`&&e.panel===`inbox`||e.type===`move-panel`&&e.to.type===`group`&&e.to.group===`left`&&e.panel!==`inbox`;return n&&t(t=>[`${e.type} ${e.panel}`,...t].slice(0,4)),!n}})}),(0,_.jsx)(`p`,{"data-testid":`api-vetoed`,className:`mt-1.5 font-mono text-[11px] text-muted-foreground`,children:e.length?`vetoed: ${e.join(` · `)}`:`Nothing vetoed yet.`})]})}var V=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockAction, type PanelProps } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type CounterParams = { start: number }

/** A panel with typed params: \`start\` must be a number wherever a counter is added. */
function Counter({ params }: PanelProps<CounterParams>) {
  const [n, setN] = useState(params.start)
  return (
    <div className="flex items-center gap-2 p-3 text-[12.5px]">
      <button type="button" className="h-6 rounded border px-2 hover:bg-muted" onClick={() => setN((x) => x + 1)}>
        +1
      </button>
      <span className="tabular-nums" data-testid="counter-value">
        {n}
      </span>
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, counter: { component: Counter, title: "Counter" } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.3, minPx: 120, panels: [{ id: "inbox", component: "note", title: "Inbox" }] },
    { id: "main", panels: [{ id: "draft", component: "note", title: "Draft" }, { id: "count", component: "counter", params: { start: 5 } }] },
  ],
})

/** onAction sees every action, from a gesture or a call, before it applies; returning false vetoes it. */
export function VetoActions() {
  const [vetoed, setVetoed] = useState<readonly string[]>([])
  const onAction = (action: DockAction) => {
    // Inbox never closes, and nothing else moves into the left group.
    const refused = (action.type === "close-panel" && action.panel === "inbox") || (action.type === "move-panel" && action.to.type === "group" && action.to.group === "left" && action.panel !== "inbox")
    if (refused) setVetoed((v) => [\`\${action.type} \${action.panel}\`, ...v].slice(0, 4))
    return !refused
  }
  return (
    <>
      <DockStyles />
      <div data-testid="api-veto" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Guarded" onAction={onAction} />
      </div>
      <p data-testid="api-vetoed" className="mt-1.5 font-mono text-[11px] text-muted-foreground">
        {vetoed.length ? \`vetoed: \${vetoed.join(" · ")}\` : "Nothing vetoed yet."}
      </p>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>r(()=>import(`./api-veto-BNO_16Yj.js`),[]));function H({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}function U({params:e}){let[t,n]=(0,g.useState)(e.start);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 text-[12.5px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 hover:bg-muted`,onClick:()=>n(e=>e+1),children:`+1`}),(0,_.jsx)(`span`,{className:`tabular-nums`,"data-testid":`counter-value`,children:t})]})}var W=f({note:{component:H},counter:{component:U,title:`Counter`}}),G=s({orientation:`horizontal`,children:[{id:`left`,size:.3,minPx:120,panels:[{id:`inbox`,component:`note`,title:`Inbox`}]},{id:`main`,panels:[{id:`draft`,component:`note`,title:`Draft`},{id:`count`,component:`counter`,params:{start:5}}]}]}),K=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function q(){let[e,t]=(0,g.useState)(null),[n,r]=(0,g.useState)(``),i=t=>{if(!e)return;let n=e.load(t);r(`${n.outcome}${n.messages.length?`: ${n.messages.join(`; `)}`:``}`)},a=()=>{let t=e?.save()??G,n=t.panels.draft;return JSON.stringify({...t,panels:{...t.panels,...n?{draft:{...n,component:`chart-v1`}}:{}}})};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsxs)(`div`,{className:`mb-2 flex flex-wrap gap-1.5`,children:[(0,_.jsx)(`button`,{type:`button`,className:K,"data-action":`restore-unknown`,onClick:()=>i(a()),children:`Restore with an unknown panel`}),(0,_.jsx)(`button`,{type:`button`,className:K,"data-action":`restore-broken`,onClick:()=>i(`{"version":1,"root":"x","nodes":`),children:`Restore broken JSON`}),(0,_.jsx)(`button`,{type:`button`,className:K,onClick:()=>e?.reset(),children:`Reset`}),(0,_.jsx)(`span`,{"data-testid":`api-outcome`,className:`self-center font-mono text-[11px] text-muted-foreground`,children:n})]}),(0,_.jsx)(`div`,{"data-testid":`api-restore`,className:`h-[180px] overflow-hidden rounded-md border`,children:(0,_.jsx)(d,{ref:t,panels:W,defaultLayout:G,parts:p,label:`Restore`})})]})}var J=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

type CounterParams = { start: number }

/** A panel with typed params: \`start\` must be a number wherever a counter is added. */
function Counter({ params }: PanelProps<CounterParams>) {
  const [n, setN] = useState(params.start)
  return (
    <div className="flex items-center gap-2 p-3 text-[12.5px]">
      <button type="button" className="h-6 rounded border px-2 hover:bg-muted" onClick={() => setN((x) => x + 1)}>
        +1
      </button>
      <span className="tabular-nums" data-testid="counter-value">
        {n}
      </span>
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, counter: { component: Counter, title: "Counter" } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.3, minPx: 120, panels: [{ id: "inbox", component: "note", title: "Inbox" }] },
    { id: "main", panels: [{ id: "draft", component: "note", title: "Draft" }, { id: "count", component: "counter", params: { start: 5 } }] },
  ],
})

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** load() never throws: an unknown component restores as a placeholder tab, broken JSON is rejected and the live layout stays. */
export function SaveAndRestore() {
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [outcome, setOutcome] = useState("")
  const load = (json: string) => {
    if (!api) return
    // Outcomes: ok · ok-with-placeholders (unknown component) · migrated · rejected (the layout stays).
    const result = api.load(json)
    setOutcome(\`\${result.outcome}\${result.messages.length ? \`: \${result.messages.join("; ")}\` : ""}\`)
  }
  /** The saved layout with Draft's component renamed to one this registry does not know. */
  const withUnknownPanel = () => {
    const saved = api?.save() ?? layout
    const draft = saved.panels.draft
    return JSON.stringify({ ...saved, panels: { ...saved.panels, ...(draft ? { draft: { ...draft, component: "chart-v1" } } : {}) } })
  }
  return (
    <>
      <DockStyles />
      <div className="mb-2 flex flex-wrap gap-1.5">
        <button type="button" className={BUTTON} data-action="restore-unknown" onClick={() => load(withUnknownPanel())}>
          Restore with an unknown panel
        </button>
        <button type="button" className={BUTTON} data-action="restore-broken" onClick={() => load('{"version":1,"root":"x","nodes":')}>
          Restore broken JSON
        </button>
        <button type="button" className={BUTTON} onClick={() => api?.reset()}>
          Reset
        </button>
        <span data-testid="api-outcome" className="self-center font-mono text-[11px] text-muted-foreground">
          {outcome}
        </span>
      </div>
      <div data-testid="api-restore" className="h-[180px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Restore" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./api-restore-Byyd-bH0.js`),[]));var Y=s({orientation:`horizontal`,children:[{id:`left`,size:.3,panels:[{id:`inbox`,component:`note`,title:`Inbox`}]},{id:`main`,panels:[{id:`draft`,component:`note`,title:`Draft`},{id:`count`,component:`counter`,title:`Counter`}]}]});function X(){let[e,t]=(0,g.useState)(Y);return(0,_.jsx)(`div`,{"data-testid":`api-headless`,className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:c(e).map(n=>(0,_.jsxs)(`div`,{className:`rounded-md border p-2`,children:[(0,_.jsx)(`div`,{className:`mb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase`,children:n.id}),(0,_.jsx)(`div`,{role:`group`,"aria-label":`Panels in ${n.id}`,className:`flex flex-wrap gap-1`,children:n.panels.map(r=>(0,_.jsx)(`button`,{type:`button`,"aria-pressed":n.active===r,onClick:()=>t(e=>a(e,{type:`activate`,panel:r})),className:`h-6 rounded border px-2 text-[12px] aria-pressed:border-primary aria-pressed:bg-primary/10`,children:e.panels[r]?.title??r},r))})]},n.id))})}var Z=`import { useState } from "react"
import { createLayout, groupsInOrder, reduce, type DockLayout } from "@kitora/dock"

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "left", size: 0.3, panels: [{ id: "inbox", component: "note", title: "Inbox" }] },
    { id: "main", panels: [{ id: "draft", component: "note", title: "Draft" }, { id: "count", component: "counter", title: "Counter" }] },
  ],
})

/** No <Dock> at all: the framework-free core's selectors draw the UI and reduce() changes the model. */
export function HeadlessModel() {
  const [model, setModel] = useState<DockLayout>(layout)
  return (
    <div data-testid="api-headless" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {groupsInOrder(model).map((group) => (
        <div key={group.id} className="rounded-md border p-2">
          <div className="mb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">{group.id}</div>
          <div role="group" aria-label={\`Panels in \${group.id}\`} className="flex flex-wrap gap-1">
            {group.panels.map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={group.active === id}
                onClick={() => setModel((l) => reduce(l, { type: "activate", panel: id }))}
                className="h-6 rounded border px-2 text-[12px] aria-pressed:border-primary aria-pressed:bg-primary/10"
              >
                {model.panels[id]?.title ?? id}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./api-headless-CNh3FMkW.js`),[]));function Q(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`React API`,children:`One model, three ways in: JSX for a default layout, data for a controlled one, and an imperative API for commands. Every change, from a gesture or a call, is one action through one reducer, so it can be logged, vetoed or replayed.`}),(0,_.jsx)(h,{n:1,title:`Declared in JSX`,blurb:`DockSplit, DockGroup and DockPanel describe the default layout; they render nothing themselves. The counter keeps its count across tab switches.`,code:S,children:(0,_.jsx)(x,{})}),(0,_.jsx)(h,{n:2,title:`Driven as data`,blurb:`The same layout, controlled: the page owns the layout state, and every change arrives with the action that caused it (newest first).`,code:O,children:(0,_.jsx)(D,{})}),(0,_.jsx)(h,{n:3,title:`Imperative API`,blurb:`Calls through the dock's ref. addPanel checks params against the component's own type: a counter needs { start: number }.`,code:F,children:(0,_.jsx)(P,{})}),(0,_.jsx)(h,{n:4,title:`Veto any action`,blurb:`onAction refuses closing Inbox and moving anything into the left group. Try the × on Inbox, or drag Draft onto Inbox's strip.`,code:V,children:(0,_.jsx)(B,{})}),(0,_.jsx)(h,{n:5,title:`Save and restore`,blurb:`Restore never throws. An unknown component restores as a placeholder tab instead of disappearing; broken JSON is rejected and the live layout stays as it was.`,code:J,children:(0,_.jsx)(q,{})}),(0,_.jsx)(h,{n:6,title:`Headless: your own UI on the model`,blurb:`No <Dock> at all: the core's reducer and selectors drive a list UI. The framework-free core is what any other adapter would build on.`,code:Z,children:(0,_.jsx)(X,{})})]})}export{Q as component};