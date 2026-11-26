import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./clipboard-paste-xoy39dNG.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./network-BgD6wpZL.js";import{t as i}from"./plus-DS8FiCg5.js";import{t as a}from"./redo-2-FKGgmyMW.js";import{t as o}from"./trash-2-BYfY5R1J.js";import{t as s}from"./undo-2-AaSwxjDx.js";import{Bc as c,Cc as l,Di as u,Ic as d,Mi as f,ti as p}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as m}from"./example-BGnSQG2Y.js";import{a as h,d as g,i as _,m as v,n as y,r as b,s as x,t as S,y as C}from"./-kits.flow.shared-DJJToV4S.js";import{t as w}from"./node-card-DqsVOdKj.js";var T=f(`grid-3x3`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]),E=e(c(),1),D=d(),O=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],k=[[`Sign-up`,`trigger`,0,120],[`Verify email`,`action`,260,40],[`Enrich profile`,`action`,260,200],[`Score lead`,`logic`,520,120],[`Sales call`,`action`,780,40],[`Nurture drip`,`action`,780,200],[`Closed`,`end`,1040,120]].map(([e,t,n,r])=>({id:e.toLowerCase().replace(/ /g,`-`),position:{x:n,y:r},data:{title:e,subtitle:t},ports:[...O]})),A=[[`sign-up`,`verify-email`],[`sign-up`,`enrich-profile`],[`verify-email`,`score-lead`],[`enrich-profile`,`score-lead`],[`score-lead`,`sales-call`],[`score-lead`,`nurture-drip`],[`sales-call`,`closed`],[`nurture-drip`,`closed`]].map(([e,t])=>({id:`${e}-${t}`,source:e,sourcePort:`out`,target:t,targetPort:`in`}));function j(){let[e,n]=(0,E.useState)(`bezier`),[c,l]=(0,E.useState)(!1),d=g({initial:{nodes:k,edges:A},edgeKind:e}),{selection:f,graph:m}=d.state;return(0,D.jsxs)(x,{flow:d,fitViewOnMount:!0,snapGrid:c?20:0,background:c?`lines`:`dots`,label:`Flow playground`,renderNode:({node:e,selected:t})=>(0,D.jsx)(w,{title:e.data.title,subtitle:e.data.subtitle,selected:t}),children:[(0,D.jsx)(b,{position:`top-left`,children:(0,D.jsxs)(`div`,{className:`${h} flex flex-wrap items-center gap-0.5 p-0.5`,role:`toolbar`,"aria-label":`Playground`,children:[(0,D.jsxs)(p,{variant:`ghost`,size:`sm`,onClick:()=>{let{width:e,height:t}=d.paneSize(),n=d.state.viewport,r=v(`step`,new Set(m.nodes.map(e=>e.id)));d.addNode({id:r,position:{x:(e/2-n.x)/n.zoom-80,y:(t/2-n.y)/n.zoom-28},data:{title:`New step`,subtitle:r},ports:[...O]})},children:[(0,D.jsx)(i,{}),` Node`]}),(0,D.jsx)(p,{variant:`ghost`,size:`icon-sm`,"aria-label":`Copy`,title:`Copy (⌘C)`,disabled:f.nodes.length===0,onClick:()=>d.copy(),children:(0,D.jsx)(u,{})}),(0,D.jsx)(p,{variant:`ghost`,size:`icon-sm`,"aria-label":`Paste`,title:`Paste (⌘V)`,onClick:()=>d.paste(),children:(0,D.jsx)(t,{})}),(0,D.jsx)(p,{variant:`ghost`,size:`icon-sm`,"aria-label":`Delete`,title:`Delete`,disabled:f.nodes.length+f.edges.length===0,onClick:()=>d.deleteSelection(),children:(0,D.jsx)(o,{})}),(0,D.jsx)(`span`,{className:`mx-0.5 h-4 w-px bg-border`}),(0,D.jsx)(p,{variant:`ghost`,size:`icon-sm`,"aria-label":`Undo`,title:`Undo (⌘Z)`,disabled:!d.canUndo,onClick:d.undo,children:(0,D.jsx)(s,{})}),(0,D.jsx)(p,{variant:`ghost`,size:`icon-sm`,"aria-label":`Redo`,title:`Redo (⇧⌘Z)`,disabled:!d.canRedo,onClick:d.redo,children:(0,D.jsx)(a,{})}),(0,D.jsx)(`span`,{className:`mx-0.5 h-4 w-px bg-border`}),(0,D.jsxs)(p,{variant:`ghost`,size:`sm`,onClick:()=>d.layout(),children:[(0,D.jsx)(r,{}),` Layout`]}),(0,D.jsx)(p,{variant:c?`secondary`:`ghost`,size:`icon-sm`,"aria-label":`Snap to grid`,"aria-pressed":c,title:`Snap to grid`,onClick:()=>l(!c),children:(0,D.jsx)(T,{})}),(0,D.jsx)(`span`,{className:`mx-0.5 h-4 w-px bg-border`}),(0,D.jsx)(`div`,{role:`group`,"aria-label":`Kind for new edges`,className:`flex gap-0.5`,children:C.map(t=>(0,D.jsx)(p,{size:`xs`,variant:t===e?`secondary`:`ghost`,"aria-pressed":t===e,onClick:()=>n(t),children:t},t))})]})}),(0,D.jsx)(b,{position:`top-right`,children:(0,D.jsxs)(`div`,{className:`${h} px-2.5 py-1 text-[11px] text-muted-foreground tabular-nums`,children:[m.nodes.length,` nodes · `,m.edges.length,` edges · `,f.nodes.length,` selected`]})}),(0,D.jsx)(y,{}),(0,D.jsx)(_,{})]})}var M=`import { useState } from "react"
import { ClipboardPaste, Copy, Grid3x3, Network, Plus, Redo2, Trash2, Undo2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { EDGE_KINDS, FlowCanvas, FlowControls, FlowPanel, MiniMap, NodeCard, PANEL_SURFACE, uniqueId, useFlow, type EdgeKind, type FlowEdge, type FlowNode } from "@kitora/flow"

type Card = { readonly title: string; readonly subtitle: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const

const STEPS: readonly [string, string, number, number][] = [
  ["Sign-up", "trigger", 0, 120],
  ["Verify email", "action", 260, 40],
  ["Enrich profile", "action", 260, 200],
  ["Score lead", "logic", 520, 120],
  ["Sales call", "action", 780, 40],
  ["Nurture drip", "action", 780, 200],
  ["Closed", "end", 1040, 120],
]
const nodes: FlowNode<Card>[] = STEPS.map(([title, subtitle, x, y]) => ({ id: title.toLowerCase().replace(/ /g, "-"), position: { x, y }, data: { title, subtitle }, ports: [...ports] }))
const pairs = [
  ["sign-up", "verify-email"],
  ["sign-up", "enrich-profile"],
  ["verify-email", "score-lead"],
  ["enrich-profile", "score-lead"],
  ["score-lead", "sales-call"],
  ["score-lead", "nurture-drip"],
  ["sales-call", "closed"],
  ["nurture-drip", "closed"],
] as const
const edges: FlowEdge[] = pairs.map(([s, t]) => ({ id: \`\${s}-\${t}\`, source: s, sourcePort: "out", target: t, targetPort: "in" }))

/** Every control in one place: edge kind, grid snap, add, copy and paste, delete, undo, layout, minimap. */
export function FlowPlayground() {
  const [kind, setKind] = useState<EdgeKind>("bezier")
  const [grid, setGrid] = useState(false)
  const flow = useFlow({ initial: { nodes, edges }, edgeKind: kind })
  const { selection, graph } = flow.state
  const addNode = () => {
    const { width, height } = flow.paneSize()
    const v = flow.state.viewport
    const id = uniqueId("step", new Set(graph.nodes.map((n) => n.id)))
    flow.addNode({ id, position: { x: (width / 2 - v.x) / v.zoom - 80, y: (height / 2 - v.y) / v.zoom - 28 }, data: { title: "New step", subtitle: id }, ports: [...ports] })
  }
  return (
    <FlowCanvas
      flow={flow}
      fitViewOnMount
      snapGrid={grid ? 20 : 0}
      background={grid ? "lines" : "dots"}
      label="Flow playground"
      renderNode={({ node, selected }) => <NodeCard title={node.data.title} subtitle={node.data.subtitle} selected={selected} />}
    >
      <FlowPanel position="top-left">
        <div className={\`\${PANEL_SURFACE} flex flex-wrap items-center gap-0.5 p-0.5\`} role="toolbar" aria-label="Playground">
          <Button variant="ghost" size="sm" onClick={addNode}>
            <Plus /> Node
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Copy" title="Copy (⌘C)" disabled={selection.nodes.length === 0} onClick={() => flow.copy()}>
            <Copy />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Paste" title="Paste (⌘V)" onClick={() => flow.paste()}>
            <ClipboardPaste />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Delete" title="Delete" disabled={selection.nodes.length + selection.edges.length === 0} onClick={() => flow.deleteSelection()}>
            <Trash2 />
          </Button>
          <span className="mx-0.5 h-4 w-px bg-border" />
          <Button variant="ghost" size="icon-sm" aria-label="Undo" title="Undo (⌘Z)" disabled={!flow.canUndo} onClick={flow.undo}>
            <Undo2 />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo" title="Redo (⇧⌘Z)" disabled={!flow.canRedo} onClick={flow.redo}>
            <Redo2 />
          </Button>
          <span className="mx-0.5 h-4 w-px bg-border" />
          <Button variant="ghost" size="sm" onClick={() => flow.layout()}>
            <Network /> Layout
          </Button>
          <Button variant={grid ? "secondary" : "ghost"} size="icon-sm" aria-label="Snap to grid" aria-pressed={grid} title="Snap to grid" onClick={() => setGrid(!grid)}>
            <Grid3x3 />
          </Button>
          <span className="mx-0.5 h-4 w-px bg-border" />
          <div role="group" aria-label="Kind for new edges" className="flex gap-0.5">
            {EDGE_KINDS.map((k) => (
              <Button key={k} size="xs" variant={k === kind ? "secondary" : "ghost"} aria-pressed={k === kind} onClick={() => setKind(k)}>
                {k}
              </Button>
            ))}
          </div>
        </div>
      </FlowPanel>
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} px-2.5 py-1 text-[11px] text-muted-foreground tabular-nums\`}>
          {graph.nodes.length} nodes · {graph.edges.length} edges · {selection.nodes.length} selected
        </div>
      </FlowPanel>
      <FlowControls />
      <MiniMap />
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./playground-Cv3mPNt4.js`),[]));var N=[{name:`core`,what:`Model (nodes, ports, edges, viewport), geometry and edge paths, pan and zoom maths, grid snap and alignment guides, the layered auto-layout, nearest-node navigation, connection rules, copy and paste, versioned JSON, the editor reducer with undo history, the key map. No DOM.`},{name:`dom`,what:`Browser readings with no React: hit testing by data attributes, key chords, pointer points, wheel intent, node measuring, and the system-clipboard adapter.`},{name:`react`,what:`Unstyled: useFlow (the controller, controlled or uncontrolled, with clipboard and layout adapters), useFlowCanvas (the pointer, wheel and key engine), the compound Flow.* parts, and the headless useMiniMap.`},{name:`ui`,what:`Styled presets built only from the parts: FlowCanvas, FlowControls, MiniMap, FlowPanel, and NodeCard with rowPorts for labelled port rows.`}];function P(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(n,{title:`Flow kit`,children:`Drag nodes, drag from a port to connect, drag empty space to pan (Shift+drag to select a box), ⌘/Ctrl + wheel or pinch to zoom. Tab into the canvas for the keyboard: arrows walk between nodes, Alt+arrows move them, ⌘Z undoes.`}),(0,D.jsx)(m,{n:1,title:`Playground`,blurb:`Add, copy, paste and delete nodes, switch the kind of new edges, snap to a grid, run the auto-layout, and undo any of it.`,code:M,children:(0,D.jsx)(S,{testId:`playground`,height:460,children:(0,D.jsx)(j,{})})}),(0,D.jsx)(m,{n:2,title:`Layers`,blurb:"One package, four layers; each imports only the ones below and has its own entry (`@kitora/flow/core`, `/dom`, `/react`, `/ui`).",children:(0,D.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,D.jsx)(`tbody`,{children:N.map(e=>(0,D.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,D.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,D.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{P as component};