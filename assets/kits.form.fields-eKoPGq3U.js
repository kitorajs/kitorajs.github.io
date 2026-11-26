import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{g as t,s as n}from"./kit-docs-BUovISd0.js";import{Bc as r,Cc as i,Ic as a}from"./index-B9ukmIN1.js";import{a as o,c as s,d as c,r as l,s as u,t as d}from"./field-options-CrzCnxI5.js";import{W as f,n as p}from"./messages-C_IMdr_-.js";import{A as m,E as h,c as g,h as _,r as v}from"./field-config-17kME8Vl.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./fields-CwxxBZgA.js";import{t as T}from"./option-select-C4aM4TMj.js";import{i as E}from"./overlay-DFPD70Ja.js";import{a as D,i as O,n as k,r as A,t as j}from"./fields-extra-C15csBPj.js";import{t as M}from"./tags-DBW_u_C9.js";import"./demos-Ds1NfSaA.js";var N=a(),P={text:``,num:0,password:``,textarea:``,select:``,radio:`free`,checkbox:!1,toggle:!0,slider:40,otp:``,combobox:``,tags:[]},F=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`},{value:`team`,label:`Team`}];function I(){let e=m({defaultValues:P});return(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,N.jsx)(g,{form:e,children:(0,N.jsxs)(c,{cols:{base:1,md:2},children:[(0,N.jsx)(y,{name:`text`,label:`Text`,placeholder:`Type…`}),(0,N.jsx)(x,{name:`num`,label:`Number`}),(0,N.jsx)(A,{name:`password`,label:`Password`}),(0,N.jsx)(C,{name:`select`,label:`Select`,options:F,placeholder:`Pick a plan`}),(0,N.jsx)(j,{name:`combobox`,label:`Combobox`,options:F,placeholder:`Search plan`}),(0,N.jsx)(k,{name:`otp`,label:`OTP`,length:6}),(0,N.jsx)(O,{name:`radio`,label:`Radio`,options:F}),(0,N.jsx)(D,{name:`slider`,label:`Slider`,min:0,max:100,span:{base:`full`,md:2}}),(0,N.jsx)(M,{name:`tags`,label:`Tags`,placeholder:`Add a tag…`,span:{base:`full`,md:2}}),(0,N.jsx)(S,{name:`textarea`,label:`Textarea`,rows:3,span:{base:`full`,md:2}}),(0,N.jsx)(w,{name:`checkbox`,label:`Checkbox`}),(0,N.jsx)(b,{name:`toggle`,label:`Switch`})]})}),(0,N.jsx)(L,{form:e})]})}function L({form:e}){let t=_(e,e=>e.serialize(),f);return(0,N.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,N.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,N.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var R=`import { CheckboxField, ComboboxField, FormGrid, NumberField, OTPField, PasswordField, RadioGroupField, SelectField, SliderField, SwitchField, TagsField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type AllFields = {
  text: string; num: number; password: string; textarea: string; select: string; radio: string
  checkbox: boolean; toggle: boolean; slider: number; otp: string; combobox: string; tags: string[]
}

const defaultValues: AllFields = {
  text: "", num: 0, password: "", textarea: "", select: "", radio: "free",
  checkbox: false, toggle: true, slider: 40, otp: "", combobox: "", tags: [],
}
const plans = [{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }, { value: "team", label: "Team" }]

// Every field shares one FieldShell (label · required · description · error ·
// validating · disabled — the 8 states) + a11y wiring + grid span. Same API:
export function FieldGallery() {
  const form = useForm<AllFields>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <FormGrid cols={{ base: 1, md: 2 }}>
          <TextField name="text" label="Text" placeholder="Type…" />
          <NumberField name="num" label="Number" />
          <PasswordField name="password" label="Password" />
          <SelectField name="select" label="Select" options={plans} placeholder="Pick a plan" />
          <ComboboxField name="combobox" label="Combobox" options={plans} placeholder="Search plan" />
          <OTPField name="otp" label="OTP" length={6} />
          <RadioGroupField name="radio" label="Radio" options={plans} />
          <SliderField name="slider" label="Slider" min={0} max={100} span={{ base: "full", md: 2 }} />
          <TagsField name="tags" label="Tags" placeholder="Add a tag…" span={{ base: "full", md: 2 }} />
          <TextareaField name="textarea" label="Textarea" rows={3} span={{ base: "full", md: 2 }} />
          <CheckboxField name="checkbox" label="Checkbox" />
          <SwitchField name="toggle" label="Switch" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./fields-CMQ2wRA1.js`),[]));var z=e(r(),1),B=[`TypeScript`,`Go`,`Rust`,`Python`,`Kotlin`,`Swift`,`Elixir`,`Ruby`].map(e=>({value:e.toLowerCase(),label:e}));function V({name:e,label:t}){let n=p(),[r,i]=(0,z.useState)(!1),a=h(e,d({label:t,required:!0},`select`,{options:B})),c=r?B.filter(e=>[`typescript`,`go`,`rust`,`kotlin`,`swift`].includes(e.value)):B;return(0,N.jsx)(l,{hidden:!a.active,readOnly:a.readOnly,htmlFor:a.id,error:a.error,label:t,description:`Pick the language the service is written in.`,required:a.required,readOnlyContent:(0,N.jsx)(v,{value:c.find(e=>e.value===a.value)?.label}),submitAs:{name:a.name,value:a.value},children:(0,N.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,N.jsx)(T,{id:a.id,"aria-labelledby":a.labelledBy??s(a.id),"aria-describedby":u(a.id,a.error,`Pick the language the service is written in.`),options:c,value:a.value,onChange:e=>a.setValue(e),placeholder:n.t(`picker.choose`),emptyText:n.t(`picker.noResults`),invalid:!!a.error,onFocus:a.onFocus,onBlur:a.onBlur,className:`h-7 w-full text-[13px]`}),(0,N.jsxs)(`label`,{className:`flex shrink-0 items-center gap-1 text-xs text-muted-foreground`,children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>i(e.target.checked)}),`Statically typed`]}),(0,N.jsx)(o,{count:c.length})]})})}function H(){return(0,N.jsx)(E,{children:(0,N.jsx)(g,{form:m({defaultValues:{language:``}}),className:`grid w-full max-w-sm gap-3`,children:(0,N.jsx)(V,{name:`language`,label:`Language`})})})}var U=`import { useState } from "react"
import { describedBy, FieldShell, fieldOptions, labelIdOf, OptionSelect, OverlayBoundary, ReadOnlyValue, ResultCount, type SelectOption } from "@kitora/form/fields"
import { Form, useField, useForm, useMessages } from "@kitora/form/react"

const LANGUAGES: SelectOption[] = ["TypeScript", "Go", "Rust", "Python", "Kotlin", "Swift", "Elixir", "Ruby"].map((label) => ({ value: label.toLowerCase(), label }))

/**
 * A field of your own from the pieces \`SelectField\` is built from: \`useField\` (value, errors, ids), \`FieldShell\` (label, description, error,
 * the read-only view, posting), \`OptionSelect\` named by the shell's label (\`labelIdOf\`: its trigger is not a labelable element), and
 * \`ResultCount\`, the visually hidden "4 results" a filtered list speaks. \`OverlayBoundary\` gives anything the field opens the overlay
 * kit's provider when the page has none.
 */
function LanguageField({ name, label }: { name: string; label: string }) {
  const msg = useMessages()
  const [onlyTyped, setOnlyTyped] = useState(false)
  const f = useField<string>(name, fieldOptions({ label, required: true }, "select", { options: LANGUAGES }))
  const options = onlyTyped ? LANGUAGES.filter((o) => ["typescript", "go", "rust", "kotlin", "swift"].includes(o.value)) : LANGUAGES
  return (
    <FieldShell hidden={!f.active} readOnly={f.readOnly} htmlFor={f.id} error={f.error} label={label} description="Pick the language the service is written in." required={f.required} readOnlyContent={<ReadOnlyValue value={options.find((o) => o.value === f.value)?.label} />} submitAs={{ name: f.name, value: f.value }}>
      <div className="flex items-center gap-2">
        <OptionSelect
          id={f.id}
          aria-labelledby={f.labelledBy ?? labelIdOf(f.id)}
          aria-describedby={describedBy(f.id, f.error, "Pick the language the service is written in.")}
          options={options}
          value={f.value}
          onChange={(v) => f.setValue(v)}
          placeholder={msg.t("picker.choose")}
          emptyText={msg.t("picker.noResults")}
          invalid={!!f.error}
          onFocus={f.onFocus}
          onBlur={f.onBlur}
          className="h-7 w-full text-[13px]"
        />
        <label className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
          <input type="checkbox" checked={onlyTyped} onChange={(e) => setOnlyTyped(e.target.checked)} />
          Statically typed
        </label>
        <ResultCount count={options.length} />
      </div>
    </FieldShell>
  )
}

export function ComposeField() {
  const form = useForm<{ language: string }>({ defaultValues: { language: "" } })
  return (
    <OverlayBoundary>
      <Form form={form} className="grid w-full max-w-sm gap-3">
        <LanguageField name="language" label="Language" />
      </Form>
    </OverlayBoundary>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>i(()=>import(`./compose-field-CxQDWf0L.js`),[]));function W(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(n,{title:`Field gallery`,children:[`Every styled field — all on the same `,(0,N.jsx)(`code`,{children:`FieldShell`}),` (label/required/error/validating = the 8 states), a11y wiring, and layout span. Built on the repo's `,(0,N.jsx)(`code`,{children:`ui/*`}),` components, which render `,(0,N.jsx)(`code`,{children:`@kitora/primitives`}),`.`]}),(0,N.jsx)(t,{code:R,children:(0,N.jsx)(I,{})}),(0,N.jsxs)(n,{title:`A field of your own`,children:[`The pieces `,(0,N.jsx)(`code`,{children:`SelectField`}),` is built from: `,(0,N.jsx)(`code`,{children:`useField`}),`, `,(0,N.jsx)(`code`,{children:`FieldShell`}),`, `,(0,N.jsx)(`code`,{children:`OptionSelect`}),` named through `,(0,N.jsx)(`code`,{children:`labelIdOf`}),`,`,` `,(0,N.jsx)(`code`,{children:`ResultCount`}),` for the spoken count, inside an `,(0,N.jsx)(`code`,{children:`OverlayBoundary`}),`.`]}),(0,N.jsx)(t,{code:U,children:(0,N.jsx)(H,{})})]})}export{W as component};