import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./overlay-DqjGYZmU.js";import{t as r}from"./input-CLjf4jLu.js";import{i,n as a,r as o}from"./parts-ZglKsaYF.js";import{i as s,n as c}from"./presets-B7T12Ync.js";import{i as l,l as u}from"./opener-6ftLcBPy.js";import{c as d,i as ee,l as te,n as ne,t as f}from"./select-C9p-qLj8.js";import{Ec as p,En as re,Lr as ie,Mr as m,Pr as h,Tn as g,Uc as _,jr as v,ri as y,zc as ae}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as b}from"./example-B67lLz1F.js";var x=e(_(),1);function oe(e){let t=(0,x.useContext)(ie);if(!t)throw Error(`overlay: useOverlayNav() must be called inside an overlay's content`);let{stack:n,id:r}=t,i=(0,x.useRef)([e]),[a,o]=(0,x.useState)(i.current),s=(0,x.useCallback)(e=>{i.current=e,o(e)},[]),c=(0,x.useCallback)(()=>i.current.length<=1?!1:(s(i.current.slice(0,-1)),!0),[s]),l=(0,x.useCallback)(e=>s([...i.current,e]),[s]),u=(0,x.useCallback)(e=>s([e]),[s]);(0,x.useEffect)(()=>n.get(r)?n.addStepBack(r,c):void 0,[n,r,c]);let d=a.at(-1)??e;return(0,x.useMemo)(()=>({view:d,depth:a.length,canGoBack:a.length>1,push:l,back:c,reset:u}),[d,a.length,l,c,u])}var S=ae(),se={name:``,email:``},C=500,w=()=>new Promise(e=>setTimeout(e,C));function T(e){return e.status===`resolved`?`saved ${e.value.name||`(no name)`}`:`dismissed (${e.reason})`}function E({formId:e,initial:t}){let n=h(),[i,a]=(0,x.useState)(t),o=i.name!==t.name||i.email!==t.email;return m(v(()=>o)),(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),n.run(w).then(()=>n.resolve(i))},children:[(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Name`}),(0,S.jsx)(r,{className:`h-7`,name:`name`,value:i.name,disabled:n.busy,onChange:e=>a({...i,name:e.currentTarget.value})})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Email`}),(0,S.jsx)(r,{className:`h-7`,name:`email`,type:`email`,value:i.email,disabled:n.busy,onChange:e=>a({...i,email:e.currentTarget.value})})]}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"data-dirty":o?``:void 0,children:o?`Unsaved changes — every close path asks first.`:`Pristine — closes without asking.`})]})}function D({formId:e}){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(O,{formId:e})]})}function O({formId:e}){let t=h();return(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,disabled:t.busy,children:t.busy?`Saving…`:`Save`})}function k({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function A(){let e=(0,x.useId)(),[t,n]=(0,x.useState)(`—`);return(0,S.jsx)(g,{children:(0,S.jsx)(k,{id:`modal`,result:t,children:(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,children:`New customer`}),title:`New customer`,description:`Saved with a 500 ms fake request.`,size:`sm`,footer:(0,S.jsx)(D,{formId:e}),onResult:e=>n(T(e)),children:(0,S.jsx)(E,{formId:e,initial:se})})})})}var j=`import { useId, useState, type ReactNode } from "react"
import { dirtyGuard, EnsureOverlayUi, Modal, Overlay, type OverlayResult, useCloseGuard, useOverlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Form in a Modal: Type something, then try Escape, the backdrop, ×, and Cancel: each asks once. Keep editing keeps the values.

interface Customer {
  readonly name: string
  readonly email: string
}

const EMPTY: Customer = { name: "", email: "" }

const SAVE_MS = 500

const wait = () => new Promise<void>((r) => setTimeout(r, SAVE_MS))

function describe(r: OverlayResult<Customer>): string {
  return r.status === "resolved" ? \`saved \${r.value.name || "(no name)"}\` : \`dismissed (\${r.reason})\`
}

/**
 * The form body. Lives inside the overlay's content, so it mounts per open. Its
 * guard asks "Discard changes?" on any close while the values differ from the
 * initial ones; Save resolves with \`resolved\`, which guards never see.
 */
function CustomerForm({ formId, initial }: { formId: string; initial: Customer }) {
  const ctl = useOverlay<Customer>()
  const [values, setValues] = useState(initial)
  const dirty = values.name !== initial.name || values.email !== initial.email
  useCloseGuard(dirtyGuard(() => dirty))
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        ctl.run(wait).then(() => ctl.resolve(values))
      }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Name</span>
        <Input className="h-7" name="name" value={values.name} disabled={ctl.busy} onChange={(e) => setValues({ ...values, name: e.currentTarget.value })} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Email</span>
        <Input className="h-7" name="email" type="email" value={values.email} disabled={ctl.busy} onChange={(e) => setValues({ ...values, email: e.currentTarget.value })} />
      </label>
      <p className="text-xs text-muted-foreground" data-dirty={dirty ? "" : undefined}>
        {dirty ? "Unsaved changes — every close path asks first." : "Pristine — closes without asking."}
      </p>
    </form>
  )
}

function FormFooter({ formId }: { formId: string }) {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <SaveButton formId={formId} />
    </>
  )
}

function SaveButton({ formId }: { formId: string }) {
  const ctl = useOverlay<Customer>()
  return (
    <Button size="sm" type="submit" form={formId} disabled={ctl.busy}>
      {ctl.busy ? "Saving…" : "Save"}
    </Button>
  )
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function NewCustomerButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="modal" result={result}>
        <Modal<Customer>
          trigger={<Button size="sm">New customer</Button>}
          title="New customer"
          description="Saved with a 500 ms fake request."
          size="sm"
          footer={<FormFooter formId={formId} />}
          onResult={(r) => setResult(describe(r))}
        >
          <CustomerForm formId={formId} initial={EMPTY} />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>p(()=>import(`./forms-modal-C1iCNz36.js`),[]));var M=500,N=()=>new Promise(e=>setTimeout(e,M));function P(e){return e.status===`resolved`?`saved ${e.value.name||`(no name)`}`:`dismissed (${e.reason})`}function F({formId:e,initial:t}){let n=h(),[i,a]=(0,x.useState)(t),o=i.name!==t.name||i.email!==t.email;return m(v(()=>o)),(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),n.run(N).then(()=>n.resolve(i))},children:[(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Name`}),(0,S.jsx)(r,{className:`h-7`,name:`name`,value:i.name,disabled:n.busy,onChange:e=>a({...i,name:e.currentTarget.value})})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Email`}),(0,S.jsx)(r,{className:`h-7`,name:`email`,type:`email`,value:i.email,disabled:n.busy,onChange:e=>a({...i,email:e.currentTarget.value})})]}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"data-dirty":o?``:void 0,children:o?`Unsaved changes — every close path asks first.`:`Pristine — closes without asking.`})]})}function I({formId:e}){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(L,{formId:e})]})}function L({formId:e}){let t=h();return(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,disabled:t.busy,children:t.busy?`Saving…`:`Save`})}function R({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function z(){let e=(0,x.useId)(),[t,n]=(0,x.useState)(`—`);return(0,S.jsx)(g,{children:(0,S.jsx)(R,{id:`pristine`,result:t,children:(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,variant:`outline`,children:`Edit customer`}),title:`Edit customer`,size:`sm`,dismiss:{outside:`when-pristine`},footer:(0,S.jsx)(I,{formId:e}),onResult:e=>n(P(e)),children:(0,S.jsx)(F,{formId:e,initial:{name:`Ada Lovelace`,email:`ada@example.com`}})})})})}var B=`import { useId, useState, type ReactNode } from "react"
import { dirtyGuard, EnsureOverlayUi, Modal, Overlay, type OverlayResult, useCloseGuard, useOverlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Outside press only when pristine: \`dismiss={{ outside: "when-pristine" }}: a stray click on the backdrop closes a pristine form and is ignored on a dirty one (no confirm); Escape still asks.\`

interface Customer {
  readonly name: string
  readonly email: string
}

const SAVE_MS = 500

const wait = () => new Promise<void>((r) => setTimeout(r, SAVE_MS))

function describe(r: OverlayResult<Customer>): string {
  return r.status === "resolved" ? \`saved \${r.value.name || "(no name)"}\` : \`dismissed (\${r.reason})\`
}

/**
 * The form body. Lives inside the overlay's content, so it mounts per open. Its
 * guard asks "Discard changes?" on any close while the values differ from the
 * initial ones; Save resolves with \`resolved\`, which guards never see.
 */
function CustomerForm({ formId, initial }: { formId: string; initial: Customer }) {
  const ctl = useOverlay<Customer>()
  const [values, setValues] = useState(initial)
  const dirty = values.name !== initial.name || values.email !== initial.email
  useCloseGuard(dirtyGuard(() => dirty))
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        ctl.run(wait).then(() => ctl.resolve(values))
      }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Name</span>
        <Input className="h-7" name="name" value={values.name} disabled={ctl.busy} onChange={(e) => setValues({ ...values, name: e.currentTarget.value })} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Email</span>
        <Input className="h-7" name="email" type="email" value={values.email} disabled={ctl.busy} onChange={(e) => setValues({ ...values, email: e.currentTarget.value })} />
      </label>
      <p className="text-xs text-muted-foreground" data-dirty={dirty ? "" : undefined}>
        {dirty ? "Unsaved changes — every close path asks first." : "Pristine — closes without asking."}
      </p>
    </form>
  )
}

function FormFooter({ formId }: { formId: string }) {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <SaveButton formId={formId} />
    </>
  )
}

function SaveButton({ formId }: { formId: string }) {
  const ctl = useOverlay<Customer>()
  return (
    <Button size="sm" type="submit" form={formId} disabled={ctl.busy}>
      {ctl.busy ? "Saving…" : "Save"}
    </Button>
  )
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function EditCustomerButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="pristine" result={result}>
        <Modal<Customer>
          trigger={
            <Button size="sm" variant="outline">
              Edit customer
            </Button>
          }
          title="Edit customer"
          size="sm"
          dismiss={{ outside: "when-pristine" }}
          footer={<FormFooter formId={formId} />}
          onResult={(r) => setResult(describe(r))}
        >
          <CustomerForm formId={formId} initial={{ name: "Ada Lovelace", email: "ada@example.com" }} />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>p(()=>import(`./forms-pristine-CtO2EELx.js`),[]));var V=500,H=()=>new Promise(e=>setTimeout(e,V));function U(e){return e.status===`resolved`?`saved ${e.value.name||`(no name)`}`:`dismissed (${e.reason})`}function W({formId:e,initial:t}){let n=h(),[i,a]=(0,x.useState)(t),o=i.name!==t.name||i.email!==t.email;return m(v(()=>o)),(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),n.run(H).then(()=>n.resolve(i))},children:[(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Name`}),(0,S.jsx)(r,{className:`h-7`,name:`name`,value:i.name,disabled:n.busy,onChange:e=>a({...i,name:e.currentTarget.value})})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Email`}),(0,S.jsx)(r,{className:`h-7`,name:`email`,type:`email`,value:i.email,disabled:n.busy,onChange:e=>a({...i,email:e.currentTarget.value})})]}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"data-dirty":o?``:void 0,children:o?`Unsaved changes — every close path asks first.`:`Pristine — closes without asking.`})]})}function G({formId:e}){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(K,{formId:e})]})}function K({formId:e}){let t=h();return(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,disabled:t.busy,children:t.busy?`Saving…`:`Save`})}function ce({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function le(){let e=(0,x.useId)(),[t,n]=(0,x.useState)(`—`);return(0,S.jsx)(g,{children:(0,S.jsx)(ce,{id:`sheet`,result:t,children:(0,S.jsx)(s,{trigger:(0,S.jsx)(y,{size:`sm`,variant:`outline`,children:`Edit in sheet`}),title:`Edit customer`,description:`Sticky header and footer; the body scrolls.`,footer:(0,S.jsx)(G,{formId:e}),onResult:e=>n(U(e)),children:(0,S.jsx)(W,{formId:e,initial:{name:`Grace Hopper`,email:`grace@example.com`}})})})})}var q=`import { useId, useState, type ReactNode } from "react"
import { dirtyGuard, EnsureOverlayUi, Overlay, type OverlayResult, Sheet, useCloseGuard, useOverlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Form in a Sheet (swipe path): Swipe the sheet right (or drag with the mouse): a dirty form asks before it goes.

interface Customer {
  readonly name: string
  readonly email: string
}

const SAVE_MS = 500

const wait = () => new Promise<void>((r) => setTimeout(r, SAVE_MS))

function describe(r: OverlayResult<Customer>): string {
  return r.status === "resolved" ? \`saved \${r.value.name || "(no name)"}\` : \`dismissed (\${r.reason})\`
}

/**
 * The form body. Lives inside the overlay's content, so it mounts per open. Its
 * guard asks "Discard changes?" on any close while the values differ from the
 * initial ones; Save resolves with \`resolved\`, which guards never see.
 */
function CustomerForm({ formId, initial }: { formId: string; initial: Customer }) {
  const ctl = useOverlay<Customer>()
  const [values, setValues] = useState(initial)
  const dirty = values.name !== initial.name || values.email !== initial.email
  useCloseGuard(dirtyGuard(() => dirty))
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        ctl.run(wait).then(() => ctl.resolve(values))
      }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Name</span>
        <Input className="h-7" name="name" value={values.name} disabled={ctl.busy} onChange={(e) => setValues({ ...values, name: e.currentTarget.value })} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Email</span>
        <Input className="h-7" name="email" type="email" value={values.email} disabled={ctl.busy} onChange={(e) => setValues({ ...values, email: e.currentTarget.value })} />
      </label>
      <p className="text-xs text-muted-foreground" data-dirty={dirty ? "" : undefined}>
        {dirty ? "Unsaved changes — every close path asks first." : "Pristine — closes without asking."}
      </p>
    </form>
  )
}

function FormFooter({ formId }: { formId: string }) {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <SaveButton formId={formId} />
    </>
  )
}

function SaveButton({ formId }: { formId: string }) {
  const ctl = useOverlay<Customer>()
  return (
    <Button size="sm" type="submit" form={formId} disabled={ctl.busy}>
      {ctl.busy ? "Saving…" : "Save"}
    </Button>
  )
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function EditInSheetButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="sheet" result={result}>
        <Sheet<Customer>
          trigger={
            <Button size="sm" variant="outline">
              Edit in sheet
            </Button>
          }
          title="Edit customer"
          description="Sticky header and footer; the body scrolls."
          footer={<FormFooter formId={formId} />}
          onResult={(r) => setResult(describe(r))}
        >
          <CustomerForm formId={formId} initial={{ name: "Grace Hopper", email: "grace@example.com" }} />
        </Sheet>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>p(()=>import(`./forms-sheet-kmNdVgTP.js`),[]));var ue={name:``,email:``},de=500,fe=()=>new Promise(e=>setTimeout(e,de));function pe(e){return e.status===`resolved`?`saved ${e.value.name||`(no name)`}`:`dismissed (${e.reason})`}function me({formId:e,initial:t}){let n=h(),[i,a]=(0,x.useState)(t),o=i.name!==t.name||i.email!==t.email;return m(v(()=>o)),(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),n.run(fe).then(()=>n.resolve(i))},children:[(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Name`}),(0,S.jsx)(r,{className:`h-7`,name:`name`,value:i.name,disabled:n.busy,onChange:e=>a({...i,name:e.currentTarget.value})})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Email`}),(0,S.jsx)(r,{className:`h-7`,name:`email`,type:`email`,value:i.email,disabled:n.busy,onChange:e=>a({...i,email:e.currentTarget.value})})]}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"data-dirty":o?``:void 0,children:o?`Unsaved changes — every close path asks first.`:`Pristine — closes without asking.`})]})}function he({formId:e}){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(ge,{formId:e})]})}function ge({formId:e}){let t=h();return(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,disabled:t.busy,children:t.busy?`Saving…`:`Save`})}function _e({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function ve({formId:e,onResult:t}){let n=h();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(`p`,{className:`text-muted-foreground`,children:`The modal below is a child entry of this sheet.`}),(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,className:`self-start`,children:`Add customer…`}),title:`Add customer`,size:`sm`,footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(y,{size:`sm`,variant:`ghost`,className:`mr-auto`,onClick:()=>void n.close(`close-button`),"data-close-parent":``,children:`Close settings too`}),(0,S.jsx)(he,{formId:e})]}),onResult:t,children:(0,S.jsx)(me,{formId:e,initial:ue})})]})}function ye(){let e=(0,x.useId)(),[t,r]=(0,x.useState)(`—`);return(0,S.jsx)(g,{children:(0,S.jsx)(_e,{id:`nested`,result:t,children:(0,S.jsx)(s,{trigger:(0,S.jsx)(y,{size:`sm`,variant:`outline`,children:`Settings sheet`}),title:`Settings`,width:`lg`,footer:(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Close settings`}),children:(0,S.jsx)(ve,{formId:e,onResult:e=>r(pe(e))})})})})}var J=`import { useId, useState, type ReactNode } from "react"
import { dirtyGuard, EnsureOverlayUi, Modal, Overlay, type OverlayResult, Sheet, useCloseGuard, useOverlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Parent closing a dirty child: Open Settings, then Add customer, type a name, then “Close settings too”: the sheet's close reaches the child first (reason parent), its guard asks once, and Keep editing keeps both open.

interface Customer {
  readonly name: string
  readonly email: string
}

const EMPTY: Customer = { name: "", email: "" }

const SAVE_MS = 500

const wait = () => new Promise<void>((r) => setTimeout(r, SAVE_MS))

function describe(r: OverlayResult<Customer>): string {
  return r.status === "resolved" ? \`saved \${r.value.name || "(no name)"}\` : \`dismissed (\${r.reason})\`
}

/**
 * The form body. Lives inside the overlay's content, so it mounts per open. Its
 * guard asks "Discard changes?" on any close while the values differ from the
 * initial ones; Save resolves with \`resolved\`, which guards never see.
 */
function CustomerForm({ formId, initial }: { formId: string; initial: Customer }) {
  const ctl = useOverlay<Customer>()
  const [values, setValues] = useState(initial)
  const dirty = values.name !== initial.name || values.email !== initial.email
  useCloseGuard(dirtyGuard(() => dirty))
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        ctl.run(wait).then(() => ctl.resolve(values))
      }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Name</span>
        <Input className="h-7" name="name" value={values.name} disabled={ctl.busy} onChange={(e) => setValues({ ...values, name: e.currentTarget.value })} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Email</span>
        <Input className="h-7" name="email" type="email" value={values.email} disabled={ctl.busy} onChange={(e) => setValues({ ...values, email: e.currentTarget.value })} />
      </label>
      <p className="text-xs text-muted-foreground" data-dirty={dirty ? "" : undefined}>
        {dirty ? "Unsaved changes — every close path asks first." : "Pristine — closes without asking."}
      </p>
    </form>
  )
}

function FormFooter({ formId }: { formId: string }) {
  return (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
      <SaveButton formId={formId} />
    </>
  )
}

function SaveButton({ formId }: { formId: string }) {
  const ctl = useOverlay<Customer>()
  return (
    <Button size="sm" type="submit" form={formId} disabled={ctl.busy}>
      {ctl.busy ? "Saving…" : "Save"}
    </Button>
  )
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

/** Inside the settings sheet: a child modal whose footer can close the PARENT sheet. */
function SettingsBody({ formId, onResult }: { formId: string; onResult: (r: OverlayResult<Customer>) => void }) {
  const sheet = useOverlay()
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground">The modal below is a child entry of this sheet.</p>
      <Modal<Customer>
        trigger={
          <Button size="sm" className="self-start">
            Add customer…
          </Button>
        }
        title="Add customer"
        size="sm"
        footer={
          <>
            <Button size="sm" variant="ghost" className="mr-auto" onClick={() => void sheet.close("close-button")} data-close-parent="">
              Close settings too
            </Button>
            <FormFooter formId={formId} />
          </>
        }
        onResult={onResult}
      >
        <CustomerForm formId={formId} initial={EMPTY} />
      </Modal>
    </div>
  )
}

export function SettingsSheetButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="nested" result={result}>
        <Sheet
          trigger={
            <Button size="sm" variant="outline">
              Settings sheet
            </Button>
          }
          title="Settings"
          width="lg"
          footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Close settings</Overlay.Close>}
        >
          <SettingsBody formId={formId} onResult={(r) => setResult(describe(r))} />
        </Sheet>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>p(()=>import(`./forms-nested-BCp_k3Mq.js`),[]));var be={name:``,email:``},xe=500,Se=()=>new Promise(e=>setTimeout(e,xe));function Ce(e){return e.status===`resolved`?`saved ${e.value.name||`(no name)`}`:`dismissed (${e.reason})`}function we({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function Te(e){return e instanceof Error?e.message:String(e)}function Ee({formId:e,save:t,openNo:n}){let i=h(),[a,o]=(0,x.useState)(be);return(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),i.run(()=>t(a)).then(()=>i.resolve(a),()=>void 0)},children:[(0,S.jsxs)(`p`,{className:`text-xs text-muted-foreground tabular-nums`,"data-testid":`open-no`,children:[`open #`,n,`: fields start empty`]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Name`}),(0,S.jsx)(r,{className:`h-7`,name:`name`,value:a.name,disabled:i.busy,onChange:e=>o({...a,name:e.currentTarget.value})})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Email`}),(0,S.jsx)(r,{className:`h-7`,name:`email`,type:`email`,value:a.email,disabled:i.busy,onChange:e=>o({...a,email:e.currentTarget.value})})]}),i.error===void 0?null:(0,S.jsx)(`p`,{role:`alert`,className:`text-xs text-destructive`,"data-testid":`save-error`,children:Te(i.error)})]})}function De({formId:e}){let t=h();return(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,disabled:t.busy,children:t.busy?`Saving…`:t.error===void 0?`Save`:`Retry`})}function Oe(){let e=(0,x.useId)(),[t,r]=(0,x.useState)(`—`),[i,a]=(0,x.useState)(!0),[o,s]=(0,x.useState)(0);return(0,S.jsx)(g,{children:(0,S.jsxs)(we,{id:`failure`,result:t,children:[(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,children:`Create customer`}),title:`Create customer`,size:`sm`,footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(De,{formId:e})]}),onOpenChange:e=>{e&&s(e=>e+1)},onResult:e=>r(Ce(e)),children:(0,S.jsx)(Ee,{formId:e,save:async e=>{if(await Se(),i)throw a(!1),Error(`${e.email||`That email`} is already taken.`)},openNo:o})}),(0,S.jsxs)(`label`,{className:`flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>a(e.currentTarget.checked),"data-testid":`fail-next`}),`next save fails`]})]})})}var Y=`import { useId, useState, type ReactNode } from "react"
import { EnsureOverlayUi, Modal, Overlay, type OverlayResult, useOverlay } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Submit fails, the modal stays (O7): The first save fails: the error shows inline, the values stay, and Retry saves and closes. Open it again: the fields start empty (the body mounts per open).

interface Customer {
  readonly name: string
  readonly email: string
}

const EMPTY: Customer = { name: "", email: "" }

const SAVE_MS = 500

const wait = () => new Promise<void>((r) => setTimeout(r, SAVE_MS))

function describe(r: OverlayResult<Customer>): string {
  return r.status === "resolved" ? \`saved \${r.value.name || "(no name)"}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

/** The error text a failed \`run\` left on the controller. */
function errorText(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

/**
 * O7: the body mounts per open (fresh values every time); Save runs busy, a
 * rejection lands in \`ctl.error\` and the modal stays open with the values kept.
 */
function CreateForm({ formId, save, openNo }: { formId: string; save: (c: Customer) => Promise<void>; openNo: number }) {
  const ctl = useOverlay<Customer>()
  const [values, setValues] = useState(EMPTY)
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        // The failure is shown from ctl.error below; nothing else to do with it here.
        void ctl
          .run(() => save(values))
          .then(
            () => ctl.resolve(values),
            () => undefined,
          )
      }}
    >
      <p className="text-xs text-muted-foreground tabular-nums" data-testid="open-no">
        open #{openNo}: fields start empty
      </p>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Name</span>
        <Input className="h-7" name="name" value={values.name} disabled={ctl.busy} onChange={(e) => setValues({ ...values, name: e.currentTarget.value })} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Email</span>
        <Input className="h-7" name="email" type="email" value={values.email} disabled={ctl.busy} onChange={(e) => setValues({ ...values, email: e.currentTarget.value })} />
      </label>
      {ctl.error === undefined ? null : (
        <p role="alert" className="text-xs text-destructive" data-testid="save-error">
          {errorText(ctl.error)}
        </p>
      )}
    </form>
  )
}

function RetrySaveButton({ formId }: { formId: string }) {
  const ctl = useOverlay<Customer>()
  return (
    <Button size="sm" type="submit" form={formId} disabled={ctl.busy}>
      {ctl.busy ? "Saving…" : ctl.error === undefined ? "Save" : "Retry"}
    </Button>
  )
}

export function CreateCustomerButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  const [failNext, setFailNext] = useState(true)
  const [opens, setOpens] = useState(0)
  const save = async (values: Customer) => {
    await wait()
    if (failNext) {
      setFailNext(false)
      throw new Error(\`\${values.email || "That email"} is already taken.\`)
    }
  }
  return (
    <EnsureOverlayUi>
      <Row id="failure" result={result}>
        <Modal<Customer>
          trigger={<Button size="sm">Create customer</Button>}
          title="Create customer"
          size="sm"
          footer={
            <>
              <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
              <RetrySaveButton formId={formId} />
            </>
          }
          onOpenChange={(open) => {
            if (open) setOpens((n) => n + 1)
          }}
          onResult={(r) => setResult(describe(r))}
        >
          <CreateForm formId={formId} save={save} openNo={opens} />
        </Modal>
        <label className="flex items-center gap-1 text-xs text-muted-foreground">
          <input type="checkbox" checked={failNext} onChange={(e) => setFailNext(e.currentTarget.checked)} data-testid="fail-next" />
          next save fails
        </label>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>p(()=>import(`./forms-failure-7oYWLckU.js`),[]));function ke({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}var Ae=[`template`,`name`,`review`],X=[`Blank`,`Kanban`,`Roadmap`];function je(){let e=h(),t=oe(`template`),[n,i]=(0,x.useState)(X[0]),[a,o]=(0,x.useState)(``);return(0,S.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,S.jsxs)(`p`,{className:`text-xs text-muted-foreground tabular-nums`,"data-testid":`step`,children:[`step `,t.depth,` of `,Ae.length,`: `,t.view]}),t.view===`template`?(0,S.jsx)(`div`,{className:`flex gap-1`,role:`group`,"aria-label":`Template`,children:X.map((e,r)=>(0,S.jsx)(y,{size:`sm`,variant:e===n?`default`:`outline`,autoFocus:r===0,onClick:()=>{i(e),t.push(`name`)},children:e},e))}):null,t.view===`name`?(0,S.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),t.push(`review`)},children:(0,S.jsx)(r,{className:`h-7`,"aria-label":`Project name`,placeholder:`Project name`,autoFocus:!0,value:a,onChange:e=>o(e.currentTarget.value)})}):null,t.view===`review`?(0,S.jsxs)(y,{size:`sm`,className:`self-start`,autoFocus:!0,onClick:()=>e.resolve({template:n,name:a}),children:[`Create “`,a||`Untitled`,`” from `,n]}):null,(0,S.jsxs)(`div`,{className:`flex gap-1`,children:[(0,S.jsx)(y,{size:`sm`,variant:`ghost`,disabled:!t.canGoBack,onClick:()=>t.back(),children:`Back`}),t.view===`name`?(0,S.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>t.push(`review`),children:`Next`}):null]})]})}function Me(){let[e,t]=(0,x.useState)(`—`);return(0,S.jsx)(g,{children:(0,S.jsx)(ke,{id:`steps`,result:e,children:(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,children:`New project`}),title:`New project`,size:`sm`,dismiss:{escape:`back-first`},onResult:e=>t(e.status===`resolved`?`created ${e.value.name||`Untitled`} (${e.value.template})`:`dismissed (${e.reason})`),children:(0,S.jsx)(je,{})})})})}var Z=`import { useState, type ReactNode } from "react"
import { EnsureOverlayUi, Modal, useOverlay, useOverlayNav } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Multi-step modal (O9): \`useOverlayNav() keeps a view stack inside one modal. With dismiss={{ escape: "back-first" }}, Escape goes back one step; at the first step it closes the modal.\`

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

/** O9: the wizard's steps, in order. */
const STEPS = ["template", "name", "review"] as const

type Step = (typeof STEPS)[number]

const TEMPLATES = ["Blank", "Kanban", "Roadmap"] as const

interface Project {
  readonly template: string
  readonly name: string
}

/** O9: a view stack inside one modal. Escape goes back a step (escape "back-first"); at the first step it closes. */
function ProjectSteps() {
  const ctl = useOverlay<Project>()
  const nav = useOverlayNav<Step>("template")
  const [template, setTemplate] = useState<string>(TEMPLATES[0])
  const [name, setName] = useState("")
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <p className="text-xs text-muted-foreground tabular-nums" data-testid="step">
        step {nav.depth} of {STEPS.length}: {nav.view}
      </p>
      {nav.view === "template" ? (
        <div className="flex gap-1" role="group" aria-label="Template">
          {TEMPLATES.map((t, i) => (
            <Button
              key={t}
              size="sm"
              variant={t === template ? "default" : "outline"}
              autoFocus={i === 0}
              onClick={() => {
                setTemplate(t)
                nav.push("name")
              }}
            >
              {t}
            </Button>
          ))}
        </div>
      ) : null}
      {nav.view === "name" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            nav.push("review")
          }}
        >
          <Input className="h-7" aria-label="Project name" placeholder="Project name" autoFocus value={name} onChange={(e) => setName(e.currentTarget.value)} />
        </form>
      ) : null}
      {nav.view === "review" ? (
        <Button size="sm" className="self-start" autoFocus onClick={() => ctl.resolve({ template, name })}>
          Create “{name || "Untitled"}” from {template}
        </Button>
      ) : null}
      <div className="flex gap-1">
        <Button size="sm" variant="ghost" disabled={!nav.canGoBack} onClick={() => nav.back()}>
          Back
        </Button>
        {nav.view === "name" ? (
          <Button size="sm" variant="outline" onClick={() => nav.push("review")}>
            Next
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export function NewProjectButton() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="steps" result={result}>
        <Modal<Project>
          trigger={<Button size="sm">New project</Button>}
          title="New project"
          size="sm"
          dismiss={{ escape: "back-first" }}
          onResult={(r) => setResult(r.status === "resolved" ? \`created \${r.value.name || "Untitled"} (\${r.value.template})\` : \`dismissed (\${r.reason})\`)}
        >
          <ProjectSteps />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>p(()=>import(`./forms-steps-CE_Y-shM.js`),[]));function Ne({id:e,result:t,children:n}){return(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,S.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,S.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function Pe(){let e=h(),t=(0,x.useId)(),[s,c]=(0,x.useState)(``);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{title:`New customer`}),(0,S.jsx)(a,{children:(0,S.jsx)(`form`,{id:t,onSubmit:t=>{t.preventDefault(),s!==``&&e.resolve(s)},children:(0,S.jsx)(r,{className:`h-7`,"aria-label":`Customer name`,placeholder:`Name`,autoFocus:!0,value:s,onChange:e=>c(e.currentTarget.value)})})}),(0,S.jsxs)(o,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(y,{size:`sm`,type:`submit`,form:t,disabled:s===``,children:`Create`})]})]})}var Fe=u({name:`new-customer`,presentation:{size:`sm`},render:()=>(0,S.jsx)(Pe,{})});function Ie({formId:e,customers:t,onCreated:n}){let i=h(),a=l(),[o,s]=(0,x.useState)(t[0]??``),[c,u]=(0,x.useState)(`120`),p=async()=>{let e=await a.open(Fe,void 0).value();e!==void 0&&(n(e),s(e))};return(0,S.jsxs)(`form`,{id:e,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),i.resolve({customer:o,amount:c})},children:[(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{id:`${e}-customer`,className:`text-xs text-muted-foreground`,children:`Customer`}),(0,S.jsxs)(`div`,{className:`flex gap-1`,children:[(0,S.jsxs)(f,{items:t.map(e=>({value:e,label:e})),value:o,onValueChange:e=>e!==null&&s(e),children:[(0,S.jsx)(d,{size:`sm`,"aria-labelledby":`${e}-customer`,className:`flex-1 text-[13px]`,"data-testid":`customer-select`,children:(0,S.jsx)(te,{})}),(0,S.jsx)(ne,{alignItemWithTrigger:!1,children:t.map(e=>(0,S.jsx)(ee,{value:e,children:e},e))})]}),(0,S.jsx)(y,{size:`sm`,variant:`outline`,type:`button`,onClick:()=>void p(),"data-testid":`new-customer`,children:`+ New customer…`})]})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Amount`}),(0,S.jsx)(r,{className:`h-7 tabular-nums`,inputMode:`decimal`,value:c,onChange:e=>u(e.currentTarget.value)})]})]})}function Le(){let e=(0,x.useId)(),[t,r]=(0,x.useState)(`—`),[i,a]=(0,x.useState)([`Ada Lovelace`,`Grace Hopper`]);return(0,S.jsx)(g,{children:(0,S.jsx)(Ne,{id:`related`,result:t,children:(0,S.jsx)(c,{trigger:(0,S.jsx)(y,{size:`sm`,children:`New invoice`}),title:`New invoice`,size:`sm`,footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Close,{render:(0,S.jsx)(y,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,S.jsx)(y,{size:`sm`,type:`submit`,form:e,children:`Save`})]}),onResult:e=>r(e.status===`resolved`?`invoice for ${e.value.customer}, ${e.value.amount}`:`dismissed (${e.reason})`),children:(0,S.jsx)(Ie,{formId:e,customers:i,onCreated:e=>a(t=>[...t,e])})})})})}var Q=`import { useId, useState, type ReactNode } from "react"
import { defineOverlay, EnsureOverlayUi, Modal, Overlay, OverlayBody, OverlayFooter, OverlayHeader, useOverlay, useOverlays } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

// Create a related record, then select it (O10): In the invoice, “+ New customer…” opens a child modal with useOverlays().open(def).value(). The name it returns is added to the select and selected; Cancel leaves the field as it was.

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

/** O10: the nested modal's body. Its result is the new customer's name. */
function NewCustomerBody() {
  const ctl = useOverlay<string>()
  const formId = useId()
  const [name, setName] = useState("")
  return (
    <>
      <OverlayHeader title="New customer" />
      <OverlayBody>
        <form
          id={formId}
          onSubmit={(e) => {
            e.preventDefault()
            if (name !== "") ctl.resolve(name)
          }}
        >
          <Input className="h-7" aria-label="Customer name" placeholder="Name" autoFocus value={name} onChange={(e) => setName(e.currentTarget.value)} />
        </form>
      </OverlayBody>
      <OverlayFooter>
        <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
        <Button size="sm" type="submit" form={formId} disabled={name === ""}>
          Create
        </Button>
      </OverlayFooter>
    </>
  )
}

const NewCustomer = defineOverlay<void, string>({ name: "new-customer", presentation: { size: "sm" }, render: () => <NewCustomerBody /> })

interface Invoice {
  readonly customer: string
  readonly amount: string
}

/** O10: the parent form. "+ New customer…" opens a child modal and selects what it returns. */
function InvoiceForm({ formId, customers, onCreated }: { formId: string; customers: readonly string[]; onCreated: (name: string) => void }) {
  const ctl = useOverlay<Invoice>()
  const overlays = useOverlays()
  const [customer, setCustomer] = useState(customers[0] ?? "")
  const [amount, setAmount] = useState("120")
  const addCustomer = async () => {
    const created = await overlays.open(NewCustomer, undefined).value()
    if (created === undefined) return
    onCreated(created)
    setCustomer(created)
  }
  return (
    <form
      id={formId}
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        ctl.resolve({ customer, amount })
      }}
    >
      <div className="flex flex-col gap-1">
        <span id={\`\${formId}-customer\`} className="text-xs text-muted-foreground">
          Customer
        </span>
        <div className="flex gap-1">
          <Select items={customers.map((c) => ({ value: c, label: c }))} value={customer} onValueChange={(next: string | null) => next !== null && setCustomer(next)}>
            <SelectTrigger size="sm" aria-labelledby={\`\${formId}-customer\`} className="flex-1 text-[13px]" data-testid="customer-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {customers.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline" type="button" onClick={() => void addCustomer()} data-testid="new-customer">
            + New customer…
          </Button>
        </div>
      </div>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Amount</span>
        <Input className="h-7 tabular-nums" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.currentTarget.value)} />
      </label>
    </form>
  )
}

export function NewInvoiceButton() {
  const formId = useId()
  const [result, setResult] = useState("—")
  const [customers, setCustomers] = useState<readonly string[]>(["Ada Lovelace", "Grace Hopper"])
  return (
    <EnsureOverlayUi>
      <Row id="related" result={result}>
        <Modal<Invoice>
          trigger={<Button size="sm">New invoice</Button>}
          title="New invoice"
          size="sm"
          footer={
            <>
              <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
              <Button size="sm" type="submit" form={formId}>
                Save
              </Button>
            </>
          }
          onResult={(r) => setResult(r.status === "resolved" ? \`invoice for \${r.value.customer}, \${r.value.amount}\` : \`dismissed (\${r.reason})\`)}
        >
          <InvoiceForm formId={formId} customers={customers} onCreated={(name) => setCustomers((all) => [...all, name])} />
        </Modal>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>p(()=>import(`./forms-related-CmmXWyNj.js`),[]));function $(){return(0,S.jsx)(b,{n:1,title:`Form in a Modal`,blurb:`Type something, then try Escape, the backdrop, ×, and Cancel: each asks once. Keep editing keeps the values.`,code:j,children:(0,S.jsx)(A,{})})}function Re(){return(0,S.jsx)(b,{n:2,title:`Outside press only when pristine`,blurb:`dismiss={{ outside: "when-pristine" }}: a stray click on the backdrop closes a pristine form and is ignored on a dirty one (no confirm); Escape still asks.`,code:B,children:(0,S.jsx)(z,{})})}function ze(){return(0,S.jsx)(b,{n:3,title:`Form in a Sheet (swipe path)`,blurb:`Swipe the sheet right (or drag with the mouse): a dirty form asks before it goes.`,code:q,children:(0,S.jsx)(le,{})})}function Be(){return(0,S.jsx)(b,{n:4,title:`Parent closing a dirty child`,blurb:`Open Settings, then Add customer, type a name, then “Close settings too”: the sheet's close reaches the child first (reason parent), its guard asks once, and Keep editing keeps both open.`,code:J,children:(0,S.jsx)(ye,{})})}function Ve(){return(0,S.jsx)(b,{n:5,title:`Submit fails, the modal stays (O7)`,blurb:`The first save fails: the error shows inline, the values stay, and Retry saves and closes. Open it again: the fields start empty (the body mounts per open).`,code:Y,children:(0,S.jsx)(Oe,{})})}function He(){return(0,S.jsx)(b,{n:6,title:`Multi-step modal (O9)`,blurb:`useOverlayNav() keeps a view stack inside one modal. With dismiss={{ escape: "back-first" }}, Escape goes back one step; at the first step it closes the modal.`,code:Z,children:(0,S.jsx)(Me,{})})}function Ue(){return(0,S.jsx)(b,{n:7,title:`Create a related record, then select it (O10)`,blurb:`In the invoice, “+ New customer…” opens a child modal with useOverlays().open(def).value(). The name it returns is added to the select and selected; Cancel leaves the field as it was.`,code:Q,children:(0,S.jsx)(Le,{})})}function We(){return(0,S.jsxs)(re,{children:[(0,S.jsxs)(t,{title:`Forms and the dirty guard`,children:[(0,S.jsx)(`code`,{children:`useCloseGuard(dirtyGuard(() => dirty))`}),` in the body; every close path funnels into one guarded request.`]}),(0,S.jsx)($,{}),(0,S.jsx)(Re,{}),(0,S.jsx)(ze,{}),(0,S.jsx)(Be,{}),(0,S.jsx)(Ve,{}),(0,S.jsx)(He,{}),(0,S.jsx)(Ue,{})]})}export{We as component};