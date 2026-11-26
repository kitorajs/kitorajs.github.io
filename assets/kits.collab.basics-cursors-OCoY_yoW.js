import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,hi as a}from"./index-9y5uwRd3.js";import{t as o}from"./adapter-MuxtTBM4.js";import{_ as s,a as c,c as l,g as u,n as d,r as f}from"./react-D7rNXBHp.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";import{r as m}from"./cursors-Dy-kXXyk.js";import{r as h}from"./presence-D7z7_1Y4.js";import{n as g,t as _}from"./selection-Bx_DA2Lb.js";var v=e(n(),1),y=i(),b={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},x={id:`bob`,name:`Bob Ito`,color:`#2563eb`},S=`doc`,C=Array.from({length:24},(e,t)=>`§${t+1}. ${`Collaboration works best when everyone can see where everyone else is. `.repeat(2)}`);function w(){let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(0);s((0,v.useMemo)(()=>({surface:S,x:0,y:t,zoom:1}),[t]));let{following:r,follow:i,stop:a}=c(S,t=>e.current?.scrollTo({top:t.y}));return(0,y.jsx)(T,{avatars:(0,y.jsx)(h,{includeSelf:!1,onFollow:e=>r?.clientId===e.clientId?a():i(e.clientId),followingId:r?.clientId}),scrollRef:e,onScroll:e=>n(e.currentTarget.scrollTop),onWheel:()=>r&&a(),children:(0,y.jsx)(_,{following:r,onStop:a})})}function T({avatars:e,scrollRef:t,onScroll:n,onWheel:r,children:i}){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-end border-b px-2.5 py-1.5`,children:[(0,y.jsx)(`span`,{className:`mr-auto text-[11px] text-muted-foreground`,children:`Click an avatar to follow`}),(0,y.jsx)(`div`,{className:`flex h-6 items-center`,children:e})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{ref:t,onScroll:n,onWheel:r,tabIndex:0,"aria-label":`Document`,className:`h-48 overflow-y-auto p-3 text-[12px] leading-5 text-muted-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring`,children:C.map(e=>(0,y.jsx)(`p`,{className:`mb-2`,children:e},e))}),i]})]})}function E({user:e,hub:t,fallback:n,children:r}){return(0,y.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,y.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,y.jsx)(d,{user:e,adapter:()=>o({transport:t.connect()}),fallback:n,className:`relative`,children:r})]})}function D(){let e=l();return(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[b,x].map(t=>(0,y.jsx)(E,{user:t,hub:e,fallback:(0,y.jsx)(T,{}),children:(0,y.jsx)(w,{})},t.id))})}var O=`import { type ReactNode, type Ref, type UIEventHandler, useMemo, useRef, useState } from "react"
import { channelPresence, CollabRoom, type CollabUser, FollowBanner, type MemoryHub, PresenceAvatars, useFollow, useMemoryHub, useViewportBroadcast } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

const SURFACE = "doc"
const PARAGRAPHS = Array.from({ length: 24 }, (_, i) => \`§\${i + 1}. \${"Collaboration works best when everyone can see where everyone else is. ".repeat(2)}\`)

function Document() {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)
  // My viewport is my scroll position; publish it so others can follow me.
  const viewport = useMemo(() => ({ surface: SURFACE, x: 0, y: top, zoom: 1 }), [top])
  useViewportBroadcast(viewport)
  // Following someone copies their scroll into mine.
  const { following, follow, stop } = useFollow(SURFACE, (vp) => ref.current?.scrollTo({ top: vp.y }))
  return (
    <DocumentFrame
      avatars={<PresenceAvatars includeSelf={false} onFollow={(p) => (following?.clientId === p.clientId ? stop() : follow(p.clientId))} followingId={following?.clientId} />}
      scrollRef={ref}
      onScroll={(e) => setTop(e.currentTarget.scrollTop)}
      onWheel={() => following && stop()}
    >
      <FollowBanner following={following} onStop={stop} />
    </DocumentFrame>
  )
}

/**
 * The avatar row and the document: drawn by the live document, and as the room's fallback until the room exists (the
 * server HTML). The avatars sit in a 24 px slot, their height, so the row keeps its height before anyone joins.
 */
function DocumentFrame({ avatars, scrollRef, onScroll, onWheel, children }: { readonly avatars?: ReactNode; readonly scrollRef?: Ref<HTMLDivElement>; readonly onScroll?: UIEventHandler<HTMLDivElement>; readonly onWheel?: () => void; readonly children?: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-end border-b px-2.5 py-1.5">
        <span className="mr-auto text-[11px] text-muted-foreground">Click an avatar to follow</span>
        <div className="flex h-6 items-center">{avatars}</div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={onScroll}
          onWheel={onWheel}
          tabIndex={0}
          aria-label="Document"
          className="h-48 overflow-y-auto p-3 text-[12px] leading-5 text-muted-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
        >
          {PARAGRAPHS.map((p) => <p key={p} className="mb-2">{p}</p>)}
        </div>
        {children}
      </div>
    </>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the shared hub. */
function Screen({ user, hub, fallback, children }: { readonly user: CollabUser; readonly hub: MemoryHub; readonly fallback: ReactNode; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}’s screen
      </div>
      {/* the room connects in the browser; until then (and in a server render) the fallback holds its place */}
      <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} fallback={fallback} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** Follow mode: click Bob's avatar on Ada's screen, then scroll Bob's document. Scrolling yourself (wheel) stops following. */
export function BasicFollow() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        <Screen key={user.id} user={user} hub={hub} fallback={<DocumentFrame />}>
          <Document />
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./follow-BPQYsczh.js`),[]));var k={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},A={id:`bob`,name:`Bob Ito`,color:`#2563eb`},j=`board`;function M({ref:e,children:t}){return(0,y.jsxs)(`div`,{ref:e,className:`relative h-48 bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]`,children:[(0,y.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Move the pointer here.`}),t]})}function N(){let e=(0,v.useRef)(null);return f(j,e),(0,y.jsx)(M,{ref:e,children:(0,y.jsx)(m,{surface:j})})}function P({user:e,hub:t,fallback:n,children:r}){return(0,y.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,y.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,y.jsx)(d,{user:e,adapter:()=>o({transport:t.connect()}),fallback:n,className:`relative`,children:r})]})}function F(){let e=l();return(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[k,A].map(t=>(0,y.jsx)(P,{user:t,hub:e,fallback:(0,y.jsx)(M,{}),children:(0,y.jsx)(N,{})},t.id))})}var I=`import { type ReactNode, type Ref, useRef } from "react"
import { channelPresence, CollabRoom, type CollabUser, LiveCursors, type MemoryHub, useCursorBroadcast, useMemoryHub } from "@kitora/collab"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

const SURFACE = "board"

/** The board itself: drawn by the live board, and as the room's fallback until the room exists (the server HTML). */
function BoardSurface({ ref, children }: { readonly ref?: Ref<HTMLDivElement>; readonly children?: ReactNode }) {
  return (
    <div ref={ref} className="relative h-48 bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]">
      <p className="p-3 text-[12px] text-muted-foreground">Move the pointer here.</p>
      {children}
    </div>
  )
}

function Board() {
  const ref = useRef<HTMLDivElement>(null)
  // Publish my pointer over this element as my cursor on "board"…
  useCursorBroadcast(SURFACE, ref)
  return (
    <BoardSurface ref={ref}>
      {/* …and draw everyone else's cursor on "board". */}
      <LiveCursors surface={SURFACE} />
    </BoardSurface>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the shared hub. */
function Screen({ user, hub, fallback, children }: { readonly user: CollabUser; readonly hub: MemoryHub; readonly fallback: ReactNode; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}’s screen
      </div>
      {/* the room connects in the browser; until then (and in a server render) the fallback holds its place */}
      <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} fallback={fallback} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** Move in one screen, watch the cursor in the other. */
export function BasicLiveCursors() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        <Screen key={user.id} user={user} hub={hub} fallback={<BoardSurface />}>
          <Board />
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./live-cursors-D-BLBS-F.js`),[]));var L={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},R={id:`bob`,name:`Bob Ito`,color:`#2563eb`},z=`files`,B=[`Roadmap.md`,`Q3 budget.xlsx`,`Logo.svg`,`Launch plan.doc`];function V({file:e,mine:t=!1,onToggle:n}){return(0,y.jsx)(`button`,{type:`button`,"aria-pressed":t,onClick:n,className:a(`flex h-7 w-full items-center rounded-md border px-2 text-left text-[13px] transition-colors hover:bg-muted`,t&&`border-primary bg-primary/10`),children:e})}function H(){let[e,t]=u(z);return(0,y.jsx)(`ul`,{className:`space-y-1.5 p-3`,"aria-label":`Files`,children:B.map(n=>{let r=e.includes(n);return(0,y.jsx)(`li`,{children:(0,y.jsx)(g,{surface:z,id:n,className:`rounded-md`,children:(0,y.jsx)(V,{file:n,mine:r,onToggle:()=>t(r?e.filter(e=>e!==n):[...e,n])})})},n)})})}function U(){return(0,y.jsx)(`ul`,{className:`space-y-1.5 p-3`,"aria-label":`Files`,children:B.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(V,{file:e})},e))})}function W({user:e,hub:t,fallback:n,children:r}){return(0,y.jsxs)(`div`,{"data-pane":e.id,className:`min-w-0 overflow-hidden rounded-lg border bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium`,children:[(0,y.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),e.name.split(` `)[0],`’s screen`]}),(0,y.jsx)(d,{user:e,adapter:()=>o({transport:t.connect()}),fallback:n,className:`relative`,children:r})]})}function G(){let e=l();return(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[L,R].map(t=>(0,y.jsx)(W,{user:t,hub:e,fallback:(0,y.jsx)(U,{}),children:(0,y.jsx)(H,{})},t.id))})}var K=`import type { ReactNode } from "react"
import { channelPresence, CollabRoom, type CollabUser, type MemoryHub, SelectionMark, useMemoryHub, useSharedSelection } from "@kitora/collab"
import { cn } from "@kitora/ui/utils"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const BOB: CollabUser = { id: "bob", name: "Bob Ito", color: "#2563eb" }

const SURFACE = "files"
const FILES = ["Roadmap.md", "Q3 budget.xlsx", "Logo.svg", "Launch plan.doc"] as const

/** One file's button: in the live list, and in the list the room's fallback draws until the room exists. */
function FileButton({ file, mine = false, onToggle }: { readonly file: string; readonly mine?: boolean; readonly onToggle?: () => void }) {
  return (
    <button type="button" aria-pressed={mine} onClick={onToggle} className={cn("flex h-7 w-full items-center rounded-md border px-2 text-left text-[13px] transition-colors hover:bg-muted", mine && "border-primary bg-primary/10")}>
      {file}
    </button>
  )
}

function FileList() {
  // My selection, published to the room; SelectionMark rings what OTHERS have selected.
  const [selected, setSelected] = useSharedSelection(SURFACE)
  return (
    <ul className="space-y-1.5 p-3" aria-label="Files">
      {FILES.map((file) => {
        const mine = selected.includes(file)
        return (
          <li key={file}>
            <SelectionMark surface={SURFACE} id={file} className="rounded-md">
              <FileButton file={file} mine={mine} onToggle={() => setSelected(mine ? selected.filter((f) => f !== file) : [...selected, file])} />
            </SelectionMark>
          </li>
        )
      })}
    </ul>
  )
}

/** The list before the room exists (and in the server HTML): the same rows, nothing selected yet. */
function FileListFallback() {
  return (
    <ul className="space-y-1.5 p-3" aria-label="Files">
      {FILES.map((file) => (
        <li key={file}>
          <FileButton file={file} />
        </li>
      ))}
    </ul>
  )
}

/** One person's "screen": a frame with their name, and their own presence room on the shared hub. */
function Screen({ user, hub, fallback, children }: { readonly user: CollabUser; readonly hub: MemoryHub; readonly fallback: ReactNode; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="min-w-0 overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px] font-medium">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        {user.name.split(" ")[0]}’s screen
      </div>
      {/* the room connects in the browser; until then (and in a server render) the fallback holds its place */}
      <CollabRoom user={user} adapter={() => channelPresence({ transport: hub.connect() })} fallback={fallback} className="relative">
        {children}
      </CollabRoom>
    </div>
  )
}

/** Click files on one screen: the other screen rings them in your colour, with your name. */
export function BasicSharedSelection() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {[ADA, BOB].map((user) => (
        <Screen key={user.id} user={user} hub={hub} fallback={<FileListFallback />}>
          <FileList />
        </Screen>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./shared-selection-BYWQ1Wkk.js`),[]));function q(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Basics: cursors, selection and follow`,children:`Cursors, selections and viewports are named by surface, so one room can carry many: a canvas, a list, a document.`}),(0,y.jsx)(p,{n:1,title:`Live cursors`,blurb:"`useCursorBroadcast` publishes your pointer over an element; `LiveCursors` draws everyone else's on the same surface.",code:I,children:(0,y.jsx)(F,{})}),(0,y.jsx)(p,{n:2,title:`Shared selection`,blurb:"`useSharedSelection` is your selection, published. `SelectionMark` rings what others selected, with their names.",code:K,children:(0,y.jsx)(G,{})}),(0,y.jsx)(p,{n:3,title:`Follow a user`,blurb:`On Ada's screen, click Bob's avatar, then scroll Bob's document. The wheel or Stop ends following.`,code:O,children:(0,y.jsx)(D,{})})]})}export{q as component};