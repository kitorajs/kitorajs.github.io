import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n,ni as r}from"./index-B9ukmIN1.js";import{A as i,W as a,Y as o,c as s,et as c,o as l}from"./field-config-17kME8Vl.js";import{a as u,n as d}from"./fields-CwxxBZgA.js";import{r as f}from"./fields-extra-C15csBPj.js";import{t as p}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";import{n as m}from"./json-schema-knG_tmNQ.js";var h=n(),g={email:``,password:``,confirm:``},{v:_}=o(),v=8,y=`rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive [&_button]:underline [&_button]:underline-offset-2 [&_p]:mb-1 [&_p]:font-medium [&_ul]:list-disc [&_ul]:pl-5`;function b(){return(0,h.jsxs)(s,{form:i({defaultValues:g,validateOn:`blur`,revalidateOn:`change`}),children:[(0,h.jsx)(l,{className:y}),(0,h.jsx)(u,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[_.email(`Enter a valid email`)]}),(0,h.jsx)(f,{name:`password`,label:`Password`,required:!0,description:`Min ${v} characters`,rules:[_.minLength(v,`At least ${v} characters`)]}),(0,h.jsx)(f,{name:`confirm`,label:`Confirm password`,required:!0,rules:[_.matches(`password`,`Passwords must match`)]}),(0,h.jsx)(s.Submit,{disableInvalid:!0,className:r({size:`sm`,className:`w-fit`}),children:`Create account`})]})}var x=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { PasswordField, TextField } from "@kitora/form/fields"
import { ErrorSummary, Form, useForm } from "@kitora/form/react"

type Signup = { email: string; password: string; confirm: string }
const defaultValues: Signup = { email: "", password: "", confirm: "" }
const { v } = kit<Signup>()

/** Minimum password length. */
const MIN_PASSWORD = 8
const summaryCls =
  "rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive [&_button]:underline [&_button]:underline-offset-2 [&_p]:mb-1 [&_p]:font-medium [&_ul]:list-disc [&_ul]:pl-5"

export function SignupForm() {
  const form = useForm<Signup>({ defaultValues, validateOn: "blur", revalidateOn: "change" })
  return (
    <Form form={form}>
      <ErrorSummary className={summaryCls} />
      <TextField name="email" label="Email" type="email" required rules={[v.email("Enter a valid email")]} />
      <PasswordField name="password" label="Password" required description={\`Min \${MIN_PASSWORD} characters\`} rules={[v.minLength(MIN_PASSWORD, \`At least \${MIN_PASSWORD} characters\`)]} />
      {/* 'password' is the sibling field above: confirm must equal it */}
      <PasswordField name="confirm" label="Confirm password" required rules={[v.matches("password", "Passwords must match")]} />
      <Form.Submit disableInvalid className={buttonVariants({ size: "sm", className: "w-fit" })}>Create account</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./signup-vucKnDQd.js`),[]));var S={email:``},{v:C}=o(),w=[`blur`,`change`,`submit`],T={blur:`Surfaces when you leave the field — the default; no nagging while typing.`,change:`Validates on every keystroke — eager, good for live-availability hints.`,submit:`Holds all errors until submit — least interruptive.`};function E({mode:e}){return(0,h.jsx)(s,{form:i({defaultValues:S,validateOn:e}),children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsxs)(`div`,{className:`text-xs font-medium`,children:[`validateOn=`,(0,h.jsx)(`code`,{children:e})]}),(0,h.jsx)(u,{name:`email`,label:`Email`,type:`email`,rules:[C.email(`Needs a valid email`)]}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Check`}),(0,h.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:T[e]})]})})}function D(){return(0,h.jsx)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-3`,children:w.map(e=>(0,h.jsx)(E,{mode:e},e))})}var O=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Contact = { email: string }
const defaultValues: Contact = { email: "" }
const { v } = kit<Contact>()

// validateOn = when an error FIRST surfaces; revalidateOn = after it has.
//   "blur"   surfaces on leaving the field (default)
//   "change" eager: every keystroke
//   "submit" holds until submit
const MODES = ["blur", "change", "submit"] as const
type Timing = (typeof MODES)[number]
const MODE_BLURB: Record<Timing, string> = {
  blur: "Surfaces when you leave the field — the default; no nagging while typing.",
  change: "Validates on every keystroke — eager, good for live-availability hints.",
  submit: "Holds all errors until submit — least interruptive.",
}

function EmailForm({ mode }: { mode: Timing }) {
  const form = useForm<Contact>({ defaultValues, validateOn: mode })
  return (
    <Form form={form}>
      <div className="flex flex-col gap-2">
        <div className="text-xs font-medium">
          validateOn=<code>{mode}</code>
        </div>
        <TextField name="email" label="Email" type="email" rules={[v.email("Needs a valid email")]} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Check</Form.Submit>
        <p className="text-[11px] text-muted-foreground">{MODE_BLURB[mode]}</p>
      </div>
    </Form>
  )
}

export function TimingForms() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {MODES.map((m) => (
        <EmailForm key={m} mode={m} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>t(()=>import(`./timing-C8NGd-pD.js`),[]));var k={username:``},{v:A}=o(),j={async isTaken(e,{signal:t}){return await new Promise(e=>setTimeout(e,600)),!t.aborted&&[`admin`,`root`,`ada`,`test`].includes(e.toLowerCase())}},M=c().validator(`usernameAvailable`,{fn:async(e,t,{signal:n})=>await j.isTaken(String(e),{signal:n})?`"${String(e)}" is taken`:void 0});function N(){return(0,h.jsxs)(s,{form:i({defaultValues:k,registry:M,validateOn:`change`}),children:[(0,h.jsx)(u,{name:`username`,label:`Username`,description:`Try 'ada' or 'admin' (taken) vs anything else`,rules:[A.minLength(3,`At least 3 characters`),A.op(`usernameAvailable`,void 0,{async:{debounceMs:250}})]}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),disableInvalid:!0,children:`Claim username`}),(0,h.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Each keystroke schedules a debounced async check; a newer run aborts the older one so the last keystroke always wins. The field shows its `,(0,h.jsx)(`code`,{children:`validating`}),` state while in flight.`]})]})}var P=`import { buttonVariants } from "@kitora/ui/button"
import { catalogRegistry, kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Account = { username: string }
const defaultValues: Account = { username: "" }
const { v } = kit<Account>()

// stub: replace with your API (GET /usernames/:name)
const api = {
  async isTaken(name: string, { signal }: { signal: AbortSignal }): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return !signal.aborted && ["admin", "root", "ada", "test"].includes(name.toLowerCase())
  },
}

// a named async validator: the model references it by name, the registry holds the code
const registry = catalogRegistry().validator("usernameAvailable", {
  fn: async (value, _args, { signal }) => {
    const taken = await api.isTaken(String(value), { signal }) // aborted when a newer run starts
    return taken ? \`"\${String(value)}" is taken\` : undefined
  },
})

export function UsernameForm() {
  const form = useForm<Account>({ defaultValues, registry, validateOn: "change" })
  return (
    <Form form={form}>
      <TextField
        name="username"
        label="Username"
        description="Try 'ada' or 'admin' (taken) vs anything else"
        // debounced: keystrokes inside 250ms collapse into one check; the last one wins
        rules={[v.minLength(3, "At least 3 characters"), v.op("usernameAvailable", undefined, { async: { debounceMs: 250 } })]}
      />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} disableInvalid>Claim username</Form.Submit>
      <p className="text-xs text-muted-foreground">
        Each keystroke schedules a debounced async check; a newer run aborts the older one so the last keystroke always wins.
        The field shows its <code>validating</code> state while in flight.
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>t(()=>import(`./asyncv-BGb5-Pv5.js`),[]));var F={website:``},{v:I}=o();function L(){return(0,h.jsxs)(s,{form:i({defaultValues:F,validateOn:`blur`,revalidateOn:`change`}),children:[(0,h.jsx)(u,{name:`website`,label:`Website`,placeholder:`https://example.com`,rules:[I.url(`Must be a full URL (https://…)`)]}),(0,h.jsx)(d,{name:`age`,label:`Age`,required:!0,empty:`undefined`,rules:[I.min(18,`Age must be 18–120`),I.max(120,`Age must be 18–120`)]}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Save`})]})}var R=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { NumberField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Profile = { website: string; age?: number }
const defaultValues: Profile = { website: "" }
const { v } = kit<Profile>()

export function ProfileForm() {
  const form = useForm<Profile>({ defaultValues, validateOn: "blur", revalidateOn: "change" })
  return (
    <Form form={form}>
      <TextField name="website" label="Website" placeholder="https://example.com" rules={[v.url("Must be a full URL (https://…)")]} />
      {/* empty="undefined": a cleared input stores undefined, not 0 */}
      <NumberField name="age" label="Age" required empty="undefined" rules={[v.min(18, "Age must be 18–120"), v.max(120, "Age must be 18–120")]} />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>t(()=>import(`./rules-Cd1Zl6rS.js`),[]));var z={password:``},{v:B}=o();function V(){return(0,h.jsxs)(s,{form:i({defaultValues:z}),children:[(0,h.jsx)(f,{name:`password`,label:`Password`,description:`Type 1–9 chars to see an advisory (amber, not red)`,warn:[B.minLength(10,`Weak password — allowed, but a longer one is safer.`)]}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Submit anyway`})]})}var H=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { PasswordField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Credentials = { password: string }
const defaultValues: Credentials = { password: "" }
const { v } = kit<Credentials>()

export function PasswordForm() {
  const form = useForm<Credentials>({ defaultValues })
  return (
    <Form form={form}>
      {/* V9: a parallel, non-blocking advisory channel. Fields render warnings in
          amber (not red); submit / validate / focus-first-error all ignore them. */}
      <PasswordField name="password" label="Password" description="Type 1–9 chars to see an advisory (amber, not red)" warn={[v.minLength(10, "Weak password — allowed, but a longer one is safer.")]} />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Submit anyway</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>t(()=>import(`./warn-CfNmyviW.js`),[]));var U={name:`Ada`,email:`ada`},W=m({type:`object`,properties:{name:{type:`string`,minLength:2},email:{type:`string`,pattern:`@`}}},{shortCircuit:!0}),G=[{mode:a.all,title:`Trusting silence (schemaReports: "all")`,note:`Clear the name: the vendor stops there, and the email error vanishes although the email is still wrong.`},{mode:a.auto,title:`Default (auto → first for this vendor)`,note:`Clear the name: the email error stays, because a probe run proves it is still wrong. Fix the email and it clears.`}];function K({mode:e,title:t,note:n}){return(0,h.jsx)(s,{form:i({defaultValues:U,schema:W,schemaReports:e,validateOn:`mount`}),children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`div`,{className:`text-xs font-medium`,children:t}),(0,h.jsx)(u,{name:`name`,label:`Name`}),(0,h.jsx)(u,{name:`email`,label:`Email`}),(0,h.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:n})]})})}function q(){return(0,h.jsx)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:G.map(e=>(0,h.jsx)(K,{...e},e.mode))})}var J=`import { SCHEMA_REPORTS, type SchemaReports } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { jsonSchemaStandard } from "@kitora/form/sources"

type Account = { name: string; email: string }

const defaultValues: Account = { name: "Ada", email: "ada" }

// an abort-early vendor: JSON Schema with shortCircuit stops at the first failing keyword
// (Valibot with abortEarly and Yup behave the same way)
const schema = jsonSchemaStandard(
  { type: "object", properties: { name: { type: "string", minLength: 2 }, email: { type: "string", pattern: "@" } } },
  { shortCircuit: true },
)

// "first": a field the result does not mention is unknown, not valid, so its error is kept
// until a probe run proves it fixed. "auto" (the default) picks this for vendors it does not
// know; Zod, ArkType and Valibot in their default mode report every issue and are trusted.
// "all" trusts the silence, shown beside it so the difference is visible.
// schemaLibraryOptions is handed to vendors that read it (e.g. { abortEarly: false }).
const COLUMNS: ReadonlyArray<{ mode: SchemaReports; title: string; note: string }> = [
  { mode: SCHEMA_REPORTS.all, title: 'Trusting silence (schemaReports: "all")', note: "Clear the name: the vendor stops there, and the email error vanishes although the email is still wrong." },
  { mode: SCHEMA_REPORTS.auto, title: "Default (auto → first for this vendor)", note: "Clear the name: the email error stays, because a probe run proves it is still wrong. Fix the email and it clears." },
]

function AccountColumn({ mode, title, note }: { mode: SchemaReports; title: string; note: string }) {
  const form = useForm<Account>({ defaultValues, schema, schemaReports: mode, validateOn: "mount" })
  return (
    <Form form={form}>
      <div className="flex flex-col gap-2">
        <div className="text-xs font-medium">{title}</div>
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email" />
        <p className="text-[11px] text-muted-foreground">{note}</p>
      </div>
    </Form>
  )
}

export function AccountForm() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {COLUMNS.map((c) => (
        <AccountColumn key={c.mode} {...c} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>t(()=>import(`./abort-early-C-hv_nRv.js`),[]));var Y={trackingId:``};function X(){return(0,h.jsx)(s,{form:i({defaultValues:Y}),children:(0,h.jsx)(u,{name:`trackingId`,label:`Tracking ID`,placeholder:`G-ABCD12`,pattern:`[A-Z]-[A-Z0-9]{6,}`,suffix:({valid:e})=>e?(0,h.jsx)(`span`,{className:`text-primary`,"aria-label":`Valid format`,children:`✓`}):null,description:`The check appears once the format passes`})})}var Z=`import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Tracking = { trackingId: string }

const defaultValues: Tracking = { trackingId: "" }

export function TrackingForm() {
  const form = useForm<Tracking>({ defaultValues })
  return (
    <Form form={form}>
      {/* a function suffix gets { valid, value }: valid = filled and no current issue */}
      <TextField
        name="trackingId"
        label="Tracking ID"
        placeholder="G-ABCD12"
        pattern="[A-Z]-[A-Z0-9]{6,}"
        suffix={({ valid }) => (valid ? <span className="text-primary" aria-label="Valid format">✓</span> : null)}
        description="The check appears once the format passes"
      />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>t(()=>import(`./valid-suffix-Bb4xp7BZ.js`),[]));function Q(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e,{title:`Validation`,children:[`Rules on the field: built-in validators, a cross-field `,(0,h.jsx)(`code`,{children:`matches`}),`, two-axis timing, a named async validator from the registry, and a non-blocking `,(0,h.jsx)(`code`,{children:`warn`}),` channel. No hand-rolled schema and no effects; a whole-value Standard Schema (Zod/Valibot/JSON Schema) still plugs in through `,(0,h.jsx)(`code`,{children:`schema`}),` when you want one.`]}),(0,h.jsx)(p,{n:1,title:`Required + cross-field`,blurb:`Field rules plus a confirm-password rule; ErrorSummary aggregates them and Form.Submit gates on validity.`,code:x,children:(0,h.jsx)(b,{})}),(0,h.jsx)(p,{n:2,title:`Validation timing modes`,blurb:`The same email rule under validateOn blur vs change vs submit — feel the difference.`,code:O,children:(0,h.jsx)(D,{})}),(0,h.jsx)(p,{n:3,title:`Async availability check`,blurb:`A named async validator with debounce and abort — stale responses are dropped, last keystroke wins.`,code:P,children:(0,h.jsx)(N,{})}),(0,h.jsx)(p,{n:4,title:`Rule library (pattern + range)`,blurb:`Pattern (URL) and numeric-range rules; errors surface on blur and clear on the next keystroke once fixed.`,code:R,children:(0,h.jsx)(L,{})}),(0,h.jsx)(p,{n:5,title:`Warnings (non-blocking, V9)`,blurb:`A parallel advisory channel — amber, not red. Submit/validate/focus-first-error all ignore warnings.`,code:H,children:(0,h.jsx)(V,{})}),(0,h.jsx)(p,{n:6,title:`Schemas that stop at the first issue`,blurb:`Valibot with abortEarly, Yup and many custom vendors report one failing field per run. Silence about the others is not proof they are valid, so their errors are kept until a probe run shows them fixed.`,code:J,children:(0,h.jsx)(q,{})}),(0,h.jsx)(p,{n:7,title:`Suffix by validity`,blurb:`prefix and suffix also take a function of { valid, value }: a check appears once the id's format passes, without computing it in the page.`,code:Z,children:(0,h.jsx)(X,{})})]})}export{Q as component};