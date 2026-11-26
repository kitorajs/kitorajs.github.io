import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./file-text-jZN1FxYo.js";import{t as r}from"./image-DtLVBYKl.js";import{t as i}from"./rotate-cw-Ds2wx6VW.js";import{c as a,d as o,l as s,m as c,r as l,t as u,u as d}from"./progress-Crc-sqB4.js";import{n as f}from"./stepper-lQJEWQu0.js";import{Bc as p,Cc as m,Ic as h,bi as g,ti as _}from"./index-9y5uwRd3.js";import{r as v}from"./alerts-CZ8ZY0W9.js";import{TopProgressControls as y}from"./top-progress-CZNatStF.js";import"./kit-gallery-B-Yr9fP4.js";import{t as b}from"./example-CZLJLtIC.js";import{t as x}from"./-kits.feedback.shared-CxfmAMWX.js";var S=e(p(),1),C=h(),w=[{label:`Cart`,description:`3 items`},{label:`Shipping`,description:`Address and speed`},{label:`Payment`,description:`Card or UPI`},{label:`Review`,description:`Confirm the order`}];function T(){let[e,t]=(0,S.useState)(1),[n,r]=(0,S.useState)(void 0),[i,a]=(0,S.useState)(!1),[s,c]=(0,S.useState)(!1),u=()=>{a(!0),setTimeout(()=>{if(a(!1),e===2&&!s){c(!0),r(2);return}r(void 0),t(e=>Math.min(w.length,e+1))},700)},d=e>=w.length;return(0,C.jsxs)(`div`,{className:`grid h-full gap-6 p-4 sm:grid-cols-[1fr_11rem]`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsx)(f,{steps:w,current:e,errorAt:n}),(0,C.jsx)(l,{value:e,max:w.length,size:`xs`,label:`Checkout progress`}),n===void 0?null:(0,C.jsx)(v,{tone:`error`,title:`Card declined`,children:`Your bank declined the charge. Try again or use another card.`}),d?(0,C.jsx)(v,{tone:`success`,title:`Order placed`,children:`Order #A-20931 is confirmed. A receipt is on its way.`}):null,(0,C.jsxs)(`div`,{className:`mt-auto flex gap-2`,children:[(0,C.jsx)(_,{size:`sm`,variant:`outline`,disabled:e===0||i||d,onClick:()=>t(e=>Math.max(0,e-1)),children:`Back`}),d?(0,C.jsx)(_,{size:`sm`,variant:`outline`,onClick:()=>{t(0),c(!1)},children:`Start over`}):(0,C.jsxs)(_,{size:`sm`,disabled:i,onClick:u,children:[i?(0,C.jsx)(o,{size:`xs`,label:`Working`}):null,n===void 0?e===w.length-1?`Place order`:`Continue`:`Try again`]})]})]}),(0,C.jsx)(f,{steps:w,current:e,errorAt:n,orientation:`vertical`,className:`hidden border-l pl-4 sm:flex`})]})}var E=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { InlineAlert, LinearProgress, Spinner, StepProgress } from "@kitora/feedback"

const STEPS = [
  { label: "Cart", description: "3 items" },
  { label: "Shipping", description: "Address and speed" },
  { label: "Payment", description: "Card or UPI" },
  { label: "Review", description: "Confirm the order" },
]

/**
 * Steps across the top (and down the side on the right), a thin bar for the
 * whole flow, and the payment step failing once so the error state shows.
 */
export function CheckoutSteps() {
  const [current, setCurrent] = useState(1)
  const [errorAt, setErrorAt] = useState<number | undefined>(undefined)
  const [busy, setBusy] = useState(false)
  const [failedOnce, setFailedOnce] = useState(false)
  const next = () => {
    setBusy(true)
    setTimeout(() => {
      setBusy(false)
      if (current === 2 && !failedOnce) {
        setFailedOnce(true)
        setErrorAt(2)
        return
      }
      setErrorAt(undefined)
      setCurrent((c) => Math.min(STEPS.length, c + 1))
    }, 700)
  }
  const done = current >= STEPS.length
  return (
    <div className="grid h-full gap-6 p-4 sm:grid-cols-[1fr_11rem]">
      <div className="flex flex-col gap-4">
        <StepProgress steps={STEPS} current={current} errorAt={errorAt} />
        <LinearProgress value={current} max={STEPS.length} size="xs" label="Checkout progress" />
        {errorAt !== undefined ? <InlineAlert tone="error" title="Card declined">Your bank declined the charge. Try again or use another card.</InlineAlert> : null}
        {done ? <InlineAlert tone="success" title="Order placed">Order #A-20931 is confirmed. A receipt is on its way.</InlineAlert> : null}
        <div className="mt-auto flex gap-2">
          <Button size="sm" variant="outline" disabled={current === 0 || busy || done} onClick={() => setCurrent((c) => Math.max(0, c - 1))}>Back</Button>
          {done ? (
            <Button size="sm" variant="outline" onClick={() => { setCurrent(0); setFailedOnce(false) }}>Start over</Button>
          ) : (
            <Button size="sm" disabled={busy} onClick={next}>
              {busy ? <Spinner size="xs" label="Working" /> : null}
              {errorAt !== undefined ? "Try again" : current === STEPS.length - 1 ? "Place order" : "Continue"}
            </Button>
          )}
        </div>
      </div>
      <StepProgress steps={STEPS} current={current} errorAt={errorAt} orientation="vertical" className="hidden border-l pl-4 sm:flex" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>m(()=>import(`./checkout-steps-CPe2hgxd.js`),[]));var D=[{author:`Maya Patel`,role:`Design`,initials:`MP`,text:`Shipped the new empty states across the dashboard. Every one now says why it's empty and what to do next.`},{author:`Ravi Iyer`,role:`Engineering`,initials:`RI`,text:`Toasts now pause while you hover them. No more errors vanishing mid-read.`},{author:`Sam Kim`,role:`Support`,initials:`SK`,text:`Ticket volume about failed uploads is down 40% since Retry landed.`}];function O(){let[e,t]=(0,S.useState)(!0);return(0,S.useEffect)(()=>{if(!e)return;let n=setTimeout(()=>t(!1),1500);return()=>clearTimeout(n)},[e]),(0,C.jsxs)(`div`,{className:`flex h-full flex-col gap-3 p-4`,children:[(0,C.jsx)(`div`,{children:(0,C.jsx)(_,{size:`xs`,variant:`outline`,onClick:()=>t(!0),disabled:e,children:`Reload`})}),(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-3`,children:D.map(t=>e?(0,C.jsxs)(s,{label:`Loading post`,className:`rounded-lg border p-3`,children:[(0,C.jsxs)(`div`,{className:`mb-3 flex items-center gap-2`,children:[(0,C.jsx)(a,{rounded:`full`,className:`size-7`}),(0,C.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,C.jsx)(a,{className:`h-3 w-2/3`,rounded:`sm`}),(0,C.jsx)(a,{className:`h-2.5 w-1/3`,rounded:`sm`})]})]}),(0,C.jsx)(d,{lines:3})]},t.author):(0,C.jsxs)(`article`,{className:`animate-in fade-in rounded-lg border p-3 text-[13px] duration-300`,children:[(0,C.jsxs)(`div`,{className:`mb-3 flex items-center gap-2`,children:[(0,C.jsx)(`span`,{className:`grid size-7 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary`,children:t.initials}),(0,C.jsxs)(`div`,{className:`leading-4`,children:[(0,C.jsx)(`div`,{className:`font-medium`,children:t.author}),(0,C.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:t.role})]})]}),(0,C.jsx)(`p`,{className:`text-[12px] leading-[18px] text-muted-foreground`,children:t.text})]},t.author))})]})}var k=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Skeleton, SkeletonGroup, SkeletonText } from "@kitora/feedback"

const POSTS = [
  { author: "Maya Patel", role: "Design", initials: "MP", text: "Shipped the new empty states across the dashboard. Every one now says why it's empty and what to do next." },
  { author: "Ravi Iyer", role: "Engineering", initials: "RI", text: "Toasts now pause while you hover them. No more errors vanishing mid-read." },
  { author: "Sam Kim", role: "Support", initials: "SK", text: "Ticket volume about failed uploads is down 40% since Retry landed." },
]

/** Skeletons in the exact shape of the cards they stand in for, so nothing jumps when the content lands. */
export function SkeletonSwap() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!loading) return
    const id = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(id)
  }, [loading])
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div>
        <Button size="xs" variant="outline" onClick={() => setLoading(true)} disabled={loading}>Reload</Button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {POSTS.map((p) =>
          loading ? (
            <SkeletonGroup key={p.author} label="Loading post" className="rounded-lg border p-3">
              <div className="mb-3 flex items-center gap-2">
                <Skeleton rounded="full" className="size-7" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-3 w-2/3" rounded="sm" />
                  <Skeleton className="h-2.5 w-1/3" rounded="sm" />
                </div>
              </div>
              <SkeletonText lines={3} />
            </SkeletonGroup>
          ) : (
            <article key={p.author} className="animate-in fade-in rounded-lg border p-3 text-[13px] duration-300">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">{p.initials}</span>
                <div className="leading-4">
                  <div className="font-medium">{p.author}</div>
                  <div className="text-[11px] text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <p className="text-[12px] leading-[18px] text-muted-foreground">{p.text}</p>
            </article>
          ),
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>m(()=>import(`./skeleton-swap-Dkt6X-Xs.js`),[]));var A=1048576,j=[{name:`product-shots.zip`,size:48*A,done:0,speed:3.2*A,state:`uploading`},{name:`invoice-0923.pdf`,size:1.2*A,done:0,speed:.8*A,state:`uploading`},{name:`hero@2x.png`,size:6.4*A,done:0,speed:0,state:`uploading`},{name:`brand-guide.pdf`,size:12*A,done:0,speed:2.1*A,state:`uploading`}],M=250,N=e=>`${(e/A).toFixed(1)} MB`;function P(){let[e,t]=(0,S.useState)(j);(0,S.useEffect)(()=>{let e=setInterval(()=>{t(e=>e.map(e=>{if(e.state!==`uploading`)return e;if(e.speed===0)return e.done>e.size*.35?{...e,state:`failed`}:{...e,done:e.done+.4*A};let t=Math.min(e.size,e.done+e.speed*M/1e3);return{...e,done:t,state:t>=e.size?`done`:`uploading`}}))},M);return()=>clearInterval(e)},[]);let a=e.reduce((e,t)=>e+t.size,0),o=e.reduce((e,t)=>e+t.done,0),s=e.some(e=>e.state===`uploading`),d=e.filter(e=>e.state===`failed`).length;return(0,C.jsxs)(`div`,{className:`flex h-full flex-col gap-3 p-4 text-[13px]`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsx)(u,{value:o,max:a,size:44,showValue:!0,label:`All uploads`,tone:d>0&&!s?`warning`:s?`default`:`success`}),(0,C.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,C.jsx)(`div`,{className:`font-medium`,children:s?`Uploading ${e.filter(e=>e.state===`uploading`).length} files`:`Upload finished`}),(0,C.jsxs)(`div`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[N(o),` of `,N(a)]})]}),(0,C.jsxs)(_,{size:`xs`,variant:`ghost`,onClick:()=>t(j),children:[(0,C.jsx)(i,{}),` Restart`]})]}),(0,C.jsx)(`ul`,{className:`space-y-2.5`,children:e.map(e=>(0,C.jsxs)(`li`,{className:`flex items-center gap-2.5`,children:[(0,C.jsx)(`span`,{className:`grid size-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground`,children:e.name.endsWith(`.png`)?(0,C.jsx)(r,{className:`size-3.5`}):(0,C.jsx)(n,{className:`size-3.5`})}),(0,C.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,C.jsx)(l,{value:e.done,max:e.size,label:e.name,showValue:!0,size:`xs`,tone:e.state===`failed`?`error`:e.state===`done`?`success`:`default`,valueText:e.state===`failed`?`Failed`:e.state===`done`?N(e.size):`${N(e.done)} · ${c(e.done,e.size,e.speed)||`…`}`})}),e.state===`failed`?(0,C.jsx)(_,{size:`icon-xs`,variant:`ghost`,"aria-label":`Retry ${e.name}`,onClick:()=>t(t=>t.map(t=>t.name===e.name?{...t,done:0,speed:1.6*A,state:`uploading`}:t)),children:(0,C.jsx)(i,{})}):(0,C.jsx)(_,{size:`icon-xs`,variant:`ghost`,"aria-label":`Remove ${e.name}`,disabled:e.state===`done`,onClick:()=>t(t=>t.filter(t=>t.name!==e.name)),children:(0,C.jsx)(g,{})})]},e.name))}),!s&&d>0?(0,C.jsxs)(v,{tone:`warning`,compact:!0,children:[d,` file couldn't be uploaded. Retry it or remove it.`]}):null,!s&&d===0?(0,C.jsx)(v,{tone:`success`,compact:!0,children:`All files uploaded.`}):null]})}var F=`import { useEffect, useState } from "react"
import { FileText, ImageIcon, RotateCw, X } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { CircularProgress, etaLabel, InlineAlert, LinearProgress } from "@kitora/feedback"

interface Upload {
  readonly name: string
  readonly size: number
  readonly done: number
  /** Bytes per second this file gets; 0 for the one that fails. */
  readonly speed: number
  readonly state: "uploading" | "done" | "failed"
}

const MB = 1_048_576
const SEED: readonly Upload[] = [
  { name: "product-shots.zip", size: 48 * MB, done: 0, speed: 3.2 * MB, state: "uploading" },
  { name: "invoice-0923.pdf", size: 1.2 * MB, done: 0, speed: 0.8 * MB, state: "uploading" },
  { name: "hero@2x.png", size: 6.4 * MB, done: 0, speed: 0, state: "uploading" },
  { name: "brand-guide.pdf", size: 12 * MB, done: 0, speed: 2.1 * MB, state: "uploading" },
]

const TICK_MS = 250
const mb = (b: number) => \`\${(b / MB).toFixed(1)} MB\`

/**
 * An upload queue: one linear bar per file with bytes and time left, a ring for
 * the whole batch, a failed file with Retry, and an alert once the batch ends.
 */
export function Uploads() {
  const [files, setFiles] = useState<readonly Upload[]>(SEED)
  useEffect(() => {
    const id = setInterval(() => {
      setFiles((list) =>
        list.map((f) => {
          if (f.state !== "uploading") return f
          if (f.speed === 0) return f.done > f.size * 0.35 ? { ...f, state: "failed" } : { ...f, done: f.done + 0.4 * MB }
          const done = Math.min(f.size, f.done + (f.speed * TICK_MS) / 1000)
          return { ...f, done, state: done >= f.size ? "done" : "uploading" }
        }),
      )
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])
  const total = files.reduce((n, f) => n + f.size, 0)
  const sent = files.reduce((n, f) => n + f.done, 0)
  const busy = files.some((f) => f.state === "uploading")
  const failed = files.filter((f) => f.state === "failed").length
  return (
    <div className="flex h-full flex-col gap-3 p-4 text-[13px]">
      <div className="flex items-center gap-3">
        <CircularProgress value={sent} max={total} size={44} showValue label="All uploads" tone={failed > 0 && !busy ? "warning" : busy ? "default" : "success"} />
        <div className="min-w-0 flex-1">
          <div className="font-medium">{busy ? \`Uploading \${files.filter((f) => f.state === "uploading").length} files\` : "Upload finished"}</div>
          <div className="text-[12px] text-muted-foreground tabular-nums">{mb(sent)} of {mb(total)}</div>
        </div>
        <Button size="xs" variant="ghost" onClick={() => setFiles(SEED)}><RotateCw /> Restart</Button>
      </div>
      <ul className="space-y-2.5">
        {files.map((f) => (
          <li key={f.name} className="flex items-center gap-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground">{f.name.endsWith(".png") ? <ImageIcon className="size-3.5" /> : <FileText className="size-3.5" />}</span>
            <div className="min-w-0 flex-1">
              <LinearProgress
                value={f.done}
                max={f.size}
                label={f.name}
                showValue
                size="xs"
                tone={f.state === "failed" ? "error" : f.state === "done" ? "success" : "default"}
                valueText={f.state === "failed" ? "Failed" : f.state === "done" ? mb(f.size) : \`\${mb(f.done)} · \${etaLabel(f.done, f.size, f.speed) || "…"}\`}
              />
            </div>
            {f.state === "failed" ? (
              <Button size="icon-xs" variant="ghost" aria-label={\`Retry \${f.name}\`} onClick={() => setFiles((list) => list.map((x) => (x.name === f.name ? { ...x, done: 0, speed: 1.6 * MB, state: "uploading" } : x)))}>
                <RotateCw />
              </Button>
            ) : (
              <Button size="icon-xs" variant="ghost" aria-label={\`Remove \${f.name}\`} disabled={f.state === "done"} onClick={() => setFiles((list) => list.filter((x) => x.name !== f.name))}>
                <X />
              </Button>
            )}
          </li>
        ))}
      </ul>
      {!busy && failed > 0 ? <InlineAlert tone="warning" compact>{failed} file couldn't be uploaded. Retry it or remove it.</InlineAlert> : null}
      {!busy && failed === 0 ? <InlineAlert tone="success" compact>All files uploaded.</InlineAlert> : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>m(()=>import(`./uploads-BGjBo-Kd.js`),[]));var I=`import { useRouterState } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { createTopProgress, TopProgress, useTopProgress } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

/**
 * The router adapter, one line over TanStack Router: the bar shows while a navigation is pending (after 150 ms, so a fast one never
 * flashes it) and completes when it settles. This gallery's root layout renders exactly this. The feedback kit has no router
 * dependency; any router's "is a navigation pending" works the same way.
 */
export function RouteTopProgress() {
  const pending = useRouterState({ select: (state) => state.status === "pending" })
  return <TopProgress loading={pending} label="Loading page" />
}

/** A store of its own, so these buttons drive only the bar in the box below. */
function useLocalStore() {
  const [store] = useState(() => createTopProgress())
  return store
}

/**
 * The store by hand: Start trickles forward (slowing near 90%, never reaching 100), Increment adds 10, Done fills it and fades it out.
 * \`topProgress.start()\` on the shared store does the same for the page's own bar.
 */
export function TopProgressControls() {
  const store = useLocalStore()
  const { value, phase } = useTopProgress(store)
  const box = useRef<HTMLDivElement>(null)
  return (
    <div ref={box} className="relative w-full overflow-hidden rounded-md border border-border bg-card p-4 pt-6">
      <TopProgress store={store} withinPortal={false} className="absolute" size="sm" label="Loading the report" busyTarget={() => box.current} />
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => store.start()}>
          Start
        </Button>
        <Button size="sm" variant="outline" onClick={() => store.increment()}>
          Increment
        </Button>
        <Button size="sm" variant="outline" onClick={() => store.done()}>
          Done
        </Button>
        <span className="ms-auto text-[12px] text-muted-foreground tabular-nums" data-demo-value="top-progress">
          {phase} · {Math.round(value)}%
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>m(()=>import(`./top-progress-BQwTUoM6.js`),[]));function L(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Progress`,children:`Progress and loading in the flows that need them, and the page's top progress bar.`}),(0,C.jsx)(b,{n:1,title:`An upload queue`,blurb:`Per-file bars with bytes and time left, a ring for the batch, one file that fails with Retry.`,code:F,children:(0,C.jsx)(x,{testId:`uploads`,children:(0,C.jsx)(P,{})})}),(0,C.jsx)(b,{n:2,title:`Checkout steps`,blurb:`Horizontal and vertical steps on the same state. Payment fails once to show the error step.`,code:E,children:(0,C.jsx)(x,{testId:`checkout`,height:260,children:(0,C.jsx)(T,{})})}),(0,C.jsx)(b,{n:3,title:`Skeleton to content`,blurb:`Skeletons in the shape of the cards they replace, so nothing jumps.`,code:k,children:(0,C.jsx)(x,{testId:`skeleton-swap`,children:(0,C.jsx)(O,{})})}),(0,C.jsx)(b,{n:4,title:`Top progress bar`,blurb:`TopProgress along the top edge: Start trickles it forward (never to 100 on its own), Increment adds 10, Done fills and fades it. The Code tab also has the router adapter this site's own page bar uses: loading from the router's pending state, shown only after 150 ms.`,code:I,children:(0,C.jsx)(x,{testId:`top-progress`,children:(0,C.jsx)(y,{})})})]})}export{L as component};