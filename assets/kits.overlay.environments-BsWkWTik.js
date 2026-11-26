import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./overlay-Crmkxi6R.js";import{n as r}from"./popover-Dxk_8uDs.js";import{n as i}from"./presets-CrjzKOxJ.js";import{Bc as a,Cc as o,Ic as s,Xo as c,ti as l,wn as u,zc as d}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as f}from"./example-BGnSQG2Y.js";var p=e(a(),1),m=e(d(),1),h=s(),g=450;function _(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function v(e,t){return e?e.ownerDocument===document?`the outer page`:e.ownerDocument===t?`the iframe document`:`another document`:`nowhere`}function y(e){let[t,n]=(0,p.useState)(`Open one to check.`);return{line:t,probe:t=>{window.setTimeout(()=>{let r=e.querySelector(`[data-overlay-id]`),i=_(e.ownerDocument);if(t)n(`open · popup in ${v(r,e.ownerDocument)} · focus in ${r?.contains(i)?`the popup`:v(i,e.ownerDocument)}`);else{let e=i?.matches(`[data-env-trigger]`)??!1;n(`closed · popup ${r?`still mounted`:`unmounted`} · focus ${e?`back on the trigger`:`on ${i?.tagName.toLowerCase()??`nothing`}`}`)}},g)}}}function b({body:e}){let{line:t,probe:a}=y(e);return(0,h.jsx)(u,{container:e,children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px] text-foreground`,children:[(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`An iframe`}),(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsxs)(i,{size:`sm`,title:`Modal in an iframe`,onOpenChange:a,trigger:(0,h.jsx)(l,{size:`sm`,variant:`outline`,"data-env-trigger":``,children:`Open modal`}),footer:(0,h.jsx)(n.Close,{render:(0,h.jsx)(l,{size:`sm`}),children:`Done`}),children:[(0,h.jsx)(`p`,{children:`Focus is trapped here; Escape, × and Done return it to the trigger.`}),(0,h.jsx)(`input`,{"aria-label":`Name`,className:`mt-2 h-7 w-full rounded-md border bg-background px-2`})]}),(0,h.jsx)(r,{title:`Popover`,onOpenChange:a,trigger:(0,h.jsx)(l,{size:`sm`,variant:`outline`,"data-env-trigger":``,children:`Open popover`}),children:(0,h.jsx)(`p`,{children:`Anchored inside an iframe.`})})]}),(0,h.jsx)(`p`,{className:`font-mono text-[12px] text-muted-foreground`,"data-demo":`probe`,children:t})]})})}function x(){let[e,t]=(0,p.useState)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`iframe`,{ref:(0,p.useCallback)(e=>{let n=e?.contentDocument;if(!(!n||n.body.dataset.envReady)){n.body.dataset.envReady=`true`;for(let e of document.querySelectorAll(`style, link[rel="stylesheet"]`))n.head.appendChild(e.cloneNode(!0));n.documentElement.className=document.documentElement.className,n.body.className=`bg-background`,t(n.body)}},[]),title:`Overlay iframe environment`,sandbox:`allow-same-origin`,className:`h-56 w-full rounded-md border`}),e?(0,m.createPortal)((0,h.jsx)(b,{body:e}),e):null]})}var S=`import { useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@kitora/ui/button"
import { Modal, Overlay, OverlayUiProvider, Popover } from "@kitora/overlay"

// How long after an open/close the probe reads the DOM: past the enter/exit transitions.
const PROBE_DELAY_MS = 450

// The focused element in \`doc\`.
function deepActive(doc: Document): Element | null {
  let active = doc.activeElement
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement
  return active
}

// Where a node lives, in words the probe line prints.
function placeOf(node: Node | null, doc: Document): string {
  if (!node) return "nowhere"
  if (node.ownerDocument === document) return "the outer page"
  return node.ownerDocument === doc ? "the iframe document" : "another document"
}

// The probe line: where the open popup lives, where focus is, and whether focus came home after the close.
function useProbe(body: HTMLElement) {
  const [line, setLine] = useState("Open one to check.")
  const probe = (open: boolean) => {
    window.setTimeout(() => {
      const popup = body.querySelector("[data-overlay-id]")
      const active = deepActive(body.ownerDocument)
      if (open) {
        setLine(\`open · popup in \${placeOf(popup, body.ownerDocument)} · focus in \${popup?.contains(active) ? "the popup" : placeOf(active, body.ownerDocument)}\`)
      } else {
        // no \`instanceof\`: the iframe's elements come from another realm's Element
        const home = active?.matches("[data-env-trigger]") ?? false
        setLine(\`closed · popup \${popup ? "still mounted" : "unmounted"} · focus \${home ? "back on the trigger" : \`on \${active?.tagName.toLowerCase() ?? "nothing"}\`}\`)
      }
    }, PROBE_DELAY_MS)
  }
  return { line, probe }
}

// What renders inside the iframe: a Modal and a Popover, both portaled into the iframe's body.
function FrameApp({ body }: { body: HTMLElement }) {
  const { line, probe } = useProbe(body)
  return (
    // container: every popup of this provider mounts in the iframe's body; focus and Escape stay there
    <OverlayUiProvider container={body}>
      <div className="flex flex-col gap-2 p-3 text-[13px] text-foreground">
        <p className="text-muted-foreground">An iframe</p>
        <div className="flex flex-wrap gap-2">
          <Modal
            size="sm"
            title="Modal in an iframe"
            onOpenChange={probe}
            trigger={
              <Button size="sm" variant="outline" data-env-trigger="">
                Open modal
              </Button>
            }
            footer={<Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>}
          >
            <p>Focus is trapped here; Escape, × and Done return it to the trigger.</p>
            <input aria-label="Name" className="mt-2 h-7 w-full rounded-md border bg-background px-2" />
          </Modal>
          <Popover
            title="Popover"
            onOpenChange={probe}
            trigger={
              <Button size="sm" variant="outline" data-env-trigger="">
                Open popover
              </Button>
            }
          >
            <p>Anchored inside an iframe.</p>
          </Popover>
        </div>
        <p className="font-mono text-[12px] text-muted-foreground" data-demo="probe">
          {line}
        </p>
      </div>
    </OverlayUiProvider>
  )
}

export function OverlaysInAnIframe() {
  const [body, setBody] = useState<HTMLElement | null>(null)
  // no src: the frame keeps its about:blank document, ready on mount
  const frameRef = useCallback((frame: HTMLIFrameElement | null) => {
    const doc = frame?.contentDocument
    if (!doc || doc.body.dataset.envReady) return
    doc.body.dataset.envReady = "true"
    // another document inherits no stylesheets: copy the page's in
    for (const node of document.querySelectorAll('style, link[rel="stylesheet"]')) doc.head.appendChild(node.cloneNode(true))
    // the theme lives on <html> (its class and data attributes): mirror it
    doc.documentElement.className = document.documentElement.className
    doc.body.className = "bg-background"
    setBody(doc.body)
  }, [])
  return (
    <>
      {/* No scripts of its own; the demo portals React into its body from this page, which needs the same origin. */}
      <iframe ref={frameRef} title="Overlay iframe environment" sandbox="allow-same-origin" className="h-56 w-full rounded-md border" />
      {body ? createPortal(<FrameApp body={body} />, body) : null}
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>o(()=>import(`./iframe-DLEgWhQR.js`),[]));var C=450;function w(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function T(e,t){if(!e)return`nowhere`;let n=e.getRootNode();return n instanceof ShadowRoot?n===t?`this shadow root`:`another shadow root`:`the light DOM`}function E(e,t){let[n,r]=(0,p.useState)(`Open one to check.`);return{line:n,probe:n=>{window.setTimeout(()=>{let i=e.querySelector(`[data-overlay-id]`),a=w();if(n)r(`open · popup in ${T(i,t)} · focus in ${i?.contains(a)?`the popup`:T(a,t)}`);else{let e=a?.matches(`[data-env-trigger]`)??!1;r(`closed · popup ${i?`still mounted`:`unmounted`} · focus ${e?`back on the trigger`:`on ${a?.tagName.toLowerCase()??`nothing`}`}`)}},C)}}}function D({mount:e,root:t}){let{line:a,probe:o}=E(e,t);return(0,h.jsx)(u,{container:e,children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px] text-foreground`,children:[(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`A shadow root`}),(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsxs)(i,{size:`sm`,title:`Modal in a shadow root`,onOpenChange:o,trigger:(0,h.jsx)(l,{size:`sm`,variant:`outline`,"data-env-trigger":``,children:`Open modal`}),footer:(0,h.jsx)(n.Close,{render:(0,h.jsx)(l,{size:`sm`}),children:`Done`}),children:[(0,h.jsx)(`p`,{children:`Focus is trapped here; Escape, × and Done return it to the trigger.`}),(0,h.jsx)(`input`,{"aria-label":`Name`,className:`mt-2 h-7 w-full rounded-md border bg-background px-2`})]}),(0,h.jsx)(r,{title:`Popover`,onOpenChange:o,trigger:(0,h.jsx)(l,{size:`sm`,variant:`outline`,"data-env-trigger":``,children:`Open popover`}),children:(0,h.jsx)(`p`,{children:`Anchored inside a shadow root.`})})]}),(0,h.jsx)(`p`,{className:`font-mono text-[12px] text-muted-foreground`,"data-demo":`probe`,children:a})]})})}function O(){let[e,t]=(0,p.useState)(null);return(0,h.jsx)(`div`,{ref:(0,p.useCallback)(e=>{if(!e||e.shadowRoot)return;let n=e.attachShadow({mode:`open`});for(let e of document.querySelectorAll(`style, link[rel="stylesheet"]`))n.appendChild(e.cloneNode(!0));let r=document.createElement(`div`);n.appendChild(r),t({mount:r,root:n})},[]),className:`min-h-28 w-full rounded-md border`,"data-demo":`shadow-host`,children:e?(0,m.createPortal)((0,h.jsx)(D,{mount:e.mount,root:e.root}),e.mount):null})}var k=`import { useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@kitora/ui/button"
import { Modal, Overlay, OverlayUiProvider, Popover } from "@kitora/overlay"

// How long after an open/close the probe reads the DOM: past the enter/exit transitions.
const PROBE_DELAY_MS = 450

// The focused element, looking through shadow roots.
function deepActive(): Element | null {
  let active = document.activeElement
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement
  return active
}

// Where a node lives, in words the probe line prints.
function placeOf(node: Node | null, root: ShadowRoot): string {
  if (!node) return "nowhere"
  const home = node.getRootNode()
  if (home instanceof ShadowRoot) return home === root ? "this shadow root" : "another shadow root"
  return "the light DOM"
}

// The probe line: where the open popup lives, where focus is, and whether focus came home after the close.
function useProbe(mount: HTMLElement, root: ShadowRoot) {
  const [line, setLine] = useState("Open one to check.")
  const probe = (open: boolean) => {
    window.setTimeout(() => {
      const popup = mount.querySelector("[data-overlay-id]")
      const active = deepActive()
      if (open) {
        setLine(\`open · popup in \${placeOf(popup, root)} · focus in \${popup?.contains(active) ? "the popup" : placeOf(active, root)}\`)
      } else {
        const home = active?.matches("[data-env-trigger]") ?? false
        setLine(\`closed · popup \${popup ? "still mounted" : "unmounted"} · focus \${home ? "back on the trigger" : \`on \${active?.tagName.toLowerCase() ?? "nothing"}\`}\`)
      }
    }, PROBE_DELAY_MS)
  }
  return { line, probe }
}

// What renders inside the shadow root: a Modal and a Popover, both portaled into an element inside it.
function ShadowApp({ mount, root }: { mount: HTMLElement; root: ShadowRoot }) {
  const { line, probe } = useProbe(mount, root)
  return (
    // container inside the shadow root: popups never land in the light DOM
    <OverlayUiProvider container={mount}>
      <div className="flex flex-col gap-2 p-3 text-[13px] text-foreground">
        <p className="text-muted-foreground">A shadow root</p>
        <div className="flex flex-wrap gap-2">
          <Modal
            size="sm"
            title="Modal in a shadow root"
            onOpenChange={probe}
            trigger={
              <Button size="sm" variant="outline" data-env-trigger="">
                Open modal
              </Button>
            }
            footer={<Overlay.Close render={<Button size="sm" />}>Done</Overlay.Close>}
          >
            <p>Focus is trapped here; Escape, × and Done return it to the trigger.</p>
            <input aria-label="Name" className="mt-2 h-7 w-full rounded-md border bg-background px-2" />
          </Modal>
          <Popover
            title="Popover"
            onOpenChange={probe}
            trigger={
              <Button size="sm" variant="outline" data-env-trigger="">
                Open popover
              </Button>
            }
          >
            <p>Anchored inside a shadow root.</p>
          </Popover>
        </div>
        <p className="font-mono text-[12px] text-muted-foreground" data-demo="probe">
          {line}
        </p>
      </div>
    </OverlayUiProvider>
  )
}

export function OverlaysInAShadowRoot() {
  const [env, setEnv] = useState<{ mount: HTMLElement; root: ShadowRoot } | null>(null)
  const hostRef = useCallback((host: HTMLDivElement | null) => {
    if (!host || host.shadowRoot) return
    const root = host.attachShadow({ mode: "open" })
    // a shadow root inherits no stylesheets: copy (or adopt) the ones the popups need
    for (const node of document.querySelectorAll('style, link[rel="stylesheet"]')) root.appendChild(node.cloneNode(true))
    const mount = document.createElement("div")
    root.appendChild(mount)
    setEnv({ mount, root })
  }, [])
  return (
    <div ref={hostRef} className="min-h-28 w-full rounded-md border" data-demo="shadow-host">
      {env ? createPortal(<ShadowApp mount={env.mount} root={env.root} />, env.mount) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>o(()=>import(`./shadow-root-DLp5vHvM.js`),[]));function A(){let e=(0,p.useRef)(null),[t,n]=(0,p.useState)(!1);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px] text-foreground`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,h.jsx)(l,{size:`sm`,variant:`outline`,"aria-expanded":t,onClick:()=>n(e=>!e),children:t?`Hide panel`:`Show panel`}),t?(0,h.jsx)(c,{container:()=>e.current,preserveTabOrder:!0,children:(0,h.jsxs)(`div`,{role:`group`,"aria-label":`Portaled panel`,className:`flex gap-2 rounded-md border bg-muted p-2`,children:[(0,h.jsx)(l,{size:`sm`,variant:`secondary`,children:`First`}),(0,h.jsx)(l,{size:`sm`,variant:`secondary`,children:`Second`})]})}):null,(0,h.jsx)(l,{size:`sm`,variant:`outline`,children:`Next in the page`})]}),(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`The panel renders in the box below, not next to its button.`}),(0,h.jsx)(`div`,{ref:e,className:`min-h-14 rounded-md border border-dashed p-2`,"data-demo":`portal-box`})]})}var j=`import { useRef, useState } from "react"
import { Portal } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"

// A non-modal panel portaled into a box elsewhere in the page. \`preserveTabOrder\` keeps the keyboard
// order natural: Tab from the trigger enters the panel, Tab from its last button continues after the
// trigger's place, Shift+Tab mirrors that. The panel is a plain element: the portal moves it, nothing more.
export function PortalIntoAContainer() {
  const box = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-3 text-[13px] text-foreground">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="outline" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "Hide panel" : "Show panel"}
        </Button>
        {open ? (
          <Portal container={() => box.current} preserveTabOrder>
            <div role="group" aria-label="Portaled panel" className="flex gap-2 rounded-md border bg-muted p-2">
              <Button size="sm" variant="secondary">
                First
              </Button>
              <Button size="sm" variant="secondary">
                Second
              </Button>
            </div>
          </Portal>
        ) : null}
        <Button size="sm" variant="outline">
          Next in the page
        </Button>
      </div>
      <p className="text-muted-foreground">The panel renders in the box below, not next to its button.</p>
      <div ref={box} className="min-h-14 rounded-md border border-dashed p-2" data-demo="portal-box" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>o(()=>import(`./portal-5WxX6v5E.js`),[]));function M(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t,{title:`Environments (O45)`,children:[(0,h.jsx)(`code`,{children:`<OverlayUiProvider container={…}>`}),` moves every popup of a provider into another document or a shadow root. Each box reports where the open popup lives and whether focus came home after the close.`]}),(0,h.jsx)(f,{n:1,title:`Iframe document`,blurb:`The React tree is portaled into the iframe; the provider's container is the iframe's body, so popups, focus and Escape stay in that document.`,code:S,children:(0,h.jsx)(x,{})}),(0,h.jsx)(f,{n:2,title:`Shadow root`,blurb:`A web-component host: the provider's container is an element inside the shadow root, so popups never land in the light DOM.`,code:k,children:(0,h.jsx)(O,{})}),(0,h.jsx)(f,{n:3,title:`Portal into a container`,blurb:`primitives' Portal renders its children into any element you name, keeping Tab order natural around the trigger with preserveTabOrder.`,code:j,children:(0,h.jsx)(A,{})})]})}export{M as component};