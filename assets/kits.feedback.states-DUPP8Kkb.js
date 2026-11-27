import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,t as r}from"./tabs-OlNP7cG6.js";import{s as i}from"./kit-docs-Cf27Kpa-.js";import{t as a}from"./rocket-CyiOKCJw.js";import{t as o}from"./search-x-Cz8EhFfw.js";import{i as s,r as c,t as l}from"./states-D5tVDvyv.js";import{Ec as u,Pi as d,Uc as f,ri as p,zc as m}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as h}from"./example-B67lLz1F.js";import{t as g}from"./-kits.feedback.shared-BPeKgepB.js";var _=d(`funnel-x`,[[`path`,{d:`M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473`,key:`ol2ft2`}],[`path`,{d:`m16.5 3.5 5 5`,key:`15e6fa`}],[`path`,{d:`m21.5 3.5-5 5`,key:`m0lwru`}]]),v=e(f(),1),y=m();function b(){let[e,t]=(0,v.useState)(`quarterly report 2019`);return(0,y.jsxs)(`div`,{className:`grid h-full gap-3 p-4 md:grid-cols-3`,children:[(0,y.jsx)(l,{bordered:!0,size:`sm`,icon:(0,y.jsx)(a,{}),title:`Create your first dashboard`,description:`Dashboards pull charts from any project into one view.`,actions:(0,y.jsx)(p,{size:`xs`,children:`New dashboard`})}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-dashed`,children:[(0,y.jsx)(`div`,{className:`border-b p-2`,children:(0,y.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),"aria-label":`Search`,className:`h-7 w-full rounded-md border bg-background px-2 text-[13px]`})}),(0,y.jsx)(l,{size:`sm`,icon:(0,y.jsx)(o,{}),title:e?(0,y.jsxs)(y.Fragment,{children:[`No results for “`,e,`”`]}):`Type to search`,description:e?`Check the spelling or search all workspaces.`:void 0,actions:e?(0,y.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>t(``),children:`Clear search`}):void 0})]}),(0,y.jsx)(l,{bordered:!0,size:`sm`,icon:(0,y.jsx)(_,{}),title:`No tasks match these filters`,description:`Assignee: Ravi · Status: Blocked · Due this week`,actions:(0,y.jsx)(p,{size:`xs`,variant:`outline`,children:`Clear filters`})})]})}var x=`import { useState } from "react"
import { FilterX, Rocket, SearchX } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { EmptyState } from "@kitora/feedback"

/** The three empties every list has: never used, searched with no hits, filtered to nothing. */
export function EmptyStates() {
  const [query, setQuery] = useState("quarterly report 2019")
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-3">
      <EmptyState
        bordered
        size="sm"
        icon={<Rocket />}
        title="Create your first dashboard"
        description="Dashboards pull charts from any project into one view."
        actions={<Button size="xs">New dashboard</Button>}
      />
      <div className="rounded-xl border border-dashed">
        <div className="border-b p-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search" className="h-7 w-full rounded-md border bg-background px-2 text-[13px]" />
        </div>
        <EmptyState
          size="sm"
          icon={<SearchX />}
          title={query ? <>No results for “{query}”</> : "Type to search"}
          description={query ? "Check the spelling or search all workspaces." : undefined}
          actions={query ? <Button size="xs" variant="outline" onClick={() => setQuery("")}>Clear search</Button> : undefined}
        />
      </div>
      <EmptyState
        bordered
        size="sm"
        icon={<FilterX />}
        title="No tasks match these filters"
        description="Assignee: Ravi · Status: Blocked · Due this week"
        actions={<Button size="xs" variant="outline">Clear filters</Button>}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>u(()=>import(`./empty-states-DCZAYhm3.js`),[]));function S(){let[e,i]=(0,v.useState)(`success`);return(0,y.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,y.jsx)(r,{value:e,onValueChange:e=>{let t=c.find(t=>t===e);t&&i(t)},className:`border-b px-2`,children:(0,y.jsx)(n,{variant:`line`,"aria-label":`Result status`,className:`h-8 p-0`,children:c.map(e=>(0,y.jsx)(t,{value:e,className:`h-8 flex-none px-2.5 font-mono text-[11px]`,children:e},e))})}),(0,y.jsx)(`div`,{className:`grid flex-1 place-items-center`,children:e===`success`?(0,y.jsx)(s,{status:`success`,title:`Payment successful`,description:`₹12,400 was charged to Visa ··4242.`,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{size:`sm`,children:`View receipt`}),(0,y.jsx)(p,{size:`sm`,variant:`outline`,children:`Back to billing`})]}),children:(0,y.jsxs)(`dl`,{className:`grid grid-cols-2 gap-y-1 rounded-lg border p-3 text-left text-[12px]`,children:[(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`Invoice`}),(0,y.jsx)(`dd`,{className:`text-right font-mono tabular-nums`,children:`INV-20931`}),(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`Date`}),(0,y.jsx)(`dd`,{className:`text-right tabular-nums`,children:`15 Oct 2026`})]})}):e===`error`?(0,y.jsx)(s,{status:`error`,title:`Import failed`,description:`Row 214 has a date we couldn't read. Nothing was imported.`,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{size:`sm`,children:`Fix and retry`}),(0,y.jsx)(p,{size:`sm`,variant:`outline`,children:`Download error report`})]})}):e===`500`?(0,y.jsx)(s,{status:`500`,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{size:`sm`,children:`Try again`}),(0,y.jsx)(p,{size:`sm`,variant:`ghost`,children:`Status page`})]}),children:(0,y.jsx)(`p`,{className:`font-mono text-[11px] text-muted-foreground`,children:`Error id 7f3a-91c2 · copy this when you contact support`})}):(0,y.jsx)(s,{status:e,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{size:`sm`,children:e===`403`?`Request access`:`Continue`}),(0,y.jsx)(p,{size:`sm`,variant:`outline`,children:`Go home`})]})})})]})}var C=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { RESULT_STATUSES, ResultPage, type ResultStatus } from "@kitora/feedback"

/** Every result status with the actions a real page would offer. Pick one above the frame. */
export function ResultPages() {
  const [status, setStatus] = useState<ResultStatus>("success")
  return (
    <div className="flex h-full flex-col">
      <Tabs
        value={status}
        onValueChange={(value) => {
          const next = RESULT_STATUSES.find((s) => s === value)
          if (next) setStatus(next)
        }}
        className="border-b px-2"
      >
        <TabsList variant="line" aria-label="Result status" className="h-8 p-0">
          {RESULT_STATUSES.map((s) => (
            <TabsTrigger key={s} value={s} className="h-8 flex-none px-2.5 font-mono text-[11px]">
              {s}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="grid flex-1 place-items-center">
        {status === "success" ? (
          <ResultPage status="success" title="Payment successful" description="₹12,400 was charged to Visa ··4242." actions={<><Button size="sm">View receipt</Button><Button size="sm" variant="outline">Back to billing</Button></>}>
            <dl className="grid grid-cols-2 gap-y-1 rounded-lg border p-3 text-left text-[12px]">
              <dt className="text-muted-foreground">Invoice</dt>
              <dd className="text-right font-mono tabular-nums">INV-20931</dd>
              <dt className="text-muted-foreground">Date</dt>
              <dd className="text-right tabular-nums">15 Oct 2026</dd>
            </dl>
          </ResultPage>
        ) : status === "error" ? (
          <ResultPage status="error" title="Import failed" description="Row 214 has a date we couldn't read. Nothing was imported." actions={<><Button size="sm">Fix and retry</Button><Button size="sm" variant="outline">Download error report</Button></>} />
        ) : status === "500" ? (
          <ResultPage status="500" actions={<><Button size="sm">Try again</Button><Button size="sm" variant="ghost">Status page</Button></>}>
            <p className="font-mono text-[11px] text-muted-foreground">Error id 7f3a-91c2 · copy this when you contact support</p>
          </ResultPage>
        ) : (
          <ResultPage status={status} actions={<><Button size="sm">{status === "403" ? "Request access" : "Continue"}</Button><Button size="sm" variant="outline">Go home</Button></>} />
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>u(()=>import(`./result-pages-Dl7EFyb7.js`),[]));function w(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(i,{title:`Empty and result`,children:`What a screen shows when there is nothing to show, and where a flow ends.`}),(0,y.jsx)(h,{n:1,title:`Three kinds of empty`,blurb:`First run, a search with no hits (type in it), and filters that match nothing. Each one names the way out.`,code:x,children:(0,y.jsx)(g,{testId:`empty-states`,children:(0,y.jsx)(b,{})})}),(0,y.jsx)(h,{n:2,title:`Result pages`,blurb:`Success with a receipt, an error with a report, 403, 404 and 500 with an error id.`,code:C,children:(0,y.jsx)(g,{testId:`result-pages`,height:420,children:(0,y.jsx)(S,{})})})]})}export{w as component};