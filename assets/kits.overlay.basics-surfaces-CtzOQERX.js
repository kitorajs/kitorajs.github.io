import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{r as t}from"./anchored-surface-CTW9t0uW.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./overlay-DzNw4sCe.js";import{t as i}from"./menu-overlay-item-pueStC31.js";import{n as a,t as o}from"./popover-CXL0v60V.js";import{i as s,n as c}from"./parts-CPD-RYH5.js";import{i as l,n as u,t as d}from"./inline-surface-CAZBT5bN.js";import{s as f}from"./confirm-CQ9jnarK.js";import{i as p,t as m}from"./presets-HOFCkHuH.js";import{i as h}from"./opener-CKS-Gji6.js";import{Bc as g,Cc as _,Fn as v,Ic as y,Mr as b,Rn as x,Tn as S,Un as C,Vr as w,er as T,lr as E,ti as D,ur as O,wn as k}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as A}from"./example-B8EaWveR.js";var j=y();function M(){return(0,j.jsx)(k,{children:(0,j.jsx)(m,{trigger:(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Share…`}),title:`Share`,footer:(0,j.jsx)(r.Close,{render:(0,j.jsx)(D,{size:`sm`,variant:`outline`}),children:`Close`}),children:(0,j.jsxs)(`div`,{className:`flex gap-2 text-[13px]`,children:[(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Copy link`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Email`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Message`})]})})})}var N=`import { Button } from "@kitora/ui/button"
import { BottomSheet, Overlay, OverlayUiProvider } from "@kitora/overlay"

// A sheet from the bottom edge, the phone pattern: drag the handle down (or press Escape) to close.
export function BasicBottomSheet() {
  return (
    <OverlayUiProvider>
      <BottomSheet
        trigger={<Button size="sm" variant="outline">Share…</Button>}
        title="Share"
        footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Close</Overlay.Close>}
      >
        <div className="flex gap-2 text-[13px]">
          <Button size="sm" variant="outline">Copy link</Button>
          <Button size="sm" variant="outline">Email</Button>
          <Button size="sm" variant="outline">Message</Button>
        </div>
      </BottomSheet>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>_(()=>import(`./bottom-sheet-CwdYIVYN.js`),[]));var P=e(g(),1);function F(){let e=b();return(0,j.jsxs)(`div`,{className:`flex gap-2 p-4`,children:[(0,j.jsx)(D,{size:`sm`,onClick:()=>e.resolve(`renamed`),children:`Rename`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>void e.close(),children:`Cancel`})]})}function I(){let[e,t]=(0,P.useState)(`nothing yet`);return(0,j.jsx)(k,{children:(0,j.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,j.jsxs)(v,{children:[(0,j.jsx)(T,{render:(0,j.jsx)(D,{size:`sm`,variant:`outline`}),children:`Actions`}),(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{onClick:()=>t(`duplicated`),children:`Duplicate`}),(0,j.jsx)(i,{overlay:{name:`rename`,surface:`center`},onResult:e=>t(e.status===`resolved`?e.value:`rename cancelled`),render:()=>(0,j.jsx)(F,{}),children:`Rename…`})]})]}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`basic-menu`,children:e})]})})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { MenuOverlayItem, OverlayUiProvider, useOverlay } from "@kitora/overlay"

function RenameBody() {
  const ctl = useOverlay<string>()
  return (
    <div className="flex gap-2 p-4">
      <Button size="sm" onClick={() => ctl.resolve("renamed")}>Rename</Button>
      <Button size="sm" variant="outline" onClick={() => void ctl.close()}>Cancel</Button>
    </div>
  )
}

// A menu anchored to its button. A plain item runs an action; a MenuOverlayItem closes the menu,
// opens a dialog, and returns focus to the button afterwards.
export function BasicMenu() {
  const [last, setLast] = useState("nothing yet")
  return (
    <OverlayUiProvider>
      <div className="flex items-center gap-2 text-[13px]">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button size="sm" variant="outline" />}>Actions</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLast("duplicated")}>Duplicate</DropdownMenuItem>
            <MenuOverlayItem<string> overlay={{ name: "rename", surface: "center" }} onResult={(r) => setLast(r.status === "resolved" ? r.value : "rename cancelled")} render={() => <RenameBody />}>
              Rename…
            </MenuOverlayItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-muted-foreground" data-demo="basic-menu">{last}</span>
      </div>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>_(()=>import(`./menu-BO_sKEX0.js`),[]));function R(){return(0,j.jsx)(k,{children:(0,j.jsx)(a,{trigger:(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Who can see this?`}),title:`Visibility`,side:`bottom`,align:`start`,children:(0,j.jsx)(`p`,{className:`max-w-56 text-[13px] text-muted-foreground`,children:`Everyone in the Design workspace. Guests see it only when invited.`})})})}var z=`import { Button } from "@kitora/ui/button"
import { OverlayUiProvider, Popover } from "@kitora/overlay"

// A non-modal bubble anchored to its trigger: the page stays usable, an outside click closes it.
export function BasicPopover() {
  return (
    <OverlayUiProvider>
      <Popover trigger={<Button size="sm" variant="outline">Who can see this?</Button>} title="Visibility" side="bottom" align="start">
        <p className="max-w-56 text-[13px] text-muted-foreground">Everyone in the Design workspace. Guests see it only when invited.</p>
      </Popover>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>_(()=>import(`./popover-CNRMyXV4.js`),[]));function B(){return(0,j.jsx)(k,{children:(0,j.jsx)(p,{trigger:(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Open sheet`}),title:`Filters`,description:`Narrow the task list.`,footer:(0,j.jsx)(r.Close,{render:(0,j.jsx)(D,{size:`sm`}),children:`Apply`}),children:(0,j.jsxs)(`ul`,{className:`flex flex-col gap-1 text-[13px]`,children:[(0,j.jsx)(`li`,{children:`Assigned to me`}),(0,j.jsx)(`li`,{children:`Due this week`}),(0,j.jsx)(`li`,{children:`High priority`})]})})})}var V=`import { Button } from "@kitora/ui/button"
import { Overlay, OverlayUiProvider, Sheet } from "@kitora/overlay"

// A panel that slides in from the end edge (the right in left-to-right pages). Swipe it back to close.
export function BasicSheet() {
  return (
    <OverlayUiProvider>
      <Sheet
        trigger={<Button size="sm" variant="outline">Open sheet</Button>}
        title="Filters"
        description="Narrow the task list."
        footer={<Overlay.Close render={<Button size="sm" />}>Apply</Overlay.Close>}
      >
        <ul className="flex flex-col gap-1 text-[13px]">
          <li>Assigned to me</li>
          <li>Due this week</li>
          <li>High priority</li>
        </ul>
      </Sheet>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>_(()=>import(`./sheet--2DG2RFD.js`),[]));function H(e){let n=e.surface===`anchored`?t:e.surface===`inline`?u:l;return(0,j.jsx)(`div`,{"data-demo-surface":e.surface,className:`contents`,children:(0,j.jsx)(n,{...e})})}function U({surface:e}){let t=(0,j.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Drawn by the renderer for “`,e,`”.`]});return e===`anchored`?(0,j.jsx)(`div`,{className:`w-52`,children:t}):e===`inline`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d,{title:`Inline panel`}),(0,j.jsx)(`div`,{className:`p-3`,children:t})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s,{title:`Centered dialog`}),(0,j.jsx)(c,{children:t})]})}function W(){let e=h(),[t,n]=(0,P.useState)(`—`),r=(t,n)=>{e.openRender(()=>(0,j.jsx)(U,{surface:n}),{kind:n===`anchored`?`popover`:n===`inline`?`panel`:`dialog`,surface:n,modal:n===`inline`?!1:void 0,anchor:n===`anchored`?t.currentTarget:void 0,presentation:n===`inline`?{width:`sm`}:void 0})};return(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-wrap items-center gap-2 text-[13px]`,children:[(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:e=>r(e,`center`),children:`ModalRoot`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:e=>r(e,`anchored`),children:`AnchoredSurface`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:e=>r(e,`inline`),children:`InlineSurface`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>void e.confirm({title:`Leave without saving?`,destructive:!0}).then(e=>n(`confirm: ${e}`)),children:`ConfirmView`}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`renderer-result`,children:t})]})}function G(){return(0,j.jsx)(k,{renderer:H,confirmView:f,children:(0,j.jsx)(`div`,{className:`flex`,children:(0,j.jsx)(O,{children:(0,j.jsx)(W,{})})})})}var K=`import { useState, type MouseEvent } from "react"
import { Button } from "@kitora/ui/button"
import { AnchoredSurface, ConfirmView, InlineHeader, InlineSurface, ModalRoot, OverlayBody, OverlayHeader, OverlayScope, OverlayUiProvider, useOverlays, type OverlaySurface, type SurfaceRenderProps } from "@kitora/overlay"

// OverlayUiProvider's renderer and confirm view, wired by hand: ModalRoot draws the dialog and
// sheet surfaces, AnchoredSurface popovers, InlineSurface push panels; ConfirmView is the styled
// confirm. A host renderer can wrap or replace any of the three (here it tags each with its surface).
function Renderer(props: SurfaceRenderProps) {
  const Surface = props.surface === "anchored" ? AnchoredSurface : props.surface === "inline" ? InlineSurface : ModalRoot
  return (
    <div data-demo-surface={props.surface} className="contents">
      <Surface {...props} />
    </div>
  )
}

function Body({ surface }: { surface: OverlaySurface }) {
  const text = <p className="text-[13px] text-muted-foreground">Drawn by the renderer for “{surface}”.</p>
  if (surface === "anchored") return <div className="w-52">{text}</div>
  if (surface === "inline") {
    return (
      <>
        <InlineHeader title="Inline panel" />
        <div className="p-3">{text}</div>
      </>
    )
  }
  return (
    <>
      <OverlayHeader title="Centered dialog" />
      <OverlayBody>{text}</OverlayBody>
    </>
  )
}

function Openers() {
  const overlays = useOverlays()
  const [last, setLast] = useState("—")
  const open = (event: MouseEvent<HTMLButtonElement>, surface: OverlaySurface) => {
    overlays.openRender(() => <Body surface={surface} />, {
      kind: surface === "anchored" ? "popover" : surface === "inline" ? "panel" : "dialog",
      surface,
      modal: surface === "inline" ? false : undefined,
      anchor: surface === "anchored" ? event.currentTarget : undefined,
      presentation: surface === "inline" ? { width: "sm" } : undefined,
    })
  }
  return (
    <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 text-[13px]">
      <Button size="sm" variant="outline" onClick={(e) => open(e, "center")}>ModalRoot</Button>
      <Button size="sm" variant="outline" onClick={(e) => open(e, "anchored")}>AnchoredSurface</Button>
      <Button size="sm" variant="outline" onClick={(e) => open(e, "inline")}>InlineSurface</Button>
      <Button size="sm" variant="outline" onClick={() => void overlays.confirm({ title: "Leave without saving?", destructive: true }).then((ok) => setLast(\`confirm: \${ok}\`))}>ConfirmView</Button>
      <span className="text-muted-foreground" data-demo="renderer-result">{last}</span>
    </div>
  )
}

export function BasicCustomRenderer() {
  return (
    <OverlayUiProvider renderer={Renderer} confirmView={ConfirmView}>
      <div className="flex">
        <OverlayScope>
          <Openers />
        </OverlayScope>
      </div>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>_(()=>import(`./custom-renderer-DjxfSIzC.js`),[]));function q(){let e=w(),[t,n]=(0,P.useState)(null),r=(0,P.useCallback)(()=>n(null),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>n(e.stack.open({kind:`dialog`,name:`own-host`})),children:`EntryView`}),t?(0,j.jsxs)(E,{id:t.id,ticket:t,surface:`center`,onSettled:r,children:[(0,j.jsx)(s,{title:`From your own host`}),(0,j.jsx)(c,{children:(0,j.jsx)(D,{size:`sm`,onClick:()=>t.resolve(`done`),children:`Done`})})]}):null]})}function J(){let e=(0,P.useRef)(null),[t,n]=(0,P.useState)(!1);return(0,j.jsxs)(S,{className:`flex flex-wrap items-center gap-2 rounded-lg border p-3 text-[13px]`,children:[(0,j.jsxs)(m,{indent:!0,title:`Filters`,trigger:(0,j.jsx)(D,{size:`sm`,variant:`outline`,children:`Indent sheet`}),children:[(0,j.jsx)(`p`,{className:`text-muted-foreground`,children:`The page behind scales back while this is open.`}),(0,j.jsx)(r.Close,{render:(0,j.jsx)(D,{size:`sm`,variant:`outline`}),children:`Close`})]}),(0,j.jsx)(`span`,{ref:e,className:`rounded-full border px-2 py-0.5 text-[12px]`,children:`Build: passing`}),(0,j.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>n(!0),children:`Explain status`}),(0,j.jsx)(o,{anchor:e,open:t,onOpenChange:n,title:`Build status`,side:`bottom`,children:(0,j.jsx)(`p`,{className:`max-w-56 text-muted-foreground`,children:`All 212 checks passed on the last push.`})}),(0,j.jsx)(q,{})]})}function Y(){return(0,j.jsx)(k,{children:(0,j.jsx)(J,{})})}var X=`import { useCallback, useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { AnchoredPopover, BottomSheet, EntryView, Overlay, OverlayBody, OverlayHeader, OverlayIndent, OverlayUiProvider, useOverlayRuntime, type OverlayTicket } from "@kitora/overlay"

// Three lower-level pieces. OverlayIndent wraps the page so an \`indent\` bottom sheet scales it
// back. AnchoredPopover opens against any element (here a status chip), with no trigger of its own.
// EntryView draws one stack entry through the provider's renderer: a host of your own opens a
// ticket on the runtime's stack and renders it.
function OwnHost() {
  const runtime = useOverlayRuntime()
  const [ticket, setTicket] = useState<OverlayTicket<string> | null>(null)
  const settled = useCallback(() => setTicket(null), [])
  return (
    <>
      <Button size="sm" variant="outline" onClick={() => setTicket(runtime.stack.open<string>({ kind: "dialog", name: "own-host" }))}>EntryView</Button>
      {ticket ? (
        <EntryView id={ticket.id} ticket={ticket} surface="center" onSettled={settled}>
          <OverlayHeader title="From your own host" />
          <OverlayBody>
            <Button size="sm" onClick={() => ticket.resolve("done")}>Done</Button>
          </OverlayBody>
        </EntryView>
      ) : null}
    </>
  )
}

function Page() {
  const chip = useRef<HTMLSpanElement>(null)
  const [statusOpen, setStatusOpen] = useState(false)
  return (
    <OverlayIndent className="flex flex-wrap items-center gap-2 rounded-lg border p-3 text-[13px]">
      <BottomSheet indent title="Filters" trigger={<Button size="sm" variant="outline">Indent sheet</Button>}>
        <p className="text-muted-foreground">The page behind scales back while this is open.</p>
        <Overlay.Close render={<Button size="sm" variant="outline" />}>Close</Overlay.Close>
      </BottomSheet>
      <span ref={chip} className="rounded-full border px-2 py-0.5 text-[12px]">Build: passing</span>
      <Button size="sm" variant="outline" onClick={() => setStatusOpen(true)}>Explain status</Button>
      <AnchoredPopover anchor={chip} open={statusOpen} onOpenChange={setStatusOpen} title="Build status" side="bottom">
        <p className="max-w-56 text-muted-foreground">All 212 checks passed on the last push.</p>
      </AnchoredPopover>
      <OwnHost />
    </OverlayIndent>
  )
}

export function BasicIndentEntry() {
  return (
    <OverlayUiProvider>
      <Page />
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>_(()=>import(`./indent-entry-BmXDvD7_.js`),[]));function Z(){return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(n,{title:`Basics: sheets, popovers and menus`,children:`Panels that slide in from an edge, and small surfaces anchored to the button that opened them.`}),(0,j.jsx)(A,{n:1,title:`Sheet`,blurb:`Slides in from the end edge; swipe it back or press Escape to close.`,code:V,children:(0,j.jsx)(B,{})}),(0,j.jsx)(A,{n:2,title:`Bottom sheet`,blurb:`The phone pattern: drag the handle down to close.`,code:N,children:(0,j.jsx)(M,{})}),(0,j.jsx)(A,{n:3,title:`Popover`,blurb:`Anchored to its trigger and non-modal: the page stays usable.`,code:z,children:(0,j.jsx)(R,{})}),(0,j.jsx)(A,{n:4,title:`Menu anchored to a button`,blurb:`A plain item runs an action; Rename… opens a dialog and returns focus to Actions when it closes.`,code:L,children:(0,j.jsx)(I,{})}),(0,j.jsx)(A,{n:5,title:`A renderer wired by hand`,blurb:`OverlayUiProvider's renderer built from ModalRoot, AnchoredSurface and InlineSurface, with ConfirmView as the confirm view.`,code:K,children:(0,j.jsx)(G,{})}),(0,j.jsx)(A,{n:6,title:`Indent, anchor-only popover and your own host`,blurb:`OverlayIndent scales the page behind an indent bottom sheet; AnchoredPopover opens against a status chip; EntryView draws a stack entry from a host of your own.`,code:X,children:(0,j.jsx)(Y,{})})]})}export{Z as component};