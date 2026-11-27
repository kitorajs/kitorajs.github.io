import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,r,t as i}from"./top-progress-Buk5tvgL.js";import{Ec as a,Uc as o,ri as s,zc as c}from"./index-BZuUy872.js";import{t as l}from"./badge-zOMNRv4l.js";import{a as u,i as d,n as f,o as p,t as m}from"./card-XcfOPVWP.js";var h=e({TopProgressComposeSave:()=>v}),g=t(o(),1),_=c();function v(){let[e]=(0,g.useState)(()=>r()),t=(0,g.useRef)(null),[n,a]=(0,g.useState)(`draft`);return(0,_.jsxs)(m,{ref:t,className:`relative w-full max-w-sm overflow-hidden`,children:[(0,_.jsx)(i,{store:e,withinPortal:!1,className:`absolute`,label:`Saving the report`,busyTarget:()=>t.current}),(0,_.jsx)(u,{children:(0,_.jsxs)(p,{className:`flex items-center gap-2`,children:[`Quarterly report `,(0,_.jsx)(l,{variant:n===`saved`?`secondary`:`outline`,children:n})]})}),(0,_.jsx)(f,{className:`text-[13px] text-muted-foreground`,children:`Twelve charts and a summary, exported as a PDF.`}),(0,_.jsx)(d,{className:`justify-end`,children:(0,_.jsx)(s,{size:`sm`,onClick:()=>{a(`saving`),e.start(),setTimeout(()=>{e.done(),a(`saved`)},1200)},disabled:n===`saving`,children:`Save`})})]})}var y=e({TopProgressSizesAndTones:()=>C}),b=[{size:`xs`,tone:`default`,label:`xs, the default (2px)`},{size:`sm`,tone:`info`,label:`sm (4px), info`},{size:`md`,tone:`success`,label:`md (6px), success`}];function x(e){let[t]=(0,g.useState)(()=>{let t=r({trickle:!1});return t.set(e),t});return t}function S({size:e,tone:t,label:n,value:r}){let a=x(r),o=(0,g.useRef)(null);return(0,_.jsxs)(`div`,{ref:o,className:`relative overflow-hidden rounded-md border border-border px-3 pt-4 pb-2 text-[12px] text-muted-foreground`,children:[(0,_.jsx)(i,{store:a,size:e,tone:t,withinPortal:!1,className:`absolute`,busyTarget:()=>o.current}),n]})}function C(){return(0,_.jsx)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:b.map((e,t)=>(0,_.jsx)(S,{...e,value:35+t*20},e.size))})}var w=e({TopProgressStore:()=>T});function T(){let[e]=(0,g.useState)(()=>r()),{value:t,phase:a}=n(e),o=(0,g.useRef)(null);return(0,_.jsxs)(`div`,{ref:o,className:`relative w-full max-w-md overflow-hidden rounded-md border border-border p-4 pt-6`,children:[(0,_.jsx)(i,{store:e,withinPortal:!1,className:`absolute`,label:`Loading`,busyTarget:()=>o.current}),(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,_.jsx)(s,{size:`sm`,onClick:()=>e.start(),children:`Start`}),(0,_.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>e.set(60),children:`Set 60%`}),(0,_.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>e.done(),children:`Done`}),(0,_.jsx)(s,{size:`sm`,variant:`ghost`,onClick:()=>e.reset(),children:`Reset`})]}),(0,_.jsxs)(`p`,{className:`mt-3 text-[12px] text-muted-foreground tabular-nums`,"data-demo-value":`top-progress-store`,children:[a,` · `,Math.round(t),`%`]})]})}var E=`import { useRef, useState } from "react"
import { createTopProgress, TopProgress } from "@kitora/feedback"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"

// A long save in a Card: Save starts the bar along the Card's top edge and completes it when the (pretend) request settles; a Badge
// shows the state. In an app the bar would be the page's, on the shared \`topProgress\`.
export function TopProgressComposeSave() {
  const [store] = useState(() => createTopProgress())
  const card = useRef<HTMLDivElement>(null)
  const [saved, setSaved] = useState<"draft" | "saving" | "saved">("draft")
  const save = () => {
    setSaved("saving")
    store.start()
    setTimeout(() => {
      store.done()
      setSaved("saved")
    }, 1200)
  }
  return (
    <Card ref={card} className="relative w-full max-w-sm overflow-hidden">
      <TopProgress store={store} withinPortal={false} className="absolute" label="Saving the report" busyTarget={() => card.current} />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Quarterly report <Badge variant={saved === "saved" ? "secondary" : "outline"}>{saved}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[13px] text-muted-foreground">Twelve charts and a summary, exported as a PDF.</CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" onClick={save} disabled={saved === "saving"}>
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>a(()=>import(`./compose-DQOiGP7t.js`),[]));var D=`import { useRef, useState } from "react"
import { createTopProgress, TopProgress } from "@kitora/feedback"

const BARS = [
  { size: "xs", tone: "default", label: "xs, the default (2px)" },
  { size: "sm", tone: "info", label: "sm (4px), info" },
  { size: "md", tone: "success", label: "md (6px), success" },
] as const

/** A store already part way through a load, still for the picture: no trickle. */
function useStoreAt(value: number) {
  const [store] = useState(() => {
    const created = createTopProgress({ trickle: false })
    created.set(value)
    return created
  })
  return store
}

function Bar({ size, tone, label, value }: { size: "xs" | "sm" | "md"; tone: "default" | "info" | "success"; label: string; value: number }) {
  const store = useStoreAt(value)
  const box = useRef<HTMLDivElement>(null)
  return (
    <div ref={box} className="relative overflow-hidden rounded-md border border-border px-3 pt-4 pb-2 text-[12px] text-muted-foreground">
      <TopProgress store={store} size={size} tone={tone} withinPortal={false} className="absolute" busyTarget={() => box.current} />
      {label}
    </div>
  )
}

// Three sizes and the progress tones, each mid-load. Each box is its bar's \`busyTarget\`, so only it is marked busy, not the page. The bar reads the progress slot's radius and shadow variables.
export function TopProgressSizesAndTones() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {BARS.map((bar, i) => (
        <Bar key={bar.size} {...bar} value={35 + i * 20} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./sizes-and-tones-CA-HzB0a.js`),[]));var O=`import { useRef, useState } from "react"
import { createTopProgress, TopProgress, useTopProgress } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

// A store of its own (\`createTopProgress\`), so these buttons drive only the bar at the top of this box; the page's bar follows the
// shared \`topProgress\`. \`withinPortal={false}\` with \`absolute\` pins the bar to the box instead of the page, and the box is the \`busyTarget\`.
export function TopProgressStore() {
  const [store] = useState(() => createTopProgress())
  const { value, phase } = useTopProgress(store)
  const box = useRef<HTMLDivElement>(null)
  return (
    <div ref={box} className="relative w-full max-w-md overflow-hidden rounded-md border border-border p-4 pt-6">
      <TopProgress store={store} withinPortal={false} className="absolute" label="Loading" busyTarget={() => box.current} />
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => store.start()}>
          Start
        </Button>
        <Button size="sm" variant="outline" onClick={() => store.set(60)}>
          Set 60%
        </Button>
        <Button size="sm" variant="outline" onClick={() => store.done()}>
          Done
        </Button>
        <Button size="sm" variant="ghost" onClick={() => store.reset()}>
          Reset
        </Button>
      </div>
      <p className="mt-3 text-[12px] text-muted-foreground tabular-nums" data-demo-value="top-progress-store">
        {phase} · {Math.round(value)}%
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./store-CKDkaF6T.js`),[]));var k={"./demos/top-progress/compose.tsx":h,"./demos/top-progress/sizes-and-tones.tsx":y,"./demos/top-progress/store.tsx":w},A={"./demos/top-progress/compose.tsx":E,"./demos/top-progress/sizes-and-tones.tsx":D,"./demos/top-progress/store.tsx":O};export{k as modules,A as sources};