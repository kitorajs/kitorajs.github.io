import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{c as t,l as n,o as r,t as i,u as a}from"./anchored-surface-CTW9t0uW.js";import{s as o}from"./kit-docs-DpYhPoxM.js";import{n as s}from"./popover-CXL0v60V.js";import{t as c}from"./input-C8M4VLUF.js";import{i as l}from"./presets-HOFCkHuH.js";import{Bc as u,Cc as d,Cn as f,Ic as p,Mr as m,jr as ee,ti as h,wn as g}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";var v=e(u(),1),y=p(),b=[n,t],x=4e3,S=`flex flex-col gap-2 text-[13px]`;function C(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),b.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}function w(e){return(Math.sin(e/x*Math.PI*2)+1)/2}function te(e){let[t,n]=(0,v.useState)(0);return(0,v.useEffect)(()=>{if(!e)return;let t=requestAnimationFrame(function e(r){n(r),t=requestAnimationFrame(e)});return()=>cancelAnimationFrame(t)},[e]),t}function T(){let{engine:e,closed:t,controls:n}=C(),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(!1),c=(0,v.useRef)(null),l=te(r);return(0,y.jsxs)(f,{children:[n,(0,y.jsxs)(`div`,{className:S,children:[(0,y.jsx)(`div`,{className:`relative h-16 rounded bg-muted/40`,children:(0,y.jsx)(`button`,{ref:c,type:`button`,"aria-label":`Chart point`,className:`absolute top-6 size-4 rounded-full bg-primary`,style:{left:`calc(${w(l)*100}% - ${w(l)*16}px)`},onClick:()=>o(!0),"data-testid":`moving-dot`})}),(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>o(!0),"data-testid":`moving-toggle`,children:`Open popover`}),(0,y.jsx)(h,{size:`sm`,variant:`outline`,onClick:()=>i(e=>!e),children:r?`Pause`:`Resume`})]}),(0,y.jsx)(s,{name:`moving-popover`,anchor:c,open:a,onOpenChange:(e,n)=>{o(e),t(`moving`)(e,n)},positioner:e,side:`top`,children:(0,y.jsxs)(`span`,{"data-testid":`moving-popover`,children:[`Point value: `,Math.round(w(l)*100)]})})]})]})}var E=`import { useEffect, useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner } from "@kitora/overlay"

// Moving element (O36): A chart point that moves every frame; the open popover follows it.

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** Period of the moving-anchor demos; slow enough to read the popover while it moves. */
const ORBIT_MS = 4000

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

/** Position along a horizontal orbit at time \`t\`, 0..1 of the track width. */
function orbit(t: number): number {
  return (Math.sin((t / ORBIT_MS) * Math.PI * 2) + 1) / 2
}

function useFrameTime(active: boolean): number {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!active) return undefined
    let id = requestAnimationFrame(function step(now) {
      setT(now)
      id = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(id)
  }, [active])
  return t
}

export function ChartPointPopover() {
  const { engine, closed, controls } = useDemoControls()
  const [running, setRunning] = useState(true)
  const [open, setOpen] = useState(false)
  const dot = useRef<HTMLButtonElement | null>(null)
  const t = useFrameTime(running)
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <div className="relative h-16 rounded bg-muted/40">
          <button
            ref={dot}
            type="button"
            aria-label="Chart point"
            className="absolute top-6 size-4 rounded-full bg-primary"
            style={{ left: \`calc(\${orbit(t) * 100}% - \${orbit(t) * 16}px)\` }}
            onClick={() => setOpen(true)}
            data-testid="moving-dot"
          />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setOpen(true)} data-testid="moving-toggle">
            Open popover
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRunning((r) => !r)}>
            {running ? "Pause" : "Resume"}
          </Button>
        </div>
        <Popover
          name="moving-popover"
          anchor={dot}
          open={open}
          onOpenChange={(next, reason) => {
            setOpen(next)
            closed("moving")(next, reason)
          }}
          positioner={engine}
          side="top"
        >
          <span data-testid="moving-popover">Point value: {Math.round(orbit(t) * 100)}</span>
        </Popover>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>d(()=>import(`./anchors-moving-uBbFiao-.js`),[]));var D=[n,t],O=4e3,k=`flex flex-col gap-2 text-[13px]`;function A(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),D.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}function j(e){return(Math.sin(e/O*Math.PI*2)+1)/2}function M(e){let[t,n]=(0,v.useState)(0);return(0,v.useEffect)(()=>{if(!e)return;let t=requestAnimationFrame(function e(r){n(r),t=requestAnimationFrame(e)});return()=>cancelAnimationFrame(t)},[e]),t}function N(){let{engine:e,closed:t,controls:n}=A(),i=(0,v.useRef)(null),[a,o]=(0,v.useState)(!1),c=12+j(M(!0)+O/4)*216;(0,v.useEffect)(()=>{let e=i.current?.getContext(`2d`);e&&(e.clearRect(0,0,240,64),e.fillStyle=getComputedStyle(document.documentElement).getPropertyValue(`--primary`)||`#0a7`,e.beginPath(),e.arc(c,32,7,0,Math.PI*2),e.fill())},[c]);let l=(0,v.useRef)(c);(0,v.useEffect)(()=>{l.current=c},[c]);let[u]=(0,v.useState)(()=>r.fromRect(()=>{let e=i.current?.getBoundingClientRect();return new DOMRect((e?.left??0)+l.current-7,(e?.top??0)+25,14,14)}));return(0,y.jsxs)(f,{children:[n,(0,y.jsxs)(`div`,{className:k,children:[(0,y.jsx)(`canvas`,{ref:i,width:240,height:64,className:`h-16 w-[240px] rounded bg-muted/40`,"data-testid":`canvas`}),(0,y.jsx)(h,{size:`sm`,variant:`outline`,className:`self-start`,onClick:()=>o(!0),"data-testid":`canvas-toggle`,children:`Open popover`}),(0,y.jsx)(s,{name:`canvas-popover`,anchor:u,open:a,onOpenChange:(e,n)=>{o(e),t(`canvas`)(e,n)},positioner:e,side:`bottom`,children:(0,y.jsxs)(`span`,{"data-testid":`canvas-popover`,children:[`Node at x=`,Math.round(c)]})})]})]})}var P=`import { useEffect, useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner, virtualAnchor, type VirtualAnchor } from "@kitora/overlay"

// Canvas node, a virtual anchor (O36): A dot drawn on a canvas has no element: virtualAnchor.fromRect reads its live box.

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** Period of the moving-anchor demos; slow enough to read the popover while it moves. */
const ORBIT_MS = 4000

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

/** Position along a horizontal orbit at time \`t\`, 0..1 of the track width. */
function orbit(t: number): number {
  return (Math.sin((t / ORBIT_MS) * Math.PI * 2) + 1) / 2
}

function useFrameTime(active: boolean): number {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!active) return undefined
    let id = requestAnimationFrame(function step(now) {
      setT(now)
      id = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(id)
  }, [active])
  return t
}

export function CanvasNodePopover() {
  const { engine, closed, controls } = useDemoControls()
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [open, setOpen] = useState(false)
  const t = useFrameTime(true)
  const x = 12 + orbit(t + ORBIT_MS / 4) * 216
  useEffect(() => {
    const ctx = canvas.current?.getContext("2d")
    if (!ctx) return
    ctx.clearRect(0, 0, 240, 64)
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary") || "#0a7"
    ctx.beginPath()
    ctx.arc(x, 32, 7, 0, Math.PI * 2)
    ctx.fill()
  }, [x])
  const xRef = useRef(x)
  useEffect(() => {
    xRef.current = x
  }, [x])
  const [anchor] = useState<VirtualAnchor>(() =>
    virtualAnchor.fromRect(() => {
      const box = canvas.current?.getBoundingClientRect()
      return new DOMRect((box?.left ?? 0) + xRef.current - 7, (box?.top ?? 0) + 25, 14, 14)
    }),
  )
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <canvas ref={canvas} width={240} height={64} className="h-16 w-[240px] rounded bg-muted/40" data-testid="canvas" />
        <Button size="sm" variant="outline" className="self-start" onClick={() => setOpen(true)} data-testid="canvas-toggle">
          Open popover
        </Button>
        <Popover
          name="canvas-popover"
          anchor={anchor}
          open={open}
          onOpenChange={(next, reason) => {
            setOpen(next)
            closed("canvas")(next, reason)
          }}
          positioner={engine}
          side="bottom"
        >
          <span data-testid="canvas-popover">Node at x={Math.round(x)}</span>
        </Popover>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./anchors-canvas-B4H-ca73.js`),[]));var F=[n,t],I=`flex flex-col gap-2 text-[13px]`;function L(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),F.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}function R(){let{engine:e,closed:t,controls:n}=L(),[i,a]=(0,v.useState)(null),[o,c]=(0,v.useState)(null);return(0,y.jsxs)(f,{children:[n,(0,y.jsxs)(`div`,{className:I,children:[(0,y.jsx)(`div`,{className:`flex h-16 items-center justify-center rounded border border-dashed text-muted-foreground`,onContextMenu:e=>{e.preventDefault(),a(r.fromPoint(e.clientX,e.clientY))},"data-testid":`cursor-area`,children:`Right-click here`}),(0,y.jsx)(`p`,{className:`rounded bg-muted/40 p-2 leading-relaxed`,onMouseUp:()=>c(r.fromSelection()),onKeyUp:()=>c(r.fromSelection()),"data-testid":`selection-text`,children:`Select a few words of this sentence to open a quote popover anchored to the selection, the way an editor toolbar appears over highlighted text.`}),i?(0,y.jsx)(s,{name:`cursor-popover`,anchor:i,open:!0,onOpenChange:(e,n)=>{e||a(null),t(`cursor`)(e,n)},positioner:e,side:`right`,align:`start`,children:(0,y.jsx)(`span`,{"data-testid":`cursor-popover`,children:`Menu at the cursor`})}):null,o?(0,y.jsx)(s,{name:`selection-popover`,anchor:o,open:!0,onOpenChange:(e,n)=>{e||c(null),t(`selection`)(e,n)},positioner:e,side:`top`,children:(0,y.jsxs)(`div`,{className:`flex gap-1`,"data-testid":`selection-popover`,children:[(0,y.jsx)(h,{size:`sm`,variant:`ghost`,children:`Quote`}),(0,y.jsx)(h,{size:`sm`,variant:`ghost`,children:`Comment`})]})}):null]})]})}var z=`import { type MouseEvent, useState } from "react"
import { Button } from "@kitora/ui/button"
import { type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner, virtualAnchor, type VirtualAnchor } from "@kitora/overlay"

// Cursor and selection (O37): Right-click opens a menu at the cursor (fromPoint); selecting text opens a toolbar over the selection (fromSelection).

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

export function CursorAndSelectionMenus() {
  const { engine, closed, controls } = useDemoControls()
  const [cursor, setCursor] = useState<VirtualAnchor | null>(null)
  const [selection, setSelection] = useState<VirtualAnchor | null>(null)
  const onContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setCursor(virtualAnchor.fromPoint(event.clientX, event.clientY))
  }
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <div className="flex h-16 items-center justify-center rounded border border-dashed text-muted-foreground" onContextMenu={onContextMenu} data-testid="cursor-area">
          Right-click here
        </div>
        <p
          className="rounded bg-muted/40 p-2 leading-relaxed"
          onMouseUp={() => setSelection(virtualAnchor.fromSelection())}
          onKeyUp={() => setSelection(virtualAnchor.fromSelection())}
          data-testid="selection-text"
        >
          Select a few words of this sentence to open a quote popover anchored to the selection, the way an editor toolbar appears over highlighted text.
        </p>
        {cursor ? (
          <Popover
            name="cursor-popover"
            anchor={cursor}
            open
            onOpenChange={(next, reason) => {
              if (!next) setCursor(null)
              closed("cursor")(next, reason)
            }}
            positioner={engine}
            side="right"
            align="start"
          >
            <span data-testid="cursor-popover">Menu at the cursor</span>
          </Popover>
        ) : null}
        {selection ? (
          <Popover
            name="selection-popover"
            anchor={selection}
            open
            onOpenChange={(next, reason) => {
              if (!next) setSelection(null)
              closed("selection")(next, reason)
            }}
            positioner={engine}
            side="top"
          >
            <div className="flex gap-1" data-testid="selection-popover">
              <Button size="sm" variant="ghost">
                Quote
              </Button>
              <Button size="sm" variant="ghost">
                Comment
              </Button>
            </div>
          </Popover>
        ) : null}
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>d(()=>import(`./anchors-cursor-B40Wk1-B.js`),[]));var B=[n,t],V=`flex flex-col gap-2 text-[13px]`;function H(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),B.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}function U(){let{engine:e,closed:t,controls:n}=H();return(0,y.jsxs)(f,{children:[n,(0,y.jsx)(`div`,{className:V,children:(0,y.jsx)(`div`,{className:`h-36 overflow-y-auto rounded border`,"data-testid":`scroll-box`,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-2`,children:[i.map(n=>(0,y.jsx)(s,{name:`hidden-${n}`,whenAnchorHidden:n,positioner:e,side:`right`,onOpenChange:t(`hidden-${n}`),trigger:(0,y.jsxs)(h,{size:`sm`,variant:`outline`,className:`self-start`,"data-testid":`hidden-${n}`,children:[`whenAnchorHidden="`,n,`"`]}),children:(0,y.jsxs)(`span`,{"data-testid":`hidden-${n}-popover`,children:[`policy `,n]})},n)),(0,y.jsx)(`div`,{className:`h-64 text-muted-foreground`,children:`Scroll down: the triggers leave the box.`})]})})})]})}var W=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { ANCHOR_HIDDEN_POLICIES, type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner } from "@kitora/overlay"

// Anchor scrolled out of view (O38): The same popover with each whenAnchorHidden policy: hide, close or keep. Open one, then scroll the box.

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

export function AnchorHiddenPolicies() {
  const { engine, closed, controls } = useDemoControls()
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <div className="h-36 overflow-y-auto rounded border" data-testid="scroll-box">
          <div className="flex flex-col gap-2 p-2">
            {ANCHOR_HIDDEN_POLICIES.map((policy) => (
              <Popover
                key={policy}
                name={\`hidden-\${policy}\`}
                whenAnchorHidden={policy}
                positioner={engine}
                side="right"
                onOpenChange={closed(\`hidden-\${policy}\`)}
                trigger={
                  <Button size="sm" variant="outline" className="self-start" data-testid={\`hidden-\${policy}\`}>
                    whenAnchorHidden=&quot;{policy}&quot;
                  </Button>
                }
              >
                <span data-testid={\`hidden-\${policy}-popover\`}>policy {policy}</span>
              </Popover>
            ))}
            <div className="h-64 text-muted-foreground">Scroll down: the triggers leave the box.</div>
          </div>
        </div>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>d(()=>import(`./anchors-hidden-Bl6cmh0m.js`),[]));var ne=[n,t],G=`flex flex-col gap-2 text-[13px]`;function K(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),ne.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}function q(){let e=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`],[t,n]=(0,v.useState)(null);return(0,y.jsx)(`div`,{className:`grid grid-cols-5 gap-1`,"data-testid":`day-grid`,children:e.map(e=>(0,y.jsx)(J,{day:e,hovered:t===e,onHover:n},e))})}function J({day:e,hovered:t,onHover:n}){let r=m();return(0,y.jsx)(h,{size:`sm`,variant:t?`secondary`:`ghost`,onMouseEnter:()=>n(e),onMouseLeave:()=>n(null),onClick:()=>r.resolve(e),"data-testid":`day-${e}`,children:e})}function Y(){let{engine:e,closed:t,push:n,controls:r}=K(),[i,a]=(0,v.useState)(`none`);return(0,y.jsxs)(f,{children:[r,(0,y.jsx)(`div`,{className:G,children:(0,y.jsx)(l,{name:`anchors-sheet`,title:`Schedule`,trigger:(0,y.jsx)(h,{size:`sm`,className:`self-start`,"data-testid":`open-sheet`,children:`Open sheet`}),onOpenChange:t(`sheet`),children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Day: `,(0,y.jsx)(`b`,{"data-testid":`day`,children:i})]}),(0,y.jsx)(s,{name:`day-picker`,title:`Pick a day`,positioner:e,side:`bottom`,align:`start`,onOpenChange:t(`day-picker`),onResult:e=>{e.status===`resolved`&&(a(e.value),n(`picked ${e.value}`))},trigger:(0,y.jsx)(h,{size:`sm`,variant:`outline`,className:`self-start`,"data-testid":`open-day`,children:`Pick day`}),children:(0,y.jsx)(q,{})})]})})})]})}var X=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner, Sheet, useOverlay } from "@kitora/overlay"

// Popover inside a sheet (O39): The popover is the sheet&apos;s child entry: pressing inside it never closes the sheet.

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

function DayGrid() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const [hover, setHover] = useState<string | null>(null)
  return (
    <div className="grid grid-cols-5 gap-1" data-testid="day-grid">
      {days.map((d) => (
        <DayButton key={d} day={d} hovered={hover === d} onHover={setHover} />
      ))}
    </div>
  )
}

function DayButton({ day, hovered, onHover }: { day: string; hovered: boolean; onHover: (d: string | null) => void }) {
  const ctl = useOverlay<string>()
  return (
    <Button size="sm" variant={hovered ? "secondary" : "ghost"} onMouseEnter={() => onHover(day)} onMouseLeave={() => onHover(null)} onClick={() => ctl.resolve(day)} data-testid={\`day-\${day}\`}>
      {day}
    </Button>
  )
}

export function ScheduleSheet() {
  const { engine, closed, push, controls } = useDemoControls()
  const [day, setDay] = useState("none")
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <Sheet
          name="anchors-sheet"
          title="Schedule"
          trigger={
            <Button size="sm" className="self-start" data-testid="open-sheet">
              Open sheet
            </Button>
          }
          onOpenChange={closed("sheet")}
        >
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">
              Day: <b data-testid="day">{day}</b>
            </p>
            <Popover<string>
              name="day-picker"
              title="Pick a day"
              positioner={engine}
              side="bottom"
              align="start"
              onOpenChange={closed("day-picker")}
              onResult={(r) => {
                if (r.status === "resolved") {
                  setDay(r.value)
                  push(\`picked \${r.value}\`)
                }
              }}
              trigger={
                <Button size="sm" variant="outline" className="self-start" data-testid="open-day">
                  Pick day
                </Button>
              }
            >
              <DayGrid />
            </Popover>
          </div>
        </Sheet>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>d(()=>import(`./anchors-sheet-homi8pfl.js`),[]));var Z=[n,t],re=`flex flex-col gap-2 text-[13px]`;function ie(){let[e,t]=(0,v.useState)(n),[r,i]=(0,v.useState)(`nothing yet`),a=e=>i(e);return{engine:e,closed:e=>(t,n)=>{!t&&n&&a(`${e} closed (${n})`)},push:a,controls:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 text-[12px]`,role:`group`,"aria-label":`Positioning engine`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`engine`}),Z.map(n=>(0,y.jsx)(h,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),"data-engine":n.name,children:n.name},n.name)),(0,y.jsxs)(`span`,{className:`ml-2 text-muted-foreground`,"data-testid":`log`,children:[`last: `,r]})]})}}var ae=[`save`,`revert`],oe=[{id:`f1`,name:`Quarterly report`},{id:`f2`,name:`Roadmap draft`},{id:`f3`,name:`Team offsite`}];function se({initial:e}){let t=m(),[n,r]=(0,v.useState)(e);return ee(()=>t.resolve(n)),(0,y.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),t.resolve(n)},children:(0,y.jsx)(c,{className:`h-7 w-56`,"aria-label":`Name`,value:n,onChange:e=>r(e.currentTarget.value),"data-testid":`rename-input`})})}function Q(){let{engine:e,closed:t,controls:n}=ie(),[r,i]=(0,v.useState)(oe),[a,o]=(0,v.useState)(`save`);return(0,y.jsxs)(f,{children:[n,(0,y.jsxs)(`div`,{className:re,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1`,role:`group`,"aria-label":`Outside click`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`outside click`}),ae.map(e=>(0,y.jsx)(h,{size:`sm`,variant:e===a?`default`:`outline`,onClick:()=>o(e),"data-testid":`outside-${e}`,children:e},e))]}),(0,y.jsx)(`ul`,{className:`flex flex-col`,children:r.map((n,r)=>(0,y.jsx)(`li`,{children:(0,y.jsx)(s,{name:`rename`,positioner:e,side:`bottom`,align:`start`,dismiss:{outside:a===`save`?`resolve`:!0},onOpenChange:t(`rename ${r+1}`),onResult:e=>{e.status===`resolved`&&i(t=>t.map(t=>t.id===n.id?{...t,name:e.value}:t))},trigger:(0,y.jsx)(h,{size:`sm`,variant:`ghost`,className:`justify-start`,"data-testid":`file-${r}`,children:n.name}),children:(0,y.jsx)(se,{initial:n.name})})},n.id))})]})]})}var $=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { type CloseReason, cssAnchorPositioner, EnsureOverlayUi, floatingUiPositioner, Popover, type Positioner, useOutsideCommit, useOverlay } from "@kitora/overlay"

// Inline rename (O12): Click a name, edit it. Enter saves, Escape reverts, and a click outside saves with dismiss={{ outside: "resolve" }} or reverts with the default.

const ENGINES: readonly Positioner[] = [floatingUiPositioner, cssAnchorPositioner]

/** The inner column every example's preview lays its demo out in. */
const BODY = "flex flex-col gap-2 text-[13px]"

/** One example's positioning engine with its switch, and the reason its popover last closed. */
function useDemoControls() {
  const [engine, setEngine] = useState<Positioner>(floatingUiPositioner)
  const [last, setLast] = useState("nothing yet")
  const push = (line: string) => setLast(line)
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) push(\`\${what} closed (\${reason})\`)
  }
  const controls = (
    <div className="flex flex-wrap items-center gap-1 text-[12px]" role="group" aria-label="Positioning engine">
      <span className="text-muted-foreground">engine</span>
      {ENGINES.map((e) => (
        <Button key={e.name} size="xs" variant={e === engine ? "default" : "outline"} onClick={() => setEngine(e)} data-engine={e.name}>
          {e.name}
        </Button>
      ))}
      <span className="ml-2 text-muted-foreground" data-testid="log">
        last: {last}
      </span>
    </div>
  )
  return { engine, closed, push, controls }
}

/** What an outside click does to an inline rename (O12). */
const OUTSIDE_POLICIES = ["save", "revert"] as const

type OutsidePolicy = (typeof OUTSIDE_POLICIES)[number]

interface NamedFile {
  readonly id: string
  readonly name: string
}

const FILES: readonly NamedFile[] = [
  { id: "f1", name: "Quarterly report" },
  { id: "f2", name: "Roadmap draft" },
  { id: "f3", name: "Team offsite" },
]

function RenameField({ initial }: { initial: string }) {
  const ctl = useOverlay<string>()
  const [draft, setDraft] = useState(initial)
  useOutsideCommit(() => ctl.resolve(draft))
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        ctl.resolve(draft)
      }}
    >
      {/* No autoFocus: the popover focuses its first field once positioned; autoFocus would run before that and scroll the page. */}
      <Input className="h-7 w-56" aria-label="Name" value={draft} onChange={(e) => setDraft(e.currentTarget.value)} data-testid="rename-input" />
    </form>
  )
}

export function RenameInPlace() {
  const { engine, closed, controls } = useDemoControls()
  const [files, setFiles] = useState<readonly NamedFile[]>(FILES)
  const [policy, setPolicy] = useState<OutsidePolicy>("save")
  return (
    <EnsureOverlayUi>
      {controls}
      <div className={BODY}>
        <div className="flex items-center gap-1" role="group" aria-label="Outside click">
          <span className="text-muted-foreground">outside click</span>
          {OUTSIDE_POLICIES.map((p) => (
            <Button key={p} size="sm" variant={p === policy ? "default" : "outline"} onClick={() => setPolicy(p)} data-testid={\`outside-\${p}\`}>
              {p}
            </Button>
          ))}
        </div>
        <ul className="flex flex-col">
          {files.map((file, i) => (
            <li key={file.id}>
              <Popover<string>
                name="rename"
                positioner={engine}
                side="bottom"
                align="start"
                dismiss={{ outside: policy === "save" ? "resolve" : true }}
                onOpenChange={closed(\`rename \${i + 1}\`)}
                onResult={(r) => {
                  if (r.status === "resolved") setFiles((all) => all.map((f) => (f.id === file.id ? { ...f, name: r.value } : f)))
                }}
                trigger={
                  <Button size="sm" variant="ghost" className="justify-start" data-testid={\`file-\${i}\`}>
                    {file.name}
                  </Button>
                }
              >
                <RenameField initial={file.name} />
              </Popover>
            </li>
          ))}
        </ul>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./anchors-rename-BeZoF_ch.js`),[]));function ce(){return(0,y.jsxs)(g,{children:[(0,y.jsxs)(o,{title:`Anchors and positioning`,children:[(0,y.jsx)(`code`,{children:`Popover`}),` on moving elements, virtual anchors (canvas, cursor, selection), the `,(0,y.jsx)(`code`,{children:`whenAnchorHidden`}),` policies and a popover in a sheet, all through one `,(0,y.jsx)(`code`,{children:`Positioner`}),`.`]}),(0,y.jsx)(le,{})]})}function le(){let[e,t]=(0,v.useState)(null);return(0,v.useEffect)(()=>t(a()),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`p`,{className:`mb-4 text-[13px] text-muted-foreground`,"data-testid":`css-support`,children:[`css anchors `,e===null?`…`:e?`supported`:`unsupported → falls back`]}),(0,y.jsx)(ue,{}),(0,y.jsx)(de,{}),(0,y.jsx)(fe,{}),(0,y.jsx)(pe,{}),(0,y.jsx)(me,{}),(0,y.jsx)(he,{})]})}function ue(){return(0,y.jsx)(_,{n:1,title:`Moving element (O36)`,blurb:`A chart point that moves every frame; the open popover follows it.`,code:E,children:(0,y.jsx)(T,{})})}function de(){return(0,y.jsx)(_,{n:2,title:`Canvas node, a virtual anchor (O36)`,blurb:`A dot drawn on a canvas has no element: virtualAnchor.fromRect reads its live box.`,code:P,children:(0,y.jsx)(N,{})})}function fe(){return(0,y.jsx)(_,{n:3,title:`Cursor and selection (O37)`,blurb:`Right-click opens a menu at the cursor (fromPoint); selecting text opens a toolbar over the selection (fromSelection).`,code:z,children:(0,y.jsx)(R,{})})}function pe(){return(0,y.jsx)(_,{n:4,title:`Anchor scrolled out of view (O38)`,blurb:`The same popover with each whenAnchorHidden policy: hide, close or keep. Open one, then scroll the box.`,code:W,children:(0,y.jsx)(U,{})})}function me(){return(0,y.jsx)(_,{n:5,title:`Popover inside a sheet (O39)`,blurb:`The popover is the sheet's child entry: pressing inside it never closes the sheet.`,code:X,children:(0,y.jsx)(Y,{})})}function he(){return(0,y.jsx)(_,{n:6,title:`Inline rename (O12)`,blurb:`Click a name, edit it. Enter saves, Escape reverts, and a click outside saves with dismiss={{ outside: "resolve" }} or reverts with the default.`,code:$,children:(0,y.jsx)(Q,{})})}export{ce as component};