import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{A as a,c as o,t as s}from"./field-config-53O_jYuu.js";import{a as c,r as l,t as u}from"./fields-DyVcPE0c.js";import{t as d}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var f=i(),p={name:``,email:``};function m({placement:e}){let t=a({defaultValues:p});return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:[`labelPlacement="`,e,`"`,e===`top`?` (default)`:``]}),(0,f.jsx)(o,{form:t,children:(0,f.jsxs)(s,{labelPlacement:e,className:`flex flex-col gap-3`,children:[(0,f.jsx)(c,{name:`name`,label:`Name`}),(0,f.jsx)(c,{name:`email`,label:`Email`,type:`email`})]})})]})}function h(){return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-8 sm:grid-cols-2`,children:[(0,f.jsx)(m,{placement:`top`}),(0,f.jsx)(m,{placement:`left`})]})}var g=`import { FieldConfigProvider, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Contact = { name: string; email: string }
const defaultValues: Contact = { name: "", email: "" }

function PlacementColumn({ placement }: { placement: "top" | "left" }) {
  const form = useForm<Contact>({ defaultValues })
  return (
    <div>
      <div className="mb-3 text-xs font-medium text-muted-foreground">labelPlacement="{placement}"{placement === "top" ? " (default)" : ""}</div>
      <Form form={form}>
        {/* "top" (default) or "left"; a field can still override via <FieldShell labelPlacement> */}
        <FieldConfigProvider labelPlacement={placement} className="flex flex-col gap-3">
          <TextField name="name" label="Name" />
          <TextField name="email" label="Email" type="email" />
        </FieldConfigProvider>
      </Form>
    </div>
  )
}

export function ContactForm() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <PlacementColumn placement="top" />
      <PlacementColumn placement="left" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./placement-CFX6tQcD.js`),[]));var _={name:``,plan:`free`},v=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`}];function y({density:e}){let t=a({defaultValues:_});return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:[`density="`,e,`"`]}),(0,f.jsx)(o,{form:t,children:(0,f.jsxs)(s,{density:e,className:`flex flex-col gap-3`,children:[(0,f.jsx)(c,{name:`name`,label:`Name`}),(0,f.jsx)(l,{name:`plan`,label:`Plan`,options:v})]})})]})}function b(){return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-8 sm:grid-cols-3`,children:[(0,f.jsx)(y,{density:`sm`}),(0,f.jsx)(y,{density:`md`}),(0,f.jsx)(y,{density:`lg`})]})}var x=`import { FieldConfigProvider, SelectField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Account = { name: string; plan: string }
type Density = "sm" | "md" | "lg"
const defaultValues: Account = { name: "", plan: "free" }
const plans = [{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }]

function DensityColumn({ density }: { density: Density }) {
  const form = useForm<Account>({ defaultValues })
  return (
    <div>
      <div className="mb-3 text-xs font-medium text-muted-foreground">density="{density}"</div>
      <Form form={form}>
        {/* "sm" | "md" | "lg": shell spacing + label size */}
        <FieldConfigProvider density={density} className="flex flex-col gap-3">
          <TextField name="name" label="Name" />
          <SelectField name="plan" label="Plan" options={plans} />
        </FieldConfigProvider>
      </Form>
    </div>
  )
}

export function CompactAccountForm() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <DensityColumn density="sm" />
      <DensityColumn density="md" />
      <DensityColumn density="lg" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>n(()=>import(`./density-Cpzln2nQ.js`),[]));var S={name:``,city:``};function C(){return(0,f.jsx)(o,{form:a({defaultValues:S}),children:(0,f.jsxs)(s,{dir:`rtl`,labelPlacement:`left`,className:`flex flex-col gap-3 rounded-md border p-4`,children:[(0,f.jsx)(c,{name:`name`,label:`الاسم (Name)`}),(0,f.jsx)(c,{name:`city`,label:`المدينة (City)`})]})})}var w=`import { FieldConfigProvider, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Address = { name: string; city: string }
const defaultValues: Address = { name: "", city: "" }

export function ArabicAddressForm() {
  const form = useForm<Address>({ defaultValues })
  return (
    <Form form={form}>
      {/* dir is set on the wrapper → native RTL mirroring for all descendant fields */}
      <FieldConfigProvider dir="rtl" labelPlacement="left" className="flex flex-col gap-3 rounded-md border p-4">
        <TextField name="name" label="الاسم (Name)" />
        <TextField name="city" label="المدينة (City)" />
      </FieldConfigProvider>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./rtl-layout-Dz3MsHNf.js`),[]));var T={name:``,email:``};function E(){return(0,f.jsx)(o,{form:a({defaultValues:T}),children:(0,f.jsxs)(s,{className:`flex flex-col gap-3 rounded-md border p-4`,tokens:{"--primary":`oklch(0.62 0.19 150)`,"--ring":`oklch(0.62 0.19 150)`,"--radius":`1rem`},classNames:{label:`uppercase tracking-wide text-[11px]`},children:[(0,f.jsx)(c,{name:`name`,label:`Name`,placeholder:`Focus me — green ring + pill radius`}),(0,f.jsx)(c,{name:`email`,label:`Email`,type:`email`})]})})}var D=`import { FieldConfigProvider, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Contact = { name: string; email: string }
const defaultValues: Contact = { name: "", email: "" }

export function BrandedContactForm() {
  const form = useForm<Contact>({ defaultValues })
  return (
    <Form form={form}>
      <FieldConfigProvider
        className="flex flex-col gap-3 rounded-md border p-4"
        // CSS-var theming, scoped to this subtree (no global theme change)
        tokens={{ "--primary": "oklch(0.62 0.19 150)", "--ring": "oklch(0.62 0.19 150)", "--radius": "1rem" }}
        // per-slot overrides; slots: root · label · description · error · warning · control
        classNames={{ label: "uppercase tracking-wide text-[11px]" }}
      >
        <TextField name="name" label="Name" placeholder="Focus me — green ring + pill radius" />
        <TextField name="email" label="Email" type="email" />
      </FieldConfigProvider>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./theming-CfwH0bjA.js`),[]));var O=e(r(),1),k={name:`Ada Lovelace`,plan:`pro`,newsletter:!0},A=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`}];function j(){let e=a({defaultValues:k}),[t,n]=(0,O.useState)(!0);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,f.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),className:`inline-flex h-8 items-center self-start rounded-md border px-3 text-xs font-medium transition-colors hover:bg-muted`,children:t?`✎ Switch to edit`:`👁 Switch to view`}),(0,f.jsx)(o,{form:e,children:(0,f.jsxs)(s,{readOnly:t,className:`flex flex-col gap-3 rounded-md border p-4`,children:[(0,f.jsx)(c,{name:`name`,label:`Name`}),(0,f.jsx)(l,{name:`plan`,label:`Plan`,options:A}),(0,f.jsx)(u,{name:`newsletter`,label:`Newsletter`})]})})]})}var M=`import { useState } from "react"
import { CheckboxField, FieldConfigProvider, SelectField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Member = { name: string; plan: string; newsletter: boolean }
const defaultValues: Member = { name: "Ada Lovelace", plan: "pro", newsletter: true }
const plans = [{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }]

// B13 — render the whole form as static values (a detail view), no per-field
// rewrites. Stays in the a11y tree (readonly text, not disabled controls).
export function MemberDetail() {
  const form = useForm<Member>({ defaultValues })
  const [readOnly, setReadOnly] = useState(true) // e.g. !canEdit
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => setReadOnly((r) => !r)}
        className="inline-flex h-8 items-center self-start rounded-md border px-3 text-xs font-medium transition-colors hover:bg-muted"
      >
        {readOnly ? "✎ Switch to edit" : "👁 Switch to view"}
      </button>
      <Form form={form}>
        <FieldConfigProvider readOnly={readOnly} className="flex flex-col gap-3 rounded-md border p-4">
          <TextField name="name" label="Name" />{/* → "Ada Lovelace" */}
          <SelectField name="plan" label="Plan" options={plans} />{/* → the option label */}
          <CheckboxField name="newsletter" label="Newsletter" />{/* → "Yes" / "No" */}
        </FieldConfigProvider>
      </Form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>n(()=>import(`./readonly-DhFsoFoT.js`),[]));function N(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t,{title:`Layout & theming`,children:[`One `,(0,f.jsx)(`code`,{children:`<FieldConfigProvider>`}),` sets label placement, density, text direction, theming tokens (CSS vars), and per-slot className overrides for every field beneath it. Providers nest — children override only what they set. Four recipes:`]}),(0,f.jsx)(d,{n:1,title:`Label placement`,blurb:`top (label above) vs left (two-column grid). Set on the provider or override per-field.`,code:g,children:(0,f.jsx)(h,{})}),(0,f.jsx)(d,{n:2,title:`Density`,blurb:`sm / md / lg adjust shell spacing + label size — for compact tables vs roomy forms.`,code:x,children:(0,f.jsx)(b,{})}),(0,f.jsx)(d,{n:3,title:`RTL mirroring`,blurb:`dir=rtl on the wrapper mirrors the whole field group natively.`,code:w,children:(0,f.jsx)(C,{})}),(0,f.jsx)(d,{n:4,title:`Theming tokens + slot overrides`,blurb:`Override CSS vars (primary/ring/radius) locally + restyle individual slots — no global theme change.`,code:D,children:(0,f.jsx)(E,{})}),(0,f.jsx)(d,{n:5,title:`Read-only view mode (B13)`,blurb:`One readOnly flag renders every field as static text — the same form doubles as a detail view. Toggle it:`,code:M,children:(0,f.jsx)(j,{})})]})}export{N as component};