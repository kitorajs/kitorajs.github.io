import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{d as r}from"./field-options-CrzCnxI5.js";import{W as i}from"./messages-C_IMdr_-.js";import{A as a,c as o,h as s}from"./field-config-17kME8Vl.js";import{r as c}from"./fields-CwxxBZgA.js";import{n as l}from"./composites-Dc1tnOcf.js";import{t as u}from"./async-select-NZnKPMvh.js";import{t as d}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";import{i as f,r as p,t as m}from"./demo-fixtures-DpfwlbH0.js";var h=n(),g=[{value:`kg`,label:`kg`},{value:`lb`,label:`lb`}],_=[{value:`cm`,label:`cm`},{value:`in`,label:`in`}],v={country:`US`,state:``,city:``,weight:l.empty(`kg`),length:l.empty(`cm`),width:l.empty(`cm`),height:l.empty(`cm`)};function y(){let e=a({defaultValues:v});return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsxs)(o,{form:e,children:[(0,h.jsx)(c,{name:`country`,label:`Country`,options:m}),(0,h.jsx)(u,{name:`state`,label:`State / region`,dependsOn:[`country`],loadOptions:f}),(0,h.jsx)(u,{name:`city`,label:`City`,dependsOn:[`state`],loadOptions:p}),(0,h.jsx)(l,{name:`weight`,label:`Weight`,units:g}),(0,h.jsxs)(r,{cols:{base:1,sm:3},children:[(0,h.jsx)(l,{name:`length`,label:`Length`,units:_}),(0,h.jsx)(l,{name:`width`,label:`Width`,units:_}),(0,h.jsx)(l,{name:`height`,label:`Height`,units:_})]})]}),(0,h.jsx)(b,{form:e})]})}function b({form:e}){let t=s(e,e=>e.serialize(),i);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var x=`import { AsyncSelectField, FormGrid, MeasureField, SelectField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"
import { COUNTRIES, loadCities, loadStates } from "@/kit/form/demo-fixtures"

// the gallery's mock server: country list, and state / city loaders ({ parent, query, signal } → options)

/** A measure composite value: { value, unit }; value is undefined while empty (never NaN). */
type Measure = ReturnType<typeof MeasureField.empty>
type Shipping = { country: string; state: string; city: string; weight: Measure; length: Measure; width: Measure; height: Measure }
type Option = { value: string; label: string }

const weightUnits: Option[] = [{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]
const dimUnits: Option[] = [{ value: "cm", label: "cm" }, { value: "in", label: "in" }]

const defaultValues: Shipping = {
  country: "US",
  state: "",
  city: "",
  weight: MeasureField.empty("kg"),
  length: MeasureField.empty("cm"),
  width: MeasureField.empty("cm"),
  height: MeasureField.empty("cm"),
}

// stub: replace with your API (GET /states?country=…, GET /cities?state=…)

export function ShippingForm() {
  const form = useForm<Shipping>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <SelectField name="country" label="Country" options={COUNTRIES} />
        {/* 'country' is the sibling field above: a change clears + reloads state and city */}
        <AsyncSelectField name="state" label="State / region" dependsOn={["country"]} loadOptions={loadStates} />
        {/* 'state' is the sibling field above */}
        <AsyncSelectField name="city" label="City" dependsOn={["state"]} loadOptions={loadCities} />
        <MeasureField name="weight" label="Weight" units={weightUnits} />
        <FormGrid cols={{ base: 1, sm: 3 }}>
          <MeasureField name="length" label="Length" units={dimUnits} />
          <MeasureField name="width" label="Width" units={dimUnits} />
          <MeasureField name="height" label="Height" units={dimUnits} />
        </FormGrid>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./shipping-BRm2DWT2.js`),[]));function S(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e,{title:`Shipping config`,children:[`Dependent async options (`,(0,h.jsx)(`code`,{children:`country → state → city`}),`) from the K8 async-resource cap — debounced, race-cancelled, cached, clear-downstream on parent change — plus the `,(0,h.jsx)(`code`,{children:`measure`}),` (value+unit) composite for weight and dimensions.`]}),(0,h.jsx)(d,{n:1,title:`Shipping config`,blurb:`country → state → city load from a (mock) server and clear downstream on change; weight and dimensions are value + unit measures.`,code:x,children:(0,h.jsx)(y,{})})]})}export{S as component};