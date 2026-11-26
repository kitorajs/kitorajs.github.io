import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./circle-check-CEqScjDT.js";import{t as n}from"./circle-DXq-4qCx.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{t as i}from"./rocket-DlwnT5g4.js";import{n as a}from"./popover-BAdhjENt.js";import{Bc as o,Cc as s,Ic as c,hi as l,ti as u}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{i as f,r as p,t as m}from"./checklist-B8SLAtz4.js";import{i as h}from"./target-BGFN9UV-.js";import{r as g,t as _}from"./tour-CWMyRUP1.js";import{t as v}from"./-kits.tour.shared-2PN25Wpc.js";var y=e(o(),1),b=c(),x=[{id:`tour-editor`,title:`Learn the editor`,description:`A two-step tour of the toolbar.`},{id:`connect`,title:`Connect a data source`,description:`Postgres, BigQuery or a CSV.`},{id:`tour-share`,title:`Share a dashboard`,description:`A two-step tour of sharing.`}],S={"tour-editor":[{id:`query`,target:`cl-query`,title:`Write a query`,body:`SQL with autocomplete for your tables.`},{id:`run`,target:`cl-run`,title:`Run it`,body:`⌘↵ runs the query under the cursor.`}],"tour-share":[{id:`share`,target:`cl-share`,title:`Share`,body:`Anyone with the link, or only your team.`,side:`left`},{id:`embed`,target:`cl-share`,title:`Embed`,body:`Copy an iframe snippet from the same menu.`,side:`left`}]};function C(){let e=p({id:`showcase-launcher`,items:x}),[t,n]=(0,y.useState)(null),[r,o]=(0,y.useState)(!1),s=g({id:`showcase-launcher-tour`,steps:(0,y.useMemo)(()=>t?S[t]??[]:[],[t]),storage:null,onComplete:()=>{t&&e.complete(t),n(null)},onSkip:()=>n(null)}),c=e=>{o(!1),n(e),requestAnimationFrame(()=>s.start())},{done:l,total:d}=e.progress;return(0,b.jsxs)(`div`,{className:`relative flex h-64 flex-col gap-2 rounded-lg border bg-card p-3 text-[13px]`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`font-medium`,children:`Revenue dashboard`}),(0,b.jsx)(`span`,{className:`flex-1`}),(0,b.jsx)(u,{size:`sm`,variant:`outline`,onClick:()=>e.complete(`connect`),children:`Connect source`}),(0,b.jsx)(u,{size:`sm`,variant:`outline`,...h(`cl-share`),children:`Share`})]}),(0,b.jsx)(`div`,{...h(`cl-query`),className:`flex-1 rounded-md border bg-muted/40 p-2 font-mono text-[12px] text-muted-foreground`,children:`select date, sum(amount) from orders group by 1`}),(0,b.jsx)(`div`,{children:(0,b.jsx)(u,{size:`sm`,...h(`cl-run`),children:`Run`})}),e.state.dismissed?null:(0,b.jsx)(`div`,{className:`absolute right-3 bottom-3`,children:(0,b.jsx)(a,{name:`Get started`,open:r,onOpenChange:o,side:`top`,align:`end`,className:`w-80 gap-0 p-0`,trigger:(0,b.jsxs)(u,{size:`sm`,className:`rounded-full shadow-md`,"data-testid":`launcher-button`,children:[(0,b.jsx)(i,{}),` Get started`,(0,b.jsxs)(`span`,{className:`rounded-full bg-primary-foreground px-1.5 text-[11px] font-medium text-primary tabular-nums`,children:[l,`/`,d]})]}),children:(0,b.jsxs)(m.Root,{checklist:e,className:`border-0 shadow-none`,children:[(0,b.jsxs)(m.Header,{children:[(0,b.jsx)(m.Title,{}),(0,b.jsx)(m.Count,{}),(0,b.jsx)(m.Dismiss,{})]}),(0,b.jsx)(m.Bar,{}),(0,b.jsx)(m.Items,{children:(e,t)=>(0,b.jsx)(m.Item,{item:e,state:t,manual:!1,action:e.id in S?(0,b.jsx)(u,{size:`xs`,onClick:()=>c(e.id),children:`Show me`}):null})}),(0,b.jsx)(m.Complete,{})]})})}),e.state.dismissed||e.progress.complete?(0,b.jsx)(u,{size:`xs`,variant:`ghost`,className:`absolute bottom-3 left-3 text-muted-foreground`,onClick:e.reset,children:`Reset checklist`}):null,(0,b.jsx)(_,{tour:s,progress:`text`})]})}var w=`import { useMemo, useState } from "react"
import { Rocket } from "lucide-react"
import { Popover } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Checklist, ProductTour, tourTarget, useChecklist, useTour, type ChecklistItem, type ReactTourStep } from "@kitora/tour"

// A floating "Get started" launcher that opens the checklist in a popover.
// Two tasks start a short tour; finishing the tour ticks the task. One task is
// ticked by the app when the real thing happens (connecting a source).
const TASKS: readonly ChecklistItem[] = [
  { id: "tour-editor", title: "Learn the editor", description: "A two-step tour of the toolbar." },
  { id: "connect", title: "Connect a data source", description: "Postgres, BigQuery or a CSV." },
  { id: "tour-share", title: "Share a dashboard", description: "A two-step tour of sharing." },
]

const TOURS: { readonly [id: string]: readonly ReactTourStep[] } = {
  "tour-editor": [
    { id: "query", target: "cl-query", title: "Write a query", body: "SQL with autocomplete for your tables." },
    { id: "run", target: "cl-run", title: "Run it", body: "⌘↵ runs the query under the cursor." },
  ],
  "tour-share": [
    { id: "share", target: "cl-share", title: "Share", body: "Anyone with the link, or only your team.", side: "left" },
    { id: "embed", target: "cl-share", title: "Embed", body: "Copy an iframe snippet from the same menu.", side: "left" },
  ],
}

export function ChecklistLauncher() {
  const checklist = useChecklist({ id: "showcase-launcher", items: TASKS })
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const steps = useMemo(() => (active ? (TOURS[active] ?? []) : []), [active])
  const tour = useTour({
    id: "showcase-launcher-tour",
    steps,
    storage: null,
    onComplete: () => {
      if (active) checklist.complete(active)
      setActive(null)
    },
    onSkip: () => setActive(null),
  })
  const startTour = (id: string) => {
    setOpen(false)
    setActive(id)
    // Start after the steps for this task are in place.
    requestAnimationFrame(() => tour.start())
  }
  const { done, total } = checklist.progress
  return (
    <div className="relative flex h-64 flex-col gap-2 rounded-lg border bg-card p-3 text-[13px]">
      <div className="flex items-center gap-2">
        <span className="font-medium">Revenue dashboard</span>
        <span className="flex-1" />
        <Button size="sm" variant="outline" onClick={() => checklist.complete("connect")}>
          Connect source
        </Button>
        <Button size="sm" variant="outline" {...tourTarget("cl-share")}>
          Share
        </Button>
      </div>
      <div {...tourTarget("cl-query")} className="flex-1 rounded-md border bg-muted/40 p-2 font-mono text-[12px] text-muted-foreground">
        select date, sum(amount) from orders group by 1
      </div>
      <div>
        <Button size="sm" {...tourTarget("cl-run")}>
          Run
        </Button>
      </div>
      {checklist.state.dismissed ? null : (
        <div className="absolute right-3 bottom-3">
          <Popover
            name="Get started"
            open={open}
            onOpenChange={setOpen}
            side="top"
            align="end"
            className="w-80 gap-0 p-0"
            trigger={
              <Button size="sm" className="rounded-full shadow-md" data-testid="launcher-button">
                <Rocket /> Get started
                <span className="rounded-full bg-primary-foreground px-1.5 text-[11px] font-medium text-primary tabular-nums">
                  {done}/{total}
                </span>
              </Button>
            }
          >
            <Checklist.Root checklist={checklist} className="border-0 shadow-none">
              <Checklist.Header>
                <Checklist.Title />
                <Checklist.Count />
                <Checklist.Dismiss />
              </Checklist.Header>
              <Checklist.Bar />
              <Checklist.Items>
                {(item, state) => (
                  <Checklist.Item
                    item={item}
                    state={state}
                    manual={false}
                    action={
                      item.id in TOURS ? (
                        <Button size="xs" onClick={() => startTour(item.id)}>
                          Show me
                        </Button>
                      ) : null
                    }
                  />
                )}
              </Checklist.Items>
              <Checklist.Complete />
            </Checklist.Root>
          </Popover>
        </div>
      )}
      {checklist.state.dismissed || checklist.progress.complete ? (
        <Button size="xs" variant="ghost" className="absolute bottom-3 left-3 text-muted-foreground" onClick={checklist.reset}>
          Reset checklist
        </Button>
      ) : null}
      <ProductTour tour={tour} progress="text" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./checklist-launcher-B_cZbKWm.js`),[]));var T=[{id:`domain`,title:`Add your domain`,description:`Point a CNAME at us.`},{id:`brand`,title:`Upload a logo`,description:`Shown on emails and invoices.`},{id:`payments`,title:`Turn on payments`,description:`Stripe or PayPal.`},{id:`launch`,title:`Go live`,description:`Publish your store.`}],E=2*Math.PI*16;function D(){let e=p({id:`showcase-cards`,items:T}),{percent:r}=f(T,e.state);return(0,b.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,b.jsxs)(`svg`,{viewBox:`0 0 40 40`,className:`size-16 shrink-0 -rotate-90`,role:`img`,"aria-label":`${r}% set up`,children:[(0,b.jsx)(`circle`,{cx:`20`,cy:`20`,r:`16`,className:`fill-none stroke-muted`,strokeWidth:`4`}),(0,b.jsx)(`circle`,{cx:`20`,cy:`20`,r:`16`,className:`fill-none stroke-primary transition-[stroke-dashoffset] duration-300`,strokeWidth:`4`,strokeLinecap:`round`,strokeDasharray:E,strokeDashoffset:E*(1-r/100)})]}),(0,b.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-2`,children:T.map(r=>{let i=e.isDone(r.id);return(0,b.jsxs)(`button`,{type:`button`,"aria-pressed":i,onClick:()=>e.toggle(r.id),className:l(`flex flex-col gap-1 rounded-lg border p-2 text-left text-[13px] transition-colors hover:bg-muted/60`,i&&`border-primary/40 bg-primary/5`),children:[i?(0,b.jsx)(t,{className:`size-4 text-primary`}):(0,b.jsx)(n,{className:`size-4 text-muted-foreground`}),(0,b.jsx)(`span`,{className:`font-medium`,children:r.title}),(0,b.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:r.description})]},r.id)})}),(0,b.jsx)(u,{size:`xs`,variant:`ghost`,onClick:e.reset,children:`Reset`})]})}var O=`import { CheckCircle2, Circle } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { checklistProgress, useChecklist, type ChecklistItem } from "@kitora/tour"

// The same checklist state with markup of our own: a row of setup cards and a
// percentage ring. Only \`useChecklist\` from the kit; the progress maths is the
// core's \`checklistProgress\`, which also runs on a server.
const ITEMS: readonly ChecklistItem[] = [
  { id: "domain", title: "Add your domain", description: "Point a CNAME at us." },
  { id: "brand", title: "Upload a logo", description: "Shown on emails and invoices." },
  { id: "payments", title: "Turn on payments", description: "Stripe or PayPal." },
  { id: "launch", title: "Go live", description: "Publish your store." },
]

const RING = 2 * Math.PI * 16

export function ChecklistCards() {
  const checklist = useChecklist({ id: "showcase-cards", items: ITEMS })
  const { percent } = checklistProgress(ITEMS, checklist.state)
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="size-16 shrink-0 -rotate-90" role="img" aria-label={\`\${percent}% set up\`}>
        <circle cx="20" cy="20" r="16" className="fill-none stroke-muted" strokeWidth="4" />
        <circle cx="20" cy="20" r="16" className="fill-none stroke-primary transition-[stroke-dashoffset] duration-300" strokeWidth="4" strokeLinecap="round" strokeDasharray={RING} strokeDashoffset={RING * (1 - percent / 100)} />
      </svg>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {ITEMS.map((item) => {
          const done = checklist.isDone(item.id)
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={done}
              onClick={() => checklist.toggle(item.id)}
              className={cn("flex flex-col gap-1 rounded-lg border p-2 text-left text-[13px] transition-colors hover:bg-muted/60", done && "border-primary/40 bg-primary/5")}
            >
              {done ? <CheckCircle2 className="size-4 text-primary" /> : <Circle className="size-4 text-muted-foreground" />}
              <span className="font-medium">{item.title}</span>
              <span className="text-[12px] text-muted-foreground">{item.description}</span>
            </button>
          )
        })}
      </div>
      <Button size="xs" variant="ghost" onClick={checklist.reset}>
        Reset
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>s(()=>import(`./checklist-parts-DGdWrdiX.js`),[]));function k(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(r,{title:`Checklist`,children:`A checklist is items plus a persisted state; tasks are ticked by the user, by the app when the real thing happens, or by a finished tour.`}),(0,b.jsx)(d,{n:1,title:`Floating launcher with tours`,blurb:`Get started opens the checklist; Show me runs a short tour and ticks the task when it ends. Connect source ticks its task from the app.`,code:w,children:(0,b.jsx)(v,{testId:`launcher`,children:(0,b.jsx)(C,{})})}),(0,b.jsx)(d,{n:2,title:`Your own markup`,blurb:"Setup cards and a progress ring over `useChecklist`; the percentage comes from the core.",code:O,children:(0,b.jsx)(v,{testId:`cards`,children:(0,b.jsx)(D,{})})})]})}export{k as component};