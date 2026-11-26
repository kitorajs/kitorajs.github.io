import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as o}from"./example-BGnSQG2Y.js";import{a as s,d as c,n as l,r as u,s as d,t as f}from"./-kits.flow.shared-DJJToV4S.js";import{n as p,t as m}from"./node-card-DqsVOdKj.js";var h=e(n(),1),g=i(),_=p([{id:`a`,label:`a · number`,dataType:`number`,max:1},{id:`b`,label:`b · number`,dataType:`number`,max:1}],[{id:`out`,label:`number`,dataType:`number`}]),v=p([{id:`value`,label:`value · number`,dataType:`number`,max:1}],[{id:`out`,label:`text`,dataType:`text`}]),y=p([{id:`text`,label:`text`,dataType:`text`,max:1}],[{id:`out`,label:`text`,dataType:`text`}]),b=p([],[{id:`out`,label:`number`,dataType:`number`}]),x=(e,t,n,r,i)=>({id:e,position:{x:n,y:r},width:170,height:i.height,ports:i.ports,data:{title:t}}),S=[x(`x`,`x = 2`,0,0,b),x(`y`,`y = 40`,0,110,b),x(`sum`,`sum`,240,30,_),x(`fmt`,`format`,480,0,v),x(`upper`,`uppercase`,480,120,y)],C={ok:`Connected.`,missing:`That port is gone.`,"same-node":`A node cannot feed itself.`,direction:`Drag from an output to an input (or back).`,duplicate:`Already connected.`,type:`Types differ: number ≠ text.`,full:`That input already has an edge.`,locked:`Locked.`,custom:`Refused by the host rule.`},w={number:`border-sky-500`,text:`border-amber-500`};function T(){let e=c({initial:{nodes:S,edges:[]}}),[t,n]=(0,h.useState)(`Drag from x's output to sum's a.`);return(0,g.jsx)(d,{flow:e,fitViewOnMount:!0,label:`Connect by drag`,portClassName:e=>e.dataType?w[e.dataType]:void 0,onConnectAttempt:e=>n(C[e]),renderNode:({node:e,selected:t})=>(0,g.jsx)(m,{title:e.data.title,selected:t,ports:e.ports}),children:(0,g.jsx)(u,{position:`top-right`,children:(0,g.jsxs)(`div`,{className:`${s} px-2.5 py-1.5 text-[12px]`,role:`status`,children:[t,` `,(0,g.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`· `,e.state.graph.edges.length,` edges`]})]})})})}var E=`import { useState } from "react"
import { FlowCanvas, FlowPanel, NodeCard, PANEL_SURFACE, rowPorts, useFlow, type ConnectReason, type FlowNode, type FlowPort } from "@kitora/flow"

type Fn = { readonly title: string }

// Ports carry a \`dataType\`; a number output cannot feed a text input. \`max: 1\` lets an input take one edge.
const sum = rowPorts([{ id: "a", label: "a · number", dataType: "number", max: 1 }, { id: "b", label: "b · number", dataType: "number", max: 1 }], [{ id: "out", label: "number", dataType: "number" }])
const format = rowPorts([{ id: "value", label: "value · number", dataType: "number", max: 1 }], [{ id: "out", label: "text", dataType: "text" }])
const upper = rowPorts([{ id: "text", label: "text", dataType: "text", max: 1 }], [{ id: "out", label: "text", dataType: "text" }])
const num = rowPorts([], [{ id: "out", label: "number", dataType: "number" }])

const node = (id: string, title: string, x: number, y: number, p: { ports: FlowPort[]; height: number }): FlowNode<Fn> => ({ id, position: { x, y }, width: 170, height: p.height, ports: p.ports, data: { title } })

const nodes = [node("x", "x = 2", 0, 0, num), node("y", "y = 40", 0, 110, num), node("sum", "sum", 240, 30, sum), node("fmt", "format", 480, 0, format), node("upper", "uppercase", 480, 120, upper)]

const MESSAGE: Record<ConnectReason, string> = {
  ok: "Connected.",
  missing: "That port is gone.",
  "same-node": "A node cannot feed itself.",
  direction: "Drag from an output to an input (or back).",
  duplicate: "Already connected.",
  type: "Types differ: number ≠ text.",
  full: "That input already has an edge.",
  locked: "Locked.",
  custom: "Refused by the host rule.",
}

const PORT_COLOR: Record<string, string> = { number: "border-sky-500", text: "border-amber-500" }

/** Drag from a port to another. Valid targets light up, the rest fade; drop to connect. The verdict shows top-right. */
export function BasicConnect() {
  const flow = useFlow({ initial: { nodes, edges: [] } })
  const [message, setMessage] = useState("Drag from x's output to sum's a.")
  return (
    <FlowCanvas
      flow={flow}
      fitViewOnMount
      label="Connect by drag"
      portClassName={(port) => (port.dataType ? PORT_COLOR[port.dataType] : undefined)}
      onConnectAttempt={(reason) => setMessage(MESSAGE[reason])}
      renderNode={({ node: n, selected }) => <NodeCard title={n.data.title} selected={selected} ports={n.ports} />}
    >
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} px-2.5 py-1.5 text-[12px]\`} role="status">
          {message} <span className="text-muted-foreground tabular-nums">· {flow.state.graph.edges.length} edges</span>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./connect-D4c1Wycc.js`),[]));var D=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],O=[{id:`fetch`,position:{x:0,y:0},data:{label:`Fetch`},ports:[...D]},{id:`parse`,position:{x:220,y:0},data:{label:`Parse`},ports:[...D]}],k=[{label:`Copy`,keys:`⌘C`,run:`copy`},{label:`Paste`,keys:`⌘V`,run:`paste`},{label:`Duplicate`,keys:`⌘D`,run:`duplicate`}];function A(){let e=c({initial:{nodes:O,edges:[{id:`e`,source:`fetch`,sourcePort:`out`,target:`parse`,targetPort:`in`}]}});return(0,g.jsxs)(d,{flow:e,fitViewOnMount:!0,label:`History and clipboard`,children:[(0,g.jsx)(l,{history:!0}),(0,g.jsx)(u,{position:`top-right`,children:(0,g.jsxs)(`div`,{className:`${s} flex items-center gap-1 p-1 text-[12px]`,children:[(0,g.jsx)(a,{variant:`ghost`,size:`xs`,onClick:()=>e.dispatch({type:`selectAll`}),children:`Select all`}),k.map(t=>(0,g.jsx)(a,{variant:`ghost`,size:`xs`,title:t.keys,onClick:()=>e[t.run](),children:t.label},t.run)),(0,g.jsxs)(`span`,{className:`px-1.5 text-muted-foreground tabular-nums`,children:[e.state.past.length,` undo · `,e.state.future.length,` redo`]})]})})]})}var j=`import { FlowCanvas, FlowControls, FlowPanel, PANEL_SURFACE, useFlow, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"

type Box = { readonly label: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const nodes: FlowNode<Box>[] = [
  { id: "fetch", position: { x: 0, y: 0 }, data: { label: "Fetch" }, ports: [...ports] },
  { id: "parse", position: { x: 220, y: 0 }, data: { label: "Parse" }, ports: [...ports] },
]

const ACTIONS = [
  { label: "Copy", keys: "⌘C", run: "copy" },
  { label: "Paste", keys: "⌘V", run: "paste" },
  { label: "Duplicate", keys: "⌘D", run: "duplicate" },
] as const

/** Every edit is one undo step (a whole drag included). Copy keeps the edges inside the selection; each paste lands a step further along. */
export function BasicHistoryClipboard() {
  const flow = useFlow({ initial: { nodes, edges: [{ id: "e", source: "fetch", sourcePort: "out", target: "parse", targetPort: "in" }] } })
  return (
    <FlowCanvas flow={flow} fitViewOnMount label="History and clipboard">
      <FlowControls history />
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-1 p-1 text-[12px]\`}>
          <Button variant="ghost" size="xs" onClick={() => flow.dispatch({ type: "selectAll" })}>
            Select all
          </Button>
          {ACTIONS.map((a) => (
            <Button key={a.run} variant="ghost" size="xs" title={a.keys} onClick={() => flow[a.run]()}>
              {a.label}
            </Button>
          ))}
          <span className="px-1.5 text-muted-foreground tabular-nums">
            {flow.state.past.length} undo · {flow.state.future.length} redo
          </span>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>r(()=>import(`./history-clipboard-B6x4J7xz.js`),[]));var M=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],N=Array.from({length:8},(e,t)=>({id:`n${t+1}`,position:{x:t%4*190,y:Math.floor(t/4)*120},data:{label:`Node ${t+1}`},ports:[...M]})),P=N.flatMap((e,t)=>t%4<3?[{id:`e${t}`,source:e.id,sourcePort:`out`,target:`n${t+2}`,targetPort:`in`}]:[]);function F(){let[e,t]=(0,h.useState)(`select`),n=c({initial:{nodes:N,edges:P}}),{selection:r}=n.state;return(0,g.jsx)(d,{flow:n,dragMode:e,fitViewOnMount:!0,label:`Selection`,children:(0,g.jsx)(u,{position:`top-right`,children:(0,g.jsxs)(`div`,{className:`${s} flex items-center gap-2 p-1 pl-2.5 text-[12px]`,children:[(0,g.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[r.nodes.length,` nodes · `,r.edges.length,` edges selected`]}),(0,g.jsxs)(a,{variant:`outline`,size:`xs`,onClick:()=>t(e===`pan`?`select`:`pan`),children:[`Drag: `,e===`pan`?`pans`:`selects`]}),(0,g.jsx)(a,{variant:`outline`,size:`xs`,disabled:r.nodes.length+r.edges.length===0,onClick:()=>n.deleteSelection(),children:`Delete`})]})})})}var I=`import { useState } from "react"
import { FlowCanvas, FlowPanel, PANEL_SURFACE, useFlow, type FlowEdge, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"

type Box = { readonly label: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const nodes: FlowNode<Box>[] = Array.from({ length: 8 }, (_, i) => ({ id: \`n\${i + 1}\`, position: { x: (i % 4) * 190, y: Math.floor(i / 4) * 120 }, data: { label: \`Node \${i + 1}\` }, ports: [...ports] }))
// Each row is a chain; rows are not joined, so no edge wraps across the canvas.
const edges: FlowEdge[] = nodes.flatMap((n, i) => (i % 4 < 3 ? [{ id: \`e\${i}\`, source: n.id, sourcePort: "out", target: \`n\${i + 2}\`, targetPort: "in" }] : []))

/** Click to select, Shift/⌘-click to add, drag a box on empty canvas (Shift in pan mode) to marquee-select, Delete to remove, ⌘Z to bring it back. */
export function BasicSelection() {
  const [mode, setMode] = useState<"pan" | "select">("select")
  const flow = useFlow({ initial: { nodes, edges } })
  const { selection } = flow.state
  return (
    <FlowCanvas flow={flow} dragMode={mode} fitViewOnMount label="Selection">
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-2 p-1 pl-2.5 text-[12px]\`}>
          <span className="text-muted-foreground tabular-nums">
            {selection.nodes.length} nodes · {selection.edges.length} edges selected
          </span>
          <Button variant="outline" size="xs" onClick={() => setMode(mode === "pan" ? "select" : "pan")}>
            Drag: {mode === "pan" ? "pans" : "selects"}
          </Button>
          <Button variant="outline" size="xs" disabled={selection.nodes.length + selection.edges.length === 0} onClick={() => flow.deleteSelection()}>
            Delete
          </Button>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./selection-BXsd2_O6.js`),[]));var L=[{id:`a`,position:{x:0,y:0},width:140,height:48,data:{label:`Drag me`}},{id:`b`,position:{x:260,y:70},width:180,height:64,data:{label:`Wide`}},{id:`c`,position:{x:70,y:190},width:120,height:40,data:{label:`Small`}}],R=[{value:0,label:`Guides`},{value:20,label:`Grid 20`},{value:40,label:`Grid 40`}];function z(){let[e,t]=(0,h.useState)(0);return(0,g.jsx)(d,{flow:c({initial:{nodes:L,edges:[]}}),snapGrid:e,background:e>0?`lines`:`dots`,backgroundGap:e>0?e:20,fitViewOnMount:!0,label:`Snap and guides`,children:(0,g.jsx)(u,{position:`top-right`,children:(0,g.jsx)(`div`,{className:`${s} flex items-center gap-1 p-1 text-[12px]`,children:(0,g.jsx)(`div`,{role:`group`,"aria-label":`Snapping`,className:`flex gap-0.5`,children:R.map(n=>(0,g.jsx)(a,{size:`xs`,variant:e===n.value?`default`:`ghost`,"aria-pressed":e===n.value,onClick:()=>t(n.value),children:n.label},n.value))})})})})}var B=`import { useState } from "react"
import { FlowCanvas, FlowPanel, PANEL_SURFACE, useFlow, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"

type Box = { readonly label: string }

const nodes: FlowNode<Box>[] = [
  { id: "a", position: { x: 0, y: 0 }, width: 140, height: 48, data: { label: "Drag me" } },
  { id: "b", position: { x: 260, y: 70 }, width: 180, height: 64, data: { label: "Wide" } },
  { id: "c", position: { x: 70, y: 190 }, width: 120, height: 40, data: { label: "Small" } },
]


/** Guides when 0, otherwise the grid step. */
const SNAP_OPTIONS = [
  { value: 0, label: "Guides" },
  { value: 20, label: "Grid 20" },
  { value: 40, label: "Grid 40" },
] as const

/** With a grid, a dragged node lands on grid steps. With the grid off, it snaps to neighbours' edges and centres and pink guides show why. */
export function BasicSnapGuides() {
  const [grid, setGrid] = useState(0)
  const flow = useFlow({ initial: { nodes, edges: [] } })
  return (
    <FlowCanvas flow={flow} snapGrid={grid} background={grid > 0 ? "lines" : "dots"} backgroundGap={grid > 0 ? grid : 20} fitViewOnMount label="Snap and guides">
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-1 p-1 text-[12px]\`}>
          <div role="group" aria-label="Snapping" className="flex gap-0.5">
            {SNAP_OPTIONS.map((o) => (
              <Button key={o.value} size="xs" variant={grid === o.value ? "default" : "ghost"} aria-pressed={grid === o.value} onClick={() => setGrid(o.value)}>
                {o.label}
              </Button>
            ))}
          </div>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>r(()=>import(`./snap-guides-BOQ57_9r.js`),[]));function V(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Basics: editing`,children:`Every edit is a reducer action, so each one undoes in a single step and a host can watch, refuse or replay it.`}),(0,g.jsx)(o,{n:1,title:`Connect by drag`,blurb:"Drag from any port. Typed ports refuse a mismatch, `max` caps an input, and the verdict comes back through `onConnectAttempt`.",code:E,children:(0,g.jsx)(f,{testId:`connect`,height:300,children:(0,g.jsx)(T,{})})}),(0,g.jsx)(o,{n:2,title:`Selection and marquee`,blurb:`Click, Shift/⌘-click, and drag a box on empty canvas. Switch drag to pan and the marquee moves to Shift+drag.`,code:I,children:(0,g.jsx)(f,{testId:`selection`,height:300,children:(0,g.jsx)(F,{})})}),(0,g.jsx)(o,{n:3,title:`Snap to grid and alignment guides`,blurb:`Grid snapping, or pull onto the neighbours' edges and centres with guide lines.`,code:B,children:(0,g.jsx)(f,{testId:`snap-guides`,height:300,children:(0,g.jsx)(z,{})})}),(0,g.jsx)(o,{n:4,title:`Undo, redo and the clipboard`,blurb:`A whole drag is one step. Copy keeps inner edges; each paste lands further along with fresh ids.`,code:j,children:(0,g.jsx)(f,{testId:`history`,height:260,children:(0,g.jsx)(A,{})})})]})}export{V as component};