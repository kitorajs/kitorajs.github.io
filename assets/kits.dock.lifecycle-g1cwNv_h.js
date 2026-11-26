import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{d as a,f as o,g as s,h as c,n as l,t as u}from"./dock-B0qddSVd.js";import{t as d}from"./panels-COzw_Krp.js";import{n as f,r as p}from"./parts-C6pvJFbp.js";import"./kit-gallery-Bph7isB2.js";import{t as m}from"./example-BGnSQG2Y.js";var h=e(n(),1),g=i(),_=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,v=[`iframe`,`video`,`canvas`,`form`],y=[{label:`into group B`,to:{type:`group`,group:`b`}},{label:`split below group B`,to:{type:`split`,node:`b`,side:`bottom`}},{label:`the dock's left edge`,to:{type:`root`,side:`left`}},{label:`the bottom border`,to:{type:`border`,side:`bottom`}},{label:`back to group A`,to:{type:`group`,group:`a`}}];function ee(){return s({orientation:`horizontal`,children:[{id:`a`,keepWhenEmpty:!0,panels:[...v.map(e=>({id:e,component:e,title:e})),{id:`support`,component:`support`,title:`Support`}]},{id:`b`,keepWhenEmpty:!0,panels:[{id:`visibility`,component:`visibility`,title:`Watcher`}]}]},{borders:{bottom:{panels:[{id:`log`,component:`visibility`,title:`Log`,kind:`tool`}],open:null,sizePx:150}}})}function b(){let[e]=(0,h.useState)(ee),[t,n]=(0,h.useState)(e),[r,i]=(0,h.useState)(null),[a,o]=(0,h.useState)(0),s=y[a%y.length];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{}),(0,g.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,g.jsxs)(`button`,{type:`button`,className:_,"data-action":`tour`,onClick:()=>{if(!(!r||!s)){for(let e of v)r.movePanel(e,s.to);o(e=>e+1)}},children:[`Move all four: `,s?.label]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[`step `,a%y.length+1,` of `,y.length]})]}),(0,g.jsx)(`code`,{"data-testid":`live-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:c(t)}),(0,g.jsx)(`div`,{"data-testid":`live-dock`,className:`mt-1 h-[420px] overflow-hidden rounded-md border`,children:(0,g.jsx)(u,{ref:i,panels:I,defaultLayout:e,parts:f,label:`Lifecycle`,onLayoutChange:n})})]})}var x=new Map;function S(e){x.set(e,(x.get(e)??0)+1)}var C=new WeakSet;function w(e){let t=e?.dataset.mounts;!e||t===void 0||(C.has(e)||(C.add(e),S(t)),e.textContent=`mounted ${x.get(t)??0}×`)}function T({id:e}){return(0,g.jsx)(`span`,{"data-mounts":e,ref:w,className:`rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground`})}function E(e){if(!e)return;let t=e.ownerDocument.createElement(`canvas`);t.width=160,t.height=90;let n=t.getContext(`2d`),r=0,i=0,a=()=>{r++,n&&(n.fillStyle=`hsl(${r%360} 60% 45%)`,n.fillRect(0,0,160,90),n.fillStyle=`#fff`,n.font=`16px system-ui`,n.fillText(`frame ${r}`,12,50)),i=requestAnimationFrame(a)};return a(),e.srcObject=t.captureStream(30),e.play().catch(()=>void 0),()=>{cancelAnimationFrame(i),e.srcObject=null}}function te(e){if(!e)return;let t=e.getContext(`webgl`),n=e.parentElement?.querySelector(`[data-canvas-stats]`),r=0,i=0,a=0,o=()=>{i++};e.addEventListener(`webglcontextlost`,o);let s=()=>{r++,t&&(t.clearColor(.2,.4+.3*Math.sin(r/30),.7,1),t.clear(t.COLOR_BUFFER_BIT)),e.dataset.frames=String(r),e.dataset.lost=String(i),n&&r%10==0&&(n.textContent=`${r} frames · ${i} lost`),a=requestAnimationFrame(s)};return s(),()=>{cancelAnimationFrame(a),e.removeEventListener(`webglcontextlost`,o)}}function ne(e){e&&(e.textContent=o(e.ownerDocument)?`Element.moveBefore: available. Moves keep iframes, video and canvas running.`:`Element.moveBefore: missing. The dock parks and reattaches, so iframes reload and video restarts after a move.`)}var D=`dock-demo:live-iframe`,O=`<!doctype html><html><body style="margin:0;font:12px system-ui;color:#555;display:grid;place-items:center;height:100vh">
<div id="t">ticks 0</div>
<script>
const born = Math.random().toString(36).slice(2)
let n = 0
const report = () => parent.postMessage({ type: "${D}", born, ticks: n }, "*")
report()
setInterval(() => { n++; document.getElementById("t").textContent = "ticks " + n; report() }, 100)
<\/script></body></html>`;function k(e){if(!e)return;let t=t=>{if(t.source!==e.contentWindow)return;let n=t.data;typeof n!=`object`||!n||!(`type`in n)||n.type!==D||(`born`in n&&typeof n.born==`string`&&(e.dataset.born=n.born),`ticks`in n&&typeof n.ticks==`number`&&(e.dataset.ticks=String(n.ticks)))};return window.addEventListener(`message`,t),()=>window.removeEventListener(`message`,t)}function A({id:e}){return(0,g.jsxs)(`div`,{className:`flex h-full flex-col gap-1 p-2 text-[12px]`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium`,children:`iframe`}),(0,g.jsx)(T,{id:e})]}),(0,g.jsx)(`iframe`,{ref:k,title:`Live iframe`,"data-live-iframe":``,sandbox:`allow-scripts`,srcDoc:O,className:`min-h-0 flex-1 rounded border bg-white`})]})}function j({id:e}){return(0,g.jsxs)(`div`,{className:`flex h-full flex-col gap-1 p-2 text-[12px]`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium`,children:`video`}),(0,g.jsx)(T,{id:e})]}),(0,g.jsx)(`video`,{"data-live-video":``,muted:!0,playsInline:!0,"aria-label":`Live video`,className:`min-h-0 flex-1 rounded border bg-black`,ref:E})]})}function M({id:e}){return(0,g.jsxs)(`div`,{className:`flex h-full flex-col gap-1 p-2 text-[12px]`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium`,children:`WebGL canvas`}),(0,g.jsx)(T,{id:e}),(0,g.jsx)(`span`,{"data-canvas-stats":``,className:`font-mono text-[10.5px] text-muted-foreground`})]}),(0,g.jsx)(`canvas`,{"data-live-canvas":``,width:320,height:160,"aria-label":`Live WebGL canvas`,className:`min-h-0 w-full flex-1 rounded border`,ref:te})]})}function N({id:e}){return(0,g.jsxs)(`form`,{className:`flex flex-col gap-2 p-3 text-[12px]`,onSubmit:e=>e.preventDefault(),children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium`,children:`form`}),(0,g.jsx)(T,{id:e})]}),(0,g.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[`Name`,(0,g.jsx)(`input`,{"data-live-input":``,name:`name`,className:`h-7 rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`})]}),(0,g.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[`Notes`,(0,g.jsx)(`textarea`,{name:`notes`,rows:2,className:`rounded border bg-background px-2 py-1 outline-none focus-visible:ring-1 focus-visible:ring-ring`})]})]})}function P({id:e}){return(0,g.jsxs)(`div`,{className:`space-y-1 p-3 text-[12.5px] text-muted-foreground`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium text-foreground`,children:`This browser`}),(0,g.jsx)(T,{id:e})]}),(0,g.jsx)(`p`,{"data-move-support":``,ref:ne})]})}function F(){return(0,g.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:a().isVisible?`visible`:`hidden`})}var I=d({iframe:{component:A,kind:`tool`,title:`iframe`},video:{component:j,kind:`tool`,title:`video`},canvas:{component:M,kind:`tool`,title:`canvas`},form:{component:N,kind:`tool`,title:`form`},support:{component:P,kind:`tool`,title:`Support`},visibility:{component:F}}),L=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, supportsStatePreservingMove, usePanel, type DockLayout, type DropTarget, type PanelProps, type TypedDockApi } from "@kitora/dock"

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** The live panels: each loses its state on any remount, so a move that keeps them running proves nothing remounted. */
const LIVE = ["iframe", "video", "canvas", "form"] as const

/** The tour: every live panel moves through a group, a split, the root edge, a border, and home. */
const TOUR: readonly { readonly label: string; readonly to: DropTarget }[] = [
  { label: "into group B", to: { type: "group", group: "b" } },
  { label: "split below group B", to: { type: "split", node: "b", side: "bottom" } },
  { label: "the dock's left edge", to: { type: "root", side: "left" } },
  { label: "the bottom border", to: { type: "border", side: "bottom" } },
  { label: "back to group A", to: { type: "group", group: "a" } },
]

function liveLayout(): DockLayout {
  return createLayout(
    {
      orientation: "horizontal",
      children: [
        { id: "a", keepWhenEmpty: true, panels: [...LIVE.map((id) => ({ id, component: id, title: id })), { id: "support", component: "support", title: "Support" }] },
        { id: "b", keepWhenEmpty: true, panels: [{ id: "visibility", component: "visibility", title: "Watcher" }] },
      ],
    },
    { borders: { bottom: { panels: [{ id: "log", component: "visibility", title: "Log", kind: "tool" }], open: null, sizePx: 150 } } },
  )
}

/** Panels stay mounted and move with Element.moveBefore: an iframe, a playing video, a WebGL canvas and a half-filled form keep running through every move. */
export function MovesNeverRemount() {
  const [initial] = useState(liveLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [step, setStep] = useState(0)
  const next = TOUR[step % TOUR.length]
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button
          type="button"
          className={BUTTON}
          data-action="tour"
          onClick={() => {
            if (!api || !next) return
            for (const id of LIVE) api.movePanel(id, next.to)
            setStep((s) => s + 1)
          }}
        >
          Move all four: {next?.label}
        </button>
        <span className="text-muted-foreground">
          step {(step % TOUR.length) + 1} of {TOUR.length}
        </span>
      </div>
      <code data-testid="live-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="live-dock" className="mt-1 h-[420px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Lifecycle" onLayoutChange={setLayout} />
      </div>
    </>
  )
}

// ── The live panels. Side effects start and stop through React 19 ref callbacks (the cleanup is the
// callback's return), so no effect is needed; the callbacks are module functions, because an inline
// callback is detached and re-attached on every render, which would restart the video on a tab switch.

/** Mounts per panel id, for the "mounted N×" readouts (module state: it must outlive the panels). */
const MOUNTS = new Map<string, number>()

/** Counts a mount of \`id\`. */
function countMount(id: string): void {
  MOUNTS.set(id, (MOUNTS.get(id) ?? 0) + 1)
}

/** DOM elements already counted: a remount renders a new element, while StrictMode's dev re-run of refs reuses the same one. */
const COUNTED = new WeakSet<Element>()

/** Counts each new badge element as one mount of its panel and writes the count into it. */
function countBadge(el: HTMLElement | null): void {
  const id = el?.dataset.mounts
  if (!el || id === undefined) return
  if (!COUNTED.has(el)) {
    COUNTED.add(el)
    countMount(id)
  }
  el.textContent = \`mounted \${MOUNTS.get(id) ?? 0}×\`
}

/** A "mounted N×" badge: one count per real mount of its panel's content. */
function MountBadge({ id }: { readonly id: string }) {
  return <span data-mounts={id} ref={countBadge} className="rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground" />
}

/** Starts a canvas stream into \`video\` and plays it; the returned cleanup stops it. */
function attachVideo(video: HTMLVideoElement | null): (() => void) | undefined {
  if (!video) return undefined
  const canvas = video.ownerDocument.createElement("canvas")
  canvas.width = 160
  canvas.height = 90
  const ctx = canvas.getContext("2d")
  let frame = 0
  let raf = 0
  const draw = () => {
    frame++
    if (ctx) {
      ctx.fillStyle = \`hsl(\${frame % 360} 60% 45%)\`
      ctx.fillRect(0, 0, 160, 90)
      ctx.fillStyle = "#fff"
      ctx.font = "16px system-ui"
      ctx.fillText(\`frame \${frame}\`, 12, 50)
    }
    raf = requestAnimationFrame(draw)
  }
  draw()
  video.srcObject = canvas.captureStream(30)
  void video.play().catch(() => undefined)
  return () => {
    cancelAnimationFrame(raf)
    video.srcObject = null
  }
}

/** Runs a WebGL clear loop on \`canvas\`, recording frames and lost contexts on its dataset. */
function attachCanvas(canvas: HTMLCanvasElement | null): (() => void) | undefined {
  if (!canvas) return undefined
  const gl = canvas.getContext("webgl")
  const stats = canvas.parentElement?.querySelector("[data-canvas-stats]")
  let frames = 0
  let lost = 0
  let raf = 0
  const onLost = () => {
    lost++
  }
  canvas.addEventListener("webglcontextlost", onLost)
  const draw = () => {
    frames++
    if (gl) {
      gl.clearColor(0.2, 0.4 + 0.3 * Math.sin(frames / 30), 0.7, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
    }
    canvas.dataset.frames = String(frames)
    canvas.dataset.lost = String(lost)
    if (stats && frames % 10 === 0) stats.textContent = \`\${frames} frames · \${lost} lost\`
    raf = requestAnimationFrame(draw)
  }
  draw()
  return () => {
    cancelAnimationFrame(raf)
    canvas.removeEventListener("webglcontextlost", onLost)
  }
}

function writeSupport(el: HTMLElement | null): void {
  if (el) el.textContent = supportsStatePreservingMove(el.ownerDocument) ? "Element.moveBefore: available. Moves keep iframes, video and canvas running." : "Element.moveBefore: missing. The dock parks and reattaches, so iframes reload and video restarts after a move."
}

/** The message type the live iframe posts its birth token and tick count under. */
const LIVE_IFRAME_MESSAGE = "dock-demo:live-iframe"

/**
 * The live iframe's document. It runs sandboxed with scripts only (an opaque origin), so the host
 * cannot read its globals: it posts its birth token and tick count to the parent on every tick
 * instead. The payload is a random token and a counter, so the \`"*"\` target origin leaks nothing.
 */
const IFRAME_DOC = \`<!doctype html><html><body style="margin:0;font:12px system-ui;color:#555;display:grid;place-items:center;height:100vh">
<div id="t">ticks 0</div>
<script>
const born = Math.random().toString(36).slice(2)
let n = 0
const report = () => parent.postMessage({ type: "\${LIVE_IFRAME_MESSAGE}", born, ticks: n }, "*")
report()
setInterval(() => { n++; document.getElementById("t").textContent = "ticks " + n; report() }, 100)
<\/script></body></html>\`

/**
 * Mirrors the frame's reports onto \`data-born\` / \`data-ticks\` on the iframe element, accepting only
 * messages from this frame's window. A stable ref callback with a React 19 cleanup.
 */
function trackLiveIframe(el: HTMLIFrameElement | null): (() => void) | undefined {
  if (!el) return undefined
  const onMessage = (e: MessageEvent) => {
    if (e.source !== el.contentWindow) return
    const data: unknown = e.data
    if (typeof data !== "object" || data === null || !("type" in data) || data.type !== LIVE_IFRAME_MESSAGE) return
    if ("born" in data && typeof data.born === "string") el.dataset.born = data.born
    if ("ticks" in data && typeof data.ticks === "number") el.dataset.ticks = String(data.ticks)
  }
  window.addEventListener("message", onMessage)
  return () => window.removeEventListener("message", onMessage)
}

/** An iframe with its own running script: a reload resets its ticks and its birth token. */
function IframePanel({ id }: PanelProps) {
  return (
    <div className="flex h-full flex-col gap-1 p-2 text-[12px]">
      <div className="flex items-center gap-2">
        <span className="font-medium">iframe</span>
        <MountBadge id={id} />
      </div>
      {/* scripts only: the frame needs its own timer and nothing else (no same origin, forms or navigation) */}
      <iframe ref={trackLiveIframe} title="Live iframe" data-live-iframe="" sandbox="allow-scripts" srcDoc={IFRAME_DOC} className="min-h-0 flex-1 rounded border bg-white" />
    </div>
  )
}

/** A video playing a canvas stream: a detach pauses it and a remount restarts it at 0. */
function VideoPanel({ id }: PanelProps) {
  return (
    <div className="flex h-full flex-col gap-1 p-2 text-[12px]">
      <div className="flex items-center gap-2">
        <span className="font-medium">video</span>
        <MountBadge id={id} />
      </div>
      <video
        data-live-video=""
        muted
        playsInline
        aria-label="Live video"
        className="min-h-0 flex-1 rounded border bg-black"
        ref={attachVideo}
      />
    </div>
  )
}

/** A WebGL canvas: counts frames and lost contexts (a lost context would mean the canvas was torn down). */
function CanvasPanel({ id }: PanelProps) {
  return (
    <div className="flex h-full flex-col gap-1 p-2 text-[12px]">
      <div className="flex items-center gap-2">
        <span className="font-medium">WebGL canvas</span>
        <MountBadge id={id} />
        <span data-canvas-stats="" className="font-mono text-[10.5px] text-muted-foreground" />
      </div>
      <canvas
        data-live-canvas=""
        width={320}
        height={160}
        aria-label="Live WebGL canvas"
        className="min-h-0 w-full flex-1 rounded border"
        ref={attachCanvas}
      />
    </div>
  )
}

/** A half-filled form: uncontrolled inputs keep their text only while their DOM survives. */
function FormPanel({ id }: PanelProps) {
  return (
    <form className="flex flex-col gap-2 p-3 text-[12px]" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center gap-2">
        <span className="font-medium">form</span>
        <MountBadge id={id} />
      </div>
      <label className="flex flex-col gap-1">
        Name
        <input data-live-input="" name="name" className="h-7 rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring" />
      </label>
      <label className="flex flex-col gap-1">
        Notes
        <textarea name="notes" rows={2} className="rounded border bg-background px-2 py-1 outline-none focus-visible:ring-1 focus-visible:ring-ring" />
      </label>
    </form>
  )
}

/** Says whether this browser moves without reloading or parks and reattaches. */
function SupportPanel({ id }: PanelProps) {
  return (
    <div className="space-y-1 p-3 text-[12.5px] text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">This browser</span>
        <MountBadge id={id} />
      </div>
      <p data-move-support="" ref={writeSupport} />
    </div>
  )
}

/** Reads its own panel handle, to show \`usePanel().isVisible\`. */
function VisibilityPanel() {
  const panel = usePanel()
  return <div className="p-3 text-[12.5px] text-muted-foreground">{panel.isVisible ? "visible" : "hidden"}</div>
}

const panels = defineDockPanels({
  iframe: { component: IframePanel, kind: "tool", title: "iframe" },
  video: { component: VideoPanel, kind: "tool", title: "video" },
  canvas: { component: CanvasPanel, kind: "tool", title: "canvas" },
  form: { component: FormPanel, kind: "tool", title: "form" },
  support: { component: SupportPanel, kind: "tool", title: "Support" },
  visibility: { component: VisibilityPanel },
})
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./lifecycle-moves-BML-hUVS.js`),[]));var R=new Map;function z(e){R.set(e,(R.get(e)??0)+1)}var B=new WeakSet;function V(e){let t=e?.dataset.mounts;!e||t===void 0||(B.has(e)||(B.add(e),z(t)),e.textContent=`mounted ${R.get(t)??0}×`)}function H({id:e}){return(0,g.jsx)(`span`,{"data-mounts":e,ref:V,className:`rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground`})}function U({id:e,title:t}){let[n,r]=(0,h.useState)(0);return(0,g.jsxs)(`div`,{className:`space-y-2 p-3 text-[12.5px] text-muted-foreground`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium text-foreground`,children:t}),(0,g.jsx)(H,{id:e})]}),(0,g.jsxs)(`button`,{type:`button`,"data-clicks":e,className:`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,onClick:()=>r(e=>e+1),children:[`clicked `,n,`×`]})]})}var re=d({lazy:{component:U,lifecycle:`lazy`},eager:{component:U,lifecycle:`eager`},hidden:{component:U,lifecycle:`unmount-when-hidden`}}),W=s({id:`modes`,panels:[{id:`lazy-1`,component:`lazy`,title:`lazy (default)`},{id:`eager-1`,component:`eager`,title:`eager`},{id:`hidden-1`,component:`hidden`,title:`unmount-when-hidden`}]});function G(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{}),(0,g.jsx)(`div`,{"data-testid":`modes-dock`,className:`h-[160px] overflow-hidden rounded-md border`,children:(0,g.jsx)(u,{panels:re,defaultLayout:W,parts:f,label:`Lifecycles`})})]})}var K=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type PanelProps } from "@kitora/dock"

/** Mounts per panel id, for the "mounted N×" readouts (module state: it must outlive the panels). */
const MOUNTS = new Map<string, number>()

/** Counts a mount of \`id\`. */
function countMount(id: string): void {
  MOUNTS.set(id, (MOUNTS.get(id) ?? 0) + 1)
}

/** DOM elements already counted: a remount renders a new element, while StrictMode's dev re-run of refs reuses the same one. */
const COUNTED = new WeakSet<Element>()

/** Counts each new badge element as one mount of its panel and writes the count into it. */
function countBadge(el: HTMLElement | null): void {
  const id = el?.dataset.mounts
  if (!el || id === undefined) return
  if (!COUNTED.has(el)) {
    COUNTED.add(el)
    countMount(id)
  }
  el.textContent = \`mounted \${MOUNTS.get(id) ?? 0}×\`
}

/** A "mounted N×" badge: one count per real mount of its panel's content. */
function MountBadge({ id }: { readonly id: string }) {
  return <span data-mounts={id} ref={countBadge} className="rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground" />
}

/** A lifecycle demo panel: shows its mount count, so lazy, eager and unmount-when-hidden differ visibly. */
function MountPanel({ id, title }: PanelProps) {
  const [clicks, setClicks] = useState(0)
  return (
    <div className="space-y-2 p-3 text-[12.5px] text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">{title}</span>
        <MountBadge id={id} />
      </div>
      <button type="button" data-clicks={id} className="h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" onClick={() => setClicks((n) => n + 1)}>
        clicked {clicks}×
      </button>
    </div>
  )
}

/** One component, three lifecycles: lazy (the default) mounts when first shown and stays; eager mounts with the dock; unmount-when-hidden mounts again each time it is shown. */
const panels = defineDockPanels({
  lazy: { component: MountPanel, lifecycle: "lazy" },
  eager: { component: MountPanel, lifecycle: "eager" },
  hidden: { component: MountPanel, lifecycle: "unmount-when-hidden" },
})

const layout = createLayout({
  id: "modes",
  panels: [
    { id: "lazy-1", component: "lazy", title: "lazy (default)" },
    { id: "eager-1", component: "eager", title: "eager" },
    { id: "hidden-1", component: "hidden", title: "unmount-when-hidden" },
  ],
})

export function LifecycleModes() {
  return (
    <>
      <DockStyles />
      <div data-testid="modes-dock" className="h-[160px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Lifecycles" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./lifecycle-modes-DurODUQV.js`),[]));var q=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`,J=new Map;function Y(e){J.set(e,(J.get(e)??0)+1)}var X=new WeakSet;function ie(e){let t=e?.dataset.mounts;!e||t===void 0||(X.has(e)||(X.add(e),Y(t)),e.textContent=`mounted ${J.get(t)??0}×`)}function ae({id:e}){return(0,g.jsx)(`span`,{"data-mounts":e,ref:ie,className:`rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground`})}function oe({id:e,title:t}){let[n,r]=(0,h.useState)(0);return(0,g.jsxs)(`div`,{className:`space-y-2 p-3 text-[12.5px] text-muted-foreground`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`span`,{className:`font-medium text-foreground`,children:t}),(0,g.jsx)(ae,{id:e})]}),(0,g.jsxs)(`button`,{type:`button`,"data-clicks":e,className:`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,onClick:()=>r(e=>e+1),children:[`clicked `,n,`×`]})]})}function se(){let[e,t]=(0,h.useState)(!1);if(e)throw Error(`Demo panel failed while rendering`);return(0,g.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:(0,g.jsx)(`button`,{type:`button`,"data-action":`crash`,className:`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,onClick:()=>t(!0),children:`Throw while rendering`})})}function ce(){return(0,g.jsx)(`div`,{"data-async-loaded":``,className:`flex h-full items-end gap-1.5 p-3`,children:[32,58,41,77,63,90,48].map((e,t)=>(0,g.jsx)(`div`,{className:`w-5 rounded-t bg-primary/70`,style:{height:`${e}%`}},t))})}var Z=()=>{},le=new Promise(e=>{Z=e}),ue=l(async()=>(await le,{default:ce}));function Q(){return(0,g.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:a().isVisible?`visible`:`hidden`})}var de=d({lazy:{component:oe},crash:{component:se,title:`Crashy`},chart:{component:ue,title:`Chart`},visibility:{component:Q}}),fe=s({orientation:`horizontal`,children:[{id:`errors`,panels:[{id:`crash`,component:`crash`,title:`Crashy`},{id:`neighbour`,component:`lazy`,title:`Neighbour`}]},{id:`async`,panels:[{id:`welcome`,component:`visibility`,title:`Welcome`},{id:`chart`,component:`chart`,title:`Chart (async)`}]}]}),pe=e=>e.type===`resized`?`${e.panel} resized ${Math.round(e.width)}×${Math.round(e.height)}`:e.type===`moved`?`${e.panel} moved`:`${e.panel} ${e.type}`;function me(){let[e,t]=(0,h.useState)([]),[n,r]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{}),(0,g.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,g.jsx)(`button`,{type:`button`,className:q,"data-action":`finish-download`,disabled:n,onClick:()=>{Z(),r(!0)},children:`Finish the chart download`}),(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:`Open the Chart tab first: it waits for its code behind a pending state.`})]}),(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-[1fr_260px]`,children:[(0,g.jsx)(`div`,{"data-testid":`errors-dock`,className:`h-[220px] overflow-hidden rounded-md border`,children:(0,g.jsx)(u,{panels:de,defaultLayout:fe,parts:f,label:`Errors and async`,onPanelEvent:e=>t(t=>[pe(e),...t].slice(0,9))})}),(0,g.jsx)(`ol`,{"data-testid":`event-log`,"aria-label":`Panel events`,className:`h-[220px] overflow-auto rounded-md border p-2 font-mono text-[11px] leading-[18px] text-muted-foreground`,children:e.map((e,t)=>(0,g.jsx)(`li`,{children:e},`${t}-${e}`))})]})]})}var $=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, lazyPanel, usePanel, type PanelEvent, type PanelProps } from "@kitora/dock"

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** Mounts per panel id, for the "mounted N×" readouts (module state: it must outlive the panels). */
const MOUNTS = new Map<string, number>()

/** Counts a mount of \`id\`. */
function countMount(id: string): void {
  MOUNTS.set(id, (MOUNTS.get(id) ?? 0) + 1)
}

/** DOM elements already counted: a remount renders a new element, while StrictMode's dev re-run of refs reuses the same one. */
const COUNTED = new WeakSet<Element>()

/** Counts each new badge element as one mount of its panel and writes the count into it. */
function countBadge(el: HTMLElement | null): void {
  const id = el?.dataset.mounts
  if (!el || id === undefined) return
  if (!COUNTED.has(el)) {
    COUNTED.add(el)
    countMount(id)
  }
  el.textContent = \`mounted \${MOUNTS.get(id) ?? 0}×\`
}

/** A "mounted N×" badge: one count per real mount of its panel's content. */
function MountBadge({ id }: { readonly id: string }) {
  return <span data-mounts={id} ref={countBadge} className="rounded bg-muted px-1.5 font-mono text-[10.5px] tabular-nums text-muted-foreground" />
}

/** A lifecycle demo panel: shows its mount count, so lazy, eager and unmount-when-hidden differ visibly. */
function MountPanel({ id, title }: PanelProps) {
  const [clicks, setClicks] = useState(0)
  return (
    <div className="space-y-2 p-3 text-[12.5px] text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">{title}</span>
        <MountBadge id={id} />
      </div>
      <button type="button" data-clicks={id} className="h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" onClick={() => setClicks((n) => n + 1)}>
        clicked {clicks}×
      </button>
    </div>
  )
}

/** Throws while rendering once asked to: the dock's per-panel boundary catches it. */
function CrashPanel() {
  const [crash, setCrash] = useState(false)
  if (crash) throw new Error("Demo panel failed while rendering")
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <button type="button" data-action="crash" className="h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" onClick={() => setCrash(true)}>
        Throw while rendering
      </button>
    </div>
  )
}

/** The async panel's real component, loaded on first show. */
function Chart() {
  const bars = [32, 58, 41, 77, 63, 90, 48]
  return (
    <div data-async-loaded="" className="flex h-full items-end gap-1.5 p-3">
      {bars.map((h, i) => (
        <div key={i} className="w-5 rounded-t bg-primary/70" style={{ height: \`\${h}%\` }} />
      ))}
    </div>
  )
}

/** Resolves the chart's download: the button below stands in for the network (stub: replace with () => import("./chart")). */
let finishDownload = (): void => {}
const chartDownload = new Promise<void>((resolve) => {
  finishDownload = resolve
})

/** A code-split panel: the dock shows its pending part until the module arrives. */
const AsyncChart = lazyPanel(async (): Promise<{ default: typeof Chart }> => {
  await chartDownload
  return { default: Chart }
})

/** Reads its own panel handle, to show \`usePanel().isVisible\`. */
function VisibilityPanel() {
  const panel = usePanel()
  return <div className="p-3 text-[12.5px] text-muted-foreground">{panel.isVisible ? "visible" : "hidden"}</div>
}

const panels = defineDockPanels({
  lazy: { component: MountPanel },
  crash: { component: CrashPanel, title: "Crashy" },
  chart: { component: AsyncChart, title: "Chart" },
  visibility: { component: VisibilityPanel },
})

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "errors", panels: [{ id: "crash", component: "crash", title: "Crashy" }, { id: "neighbour", component: "lazy", title: "Neighbour" }] },
    { id: "async", panels: [{ id: "welcome", component: "visibility", title: "Welcome" }, { id: "chart", component: "chart", title: "Chart (async)" }] },
  ],
})

const describe = (e: PanelEvent) => (e.type === "resized" ? \`\${e.panel} resized \${Math.round(e.width)}×\${Math.round(e.height)}\` : e.type === "moved" ? \`\${e.panel} moved\` : \`\${e.panel} \${e.type}\`)

/** Each panel has its own error boundary with a retry; a lazyPanel shows a pending part while it loads; onPanelEvent reports shown, hidden, moved, resized and the rest. */
export function ErrorsAndEvents() {
  const [events, setEvents] = useState<readonly string[]>([])
  const [downloaded, setDownloaded] = useState(false)
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button
          type="button"
          className={BUTTON}
          data-action="finish-download"
          disabled={downloaded}
          onClick={() => {
            finishDownload()
            setDownloaded(true)
          }}
        >
          Finish the chart download
        </button>
        <span className="text-muted-foreground">Open the Chart tab first: it waits for its code behind a pending state.</span>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_260px]">
        <div data-testid="errors-dock" className="h-[220px] overflow-hidden rounded-md border">
          <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Errors and async" onPanelEvent={(e) => setEvents((list) => [describe(e), ...list].slice(0, 9))} />
        </div>
        <ol data-testid="event-log" aria-label="Panel events" className="h-[220px] overflow-auto rounded-md border p-2 font-mono text-[11px] leading-[18px] text-muted-foreground">
          {events.map((e, i) => (
            <li key={\`\${i}-\${e}\`}>{e}</li>
          ))}
        </ol>
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./lifecycle-errors-CP4Is7ol.js`),[]));function he(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Panel lifecycle`,children:`Panels mount the first time they are shown and stay mounted until they close. Moving a panel moves its DOM with Element.moveBefore, so an iframe, a video, a WebGL canvas and a form keep running and keep what you typed. Heavy panels can opt out and unmount while hidden; each panel has its own error boundary, and code-split panels show a pending state while they load.`}),(0,g.jsx)(m,{n:1,title:`Moves never remount`,blurb:`Type in the form, then press the tour button a few times (or drag the tabs yourself): the four panels ride through a group, a split, the dock's left edge, the bottom border and back. The iframe's ticks keep counting, the video keeps playing, the canvas keeps its context, the text stays, and every mount count stays at 1.`,code:L,children:(0,g.jsx)(b,{})}),(0,g.jsx)(m,{n:2,title:`Lazy, eager and unmount-when-hidden`,blurb:`The lazy tab mounts when first shown and then stays; the eager one mounted with the dock; the unmount-when-hidden one mounts again each time it is shown (watch its mount count and its click count reset).`,code:K,children:(0,g.jsx)(G,{})}),(0,g.jsx)(m,{n:3,title:`Errors, async panels and events`,blurb:`Make Crashy throw: only that panel shows the error, with a retry; its neighbour keeps working. Open the Chart tab: it waits behind a pending state until its code arrives (the button stands in for the network). The log lists panel events as they happen.`,code:$,children:(0,g.jsx)(me,{})})]})}export{he as component};