import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{d as o,s,t as c,u as l}from"./adapter-MuxtTBM4.js";import{c as u,d,g as f,i as p,n as m,r as h}from"./react-4jVVq1Kk.js";import{t as g}from"./history-B1jEdkX2.js";import"./kit-gallery-Bph7isB2.js";import{t as _}from"./example-BGnSQG2Y.js";import{r as v}from"./cursors-CJqjXtRb.js";import{n as y,r as b,t as x}from"./ui-D5btjSTM.js";var S=e(n(),1),C=i(),w={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},T={id:`bob`,name:`Bob Ito`,color:`#2563eb`};function E(){let e=(0,S.useRef)(null);return h(`parts`,e),(0,C.jsx)(`div`,{ref:e,className:`relative h-40`,children:(0,C.jsx)(v,{surface:`parts`,renderCursor:(e,t)=>(0,C.jsx)(`span`,{className:`absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[9px] font-semibold shadow ring-2 ring-white transition-transform`,style:{left:t.x,top:t.y,backgroundColor:e.user.color,color:l(e.user.color)},children:s(e.user.name)})})})}function D(){let e=(0,S.useRef)(null);h(`parts`,e);let t=p(`parts`);return(0,C.jsx)(`div`,{ref:e,className:`relative h-40`,children:(0,C.jsx)(x.Layer,{children:t.map(e=>e.cursor?(0,C.jsx)(x.Pointer,{color:e.user.color,name:e.user.name,x:e.cursor.x,y:e.cursor.y,showName:!1},e.clientId):null)})})}function O({user:e,hub:t,children:n}){return(0,C.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,C.jsx)(m,{user:e,adapter:()=>c({transport:t.connect()}),className:`relative`,children:n})]})}function k(){let e=u();return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[(0,C.jsx)(O,{user:w,hub:e,children:(0,C.jsx)(E,{})}),(0,C.jsx)(O,{user:T,hub:e,children:(0,C.jsx)(D,{})})]})}var A=`import { useRef, type ReactNode } from "react"
import { channelPresence, CollabRoom, Cursors, initials, LiveCursors, readableTextOn, useCursorBroadcast, useCursors, useMemoryHub, type CollabUser, type MemoryHub } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

/** Left: LiveCursors with \`renderCursor\` (a dot with initials). Right: the same cursors drawn by hand from useCursors + Cursors.Layer + Cursors.Pointer, names hidden. */
function DotSurface() {
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast("parts", ref)
  return (
    <div ref={ref} className="relative h-40">
      <LiveCursors
        surface="parts"
        renderCursor={(peer, at) => (
          <span className="absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[9px] font-semibold shadow ring-2 ring-white transition-transform" style={{ left: at.x, top: at.y, backgroundColor: peer.user.color, color: readableTextOn(peer.user.color) }}>
            {initials(peer.user.name)}
          </span>
        )}
      />
    </div>
  )
}

function HandmadeSurface() {
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast("parts", ref)
  const cursors = useCursors("parts")
  return (
    <div ref={ref} className="relative h-40">
      <Cursors.Layer>
        {cursors.map((peer) => (peer.cursor ? <Cursors.Pointer key={peer.clientId} color={peer.user.color} name={peer.user.name} x={peer.cursor.x} y={peer.cursor.y} showName={false} /> : null))}
      </Cursors.Layer>
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

export function PartsCursors() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Screen user={ADA} hub={hub}>
        <DotSurface />
      </Screen>
      <Screen user={BOB} hub={hub}>
        <HandmadeSurface />
      </Screen>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./parts-cursors-Dw_NMFbY.js`),[]));var j={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},M={id:`bob`,name:`Bob Ito`,color:`#2563eb`},N=[`alpha`,`beta`,`gamma`];function P(){let e=d(),t=(0,S.useRef)(null);h(`raw`,t);let[n,r]=f(`raw`);return(0,C.jsxs)(`div`,{ref:t,className:`space-y-2 p-2`,children:[(0,C.jsx)(`div`,{className:`flex gap-1`,children:N.map(e=>(0,C.jsx)(`button`,{type:`button`,"aria-pressed":n.includes(e),onClick:()=>r(n.includes(e)?[]:[e]),className:`h-6 rounded border px-2 text-[11px] aria-pressed:bg-muted`,children:e},e))}),(0,C.jsxs)(`table`,{className:`w-full text-[11px]`,children:[(0,C.jsx)(`thead`,{className:`text-left text-muted-foreground`,children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{className:`font-normal`,children:`who`}),(0,C.jsx)(`th`,{className:`font-normal`,children:`status`}),(0,C.jsx)(`th`,{className:`font-normal`,children:`cursor`}),(0,C.jsx)(`th`,{className:`font-normal`,children:`selection`})]})}),(0,C.jsx)(`tbody`,{className:`font-mono tabular-nums`,children:e.map(e=>(0,C.jsxs)(`tr`,{children:[(0,C.jsxs)(`td`,{children:[(0,C.jsx)(`span`,{"aria-hidden":!0,className:`mr-1 inline-block size-2 rounded-full`,style:{backgroundColor:e.user.color}}),e.user.name.split(` `)[0],e.self?`*`:``]}),(0,C.jsx)(`td`,{children:e.status}),(0,C.jsx)(`td`,{children:e.cursor?`${Math.round(e.cursor.x)},${Math.round(e.cursor.y)}`:`–`}),(0,C.jsx)(`td`,{children:e.selection?.ids.join(` `)||`–`})]},e.clientId))})]})]})}function F({user:e,hub:t,children:n}){return(0,C.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,C.jsx)(m,{user:e,adapter:()=>c({transport:t.connect()}),className:`relative`,children:n})]})}function I(){let e=u();return(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[j,M].map(t=>(0,C.jsx)(F,{user:t,hub:e,children:(0,C.jsx)(P,{})},t.id))})}var L=`import { useRef, type ReactNode } from "react"
import { channelPresence, type CollabUser, type MemoryHub } from "@kitora/collab/core"
import { CollabRoom, useCursorBroadcast, useMemoryHub, usePeers, useSharedSelection } from "@kitora/collab/react"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

const TAGS = ["alpha", "beta", "gamma"] as const

/** No kit markup at all (imports only the core and react entries): a plain table from usePeers, the raw state each client publishes. */
function RawRoom() {
  const peers = usePeers()
  const ref = useRef<HTMLDivElement>(null)
  useCursorBroadcast("raw", ref)
  const [selected, setSelected] = useSharedSelection("raw")
  return (
    <div ref={ref} className="space-y-2 p-2">
      <div className="flex gap-1">
        {TAGS.map((tag) => (
          <button key={tag} type="button" aria-pressed={selected.includes(tag)} onClick={() => setSelected(selected.includes(tag) ? [] : [tag])} className="h-6 rounded border px-2 text-[11px] aria-pressed:bg-muted">{tag}</button>
        ))}
      </div>
      <table className="w-full text-[11px]">
        <thead className="text-left text-muted-foreground">
          <tr><th className="font-normal">who</th><th className="font-normal">status</th><th className="font-normal">cursor</th><th className="font-normal">selection</th></tr>
        </thead>
        <tbody className="font-mono tabular-nums">
          {peers.map((p) => (
            <tr key={p.clientId}>
              <td><span aria-hidden className="mr-1 inline-block size-2 rounded-full" style={{ backgroundColor: p.user.color }} />{p.user.name.split(" ")[0]}{p.self ? "*" : ""}</td>
              <td>{p.status}</td>
              <td>{p.cursor ? \`\${Math.round(p.cursor.x)},\${Math.round(p.cursor.y)}\` : "–"}</td>
              <td>{p.selection?.ids.join(" ") || "–"}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export function PartsHeadless() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        <Screen key={user.id} user={user} hub={hub}>
          <RawRoom />
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./parts-headless-BLErwKHT.js`),[]));function R(){let[e,t]=(0,S.useState)(`Hello`),[n]=(0,S.useState)(()=>g()),r=e=>({label:`Append “${e.trim()}”`,do:()=>t(t=>t+e),undo:()=>t(t=>t.slice(0,t.length-e.length))});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[1fr_260px]`,children:[(0,C.jsxs)(`div`,{className:`space-y-2`,children:[(0,C.jsx)(`p`,{className:`rounded-md border bg-muted/30 p-3 font-mono text-[13px]`,"data-testid":`parts-text`,children:e}),(0,C.jsx)(`div`,{className:`flex gap-1.5`,children:[` world`,`!`,` again`].map(e=>(0,C.jsxs)(a,{size:`sm`,variant:`outline`,onClick:()=>n.execute(r(e)),children:[`+ “`,e.trim(),`”`]},e))})]}),(0,C.jsxs)(`div`,{className:`rounded-lg border`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2 border-b p-1.5`,children:[(0,C.jsx)(y.Controls,{source:n}),(0,C.jsx)(y.Scrubber,{source:n})]}),(0,C.jsx)(y.List,{source:n,className:`max-h-44 overflow-y-auto p-1`,renderEntry:(e,t)=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`span`,{className:`w-5 text-right text-[10px] text-muted-foreground tabular-nums`,children:e.id}),(0,C.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.label}),(0,C.jsx)(`span`,{className:`rounded bg-muted px-1 text-[10px] text-muted-foreground`,children:t})]})})]})]})}var z=`import { useState } from "react"
import { createHistory, HistoryParts, type Command } from "@kitora/collab"
import { Button } from "@kitora/ui/button"

/** A history panel of your own from HistoryParts: controls and scrubber on one row, a list with custom rows (a step number and a kind chip). */
export function PartsHistory() {
  const [text, setText] = useState("Hello")
  const [history] = useState(() => createHistory())
  const append = (suffix: string): Command => ({ label: \`Append “\${suffix.trim()}”\`, do: () => setText((t) => t + suffix), undo: () => setText((t) => t.slice(0, t.length - suffix.length)) })
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_260px]">
      <div className="space-y-2">
        <p className="rounded-md border bg-muted/30 p-3 font-mono text-[13px]" data-testid="parts-text">{text}</p>
        <div className="flex gap-1.5">
          {[" world", "!", " again"].map((s) => (
            <Button key={s} size="sm" variant="outline" onClick={() => history.execute(append(s))}>+ “{s.trim()}”</Button>
          ))}
        </div>
      </div>
      <div className="rounded-lg border">
        <div className="flex items-center gap-2 border-b p-1.5">
          <HistoryParts.Controls source={history} />
          <HistoryParts.Scrubber source={history} />
        </div>
        <HistoryParts.List
          source={history}
          className="max-h-44 overflow-y-auto p-1"
          renderEntry={(entry, state) => (
            <>
              <span className="w-5 text-right text-[10px] text-muted-foreground tabular-nums">{entry.id}</span>
              <span className="min-w-0 flex-1 truncate">{entry.label}</span>
              <span className="rounded bg-muted px-1 text-[10px] text-muted-foreground">{state}</span>
            </>
          )}
        />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./parts-history-Cmi1lB6x.js`),[]));var B=[{id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},{id:`bob`,name:`Bob Ito`,color:`#2563eb`},{id:`cleo`,name:`Cleo Park`,color:`#059669`},{id:`dev`,name:`Dev Shah`,color:`#d97706`},{id:`eve`,name:`Eve Moreau`,color:`#7c3aed`}],V=3;function H(){let e=o(d());return(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,C.jsxs)(b.Root,{label:`Editors`,children:[e.slice(0,V).map(e=>(0,C.jsx)(b.Avatar,{peer:e,size:`md`},e.clientId)),(0,C.jsx)(b.Overflow,{peers:e.slice(V),size:`md`})]}),(0,C.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[e.length,` editing`]})]})}function U(){let e=u();return(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-5`,children:B.map((t,n)=>(0,C.jsxs)(`div`,{"data-pane":t.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,C.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,C.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:t.color}}),t.name.split(` `)[0]]}),(0,C.jsx)(m,{user:t,adapter:()=>c({transport:e.connect()}),className:`p-2`,children:n===0?(0,C.jsx)(H,{}):(0,C.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`in the room`})})]},t.id))})}var W=`import { channelPresence, CollabRoom, Presence, uniqueUsers, useMemoryHub, usePeers, type CollabUser } from "@kitora/collab"

const PEOPLE: readonly CollabUser[] = [
  { id: "ada", name: "Ada Lovelace", color: "#e11d48" },
  { id: "bob", name: "Bob Ito", color: "#2563eb" },
  { id: "cleo", name: "Cleo Park", color: "#059669" },
  { id: "dev", name: "Dev Shah", color: "#d97706" },
  { id: "eve", name: "Eve Moreau", color: "#7c3aed" },
]

const MAX = 3

/** PresenceAvatars, rebuilt from its public parts: the same root, avatars and overflow, with a bigger face and a count of your own. */
function MyStack() {
  const people = uniqueUsers(usePeers())
  return (
    <div className="flex items-center gap-2">
      <Presence.Root label="Editors">
        {people.slice(0, MAX).map((peer) => (
          <Presence.Avatar key={peer.clientId} peer={peer} size="md" />
        ))}
        <Presence.Overflow peers={people.slice(MAX)} size="md" />
      </Presence.Root>
      <span className="text-[12px] text-muted-foreground tabular-nums">{people.length} editing</span>
    </div>
  )
}

/** Five people in one room; the stack is built by hand from Presence.Root, Presence.Avatar and Presence.Overflow. */
export function PartsPresence() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
      {PEOPLE.map((user, i) => (
        <div key={user.id} data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
          <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
            <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
            {user.name.split(" ")[0]}
          </div>
          <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} className="p-2">
            {i === 0 ? <MyStack /> : <span className="text-[11px] text-muted-foreground">in the room</span>}
          </CollabRoom>
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./parts-presence-3zk_qFcy.js`),[]));function G(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Parts and headless`,children:`Every preset is made of public parts, and every part sits on a headless hook. Swap any layer: restyle a part, render your own with the hook, or use only the core.`}),(0,C.jsx)(_,{n:1,title:`The avatar stack, rebuilt`,blurb:"`Presence.Root`, `Presence.Avatar` and `Presence.Overflow`: the PresenceAvatars preset is exactly these, here at a bigger size with a count.",code:W,children:(0,C.jsx)(U,{})}),(0,C.jsx)(_,{n:2,title:`Cursors your way`,blurb:"Left draws peers as dots through `renderCursor`. Right draws them by hand from `useCursors` with `Cursors.Layer` and `Cursors.Pointer`, names hidden.",code:A,children:(0,C.jsx)(k,{})}),(0,C.jsx)(_,{n:3,title:`Headless`,blurb:"No kit markup: a table straight from `usePeers`, showing the raw state each client publishes. Move and click on either side.",code:L,children:(0,C.jsx)(I,{})}),(0,C.jsx)(_,{n:4,title:`A history panel of your own`,blurb:"`HistoryParts.Controls`, `Scrubber` and `List` with `renderEntry`.",code:z,children:(0,C.jsx)(R,{})})]})}export{G as component};