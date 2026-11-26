import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./overlay-CZ7x6XuN.js";import{n as r}from"./popover-BAdhjENt.js";import{t as i}from"./autofocus-Bpzcq_jD.js";import{r as a}from"./confirm-DhL4LzKS.js";import{i as o,n as s}from"./presets-D72qfcZU.js";import{Bc as c,Cc as l,Cn as u,Ic as d,Nr as f,ti as p,wn as m}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as h}from"./example-CZLJLtIC.js";var g=e(c(),1),_=d();function v(e){if(!e||e===document.body)return`body`;let t=e.getAttribute(`aria-label`)??e.textContent?.trim().slice(0,32),n=e.getAttribute(`role`)??e.tagName.toLowerCase(),r=e.closest(`[data-overlay-id]`);return`${n} “${t||`…`}”${r?` in ${r.getAttribute(`role`)??`overlay`}`:` on the page`}`}var y=`flex flex-wrap items-center gap-2 text-[13px]`,b=6;function x({title:e,lines:t}){return(0,_.jsxs)(`div`,{className:`w-full min-w-0`,children:[(0,_.jsx)(`p`,{className:`text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:e}),(0,_.jsx)(`ol`,{className:`min-h-24 font-mono text-[12px] leading-4 text-muted-foreground`,"data-demo":`focus-trail`,children:t.length===0?(0,_.jsx)(`li`,{children:`Nothing focused yet.`}):t.map((e,t)=>(0,_.jsx)(`li`,{className:`truncate`,children:e},`${t}-${e}`))})]})}function S(){let[e,t]=(0,g.useState)([]);return(0,g.useEffect)(()=>{let e=e=>{if(e.target instanceof Element){let n=v(e.target);t(e=>[n,...e].slice(0,b))}};return document.addEventListener(`focusin`,e),()=>document.removeEventListener(`focusin`,e)},[]),(0,_.jsx)(u,{children:(0,_.jsxs)(`div`,{className:y,children:[(0,_.jsx)(s,{size:`sm`,title:`Invite a teammate`,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,"data-demo":`focus-trigger`,children:`Invite…`}),footer:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n.Close,{render:(0,_.jsx)(p,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,_.jsx)(n.Close,{render:(0,_.jsx)(p,{size:`sm`}),children:`Send invite`})]}),children:(0,_.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`span`,{children:`Email`}),(0,_.jsx)(`input`,{[i]:``,type:`email`,"aria-label":`Email`,className:`h-7 rounded-md border bg-background px-2`})]})}),(0,_.jsx)(x,{title:`Focus trail (newest first)`,lines:e})]})})}var C=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { AUTOFOCUS_ATTRIBUTE, EnsureOverlayUi, Modal, Overlay } from "@kitora/overlay"

// Focus: initial, trap, return (O40): Open it: focus starts on the email field (not the first button), Tab stays inside, closing returns it to the trigger.

/** A short, human name for an element: its aria-label, its text, or its tag. */
function describeElement(el: Element | null): string {
  if (!el || el === document.body) return "body"
  const label = el.getAttribute("aria-label") ?? el.textContent?.trim().slice(0, 32)
  const role = el.getAttribute("role") ?? el.tagName.toLowerCase()
  const inside = el.closest("[data-overlay-id]")
  return \`\${role} “\${label || "…"}”\${inside ? \` in \${inside.getAttribute("role") ?? "overlay"}\` : " on the page"}\`
}

// ── Page ─────────────────────────────────────────────────────────────────────

/** The row every example's preview lays its triggers and readouts out in. */
const ROW = "flex flex-wrap items-center gap-2 text-[13px]"

/** How many focus moves the trail keeps; the list reserves this many lines so it never changes height. */
const TRAIL_LENGTH = 6

// The trail logs focus anywhere on the page, so it must not change height as it fills: a growing
// box would shift every example below it while someone tabs or clicks through them. One line per
// entry (truncated) and a min height of TRAIL_LENGTH lines (h-4 each) keep it still.
function Log({ title, lines }: { title: string; lines: readonly string[] }) {
  return (
    <div className="w-full min-w-0">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
      <ol className="min-h-24 font-mono text-[12px] leading-4 text-muted-foreground" data-demo="focus-trail">
        {lines.length === 0 ? <li>Nothing focused yet.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`} className="truncate">{line}</li>)}
      </ol>
    </div>
  )
}

export function InviteDialog() {
  const [trail, setTrail] = useState<readonly string[]>([])
  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      if (e.target instanceof Element) {
        const line = describeElement(e.target)
        setTrail((t) => [line, ...t].slice(0, TRAIL_LENGTH))
      }
    }
    document.addEventListener("focusin", onFocus)
    return () => document.removeEventListener("focusin", onFocus)
  }, [])
  return (
    <EnsureOverlayUi>
      <div className={ROW}>
        <Modal
          size="sm"
          title="Invite a teammate"
          trigger={
            <Button size="sm" variant="outline" data-demo="focus-trigger">
              Invite…
            </Button>
          }
          footer={
            <>
              <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
              <Overlay.Close render={<Button size="sm" />}>Send invite</Overlay.Close>
            </>
          }
        >
          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input {...{ [AUTOFOCUS_ATTRIBUTE]: "" }} type="email" aria-label="Email" className="h-7 rounded-md border bg-background px-2" />
          </label>
        </Modal>
        <Log title="Focus trail (newest first)" lines={trail} />
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>l(()=>import(`./a11y-focus-CtjiVSJ1.js`),[]));function w(e,t){(0,g.useEffect)(()=>{let n=document.documentElement,r=n.getAttribute(e);return t===null?n.removeAttribute(e):n.setAttribute(e,t),()=>{r===null?n.removeAttribute(e):n.setAttribute(e,r)}},[e,t])}var T=`[data-demo-reduced-motion] [data-overlay-id], [data-demo-reduced-motion] [data-overlay-id] * { transition-duration: 0s !important; animation-duration: 0s !important; }`;function E(){let[e,t]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);t(e.matches);let n=()=>t(e.matches);return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[]),e}var D=`flex flex-wrap items-center gap-2 text-[13px]`;function O(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(!1),i=E();return w(`data-demo-reduced-motion`,e?``:null),w(`dir`,n?`rtl`:null),(0,_.jsx)(u,{children:(0,_.jsxs)(`div`,{className:D,children:[(0,_.jsx)(`style`,{children:T}),(0,_.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),"data-demo":`reduce-motion`}),`Reduce motion (simulated)`]}),(0,_.jsxs)(`span`,{className:`text-muted-foreground`,children:[`OS setting: `,i?`reduce`:`no preference`]}),(0,_.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked),"data-demo":`rtl`}),`Right-to-left`]}),[`start`,`end`].map(e=>(0,_.jsx)(o,{side:e,title:`Sheet — ${e}`,width:`sm`,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,"data-open-side":e,children:`Sheet ${e}`}),children:(0,_.jsxs)(`p`,{children:[`Opens from the `,e,` edge: `,e===`start`?n?`right`:`left`:n?`left`:`right`,` in this direction.`]})},e))]})})}var k=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, Sheet, type SheetSide } from "@kitora/overlay"

// Reduced motion (O48) and direction (O49): The kit honours the OS setting through motion-reduce variants; the switch simulates it for this tab. RTL mirrors start/end sheets and their swipe.

// ── O48 reduced motion, O49 direction ────────────────────────────────────────

/** The page-level switches: they set attributes on <html> while this page is mounted and restore them after. */
function useHtmlAttribute(name: string, value: string | null) {
  // demo-chrome: mirrors a page toggle onto <html> and restores it on leave (the kit reads the real attribute)
  useEffect(() => {
    const html = document.documentElement
    const before = html.getAttribute(name)
    if (value === null) html.removeAttribute(name)
    else html.setAttribute(name, value)
    return () => {
      if (before === null) html.removeAttribute(name)
      else html.setAttribute(name, before)
    }
  }, [name, value])
}

const REDUCED_MOTION_CSS = \`[data-demo-reduced-motion] [data-overlay-id], [data-demo-reduced-motion] [data-overlay-id] * { transition-duration: 0s !important; animation-duration: 0s !important; }\`

function useMediaReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  // demo-chrome: shows the real media query beside the simulation switch
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(query.matches)
    const onChange = () => setReduced(query.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])
  return reduced
}

// ── Page ─────────────────────────────────────────────────────────────────────

/** The row every example's preview lays its triggers and readouts out in. */
const ROW = "flex flex-wrap items-center gap-2 text-[13px]"

export function LogicalSheets() {
  const [reduce, setReduce] = useState(false)
  const [rtl, setRtl] = useState(false)
  const media = useMediaReducedMotion()
  useHtmlAttribute("data-demo-reduced-motion", reduce ? "" : null)
  useHtmlAttribute("dir", rtl ? "rtl" : null)
  return (
    <EnsureOverlayUi>
      <div className={ROW}>
        <style>{REDUCED_MOTION_CSS}</style>
        <label className="inline-flex items-center gap-1.5">
          <input type="checkbox" checked={reduce} onChange={(e) => setReduce(e.target.checked)} data-demo="reduce-motion" />
          Reduce motion (simulated)
        </label>
        <span className="text-muted-foreground">OS setting: {media ? "reduce" : "no preference"}</span>
        <label className="inline-flex items-center gap-1.5">
          <input type="checkbox" checked={rtl} onChange={(e) => setRtl(e.target.checked)} data-demo="rtl" />
          Right-to-left
        </label>
        {(["start", "end"] as const satisfies readonly SheetSide[]).map((side) => (
          <Sheet key={side} side={side} title={\`Sheet — \${side}\`} width="sm" trigger={<Button size="sm" variant="outline" data-open-side={side}>{\`Sheet \${side}\`}</Button>}>
            <p>
              Opens from the {side} edge: {side === "start" ? (rtl ? "right" : "left") : rtl ? "left" : "right"} in this direction.
            </p>
          </Sheet>
        ))}
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>l(()=>import(`./a11y-motion-Dh5RVC2q.js`),[]));function A(){let e=f(),[t,n]=(0,g.useState)([]);return(0,g.useEffect)(()=>{let e=window.setTimeout(()=>n(Array.from(document.querySelectorAll(`[data-overlay-id]`)).map(e=>{let t=e.getAttribute(`aria-labelledby`),n=e.getAttribute(`aria-label`)??(t?document.getElementById(t)?.textContent:null)??`(none)`;return{role:e.getAttribute(`role`)??`(none)`,modal:e.getAttribute(`aria-modal`)??`false`,name:n}})),120);return()=>window.clearTimeout(e)},[e]),t}var j=`flex flex-wrap items-center gap-2 text-[13px]`;function M(){let e=A();return(0,_.jsx)(u,{children:(0,_.jsxs)(`div`,{className:j,children:[(0,_.jsx)(s,{size:`sm`,title:`A dialog`,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,children:`Dialog`}),children:(0,_.jsx)(`p`,{children:`role=dialog, aria-modal=true.`})}),(0,_.jsx)(a,{title:`An alert dialog`,description:`role=alertdialog: a decision.`,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,children:`Alert dialog`})}),(0,_.jsx)(o,{title:`A non-modal panel`,modal:!1,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,children:`Non-modal sheet`}),children:(0,_.jsx)(`p`,{children:`modal=false: the page stays usable.`})}),(0,_.jsx)(r,{title:`A popover`,trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,children:`Popover`}),children:(0,_.jsx)(`p`,{children:`Named by its title.`})}),(0,_.jsxs)(`table`,{className:`w-full text-[12px]`,"data-demo":`roles`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`text-left text-muted-foreground`,children:[(0,_.jsx)(`th`,{scope:`col`,className:`py-1 font-medium`,children:`role`}),(0,_.jsx)(`th`,{scope:`col`,className:`py-1 font-medium`,children:`aria-modal`}),(0,_.jsx)(`th`,{scope:`col`,className:`py-1 font-medium`,children:`accessible name`})]})}),(0,_.jsx)(`tbody`,{children:e.length===0?(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:3,className:`py-1 text-muted-foreground`,children:`Nothing open.`})}):e.map((e,t)=>(0,_.jsxs)(`tr`,{className:`border-t`,children:[(0,_.jsx)(`td`,{className:`py-1`,children:e.role}),(0,_.jsx)(`td`,{className:`py-1`,children:e.modal}),(0,_.jsx)(`td`,{className:`py-1`,children:e.name})]},`${t}-${e.name}`))})]})]})})}var N=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Confirm, EnsureOverlayUi, Modal, Popover, Sheet, useOverlayEntries } from "@kitora/overlay"

// Roles and names by kind (O41): Kind decides the role; a title is required by the types, so every popup has a name.

// ── O41 roles ────────────────────────────────────────────────────────────────

interface RoleRow {
  readonly role: string
  readonly modal: string
  readonly name: string
}

/** Every open popup's role, aria-modal and accessible name, read from the DOM as assistive tech sees it. */
function useOpenRoles(): readonly RoleRow[] {
  const entries = useOverlayEntries()
  const [rows, setRows] = useState<readonly RoleRow[]>([])
  // demo-chrome: re-reads the popups' ARIA after each stack change (an inspector, not kit behaviour)
  useEffect(() => {
    const read = () =>
      setRows(
        Array.from(document.querySelectorAll("[data-overlay-id]")).map((el) => {
          const labelledBy = el.getAttribute("aria-labelledby")
          const name = el.getAttribute("aria-label") ?? (labelledBy ? document.getElementById(labelledBy)?.textContent : null) ?? "(none)"
          return { role: el.getAttribute("role") ?? "(none)", modal: el.getAttribute("aria-modal") ?? "false", name }
        }),
      )
    const timer = window.setTimeout(read, 120)
    return () => window.clearTimeout(timer)
  }, [entries])
  return rows
}

// ── Page ─────────────────────────────────────────────────────────────────────

/** The row every example's preview lays its triggers and readouts out in. */
const ROW = "flex flex-wrap items-center gap-2 text-[13px]"

export function RolesByKind() {
  const rows = useOpenRoles()
  return (
    <EnsureOverlayUi>
      <div className={ROW}>
        <Modal
          size="sm"
          title="A dialog"
          trigger={
            <Button size="sm" variant="outline">
              Dialog
            </Button>
          }
        >
          <p>role=dialog, aria-modal=true.</p>
        </Modal>
        <Confirm
          title="An alert dialog"
          description="role=alertdialog: a decision."
          trigger={
            <Button size="sm" variant="outline">
              Alert dialog
            </Button>
          }
        />
        <Sheet
          title="A non-modal panel"
          modal={false}
          trigger={
            <Button size="sm" variant="outline">
              Non-modal sheet
            </Button>
          }
        >
          <p>modal=false: the page stays usable.</p>
        </Sheet>
        <Popover
          title="A popover"
          trigger={
            <Button size="sm" variant="outline">
              Popover
            </Button>
          }
        >
          <p>Named by its title.</p>
        </Popover>
        <table className="w-full text-[12px]" data-demo="roles">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th scope="col" className="py-1 font-medium">
                role
              </th>
              <th scope="col" className="py-1 font-medium">
                aria-modal
              </th>
              <th scope="col" className="py-1 font-medium">
                accessible name
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-1 text-muted-foreground">
                  Nothing open.
                </td>
              </tr>
            ) : (
              rows.map((r, i) => (
                <tr key={\`\${i}-\${r.name}\`} className="border-t">
                  <td className="py-1">{r.role}</td>
                  <td className="py-1">{r.modal}</td>
                  <td className="py-1">{r.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>l(()=>import(`./a11y-roles-EBR30ryJ.js`),[]));function P(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}var F=`flex flex-wrap items-center gap-2 text-[13px]`;function I(){let[e,t]=(0,g.useState)(`—`);return(0,_.jsx)(u,{children:(0,_.jsxs)(`div`,{className:F,children:[(0,_.jsx)(s,{size:`sm`,title:`Only the buttons close this`,dismiss:{escape:!1,outside:!1},onResult:e=>t(P(e)),trigger:(0,_.jsx)(p,{size:`sm`,variant:`outline`,children:`Strict modal`}),footer:(0,_.jsx)(n.Close,{render:(0,_.jsx)(p,{size:`sm`}),children:`Done`}),children:(0,_.jsx)(`p`,{children:`Press Escape or click the backdrop: nothing happens.`})}),(0,_.jsxs)(`span`,{className:`text-muted-foreground`,"data-demo":`policy-result`,children:[`Last: `,e]})]})})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, Modal, Overlay, type OverlayResult } from "@kitora/overlay"

// Dismiss policy per overlay (O42): Escape and outside press are switched off for this one: only × and Done close it, and the reason is reported.

function describeResult<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

// ── Page ─────────────────────────────────────────────────────────────────────

/** The row every example's preview lays its triggers and readouts out in. */
const ROW = "flex flex-wrap items-center gap-2 text-[13px]"

export function StrictModal() {
  const [last, setLast] = useState("—")
  return (
    <EnsureOverlayUi>
      <div className={ROW}>
        <Modal
          size="sm"
          title="Only the buttons close this"
          dismiss={{ escape: false, outside: false }}
          onResult={(r) => setLast(describeResult(r))}
          trigger={
            <Button size="sm" variant="outline">
              Strict modal
            </Button>
          }
          footer={<Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>}
        >
          <p>Press Escape or click the backdrop: nothing happens.</p>
        </Modal>
        <span className="text-muted-foreground" data-demo="policy-result">
          Last: {last}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>l(()=>import(`./a11y-policy-ClPesX8x.js`),[]));function R(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}var z=60,B=`flex flex-wrap items-center gap-2 text-[13px]`;function V(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(0),[i,a]=(0,g.useState)(`—`);return(0,_.jsx)(u,{children:(0,_.jsxs)(`div`,{className:B,children:[(0,_.jsx)(p,{size:`sm`,variant:`outline`,onClick:()=>{r(performance.now()),t(!0),a(`opening…`),window.setTimeout(()=>t(!1),z)},"data-demo":`interrupt`,children:`Open and interrupt`}),(0,_.jsx)(s,{size:`sm`,title:`Interrupted`,open:e,onOpenChange:e=>t(e),onResult:e=>a(`${R(e)} after ${Math.round(performance.now()-n)} ms`),children:(0,_.jsx)(`p`,{children:`Closing…`})}),(0,_.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,"data-demo":`interrupt-result`,children:[`Last: `,i]})]})})}var H=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, Modal, type OverlayResult } from "@kitora/overlay"

// Close while opening (O47): Opens, then closes INTERRUPT_AFTER_MS (60 ms) later mid-animation: the exit still plays and the result settles at the close.

function describeResult<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

// ── O47 interrupted close ────────────────────────────────────────────────────

const INTERRUPT_AFTER_MS = 60

// ── Page ─────────────────────────────────────────────────────────────────────

/** The row every example's preview lays its triggers and readouts out in. */
const ROW = "flex flex-wrap items-center gap-2 text-[13px]"

export function InterruptedClose() {
  const [open, setOpen] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [last, setLast] = useState("—")
  const run = () => {
    setStartedAt(performance.now())
    setOpen(true)
    setLast("opening…")
    window.setTimeout(() => setOpen(false), INTERRUPT_AFTER_MS)
  }
  return (
    <EnsureOverlayUi>
      <div className={ROW}>
        <Button size="sm" variant="outline" onClick={run} data-demo="interrupt">
          Open and interrupt
        </Button>
        <Modal
          size="sm"
          title="Interrupted"
          open={open}
          onOpenChange={(next) => setOpen(next)}
          // Reported when the close is DECIDED: the elapsed time is ~the interrupt delay, not the exit animation.
          onResult={(r) => setLast(\`\${describeResult(r)} after \${Math.round(performance.now() - startedAt)} ms\`)}
        >
          <p>Closing…</p>
        </Modal>
        <span className="text-muted-foreground tabular-nums" data-demo="interrupt-result">
          Last: {last}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>l(()=>import(`./a11y-interrupt-CnLL3jV-.js`),[]));function U(){return(0,_.jsx)(h,{n:1,code:C,title:`Focus: initial, trap, return (O40)`,blurb:`Open it: focus starts on the email field (not the first button), Tab stays inside, closing returns it to the trigger.`,children:(0,_.jsx)(S,{})})}function W(){return(0,_.jsx)(h,{n:2,code:N,title:`Roles and names by kind (O41)`,blurb:`Kind decides the role; a title is required by the types, so every popup has a name.`,children:(0,_.jsx)(M,{})})}function G(){return(0,_.jsx)(h,{n:3,code:L,title:`Dismiss policy per overlay (O42)`,blurb:`Escape and outside press are switched off for this one: only × and Done close it, and the reason is reported.`,children:(0,_.jsx)(I,{})})}var K=60;function q(){return(0,_.jsx)(h,{n:4,code:H,title:`Close while opening (O47)`,blurb:`Opens, then closes ${K} ms later mid-animation: the exit still plays and the result settles at the close.`,children:(0,_.jsx)(V,{})})}function J(){return(0,_.jsx)(h,{n:5,code:k,title:`Reduced motion (O48) and direction (O49)`,blurb:`The kit honours the OS setting through motion-reduce variants; the switch simulates it for this tab. RTL mirrors start/end sheets and their swipe.`,children:(0,_.jsx)(O,{})})}function Y(){return(0,_.jsxs)(m,{children:[(0,_.jsx)(t,{title:`Accessibility`,children:`Focus, roles, dismissal, animation and direction, each observable on the page.`}),(0,_.jsx)(U,{}),(0,_.jsx)(W,{}),(0,_.jsx)(G,{}),(0,_.jsx)(q,{}),(0,_.jsx)(J,{})]})}export{Y as component};