import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{T as t,d as n,g as r,k as i,m as a,o,t as s,u as c,x as l}from"./editor-GZgiDRCo.js";import{s as u}from"./kit-docs-CvNs0WqT.js";import{Bc as d,Cc as f,Ic as p}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as m}from"./example-CZLJLtIC.js";import{t as h}from"./-kits.whiteboard.shared-B5uJu9Po.js";var g=e(d(),1),_=p();function v(e){let t=Math.sin(e*9301+49297)*233280;return t-Math.floor(t)-.5}var y={rect:({shape:e,editing:t})=>{let{x:n,y:r,w:i,h:a,style:o}=e,s=e=>{let t=t=>v(e*10+t)*3;return`M ${n+t(1)} ${r+t(2)} L ${n+i+t(3)} ${r+t(4)} L ${n+i+t(5)} ${r+a+t(6)} L ${n+t(7)} ${r+a+t(8)} Z`};return(0,_.jsxs)(`g`,{transform:e.rotation?`rotate(${e.rotation*180/Math.PI} ${n+i/2} ${r+a/2})`:void 0,opacity:o.opacity,children:[(0,_.jsx)(`path`,{d:s(1),fill:o.fill,stroke:`none`}),(0,_.jsx)(`path`,{d:s(1),fill:`none`,stroke:o.stroke,strokeWidth:o.strokeWidth,strokeLinejoin:`round`}),(0,_.jsx)(`path`,{d:s(2),fill:`none`,stroke:o.stroke,strokeWidth:o.strokeWidth*.6,strokeOpacity:.6}),!t&&e.text?(0,_.jsx)(`text`,{x:n+i/2,y:r+a/2,textAnchor:`middle`,dominantBaseline:`central`,fontSize:o.fontSize,fill:o.textColor,fontFamily:`'Comic Sans MS', 'Segoe Print', cursive`,children:e.text}):null]})}},b={...l,"tool:rect":[`B`,`R`],"tool:ellipse":[`E`,`O`]};function x(){return(0,_.jsx)(s,{options:{doc:(0,g.useMemo)(()=>t([i({id:`custom-renderers-1`,kind:`rect`,x:40,y:40,w:180,h:90,text:`Sketchy box`,style:{fill:`#ffec99`}}),i({id:`custom-renderers-2`,kind:`rect`,x:280,y:60,w:160,h:80,rotation:-.08,text:`Rotate me`,style:{fill:`#a5d8ff`}}),i({id:`custom-renderers-3`,kind:`ellipse`,x:120,y:190,w:160,h:90,text:`Stock ellipse`,style:{fill:`#b2f2bb`}})]),[])},renderers:y,keymap:b,label:`Custom renderers`})}var S=`import { useMemo } from "react"
import { DEFAULT_KEYMAP, type Keymap, type ShapeRenderers, WhiteboardEditor, createShape, docFromShapes } from "@kitora/whiteboard"

// A sketchy rect: the same box, drawn as two slightly offset hand-drawn passes. Swapping one kind's
// renderer leaves selection, hit testing, resize and rotate untouched.
function jitter(seed: number) {
  const s = Math.sin(seed * 9301 + 49297) * 233280
  return s - Math.floor(s) - 0.5
}

const RENDERERS: ShapeRenderers = {
  rect: ({ shape, editing }) => {
    const { x, y, w, h, style } = shape
    const pass = (k: number) => {
      const j = (i: number) => jitter(k * 10 + i) * 3
      return \`M \${x + j(1)} \${y + j(2)} L \${x + w + j(3)} \${y + j(4)} L \${x + w + j(5)} \${y + h + j(6)} L \${x + j(7)} \${y + h + j(8)} Z\`
    }
    const transform = shape.rotation ? \`rotate(\${(shape.rotation * 180) / Math.PI} \${x + w / 2} \${y + h / 2})\` : undefined
    return (
      <g transform={transform} opacity={style.opacity}>
        <path d={pass(1)} fill={style.fill} stroke="none" />
        <path d={pass(1)} fill="none" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeLinejoin="round" />
        <path d={pass(2)} fill="none" stroke={style.stroke} strokeWidth={style.strokeWidth * 0.6} strokeOpacity={0.6} />
        {!editing && shape.text ? (
          <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="central" fontSize={style.fontSize} fill={style.textColor} fontFamily="'Comic Sans MS', 'Segoe Print', cursive">
            {shape.text}
          </text>
        ) : null}
      </g>
    )
  },
}

// Rebind tools: B for boxes (as well as R), and E for ellipses.
const KEYMAP: Keymap = { ...DEFAULT_KEYMAP, "tool:rect": ["B", "R"], "tool:ellipse": ["E", "O"] }

/** Custom shape renderers and a custom keymap, on the stock editor. */
export function CustomRenderersBoard() {
  const doc = useMemo(
    () =>
      docFromShapes([
        createShape({ id: "custom-renderers-1", kind: "rect", x: 40, y: 40, w: 180, h: 90, text: "Sketchy box", style: { fill: "#ffec99" } }),
        createShape({ id: "custom-renderers-2", kind: "rect", x: 280, y: 60, w: 160, h: 80, rotation: -0.08, text: "Rotate me", style: { fill: "#a5d8ff" } }),
        createShape({ id: "custom-renderers-3", kind: "ellipse", x: 120, y: 190, w: 160, h: 90, text: "Stock ellipse", style: { fill: "#b2f2bb" } }),
      ]),
    [],
  )
  return <WhiteboardEditor options={{ doc }} renderers={RENDERERS} keymap={KEYMAP} label="Custom renderers" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>f(()=>import(`./custom-renderers-DnemL3vt.js`),[]));var C=t([i({id:`viewer-1`,kind:`text`,x:0,y:0,w:300,h:30,text:`Release checklist (view only)`,style:{fontSize:20,align:`start`}}),...[`Freeze main`,`Cut release branch`,`Run smoke tests`,`Tag and publish`].map((e,t)=>i({id:`viewer-step-${t+1}`,kind:`rect`,x:0,y:50+t*64,w:260,h:48,text:`${t+1}. ${e}`,style:{fill:t<2?`#b2f2bb`:`#f1f3f5`,align:`start`,fontSize:14}}))]);function w(){return(0,_.jsxs)(r,{readOnly:!0,label:`Read-only board`,options:{doc:C,camera:{x:40,y:24,zoom:1}},className:`relative h-full overflow-hidden bg-background outline-none`,children:[(0,_.jsx)(n,{}),(0,_.jsx)(c,{children:(0,_.jsx)(a,{})}),(0,_.jsx)(o,{className:`absolute right-2 bottom-2`})]})}var T=`import { type BoardDoc, WhiteboardCanvas, WhiteboardGrid, WhiteboardRoot, WhiteboardShapes, WhiteboardZoomControls, createShape, docFromShapes } from "@kitora/whiteboard"

const DOC: BoardDoc = docFromShapes([
  createShape({ id: "viewer-1", kind: "text", x: 0, y: 0, w: 300, h: 30, text: "Release checklist (view only)", style: { fontSize: 20, align: "start" } }),
  ...["Freeze main", "Cut release branch", "Run smoke tests", "Tag and publish"].map((text, i) =>
    createShape({ id: \`viewer-step-\${i + 1}\`, kind: "rect", x: 0, y: 50 + i * 64, w: 260, h: 48, text: \`\${i + 1}. \${text}\`, style: { fill: i < 2 ? "#b2f2bb" : "#f1f3f5", align: "start", fontSize: 14 } }),
  ),
])

/** A read-only viewer from the parts: shapes and zoom only, drags pan, keys only zoom. */
export function BoardViewer() {
  return (
    <WhiteboardRoot readOnly label="Read-only board" options={{ doc: DOC, camera: { x: 40, y: 24, zoom: 1 } }} className="relative h-full overflow-hidden bg-background outline-none">
      <WhiteboardGrid />
      <WhiteboardCanvas>
        <WhiteboardShapes />
      </WhiteboardCanvas>
      <WhiteboardZoomControls className="absolute right-2 bottom-2" />
    </WhiteboardRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>f(()=>import(`./viewer-BCJS0k-Y.js`),[]));function E(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(u,{title:`Customise`,children:"Every look and binding is a seam: shape renderers per kind, the keymap, the measurer, storage, id minting, and an add policy (`canAdd`)."}),(0,_.jsx)(m,{n:1,title:`Custom renderers and keys`,blurb:`Rects draw hand-sketched through a host renderer; selection and transforms are untouched. B draws a box, E an ellipse.`,code:S,children:(0,_.jsx)(h,{testId:`custom-renderers`,height:360,children:(0,_.jsx)(x,{})})}),(0,_.jsx)(m,{n:2,title:`A read-only viewer`,blurb:`Only the shapes and zoom parts: dragging pans, editing keys are off.`,code:T,children:(0,_.jsx)(h,{testId:`viewer`,height:360,children:(0,_.jsx)(w,{})})})]})}export{E as component};