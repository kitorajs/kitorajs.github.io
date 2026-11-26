import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-CiJzHfYx.js";import{a as r,c as i,i as a,l as o,n as s,r as c,s as l}from"./trace-D-TD-fec.js";import{Bc as u,Cc as d,Ic as f,ti as p}from"./index-B9ukmIN1.js";import{t as m}from"./badge-uhFB8J9R.js";import{a as h,n as g,o as _,t as v}from"./card-B_Tor3B1.js";var y=e({TraceComposeDeploy:()=>x}),b=f();function x(){return(0,b.jsxs)(v,{className:`w-full max-w-md`,children:[(0,b.jsxs)(h,{className:`flex flex-row items-center justify-between gap-2`,children:[(0,b.jsx)(_,{children:`Deploy #482`}),(0,b.jsx)(m,{variant:`secondary`,children:`2 of 3`})]}),(0,b.jsx)(g,{children:(0,b.jsxs)(s,{label:`Deploy steps`,children:[(0,b.jsx)(l,{status:`done`,title:`Built`,startedAt:0,endedAt:38e3}),(0,b.jsx)(l,{status:`done`,title:`Uploaded to the edge`,startedAt:38e3,endedAt:45200,description:`214 files`}),(0,b.jsx)(l,{status:`running`,title:`Warming caches`,defaultOpen:!0,children:(0,b.jsx)(c,{children:`eu-west · us-east · ap-south`})})]})})]})}var S=e({TraceControlled:()=>w}),C=t(u(),1);function w(){let[e,t]=(0,C.useState)(!0),[r,i]=(0,C.useState)(()=>Date.now()),[a,o]=(0,C.useState)();return(0,b.jsxs)(`div`,{className:`flex w-full max-w-lg flex-col gap-3`,children:[(0,b.jsxs)(`label`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,b.jsx)(n,{checked:e,onCheckedChange:e=>{e&&i(Date.now()),t(e)}}),`Step running`]}),(0,b.jsx)(s,{label:`Build`,children:(0,b.jsx)(l,{status:e?`running`:`done`,title:e?`Building the site`:`Built the site`,startedAt:r,endedAt:e?void 0:r+38e3,open:a??e,onOpenChange:o,children:(0,b.jsx)(c,{children:`vite build
214 modules transformed
dist/index.html  1.2 kB`})})})]})}var T=e({TraceData:()=>D}),E=[{id:`plan`,title:`Planned the fix`,status:`done`,startedAt:0,endedAt:2400,detail:`Read the failing test, find the commit, patch it, rerun.`},{id:`explore`,title:`Explored the repo`,status:`done`,description:`4 files`,startedAt:2400,endedAt:9100,children:[{id:`grep`,title:`Searched for checkout`,status:`done`,description:`17 matches`},{id:`read`,title:`Read src/checkout/submit.ts`,status:`done`}]},{id:`patch`,title:`Patching submit.ts`,status:`running`,detail:`- await page.click('#checkout')
+ await page.getByRole('button', { name: 'Checkout' }).click()`},{id:`test`,title:`Run the e2e suite`,status:`pending`}];function D(){return(0,b.jsx)(`div`,{className:`w-full max-w-lg`,children:(0,b.jsx)(s,{label:`Fix run`,steps:E})})}var O=e({TraceDefault:()=>A}),k=[[`running`,`pending`,`pending`],[`done`,`running`,`pending`],[`done`,`done`,`running`],[`done`,`done`,`error`]];function A(){let[e,t]=(0,C.useState)(0),[n,r,a]=k[e]??k[0];return(0,b.jsxs)(`div`,{className:`flex w-full max-w-lg flex-col gap-3`,children:[(0,b.jsxs)(s,{label:`Agent steps`,children:[(0,b.jsx)(l,{status:n,title:n===`running`?`Searching the web`:`Searched the web`,description:`vite 8 release notes · 12 results`,children:(0,b.jsx)(c,{children:`query: "vite 8 release notes"
limit: 12`})}),(0,b.jsx)(l,{status:r,title:r===`running`?`Reading sources`:`Read 3 sources`,children:(0,b.jsxs)(i,{children:[(0,b.jsx)(l,{status:r===`pending`?`pending`:`done`,title:`vitejs.dev/blog`}),(0,b.jsx)(l,{status:r===`pending`?`pending`:`done`,title:`github.com/vitejs/vite/releases`}),(0,b.jsx)(l,{status:`skipped`,title:`news.example.com`,description:`Paywalled, skipped`})]})}),(0,b.jsx)(l,{status:a,title:`Write the summary`,description:a===`error`?`The model stopped: context window full`:void 0})]}),(0,b.jsxs)(`div`,{className:`flex gap-2`,children:[(0,b.jsx)(p,{size:`sm`,variant:`outline`,onClick:()=>t(e=>(e+1)%k.length),children:`Next step`}),(0,b.jsx)(p,{size:`sm`,variant:`ghost`,onClick:()=>t(0),children:`Restart`})]})]})}var j=e({TracePresets:()=>M});function M(){return(0,b.jsxs)(`div`,{className:`flex w-full max-w-lg flex-col gap-3`,children:[(0,b.jsx)(a,{steps:[{id:`1`,title:`Reproduce the timeout`,status:`done`},{id:`2`,title:`Find the commit that broke it`,status:`done`},{id:`3`,title:`Patch the selector`,status:`running`},{id:`4`,title:`Rerun the e2e suite`,status:`pending`},{id:`5`,title:`Email on-call`,status:`pending`}]}),(0,b.jsx)(r,{items:[{id:`a`,title:`Resize hero.png`,status:`done`},{id:`b`,title:`Resize team.jpg`,status:`done`},{id:`c`,title:`Resize office.jpg`,status:`done`},{id:`d`,title:`Resize logo.svg`,status:`running`},{id:`e`,title:`Resize banner.webp`,status:`queued`},{id:`f`,title:`Resize footer.png`,status:`queued`}]}),(0,b.jsx)(o,{name:`Explore`,summary:`Explored 12 files · 34s`,defaultOpen:!0,steps:[{id:`g`,title:`Listed src/checkout`,status:`done`,description:`12 files`},{id:`r`,title:`Read submit.ts and cart.ts`,status:`done`},{id:`s`,title:`Summarised the flow`,status:`done`}]})]})}var N=`import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Trace, TraceDetail, TraceStep } from "@kitora/ai-chat/ui"

export function TraceComposeDeploy() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>Deploy #482</CardTitle>
        <Badge variant="secondary">2 of 3</Badge>
      </CardHeader>
      <CardContent>
        <Trace label="Deploy steps">
          <TraceStep status="done" title="Built" startedAt={0} endedAt={38_000} />
          <TraceStep status="done" title="Uploaded to the edge" startedAt={38_000} endedAt={45_200} description="214 files" />
          <TraceStep status="running" title="Warming caches" defaultOpen>
            <TraceDetail>eu-west · us-east · ap-south</TraceDetail>
          </TraceStep>
        </Trace>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>d(()=>import(`./compose-DDkqCiTZ.js`),[]));var P=`import { useState } from "react"
import { Trace, TraceDetail, TraceStep } from "@kitora/ai-chat/ui"
import { Switch } from "@kitora/ui/switch"

export function TraceControlled() {
  const [running, setRunning] = useState(true)
  const [startedAt, setStartedAt] = useState(() => Date.now())
  // The streaming pattern: open while it runs, closed once done, and the reader's own click wins from then on.
  const [userOpen, setUserOpen] = useState<boolean>()
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <label className="flex items-center gap-2 text-[13px]">
        <Switch
          checked={running}
          onCheckedChange={(next) => {
            if (next) setStartedAt(Date.now())
            setRunning(next)
          }}
        />
        Step running
      </label>
      <Trace label="Build">
        <TraceStep status={running ? "running" : "done"} title={running ? "Building the site" : "Built the site"} startedAt={startedAt} endedAt={running ? undefined : startedAt + 38_000} open={userOpen ?? running} onOpenChange={setUserOpen}>
          <TraceDetail>{"vite build\\n214 modules transformed\\ndist/index.html  1.2 kB"}</TraceDetail>
        </TraceStep>
      </Trace>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./controlled-CpkFKkmO.js`),[]));var F=`import { Trace, type TraceStepData } from "@kitora/ai-chat/ui"

// Steps as data: each with detail or children folds, and a running one is open until you toggle it.
const STEPS: readonly TraceStepData[] = [
  { id: "plan", title: "Planned the fix", status: "done", startedAt: 0, endedAt: 2400, detail: "Read the failing test, find the commit, patch it, rerun." },
  {
    id: "explore",
    title: "Explored the repo",
    status: "done",
    description: "4 files",
    startedAt: 2400,
    endedAt: 9100,
    children: [
      { id: "grep", title: "Searched for checkout", status: "done", description: "17 matches" },
      { id: "read", title: "Read src/checkout/submit.ts", status: "done" },
    ],
  },
  { id: "patch", title: "Patching submit.ts", status: "running", detail: "- await page.click('#checkout')\\n+ await page.getByRole('button', { name: 'Checkout' }).click()" },
  { id: "test", title: "Run the e2e suite", status: "pending" },
]

export function TraceData() {
  return (
    <div className="w-full max-w-lg">
      <Trace label="Fix run" steps={STEPS} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./data-BHhlnYiN.js`),[]));var I=`import { useState } from "react"
import { Trace, TraceDetail, TraceStep, TraceSteps, type TraceStatus } from "@kitora/ai-chat/ui"
import { Button } from "@kitora/ui/button"

// The order a run moves through; "Next step" walks it so you can watch a step run, finish and fold.
const RUN: readonly (readonly TraceStatus[])[] = [
  ["running", "pending", "pending"],
  ["done", "running", "pending"],
  ["done", "done", "running"],
  ["done", "done", "error"],
]

export function TraceDefault() {
  const [tick, setTick] = useState(0)
  const [search, read, write] = RUN[tick] ?? RUN[0]!
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Trace label="Agent steps">
        <TraceStep status={search} title={search === "running" ? "Searching the web" : "Searched the web"} description="vite 8 release notes · 12 results">
          <TraceDetail>{\`query: "vite 8 release notes"\\nlimit: 12\`}</TraceDetail>
        </TraceStep>
        <TraceStep status={read} title={read === "running" ? "Reading sources" : "Read 3 sources"}>
          <TraceSteps>
            <TraceStep status={read === "pending" ? "pending" : "done"} title="vitejs.dev/blog" />
            <TraceStep status={read === "pending" ? "pending" : "done"} title="github.com/vitejs/vite/releases" />
            <TraceStep status="skipped" title="news.example.com" description="Paywalled, skipped" />
          </TraceSteps>
        </TraceStep>
        <TraceStep status={write} title="Write the summary" description={write === "error" ? "The model stopped: context window full" : undefined} />
      </Trace>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setTick((t) => (t + 1) % RUN.length)}>
          Next step
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setTick(0)}>
          Restart
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>d(()=>import(`./default-DEWNp_oe.js`),[]));var L=`import { TracePlan, TraceQueue, TraceSubagent } from "@kitora/ai-chat/ui"

export function TracePresets() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <TracePlan
        steps={[
          { id: "1", title: "Reproduce the timeout", status: "done" },
          { id: "2", title: "Find the commit that broke it", status: "done" },
          { id: "3", title: "Patch the selector", status: "running" },
          { id: "4", title: "Rerun the e2e suite", status: "pending" },
          { id: "5", title: "Email on-call", status: "pending" },
        ]}
      />
      <TraceQueue
        items={[
          { id: "a", title: "Resize hero.png", status: "done" },
          { id: "b", title: "Resize team.jpg", status: "done" },
          { id: "c", title: "Resize office.jpg", status: "done" },
          { id: "d", title: "Resize logo.svg", status: "running" },
          { id: "e", title: "Resize banner.webp", status: "queued" },
          { id: "f", title: "Resize footer.png", status: "queued" },
        ]}
      />
      <TraceSubagent
        name="Explore"
        summary="Explored 12 files · 34s"
        defaultOpen
        steps={[
          { id: "g", title: "Listed src/checkout", status: "done", description: "12 files" },
          { id: "r", title: "Read submit.ts and cart.ts", status: "done" },
          { id: "s", title: "Summarised the flow", status: "done" },
        ]}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>d(()=>import(`./presets-r9hA7HKx.js`),[]));var R={"./demos/trace/compose.tsx":y,"./demos/trace/controlled.tsx":S,"./demos/trace/data.tsx":T,"./demos/trace/default.tsx":O,"./demos/trace/presets.tsx":j},z={"./demos/trace/compose.tsx":N,"./demos/trace/controlled.tsx":P,"./demos/trace/data.tsx":F,"./demos/trace/default.tsx":I,"./demos/trace/presets.tsx":L};export{R as modules,z as sources};