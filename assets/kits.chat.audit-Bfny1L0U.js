import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Jo as r,Uc as i,zc as a}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";import{t as s}from"./-kits.chat.shared-DwvlyqHM.js";import{t as c}from"./audit-log-CJ9xxQmG.js";import{o as l,s as u}from"./fixtures-Dj1vgtdl.js";var d=e(i(),1),f=a();function p(){let e=r();return(0,f.jsx)(c,{entries:(0,d.useMemo)(()=>u(320,e),[e]),now:e,users:l,className:`h-full`})}var m=`import { useMemo } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { AuditLogViewer } from "@kitora/chat"
import { USERS, generateAudit } from "./fixtures"

/**
 * An admin audit log: 320 events over ~40 days. Search (press /), filter by actor and action,
 * pick a time window, page with ← and →, and expand a row to see the field-level diff.
 */
export function AuditLogDemo() {
  // "now" fixed for the page: the build's in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  const entries = useMemo(() => generateAudit(320, now), [now])
  return <AuditLogViewer entries={entries} now={now} users={USERS} className="h-full" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./audit-log-C2Ka8You.js`),[]));function h(){let e=r();return(0,f.jsx)(`div`,{dir:`rtl`,className:`h-full`,children:(0,f.jsx)(c,{entries:(0,d.useMemo)(()=>u(120,e),[e]),now:e,users:l,className:`h-full`})})}var g=`import { useMemo } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { AuditLogViewer } from "@kitora/chat"
import { USERS, generateAudit } from "./fixtures"

/**
 * The same audit log inside \`dir="rtl"\`: the toolbar, table and pager mirror, the pager's chevrons point the reading
 * way, and with focus inside the viewer ← turns to the next page and → to the previous one.
 */
export function AuditLogRtlDemo() {
  const now = usePageTime()
  const entries = useMemo(() => generateAudit(120, now), [now])
  return (
    <div dir="rtl" className="h-full">
      <AuditLogViewer entries={entries} now={now} users={USERS} className="h-full" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./audit-log-rtl-D-tKy0K3.js`),[]));function _(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(t,{title:`Audit log`,children:`Who did what to which record, and exactly what changed. With focus inside the viewer: / searches, ← and → page, Escape clears the search.`}),(0,f.jsx)(o,{n:1,title:`An admin audit log`,blurb:`Search across action, resource, actor and IP; facet menus for actor and action group; 24h / 7d / 30d windows; numbered pagination with a page-size menu; expandable field diffs.`,code:m,children:(0,f.jsx)(s,{testId:`audit`,height:600,children:(0,f.jsx)(p,{})})}),(0,f.jsx)(o,{n:2,title:`Right to left`,blurb:'Inside `dir="rtl"` the viewer mirrors: toolbar, table and pager, with the pager\'s chevrons pointing the reading way. With focus inside it, ← turns to the next page and → to the previous one.',code:g,children:(0,f.jsx)(s,{testId:`audit-rtl`,height:600,children:(0,f.jsx)(h,{})})})]})}export{_ as component};