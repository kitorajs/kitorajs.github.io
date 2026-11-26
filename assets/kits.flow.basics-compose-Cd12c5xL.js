import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./database-DEFok6Hf.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./funnel-B13jyZNr.js";import{t as i}from"./table-2-Ii29QUcX.js";import{t as a}from"./input-DQo0XDsx.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as u}from"./example-BGnSQG2Y.js";import{a as d,c as f,d as p,f as m,l as h,n as g,r as _,s as v,t as y,u as b}from"./-kits.flow.shared-DJJToV4S.js";import{n as x,t as S}from"./node-card-DqsVOdKj.js";var C=c(),w={source:(0,C.jsx)(t,{}),filter:(0,C.jsx)(r,{}),table:(0,C.jsx)(i,{})},T=x([],[{id:`rows`,label:`rows`}]),E=x([{id:`rows`,label:`rows`}],[{id:`kept`,label:`kept`}]),D=x([{id:`rows`,label:`rows`}],[]),O=[{id:`orders`,position:{x:0,y:20},width:180,height:T.height,ports:T.ports,data:{kind:`source`,title:`orders`}},{id:`paid`,position:{x:250,y:10},width:180,height:E.height,ports:E.ports,data:{kind:`filter`,title:`status = paid`}},{id:`out`,position:{x:500,y:20},width:180,height:D.height,ports:D.ports,data:{kind:`table`,title:`paid_orders`}}];function k(){let e=f({width:140,height:80});return e.visible?(0,C.jsxs)(`div`,{...b,className:`absolute right-2 bottom-2 rounded-md border border-dashed bg-muted/60`,style:{width:e.width,height:e.height},...e.handlers,children:[e.nodes.map(({node:e,rect:t,selected:n})=>(0,C.jsx)(`span`,{className:`absolute rounded-full ${n?`bg-violet-500`:`bg-foreground/40`}`,style:{left:t.x+t.width/2-4,top:t.y+t.height/2-4,width:8,height:8}},e.id)),e.view&&(0,C.jsx)(`span`,{className:`pointer-events-none absolute rounded-sm border border-violet-500/70`,style:{left:e.view.x,top:e.view.y,width:e.view.width,height:e.view.height}})]}):null}function A(){let e=p({defaultGraph:{nodes:O,edges:[{id:`e1`,source:`orders`,sourcePort:`rows`,target:`paid`,targetPort:`rows`,label:`1.2M`},{id:`e2`,source:`paid`,sourcePort:`kept`,target:`out`,targetPort:`rows`}]},edgeKind:`step`});return(0,C.jsxs)(h.Root,{flow:e,fitViewOnMount:!0,label:`Composed canvas`,className:`h-full w-full bg-violet-50/40 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset dark:bg-violet-950/20`,children:[(0,C.jsx)(h.Background,{variant:`lines`,gap:24,color:`color-mix(in oklab, rgb(139 92 246) 14%, transparent)`}),(0,C.jsxs)(h.Viewport,{children:[(0,C.jsx)(h.Edges,{classNames:{edge:`group cursor-pointer`,marker:`fill-violet-400`,markerSelected:`fill-violet-700 dark:fill-violet-300`},pathClassName:(e,t)=>t?`stroke-violet-700 stroke-2 dark:stroke-violet-300`:`stroke-violet-400 stroke-[1.5] [stroke-dasharray:4_3]`}),(0,C.jsx)(h.ConnectionLine,{className:`stroke-violet-500 stroke-2 data-[invalid]:stroke-red-500`}),(0,C.jsx)(h.Guides,{className:`stroke-violet-500`}),(0,C.jsx)(h.EdgeLabels,{className:`rounded-full bg-violet-600 px-2 py-px text-[10px] font-medium text-white`}),(0,C.jsx)(h.Nodes,{render:({node:e,selected:t})=>(0,C.jsx)(S,{title:e.data.title,icon:w[e.data.kind],accent:`bg-violet-500/15 text-violet-700 dark:text-violet-300`,selected:t,ports:e.ports,classNames:{title:`font-semibold`}}),classNames:{node:`rounded-md outline-none focus-visible:ring-2 focus-visible:ring-violet-500`,port:`size-2.5 rounded-[2px] border-[1.5px] border-violet-500 bg-background data-[interactive]:cursor-crosshair data-[candidate=true]:bg-violet-300 data-[candidate=false]:opacity-30 data-[source]:bg-violet-600`}}),(0,C.jsx)(h.Marquee,{className:`border border-dashed border-violet-500 bg-violet-500/10`})]}),(0,C.jsx)(h.Announcer,{}),(0,C.jsx)(g,{position:`top-right`,orientation:`horizontal`}),(0,C.jsx)(k,{})]})}var j=`import { Database, Filter, Table2 } from "lucide-react"
import { FLOW_UI_PROPS, Flow, FlowControls, NodeCard, rowPorts, useFlow, useMiniMap, type FlowNode } from "@kitora/flow"

type Item = { readonly kind: "source" | "filter" | "table"; readonly title: string }

const ICON = { source: <Database />, filter: <Filter />, table: <Table2 /> } as const
const sourcePorts = rowPorts([], [{ id: "rows", label: "rows" }])
const filterPorts = rowPorts([{ id: "rows", label: "rows" }], [{ id: "kept", label: "kept" }])
const tablePorts = rowPorts([{ id: "rows", label: "rows" }], [])

const nodes: FlowNode<Item>[] = [
  { id: "orders", position: { x: 0, y: 20 }, width: 180, height: sourcePorts.height, ports: sourcePorts.ports, data: { kind: "source", title: "orders" } },
  { id: "paid", position: { x: 250, y: 10 }, width: 180, height: filterPorts.height, ports: filterPorts.ports, data: { kind: "filter", title: "status = paid" } },
  { id: "out", position: { x: 500, y: 20 }, width: 180, height: tablePorts.height, ports: tablePorts.ports, data: { kind: "table", title: "paid_orders" } },
]

/** A minimap of your own on the headless \`useMiniMap\`: plain divs instead of the preset's SVG. */
function DotMap() {
  const map = useMiniMap({ width: 140, height: 80 })
  if (!map.visible) return null
  return (
    <div {...FLOW_UI_PROPS} className="absolute right-2 bottom-2 rounded-md border border-dashed bg-muted/60" style={{ width: map.width, height: map.height }} {...map.handlers}>
      {map.nodes.map(({ node, rect, selected }) => (
        <span key={node.id} className={\`absolute rounded-full \${selected ? "bg-violet-500" : "bg-foreground/40"}\`} style={{ left: rect.x + rect.width / 2 - 4, top: rect.y + rect.height / 2 - 4, width: 8, height: 8 }} />
      ))}
      {map.view && <span className="pointer-events-none absolute rounded-sm border border-violet-500/70" style={{ left: map.view.x, top: map.view.y, width: map.view.width, height: map.view.height }} />}
    </div>
  )
}

/**
 * \`FlowCanvas\` rebuilt from the public parts, restyled: a violet theme, square ports, dashed
 * edges, a line grid, and a minimap drawn from \`useMiniMap\`. Drop or reorder any part.
 */
export function BasicCompose() {
  const flow = useFlow({
    defaultGraph: {
      nodes,
      edges: [
        { id: "e1", source: "orders", sourcePort: "rows", target: "paid", targetPort: "rows", label: "1.2M" },
        { id: "e2", source: "paid", sourcePort: "kept", target: "out", targetPort: "rows" },
      ],
    },
    edgeKind: "step",
  })
  return (
    <Flow.Root flow={flow} fitViewOnMount label="Composed canvas" className="h-full w-full bg-violet-50/40 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset dark:bg-violet-950/20">
      <Flow.Background variant="lines" gap={24} color="color-mix(in oklab, rgb(139 92 246) 14%, transparent)" />
      <Flow.Viewport>
        <Flow.Edges
          classNames={{ edge: "group cursor-pointer", marker: "fill-violet-400", markerSelected: "fill-violet-700 dark:fill-violet-300" }}
          pathClassName={(_, selected) => (selected ? "stroke-violet-700 stroke-2 dark:stroke-violet-300" : "stroke-violet-400 stroke-[1.5] [stroke-dasharray:4_3]")}
        />
        <Flow.ConnectionLine className="stroke-violet-500 stroke-2 data-[invalid]:stroke-red-500" />
        <Flow.Guides className="stroke-violet-500" />
        <Flow.EdgeLabels className="rounded-full bg-violet-600 px-2 py-px text-[10px] font-medium text-white" />
        <Flow.Nodes<Item>
          render={({ node, selected }) => <NodeCard title={node.data.title} icon={ICON[node.data.kind]} accent="bg-violet-500/15 text-violet-700 dark:text-violet-300" selected={selected} ports={node.ports} classNames={{ title: "font-semibold" }} />}
          classNames={{ node: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-violet-500", port: "size-2.5 rounded-[2px] border-[1.5px] border-violet-500 bg-background data-[interactive]:cursor-crosshair data-[candidate=true]:bg-violet-300 data-[candidate=false]:opacity-30 data-[source]:bg-violet-600" }}
        />
        <Flow.Marquee className="border border-dashed border-violet-500 bg-violet-500/10" />
      </Flow.Viewport>
      <Flow.Announcer />
      <FlowControls position="top-right" orientation="horizontal" />
      <DotMap />
    </Flow.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>s(()=>import(`./compose-DMlXU7OO.js`),[]));var M=e(o(),1),N=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],P=(e,t,n,r)=>({id:e,position:{x:n,y:r},data:{label:t},ports:[...N]}),F={nodes:[P(`plan`,`Plan`,0,30),P(`build`,`Build`,220,0),P(`test`,`Test`,220,90),P(`ship`,`Ship`,440,40)],edges:[{id:`pb`,source:`plan`,sourcePort:`out`,target:`build`,targetPort:`in`},{id:`pt`,source:`plan`,sourcePort:`out`,target:`test`,targetPort:`in`},{id:`bs`,source:`build`,sourcePort:`out`,target:`ship`,targetPort:`in`}]};function I(){let[e,t]=(0,M.useState)(F),[n,r]=(0,M.useState)({nodes:[],edges:[]}),i=p({graph:e,onGraphChange:t,selection:n,onSelectionChange:r}),o=(e,n)=>t(t=>({...t,nodes:t.nodes.map(t=>t.id===e?{...t,data:{label:n}}:t)}));return(0,C.jsxs)(`div`,{className:`flex h-full`,children:[(0,C.jsx)(`div`,{className:`relative min-w-0 flex-1`,children:(0,C.jsx)(v,{flow:i,fitViewOnMount:!0,label:`Controlled flow`,children:(0,C.jsx)(g,{history:!0})})}),(0,C.jsxs)(`aside`,{className:`flex w-44 shrink-0 flex-col gap-1 overflow-auto border-l p-2 text-[12px]`,"aria-label":`Graph state`,children:[(0,C.jsxs)(`div`,{className:`text-[11px] text-muted-foreground tabular-nums`,"data-testid":`controlled-counts`,children:[e.nodes.length,` nodes · `,e.edges.length,` edges · `,n.nodes.length,` selected`]}),e.nodes.map(e=>(0,C.jsx)(a,{"aria-label":`Label of ${e.id}`,value:e.data.label,onChange:t=>o(e.id,t.target.value),className:`h-6 px-1.5 text-[12px] ${n.nodes.includes(e.id)?`border-primary`:``}`},e.id)),(0,C.jsx)(l,{variant:`outline`,size:`xs`,className:`mt-1 justify-start`,onClick:()=>t(F),children:`Reset graph`})]})]})}var L=`import { useState } from "react"
import { FlowCanvas, FlowControls, useFlow, type FlowNode, type Graph, type Selection } from "@kitora/flow"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

type Task = { readonly label: string }

const io = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const task = (id: string, label: string, x: number, y: number): FlowNode<Task> => ({ id, position: { x, y }, data: { label }, ports: [...io] })

const START: Graph<Task> = {
  nodes: [task("plan", "Plan", 0, 30), task("build", "Build", 220, 0), task("test", "Test", 220, 90), task("ship", "Ship", 440, 40)],
  edges: [
    { id: "pb", source: "plan", sourcePort: "out", target: "build", targetPort: "in" },
    { id: "pt", source: "plan", sourcePort: "out", target: "test", targetPort: "in" },
    { id: "bs", source: "build", sourcePort: "out", target: "ship", targetPort: "in" },
  ],
}

/**
 * Controlled: the graph and the selection live in your state. Edits on the canvas arrive through
 * \`onGraphChange\` / \`onSelectionChange\`; edits in the side list go straight into the state and the
 * canvas follows. Undo still works, because history is kept by the controller.
 */
export function BasicControlled() {
  const [graph, setGraph] = useState(START)
  const [selection, setSelection] = useState<Selection>({ nodes: [], edges: [] })
  const flow = useFlow({ graph, onGraphChange: setGraph, selection, onSelectionChange: setSelection })
  const rename = (id: string, label: string) => setGraph((g) => ({ ...g, nodes: g.nodes.map((n) => (n.id === id ? { ...n, data: { label } } : n)) }))
  return (
    <div className="flex h-full">
      <div className="relative min-w-0 flex-1">
        <FlowCanvas flow={flow} fitViewOnMount label="Controlled flow">
          <FlowControls history />
        </FlowCanvas>
      </div>
      <aside className="flex w-44 shrink-0 flex-col gap-1 overflow-auto border-l p-2 text-[12px]" aria-label="Graph state">
        <div className="text-[11px] text-muted-foreground tabular-nums" data-testid="controlled-counts">
          {graph.nodes.length} nodes · {graph.edges.length} edges · {selection.nodes.length} selected
        </div>
        {graph.nodes.map((n) => (
          <Input key={n.id} aria-label={\`Label of \${n.id}\`} value={n.data.label} onChange={(e) => rename(n.id, e.target.value)} className={\`h-6 px-1.5 text-[12px] \${selection.nodes.includes(n.id) ? "border-primary" : ""}\`} />
        ))}
        <Button variant="outline" size="xs" className="mt-1 justify-start" onClick={() => setGraph(START)}>
          Reset graph
        </Button>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>s(()=>import(`./controlled-Dk2PRQ6E.js`),[]));var R=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],z=(e,t,n)=>({id:e,position:{x:t,y:n},data:{label:e},ports:[...R]});function B(e){let t=null;return{write(n){t=n,e(n.nodes.length)},read:()=>t}}var V=e=>({...e,nodes:e.nodes.toSorted((e,t)=>e.id.localeCompare(t.id)).map((e,t)=>({...e,position:{x:t%3*200,y:Math.floor(t/3)*110}}))}),H=[...m,{key:`h`,command:`focusLeft`},{key:`j`,command:`focusDown`},{key:`k`,command:`focusUp`},{key:`l`,command:`focusRight`}];function U({title:e,initial:t,clipboard:n}){let r=p({defaultGraph:t,clipboard:n,layout:V});return(0,C.jsx)(`div`,{className:`relative h-full min-w-0 flex-1 border-r last:border-r-0`,children:(0,C.jsx)(v,{flow:r,fitViewOnMount:!0,keyBindings:H,label:e,children:(0,C.jsx)(_,{position:`top-left`,children:(0,C.jsxs)(`div`,{className:`${d} flex items-center gap-0.5 p-0.5`,role:`toolbar`,"aria-label":`${e} actions`,children:[(0,C.jsx)(`span`,{className:`px-1.5 text-[11px] font-medium`,children:e}),(0,C.jsx)(l,{variant:`ghost`,size:`sm`,onClick:()=>r.copy(),children:`Copy`}),(0,C.jsx)(l,{variant:`ghost`,size:`sm`,onClick:()=>r.paste(),children:`Paste`}),(0,C.jsx)(l,{variant:`ghost`,size:`sm`,onClick:()=>r.layout(),children:`Grid`})]})})})})}function W(){let[e,t]=(0,M.useState)(0),n=(0,M.useMemo)(()=>B(t),[]);return(0,C.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,C.jsxs)(`div`,{className:`flex h-7 items-center border-b px-2 text-[11px] text-muted-foreground tabular-nums`,"aria-live":`polite`,children:[`Shared clip: `,e===0?`empty`:`${e} node${e===1?``:`s`}`]}),(0,C.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,C.jsx)(U,{title:`Left`,clipboard:n,initial:{nodes:[z(`alpha`,0,0),z(`beta`,220,60),z(`gamma`,40,140)],edges:[{id:`ab`,source:`alpha`,sourcePort:`out`,target:`beta`,targetPort:`in`}]}}),(0,C.jsx)(U,{title:`Right`,clipboard:n,initial:{nodes:[z(`delta`,0,40)],edges:[]}})]})]})}var G=`import { useMemo, useState } from "react"
import { Button } from "@kitora/ui/button"
import { FLOW_KEY_BINDINGS, FlowCanvas, FlowPanel, PANEL_SURFACE, useFlow, type FlowClipboard, type FlowKeyBinding, type FlowNode, type Graph, type LayoutEngine } from "@kitora/flow"

type Note = { readonly label: string }

const io = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const make = (id: string, x: number, y: number): FlowNode<Note> => ({ id, position: { x, y }, data: { label: id }, ports: [...io] })

/** Clipboard adapter: one clip shared by every canvas that is given it, with a listener for the UI. */
function sharedClipboard<D>(onChange: (size: number) => void): FlowClipboard<D> {
  let clip: Graph<D> | null = null
  return {
    write(next) {
      clip = next
      onChange(next.nodes.length)
    },
    read: () => clip,
  }
}

/** Layout adapter: a plain grid, three nodes per row, in id order. Any engine (dagre, ELK) fits the same type. */
const gridLayout: LayoutEngine<Note> = (graph) => ({
  ...graph,
  nodes: graph.nodes.toSorted((a, b) => a.id.localeCompare(b.id)).map((n, i) => ({ ...n, position: { x: (i % 3) * 200, y: Math.floor(i / 3) * 110 } })),
})

/** Key-map adapter: the default bindings plus vim keys that walk between nodes (the keyboard kit matches and runs them). */
const vimKeys: readonly FlowKeyBinding[] = [
  ...FLOW_KEY_BINDINGS,
  { key: "h", command: "focusLeft" },
  { key: "j", command: "focusDown" },
  { key: "k", command: "focusUp" },
  { key: "l", command: "focusRight" },
]

/** One canvas of the pair; both receive the same clipboard adapter. */
function Board({ title, initial, clipboard }: { readonly title: string; readonly initial: Graph<Note>; readonly clipboard: FlowClipboard<Note> }) {
  const flow = useFlow({ defaultGraph: initial, clipboard, layout: gridLayout })
  return (
    <div className="relative h-full min-w-0 flex-1 border-r last:border-r-0">
      <FlowCanvas flow={flow} fitViewOnMount keyBindings={vimKeys} label={title}>
        <FlowPanel position="top-left">
          <div className={\`\${PANEL_SURFACE} flex items-center gap-0.5 p-0.5\`} role="toolbar" aria-label={\`\${title} actions\`}>
            <span className="px-1.5 text-[11px] font-medium">{title}</span>
            <Button variant="ghost" size="sm" onClick={() => flow.copy()}>
              Copy
            </Button>
            <Button variant="ghost" size="sm" onClick={() => flow.paste()}>
              Paste
            </Button>
            <Button variant="ghost" size="sm" onClick={() => flow.layout()}>
              Grid
            </Button>
          </div>
        </FlowPanel>
      </FlowCanvas>
    </div>
  )
}

/**
 * Three adapters on stock components: a clipboard shared by two canvases (copy on the left, paste
 * on the right), a grid layout engine behind \`layout()\`, and a key map that adds h/j/k/l.
 */
export function BasicCustomAdapters() {
  const [clipSize, setClipSize] = useState(0)
  const clipboard = useMemo(() => sharedClipboard<Note>(setClipSize), [])
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-7 items-center border-b px-2 text-[11px] text-muted-foreground tabular-nums" aria-live="polite">
        Shared clip: {clipSize === 0 ? "empty" : \`\${clipSize} node\${clipSize === 1 ? "" : "s"}\`}
      </div>
      <div className="flex min-h-0 flex-1">
        <Board title="Left" clipboard={clipboard} initial={{ nodes: [make("alpha", 0, 0), make("beta", 220, 60), make("gamma", 40, 140)], edges: [{ id: "ab", source: "alpha", sourcePort: "out", target: "beta", targetPort: "in" }] }} />
        <Board title="Right" clipboard={clipboard} initial={{ nodes: [make("delta", 0, 40)], edges: [] }} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>s(()=>import(`./custom-adapters-COCEO0f-.js`),[]));function K(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(n,{title:`Basics: compose, adapters, control`,children:"`FlowCanvas` is a preset built only from the public `Flow.*` parts, so you can rebuild it with your own structure and look. Clipboard, layout, key map and wording are adapters, and every piece of state can be controlled."}),(0,C.jsx)(u,{n:1,title:`Compose your own`,blurb:`Flow.Root, Background, Viewport, Edges, ConnectionLine, Guides, EdgeLabels, Nodes, Marquee and Announcer, restyled, plus a minimap drawn from useMiniMap.`,code:j,children:(0,C.jsx)(y,{testId:`compose`,height:300,children:(0,C.jsx)(A,{})})}),(0,C.jsx)(u,{n:2,title:`Custom adapters`,blurb:`A clipboard shared by two canvases (copy left, paste right), a grid layout engine, and a key map with h/j/k/l.`,code:G,children:(0,C.jsx)(y,{testId:`adapters`,height:300,children:(0,C.jsx)(W,{})})}),(0,C.jsx)(u,{n:3,title:`Controlled graph and selection`,blurb:`The graph and selection live in host state. Rename a node in the list and the canvas follows; drag on the canvas and the list follows.`,code:L,children:(0,C.jsx)(y,{testId:`controlled`,height:300,children:(0,C.jsx)(I,{})})})]})}export{K as component};