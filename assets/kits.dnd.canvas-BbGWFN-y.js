import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{c as n,i as r,l as i,n as a,t as o}from"./select-8usvpmkP.js";import{Bc as s,Cc as c,Ic as l}from"./index-B9ukmIN1.js";import{t as u}from"./free-canvas-CLwN87oi.js";import"./kit-gallery-Bph7isB2.js";import{t as d}from"./example-BGnSQG2Y.js";var f=e(s(),1),p=l(),m=[{id:`Note A`,x:24,y:24},{id:`Note B`,x:168,y:96},{id:`Note C`,x:312,y:48}],h=480,g=240,_=24,v=[{x:240,y:120}],y=[.75,1,1.25],b=[`free`,`x`,`y`];function x(){let[e,t]=(0,f.useState)(m),[s,c]=(0,f.useState)(!0),[l,d]=(0,f.useState)(!1),[x,C]=(0,f.useState)(`free`),[w,T]=(0,f.useState)(1);return(0,p.jsxs)(`div`,{"data-demo":`canvas`,className:`flex flex-col gap-2`,children:[(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,p.jsxs)(`label`,{className:`flex h-7 items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`snap`,checked:s,onChange:e=>c(e.target.checked)}),` Snap to `,_,`px`]}),(0,p.jsxs)(`label`,{className:`flex h-7 items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`magnet`,checked:l,onChange:e=>d(e.target.checked)}),` Magnet at the centre`]}),(0,p.jsxs)(`span`,{className:`flex h-7 items-center gap-1.5`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`Axis`}),(0,p.jsxs)(o,{items:b.map(e=>({value:e,label:e})),value:x,onValueChange:e=>C(e??`free`),children:[(0,p.jsx)(n,{size:`sm`,"aria-label":`Axis`,"data-demo-select":`axis`,className:`text-[13px]`,children:(0,p.jsx)(i,{})}),(0,p.jsx)(a,{alignItemWithTrigger:!1,children:b.map(e=>(0,p.jsx)(r,{value:e,children:e},e))})]})]}),(0,p.jsxs)(`span`,{className:`flex h-7 items-center gap-1.5`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`Zoom`}),(0,p.jsxs)(o,{items:y.map(e=>({value:e,label:`${Math.round(e*100)}%`})),value:w,onValueChange:e=>e!==null&&T(e),children:[(0,p.jsx)(n,{size:`sm`,"aria-label":`Zoom`,"data-demo-select":`zoom`,className:`text-[13px]`,children:(0,p.jsx)(i,{})}),(0,p.jsx)(a,{alignItemWithTrigger:!1,children:y.map(e=>(0,p.jsxs)(r,{value:e,children:[Math.round(e*100),`%`]},e))})]})]})]}),(0,p.jsx)(u,{label:`Whiteboard`,width:h,height:g,items:e,getId:e=>e.id,getPosition:e=>e,setPosition:(e,t)=>({...e,x:t.x,y:t.y}),grid:s?_:0,magnet:l?v:void 0,lockAxis:x===`free`?void 0:x,zoom:w,onItemsChange:e=>t(e),renderItem:e=>e.id}),(0,p.jsx)(S,{name:`canvas`,children:e.map(e=>`${e.id} @ ${e.x},${e.y}`).join(` · `)})]})}function S({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function C(){return(0,p.jsx)(x,{})}var w=`import { type ReactNode, useState } from "react"
import { type Axis, FreeCanvas, type Point } from "@kitora/dnd"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

// Snap, bounds, axis, magnet and zoom: D47, D79–D82, D87. Drag a note: it snaps to the dotted grid and never leaves the canvas. Try the axis lock, the centre magnet and the zoom: at 75% and 125% the note still tracks the pointer and lands in canvas units.

/** One node on the canvas. */
interface Node {
  readonly id: string
  readonly x: number
  readonly y: number
}

const START: readonly Node[] = [
  { id: "Note A", x: 24, y: 24 },
  { id: "Note B", x: 168, y: 96 },
  { id: "Note C", x: 312, y: 48 },
]

/** Canvas size in canvas units, and the snap step. */
const WIDTH = 480

const HEIGHT = 240

const GRID = 24

/** The magnet point: the canvas centre. */
const MAGNET: readonly Point[] = [{ x: 240, y: 120 }]

const ZOOMS = [0.75, 1, 1.25] as const

const AXES: readonly (Axis | "free")[] = ["free", "x", "y"]

function CanvasDemo() {
  const [nodes, setNodes] = useState<readonly Node[]>(START)
  const [snap, setSnap] = useState(true)
  const [magnet, setMagnet] = useState(false)
  const [axis, setAxis] = useState<Axis | "free">("free")
  const [zoom, setZoom] = useState<number>(1)
  return (
    <div data-demo="canvas" className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3 text-[13px]">
        <label className="flex h-7 items-center gap-1.5">
          <input type="checkbox" data-demo-toggle="snap" checked={snap} onChange={(e) => setSnap(e.target.checked)} /> Snap to {GRID}px
        </label>
        <label className="flex h-7 items-center gap-1.5">
          <input type="checkbox" data-demo-toggle="magnet" checked={magnet} onChange={(e) => setMagnet(e.target.checked)} /> Magnet at the centre
        </label>
        <span className="flex h-7 items-center gap-1.5">
          <span aria-hidden="true">Axis</span>
          <Select items={AXES.map((a) => ({ value: a, label: a }))} value={axis} onValueChange={(next: Axis | "free" | null) => setAxis(next ?? "free")}>
            <SelectTrigger size="sm" aria-label="Axis" data-demo-select="axis" className="text-[13px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {AXES.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </span>
        <span className="flex h-7 items-center gap-1.5">
          <span aria-hidden="true">Zoom</span>
          <Select items={ZOOMS.map((z) => ({ value: z, label: \`\${Math.round(z * 100)}%\` }))} value={zoom} onValueChange={(next: number | null) => next !== null && setZoom(next)}>
            <SelectTrigger size="sm" aria-label="Zoom" data-demo-select="zoom" className="text-[13px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {ZOOMS.map((z) => (
                <SelectItem key={z} value={z}>
                  {Math.round(z * 100)}%
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </span>
      </div>
      <FreeCanvas
        label="Whiteboard"
        width={WIDTH}
        height={HEIGHT}
        items={nodes}
        getId={(n) => n.id}
        getPosition={(n) => n}
        setPosition={(n, p) => ({ ...n, x: p.x, y: p.y })}
        grid={snap ? GRID : 0}
        magnet={magnet ? MAGNET : undefined}
        lockAxis={axis === "free" ? undefined : axis}
        zoom={zoom}
        onItemsChange={(next) => setNodes(next)}
        renderItem={(n) => n.id}
      />
      <DemoStatus name="canvas">{nodes.map((n) => \`\${n.id} @ \${n.x},\${n.y}\`).join(" · ")}</DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function SnapCanvas() {
  return <CanvasDemo />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>c(()=>import(`./canvas-canvas-CF-_OiLq.js`),[]));function T(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Free canvas`,children:`FreeCanvas positions items anywhere on a bounded surface. The item itself follows the pointer; the modifier pipeline snaps, clamps and locks it, and a drop reports its new position.`}),(0,p.jsx)(d,{n:1,title:`Snap, bounds, axis, magnet and zoom`,blurb:`D47, D79–D82, D87. Drag a note: it snaps to the dotted grid and never leaves the canvas. Try the axis lock, the centre magnet and the zoom: at 75% and 125% the note still tracks the pointer and lands in canvas units.`,code:w,children:(0,p.jsx)(C,{})})]})}export{T as component};