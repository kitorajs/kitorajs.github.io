import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./circle-check-XWal_js-.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./file-up-BL4_uIVy.js";import{t as i}from"./message-square-CvbuViJy.js";import{t as a}from"./user-plus-DJ5De1-1.js";import{Ec as o,Jo as s,Uc as c,zc as l}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as u}from"./example-B67lLz1F.js";import{t as d}from"./-kits.chat.shared-DwvlyqHM.js";import{t as f}from"./activity-CS_xU4t1.js";import{c as p,o as m,t as h}from"./fixtures-Dj1vgtdl.js";var g=e(c(),1),_=l();function v(e){switch(e.kind){case`comment`:return(0,_.jsx)(i,{});case`status`:return(0,_.jsx)(t,{});case`assign`:return(0,_.jsx)(a,{});default:return(0,_.jsx)(r,{})}}function y(){let e=s();return(0,_.jsx)(`div`,{className:`h-full overflow-y-auto p-4`,children:(0,_.jsx)(f,{events:(0,g.useMemo)(()=>p(e),[e]),now:e,users:m,kinds:h,icon:v})})}var b=`import { useMemo } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>o(()=>import(`./activity-feed-D7G51Udr.js`),[]));function x(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(n,{title:`Activity feed`,children:`What happened, by whom, grouped by day. Excerpts render the same markup as messages, mentions included.`}),(0,_.jsx)(u,{n:1,title:`A project feed`,blurb:`Kind icons on the rail, filter chips per kind, sticky day headings, relative times.`,code:b,children:(0,_.jsx)(d,{testId:`activity`,height:520,children:(0,_.jsx)(y,{})})})]})}export{x as component};