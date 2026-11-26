import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{g as t,s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,hi as o,ni as s,ti as c}from"./index-9y5uwRd3.js";import{d as l,p as u}from"./field-options-BxYA8-No.js";import{W as d}from"./messages-BpgLhfTN.js";import{A as f,E as p,J as m,Y as h,c as g,d as _,f as v,h as y,s as b,v as x}from"./field-config-62hz5rv-.js";import{a as S,i as ee,n as C,o as w,r as T,t as E}from"./fields-3rMiSNLY.js";import{i as D,r as O,t as k}from"./composites-BLtDqbKQ.js";import{t as A}from"./async-select-B2ydu276.js";import{t as j}from"./display-BL6k8-He.js";import"./demos-DilKtWQ6.js";function M(){return{useForm:e=>f(e),useField:(e=>p(e)),Form:g,Field:b,FieldArray:x,When:v,Variant:_}}var N=e(r(),1),P=a(),F=250,I=600;function L(e){return new Promise(t=>setTimeout(t,e))}var te=8;async function R(e){return await L(I),{id:`rcpt_${crypto.randomUUID().slice(0,te)}`,savedAt:new Date().toISOString()}}async function z(e){await R(e)}var{e:B,v:V}=h(),H=m()(()=>({fields:[],derived:{summary:{expr:B.cat(B.ref(`name`),` — `,B.ref(`type`)),send:!1}}})),U={name:``,type:`sql`,owner:``,description:``,price:O.empty(`USD`),phone:D.empty(),address:k.empty(`US`),active:!0,agree:!1,summary:``},W=[`Ada Lovelace`,`Grace Hopper`,`Alan Turing`,`Katherine Johnson`,`Dennis Ritchie`];async function G({query:e,signal:t}){return await L(F),t.aborted?[]:W.filter(t=>t.toLowerCase().includes(e.toLowerCase())).map(e=>({value:e.toLowerCase().replace(/\s/g,`-`),label:e}))}var K=M();function q({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,P.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,P.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,P.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,P.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function J({value:e,maxHeight:t=`max-h-[420px]`}){return(0,P.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Y({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=y(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,P.jsxs)(q,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,P.jsx)(J,{value:i}),s.length>0?(0,P.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,P.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var X=o(s({size:`sm`}),`w-fit`);function Z({label:e=`Submit`,pendingLabel:t=`Saving…`,success:n,children:r}){return(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,P.jsx)(g.Submit,{className:X,pendingLabel:t,children:e}),r,(0,P.jsx)(g.Status,{className:`text-[13px]`,pending:(0,P.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,P.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>n?n(e):(0,P.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Saved`,e?` · ${e.id}`:``]}),error:e=>(0,P.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})}function Q({children:e,stack:t=!1}){return(0,P.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:N.Children.toArray(e)})}function ne(){let e=K.useForm({model:H,defaultValues:U,validateOn:`blur`});return(0,P.jsxs)(Q,{children:[(0,P.jsx)(K.Form,{form:e,onSubmit:z,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,P.jsxs)(u,{title:`Basics`,cols:{base:1,md:2},children:[(0,P.jsx)(S,{name:`name`,label:`Name`,required:!0,requiredMessage:`Name is required`,span:{md:1}}),(0,P.jsx)(T,{name:`type`,label:`Type`,span:{md:1},options:[{label:`SQL`,value:`sql`},{label:`Vector`,value:`vector`},{label:`Custom API`,value:`custom`}]}),(0,P.jsx)(A,{name:`owner`,label:`Owner (async)`,loadOptions:G,placeholder:`Search people…`,span:{base:`full`,md:2}}),(0,P.jsx)(w,{name:`description`,label:`Description`,span:{base:`full`,md:2}})]}),(0,P.jsx)(u,{title:`Type-specific`,children:(0,P.jsxs)(K.Variant,{of:`type`,children:[(0,P.jsx)(K.Variant.Case,{is:`sql`,children:(0,P.jsxs)(l,{cols:{base:1,md:2},children:[(0,P.jsx)(S,{name:`credentialId`,label:`Credential ID`,span:{md:1}}),(0,P.jsx)(S,{name:`aiModel`,label:`AI model`,span:{md:1}})]})}),(0,P.jsx)(K.Variant.Case,{is:`vector`,children:(0,P.jsxs)(l,{cols:{base:1,md:2},children:[(0,P.jsx)(S,{name:`itemGroup`,label:`Item group`,span:{md:1}}),(0,P.jsx)(C,{name:`limit`,label:`Limit`,required:!0,rules:[V.min(1,`Limit must be ≥ 1`)],span:{md:1}})]})}),(0,P.jsx)(K.Variant.Case,{is:`custom`,children:(0,P.jsx)(w,{name:`customData`,label:`Custom JSON`,rows:5})})]})}),(0,P.jsx)(u,{title:`Billing & contact`,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(O,{name:`price`,label:`Budget`}),(0,P.jsx)(D,{name:`phone`,label:`Phone`}),(0,P.jsx)(k,{name:`address`,label:`Address`})]})}),(0,P.jsx)(u,{title:`Finish`,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(ee,{name:`active`,label:`Active`}),(0,P.jsx)(E,{name:`agree`,label:`I accept the terms`,required:!0,rules:[V.oneOf([!0],`You must accept the terms`)]}),(0,P.jsx)(j,{name:`summary`,label:`Summary (local, not sent)`,tone:`inline`})]})}),(0,P.jsx)(Z,{children:(0,P.jsx)(c,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>e.reset(`defaults`),children:`Reset`})})]})}),(0,P.jsx)(`div`,{className:`flex flex-col gap-3`,children:(0,P.jsx)(Y,{store:e})})]})}var $=`import { type ReactNode, Children } from "react"
import { Button, buttonVariants } from "@kitora/ui/button"
import { createForm, useFormSnapshot, type SnapshotSource, Form } from "@kitora/form/react"
import { defineForm, kit, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { AddressField, AsyncSelectField, CheckboxField, DisplayField, FormGrid, MoneyField, NumberField, PhoneField, Section, SelectField, SwitchField, TextField, TextareaField } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Mock network latency for the loaders below (ms). */
const MOCK_LATENCY_MS = 250

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

/** {@link mockSave} for handlers typed to return nothing (\`QuestionFlow onSubmit\`). */
async function mockSend(payload: unknown): Promise<void> {
  await mockSave(payload)
}

/** The context every \`AsyncSelectField\` loader receives. */
interface LoaderCtx {
  parent: unknown
  query: string
  signal: AbortSignal
}

// ---- the page
interface ServiceRequest {
  name: string
  type: "sql" | "vector" | "custom"
  owner: string
  description: string
  credentialId?: string
  aiModel?: string
  itemGroup?: string
  limit?: number
  customData?: string
  price: ReturnType<typeof MoneyField.empty>
  phone: ReturnType<typeof PhoneField.empty>
  address: ReturnType<typeof AddressField.empty>
  active: boolean
  agree: boolean
  summary: string
}

const { e, v } = kit<ServiceRequest>()

/** A local-only derived summary (shown, never sent): model data, not a render-time registration. */
const model = defineForm<ServiceRequest>()(() => ({
  fields: [],
  derived: { summary: { expr: e.cat(e.ref("name"), " — ", e.ref("type")), send: false } },
}))

const defaults: ServiceRequest = {
  name: "",
  type: "sql",
  owner: "",
  description: "",
  price: MoneyField.empty("USD"),
  phone: PhoneField.empty(),
  address: AddressField.empty("US"),
  active: true,
  agree: false,
  summary: "",
}

const OWNERS = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Katherine Johnson", "Dennis Ritchie"]

async function loadOwners({ query, signal }: LoaderCtx) {
  await delay(MOCK_LATENCY_MS)
  if (signal.aborted) return []
  return OWNERS.filter((o) => o.toLowerCase().includes(query.toLowerCase())).map((o) => ({
    value: o.toLowerCase().replace(/\\s/g, "-"),
    label: o,
  }))
}

const F = createForm<ServiceRequest>()

// ---- page chrome: the panels beside the form
/** A side panel: a card with a title strip (title left, muted meta right). */
function SidePanel({ title, meta, sticky = false, className, children }: { title: ReactNode; meta?: ReactNode; sticky?: boolean; className?: string; children: ReactNode }) {
  return (
    <aside className={cn("min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card", sticky && "lg:sticky lg:top-[4.5rem]", className)}>
      <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
        <span className="truncate font-medium">{title}</span>
        {meta !== undefined ? <span className="shrink-0 tabular-nums text-muted-foreground">{meta}</span> : null}
      </div>
      {children}
    </aside>
  )
}

/** A JSON value as a panel body (focusable: it scrolls). */
function PanelJson({ value, maxHeight = "max-h-[420px]" }: { value: unknown; maxHeight?: string }) {
  return (
    <pre dir="ltr" tabIndex={0} className={cn("overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring", maxHeight)}>
      {JSON.stringify(value, null, 2)}
    </pre>
  )
}

/** The read side of a store that {@link LivePanel} shows; every \`FormStore\` fits. */
interface LiveSource extends SnapshotSource {
  serialize(opts?: { redact?: boolean; mode?: "full" | "dirty" }): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** The store's live serialized payload, dirty flag, submit status and issues. */
function LivePanel({ store, title = "Live payload", redact = false, mode = "full" }: { store: LiveSource; title?: string; redact?: boolean; mode?: "full" | "dirty" }) {
  const { payload, dirty, status, issues } = useFormSnapshot(store, (s) => ({ payload: s.serialize({ redact, mode }), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }), deepEqual)
  return (
    <SidePanel sticky title={title} meta={\`\${dirty ? "● dirty" : "clean"} · \${status}\`}>
      <PanelJson value={payload} />
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>
              {i.path || "(form)"}: {i.message}
            </li>
          ))}
        </ul>
      ) : null}
    </SidePanel>
  )
}

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

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
}

// ---- the examples
export function KitchenSinkExample() {
  const form = F.useForm({ model, defaultValues: defaults, validateOn: "blur" })
  return (
    <TwoCol>
      <F.Form form={form} onSubmit={mockSend}>
        <div className="flex flex-col gap-4">
          <Section title="Basics" cols={{ base: 1, md: 2 }}>
            <TextField name="name" label="Name" required requiredMessage="Name is required" span={{ md: 1 }} />
            <SelectField
              name="type"
              label="Type"
              span={{ md: 1 }}
              options={[
                { label: "SQL", value: "sql" },
                { label: "Vector", value: "vector" },
                { label: "Custom API", value: "custom" },
              ]}
            />
            <AsyncSelectField name="owner" label="Owner (async)" loadOptions={loadOwners} placeholder="Search people…" span={{ base: "full", md: 2 }} />
            <TextareaField name="description" label="Description" span={{ base: "full", md: 2 }} />
          </Section>

          <Section title="Type-specific">
            <F.Variant of="type">
              <F.Variant.Case is="sql">
                <FormGrid cols={{ base: 1, md: 2 }}>
                  <TextField name="credentialId" label="Credential ID" span={{ md: 1 }} />
                  <TextField name="aiModel" label="AI model" span={{ md: 1 }} />
                </FormGrid>
              </F.Variant.Case>
              <F.Variant.Case is="vector">
                <FormGrid cols={{ base: 1, md: 2 }}>
                  <TextField name="itemGroup" label="Item group" span={{ md: 1 }} />
                  <NumberField name="limit" label="Limit" required rules={[v.min(1, "Limit must be ≥ 1")]} span={{ md: 1 }} />
                </FormGrid>
              </F.Variant.Case>
              <F.Variant.Case is="custom">
                <TextareaField name="customData" label="Custom JSON" rows={5} />
              </F.Variant.Case>
            </F.Variant>
          </Section>

          <Section title="Billing & contact">
            <div className="flex flex-col gap-3">
              <MoneyField name="price" label="Budget" />
              <PhoneField name="phone" label="Phone" />
              <AddressField name="address" label="Address" />
            </div>
          </Section>

          <Section title="Finish">
            <div className="flex flex-col gap-3">
              <SwitchField name="active" label="Active" />
              <CheckboxField name="agree" label="I accept the terms" required rules={[v.oneOf([true], "You must accept the terms")]} />
              <DisplayField name="summary" label="Summary (local, not sent)" tone="inline" />
            </div>
          </Section>

          <SubmitRow>
            <Button type="button" variant="outline" size="sm" onClick={() => form.reset("defaults")}>
              Reset
            </Button>
          </SubmitRow>
        </div>
      </F.Form>
      <div className="flex flex-col gap-3">
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./kitchen-BKVggvQx.js`),[]));function re(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(n,{title:`Kitchen sink`,children:`Everything at once — variant, async-search, composites, validation, derived, isolated re-renders.`}),(0,P.jsx)(t,{code:$,children:(0,P.jsx)(ne,{})})]})}export{re as component};