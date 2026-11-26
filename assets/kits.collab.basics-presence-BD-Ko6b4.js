import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-q72zUtm9.js";import{a as o,d as s,t as c}from"./adapter-MuxtTBM4.js";import{c as l,d as u,m as d,n as f,p,t as m,u as h,v as g}from"./react-CcDMwWiE.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";import{o as v,r as y,t as b}from"./presence-B0IKmP0i.js";import{r as x}from"./ui-33WzQWUo.js";var S=e(n(),1),C=i(),w=[`Ada`,`Bob`,`Cleo`,`Dev`,`Eve`,`Finn`,`Gia`,`Hal`];function ee(){let[e]=(0,S.useState)(()=>{let e=Math.random().toString(36).slice(2,8);return{id:e,name:`${w[Math.floor(Math.random()*w.length)]??`Guest`} ${e.slice(0,2).toUpperCase()}`,color:o(e)}}),t=p({user:e,adapter:()=>{let e=g(`gallery-basics`);return e?c({transport:e}):null}});return t?(0,C.jsx)(m,{presence:t,children:(0,C.jsx)(T,{})}):(0,C.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`BroadcastChannel is not available here.`})}function T(){let e=u();return(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,C.jsx)(y,{max:6,size:`md`}),(0,C.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:e.length===1?`Just this tab. Open the page in another tab to join.`:`${e.length} tabs in the room`}),(0,C.jsx)(`a`,{href:typeof location>`u`?`#`:location.href,target:`_blank`,rel:`noreferrer`,className:`ml-auto text-[12px] font-medium text-primary hover:underline`,children:`Open in a new tab ↗`})]})}var E=`import { useState } from "react"
import { broadcastTransport, channelPresence, CollabProvider, colorFor, PresenceAvatars, usePeers, usePresenceRoom } from "@kitora/collab"

const NAMES = ["Ada", "Bob", "Cleo", "Dev", "Eve", "Finn", "Gia", "Hal"] as const

/** A room on a BroadcastChannel: open this page in another tab (or two) and each tab joins as a new person. */
export function BasicAcrossTabs() {
  const [user] = useState(() => {
    const id = Math.random().toString(36).slice(2, 8)
    const name = \`\${NAMES[Math.floor(Math.random() * NAMES.length)] ?? "Guest"} \${id.slice(0, 2).toUpperCase()}\`
    return { id, name, color: colorFor(id) }
  })
  // The transport is the only line that changes between "two panes" and "two tabs".
  const store = usePresenceRoom({ user, adapter: () => { const t = broadcastTransport("gallery-basics"); return t ? channelPresence({ transport: t }) : null } })
  if (!store) return <p className="text-[13px] text-muted-foreground">BroadcastChannel is not available here.</p>
  return (
    <CollabProvider presence={store}>
      <TabRoster />
    </CollabProvider>
  )
}

function TabRoster() {
  const peers = usePeers()
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <PresenceAvatars max={6} size="md" />
      <span className="text-muted-foreground tabular-nums">{peers.length === 1 ? "Just this tab. Open the page in another tab to join." : \`\${peers.length} tabs in the room\`}</span>
      <a href={typeof location === "undefined" ? "#" : location.href} target="_blank" rel="noreferrer" className="ml-auto text-[12px] font-medium text-primary hover:underline">Open in a new tab ↗</a>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./across-tabs-BZlp-887.js`),[]));var D={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},O={id:`bob`,name:`Bob Ito`,color:`#2563eb`};function k(){let e=h();return(0,C.jsxs)(`div`,{className:`flex items-center justify-between gap-2 p-3`,children:[(0,C.jsx)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:e.length===0?`Only you`:`${e.length+1} here`}),(0,C.jsx)(y,{})]})}function A({user:e,hub:t,children:n}){return(0,C.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,C.jsx)(f,{user:e,adapter:()=>c({transport:t.connect()}),className:`relative`,children:n})]})}function j(){let e=l();return(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[D,O].map(t=>(0,C.jsx)(A,{user:t,hub:e,children:(0,C.jsx)(k,{})},t.id))})}var M=`import type { ReactNode } from "react"
import { channelPresence, CollabRoom, type CollabUser, type MemoryHub, PresenceAvatars, useMemoryHub, useOthers } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

function Header() {
  const others = useOthers()
  return (
    <div className="flex items-center justify-between gap-2 p-3">
      <span className="text-[12px] text-muted-foreground tabular-nums">{others.length === 0 ? "Only you" : \`\${others.length + 1} here\`}</span>
      <PresenceAvatars />
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

/** Two people in one room: each screen's avatar stack lists everyone, self first. */
export function BasicAvatarStack() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        <Screen key={user.id} user={user} hub={hub}>
          <Header />
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>r(()=>import(`./avatar-stack-BMAEPfib.js`),[]));var N=[{id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},{id:`bob`,name:`Bob Ito`,color:`#2563eb`},{id:`cleo`,name:`Cleo Park`,color:`#059669`},{id:`dev`,name:`Dev Shah`,color:`#d97706`}],P=2;function F(){let e=s(u()),t=e.slice(0,P);return(0,C.jsxs)(x.Root,{label:`People here, rebuilt`,"data-testid":`rebuilt-stack`,children:[t.map((e,n)=>(0,C.jsx)(x.Avatar,{peer:e,style:{zIndex:t.length-n}},e.clientId)),(0,C.jsx)(x.Overflow,{peers:e.slice(P)})]})}function I(){return(0,C.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 p-3 text-[12px]`,children:[(0,C.jsx)(`dt`,{className:`text-muted-foreground`,children:`Preset`}),(0,C.jsx)(`dd`,{children:(0,C.jsx)(y,{max:P})}),(0,C.jsx)(`dt`,{className:`text-muted-foreground`,children:`Your own`}),(0,C.jsx)(`dd`,{children:(0,C.jsx)(F,{})})]})}function L({user:e,hub:t,children:n}){return(0,C.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0]]}),(0,C.jsx)(f,{user:e,adapter:()=>c({transport:t.connect()}),className:`relative`,children:n})]})}function R(){let e=l();return(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr_1fr]`,children:N.map((t,n)=>(0,C.jsx)(L,{user:t,hub:e,children:n===0?(0,C.jsx)(I,{}):(0,C.jsx)(`p`,{className:`p-3 text-[11px] text-muted-foreground`,children:`in the room`})},t.id))})}var z=`import type { ReactNode } from "react"
import { channelPresence, CollabRoom, Presence, PresenceAvatars, uniqueUsers, useMemoryHub, usePeers, type CollabUser, type MemoryHub } from "@kitora/collab"

const PEOPLE: readonly CollabUser[] = [
  { id: "ada", name: "Ada Lovelace", color: "#e11d48" },
  { id: "bob", name: "Bob Ito", color: "#2563eb" },
  { id: "cleo", name: "Cleo Park", color: "#059669" },
  { id: "dev", name: "Dev Shah", color: "#d97706" },
]
const MAX = 2

/** PresenceAvatars rebuilt from its public parts: the same list, avatars and "+N" chip. Change anything here (order, size, what an avatar shows). */
function MyAvatarStack() {
  const people = uniqueUsers(usePeers())
  const visible = people.slice(0, MAX)
  return (
    <Presence.Root label="People here, rebuilt" data-testid="rebuilt-stack">
      {visible.map((peer, i) => (
        <Presence.Avatar key={peer.clientId} peer={peer} style={{ zIndex: visible.length - i }} />
      ))}
      <Presence.Overflow peers={people.slice(MAX)} />
    </Presence.Root>
  )
}

function Compare() {
  return (
    <dl className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 p-3 text-[12px]">
      <dt className="text-muted-foreground">Preset</dt>
      <dd><PresenceAvatars max={MAX} /></dd>
      <dt className="text-muted-foreground">Your own</dt>
      <dd><MyAvatarStack /></dd>
    </dl>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the shared hub. */
function Screen({ user, hub, children }: { readonly user: CollabUser; readonly hub: MemoryHub; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}
      </div>
      <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** Four people in one room. The first screen draws the preset and, below it, the same stack composed by hand from Presence.Root, Presence.Avatar and Presence.Overflow. */
export function BasicComposeYourOwn() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr_1fr]">
      {PEOPLE.map((user, i) => (
        <Screen key={user.id} user={user} hub={hub}>
          {i === 0 ? <Compare /> : <p className="p-3 text-[11px] text-muted-foreground">in the room</p>}
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./compose-your-own-BPPHG2Mf.js`),[]));var B={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},V=[{id:`bob`,name:`Bob Ito`,color:`#2563eb`},{id:`cleo`,name:`Cleo Park`,color:`#059669`},{id:`dev`,name:`Dev Shah`,color:`#d97706`},{id:`eve`,name:`Eve Moreau`,color:`#7c3aed`}],H={active:`Aktiv`,idle:`Untätig`,away:`Abwesend`};function U(e){let t=null;return{clientId:`me`,setLocalState(n){t=n;for(let t of e.listeners)t()},getStates:()=>{let n=new Map;t&&n.set(`me`,t);for(let t of e.online)n.set(`srv-${t.id}`,{user:t,status:`active`,lastActive:Date.now(),cursor:null,selection:null,viewport:null});return n},subscribe(t){return e.listeners.add(t),()=>e.listeners.delete(t)},destroy:()=>e.listeners.clear()}}function W(){return(0,C.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,"data-testid":`server-count`,children:[u().length,` online`]})}function G(){let[e]=(0,S.useState)(()=>({online:V.slice(0,1),listeners:new Set})),[t,n]=(0,S.useState)(e.online.length),r=p({user:B,adapter:()=>U(e)}),i=t=>{e.online=V.slice(0,t),n(t);for(let t of e.listeners)t()};return r?(0,C.jsx)(m,{presence:r,children:(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsx)(y,{max:5,size:`md`,statusLabels:H}),(0,C.jsx)(W,{}),(0,C.jsx)(a,{size:`sm`,variant:`outline`,className:`ml-auto`,disabled:t===V.length,onClick:()=>i(t+1),children:`Someone joins`}),(0,C.jsx)(a,{size:`sm`,variant:`outline`,disabled:t===0,onClick:()=>i(t-1),children:`Someone leaves`})]})}):(0,C.jsx)(`div`,{className:`h-9 animate-pulse rounded-md bg-muted`})}var K=`import { useState } from "react"
import { CollabProvider, PresenceAvatars, usePeers, usePresenceRoom, type CollabUser, type PresenceAdapter, type PresenceStatus } from "@kitora/collab"
import { Button } from "@kitora/ui/button"

const ME: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const TEAM: readonly CollabUser[] = [
  { id: "bob", name: "Bob Ito", color: "#2563eb" },
  { id: "cleo", name: "Cleo Park", color: "#059669" },
  { id: "dev", name: "Dev Shah", color: "#d97706" },
  { id: "eve", name: "Eve Moreau", color: "#7c3aed" },
]
/** Your own words for each status (here: German), passed to the avatars. */
const STATUS_WORDS: { readonly [S in PresenceStatus]: string } = { active: "Aktiv", idle: "Untätig", away: "Abwesend" }

/** What your server pushes: who is online. A stand-in for a websocket or SSE feed. */
interface ServerFeed {
  online: readonly CollabUser[]
  listeners: Set<() => void>
}

/**
 * A PresenceAdapter is five members. This one is fed by "your server" (a list of who is online) instead of
 * a peer-to-peer channel; the store, the avatars and every hook work unchanged on top of it.
 */
function serverPresence(feed: ServerFeed): PresenceAdapter {
  let mine: unknown = null
  const states = () => {
    const out = new Map<string, unknown>()
    if (mine) out.set("me", mine)
    for (const user of feed.online) out.set(\`srv-\${user.id}\`, { user, status: "active", lastActive: Date.now(), cursor: null, selection: null, viewport: null })
    return out
  }
  return {
    clientId: "me",
    setLocalState(state) {
      mine = state
      for (const l of feed.listeners) l()
    },
    getStates: states,
    subscribe(listener) {
      feed.listeners.add(listener)
      return () => feed.listeners.delete(listener)
    },
    destroy: () => feed.listeners.clear(),
  }
}

function Roster() {
  const peers = usePeers()
  return <span className="text-[12px] text-muted-foreground tabular-nums" data-testid="server-count">{peers.length} online</span>
}

/** Presence from your own backend: "Someone joins" is a server push; the adapter turns it into peers. */
export function BasicCustomAdapter() {
  const [feed] = useState<ServerFeed>(() => ({ online: TEAM.slice(0, 1), listeners: new Set() }))
  const [count, setCount] = useState(feed.online.length)
  const store = usePresenceRoom({ user: ME, adapter: () => serverPresence(feed) })
  const push = (n: number) => {
    feed.online = TEAM.slice(0, n)
    setCount(n)
    for (const l of feed.listeners) l()
  }
  if (!store) return <div className="h-9 animate-pulse rounded-md bg-muted" />
  return (
    <CollabProvider presence={store}>
      <div className="flex flex-wrap items-center gap-2">
        <PresenceAvatars max={5} size="md" statusLabels={STATUS_WORDS} />
        <Roster />
        <Button size="sm" variant="outline" className="ml-auto" disabled={count === TEAM.length} onClick={() => push(count + 1)}>Someone joins</Button>
        <Button size="sm" variant="outline" disabled={count === 0} onClick={() => push(count - 1)}>Someone leaves</Button>
      </div>
    </CollabProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./custom-adapter-BmoonYVq.js`),[]));var q={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},J={id:`bob`,name:`Bob Ito`,color:`#2563eb`},Y=3e3,X=8e3;function Z(){return(0,C.jsx)(`ul`,{className:`space-y-1 p-3 text-[13px]`,children:u().map(e=>(0,C.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(b,{status:e.status}),(0,C.jsxs)(`span`,{children:[e.user.name,e.self?` (you)`:``]}),(0,C.jsx)(`span`,{className:`ml-auto text-[11px] text-muted-foreground`,"data-status-label":e.user.id,children:v[e.status]})]},e.clientId))})}function Q(){let e=d(),[t,n]=(0,S.useState)(!1);return(0,C.jsx)(a,{size:`xs`,variant:`outline`,onClick:()=>{n(!t),e.setHidden(!t)},children:t?`Show tab`:`Hide tab`})}function te(){let e=l();return(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[q,J].map(t=>(0,C.jsx)(f,{user:t,adapter:()=>c({transport:e.connect()}),idleAfterMs:Y,awayAfterMs:X,className:`min-w-0`,children:(0,C.jsxs)(`div`,{"data-pane":t.id,className:`overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:t.color}}),t.name.split(` `)[0],`’s screen`,(0,C.jsxs)(`div`,{className:`ml-auto flex items-center gap-1.5`,children:[(0,C.jsx)(y,{size:`xs`}),(0,C.jsx)(Q,{})]})]}),(0,C.jsx)(Z,{})]})},t.id))})}var $=`import { useState } from "react"
import { channelPresence, CollabRoom, PresenceAvatars, PeerStatusDot, STATUS_LABELS, useMemoryHub, usePeers, usePresenceStore, type CollabUser } from "@kitora/collab"
import { Button } from "@kitora/ui/button"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

// Short timers so the demo moves: idle after 3 s without input in the pane, away after 8 s.
const IDLE_MS = 3_000
const AWAY_MS = 8_000

function Roster() {
  const peers = usePeers()
  return (
    <ul className="space-y-1 p-3 text-[13px]">
      {peers.map((p) => (
        <li key={p.clientId} className="flex items-center gap-2">
          <PeerStatusDot status={p.status} />
          <span>{p.user.name}{p.self ? " (you)" : ""}</span>
          <span className="ml-auto text-[11px] text-muted-foreground" data-status-label={p.user.id}>{STATUS_LABELS[p.status]}</span>
        </li>
      ))}
    </ul>
  )
}

function HideToggle() {
  const store = usePresenceStore()
  const [hidden, setHidden] = useState(false)
  return (
    <Button size="xs" variant="outline" onClick={() => { setHidden(!hidden); store.setHidden(!hidden) }}>
      {hidden ? "Show tab" : "Hide tab"}
    </Button>
  )
}

/** Status follows input inside each screen: stop moving in one and the other sees it go idle, then away. Hiding the tab reads as away at once. */
export function BasicIdleAway() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        // The room wraps the whole screen, so input anywhere in it (toolbar included) counts as this person's activity.
        <CollabRoom key={user.id} user={user} adapter={() => channelPresence({ transport: hub.connect() })} idleAfterMs={IDLE_MS} awayAfterMs={AWAY_MS} className="min-w-0">
          <div data-pane={user.id} className="overflow-hidden rounded-lg border bg-background">
            <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
              <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
              {user.name.split(" ")[0]}’s screen
              <div className="ml-auto flex items-center gap-1.5">
                <PresenceAvatars size="xs" />
                <HideToggle />
              </div>
            </div>
            <Roster />
          </div>
        </CollabRoom>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./idle-away-CH9gYm2d.js`),[]));function ne(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Basics: presence`,children:`A presence room is a store over a backend adapter. Every screen publishes who it is and reads everyone else; the avatars are one component.`}),(0,C.jsx)(_,{n:1,title:`An avatar stack`,blurb:`Two screens in one in-memory room. Each stack shows everyone, self first, with a status dot and a name tooltip.`,code:M,children:(0,C.jsx)(j,{})}),(0,C.jsx)(_,{n:2,title:`Idle and away`,blurb:`Stop moving inside one screen: after 3 s the other sees it idle, after 8 s away. Hide tab reads as away at once.`,code:$,children:(0,C.jsx)(te,{})}),(0,C.jsx)(_,{n:3,title:`Across browser tabs`,blurb:`Same store, a BroadcastChannel transport. Open the page in a second tab: each tab joins as someone new, and leaves when closed.`,code:E,children:(0,C.jsx)(ee,{})}),(0,C.jsx)(_,{n:4,title:`Compose your own`,blurb:`The PresenceAvatars preset is built only from public parts. Here it is again, rebuilt by hand from Presence.Root, Presence.Avatar and Presence.Overflow, next to the preset.`,code:z,children:(0,C.jsx)(R,{})}),(0,C.jsx)(_,{n:5,title:`A custom adapter`,blurb:`Presence from your own backend: a hand-written PresenceAdapter fed by server pushes, plus your own status words. The store and the avatars do not change.`,code:K,children:(0,C.jsx)(G,{})})]})}export{ne as component};