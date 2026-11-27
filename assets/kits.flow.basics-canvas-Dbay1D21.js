import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./database-C3sxj0I-.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./funnel-C7osImS_.js";import{t as i}from"./table-2-C8AXqbxu.js";import{Ec as a,Uc as o,ri as s,zc as c}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as l}from"./example-B67lLz1F.js";import{a as u,d,i as f,n as p,r as m,s as h,t as g,y as _}from"./-kits.flow.shared-DZAUkZGJ.js";import{n as v,t as y}from"./node-card-BThXdrHk.js";var b=c(),x={source:(0,b.jsx)(t,{}),filter:(0,b.jsx)(r,{}),table:(0,b.jsx)(i,{})},S={source:`bg-sky-500/15 text-sky-700 dark:text-sky-400`,filter:`bg-amber-500/15 text-amber-700 dark:text-amber-400`,table:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-400`},C=v([{id:`rows`,label:`rows`}],[{id:`kept`,label:`kept`},{id:`dropped`,label:`dropped`}]),w=v([],[{id:`rows`,label:`rows`}]),T=v([{id:`rows`,label:`rows`}],[]),E=[{id:`orders`,position:{x:0,y:30},width:190,height:w.height,ports:w.ports,data:{kind:`source`,title:`orders`,subtitle:`postgres · 1.2M rows`}},{id:`paid`,position:{x:260,y:20},width:190,height:C.height,ports:C.ports,data:{kind:`filter`,title:`status = paid`,subtitle:`filter`}},{id:`out`,position:{x:520,y:0},width:190,height:T.height,ports:T.ports,data:{kind:`table`,title:`paid_orders`,subtitle:`warehouse table`}}];function D(){return(0,b.jsx)(h,{flow:d({initial:{nodes:E,edges:[{id:`e1`,source:`orders`,sourcePort:`rows`,target:`paid`,targetPort:`rows`},{id:`e2`,source:`paid`,sourcePort:`kept`,target:`out`,targetPort:`rows`}]}}),fitViewOnMount:!0,label:`Custom nodes`,renderNode:({node:e,selected:t})=>(0,b.jsx)(y,{title:e.data.title,subtitle:e.data.subtitle,icon:x[e.data.kind],accent:S[e.data.kind],selected:t,ports:e.ports})})}var O=`import { Database, Filter, Table2 } from "lucide-react"
import { FlowCanvas, NodeCard, rowPorts, useFlow, type FlowNode } from "@kitora/flow"

type Kind = "source" | "filter" | "table"
type Item = { readonly kind: Kind; readonly title: string; readonly subtitle: string }

const ICON = { source: <Database />, filter: <Filter />, table: <Table2 /> } as const
const ACCENT = { source: "bg-sky-500/15 text-sky-700 dark:text-sky-400", filter: "bg-amber-500/15 text-amber-700 dark:text-amber-400", table: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400" } as const

// \`rowPorts\` gives each port a labelled row on the card and the node height that fits them.
const filterPorts = rowPorts([{ id: "rows", label: "rows" }], [{ id: "kept", label: "kept" }, { id: "dropped", label: "dropped" }])
const sourcePorts = rowPorts([], [{ id: "rows", label: "rows" }])
const tablePorts = rowPorts([{ id: "rows", label: "rows" }], [])

const nodes: FlowNode<Item>[] = [
  { id: "orders", position: { x: 0, y: 30 }, width: 190, height: sourcePorts.height, ports: sourcePorts.ports, data: { kind: "source", title: "orders", subtitle: "postgres · 1.2M rows" } },
  { id: "paid", position: { x: 260, y: 20 }, width: 190, height: filterPorts.height, ports: filterPorts.ports, data: { kind: "filter", title: "status = paid", subtitle: "filter" } },
  { id: "out", position: { x: 520, y: 0 }, width: 190, height: tablePorts.height, ports: tablePorts.ports, data: { kind: "table", title: "paid_orders", subtitle: "warehouse table" } },
]

/** \`renderNode\` draws any React you like inside a node; the canvas adds the ports and handles dragging. */
export function BasicCustomNodes() {
  const flow = useFlow({
    initial: {
      nodes,
      edges: [
        { id: "e1", source: "orders", sourcePort: "rows", target: "paid", targetPort: "rows" },
        { id: "e2", source: "paid", sourcePort: "kept", target: "out", targetPort: "rows" },
      ],
    },
  })
  return (
    <FlowCanvas
      flow={flow}
      fitViewOnMount
      label="Custom nodes"
      renderNode={({ node, selected }) => <NodeCard title={node.data.title} subtitle={node.data.subtitle} icon={ICON[node.data.kind]} accent={ACCENT[node.data.kind]} selected={selected} ports={node.ports} />}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./custom-nodes-B4WkXgdW.js`),[]));var k=e(o(),1),A=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],j=_.flatMap((e,t)=>[{id:`${e}-a`,position:{x:0,y:t*120},data:{label:e},ports:[...A]},{id:`${e}-b`,position:{x:300,y:t*120+50},data:{label:`target`},ports:[...A]}]),M=_.map((e,t)=>({id:e,source:`${e}-a`,sourcePort:`out`,target:`${e}-b`,targetPort:`in`,kind:e,label:e,animated:t===0}));function N(){let[e,t]=(0,k.useState)(`bezier`);return(0,b.jsx)(h,{flow:d({initial:{nodes:j,edges:M},edgeKind:e}),fitViewOnMount:!0,label:`Edge kinds`,children:(0,b.jsx)(m,{position:`top-right`,children:(0,b.jsxs)(`div`,{className:`${u} flex items-center gap-1 p-1 text-[12px]`,children:[(0,b.jsx)(`span`,{className:`px-1.5 text-muted-foreground`,children:`New edges:`}),(0,b.jsx)(`div`,{role:`group`,"aria-label":`Kind for new edges`,className:`flex gap-0.5`,children:_.map(n=>(0,b.jsx)(s,{size:`xs`,variant:n===e?`default`:`ghost`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})]})})})}var P=`import { useState } from "react"
import { EDGE_KINDS, FlowCanvas, FlowPanel, PANEL_SURFACE, useFlow, type EdgeKind, type FlowEdge, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"

type Box = { readonly label: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const

// Three rows, one per edge kind, each with the target lower than its source so the curve shows.
const nodes: FlowNode<Box>[] = EDGE_KINDS.flatMap((kind, row) => [
  { id: \`\${kind}-a\`, position: { x: 0, y: row * 120 }, data: { label: kind }, ports: [...ports] },
  { id: \`\${kind}-b\`, position: { x: 300, y: row * 120 + 50 }, data: { label: "target" }, ports: [...ports] },
])
const edges: FlowEdge[] = EDGE_KINDS.map((kind, i) => ({ id: kind, source: \`\${kind}-a\`, sourcePort: "out", target: \`\${kind}-b\`, targetPort: "in", kind, label: kind, animated: i === 0 }))

/** Each edge picks \`bezier\`, \`step\` or \`straight\`, and may carry a label or a moving dash. Drag from a port to make a new edge: it uses \`edgeKind\`. */
export function BasicEdgeKinds() {
  const [kind, setKind] = useState<EdgeKind>("bezier")
  const flow = useFlow({ initial: { nodes, edges }, edgeKind: kind })
  return (
    <FlowCanvas flow={flow} fitViewOnMount label="Edge kinds">
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-1 p-1 text-[12px]\`}>
          <span className="px-1.5 text-muted-foreground">New edges:</span>
          <div role="group" aria-label="Kind for new edges" className="flex gap-0.5">
            {EDGE_KINDS.map((k) => (
              <Button key={k} size="xs" variant={k === kind ? "default" : "ghost"} aria-pressed={k === kind} onClick={() => setKind(k)}>
                {k}
              </Button>
            ))}
          </div>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./edge-kinds-DY_UMkUf.js`),[]));var F=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],I={nodes:[{id:`start`,position:{x:0,y:40},data:{label:`Start`},ports:[F[1]]},{id:`review`,position:{x:220,y:0},data:{label:`Review`},ports:[...F]},{id:`ship`,position:{x:440,y:40},data:{label:`Ship`},ports:[F[0]]}],edges:[{id:`e1`,source:`start`,sourcePort:`out`,target:`review`,targetPort:`in`},{id:`e2`,source:`review`,sourcePort:`out`,target:`ship`,targetPort:`in`}]};function L(){return(0,b.jsx)(h,{flow:d({initial:I}),fitViewOnMount:!0,label:`First flow`,children:(0,b.jsx)(p,{})})}var R=`import { FlowCanvas, FlowControls, useFlow, type FlowNode, type Graph } from "@kitora/flow"

type Step = { readonly label: string }

// Every node lists its ports; an edge joins one node's out port to another's in port.
const io = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const

const nodes: FlowNode<Step>[] = [
  { id: "start", position: { x: 0, y: 40 }, data: { label: "Start" }, ports: [io[1]] },
  { id: "review", position: { x: 220, y: 0 }, data: { label: "Review" }, ports: [...io] },
  { id: "ship", position: { x: 440, y: 40 }, data: { label: "Ship" }, ports: [io[0]] },
]

const GRAPH: Graph<Step> = {
  nodes,
  edges: [
    { id: "e1", source: "start", sourcePort: "out", target: "review", targetPort: "in" },
    { id: "e2", source: "review", sourcePort: "out", target: "ship", targetPort: "in" },
  ],
}

/** The smallest flow: a controller from \`useFlow\`, a \`FlowCanvas\` to draw it, and the zoom controls. */
export function BasicFirstFlow() {
  const flow = useFlow({ initial: GRAPH })
  return (
    <FlowCanvas flow={flow} fitViewOnMount label="First flow">
      <FlowControls />
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>a(()=>import(`./first-flow-BC2uix7V.js`),[]));var z=6,B=Array.from({length:z*5},(e,t)=>({id:`n${t}`,position:{x:t%z*220,y:Math.floor(t/z)*110},data:{label:`Node ${t+1}`},ports:[{id:`in`,kind:`in`},{id:`out`,kind:`out`}]})),V=B.flatMap((e,t)=>t%z<z-1?[{id:`e${t}`,source:e.id,sourcePort:`out`,target:`n${t+1}`,targetPort:`in`}]:[]);function H(){return(0,b.jsxs)(h,{flow:d({initial:{nodes:B,edges:V},defaultViewport:{x:24,y:24,zoom:.9}}),label:`Pan and zoom`,children:[(0,b.jsx)(p,{}),(0,b.jsx)(f,{})]})}var U=`import { FlowCanvas, FlowControls, MiniMap, useFlow, type FlowEdge, type FlowNode } from "@kitora/flow"

type Cell = { readonly label: string }

// A 6 × 5 grid of nodes, wide enough that you need to pan to see it all.
const COLS = 6
const ROWS = 5
const nodes: FlowNode<Cell>[] = Array.from({ length: COLS * ROWS }, (_, i) => ({
  id: \`n\${i}\`,
  position: { x: (i % COLS) * 220, y: Math.floor(i / COLS) * 110 },
  data: { label: \`Node \${i + 1}\` },
  ports: [
    { id: "in", kind: "in" },
    { id: "out", kind: "out" },
  ],
}))
const edges: FlowEdge[] = nodes.flatMap((n, i) => (i % COLS < COLS - 1 ? [{ id: \`e\${i}\`, source: n.id, sourcePort: "out", target: \`n\${i + 1}\`, targetPort: "in" }] : []))

/** Drag empty space to pan, ⌘/Ctrl + wheel or pinch to zoom, + / − / F on the keyboard; click the minimap to jump. */
export function BasicPanZoom() {
  const flow = useFlow({ initial: { nodes, edges }, defaultViewport: { x: 24, y: 24, zoom: 0.9 } })
  return (
    <FlowCanvas flow={flow} label="Pan and zoom">
      <FlowControls />
      <MiniMap />
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>a(()=>import(`./pan-zoom-BWMyz9gP.js`),[]));function W(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`Basics: canvas and nodes`,children:"A flow is plain data: nodes with ports and edges between ports. `useFlow` holds it, `FlowCanvas` draws it and turns pointer and key input into edits."}),(0,b.jsx)(l,{n:1,title:`A first flow`,blurb:`Three nodes, two edges, the zoom controls. Drag a node; drag the background to pan.`,code:R,children:(0,b.jsx)(g,{testId:`first-flow`,height:260,children:(0,b.jsx)(L,{})})}),(0,b.jsx)(l,{n:2,title:`Pan, zoom and minimap`,blurb:`Drag empty space to pan, wheel to scroll, ⌘/Ctrl + wheel or pinch to zoom at the cursor. Click or drag in the minimap to jump.`,code:U,children:(0,b.jsx)(g,{testId:`pan-zoom`,height:340,children:(0,b.jsx)(H,{})})}),(0,b.jsx)(l,{n:3,title:`Custom nodes`,blurb:"`renderNode` draws any React inside a node. `NodeCard` with `rowPorts` gives each port a labelled row.",code:O,children:(0,b.jsx)(g,{testId:`custom-nodes`,height:260,children:(0,b.jsx)(D,{})})}),(0,b.jsx)(l,{n:4,title:`Edge kinds`,blurb:`Bezier, step and straight, with labels and a moving dash. Pick the kind new edges get, then drag from a port.`,code:P,children:(0,b.jsx)(g,{testId:`edge-kinds`,height:360,children:(0,b.jsx)(N,{})})})]})}export{W as component};