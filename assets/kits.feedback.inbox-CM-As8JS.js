import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,c as n,n as r,r as i,s as a}from"./inbox-svVKhDq0.js";import{s as o}from"./kit-docs-CvNs0WqT.js";import{Bc as s,Cc as c,Ic as l,Ko as u,ti as d}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{t as p}from"./-kits.feedback.shared-CxfmAMWX.js";var m=e(s(),1),h=l(),g=6e4,_=60*g,v=e=>[{id:`a1`,title:`Maya mentioned you in Q4 roadmap`,body:`@aman can you own the pricing section? Draft due Friday.`,group:`mentions`,actor:`Maya Patel`,createdAt:e-6*g,read:!1},{id:`a2`,title:`Production deploy failed`,body:"acme-web · build exited with code 1 at step `pnpm build`.",group:`deploys`,tone:`error`,createdAt:e-22*g,read:!1},{id:`a3`,title:`Ravi assigned you ENG-412`,body:`Login fails when the email has a plus sign`,group:`assigned`,actor:`Ravi Iyer`,createdAt:e-2*_,read:!1},{id:`a4`,title:`Preview deploy ready`,body:`PR #1824 · acme-web-git-fix-login.vercel.app`,group:`deploys`,tone:`success`,createdAt:e-5*_,read:!0},{id:`a5`,title:`Sam replied in #design`,body:`Love the new empty states, ship it.`,group:`mentions`,actor:`Sam Kim`,createdAt:e-26*_,read:!0},{id:`a6`,title:`Disk usage at 85%`,body:`db-primary-1 will fill in ~6 days at this rate.`,group:`deploys`,tone:`warning`,createdAt:e-72*_,read:!1},{id:`a7`,title:`Priya invited you to Growth`,group:`assigned`,actor:`Priya Shah`,createdAt:e-216*_,read:!0}],y=[{id:`mentions`,label:`Mentions`},{id:`assigned`,label:`Assigned`},{id:`deploys`,label:`Deploys`}],b=[{title:`Ravi commented on ENG-412`,body:`Pushed a fix, can you review?`,group:`mentions`,actor:`Ravi Iyer`},{title:`Production deploy succeeded`,body:`acme-web · 41s`,group:`deploys`,tone:`success`},{title:`You were assigned ENG-420`,body:`Skeletons flash on fast networks`,group:`assigned`,actor:`Maya Patel`}];function x(){let e=u();return(0,h.jsx)(S,{now:e},e)}function S({now:e}){let[o]=(0,m.useState)(()=>a(v(e))),s=t(o),[c,l]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{if(!c)return;let e=0,t=setInterval(()=>{let t=b[e%b.length];t&&o.add({...t,id:`live-${Date.now()}`,createdAt:Date.now(),read:!1}),e+=1},2500);return()=>clearInterval(t)},[c,o]),(0,h.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[(0,h.jsxs)(`div`,{className:`flex h-11 items-center gap-2 border-b px-3`,children:[(0,h.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),(0,h.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`· `,n(s),` unread`]}),(0,h.jsxs)(`div`,{className:`ml-auto flex items-center gap-1.5`,children:[(0,h.jsx)(d,{size:`xs`,variant:c?`soft`:`outline`,onClick:()=>l(e=>!e),children:c?`Stop live feed`:`Simulate live`}),(0,h.jsx)(r,{store:o,groups:y})]})]}),(0,h.jsx)(i,{store:o,groups:y,className:`min-h-0 flex-1`})]})}var C=`import { useEffect, useState } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { createInboxStore, NotificationBell, NotificationList, unreadCount, useInbox, type InboxNotification } from "@kitora/feedback"

const MIN = 60_000
const HOUR = 60 * MIN

/** Seven notifications before \`now\`. */
const seed = (now: number): InboxNotification[] => [
  { id: "a1", title: "Maya mentioned you in Q4 roadmap", body: "@aman can you own the pricing section? Draft due Friday.", group: "mentions", actor: "Maya Patel", createdAt: now - 6 * MIN, read: false },
  { id: "a2", title: "Production deploy failed", body: "acme-web · build exited with code 1 at step \`pnpm build\`.", group: "deploys", tone: "error", createdAt: now - 22 * MIN, read: false },
  { id: "a3", title: "Ravi assigned you ENG-412", body: "Login fails when the email has a plus sign", group: "assigned", actor: "Ravi Iyer", createdAt: now - 2 * HOUR, read: false },
  { id: "a4", title: "Preview deploy ready", body: "PR #1824 · acme-web-git-fix-login.vercel.app", group: "deploys", tone: "success", createdAt: now - 5 * HOUR, read: true },
  { id: "a5", title: "Sam replied in #design", body: "Love the new empty states, ship it.", group: "mentions", actor: "Sam Kim", createdAt: now - 26 * HOUR, read: true },
  { id: "a6", title: "Disk usage at 85%", body: "db-primary-1 will fill in ~6 days at this rate.", group: "deploys", tone: "warning", createdAt: now - 3 * 24 * HOUR, read: false },
  { id: "a7", title: "Priya invited you to Growth", group: "assigned", actor: "Priya Shah", createdAt: now - 9 * 24 * HOUR, read: true },
]

const GROUPS = [
  { id: "mentions", label: "Mentions" },
  { id: "assigned", label: "Assigned" },
  { id: "deploys", label: "Deploys" },
]

const LIVE: readonly Omit<InboxNotification, "id" | "createdAt" | "read">[] = [
  { title: "Ravi commented on ENG-412", body: "Pushed a fix, can you review?", group: "mentions", actor: "Ravi Iyer" },
  { title: "Production deploy succeeded", body: "acme-web · 41s", group: "deploys", tone: "success" },
  { title: "You were assigned ENG-420", body: "Skeletons flash on fast networks", group: "assigned", actor: "Maya Patel" },
]

/**
 * A notification centre on one store: the bell in the app bar (with group tabs
 * in its popover) and a full-page inbox read the same notifications, so marking
 * one read in either updates both. "Simulate live" pushes new ones as a socket would.
 */
export function InboxCentre() {
  // keyed on "now", fixed for the page: notifications around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Centre key={now} now={now} />
}

function Centre({ now }: { now: number }) {
  const [inbox] = useState(() => createInboxStore(seed(now)))
  const items = useInbox(inbox)
  const [live, setLive] = useState(false)
  useEffect(() => {
    if (!live) return
    let i = 0
    const id = setInterval(() => {
      const n = LIVE[i % LIVE.length]
      if (n) inbox.add({ ...n, id: \`live-\${Date.now()}\`, createdAt: Date.now(), read: false })
      i += 1
    }, 2500)
    return () => clearInterval(id)
  }, [live, inbox])
  return (
    <div className="flex h-full flex-col text-[13px]">
      <div className="flex h-11 items-center gap-2 border-b px-3">
        <span className="font-semibold">Acme</span>
        <span className="text-muted-foreground tabular-nums">· {unreadCount(items)} unread</span>
        <div className="ml-auto flex items-center gap-1.5">
          <Button size="xs" variant={live ? "soft" : "outline"} onClick={() => setLive((v) => !v)}>
            {live ? "Stop live feed" : "Simulate live"}
          </Button>
          <NotificationBell store={inbox} groups={GROUPS} />
        </div>
      </div>
      <NotificationList store={inbox} groups={GROUPS} className="min-h-0 flex-1" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./inbox-centre-8agSZVVb.js`),[]));function w(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(o,{title:`Notification centre`,children:`An inbox store from the core, drawn by the bell (a popover) and by the list (a page). Both stay in sync because they read the same store.`}),(0,h.jsx)(f,{n:1,title:`Bell and full-page inbox`,blurb:`Group tabs with their own unread counts, an Unread filter, Today / Yesterday / This week / Earlier, mark read or unread per row, mark all read per group, and a simulated live feed.`,code:C,children:(0,h.jsx)(p,{testId:`inbox-centre`,height:520,children:(0,h.jsx)(x,{})})})]})}export{w as component};