import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{i as a,o}from"./glue-1V5Hu_3C.js";import{r as s}from"./sortable-list-CE3-BvnT.js";import{n as c,r as l,t as u}from"./bridge-Dq4iRnyE.js";import"./kit-gallery-Bph7isB2.js";import{t as d}from"./example-BGnSQG2Y.js";var f=e(n(),1),p=i();function m(){let[e,t]=(0,f.useState)([]),n=a({onMove(e,n){let r=c(n)?.payload();r&&t(e=>[...e,...r.files.map(e=>`${e.name} (${e.size} bytes)`)])}});return(0,p.jsx)(`div`,{ref:(0,f.useCallback)(e=>{if(!e||!n)return;let t=u(n,{data:e=>e});return()=>t.destroy()},[n]),className:`max-w-md`,children:(0,p.jsxs)(`div`,{ref:o(n,{id:`uploads`,kind:`container`,...l({kinds:[`files`]})}),"data-demo-target":`basic-files`,className:`min-h-24 rounded-md border-2 border-dashed p-3 text-[13px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5`,children:[`Drop files from your desktop here.`,(0,p.jsx)(`ul`,{className:`mt-1 text-foreground`,children:e.map((e,t)=>(0,p.jsx)(`li`,{"data-file":e,children:e},`${e}-${t}`))})]})})}var h=`import { useCallback, useState } from "react"
import { useDomDnd, useDroppableRef } from "@kitora/dnd"
import { attachNativeBridge, nativeDragOf, nativeTarget, type NativeDrag } from "@kitora/dnd/html5"

// Files dragged in from the desktop. The html5 bridge turns the browser's native drag into the
// same engine drag as a pointer one, so a native drop arrives in onMove like any other.
export function BasicFileDrop() {
  const [names, setNames] = useState<readonly string[]>([])
  const dnd = useDomDnd<NativeDrag>({
    onMove(_op, source) {
      const payload = nativeDragOf(source)?.payload()
      if (payload) setNames((xs) => [...xs, ...payload.files.map((f) => \`\${f.name} (\${f.size} bytes)\`)])
    },
  })
  // one bridge per engine, attached while the element is mounted
  const bridgeRef = useCallback((el: HTMLElement | null) => {
    if (!el || !dnd) return undefined
    const bridge = attachNativeBridge<NativeDrag>(dnd, { data: (drag) => drag })
    return () => bridge.destroy()
  }, [dnd])
  // accept files only; the zone gets data-dnd-native="accept" while a file hovers it
  const zoneRef = useDroppableRef(dnd, { id: "uploads", kind: "container", ...nativeTarget<NativeDrag>({ kinds: ["files"] }) })
  return (
    <div ref={bridgeRef} className="max-w-md">
      <div ref={zoneRef} data-demo-target="basic-files" className="min-h-24 rounded-md border-2 border-dashed p-3 text-[13px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5">
        Drop files from your desktop here.
        <ul className="mt-1 text-foreground">{names.map((n, i) => <li key={\`\${n}-\${i}\`} data-file={n}>{n}</li>)}</ul>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./files-BhcclZPY.js`),[]));function g(){let[e,t]=(0,f.useState)([`First`,`Second`,`Third`,`Fourth`]);return(0,p.jsxs)(`div`,{className:`flex max-w-xs flex-col gap-2`,children:[(0,p.jsx)(s,{label:`Steps`,items:e,onItemsChange:e=>t(e),getId:e=>e,renderItem:e=>e}),(0,p.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,"data-demo":`basic-keyboard-order`,children:[`Order: `,e.join(`, `)]})]})}var _=`import { useState } from "react"
import { SortableList } from "@kitora/dnd"

// Keyboard dragging is on by default: Tab to a row, Space picks it up, the arrows move it,
// Space drops and Escape cancels. A screen reader hears every step.
export function BasicKeyboard() {
  const [order, setOrder] = useState<readonly string[]>(["First", "Second", "Third", "Fourth"])
  return (
    <div className="flex max-w-xs flex-col gap-2">
      <SortableList label="Steps" items={order} onItemsChange={(next) => setOrder(next)} getId={(s) => s} renderItem={(s) => s} />
      <p className="text-[12px] text-muted-foreground" data-demo="basic-keyboard-order">Order: {order.join(", ")}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./keyboard-BCilLvgG.js`),[]));function v(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Basics: keyboard and files`,children:`A drag does not need a mouse, and it does not need to start in the page.`}),(0,p.jsx)(d,{n:1,title:`Keyboard dragging`,blurb:`Tab to a row, press Space, move with the arrows, press Space to drop or Escape to cancel.`,code:_,children:(0,p.jsx)(g,{})}),(0,p.jsx)(d,{n:2,title:`Drop files from the desktop`,blurb:`Drag files from your file manager onto the box; each one is listed with its size.`,code:h,children:(0,p.jsx)(m,{})})]})}export{v as component};