import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a,ni as o}from"./index-q72zUtm9.js";import{d as s}from"./field-options-Ck0r8oxm.js";import{W as c}from"./messages-Bsb0m0Hq.js";import{A as l,Y as u,c as d,d as f,et as p,h as m}from"./field-config-DXiPz8Cg.js";import{a as h,n as g,o as _,r as v}from"./fields-CoJCsIMd.js";import{t as y}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var b=e(n(),1),x=i(),S=600;function C(e){return new Promise(t=>setTimeout(t,e))}var w=8;async function T(e){return await C(S),{id:`rcpt_${crypto.randomUUID().slice(0,w)}`,savedAt:new Date().toISOString()}}var E=[{label:`Vector search`,value:`vector`},{label:`SQL`,value:`sql`},{label:`SQL batch`,value:`sql_batch`},{label:`Lead list`,value:`lead`},{label:`Chart`,value:`chart`},{label:`Weather`,value:`weather`},{label:`ClickHouse`,value:`clickhouse`},{label:`Custom API`,value:`custom_api`}],{v:D}=u();function O({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,x.jsxs)(`aside`,{className:a(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,x.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function k({value:e,maxHeight:t=`max-h-[420px]`}){return(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:a(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function A({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=m(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),c);return(0,x.jsxs)(O,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,x.jsx)(k,{value:i}),s.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var j=a(o({size:`sm`}),`w-fit`);function M({label:e=`Submit`,pendingLabel:t=`Saving…`,success:n,children:r}){return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,x.jsx)(d.Submit,{className:j,pendingLabel:t,children:e}),r,(0,x.jsx)(d.Status,{className:`text-[13px]`,pending:(0,x.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,x.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>n?n(e):(0,x.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Saved`,e?` · ${e.id}`:``]}),error:e=>(0,x.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})}function N({children:e,stack:t=!1}){return(0,x.jsx)(`div`,{className:a(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:b.Children.toArray(e)})}function P(){let e=l({defaultValues:{name:``,type:`vector`},validateOn:`blur`});return(0,x.jsxs)(N,{children:[(0,x.jsxs)(d,{form:e,onSubmit:T,children:[(0,x.jsx)(h,{name:`name`,label:`Tool name`,required:!0}),(0,x.jsx)(v,{name:`type`,label:`Tool type`,options:E}),(0,x.jsxs)(f,{of:`type`,children:[(0,x.jsx)(f.Case,{is:`vector`,children:(0,x.jsxs)(s,{cols:{base:1,sm:2},children:[(0,x.jsx)(h,{name:`itemGroup`,label:`Item group`,required:!0}),(0,x.jsx)(g,{name:`limit`,label:`Limit`,required:!0,rules:[D.min(1)]})]})}),(0,x.jsx)(f.Case,{is:[`sql`,`sql_batch`],children:(0,x.jsx)(h,{name:`credentialId`,label:`Credential ID`,required:!0})}),(0,x.jsx)(f.Case,{is:`sql`,children:(0,x.jsx)(_,{name:`query`,label:`SQL query`,rows:3,required:!0})}),(0,x.jsx)(f.Case,{is:`sql_batch`,children:(0,x.jsx)(_,{name:`query`,label:`Batch SQL (one per line)`,rows:4})}),(0,x.jsx)(f.Case,{is:`lead`,children:(0,x.jsx)(h,{name:`listId`,label:`Lead list ID`})}),(0,x.jsx)(f.Case,{is:`chart`,children:(0,x.jsxs)(s,{cols:{base:1,sm:2},children:[(0,x.jsx)(v,{name:`chartType`,label:`Chart type`,options:[{label:`Bar`,value:`bar`},{label:`Line`,value:`line`},{label:`Pie`,value:`pie`}]}),(0,x.jsx)(h,{name:`metric`,label:`Metric`})]})}),(0,x.jsx)(f.Case,{is:`weather`,children:(0,x.jsxs)(s,{cols:{base:1,sm:2},children:[(0,x.jsx)(h,{name:`location`,label:`Location`}),(0,x.jsx)(v,{name:`units`,label:`Units`,options:[{label:`Metric`,value:`metric`},{label:`Imperial`,value:`imperial`}]})]})}),(0,x.jsx)(f.Case,{is:`clickhouse`,children:(0,x.jsxs)(s,{cols:{base:1,sm:2},children:[(0,x.jsx)(h,{name:`dsn`,label:`DSN`}),(0,x.jsx)(h,{name:`table`,label:`Table`})]})}),(0,x.jsx)(f.Case,{is:`custom_api`,children:(0,x.jsxs)(s,{cols:{base:1,sm:3},children:[(0,x.jsx)(h,{name:`url`,label:`Endpoint URL`,required:!0,rules:[D.url()],span:{sm:2}}),(0,x.jsx)(v,{name:`method`,label:`Method`,options:[{label:`GET`,value:`GET`},{label:`POST`,value:`POST`}],span:{sm:1}})]})})]}),(0,x.jsx)(M,{label:`Save tool`})]}),(0,x.jsx)(A,{store:e})]})}var F=p().validator(`json`,{fn:e=>{if(!(typeof e!=`string`||e.trim()===``))try{JSON.parse(e);return}catch{return`Must be valid JSON`}}}),I=u();function L(e){try{return JSON.parse(e)}catch{return null}}function R(){let e=l({defaultValues:{name:`lookup_order`,customData:`{
  "endpoint": "/orders/{id}",
  "timeoutMs": 3000
}`},registry:F,validateOn:`blur`,toSubmit:e=>({name:e.name,data:L(e.customData)})}),t=m(e,e=>e.getValues(),c);return(0,x.jsxs)(N,{children:[(0,x.jsxs)(d,{form:e,onSubmit:e=>T(e),children:[(0,x.jsx)(h,{name:`name`,label:`Tool name`,required:!0}),(0,x.jsx)(_,{name:`customData`,label:`Custom data (JSON)`,rows:5,required:!0,rules:[I.v.op(`json`)]}),(0,x.jsx)(M,{label:`Save tool`})]}),(0,x.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-4`,children:[(0,x.jsx)(O,{title:`Form state`,meta:`customData: string`,children:(0,x.jsx)(k,{value:t,maxHeight:`max-h-[200px]`})}),(0,x.jsx)(A,{store:e,title:`Submit payload (toSubmit)`})]})]})}var z=`import { type ReactNode, Children } from "react"
import { catalogRegistry, kit, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, Variant, useForm, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { FormGrid, NumberField, SelectField, TextField, TextareaField } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"
import { buttonVariants } from "@kitora/ui/button"

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
// Stress-test form — the thewildai "FuncToolForm". \`type\` is a discriminant
// over 8 tool kinds; each branch shows/validates/submits its OWN fields. The RHF
// original decayed into parallel arrays + showX booleans + hidden fields still
// submitted. Here: one <Variant of="type"> + unregister-on-hide → the payload is
// always correct per type (watch the live panel — no other branch's fields leak).
interface Tool {
  name: string
  type: "vector" | "sql" | "sql_batch" | "lead" | "chart" | "weather" | "clickhouse" | "custom_api"
  // vector
  itemGroup?: string
  limit?: number
  // sql / sql_batch
  credentialId?: string
  query?: string
  // lead
  listId?: string
  // chart
  chartType?: string
  metric?: string
  // weather
  location?: string
  units?: string
  // clickhouse
  dsn?: string
  table?: string
  // custom_api
  url?: string
  method?: string
}

const TYPES = [
  { label: "Vector search", value: "vector" },
  { label: "SQL", value: "sql" },
  { label: "SQL batch", value: "sql_batch" },
  { label: "Lead list", value: "lead" },
  { label: "Chart", value: "chart" },
  { label: "Weather", value: "weather" },
  { label: "ClickHouse", value: "clickhouse" },
  { label: "Custom API", value: "custom_api" },
]

// Every rule lives on its field, so a hidden branch stops validating with it:
// no hand schema that re-implements (and drifts from) the Variant below.
const { v } = kit<Tool>()

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
export function ToolConfigExample() {
  const form = useForm<Tool>({ defaultValues: { name: "", type: "vector" }, validateOn: "blur" })
  return (
    <TwoCol>
      <Form form={form} onSubmit={mockSave}>
        <TextField name="name" label="Tool name" required />
        <SelectField name="type" label="Tool type" options={TYPES} />

        <Variant of="type">
          <Variant.Case is="vector">
            <FormGrid cols={{ base: 1, sm: 2 }}>
              <TextField name="itemGroup" label="Item group" required />
              <NumberField name="limit" label="Limit" required rules={[v.min(1)]} />
            </FormGrid>
          </Variant.Case>
          {/* one Case for both SQL kinds: the credential is declared (and validated) once */}
          <Variant.Case is={["sql", "sql_batch"]}>
            <TextField name="credentialId" label="Credential ID" required />
          </Variant.Case>
          <Variant.Case is="sql">
            <TextareaField name="query" label="SQL query" rows={3} required />
          </Variant.Case>
          <Variant.Case is="sql_batch">
            <TextareaField name="query" label="Batch SQL (one per line)" rows={4} />
          </Variant.Case>
          <Variant.Case is="lead">
            <TextField name="listId" label="Lead list ID" />
          </Variant.Case>
          <Variant.Case is="chart">
            <FormGrid cols={{ base: 1, sm: 2 }}>
              <SelectField name="chartType" label="Chart type" options={[{ label: "Bar", value: "bar" }, { label: "Line", value: "line" }, { label: "Pie", value: "pie" }]} />
              <TextField name="metric" label="Metric" />
            </FormGrid>
          </Variant.Case>
          <Variant.Case is="weather">
            <FormGrid cols={{ base: 1, sm: 2 }}>
              <TextField name="location" label="Location" />
              <SelectField name="units" label="Units" options={[{ label: "Metric", value: "metric" }, { label: "Imperial", value: "imperial" }]} />
            </FormGrid>
          </Variant.Case>
          <Variant.Case is="clickhouse">
            <FormGrid cols={{ base: 1, sm: 2 }}>
              <TextField name="dsn" label="DSN" />
              <TextField name="table" label="Table" />
            </FormGrid>
          </Variant.Case>
          <Variant.Case is="custom_api">
            <FormGrid cols={{ base: 1, sm: 3 }}>
              <TextField name="url" label="Endpoint URL" required rules={[v.url()]} span={{ sm: 2 }} />
              <SelectField name="method" label="Method" options={[{ label: "GET", value: "GET" }, { label: "POST", value: "POST" }]} span={{ sm: 1 }} />
            </FormGrid>
          </Variant.Case>
        </Variant>
        <SubmitRow label="Save tool" />
      </Form>
      <LivePanel store={form} />
    </TwoCol>
  )
}

// ---- C5: customData → data via toSubmit
// The FuncTool's custom tool keeps its config as a JSON string the user types
// (\`customData\`), but the API wants a parsed object under \`data\`. \`toSubmit\` is
// the one place that maps form state to the payload; the payload type is its
// return type, so \`onSubmit\` receives \`ToolPayload\`, never the raw string.
interface CustomTool {
  name: string
  customData: string
}

/** What the API receives: the parsed config under \`data\` (the string never leaves the form). */
interface ToolPayload {
  name: string
  data: unknown
}

// a named validator: submit is blocked until the JSON parses (empty is left to \`required\`)
const toolRegistry = catalogRegistry().validator("json", {
  fn: (value) => {
    if (typeof value !== "string" || value.trim() === "") return undefined
    try {
      JSON.parse(value)
      return undefined
    } catch {
      return "Must be valid JSON"
    }
  },
})
const customKit = kit<CustomTool>()

/**
 * The parsed config, or \`null\` while the text is not JSON yet. \`toSubmit\` also
 * runs for the live preview on every keystroke, so it must not throw; submit
 * itself never sees \`null\`, because the \`json\` rule blocks it first.
 */
function parseCustomData(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export function ToolPayloadExample() {
  const form = useForm<CustomTool, ToolPayload>({
    defaultValues: { name: "lookup_order", customData: '{\\n  "endpoint": "/orders/{id}",\\n  "timeoutMs": 3000\\n}' },
    registry: toolRegistry,
    validateOn: "blur",
    toSubmit: (state) => ({ name: state.name, data: parseCustomData(state.customData) }),
  })
  const values = useFormSnapshot(form, (s) => s.getValues(), deepEqual)
  return (
    <TwoCol>
      <Form form={form} onSubmit={(payload: ToolPayload) => mockSave(payload)}>
        <TextField name="name" label="Tool name" required />
        <TextareaField name="customData" label="Custom data (JSON)" rows={5} required rules={[customKit.v.op("json")]} />
        <SubmitRow label="Save tool" />
      </Form>
      {/* min-w-0: the long JSON string must scroll inside the panel, not widen the 280px column */}
      <div className="flex min-w-0 flex-col gap-4">
        <SidePanel title="Form state" meta="customData: string">
          <PanelJson value={values} maxHeight="max-h-[200px]" />
        </SidePanel>
        <LivePanel store={form} title="Submit payload (toSubmit)" />
      </div>
    </TwoCol>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./tools-BDYkl2ey.js`),[]));function B(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(t,{title:`AI-tool config — discriminated union`,children:[`Kills the "scattered conditional logic" anti-pattern. `,(0,x.jsx)(`code`,{children:`type`}),` is a discriminant over 8 tool kinds; one `,(0,x.jsx)(`code`,{children:`<Variant of="type">`}),` swaps the field set, and hidden branches unregister — so the payload is always correct per type (no `,(0,x.jsx)(`code`,{children:`showX`}),` booleans, no hidden fields leaking into submit). Rules sit on the fields, so a hidden branch stops validating with them, and `,(0,x.jsx)(`code`,{children:`Variant.Case is={["sql", "sql_batch"]}`}),` declares the shared credential once.`]}),(0,x.jsx)(y,{n:1,title:`Discriminated tool config`,blurb:`Switch the tool type: one Variant swaps the field set and hidden branches unregister, so the live payload never leaks another type's fields.`,code:z,children:(0,x.jsx)(P,{})}),(0,x.jsx)(y,{n:2,title:`customData → data via toSubmit (C5)`,blurb:`The user types the custom tool's config as a JSON string; toSubmit maps the form state to the API payload, so the submit handler gets a parsed data object, never the string. Invalid JSON blocks the submit.`,code:z,children:(0,x.jsx)(R,{})})]})}export{B as component};