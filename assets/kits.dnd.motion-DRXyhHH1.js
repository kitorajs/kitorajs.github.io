import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,hi as a,zc as o}from"./index-B9ukmIN1.js";import{a as s,b as c,f as l,i as u,m as d,o as f,p,s as m}from"./glue-1V5Hu_3C.js";import{i as h}from"./env-CFRqT0G6.js";import{s as g,t as _,u as v}from"./kit-BW1oFcGw.js";import{t as y}from"./support-ByRWbxoj.js";import"./kit-gallery-Bph7isB2.js";import{t as b}from"./example-BGnSQG2Y.js";function x(e){return typeof e==`function`}function S(){if(typeof Element>`u`)return null;let e=Reflect.get(Element.prototype,`moveBefore`);return x(e)?e:null}function C(){return S()!==null}function ee(e,t,n,r={}){if(t===n)return`moveBefore`;let i=r.method===`insertBefore`?null:S();if(i&&t.isConnected&&e.isConnected)try{return Reflect.apply(i,e,[t,n]),`moveBefore`}catch{}let a=t.ownerDocument.activeElement,o=a instanceof HTMLElement&&t.contains(a)?a:null;return e.insertBefore(t,n),o&&o.isConnected&&t.ownerDocument.activeElement!==o&&o.focus({preventScroll:!0}),`insertBefore`}function w(e,t,n={}){let r=null,i=e.firstElementChild;for(let a of t){if(a===i){i=i.nextElementSibling;continue}r=ee(e,a,i,n)}return r}var T=e(n(),1),E=e(o(),1),D=i(),O=Array.from({length:6},(e,t)=>`Commit ${t+1}`);function te(){let[e,t]=(0,T.useState)(O),[n,r]=(0,T.useState)(!0),[i,a]=(0,T.useState)(null),o=y(p),s=(0,T.useRef)(null),c=e=>{let r=s.current;r&&a(l(()=>r.querySelectorAll(`[data-item]`),()=>(0,E.flushSync)(()=>t(e)),{viewTransitions:n}).animation)};return(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[12px]`,children:[(0,D.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 hover:bg-accent`,onClick:()=>c(e=>e.toReversed()),children:`Reverse`}),(0,D.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 hover:bg-accent`,onClick:()=>c(e=>[...e.slice(1),...e.slice(0,1)]),children:`Rotate`}),(0,D.jsxs)(`label`,{className:`flex items-center gap-1`,children:[(0,D.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`View Transitions `,o?`(supported)`:`(not supported: FLIP)`]})]}),(0,D.jsx)(`ul`,{ref:s,"data-demo":`commit`,className:`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map(e=>(0,D.jsx)(`li`,{"data-item":e,className:`flex h-7 items-center rounded border bg-card px-2`,children:e},e))}),(0,D.jsxs)(`p`,{"data-demo-status":`commit`,className:`font-mono text-[11px] text-muted-foreground`,children:[`last commit: `,i??`none yet`]})]})}var k=`import { useRef, useState } from "react"
import { flushSync } from "react-dom"
import { animateCommit, supportsViewTransitions, useSupport, type CommitAnimation } from "@kitora/dnd"

const ITEMS = Array.from({ length: 6 }, (_, i) => \`Commit \${i + 1}\`)

// Changes that are not drags animate too: View Transitions where the browser has them
// (and the option is on), FLIP with WAAPI elsewhere, nothing under reduced motion.
// The mutation must be synchronous, hence flushSync.
export function CommitAnimations() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [viewTransitions, setViewTransitions] = useState(true)
  const [last, setLast] = useState<CommitAnimation | null>(null)
  const supported = useSupport(supportsViewTransitions)
  const list = useRef<HTMLUListElement | null>(null)
  const commit = (next: (xs: readonly string[]) => readonly string[]) => {
    const ul = list.current
    if (!ul) return
    const result = animateCommit(
      () => ul.querySelectorAll("[data-item]"),
      () => flushSync(() => setItems(next)),
      { viewTransitions },
    )
    // which path ran: "view-transition", "flip" or "none"
    setLast(result.animation)
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2 text-[12px]">
        <button type="button" className="h-7 rounded-md border px-2 hover:bg-accent" onClick={() => commit((xs) => xs.toReversed())}>
          Reverse
        </button>
        <button type="button" className="h-7 rounded-md border px-2 hover:bg-accent" onClick={() => commit((xs) => [...xs.slice(1), ...xs.slice(0, 1)])}>
          Rotate
        </button>
        <label className="flex items-center gap-1">
          <input type="checkbox" checked={viewTransitions} onChange={(e) => setViewTransitions(e.target.checked)} />
          View Transitions {supported ? "(supported)" : "(not supported: FLIP)"}
        </label>
      </div>
      <ul ref={list} data-demo="commit" className="flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
        {items.map((label) => (
          <li key={label} data-item={label} className="flex h-7 items-center rounded border bg-card px-2">
            {label}
          </li>
        ))}
      </ul>
      <p data-demo-status="commit" className="font-mono text-[11px] text-muted-foreground">
        last commit: {last ?? "none yet"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./motion-commit-QnHZZGvZ.js`),[]));var A=`custom`,j=[`Card 1`,`Card 2`,`Card 3`,`Card 4`];function M({last:e}){let t=g();return(0,D.jsxs)(`p`,{"data-demo-status":A,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,t.phase,t.source?` · ${t.source.kind}`:``,t.over?` · over ${t.over.id} (${t.over.position})`:``,e]})}function ne(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function re({id:e,index:t}){let{ref:n}=v({id:e,container:A,index:t,data:e});return(0,D.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function ie(){let[e,t]=(0,T.useState)(j),[n,r]=(0,T.useState)(``),[i,a]=(0,T.useState)(null);return(0,D.jsxs)(_,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(ne(e)),presentation:{renderPreview:(0,T.useCallback)((e,t)=>(a({el:e,source:t}),()=>a(null)),[])},children:[(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsx)(`ul`,{"data-demo":A,className:`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map((e,t)=>(0,D.jsx)(re,{id:e,index:t},e))}),(0,D.jsx)(M,{last:n})]}),i?(0,E.createPortal)((0,D.jsxs)(`div`,{"data-custom-preview":!0,className:`flex h-9 w-44 items-center gap-2 rounded-md border bg-popover px-2 text-[12px] shadow-lg`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Moving`}),` `,i.source.id]}),i.el):null]})}var N=`import { useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type DragSource, type MoveOp } from "@kitora/dnd"

const LIST = "custom"
const ITEMS = ["Card 1", "Card 2", "Card 3", "Card 4"]

// renderPreview draws the preview yourself: the kit hands you a container it positions on
// the source's box and moves with the pointer; here a portal renders a card into it.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ last }: { last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={LIST} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function CustomPreviewList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const [preview, setPreview] = useState<{ el: HTMLElement; source: DragSource<unknown> } | null>(null)
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  // called once per drag with the container; the returned function runs when the drag ends
  const renderPreview = useCallback((el: HTMLElement, source: DragSource<unknown>) => {
    setPreview({ el, source })
    return () => setPreview(null)
  }, [])
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ renderPreview }}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status last={last} />
      </div>
      {preview
        ? createPortal(
            <div data-custom-preview className="flex h-9 w-44 items-center gap-2 rounded-md border bg-popover px-2 text-[12px] shadow-lg">
              <span className="font-medium">Moving</span> {preview.source.id}
            </div>,
            preview.el,
          )
        : null}
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>r(()=>import(`./motion-custom-BrkfdPMX.js`),[]));var ae=[{feedback:`clone`,indicator:`gap`},{feedback:`move`,indicator:`gap`},{feedback:`none`,indicator:`line`}];function oe({name:e,last:t}){let n=g();return(0,D.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function se(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function P({id:e,index:t,list:n}){let{ref:r}=v({id:e,container:n,index:t,data:e});return(0,D.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function F({feedback:e,indicator:t}){let n=`feedback-${e}`,[r,i]=(0,T.useState)(()=>Array.from({length:4},(t,n)=>`${e} ${n+1}`)),[a,o]=(0,T.useState)(``);return(0,D.jsx)(_,{onMove:e=>i(t=>c(t,e,e=>e)),onDragEnd:e=>o(se(e)),presentation:{feedback:e,indicator:t},children:(0,D.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,D.jsxs)(`span`,{className:`text-[12px] font-medium`,children:[`feedback: `,e]}),(0,D.jsx)(`ul`,{"data-demo":n,className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:r.map((e,t)=>(0,D.jsx)(P,{id:e,index:t,list:n},e))}),(0,D.jsx)(oe,{name:n,last:a})]})})}function I(){return(0,D.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:ae.map(({feedback:e,indicator:t})=>(0,D.jsx)(F,{feedback:e,indicator:t},e))})}var L=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type FeedbackMode, type IndicatorKind, type MoveOp } from "@kitora/dnd"

// clone (the default): a preview follows the pointer and the source stays as the placeholder ·
// move: the source itself follows the pointer · none: nothing moves, so it pairs with a line.
const MODES: readonly { feedback: FeedbackMode; indicator: IndicatorKind }[] = [
  { feedback: "clone", indicator: "gap" },
  { feedback: "move", indicator: "gap" },
  { feedback: "none", indicator: "line" },
]

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index, list }: { id: string; index: number; list: string }) {
  const { ref } = useSortable({ id, container: list, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

function FeedbackList({ feedback, indicator }: { feedback: FeedbackMode; indicator: IndicatorKind }) {
  const list = \`feedback-\${feedback}\`
  const [items, setItems] = useState<readonly string[]>(() => Array.from({ length: 4 }, (_, i) => \`\${feedback} \${i + 1}\`))
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ feedback, indicator }}>
      <div className="flex flex-col gap-1">
        <span className="text-[12px] font-medium">feedback: {feedback}</span>
        <ul data-demo={list} className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} list={list} />
          ))}
        </ul>
        <Status name={list} last={last} />
      </div>
    </DndProvider>
  )
}

export function FeedbackModes() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {MODES.map(({ feedback, indicator }) => (
        <FeedbackList key={feedback} feedback={feedback} indicator={indicator} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./motion-feedback-CdaAhccE.js`),[]));var R=`reduced`,z=[`Calm 1`,`Calm 2`,`Calm 3`,`Calm 4`],B=[`auto`,`never`];function V({name:e,last:t}){let n=g();return(0,D.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function H(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function U({id:e,index:t}){let{ref:n}=v({id:e,container:R,index:t,data:e});return(0,D.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function W({value:e,onChange:t}){return(0,D.jsx)(`div`,{role:`radiogroup`,"aria-label":`Motion`,className:`inline-flex h-7 w-fit items-center rounded-md border p-0.5 text-[12px]`,children:B.map(n=>(0,D.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===n,onClick:()=>t(n),className:`h-6 rounded px-2 ${e===n?`bg-primary text-primary-foreground`:`hover:bg-accent`}`,children:n},n))})}function G(){let[e,t]=(0,T.useState)(z),[n,r]=(0,T.useState)(``),[i,a]=(0,T.useState)(`auto`);return(0,D.jsx)(_,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(H(e)),presentation:{motion:i},children:(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsx)(W,{value:i,onChange:a}),(0,D.jsx)(`ul`,{"data-demo":R,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,D.jsx)(U,{id:e,index:t},e))}),(0,D.jsx)(V,{name:R,last:n})]})})}var K=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MotionPolicy, type MoveOp } from "@kitora/dnd"

const LIST = "reduced"
const ITEMS = ["Calm 1", "Calm 2", "Calm 3", "Calm 4"]
const MOTION_CHOICES: readonly MotionPolicy[] = ["auto", "never"]

// motion "auto" (the default) follows prefers-reduced-motion; "never" turns every
// animation off and end states apply at once. Either way the drop is never skipped.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

function MotionSwitch({ value, onChange }: { value: MotionPolicy; onChange: (v: MotionPolicy) => void }) {
  return (
    <div role="radiogroup" aria-label="Motion" className="inline-flex h-7 w-fit items-center rounded-md border p-0.5 text-[12px]">
      {MOTION_CHOICES.map((o) => (
        <button key={o} type="button" role="radio" aria-checked={value === o} onClick={() => onChange(o)} className={\`h-6 rounded px-2 \${value === o ? "bg-primary text-primary-foreground" : "hover:bg-accent"}\`}>
          {o}
        </button>
      ))}
    </div>
  )
}

export function CalmList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const [motion, setMotion] = useState<MotionPolicy>("auto")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ motion }}>
      <div className="flex flex-col gap-2">
        <MotionSwitch value={motion} onChange={setMotion} />
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./motion-reduced-BU0cQLHP.js`),[]));var q=`timing`,ce=Array.from({length:6},(e,t)=>`Tune ${t+1}`),le=0,ue=800,de=50,fe=200,pe=[`standard`,`spring`];function me({last:e}){let t=g();return(0,D.jsxs)(`p`,{"data-demo-status":q,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,t.phase,t.source?` · ${t.source.kind}`:``,t.over?` · over ${t.over.id} (${t.over.position})`:``,e]})}function he(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function ge({id:e,index:t}){let{ref:n}=v({id:e,container:q,index:t,data:e});return(0,D.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function _e({value:e,onChange:t}){return(0,D.jsx)(`div`,{role:`radiogroup`,"aria-label":`Easing`,className:`inline-flex h-7 items-center rounded-md border p-0.5 text-[12px]`,children:pe.map(n=>(0,D.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===n,onClick:()=>t(n),className:`h-6 rounded px-2 ${e===n?`bg-primary text-primary-foreground`:`hover:bg-accent`}`,children:n},n))})}function ve(){let[e,t]=(0,T.useState)(ce),[n,r]=(0,T.useState)(``),[i,a]=(0,T.useState)(fe),[o,s]=(0,T.useState)(`standard`),l=e=>t(t=>c(t,e,e=>e)),u={"--dnd-duration":`${i}ms`,"--dnd-drop-duration":`${i}ms`,"--dnd-easing":d[o]};return(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[12px]`,children:[(0,D.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Duration`,(0,D.jsx)(`input`,{type:`range`,min:le,max:ue,step:de,value:i,onChange:e=>a(Number(e.target.value)),"aria-label":`Duration`}),(0,D.jsxs)(`span`,{className:`w-12 tabular-nums`,children:[i,`ms`]})]}),(0,D.jsx)(_e,{value:o,onChange:s})]}),(0,D.jsx)(_,{onMove:l,onDragEnd:e=>r(he(e)),children:(0,D.jsxs)(`div`,{style:u,"data-demo-timing":!0,className:`flex max-w-xs flex-col gap-2`,children:[(0,D.jsx)(`ul`,{"data-demo":q,className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map((e,t)=>(0,D.jsx)(ge,{id:e,index:t},e))}),(0,D.jsx)(me,{last:n})]})}),(0,D.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Drag with the mouse, or focus a row and use Space, the arrows and Space: after the drop the row keeps focus and flashes.`})]})}var J=`import { useState, type CSSProperties } from "react"
import { DND_EASINGS, DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "timing"
const ITEMS = Array.from({ length: 6 }, (_, i) => \`Tune \${i + 1}\`)
// the duration slider's range and default, in ms
const DURATION_MIN = 0
const DURATION_MAX = 800
const DURATION_STEP = 50
const DURATION_DEFAULT = 200
type EasingName = keyof typeof DND_EASINGS
const EASINGS: readonly EasingName[] = ["standard", "spring"]

// Any ancestor (or :root) retunes every dnd animation below it: --dnd-duration (shifts and
// commits), --dnd-drop-duration (the preview flying to its slot) and --dnd-easing.
// DND_EASINGS.spring is a CSS linear() spring, no JS physics. After a drop the row keeps
// focus and flashes.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ last }: { last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={LIST} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

function EasingSwitch({ value, onChange }: { value: EasingName; onChange: (v: EasingName) => void }) {
  return (
    <div role="radiogroup" aria-label="Easing" className="inline-flex h-7 items-center rounded-md border p-0.5 text-[12px]">
      {EASINGS.map((o) => (
        <button key={o} type="button" role="radio" aria-checked={value === o} onClick={() => onChange(o)} className={\`h-6 rounded px-2 \${value === o ? "bg-primary text-primary-foreground" : "hover:bg-accent"}\`}>
          {o}
        </button>
      ))}
    </div>
  )
}

export function TunedList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const [duration, setDuration] = useState(DURATION_DEFAULT)
  const [easing, setEasing] = useState<EasingName>("standard")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  const timing: CSSProperties & Record<"--dnd-duration" | "--dnd-drop-duration" | "--dnd-easing", string> = {
    "--dnd-duration": \`\${duration}ms\`,
    "--dnd-drop-duration": \`\${duration}ms\`,
    "--dnd-easing": DND_EASINGS[easing],
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3 text-[12px]">
        <label className="flex items-center gap-2">
          Duration
          <input type="range" min={DURATION_MIN} max={DURATION_MAX} step={DURATION_STEP} value={duration} onChange={(e) => setDuration(Number(e.target.value))} aria-label="Duration" />
          <span className="w-12 tabular-nums">{duration}ms</span>
        </label>
        <EasingSwitch value={easing} onChange={setEasing} />
      </div>
      <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
        <div style={timing} data-demo-timing className="flex max-w-xs flex-col gap-2">
          <ul data-demo={LIST} className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
            {items.map((id, index) => (
              <Row key={id} id={id} index={index} />
            ))}
          </ul>
          <Status last={last} />
        </div>
      </DndProvider>
      <p className="text-[12px] text-muted-foreground">Drag with the mouse, or focus a row and use Space, the arrows and Space: after the drop the row keeps focus and flashes.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./motion-timing-S8-LN6Dg.js`),[]));function ye(){return(0,D.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,D.jsx)(`div`,{className:`h-36 w-56 overflow-hidden rounded-md border p-2`,"data-demo-clip":`clipped`,children:(0,D.jsx)(X,{name:`clipped`,initial:Y(4,`Clip`)})}),(0,D.jsx)(`div`,{className:`w-56`,children:(0,D.jsx)(X,{name:`clone-target`,initial:Y(4,`Other`)})})]})}function Y(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function X({name:e,initial:t,axis:n=`y`,direction:r,presentation:i,insideBand:o,listClassName:s,renderItem:l,wrap:d}){let[f,p]=(0,T.useState)(t),[h,_]=(0,T.useState)(null),[v,y]=(0,T.useState)(null),[b]=(0,T.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>_({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),x=u({plugins:[b],onMove:e=>{if(e.to.position===`inside`){y(`${e.ids.join()} into ${e.to.target??e.to.container}`);return}(0,E.flushSync)(()=>p(t=>c(t,e,e=>e)))}});m(x,i);let S=g(x),C=(0,D.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,s),children:f.map((t,i)=>(0,D.jsx)(be,{dnd:x,container:e,label:t,index:i,axis:n,direction:r,insideBand:o,children:l?l(t):t},t))});return(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[d?d(C):C,(0,D.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,S.phase,S.over?` · over ${S.over.id} (${S.over.position})`:``,h?` · last: ${h.kind} ${h.reason}${h.moved?` (moved)`:``}`:``,v?` · combined ${v}`:``]})]})}function be({dnd:e,container:t,label:n,index:r,axis:i,direction:a,insideBand:o,children:c}){let l=s(e,{id:n,container:t,index:r,data:n}),u=f(e,{id:n,kind:`item`,container:t,axis:i,direction:a,insideBand:o});return(0,D.jsx)(`li`,{ref:(0,T.useCallback)(e=>{let t=l(e),n=u(e);return()=>{t?.(),n?.()}},[l,u]),"data-item":n,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:c})}function xe(){return(0,D.jsx)(ye,{})}var Z=`import { type ReactNode, useCallback, useState } from "react"
import { applyMove, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type PresentationOptions, useDomDnd, useDraggableRef, useDragState, useDroppableRef, usePresentation } from "@kitora/dnd"
import { flushSync } from "react-dom"
import { cn } from "@kitora/ui/utils"

// Clone preview in the top layer: D19, D21, D22, D131, D150. The left list sits in an overflow: hidden box; the preview still paints above it, offset exactly where you grabbed. The dimmed row is the placeholder.

function ClippedClone() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="h-36 w-56 overflow-hidden rounded-md border p-2" data-demo-clip="clipped">
        <PresentedList name="clipped" initial={makeItems(4, "Clip")} />
      </div>
      <div className="w-56">
        <PresentedList name="clone-target" initial={makeItems(4, "Other")} />
      </div>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** The last finished drag, as the status line shows it. */
interface LastDrag {
  readonly kind: string
  readonly reason: string
  readonly moved: boolean
}

/** Props of {@link PresentedList}. */
interface PresentedListProps {
  /** \`data-demo\` value; also the container id. */
  readonly name: string
  readonly initial: readonly string[]
  readonly axis?: Axis
  readonly direction?: Direction
  /** Presentation options (feedback, indicator, motion, preview). */
  readonly presentation?: PresentationOptions<string>
  /** > 0 lets a drop land inside an item (combine, D44); the demo reports it instead of reordering. */
  readonly insideBand?: number
  readonly listClassName?: string
  readonly renderItem?: (label: string) => ReactNode
  readonly wrap?: (list: ReactNode) => ReactNode
}

/**
 * A sortable list drawn by the presentation layer: the rows carry no
 * drag styling of their own. The commit runs inside \`flushSync\`, so the new
 * order is in the DOM before the drop animation measures the landing slot.
 */
function PresentedList({ name, initial, axis = "y", direction, presentation, insideBand, listClassName, renderItem, wrap }: PresentedListProps) {
  const [items, setItems] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<LastDrag | null>(null)
  const [combined, setCombined] = useState<string | null>(null)
  const [log] = useState<DndPlugin<string>>(() => ({
    name: "demo-status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<string>) => setLast({ kind: e.source.kind, reason: e.reason, moved: e.op !== null }) }),
  }))
  const dnd = useDomDnd<string>({
    plugins: [log],
    onMove: (op) => {
      if (op.to.position === "inside") {
        setCombined(\`\${op.ids.join()} into \${op.to.target ?? op.to.container}\`)
        return
      }
      flushSync(() => setItems((xs) => applyMove(xs, op, (x) => x)))
    },
  })
  usePresentation(dnd, presentation)
  const state = useDragState(dnd)
  const list = (
    <ul data-demo={name} dir={direction} className={cn("flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]", axis === "y" ? "flex-col" : "flex-row flex-wrap", listClassName)}>
      {items.map((label, index) => (
        <PresentedRow key={label} dnd={dnd} container={name} label={label} index={index} axis={axis} direction={direction} insideBand={insideBand}>
          {renderItem ? renderItem(label) : label}
        </PresentedRow>
      ))}
    </ul>
  )
  return (
    <div className="flex flex-col gap-2">
      {wrap ? wrap(list) : list}
      <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
        phase {state.phase}
        {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
        {last ? \` · last: \${last.kind} \${last.reason}\${last.moved ? " (moved)" : ""}\` : ""}
        {combined ? \` · combined \${combined}\` : ""}
      </p>
    </div>
  )
}

interface PresentedRowProps {
  readonly dnd: DomDnd<string> | null
  readonly container: string
  readonly label: string
  readonly index: number
  readonly axis: Axis
  readonly direction: Direction | undefined
  readonly insideBand: number | undefined
  readonly children: ReactNode
}

/** One row of a {@link PresentedList}: draggable and item target with the same id, styled only through the kit's \`data-dnd-*\` hooks. */
function PresentedRow({ dnd, container, label, index, axis, direction, insideBand, children }: PresentedRowProps) {
  const dragRef = useDraggableRef(dnd, { id: label, container, index, data: label })
  const dropRef = useDroppableRef(dnd, { id: label, kind: "item", container, axis, direction, insideBand })
  const ref = useCallback(
    (el: HTMLLIElement | null) => {
      const a = dragRef(el)
      const b = dropRef(el)
      return () => {
        a?.()
        b?.()
      }
    },
    [dragRef, dropRef],
  )
  return (
    <li
      ref={ref}
      data-item={label}
      tabIndex={0}
      className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"
    >
      {children}
    </li>
  )
}

export function CloneList() {
  return <ClippedClone />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./motion-clone-Br-4tOsy.js`),[]));var Se=`<body style='margin:0;font:11px system-ui;display:grid;place-items:center;height:100%;background:#8881'><span id=t>alive 0s</span><script>window.bornAt=Date.now()+Math.random();let n=0;setInterval(()=>{document.getElementById('t').textContent='alive '+(++n)+'s'},1000)<\/script></body>`,Ce=`http://www.w3.org/1999/xhtml`,we=[`Frame card`,`Input card`,`Plain A`,`Plain B`],Q=`dom-owned`;function Te(e,t){let n=e.createElement(`li`);n.dataset.item=t,n.className=`flex items-center gap-2 rounded border bg-card p-1.5 text-[13px]`;let r=e.createElement(`span`);r.setAttribute(h,``),r.setAttribute(`aria-label`,`Drag ${t}`),r.className=`cursor-grab rounded px-1 font-mono text-muted-foreground hover:bg-accent`,r.textContent=`::`;let i=e.createElement(`span`);if(i.className=`w-20 shrink-0`,i.textContent=t,n.append(r,i),t===`Frame card`){let t=e.createElementNS(Ce,`iframe`);t.setAttribute(`sandbox`,`allow-scripts`),t.setAttribute(`srcdoc`,Se),t.title=`Live frame`,t.className=`h-10 w-32 rounded border`,n.append(t)}if(t===`Input card`){let t=e.createElement(`input`);t.setAttribute(`aria-label`,`Notes`),t.placeholder=`type, then drag`,t.className=`h-6 w-32 rounded border bg-background px-1`,n.append(t)}return n}function Ee(){let[e,t]=(0,T.useState)(!1),n=y(C),[r,i]=(0,T.useState)(null),a=(0,T.useRef)(e);a.current=e;let o=(0,T.useRef)(null),s=u({onMove:(0,T.useCallback)(e=>{let t=o.current;if(!t)return;let n=c([...t.ul.children].filter(e=>e instanceof HTMLLIElement),e,e=>e.dataset.item??``);i(w(t.ul,n,{method:a.current?`insertBefore`:void 0})),queueMicrotask(t.register)},[])});m(s,{feedback:`move`});let l=(0,T.useCallback)(e=>{if(!e||!s)return;e.replaceChildren(...we.map(t=>Te(e.ownerDocument,t)));let t=[],n=()=>{for(let e of t)e();t=[...e.children].flatMap((e,t)=>{let n=e instanceof HTMLElement?e.dataset.item??``:``;return[s.draggable(e,{id:n,container:Q,index:t,data:n}),s.droppable(e,{id:n,kind:`item`,container:Q})]})};return n(),o.current={ul:e,register:n},()=>{for(let e of t)e();o.current=null,e.replaceChildren()}},[s]);return(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsxs)(`label`,{className:`flex items-center gap-1 text-[12px]`,children:[(0,D.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),"data-demo-force":`insertBefore`}),`Force the insertBefore fallback `,n?``:`(this browser has no moveBefore: always on)`]}),(0,D.jsx)(`ul`,{ref:l,"data-demo":Q,className:`flex max-w-md flex-col gap-1 rounded-md border bg-muted/30 p-1`}),(0,D.jsxs)(`p`,{"data-demo-status":Q,className:`font-mono text-[11px] text-muted-foreground`,children:[`last move: `,r??`none yet`]})]})}function De(){return(0,D.jsx)(Ee,{})}var $=`import { useCallback, useRef, useState } from "react"
import { applyMove, HANDLE_ATTR, hasMoveBefore, type MoveMethod, type MoveOp, reorderChildren, useDomDnd, usePresentation, useSupport } from "@kitora/dnd"

// moveBefore keeps the iframe alive: D76, D133, D112. A DOM-owned list: drag the Frame card by its handle and its counter keeps counting. Force the fallback and the same move reloads it (the counter restarts).

/** The document of the iframe card: a birth stamp and a seconds counter, so a reload is visible and checkable. */
const FRAME_DOC =
  "<body style='margin:0;font:11px system-ui;display:grid;place-items:center;height:100%;background:#8881'><span id=t>alive 0s</span><script>window.bornAt=Date.now()+Math.random();let n=0;setInterval(()=>{document.getElementById('t').textContent='alive '+(++n)+'s'},1000)<\/script></body>"

/** The HTML namespace: \`createElementNS(HTML_NS, "iframe")\` makes the same element \`createElement("iframe")\` does. */
const HTML_NS = "http://www.w3.org/1999/xhtml"

const DOM_OWNED_IDS = ["Frame card", "Input card", "Plain A", "Plain B"] as const

const DOM_CONTAINER = "dom-owned"

/** Builds one card of the DOM-owned list, with a handle so a press on the iframe never starts a drag. */
function buildCard(doc: Document, id: string): HTMLLIElement {
  const li = doc.createElement("li")
  li.dataset.item = id
  li.className = "flex items-center gap-2 rounded border bg-card p-1.5 text-[13px]"
  const handle = doc.createElement("span")
  handle.setAttribute(HANDLE_ATTR, "")
  handle.setAttribute("aria-label", \`Drag \${id}\`)
  handle.className = "cursor-grab rounded px-1 font-mono text-muted-foreground hover:bg-accent"
  handle.textContent = "::"
  const label = doc.createElement("span")
  label.className = "w-20 shrink-0"
  label.textContent = id
  li.append(handle, label)
  if (id === "Frame card") {
    // Sandboxed to scripts only: the counter needs scripts, nothing needs the page's origin. Built with
    // createElementNS (the HTML namespace makes the same iframe; it is typed HTMLElement, hence
    // setAttribute) because oxlint's iframe-missing-sandbox reads \`doc.createElement("iframe")\` as
    // React's createElement with no props and cannot see a \`sandbox\` set on the element afterwards.
    const frame = doc.createElementNS(HTML_NS, "iframe")
    frame.setAttribute("sandbox", "allow-scripts")
    frame.setAttribute("srcdoc", FRAME_DOC)
    frame.title = "Live frame"
    frame.className = "h-10 w-32 rounded border"
    li.append(frame)
  }
  if (id === "Input card") {
    const input = doc.createElement("input")
    input.setAttribute("aria-label", "Notes")
    input.placeholder = "type, then drag"
    input.className = "h-6 w-32 rounded border bg-background px-1"
    li.append(input)
  }
  return li
}

function DomOwnedList() {
  const [force, setForce] = useState(false)
  const moveBefore = useSupport(hasMoveBefore)
  const [last, setLast] = useState<MoveMethod | null>(null)
  const forceRef = useRef(force)
  forceRef.current = force
  const listRef = useRef<{ readonly ul: HTMLUListElement; register(): void } | null>(null)
  const onMove = useCallback((op: MoveOp) => {
    const owned = listRef.current
    if (!owned) return
    const children = [...owned.ul.children].filter((c): c is HTMLLIElement => c instanceof HTMLLIElement)
    const next = applyMove(children, op, (li) => li.dataset.item ?? "")
    setLast(reorderChildren(owned.ul, next, { method: forceRef.current ? "insertBefore" : undefined }))
    // Indices change; re-register after the drag has ended (unregistering the live source would cancel it).
    queueMicrotask(owned.register)
  }, [])
  const dnd = useDomDnd<string>({ onMove })
  usePresentation(dnd, { feedback: "move" })
  const build = useCallback(
    (ul: HTMLUListElement | null) => {
      if (!ul || !dnd) return undefined
      ul.replaceChildren(...DOM_OWNED_IDS.map((id) => buildCard(ul.ownerDocument, id)))
      let unregister: Array<() => void> = []
      const register = () => {
        for (const u of unregister) u()
        unregister = [...ul.children].flatMap((li, index) => {
          const id = li instanceof HTMLElement ? (li.dataset.item ?? "") : ""
          return [dnd.draggable(li, { id, container: DOM_CONTAINER, index, data: id }), dnd.droppable(li, { id, kind: "item", container: DOM_CONTAINER })]
        })
      }
      register()
      listRef.current = { ul, register }
      return () => {
        for (const u of unregister) u()
        listRef.current = null
        ul.replaceChildren()
      }
    },
    [dnd],
  )
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-1 text-[12px]">
        <input type="checkbox" checked={force} onChange={(e) => setForce(e.target.checked)} data-demo-force="insertBefore" />
        Force the insertBefore fallback {moveBefore ? "" : "(this browser has no moveBefore: always on)"}
      </label>
      <ul ref={build} data-demo={DOM_CONTAINER} className="flex max-w-md flex-col gap-1 rounded-md border bg-muted/30 p-1" />
      <p data-demo-status={DOM_CONTAINER} className="font-mono text-[11px] text-muted-foreground">
        last move: {last ?? "none yet"}
      </p>
    </div>
  )
}

export function DomOwnedListDemo() {
  return <DomOwnedList />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./motion-move-before-Deo2Kp_s.js`),[]));function Oe(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Previews and motion`,children:`What a drag looks like: the preview, the placeholder, siblings making room, the drop landing, commit animations and state-preserving moves. Every animation is feature-detected and turns off under reduced motion.`}),(0,D.jsx)(b,{n:1,title:`Clone preview in the top layer`,blurb:`D19, D21, D22, D131, D150. The left list sits in an overflow: hidden box; the preview still paints above it, offset exactly where you grabbed. The dimmed row is the placeholder.`,code:Z,children:(0,D.jsx)(xe,{})}),(0,D.jsx)(b,{n:2,title:`App-rendered preview`,blurb:`D19. renderPreview draws into a container the kit positions and moves; here a portal renders a card.`,code:N,children:(0,D.jsx)(ie,{})}),(0,D.jsx)(b,{n:3,title:`Feedback modes`,blurb:`D23. clone (default) leaves a placeholder; move drags the source itself; none moves nothing and marks the slot with a line.`,code:L,children:(0,D.jsx)(I,{})}),(0,D.jsx)(b,{n:4,title:`Shift and drop timing`,blurb:`D71, D72, D73, D74, D112. Siblings shift to open the slot, the preview flies to it, the row flashes. Duration and easing are CSS custom properties.`,code:J,children:(0,D.jsx)(ve,{})}),(0,D.jsx)(b,{n:5,title:`Commit animations`,blurb:`D75, D134. Changes that are not drags animate with View Transitions, or FLIP where those are missing.`,code:k,children:(0,D.jsx)(te,{})}),(0,D.jsx)(b,{n:6,title:`Reduced motion`,blurb:`D77. auto follows the OS setting; never turns every animation off. Either way the drop applies at once, nothing is skipped.`,code:K,children:(0,D.jsx)(G,{})}),(0,D.jsx)(b,{n:7,title:`moveBefore keeps the iframe alive`,blurb:`D76, D133, D112. A DOM-owned list: drag the Frame card by its handle and its counter keeps counting. Force the fallback and the same move reloads it (the counter restarts).`,code:$,children:(0,D.jsx)(De,{})})]})}export{Oe as component};