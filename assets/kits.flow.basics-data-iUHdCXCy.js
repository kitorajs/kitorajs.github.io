import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./textarea-BzT4gNdi.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";import{a as c,d as l,n as u,p as d,r as f,s as p,t as m}from"./-kits.flow.shared-Du06GQFI.js";var h=a(),g=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],_=[{id:`in`,kind:`in`,side:`top`},{id:`out`,kind:`out`,side:`bottom`}],v=[`ingest`,`validate`,`dedupe`,`enrich`,`geo`,`score`,`store`,`alert`,`report`],y=e=>({x:e*137%520,y:e*89%260}),b=[[`ingest`,`validate`],[`validate`,`dedupe`],[`dedupe`,`enrich`],[`enrich`,`geo`],[`enrich`,`score`],[`geo`,`store`],[`score`,`store`],[`score`,`alert`],[`store`,`report`]],x=e=>({nodes:v.map((t,n)=>({id:t,position:y(n),data:{label:t},ports:[...e]})),edges:b.map(([e,t])=>({id:`${e}-${t}`,source:e,sourcePort:`out`,target:t,targetPort:`in`}))});function S(){let e=l({initial:x(g)}),t=t=>{let n=t===`LR`?g:_;e.dispatch({type:`setGraph`,graph:{...e.current().graph,nodes:e.current().graph.nodes.map(e=>({...e,ports:[...n]}))},history:!1}),requestAnimationFrame(()=>e.layout({direction:t}))};return(0,h.jsxs)(p,{flow:e,fitViewOnMount:!0,label:`Auto layout`,children:[(0,h.jsx)(u,{history:!0}),(0,h.jsx)(f,{position:`top-right`,children:(0,h.jsxs)(`div`,{className:`${c} flex gap-1 p-1 text-[12px]`,children:[(0,h.jsx)(o,{variant:`ghost`,size:`xs`,onClick:()=>t(`LR`),children:`Layout → left to right`}),(0,h.jsx)(o,{variant:`ghost`,size:`xs`,onClick:()=>t(`TB`),children:`Layout ↓ top to bottom`})]})})]})}var C=`import { FlowCanvas, FlowControls, FlowPanel, PANEL_SURFACE, useFlow, type FlowEdge, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"

type Box = { readonly label: string }

const LR = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const TB = [
  { id: "in", kind: "in", side: "top" },
  { id: "out", kind: "out", side: "bottom" },
] as const

const NAMES = ["ingest", "validate", "dedupe", "enrich", "geo", "score", "store", "alert", "report"]
// Scattered on purpose; Layout puts them in ranks.
const scatter = (i: number) => ({ x: (i * 137) % 520, y: (i * 89) % 260 })
const EDGES: [string, string][] = [
  ["ingest", "validate"],
  ["validate", "dedupe"],
  ["dedupe", "enrich"],
  ["enrich", "geo"],
  ["enrich", "score"],
  ["geo", "store"],
  ["score", "store"],
  ["score", "alert"],
  ["store", "report"],
]

const graphFor = (ports: typeof LR | typeof TB) => ({
  nodes: NAMES.map((id, i): FlowNode<Box> => ({ id, position: scatter(i), data: { label: id }, ports: [...ports] })),
  edges: EDGES.map(([s, t]): FlowEdge => ({ id: \`\${s}-\${t}\`, source: s, sourcePort: "out", target: t, targetPort: "in" })),
})

/** \`flow.layout()\` runs the kit's layered layout (ranks, crossing reduction, centred columns) as one undoable step. */
export function BasicAutoLayout() {
  const flow = useFlow({ initial: graphFor(LR) })
  const run = (direction: "LR" | "TB") => {
    // Move the ports to match the direction, then lay out.
    const ports = direction === "LR" ? LR : TB
    flow.dispatch({ type: "setGraph", graph: { ...flow.current().graph, nodes: flow.current().graph.nodes.map((n) => ({ ...n, ports: [...ports] })) }, history: false })
    requestAnimationFrame(() => flow.layout({ direction }))
  }
  return (
    <FlowCanvas flow={flow} fitViewOnMount label="Auto layout">
      <FlowControls history />
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex gap-1 p-1 text-[12px]\`}>
          <Button variant="ghost" size="xs" onClick={() => run("LR")}>
            Layout → left to right
          </Button>
          <Button variant="ghost" size="xs" onClick={() => run("TB")}>
            Layout ↓ top to bottom
          </Button>
        </div>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>i(()=>import(`./auto-layout-DTcMOLup.js`),[]));var w=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],T=[[`Inbox`,0,60],[`Triage`,200,0],[`Backlog`,200,130],[`In progress`,420,0],[`Review`,420,130],[`Done`,640,60]].map(([e,t,n])=>({id:e.toLowerCase().replace(` `,`-`),position:{x:t,y:n},data:{label:e},ports:[...w]})),E=[[`inbox`,`triage`],[`inbox`,`backlog`],[`triage`,`in-progress`],[`backlog`,`review`],[`in-progress`,`done`],[`review`,`done`]].map(([e,t])=>({id:`${e}-${t}`,source:e??``,sourcePort:`out`,target:t??``,targetPort:`in`,kind:`step`}));function D(){return(0,h.jsx)(p,{flow:l({initial:{nodes:T,edges:E}}),fitViewOnMount:!0,label:`Keyboard navigation`,children:(0,h.jsx)(f,{position:`bottom-right`,children:(0,h.jsx)(`table`,{className:`${c} text-[11px]`,children:(0,h.jsx)(`tbody`,{children:d.map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`py-0.5 pr-2 pl-2 font-mono whitespace-nowrap`,children:e.keys}),(0,h.jsx)(`td`,{className:`py-0.5 pr-2 text-muted-foreground`,children:e.what})]},e.keys))})})})})}var O=`import { FLOW_KEY_HELP, FlowCanvas, FlowPanel, PANEL_SURFACE, useFlow, type FlowEdge, type FlowNode } from "@kitora/flow"

type Box = { readonly label: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const PLACES = [
  ["Inbox", 0, 60],
  ["Triage", 200, 0],
  ["Backlog", 200, 130],
  ["In progress", 420, 0],
  ["Review", 420, 130],
  ["Done", 640, 60],
] as const
const nodes: FlowNode<Box>[] = PLACES.map(([label, x, y]) => ({ id: label.toLowerCase().replace(" ", "-"), position: { x, y }, data: { label }, ports: [...ports] }))
const edges: FlowEdge[] = [
  ["inbox", "triage"],
  ["inbox", "backlog"],
  ["triage", "in-progress"],
  ["backlog", "review"],
  ["in-progress", "done"],
  ["review", "done"],
].map(([s, t]) => ({ id: \`\${s}-\${t}\`, source: s ?? "", sourcePort: "out", target: t ?? "", targetPort: "in", kind: "step" }))

/** Tab into the canvas, then the arrows walk to the nearest node that way; Space selects, Alt+arrows move it, Delete removes it. */
export function BasicKeyboard() {
  const flow = useFlow({ initial: { nodes, edges } })
  return (
    <FlowCanvas flow={flow} fitViewOnMount label="Keyboard navigation">
      <FlowPanel position="bottom-right">
        <table className={\`\${PANEL_SURFACE} text-[11px]\`}>
          <tbody>
            {FLOW_KEY_HELP.map((row) => (
              <tr key={row.keys}>
                <td className="py-0.5 pr-2 pl-2 font-mono whitespace-nowrap">{row.keys}</td>
                <td className="py-0.5 pr-2 text-muted-foreground">{row.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </FlowPanel>
    </FlowCanvas>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>i(()=>import(`./keyboard-DEhh2UXX.js`),[]));var k=e(r(),1),A=[{id:`in`,kind:`in`},{id:`out`,kind:`out`}],j=[{id:`a`,position:{x:0,y:0},data:{label:`Load`},ports:[...A]},{id:`b`,position:{x:220,y:60},data:{label:`Save`},ports:[...A]}],M=e=>typeof e==`object`&&e&&`label`in e&&typeof e.label==`string`?{label:e.label}:void 0;function N(){let e=l({initial:{nodes:j,edges:[{id:`e`,source:`a`,sourcePort:`out`,target:`b`,targetPort:`in`}]}}),[t,r]=(0,k.useState)(``),[i,a]=(0,k.useState)(``);return(0,h.jsxs)(`div`,{className:`grid h-full grid-cols-1 sm:grid-cols-[1fr_300px]`,children:[(0,h.jsx)(p,{flow:e,fitViewOnMount:!0,label:`Save and load`,children:(0,h.jsx)(u,{})}),(0,h.jsxs)(`div`,{className:`flex min-h-0 flex-col gap-1.5 border-t p-2 sm:border-t-0 sm:border-l`,children:[(0,h.jsxs)(`div`,{className:`flex gap-1`,children:[(0,h.jsx)(o,{variant:`outline`,size:`sm`,onClick:()=>{r(e.toJSON()),a(``)},children:`Save →`}),(0,h.jsx)(o,{variant:`outline`,size:`sm`,disabled:!t,onClick:()=>{let n=e.load(t,M);a(n.ok?``:n.error)},children:`← Load`})]}),(0,h.jsx)(n,{"aria-label":`Flow JSON`,value:t,onChange:e=>r(e.target.value),spellCheck:!1,placeholder:`Click Save to see the JSON.`,className:`min-h-0 flex-1 resize-none bg-muted/30 font-mono text-[11px] leading-snug`}),i&&(0,h.jsx)(`p`,{role:`alert`,className:`text-[12px] text-destructive`,children:i})]})]})}var P=`import { useState } from "react"
import { FlowCanvas, FlowControls, useFlow, type FlowNode } from "@kitora/flow"
import { Button } from "@kitora/ui/button"
import { Textarea } from "@kitora/ui/textarea"

type Box = { readonly label: string }

const ports = [
  { id: "in", kind: "in" },
  { id: "out", kind: "out" },
] as const
const nodes: FlowNode<Box>[] = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "Load" }, ports: [...ports] },
  { id: "b", position: { x: 220, y: 60 }, data: { label: "Save" }, ports: [...ports] },
]

// \`load\` validates every field and hands each node's \`data\` to this parser: only the host knows its shape.
const parseBox = (raw: unknown): Box | undefined => (typeof raw === "object" && raw !== null && "label" in raw && typeof raw.label === "string" ? { label: raw.label } : undefined)

/** Save writes the graph and viewport as versioned JSON; edit it and Load it back. Bad input is refused with the path of the first problem. */
export function BasicSaveLoad() {
  const flow = useFlow({ initial: { nodes, edges: [{ id: "e", source: "a", sourcePort: "out", target: "b", targetPort: "in" }] } })
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-[1fr_300px]">
      <FlowCanvas flow={flow} fitViewOnMount label="Save and load">
        <FlowControls />
      </FlowCanvas>
      <div className="flex min-h-0 flex-col gap-1.5 border-t p-2 sm:border-t-0 sm:border-l">
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setText(flow.toJSON())
              setError("")
            }}
          >
            Save →
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!text}
            onClick={() => {
              const result = flow.load(text, parseBox)
              setError(result.ok ? "" : result.error)
            }}
          >
            ← Load
          </Button>
        </div>
        <Textarea aria-label="Flow JSON" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} placeholder="Click Save to see the JSON." className="min-h-0 flex-1 resize-none bg-muted/30 font-mono text-[11px] leading-snug" />
        {error && <p role="alert" className="text-[12px] text-destructive">{error}</p>}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>i(()=>import(`./save-load-B34tIClx.js`),[]));function F(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Basics: keys, JSON and layout`,children:`The canvas is a keyboard application, the graph is versioned JSON, and the layout is a pure function over the graph.`}),(0,h.jsx)(s,{n:1,title:`Keyboard navigation`,blurb:`Tab into the canvas. Arrows walk to the nearest node in that direction and pan it into view.`,code:O,children:(0,h.jsx)(m,{testId:`keyboard`,height:320,children:(0,h.jsx)(D,{})})}),(0,h.jsx)(s,{n:2,title:`Save and load JSON`,blurb:`Save, edit the JSON (rename a label, break a field), Load. The node data goes through your parser.`,code:P,children:(0,h.jsx)(m,{testId:`save-load`,height:320,children:(0,h.jsx)(N,{})})}),(0,h.jsx)(s,{n:3,title:`Auto-layout`,blurb:`A layered layout written in the kit: break cycles, rank by longest path, order by barycentre, centre the columns.`,code:C,children:(0,h.jsx)(m,{testId:`auto-layout`,height:340,children:(0,h.jsx)(S,{})})})]})}export{F as component};