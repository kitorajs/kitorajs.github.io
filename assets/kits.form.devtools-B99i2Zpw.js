import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a,ni as o}from"./index-q72zUtm9.js";import{A as s,Y as c,c as l,f as u}from"./field-config-DXiPz8Cg.js";import{a as d,n as f,t as p}from"./fields-CoJCsIMd.js";import{t as m}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var h=e(n(),1),g=i(),_=null;function v(e){return _===null?null:(0,g.jsx)(h.Suspense,{fallback:null,children:(0,g.jsx)(_,{...e})})}var y=_!==null,b=600;function x(e){return new Promise(t=>setTimeout(t,e))}var S=8;async function C(e){return await x(b),{id:`rcpt_${crypto.randomUUID().slice(0,S)}`,savedAt:new Date().toISOString()}}var{v:w}=c();function T(){let e=s({defaultValues:{name:``,email:``,age:17,company:!1}});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,g.jsxs)(l,{form:e,onSubmit:C,layout:`none`,className:`grid max-w-md gap-3`,children:[(0,g.jsx)(d,{name:`name`,label:`Name`,required:!0}),(0,g.jsx)(d,{name:`email`,label:`Email`,type:`email`,rules:[w.email()]}),(0,g.jsx)(f,{name:`age`,label:`Age`,rules:[w.min(18,`Must be 18 or older`)]}),(0,g.jsx)(p,{name:`company`,label:`Signing up for a company`}),(0,g.jsx)(u,{path:`company`,is:!0,children:(0,g.jsx)(d,{name:`companyName`,label:`Company name`,required:!0})}),(0,g.jsx)(D,{label:`Sign up`})]}),y?(0,g.jsx)(v,{form:e}):(0,g.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`This is a production build: the inspector is compiled out.`})]})}var E=a(o({size:`sm`}),`w-fit`);function D({label:e=`Submit`,pendingLabel:t=`Saving…`,success:n,children:r}){return(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,g.jsx)(l.Submit,{className:E,pendingLabel:t,children:e}),r,(0,g.jsx)(l.Status,{className:`text-[13px]`,pending:(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,g.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>n?n(e):(0,g.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Saved`,e?` · ${e.id}`:``]}),error:e=>(0,g.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})}var O=`import type { ReactNode } from "react"
import { kit } from "@kitora/form/core"
import { Form, useForm, When } from "@kitora/form/react"
import { CheckboxField, NumberField, TextField } from "@kitora/form/fields"
import { FORM_DEVTOOLS_ENABLED, FormDevtools } from "@kitora/form/devtools"
import { buttonVariants } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Mock latency of a demo submit (ms) — long enough to see the pending state. */
const MOCK_SUBMIT_MS = 600

/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** What {@link mockSave} answers: a receipt id and the time it was "stored". */
interface SaveReceipt {
  id: string
  savedAt: string
}

/** Length of the random receipt id suffix. */
const RECEIPT_ID_LENGTH = 8

/**
 * A demo submit handler: waits like a server, then answers a receipt that
 * \`Form.Status success\` renders. Accepts any payload because every demo posts
 * its own shape; nothing is stored.
 */
async function mockSave(_payload: unknown): Promise<SaveReceipt> {
  await delay(MOCK_SUBMIT_MS)
  return { id: \`rcpt_\${crypto.randomUUID().slice(0, RECEIPT_ID_LENGTH)}\`, savedAt: new Date().toISOString() }
}

// ---- the page
interface Signup {
  name: string
  email: string
  age: number
  company: boolean
  companyName?: string
}

const { v } = kit<Signup>()

export function DevtoolsExample() {
  const form = useForm<Signup>({ defaultValues: { name: "", email: "", age: 17, company: false } })
  return (
    <div className="flex flex-col gap-4">
      <Form form={form} onSubmit={mockSave} layout="none" className="grid max-w-md gap-3">
        <TextField name="name" label="Name" required />
        <TextField name="email" label="Email" type="email" rules={[v.email()]} />
        <NumberField name="age" label="Age" rules={[v.min(18, "Must be 18 or older")]} />
        <CheckboxField name="company" label="Signing up for a company" />
        <When path="company" is={true}>
          <TextField name="companyName" label="Company name" required />
        </When>
        <SubmitRow label="Sign up" />
      </Form>
      {FORM_DEVTOOLS_ENABLED ? <FormDevtools form={form} /> : <p className="text-[13px] text-muted-foreground">This is a production build: the inspector is compiled out.</p>}
    </div>
  )
}

// ---- page chrome: the panels beside the form
/** The primary-button look for \`Form.Submit\` (\`w-fit\`: form stacks are flex columns). */
const DEMO_BUTTON = cn(buttonVariants({ size: "sm" }), "w-fit")

/** The submit row: \`Form.Submit\` + \`Form.Status\` (pending, invalid, success with the receipt, error). Sits inside \`<Form>\`. */
function SubmitRow({ label = "Submit", pendingLabel = "Saving…", success, children }: { label?: ReactNode; pendingLabel?: ReactNode; success?: (receipt: SaveReceipt | undefined) => ReactNode; children?: ReactNode }) {
  const shown = (r: SaveReceipt | undefined): ReactNode => (success ? success(r) : <span className="text-emerald-700 dark:text-emerald-400">Saved{r ? \` · \${r.id}\` : ""}</span>)
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <Form.Submit className={DEMO_BUTTON} pendingLabel={pendingLabel}>
        {label}
      </Form.Submit>
      {children}
      <Form.Status<SaveReceipt | undefined>
        className="text-[13px]"
        pending={<span className="text-muted-foreground">Submitting…</span>}
        invalid={<span className="text-destructive">Fix the highlighted fields.</span>}
        success={shown}
        error={(e) => <span className="text-destructive">{e.message}</span>}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./devtools-00-GHLS_.js`),[]));function k(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(t,{title:`Devtools inspector`,children:[`One component over any form: every field record, the event timeline with each change's origin, every issue traced to the rule that raised it, how often each field re-rendered and why, and the model as JSON. It reads the store through `,(0,g.jsx)(`code`,{children:`inspect()`}),` and events only, and is compiled out of production builds.`]}),(0,g.jsx)(m,{n:1,title:`Inspect a live form`,blurb:`Type, tick the company box, submit empty: watch State, Events (origins), Validation (rule names), Renders (counts and the member that changed) and Model.`,code:O,children:(0,g.jsx)(T,{})})]})}export{k as component};