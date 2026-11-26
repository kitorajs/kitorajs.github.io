import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./minus-m0qDSdNu.js";import{t as r}from"./plus-DkT_QJcZ.js";import{t as i}from"./square-CGjoGtCk.js";import{t as a}from"./trash-2-0f767-k3.js";import{a as o,c as s,l as c}from"./provider-D0Iw1w2F.js";import{Bc as l,Cc as u,Ic as d,Mi as f,hi as p,ti as m}from"./index-9y5uwRd3.js";import{c as h,s as g}from"./env-CFRqT0G6.js";import{c as _,l as v,t as y}from"./kit-Uq9GZ0sn.js";import{c as b}from"./adapter-MuxtTBM4.js";import{_ as x,a as S,c as C,g as w,p as T,r as ee,s as E,t as D}from"./react-D7rNXBHp.js";import{t as O}from"./history-B1jEdkX2.js";import"./kit-gallery-B-Yr9fP4.js";import{t as k}from"./example-CZLJLtIC.js";import{r as A}from"./cursors-Dy-kXXyk.js";import{r as j,t as te}from"./history-CD_rSdQ7.js";import{r as ne}from"./presence-D7z7_1Y4.js";import{n as M,t as re}from"./selection-Bx_DA2Lb.js";import{a as ie}from"./awareness-CR0kcyqK.js";import{n as ae,t as N}from"./yjs-DVYJD1T7.js";var P=f(`scan`,[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}]]),F=e(l(),1),I=d(),L={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},R={id:`bob`,name:`Bob Ito`,color:`#2563eb`},z=`canvas`,B=1.25,V=.4,H=2.5,U=[`#fda4af`,`#93c5fd`,`#86efac`,`#fcd34d`,`#c4b5fd`],W=[{id:`s1`,x:40,y:40,w:120,h:70,color:`#93c5fd`,label:`Research`},{id:`s2`,x:210,y:70,w:110,h:70,color:`#fcd34d`,label:`Design`},{id:`s3`,x:90,y:170,w:130,h:70,color:`#86efac`,label:`Build`},{id:`s4`,x:270,y:200,w:100,h:70,color:`#fda4af`,label:`Ship`}];function G(e){if(!b(e))return null;let{id:t,x:n,y:r,w:i,h:a,color:o,label:s}=e;return typeof t==`string`&&typeof n==`number`&&typeof r==`number`&&typeof i==`number`&&typeof a==`number`&&typeof o==`string`&&typeof s==`string`?{id:t,x:n,y:r,w:i,h:a,color:o,label:s}:null}function K(e){let t=(0,F.useRef)(null),n=(0,F.useMemo)(()=>n=>{let r=()=>{t.current=null,n()};return e.observe(r),()=>e.unobserve(r)},[e]),r=()=>(t.current||={list:[...e.values()].map(G).filter(e=>e!==null).toSorted((e,t)=>e.id.localeCompare(t.id))},t.current.list);return(0,F.useSyncExternalStore)(n,r,r)}function q(e,t){let[n,r]=(0,F.useState)(null);return(0,F.useEffect)(()=>{let n=new ie;if(t){let e=n.getMap(`shapes`);for(let t of W)e.set(t.id,{...t})}let i=N(n,e.connect());return r(i),()=>{i.destroy(),n.destroy()}},[e,t]),n}function J(e,t,n){t?e.set(n,{...t}):e.delete(n)}function Y(e,t,n,r,i){return{label:n,do:()=>J(e,i,t),undo:()=>J(e,r,t)}}var X=`collab-canvas`,oe=3,se=8,ce=new Set([`escape`,`pointer-lost`,`programmatic`,`source-removed`]);function le(e,t){let n=o(),r=`collab-canvas.delete${(0,F.useId)()}`,i=(0,F.useRef)(t);i.current=t,(0,F.useEffect)(()=>{let t=e.current;if(!t)return;let a=c(r),o=s(t,r),l=n.register({[r]:{title:`Delete selected`,run:()=>{t.focus(),i.current()}}},`collab-canvas`),u=n.keymap.add(`default`,[{key:`Delete`,command:r,when:a},{key:`Backspace`,command:r,when:a}],{source:`collab-canvas`});return()=>{u.dispose(),l(),o()}},[n,e,r])}function ue({shape:e,index:t,selected:n,onPress:r}){let{ref:i}=_({id:e.id,container:X,index:t,data:e.id});return(0,I.jsx)(`div`,{ref:i,role:`button`,tabIndex:0,"aria-label":e.label,"aria-pressed":n,"data-shape-box":e.id,className:`absolute rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,style:{left:e.x,top:e.y,width:e.w,height:e.h},onPointerDown:t=>r(t,e),children:(0,I.jsx)(M,{surface:z,id:e.id,className:`size-full rounded-lg`,children:(0,I.jsx)(`div`,{"data-shape":e.id,className:p(`flex size-full cursor-move items-center justify-center rounded-lg border border-black/10 text-[12px] font-medium text-zinc-800 shadow-sm`,n&&`ring-2 ring-primary ring-offset-1 ring-offset-background`),style:{backgroundColor:e.color},children:e.label})})})}function de({surfaceRef:e,view:t,children:n,...r}){let{ref:i}=v({id:X,kind:`container`,sticky:!0});return(0,I.jsx)(`div`,{ref:(0,F.useCallback)(t=>(e.current=t,i(t)),[i,e]),tabIndex:0,"aria-label":`Shared canvas`,"data-testid":`canvas-surface`,[g]:`free`,[h]:String(se*t.zoom),...r,className:`relative h-72 cursor-grab touch-none overflow-hidden bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] outline-none select-none active:cursor-grabbing`,style:{backgroundSize:`${16*t.zoom}px ${16*t.zoom}px`,backgroundPosition:`${t.x}px ${t.y}px`},children:n})}function Z({map:e,history:t}){let o=K(e),s=(0,F.useRef)(null),[c,l]=(0,F.useState)({surface:z,x:0,y:0,zoom:1}),[u,d]=w(z),f=(0,F.useRef)(null);x(c);let{following:p,follow:h,stop:g}=S(z,e=>l(e));ee(z,s,e=>({x:(e.x-c.x)/c.zoom,y:(e.y-c.y)/c.zoom})),E(t,s);let _=e=>{g(),l(t=>({...t,zoom:Math.min(H,Math.max(V,t.zoom*e))}))},v=()=>{let n=`s-${Date.now().toString(36)}`,r=o.length,i={id:n,x:60+r*37%240,y:50+r*53%180,w:110,h:64,color:U[r%U.length]??`#93c5fd`,label:`Card ${r+1}`};t.execute(Y(e,n,`Add ${i.label}`,null,i)),d([n])},b=()=>{let n=o.filter(e=>u.includes(e.id));n.length!==0&&(t.transact(n.length===1?`Delete ${n[0]?.label??``}`:`Delete ${n.length} cards`,()=>{for(let r of n)t.execute(Y(e,r.id,`Delete ${r.label}`,r,null))}),d([]))},C=()=>{let n=o.filter(e=>u.includes(e.id));t.transact(`Recolour`,()=>{for(let r of n)t.execute(Y(e,r.id,`Recolour`,r,{...r,color:U[(U.findIndex(e=>e===r.color)+1)%U.length]??r.color}))})};le(s,b);let T=(e,t)=>{e.button===0&&d(e.shiftKey?u.includes(t.id)?u.filter(e=>e!==t.id):[...u,t.id]:[t.id])},D=e=>{e.button!==0||e.target instanceof Element&&e.target.closest(`[data-shape-box]`)||(e.currentTarget.setPointerCapture(e.pointerId),f.current={startX:e.clientX,startY:e.clientY,view:c,moved:!1},g())},O=e=>{let t=f.current;if(!t)return;let n=e.clientX-t.startX,r=e.clientY-t.startY;!t.moved&&Math.hypot(n,r)<oe||(t.moved=!0,l({...t.view,x:t.view.x+n,y:t.view.y+r}))},k=()=>{let e=f.current;f.current=null,e&&!e.moved&&d([])},j=(0,F.useRef)(null),M=(0,F.useRef)(c.zoom);return M.current=c.zoom,(0,I.jsxs)(`div`,{className:`flex flex-col`,children:[(0,I.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1 border-b px-1.5`,children:[(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Add card`,title:`Add card`,onClick:v,children:(0,I.jsx)(i,{})}),(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Recolour selected`,title:`Recolour selected`,disabled:u.length===0,onClick:C,children:(0,I.jsx)(`span`,{className:`size-3 rounded-full bg-[conic-gradient(#fda4af,#93c5fd,#86efac,#fcd34d,#fda4af)]`})}),(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Delete selected`,title:`Delete selected`,disabled:u.length===0,onClick:b,children:(0,I.jsx)(a,{})}),(0,I.jsx)(`span`,{className:`mx-1 h-4 w-px bg-border`}),(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Zoom out`,onClick:()=>_(1/B),children:(0,I.jsx)(n,{})}),(0,I.jsxs)(`span`,{className:`w-9 text-center text-[11px] text-muted-foreground tabular-nums`,children:[Math.round(c.zoom*100),`%`]}),(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Zoom in`,onClick:()=>_(B),children:(0,I.jsx)(r,{})}),(0,I.jsx)(m,{size:`icon-xs`,variant:`ghost`,"aria-label":`Reset view`,title:`Reset view`,onClick:()=>{g(),l({surface:z,x:0,y:0,zoom:1})},children:(0,I.jsx)(P,{})}),(0,I.jsx)(te,{source:t,className:`ml-auto`}),(0,I.jsx)(ne,{size:`xs`,includeSelf:!1,followingId:p?.clientId,onFollow:e=>p?.clientId===e.clientId?g():h(e.clientId)})]}),(0,I.jsx)(y,{presentation:!1,onDragStart:t=>{j.current=t.source?G(e.get(t.source.id)):null},onDragMove:t=>{let n=j.current;n&&J(e,{...n,x:Math.round(n.x+t.transform.x/M.current),y:Math.round(n.y+t.transform.y/M.current)},n.id)},onDragEnd:n=>{let r=j.current;if(j.current=null,!r)return;if(ce.has(n.reason)){J(e,r,r.id);return}let i=G(e.get(r.id));i&&(i.x!==r.x||i.y!==r.y)&&t.record(Y(e,r.id,`Move ${r.label}`,r,i))},children:(0,I.jsxs)(de,{surfaceRef:s,view:c,onPointerDown:D,onPointerMove:O,onPointerUp:k,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-0 origin-top-left`,style:{transform:`translate(${c.x}px, ${c.y}px) scale(${c.zoom})`},children:o.map((e,t)=>(0,I.jsx)(ue,{shape:e,index:t,selected:u.includes(e.id),onPress:T},e.id))}),(0,I.jsx)(A,{surface:z,project:e=>({x:e.x*c.zoom+c.x,y:e.y*c.zoom+c.y})}),(0,I.jsx)(re,{following:p,onStop:g})]})})]})}function fe({user:e,toolbar:t,children:n}){return(0,I.jsxs)(`div`,{"data-pane":e.id,className:`flex min-w-0 flex-col overflow-hidden rounded-lg border bg-background`,children:[(0,I.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px]`,children:[(0,I.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),(0,I.jsxs)(`span`,{className:`font-medium`,children:[e.name.split(` `)[0],`’s screen`]}),(0,I.jsx)(`div`,{className:`ml-auto flex items-center gap-1.5`,children:t})]}),(0,I.jsx)(`div`,{className:`relative min-h-0 flex-1`,children:n})]})}function Q({hub:e,user:t,seed:n}){let r=q(e,n),[i]=(0,F.useState)(()=>O()),a=T({user:t,key:r?String(r.doc.clientID):`offline`,adapter:()=>r?ae(r.awareness):null});return(0,I.jsx)(fe,{user:t,children:r&&a?(0,I.jsxs)(D,{presence:a,children:[(0,I.jsx)(Z,{map:r.doc.getMap(`shapes`),history:i}),(0,I.jsx)(j,{source:i,title:`${t.name.split(` `)[0]}’s history`,className:`m-2 h-44 rounded-md`})]}):(0,I.jsx)(`div`,{className:`h-72 animate-pulse bg-muted`})})}function pe(){let e=C();return(0,I.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[(0,I.jsx)(Q,{hub:e,user:L,seed:!0}),(0,I.jsx)(Q,{hub:e,user:R,seed:!1})]})}var $=`import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type ComponentProps, type PointerEvent, type ReactNode, type RefObject } from "react"
import { DndProvider, KEYBOARD_MODE_ATTR, KEYBOARD_STEP_ATTR, useDraggable, useDroppable, type DragEndEvent, type DragState, type EndReason } from "@kitora/dnd"
import { elementScope, scopeWhen, useKeyboardOrLocal } from "@kitora/keyboard"
import { Minus, Plus, Scan, Square, Trash2 } from "lucide-react"
import { CollabProvider, createHistory, FollowBanner, HistoryControls, HistoryPanel, isRecord, LiveCursors, PresenceAvatars, SelectionMark, useCursorBroadcast, useFollow, useHistoryKeys, useMemoryHub, usePresenceRoom, useSharedSelection, useViewportBroadcast, type CollabUser, type Command, type History, type MemoryHub, type ViewportState } from "@kitora/collab"
import { connectYDoc, Y, yAwarenessPresence, type YConnection } from "@kitora/collab/yjs"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }
const SURFACE = "canvas"
const ZOOM_STEP = 1.25
const MIN_ZOOM = 0.4
const MAX_ZOOM = 2.5
const COLORS = ["#fda4af", "#93c5fd", "#86efac", "#fcd34d", "#c4b5fd"] as const

interface Shape {
  readonly id: string
  readonly x: number
  readonly y: number
  readonly w: number
  readonly h: number
  readonly color: string
  readonly label: string
}

const SEED: readonly Shape[] = [
  { id: "s1", x: 40, y: 40, w: 120, h: 70, color: "#93c5fd", label: "Research" },
  { id: "s2", x: 210, y: 70, w: 110, h: 70, color: "#fcd34d", label: "Design" },
  { id: "s3", x: 90, y: 170, w: 130, h: 70, color: "#86efac", label: "Build" },
  { id: "s4", x: 270, y: 200, w: 100, h: 70, color: "#fda4af", label: "Ship" },
]

/** Shapes live in a Y.Map; values are written by other clients, so read them back checked. */
function parseShape(raw: unknown): Shape | null {
  if (!isRecord(raw)) return null
  const { id, x, y, w, h, color, label } = raw
  return typeof id === "string" && typeof x === "number" && typeof y === "number" && typeof w === "number" && typeof h === "number" && typeof color === "string" && typeof label === "string" ? { id, x, y, w, h, color, label } : null
}

/** The shapes map as a sorted array that changes identity only when the doc changes. */
function useShapes(map: Y.Map<unknown>): readonly Shape[] {
  const cache = useRef<{ list: readonly Shape[] } | null>(null)
  const subscribe = useMemo(
    () => (onChange: () => void) => {
      const observer = () => {
        cache.current = null
        onChange()
      }
      map.observe(observer)
      return () => map.unobserve(observer)
    },
    [map],
  )
  const read = () => {
    if (!cache.current) cache.current = { list: [...map.values()].map(parseShape).filter((s): s is Shape => s !== null).toSorted((a, b) => a.id.localeCompare(b.id)) }
    return cache.current.list
  }
  return useSyncExternalStore(subscribe, read, read)
}

/** One Y.Doc per screen, synced to the others over the hub; presence rides the doc's awareness. */
function useYRoom(hub: MemoryHub, seed: boolean): YConnection | null {
  const [conn, setConn] = useState<YConnection | null>(null)
  useEffect(() => {
    const doc = new Y.Doc()
    if (seed) {
      const map = doc.getMap<unknown>("shapes")
      for (const s of SEED) map.set(s.id, { ...s })
    }
    const c = connectYDoc(doc, hub.connect())
    setConn(c)
    return () => {
      c.destroy()
      doc.destroy()
    }
  }, [hub, seed])
  return conn
}

function setShape(map: Y.Map<unknown>, shape: Shape | null, id: string): void {
  if (shape) map.set(id, { ...shape })
  else map.delete(id)
}

/** A change to one shape, from \`before\` to \`after\` (null = absent), as a command. */
function shapeCommand(map: Y.Map<unknown>, id: string, label: string, before: Shape | null, after: Shape | null): Command {
  return { label, do: () => setShape(map, after, id), undo: () => setShape(map, before, id) }
}

/**
 * A pan of the empty canvas. Panning moves the view, not an item, so it is a plain pointer gesture
 * rather than a drag; the cards themselves move on @kitora/dnd.
 */
interface Pan {
  readonly startX: number
  readonly startY: number
  readonly view: ViewportState
  moved: boolean
}

/** The cards' drag container id (one per screen is fine: each screen has its own DndProvider). */
const CANVAS = "collab-canvas"
/** Pointer travel before a press on the empty canvas counts as a pan rather than a click (clears the selection). */
const PAN_SLOP_PX = 3
/** Arrow-key step for a card held with the keyboard (Space, then arrows; Shift for four steps). */
const KEY_STEP_PX = 8
/** Drag endings that put the card back where it started instead of keeping the move. */
const REVERT_REASONS: ReadonlySet<EndReason> = new Set<EndReason>(["escape", "pointer-lost", "programmatic", "source-removed"])

/** Delete and Backspace run \`onDelete\` while focus is inside \`ref\`, as @kitora/keyboard bindings. */
function useDeleteKeys(ref: RefObject<HTMLElement | null>, onDelete: () => void) {
  const keyboard = useKeyboardOrLocal()
  const id = \`collab-canvas.delete\${useId()}\`
  const latest = useRef(onDelete)
  latest.current = onDelete
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const when = scopeWhen(id)
    const unscope = elementScope(el, id)
    const unregister = keyboard.register({
        [id]: {
          title: "Delete selected",
          // Focus the canvas first: the focused card is about to unmount, and focus must stay in scope for ⌘Z.
          run: () => {
            el.focus()
            latest.current()
          },
        },
      }, "collab-canvas")
    const keys = keyboard.keymap.add("default", [{ key: "Delete", command: id, when }, { key: "Backspace", command: id, when }], { source: "collab-canvas" })
    return () => {
      keys.dispose()
      unregister()
      unscope()
    }
  }, [keyboard, ref, id])
}

/** One card: a dnd draggable positioned in canvas units, ringed when someone else selected it. */
function Card({ shape, index, selected, onPress }: { readonly shape: Shape; readonly index: number; readonly selected: boolean; readonly onPress: (event: PointerEvent<HTMLDivElement>, shape: Shape) => void }) {
  const { ref } = useDraggable({ id: shape.id, container: CANVAS, index, data: shape.id })
  return (
    <div ref={ref} role="button" tabIndex={0} aria-label={shape.label} aria-pressed={selected} data-shape-box={shape.id} className="absolute rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" style={{ left: shape.x, top: shape.y, width: shape.w, height: shape.h }} onPointerDown={(e) => onPress(e, shape)}>
      <SelectionMark surface={SURFACE} id={shape.id} className="size-full rounded-lg">
        <div
          data-shape={shape.id}
          className={cn("flex size-full cursor-move items-center justify-center rounded-lg border border-black/10 text-[12px] font-medium text-zinc-800 shadow-sm", selected && "ring-2 ring-primary ring-offset-1 ring-offset-background")}
          style={{ backgroundColor: shape.color }}
        >
          {shape.label}
        </div>
      </SelectionMark>
    </div>
  )
}

/** The surface is the cards' one (sticky) drop target, so a drop anywhere on it lands; it also owns the pan. */
function Surface({ surfaceRef, view, children, ...rest }: { readonly surfaceRef: RefObject<HTMLDivElement | null>; readonly view: ViewportState; readonly children: ReactNode } & Pick<ComponentProps<"div">, "onPointerDown" | "onPointerMove" | "onPointerUp">) {
  const { ref } = useDroppable({ id: CANVAS, kind: "container", sticky: true })
  const attach = useCallback(
    (el: HTMLDivElement | null) => {
      surfaceRef.current = el
      return ref(el)
    },
    [ref, surfaceRef],
  )
  return (
    <div
      ref={attach}
      tabIndex={0}
      aria-label="Shared canvas"
      data-testid="canvas-surface"
      {...{ [KEYBOARD_MODE_ATTR]: "free", [KEYBOARD_STEP_ATTR]: String(KEY_STEP_PX * view.zoom) }}
      {...rest}
      className="relative h-72 cursor-grab touch-none overflow-hidden bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] outline-none select-none active:cursor-grabbing"
      style={{ backgroundSize: \`\${16 * view.zoom}px \${16 * view.zoom}px\`, backgroundPosition: \`\${view.x}px \${view.y}px\` }}
    >
      {children}
    </div>
  )
}

function Canvas({ map, history }: { readonly map: Y.Map<unknown>; readonly history: History }) {
  const shapes = useShapes(map)
  const surfaceRef = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<ViewportState>({ surface: SURFACE, x: 0, y: 0, zoom: 1 })
  const [selected, setSelected] = useSharedSelection(SURFACE)
  const pan = useRef<Pan | null>(null)
  useViewportBroadcast(view)
  const { following, follow, stop } = useFollow(SURFACE, (vp) => setView(vp))
  // Cursors travel in canvas coordinates, so they land on the same spot at any pan and zoom.
  useCursorBroadcast(SURFACE, surfaceRef, (p) => ({ x: (p.x - view.x) / view.zoom, y: (p.y - view.y) / view.zoom }))
  useHistoryKeys(history, surfaceRef)

  const zoomBy = (factor: number) => {
    stop()
    setView((v) => ({ ...v, zoom: Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v.zoom * factor)) }))
  }
  const addShape = () => {
    const id = \`s-\${Date.now().toString(36)}\`
    const n = shapes.length
    const shape: Shape = { id, x: 60 + ((n * 37) % 240), y: 50 + ((n * 53) % 180), w: 110, h: 64, color: COLORS[n % COLORS.length] ?? "#93c5fd", label: \`Card \${n + 1}\` }
    history.execute(shapeCommand(map, id, \`Add \${shape.label}\`, null, shape))
    setSelected([id])
  }
  const deleteSelected = () => {
    const doomed = shapes.filter((s) => selected.includes(s.id))
    if (doomed.length === 0) return
    history.transact(doomed.length === 1 ? \`Delete \${doomed[0]?.label ?? ""}\` : \`Delete \${doomed.length} cards\`, () => {
      for (const s of doomed) history.execute(shapeCommand(map, s.id, \`Delete \${s.label}\`, s, null))
    })
    setSelected([])
  }
  const recolor = () => {
    const targets = shapes.filter((s) => selected.includes(s.id))
    history.transact("Recolour", () => {
      for (const s of targets) history.execute(shapeCommand(map, s.id, "Recolour", s, { ...s, color: COLORS[(COLORS.findIndex((c) => c === s.color) + 1) % COLORS.length] ?? s.color }))
    })
  }

  useDeleteKeys(surfaceRef, deleteSelected)

  // Selecting is a click on a card (Shift adds or removes); moving it is the dnd drag that may follow.
  const pressCard = (event: PointerEvent<HTMLDivElement>, shape: Shape) => {
    if (event.button !== 0) return
    setSelected(event.shiftKey ? (selected.includes(shape.id) ? selected.filter((id) => id !== shape.id) : [...selected, shape.id]) : [shape.id])
  }
  const startPan = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target instanceof Element && event.target.closest("[data-shape-box]"))) return
    event.currentTarget.setPointerCapture(event.pointerId)
    pan.current = { startX: event.clientX, startY: event.clientY, view, moved: false }
    stop()
  }
  const movePan = (event: PointerEvent<HTMLDivElement>) => {
    const p = pan.current
    if (!p) return
    const dx = event.clientX - p.startX
    const dy = event.clientY - p.startY
    if (!p.moved && Math.hypot(dx, dy) < PAN_SLOP_PX) return
    p.moved = true
    setView({ ...p.view, x: p.view.x + dx, y: p.view.y + dy })
  }
  const endPan = () => {
    const p = pan.current
    pan.current = null
    if (p && !p.moved) setSelected([])
  }

  // Card drags: the doc follows the pointer live (so the other screen sees the move as it happens),
  // and the end records one command so Undo puts the card back.
  const origin = useRef<Shape | null>(null)
  const zoom = useRef(view.zoom)
  zoom.current = view.zoom
  const onDragStart = (state: DragState<unknown>) => {
    origin.current = state.source ? parseShape(map.get(state.source.id)) : null
  }
  const onDragMove = (state: DragState<unknown>) => {
    const o = origin.current
    if (!o) return
    setShape(map, { ...o, x: Math.round(o.x + state.transform.x / zoom.current), y: Math.round(o.y + state.transform.y / zoom.current) }, o.id)
  }
  const onDragEnd = (event: DragEndEvent<unknown>) => {
    const o = origin.current
    origin.current = null
    if (!o) return
    if (REVERT_REASONS.has(event.reason)) {
      setShape(map, o, o.id)
      return
    }
    const now = parseShape(map.get(o.id))
    if (now && (now.x !== o.x || now.y !== o.y)) history.record(shapeCommand(map, o.id, \`Move \${o.label}\`, o, now))
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-9 shrink-0 items-center gap-1 border-b px-1.5">
        <Button size="icon-xs" variant="ghost" aria-label="Add card" title="Add card" onClick={addShape}><Square /></Button>
        <Button size="icon-xs" variant="ghost" aria-label="Recolour selected" title="Recolour selected" disabled={selected.length === 0} onClick={recolor}><span className="size-3 rounded-full bg-[conic-gradient(#fda4af,#93c5fd,#86efac,#fcd34d,#fda4af)]" /></Button>
        <Button size="icon-xs" variant="ghost" aria-label="Delete selected" title="Delete selected" disabled={selected.length === 0} onClick={deleteSelected}><Trash2 /></Button>
        <span className="mx-1 h-4 w-px bg-border" />
        <Button size="icon-xs" variant="ghost" aria-label="Zoom out" onClick={() => zoomBy(1 / ZOOM_STEP)}><Minus /></Button>
        <span className="w-9 text-center text-[11px] text-muted-foreground tabular-nums">{Math.round(view.zoom * 100)}%</span>
        <Button size="icon-xs" variant="ghost" aria-label="Zoom in" onClick={() => zoomBy(ZOOM_STEP)}><Plus /></Button>
        <Button size="icon-xs" variant="ghost" aria-label="Reset view" title="Reset view" onClick={() => { stop(); setView({ surface: SURFACE, x: 0, y: 0, zoom: 1 }) }}><Scan /></Button>
        <HistoryControls source={history} className="ml-auto" />
        <PresenceAvatars size="xs" includeSelf={false} followingId={following?.clientId} onFollow={(p) => (following?.clientId === p.clientId ? stop() : follow(p.clientId))} />
      </div>
      <DndProvider presentation={false} onDragStart={onDragStart} onDragMove={onDragMove} onDragEnd={onDragEnd}>
        <Surface surfaceRef={surfaceRef} view={view} onPointerDown={startPan} onPointerMove={movePan} onPointerUp={endPan}>
          <div className="absolute top-0 left-0 origin-top-left" style={{ transform: \`translate(\${view.x}px, \${view.y}px) scale(\${view.zoom})\` }}>
            {shapes.map((s, i) => (
              <Card key={s.id} shape={s} index={i} selected={selected.includes(s.id)} onPress={pressCard} />
            ))}
          </div>
          <LiveCursors surface={SURFACE} project={(p) => ({ x: p.x * view.zoom + view.x, y: p.y * view.zoom + view.y })} />
          <FollowBanner following={following} onStop={stop} />
        </Surface>
      </DndProvider>
    </div>
  )
}

/** Screen chrome: the person's name and colour, a toolbar slot, the content. */
function Pane({ user, toolbar, children }: { readonly user: CollabUser; readonly toolbar?: ReactNode; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="flex min-w-0 flex-col overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px]">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        <span className="font-medium">{user.name.split(" ")[0]}’s screen</span>
        <div className="ml-auto flex items-center gap-1.5">{toolbar}</div>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  )
}

function Screen({ hub, user, seed }: { readonly hub: MemoryHub; readonly user: CollabUser; readonly seed: boolean }) {
  const conn = useYRoom(hub, seed)
  const [history] = useState(() => createHistory())
  const store = usePresenceRoom({ user, key: conn ? String(conn.doc.clientID) : "offline", adapter: () => (conn ? yAwarenessPresence(conn.awareness) : null) })
  return (
    <Pane user={user}>
      {conn && store ? (
        <CollabProvider presence={store}>
          <Canvas map={conn.doc.getMap<unknown>("shapes")} history={history} />
          <HistoryPanel source={history} title={\`\${user.name.split(" ")[0]}’s history\`} className="m-2 h-44 rounded-md" />
        </CollabProvider>
      ) : (
        <div className="h-72 animate-pulse bg-muted" />
      )}
    </Pane>
  )
}

/** A shared canvas on two screens: a Yjs doc per screen synced over one room, presence on the doc's awareness, and a history per person. */
export function SharedCanvas() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Screen hub={hub} user={ADA} seed />
      <Screen hub={hub} user={BOB} seed={false} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>u(()=>import(`./canvas-BjuXlmtV.js`),[]));var me=[{name:`core`,entry:`@kitora/collab/core`,what:`The model and wire-state validation, the CollabTransport and PresenceAdapter seams, the in-memory hub, channel presence (heartbeat, timeout, leave), the presence store with idle and away, follow decisions, and the command history (grouping, merging, time travel). No DOM, no React.`},{name:`dom`,entry:`@kitora/collab/dom`,what:`broadcastTransport (BroadcastChannel across tabs), trackActivity (input and visibility → status), pointInElement.`},{name:`react`,entry:`@kitora/collab/react`,what:`CollabProvider, CollabRoom, usePresenceRoom, useMemoryHub, usePeers / useOthers / useSelf, useCursorBroadcast / useCursors, useSharedSelection / useSelectors and useFollow (each controlled or uncontrolled), useViewportBroadcast, useHistory / useHistoryKeys (undo and redo keys as @kitora/keyboard commands). Headless.`},{name:`ui`,entry:`@kitora/collab/ui`,what:`Presence.Root / Avatar / Overflow / Status (PeerStatusDot, on display's StatusDot) and the PresenceAvatars preset; Cursors.Layer / Pointer and LiveCursors; SelectionMark; FollowBanner; HistoryControls, HistoryScrubber, HistoryList and the HistoryPanel preset.`},{name:`yjs`,entry:`@kitora/collab/yjs`,what:`yAwarenessPresence (y-protocols awareness as a PresenceAdapter), connectYDoc (doc and awareness sync over any CollabTransport), yUndoHistory (Y.UndoManager as a HistorySource with labelled steps).`}];function he(){return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(t,{title:`Collab kit`,children:`Two people on one canvas. Drag cards, shift-click to multi-select, drag the background to pan, zoom with the buttons. Each screen sees the other's cursor and selection; click the other person's avatar to follow their view. Every screen has its own undo history (⌘Z with the canvas focused), and the panel time-travels it.`}),(0,I.jsx)(k,{n:1,title:`A shared canvas`,blurb:`A Yjs doc per screen, synced over an in-memory room; presence on the doc's awareness through the Yjs adapter; cursors in canvas coordinates so they land right at any pan and zoom; a command history per person whose moves are recorded after the live drag.`,code:$,children:(0,I.jsx)(pe,{})}),(0,I.jsx)(k,{n:2,title:`Layers`,blurb:"Each layer is its own entry: take only the core, only the headless hooks, or the styled parts. `@kitora/collab` re-exports all four (not yjs).",children:(0,I.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,I.jsx)(`tbody`,{children:me.map(e=>(0,I.jsxs)(`tr`,{className:`border-b align-top last:border-b-0`,children:[(0,I.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[12px]`,children:e.name}),(0,I.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[11px] [overflow-wrap:anywhere] text-muted-foreground sm:whitespace-nowrap`,children:e.entry}),(0,I.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{he as component};