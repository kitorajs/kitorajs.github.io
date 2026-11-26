import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-Bee7W2a6.js";import{a as n,c as r,n as i,o as a,r as o,s,t as c}from"./inbox-Caq8QQya.js";import{s as l}from"./kit-docs-BUovISd0.js";import{t as u}from"./folder-plus-C-OSa1HS.js";import{i as d,t as f}from"./states-DWdQggOn.js";import{Bc as p,Cc as m,Ic as h,Ko as g,ti as _}from"./index-B9ukmIN1.js";import{n as v}from"./badges-DAbO4yBh.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";import{t as b}from"./-kits.feedback.shared-DBKNiI9L.js";var x=e(p(),1),S=h(),C,w={connect:e=>(C=e,()=>{C=void 0})},T={saves:0,lastSize:0},E={load:()=>void 0,save:e=>{T.saves+=1,T.lastSize=e.length}},D=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),O=(e,t)=>{let n=Math.round((e-t)/6e4);return Math.abs(n)<60?D.format(n,`minute`):D.format(Math.round(n/60),`hour`)},k=6e4,A=0;function j(){let e=g();return(0,S.jsx)(M,{now:e},e)}function M({now:e}){let[t]=(0,x.useState)(()=>s([{id:`seed`,title:`Welcome to the team`,group:`general`,createdAt:e-90*k,read:!1}],{storage:E})),[n,r]=(0,x.useState)(T.saves);return(0,x.useEffect)(()=>a(t,w),[t]),(0,x.useEffect)(()=>t.subscribe(()=>r(T.saves)),[t]),(0,S.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 border-b px-3 py-2 text-[12px]`,children:[(0,S.jsx)(_,{size:`xs`,variant:`outline`,onClick:()=>C?.({id:`push-${++A}`,title:`Build #${1040+A} finished`,group:`deploys`,tone:`success`,createdAt:Date.now(),read:!1}),children:`Push from socket`}),(0,S.jsxs)(`span`,{"data-testid":`adapter-saves`,className:`ml-auto text-muted-foreground tabular-nums`,children:[n,` saves sent to the server`]})]}),(0,S.jsx)(o,{store:t,formatTime:O,className:`min-h-0 flex-1`})]})}var N=`import { useEffect, useState } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { connectInbox, createInboxStore, NotificationList, type InboxNotification, type InboxSource, type InboxStorage, type InboxTimeFormatter } from "@kitora/feedback"

// A custom transport: anything with \`connect(push) → disconnect\` is an InboxSource.
// A real app wraps its WebSocket, SSE stream or poll here; this one is a fake socket
// that the "Push" button fires.
let socketPush: ((n: InboxNotification) => void) | undefined
const fakeSocket: InboxSource = {
  connect: (push) => {
    socketPush = push
    return () => {
      socketPush = undefined
    }
  },
}

// A custom persistence adapter: here a stand-in for a server endpoint that records
// every save, so the demo can show the writes. \`load\` returns undefined: nothing saved yet.
const serverLog: { saves: number; lastSize: number } = { saves: 0, lastSize: 0 }
const serverStorage: InboxStorage = {
  load: () => undefined,
  save: (items) => {
    serverLog.saves += 1
    serverLog.lastSize = items.length
  },
}

// A custom time formatter: the platform's own relative time, in words.
const words = new Intl.RelativeTimeFormat("en", { numeric: "auto" })
const formatTime: InboxTimeFormatter = (ms, now) => {
  const minutes = Math.round((ms - now) / 60_000)
  return Math.abs(minutes) < 60 ? words.format(minutes, "minute") : words.format(Math.round(minutes / 60), "hour")
}

const MIN = 60_000

let pushed = 0

/** An inbox on three swapped adapters: a fake socket, a server-style store and an Intl time formatter. */
export function BasicInboxAdapter() {
  // keyed on "now", fixed for the page: notifications around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Adapted key={now} now={now} />
}

function Adapted({ now }: { now: number }) {
  const [inbox] = useState(() => createInboxStore([{ id: "seed", title: "Welcome to the team", group: "general", createdAt: now - 90 * MIN, read: false }], { storage: serverStorage }))
  const [saves, setSaves] = useState(serverLog.saves)
  useEffect(() => connectInbox(inbox, fakeSocket), [inbox])
  useEffect(() => inbox.subscribe(() => setSaves(serverLog.saves)), [inbox])
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-[12px]">
        <Button size="xs" variant="outline" onClick={() => socketPush?.({ id: \`push-\${++pushed}\`, title: \`Build #\${1040 + pushed} finished\`, group: "deploys", tone: "success", createdAt: Date.now(), read: false })}>
          Push from socket
        </Button>
        <span data-testid="adapter-saves" className="ml-auto text-muted-foreground tabular-nums">
          {saves} saves sent to the server
        </span>
      </div>
      <NotificationList store={inbox} formatTime={formatTime} className="min-h-0 flex-1" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>m(()=>import(`./inbox-adapter-BBPC1VfF.js`),[]));var P=6e4,F=e=>[{id:`1`,title:`Maya mentioned you in Q4 roadmap`,body:`Can you take the pricing section?`,group:`mentions`,actor:`Maya Patel`,createdAt:e-4*P,read:!1},{id:`2`,title:`Deploy to production succeeded`,group:`deploys`,tone:`success`,createdAt:e-40*P,read:!1},{id:`3`,title:`Ravi assigned you ENG-412`,body:`Login fails when the email has a plus sign`,group:`assigned`,actor:`Ravi Iyer`,createdAt:e-1560*P,read:!0}];function I(){let e=g();return(0,S.jsx)(L,{now:e},e)}function L({now:e}){let[t]=(0,x.useState)(()=>s(F(e)));return(0,S.jsxs)(`div`,{className:`flex h-11 items-center gap-2 px-3 text-[13px]`,children:[(0,S.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:`/ Q4 roadmap`}),(0,S.jsx)(i,{store:t,className:`ml-auto`})]})}var R=`import { useState } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { createInboxStore, NotificationBell, type InboxNotification } from "@kitora/feedback"

const MIN = 60_000

// The inbox is a store the host fills (from a socket, a poll, a server render).
const seed = (now: number): InboxNotification[] => [
  { id: "1", title: "Maya mentioned you in Q4 roadmap", body: "Can you take the pricing section?", group: "mentions", actor: "Maya Patel", createdAt: now - 4 * MIN, read: false },
  { id: "2", title: "Deploy to production succeeded", group: "deploys", tone: "success", createdAt: now - 40 * MIN, read: false },
  { id: "3", title: "Ravi assigned you ENG-412", body: "Login fails when the email has a plus sign", group: "assigned", actor: "Ravi Iyer", createdAt: now - 26 * 60 * MIN, read: true },
]

/** A bell with the unread count; click it for the inbox. */
export function BasicBell() {
  // keyed on "now", fixed for the page: notifications around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Bar key={now} now={now} />
}

function Bar({ now }: { now: number }) {
  const [inbox] = useState(() => createInboxStore(seed(now)))
  return (
    <div className="flex h-11 items-center gap-2 px-3 text-[13px]">
      <span className="font-semibold">Acme</span>
      <span className="text-muted-foreground">/ Q4 roadmap</span>
      <NotificationBell store={inbox} className="ml-auto" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>m(()=>import(`./bell-C4_xcxsO.js`),[]));var z=6e4,B=e=>[{id:`1`,title:`Lena replied in Design review`,body:`The new header works for me.`,group:`mentions`,actor:`Lena Ortiz`,createdAt:e-4*z,read:!1},{id:`2`,title:`Deploy to production succeeded`,group:`deploys`,tone:`success`,createdAt:e-40*z,read:!1},{id:`3`,title:`Build #1041 failed`,body:`2 tests failed in auth`,group:`deploys`,tone:`error`,createdAt:e-180*z,read:!1},{id:`4`,title:`Ravi assigned you ENG-412`,group:`mentions`,actor:`Ravi Iyer`,createdAt:e-1560*z,read:!0}];function V({inbox:e}){let i=n(e);return(0,S.jsxs)(`span`,{className:`relative inline-grid size-7 place-items-center rounded-md border text-muted-foreground`,children:[(0,S.jsx)(t,{className:`size-3.5`}),(0,S.jsx)(v,{count:r(i),corner:!0,decorative:!0})]})}function H(){let e=g();return(0,S.jsx)(U,{now:e},e)}function U({now:e}){let[t]=(0,x.useState)(()=>s(B(e)));return(0,S.jsxs)(c.Root,{store:t,className:`h-full`,children:[(0,S.jsxs)(c.Header,{title:`Activity`,children:[(0,S.jsx)(c.MarkAllRead,{label:`Read all`}),(0,S.jsx)(V,{inbox:t})]}),(0,S.jsx)(c.Tabs,{groups:[{id:`mentions`,label:`Mentions`},{id:`deploys`,label:`Deploys`}]}),(0,S.jsx)(c.Items,{now:e})]})}var W=`import { useState } from "react"
import { Bell } from "lucide-react"
import { CountBadge } from "@kitora/display"
import { createInboxStore, Inbox, unreadCount, useInbox, type InboxNotification, type InboxStore } from "@kitora/feedback"
import { usePageTime } from "@kitora/primitives/react"

const MIN = 60_000

const seed = (now: number): InboxNotification[] => [
  { id: "1", title: "Lena replied in Design review", body: "The new header works for me.", group: "mentions", actor: "Lena Ortiz", createdAt: now - 4 * MIN, read: false },
  { id: "2", title: "Deploy to production succeeded", group: "deploys", tone: "success", createdAt: now - 40 * MIN, read: false },
  { id: "3", title: "Build #1041 failed", body: "2 tests failed in auth", group: "deploys", tone: "error", createdAt: now - 3 * 60 * MIN, read: false },
  { id: "4", title: "Ravi assigned you ENG-412", group: "mentions", actor: "Ravi Iyer", createdAt: now - 26 * 60 * MIN, read: true },
]

/** An icon with the store's unread count on it: display's \`CountBadge\`, pinned to the corner and hidden from screen readers; nothing at zero. */
function UnreadIcon({ inbox }: { inbox: InboxStore }) {
  const items = useInbox(inbox)
  return (
    <span className="relative inline-grid size-7 place-items-center rounded-md border text-muted-foreground">
      <Bell className="size-3.5" />
      <CountBadge count={unreadCount(items)} corner decorative />
    </span>
  )
}

/** The inbox rebuilt from \`Inbox\` parts: the header holds the count icon and mark-all, no unread filter, group tabs, then the rows. */
export function BasicInboxCompose() {
  // keyed on "now", fixed for the page: notifications around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Composed key={now} now={now} />
}

function Composed({ now }: { now: number }) {
  const [inbox] = useState(() => createInboxStore(seed(now)))
  return (
    <Inbox.Root store={inbox} className="h-full">
      <Inbox.Header title="Activity">
        <Inbox.MarkAllRead label="Read all" />
        <UnreadIcon inbox={inbox} />
      </Inbox.Header>
      <Inbox.Tabs groups={[{ id: "mentions", label: "Mentions" }, { id: "deploys", label: "Deploys" }]} />
      <Inbox.Items now={now} />
    </Inbox.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>m(()=>import(`./inbox-compose-D8mG2xgp.js`),[]));function G(){return(0,S.jsx)(f,{icon:(0,S.jsx)(u,{}),title:`No projects yet`,description:`Projects group your tasks, docs and files. Create one to get started.`,actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{size:`sm`,children:`New project`}),(0,S.jsx)(_,{size:`sm`,variant:`ghost`,children:`Import`})]})})}var K=`import { FolderPlus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { EmptyState } from "@kitora/feedback"

/** Nothing here yet: an icon, a line of copy, and the one action that fixes it. */
export function BasicEmptyState() {
  return (
    <EmptyState
      icon={<FolderPlus />}
      title="No projects yet"
      description="Projects group your tasks, docs and files. Create one to get started."
      actions={
        <>
          <Button size="sm">New project</Button>
          <Button size="sm" variant="ghost">Import</Button>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>m(()=>import(`./empty-state-D923YS0-.js`),[]));function q(){return(0,S.jsx)(d,{status:`404`,actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{size:`sm`,children:`Go home`}),(0,S.jsx)(_,{size:`sm`,variant:`outline`,children:`Contact support`})]})})}var J=`import { Button } from "@kitora/ui/button"
import { ResultPage } from "@kitora/feedback"

/** A whole 404 page from one prop; the copy and the art have defaults. */
export function BasicResultPage() {
  return (
    <ResultPage
      status="404"
      actions={
        <>
          <Button size="sm">Go home</Button>
          <Button size="sm" variant="outline">Contact support</Button>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>m(()=>import(`./result-page-B0yuYfm4.js`),[]));function Y(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(l,{title:`Basics: pages and inbox`,children:`Whole-area states and the notification inbox.`}),(0,S.jsx)(y,{n:1,title:`An empty state`,blurb:`Icon, title, one line of why, and the action that fills it.`,code:K,children:(0,S.jsx)(b,{testId:`basic-empty`,children:(0,S.jsx)(G,{})})}),(0,S.jsx)(y,{n:2,title:`A result page`,blurb:"`status` picks the art and the default copy: success, info, warning, error, 404, 403, 500.",code:J,children:(0,S.jsx)(b,{testId:`basic-result`,children:(0,S.jsx)(q,{})})}),(0,S.jsx)(y,{n:3,title:`A notification bell`,blurb:`The unread count on a bell; the inbox opens in a popover. Click a row to mark it read.`,code:R,children:(0,S.jsx)(b,{testId:`basic-bell`,children:(0,S.jsx)(I,{})})}),(0,S.jsx)(y,{n:4,title:`Custom adapters`,blurb:"Swap the seams: an `InboxSource` (here a fake socket), an `InboxStorage` (here a server-style save log) and a `formatTime` formatter (here `Intl.RelativeTimeFormat`). The defaults are in-memory storage and compact relative time.",code:N,children:(0,S.jsx)(b,{testId:`basic-adapter`,height:340,children:(0,S.jsx)(j,{})})}),(0,S.jsx)(y,{n:5,title:`Inbox: compose your own`,blurb:"The list rebuilt from `Inbox.Root`, `Header`, `MarkAllRead`, `Tabs` and `Items`, with display's `CountBadge` (corner, decorative) on an icon fed by `useInbox`.",code:W,children:(0,S.jsx)(b,{testId:`basic-inbox-compose`,height:340,children:(0,S.jsx)(H,{})})})]})}export{Y as component};