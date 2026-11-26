import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-QnxoqhU6.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as s}from"./example-CZLJLtIC.js";import{a as c,i as l,n as u,o as d}from"./whats-new-Bjieuplb.js";import{t as f}from"./-kits.tour.shared-2PN25Wpc.js";var p=e(r(),1),m=a(),h=[{id:`r-2026-10-15`,date:`2026-10-15`,tag:`New`,title:`Comments on charts`,body:`Pin a comment to any point on a chart; teammates get a link straight to it.`},{id:`r-2026-10-08`,date:`2026-10-08`,tag:`Improved`,title:`Query editor`,body:`Autocomplete for joins and a formatter on ⇧⌥F.`},{id:`r-2026-09-29`,date:`2026-09-29`,tag:`Beta`,title:`Scheduled exports`,body:`Send any dashboard as PDF on a schedule.`},{id:`r-2026-09-12`,date:`2026-09-12`,tag:`Fixed`,title:`Time zones in alerts`,body:`Alerts now fire in the dashboard's zone.`},{id:`r-2026-08-20`,date:`2026-08-20`,tag:`New`,title:`Dark mode`,body:`Follows your system setting.`}],g=[{label:`Long-time user`,since:null},{label:`Signed up Oct 1`,since:`2026-10-01`}];function _(){let[e,n]=(0,p.useState)(g[0]),r=d({id:`showcase-feed`,items:h,since:e.since});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,m.jsxs)(`div`,{className:`flex h-11 items-center gap-2 rounded-lg border bg-card px-3 text-[13px]`,children:[(0,m.jsx)(`span`,{className:`font-semibold`,children:`Acme Analytics`}),(0,m.jsx)(`span`,{className:`flex-1`}),(0,m.jsx)(c,{announcements:r,trigger:(0,m.jsxs)(o,{size:`icon-sm`,variant:`ghost`,className:`relative`,"aria-label":`What's new, ${r.unseenCount} unread`,"data-testid":`bell`,children:[(0,m.jsx)(t,{}),(0,m.jsx)(l,{count:r.unseenCount,className:`absolute -top-0.5 -right-0.5`})]}),footer:(0,m.jsx)(`a`,{href:`#changelog`,className:`text-[12px] text-muted-foreground hover:text-foreground`,children:`Full changelog →`})})]}),(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[g.map(t=>(0,m.jsx)(o,{size:`xs`,variant:t===e?`default`:`outline`,onClick:()=>n(t),children:t.label},t.label)),(0,m.jsx)(o,{size:`xs`,variant:`ghost`,onClick:r.reset,children:`Mark all unread`}),(0,m.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[r.items.length,` visible · `,r.unseenCount,` unread`]})]})]})}var v=`import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { UnseenCount, useAnnouncements, WhatsNew, type Announcement } from "@kitora/tour"

// A header with the feed behind a bell of our own. \`since\` hides what shipped
// before this user signed up, so a new user sees only recent news.
export const RELEASES: readonly Announcement[] = [
  { id: "r-2026-10-15", date: "2026-10-15", tag: "New", title: "Comments on charts", body: "Pin a comment to any point on a chart; teammates get a link straight to it." },
  { id: "r-2026-10-08", date: "2026-10-08", tag: "Improved", title: "Query editor", body: "Autocomplete for joins and a formatter on ⇧⌥F." },
  { id: "r-2026-09-29", date: "2026-09-29", tag: "Beta", title: "Scheduled exports", body: "Send any dashboard as PDF on a schedule." },
  { id: "r-2026-09-12", date: "2026-09-12", tag: "Fixed", title: "Time zones in alerts", body: "Alerts now fire in the dashboard's zone." },
  { id: "r-2026-08-20", date: "2026-08-20", tag: "New", title: "Dark mode", body: "Follows your system setting." },
]

const USERS = [
  { label: "Long-time user", since: null },
  { label: "Signed up Oct 1", since: "2026-10-01" },
] as const

export function AnnouncementsFeed() {
  const [user, setUser] = useState<(typeof USERS)[number]>(USERS[0])
  const announcements = useAnnouncements({ id: "showcase-feed", items: RELEASES, since: user.since })
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-11 items-center gap-2 rounded-lg border bg-card px-3 text-[13px]">
        <span className="font-semibold">Acme Analytics</span>
        <span className="flex-1" />
        <WhatsNew
          announcements={announcements}
          trigger={
            <Button size="icon-sm" variant="ghost" className="relative" aria-label={\`What's new, \${announcements.unseenCount} unread\`} data-testid="bell">
              <Bell />
              <UnseenCount count={announcements.unseenCount} className="absolute -top-0.5 -right-0.5" />
            </Button>
          }
          footer={
            <a href="#changelog" className="text-[12px] text-muted-foreground hover:text-foreground">
              Full changelog →
            </a>
          }
        />
      </div>
      <div className="flex flex-wrap items-center gap-1">
        {USERS.map((u) => (
          <Button key={u.label} size="xs" variant={u === user ? "default" : "outline"} onClick={() => setUser(u)}>
            {u.label}
          </Button>
        ))}
        <Button size="xs" variant="ghost" onClick={announcements.reset}>
          Mark all unread
        </Button>
        <span className="text-[12px] text-muted-foreground tabular-nums">
          {announcements.items.length} visible · {announcements.unseenCount} unread
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./announcements-feed-D3n1a_pe.js`),[]));var y=[{id:`r-2026-10-15`,date:`2026-10-15`,tag:`New`,title:`Comments on charts`,body:`Pin a comment to any point on a chart; teammates get a link straight to it.`},{id:`r-2026-10-08`,date:`2026-10-08`,tag:`Improved`,title:`Query editor`,body:`Autocomplete for joins and a formatter on ⇧⌥F.`},{id:`r-2026-09-29`,date:`2026-09-29`,tag:`Beta`,title:`Scheduled exports`,body:`Send any dashboard as PDF on a schedule.`},{id:`r-2026-09-12`,date:`2026-09-12`,tag:`Fixed`,title:`Time zones in alerts`,body:`Alerts now fire in the dashboard's zone.`},{id:`r-2026-08-20`,date:`2026-08-20`,tag:`New`,title:`Dark mode`,body:`Follows your system setting.`}];function b(){let e=d({id:`showcase-feed`,items:y});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(`h2`,{className:`flex-1 text-[15px] font-semibold`,children:`Changelog`}),(0,m.jsx)(o,{size:`xs`,variant:`outline`,onClick:e.markAllSeen,disabled:e.unseenCount===0,children:`Mark all read`})]}),(0,m.jsx)(u,{items:e.items,isUnseen:t=>!e.isSeen(t),className:`rounded-lg border`})]})}var x=`import { Button } from "@kitora/ui/button"
import { AnnouncementList, useAnnouncements, type Announcement } from "@kitora/tour"

// A full changelog page from the same parts: \`AnnouncementList\` with "new" dots
// for what this user has not seen, sharing its seen list with the header feed
// above (same id), so reading one clears the other.

// The same releases as the header feed (the "What's new" file); in an app both read one module or one API.
const RELEASES: readonly Announcement[] = [
  { id: "r-2026-10-15", date: "2026-10-15", tag: "New", title: "Comments on charts", body: "Pin a comment to any point on a chart; teammates get a link straight to it." },
  { id: "r-2026-10-08", date: "2026-10-08", tag: "Improved", title: "Query editor", body: "Autocomplete for joins and a formatter on ⇧⌥F." },
  { id: "r-2026-09-29", date: "2026-09-29", tag: "Beta", title: "Scheduled exports", body: "Send any dashboard as PDF on a schedule." },
  { id: "r-2026-09-12", date: "2026-09-12", tag: "Fixed", title: "Time zones in alerts", body: "Alerts now fire in the dashboard's zone." },
  { id: "r-2026-08-20", date: "2026-08-20", tag: "New", title: "Dark mode", body: "Follows your system setting." },
]

export function ChangelogPage() {
  const announcements = useAnnouncements({ id: "showcase-feed", items: RELEASES })
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h2 className="flex-1 text-[15px] font-semibold">Changelog</h2>
        <Button size="xs" variant="outline" onClick={announcements.markAllSeen} disabled={announcements.unseenCount === 0}>
          Mark all read
        </Button>
      </div>
      <AnnouncementList items={announcements.items} isUnseen={(id) => !announcements.isSeen(id)} className="rounded-lg border" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./changelog-CI9bvEVa.js`),[]));function S(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{title:`What's new`,children:`Announcements are dated data; what each user has seen is a persisted list behind the storage seam.`}),(0,m.jsx)(s,{n:1,title:`A feed behind a bell`,blurb:`Our own trigger with the unread count. Switch to a user who signed up on Oct 1: older news is hidden.`,code:v,children:(0,m.jsx)(f,{testId:`feed`,children:(0,m.jsx)(_,{})})}),(0,m.jsx)(s,{n:2,title:`Changelog page`,blurb:`The same list as a page, sharing the seen state with the bell above: open the bell and the dots here clear.`,code:x,children:(0,m.jsx)(f,{testId:`changelog`,children:(0,m.jsx)(b,{})})})]})}export{S as component};