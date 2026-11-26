import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{O as t,T as n,k as r,t as i}from"./editor-GZgiDRCo.js";import{s as a}from"./kit-docs-CvNs0WqT.js";import{Bc as o,Cc as s,Ic as c}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";import{t as u}from"./-kits.whiteboard.shared-B5uJu9Po.js";var d=c(),f=(e,t,n,i,a=`#e7f5ff`)=>r({id:e,kind:`rect`,x:t,y:n,w:170,h:56,text:i,style:{fill:a,stroke:`#1c7ed6`,fontSize:14}}),p=(e,t)=>r({id:e,kind:`arrow`,points:t.map(([e,t])=>({x:e,y:t})),style:{stroke:`#495057`}}),m=(e,t,n,i)=>r({id:e,kind:`text`,x:t,y:n,w:40,h:20,text:i,style:{fontSize:12,textColor:`#868e96`,align:`start`}}),h=[r({id:`start`,kind:`ellipse`,x:205,y:10,w:150,h:54,text:`Visitor lands`,style:{fill:`#d3f9d8`,stroke:`#2f9e44`,fontSize:14}}),p(`f1`,[[280,64],[280,100]]),f(`form`,195,100,`Fills sign-up form`),p(`f2`,[[280,156],[280,200]]),r({id:`valid`,kind:`diamond`,x:210,y:200,w:140,h:100,text:`Valid?`,style:{fill:`#fff9db`,stroke:`#f08c00`,fontSize:14}}),p(`f3`,[[350,250],[450,250]]),m(`yes`,380,228,`yes`),f(`verify`,450,222,`Send verify email`),p(`f4`,[[210,250],[110,250],[110,128],[195,128]]),m(`no`,150,228,`no`),p(`f5`,[[535,278],[535,340]]),f(`click`,450,340,`Clicks the link`),p(`f6`,[[535,396],[535,440]]),r({id:`done`,kind:`ellipse`,x:460,y:440,w:150,h:54,text:`Onboarding`,style:{fill:`#d3f9d8`,stroke:`#2f9e44`,fontSize:14}}),r({id:`note`,kind:`sticky`,x:660,y:200,w:170,h:110,text:`Resend after 60 s; expire links after 24 h.`,style:{fontSize:13}})];function g(){return(0,d.jsx)(i,{options:{doc:n(h)},label:`Sign-up flowchart`})}var _=`import { type Shape, WhiteboardEditor, createShape, docFromShapes } from "@kitora/whiteboard"

// A sign-up flow: terminals as ellipses, steps as rects, a decision diamond, labelled branches and an
// elbow arrow (an arrow through several points) looping back to the form.
const step = (id: string, x: number, y: number, text: string, fill = "#e7f5ff"): Shape => createShape({ id, kind: "rect", x, y, w: 170, h: 56, text, style: { fill, stroke: "#1c7ed6", fontSize: 14 } })
const flow = (id: string, pts: readonly [number, number][]): Shape => createShape({ id, kind: "arrow", points: pts.map(([x, y]) => ({ x, y })), style: { stroke: "#495057" } })
const label = (id: string, x: number, y: number, text: string): Shape => createShape({ id, kind: "text", x, y, w: 40, h: 20, text, style: { fontSize: 12, textColor: "#868e96", align: "start" } })

const SHAPES: readonly Shape[] = [
  createShape({ id: "start", kind: "ellipse", x: 205, y: 10, w: 150, h: 54, text: "Visitor lands", style: { fill: "#d3f9d8", stroke: "#2f9e44", fontSize: 14 } }),
  flow("f1", [[280, 64], [280, 100]]),
  step("form", 195, 100, "Fills sign-up form"),
  flow("f2", [[280, 156], [280, 200]]),
  createShape({ id: "valid", kind: "diamond", x: 210, y: 200, w: 140, h: 100, text: "Valid?", style: { fill: "#fff9db", stroke: "#f08c00", fontSize: 14 } }),
  flow("f3", [[350, 250], [450, 250]]),
  label("yes", 380, 228, "yes"),
  step("verify", 450, 222, "Send verify email"),
  flow("f4", [[210, 250], [110, 250], [110, 128], [195, 128]]),
  label("no", 150, 228, "no"),
  flow("f5", [[535, 278], [535, 340]]),
  step("click", 450, 340, "Clicks the link"),
  flow("f6", [[535, 396], [535, 440]]),
  createShape({ id: "done", kind: "ellipse", x: 460, y: 440, w: 150, h: 54, text: "Onboarding", style: { fill: "#d3f9d8", stroke: "#2f9e44", fontSize: 14 } }),
  createShape({ id: "note", kind: "sticky", x: 660, y: 200, w: 170, h: 110, text: "Resend after 60 s; expire links after 24 h.", style: { fontSize: 13 } }),
]

/** A flowchart: drag a step and its arrows stay put, so re-route them by their endpoints (select an arrow, drag a knob). */
export function FlowchartBoard() {
  return <WhiteboardEditor options={{ doc: docFromShapes(SHAPES) }} label="Sign-up flowchart" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>s(()=>import(`./flowchart-BrK86I8T.js`),[]));var v=e(o(),1),y=[{title:`Went well`,color:`#bbf7d0`,notes:[`Shipped search on time`,`Pairing on the importer`,`Zero-downtime migration`]},{title:`To improve`,color:`#fed7aa`,notes:[`Flaky e2e on CI`,`Late design hand-off`,`Too many meetings on Thursday`]},{title:`Actions`,color:`#bfdbfe`,notes:[`Quarantine flaky tests (Ravi)`,`Design review on Mondays`,`No-meeting Thursday PM`]}],b=260,x=y.flatMap((e,t)=>{let n=20+t*(b+24);return[r({id:`col-${t}`,kind:`rect`,x:n,y:20,w:b,h:470,style:{fill:`#f8f9fa`,stroke:`#dee2e6`,strokeWidth:1},locked:!0}),r({id:`title-${t}`,kind:`text`,x:n+14,y:30,w:200,h:26,text:e.title,style:{fontSize:18,align:`start`},locked:!0}),...e.notes.map((i,a)=>r({id:`n-${t}-${a}`,kind:`sticky`,x:n+18+a%2*6,y:74+a*136,w:220,h:118,rotation:(a%3-1)*.02,text:i,style:{fill:e.color,fontSize:15}}))]});function S(){let[e,r]=(0,v.useState)(!1);return(0,d.jsx)(i,{options:{doc:n(x),tool:`select`,style:{stroke:`none`,fill:t[0],strokeWidth:2,dash:`solid`,opacity:1,fontSize:15,textColor:`#1e293b`,align:`start`}},readOnly:e,toolbar:!e,stylePanel:!e,label:`Sprint retro`,overlay:(0,d.jsxs)(`label`,{className:`absolute top-2 right-2 flex h-7 items-center gap-1.5 rounded-md border bg-card px-2 text-[12px] shadow-sm`,children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>r(e.currentTarget.checked)}),`Present (read only)`]})})}var C=`import { useState } from "react"
import { STICKY_COLORS, type Shape, WhiteboardEditor, createShape, docFromShapes } from "@kitora/whiteboard"

const COLUMNS = [
  { title: "Went well", color: "#bbf7d0", notes: ["Shipped search on time", "Pairing on the importer", "Zero-downtime migration"] },
  { title: "To improve", color: "#fed7aa", notes: ["Flaky e2e on CI", "Late design hand-off", "Too many meetings on Thursday"] },
  { title: "Actions", color: "#bfdbfe", notes: ["Quarantine flaky tests (Ravi)", "Design review on Mondays", "No-meeting Thursday PM"] },
] as const

const COL_W = 260
const SHAPES: Shape[] = COLUMNS.flatMap((col, c) => {
  const x = 20 + c * (COL_W + 24)
  return [
    createShape({ id: \`col-\${c}\`, kind: "rect", x, y: 20, w: COL_W, h: 470, style: { fill: "#f8f9fa", stroke: "#dee2e6", strokeWidth: 1 }, locked: true }),
    createShape({ id: \`title-\${c}\`, kind: "text", x: x + 14, y: 30, w: 200, h: 26, text: col.title, style: { fontSize: 18, align: "start" }, locked: true }),
    ...col.notes.map((text, i) => createShape({ id: \`n-\${c}-\${i}\`, kind: "sticky", x: x + 18 + (i % 2) * 6, y: 74 + i * 136, w: 220, h: 118, rotation: ((i % 3) - 1) * 0.02, text, style: { fill: col.color, fontSize: 15 } })),
  ]
})

/** A sprint retro: locked columns, sticky notes in the column colours, and a read-only switch for presenting. */
export function RetroBoard() {
  const [readOnly, setReadOnly] = useState(false)
  return (
    <WhiteboardEditor
      options={{ doc: docFromShapes(SHAPES), tool: "select", style: { stroke: "none", fill: STICKY_COLORS[0], strokeWidth: 2, dash: "solid", opacity: 1, fontSize: 15, textColor: "#1e293b", align: "start" } }}
      readOnly={readOnly}
      toolbar={!readOnly}
      stylePanel={!readOnly}
      label="Sprint retro"
      overlay={
        <label className="absolute top-2 right-2 flex h-7 items-center gap-1.5 rounded-md border bg-card px-2 text-[12px] shadow-sm">
          <input type="checkbox" checked={readOnly} onChange={(e) => setReadOnly(e.currentTarget.checked)} />
          Present (read only)
        </label>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./retro-CIkFEfyA.js`),[]));function w(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a,{title:`Diagrams`,children:`Two boards people actually make: a product flow and a team retro.`}),(0,d.jsx)(l,{n:1,title:`Sign-up flowchart`,blurb:`Terminals, steps, a decision diamond and an elbow arrow. Select an arrow to drag any of its points; Shift snaps to 45°.`,code:_,children:(0,d.jsx)(u,{testId:`flowchart`,height:540,children:(0,d.jsx)(g,{})})}),(0,d.jsx)(l,{n:2,title:`Sprint retro`,blurb:`Locked columns are click-through, so a drag on them selects notes. Press S and click to add a note; switch on Present for a read-only view.`,code:C,children:(0,d.jsx)(u,{testId:`retro`,height:540,children:(0,d.jsx)(S,{})})})]})}export{w as component};