import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./overlay-DqjGYZmU.js";import{i as r}from"./preset-zwlJxGrb.js";import{i,n as a,t as o}from"./presets-B7T12Ync.js";import{Dn as s,Ec as c,En as l,Tn as u,Uc as d,ri as f,zc as p}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";var h=e(d(),1),g=p();function _({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function v({rows:e=40}){return(0,g.jsx)(`ul`,{className:`flex flex-col divide-y`,children:Array.from({length:e},(e,t)=>(0,g.jsxs)(`li`,{className:`flex justify-between py-1.5 tabular-nums`,children:[(0,g.jsxs)(`span`,{children:[`Activity #`,t+1]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[t*7%60,` min ago`]})]},t))})}function y(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function b(){return(0,g.jsx)(u,{children:(0,g.jsx)(_,{id:`sides`,children:[`start`,`end`,`top`,`bottom`].map(e=>(0,g.jsx)(i,{side:e,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,"data-open-side":e,children:e}),title:`Sheet — ${e}`,footer:(0,g.jsx)(y,{}),children:(0,g.jsx)(v,{rows:e===`top`||e===`bottom`?8:40})},e))})})}var x=`import { type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, Sheet } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Logical sides: start/end follow the document direction (RTL mirrors side and swipe). Each swipes toward its edge.

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function LongList({ rows = 40 }: { rows?: number }) {
  return (
    <ul className="flex flex-col divide-y">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex justify-between py-1.5 tabular-nums">
          <span>Activity #{i + 1}</span>
          <span className="text-muted-foreground">{(i * 7) % 60} min ago</span>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function ActivitySheets() {
  return (
    <EnsureOverlayUi>
      <Row id="sides">
        {(["start", "end", "top", "bottom"] as const).map((side) => (
          <Sheet
            key={side}
            side={side}
            trigger={
              <Button size="sm" variant="outline" data-open-side={side}>
                {side}
              </Button>
            }
            title={\`Sheet — \${side}\`}
            footer={<Footer />}
          >
            <LongList rows={side === "top" || side === "bottom" ? 8 : 40} />
          </Sheet>
        ))}
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>c(()=>import(`./sheets-sides-CqOdO6r4.js`),[]));function S({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function C({rows:e=40}){return(0,g.jsx)(`ul`,{className:`flex flex-col divide-y`,children:Array.from({length:e},(e,t)=>(0,g.jsxs)(`li`,{className:`flex justify-between py-1.5 tabular-nums`,children:[(0,g.jsxs)(`span`,{children:[`Activity #`,t+1]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[t*7%60,` min ago`]})]},t))})}function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function T(){return(0,g.jsx)(u,{children:(0,g.jsx)(S,{id:`widths`,children:[`sm`,`md`,`lg`,`xl`].map(e=>(0,g.jsx)(i,{width:e,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:e}),title:`Width ${e}`,footer:(0,g.jsx)(w,{}),children:(0,g.jsx)(C,{rows:12})},e))})})}var E=`import { type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, Sheet } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Width tokens (O30): sm 320 · md 400 · lg 560 · xl 720, or a pixel number; never more than the viewport.

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function LongList({ rows = 40 }: { rows?: number }) {
  return (
    <ul className="flex flex-col divide-y">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex justify-between py-1.5 tabular-nums">
          <span>Activity #{i + 1}</span>
          <span className="text-muted-foreground">{(i * 7) % 60} min ago</span>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function WidthSheets() {
  return (
    <EnsureOverlayUi>
      <Row id="widths">
        {(["sm", "md", "lg", "xl"] as const).map((width) => (
          <Sheet
            key={width}
            width={width}
            trigger={
              <Button size="sm" variant="outline">
                {width}
              </Button>
            }
            title={\`Width \${width}\`}
            footer={<Footer />}
          >
            <LongList rows={12} />
          </Sheet>
        ))}
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>c(()=>import(`./sheets-widths-BfQOjYBB.js`),[]));var D=`kitora.overlay.sheets.width`;function O({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function k({rows:e=40}){return(0,g.jsx)(`ul`,{className:`flex flex-col divide-y`,children:Array.from({length:e},(e,t)=>(0,g.jsxs)(`li`,{className:`flex justify-between py-1.5 tabular-nums`,children:[(0,g.jsxs)(`span`,{children:[`Activity #`,t+1]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[t*7%60,` min ago`]})]},t))})}function A(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function j(){return(0,g.jsx)(u,{children:(0,g.jsx)(O,{id:`resizable`,children:(0,g.jsx)(i,{resizable:!0,persistWidthKey:D,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`Inspector`}),title:`Inspector`,description:`Resizable between 280 px and 92% of the viewport.`,footer:(0,g.jsx)(A,{}),children:(0,g.jsx)(k,{})})})})}var M=`import { type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, Sheet } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Resizable, width persisted: Drag the inner edge (or focus it and use ←/→, Shift for bigger steps). Reopen or reload: the width is kept.

/** Persisted width of the resizable demo sheet. */
const RESIZE_KEY = "kitora.overlay.sheets.width"

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function LongList({ rows = 40 }: { rows?: number }) {
  return (
    <ul className="flex flex-col divide-y">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex justify-between py-1.5 tabular-nums">
          <span>Activity #{i + 1}</span>
          <span className="text-muted-foreground">{(i * 7) % 60} min ago</span>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function InspectorSheet() {
  return (
    <EnsureOverlayUi>
      <Row id="resizable">
        <Sheet
          resizable
          persistWidthKey={RESIZE_KEY}
          trigger={
            <Button size="sm" variant="outline">
              Inspector
            </Button>
          }
          title="Inspector"
          description="Resizable between 280 px and 92% of the viewport."
          footer={<Footer />}
        >
          <LongList />
        </Sheet>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>c(()=>import(`./sheets-resizable-Ddxxct-a.js`),[]));function N({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function P(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function F(){return(0,g.jsx)(u,{children:(0,g.jsx)(N,{id:`non-modal`,children:(0,g.jsx)(i,{modal:!1,dismiss:{outside:!1},trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`Open notes`}),title:`Notes`,width:`sm`,footer:(0,g.jsx)(P,{}),children:(0,g.jsx)(`p`,{className:`text-muted-foreground`,children:`Scroll the page and click its buttons while this is open.`})})})})}var I=`import { type ReactNode } from "react"
import { EnsureOverlayUi, Overlay, Sheet } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Non-modal sheet: modal={false}: no backdrop, no scroll lock, the page stays usable; Escape still closes it while focus is inside.

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function NotesSheet() {
  return (
    <EnsureOverlayUi>
      <Row id="non-modal">
        <Sheet
          modal={false}
          dismiss={{ outside: false }}
          trigger={
            <Button size="sm" variant="outline">
              Open notes
            </Button>
          }
          title="Notes"
          width="sm"
          footer={<Footer />}
        >
          <p className="text-muted-foreground">Scroll the page and click its buttons while this is open.</p>
        </Sheet>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>c(()=>import(`./sheets-non-modal-C-2bIuJ5.js`),[]));function L({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function R({rows:e=40}){return(0,g.jsx)(`ul`,{className:`flex flex-col divide-y`,children:Array.from({length:e},(e,t)=>(0,g.jsxs)(`li`,{className:`flex justify-between py-1.5 tabular-nums`,children:[(0,g.jsxs)(`span`,{children:[`Activity #`,t+1]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[t*7%60,` min ago`]})]},t))})}function z(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function B(){return(0,g.jsx)(u,{children:(0,g.jsxs)(L,{id:`sizes`,children:[r.map(e=>(0,g.jsx)(a,{size:e,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:e}),title:`Size ${e}`,footer:(0,g.jsx)(z,{}),children:(0,g.jsxs)(`p`,{className:`text-muted-foreground`,children:[`A `,e,` modal. The quick brown fox jumps over the lazy dog.`]})},e)),(0,g.jsx)(a,{scroll:`body`,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`scroll body`}),title:`Scrolling body`,footer:(0,g.jsx)(z,{}),children:(0,g.jsx)(R,{})}),(0,g.jsx)(a,{scroll:`overlay`,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`scroll overlay`}),title:`Scrolling overlay`,footer:(0,g.jsx)(z,{}),children:(0,g.jsx)(R,{})})]})})}var V=`import { type ReactNode } from "react"
import { EnsureOverlayUi, Modal, MODAL_SIZES, Overlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Modal sizes and scroll modes (O29, O30): scroll=body keeps header and footer sticky; scroll=overlay scrolls the whole dialog.

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function LongList({ rows = 40 }: { rows?: number }) {
  return (
    <ul className="flex flex-col divide-y">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex justify-between py-1.5 tabular-nums">
          <span>Activity #{i + 1}</span>
          <span className="text-muted-foreground">{(i * 7) % 60} min ago</span>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function ModalSizes() {
  return (
    <EnsureOverlayUi>
      <Row id="sizes">
        {MODAL_SIZES.map((size) => (
          <Modal
            key={size}
            size={size}
            trigger={
              <Button size="sm" variant="outline">
                {size}
              </Button>
            }
            title={\`Size \${size}\`}
            footer={<Footer />}
          >
            <p className="text-muted-foreground">A {size} modal. The quick brown fox jumps over the lazy dog.</p>
          </Modal>
        ))}
        <Modal
          scroll="body"
          trigger={
            <Button size="sm" variant="outline">
              scroll body
            </Button>
          }
          title="Scrolling body"
          footer={<Footer />}
        >
          <LongList />
        </Modal>
        <Modal
          scroll="overlay"
          trigger={
            <Button size="sm" variant="outline">
              scroll overlay
            </Button>
          }
          title="Scrolling overlay"
          footer={<Footer />}
        >
          <LongList />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>c(()=>import(`./sheets-sizes-B9Inr_Rh.js`),[]));var H=[.35,.7,1];function U(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function W({id:e,children:t}){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":e,children:t})}function G({rows:e=40}){return(0,g.jsx)(`ul`,{className:`flex flex-col divide-y`,children:Array.from({length:e},(e,t)=>(0,g.jsxs)(`li`,{className:`flex justify-between py-1.5 tabular-nums`,children:[(0,g.jsxs)(`span`,{children:[`Activity #`,t+1]}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,children:[t*7%60,` min ago`]})]},t))})}function K(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,g.jsx)(n.Close,{render:(0,g.jsx)(f,{size:`sm`}),children:`Done`})]})}function q(){let[e,t]=(0,h.useState)(H[0]??null),[n,r]=(0,h.useState)(`—`);return(0,g.jsx)(u,{children:(0,g.jsxs)(W,{id:`bottom`,children:[(0,g.jsx)(o,{trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`Basic`}),title:`Share`,footer:(0,g.jsx)(K,{}),children:(0,g.jsx)(`p`,{className:`text-muted-foreground`,children:`Content-height bottom sheet.`})}),(0,g.jsx)(o,{trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`Snap points`}),title:`Directions`,snapPoints:H,snapPoint:e,onSnapPointChange:t,onResult:e=>r(U(e)),children:(0,g.jsx)(G,{})}),(0,g.jsx)(o,{indent:!0,trigger:(0,g.jsx)(f,{size:`sm`,variant:`outline`,children:`With indent`}),title:`Photo details`,footer:(0,g.jsx)(K,{}),children:(0,g.jsx)(`p`,{className:`text-muted-foreground`,children:`The page behind scales back while this is open.`})}),(0,g.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`snap`,` `,(0,g.jsx)(`b`,{className:`text-foreground`,"data-snap":``,children:String(e)}),` `,`· last result `,(0,g.jsx)(`b`,{className:`text-foreground`,children:n})]})]})})}var J=`import { useState, type ReactNode } from "react"
import { BottomSheet, EnsureOverlayUi, Overlay, type OverlayResult, type SnapPoint } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Bottom sheets (O27, O35): Drag the handle between 35%, 70% and full; swipe down past the lowest point to dismiss. Indent scales the page behind.

const SNAPS: readonly SnapPoint[] = [0.35, 0.7, 1]

function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example. */
function Row({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row={id}>
      {children}
    </div>
  )
}

function LongList({ rows = 40 }: { rows?: number }) {
  return (
    <ul className="flex flex-col divide-y">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex justify-between py-1.5 tabular-nums">
          <span>Activity #{i + 1}</span>
          <span className="text-muted-foreground">{(i * 7) % 60} min ago</span>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>
    </>
  )
}

export function DirectionsSheet() {
  const [snap, setSnap] = useState<SnapPoint | null>(SNAPS[0] ?? null)
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="bottom">
        <BottomSheet
          trigger={
            <Button size="sm" variant="outline">
              Basic
            </Button>
          }
          title="Share"
          footer={<Footer />}
        >
          <p className="text-muted-foreground">Content-height bottom sheet.</p>
        </BottomSheet>
        <BottomSheet
          trigger={
            <Button size="sm" variant="outline">
              Snap points
            </Button>
          }
          title="Directions"
          snapPoints={SNAPS}
          snapPoint={snap}
          onSnapPointChange={setSnap}
          onResult={(r) => setResult(describe(r))}
        >
          <LongList />
        </BottomSheet>
        <BottomSheet
          indent
          trigger={
            <Button size="sm" variant="outline">
              With indent
            </Button>
          }
          title="Photo details"
          footer={<Footer />}
        >
          <p className="text-muted-foreground">The page behind scales back while this is open.</p>
        </BottomSheet>
        <span className="text-muted-foreground tabular-nums">
          snap{" "}
          <b className="text-foreground" data-snap="">
            {String(snap)}
          </b>{" "}
          · last result <b className="text-foreground">{result}</b>
        </span>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>c(()=>import(`./sheets-bottom-BtLEQ--_.js`),[]));function Y(){return(0,g.jsx)(m,{n:1,title:`Logical sides`,blurb:`start/end follow the document direction (RTL mirrors side and swipe). Each swipes toward its edge.`,code:x,children:(0,g.jsx)(b,{})})}function X(){return(0,g.jsx)(m,{n:2,title:`Width tokens (O30)`,blurb:`sm 320 · md 400 · lg 560 · xl 720, or a pixel number; never more than the viewport.`,code:E,children:(0,g.jsx)(T,{})})}function Z(){return(0,g.jsx)(m,{n:3,title:`Resizable, width persisted`,blurb:`Drag the inner edge (or focus it and use ←/→, Shift for bigger steps). Reopen or reload: the width is kept.`,code:M,children:(0,g.jsx)(j,{})})}function Q(){return(0,g.jsx)(m,{n:4,title:`Non-modal sheet`,blurb:`modal={false}: no backdrop, no scroll lock, the page stays usable; Escape still closes it while focus is inside.`,code:I,children:(0,g.jsx)(F,{})})}function $(){return(0,g.jsx)(m,{n:5,title:`Modal sizes and scroll modes (O29, O30)`,blurb:`scroll=body keeps header and footer sticky; scroll=overlay scrolls the whole dialog.`,code:V,children:(0,g.jsx)(B,{})})}function ee(){return(0,g.jsx)(m,{n:6,title:`Bottom sheets (O27, O35)`,blurb:`Drag the handle between 35%, 70% and full; swipe down past the lowest point to dismiss. Indent scales the page behind.`,code:J,children:(0,g.jsx)(q,{})})}function te(){return(0,g.jsx)(l,{children:(0,g.jsxs)(s,{children:[(0,g.jsxs)(t,{title:`Sheets and sizes`,children:[(0,g.jsx)(`code`,{children:`Sheet`}),`, `,(0,g.jsx)(`code`,{children:`BottomSheet`}),` and `,(0,g.jsx)(`code`,{children:`Modal`}),` sizes from `,(0,g.jsx)(`code`,{children:`@kitora/overlay`}),`; every one is the same Drawer root with different props.`]}),(0,g.jsx)(Y,{}),(0,g.jsx)(X,{}),(0,g.jsx)(Z,{}),(0,g.jsx)(Q,{}),(0,g.jsx)($,{}),(0,g.jsx)(ee,{})]})})}export{te as component};