import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-Clz4Lth_.js";import{t as r}from"./input-CZeZUmOc.js";import{d as i,f as a,r as o,s,t as c}from"./field-DApIfONr.js";import{a as l,i as u,n as d,r as f,t as p}from"./fieldset-ClEYT9t-.js";import{t as m}from"./input-C8M4VLUF.js";import{Ao as h,Bc as g,Cc as _,Ic as v,ti as y}from"./index-q72zUtm9.js";import{a as b,i as x,n as S,o as C,t as w}from"./card-WiouR7Ep.js";import{t as T}from"./separator-DbMx24vO.js";import{n as E,t as D}from"./radio-group-CHn8JUVh.js";var O=e({FieldsetBuildYourOwn:()=>j}),k=v();function A({name:e,label:t,defaultValue:n}){return(0,k.jsxs)(i,{name:e,"data-orientation":`vertical`,className:`grid gap-1.5 data-disabled:opacity-60`,children:[(0,k.jsx)(a,{className:`text-sm font-medium`,children:t}),(0,k.jsx)(r,{defaultValue:n,className:`h-8 rounded-md border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed`})]})}function j({disabled:e=!1}){let t=h();return(0,k.jsxs)(l,{disabled:e,"aria-describedby":t,className:`flex w-full max-w-sm flex-col gap-3 data-disabled:opacity-60`,children:[(0,k.jsx)(u,{className:`text-sm font-medium`,children:`Billing details`}),(0,k.jsx)(`p`,{id:t,className:`-mt-1.5 text-xs text-muted-foreground`,children:`Shown on every invoice.`}),(0,k.jsx)(A,{name:`company`,label:`Company`,defaultValue:`Analog Ltd`}),(0,k.jsx)(A,{name:`vat`,label:`VAT number`,defaultValue:`GB123456789`})]})}var M=e({FieldsetComposeProfile:()=>N});function N(){return(0,k.jsxs)(w,{className:`w-full max-w-md`,children:[(0,k.jsx)(b,{children:(0,k.jsx)(C,{children:`Profile`})}),(0,k.jsxs)(S,{className:`grid gap-4`,children:[(0,k.jsxs)(p,{children:[(0,k.jsx)(f,{children:`Public`}),(0,k.jsxs)(c,{name:`display`,children:[(0,k.jsx)(s,{children:`Display name`}),(0,k.jsx)(m,{defaultValue:`Ada Lovelace`})]})]}),(0,k.jsx)(T,{}),(0,k.jsxs)(p,{children:[(0,k.jsx)(f,{children:`Private`}),(0,k.jsxs)(c,{name:`phone`,children:[(0,k.jsx)(s,{children:`Phone`}),(0,k.jsx)(m,{type:`tel`,placeholder:`+44 20 7946 0000`}),(0,k.jsx)(o,{children:`Only our support team sees it.`})]})]})]}),(0,k.jsx)(x,{children:(0,k.jsx)(y,{size:`sm`,children:`Save changes`})})]})}var P=e({FieldsetDefault:()=>F});function F(){return(0,k.jsxs)(p,{className:`max-w-sm`,children:[(0,k.jsx)(f,{children:`Shipping address`}),(0,k.jsxs)(c,{name:`street`,children:[(0,k.jsx)(s,{children:`Street`}),(0,k.jsx)(m,{autoComplete:`address-line1`})]}),(0,k.jsxs)(c,{name:`city`,children:[(0,k.jsx)(s,{children:`City`}),(0,k.jsx)(m,{autoComplete:`address-level2`})]})]})}var I=e({FieldsetDescriptionDemo:()=>L});function L(){return(0,k.jsxs)(p,{className:`max-w-sm`,render:(0,k.jsx)(D,{defaultValue:`standard`}),children:[(0,k.jsx)(f,{children:`Delivery`}),(0,k.jsx)(d,{children:`Orders placed before 2 pm ship the same day.`}),(0,k.jsx)(E,{value:`standard`,label:`Standard`,description:`3 to 5 working days, free.`}),(0,k.jsx)(E,{value:`express`,label:`Express`,description:`Next working day, 9.90.`})]})}var R=e({FieldsetDisabled:()=>B}),z=t(g(),1);function B(){let[e,t]=(0,z.useState)(!0);return(0,k.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,k.jsx)(c,{children:(0,k.jsxs)(s,{children:[(0,k.jsx)(n,{checked:e,onCheckedChange:t}),`Lock the billing details`]})}),(0,k.jsxs)(p,{disabled:e,children:[(0,k.jsx)(f,{children:`Billing details`}),(0,k.jsxs)(c,{name:`company`,children:[(0,k.jsx)(s,{children:`Company`}),(0,k.jsx)(m,{defaultValue:`Analog Ltd`})]}),(0,k.jsxs)(c,{name:`vat`,children:[(0,k.jsx)(s,{children:`VAT number`}),(0,k.jsx)(m,{defaultValue:`GB123456789`})]})]})]})}var V=`import { Field, Fieldset, Input, useId } from "@kitora/primitives/react"

/** Your own text field: the primitives' \`Field.Root\`, \`Field.Label\` and \`Input\` (named by the field, disabled with the fieldset). */
function TextField({ name, label, defaultValue }: { name: string; label: string; defaultValue: string }) {
  return (
    <Field.Root name={name} data-orientation="vertical" className="grid gap-1.5 data-disabled:opacity-60">
      <Field.Label className="text-sm font-medium">{label}</Field.Label>
      <Input defaultValue={defaultValue} className="h-8 rounded-md border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed" />
    </Field.Root>
  )
}

/**
 * A fieldset built from the primitives' parts only: \`Fieldset.Root\` (a \`<fieldset>\` named by its legend, whose \`disabled\` reaches
 * every Field inside), \`Fieldset.Legend\`, a description of your own tied with \`aria-describedby\`, and two Fields.
 */
export function FieldsetBuildYourOwn({ disabled = false }: { disabled?: boolean }) {
  const descriptionId = useId()
  return (
    <Fieldset.Root disabled={disabled} aria-describedby={descriptionId} className="flex w-full max-w-sm flex-col gap-3 data-disabled:opacity-60">
      <Fieldset.Legend className="text-sm font-medium">Billing details</Fieldset.Legend>
      <p id={descriptionId} className="-mt-1.5 text-xs text-muted-foreground">
        Shown on every invoice.
      </p>
      <TextField name="company" label="Company" defaultValue="Analog Ltd" />
      <TextField name="vat" label="VAT number" defaultValue="GB123456789" />
    </Fieldset.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>_(()=>import(`./build-your-own-BNkzdpeE.js`),[]));var H=`import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { Input } from "@kitora/ui/input"
import { Separator } from "@kitora/ui/separator"

export function FieldsetComposeProfile() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Fieldset>
          <FieldsetLegend>Public</FieldsetLegend>
          <Field name="display">
            <FieldLabel>Display name</FieldLabel>
            <Input defaultValue="Ada Lovelace" />
          </Field>
        </Fieldset>
        <Separator />
        <Fieldset>
          <FieldsetLegend>Private</FieldsetLegend>
          <Field name="phone">
            <FieldLabel>Phone</FieldLabel>
            <Input type="tel" placeholder="+44 20 7946 0000" />
            <FieldDescription>Only our support team sees it.</FieldDescription>
          </Field>
        </Fieldset>
      </CardContent>
      <CardFooter>
        <Button size="sm">Save changes</Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>_(()=>import(`./compose-Dy0RHKbK.js`),[]));var U=`import { Field, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { Input } from "@kitora/ui/input"

export function FieldsetDefault() {
  return (
    <Fieldset className="max-w-sm">
      <FieldsetLegend>Shipping address</FieldsetLegend>
      <Field name="street">
        <FieldLabel>Street</FieldLabel>
        <Input autoComplete="address-line1" />
      </Field>
      <Field name="city">
        <FieldLabel>City</FieldLabel>
        <Input autoComplete="address-level2" />
      </Field>
    </Fieldset>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>_(()=>import(`./default-D-DNe5RF.js`),[]));var W=`import { Fieldset, FieldsetDescription, FieldsetLegend } from "@kitora/ui/fieldset"
import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"

/** FieldsetDescription sits under the legend and is announced with the group (\`aria-describedby\` on the fieldset). */
export function FieldsetDescriptionDemo() {
  return (
    <Fieldset className="max-w-sm" render={<RadioGroup defaultValue="standard" />}>
      <FieldsetLegend>Delivery</FieldsetLegend>
      <FieldsetDescription>Orders placed before 2 pm ship the same day.</FieldsetDescription>
      <RadioGroupItem value="standard" label="Standard" description="3 to 5 working days, free." />
      <RadioGroupItem value="express" label="Express" description="Next working day, 9.90." />
    </Fieldset>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>_(()=>import(`./description-BK75Dq55.js`),[]));var G=`import { useState } from "react"
import { Field, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { Input } from "@kitora/ui/input"
import { Switch } from "@kitora/ui/switch"

/** \`disabled\` on the fieldset reaches every Field inside it. */
export function FieldsetDisabled() {
  const [locked, setLocked] = useState(true)
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Field>
        <FieldLabel>
          <Switch checked={locked} onCheckedChange={setLocked} />
          Lock the billing details
        </FieldLabel>
      </Field>
      <Fieldset disabled={locked}>
        <FieldsetLegend>Billing details</FieldsetLegend>
        <Field name="company">
          <FieldLabel>Company</FieldLabel>
          <Input defaultValue="Analog Ltd" />
        </Field>
        <Field name="vat">
          <FieldLabel>VAT number</FieldLabel>
          <Input defaultValue="GB123456789" />
        </Field>
      </Fieldset>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>_(()=>import(`./disabled-Dqs1dV4z.js`),[]));var K={"./demos/fieldset/build-your-own.tsx":O,"./demos/fieldset/compose.tsx":M,"./demos/fieldset/default.tsx":P,"./demos/fieldset/description.tsx":I,"./demos/fieldset/disabled.tsx":R},q={"./demos/fieldset/build-your-own.tsx":V,"./demos/fieldset/compose.tsx":H,"./demos/fieldset/default.tsx":U,"./demos/fieldset/description.tsx":W,"./demos/fieldset/disabled.tsx":G};export{K as modules,q as sources};