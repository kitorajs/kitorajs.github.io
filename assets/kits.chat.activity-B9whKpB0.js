import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./circle-check-N5HQAPRA.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./file-up-DHWvbFyz.js";import{t as i}from"./message-square-BENMLP3G.js";import{t as a}from"./user-plus-bAIjDwLE.js";import{Bc as o,Cc as s,Ic as c,Ko as l}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as u}from"./example-BGnSQG2Y.js";import{t as d}from"./-kits.chat.shared-CX9DtyWE.js";import{t as f}from"./activity-DIYMMvgV.js";import{c as p,o as m,t as h}from"./fixtures-DW555mY5.js";var g=e(o(),1),_=c();function v(e){switch(e.kind){case`comment`:return(0,_.jsx)(i,{});case`status`:return(0,_.jsx)(t,{});case`assign`:return(0,_.jsx)(a,{});default:return(0,_.jsx)(r,{})}}function y(){let e=l();return(0,_.jsx)(`div`,{className:`h-full overflow-y-auto p-4`,children:(0,_.jsx)(f,{events:(0,g.useMemo)(()=>p(e),[e]),now:e,users:m,kinds:h,icon:v})})}var b=`import { useMemo } from "react"
import { CheckCircle2, FileUp, MessageSquare, UserPlus } from "lucide-react"
import { usePageTime } from "@kitora/primitives/react"
import { ActivityFeed, type ActivityEvent } from "@kitora/chat"
import { ACTIVITY_KINDS, USERS, seedActivity } from "./fixtures"

/** One icon per activity kind, drawn on the timeline rail. */
function kindIcon(e: ActivityEvent) {
  switch (e.kind) {
    case "comment":
      return <MessageSquare />
    case "status":
      return <CheckCircle2 />
    case "assign":
      return <UserPlus />
    default:
      return <FileUp />
  }
}

/** A project activity feed: day headings, a timeline rail with kind icons, excerpts and kind filters. */
export function ActivityFeedDemo() {
  // "now" fixed for the page: the build's in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  const events = useMemo(() => seedActivity(now), [now])
  return (
    <div className="h-full overflow-y-auto p-4">
      <ActivityFeed events={events} now={now} users={USERS} kinds={ACTIVITY_KINDS} icon={kindIcon} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>s(()=>import(`./activity-feed-Cy_Wtg69.js`),[]));function x(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(n,{title:`Activity feed`,children:`What happened, by whom, grouped by day. Excerpts render the same markup as messages, mentions included.`}),(0,_.jsx)(u,{n:1,title:`A project feed`,blurb:`Kind icons on the rail, filter chips per kind, sticky day headings, relative times.`,code:b,children:(0,_.jsx)(d,{testId:`activity`,height:520,children:(0,_.jsx)(y,{})})})]})}export{x as component};