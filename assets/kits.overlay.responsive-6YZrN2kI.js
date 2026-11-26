import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./overlay-Crmkxi6R.js";import{t as r}from"./input-DQo0XDsx.js";import{n as i}from"./keyboard-OUS5Uhqq.js";import{a,s as o}from"./responsive-DLeP7bmx.js";import{n as s,r as c,t as l}from"./presets-CrjzKOxJ.js";import{n as ee,t as u}from"./field-overlay-B7zXKtje.js";import{Bc as d,Cc as f,Cn as p,Ic as m,ti as h,wn as te}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as g}from"./example-BGnSQG2Y.js";var _=e(d(),1),v=m(),y={base:`bottom-sheet`,md:`center`};function b({spec:e}){let t=o(e),[n,i]=(0,_.useState)(0),[a]=(0,_.useState)(()=>crypto.randomUUID().slice(0,6));return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-mount-id":a,children:[(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`mount `,(0,v.jsx)(`code`,{"data-mount":``,children:a}),` · surface `,(0,v.jsx)(`b`,{"data-surface-label":``,children:t})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>i(e=>e+1),"data-inc":``,children:`Count`}),(0,v.jsx)(`span`,{className:`tabular-nums`,"data-count":``,children:n})]}),(0,v.jsx)(r,{className:`h-7`,placeholder:`Type, then resize the window`,"aria-label":`Scratch text`,"data-scratch":``})]})}function x({label:e,spec:t}){return(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[e,` →`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-resolved":e,children:o(t)})]})}function S({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function C(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function ne(){return(0,v.jsx)(p,{children:(0,v.jsxs)(S,{id:`phone-sheet`,children:[(0,v.jsx)(c,{surface:y,snapPoints:[.5,1],trigger:(0,v.jsx)(h,{size:`sm`,children:`Filters`}),title:`Filters`,footer:(0,v.jsx)(C,{}),children:(0,v.jsx)(b,{spec:y})}),(0,v.jsx)(x,{label:`filters`,spec:y})]})})}var w=`import { useState, type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, ResponsiveOverlay, type SurfaceSpec, useResolvedSurface } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Bottom sheet on phones, dialog from md (O26): The count, the typed text and the mount id survive a resize: the body is not remounted.

const PHONE_SHEET: SurfaceSpec = { base: "bottom-sheet", md: "center" }

/** Body with local state: if a surface switch remounted it, the count and mount id would reset. */
function StatefulBody({ spec }: { spec: SurfaceSpec }) {
  const surface = useResolvedSurface(spec)
  const [count, setCount] = useState(0)
  const [mountId] = useState(() => crypto.randomUUID().slice(0, 6))
  return (
    <div className="flex flex-col gap-2" data-mount-id={mountId}>
      <p className="text-muted-foreground">
        mount <code data-mount="">{mountId}</code> · surface <b data-surface-label="">{surface}</b>
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)} data-inc="">
          Count
        </Button>
        <span className="tabular-nums" data-count="">
          {count}
        </span>
      </div>
      <Input className="h-7" placeholder="Type, then resize the window" aria-label="Scratch text" data-scratch="" />
    </div>
  )
}

function Resolved({ label, spec }: { label: string; spec: SurfaceSpec }) {
  const now = useResolvedSurface(spec)
  return (
    <span className="text-muted-foreground">
      {label} →{" "}
      <b className="text-foreground" data-resolved={label}>
        {now}
      </b>
    </span>
  )
}

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function FiltersButton() {
  return (
    <EnsureOverlayUi>
      <Row id="phone-sheet">
        <ResponsiveOverlay surface={PHONE_SHEET} snapPoints={[0.5, 1]} trigger={<Button size="sm">Filters</Button>} title="Filters" footer={<Footer />}>
          <StatefulBody spec={PHONE_SHEET} />
        </ResponsiveOverlay>
        <Resolved label="filters" spec={PHONE_SHEET} />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>f(()=>import(`./responsive-phone-sheet-CXRmR3S8.js`),[]));var T={base:`fullscreen`,md:`center`};function E({spec:e}){let t=o(e),[n,i]=(0,_.useState)(0),[a]=(0,_.useState)(()=>crypto.randomUUID().slice(0,6));return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-mount-id":a,children:[(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`mount `,(0,v.jsx)(`code`,{"data-mount":``,children:a}),` · surface `,(0,v.jsx)(`b`,{"data-surface-label":``,children:t})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>i(e=>e+1),"data-inc":``,children:`Count`}),(0,v.jsx)(`span`,{className:`tabular-nums`,"data-count":``,children:n})]}),(0,v.jsx)(r,{className:`h-7`,placeholder:`Type, then resize the window`,"aria-label":`Scratch text`,"data-scratch":``})]})}function D({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function O(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function k(){return(0,v.jsx)(p,{children:(0,v.jsx)(D,{id:`fullscreen`,children:(0,v.jsx)(s,{fullscreenBelow:`md`,size:`lg`,trigger:(0,v.jsx)(h,{size:`sm`,variant:`outline`,children:`Compose`}),title:`New message`,footer:(0,v.jsx)(O,{}),children:(0,v.jsx)(E,{spec:T})})})})}var A=`import { useState, type ReactNode } from "react"
import { EnsureOverlayUi, Modal, Overlay, type SurfaceSpec, useResolvedSurface } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Fullscreen on phones, centred from md (O28): Modal with fullscreenBelow: one prop, no second component.

const FULLSCREEN_BELOW_MD: SurfaceSpec = { base: "fullscreen", md: "center" }

/** Body with local state: if a surface switch remounted it, the count and mount id would reset. */
function StatefulBody({ spec }: { spec: SurfaceSpec }) {
  const surface = useResolvedSurface(spec)
  const [count, setCount] = useState(0)
  const [mountId] = useState(() => crypto.randomUUID().slice(0, 6))
  return (
    <div className="flex flex-col gap-2" data-mount-id={mountId}>
      <p className="text-muted-foreground">
        mount <code data-mount="">{mountId}</code> · surface <b data-surface-label="">{surface}</b>
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)} data-inc="">
          Count
        </Button>
        <span className="tabular-nums" data-count="">
          {count}
        </span>
      </div>
      <Input className="h-7" placeholder="Type, then resize the window" aria-label="Scratch text" data-scratch="" />
    </div>
  )
}

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function ComposeButton() {
  return (
    <EnsureOverlayUi>
      <Row id="fullscreen">
        <Modal
          fullscreenBelow="md"
          size="lg"
          trigger={
            <Button size="sm" variant="outline">
              Compose
            </Button>
          }
          title="New message"
          footer={<Footer />}
        >
          <StatefulBody spec={FULLSCREEN_BELOW_MD} />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>f(()=>import(`./responsive-fullscreen-Bs34JYhK.js`),[]));function j({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function M(){let e=i(!0);return(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`keyboard inset`,` `,(0,v.jsxs)(`b`,{className:`text-foreground tabular-nums`,"data-keyboard-inset":``,children:[e.bottom,`px`]}),` `,`· viewport top `,(0,v.jsxs)(`b`,{className:`text-foreground tabular-nums`,children:[e.top,`px`]})]})}function N(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function P(){return(0,v.jsx)(p,{children:(0,v.jsx)(j,{id:`keyboard`,children:(0,v.jsx)(l,{snapPoints:[.5,1],trigger:(0,v.jsx)(h,{size:`sm`,variant:`outline`,children:`Quick add`}),title:`Quick add`,footer:(0,v.jsx)(N,{}),children:(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(r,{className:`h-7`,"aria-label":`Task name`,placeholder:`Task name`,"data-keyboard-field":``}),(0,v.jsx)(M,{})]})})})})}var F=`import { type ReactNode } from "react"
import { BottomSheet, EnsureOverlayUi, Overlay, useViewportInsets } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Above the phone keyboard (O51):
;<>
  On a phone, focus the field: the sheet sits on top of the keyboard with its Done button visible, and a half-snapped sheet shows whole until the keyboard closes. The inset comes from{" "}
  <code>visualViewport</code> (and the VirtualKeyboard API when the page sets <code>overlaysContent</code>); with <code>interactive-widget=resizes-content</code> it is 0 because the page itself
  shrank.
</>

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

/** Live readout of the keyboard inset the open overlay is using (0 on a desktop). */
function KeyboardReadout() {
  const insets = useViewportInsets(true)
  return (
    <p className="text-muted-foreground">
      keyboard inset{" "}
      <b className="text-foreground tabular-nums" data-keyboard-inset="">
        {insets.bottom}px
      </b>{" "}
      · viewport top <b className="text-foreground tabular-nums">{insets.top}px</b>
    </p>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function QuickAddButton() {
  return (
    <EnsureOverlayUi>
      <Row id="keyboard">
        <BottomSheet
          snapPoints={[0.5, 1]}
          trigger={
            <Button size="sm" variant="outline">
              Quick add
            </Button>
          }
          title="Quick add"
          footer={<Footer />}
        >
          <div className="flex flex-col gap-2">
            <Input className="h-7" aria-label="Task name" placeholder="Task name" data-keyboard-field="" />
            <KeyboardReadout />
          </div>
        </BottomSheet>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>f(()=>import(`./responsive-keyboard-CAF7vZXa.js`),[]));var I=Array.from({length:30},(e,t)=>t+1);function L({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function R(){let[e,t]=(0,_.useState)({body:0,fixedRight:0});return(0,_.useEffect)(()=>{let e=document.querySelector(`[data-shift-fixed]`),n=0,r=()=>{let i=Math.round(document.body.getBoundingClientRect().width),a=Math.round(e?.getBoundingClientRect().right??0);t(e=>e.body===i&&e.fixedRight===a?e:{body:i,fixedRight:a}),n=requestAnimationFrame(r)};return r(),()=>cancelAnimationFrame(n)},[]),(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[`body`,` `,(0,v.jsxs)(`b`,{className:`text-foreground tabular-nums`,"data-shift-body":``,children:[e.body,`px`]}),` `,`· fixed right edge`,` `,(0,v.jsxs)(`b`,{className:`text-foreground tabular-nums`,"data-shift-right":``,children:[e.fixedRight,`px`]})]})}function z(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function B(){return(0,v.jsx)(p,{children:(0,v.jsxs)(L,{id:`scroll-lock`,children:[(0,v.jsx)(s,{trigger:(0,v.jsx)(h,{size:`sm`,variant:`outline`,children:`Terms`}),title:`Terms`,footer:(0,v.jsx)(z,{}),children:(0,v.jsx)(`div`,{className:`flex flex-col gap-2`,children:I.map(e=>(0,v.jsxs)(`p`,{children:[`Clause `,e,`. The body scrolls inside the dialog while the page behind it stays put.`]},e))})}),(0,v.jsx)(R,{}),(0,v.jsx)(`span`,{"aria-hidden":`true`,"data-shift-fixed":``,className:`fixed right-0 bottom-0 h-2 w-2 bg-primary`})]})})}var V=`import { useEffect, useState, type ReactNode } from "react"
import { EnsureOverlayUi, Modal, Overlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Scroll lock without layout shift (O52): Open it on a page with a scrollbar: the page width and the fixed marker's right edge stay the same while the page is locked (the scrollbar's space is kept). On iOS a pan on the backdrop or the header does not rubber-band the page; the body still scrolls.

/** Enough clauses that the Terms body scrolls inside the dialog. */
const CLAUSES = Array.from({ length: 30 }, (_, i) => i + 1)

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

/** The page's width and the right edge of a fixed element, read every frame: a scroll lock that shifts the page changes them. */
function ShiftProbe() {
  const [m, setM] = useState({ body: 0, fixedRight: 0 })
  useEffect(() => {
    const fixed = document.querySelector<HTMLElement>("[data-shift-fixed]")
    let frame = 0
    const tick = () => {
      const body = Math.round(document.body.getBoundingClientRect().width)
      const fixedRight = Math.round(fixed?.getBoundingClientRect().right ?? 0)
      setM((prev) => (prev.body === body && prev.fixedRight === fixedRight ? prev : { body, fixedRight }))
      frame = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <span className="text-muted-foreground">
      body{" "}
      <b className="text-foreground tabular-nums" data-shift-body="">
        {m.body}px
      </b>{" "}
      · fixed right edge{" "}
      <b className="text-foreground tabular-nums" data-shift-right="">
        {m.fixedRight}px
      </b>
    </span>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function TermsButton() {
  return (
    <EnsureOverlayUi>
      <Row id="scroll-lock">
        <Modal
          trigger={
            <Button size="sm" variant="outline">
              Terms
            </Button>
          }
          title="Terms"
          footer={<Footer />}
        >
          <div className="flex flex-col gap-2">
            {CLAUSES.map((n) => (
              <p key={n}>Clause {n}. The body scrolls inside the dialog while the page behind it stays put.</p>
            ))}
          </div>
        </Modal>
        <ShiftProbe />
        <span aria-hidden="true" data-shift-fixed="" className="fixed right-0 bottom-0 h-2 w-2 bg-primary" />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>f(()=>import(`./responsive-scroll-lock-CcAo-ODv.js`),[]));var H={base:`bottom-sheet`,md:`center`};function U({spec:e}){let t=o(e),[n,i]=(0,_.useState)(0),[a]=(0,_.useState)(()=>crypto.randomUUID().slice(0,6));return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-mount-id":a,children:[(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`mount `,(0,v.jsx)(`code`,{"data-mount":``,children:a}),` · surface `,(0,v.jsx)(`b`,{"data-surface-label":``,children:t})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>i(e=>e+1),"data-inc":``,children:`Count`}),(0,v.jsx)(`span`,{className:`tabular-nums`,"data-count":``,children:n})]}),(0,v.jsx)(r,{className:`h-7`,placeholder:`Type, then resize the window`,"aria-label":`Scratch text`,"data-scratch":``})]})}function W({label:e,spec:t}){return(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[e,` →`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-resolved":e,children:o(t)})]})}function G({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function K(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function q(){return(0,v.jsx)(p,{children:(0,v.jsxs)(G,{id:`ssr`,children:[(0,v.jsx)(c,{surface:H,ssrSurface:`center`,trigger:(0,v.jsx)(h,{size:`sm`,variant:`outline`,children:`Filters (ssrSurface center)`}),title:`Filters`,footer:(0,v.jsx)(K,{}),children:(0,v.jsx)(U,{spec:H})}),(0,v.jsx)(W,{label:`ssr`,spec:H})]})})}var J=`import { useState, type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, ResponsiveOverlay, type SurfaceSpec, useResolvedSurface } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Server render and hydration (O46):
;<>
  The server renders <code>base</code>, or <code>ssrSurface</code> when the host knows the device class, and hydration agrees, so there is no mismatch. The open popup itself is not in the server HTML:
  it mounts on the client right after hydration, already on the client's surface (<code>ui/__tests__/ssr.test.tsx</code>).
</>

const PHONE_SHEET: SurfaceSpec = { base: "bottom-sheet", md: "center" }

/** Body with local state: if a surface switch remounted it, the count and mount id would reset. */
function StatefulBody({ spec }: { spec: SurfaceSpec }) {
  const surface = useResolvedSurface(spec)
  const [count, setCount] = useState(0)
  const [mountId] = useState(() => crypto.randomUUID().slice(0, 6))
  return (
    <div className="flex flex-col gap-2" data-mount-id={mountId}>
      <p className="text-muted-foreground">
        mount <code data-mount="">{mountId}</code> · surface <b data-surface-label="">{surface}</b>
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)} data-inc="">
          Count
        </Button>
        <span className="tabular-nums" data-count="">
          {count}
        </span>
      </div>
      <Input className="h-7" placeholder="Type, then resize the window" aria-label="Scratch text" data-scratch="" />
    </div>
  )
}

function Resolved({ label, spec }: { label: string; spec: SurfaceSpec }) {
  const now = useResolvedSurface(spec)
  return (
    <span className="text-muted-foreground">
      {label} →{" "}
      <b className="text-foreground" data-resolved={label}>
        {now}
      </b>
    </span>
  )
}

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function FiltersDeepLink() {
  return (
    <EnsureOverlayUi>
      <Row id="ssr">
        <ResponsiveOverlay
          surface={PHONE_SHEET}
          ssrSurface="center"
          trigger={
            <Button size="sm" variant="outline">
              Filters (ssrSurface center)
            </Button>
          }
          title="Filters"
          footer={<Footer />}
        >
          <StatefulBody spec={PHONE_SHEET} />
        </ResponsiveOverlay>
        <Resolved label="ssr" spec={PHONE_SHEET} />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>f(()=>import(`./responsive-ssr-CvdCtSzk.js`),[]));var Y={base:`bottom-sheet`,md:`sheet`};function X({spec:e}){let t=o(e),[n,i]=(0,_.useState)(0),[a]=(0,_.useState)(()=>crypto.randomUUID().slice(0,6));return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-mount-id":a,children:[(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`mount `,(0,v.jsx)(`code`,{"data-mount":``,children:a}),` · surface `,(0,v.jsx)(`b`,{"data-surface-label":``,children:t})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>i(e=>e+1),"data-inc":``,children:`Count`}),(0,v.jsx)(`span`,{className:`tabular-nums`,"data-count":``,children:n})]}),(0,v.jsx)(r,{className:`h-7`,placeholder:`Type, then resize the window`,"aria-label":`Scratch text`,"data-scratch":``})]})}function Z({label:e,spec:t}){return(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[e,` →`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-resolved":e,children:o(t)})]})}function re({id:e,children:t}){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function ie(){return(0,v.jsx)(n.Close,{render:(0,v.jsx)(h,{size:`sm`}),children:`Done`})}function ae(){return(0,v.jsx)(p,{children:(0,v.jsxs)(re,{id:`side`,children:[(0,v.jsx)(c,{surface:Y,side:`end`,width:`lg`,trigger:(0,v.jsx)(h,{size:`sm`,variant:`outline`,children:`Details`}),title:`Order #1042`,footer:(0,v.jsx)(ie,{}),children:(0,v.jsx)(X,{spec:Y})}),(0,v.jsx)(Z,{label:`details`,spec:Y})]})})}var Q=`import { useState, type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, ResponsiveOverlay, type SurfaceSpec, useResolvedSurface } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Bottom sheet on phones, side sheet from md: side and width apply while the resolved surface is a sheet.

const SIDE_ON_DESKTOP: SurfaceSpec = { base: "bottom-sheet", md: "sheet" }

/** Body with local state: if a surface switch remounted it, the count and mount id would reset. */
function StatefulBody({ spec }: { spec: SurfaceSpec }) {
  const surface = useResolvedSurface(spec)
  const [count, setCount] = useState(0)
  const [mountId] = useState(() => crypto.randomUUID().slice(0, 6))
  return (
    <div className="flex flex-col gap-2" data-mount-id={mountId}>
      <p className="text-muted-foreground">
        mount <code data-mount="">{mountId}</code> · surface <b data-surface-label="">{surface}</b>
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)} data-inc="">
          Count
        </Button>
        <span className="tabular-nums" data-count="">
          {count}
        </span>
      </div>
      <Input className="h-7" placeholder="Type, then resize the window" aria-label="Scratch text" data-scratch="" />
    </div>
  )
}

function Resolved({ label, spec }: { label: string; spec: SurfaceSpec }) {
  const now = useResolvedSurface(spec)
  return (
    <span className="text-muted-foreground">
      {label} →{" "}
      <b className="text-foreground" data-resolved={label}>
        {now}
      </b>
    </span>
  )
}

/** The trigger row of an example (\`data-example-row\` keeps the pre-gallery example id). */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function Footer() {
  return <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
}

export function OrderDetailsButton() {
  return (
    <EnsureOverlayUi>
      <Row id="side">
        <ResponsiveOverlay
          surface={SIDE_ON_DESKTOP}
          side="end"
          width="lg"
          trigger={
            <Button size="sm" variant="outline">
              Details
            </Button>
          }
          title="Order #1042"
          footer={<Footer />}
        >
          <StatefulBody spec={SIDE_ON_DESKTOP} />
        </ResponsiveOverlay>
        <Resolved label="details" spec={SIDE_ON_DESKTOP} />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>f(()=>import(`./responsive-side-BXs8X7vj.js`),[]));var oe=[`XS`,`S`,`M`,`L`,`XL`];function se(){let e=a(),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(`M`),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(1),[d,f]=(0,_.useState)(1);return(0,v.jsxs)(`div`,{className:`relative flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,v.jsxs)(h,{size:`sm`,variant:`outline`,"aria-expanded":t,onClick:()=>n(!t),children:[`Size `,r]}),(0,v.jsx)(u,{surface:e,open:t,onOpenChange:n,title:`Size`,popover:e=>(0,v.jsx)(`div`,{className:`absolute top-full left-0 z-10 mt-1 rounded-lg border bg-popover p-2 shadow-md`,children:e}),children:(0,v.jsx)(`div`,{className:`flex gap-1`,children:oe.map(e=>(0,v.jsx)(h,{size:`sm`,variant:e===r?`default`:`ghost`,"aria-pressed":e===r,onClick:()=>{i(e),n(!1)},children:e},e))})}),(0,v.jsxs)(h,{size:`sm`,variant:`outline`,onClick:()=>{l(d),s(!0)},children:[`Quantity `,d]}),(0,v.jsx)(ee,{open:o,onOpenChange:s,title:`Quantity`,closeButton:!1,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>s(!1),children:`Cancel`}),(0,v.jsx)(h,{size:`sm`,onClick:()=>{f(c),s(!1)},children:`Apply`})]}),children:(0,v.jsxs)(`div`,{className:`flex items-center gap-2 py-2`,children:[(0,v.jsx)(h,{size:`sm`,variant:`outline`,"aria-label":`Fewer`,onClick:()=>l(e=>Math.max(1,e-1)),children:`−`}),(0,v.jsx)(`span`,{className:`w-8 text-center tabular-nums`,"aria-live":`polite`,children:c}),(0,v.jsx)(h,{size:`sm`,variant:`outline`,"aria-label":`More`,onClick:()=>l(e=>e+1),children:`+`})]})}),(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[`surface `,(0,v.jsx)(`code`,{"data-field-surface":``,children:e})]})]})}var $=`import { useState } from "react"
import { FieldOverlay, FieldSheet, useFieldOverlaySurface } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// A field's picker on the one surface rule: FieldOverlay draws your panel as your own popover from md up with a mouse,
// and as a bottom sheet below md or on a touch screen (useFieldOverlaySurface decides; the form kit's pickers and the DatePicker use it too).
// FieldSheet is that sheet on its own, here with a footer pinned under its scrolling body.

const SIZES = ["XS", "S", "M", "L", "XL"] as const

export function FieldOverlayDemo() {
  const surface = useFieldOverlaySurface()
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState<string>("M")
  const [sheetOpen, setSheetOpen] = useState(false)
  const [draft, setDraft] = useState(1)
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="relative flex flex-wrap items-center gap-2 text-[13px]">
      <Button size="sm" variant="outline" aria-expanded={open} onClick={() => setOpen(!open)}>
        Size {size}
      </Button>
      <FieldOverlay surface={surface} open={open} onOpenChange={setOpen} title="Size" popover={(body) => <div className="absolute top-full left-0 z-10 mt-1 rounded-lg border bg-popover p-2 shadow-md">{body}</div>}>
        <div className="flex gap-1">
          {SIZES.map((s) => (
            <Button key={s} size="sm" variant={s === size ? "default" : "ghost"} aria-pressed={s === size} onClick={() => { setSize(s); setOpen(false) }}>
              {s}
            </Button>
          ))}
        </div>
      </FieldOverlay>
      <Button size="sm" variant="outline" onClick={() => { setDraft(quantity); setSheetOpen(true) }}>
        Quantity {quantity}
      </Button>
      <FieldSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        title="Quantity"
        closeButton={false}
        footer={
          <>
            <Button size="sm" variant="outline" onClick={() => setSheetOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={() => { setQuantity(draft); setSheetOpen(false) }}>
              Apply
            </Button>
          </>
        }
      >
        <div className="flex items-center gap-2 py-2">
          <Button size="sm" variant="outline" aria-label="Fewer" onClick={() => setDraft((d) => Math.max(1, d - 1))}>
            −
          </Button>
          <span className="w-8 text-center tabular-nums" aria-live="polite">{draft}</span>
          <Button size="sm" variant="outline" aria-label="More" onClick={() => setDraft((d) => d + 1)}>
            +
          </Button>
        </div>
      </FieldSheet>
      <span className="text-muted-foreground">
        surface <code data-field-surface="">{surface}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>f(()=>import(`./responsive-field-CXImERKU.js`),[]));function ce(){return(0,v.jsxs)(te,{children:[(0,v.jsxs)(t,{title:`Responsive surfaces`,children:[`Open one, then resize across 768 px: it changes surface without remounting. SSR: `,(0,v.jsx)(`code`,{children:`useResolvedSurface`}),` renders `,(0,v.jsx)(`code`,{children:`base`}),` (or `,(0,v.jsx)(`code`,{children:`ssrSurface`}),`) on the server and during hydration, then switches — no mismatch.`]}),(0,v.jsx)(g,{n:1,title:`Bottom sheet on phones, dialog from md (O26)`,blurb:`The count, the typed text and the mount id survive a resize: the body is not remounted.`,code:w,children:(0,v.jsx)(ne,{})}),(0,v.jsx)(g,{n:2,title:`Fullscreen on phones, centred from md (O28)`,blurb:`Modal with fullscreenBelow: one prop, no second component.`,code:A,children:(0,v.jsx)(k,{})}),(0,v.jsx)(g,{n:3,title:`Bottom sheet on phones, side sheet from md`,blurb:`side and width apply while the resolved surface is a sheet.`,code:Q,children:(0,v.jsx)(ae,{})}),(0,v.jsx)(g,{n:4,title:`Above the phone keyboard (O51)`,blurb:(0,v.jsxs)(v.Fragment,{children:[`On a phone, focus the field: the sheet sits on top of the keyboard with its Done button visible, and a half-snapped sheet shows whole until the keyboard closes. The inset comes from `,(0,v.jsx)(`code`,{children:`visualViewport`}),` (and the VirtualKeyboard API when the page sets`,` `,(0,v.jsx)(`code`,{children:`overlaysContent`}),`); with `,(0,v.jsx)(`code`,{children:`interactive-widget=resizes-content`}),` it is 0 because the page itself shrank.`]}),code:F,children:(0,v.jsx)(P,{})}),(0,v.jsx)(g,{n:5,title:`Scroll lock without layout shift (O52)`,blurb:`Open it on a page with a scrollbar: the page width and the fixed marker's right edge stay the same while the page is locked (the scrollbar's space is kept). On iOS a pan on the backdrop or the header does not rubber-band the page; the body still scrolls.`,code:V,children:(0,v.jsx)(B,{})}),(0,v.jsx)(g,{n:6,title:`Server render and hydration (O46)`,blurb:(0,v.jsxs)(v.Fragment,{children:[`The server renders `,(0,v.jsx)(`code`,{children:`base`}),`, or `,(0,v.jsx)(`code`,{children:`ssrSurface`}),` when the host knows the device class, and hydration agrees, so there is no mismatch. The open popup itself is not in the server HTML: it mounts on the client right after hydration, already on the client's surface (`,(0,v.jsx)(`code`,{children:`ui/__tests__/ssr.test.tsx`}),`).`]}),code:J,children:(0,v.jsx)(q,{})}),(0,v.jsx)(g,{n:7,title:`A field's picker: popover or bottom sheet`,blurb:`FieldOverlay shows your panel as your own popover from md up with a mouse, and as a bottom sheet below md or on a touch screen (useFieldOverlaySurface: the one rule the form kit's pickers and the pickers kit's DatePicker share). FieldSheet is the sheet on its own; here its footer (Cancel / Apply) stays pinned under the scrolling body.`,code:$,children:(0,v.jsx)(se,{})})]})}export{ce as component};