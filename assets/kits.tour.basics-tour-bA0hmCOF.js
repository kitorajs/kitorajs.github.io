import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-QnxoqhU6.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./plus-DkT_QJcZ.js";import{t as i}from"./settings-BYIHPtJX.js";import{Bc as a,Cc as o,Ic as s,ti as c}from"./index-9y5uwRd3.js";import{t as l}from"./search-input-ClqwlIXb.js";import"./kit-gallery-B-Yr9fP4.js";import{t as u}from"./example-CZLJLtIC.js";import{i as d}from"./target-BGFN9UV-.js";import{n as f,r as p,t as m}from"./tour-CWMyRUP1.js";import{t as h}from"./-kits.tour.shared-2PN25Wpc.js";var g=s(),_=[{id:`hello`,title:`Built from parts`,body:"Spotlight, popover, card, header, body, progress and footer: each is a `Tour.*` part."},{id:`alerts`,target:`compose-alerts`,title:`Alerts`,body:`Mentions and assignments land here.`,side:`bottom`,align:`start`},{id:`settings`,target:`compose-settings`,title:`Settings`,body:`Profile, theme and shortcuts.`,side:`left`}];function v(){let e=p({id:`basics-compose`,steps:_,storage:null});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border bg-card p-2`,children:[(0,g.jsx)(`span`,{className:`flex-1 px-1 text-[13px] font-medium`,children:`Acme`}),(0,g.jsx)(c,{size:`icon-sm`,variant:`ghost`,"aria-label":`Alerts`,...d(`compose-alerts`),children:(0,g.jsx)(t,{})}),(0,g.jsx)(c,{size:`icon-sm`,variant:`ghost`,"aria-label":`Settings`,...d(`compose-settings`),children:(0,g.jsx)(i,{})})]}),(0,g.jsx)(`div`,{children:(0,g.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>e.start(),"data-testid":`start-compose`,children:`Start the composed tour`})}),e.running?(0,g.jsxs)(f.Root,{tour:e,children:[(0,g.jsx)(f.Spotlight,{}),(0,g.jsx)(f.Popover,{children:(0,g.jsxs)(f.Card,{children:[(0,g.jsxs)(f.Header,{children:[(0,g.jsx)(f.Title,{}),(0,g.jsx)(f.Close,{})]}),(0,g.jsx)(f.Body,{}),(0,g.jsxs)(f.Footer,{children:[(0,g.jsx)(f.Progress,{variant:`dots`,navigable:!1}),(0,g.jsx)(`span`,{className:`flex-1`}),e.progress.isFirst?(0,g.jsx)(f.Skip,{}):(0,g.jsx)(f.Back,{}),(0,g.jsx)(f.Next,{})]})]})})]}):null]})}var y=`import { Bell, Settings } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { tourTarget } from "@kitora/tour/dom"
import { useTour, type ReactTourStep } from "@kitora/tour/react"
import { Tour } from "@kitora/tour/ui"

// Compose your own: the \`ProductTour\` preset is nothing but these public parts.
// This file rebuilds it part by part, so any piece can be moved, restyled or
// swapped. It imports the per-layer entries (\`/dom\` for the target marker,
// \`/react\` for the hook, \`/ui\` for the parts); the root \`@kitora/tour\` barrel exports the same names.
const STEPS: readonly ReactTourStep[] = [
  { id: "hello", title: "Built from parts", body: "Spotlight, popover, card, header, body, progress and footer: each is a \`Tour.*\` part." },
  { id: "alerts", target: "compose-alerts", title: "Alerts", body: "Mentions and assignments land here.", side: "bottom", align: "start" },
  { id: "settings", target: "compose-settings", title: "Settings", body: "Profile, theme and shortcuts.", side: "left" },
]

export function BasicCompose() {
  const tour = useTour({ id: "basics-compose", steps: STEPS, storage: null })
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-lg border bg-card p-2">
        <span className="flex-1 px-1 text-[13px] font-medium">Acme</span>
        <Button size="icon-sm" variant="ghost" aria-label="Alerts" {...tourTarget("compose-alerts")}>
          <Bell />
        </Button>
        <Button size="icon-sm" variant="ghost" aria-label="Settings" {...tourTarget("compose-settings")}>
          <Settings />
        </Button>
      </div>
      <div>
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-compose">
          Start the composed tour
        </Button>
      </div>
      {tour.running ? (
        <Tour.Root tour={tour}>
          <Tour.Spotlight />
          <Tour.Popover>
            <Tour.Card>
              <Tour.Header>
                <Tour.Title />
                <Tour.Close />
              </Tour.Header>
              <Tour.Body />
              <Tour.Footer>
                <Tour.Progress variant="dots" navigable={false} />
                <span className="flex-1" />
                {tour.progress.isFirst ? <Tour.Skip /> : <Tour.Back />}
                <Tour.Next />
              </Tour.Footer>
            </Tour.Card>
          </Tour.Popover>
        </Tour.Root>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>o(()=>import(`./compose-Qnh1CbDV.js`),[]));var b=e(a(),1),x=[{id:`inbox`,target:`store-inbox`,title:`Inbox`,body:`Everything that needs you.`},{id:`today`,target:`store-today`,title:`Today`,body:`Leave the tour here, then press Resume.`},{id:`later`,target:`store-later`,title:`Later`,body:`Snoozed work comes back on its date.`}];function S(e){let t=new Map;return{get:n=>(e(`get ${n}`),t.get(n)??null),set:(n,r)=>{e(`set ${n} = ${r}`),t.set(n,r)},remove:n=>{e(`remove ${n}`),t.delete(n)}}}function C(){let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(0);return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(w,{storage:(0,b.useMemo)(()=>S(e=>t(t=>[{n:(t[0]?.n??0)+1,text:e},...t].slice(0,6))),[]),onRemount:()=>r(e=>e+1)},n),(0,g.jsx)(`ol`,{className:`min-h-24 rounded-md border bg-muted/40 px-3 py-2 font-mono text-[11px] leading-5 text-muted-foreground`,"data-testid":`account-log`,"aria-label":`Storage calls`,children:e.length===0?(0,g.jsx)(`li`,{children:`no calls yet`}):e.map(e=>(0,g.jsx)(`li`,{children:e.text},e.n))})]})}function w({storage:e,onRemount:t}){let n=p({id:`basics-account`,steps:x,storage:e});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:x.map(e=>(0,g.jsx)(`div`,{...d(`store-${e.id}`),className:`rounded-md border bg-card px-3 py-3 text-center text-[13px] text-muted-foreground`,children:e.title},e.id))}),(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>n.start(),"data-testid":`start-account`,children:`Start`}),(0,g.jsx)(c,{size:`sm`,variant:`outline`,onClick:t,"data-testid":`remount-account`,children:`Remount the widget`}),(0,g.jsx)(c,{size:`sm`,variant:`ghost`,onClick:n.reset,children:`Reset`}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,"data-testid":`account-status`,children:[`status: `,n.state.status,`, step `,n.progress.current]})]}),(0,g.jsx)(m,{tour:n,spotlight:!1})]})}var T=`import { useMemo, useState } from "react"
import { Button } from "@kitora/ui/button"
import { ProductTour, tourTarget, useTour, type KeyValueStorage, type ReactTourStep } from "@kitora/tour"

// A custom storage adapter. Progress goes through \`KeyValueStorage\` (get / set /
// remove), localStorage by default. Here it is an in-page "account settings"
// store that logs every call, standing in for a per-user API, so the saved tour
// follows the user to any device. Go to step two, then remount the widget:
// the tour reads its saved step back through the adapter and reopens there.
const STEPS: readonly ReactTourStep[] = [
  { id: "inbox", target: "store-inbox", title: "Inbox", body: "Everything that needs you." },
  { id: "today", target: "store-today", title: "Today", body: "Leave the tour here, then press Resume." },
  { id: "later", target: "store-later", title: "Later", body: "Snoozed work comes back on its date." },
]

interface LogLine {
  readonly n: number
  readonly text: string
}

/** Builds the adapter; \`onCall\` lets the demo print each call. Swap the Map for \`fetch\` to your API. */
function accountStorage(onCall: (text: string) => void): KeyValueStorage {
  const rows = new Map<string, string>()
  return {
    get: (key) => {
      onCall(\`get \${key}\`)
      return rows.get(key) ?? null
    },
    set: (key, value) => {
      onCall(\`set \${key} = \${value}\`)
      rows.set(key, value)
    },
    remove: (key) => {
      onCall(\`remove \${key}\`)
      rows.delete(key)
    },
  }
}

export function BasicCustomStorage() {
  const [log, setLog] = useState<readonly LogLine[]>([])
  const [mount, setMount] = useState(0)
  // One adapter that outlives the tour widget, as a server would: remounting the widget reads it back.
  const storage = useMemo(() => accountStorage((text) => setLog((prev) => [{ n: (prev[0]?.n ?? 0) + 1, text }, ...prev].slice(0, 6))), [])
  return (
    <div className="flex flex-col gap-3">
      <AccountTour key={mount} storage={storage} onRemount={() => setMount((m) => m + 1)} />
      <ol className="min-h-24 rounded-md border bg-muted/40 px-3 py-2 font-mono text-[11px] leading-5 text-muted-foreground" data-testid="account-log" aria-label="Storage calls">
        {log.length === 0 ? <li>no calls yet</li> : log.map((l) => <li key={l.n}>{l.text}</li>)}
      </ol>
    </div>
  )
}

function AccountTour({ storage, onRemount }: { readonly storage: KeyValueStorage; readonly onRemount: () => void }) {
  // \`resumeOnMount\` (the default): a tour left mid-way reopens on the saved step.
  const tour = useTour({ id: "basics-account", steps: STEPS, storage })
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {STEPS.map((s) => (
          <div key={s.id} {...tourTarget(\`store-\${s.id}\`)} className="rounded-md border bg-card px-3 py-3 text-center text-[13px] text-muted-foreground">
            {s.title}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-account">
          Start
        </Button>
        <Button size="sm" variant="outline" onClick={onRemount} data-testid="remount-account">
          Remount the widget
        </Button>
        <Button size="sm" variant="ghost" onClick={tour.reset}>
          Reset
        </Button>
        <span className="text-[12px] text-muted-foreground" data-testid="account-status">
          status: {tour.state.status}, step {tour.progress.current}
        </span>
      </div>
      {/* No dim (\`spotlight={false}\`), so Remount stays clickable while the tour is open. */}
      <ProductTour tour={tour} spotlight={false} />
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>o(()=>import(`./custom-storage-NqtE56TK.js`),[]));var E=[{id:`welcome`,title:`Welcome to Acme`,body:`A 20-second look around. Use ← and → or the buttons; Escape ends the tour.`},{id:`search`,target:`basic-search`,title:`Search everything`,body:`Projects, people and files, from one box.`,align:`start`},{id:`new`,target:`basic-new`,title:`Create a project`,body:`Start here. Templates are one click away.`,side:`left`}];function D(){let e=p({id:`basics-first`,steps:E,storage:null});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border bg-card p-2`,children:[(0,g.jsx)(`div`,{className:`min-w-0 flex-1`,...d(`basic-search`),children:(0,g.jsx)(l,{"aria-label":`Search`,containerClassName:`h-7`})}),(0,g.jsxs)(c,{size:`sm`,...d(`basic-new`),children:[(0,g.jsx)(r,{}),` New project`]})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>e.start(),"data-testid":`start-first`,children:`Start tour`}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`status: `,e.state.status]})]}),(0,g.jsx)(m,{tour:e})]})}var O=`import { Plus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { SearchInput } from "@kitora/ui/search-input"
import { ProductTour, tourTarget, useTour, type ReactTourStep } from "@kitora/tour"

// A three-step tour: a centred welcome card, then two steps anchored to
// elements marked with \`tourTarget("…")\` (a \`data-tour\` attribute).
const STEPS: readonly ReactTourStep[] = [
  { id: "welcome", title: "Welcome to Acme", body: "A 20-second look around. Use ← and → or the buttons; Escape ends the tour." },
  { id: "search", target: "basic-search", title: "Search everything", body: "Projects, people and files, from one box.", align: "start" },
  { id: "new", target: "basic-new", title: "Create a project", body: "Start here. Templates are one click away.", side: "left" },
]

export function BasicFirstTour() {
  // \`storage: null\` keeps progress in memory: this demo starts fresh on every load.
  const tour = useTour({ id: "basics-first", steps: STEPS, storage: null })
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-lg border bg-card p-2">
        <div className="min-w-0 flex-1" {...tourTarget("basic-search")}>
          <SearchInput aria-label="Search" containerClassName="h-7" />
        </div>
        <Button size="sm" {...tourTarget("basic-new")}>
          <Plus /> New project
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-first">
          Start tour
        </Button>
        <span className="text-[12px] text-muted-foreground">status: {tour.state.status}</span>
      </div>
      <ProductTour tour={tour} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>o(()=>import(`./first-tour-6lmA1el4.js`),[]));var k=[{id:`a`,target:`resume-a`,title:`Step one`,body:`Go to the next step, then reload the page.`},{id:`b`,target:`resume-b`,title:`Step two`,body:`Reload now: the Resume button will bring you back here.`},{id:`c`,target:`resume-c`,title:`Step three`,body:`That's the whole tour.`}];function A(){let e=p({id:`basics-resume`,steps:k,resumeOnMount:!1});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:k.map((e,t)=>(0,g.jsxs)(`div`,{...d(`resume-${e.id}`),className:`rounded-md border bg-card px-3 py-4 text-center text-[13px] text-muted-foreground`,children:[`Panel `,t+1]},e.id))}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>e.start(),"data-testid":`start-resume`,children:`Start`}),(0,g.jsx)(c,{size:`sm`,variant:`outline`,disabled:!e.canResume,onClick:e.resume,"data-testid":`resume`,children:`Resume`}),(0,g.jsx)(c,{size:`sm`,variant:`ghost`,onClick:e.reset,children:`Forget progress`}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`status: `,e.state.status,e.canResume?` · saved mid-way`:``]})]}),(0,g.jsx)(m,{tour:e,progress:`text`})]})}var j=`import { Button } from "@kitora/ui/button"
import { ProductTour, tourTarget, useTour, type ReactTourStep } from "@kitora/tour"

// Progress is saved (localStorage by default). With \`resumeOnMount: false\` a
// tour left mid-way waits for \`resume()\` instead of reopening by itself.
const STEPS: readonly ReactTourStep[] = [
  { id: "a", target: "resume-a", title: "Step one", body: "Go to the next step, then reload the page." },
  { id: "b", target: "resume-b", title: "Step two", body: "Reload now: the Resume button will bring you back here." },
  { id: "c", target: "resume-c", title: "Step three", body: "That's the whole tour." },
]

export function BasicResume() {
  const tour = useTour({ id: "basics-resume", steps: STEPS, resumeOnMount: false })
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {STEPS.map((s, i) => (
          <div key={s.id} {...tourTarget(\`resume-\${s.id}\`)} className="rounded-md border bg-card px-3 py-4 text-center text-[13px] text-muted-foreground">
            Panel {i + 1}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-resume">
          Start
        </Button>
        <Button size="sm" variant="outline" disabled={!tour.canResume} onClick={tour.resume} data-testid="resume">
          Resume
        </Button>
        <Button size="sm" variant="ghost" onClick={tour.reset}>
          Forget progress
        </Button>
        <span className="text-[12px] text-muted-foreground">
          status: {tour.state.status}
          {tour.canResume ? " · saved mid-way" : ""}
        </span>
      </div>
      <ProductTour tour={tour} progress="text" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>o(()=>import(`./resume-D1I_3o9y.js`),[]));function M(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(n,{title:`Basics: a tour`,children:'A tour is a list of steps. `useTour` runs it; `ProductTour` draws the spotlight and the card. Mark targets with `tourTarget("key")`.'}),(0,g.jsx)(u,{n:1,title:`A three-step tour`,blurb:`A centred welcome card, then two anchored steps. ← and → move, Escape ends it.`,code:O,children:(0,g.jsx)(h,{testId:`basic-tour`,children:(0,g.jsx)(D,{})})}),(0,g.jsx)(u,{n:2,title:`Saved progress and Resume`,blurb:`Go to step two and reload: the tour remembers where you were.`,code:j,children:(0,g.jsx)(h,{testId:`basic-resume`,children:(0,g.jsx)(A,{})})}),(0,g.jsx)(u,{n:3,title:`Compose your own`,blurb:`ProductTour rebuilt from the Tour.* parts it is made of, so any piece can move, change or go.`,code:y,children:(0,g.jsx)(h,{testId:`basic-compose`,children:(0,g.jsx)(v,{})})}),(0,g.jsx)(u,{n:4,title:`A custom storage adapter`,blurb:`Progress saved through your own get / set / remove (an account API), with every call logged.`,code:T,children:(0,g.jsx)(h,{testId:`basic-storage`,children:(0,g.jsx)(C,{})})})]})}export{M as component};