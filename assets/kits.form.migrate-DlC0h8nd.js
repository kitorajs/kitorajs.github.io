import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{h as t,s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Cc as i,Ic as a,ni as o,ti as ee}from"./index-q72zUtm9.js";import{t as te}from"./copy-CxEqs8uZ.js";import{W as s}from"./messages-Bsb0m0Hq.js";import{A as c,At as l,J as u,Y as ne,c as d,d as f,f as re,g as ie,h as p,o as m}from"./field-config-DXiPz8Cg.js";import{a as h,n as g,o as _,r as v,t as y}from"./fields-CoJCsIMd.js";import{t as b}from"./date-BYkGn-ht.js";import{t as ae}from"./tags-BG3pQMS4.js";import{t as x}from"./field-array-Ixek16Jg.js";import{t as oe}from"./display-DRDvnkNX.js";import{t as S}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var C=[{title:`Fields, not inputs.`,body:"React Hook Form registers native inputs and leaves labels, errors and ARIA to you. Here a field is a component bound by `name` that renders its label, control, error, description and accessibility wiring, and posts its value under its path in a native form."},{title:`Rules live in a model.`,body:"`required`, `rules`, `visibleIf`, derived values and array bounds are recorded in one serializable definition, whether you write JSX or `defineForm`. The same definition validates on a server (`validateValues`) and renders with `AutoForm`."},{title:`Per-path subscriptions.`,body:"Each field subscribes to its own path, so typing in one field re-renders only that field. `useFormValue` subscribes to one path instead of re-rendering the whole form like `watch()`."},{title:`Every write has an origin.`,body:"`user`, `external` or `programmatic`. A controlled form (`value` + `onChange`) only reports user edits, which removes the echo loops React Hook Form needs workarounds for."}],w=[{rhf:"`useForm({ defaultValues })`",engine:"`useForm({ defaultValues })`",notes:"Same name. Also `values` / `load` for server data, `value` + `onChange` for a controlled form."},{rhf:"`useForm({ resolver: zodResolver(schema) })`",engine:"`useForm({ schema })`",notes:"Any Standard Schema (Zod, Valibot, ArkType, `jsonSchemaStandard`). Or rules on the fields (`required`, `rules={[v.email()]}`), recorded in the model."},{rhf:"`mode` / `reValidateMode`",engine:"`validateOn` / `revalidateOn`",notes:'`"change" | "blur" | "submit" | "mount"`.'},{rhf:'`register("email", { required, pattern })`',engine:'`<TextField name="email" required pattern=… />`',notes:"The field renders label, error, description and ARIA wiring. Native `maxLength`/`pattern` become model rules too."},{rhf:"`handleSubmit(fn)`",engine:"`<Form form={form} onSubmit={fn}>`",notes:`Validates, serializes (hidden branches dropped, sensitive fields kept), tracks status; abort and timeout options.`},{rhf:"`formState.errors`",engine:"`useField(name).error`, `<ErrorSummary />`, `form.getIssues()`",notes:`Errors are per path; the summary focuses the field on click.`},{rhf:"`formState.isDirty` / `isValid` / `isSubmitting`",engine:"`useFormMeta()` → `{ dirty, valid, submitting, status }`",notes:`Re-renders only when one of them flips.`},{rhf:"`formState.touchedFields` / `dirtyFields`",engine:"`useField(name).touched` / `.dirty`, `form.isDirty(path)`",notes:"Dirty is measured against a movable baseline (`commit`, `rebase`)."},{rhf:"`Controller` / `useController`",engine:"A catalog field by `name`, or `useField(name)` for your own control",notes:"`useField` returns `{ value, setValue, onBlur, onFocus, error, required, disabled, … }`."},{rhf:"`useFieldArray({ name })`",engine:"`<FieldArray name>` + `FieldArray.RowActions` / `.Add` / `.Empty`, or `form.array(path)`",notes:"`append`, `insert`, `remove`, `move`, `swap`, `replace`, `update`, `updateAll`; stable row ids; `min`/`max` with spoken reasons."},{rhf:"``fields.map((f, i) => register(`lines.${i}.qty`))``",engine:'`<NumberField name=".qty" />` inside the row template',notes:"Row-relative names; `..x` reaches the parent scope."},{rhf:'`watch("x")` / `useWatch`',engine:'`useFormValue(form, "x")`',notes:"Subscribes to one path. Display logic often becomes `When` or a `derived` value instead."},{rhf:"`getValues()`",engine:"`form.getValues()`",notes:"Also `form.serialize({ redact })` for the payload."},{rhf:"`setValue(name, value)`",engine:"`form.setValue(name, value)`",notes:"Tagged with an origin (`user`, `external`, `programmatic`); `form.batch(fn)` makes one undo step."},{rhf:"`reset(values)`",engine:"`form.reset(values)` or `form.rebase(values)`",notes:"`reset` loads a record as the clean baseline; `rebase` keeps the user's dirty edits."},{rhf:"`trigger(name)`",engine:"`form.validate(name)`",notes:"Returns `{ valid, issues }`."},{rhf:"`setError(name, { message })`",engine:"`throw new SubmitError({ fields })`, `form.setServerErrors([…])`",notes:`Server messages clear when the field is edited.`},{rhf:"`clearErrors()`",engine:"`form.setServerErrors([])`",notes:`Client errors re-validate themselves.`},{rhf:"`shouldUnregister: true`",engine:"`whenHidden` on the field or form (`clear` by default)",notes:"Hidden fields leave the payload and stop validating; `keep` and `keep-and-send` exist."},{rhf:"`FormProvider` / `useFormContext`",engine:"`<Form form>` provides it; `useFormStore()`",notes:`Fields find their form through context.`},{rhf:'`criteriaMode: "all"`',engine:"One message per field (the first failing rule); `warn` rules add a non-blocking second channel",notes:"Abort-early schema vendors are handled (`schemaReports`)."},{rhf:"`delayError`",engine:'`validateOn: "blur"` + touched gating',notes:`Errors show once the field is engaged.`}],T={basic:{title:`register, resolver and formState.errors`,intro:"Rules move from a resolver onto the fields. They are recorded in a serializable model, so the same checks can run on a server (`validateValues`). Each field renders its own label, error, `aria-invalid` and description wiring; `ErrorSummary` replaces mapping `formState.errors` by hand; `Form.Submit` disables itself while submitting. A whole-value Standard Schema (Zod, Valibot, ArkType) still plugs in through `useForm({ schema })` when you want to keep one.",before:`import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({ name: z.string().min(1, "Required"), email: z.string().email(), age: z.number().min(18, "You must be 18 or older") })
type Signup = z.infer<typeof schema>

export function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Signup>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", age: 18 } })
  return (
    <form onSubmit={handleSubmit((values) => api.signup(values))}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name")} aria-invalid={!!errors.name} />
      {errors.name && <p role="alert">{errors.name.message}</p>}
      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register("email")} />
      {errors.email && <p role="alert">{errors.email.message}</p>}
      <label htmlFor="age">Age</label>
      <input id="age" type="number" {...register("age", { valueAsNumber: true })} />
      {errors.age && <p role="alert">{errors.age.message}</p>}
      <button disabled={isSubmitting}>Sign up</button>
    </form>
  )
}`},controller:{title:`Controller for custom inputs`,intro:"There is no render-prop wrapper. Date pickers, selects, tags, rich text, maps and the rest of the catalog are fields bound by `name`, with value, blur, focus and error wiring inside. For your own control, `useField(name)` returns `{ value, setValue, onBlur, error, … }`: the equivalent of `useController`.",before:`import { Controller, useForm } from "react-hook-form"

export function EventForm() {
  const { control, handleSubmit } = useForm<Event>({ defaultValues: { date: null, room: "", tags: [] } })
  return (
    <form onSubmit={handleSubmit(api.create)}>
      <Controller name="date" control={control} rules={{ required: "Pick a date" }}
        render={({ field, fieldState }) => (
          <>
            <DatePicker selected={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} />
            {fieldState.error && <p role="alert">{fieldState.error.message}</p>}
          </>
        )} />
      <Controller name="room" control={control} rules={{ required: true }}
        render={({ field }) => <Select value={field.value} onValueChange={field.onChange} options={ROOMS} />} />
      <Controller name="tags" control={control} render={({ field }) => <TagInput value={field.value} onChange={field.onChange} />} />
      <button>Create event</button>
    </form>
  )
}`},fieldArray:{title:`useFieldArray and a watched total`,intro:"The array is a row template with row-relative names (`.item`); rows keep stable ids through moves, so errors and focus follow the row. `min`/`max` gate Add/Remove with a spoken reason instead of a silently disabled button. A computed total is a `derived` value in the model, so there is no `useWatch` + `useEffect` + `setValue` loop and the server recomputes it.",before:`import { useFieldArray, useForm, useWatch } from "react-hook-form"

export function InvoiceForm() {
  const { control, register, handleSubmit, setValue } = useForm<Invoice>({ defaultValues: { lines: [{ item: "", qty: 1, price: 0 }], total: 0 } })
  const { fields, append, remove, move } = useFieldArray({ control, name: "lines", rules: { minLength: 1 } })
  const lines = useWatch({ control, name: "lines" })
  useEffect(() => {
    setValue("total", lines.reduce((sum, l) => sum + l.qty * l.price, 0))
  }, [lines, setValue])
  return (
    <form onSubmit={handleSubmit(api.save)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(\`lines.\${index}.item\`, { required: true })} />
          <input type="number" {...register(\`lines.\${index}.qty\`, { valueAsNumber: true })} />
          <input type="number" {...register(\`lines.\${index}.price\`, { valueAsNumber: true })} />
          <button type="button" onClick={() => move(index, index - 1)} disabled={index === 0}>Up</button>
          <button type="button" onClick={() => remove(index)} disabled={fields.length === 1}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ item: "", qty: 1, price: 0 })}>Add line</button>
      <output>{useWatch({ control, name: "total" })}</output>
      <button>Save invoice</button>
    </form>
  )
}`},watch:{title:`watch, setValue and shouldUnregister`,intro:"A conditional block is a `When` recorded in the model: hidden fields stop validating and leave the payload (`whenHidden`), so `shouldUnregister` is not needed. `useFormValue(form, path)` subscribes to one path and re-renders only the component that reads it (`watch` re-renders the whole form). `form.setValue(path, value)` keeps its name; every write is tagged with an origin.",before:`import { useForm } from "react-hook-form"

export function BillingForm() {
  const { register, handleSubmit, watch, setValue } = useForm<Billing>({ defaultValues: { email: "", company: false }, shouldUnregister: true })
  const company = watch("company") // re-renders the whole form on every change of "company"
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input type="email" {...register("email", { required: true })} />
      <input type="checkbox" {...register("company")} />
      {company && (
        <>
          <input {...register("companyName", { required: true })} />
          <input {...register("vat")} />
        </>
      )}
      <button type="button" onClick={() => setValue("company", !company)}>Toggle company</button>
      <button>Continue</button>
    </form>
  )
}`},serverErrors:{title:`setError from the server, and trigger`,intro:"Throw a `SubmitError` with `fields` from the submit handler (or return one from a server action): each message lands on its field, the first errored field gets focus, and editing a field clears its server message. `Form.Status` shows the form-level message. `trigger(name)` is `form.validate(name)`. `submitErrorFromResponse(res)` turns a fetch `Response` (422, 409, 429, 403) into the right `SubmitError`.",before:`import { useForm } from "react-hook-form"

export function AccountForm() {
  const { register, handleSubmit, setError, trigger, formState: { errors } } = useForm<Account>()
  const onSubmit = async (values: Account) => {
    const res = await fetch("/accounts", { method: "POST", body: JSON.stringify(values) })
    if (res.status === 422) {
      const body = await res.json()
      for (const [name, message] of Object.entries(body.fields)) setError(name as keyof Account, { message: String(message) })
      setError("root.server", { message: "Please fix the highlighted fields" })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />
      {errors.username && <p role="alert">{errors.username.message}</p>}
      <input type="email" {...register("email", { required: true })} />
      {errors.root?.server && <p role="alert">{errors.root.server.message}</p>}
      <button>Create account</button>
      <button type="button" onClick={() => trigger("email")}>Check email</button>
    </form>
  )
}`},editor:{title:`Worked example: a form inside a Lexical editor node`,intro:"An accordion of FAQ / step items, each with a nested `image`, embedded in a Lexical node that owns the data and the undo history. In React Hook Form it looped: `useWatch` wrote to the node, the node re-rendered the form with a new `defaultValue`, `reset()` fired `useWatch` again. The shipped fix was three workarounds: a `disableWatch` flag, a `JSON.stringify` echo comparison, and a keydown timer to restore the focus that `reset()` stole. Controlled mode (`useForm({ value, onChange })`) removes all three: host writes apply with origin `external` and never reach `onChange`, only user edits do; an external value patches only the paths that changed, so the field being typed in keeps focus; undo is the host writing an older value. The same pattern runs on `/kits/form/embedded`.",before:`// an accordion form inside a rich-text editor node (shape, simplified)
export function AccForm({ defaultValue, onDataChange }: Props) {
  const { control, register, reset, getValues } = useForm<Accordion>({ defaultValues: defaultValue })
  const { fields, append, remove } = useFieldArray({ control, name: "items" })
  const data = useWatch({ control })
  const disableWatch = useRef(false)

  // form → editor: every change is written to the Lexical node (debounced)
  useEffect(() => {
    if (disableWatch.current) return
    const t = setTimeout(() => onDataChange(data), 300)
    return () => clearTimeout(t)
  }, [data])

  // editor → form: the node re-renders us with a new defaultValue (our own echo, or undo)
  useEffect(() => {
    // hack 1: JSON.stringify echo check — skip our own write coming back
    if (JSON.stringify(defaultValue) === JSON.stringify(data) && JSON.stringify(defaultValue) === JSON.stringify(getValues())) return
    // hack 2: silence the watcher while reset() replays the value
    disableWatch.current = true
    reset(defaultValue) // re-renders every field and steals focus
    disableWatch.current = false
  }, [defaultValue])

  // hack 3: put focus back after reset() (https://github.com/react-hook-form/react-hook-form/issues/3719)
  const onKeyDown = (e: KeyboardEvent) => setTimeout(() => (e.target as HTMLElement).focus(), 0)
  // …fields.map with register(\`items.\${i}.title\`), a type select, image src/alt inputs…
}`}},E=[`Move one form at a time; both libraries can live in one app. Start with forms that have the most hand-written error and ARIA markup, since that code disappears.`,"Keep your Zod (or Valibot, ArkType) schema at first by passing it as `schema`; move rules onto fields later where you want them on the server through the model, or in an `AutoForm`.",'If a schema stops at the first issue (Valibot with `abortEarly`, Yup), set `schemaReports: "first"` so silence about a field is not taken as "valid". See the "Schemas that stop at the first issue" example on `/kits/form/validation`.',"Replace `useEffect` + `setValue` chains with `derived` values and `When` / `Variant` blocks; replace `shouldUnregister` with `whenHidden`.","Replace hand-mapped 422 handling with `submitErrorFromResponse(res)` or `throw new SubmitError({ fields })`.","A codemod for the mechanical part (register → field components, `useFieldArray` → `FieldArray`) is not built."],D=a(),O={name:``,email:``,age:18},{v:k}=ne(),A={async signup(e){console.log(`signed up`,e)}};function j(){let e=c({defaultValues:O});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:e,onSubmit:A.signup,children:[(0,D.jsx)(m,{}),(0,D.jsx)(h,{name:`name`,label:`Name`,required:!0}),(0,D.jsx)(h,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[k.email()]}),(0,D.jsx)(g,{name:`age`,label:`Age`,rules:[k.min(18,`You must be 18 or older`)]}),(0,D.jsx)(d.Submit,{className:o({size:`sm`,className:`w-fit`}),children:`Sign up`})]}),(0,D.jsx)(M,{form:e})]})}function M({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var N=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, kit, type Issue, type SubmitStatus } from "@kitora/form/core"
import { NumberField, TextField } from "@kitora/form/fields"
import { ErrorSummary, Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Signup = { name: string; email: string; age: number }

const defaultValues: Signup = { name: "", email: "", age: 18 }
const { v } = kit<Signup>()

// stub: replace with your API (POST /signups)
const api = {
  async signup(payload: Signup): Promise<void> {
    console.log("signed up", payload)
  },
}

export function SignupForm() {
  // register + resolver + formState.errors become props on each field: the rules live in
  // the form's model (serializable, also run on the server) and each field shows its own error
  const form = useForm<Signup>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.signup}>
        <ErrorSummary />
        <TextField name="name" label="Name" required />
        <TextField name="email" label="Email" type="email" required rules={[v.email()]} />
        <NumberField name="age" label="Age" rules={[v.min(18, "You must be 18 or older")]} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Sign up</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>i(()=>import(`./basic-BqcJqjBQ.js`),[]));var P={date:null,room:``,tags:[]},F=[{label:`Main hall`,value:`main`},{label:`Studio`,value:`studio`}],I={async create(e){console.log(`created`,e)}};function L(){let e=c({defaultValues:P});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:e,onSubmit:I.create,children:[(0,D.jsx)(b,{name:`date`,label:`Date`,required:!0}),(0,D.jsx)(v,{name:`room`,label:`Room`,options:F,required:!0}),(0,D.jsx)(ae,{name:`tags`,label:`Tags`}),(0,D.jsx)(d.Submit,{className:o({size:`sm`,className:`w-fit`}),children:`Create event`})]}),(0,D.jsx)(R,{form:e})]})}function R({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var z=`import { buttonVariants } from "@kitora/ui/button"
import { DateField, SelectField, TagsField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Event = { date: string | null; room: string; tags: string[] }

const defaultValues: Event = { date: null, room: "", tags: [] }
const ROOMS = [
  { label: "Main hall", value: "main" },
  { label: "Studio", value: "studio" },
]

// stub: replace with your API (POST /events)
const api = {
  async create(payload: Event): Promise<void> {
    console.log("created", payload)
  },
}

export function EventForm() {
  const form = useForm<Event>({ defaultValues })
  // no <Controller render={...}>: a picker is a field like any other, bound by name
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.create}>
        <DateField name="date" label="Date" required />
        <SelectField name="room" label="Room" options={ROOMS} required />
        <TagsField name="tags" label="Tags" />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Create event</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>i(()=>import(`./controller-Bf5cjeSj.js`),[]));var B={lines:[{item:``,qty:1,price:0}],total:0},V=u()(({f:e,e:t})=>({fields:[e.array(`lines`,{min:1},e=>[e.text(`item`),e.number(`qty`),e.number(`price`)]),e.display(`total`,{label:`Total`})],derived:{total:t.sum(`lines`,e=>e.mul(e.ref(`qty`),e.ref(`price`)))}})),se={async save(e){console.log(`saved`,e)}};function H(){let e=c({defaultValues:B,model:V});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:e,onSubmit:se.save,children:[(0,D.jsxs)(x,{name:`lines`,label:`Lines`,rowLabel:`Line`,min:1,layout:`table`,newRow:{item:``,qty:1,price:0},children:[(0,D.jsx)(h,{name:`.item`,label:`Item`,required:!0}),(0,D.jsx)(g,{name:`.qty`,label:`Qty`}),(0,D.jsx)(g,{name:`.price`,label:`Price`}),(0,D.jsx)(x.RowActions,{move:!0,remove:!0})]}),(0,D.jsx)(x.Add,{to:`lines`,children:`Add line`}),(0,D.jsx)(oe,{name:`total`,label:`Total`}),(0,D.jsx)(d.Submit,{className:o({size:`sm`,className:`w-fit`}),children:`Save invoice`})]}),(0,D.jsx)(U,{form:e})]})}function U({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var W=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, defineForm, type Issue, type SubmitStatus } from "@kitora/form/core"
import { DisplayField, FieldArray, NumberField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Invoice = { lines: Array<{ item: string; qty: number; price: number }>; total: number }

const defaultValues: Invoice = { lines: [{ item: "", qty: 1, price: 0 }], total: 0 }
// the total is a derived value in the model: no useWatch + setValue loop
const model = defineForm<Invoice>()(({ f, e }) => ({
  fields: [
    f.array("lines", { min: 1 }, (r) => [r.text("item"), r.number("qty"), r.number("price")]),
    f.display("total", { label: "Total" }),
  ],
  derived: { total: e.sum("lines", (r) => r.mul(r.ref("qty"), r.ref("price"))) },
}))

// stub: replace with your API (POST /invoices)
const api = {
  async save(payload: Invoice): Promise<void> {
    console.log("saved", payload)
  },
}

export function InvoiceForm() {
  const form = useForm<Invoice>({ defaultValues, model })
  // useFieldArray's fields.map + key={field.id} + remove(index) become a row template:
  // stable row ids, row-relative names (".item"), and bounds that explain disabled buttons
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.save}>
        <FieldArray name="lines" label="Lines" rowLabel="Line" min={1} layout="table" newRow={{ item: "", qty: 1, price: 0 }}>
          <TextField name=".item" label="Item" required />
          <NumberField name=".qty" label="Qty" />
          <NumberField name=".price" label="Price" />
          <FieldArray.RowActions move remove />
        </FieldArray>
        <FieldArray.Add to="lines">Add line</FieldArray.Add>
        <DisplayField name="total" label="Total" />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save invoice</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>i(()=>import(`./field-array-D965Nk8X.js`),[]));var G={email:``,company:!1};function K(){let e=c({defaultValues:G}),t=ie(e,`company`);return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:e,onSubmit:e=>console.log(e),children:[(0,D.jsx)(h,{name:`email`,label:`Email`,type:`email`,required:!0}),(0,D.jsx)(y,{name:`company`,label:`Buying for a company`}),(0,D.jsxs)(re,{path:`company`,is:!0,children:[(0,D.jsx)(h,{name:`companyName`,label:`Company name`,required:!0}),(0,D.jsx)(h,{name:`vat`,label:`VAT number`})]}),(0,D.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`useFormValue(form, "company"): `,String(t)]}),(0,D.jsx)(ee,{className:`w-fit`,type:`button`,variant:`outline`,size:`sm`,onClick:()=>e.setValue(`company`,!t),children:`Toggle company`}),(0,D.jsx)(d.Submit,{className:o({size:`sm`,className:`w-fit`}),children:`Continue`})]}),(0,D.jsx)(ce,{form:e})]})}function ce({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var q=`import { Button, buttonVariants } from "@kitora/ui/button"
import { CheckboxField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, useFormValue, When } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Billing = { email: string; company: boolean; companyName?: string; vat?: string }

const defaultValues: Billing = { email: "", company: false }

export function BillingForm() {
  const form = useForm<Billing>({ defaultValues })
  // watch("company") for display only: subscribes to one path, re-renders only this component
  const company = useFormValue(form, "company")
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(values) => console.log(values)}>
        <TextField name="email" label="Email" type="email" required />
        <CheckboxField name="company" label="Buying for a company" />
        {/* the conditional is in the model ("company" is a sibling field): hidden fields leave
            the payload and stop validating, with no shouldUnregister flag */}
        <When path="company" is={true}>
          <TextField name="companyName" label="Company name" required />
          <TextField name="vat" label="VAT number" />
        </When>
        <p className="text-[12px] text-muted-foreground">useFormValue(form, "company"): {String(company)}</p>
        {/* setValue: same name, origin-tagged so it never echoes back to a host */}
        <Button className="w-fit" type="button" variant="outline" size="sm" onClick={() => form.setValue("company", !company)}>
          Toggle company
        </Button>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Continue</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>i(()=>import(`./watch-BibcHh0G.js`),[]));var le={username:``,email:``},ue={async create(e){if(e.username===`admin`)throw new l({message:`Please fix the highlighted fields`,fields:{username:`That username is taken`}})}};function de(){let e=c({defaultValues:le});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:e,onSubmit:ue.create,children:[(0,D.jsx)(h,{name:`username`,label:`Username`,required:!0}),(0,D.jsx)(h,{name:`email`,label:`Email`,type:`email`,required:!0}),(0,D.jsx)(d.Status,{}),(0,D.jsx)(d.Submit,{className:o({size:`sm`,className:`w-fit`}),children:`Create account`}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>void e.validate(`email`),children:`Check email`})]}),(0,D.jsx)(fe,{form:e})]})}function fe({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var J=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, SubmitError, type Issue, type SubmitStatus } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Account = { username: string; email: string }

const defaultValues: Account = { username: "", email: "" }

// stub: replace with your API (POST /accounts → 422 { fields })
const api = {
  async create(payload: Account): Promise<void> {
    if (payload.username === "admin") throw new SubmitError<Account>({ message: "Please fix the highlighted fields", fields: { username: "That username is taken" } })
  },
}

export function AccountForm() {
  const form = useForm<Account>({ defaultValues })
  // setError per field after a failed request becomes: throw a SubmitError with \`fields\`.
  // Each message lands on its field, the first gets focus, editing the field clears it.
  // trigger("email") is form.validate("email").
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.create}>
        <TextField name="username" label="Username" required />
        <TextField name="email" label="Email" type="email" required />
        <Form.Status />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Create account</Form.Submit>
        <button type="button" onClick={() => void form.validate("email")}>
          Check email
        </button>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>i(()=>import(`./server-errors-DH1MsEna.js`),[]));var Y=e(r(),1),X={items:[{type:`faq`,title:`Is there a free plan?`,body:`Yes.`,image:{src:``,alt:``}}]},pe={type:`faq`,title:``,body:``,image:{src:``,alt:``}};function me(e){let[t,n]=(0,Y.useState)(e),[r,i]=(0,Y.useState)(0);return{data:t,writes:r,write:e=>{n(e),i(e=>e+1)}}}function he(){let e=me(X),t=c({defaultValues:X,value:e.data,onChange:t=>e.write(t)});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(d,{form:t,children:[(0,D.jsxs)(x,{name:`items`,label:`Accordion items`,rowLabel:`Item`,layout:`cards`,newRow:pe,children:[(0,D.jsxs)(f,{of:`.type`,children:[(0,D.jsxs)(f.Case,{is:`faq`,children:[(0,D.jsx)(h,{name:`.title`,label:`Question`,required:!0}),(0,D.jsx)(_,{name:`.body`,label:`Answer`,rows:2})]}),(0,D.jsxs)(f.Case,{is:`step`,children:[(0,D.jsx)(h,{name:`.title`,label:`Step`,required:!0}),(0,D.jsx)(_,{name:`.body`,label:`Detail`,rows:2})]})]}),(0,D.jsx)(h,{name:`.image.src`,label:`Image URL`}),(0,D.jsx)(h,{name:`.image.alt`,label:`Alt text`}),(0,D.jsx)(x.RowActions,{move:!0,remove:!0})]}),(0,D.jsx)(x.Add,{to:`items`,children:`Add item`}),(0,D.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Writes to the editor node: `,e.writes,` (one per keystroke; host writes never come back).`]})]}),(0,D.jsx)(ge,{form:t})]})}function ge({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var Z=`import { useState } from "react"
import { FieldArray, TextField, TextareaField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Item = { type: "faq" | "step"; title: string; body: string; image: { src: string; alt: string } }
type Accordion = { items: Item[] }

const defaultValues: Accordion = { items: [{ type: "faq", title: "Is there a free plan?", body: "Yes.", image: { src: "", alt: "" } }] }
const NEW_ITEM: Item = { type: "faq", title: "", body: "", image: { src: "", alt: "" } }

// the editor's accordion node owns the data and its undo history; this stands in for it
function useEditorNode(initial: Accordion) {
  const [data, setData] = useState(initial)
  const [writes, setWrites] = useState(0)
  return { data, writes, write: (next: Accordion) => { setData(next); setWrites((n) => n + 1) } }
}

export function AccordionNodeForm() {
  const node = useEditorNode(defaultValues)
  // controlled: a host write (undo, paste) applies with origin "external" and is never echoed;
  // only USER edits reach onChange. No useWatch, no disableWatch flag, no JSON.stringify echo
  // check, no reset() (so no focus-restore hack): only the changed paths re-render.
  const form = useForm<Accordion>({ defaultValues, value: node.data, onChange: (next) => node.write(next) })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <FieldArray name="items" label="Accordion items" rowLabel="Item" layout="cards" newRow={NEW_ITEM}>
          {/* ".type" is each row's own field that picks the case */}
          <Variant of=".type">
            <Variant.Case is="faq">
              <TextField name=".title" label="Question" required />
              <TextareaField name=".body" label="Answer" rows={2} />
            </Variant.Case>
            <Variant.Case is="step">
              <TextField name=".title" label="Step" required />
              <TextareaField name=".body" label="Detail" rows={2} />
            </Variant.Case>
          </Variant>
          <TextField name=".image.src" label="Image URL" />
          <TextField name=".image.alt" label="Alt text" />
          <FieldArray.RowActions move remove />
        </FieldArray>
        <FieldArray.Add to="items">Add item</FieldArray.Add>
        <p className="text-[12px] text-muted-foreground tabular-nums">Writes to the editor node: {node.writes} (one per keystroke; host writes never come back).</p>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>i(()=>import(`./editor-D2LLa12t.js`),[]));var _e=/``(.+?)``|`([^`]+)`/g;function Q({text:e}){let t=[],n=0;for(let r of e.matchAll(_e)){let i=r.index??0;i>n&&t.push(e.slice(n,i)),t.push({code:r[1]??r[2]??``,at:i}),n=i+r[0].length}return n<e.length&&t.push(e.slice(n)),(0,D.jsx)(D.Fragment,{children:t.map(e=>typeof e==`string`?e:(0,D.jsx)(`code`,{className:`rounded bg-muted px-1 font-mono text-[12px]`,children:e.code},e.at))})}function $({which:e}){let n=T[e];return(0,D.jsxs)(`div`,{className:`mt-2 flex flex-col gap-2 text-[13px]`,children:[(0,D.jsx)(`p`,{className:`max-w-3xl text-muted-foreground`,children:(0,D.jsx)(Q,{text:n.intro})}),(0,D.jsxs)(`div`,{className:`relative`,"data-code-block":``,children:[(0,D.jsxs)(`details`,{className:`rounded-lg border`,children:[(0,D.jsx)(`summary`,{className:`cursor-pointer py-1.5 pr-10 pl-3 text-[12px] font-medium`,children:`Before (React Hook Form, not compiled here)`}),(0,D.jsx)(t,{code:n.before,className:`max-h-[28rem] border-t`})]}),(0,D.jsx)(te,{value:n.before,label:`Copy the React Hook Form code`,className:`absolute top-1 right-1.5 h-6`})]})]})}function ve(){return(0,D.jsx)(`ul`,{className:`flex max-w-3xl flex-col gap-1.5 text-[13px]`,children:C.map(e=>(0,D.jsxs)(`li`,{children:[(0,D.jsx)(`span`,{className:`font-medium`,children:e.title}),` `,(0,D.jsx)(Q,{text:e.body})]},e.title))})}function ye(){return(0,D.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`React Hook Form to form engine mapping`,className:`overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,children:(0,D.jsxs)(`table`,{className:`w-full min-w-[40rem] text-left text-[13px]`,children:[(0,D.jsx)(`caption`,{className:`sr-only`,children:`React Hook Form API and its form engine equivalent`}),(0,D.jsx)(`thead`,{className:`text-[12px] text-muted-foreground`,children:(0,D.jsxs)(`tr`,{className:`border-b`,children:[(0,D.jsx)(`th`,{scope:`col`,className:`py-1.5 pe-3 font-medium`,children:`React Hook Form`}),(0,D.jsx)(`th`,{scope:`col`,className:`py-1.5 pe-3 font-medium`,children:`Form engine`}),(0,D.jsx)(`th`,{scope:`col`,className:`py-1.5 font-medium`,children:`Notes`})]})}),(0,D.jsx)(`tbody`,{children:w.map(e=>(0,D.jsxs)(`tr`,{className:`border-b align-top last:border-b-0`,children:[(0,D.jsx)(`td`,{className:`py-1.5 pe-3`,children:(0,D.jsx)(Q,{text:e.rhf})}),(0,D.jsx)(`td`,{className:`py-1.5 pe-3`,children:(0,D.jsx)(Q,{text:e.engine})}),(0,D.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:(0,D.jsx)(Q,{text:e.notes})})]},e.rhf))})]})})}function be(){return(0,D.jsx)(`ul`,{className:`flex max-w-3xl list-disc flex-col gap-1 ps-5 text-[13px]`,children:E.map(e=>(0,D.jsx)(`li`,{children:(0,D.jsx)(Q,{text:e})},e))})}function xe(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(n,{title:`Migrating from React Hook Form`,children:`Moving a React Hook Form form to the engine: how the two models differ, the API mapping, and the six most common React Hook Form shapes rewritten. Under each example is the React Hook Form "before" (plain React Hook Form, not compiled here); every "after" is type-checked and running.`}),(0,D.jsx)(S,{title:`How the two models differ`,children:(0,D.jsx)(ve,{})}),(0,D.jsx)(S,{title:`Mapping table`,children:(0,D.jsx)(ye,{})}),(0,D.jsx)(S,{n:1,title:`register + resolver + formState.errors`,blurb:`Rules move onto the fields (and into a serializable model the server can run); each field shows its own error; ErrorSummary replaces mapping formState.errors by hand.`,code:N,children:(0,D.jsx)(j,{})}),(0,D.jsx)($,{which:`basic`}),(0,D.jsx)(S,{n:2,title:`Controller for custom inputs`,blurb:`Pickers are fields bound by name: no render prop, no field.onChange / onBlur / ref wiring.`,code:z,children:(0,D.jsx)(L,{})}),(0,D.jsx)($,{which:`controller`}),(0,D.jsx)(S,{n:3,title:`useFieldArray + a watched total`,blurb:`A row template with stable ids and row-relative names; the total is a derived value in the model instead of useWatch + setValue.`,code:W,children:(0,D.jsx)(H,{})}),(0,D.jsx)($,{which:`fieldArray`}),(0,D.jsx)(S,{n:4,title:`watch, setValue and shouldUnregister`,blurb:`Conditional fields are a When in the model: hidden values leave the payload. useFormValue subscribes to one path; setValue keeps its name.`,code:q,children:(0,D.jsx)(K,{})}),(0,D.jsx)($,{which:`watch`}),(0,D.jsx)(S,{n:5,title:`setError from the server, trigger`,blurb:`Throw a SubmitError with fields: each message lands on its field and clears when edited. Submit as admin to see it. trigger(name) is validate(name).`,code:J,children:(0,D.jsx)(de,{})}),(0,D.jsx)($,{which:`serverErrors`}),(0,D.jsx)(S,{n:6,title:`Worked example: a form inside a Lexical node`,blurb:`An accordion form embedded in an editor node that owns the data. Controlled mode replaces the useWatch → reset loop, the disableWatch flag, the JSON.stringify echo check and the focus-restore timer.`,code:Z,children:(0,D.jsx)(he,{})}),(0,D.jsx)($,{which:`editor`}),(0,D.jsx)(S,{title:`Migrating a codebase`,children:(0,D.jsx)(be,{})})]})}export{xe as component};