import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{A as t,D as n,E as r,T as i,_ as a,a as ee,b as o,c as te,d as s,f as c,g as l,h as u,i as d,j as f,k as p,l as m,m as h,n as g,o as _,p as v,r as y,t as b,u as x,v as S,w as C}from"./editor-Dd0GjSte.js";import{t as ne}from"./circle-D2xKPfHi.js";import{s as re}from"./kit-docs-Cf27Kpa-.js";import{t as ie}from"./square-B9UpastD.js";import{t as ae}from"./color-swatches-DrnFiqhQ.js";import{Ec as w,Uc as oe,zc as T}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as E}from"./example-B67lLz1F.js";import{a as D,i as O,n as k,o as A,r as j,s as M,t as N}from"./-kits.whiteboard.shared-x-5jlzh1.js";var P={Root:l,Canvas:x,Shapes:h,Selection:v,Marquee:c,Grid:s,TextEditor:u},F=T();function I(){return(0,F.jsx)(b,{options:{tool:`draw`,style:{...n,stroke:`#1971c2`,strokeWidth:4}},label:`Freehand`})}var L=`import { DEFAULT_STYLE, WhiteboardEditor } from "@kitora/whiteboard"

/** The pen: strokes are smoothed while you draw and simplified when you lift. It stays on the pen after each stroke. */
export function BasicFreehand() {
  return <WhiteboardEditor options={{ tool: "draw", style: { ...DEFAULT_STYLE, stroke: "#1971c2", strokeWidth: 4 } }} label="Freehand" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>w(()=>import(`./freehand-CpVOvi-m.js`),[]));var R=i([p({id:`from-parts-1`,kind:`rect`,x:40,y:40,w:150,h:80,text:`Built from parts`,style:{fill:`#ffec99`}}),p({id:`from-parts-2`,kind:`ellipse`,x:250,y:50,w:120,h:70,text:`Same store`})]);function z(){let{store:e}=S(),t=a(e=>e.tool),n=a(e=>e.history.present.order.length);return(0,F.jsxs)(`div`,{role:`toolbar`,"aria-label":`My tools`,className:`absolute top-2 left-2 flex items-center gap-1 rounded-md border bg-card p-1 text-[12px] shadow-sm`,children:[o.map(n=>(0,F.jsx)(`button`,{type:`button`,"data-tool":n,"aria-pressed":t===n,onClick:()=>e.setTool(n),className:`h-6 rounded px-1.5 capitalize hover:bg-muted aria-pressed:bg-foreground aria-pressed:text-background`,children:n},n)),(0,F.jsxs)(`span`,{"data-testid":`parts-count`,className:`px-1.5 tabular-nums text-muted-foreground`,children:[n,` shapes`]})]})}function B(){return(0,F.jsxs)(P.Root,{defaultDoc:R,fitOnMount:!0,label:`Board from parts`,className:`relative h-full overflow-hidden bg-background outline-none`,children:[(0,F.jsx)(P.Grid,{variant:`lines`,gap:32}),(0,F.jsxs)(P.Canvas,{children:[(0,F.jsx)(P.Shapes,{}),(0,F.jsx)(P.Selection,{color:`#e8590c`}),(0,F.jsx)(P.Marquee,{color:`#e8590c`})]}),(0,F.jsx)(P.TextEditor,{}),(0,F.jsx)(z,{}),(0,F.jsx)(g.Zoom,{className:`absolute right-2 bottom-2`})]})}var V=`import { TOOLS, Whiteboard, WhiteboardControls, createShape, docFromShapes, useBoardState, useWhiteboard } from "@kitora/whiteboard"

const START = docFromShapes([
  createShape({ id: "from-parts-1", kind: "rect", x: 40, y: 40, w: 150, h: 80, text: "Built from parts", style: { fill: "#ffec99" } }),
  createShape({ id: "from-parts-2", kind: "ellipse", x: 250, y: 50, w: 120, h: 70, text: "Same store" }),
])

/** A host-made tool strip: plain buttons over the same store the preset uses. */
function MyTools() {
  const { store } = useWhiteboard()
  const tool = useBoardState((s) => s.tool)
  const count = useBoardState((s) => s.history.present.order.length)
  return (
    <div role="toolbar" aria-label="My tools" className="absolute top-2 left-2 flex items-center gap-1 rounded-md border bg-card p-1 text-[12px] shadow-sm">
      {TOOLS.map((t) => (
        <button key={t} type="button" data-tool={t} aria-pressed={tool === t} onClick={() => store.setTool(t)} className="h-6 rounded px-1.5 capitalize hover:bg-muted aria-pressed:bg-foreground aria-pressed:text-background">
          {t}
        </button>
      ))}
      <span data-testid="parts-count" className="px-1.5 tabular-nums text-muted-foreground">
        {count} shapes
      </span>
    </div>
  )
}

/**
 * Compose your own: the editor preset rebuilt from the public compound parts, with a different
 * layout: a lines grid, an orange selection, a host-made tool strip and the kit's zoom controls.
 */
export function BasicFromParts() {
  return (
    <Whiteboard.Root defaultDoc={START} fitOnMount label="Board from parts" className="relative h-full overflow-hidden bg-background outline-none">
      <Whiteboard.Grid variant="lines" gap={32} />
      <Whiteboard.Canvas>
        <Whiteboard.Shapes />
        <Whiteboard.Selection color="#e8590c" />
        <Whiteboard.Marquee color="#e8590c" />
      </Whiteboard.Canvas>
      <Whiteboard.TextEditor />
      <MyTools />
      <WhiteboardControls.Zoom className="absolute right-2 bottom-2" />
    </Whiteboard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>w(()=>import(`./from-parts-BZKhxup7.js`),[]));var H=i([p({id:`minimal-board-1`,kind:`rect`,x:40,y:40,w:160,h:90,text:`Drag me`,style:{fill:`#a5d8ff`}}),p({id:`minimal-board-2`,kind:`sticky`,x:260,y:40,w:150,h:150,text:`Double-click to edit me`})]);function U(){return(0,F.jsx)(b,{options:{doc:H},label:`Basic board`})}var W=`import { WhiteboardEditor, createShape, docFromShapes } from "@kitora/whiteboard"

// Two shapes to start from; everything else (tools, styles, undo, export) comes with the editor.
const START = docFromShapes([
  createShape({ id: "minimal-board-1", kind: "rect", x: 40, y: 40, w: 160, h: 90, text: "Drag me", style: { fill: "#a5d8ff" } }),
  createShape({ id: "minimal-board-2", kind: "sticky", x: 260, y: 40, w: 150, h: 150, text: "Double-click to edit me" }),
])

/** The smallest board: one component and a starting document. */
export function BasicBoard() {
  return <WhiteboardEditor options={{ doc: START }} label="Basic board" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>w(()=>import(`./minimal-board-BGDi4EQX.js`),[]));var G=e(oe(),1),K=i([p({id:`shapes-from-data-1`,kind:`rect`,x:20,y:30,w:120,h:70,text:`rect`}),p({id:`shapes-from-data-2`,kind:`ellipse`,x:170,y:30,w:120,h:70,text:`ellipse`,style:{fill:`#b2f2bb`}}),p({id:`shapes-from-data-3`,kind:`line`,points:[{x:20,y:150},{x:140,y:190}]}),p({id:`shapes-from-data-4`,kind:`arrow`,points:[{x:170,y:190},{x:290,y:150}],style:{stroke:`#1971c2`}}),p({id:`shapes-from-data-5`,kind:`text`,x:20,y:220,w:120,h:26,text:`Free text`,style:{align:`start`}}),p({id:`shapes-from-data-6`,kind:`sticky`,x:170,y:220,w:120,h:90,text:`Sticky`})]);function q(){let[e,t]=(0,G.useState)(K),n=r(e).reduce((e,t)=>({...e,[t.kind]:(e[t.kind]??0)+1}),{});return(0,F.jsxs)(`div`,{className:`grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_180px] sm:grid-rows-1`,children:[(0,F.jsx)(b,{doc:e,onDocChange:t,stylePanel:!1,label:`Shapes from data`}),(0,F.jsxs)(`aside`,{"aria-label":`Document`,tabIndex:0,className:`max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:[(0,F.jsx)(`div`,{className:`mb-1.5 font-medium`,children:`Document`}),(0,F.jsx)(`ul`,{className:`space-y-0.5 tabular-nums text-muted-foreground`,children:Object.entries(n).map(([e,t])=>(0,F.jsxs)(`li`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:e}),(0,F.jsx)(`span`,{children:t})]},e))}),(0,F.jsxs)(`div`,{className:`mt-2 border-t pt-2 tabular-nums`,children:[e.order.length,` shapes`]})]})]})}var J=`import { useState } from "react"
import { type BoardDoc, WhiteboardEditor, createShape, docFromShapes, shapesInOrder } from "@kitora/whiteboard"

// Every kind of shape, built from plain data.
const START = docFromShapes([
  createShape({ id: "shapes-from-data-1", kind: "rect", x: 20, y: 30, w: 120, h: 70, text: "rect" }),
  createShape({ id: "shapes-from-data-2", kind: "ellipse", x: 170, y: 30, w: 120, h: 70, text: "ellipse", style: { fill: "#b2f2bb" } }),
  createShape({ id: "shapes-from-data-3", kind: "line", points: [{ x: 20, y: 150 }, { x: 140, y: 190 }] }),
  createShape({ id: "shapes-from-data-4", kind: "arrow", points: [{ x: 170, y: 190 }, { x: 290, y: 150 }], style: { stroke: "#1971c2" } }),
  createShape({ id: "shapes-from-data-5", kind: "text", x: 20, y: 220, w: 120, h: 26, text: "Free text", style: { align: "start" } }),
  createShape({ id: "shapes-from-data-6", kind: "sticky", x: 170, y: 220, w: 120, h: 90, text: "Sticky" }),
])

/** Controlled: the host owns the document, the board reports every edit. */
export function BasicShapesFromData() {
  const [doc, setDoc] = useState<BoardDoc>(START)
  const counts = shapesInOrder(doc).reduce<Record<string, number>>((acc, s) => ({ ...acc, [s.kind]: (acc[s.kind] ?? 0) + 1 }), {})
  return (
    <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_180px] sm:grid-rows-1">
      <WhiteboardEditor doc={doc} onDocChange={setDoc} stylePanel={false} label="Shapes from data" />
      <aside aria-label="Document" tabIndex={0} className="max-h-32 overflow-auto border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
        <div className="mb-1.5 font-medium">Document</div>
        <ul className="space-y-0.5 tabular-nums text-muted-foreground">
          {Object.entries(counts).map(([kind, n]) => (
            <li key={kind} className="flex justify-between">
              <span>{kind}</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 border-t pt-2 tabular-nums">{doc.order.length} shapes</div>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>w(()=>import(`./shapes-from-data-WXrqMmkA.js`),[]));var se=i([p({id:`named-parts-1`,kind:`rect`,x:40,y:40,w:160,h:80,text:`Select me`,style:{fill:`#a5d8ff`}}),p({id:`named-parts-2`,kind:`diamond`,x:260,y:40,w:120,h:100,text:`Decide`})]);function ce(){return(0,F.jsxs)(l,{defaultDoc:se,fitOnMount:!0,label:`Board from named parts`,className:`relative h-full overflow-hidden bg-background outline-none`,children:[(0,F.jsx)(s,{}),(0,F.jsxs)(x,{children:[(0,F.jsx)(h,{}),(0,F.jsx)(v,{}),(0,F.jsx)(c,{})]}),(0,F.jsx)(u,{}),(0,F.jsxs)(`div`,{className:`absolute top-2 left-2 flex items-center gap-1`,children:[(0,F.jsx)(y,{}),(0,F.jsx)(ee,{tools:[`select`,`hand`,`rect`,`ellipse`,`diamond`,`arrow`,`text`]})]}),(0,F.jsx)(d,{className:`absolute top-14 left-2`}),(0,F.jsx)(_,{className:`absolute right-2 bottom-2`})]})}var Y=`import { createShape, docFromShapes } from "@kitora/whiteboard/core"
import { WhiteboardCanvas, WhiteboardGrid, WhiteboardMarquee, WhiteboardRoot, WhiteboardSelection, WhiteboardShapes, WhiteboardTextEditor } from "@kitora/whiteboard/react"
import { WhiteboardMenu, WhiteboardStylePanel, WhiteboardToolbar, WhiteboardZoomControls } from "@kitora/whiteboard/ui"

const START = docFromShapes([
  createShape({ id: "named-parts-1", kind: "rect", x: 40, y: 40, w: 160, h: 80, text: "Select me", style: { fill: "#a5d8ff" } }),
  createShape({ id: "named-parts-2", kind: "diamond", x: 260, y: 40, w: 120, h: 100, text: "Decide" }),
])

/**
 * The editor laid out by hand from the long-named exports: the board parts from \`/react\`
 * (\`WhiteboardRoot\`, \`WhiteboardGrid\`, \`WhiteboardCanvas\`, \`WhiteboardShapes\`, \`WhiteboardSelection\`,
 * \`WhiteboardMarquee\`, \`WhiteboardTextEditor\`) and the styled controls from \`/ui\` (\`WhiteboardToolbar\`,
 * \`WhiteboardStylePanel\` (shown while something is selected), \`WhiteboardMenu\`, \`WhiteboardZoomControls\`).
 */
export function BasicNamedParts() {
  return (
    <WhiteboardRoot defaultDoc={START} fitOnMount label="Board from named parts" className="relative h-full overflow-hidden bg-background outline-none">
      <WhiteboardGrid />
      <WhiteboardCanvas>
        <WhiteboardShapes />
        <WhiteboardSelection />
        <WhiteboardMarquee />
      </WhiteboardCanvas>
      <WhiteboardTextEditor />
      <div className="absolute top-2 left-2 flex items-center gap-1">
        <WhiteboardMenu />
        <WhiteboardToolbar tools={["select", "hand", "rect", "ellipse", "diamond", "arrow", "text"]} />
      </div>
      <WhiteboardStylePanel className="absolute top-14 left-2" />
      <WhiteboardZoomControls className="absolute right-2 bottom-2" />
    </WhiteboardRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>w(()=>import(`./named-parts-bINHSFha.js`),[]));var le=i([p({id:`panel-parts-1`,kind:`rect`,x:40,y:40,w:160,h:90,text:`Shadowed box`,style:{fill:`#ffec99`}}),p({id:`panel-parts-2`,kind:`ellipse`,x:260,y:50,w:140,h:80,text:`Stock ellipse`,style:{fill:`#b2f2bb`}})]),X={rect:({shape:e,editing:t,measurer:n})=>{let r=C(t?{...e,text:``}:e,n);return(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`g`,{transform:`translate(5 5)`,opacity:.15,children:(0,F.jsx)(m,{node:r})}),(0,F.jsx)(m,{node:r})]})},ellipse:e=>(0,F.jsx)(`g`,{opacity:.85,children:(0,F.jsx)(te,{...e})})},Z=[{tool:`select`,label:`Select`,icon:(0,F.jsx)(t,{})},{tool:`hand`,label:`Pan`,icon:(0,F.jsx)(f,{})},{tool:`rect`,label:`Rectangle`,icon:(0,F.jsx)(ie,{})},{tool:`ellipse`,label:`Ellipse`,icon:(0,F.jsx)(ne,{})}],Q=[`#ffec99`,`#a5d8ff`,`#b2f2bb`,`#ffc9c9`];function ue(){let{store:e}=S(),t=a(e=>e.tool),n=a(e=>e.style.fill);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(M,{label:`My tools`,className:`absolute top-2 left-2 flex items-center gap-0.5 p-1`,children:[Z.slice(0,2).map(n=>(0,F.jsx)(O,{label:n.label,active:t===n.tool,onClick:()=>e.setTool(n.tool),children:n.icon},n.tool)),(0,F.jsx)(k,{}),Z.slice(2).map(n=>(0,F.jsx)(O,{label:n.label,active:t===n.tool,onClick:()=>e.setTool(n.tool),children:n.icon},n.tool))]}),(0,F.jsx)(A,{className:`absolute top-2 right-2 p-2`,children:(0,F.jsxs)(j,{label:`Fill`,children:[(0,F.jsx)(D,{active:n===`none`,onClick:()=>e.setStyle({fill:`none`})}),(0,F.jsx)(ae,{label:`Fill colour`,columns:Q.length,swatches:Q.map(e=>({value:e,label:`Fill ${e}`})),value:n,onChange:t=>e.setStyle({fill:t}),className:`w-fit`})]})})]})}function de(){return(0,F.jsxs)(P.Root,{defaultDoc:le,fitOnMount:!0,renderers:X,label:`Board with custom controls`,className:`relative h-full overflow-hidden bg-background outline-none`,children:[(0,F.jsx)(P.Grid,{}),(0,F.jsxs)(P.Canvas,{children:[(0,F.jsx)(P.Shapes,{}),(0,F.jsx)(P.Selection,{}),(0,F.jsx)(P.Marquee,{})]}),(0,F.jsx)(P.TextEditor,{}),(0,F.jsx)(ue,{})]})}var $=`import type { ReactNode } from "react"
import { MousePointer2, Square, Circle, Hand } from "lucide-react"
import { createShape, docFromShapes, describeShape, type Tool } from "@kitora/whiteboard/core"
import { DefaultShape, SvgNodeView, Whiteboard, useBoardState, useWhiteboard, type ShapeRenderers } from "@kitora/whiteboard/react"
import { ColorSwatches } from "@kitora/pickers"
import { Divider, Field, IconButton, NoFillButton, Panel, ToolbarPanel } from "@kitora/whiteboard/ui"

const START = docFromShapes([
  createShape({ id: "panel-parts-1", kind: "rect", x: 40, y: 40, w: 160, h: 90, text: "Shadowed box", style: { fill: "#ffec99" } }),
  createShape({ id: "panel-parts-2", kind: "ellipse", x: 260, y: 50, w: 140, h: 80, text: "Stock ellipse", style: { fill: "#b2f2bb" } }),
])

// Rects get a drop shadow: the core's description drawn twice with \`SvgNodeView\`, offset and faded
// underneath. Ellipses keep the stock look through \`DefaultShape\`, wrapped to lower their opacity.
const RENDERERS: ShapeRenderers = {
  rect: ({ shape, editing, measurer }) => {
    const node = describeShape(editing ? { ...shape, text: "" } : shape, measurer)
    return (
      <g>
        <g transform="translate(5 5)" opacity={0.15}>
          <SvgNodeView node={node} />
        </g>
        <SvgNodeView node={node} />
      </g>
    )
  },
  ellipse: (props) => (
    <g opacity={0.85}>
      <DefaultShape {...props} />
    </g>
  ),
}

const TOOLS: readonly { readonly tool: Tool; readonly label: string; readonly icon: ReactNode }[] = [
  { tool: "select", label: "Select", icon: <MousePointer2 /> },
  { tool: "hand", label: "Pan", icon: <Hand /> },
  { tool: "rect", label: "Rectangle", icon: <Square /> },
  { tool: "ellipse", label: "Ellipse", icon: <Circle /> },
]
const FILLS = ["#ffec99", "#a5d8ff", "#b2f2bb", "#ffc9c9"] as const

/** A host-made toolbar and fill picker from the kit's chrome parts, over the same store. */
function MyControls() {
  const { store } = useWhiteboard()
  const tool = useBoardState((s) => s.tool)
  const fill = useBoardState((s) => s.style.fill)
  return (
    <>
      <ToolbarPanel label="My tools" className="absolute top-2 left-2 flex items-center gap-0.5 p-1">
        {TOOLS.slice(0, 2).map((t) => (
          <IconButton key={t.tool} label={t.label} active={tool === t.tool} onClick={() => store.setTool(t.tool)}>
            {t.icon}
          </IconButton>
        ))}
        <Divider />
        {TOOLS.slice(2).map((t) => (
          <IconButton key={t.tool} label={t.label} active={tool === t.tool} onClick={() => store.setTool(t.tool)}>
            {t.icon}
          </IconButton>
        ))}
      </ToolbarPanel>
      <Panel className="absolute top-2 right-2 p-2">
        <Field label="Fill">
          <NoFillButton active={fill === "none"} onClick={() => store.setStyle({ fill: "none" })} />
          <ColorSwatches label="Fill colour" columns={FILLS.length} swatches={FILLS.map((c) => ({ value: c, label: \`Fill \${c}\` }))} value={fill} onChange={(c) => store.setStyle({ fill: c })} className="w-fit" />
        </Field>
      </Panel>
    </>
  )
}

/**
 * The kit's chrome parts (\`Panel\`, \`ToolbarPanel\`, \`IconButton\`, \`Divider\`, \`Field\`, \`NoFillButton\`) for
 * your own controls, with pickers' \`ColorSwatches\` for the fill colours, and shape renderers built on \`SvgNodeView\` and
 * \`DefaultShape\`.
 */
export function BasicPanelParts() {
  return (
    <Whiteboard.Root defaultDoc={START} fitOnMount renderers={RENDERERS} label="Board with custom controls" className="relative h-full overflow-hidden bg-background outline-none">
      <Whiteboard.Grid />
      <Whiteboard.Canvas>
        <Whiteboard.Shapes />
        <Whiteboard.Selection />
        <Whiteboard.Marquee />
      </Whiteboard.Canvas>
      <Whiteboard.TextEditor />
      <MyControls />
    </Whiteboard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>w(()=>import(`./panel-parts-DZjOcX_1.js`),[]));function fe(){return(0,F.jsxs)(`div`,{children:[(0,F.jsx)(re,{title:`Basics: the board`,children:"A board is a document of shapes plus a store that turns pointer gestures into edits. `WhiteboardEditor` is the whole thing; every piece of it is also a part you can place yourself."}),(0,F.jsx)(E,{n:1,title:`The smallest board`,blurb:`One component and a starting document. Drag, resize, rotate, double-click to edit text.`,code:W,children:(0,F.jsx)(N,{testId:`basic-board`,height:360,children:(0,F.jsx)(U,{})})}),(0,F.jsx)(E,{n:2,title:`Shapes from data`,blurb:"Every kind built with `createShape`. Controlled: the host keeps the document and the side panel reads it.",code:J,children:(0,F.jsx)(N,{testId:`basic-shapes`,height:380,children:(0,F.jsx)(q,{})})}),(0,F.jsx)(E,{n:3,title:`Freehand`,blurb:`The pen smooths as you draw and simplifies on release; the stroke is a shape like any other.`,code:L,children:(0,F.jsx)(N,{testId:`basic-freehand`,height:320,children:(0,F.jsx)(I,{})})}),(0,F.jsx)(E,{n:4,title:`Compose your own`,blurb:"The editor rebuilt from `Whiteboard.Root`, `.Grid`, `.Canvas`, `.Shapes`, `.Selection`, `.Marquee` and `.TextEditor`, with a host-made toolbar, an orange selection and `WhiteboardControls.Zoom`.",code:V,children:(0,F.jsx)(N,{testId:`basic-parts`,height:340,children:(0,F.jsx)(B,{})})}),(0,F.jsx)(E,{n:5,title:`The editor from named parts`,blurb:"The long-named exports laid out by hand: `WhiteboardRoot`, `WhiteboardGrid`, `WhiteboardCanvas`, `WhiteboardShapes`, `WhiteboardSelection`, `WhiteboardMarquee`, `WhiteboardTextEditor`, with `WhiteboardMenu`, `WhiteboardToolbar`, `WhiteboardStylePanel` and `WhiteboardZoomControls`. Select a shape to see the style panel.",code:Y,children:(0,F.jsx)(N,{testId:`basic-named-parts`,height:460,children:(0,F.jsx)(ce,{})})}),(0,F.jsx)(E,{n:6,title:`Your own controls and renderers`,blurb:"`ToolbarPanel`, `IconButton` and `Divider` for a tool strip, `Panel`, `Field`, `NoFillButton` and pickers' `ColorSwatches` for a fill picker; rects drawn twice with `SvgNodeView` for a shadow, ellipses through `DefaultShape`.",code:$,children:(0,F.jsx)(N,{testId:`basic-panel-parts`,height:340,children:(0,F.jsx)(de,{})})})]})}export{fe as component};