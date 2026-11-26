import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{i as n,n as r,r as i}from"./parts-CPD-RYH5.js";import{i as a,l as o,n as s,r as c,t as l}from"./opener-CKS-Gji6.js";import{Bc as u,Cc as d,Cn as f,Fn as ee,Ic as te,Mr as p,Rn as m,Un as h,er as g,ti as _,ur as v,wn as y}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as b}from"./example-B8EaWveR.js";var x=e(u(),1),S=te(),C=c(),w=2;async function T(){if(!await C.confirm({title:`Create a new project?`,confirmLabel:`Continue`}))return`declined at confirm`;let e=await C.prompt({title:`Project name`,placeholder:`e.g. Apollo`,validate:e=>e.trim().length<w?`At least ${w} characters`:null});return e===void 0?`cancelled at prompt`:`${e} → ${await C.choose({title:`Who can see ${e}?`,options:[{key:`private`,label:`Only me`},{key:`team`,label:`My team`},{key:`public`,label:`Everyone`,destructive:!0}]})??`cancelled at choose`}`}function E(){let[e,t]=(0,x.useState)(`—`);return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:C}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-section":`chain`,children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`chain`,onClick:()=>void T().then(t),children:`New project…`}),(0,S.jsxs)(`span`,{className:`text-muted-foreground`,"data-log":``,children:[`result: `,e]})]})]})}var D=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, EnsureOverlayUi, OverlaysBinding } from "@kitora/overlay"

// Chained confirm → prompt → choose (O3 · O5 · O6): three awaited answers in a row, each typed.

const overlays = createOverlays()
const MIN_NAME = 2

// each step awaits a typed answer: boolean, string | undefined, then one of the option keys
async function newProject(): Promise<string> {
  if (!(await overlays.confirm({ title: "Create a new project?", confirmLabel: "Continue" }))) return "declined at confirm"
  const name = await overlays.prompt({
    title: "Project name",
    placeholder: "e.g. Apollo",
    validate: (v) => (v.trim().length < MIN_NAME ? \`At least \${MIN_NAME} characters\` : null),
  })
  if (name === undefined) return "cancelled at prompt"
  const visibility = await overlays.choose({
    title: \`Who can see \${name}?\`,
    options: [
      { key: "private", label: "Only me" },
      { key: "team", label: "My team" },
      { key: "public", label: "Everyone", destructive: true },
    ],
  })
  return \`\${name} → \${visibility ?? "cancelled at choose"}\`
}

export function NewProjectButton() {
  const [outcome, setOutcome] = useState("—")
  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <div className="flex flex-wrap items-center gap-2 text-[13px]" data-section="chain">
        <Button size="sm" variant="outline" data-demo="chain" onClick={() => void newProject().then(setOutcome)}>
          New project…
        </Button>
        <span className="text-muted-foreground" data-log="">
          result: {outcome}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>d(()=>import(`./openers-chain-rCv0rula.js`),[]));var O=c();function k(){let[e,t]=(0,x.useState)(`Quarterly report`),n=(0,x.useRef)(null),r=(0,x.useRef)(null);return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:O}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-section":`o13`,children:[(0,S.jsxs)(ee,{onOpenChangeComplete:e=>{e||r.current?.(),r.current=null},children:[(0,S.jsx)(g,{render:(0,S.jsx)(_,{size:`sm`,variant:`outline`,ref:n,"data-demo":`menu-trigger`}),children:`Actions`}),(0,S.jsx)(m,{children:(0,S.jsx)(h,{"data-demo":`menu-rename`,onClick:i=>{let a=i.currentTarget,o=n.current?[a,n.current]:a;r.current=()=>{O.prompt({title:`Rename report`,defaultValue:e,submitLabel:`Rename`},{opener:o}).then(e=>{e&&t(e)})}},children:`Rename…`})})]}),(0,S.jsxs)(`span`,{className:`text-muted-foreground`,children:[`title: `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-title":``,children:e})]})]})]})}var A=`import { useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { createOverlays, EnsureOverlayUi, OverlaysBinding } from "@kitora/overlay"

// Open from a menu item that unmounts (O13): the item unmounts as the menu closes, so the opener list
// names the menu trigger after it, and focus comes back to “Actions”.

// written once in a plain module; OverlaysBinding below connects it to the overlay stack
const overlays = createOverlays()

export function ReportActions() {
  const [title, setTitle] = useState("Quarterly report")
  const trigger = useRef<HTMLButtonElement | null>(null)
  const pending = useRef<(() => void) | null>(null)
  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <div className="flex flex-wrap items-center gap-2 text-[13px]" data-section="o13">
        <DropdownMenu
          onOpenChangeComplete={(open) => {
            // open after the menu finished closing, so its own focus return cannot steal focus from the dialog
            if (!open) pending.current?.()
            pending.current = null
          }}
        >
          <DropdownMenuTrigger render={<Button size="sm" variant="outline" ref={trigger} data-demo="menu-trigger" />}>Actions</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              data-demo="menu-rename"
              onClick={(event) => {
                const item = event.currentTarget
                // the opener list: the item first, then the trigger once the item has unmounted
                const opener = trigger.current ? [item, trigger.current] : item
                pending.current = () => {
                  void overlays.prompt({ title: "Rename report", defaultValue: title, submitLabel: "Rename" }, { opener }).then((next) => {
                    if (next) setTitle(next)
                  })
                }
              }}
            >
              Rename…
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-muted-foreground">
          title: <b className="text-foreground" data-title="">{title}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>d(()=>import(`./openers-menu-DZrxgNra.js`),[]));var j=c(),M=[`Alpha`,`Bravo`,`Charlie`,`Delta`,`Echo`];function N(){let[e,t]=(0,x.useState)(M),n=(0,x.useRef)(null),r=(e,t)=>({isAvailable:()=>n.current!==null,focus:()=>{let r=[...n.current?.querySelectorAll(`button[data-row-delete]`)??[]].filter(t=>t.dataset.rowDelete!==e);(r[Math.min(t,r.length-1)]??n.current)?.focus()}}),i=async(e,n,i)=>{await j.confirm({title:`Delete ${e}?`,description:`The row disappears; focus moves to its neighbour.`,confirmLabel:`Delete`,destructive:!0},{opener:[i,r(e,n)]})&&t(t=>t.filter(t=>t!==e))};return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:j}),(0,S.jsxs)(`ul`,{ref:n,tabIndex:-1,className:`flex max-w-sm flex-col gap-1 text-[13px] outline-none`,"data-rows":``,children:[e.map((e,t)=>(0,S.jsxs)(`li`,{className:`flex h-8 items-center justify-between rounded border px-2`,children:[(0,S.jsx)(`span`,{children:e}),(0,S.jsx)(_,{size:`xs`,variant:`ghost`,"data-row-delete":e,onClick:n=>void i(e,t,n.currentTarget),children:`Delete`})]},e)),e.length===0?(0,S.jsx)(`li`,{className:`text-muted-foreground`,children:`No rows.`}):null]})]})}var P=`import { useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, EnsureOverlayUi, OverlaysBinding, type FocusTarget } from "@kitora/overlay"

// Delete a row, focus its neighbour (O14): confirm a delete, the row disappears, and focus moves to
// the row that took its place (else the last row, else the list).

const overlays = createOverlays()
const INITIAL_ROWS = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"]

export function DeletableRows() {
  const [rows, setRows] = useState(INITIAL_ROWS)
  const list = useRef<HTMLUListElement | null>(null)

  // the deleted row is skipped by name, because focus may return before React has removed it
  const neighbourOf = (name: string, index: number): FocusTarget => ({
    isAvailable: () => list.current !== null,
    focus: () => {
      const buttons = [...(list.current?.querySelectorAll<HTMLButtonElement>("button[data-row-delete]") ?? [])].filter((b) => b.dataset.rowDelete !== name)
      const target = buttons[Math.min(index, buttons.length - 1)] ?? list.current
      target?.focus()
    },
  })

  const remove = async (name: string, index: number, button: HTMLButtonElement) => {
    const ok = await overlays.confirm(
      { title: \`Delete \${name}?\`, description: "The row disappears; focus moves to its neighbour.", confirmLabel: "Delete", destructive: true },
      { opener: [button, neighbourOf(name, index)] },
    )
    if (ok) setRows((prev) => prev.filter((r) => r !== name))
  }

  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <ul ref={list} tabIndex={-1} className="flex max-w-sm flex-col gap-1 text-[13px] outline-none" data-rows="">
        {rows.map((name, index) => (
          <li key={name} className="flex h-8 items-center justify-between rounded border px-2">
            <span>{name}</span>
            <Button size="xs" variant="ghost" data-row-delete={name} onClick={(e) => void remove(name, index, e.currentTarget)}>
              Delete
            </Button>
          </li>
        ))}
        {rows.length === 0 ? <li className="text-muted-foreground">No rows.</li> : null}
      </ul>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./openers-neighbour-VPUeQ7nm.js`),[]));var F=c(),I=c(),L=300;async function R(){return await F.alert({title:`Server event`,description:`A teammate published v2.4 while you were editing.`}),`alert acknowledged`}function z(){let[e,t]=(0,x.useState)(`—`);return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:F}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 text-[13px]`,"data-section":`o18`,children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`server-event`,onClick:()=>setTimeout(()=>void R().then(t),L),children:`Simulate a server event (plain function, 300 ms)`}),(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`unbound`,onClick:()=>{try{I.alert({title:`never shown`})}catch(e){t(e instanceof s?`unbound: ${e.message}`:String(e))}},children:`Open with an unbound opener`}),(0,S.jsxs)(`span`,{className:`text-muted-foreground`,"data-log":``,children:[`last: `,e]})]})]})}var B=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, EnsureOverlayUi, OverlaysBinding, OverlaysNotBoundError } from "@kitora/overlay"

// Open from outside React (O18): a plain function with no hooks opens an alert from a timer; an opener
// with no binding throws a typed error instead of silently opening nothing.

// written once in a plain module: callable from code with no hooks
const overlays = createOverlays()
// never bound to a stack: shows the error a module-level open gives with no provider
const unbound = createOverlays()
/** Stands in for the delay of a websocket message or a loader. */
const SERVER_DELAY_MS = 300

// stub: replace with your websocket handler or loader
async function onServerEvent(): Promise<string> {
  await overlays.alert({ title: "Server event", description: "A teammate published v2.4 while you were editing." })
  return "alert acknowledged"
}

export function ServerEventDemo() {
  const [last, setLast] = useState("—")
  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <div className="flex flex-wrap items-center gap-1.5 text-[13px]" data-section="o18">
        <Button size="sm" variant="outline" data-demo="server-event" onClick={() => setTimeout(() => void onServerEvent().then(setLast), SERVER_DELAY_MS)}>
          Simulate a server event (plain function, 300 ms)
        </Button>
        <Button
          size="sm"
          variant="outline"
          data-demo="unbound"
          onClick={() => {
            try {
              void unbound.alert({ title: "never shown" })
            } catch (error) {
              setLast(error instanceof OverlaysNotBoundError ? \`unbound: \${error.message}\` : String(error))
            }
          }}
        >
          Open with an unbound opener
        </Button>
        <span className="text-muted-foreground" data-log="">
          last: {last}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>d(()=>import(`./openers-outside-DkOdbRj_.js`),[]));var V=c(),H=250,U=20,W=o({name:`export-progress`,dismiss:{escape:!1,outside:!1},render:({percent:e},t)=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{title:`Exporting…`,closeButton:!1}),(0,S.jsx)(r,{children:(0,S.jsxs)(`p`,{"data-progress":e,children:[e,`% done`]})}),(0,S.jsx)(i,{children:(0,S.jsx)(_,{size:`sm`,disabled:e<100,onClick:()=>t.resolve(void 0),children:`Close`})})]})}),G=o({name:`wizard-step-a`,render:({onNext:e},t)=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{title:`Step A — pick a plan`,description:"Next swaps this dialog for step B in place: reason `replaced`, focus stays inside."}),(0,S.jsxs)(i,{children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,onClick:()=>void t.close(),children:`Cancel`}),(0,S.jsx)(_,{size:`sm`,onClick:e,"data-wizard-next":``,children:`Next`})]})]})}),K=o({name:`wizard-step-b`,render:({plan:e},t)=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{title:`Step B — confirm ${e}`,description:`The opener awaits the new handle's result.`}),(0,S.jsx)(i,{children:(0,S.jsx)(_,{size:`sm`,onClick:()=>t.resolve(e),"data-wizard-finish":``,children:`Finish`})})]})});function q(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function J(){let[e,t]=(0,x.useState)(`—`),n=()=>{let e=null;e=V.open(G,{onNext:()=>void e?.replace(K,{plan:`Pro`}).then(async e=>{e&&t(`step B ${q(await e.result)}`)})})},r=async()=>{let e=V.open(W,{percent:0});for(let t=U;t<=100;t+=U)await new Promise(e=>setTimeout(e,H)),e.update({percent:t});t(`export ${q(await e.result)}`)};return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:V}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 text-[13px]`,"data-section":`o20`,children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`wizard`,onClick:n,children:`Two-step wizard (replace)`}),(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`progress`,onClick:()=>void r(),children:`Export with progress (update)`}),(0,S.jsxs)(`span`,{className:`text-muted-foreground`,"data-log":``,children:[`last: `,e]})]})]})}var Y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, defineOverlay, EnsureOverlayUi, OverlayBody, OverlayFooter, OverlayHeader, OverlaysBinding, type OpenedOverlay, type OverlayResult } from "@kitora/overlay"

// Replace in place, live progress (O20): replace() swaps step A for step B without closing the stack;
// update() re-renders an open body with new props.

const overlays = createOverlays()
/** The fake export advances one step every STEP_MS. */
const STEP_MS = 250
const STEP_PERCENT = 20

/** Progress body: \`update({ percent })\` re-renders it in place. */
const ExportProgress = defineOverlay<{ percent: number }, void>({
  name: "export-progress",
  dismiss: { escape: false, outside: false },
  render: ({ percent }, ctl) => (
    <>
      <OverlayHeader title="Exporting…" closeButton={false} />
      <OverlayBody>
        <p data-progress={percent}>{percent}% done</p>
      </OverlayBody>
      <OverlayFooter>
        <Button size="sm" disabled={percent < 100} onClick={() => ctl.resolve(undefined)}>
          Close
        </Button>
      </OverlayFooter>
    </>
  ),
})

const StepA = defineOverlay<{ onNext: () => void }, string>({
  name: "wizard-step-a",
  render: ({ onNext }, ctl) => (
    <>
      <OverlayHeader title="Step A — pick a plan" description="Next swaps this dialog for step B in place: reason \`replaced\`, focus stays inside." />
      <OverlayFooter>
        <Button size="sm" variant="outline" onClick={() => void ctl.close()}>
          Cancel
        </Button>
        <Button size="sm" onClick={onNext} data-wizard-next="">
          Next
        </Button>
      </OverlayFooter>
    </>
  ),
})

const StepB = defineOverlay<{ plan: string }, string>({
  name: "wizard-step-b",
  render: ({ plan }, ctl) => (
    <>
      <OverlayHeader title={\`Step B — confirm \${plan}\`} description="The opener awaits the new handle's result." />
      <OverlayFooter>
        <Button size="sm" onClick={() => ctl.resolve(plan)} data-wizard-finish="">
          Finish
        </Button>
      </OverlayFooter>
    </>
  ),
})

function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

export function ReplaceAndUpdate() {
  const [last, setLast] = useState("—")

  const startWizard = () => {
    let stepA: OpenedOverlay<{ onNext: () => void }, string> | null = null
    // swap step A for step B in place; this handle settles as dismissed \`replaced\`
    const onNext = () =>
      void stepA?.replace(StepB, { plan: "Pro" }).then(async (stepB) => {
        if (stepB) setLast(\`step B \${describe(await stepB.result)}\`)
      })
    stepA = overlays.open(StepA, { onNext })
  }

  const exportWithProgress = async () => {
    const handle = overlays.open(ExportProgress, { percent: 0 })
    for (let percent = STEP_PERCENT; percent <= 100; percent += STEP_PERCENT) {
      await new Promise((resolve) => setTimeout(resolve, STEP_MS))
      handle.update({ percent }) // re-renders the open body in place
    }
    setLast(\`export \${describe(await handle.result)}\`)
  }

  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <div className="flex flex-wrap items-center gap-1.5 text-[13px]" data-section="o20">
        <Button size="sm" variant="outline" data-demo="wizard" onClick={startWizard}>
          Two-step wizard (replace)
        </Button>
        <Button size="sm" variant="outline" data-demo="progress" onClick={() => void exportWithProgress()}>
          Export with progress (update)
        </Button>
        <span className="text-muted-foreground" data-log="">
          last: {last}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>d(()=>import(`./openers-replace-xDozsXSt.js`),[]));var X=c(),Z=(0,x.createContext)(`(no accent: rendered outside the scope)`);function Q(){let e=(0,x.useContext)(Z),t=p();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{title:`Context probe`}),(0,S.jsx)(r,{children:(0,S.jsxs)(`p`,{"data-accent":e,children:[`accent = `,e]})}),(0,S.jsx)(i,{children:(0,S.jsx)(_,{size:`sm`,onClick:()=>t.resolve(void 0),children:`OK`})})]})}function ne({onResult:e}){let t=a();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`scoped`,onClick:()=>void t.openRender(()=>(0,S.jsx)(Q,{}),{name:`accent-scoped`}).result.then(()=>e(`scoped`)),children:`useOverlays() — sees the scope`}),(0,S.jsx)(_,{size:`sm`,variant:`outline`,"data-demo":`module`,onClick:()=>void X.openRender(()=>(0,S.jsx)(Q,{}),{name:`accent-root`}).result.then(()=>e(`module`)),children:`overlays — root host, no scope context`})]})}function re(){let[e,t]=(0,x.useState)(`—`);return(0,S.jsxs)(f,{children:[(0,S.jsx)(l,{overlays:X}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 text-[13px]`,"data-section":`o19`,children:[(0,S.jsx)(Z,{value:`violet (from the scope)`,children:(0,S.jsx)(v,{children:(0,S.jsx)(ne,{onResult:t})})}),(0,S.jsxs)(`span`,{className:`text-muted-foreground`,"data-log":``,children:[`last closed: `,e]})]})]})}var $=`import { createContext, useContext, useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, EnsureOverlayUi, OverlayBody, OverlayFooter, OverlayHeader, OverlayScope, OverlaysBinding, useOverlay, useOverlays } from "@kitora/overlay"

// useOverlays() keeps the caller's context (O19): it renders the body inside the nearest OverlayScope;
// the module-level opener renders at the root and misses the context.

const overlays = createOverlays()
const AccentContext = createContext("(no accent: rendered outside the scope)")

function AccentProbe() {
  const accent = useContext(AccentContext)
  const ctl = useOverlay<void>()
  return (
    <>
      <OverlayHeader title="Context probe" />
      <OverlayBody>
        <p data-accent={accent}>accent = {accent}</p>
      </OverlayBody>
      <OverlayFooter>
        <Button size="sm" onClick={() => ctl.resolve(undefined)}>
          OK
        </Button>
      </OverlayFooter>
    </>
  )
}

function Openers({ onResult }: { onResult: (line: string) => void }) {
  // the hook form: the body renders inside the nearest OverlayScope, so it sees AccentContext
  const scoped = useOverlays()
  return (
    <>
      <Button size="sm" variant="outline" data-demo="scoped" onClick={() => void scoped.openRender<void>(() => <AccentProbe />, { name: "accent-scoped" }).result.then(() => onResult("scoped"))}>
        useOverlays() — sees the scope
      </Button>
      <Button size="sm" variant="outline" data-demo="module" onClick={() => void overlays.openRender<void>(() => <AccentProbe />, { name: "accent-root" }).result.then(() => onResult("module"))}>
        overlays — root host, no scope context
      </Button>
    </>
  )
}

export function ScopedContextDemo() {
  const [last, setLast] = useState("—")
  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <div className="flex flex-wrap items-center gap-1.5 text-[13px]" data-section="o19">
        <AccentContext value="violet (from the scope)">
          <OverlayScope>
            <Openers onResult={setLast} />
          </OverlayScope>
        </AccentContext>
        <span className="text-muted-foreground" data-log="">
          last closed: {last}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./openers-scoped-CEizWxgW.js`),[]));function ie(){return(0,S.jsxs)(y,{children:[(0,S.jsxs)(t,{title:`Imperative openers`,children:[(0,S.jsx)(`code`,{children:`defineOverlay`}),`, `,(0,S.jsx)(`code`,{children:`overlays.open`}),`, `,(0,S.jsx)(`code`,{children:`useOverlays()`}),`, handle `,(0,S.jsx)(`code`,{children:`update`}),`/`,(0,S.jsx)(`code`,{children:`replace`}),`, and the confirm/alert/prompt/choose sugar (O13–O20). Each example shows what its opener got back.`]}),(0,S.jsx)(b,{n:1,title:`Open from a menu item that unmounts (O13)`,blurb:`The menu item unmounts as the menu closes; focus comes back to “Actions” through the opener list.`,code:A,children:(0,S.jsx)(k,{})}),(0,S.jsx)(b,{n:2,title:`Delete a row, focus its neighbour (O14)`,blurb:`Confirm a delete: the row disappears and focus moves to the row that took its place.`,code:P,children:(0,S.jsx)(N,{})}),(0,S.jsx)(b,{n:3,title:`Open from outside React (O18)`,blurb:`A plain function with no hooks opens an alert from a timer; an opener with no binding throws a typed error.`,code:B,children:(0,S.jsx)(z,{})}),(0,S.jsx)(b,{n:4,title:`useOverlays() keeps the caller's context (O19)`,blurb:`useOverlays() renders the body inside the nearest OverlayScope; the module-level opener renders at the root and misses the context.`,code:$,children:(0,S.jsx)(re,{})}),(0,S.jsx)(b,{n:5,title:`Replace in place, live progress (O20)`,blurb:`replace() swaps step A for step B without closing the stack; update() re-renders an open body with new props.`,code:Y,children:(0,S.jsx)(J,{})}),(0,S.jsx)(b,{n:6,title:`Chained confirm → prompt → choose (O3 · O5 · O6)`,blurb:`Three awaited answers in a row, each typed.`,code:D,children:(0,S.jsx)(E,{})})]})}export{ie as component};