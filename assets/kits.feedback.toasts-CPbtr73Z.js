import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,i as n}from"./toaster-CJLpSLxB.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{n as i}from"./presets-D72qfcZU.js";import{Bc as a,Cc as o,Cn as s,Ic as c,mt as l,ti as u}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{t as f}from"./-kits.feedback.shared-CxfmAMWX.js";var p=c(),m=l({position:`bottom-right`}),h=0;function g(){return(0,p.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>m.error(`Can't reach the server`,{description:`Retrying…`}),children:`Same error (press 4×)`}),(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>{m.loading(`Saving draft…`,{id:`autosave`}),setTimeout(()=>m.success(`Draft saved`,{id:`autosave`,description:`Version ${++h}`}),700)},children:`Update by id`}),(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>m(`New message`,{dedupeKey:!1}),children:`No dedupe`}),(0,p.jsx)(n,{toaster:m,contained:!0})]})}var _=`import { Button } from "@kitora/ui/button"
import { createToaster, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

let n = 0

/**
 * Raising the same toast again does not stack a copy: the one on screen shows a
 * count and its timer restarts. A known \`id\` updates a toast in place instead
 * (a "Saving… / Saved" status), and \`dedupeKey: false\` opts one toast out.
 */
export function ToastDedupe() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => toast.error("Can't reach the server", { description: "Retrying…" })}>
        Same error (press 4×)
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          toast.loading("Saving draft…", { id: "autosave" })
          setTimeout(() => toast.success("Draft saved", { id: "autosave", description: \`Version \${++n}\` }), 700)
        }}
      >
        Update by id
      </Button>
      <Button size="sm" variant="outline" onClick={() => toast("New message", { dedupeKey: false })}>
        No dedupe
      </Button>
      <Toaster toaster={toast} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>o(()=>import(`./toast-dedupe-CWbmQKBr.js`),[]));var v=e(a(),1),y=l({position:`top-center`,max:4});function b(){let[e,t]=(0,v.useState)(!1);return(0,p.jsxs)(`div`,{className:`flex h-full flex-col justify-end gap-2 p-4`,children:[(0,p.jsxs)(`label`,{className:`flex items-center gap-1.5 text-[12px] text-muted-foreground`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),className:`size-3 accent-primary`}),` Always expanded`]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>y.success(`Payment received`,{description:`₹12,400 from Acme Corp`}),children:`Success`}),(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>y.warning(`Disk 85% full`,{description:`Clean up old builds soon.`}),children:`Warning`}),(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>y.error(`Webhook failed`,{description:`POST /hooks/stripe returned 502.`}),children:`Error`}),(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>y.info(`Ravi is editing this doc`),children:`Info`})]}),(0,p.jsx)(n,{toaster:y,contained:!0,richColors:!0,showProgress:!0,expand:e})]})}var x=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createToaster, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "top-center", max: 4 })

/**
 * Rich colours, a run-down bar, swipe to dismiss and pause on hover. Drag a
 * toast sideways (a flick or 40% of its width dismisses it). While the pointer
 * or focus is on the stack, every bar freezes; switching tabs freezes them too.
 */
export function ToastGestures() {
  const [expand, setExpand] = useState(false)
  return (
    <div className="flex h-full flex-col justify-end gap-2 p-4">
      <label className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
        <input type="checkbox" checked={expand} onChange={(e) => setExpand(e.target.checked)} className="size-3 accent-primary" /> Always expanded
      </label>
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => toast.success("Payment received", { description: "₹12,400 from Acme Corp" })}>Success</Button>
        <Button size="sm" variant="outline" onClick={() => toast.warning("Disk 85% full", { description: "Clean up old builds soon." })}>Warning</Button>
        <Button size="sm" variant="outline" onClick={() => toast.error("Webhook failed", { description: "POST /hooks/stripe returned 502." })}>Error</Button>
        <Button size="sm" variant="outline" onClick={() => toast.info("Ravi is editing this doc")}>Info</Button>
      </div>
      <Toaster toaster={toast} contained richColors showProgress expand={expand} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>o(()=>import(`./toast-gestures-P70JUtUb.js`),[]));var S=l({position:`bottom-right`});function C(){return(0,p.jsx)(s,{children:(0,p.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,p.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>S(`Message archived`,{action:{label:`Open`,onClick:()=>{}},duration:1e4}),children:`Raise a toast, then press F8`}),(0,p.jsxs)(i,{trigger:(0,p.jsx)(u,{size:`sm`,variant:`outline`,children:`Open a dialog`}),title:`Rename project`,children:[(0,p.jsx)(`p`,{className:`mb-3 text-[13px] text-muted-foreground`,children:`Toasts raised from here paint above this dialog, and clicking one keeps the dialog open.`}),(0,p.jsx)(u,{size:`sm`,onClick:()=>S.success(`Project renamed`,{description:`Click me: the dialog stays open.`}),children:`Raise a toast`})]}),(0,p.jsx)(n,{toaster:S})]})})}var w=`import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, Modal } from "@kitora/overlay"
import { createToaster, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

/**
 * Press F8 to move focus into the toasts, Tab between their buttons, Escape to
 * close the focused one. The toaster paints in the overlay kit's \`toast\` band, so
 * a toast stays above an open dialog and clicking it does not close the dialog.
 */
export function ToastKeyboard() {
  return (
    <EnsureOverlayUi>
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => toast("Message archived", { action: { label: "Open", onClick: () => {} }, duration: 10_000 })}>
        Raise a toast, then press F8
      </Button>
      <Modal trigger={<Button size="sm" variant="outline">Open a dialog</Button>} title="Rename project">
        <p className="mb-3 text-[13px] text-muted-foreground">Toasts raised from here paint above this dialog, and clicking one keeps the dialog open.</p>
        <Button size="sm" onClick={() => toast.success("Project renamed", { description: "Click me: the dialog stays open." })}>Raise a toast</Button>
      </Modal>
      <Toaster toaster={toast} />
    </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>o(()=>import(`./toast-keyboard-Bd-y7DGx.js`),[]));var T=l({position:`bottom-right`,max:3,overflow:`queue`}),E=l({position:`bottom-right`,max:3,overflow:`drop-oldest`}),D={queue:T,"drop-oldest":E},O=[`Build #1824 started`,`Tests passed`,`Preview deployed`,`Ravi approved the PR`,`Merged into main`,`Production deploy started`,`Production deploy finished`,`Cache warmed`];function k(){let[e,r]=(0,v.useState)(`queue`),i=D[e],a=t(i),o=a.filter(e=>e.state===`active`).length,s=a.filter(e=>e.state===`queued`).length;return(0,p.jsxs)(`div`,{className:`flex h-full flex-col gap-3 p-4`,children:[(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,p.jsx)(`div`,{role:`group`,"aria-label":`Overflow policy`,className:`flex rounded-md border p-0.5`,children:[`queue`,`drop-oldest`].map(t=>(0,p.jsx)(u,{size:`xs`,variant:e===t?`secondary`:`ghost`,"aria-pressed":e===t,onClick:()=>r(t),className:`font-mono text-[11px]`,children:t},t))}),(0,p.jsx)(u,{size:`sm`,onClick:()=>O.forEach((e,t)=>setTimeout(()=>i(e,{description:`Step ${t+1} of ${O.length}`,dedupeKey:!1}),t*120)),children:`Fire 8 toasts`}),(0,p.jsx)(u,{size:`sm`,variant:`ghost`,onClick:()=>i.dismiss(),children:`Dismiss all`})]}),(0,p.jsxs)(`div`,{className:`flex gap-4 text-[12px] text-muted-foreground tabular-nums`,children:[(0,p.jsxs)(`span`,{children:[`On screen `,(0,p.jsx)(`b`,{className:`text-foreground`,children:o})]}),(0,p.jsxs)(`span`,{children:[`Queued `,(0,p.jsx)(`b`,{className:`text-foreground`,children:s})]})]}),(0,p.jsx)(n,{toaster:T,contained:!0}),(0,p.jsx)(n,{toaster:E,contained:!0})]})}var A=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createToaster, Toaster, useToasts, type OverflowPolicy } from "@kitora/feedback"

// Two toasters with the same limit and different overflow policies.
const queued = createToaster({ position: "bottom-right", max: 3, overflow: "queue" })
const dropping = createToaster({ position: "bottom-right", max: 3, overflow: "drop-oldest" })
const TOASTERS = { queue: queued, "drop-oldest": dropping } as const

const EVENTS = ["Build #1824 started", "Tests passed", "Preview deployed", "Ravi approved the PR", "Merged into main", "Production deploy started", "Production deploy finished", "Cache warmed"]

/**
 * A burst of eight toasts with \`max: 3\`. \`queue\` holds the rest until a slot
 * frees, so nothing is missed; \`drop-oldest\` dismisses the oldest so the newest
 * is always on screen. Hover the stack to fan it out and pause every timer.
 */
export function ToastStacking() {
  const [policy, setPolicy] = useState<OverflowPolicy>("queue")
  const toast = TOASTERS[policy]
  const all = useToasts(toast)
  const shown = all.filter((t) => t.state === "active").length
  const waiting = all.filter((t) => t.state === "queued").length
  const burst = () => EVENTS.forEach((e, i) => setTimeout(() => toast(e, { description: \`Step \${i + 1} of \${EVENTS.length}\`, dedupeKey: false }), i * 120))
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {/* Two pressed-state buttons, not the ui ToggleGroup: its root sets aria-orientation on role="group", which axe flags (requested upstream). */}
        <div role="group" aria-label="Overflow policy" className="flex rounded-md border p-0.5">
          {(["queue", "drop-oldest"] as const).map((p) => (
            <Button key={p} size="xs" variant={policy === p ? "secondary" : "ghost"} aria-pressed={policy === p} onClick={() => setPolicy(p)} className="font-mono text-[11px]">
              {p}
            </Button>
          ))}
        </div>
        <Button size="sm" onClick={burst}>Fire 8 toasts</Button>
        <Button size="sm" variant="ghost" onClick={() => toast.dismiss()}>Dismiss all</Button>
      </div>
      <div className="flex gap-4 text-[12px] text-muted-foreground tabular-nums">
        <span>On screen <b className="text-foreground">{shown}</b></span>
        <span>Queued <b className="text-foreground">{waiting}</b></span>
      </div>
      <Toaster toaster={queued} contained />
      <Toaster toaster={dropping} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>o(()=>import(`./toast-stacking-BWJzfLiX.js`),[]));function j(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(r,{title:`Toast behaviour`,children:`What a toaster does once there is more than one toast: the queue, the stack, gestures, timers, duplicates and the keyboard.`}),(0,p.jsx)(d,{n:1,title:`Stacking, queue and drop-oldest`,blurb:"Eight toasts with `max: 3`. Switch the overflow policy and fire again; hover the stack to fan it out.",code:A,children:(0,p.jsx)(f,{testId:`toast-stacking`,height:300,children:(0,p.jsx)(k,{})})}),(0,p.jsx)(d,{n:2,title:`Swipe, pause and rich colours`,blurb:`Drag a toast sideways to dismiss it. The bar runs down the time left and freezes while you hover or focus the stack.`,code:x,children:(0,p.jsx)(f,{testId:`toast-gestures`,height:320,children:(0,p.jsx)(b,{})})}),(0,p.jsx)(d,{n:3,title:`Dedupe and update by id`,blurb:`The same message raised again shows ×2, ×3 on the toast already up. A known id replaces a toast in place.`,code:_,children:(0,p.jsx)(f,{testId:`toast-dedupe`,height:220,children:(0,p.jsx)(g,{})})}),(0,p.jsx)(d,{n:4,title:`Keyboard and dialogs`,blurb:`F8 focuses the toasts, Escape closes the focused one. Toasts paint above an open dialog and clicking one does not close it. These use the window's bottom-right corner.`,code:w,children:(0,p.jsx)(f,{testId:`toast-keyboard`,height:120,children:(0,p.jsx)(C,{})})})]})}export{j as component};