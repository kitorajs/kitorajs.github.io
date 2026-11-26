import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{a as n,i as r,n as i,o as a,r as o}from"./comments-FtAeCWIv.js";import{Bc as s,Cc as c,Ic as l,Ko as u}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{t as f}from"./-kits.chat.shared--tJW3dQS.js";import{n as p}from"./audit-BSutDI1q.js";import{t as m}from"./activity-DtlQ2kzj.js";import{n as h,r as g,t as _}from"./audit-log-82J6u4La.js";var v=e(s(),1),y=l(),b=[{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`}],x=e=>[{id:`1`,actorId:`ana`,verb:`commented on`,target:`Launch plan`,at:e-5*6e4,detail:`Looks good, @ben can you check the dates?`},{id:`2`,actorId:`ben`,verb:`moved`,target:`Billing page`,at:e-3*36e5,detail:`To do → In progress`},{id:`3`,actorId:`ana`,verb:`created`,target:`Launch plan`,at:e-26*36e5}];function S(){let e=u();return(0,y.jsx)(`div`,{className:`h-full overflow-y-auto p-3`,children:(0,y.jsx)(m,{events:(0,v.useMemo)(()=>x(e),[e]),now:e,users:b})})}var C=`import { useMemo } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { ActivityFeed, type ActivityEvent, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2" },
]
/** Three events before \`now\`. */
const eventsBefore = (now: number): readonly ActivityEvent[] => [
  { id: "1", actorId: "ana", verb: "commented on", target: "Launch plan", at: now - 5 * 60_000, detail: "Looks good, @ben can you check the dates?" },
  { id: "2", actorId: "ben", verb: "moved", target: "Billing page", at: now - 3 * 3_600_000, detail: "To do → In progress" },
  { id: "3", actorId: "ana", verb: "created", target: "Launch plan", at: now - 26 * 3_600_000 },
]

/** An activity feed from plain events: grouped by day, newest first. */
export function BasicActivity() {
  // "now" fixed for the page: the build's in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  const events = useMemo(() => eventsBefore(now), [now])
  return (
    <div className="h-full overflow-y-auto p-3">
      <ActivityFeed events={events} now={now} users={USERS} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./activity-DKQ_xON3.js`),[]));var w=[{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`}],T=e=>[{id:`1`,at:e-6e4,actorId:`ana`,action:`user.role.update`,resourceType:`user`,resourceId:`u_9`,resourceLabel:`sam@acme.io`,before:{role:`member`},after:{role:`admin`}},{id:`2`,at:e-36e5,actorId:`ben`,action:`apikey.create`,resourceType:`api_key`,resourceId:`k_2`,resourceLabel:`ci-deploy`,after:{name:`ci-deploy`,scopes:[`deploy:write`]}},{id:`3`,at:e-864e5,actorId:`ana`,action:`project.delete`,resourceType:`project`,resourceId:`p_4`,resourceLabel:`Old site`,before:{name:`Old site`,visibility:`public`}},{id:`4`,at:e-2*864e5,actorId:`ben`,action:`auth.login`,resourceType:`session`,resourceId:`s_1`,ip:`10.0.4.12`}];function E(){let e=u();return(0,y.jsx)(_,{entries:(0,v.useMemo)(()=>T(e),[e]),now:e,users:w,initialPageSize:10,className:`h-full`})}var D=`import { useMemo } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { AuditLogViewer, type AuditEntry, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2" },
]
/** Four entries before \`now\`. */
const entriesBefore = (now: number): readonly AuditEntry[] => [
  { id: "1", at: now - 60_000, actorId: "ana", action: "user.role.update", resourceType: "user", resourceId: "u_9", resourceLabel: "sam@acme.io", before: { role: "member" }, after: { role: "admin" } },
  { id: "2", at: now - 3_600_000, actorId: "ben", action: "apikey.create", resourceType: "api_key", resourceId: "k_2", resourceLabel: "ci-deploy", after: { name: "ci-deploy", scopes: ["deploy:write"] } },
  { id: "3", at: now - 86_400_000, actorId: "ana", action: "project.delete", resourceType: "project", resourceId: "p_4", resourceLabel: "Old site", before: { name: "Old site", visibility: "public" } },
  { id: "4", at: now - 2 * 86_400_000, actorId: "ben", action: "auth.login", resourceType: "session", resourceId: "s_1", ip: "10.0.4.12" },
]

/** The audit viewer over four entries: expand a row for its diff, filter by actor or action. */
export function BasicAuditTable() {
  // "now" fixed for the page: the build's in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  const entries = useMemo(() => entriesBefore(now), [now])
  return <AuditLogViewer entries={entries} now={now} users={USERS} initialPageSize={10} className="h-full" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>c(()=>import(`./audit-table-RO4N14AP.js`),[]));var O=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`}],k=`Select any words in this paragraph and press Comment. Your thread appears in the rail, the text stays highlighted, and Resolve hides it until you reopen it.`;function A(){return(0,y.jsx)(n,{value:a({users:O,selfId:`me`}),children:(0,y.jsxs)(`div`,{className:`flex h-full min-h-0`,children:[(0,y.jsx)(i,{id:`p1`,text:k,className:`min-w-0 flex-1 p-4 text-[14px] leading-6`}),(0,y.jsx)(o,{className:`w-64 shrink-0 border-l bg-surface-1`})]})})}var j=`import { CommentableText, CommentsProvider, CommentsRail, useComments, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5" },
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
]
const TEXT = "Select any words in this paragraph and press Comment. Your thread appears in the rail, the text stays highlighted, and Resolve hides it until you reopen it."

/** Comments on a text range: one \`CommentableText\`, one rail, threads held by \`useComments\`. */
export function BasicCommentText() {
  const comments = useComments({ users: USERS, selfId: "me" })
  return (
    <CommentsProvider value={comments}>
      <div className="flex h-full min-h-0">
        <CommentableText id="p1" text={TEXT} className="min-w-0 flex-1 p-4 text-[14px] leading-6" />
        <CommentsRail className="w-64 shrink-0 border-l bg-surface-1" />
      </div>
    </CommentsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>c(()=>import(`./comment-text-D17ZkWsO.js`),[]));var M={name:`Acme`,plan:`pro`,seats:20,billing:{cycle:`monthly`,currency:`USD`},tags:[`beta`]},N={name:`Acme`,plan:`business`,seats:25,billing:{cycle:`yearly`,currency:`USD`},tags:[`beta`,`priority`],owner:`ana`};function P(){return(0,y.jsx)(`div`,{className:`p-4`,children:(0,y.jsx)(h,{changes:p(M,N)})})}var F=`import { FieldChanges, diffRecords } from "@kitora/chat"

const BEFORE = { name: "Acme", plan: "pro", seats: 20, billing: { cycle: "monthly", currency: "USD" }, tags: ["beta"] }
const AFTER = { name: "Acme", plan: "business", seats: 25, billing: { cycle: "yearly", currency: "USD" }, tags: ["beta", "priority"], owner: "ana" }

/** \`diffRecords\` turns two snapshots into field changes (nested paths, added and removed); \`FieldChanges\` draws them. */
export function BasicDiff() {
  return (
    <div className="p-4">
      <FieldChanges changes={diffRecords(BEFORE, AFTER)} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>c(()=>import(`./diff-D0ulyvt_.js`),[]));var I=12;function L(){let[e,t]=(0,v.useState)(0);return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 p-4 text-xs text-muted-foreground`,children:[(0,y.jsxs)(`span`,{className:`tabular-nums`,children:[`Page `,e+1,` of `,I]}),(0,y.jsx)(g,{page:e,pages:I,onPage:t})]})}var R=`import { useState } from "react"
import { Pager } from "@kitora/chat"

const PAGES = 12

/** The audit log's \`Pager\` on its own: first / previous / numbered pages with ellipses / next / last. */
export function BasicPager() {
  const [page, setPage] = useState(0)
  return (
    <div className="flex items-center gap-3 p-4 text-xs text-muted-foreground">
      <span className="tabular-nums">
        Page {page + 1} of {PAGES}
      </span>
      <Pager page={page} pages={PAGES} onPage={setPage} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>c(()=>import(`./pager-DaRflX9X.js`),[]));var z=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`}],B=e=>[{id:`t1`,anchor:{kind:`range`,elementId:`intro`,start:0,end:18,quote:`Launch on Thursday`},comments:[{id:`c1`,authorId:`ana`,text:`Is Thursday still realistic?`,createdAt:e-50*6e4},{id:`c2`,authorId:`me`,text:`Yes, if QA signs off by Wednesday`,createdAt:e-20*6e4}],resolved:!1}];function V(){let e=u();return(0,y.jsx)(H,{now:e},e)}function H({now:e}){let t=a({users:z,selfId:`me`,initial:B(e)});return(0,y.jsx)(n,{value:t,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-4`,children:[t.threads.map(e=>(0,y.jsx)(r,{thread:e},e.id)),t.threads.length===0?(0,y.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`No threads`}):null]})})}var U=`import { usePageTime } from "@kitora/primitives/react"
import { CommentsProvider, ThreadCard, useComments, type ChatUser, type CommentThread } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5" },
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
]
/** One thread with two comments before \`now\`. */
const threadsBefore = (now: number): readonly CommentThread[] => [
  {
    id: "t1",
    anchor: { kind: "range", elementId: "intro", start: 0, end: 18, quote: "Launch on Thursday" },
    comments: [
      { id: "c1", authorId: "ana", text: "Is Thursday still realistic?", createdAt: now - 50 * 60_000 },
      { id: "c2", authorId: "me", text: "Yes, if QA signs off by Wednesday", createdAt: now - 20 * 60_000 },
    ],
    resolved: false,
  },
]

/** One \`ThreadCard\` outside the rail: quote, comments, resolve and reply, reading the same \`useComments\` state. */
export function BasicThreadCard() {
  // keyed on "now", fixed for the page: comments around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Thread key={now} now={now} />
}

function Thread({ now }: { now: number }) {
  const comments = useComments({ users: USERS, selfId: "me", initial: threadsBefore(now) })
  return (
    <CommentsProvider value={comments}>
      <div className="flex flex-col gap-2 p-4">
        {comments.threads.map((t) => (
          <ThreadCard key={t.id} thread={t} />
        ))}
        {comments.threads.length === 0 ? <p className="text-xs text-muted-foreground">No threads</p> : null}
      </div>
    </CommentsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>c(()=>import(`./thread-card-D5kSPCe6.js`),[]));function W(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Basics: comments and logs`,children:`Collaboration around content: comment threads anchored to text, a feed of what happened, and an audit trail of exactly what changed.`}),(0,y.jsx)(d,{n:1,title:`Comment on text`,blurb:"Select words, press Comment, write. `useComments` holds the threads; `CommentsRail` lists them.",code:j,children:(0,y.jsx)(f,{testId:`basic-comments`,height:200,children:(0,y.jsx)(A,{})})}),(0,y.jsx)(d,{n:2,title:`An activity feed`,blurb:`Plain events in, day headings and a timeline out.`,code:C,children:(0,y.jsx)(f,{testId:`basic-activity`,height:260,children:(0,y.jsx)(S,{})})}),(0,y.jsx)(d,{n:3,title:`A field diff`,blurb:`Two snapshots in, field-level changes out: nested paths, added and removed fields, arrays compared whole.`,code:F,children:(0,y.jsx)(f,{testId:`basic-diff`,height:210,children:(0,y.jsx)(P,{})})}),(0,y.jsx)(d,{n:4,title:`An audit table`,blurb:`Expand a row to see its diff; filter by actor, action or time window.`,code:D,children:(0,y.jsx)(f,{testId:`basic-audit`,height:300,children:(0,y.jsx)(E,{})})}),(0,y.jsx)(d,{n:5,title:`One thread card`,blurb:"`ThreadCard` outside the rail, on the same `useComments` state: the quote, the comments, resolve and reply.",code:U,children:(0,y.jsx)(f,{testId:`basic-thread-card`,height:180,children:(0,y.jsx)(V,{})})}),(0,y.jsx)(d,{n:6,title:`A pager`,blurb:"`Pager` from the audit log on its own: first, previous, numbered pages with ellipses, next, last.",code:R,children:(0,y.jsx)(f,{testId:`basic-pager`,height:70,children:(0,y.jsx)(L,{})})})]})}export{W as component};