import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./circle-check-N5HQAPRA.js";import{t as n}from"./file-text-B8CPDozU.js";import{t as r}from"./git-merge-BuyU2vHe.js";import{t as i}from"./message-square-BENMLP3G.js";import{t as a}from"./users-BnHhGQEL.js";import{Cc as o,Ic as s,ti as c}from"./index-B9ukmIN1.js";import{a as l,n as u,o as d,t as f}from"./card-B_Tor3B1.js";import{t as p}from"./timeline-Jstm7zkx.js";var m=e({ActivityFeedComposeRecentActivityCard:()=>v}),h=s(),g=new Date(`2026-10-15T14:30:00Z`),_=[{id:`1`,actor:`Grace H`,title:`merged #412 auth refactor`,time:g,icon:(0,h.jsx)(r,{}),tone:`success`},{id:`2`,actor:`Alex Kim`,title:`commented on Migration plan`,time:new Date(g.getTime()-14*6e4),icon:(0,h.jsx)(i,{}),body:`Ship behind a flag first.`}];function v(){return(0,h.jsxs)(f,{className:`w-full max-w-md`,children:[(0,h.jsxs)(l,{className:`flex flex-row flex-wrap items-center justify-between gap-2`,children:[(0,h.jsx)(d,{children:`Recent activity`}),(0,h.jsx)(c,{size:`sm`,variant:`ghost`,children:`View all`})]}),(0,h.jsx)(u,{children:(0,h.jsx)(p,{events:_,now:g,density:`compact`,label:`Recent activity`})})]})}var y=e({ActivityFeedTimelineOfEvents:()=>C}),b=new Date(`2026-10-15T14:30:00Z`),x=e=>new Date(b.getTime()-e*6e4),S=[{id:`1`,actor:`Grace H`,title:`merged #412 auth refactor`,time:x(0),icon:(0,h.jsx)(t,{}),tone:`success`},{id:`2`,actor:`Alex Kim`,title:`commented on Migration plan`,time:x(14),icon:(0,h.jsx)(i,{}),body:`Schema change looks good. Let’s ship behind a flag first.`},{id:`3`,actor:`Linus T`,title:`opened rate-limit spec`,time:x(120),icon:(0,h.jsx)(n,{}),tone:`info`},{id:`4`,actor:`Mira O`,title:`invited ada@example.com`,time:x(1440),icon:(0,h.jsx)(a,{})}];function C(){return(0,h.jsx)(p,{events:S,now:b,density:`compact`,label:`Activity`,className:`w-full max-w-md`})}var w=`import { GitMerge, MessageSquare } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Timeline, type TimelineEvent } from "@kitora/display"

/** A fixed "now" so relative times read the same on every render; use \`new Date()\` in an app. */
const NOW = new Date("2026-10-15T14:30:00Z")

const EVENTS: readonly TimelineEvent[] = [
  { id: "1", actor: "Grace H", title: "merged #412 auth refactor", time: NOW, icon: <GitMerge />, tone: "success" },
  { id: "2", actor: "Alex Kim", title: "commented on Migration plan", time: new Date(NOW.getTime() - 14 * 60_000), icon: <MessageSquare />, body: "Ship behind a flag first." },
]

export function ActivityFeedComposeRecentActivityCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
        <CardTitle>Recent activity</CardTitle>
        <Button size="sm" variant="ghost">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <Timeline events={EVENTS} now={NOW} density="compact" label="Recent activity" />
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>o(()=>import(`./compose-B8NQwDzI.js`),[]));var T=`import { CheckCircle2, FileText, MessageSquare, Users } from "lucide-react"
import { Timeline, type TimelineEvent } from "@kitora/display"

/** A fixed "now" so relative times read the same on every render; use \`new Date()\` in an app. */
const NOW = new Date("2026-10-15T14:30:00Z")
const minutesAgo = (minutes: number) => new Date(NOW.getTime() - minutes * 60_000)

const EVENTS: readonly TimelineEvent[] = [
  { id: "1", actor: "Grace H", title: "merged #412 auth refactor", time: minutesAgo(0), icon: <CheckCircle2 />, tone: "success" },
  { id: "2", actor: "Alex Kim", title: "commented on Migration plan", time: minutesAgo(14), icon: <MessageSquare />, body: "Schema change looks good. Let’s ship behind a flag first." },
  { id: "3", actor: "Linus T", title: "opened rate-limit spec", time: minutesAgo(120), icon: <FileText />, tone: "info" },
  { id: "4", actor: "Mira O", title: "invited ada@example.com", time: minutesAgo(60 * 24), icon: <Users /> },
]

export function ActivityFeedTimelineOfEvents() {
  return <Timeline events={EVENTS} now={NOW} density="compact" label="Activity" className="w-full max-w-md" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>o(()=>import(`./timeline-of-events-BuS8W4j6.js`),[]));var E={"./demos/activity-feed/compose.tsx":m,"./demos/activity-feed/timeline-of-events.tsx":y},D={"./demos/activity-feed/compose.tsx":w,"./demos/activity-feed/timeline-of-events.tsx":T};export{E as modules,D as sources};