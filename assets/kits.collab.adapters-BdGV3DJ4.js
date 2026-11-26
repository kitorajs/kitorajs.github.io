import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{c as a,i as o,t as s}from"./adapter-MuxtTBM4.js";import{c,g as l,n as u,p as d,r as f,t as p}from"./react-4jVVq1Kk.js";import"./kit-gallery-Bph7isB2.js";import{t as m}from"./example-BGnSQG2Y.js";import{r as h}from"./cursors-CJqjXtRb.js";import{r as g}from"./presence-DuZEJfVx.js";import{n as _}from"./selection-DzEOYkuZ.js";var v=e(n(),1),y=i(),b=`bots`,x={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},S=[{id:`cleo`,name:`Cleo Park`,color:`#059669`},{id:`dev`,name:`Dev Shah`,color:`#d97706`},{id:`eve`,name:`Eve Moreau`,color:`#7c3aed`}],C=60,w=[o.active,o.active,o.idle,o.away];function T(e,t){let n=new Map,r=new Set,i=0,a=setInterval(()=>{i+=C/1e3,S.forEach((r,a)=>{let o=i*(.6+a*.25)+a*2;n.set(`bot-${r.id}`,{user:r,status:w[Math.floor(i/4+a)%w.length],lastActive:Date.now(),cursor:{surface:b,x:e/2+Math.cos(o)*e*.35,y:t/2+Math.sin(o*1.3)*t*.32},selection:null,viewport:null})});for(let e of r)e()},C);return{clientId:`me`,setLocalState(e){e?n.set(`me`,e):n.delete(`me`);for(let e of r)e()},getStates:()=>n,subscribe(e){return r.add(e),()=>r.delete(e)},destroy:()=>clearInterval(a)}}function E(){let e=(0,v.useRef)(null);return f(b,e),(0,y.jsxs)(`div`,{ref:e,className:`relative h-56 overflow-hidden rounded-lg border bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]`,children:[(0,y.jsx)(`div`,{className:`absolute top-2 right-2 rounded-md border bg-background/90 p-1`,children:(0,y.jsx)(g,{size:`sm`})}),(0,y.jsx)(h,{surface:b})]})}function D(){let e=d({user:x,adapter:()=>T(640,224)});return e?(0,y.jsx)(p,{presence:e,children:(0,y.jsx)(E,{})}):(0,y.jsx)(`div`,{className:`h-56 animate-pulse rounded-lg bg-muted`})}var O=`import { useRef } from "react"
import { CollabProvider, LiveCursors, PRESENCE_STATUSES, PresenceAvatars, useCursorBroadcast, usePresenceRoom, type CollabUser, type PresenceAdapter } from "@kitora/collab"

const SURFACE = "bots"
const ME: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOTS: readonly CollabUser[] = [
  { id: "cleo", name: "Cleo Park", color: "#059669" },
  { id: "dev", name: "Dev Shah", color: "#d97706" },
  { id: "eve", name: "Eve Moreau", color: "#7c3aed" },
]
const TICK_MS = 60
const STATUS_CYCLE = [PRESENCE_STATUSES.active, PRESENCE_STATUSES.active, PRESENCE_STATUSES.idle, PRESENCE_STATUSES.away] as const

/**
 * A PresenceAdapter is five members. This one is not a network at all: it keeps your state locally and
 * invents three wandering peers. Anything that can produce states (a server feed, a replay, a test fixture) fits.
 */
function botsAdapter(width: number, height: number): PresenceAdapter {
  const states = new Map<string, unknown>()
  const listeners = new Set<() => void>()
  let t = 0
  const timer = setInterval(() => {
    t += TICK_MS / 1000
    BOTS.forEach((user, i) => {
      const phase = t * (0.6 + i * 0.25) + i * 2
      states.set(\`bot-\${user.id}\`, {
        user,
        status: STATUS_CYCLE[Math.floor(t / 4 + i) % STATUS_CYCLE.length],
        lastActive: Date.now(),
        cursor: { surface: SURFACE, x: width / 2 + Math.cos(phase) * width * 0.35, y: height / 2 + Math.sin(phase * 1.3) * height * 0.32 },
        selection: null,
        viewport: null,
      })
    })
    for (const l of listeners) l()
  }, TICK_MS)
  return {
    clientId: "me",
    setLocalState(state) {
      if (state) states.set("me", state)
      else states.delete("me")
      for (const l of listeners) l()
    },
    getStates: () => states,
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    destroy: () => clearInterval(timer),
  }
}

function Field() {
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast(SURFACE, ref)
  return (
    <div ref={ref} className="relative h-56 overflow-hidden rounded-lg border bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]">
      <div className="absolute top-2 right-2 rounded-md border bg-background/90 p-1"><PresenceAvatars size="sm" /></div>
      <LiveCursors surface={SURFACE} />
    </div>
  )
}

/** Same presence store, avatars and cursors; a made-up backend. */
export function BotsAdapterDemo() {
  const store = usePresenceRoom({ user: ME, adapter: () => botsAdapter(640, 224) })
  if (!store) return <div className="h-56 animate-pulse rounded-lg bg-muted" />
  return (
    <CollabProvider presence={store}>
      <Field />
    </CollabProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./bots-adapter-CbvueCLf.js`),[]));var k={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},A={id:`bob`,name:`Bob Ito`,color:`#2563eb`},j=`latency`,M=[`North`,`East`,`South`,`West`];function N(){let e=(0,v.useRef)(null);f(j,e);let[t,n]=l(j);return(0,y.jsxs)(`div`,{ref:e,className:`relative flex h-40 flex-wrap content-start gap-2 p-3`,children:[M.map(e=>(0,y.jsx)(_,{surface:j,id:e,className:`rounded-md`,children:(0,y.jsx)(`button`,{type:`button`,"aria-pressed":t.includes(e),onClick:()=>n([e]),className:`h-7 rounded-md border bg-card px-2.5 text-[12px] hover:bg-muted aria-pressed:border-primary aria-pressed:bg-primary/10`,children:e})},e)),(0,y.jsx)(h,{surface:j})]})}function P({user:e,hub:t,children:n}){return(0,y.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,y.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,y.jsx)(u,{user:e,adapter:()=>s({transport:t.connect()}),className:`relative`,children:n})]})}function F(){let e=c(),[t,n]=(0,v.useState)(0);return(0,y.jsxs)(`div`,{className:`space-y-3`,children:[(0,y.jsxs)(`label`,{className:`flex max-w-sm items-center gap-3 text-[12px]`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`Latency`}),(0,y.jsx)(`input`,{type:`range`,min:0,max:600,step:50,value:t,onChange:t=>{let r=Number(t.target.value);n(r),e.setLatency(r)},className:`flex-1 accent-primary`}),(0,y.jsxs)(`span`,{className:`w-14 text-right tabular-nums`,children:[t,` ms`]})]}),(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[k,A].map(t=>(0,y.jsx)(P,{user:t,hub:e,children:(0,y.jsx)(N,{})},t.id))})]})}var I=`import { useRef, useState, type ReactNode } from "react"
import { channelPresence, CollabRoom, LiveCursors, SelectionMark, useCursorBroadcast, useMemoryHub, useSharedSelection, type CollabUser, type MemoryHub } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

const SURFACE = "latency"
const CHIPS = ["North", "East", "South", "West"] as const

function Surface() {
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast(SURFACE, ref)
  const [selected, setSelected] = useSharedSelection(SURFACE)
  return (
    <div ref={ref} className="relative flex h-40 flex-wrap content-start gap-2 p-3">
      {CHIPS.map((chip) => (
        <SelectionMark key={chip} surface={SURFACE} id={chip} className="rounded-md">
          <button type="button" aria-pressed={selected.includes(chip)} onClick={() => setSelected([chip])} className="h-7 rounded-md border bg-card px-2.5 text-[12px] hover:bg-muted aria-pressed:border-primary aria-pressed:bg-primary/10">
            {chip}
          </button>
        </SelectionMark>
      ))}
      <LiveCursors surface={SURFACE} />
    </div>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the shared hub. */
function Screen({ user, hub, children }: { readonly user: CollabUser; readonly hub: MemoryHub; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}’s screen
      </div>
      <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** The in-memory hub can delay every message: drag the slider to feel a slow network. Cursors and selections arrive late but never out of order. */
export function LatencyDemo() {
  const hub = useMemoryHub()
  const [latency, setLatency] = useState(0)
  return (
    <div className="space-y-3">
      <label className="flex max-w-sm items-center gap-3 text-[12px]">
        <span className="text-muted-foreground">Latency</span>
        <input type="range" min={0} max={600} step={50} value={latency} onChange={(e) => { const ms = Number(e.target.value); setLatency(ms); hub.setLatency(ms) }} className="flex-1 accent-primary" />
        <span className="w-14 text-right tabular-nums">{latency} ms</span>
      </label>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {[ADA, BOB].map((user) => (
          <Screen key={user.id} user={user} hub={hub}>
            <Surface />
          </Screen>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./latency-CZOKJovK.js`),[]));var L={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},R={id:`bob`,name:`Bob Ito`,color:`#2563eb`},z=60;function B(e,t){return{send(n){t(n),e.send(n)},subscribe:t=>e.subscribe(t),close:()=>e.close()}}function V(){let e=(0,v.useRef)(null);return f(`log`,e),(0,y.jsxs)(`div`,{ref:e,className:`relative h-36 p-3 text-[12px] text-muted-foreground`,children:[`Move here and watch the log.`,(0,y.jsx)(`div`,{className:`absolute right-2 bottom-2`,children:(0,y.jsx)(g,{size:`xs`})}),(0,y.jsx)(h,{surface:`log`})]})}function H({user:e,adapter:t,children:n}){return(0,y.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,y.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,y.jsx)(u,{user:e,adapter:t,className:`relative`,children:n})]})}function U(){let e=c(),[t,n]=(0,v.useState)([]),r=(0,v.useRef)(0),i=e=>t=>{let i=a(t)&&typeof t.kind==`string`?t.kind:`?`,o=JSON.stringify(t).length;r.current++;let s={n:r.current,who:e,kind:i,bytes:o};n(e=>[s,...e].slice(0,z))};return(0,y.jsxs)(`div`,{className:`grid items-start gap-3 lg:grid-cols-[1fr_260px]`,children:[(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[L,R].map(t=>(0,y.jsx)(H,{user:t,adapter:()=>s({transport:B(e.connect(),i(t.name.split(` `)[0]??t.id))}),children:(0,y.jsx)(V,{})},t.id))}),(0,y.jsxs)(`div`,{className:`flex h-[183px] flex-col rounded-lg border`,children:[(0,y.jsxs)(`div`,{className:`flex h-8 items-center border-b px-2 text-[12px] font-medium`,children:[`Wire log `,(0,y.jsxs)(`span`,{className:`ml-auto font-normal text-muted-foreground tabular-nums`,children:[r.current,` sent`]})]}),(0,y.jsx)(`ol`,{tabIndex:0,className:`min-h-0 flex-1 overflow-y-auto p-1 font-mono text-[11px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring`,"aria-label":`Messages sent`,children:t.map(e=>(0,y.jsxs)(`li`,{className:`flex gap-2 px-1 leading-5`,children:[(0,y.jsx)(`span`,{className:`w-8 text-right text-muted-foreground tabular-nums`,children:e.n}),(0,y.jsx)(`span`,{className:`w-10`,children:e.who}),(0,y.jsx)(`span`,{className:`flex-1 text-primary`,children:e.kind}),(0,y.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[e.bytes,` B`]})]},e.n))})]})]})}var W=`import { useRef, useState, type ReactNode } from "react"
import { channelPresence, CollabRoom, isRecord, LiveCursors, PresenceAvatars, useCursorBroadcast, useMemoryHub, type CollabTransport, type CollabUser, type PresenceAdapter } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

interface LogLine { readonly n: number; readonly who: string; readonly kind: string; readonly bytes: number }
const MAX_LINES = 60

/** A transport is three methods. This one wraps another and reports every message it sends. */
function loggedTransport(inner: CollabTransport, onSend: (data: unknown) => void): CollabTransport {
  return {
    send(data) {
      onSend(data)
      inner.send(data)
    },
    subscribe: (handler) => inner.subscribe(handler),
    close: () => inner.close(),
  }
}

function Surface() {
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast("log", ref)
  return (
    <div ref={ref} className="relative h-36 p-3 text-[12px] text-muted-foreground">
      Move here and watch the log.
      <div className="absolute right-2 bottom-2"><PresenceAvatars size="xs" /></div>
      <LiveCursors surface="log" />
    </div>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the adapter given. */
function Screen({ user, adapter, children }: { readonly user: CollabUser; readonly adapter: () => PresenceAdapter; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}’s screen
      </div>
      <CollabRoom user={user} adapter={adapter} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** Every message on the wire, as it is sent: presence state (cursor moves), the join query and leave. */
export function MessageLogDemo() {
  const hub = useMemoryHub()
  const [lines, setLines] = useState<readonly LogLine[]>([])
  const counter = useRef(0)
  const logFor = (who: string) => (data: unknown) => {
    const kind = isRecord(data) && typeof data.kind === "string" ? data.kind : "?"
    const bytes = JSON.stringify(data).length
    counter.current++
    const line = { n: counter.current, who, kind, bytes }
    setLines((ls) => [line, ...ls].slice(0, MAX_LINES))
  }
  return (
    <div className="grid items-start gap-3 lg:grid-cols-[1fr_260px]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {[ADA, BOB].map((user) => (
          <Screen key={user.id} user={user} adapter={() => channelPresence({ transport: loggedTransport(hub.connect(), logFor(user.name.split(" ")[0] ?? user.id)) })}>
            <Surface />
          </Screen>
        ))}
      </div>
      <div className="flex h-[183px] flex-col rounded-lg border">
        <div className="flex h-8 items-center border-b px-2 text-[12px] font-medium">Wire log <span className="ml-auto font-normal text-muted-foreground tabular-nums">{counter.current} sent</span></div>
        <ol tabIndex={0} className="min-h-0 flex-1 overflow-y-auto p-1 font-mono text-[11px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring" aria-label="Messages sent">
          {lines.map((l) => (
            <li key={l.n} className="flex gap-2 px-1 leading-5">
              <span className="w-8 text-right text-muted-foreground tabular-nums">{l.n}</span>
              <span className="w-10">{l.who}</span>
              <span className="flex-1 text-primary">{l.kind}</span>
              <span className="text-muted-foreground tabular-nums">{l.bytes} B</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./message-log-3bVjcPAm.js`),[]));function G(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Transports and adapters`,children:"Two seams keep the kit off any vendor. A `CollabTransport` moves messages (BroadcastChannel, the in-memory hub, a WebSocket you write). A `PresenceAdapter` holds everyone's state: `channelPresence` on any transport, `yAwarenessPresence` on a Yjs room, or your own."}),(0,y.jsx)(m,{n:1,title:`Simulated latency`,blurb:`The in-memory hub delays every message by the slider's amount. Move a cursor or pick a chip and watch it arrive late on the other screen.`,code:I,children:(0,y.jsx)(F,{})}),(0,y.jsx)(m,{n:2,title:`A transport of your own`,blurb:`Ten lines wrap a transport to log every message sent: the join query, state updates (one per cursor frame) and leave.`,code:W,children:(0,y.jsx)(U,{})}),(0,y.jsx)(m,{n:3,title:`A presence adapter of your own`,blurb:`No network: an adapter that keeps your state locally and invents three peers. The store, avatars and cursors cannot tell.`,code:O,children:(0,y.jsx)(D,{})})]})}export{G as component};