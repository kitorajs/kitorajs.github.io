import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Hc as r,Uc as i,_i as a,zc as o}from"./index-BZuUy872.js";import{a as s,b as c,i as l,o as u,s as d}from"./glue-CneFLEST.js";import{s as f}from"./kit-Dinrg2gH.js";import{i as p,n as m,r as h,t as g}from"./bridge-B7XxQSOm.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";var v=e(i(),1),y=o(),b=1024,x={kinds:[`files`],mime:[`image/*`],maxFileSize:2*b*b},S=`rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5`;function C(e){return e<b?`${e} B`:e<b*b?`${(e/b).toFixed(1)} KiB`:`${(e/b/b).toFixed(1)} MiB`}function ee({dnd:e,last:t}){let n=f(e);return(0,y.jsxs)(`p`,{"data-demo-status":`files`,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function te(){let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(``),[i]=(0,v.useState)(()=>({name:`status`,setup:e=>e.monitor({onDragEnd:e=>r(` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`)})})),o=l({plugins:[i],autoScroll:!1,onMove(e,n){let r=m(n)?.payload();if(!r)return;let{accepted:i,rejected:a}=p(r,x);t(e=>[...e,...i.files.map(e=>({name:e.name,detail:`${e.type||`unknown type`} · ${C(e.size)}`,ok:!0})),...a.map(e=>({name:e.file.name,detail:`refused: ${e.reason}`,ok:!1}))])}});return(0,y.jsxs)(`div`,{ref:(0,v.useCallback)(e=>{if(!e||!o)return;let t=g(o,{data:e=>e});return()=>t.destroy()},[o]),"data-demo":`files`,className:`flex max-w-md flex-col gap-2`,children:[(0,y.jsxs)(`div`,{ref:u(o,{id:`images`,kind:`container`,...h(x)}),"data-demo-target":`images`,className:a(S,`min-h-28`),children:[(0,y.jsx)(`p`,{children:`Drop images here (any image type, up to 2 MiB each).`}),(0,y.jsx)(`ul`,{className:`mt-1 flex flex-col gap-0.5`,"data-demo-files":!0,children:e.map((e,t)=>(0,y.jsxs)(`li`,{"data-file":e.name,className:a(`flex h-6 items-center justify-between gap-2 rounded border bg-card px-2 text-foreground`,!e.ok&&`text-muted-foreground line-through`),children:[(0,y.jsx)(`span`,{className:`truncate`,children:e.name}),(0,y.jsx)(`span`,{className:`shrink-0 text-[11px] text-muted-foreground`,children:e.detail})]},`${e.name}-${t}`))})]}),(0,y.jsx)(ee,{dnd:o,last:n})]})}var w=`import { useCallback, useState } from "react"
import { useDomDnd, useDragState, useDroppableRef, type DndPlugin, type DomDnd, type DragEndEvent } from "@kitora/dnd"
import { attachNativeBridge, filterPayload, nativeDragOf, nativeTarget, type NativeDrag, type NativeFilter } from "@kitora/dnd/html5"
import { cn } from "@kitora/ui/utils"

// What the engine carries: an in-page label, or a native drag from the bridge.
type Data = string | NativeDrag

const KIB = 1024
// accept: kind, MIME and count are checked during the drag; acceptDrop: sizes at drop (the browser hides them until then)
const IMAGES: NativeFilter = { kinds: ["files"], mime: ["image/*"], maxFileSize: 2 * KIB * KIB }
const ZONE = "rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5"

interface FileRow {
  readonly name: string
  readonly detail: string
  readonly ok: boolean
}

function formatSize(bytes: number): string {
  return bytes < KIB ? \`\${bytes} B\` : bytes < KIB * KIB ? \`\${(bytes / KIB).toFixed(1)} KiB\` : \`\${(bytes / KIB / KIB).toFixed(1)} MiB\`
}

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ dnd, last }: { dnd: DomDnd<Data> | null; last: string }) {
  const state = useDragState(dnd)
  return (
    <p data-demo-status="files" className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

export function ImageDrop() {
  const [rows, setRows] = useState<readonly FileRow[]>([])
  const [last, setLast] = useState("")
  // a plugin that watches every drag end, for the status line
  const [status] = useState<DndPlugin<Data>>(() => ({
    name: "status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<Data>) => setLast(\` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`) }),
  }))
  const dnd = useDomDnd<Data>({
    plugins: [status],
    autoScroll: false,
    onMove(_op, source) {
      // null for an in-page drag; the payload is read at drop, before onMove runs
      const payload = nativeDragOf(source)?.payload()
      if (!payload) return
      const { accepted, rejected } = filterPayload(payload, IMAGES)
      setRows((xs) => [
        ...xs,
        ...accepted.files.map((f) => ({ name: f.name, detail: \`\${f.type || "unknown type"} · \${formatSize(f.size)}\`, ok: true })),
        ...rejected.map((r) => ({ name: r.file.name, detail: \`refused: \${r.reason}\`, ok: false })),
      ])
    },
  })
  // one bridge per engine, attached while this element is mounted (a callback ref, no effect)
  const bridgeRef = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !dnd) return undefined
      const bridge = attachNativeBridge<Data>(dnd, { data: (drag) => drag })
      return () => bridge.destroy()
    },
    [dnd],
  )
  const zoneRef = useDroppableRef(dnd, { id: "images", kind: "container", ...nativeTarget<Data>(IMAGES) })
  return (
    <div ref={bridgeRef} data-demo="files" className="flex max-w-md flex-col gap-2">
      <div ref={zoneRef} data-demo-target="images" className={cn(ZONE, "min-h-28")}>
        <p>Drop images here (any image type, up to 2 MiB each).</p>
        <ul className="mt-1 flex flex-col gap-0.5" data-demo-files>
          {rows.map((r, i) => (
            <li key={\`\${r.name}-\${i}\`} data-file={r.name} className={cn("flex h-6 items-center justify-between gap-2 rounded border bg-card px-2 text-foreground", !r.ok && "text-muted-foreground line-through")}>
              <span className="truncate">{r.name}</span>
              <span className="shrink-0 text-[11px] text-muted-foreground">{r.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <Status dnd={dnd} last={last} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./native-files-mTbqb6oK.js`),[]));var T=[`Alpha`,`Beta`,`Gamma`],E=12,D=`rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5`;function O({dnd:e,last:t}){let n=f(e);return(0,y.jsxs)(`p`,{"data-demo-status":`outbound`,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function ne({bridge:e,label:t,index:n,badge:r}){return(0,y.jsxs)(`span`,{ref:(0,v.useCallback)(i=>{if(!(!i||!e))return e.nativeDraggable(i,{id:t,container:`chips`,index:n,data:t,type:`chip`},r?{dragImage:()=>r.current?{element:r.current,x:E,y:E}:null}:{})},[e,t,n,r]),"data-chip":t,className:`h-7 cursor-grab rounded-full border bg-card px-3 text-[12px] leading-7 select-none hover:bg-accent`,children:[t,r?` (custom image)`:``]})}function re(){let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(``),[i,o]=(0,v.useState)(null),s=(0,v.useRef)(null),[c]=(0,v.useState)(()=>({name:`status`,setup:e=>e.monitor({onDragEnd:e=>r(` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`)})})),d=l({plugins:[c],autoScroll:!1,onMove:e=>t(t=>[...t,...e.ids])}),f=(0,v.useCallback)(e=>{if(!e||!d)return;let t=g(d,{data:e=>e});return o(t),()=>{t.destroy(),o(null)}},[d]),p=u(d,{id:`tray`,kind:`container`,accepts:[`chip`]});return(0,y.jsxs)(`div`,{ref:f,"data-demo":`outbound`,className:`flex max-w-md flex-col gap-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[T.map((e,t)=>(0,y.jsx)(ne,{bridge:i,label:e,index:t,badge:e===`Gamma`?s:null},e)),(0,y.jsx)(`span`,{ref:s,"aria-hidden":`true`,className:`fixed -top-96 left-0 rounded-full bg-primary px-3 py-1 text-[12px] text-primary-foreground`,children:`Custom image`})]}),(0,y.jsxs)(`div`,{ref:p,"data-demo-target":`tray`,className:a(D,`min-h-14`),children:[`Drop chips here · dropped: `,(0,y.jsx)(`span`,{"data-demo-dropped":!0,children:e.join(`, `)||`none`})]}),(0,y.jsx)(O,{dnd:d,last:n})]})}var k=`import { useCallback, useRef, useState, type RefObject } from "react"
import { useDomDnd, useDragState, useDroppableRef, type DndPlugin, type DomDnd, type DragEndEvent } from "@kitora/dnd"
import { attachNativeBridge, type NativeBridge, type NativeDrag } from "@kitora/dnd/html5"
import { cn } from "@kitora/ui/utils"

// What the engine carries: an in-page label, or a native drag from the bridge.
type Data = string | NativeDrag

const CHIPS = ["Alpha", "Beta", "Gamma"] as const
// the grab point inside the custom drag image, px from its top-left corner
const DRAG_IMAGE_OFFSET = 12
const ZONE = "rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5"

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ dnd, last }: { dnd: DomDnd<Data> | null; last: string }) {
  const state = useDragState(dnd)
  return (
    <p data-demo-status="outbound" className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// A chip that drags through HTML5 DnD, so the browser draws its drag image; \`badge\` swaps in a custom one.
function NativeChip({ bridge, label, index, badge }: { bridge: NativeBridge<Data> | null; label: string; index: number; badge: RefObject<HTMLSpanElement | null> | null }) {
  const ref = useCallback(
    (el: HTMLSpanElement | null) => {
      if (!el || !bridge) return undefined
      return bridge.nativeDraggable(
        el,
        { id: label, container: "chips", index, data: label, type: "chip" },
        badge ? { dragImage: () => (badge.current ? { element: badge.current, x: DRAG_IMAGE_OFFSET, y: DRAG_IMAGE_OFFSET } : null) } : {},
      )
    },
    [bridge, label, index, badge],
  )
  return (
    <span ref={ref} data-chip={label} className="h-7 cursor-grab rounded-full border bg-card px-3 text-[12px] leading-7 select-none hover:bg-accent">
      {label}
      {badge ? " (custom image)" : ""}
    </span>
  )
}

export function NativeChips() {
  const [dropped, setDropped] = useState<readonly string[]>([])
  const [last, setLast] = useState("")
  const [bridge, setBridge] = useState<NativeBridge<Data> | null>(null)
  const badge = useRef<HTMLSpanElement | null>(null)
  // a plugin that watches every drag end, for the status line
  const [status] = useState<DndPlugin<Data>>(() => ({
    name: "status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<Data>) => setLast(\` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`) }),
  }))
  // a drop on the tray is a normal MoveOp
  const dnd = useDomDnd<Data>({ plugins: [status], autoScroll: false, onMove: (op) => setDropped((xs) => [...xs, ...op.ids]) })
  // one bridge per engine, attached while this element is mounted (a callback ref, no effect)
  const bridgeRef = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !dnd) return undefined
      const instance = attachNativeBridge<Data>(dnd, { data: (drag) => drag })
      setBridge(instance)
      return () => {
        instance.destroy()
        setBridge(null)
      }
    },
    [dnd],
  )
  const trayRef = useDroppableRef(dnd, { id: "tray", kind: "container", accepts: ["chip"] })
  return (
    <div ref={bridgeRef} data-demo="outbound" className="flex max-w-md flex-col gap-2">
      <div className="flex items-center gap-2">
        {CHIPS.map((label, index) => (
          <NativeChip key={label} bridge={bridge} label={label} index={index} badge={label === "Gamma" ? badge : null} />
        ))}
        {/* the custom drag image must be in the document (Safari draws nothing otherwise); it sits off screen */}
        <span ref={badge} aria-hidden="true" className="fixed -top-96 left-0 rounded-full bg-primary px-3 py-1 text-[12px] text-primary-foreground">
          Custom image
        </span>
      </div>
      <div ref={trayRef} data-demo-target="tray" className={cn(ZONE, "min-h-14")}>
        Drop chips here · dropped: <span data-demo-dropped>{dropped.join(", ") || "none"}</span>
      </div>
      <Status dnd={dnd} last={last} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>n(()=>import(`./native-outbound-CS0rOd5-.js`),[]));var A=120,j={kinds:[`text`,`uri-list`,`html`]};function M(e){let[t,n]=(0,v.useState)(null),[r]=(0,v.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>n({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})}));return{dnd:l({plugins:[r],autoScroll:!1,onMove:e}),last:t}}function N(e,t={}){let n=(0,v.useRef)(t);n.current=t;let[r,i]=(0,v.useState)(null);return{ref:(0,v.useCallback)(t=>{if(!t||!e)return;let r=g(e,{...n.current,data:e=>e});return i(r),()=>{r.destroy(),i(null)}},[e]),bridge:r}}function P({name:e,dnd:t,last:n,children:r}){let i=f(t);return(0,y.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,i.phase,i.source?` · ${i.source.kind}`:``,i.over?` · over ${i.over.id} (${i.over.position})`:``,n?` · last: ${n.kind} ${n.reason}${n.moved?` (moved)`:``}`:``,r]})}var F=`rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5`;function I(e){return e.length>A?`${e.slice(0,A)}…`:e}function L(){let[e,t]=(0,v.useState)(null),{dnd:n,last:r}=M((e,n)=>{let r=m(n)?.payload();r&&t(p(r,j).accepted)}),{ref:i}=N(n);return(0,y.jsxs)(`div`,{ref:i,"data-demo":`text`,className:`flex max-w-md flex-col gap-2`,children:[(0,y.jsxs)(`div`,{ref:u(n,{id:`text`,kind:`container`,...h(j)}),"data-demo-target":`text`,className:a(F,`min-h-24`),children:[(0,y.jsx)(`p`,{children:`Drop selected text, a link or a page selection (HTML) from another tab.`}),e&&(0,y.jsxs)(`dl`,{className:`mt-1 grid grid-cols-[3rem_1fr] gap-x-2 gap-y-0.5 font-mono text-[11px] text-foreground`,"data-demo-payload":!0,children:[(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`text`}),(0,y.jsx)(`dd`,{"data-payload":`text`,className:`break-all`,children:e.text===null?`—`:I(e.text)}),(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`uris`}),(0,y.jsx)(`dd`,{"data-payload":`uris`,className:`break-all`,children:e.uris.length===0?`—`:e.uris.join(` `)}),(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`html`}),(0,y.jsx)(`dd`,{"data-payload":`html`,className:`break-all`,children:e.html===null?`—`:I(e.html)})]})]}),(0,y.jsx)(P,{name:`text`,dnd:n,last:r})]})}function R(){return(0,y.jsx)(L,{})}var z=`import { type ReactNode, useCallback, useRef, useState } from "react"
import { type DndPlugin, type DomDnd, type DragEndEvent, type DragSource, type MoveOp, useDomDnd, useDragState, useDroppableRef } from "@kitora/dnd"
import { attachNativeBridge, filterPayload, type NativeBridge, type NativeBridgeOptions, type NativeDrag, nativeDragOf, type NativeFilter, type NativePayload, nativeTarget } from "@kitora/dnd/html5"
import { cn } from "@kitora/ui/utils"

// Text, links and HTML: D26. Select text or drag a link from another tab. text/uri-list comments are dropped; HTML is shown as text, never rendered.

/** What every demo's engine carries: an in-page label, or a native drag from the bridge. */
type Data = string | NativeDrag

/** How much of a dropped text or HTML string the demo prints. */
const PREVIEW_CHARS = 120

const TEXT_FILTER: NativeFilter = { kinds: ["text", "uri-list", "html"] }

/** The last finished drag, for the status lines. */
interface LastDrag {
  readonly kind: string
  readonly reason: string
  readonly moved: boolean
}

/** An engine for one demo with a status plugin; \`onMove\` is read through the glue's ref. */
function useDemoDnd(onMove: (op: MoveOp, source: DragSource<Data>) => void) {
  const [last, setLast] = useState<LastDrag | null>(null)
  const [log] = useState<DndPlugin<Data>>(() => ({
    name: "demo-status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<Data>) => setLast({ kind: e.source.kind, reason: e.reason, moved: e.op !== null }) }),
  }))
  const dnd = useDomDnd<Data>({ plugins: [log], autoScroll: false, onMove })
  return { dnd, last }
}

/**
 * Attaches the HTML5 bridge to \`dnd\` while the returned callback ref's element
 * is mounted; the bridge (for \`nativeDraggable\`) is null until then.
 */
function useNativeBridge(dnd: DomDnd<Data> | null, options: Omit<NativeBridgeOptions<Data>, "data"> = {}) {
  const latest = useRef(options)
  latest.current = options
  const [bridge, setBridge] = useState<NativeBridge<Data> | null>(null)
  const ref = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !dnd) return undefined
      const instance = attachNativeBridge<Data>(dnd, { ...latest.current, data: (drag) => drag })
      setBridge(instance)
      return () => {
        instance.destroy()
        setBridge(null)
      }
    },
    [dnd],
  )
  return { ref, bridge }
}

function Status({ name, dnd, last, children }: { readonly name: string; readonly dnd: DomDnd<Data> | null; readonly last: LastDrag | null; readonly children?: ReactNode }) {
  const state = useDragState(dnd)
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last ? \` · last: \${last.kind} \${last.reason}\${last.moved ? " (moved)" : ""}\` : ""}
      {children}
    </p>
  )
}

const ZONE = "rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5"

function clip(text: string): string {
  return text.length > PREVIEW_CHARS ? \`\${text.slice(0, PREVIEW_CHARS)}…\` : text
}

// ---- 2. text, URLs, HTML

function TextDrop() {
  const [payload, setPayload] = useState<NativePayload | null>(null)
  const { dnd, last } = useDemoDnd((_op, source) => {
    const dropped = nativeDragOf(source)?.payload()
    if (dropped) setPayload(filterPayload(dropped, TEXT_FILTER).accepted)
  })
  const { ref } = useNativeBridge(dnd)
  const zoneRef = useDroppableRef(dnd, { id: "text", kind: "container", ...nativeTarget<Data>(TEXT_FILTER) })
  return (
    <div ref={ref} data-demo="text" className="flex max-w-md flex-col gap-2">
      <div ref={zoneRef} data-demo-target="text" className={cn(ZONE, "min-h-24")}>
        <p>Drop selected text, a link or a page selection (HTML) from another tab.</p>
        {payload && (
          <dl className="mt-1 grid grid-cols-[3rem_1fr] gap-x-2 gap-y-0.5 font-mono text-[11px] text-foreground" data-demo-payload>
            <dt className="text-muted-foreground">text</dt>
            <dd data-payload="text" className="break-all">
              {payload.text === null ? "—" : clip(payload.text)}
            </dd>
            <dt className="text-muted-foreground">uris</dt>
            <dd data-payload="uris" className="break-all">
              {payload.uris.length === 0 ? "—" : payload.uris.join(" ")}
            </dd>
            <dt className="text-muted-foreground">html</dt>
            <dd data-payload="html" className="break-all">
              {payload.html === null ? "—" : clip(payload.html)}
            </dd>
          </dl>
        )}
      </div>
      <Status name="text" dnd={dnd} last={last} />
    </div>
  )
}

export function TextDropDemo() {
  return <TextDrop />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>n(()=>import(`./native-text-7G6prdmj.js`),[]));var B=e(r(),1),V=120,H={kinds:[`files`,`text`,`uri-list`]};function U(e){let[t,n]=(0,v.useState)(null),[r]=(0,v.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>n({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})}));return{dnd:l({plugins:[r],autoScroll:!1,onMove:e}),last:t}}function W(e,t={}){let n=(0,v.useRef)(t);n.current=t;let[r,i]=(0,v.useState)(null);return{ref:(0,v.useCallback)(t=>{if(!t||!e)return;let r=g(e,{...n.current,data:e=>e});return i(r),()=>{r.destroy(),i(null)}},[e]),bridge:r}}function G({name:e,dnd:t,last:n,children:r}){let i=f(t);return(0,y.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,i.phase,i.source?` · ${i.source.kind}`:``,i.over?` · over ${i.over.id} (${i.over.position})`:``,n?` · last: ${n.kind} ${n.reason}${n.moved?` (moved)`:``}`:``,r]})}function K(e){return e.length>V?`${e.slice(0,V)}…`:e}function q(e){let{accepted:t}=p(e,H);return t.files.length>0?t.files.map(e=>`File: ${e.name}`):t.uris.length>0?t.uris.map(e=>`Link: ${e}`):t.text===null?[]:[`Text: ${K(t.text)}`]}function J(e,t){let n=t.to.target===null?-1:e.indexOf(t.to.target);return n<0?e.length:t.to.position===`before`?n:n+1}function Y(){let[e,t]=(0,v.useState)([`Plan`,`Draft`,`Review`,`Ship`]),{dnd:n,last:r}=U((e,n)=>{let r=m(n)?.payload();(0,B.flushSync)(()=>t(t=>{if(!r)return c(t,e,e=>e);let n=q(r).filter(e=>!t.includes(e)),i=J(t,e);return[...t.slice(0,i),...n,...t.slice(i)]}))});d(n,{indicator:`line`});let{ref:i}=W(n);return(0,y.jsxs)(`div`,{ref:i,"data-demo":`list`,className:`flex max-w-xs flex-col gap-2`,children:[(0,y.jsx)(`ul`,{className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map((e,t)=>(0,y.jsx)(ie,{dnd:n,label:e,index:t},e))}),(0,y.jsx)(G,{name:`list`,dnd:n,last:r})]})}function ie({dnd:e,label:t,index:n}){let r=s(e,{id:t,container:`list`,index:n,data:t}),i=u(e,{id:t,kind:`item`,container:`list`,...h(H)});return(0,y.jsx)(`li`,{ref:(0,v.useCallback)(e=>{let t=r(e),n=i(e);return()=>{t?.(),n?.()}},[r,i]),"data-item":t,tabIndex:0,className:`flex h-7 cursor-grab items-center rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,children:(0,y.jsx)(`span`,{className:`truncate`,children:t})})}function ae(){return(0,y.jsx)(Y,{})}var X=`import { type ReactNode, useCallback, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { applyMove, type DndPlugin, type DomDnd, type DragEndEvent, type DragSource, type MoveOp, useDomDnd, useDraggableRef, useDragState, useDroppableRef, usePresentation } from "@kitora/dnd"
import { attachNativeBridge, filterPayload, type NativeBridge, type NativeBridgeOptions, type NativeDrag, nativeDragOf, type NativeFilter, type NativePayload, nativeTarget } from "@kitora/dnd/html5"

// One set of targets for both: D130. Reorder the rows with the mouse, or drop a file or link between two rows: both arrive as a MoveOp on the same item targets, with the same drop line.

/** What every demo's engine carries: an in-page label, or a native drag from the bridge. */
type Data = string | NativeDrag

/** How much of a dropped text or HTML string the demo prints. */
const PREVIEW_CHARS = 120

const LIST_FILTER: NativeFilter = { kinds: ["files", "text", "uri-list"] }

/** The last finished drag, for the status lines. */
interface LastDrag {
  readonly kind: string
  readonly reason: string
  readonly moved: boolean
}

/** An engine for one demo with a status plugin; \`onMove\` is read through the glue's ref. */
function useDemoDnd(onMove: (op: MoveOp, source: DragSource<Data>) => void) {
  const [last, setLast] = useState<LastDrag | null>(null)
  const [log] = useState<DndPlugin<Data>>(() => ({
    name: "demo-status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<Data>) => setLast({ kind: e.source.kind, reason: e.reason, moved: e.op !== null }) }),
  }))
  const dnd = useDomDnd<Data>({ plugins: [log], autoScroll: false, onMove })
  return { dnd, last }
}

/**
 * Attaches the HTML5 bridge to \`dnd\` while the returned callback ref's element
 * is mounted; the bridge (for \`nativeDraggable\`) is null until then.
 */
function useNativeBridge(dnd: DomDnd<Data> | null, options: Omit<NativeBridgeOptions<Data>, "data"> = {}) {
  const latest = useRef(options)
  latest.current = options
  const [bridge, setBridge] = useState<NativeBridge<Data> | null>(null)
  const ref = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !dnd) return undefined
      const instance = attachNativeBridge<Data>(dnd, { ...latest.current, data: (drag) => drag })
      setBridge(instance)
      return () => {
        instance.destroy()
        setBridge(null)
      }
    },
    [dnd],
  )
  return { ref, bridge }
}

function Status({ name, dnd, last, children }: { readonly name: string; readonly dnd: DomDnd<Data> | null; readonly last: LastDrag | null; readonly children?: ReactNode }) {
  const state = useDragState(dnd)
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last ? \` · last: \${last.kind} \${last.reason}\${last.moved ? " (moved)" : ""}\` : ""}
      {children}
    </p>
  )
}

function clip(text: string): string {
  return text.length > PREVIEW_CHARS ? \`\${text.slice(0, PREVIEW_CHARS)}…\` : text
}

// ---- 3. the same item targets for both kinds of drag

/** Rows a native payload becomes: one per file, else the URLs, else the text. */
function rowsFrom(payload: NativePayload): string[] {
  const { accepted } = filterPayload(payload, LIST_FILTER)
  if (accepted.files.length > 0) return accepted.files.map((f) => \`File: \${f.name}\`)
  if (accepted.uris.length > 0) return accepted.uris.map((u) => \`Link: \${u}\`)
  return accepted.text === null ? [] : [\`Text: \${clip(accepted.text)}\`]
}

/** Where a native drop lands in \`items\`: after or before its target row, or the end for the list itself. */
function insertIndex(items: readonly string[], op: MoveOp): number {
  const at = op.to.target === null ? -1 : items.indexOf(op.to.target)
  if (at < 0) return items.length
  return op.to.position === "before" ? at : at + 1
}

function MixedList() {
  const [items, setItems] = useState<readonly string[]>(["Plan", "Draft", "Review", "Ship"])
  const { dnd, last } = useDemoDnd((op, source) => {
    const payload = nativeDragOf(source)?.payload()
    flushSync(() =>
      setItems((xs) => {
        if (!payload) return applyMove(xs, op, (x) => x)
        const added = rowsFrom(payload).filter((r) => !xs.includes(r))
        const at = insertIndex(xs, op)
        return [...xs.slice(0, at), ...added, ...xs.slice(at)]
      }),
    )
  })
  usePresentation(dnd, { indicator: "line" })
  const { ref } = useNativeBridge(dnd)
  return (
    <div ref={ref} data-demo="list" className="flex max-w-xs flex-col gap-2">
      <ul className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
        {items.map((label, index) => (
          <MixedRow key={label} dnd={dnd} label={label} index={index} />
        ))}
      </ul>
      <Status name="list" dnd={dnd} last={last} />
    </div>
  )
}

function MixedRow({ dnd, label, index }: { readonly dnd: DomDnd<Data> | null; readonly label: string; readonly index: number }) {
  const dragRef = useDraggableRef(dnd, { id: label, container: "list", index, data: label })
  const dropRef = useDroppableRef(dnd, { id: label, kind: "item", container: "list", ...nativeTarget<Data>(LIST_FILTER) })
  const ref = useCallback(
    (el: HTMLLIElement | null) => {
      const a = dragRef(el)
      const b = dropRef(el)
      return () => {
        a?.()
        b?.()
      }
    },
    [dragRef, dropRef],
  )
  return (
    <li
      ref={ref}
      data-item={label}
      tabIndex={0}
      className="flex h-7 cursor-grab items-center rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span className="truncate">{label}</span>
    </li>
  )
}

export function MixedListDemo() {
  return <MixedList />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>n(()=>import(`./native-list-BW9zgz1H.js`),[]));var oe={kinds:[`files`],mime:[`application/pdf`]};function se(e){let[t,n]=(0,v.useState)(null),[r]=(0,v.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>n({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})}));return{dnd:l({plugins:[r],autoScroll:!1,onMove:e}),last:t}}function ce(e,t={}){let n=(0,v.useRef)(t);n.current=t;let[r,i]=(0,v.useState)(null);return{ref:(0,v.useCallback)(t=>{if(!t||!e)return;let r=g(e,{...n.current,data:e=>e});return i(r),()=>{r.destroy(),i(null)}},[e]),bridge:r}}function le({name:e,dnd:t,last:n,children:r}){let i=f(t);return(0,y.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,i.phase,i.source?` · ${i.source.kind}`:``,i.over?` · over ${i.over.id} (${i.over.position})`:``,n?` · last: ${n.kind} ${n.reason}${n.moved?` (moved)`:``}`:``,r]})}var Z=`rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5`;function ue(){let{dnd:e,last:t}=se(()=>{}),{ref:n}=ce(e),r=u(e,{id:`pdf`,kind:`container`,...h(oe)}),i=u(e,{id:`cards`,kind:`container`,accepts:[`card`]});return(0,y.jsxs)(`div`,{ref:n,"data-demo":`reject`,className:`flex max-w-md flex-col gap-2`,children:[(0,y.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,y.jsx)(`div`,{ref:r,"data-demo-target":`pdf`,className:a(Z,`h-20`),children:`PDF files only`}),(0,y.jsx)(`div`,{ref:i,"data-demo-target":`cards`,className:a(Z,`h-20`),children:`In-page cards only (accepts: card)`})]}),(0,y.jsx)(le,{name:`reject`,dnd:e,last:t})]})}function Q(){return(0,y.jsx)(ue,{})}var $=`import { type ReactNode, useCallback, useRef, useState } from "react"
import { type DndPlugin, type DomDnd, type DragEndEvent, type DragSource, type MoveOp, useDomDnd, useDragState, useDroppableRef } from "@kitora/dnd"
import { attachNativeBridge, type NativeBridge, type NativeBridgeOptions, type NativeDrag, type NativeFilter, nativeTarget } from "@kitora/dnd/html5"
import { cn } from "@kitora/ui/utils"

// Reject feedback: D56 through the bridge. Drag an image over both zones: neither takes it, so each shows a dashed outline and the cursor says no drop. The drop is still swallowed, so the browser never opens the file.

/** What every demo's engine carries: an in-page label, or a native drag from the bridge. */
type Data = string | NativeDrag

const PDF_FILTER: NativeFilter = { kinds: ["files"], mime: ["application/pdf"] }

/** The last finished drag, for the status lines. */
interface LastDrag {
  readonly kind: string
  readonly reason: string
  readonly moved: boolean
}

/** An engine for one demo with a status plugin; \`onMove\` is read through the glue's ref. */
function useDemoDnd(onMove: (op: MoveOp, source: DragSource<Data>) => void) {
  const [last, setLast] = useState<LastDrag | null>(null)
  const [log] = useState<DndPlugin<Data>>(() => ({
    name: "demo-status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<Data>) => setLast({ kind: e.source.kind, reason: e.reason, moved: e.op !== null }) }),
  }))
  const dnd = useDomDnd<Data>({ plugins: [log], autoScroll: false, onMove })
  return { dnd, last }
}

/**
 * Attaches the HTML5 bridge to \`dnd\` while the returned callback ref's element
 * is mounted; the bridge (for \`nativeDraggable\`) is null until then.
 */
function useNativeBridge(dnd: DomDnd<Data> | null, options: Omit<NativeBridgeOptions<Data>, "data"> = {}) {
  const latest = useRef(options)
  latest.current = options
  const [bridge, setBridge] = useState<NativeBridge<Data> | null>(null)
  const ref = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !dnd) return undefined
      const instance = attachNativeBridge<Data>(dnd, { ...latest.current, data: (drag) => drag })
      setBridge(instance)
      return () => {
        instance.destroy()
        setBridge(null)
      }
    },
    [dnd],
  )
  return { ref, bridge }
}

function Status({ name, dnd, last, children }: { readonly name: string; readonly dnd: DomDnd<Data> | null; readonly last: LastDrag | null; readonly children?: ReactNode }) {
  const state = useDragState(dnd)
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last ? \` · last: \${last.kind} \${last.reason}\${last.moved ? " (moved)" : ""}\` : ""}
      {children}
    </p>
  )
}

const ZONE = "rounded-md border-2 border-dashed p-2 text-[12px] text-muted-foreground data-[dnd-native=accept]:border-primary data-[dnd-native=accept]:bg-primary/5"

// ---- 4. reject feedback

function RejectTargets() {
  const { dnd, last } = useDemoDnd(() => {})
  const { ref } = useNativeBridge(dnd)
  const pdfRef = useDroppableRef(dnd, { id: "pdf", kind: "container", ...nativeTarget<Data>(PDF_FILTER) })
  const cardsRef = useDroppableRef(dnd, { id: "cards", kind: "container", accepts: ["card"] })
  return (
    <div ref={ref} data-demo="reject" className="flex max-w-md flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div ref={pdfRef} data-demo-target="pdf" className={cn(ZONE, "h-20")}>
          PDF files only
        </div>
        <div ref={cardsRef} data-demo-target="cards" className={cn(ZONE, "h-20")}>
          In-page cards only (accepts: card)
        </div>
      </div>
      <Status name="reject" dnd={dnd} last={last} />
    </div>
  )
}

export function RejectTargetsDemo() {
  return <RejectTargets />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>n(()=>import(`./native-reject-CrO4bij4.js`),[]));function de(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Files and native drags`,children:`The HTML5 bridge, an opt-in entry: files, text, links and HTML dragged in from other apps land on the same targets as in-page drags, and in-page items can drag with the browser's own drag image.`}),(0,y.jsx)(_,{n:1,title:`Files from the OS`,blurb:`D24, D130. Drag images from the desktop. MIME and count are checked during the drag; sizes only at drop (the browser hides them until then). Crossing the list inside the zone never flickers its highlight (D140).`,code:w,children:(0,y.jsx)(te,{})}),(0,y.jsx)(_,{n:2,title:`Text, links and HTML`,blurb:`D26. Select text or drag a link from another tab. text/uri-list comments are dropped; HTML is shown as text, never rendered.`,code:z,children:(0,y.jsx)(R,{})}),(0,y.jsx)(_,{n:3,title:`One set of targets for both`,blurb:`D130. Reorder the rows with the mouse, or drop a file or link between two rows: both arrive as a MoveOp on the same item targets, with the same drop line.`,code:X,children:(0,y.jsx)(ae,{})}),(0,y.jsx)(_,{n:4,title:`Reject feedback`,blurb:`D56 through the bridge. Drag an image over both zones: neither takes it, so each shows a dashed outline and the cursor says no drop. The drop is still swallowed, so the browser never opens the file.`,code:$,children:(0,y.jsx)(Q,{})}),(0,y.jsx)(_,{n:5,title:`Native drag image`,blurb:`D20, D141. These chips drag through HTML5 DnD, so the browser draws the drag image; Gamma uses a custom one. A drop on the tray is a normal MoveOp.`,code:k,children:(0,y.jsx)(re,{})})]})}export{de as component};