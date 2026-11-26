import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{W as r}from"./messages-BpgLhfTN.js";import{A as i,Y as a,_ as o,c as s,d as c,h as l}from"./field-config-62hz5rv-.js";import{a as u,r as d,t as f}from"./fields-3rMiSNLY.js";import{n as p}from"./wizard-BPjDeHLA.js";import{t as m}from"./advanced-Bge4sOmt.js";import{n as h,r as g,t as _}from"./wizard-chrome-CIUmy4js.js";import{t as v}from"./field-array-B0BhXTG7.js";import{t as y}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var b=n(),x={usesRelay:!0,integrations:[{type:`relay`,connection:``}]},S={type:`metrics`,connection:``},C=[{label:`Message relay`,value:`relay`},{label:`Metrics collector`,value:`metrics`}],w=C.filter(e=>e.value!==`relay`),{c:T,e:E,v:D}=a(),O=E.if(T.eq(`/usesRelay`,!0),E.lit(C),E.lit(w)),k={async connect(){return`conn_`+Math.random().toString(36).slice(2,10)}};function A(){let e=o(`.`);return(0,b.jsxs)(`details`,{open:!e.complete,children:[(0,b.jsx)(`summary`,{children:e.complete?`Complete`:e.requiredFilled+`/`+e.required+` required`}),(0,b.jsx)(d,{name:`.type`,label:`Type`,options:O,onStale:`first`}),(0,b.jsxs)(c,{of:`.type`,children:[(0,b.jsx)(c.Case,{is:`relay`,children:(0,b.jsx)(u,{name:`.relayId`,label:`Relay ID`,required:!0,rules:[D.pattern(/^RL-[A-Z0-9]+$/,`Looks like RL-XXXX`)]})}),(0,b.jsx)(c.Case,{is:`metrics`,children:(0,b.jsx)(u,{name:`.collectorId`,label:`Collector ID`,required:!0,rules:[D.pattern(/^MC-[A-Z0-9]+$/,`Looks like MC-XXXX`)]})})]}),(0,b.jsx)(m,{name:`.connection`,label:`Connection`,required:!0,requiredMessage:`Connect this integration`,connect:k.connect,children:`Connect via OAuth`})]})}function j(){let e=i({defaultValues:x});return(0,b.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,b.jsx)(s,{form:e,onSubmit:e=>console.log(`save`,e),children:(0,b.jsxs)(p,{submitLabel:`Finish setup`,progress:(0,b.jsx)(h,{}),nav:(0,b.jsx)(_,{}),children:[(0,b.jsx)(p.Step,{id:`setup`,label:`Setup`,children:(0,b.jsx)(f,{name:`usesRelay`,label:`Do you route events through a message relay?`})}),(0,b.jsxs)(p.Step,{id:`integrations`,label:`Integrations`,children:[(0,b.jsxs)(v,{name:`integrations`,label:`Integrations`,rowLabel:`Integration`,newRow:S,min:1,children:[(0,b.jsx)(A,{}),(0,b.jsx)(v.RowActions,{remove:!0})]}),(0,b.jsx)(v.Add,{to:`integrations`,children:`Add integration`})]}),(0,b.jsx)(p.Step,{id:`review`,label:`Review`,children:(0,b.jsx)(g,{})})]})}),(0,b.jsx)(M,{form:e})]})}function M({form:e}){let t=l(e,e=>e.serialize(),r);return(0,b.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,b.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,b.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var N=`import { deepEqual, kit } from "@kitora/form/core"
import { CheckboxField, ConnectionField, FieldArray, SelectField, TextField, WizardNav, WizardProgress, WizardSummary } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, useScopeStatus, Variant, Wizard } from "@kitora/form/react"

type Integration = { type: string; connection: string; relayId?: string; collectorId?: string }
type Setup = { usesRelay: boolean; integrations: Integration[] }

const defaultValues: Setup = { usesRelay: true, integrations: [{ type: "relay", connection: "" }] }
const NEW_INTEGRATION: Integration = { type: "metrics", connection: "" }
const ALL_TYPES = [{ label: "Message relay", value: "relay" }, { label: "Metrics collector", value: "metrics" }]
const WITHOUT_RELAY = ALL_TYPES.filter((t) => t.value !== "relay")

const { c, e, v } = kit<Setup>()
// '/usesRelay' is the sibling field from step 1 ("/" = a form-root ref from inside a row)
const OFFERED_TYPES = e.if(c.eq("/usesRelay", true), e.lit(ALL_TYPES), e.lit(WITHOUT_RELAY))

// stub: replace with your API (the OAuth popup round trip, resolving a connection token)
const api = { async connect(): Promise<string> { return "conn_" + Math.random().toString(36).slice(2, 10) } }

function IntegrationRow() {
  const st = useScopeStatus(".") // this row's own required-field progress
  return (
    <details open={!st.complete}>
      <summary>{st.complete ? "Complete" : st.requiredFilled + "/" + st.required + " required"}</summary>
      {/* a row whose type is no longer offered resets to the first offered type */}
      <SelectField name=".type" label="Type" options={OFFERED_TYPES} onStale="first" />
      {/* '.type' is the sibling field above that picks the case */}
      <Variant of=".type">
        <Variant.Case is="relay">
          <TextField name=".relayId" label="Relay ID" required rules={[v.pattern(/^RL-[A-Z0-9]+$/, "Looks like RL-XXXX")]} />
        </Variant.Case>
        <Variant.Case is="metrics">
          <TextField name=".collectorId" label="Collector ID" required rules={[v.pattern(/^MC-[A-Z0-9]+$/, "Looks like MC-XXXX")]} />
        </Variant.Case>
      </Variant>
      <ConnectionField name=".connection" label="Connection" required requiredMessage="Connect this integration" connect={api.connect}>
        Connect via OAuth
      </ConnectionField>
    </details>
  )
}

export function IntegrationSetupForm() {
  const form = useForm<Setup>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(setup) => console.log("save", setup)}>
        {/* Next validates the step's rows, so step 2 is gated until each one is filled and connected */}
        <Wizard submitLabel="Finish setup" progress={<WizardProgress />} nav={<WizardNav />}>
          <Wizard.Step id="setup" label="Setup">
            <CheckboxField name="usesRelay" label="Do you route events through a message relay?" />
          </Wizard.Step>
          <Wizard.Step id="integrations" label="Integrations">
            <FieldArray name="integrations" label="Integrations" rowLabel="Integration" newRow={NEW_INTEGRATION} min={1}>
              <IntegrationRow />
              <FieldArray.RowActions remove />
            </FieldArray>
            <FieldArray.Add to="integrations">Add integration</FieldArray.Add>
          </Wizard.Step>
          <Wizard.Step id="review" label="Review">
            <WizardSummary />
          </Wizard.Step>
        </Wizard>
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>t(()=>import(`./integrations-BrATpGig.js`),[]));function P(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(e,{title:`Integration Manager`,children:[`Step 1 tailors step 2: without a relay, the relay type is not offered (and a relay row resets). Step 2 is an addable, polymorphic accordion — each row is a Variant on its type with a ConnectionField (a mock OAuth round trip) and collapses to a status summary from `,(0,b.jsx)(`code`,{children:`useScopeStatus(".")`}),`. Next validates every row, so the step is gated until each integration is filled and connected.`]}),(0,b.jsx)(y,{n:1,title:`Connected services wizard`,blurb:`Untick the relay in step 1 and the relay type disappears from step 2; each integration row must be filled and connected before Next.`,code:N,children:(0,b.jsx)(j,{})})]})}export{P as component};