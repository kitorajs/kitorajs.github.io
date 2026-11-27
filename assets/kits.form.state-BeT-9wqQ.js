import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,ii as n,zc as r}from"./index-BZuUy872.js";import{t as i}from"./badge-zOMNRv4l.js";import{A as a,J as o,M as s,P as c,Y as l,_ as u,c as d,j as f,o as p}from"./field-config-53O_jYuu.js";import{a as m,n as h}from"./fields-DyVcPE0c.js";import{t as g}from"./display-DkvThEqp.js";import{t as _}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var v=r(),y={firstName:``,lastName:``,email:``,bio:``};function b(){let{filled:e,total:t}=u(``),n=t?Math.round(e/t*100):0;return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[e,` of `,t,` complete`]}),(0,v.jsxs)(i,{variant:n===100?`default`:`secondary`,children:[n,`%`]})]}),(0,v.jsx)(`div`,{className:`h-2 w-full overflow-hidden rounded-full bg-muted`,role:`progressbar`,"aria-label":`Form completion`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,children:(0,v.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all duration-300`,style:{width:`${n}%`}})})]})}function x(){return(0,v.jsxs)(d,{form:a({defaultValues:y}),children:[(0,v.jsx)(b,{}),(0,v.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:[(0,v.jsx)(m,{name:`firstName`,label:`First name`}),(0,v.jsx)(m,{name:`lastName`,label:`Last name`})]}),(0,v.jsx)(m,{name:`email`,label:`Email`,type:`email`}),(0,v.jsx)(m,{name:`bio`,label:`Short bio`})]})}var S=`import { Badge } from "@kitora/ui/badge"
import { TextField } from "@kitora/form/fields"
import { Form, useForm, useScopeStatus } from "@kitora/form/react"

type Profile = { firstName: string; lastName: string; email: string; bio: string }
const defaultValues: Profile = { firstName: "", lastName: "", email: "", bio: "" }

function CompletionBar() {
  // the store's own rollup over every ACTIVE field ("" = the whole form);
  // re-renders only when the rollup changes, not on every keystroke
  const { filled, total } = useScopeStatus("")
  const pct = total ? Math.round((filled / total) * 100) : 0
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {filled} of {total} complete
        </span>
        <Badge variant={pct === 100 ? "default" : "secondary"}>{pct}%</Badge>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Form completion" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: \`\${pct}%\` }} />
      </div>
    </div>
  )
}

export function ProfileForm() {
  const form = useForm<Profile>({ defaultValues })
  return (
    <Form form={form}>
      <CompletionBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField name="firstName" label="First name" />
        <TextField name="lastName" label="Last name" />
      </div>
      <TextField name="email" label="Email" type="email" />
      <TextField name="bio" label="Short bio" />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./completion-LFCXtITV.js`),[]));var C={user:``,pass:``},{v:ee}=l(),w=1200,T=6,E=n({size:`sm`,className:`w-fit`}),D={async login(e){await new Promise(e=>setTimeout(e,w))}};function O(){return(0,v.jsxs)(d,{form:a({defaultValues:C,validateOn:`change`}),onSubmit:e=>D.login(e),children:[(0,v.jsx)(m,{name:`user`,label:`Username`,required:!0,requiredMessage:`Username is required`}),(0,v.jsx)(m,{name:`pass`,label:`Password`,type:`password`,required:!0,rules:[ee.minLength(T,`Password must be at least ${T} characters`)]}),(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,v.jsx)(d.Submit,{className:E,children:`Always enabled`}),(0,v.jsx)(d.Submit,{className:E,children:`Disable while submitting`}),(0,v.jsx)(d.Submit,{disableInvalid:!0,className:E,children:`Disable while invalid`})]}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`The third button stays disabled until both fields validate; all three disable for ~1.2s during the async submit.`})]})}var k=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Login = { user: string; pass: string }
const defaultValues: Login = { user: "", pass: "" }
const { v } = kit<Login>()

/** Long enough to see every button disable while the async submit runs. */
const SUBMIT_MS = 1200
const MIN_PASS = 6
const submitClass = buttonVariants({ size: "sm", className: "w-fit" })

// stub: replace with your API (POST /login)
const api = {
  async login(_values: Login): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_MS))
  },
}

export function LoginForm() {
  const form = useForm<Login>({ defaultValues, validateOn: "change" })
  return (
    <Form form={form} onSubmit={(values) => api.login(values)}>
      <TextField name="user" label="Username" required requiredMessage="Username is required" />
      <TextField name="pass" label="Password" type="password" required rules={[v.minLength(MIN_PASS, \`Password must be at least \${MIN_PASS} characters\`)]} />
      <div className="flex flex-wrap items-center gap-3">
        <Form.Submit className={submitClass}>Always enabled</Form.Submit>
        {/* every Form.Submit disables while the async submit runs */}
        <Form.Submit className={submitClass}>Disable while submitting</Form.Submit>
        {/* ...and this one also stays disabled until both fields validate */}
        <Form.Submit disableInvalid className={submitClass}>
          Disable while invalid
        </Form.Submit>
      </div>
      <p className="text-xs text-muted-foreground">
        The third button stays disabled until both fields validate; all three disable for ~1.2s during the async submit.
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>t(()=>import(`./gating-BQ4CEm8q.js`),[]));var A={note:``},j=900,M={idle:{variant:`outline`,label:`Idle`},validating:{variant:`secondary`,label:`Validating…`},submitting:{variant:`secondary`,label:`Submitting…`},success:{variant:`default`,label:`Submitted ✓`},error:{variant:`destructive`,label:`Failed ✕`},conflict:{variant:`destructive`,label:`Conflict`},invalid:{variant:`destructive`,label:`Invalid`}},N={async save(e){await new Promise(e=>setTimeout(e,j))}};function P(){let e=c(e=>e.getStatus());return(0,v.jsx)(i,{variant:M[e].variant,children:M[e].label})}function F(){return(0,v.jsxs)(d,{form:a({defaultValues:A}),onSubmit:e=>N.save(e),children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-2 text-sm`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`Status:`}),(0,v.jsx)(P,{})]}),(0,v.jsx)(m,{name:`note`,label:`Note`,placeholder:`Type anything, then submit`}),(0,v.jsx)(d.Submit,{className:n({size:`sm`,className:`w-fit`}),children:`Submit (900ms)`})]})}var I=`import { buttonVariants } from "@kitora/ui/button"
import { Badge } from "@kitora/ui/badge"
import type { SubmitStatus } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm, useFormState } from "@kitora/form/react"

type Note = { note: string }
const defaultValues: Note = { note: "" }

/** How long the submit takes (ms), so the submitting pill is visible. */
const SUBMIT_MS = 900

type Variant = "outline" | "secondary" | "default" | "destructive"
// a Record over the closed set: a new status is a compile error here
const PILL: Record<SubmitStatus, { variant: Variant; label: string }> = {
  idle: { variant: "outline", label: "Idle" },
  validating: { variant: "secondary", label: "Validating…" },
  submitting: { variant: "secondary", label: "Submitting…" },
  success: { variant: "default", label: "Submitted ✓" },
  error: { variant: "destructive", label: "Failed ✕" },
  conflict: { variant: "destructive", label: "Conflict" },
  invalid: { variant: "destructive", label: "Invalid" },
}

// stub: replace with your API (POST /notes)
const api = {
  async save(_values: Note): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_MS))
  },
}

function StatusPill() {
  const status = useFormState((f) => f.getStatus()) // typed SubmitStatus
  return <Badge variant={PILL[status].variant}>{PILL[status].label}</Badge>
}

export function NoteForm() {
  const form = useForm<Note>({ defaultValues })
  return (
    <Form form={form} onSubmit={(values) => api.save(values)}>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Status:</span>
        <StatusPill />
      </div>
      <TextField name="note" label="Note" placeholder="Type anything, then submit" />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Submit (900ms)</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>t(()=>import(`./status-gfv8JOzo.js`),[]));var L={name:`Ada Lovelace`,role:`Engineer`};function R({form:e}){let t=c(e=>e.isDirty());return(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsx)(i,{variant:t?`default`:`outline`,children:t?`● Unsaved changes`:`No changes`}),(0,v.jsx)(`button`,{type:`button`,className:n({variant:`outline`,size:`sm`}),disabled:!t,onClick:()=>e.reset(),children:`Reset`}),(0,v.jsx)(d.Submit,{className:n({size:`sm`,className:`w-fit`}),disabled:!t,children:`Save`})]})}function z(){let e=a({defaultValues:L});return(0,v.jsxs)(d,{form:e,onSubmit:()=>e.commit(),children:[(0,v.jsx)(m,{name:`name`,label:`Name`}),(0,v.jsx)(m,{name:`role`,label:`Role`}),(0,v.jsx)(R,{form:e}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Save buttons disable when pristine. Editing flips dirty; Reset reverts to the last committed baseline; Save commits a new baseline.`})]})}var B=`import { buttonVariants } from "@kitora/ui/button"
import { Badge } from "@kitora/ui/badge"
import type { FormStore } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm, useFormState } from "@kitora/form/react"

type Member = { name: string; role: string }
const defaultValues: Member = { name: "Ada Lovelace", role: "Engineer" }

function DirtyControls({ form }: { form: FormStore<Member> }) {
  const dirty = useFormState((f) => f.isDirty())
  return (
    <div className="flex items-center gap-3">
      <Badge variant={dirty ? "default" : "outline"}>{dirty ? "● Unsaved changes" : "No changes"}</Badge>
      {/* reset() reverts to the last committed baseline */}
      <button type="button" className={buttonVariants({ variant: "outline", size: "sm" })} disabled={!dirty} onClick={() => form.reset()}>
        Reset
      </button>
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} disabled={!dirty}>
        Save
      </Form.Submit>
    </div>
  )
}

export function MemberForm() {
  const form = useForm<Member>({ defaultValues })
  return (
    // onSubmit commits a new baseline → the form becomes pristine again
    <Form form={form} onSubmit={() => form.commit()}>
      <TextField name="name" label="Name" />
      <TextField name="role" label="Role" />
      <DirtyControls form={form} />
      <p className="text-xs text-muted-foreground">
        Save buttons disable when pristine. Editing flips dirty; Reset reverts to the last committed baseline; Save commits a new baseline.
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>t(()=>import(`./dirty-ufO_1F62.js`),[]));var V={qty:1,price:29.99,shipping:5},H=e=>typeof e==`number`?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(e):`—`,U=o()(({e})=>({fields:[],derived:{total:{expr:e.add(e.mul(e.ref(`qty`),e.ref(`price`)),e.ref(`shipping`)),send:!1}}}));function W(){return(0,v.jsxs)(d,{form:a({defaultValues:V,model:U}),children:[(0,v.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:[(0,v.jsx)(h,{name:`qty`,label:`Quantity`}),(0,v.jsx)(h,{name:`price`,label:`Unit price`}),(0,v.jsx)(h,{name:`shipping`,label:`Shipping`})]}),(0,v.jsx)(g,{name:`total`,label:`Order total`,render:H,live:!0,className:`[&_output]:text-base`}),(0,v.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`The total is a model-derived value computed in the core and shown with `,(0,v.jsx)(`code`,{children:`Field.Display`}),`: the number inputs never re-render each other (per-field isolation).`]})]})}var G=`import { defineForm } from "@kitora/form/core"
import { DisplayField, NumberField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Cart = { qty: number; price: number; shipping: number; total?: number }
const defaultValues: Cart = { qty: 1, price: 29.99, shipping: 5 }
const usd = (v: unknown) => (typeof v === "number" ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(v) : "—")

// total = qty * price + shipping, computed in the core; shown, not sent
const model = defineForm<Cart>()(({ e }) => ({
  fields: [],
  derived: { total: { expr: e.add(e.mul(e.ref("qty"), e.ref("price")), e.ref("shipping")), send: false } },
}))

export function CartForm() {
  const form = useForm<Cart>({ defaultValues, model })
  return (
    <Form form={form}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberField name="qty" label="Quantity" />
        <NumberField name="price" label="Unit price" />
        <NumberField name="shipping" label="Shipping" />
      </div>
      {/* the number inputs never re-render each other; only this display follows the total */}
      <DisplayField name="total" label="Order total" render={usd} live className="[&_output]:text-base" />
      <p className="text-xs text-muted-foreground">
        The total is a model-derived value computed in the core and shown with <code>Field.Display</code>: the number inputs never re-render each other (per-field isolation).
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>t(()=>import(`./cart-C2LZNJoT.js`),[]));var K={name:``,email:``},{v:q}=l();function J(){let{count:e}=f();return(0,v.jsx)(i,{variant:e>0?`destructive`:`outline`,children:e>0?`${e} error${e===1?``:`s`}`:`No errors`})}function Y(){return(0,v.jsxs)(d,{form:a({defaultValues:K,validateOn:`submit`,revalidateOn:`change`}),children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-2 text-sm`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`Validity:`}),(0,v.jsx)(J,{})]}),(0,v.jsx)(p,{className:`rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive [&_button]:underline [&_button]:underline-offset-2 [&_p]:mb-1 [&_p]:font-medium [&_ul]:list-disc [&_ul]:pl-5`}),(0,v.jsx)(m,{name:`name`,label:`Name`,required:!0,requiredMessage:`Name is required`}),(0,v.jsx)(m,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[q.email(`Enter a valid email`)]}),(0,v.jsx)(h,{name:`guests`,label:`Guests`,required:!0,rules:[q.min(1,`At least one guest`)]}),(0,v.jsx)(d.Submit,{className:n({size:`sm`,className:`w-fit`}),children:`Book`}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Submit while empty: the summary lists every issue (click one to focus its field) and the badge counts live as you fix them.`})]})}var X=`import { buttonVariants } from "@kitora/ui/button"
import { Badge } from "@kitora/ui/badge"
import { kit } from "@kitora/form/core"
import { NumberField, TextField } from "@kitora/form/fields"
import { ErrorSummary, Form, useForm, useFormErrors } from "@kitora/form/react"

type Booking = { name: string; email: string; guests?: number }
const defaultValues: Booking = { name: "", email: "" }
const { v } = kit<Booking>()

function ErrorCount() {
  const { count } = useFormErrors()
  return <Badge variant={count > 0 ? "destructive" : "outline"}>{count > 0 ? \`\${count} error\${count === 1 ? "" : "s"}\` : "No errors"}</Badge>
}

export function BookingForm() {
  const form = useForm<Booking>({ defaultValues, validateOn: "submit", revalidateOn: "change" })
  return (
    <Form form={form}>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Validity:</span>
        <ErrorCount />
      </div>
      {/* role="alert" list of every issue; click an item to focus its field */}
      <ErrorSummary className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive [&_button]:underline [&_button]:underline-offset-2 [&_p]:mb-1 [&_p]:font-medium [&_ul]:list-disc [&_ul]:pl-5" />
      <TextField name="name" label="Name" required requiredMessage="Name is required" />
      <TextField name="email" label="Email" type="email" required rules={[v.email("Enter a valid email")]} />
      <NumberField name="guests" label="Guests" required rules={[v.min(1, "At least one guest")]} />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Book</Form.Submit>
      <p className="text-xs text-muted-foreground">
        Submit while empty: the summary lists every issue (click one to focus its field) and the badge counts live as you fix them.
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>t(()=>import(`./errors-CZO0nYaB.js`),[]));var Z={title:``,notes:``};function Q(){let{undo:e,redo:t,canUndo:r,canRedo:i}=s(),a=n({variant:`outline`,size:`sm`});return(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsx)(`button`,{type:`button`,className:a,disabled:!r,onClick:e,children:`↶ Undo`}),(0,v.jsx)(`button`,{type:`button`,className:a,disabled:!i,onClick:t,children:`↷ Redo`}),(0,v.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`Same-field typing bursts collapse to one step.`})]})}function te(){return(0,v.jsxs)(d,{form:a({defaultValues:Z}),children:[(0,v.jsx)(Q,{}),(0,v.jsx)(m,{name:`title`,label:`Title`,placeholder:`Edit me, then undo`}),(0,v.jsx)(m,{name:`notes`,label:`Notes`})]})}var $=`import { buttonVariants } from "@kitora/ui/button"
import { TextField } from "@kitora/form/fields"
import { Form, useForm, useFormHistory } from "@kitora/form/react"

type Draft = { title: string; notes: string }
const defaultValues: Draft = { title: "", notes: "" }

// History rides on the store's structural-sharing snapshots — same-field typing
// bursts coalesce; each array mutation is its own step; reset clears it.
function HistoryControls() {
  const { undo, redo, canUndo, canRedo } = useFormHistory()
  const button = buttonVariants({ variant: "outline", size: "sm" })
  return (
    <div className="flex items-center gap-3">
      <button type="button" className={button} disabled={!canUndo} onClick={undo}>↶ Undo</button>
      <button type="button" className={button} disabled={!canRedo} onClick={redo}>↷ Redo</button>
      <span className="text-[11px] text-muted-foreground">Same-field typing bursts collapse to one step.</span>
    </div>
  )
}

export function DraftForm() {
  const form = useForm<Draft>({ defaultValues })
  return (
    <Form form={form}>
      <HistoryControls />
      <TextField name="title" label="Title" placeholder="Edit me, then undo" />
      <TextField name="notes" label="Notes" />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>t(()=>import(`./history-DKAol1fL.js`),[]));function ne(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(e,{title:`Form state & aggregates`,children:[`Read form-wide state without subscribing to every keystroke. `,(0,v.jsx)(`code`,{children:`useFormState(selector, isEqual)`}),` memoizes by value, `,(0,v.jsx)(`code`,{children:`useScopeStatus`}),` rolls up completion, derived values live in the model; `,(0,v.jsx)(`code`,{children:`useFormErrors()`}),` exposes the live issue list; `,(0,v.jsx)(`code`,{children:`Form.Submit`}),` gates itself on status and validity. Seven recipes:`]}),(0,v.jsx)(_,{n:1,title:`Completion progress`,blurb:`A live percentage bar driven by useScopeStatus — re-renders only when the rollup changes.`,code:S,children:(0,v.jsx)(x,{})}),(0,v.jsx)(_,{n:2,title:`Submit gating, three ways`,blurb:`Always-enabled vs disable-while-submitting vs disable-while-invalid — all from Form.Submit.`,code:k,children:(0,v.jsx)(O,{})}),(0,v.jsx)(_,{n:3,title:`Submit status lifecycle`,blurb:`idle → submitting → success, surfaced as a live pill via useFormState(getStatus).`,code:I,children:(0,v.jsx)(F,{})}),(0,v.jsx)(_,{n:4,title:`Dirty tracking + reset`,blurb:`isDirty gates Save/Reset; Reset reverts to baseline, Save commits a new one.`,code:B,children:(0,v.jsx)(z,{})}),(0,v.jsx)(_,{n:5,title:`Live derived summary`,blurb:`An order total derived in the model and shown with Field.Display — without re-rendering the inputs.`,code:G,children:(0,v.jsx)(W,{})}),(0,v.jsx)(_,{n:6,title:`Error summary + live count`,blurb:`useFormErrors powers an aggregate count badge and the click-to-focus ErrorSummary.`,code:X,children:(0,v.jsx)(Y,{})}),(0,v.jsx)(_,{n:7,title:`Undo / redo`,blurb:`History over the store's snapshots — undo/redo user edits, with same-field bursts coalesced.`,code:$,children:(0,v.jsx)(te,{})})]})}export{ne as component};