import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./slider-Dym-yu8K.js";import{t as r}from"./switch-CA6hUnoS.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as ee}from"./field-CyrZpl8n.js";import{n as p,r as m,t as h}from"./fieldset-DJHKDLI5.js";import{t as te}from"./form-I0-vq70A.js";import{t as g}from"./input-2rqm_FXH.js";import{L as ne}from"./time-jlVD_Pfs.js";import{n as _}from"./date-picker-B5u5tMYl.js";import{Bc as v,Cc as y,Ic as re,ti as b}from"./index-9y5uwRd3.js";import{t as x}from"./checkbox-C15B7P0U.js";import{n as ie,t as ae}from"./radio-group-CEsbl5Fc.js";import{c as oe,n as se,r as S,s as C,t as w}from"./field-options-BxYA8-No.js";import{n as T}from"./messages-BpgLhfTN.js";import{A as E,E as D,a as O,c as k,r as A}from"./field-config-62hz5rv-.js";import{t as j}from"./option-select-C6MxTzr_.js";var M=e({FieldBuildYourOwn:()=>R}),N=re();function P({name:e,label:t}){let n=D(e,w({label:t},`text`));return(0,N.jsx)(S,{hidden:!n.active,readOnly:n.readOnly,htmlFor:n.id,error:n.error,warning:n.warning,validating:n.validating,label:t,required:n.required,readOnlyContent:(0,N.jsx)(A,{value:n.value}),submitAs:{name:n.name,value:n.value,native:!0},children:(0,N.jsx)(g,{id:n.id,"aria-labelledby":n.labelledBy,...se({}),type:`text`,disabled:n.disabled,"aria-invalid":n.error?!0:void 0,"aria-describedby":C(n.id,n.error),name:n.name,value:n.value??``,onChange:e=>n.setValue(e.target.value),onBlur:n.onBlur,onFocus:n.onFocus})})}function F({name:e,label:t,options:n}){let r=T(),i=D(e,w({label:t},`select`,{options:n}));return(0,N.jsx)(S,{hidden:!i.active,readOnly:i.readOnly,htmlFor:i.id,error:i.error,warning:i.warning,validating:i.validating,label:t,required:i.required,readOnlyContent:(0,N.jsx)(A,{value:n.find(e=>e.value===i.value)?.label}),submitAs:{name:i.name,value:i.value},children:(0,N.jsx)(j,{id:i.id,"aria-labelledby":i.labelledBy??oe(i.id),"aria-describedby":C(i.id,i.error),options:n,value:i.value,onChange:e=>i.setValue(e),placeholder:r.t(`picker.choose`),emptyText:r.t(`picker.noResults`),disabled:i.disabled,invalid:!!i.error,onFocus:i.onFocus,onBlur:i.onBlur,className:`h-7 w-full text-[13px]`})})}function I({name:e,label:t}){let n=T(),{overlay:r}=O(),i=D(e,w({label:t},`date`)),a=typeof i.value==`string`&&ne(i.value)?i.value:null;return(0,N.jsx)(S,{hidden:!i.active,readOnly:i.readOnly,htmlFor:i.id,error:i.error,warning:i.warning,validating:i.validating,label:t,required:i.required,readOnlyContent:(0,N.jsx)(A,{value:a??void 0}),submitAs:{name:i.name,value:i.value},children:(0,N.jsx)(_.Root,{value:a,onChange:e=>{i.setValue(e??``),i.onBlur()},locale:n.locale,surface:r,confirm:!1,disabled:i.disabled,placeholder:n.t(`date.pick`),children:(0,N.jsx)(_.Surface,{name:t,title:t,trigger:(0,N.jsx)(_.Trigger,{variant:`button`,id:i.id,"aria-labelledby":i.labelledBy,"data-invalid":i.error?``:void 0,"aria-describedby":C(i.id,i.error),className:`h-7 w-full gap-2 rounded-[var(--dk-input-radius,calc(var(--radius)*0.75))] border border-input bg-transparent px-2 text-[13px] dark:bg-input/30`}),children:(0,N.jsx)(_.Calendar,{})})})})}var L=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`},{value:`team`,label:`Team`}];function R(){return(0,N.jsxs)(k,{form:E({defaultValues:{company:``,plan:``,start:``}}),className:`grid w-full max-w-sm gap-3`,children:[(0,N.jsx)(P,{name:`company`,label:`Company`}),(0,N.jsx)(F,{name:`plan`,label:`Plan`,options:L}),(0,N.jsx)(I,{name:`start`,label:`Start date`})]})}var z=e({FieldComposeSignUp:()=>V}),B=t(v(),1);function V(){let[e,t]=(0,B.useState)(null);return(0,N.jsxs)(te,{className:`w-full max-w-sm gap-4 rounded-md border border-border bg-card p-4`,onFormSubmit:e=>t(JSON.stringify(e)),children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(m,{children:`Create your account`}),(0,N.jsxs)(f,{name:`name`,children:[(0,N.jsx)(d,{children:`Name`}),(0,N.jsx)(g,{required:!0,autoComplete:`name`}),(0,N.jsx)(o,{match:`valueMissing`,children:`Tell us your name.`})]}),(0,N.jsxs)(f,{name:`email`,children:[(0,N.jsx)(d,{children:`Email`}),(0,N.jsx)(g,{type:`email`,required:!0,autoComplete:`email`}),(0,N.jsx)(o,{}),(0,N.jsx)(u,{children:`Used to sign in.`})]}),(0,N.jsxs)(f,{name:`terms`,children:[(0,N.jsxs)(d,{children:[(0,N.jsx)(x,{required:!0}),`I accept the terms`]}),(0,N.jsx)(o,{match:`valueMissing`,children:`You need to accept the terms.`})]})]}),(0,N.jsx)(b,{type:`submit`,children:`Create account`}),e?(0,N.jsxs)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:[`Submitted `,e]}):null]})}var ce=e({FieldControls:()=>H});function H(){return(0,N.jsxs)(`div`,{className:`grid w-full max-w-sm gap-5`,children:[(0,N.jsxs)(f,{name:`terms`,children:[(0,N.jsxs)(d,{children:[(0,N.jsx)(x,{}),`Accept the terms`]}),(0,N.jsx)(u,{children:`Required to create the account.`})]}),(0,N.jsx)(f,{name:`alerts`,children:(0,N.jsxs)(d,{children:[(0,N.jsx)(r,{}),`Email alerts`]})}),(0,N.jsxs)(f,{name:`volume`,children:[(0,N.jsx)(d,{children:`Volume`}),(0,N.jsx)(n,{defaultValue:40,"aria-label":`Volume value`}),(0,N.jsx)(u,{children:`From 0 to 100.`})]}),(0,N.jsx)(f,{name:`plan`,children:(0,N.jsxs)(h,{render:(0,N.jsx)(ae,{defaultValue:`pro`}),children:[(0,N.jsx)(m,{children:`Plan`}),[[`free`,`Free`],[`pro`,`Pro`]].map(([e,t])=>(0,N.jsxs)(l,{children:[(0,N.jsx)(ie,{value:e}),(0,N.jsx)(d,{children:t})]},e))]})})]})}var U=e({FieldDefault:()=>W});function W(){return(0,N.jsxs)(f,{name:`email`,className:`max-w-sm`,children:[(0,N.jsx)(d,{children:`Email`}),(0,N.jsx)(g,{type:`email`,placeholder:`ada@example.com`}),(0,N.jsx)(u,{children:`We only use it to send the receipt.`})]})}var G=e({FieldGroups:()=>le});function le(){return(0,N.jsx)(`form`,{className:`w-full max-w-sm`,onSubmit:e=>e.preventDefault(),children:(0,N.jsxs)(i,{children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(m,{children:`Account`}),(0,N.jsx)(p,{children:`Used to sign in and for receipts.`}),(0,N.jsxs)(i,{children:[(0,N.jsxs)(f,{name:`email`,children:[(0,N.jsx)(d,{required:!0,children:`Email`}),(0,N.jsx)(g,{type:`email`,required:!0,autoComplete:`email`})]}),(0,N.jsxs)(f,{name:`password`,children:[(0,N.jsx)(d,{required:!0,children:`Password`}),(0,N.jsx)(g,{type:`password`,required:!0,autoComplete:`new-password`}),(0,N.jsx)(u,{children:`At least 12 characters.`})]})]})]}),(0,N.jsx)(a,{children:`Optional`}),(0,N.jsx)(f,{name:`newsletter`,children:(0,N.jsxs)(d,{className:`w-full items-start rounded-lg border p-3 font-normal has-data-checked:border-primary has-data-checked:bg-primary/5`,children:[(0,N.jsx)(x,{className:`mt-0.5`}),(0,N.jsxs)(c,{children:[(0,N.jsx)(s,{children:`Monthly newsletter`}),(0,N.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`One email a month with product news.`})]})]})}),(0,N.jsx)(b,{type:`submit`,children:`Create account`})]})})}var ue=e({FieldHorizontalAndResponsive:()=>de});function de(){return(0,N.jsxs)(i,{className:`max-w-xl`,children:[(0,N.jsxs)(f,{orientation:`horizontal`,name:`marketing`,children:[(0,N.jsxs)(c,{children:[(0,N.jsx)(d,{children:`Marketing emails`}),(0,N.jsx)(u,{children:`News about features and offers.`})]}),(0,N.jsx)(r,{defaultChecked:!0})]}),(0,N.jsxs)(f,{orientation:`responsive`,name:`display-name`,children:[(0,N.jsxs)(c,{children:[(0,N.jsx)(d,{required:!0,children:`Display name`}),(0,N.jsx)(u,{children:`Shown on your profile and in comments.`})]}),(0,N.jsx)(g,{required:!0,defaultValue:`Ada Lovelace`,className:`@md/field-group:max-w-56`})]}),(0,N.jsxs)(f,{orientation:`responsive`,name:`website`,children:[(0,N.jsx)(d,{children:`Website`}),(0,N.jsx)(g,{type:`url`,placeholder:`https://`,className:`@md/field-group:max-w-56`})]})]})}var fe=e({FieldState:()=>pe});function pe(){return(0,N.jsxs)(f,{name:`code`,validationMode:`onChange`,validate:e=>/^\d{4}$/.test(String(e))?null:`Enter four digits.`,className:`max-w-sm rounded-lg border border-border p-3 data-focused:border-ring data-invalid:border-destructive data-valid:border-emerald-600`,children:[(0,N.jsx)(d,{children:`Four-digit code`}),(0,N.jsx)(g,{inputMode:`numeric`}),(0,N.jsx)(ee,{children:({validity:e,error:t})=>(0,N.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:e.valid===null?`Not checked yet.`:e.valid?`Looks good.`:t})}),(0,N.jsx)(u,{"aria-live":`polite`,render:(e,t)=>{let n=[`valid`,`touched`,`dirty`,`filled`,`focused`].filter(e=>t[e]===!0),r=[...t.valid===!1?[`invalid`]:[],...n];return(0,N.jsxs)(`p`,{...e,children:[`State: `,r.length===0?`nothing yet`:r.join(`, `)]})}})]})}var me=e({FieldValidation:()=>he});function he(){return(0,N.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,N.jsxs)(f,{name:`email`,validationMode:`onBlur`,children:[(0,N.jsx)(d,{children:`Email`}),(0,N.jsx)(g,{type:`email`,required:!0,placeholder:`ada@example.com`}),(0,N.jsx)(o,{match:`valueMissing`,children:`Enter your email.`}),(0,N.jsx)(o,{match:`typeMismatch`,children:`That does not look like an email.`}),(0,N.jsx)(u,{children:`Checked when you leave the field.`})]}),(0,N.jsxs)(f,{name:`username`,validationMode:`onChange`,validationDebounceTime:300,validate:e=>{let t=String(e);return t.length<3?`Use at least 3 characters.`:t===`admin`?`That name is taken.`:null},children:[(0,N.jsx)(d,{children:`Username`}),(0,N.jsx)(g,{defaultValue:`ad`}),(0,N.jsx)(o,{}),(0,N.jsx)(u,{children:`Checked as you type, 300 ms after the last key. Try "admin".`})]})]})}var K=`import { DatePicker } from "@kitora/pickers/ui"
import { parseIsoDate, type IsoDate } from "@kitora/pickers/core"
import { Input } from "@kitora/ui/input"
import { describedBy, FieldShell, fieldOptions, labelIdOf, nativeAttrs, OptionSelect, ReadOnlyValue, useFieldConfig, type SelectOption } from "@kitora/form/fields"
import { Form, useField, useForm, useMessages } from "@kitora/form/react"

/** A text field: the form's state (\`useField\`), the shared shell (label, description, error, read-only view, posting) and ui's \`Input\`. */
function MyTextField({ name, label }: { name: string; label: string }) {
  const f = useField<string>(name, fieldOptions({ label }, "text"))
  return (
    <FieldShell hidden={!f.active} readOnly={f.readOnly} htmlFor={f.id} error={f.error} warning={f.warning} validating={f.validating} label={label} required={f.required} readOnlyContent={<ReadOnlyValue value={f.value} />} submitAs={{ name: f.name, value: f.value, native: true }}>
      <Input
        id={f.id}
        aria-labelledby={f.labelledBy}
        {...nativeAttrs({})}
        type="text"
        disabled={f.disabled}
        aria-invalid={f.error ? true : undefined}
        aria-describedby={describedBy(f.id, f.error)}
        name={f.name}
        value={f.value ?? ""}
        onChange={(e) => f.setValue(e.target.value)}
        onBlur={f.onBlur}
        onFocus={f.onFocus}
      />
    </FieldShell>
  )
}

/** A select field: the same shell around the form kit's \`OptionSelect\`, named by the shell's label (\`labelIdOf\`), since its trigger is not a labelable element. */
function MySelectField({ name, label, options }: { name: string; label: string; options: readonly SelectOption[] }) {
  const msg = useMessages()
  const f = useField<string>(name, fieldOptions({ label }, "select", { options }))
  return (
    <FieldShell hidden={!f.active} readOnly={f.readOnly} htmlFor={f.id} error={f.error} warning={f.warning} validating={f.validating} label={label} required={f.required} readOnlyContent={<ReadOnlyValue value={options.find((o) => o.value === f.value)?.label} />} submitAs={{ name: f.name, value: f.value }}>
      <OptionSelect
        id={f.id}
        aria-labelledby={f.labelledBy ?? labelIdOf(f.id)}
        aria-describedby={describedBy(f.id, f.error)}
        options={options}
        value={f.value}
        onChange={(v) => f.setValue(v)}
        placeholder={msg.t("picker.choose")}
        emptyText={msg.t("picker.noResults")}
        disabled={f.disabled}
        invalid={!!f.error}
        onFocus={f.onFocus}
        onBlur={f.onBlur}
        className="h-7 w-full text-[13px]"
      />
    </FieldShell>
  )
}

/** A date field: the same shell around the pickers' \`DatePicker\` parts, opened from a button trigger. */
function MyDateField({ name, label }: { name: string; label: string }) {
  const msg = useMessages()
  const { overlay } = useFieldConfig()
  const f = useField<string>(name, fieldOptions({ label }, "date"))
  const iso: IsoDate | null = typeof f.value === "string" && parseIsoDate(f.value) ? f.value : null
  return (
    <FieldShell hidden={!f.active} readOnly={f.readOnly} htmlFor={f.id} error={f.error} warning={f.warning} validating={f.validating} label={label} required={f.required} readOnlyContent={<ReadOnlyValue value={iso ?? undefined} />} submitAs={{ name: f.name, value: f.value }}>
      <DatePicker.Root
        value={iso}
        onChange={(d) => {
          f.setValue(d ?? "")
          f.onBlur()
        }}
        locale={msg.locale}
        surface={overlay}
        confirm={false}
        disabled={f.disabled}
        placeholder={msg.t("date.pick")}
      >
        <DatePicker.Surface
          name={label}
          title={label}
          trigger={<DatePicker.Trigger variant="button" id={f.id} aria-labelledby={f.labelledBy} data-invalid={f.error ? "" : undefined} aria-describedby={describedBy(f.id, f.error)} className="h-7 w-full gap-2 rounded-[var(--dk-input-radius,calc(var(--radius)*0.75))] border border-input bg-transparent px-2 text-[13px] dark:bg-input/30" />}
        >
          <DatePicker.Calendar />
        </DatePicker.Surface>
      </DatePicker.Root>
    </FieldShell>
  )
}

const PLANS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

/** A text, a select and a date field of your own, from the form kit's public pieces (\`useField\`, \`FieldShell\`, \`OptionSelect\`, \`labelIdOf\`, \`describedBy\`) and the pickers' \`DatePicker\` parts. */
export function FieldBuildYourOwn() {
  const form = useForm<{ company: string; plan: string; start: string }>({ defaultValues: { company: "", plan: "", start: "" } })
  return (
    <Form form={form} className="grid w-full max-w-sm gap-3">
      <MyTextField name="company" label="Company" />
      <MySelectField name="plan" label="Plan" options={PLANS} />
      <MyDateField name="start" label="Start date" />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>y(()=>import(`./build-your-own-C2LuK8xQ.js`),[]));var q=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { Form } from "@kitora/ui/form"
import { Input } from "@kitora/ui/input"

export function FieldComposeSignUp() {
  const [submitted, setSubmitted] = useState<string | null>(null)
  return (
    <Form
      className="w-full max-w-sm gap-4 rounded-md border border-border bg-card p-4"
      onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}
    >
      <Fieldset>
        <FieldsetLegend>Create your account</FieldsetLegend>
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input required autoComplete="name" />
          <FieldError match="valueMissing">Tell us your name.</FieldError>
        </Field>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <Input type="email" required autoComplete="email" />
          <FieldError />
          <FieldDescription>Used to sign in.</FieldDescription>
        </Field>
        <Field name="terms">
          <FieldLabel>
            <Checkbox required />
            I accept the terms
          </FieldLabel>
          <FieldError match="valueMissing">You need to accept the terms.</FieldError>
        </Field>
      </Fieldset>
      <Button type="submit">Create account</Button>
      {submitted ? (
        <p className="text-xs text-muted-foreground" role="status">
          Submitted {submitted}
        </p>
      ) : null}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>y(()=>import(`./compose-DMux1RPN.js`),[]));var J=`import { Checkbox } from "@kitora/ui/checkbox"
import { Field, FieldDescription, FieldItem, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"
import { Slider } from "@kitora/ui/slider"
import { Switch } from "@kitora/ui/switch"

/** A Field wires any of the styled controls the same way: the label names it and presses it, the description is announced with it. */
export function FieldControls() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <Field name="terms">
        <FieldLabel>
          <Checkbox />
          Accept the terms
        </FieldLabel>
        <FieldDescription>Required to create the account.</FieldDescription>
      </Field>
      <Field name="alerts">
        <FieldLabel>
          <Switch />
          Email alerts
        </FieldLabel>
      </Field>
      <Field name="volume">
        <FieldLabel>Volume</FieldLabel>
        <Slider defaultValue={40} aria-label="Volume value" />
        <FieldDescription>From 0 to 100.</FieldDescription>
      </Field>
      <Field name="plan">
        <Fieldset render={<RadioGroup defaultValue="pro" />}>
          <FieldsetLegend>Plan</FieldsetLegend>
          {[
            ["free", "Free"],
            ["pro", "Pro"],
          ].map(([value, label]) => (
            <FieldItem key={value}>
              <RadioGroupItem value={value} />
              <FieldLabel>{label}</FieldLabel>
            </FieldItem>
          ))}
        </Fieldset>
      </Field>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>y(()=>import(`./controls-DdRzoBhw.js`),[]));var Y=`import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"

export function FieldDefault() {
  return (
    <Field name="email" className="max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="ada@example.com" />
      <FieldDescription>We only use it to send the receipt.</FieldDescription>
    </Field>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>y(()=>import(`./default-CTjCAAEu.js`),[]));var X=`import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldTitle } from "@kitora/ui/field"
import { Fieldset, FieldsetDescription, FieldsetLegend } from "@kitora/ui/fieldset"
import { Input } from "@kitora/ui/input"

/** FieldGroup stacks fields and fieldsets, FieldSeparator divides them (with optional text), FieldTitle heads a choice card and \`required\` marks a label. */
export function FieldGroups() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Fieldset>
          <FieldsetLegend>Account</FieldsetLegend>
          <FieldsetDescription>Used to sign in and for receipts.</FieldsetDescription>
          <FieldGroup>
            <Field name="email">
              <FieldLabel required>Email</FieldLabel>
              <Input type="email" required autoComplete="email" />
            </Field>
            <Field name="password">
              <FieldLabel required>Password</FieldLabel>
              <Input type="password" required autoComplete="new-password" />
              <FieldDescription>At least 12 characters.</FieldDescription>
            </Field>
          </FieldGroup>
        </Fieldset>
        <FieldSeparator>Optional</FieldSeparator>
        <Field name="newsletter">
          <FieldLabel className="w-full items-start rounded-lg border p-3 font-normal has-data-checked:border-primary has-data-checked:bg-primary/5">
            <Checkbox className="mt-0.5" />
            <FieldContent>
              <FieldTitle>Monthly newsletter</FieldTitle>
              <span className="text-xs text-muted-foreground">One email a month with product news.</span>
            </FieldContent>
          </FieldLabel>
        </Field>
        <Button type="submit">Create account</Button>
      </FieldGroup>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>y(()=>import(`./groups-BDOKvs4s.js`),[]));var Z=`import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"
import { Switch } from "@kitora/ui/switch"

/** \`orientation="horizontal"\` puts the label beside the control; \`responsive\` stacks them until the FieldGroup is wide enough, then lines them up. Resize the panel to see it. */
export function FieldHorizontalAndResponsive() {
  return (
    <FieldGroup className="max-w-xl">
      <Field orientation="horizontal" name="marketing">
        <FieldContent>
          <FieldLabel>Marketing emails</FieldLabel>
          <FieldDescription>News about features and offers.</FieldDescription>
        </FieldContent>
        <Switch defaultChecked />
      </Field>
      <Field orientation="responsive" name="display-name">
        <FieldContent>
          <FieldLabel required>Display name</FieldLabel>
          <FieldDescription>Shown on your profile and in comments.</FieldDescription>
        </FieldContent>
        <Input required defaultValue="Ada Lovelace" className="@md/field-group:max-w-56" />
      </Field>
      <Field orientation="responsive" name="website">
        <FieldLabel>Website</FieldLabel>
        <Input type="url" placeholder="https://" className="@md/field-group:max-w-56" />
      </Field>
    </FieldGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>y(()=>import(`./horizontal-and-responsive-uaE1OpKJ.js`),[]));var Q=`import { Field, FieldDescription, FieldLabel, FieldValidity } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"

/** The field writes its state as data attributes on every part, so any element can style itself from it; \`className\`, \`style\` and \`render\` also get the state. */
export function FieldState() {
  return (
    <Field
      name="code"
      validationMode="onChange"
      validate={(value) => (/^\\d{4}$/.test(String(value)) ? null : "Enter four digits.")}
      className="max-w-sm rounded-lg border border-border p-3 data-focused:border-ring data-invalid:border-destructive data-valid:border-emerald-600"
    >
      <FieldLabel>Four-digit code</FieldLabel>
      <Input inputMode="numeric" />
      <FieldValidity>
        {({ validity, error }) => (
          <p className="text-xs text-muted-foreground">{validity.valid === null ? "Not checked yet." : validity.valid ? "Looks good." : error}</p>
        )}
      </FieldValidity>
      <FieldDescription
        aria-live="polite"
        render={(props, state) => {
          const on = (["valid", "touched", "dirty", "filled", "focused"] as const).filter((flag) => state[flag] === true)
          const flags = [...(state.valid === false ? ["invalid"] : []), ...on]
          return <p {...props}>State: {flags.length === 0 ? "nothing yet" : flags.join(", ")}</p>
        }}
      />
    </Field>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>y(()=>import(`./state-DyLlWiWc.js`),[]));var $=`import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"

/** The browser's constraints (\`required\`, \`type\`) validate first; \`validate\` adds the rules the browser cannot know. */
export function FieldValidation() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Field name="email" validationMode="onBlur">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" required placeholder="ada@example.com" />
        <FieldError match="valueMissing">Enter your email.</FieldError>
        <FieldError match="typeMismatch">That does not look like an email.</FieldError>
        <FieldDescription>Checked when you leave the field.</FieldDescription>
      </Field>
      <Field
        name="username"
        validationMode="onChange"
        validationDebounceTime={300}
        validate={(value) => {
          const name = String(value)
          if (name.length < 3) return "Use at least 3 characters."
          if (name === "admin") return "That name is taken."
          return null
        }}
      >
        <FieldLabel>Username</FieldLabel>
        <Input defaultValue="ad" />
        <FieldError />
        <FieldDescription>Checked as you type, 300 ms after the last key. Try &quot;admin&quot;.</FieldDescription>
      </Field>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>y(()=>import(`./validation-DheQq8hT.js`),[]));var ge={"./demos/field/build-your-own.tsx":M,"./demos/field/compose.tsx":z,"./demos/field/controls.tsx":ce,"./demos/field/default.tsx":U,"./demos/field/groups.tsx":G,"./demos/field/horizontal-and-responsive.tsx":ue,"./demos/field/state.tsx":fe,"./demos/field/validation.tsx":me},_e={"./demos/field/build-your-own.tsx":K,"./demos/field/compose.tsx":q,"./demos/field/controls.tsx":J,"./demos/field/default.tsx":Y,"./demos/field/groups.tsx":X,"./demos/field/horizontal-and-responsive.tsx":Z,"./demos/field/state.tsx":Q,"./demos/field/validation.tsx":$};export{ge as modules,_e as sources};