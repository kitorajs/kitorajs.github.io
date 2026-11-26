import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./overlay-Crmkxi6R.js";import{t as r}from"./input-DQo0XDsx.js";import{a as i,t as a}from"./parts-CQPz3DEM.js";import{n as o,t as s}from"./preset-B4vwv-fd.js";import{i as c,n as l,r as u}from"./confirm-ByMBokV0.js";import{n as d}from"./presets-CrjzKOxJ.js";import{a as f,c as p,i as m,l as h,o as g,s as _}from"./opener-CW74tEun.js";import{Ar as v,Bc as y,Cc as b,Ic as x,Pr as S,kr as C,ti as w,wn as T}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as E}from"./example-BGnSQG2Y.js";var D=e(y(),1),O=x();function k(){let[e,t]=(0,D.useState)(``);return v(C(()=>e!==``,{title:`Discard the draft?`})),(0,O.jsx)(r,{placeholder:`Type something, then press Escape`,value:e,onChange:e=>t(e.currentTarget.value)})}function A(){return(0,O.jsx)(T,{children:(0,O.jsx)(d,{trigger:(0,O.jsx)(w,{size:`sm`,variant:`outline`,children:`New note`}),title:`New note`,size:`sm`,footer:(0,O.jsx)(n.Close,{render:(0,O.jsx)(w,{size:`sm`,variant:`outline`}),children:`Cancel`}),children:(0,O.jsx)(k,{})})})}var j=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { dirtyGuard, Modal, Overlay, OverlayUiProvider, useCloseGuard } from "@kitora/overlay"

function TitleField() {
  const [title, setTitle] = useState("")
  // while the field has text, every close path (Escape, backdrop, ×, Cancel) asks before closing
  useCloseGuard(dirtyGuard(() => title !== "", { title: "Discard the draft?" }))
  return <Input placeholder="Type something, then press Escape" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
}

export function BasicCloseGuard() {
  return (
    <OverlayUiProvider>
      <Modal
        trigger={<Button size="sm" variant="outline">New note</Button>}
        title="New note"
        size="sm"
        footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>}
      >
        <TitleField />
      </Modal>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>b(()=>import(`./close-guard-CMvqN-Er.js`),[]));function M(){let[e,t]=(0,D.useState)(`not asked yet`);return(0,O.jsx)(T,{children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,O.jsx)(u,{trigger:(0,O.jsx)(w,{size:`sm`,variant:`destructive`,children:`Delete file…`}),title:`Delete “notes.txt”?`,description:`This cannot be undone.`,destructive:!0,confirmLabel:`Delete`,onResult:e=>t(e.status===`resolved`?`deleted`:`kept (${e.reason})`)}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`basic-confirm`,children:e})]})})}var N=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Confirm, OverlayUiProvider } from "@kitora/overlay"

// A yes / no question. onResult tells you which: resolved (confirmed) or dismissed, with the reason.
export function BasicConfirm() {
  const [answer, setAnswer] = useState("not asked yet")
  return (
    <OverlayUiProvider>
      <div className="flex items-center gap-2 text-[13px]">
        <Confirm
          trigger={<Button size="sm" variant="destructive">Delete file…</Button>}
          title="Delete “notes.txt”?"
          description="This cannot be undone."
          destructive
          confirmLabel="Delete"
          onResult={(r) => setAnswer(r.status === "resolved" ? "deleted" : \`kept (\${r.reason})\`)}
        />
        <span className="text-muted-foreground" data-demo="basic-confirm">{answer}</span>
      </div>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>b(()=>import(`./confirm-Buj6mAbx.js`),[]));var P=h({name:`pick-colour`,render:({question:e},t)=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-2 p-4 text-[13px]`,children:[(0,O.jsx)(`p`,{children:e}),(0,O.jsx)(`div`,{className:`flex gap-2`,children:[`Red`,`Green`,`Blue`].map(e=>(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>t.resolve(e),children:e},e))})]})});function F(){let e=m(),[t,n]=(0,D.useState)(`none`),r=async()=>{n(await e.open(P,{question:`Which colour for the label?`}).value()??`dismissed`)};return(0,O.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void r(),children:`Pick a colour`}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`basic-imperative`,children:t})]})}function I(){return(0,O.jsx)(T,{children:(0,O.jsx)(F,{})})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { defineOverlay, OverlayUiProvider, useOverlays } from "@kitora/overlay"

// Declared once: props in, result out, both typed. Open it from any event handler and await the answer.
const PickColour = defineOverlay<{ question: string }, string>({
  name: "pick-colour",
  render: ({ question }, ctl) => (
    <div className="flex flex-col gap-2 p-4 text-[13px]">
      <p>{question}</p>
      <div className="flex gap-2">
        {["Red", "Green", "Blue"].map((c) => (
          <Button key={c} size="sm" variant="outline" onClick={() => ctl.resolve(c)}>{c}</Button>
        ))}
      </div>
    </div>
  ),
})

function AskButton() {
  const overlays = useOverlays()
  const [colour, setColour] = useState("none")
  const ask = async () => {
    // value(): the resolved value, or undefined when it was dismissed
    const picked = await overlays.open(PickColour, { question: "Which colour for the label?" }).value()
    setColour(picked ?? "dismissed")
  }
  return (
    <div className="flex items-center gap-2 text-[13px]">
      <Button size="sm" variant="outline" onClick={() => void ask()}>Pick a colour</Button>
      <span className="text-muted-foreground" data-demo="basic-imperative">{colour}</span>
    </div>
  )
}

export function BasicImperative() {
  return (
    <OverlayUiProvider>
      <AskButton />
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>b(()=>import(`./imperative-F-NQ7S3g.js`),[]));function R(){return(0,O.jsx)(T,{children:(0,O.jsx)(d,{trigger:(0,O.jsx)(w,{size:`sm`,children:`Open modal`}),title:`Welcome back`,description:`You have 3 new comments since your last visit.`,size:`sm`,footer:(0,O.jsx)(n.Close,{render:(0,O.jsx)(w,{size:`sm`}),children:`Got it`}),children:(0,O.jsx)(`p`,{className:`text-[13px]`,children:`Comments are listed on each task.`})})})}var z=`import { Button } from "@kitora/ui/button"
import { Modal, Overlay, OverlayUiProvider } from "@kitora/overlay"

// The smallest modal: a trigger, a title, a body and a footer button that closes it.
// Escape, the backdrop and the × close it too; focus returns to the trigger.
export function BasicModal() {
  return (
    // mount OverlayUiProvider once at the app root; every overlay renders on its stack
    <OverlayUiProvider>
      <Modal
        trigger={<Button size="sm">Open modal</Button>}
        title="Welcome back"
        description="You have 3 new comments since your last visit."
        size="sm"
        footer={<Overlay.Close render={<Button size="sm" />}>Got it</Overlay.Close>}
      >
        <p className="text-[13px]">Comments are listed on each task.</p>
      </Modal>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>b(()=>import(`./modal-B5t3SsCY.js`),[]));var B=e=>new Promise(t=>setTimeout(t,e));function V(){let e=m(),[t,r]=(0,D.useState)(`—`),u=async()=>{let t=await e.openRender(()=>(0,O.jsx)(c,{title:`Delete 3 files?`,description:`This cannot be undone.`,destructive:!0,confirmLabel:`Delete`,action:()=>B(600)}),{kind:`alertdialog`}).result;r(t.status===`resolved`?`deleted`:`kept (${t.reason})`)},d=async()=>{r(await e.openRender(()=>(0,O.jsx)(l,{title:`Save how?`,options:[{value:`draft`,label:`Save draft`},{value:`publish`,label:`Publish`,tone:`default`}]}),{kind:`alertdialog`}).value()??`dismissed`)};return(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void u(),children:`ConfirmBody`}),(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void d(),children:`ChooseBody`}),(0,O.jsx)(s,{kind:`dialog`,surface:`center`,presentation:{size:`sm`},trigger:(0,O.jsx)(w,{size:`sm`,variant:`outline`,children:`Own preset`}),content:(0,O.jsx)(o,{title:`Keyboard help`,description:`A preset of your own: PresetOverlay plus StandardLayout.`,closeButton:!1,footer:(0,O.jsxs)(n.Close,{render:(0,O.jsx)(w,{size:`sm`,variant:`outline`}),children:[(0,O.jsx)(a,{}),` Close`]}),children:(0,O.jsxs)(`p`,{className:`flex items-center gap-2 text-muted-foreground`,children:[(0,O.jsx)(i,{}),` Loading shortcuts…`]})})}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`bodies-result`,children:t})]})}function H(){return(0,O.jsx)(T,{children:(0,O.jsx)(V,{})})}var U=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { ChooseBody, CloseIcon, ConfirmBody, Overlay, OverlayUiProvider, PresetOverlay, SpinnerIcon, StandardLayout, useOverlays } from "@kitora/overlay"

// The styled bodies the presets use, opened from code with openRender: ConfirmBody (with async
// work) and ChooseBody. PresetOverlay + StandardLayout build a preset of your own, here a small
// "help" dialog; CloseIcon and SpinnerIcon are the kit's two glyphs.
const wait = (ms: number) => new Promise<void>((done) => setTimeout(done, ms))

function Openers() {
  const overlays = useOverlays()
  const [last, setLast] = useState("—")
  const confirm = async () => {
    const r = await overlays.openRender<boolean>(() => <ConfirmBody title="Delete 3 files?" description="This cannot be undone." destructive confirmLabel="Delete" action={() => wait(600)} />, { kind: "alertdialog" }).result
    setLast(r.status === "resolved" ? "deleted" : \`kept (\${r.reason})\`)
  }
  const choose = async () => {
    const v = await overlays.openRender<"draft" | "publish">(() => <ChooseBody title="Save how?" options={[{ value: "draft", label: "Save draft" }, { value: "publish", label: "Publish", tone: "default" }]} />, { kind: "alertdialog" }).value()
    setLast(v ?? "dismissed")
  }
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <Button size="sm" variant="outline" onClick={() => void confirm()}>ConfirmBody</Button>
      <Button size="sm" variant="outline" onClick={() => void choose()}>ChooseBody</Button>
      <PresetOverlay
        kind="dialog"
        surface="center"
        presentation={{ size: "sm" }}
        trigger={<Button size="sm" variant="outline">Own preset</Button>}
        content={
          <StandardLayout
            title="Keyboard help"
            description="A preset of your own: PresetOverlay plus StandardLayout."
            closeButton={false}
            footer={
              <Overlay.Close render={<Button size="sm" variant="outline" />}>
                <CloseIcon /> Close
              </Overlay.Close>
            }
          >
            <p className="flex items-center gap-2 text-muted-foreground">
              <SpinnerIcon /> Loading shortcuts…
            </p>
          </StandardLayout>
        }
      />
      <span className="text-muted-foreground" data-demo="bodies-result">{last}</span>
    </div>
  )
}

export function BasicBodies() {
  return (
    <OverlayUiProvider>
      <Openers />
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>b(()=>import(`./bodies-_d7an012.js`),[]));var W=`flex flex-col gap-2 p-4 text-[13px] [&_h2]:font-semibold [&_button]:h-7 [&_button]:rounded-md [&_button]:border [&_button]:px-2 [&_input]:h-7 [&_input]:rounded-md [&_input]:border [&_input]:px-2`;function G(e){return(0,O.jsx)(`div`,{className:W,children:(0,O.jsx)(S,{...e})})}function K(e){return(0,O.jsx)(`div`,{className:W,children:(0,O.jsx)(f,{...e})})}function q(e){return(0,O.jsx)(`div`,{className:W,children:(0,O.jsx)(_,{...e})})}function J(e){return(0,O.jsx)(`div`,{className:W,children:(0,O.jsx)(g,{...e})})}var Y={confirm:G,alert:K,prompt:q,choose:J};function X(){let e=m(),[t,n]=(0,D.useState)(`—`);return(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void e.confirm({title:`Archive the project?`}).then(e=>n(`confirm: ${e}`)),children:`Confirm`}),(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void e.alert({title:`Saved`,description:`Your changes are live.`}).then(()=>n(`alert: ok`)),children:`Alert`}),(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void e.prompt({title:`Rename`,defaultValue:`Q3 plan`,validate:e=>e.trim()===``?`A name is required`:null}).then(e=>n(`prompt: ${e??`dismissed`}`)),children:`Prompt`}),(0,O.jsx)(w,{size:`sm`,variant:`outline`,onClick:()=>void e.choose({title:`Export as`,options:[{key:`csv`,label:`CSV`},{key:`pdf`,label:`PDF`}]}).then(e=>n(`choose: ${e??`dismissed`}`)),children:`Choose`}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`headless-views`,children:t})]})}function Z(){return(0,O.jsx)(p,{views:Y,children:(0,O.jsx)(T,{children:(0,O.jsx)(X,{})})})}var Q=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { DefaultAlertView, DefaultChooseView, DefaultGuardConfirmView, DefaultPromptView, OverlayUiProvider, OverlayViewsProvider, useOverlays, type AlertViewProps, type ChooseViewProps, type ConfirmViewProps, type PromptViewProps } from "@kitora/overlay"

// The unstyled default views of confirm(), alert(), prompt() and choose(), registered through
// OverlayViewsProvider and wrapped in a few classes of our own. Swap any one for your own view.
const SHELL = "flex flex-col gap-2 p-4 text-[13px] [&_h2]:font-semibold [&_button]:h-7 [&_button]:rounded-md [&_button]:border [&_button]:px-2 [&_input]:h-7 [&_input]:rounded-md [&_input]:border [&_input]:px-2"

function ConfirmShell(props: ConfirmViewProps) {
  return (
    <div className={SHELL}>
      <DefaultGuardConfirmView {...props} />
    </div>
  )
}
function AlertShell(props: AlertViewProps) {
  return (
    <div className={SHELL}>
      <DefaultAlertView {...props} />
    </div>
  )
}
function PromptShell(props: PromptViewProps) {
  return (
    <div className={SHELL}>
      <DefaultPromptView {...props} />
    </div>
  )
}
function ChooseShell(props: ChooseViewProps) {
  return (
    <div className={SHELL}>
      <DefaultChooseView {...props} />
    </div>
  )
}

const VIEWS = { confirm: ConfirmShell, alert: AlertShell, prompt: PromptShell, choose: ChooseShell }

function Buttons() {
  const overlays = useOverlays()
  const [last, setLast] = useState("—")
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <Button size="sm" variant="outline" onClick={() => void overlays.confirm({ title: "Archive the project?" }).then((ok) => setLast(\`confirm: \${ok}\`))}>Confirm</Button>
      <Button size="sm" variant="outline" onClick={() => void overlays.alert({ title: "Saved", description: "Your changes are live." }).then(() => setLast("alert: ok"))}>Alert</Button>
      <Button size="sm" variant="outline" onClick={() => void overlays.prompt({ title: "Rename", defaultValue: "Q3 plan", validate: (v) => (v.trim() === "" ? "A name is required" : null) }).then((name) => setLast(\`prompt: \${name ?? "dismissed"}\`))}>Prompt</Button>
      <Button size="sm" variant="outline" onClick={() => void overlays.choose({ title: "Export as", options: [{ key: "csv", label: "CSV" }, { key: "pdf", label: "PDF" }] }).then((kind) => setLast(\`choose: \${kind ?? "dismissed"}\`))}>Choose</Button>
      <span className="text-muted-foreground" data-demo="headless-views">{last}</span>
    </div>
  )
}

export function BasicHeadlessViews() {
  return (
    <OverlayViewsProvider views={VIEWS}>
      <OverlayUiProvider>
        <Buttons />
      </OverlayUiProvider>
    </OverlayViewsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>b(()=>import(`./headless-views-CzvB8iRX.js`),[]));function $(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(t,{title:`Basics: dialogs`,children:`The four dialogs most apps need, each in one short file you can paste. Every one sits on the same stack, so Escape, focus and scroll lock behave the same everywhere.`}),(0,O.jsx)(E,{n:1,title:`Modal`,blurb:`A trigger, a title, a body and a button that closes it.`,code:z,children:(0,O.jsx)(R,{})}),(0,O.jsx)(E,{n:2,title:`Confirm`,blurb:`A yes / no question; onResult says which, and why it closed.`,code:N,children:(0,O.jsx)(M,{})}),(0,O.jsx)(E,{n:3,title:`Open from code and await the answer`,blurb:`defineOverlay declares it once; open(…).value() resolves with what the user picked.`,code:L,children:(0,O.jsx)(I,{})}),(0,O.jsx)(E,{n:4,title:`Close guard`,blurb:`Type in the field, then press Escape or Cancel: the dialog asks before throwing the text away.`,code:j,children:(0,O.jsx)(A,{})}),(0,O.jsx)(E,{n:5,title:`Bodies and a preset of your own`,blurb:`ConfirmBody (with async work) and ChooseBody opened from code; PresetOverlay with StandardLayout builds a new preset; CloseIcon and SpinnerIcon are the glyphs.`,code:U,children:(0,O.jsx)(H,{})}),(0,O.jsx)(E,{n:6,title:`The headless sugar views`,blurb:`DefaultGuardConfirmView, DefaultAlertView, DefaultPromptView and DefaultChooseView, registered with OverlayViewsProvider and wrapped in your own classes.`,code:Q,children:(0,O.jsx)(Z,{})})]})}export{$ as component};