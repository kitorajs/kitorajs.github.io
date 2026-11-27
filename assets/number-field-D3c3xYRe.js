import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,c as r,d as i,f as ee,h as te,i as a,l as ne,m as re,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./number-input-ChoaiyNQ.js";import{i as p,r as m,s as h,t as g}from"./field-E9FuDlTf.js";import{t as _}from"./minus-CJTGd-IY.js";import{t as ie}from"./plus-DdsWgtk9.js";import{Ec as v,Uc as ae,ri as y,zc as oe}from"./index-BZuUy872.js";import{t as se}from"./label-Cw7IrV7Q.js";import{a as ce,i as le,n as ue,o as b,t as x}from"./card-XcfOPVWP.js";import{t as S}from"./separator-BeYrD2Vo.js";var C=e({NumberFieldBuildYourOwn:()=>T}),w=oe();function T({value:e,defaultValue:t=3,onValueChange:n,name:r}){return(0,w.jsx)(i,{name:r,...f({value:e,defaultValue:t,onValueChange:n,locale:`en-US`,min:0,max:20}),className:`flex flex-col items-start gap-1`,children:(0,w.jsxs)(re,{className:`flex h-8 w-40 items-stretch rounded-md border border-input focus-within:ring-3 focus-within:ring-ring/50 data-disabled:opacity-50`,children:[(0,w.jsx)(ee,{"aria-label":`Seats`,className:`h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm tabular-nums outline-none`}),(0,w.jsx)(te,{"aria-label":`Decrease`,className:`flex aspect-square h-full items-center justify-center text-muted-foreground hover:bg-muted data-disabled:opacity-50`,children:(0,w.jsx)(_,{"aria-hidden":`true`,className:`size-3`})}),(0,w.jsx)(c,{"aria-label":`Increase`,className:`flex aspect-square h-full items-center justify-center text-muted-foreground hover:bg-muted data-disabled:opacity-50`,children:(0,w.jsx)(ie,{"aria-hidden":`true`,className:`size-3`})})]})})}var E=e({NumberFieldComposeSeatPicker:()=>k}),D=t(ae(),1),O=12;function k(){let e=(0,D.useId)(),[t,n]=(0,D.useState)(5),r=(t??0)*O;return(0,w.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3 rounded-lg border border-border bg-card p-4`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,w.jsxs)(`div`,{className:`grid gap-1`,children:[(0,w.jsx)(se,{htmlFor:e,children:`Seats`}),(0,w.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`$`,O,` per seat / month`]})]}),(0,w.jsx)(d,{id:e,locale:`en-US`,value:t,onValueChange:n,min:1,max:50})]}),(0,w.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Total`}),(0,w.jsxs)(`span`,{className:`font-semibold tabular-nums`,children:[`$`,r,`/mo`]})]}),(0,w.jsx)(y,{className:`w-full`,disabled:t===null,children:`Update plan`})]})}var A=e({NumberFieldComposeSeats:()=>M}),j=12;function M(){let[e,t]=(0,D.useState)(5),r=(e??0)*j;return(0,w.jsxs)(x,{className:`w-full max-w-sm`,children:[(0,w.jsx)(ce,{children:(0,w.jsx)(b,{children:`Team plan`})}),(0,w.jsxs)(ue,{className:`grid gap-4`,children:[(0,w.jsxs)(g,{name:`seats`,children:[(0,w.jsx)(h,{children:`Seats`}),(0,w.jsx)(o,{value:e,onValueChange:t,min:1,max:50,children:(0,w.jsxs)(n,{children:[(0,w.jsx)(a,{}),(0,w.jsx)(u,{className:`text-center`}),(0,w.jsx)(s,{})]})}),(0,w.jsxs)(m,{children:[`$`,j,` per seat each month.`]})]}),(0,w.jsx)(S,{}),(0,w.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Total`}),(0,w.jsxs)(`span`,{className:`font-semibold tabular-nums`,children:[`$`,r,` / month`]})]})]}),(0,w.jsx)(le,{children:(0,w.jsx)(y,{className:`w-full`,disabled:e===null,children:`Update plan`})})]})}var N=e({NumberFieldDefault:()=>P});function P(){return(0,w.jsx)(o,{defaultValue:4,min:0,max:20,children:(0,w.jsxs)(n,{children:[(0,w.jsx)(a,{}),(0,w.jsx)(u,{"aria-label":`Quantity`,className:`text-center`}),(0,w.jsx)(s,{})]})})}var F=e({NumberFieldFormSubmit:()=>I});function I(){let[e,t]=(0,D.useState)(null);return(0,w.jsxs)(`form`,{className:`flex max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,w.jsx)(l,{name:`price`,locale:`de-DE`,format:{style:`currency`,currency:`EUR`},defaultValue:1234.5,min:0,"aria-label":`Price`}),(0,w.jsx)(l,{name:`seats`,required:!0,min:1,placeholder:`Seats`,"aria-label":`Seats`}),(0,w.jsx)(y,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,w.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,w.jsx)(`code`,{children:e??`not submitted`})]})]})}var L=e({NumberFieldFormat:()=>R});function R(){let[e,t]=(0,D.useState)(1234.5);return(0,w.jsxs)(`div`,{className:`grid w-full max-w-xs gap-3`,children:[(0,w.jsx)(o,{value:e,onValueChange:t,locale:`de-DE`,format:{style:`currency`,currency:`EUR`},min:0,step:.5,children:(0,w.jsx)(n,{className:`w-full`,children:(0,w.jsx)(u,{"aria-label":`Price in euro, German format`})})}),(0,w.jsx)(o,{defaultValue:.15,locale:`en-US`,format:{style:`percent`},step:.01,min:0,max:1,children:(0,w.jsx)(n,{className:`w-full`,children:(0,w.jsx)(u,{"aria-label":`Discount in percent`})})}),(0,w.jsx)(o,{defaultValue:80,locale:`en-US`,format:{style:`unit`,unit:`kilometer-per-hour`},min:0,max:300,step:10,allowWheelScrub:!0,children:(0,w.jsx)(n,{className:`w-full`,children:(0,w.jsx)(u,{"aria-label":`Speed limit`})})}),(0,w.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Raw value of the first field: `,e===null?`empty`:e,`. Arrows step, Shift takes ten steps, Alt a tenth; the wheel steps the speed while it has focus.`]})]})}var de=e({NumberFieldInField:()=>z});function z(){return(0,w.jsxs)(g,{name:`guests`,className:`max-w-xs`,validationMode:`onBlur`,children:[(0,w.jsx)(h,{children:`Guests`}),(0,w.jsx)(o,{defaultValue:2,min:1,max:12,required:!0,children:(0,w.jsxs)(n,{children:[(0,w.jsx)(a,{}),(0,w.jsx)(u,{className:`text-center`}),(0,w.jsx)(s,{})]})}),(0,w.jsx)(m,{children:`Between 1 and 12. Clear the field and leave it to see the error.`}),(0,w.jsx)(p,{match:`valueMissing`,children:`Enter the number of guests.`})]})}var B=e({NumberFieldKitNumberInput:()=>V});function V(){return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(d,{locale:`en-US`,defaultValue:1,min:0,max:100,step:1,"aria-label":`Quantity`}),(0,w.jsx)(d,{locale:`en-US`,defaultValue:4.5,min:0,max:10,step:.5,"aria-label":`Rating`})]})})}var H=e({NumberFieldPreset:()=>fe});function fe(){let[e,t]=(0,D.useState)(3);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(l,{locale:`en-US`,value:e,onValueChange:t,min:0,max:20,"aria-label":`Quantity`}),(0,w.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:[`Committed: `,e??`empty`]})]}),(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`A percent steps by one percent; the wheel steps while the input has focus (stepOnWheel)`}),(0,w.jsx)(l,{locale:`en-US`,format:{style:`percent`},defaultValue:.25,min:0,max:1,stepOnWheel:!0,"aria-label":`Discount`})]}),(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`No steppers, a placeholder and your own stepper names (labels)`}),(0,w.jsx)(l,{locale:`en-US`,steppers:!1,placeholder:`Any amount`,"aria-label":`Amount`,labels:{increase:`More`,decrease:`Less`}})]})]})}var pe=e({NumberFieldScrub:()=>U});function U(){return(0,w.jsxs)(o,{defaultValue:100,min:0,max:500,step:1,children:[(0,w.jsxs)(r,{className:`text-sm font-medium`,children:[(0,w.jsx)(`label`,{htmlFor:`scrub-width`,children:`Width`}),(0,w.jsx)(ne,{})]}),(0,w.jsx)(n,{children:(0,w.jsx)(u,{id:`scrub-width`})}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Press the label and drag sideways to change the value.`})]})}var W=`import { MinusIcon, PlusIcon } from "lucide-react"
import { NumberField, numberFieldModelOptions } from "@kitora/primitives/react"

/**
 * A number input with − / + steppers built from the primitives' parts only: \`NumberField.Root\`, \`Group\`, \`Input\`, \`Decrement\`
 * and \`Increment\`, set up with \`numberFieldModelOptions\` (commit on blur or Enter, Shift / Page Up for ten steps). The steppers
 * stay out of the tab order (the input's arrow keys do the same) and \`name\` posts the raw number.
 */
export function NumberFieldBuildYourOwn({
  value,
  defaultValue = 3,
  onValueChange,
  name,
}: {
  value?: number | null
  defaultValue?: number | null
  onValueChange?: (value: number | null) => void
  name?: string
}) {
  return (
    <NumberField.Root name={name} {...numberFieldModelOptions({ value, defaultValue, onValueChange, locale: "en-US", min: 0, max: 20 })} className="flex flex-col items-start gap-1">
      <NumberField.Group className="flex h-8 w-40 items-stretch rounded-md border border-input focus-within:ring-3 focus-within:ring-ring/50 data-disabled:opacity-50">
        <NumberField.Input aria-label="Seats" className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm tabular-nums outline-none" />
        <NumberField.Decrement aria-label="Decrease" className="flex aspect-square h-full items-center justify-center text-muted-foreground hover:bg-muted data-disabled:opacity-50">
          <MinusIcon aria-hidden="true" className="size-3" />
        </NumberField.Decrement>
        <NumberField.Increment aria-label="Increase" className="flex aspect-square h-full items-center justify-center text-muted-foreground hover:bg-muted data-disabled:opacity-50">
          <PlusIcon aria-hidden="true" className="size-3" />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>v(()=>import(`./build-your-own-CtlzwxkD.js`),[]));var G=`import { useId, useState } from "react"
import { NumberInput } from "@kitora/pickers/ui"
import { Button } from "@kitora/ui/button"
import { Label } from "@kitora/ui/label"

const pricePerSeat = 12

export function NumberFieldComposeSeatPicker() {
  const id = useId()
  const [seats, setSeats] = useState<number | null>(5)
  const total = (seats ?? 0) * pricePerSeat
  return (
    <div className="grid w-full max-w-sm gap-3 rounded-lg border border-border bg-card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="grid gap-1">
          <Label htmlFor={id}>Seats</Label>
          <p className="text-xs text-muted-foreground">\${pricePerSeat} per seat / month</p>
        </div>
        <NumberInput id={id} locale="en-US" value={seats} onValueChange={setSeats} min={1} max={50} />
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-semibold tabular-nums">\${total}/mo</span>
      </div>
      <Button className="w-full" disabled={seats === null}>
        Update plan
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>v(()=>import(`./compose-seat-picker-Dpag9LdS.js`),[]));var K=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "@kitora/ui/number-field"
import { Separator } from "@kitora/ui/separator"

const pricePerSeat = 12

export function NumberFieldComposeSeats() {
  const [seats, setSeats] = useState<number | null>(5)
  const total = (seats ?? 0) * pricePerSeat
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Field name="seats">
          <FieldLabel>Seats</FieldLabel>
          <NumberField value={seats} onValueChange={setSeats} min={1} max={50}>
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput className="text-center" />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
          <FieldDescription>\${pricePerSeat} per seat each month.</FieldDescription>
        </Field>
        <Separator />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total</span>
          <span className="font-semibold tabular-nums">\${total} / month</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={seats === null}>
          Update plan
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>v(()=>import(`./compose-BY8MAnPw.js`),[]));var q=`import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "@kitora/ui/number-field"

export function NumberFieldDefault() {
  return (
    <NumberField defaultValue={4} min={0} max={20}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Quantity" className="text-center" />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>v(()=>import(`./default-BuedQTUD.js`),[]));var J=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { NumberFieldControl } from "@kitora/ui/number-field"

/** \`name\` posts the raw number (not the formatted text) with a plain \`<form>\`; \`required\` refuses the submit while the field is empty. */
export function NumberFieldFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <NumberFieldControl name="price" locale="de-DE" format={{ style: "currency", currency: "EUR" }} defaultValue={1234.5} min={0} aria-label="Price" />
      <NumberFieldControl name="seats" required min={1} placeholder="Seats" aria-label="Seats" />
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>v(()=>import(`./form-submit-B39AfHzL.js`),[]));var Y=`import { useState } from "react"
import { NumberField, NumberFieldGroup, NumberFieldInput } from "@kitora/ui/number-field"

export function NumberFieldFormat() {
  const [price, setPrice] = useState<number | null>(1234.5)
  return (
    <div className="grid w-full max-w-xs gap-3">
      <NumberField value={price} onValueChange={setPrice} locale="de-DE" format={{ style: "currency", currency: "EUR" }} min={0} step={0.5}>
        <NumberFieldGroup className="w-full">
          <NumberFieldInput aria-label="Price in euro, German format" />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={0.15} locale="en-US" format={{ style: "percent" }} step={0.01} min={0} max={1}>
        <NumberFieldGroup className="w-full">
          <NumberFieldInput aria-label="Discount in percent" />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={80} locale="en-US" format={{ style: "unit", unit: "kilometer-per-hour" }} min={0} max={300} step={10} allowWheelScrub>
        <NumberFieldGroup className="w-full">
          <NumberFieldInput aria-label="Speed limit" />
        </NumberFieldGroup>
      </NumberField>
      <p className="text-xs text-muted-foreground">Raw value of the first field: {price === null ? "empty" : price}. Arrows step, Shift takes ten steps, Alt a tenth; the wheel steps the speed while it has focus.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>v(()=>import(`./format-Bq2ujQEh.js`),[]));var X=`import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "@kitora/ui/number-field"

export function NumberFieldInField() {
  return (
    <Field name="guests" className="max-w-xs" validationMode="onBlur">
      <FieldLabel>Guests</FieldLabel>
      <NumberField defaultValue={2} min={1} max={12} required>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput className="text-center" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>Between 1 and 12. Clear the field and leave it to see the error.</FieldDescription>
      <FieldError match="valueMissing">Enter the number of guests.</FieldError>
    </Field>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>v(()=>import(`./in-field-BSsBqlHl.js`),[]));var Z=`import { NumberInput } from "@kitora/pickers/ui"

export function NumberFieldKitNumberInput() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid gap-3">
        <NumberInput locale="en-US" defaultValue={1} min={0} max={100} step={1} aria-label="Quantity" />
        <NumberInput locale="en-US" defaultValue={4.5} min={0} max={10} step={0.5} aria-label="Rating" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>v(()=>import(`./kit-number-input-L8eIFp9c.js`),[]));var Q=`import { useState } from "react"
import { NumberFieldControl } from "@kitora/ui/number-field"

/** The preset: the group, the input and − / + steppers; typing commits on blur or Enter, the arrow keys and the steppers step at once. */
export function NumberFieldPreset() {
  const [quantity, setQuantity] = useState<number | null>(3)
  return (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <NumberFieldControl locale="en-US" value={quantity} onValueChange={setQuantity} min={0} max={20} aria-label="Quantity" />
        <p className="text-xs text-muted-foreground" aria-live="polite">
          Committed: {quantity ?? "empty"}
        </p>
      </div>
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">A percent steps by one percent; the wheel steps while the input has focus (stepOnWheel)</span>
        <NumberFieldControl locale="en-US" format={{ style: "percent" }} defaultValue={0.25} min={0} max={1} stepOnWheel aria-label="Discount" />
      </div>
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">No steppers, a placeholder and your own stepper names (labels)</span>
        <NumberFieldControl locale="en-US" steppers={false} placeholder="Any amount" aria-label="Amount" labels={{ increase: "More", decrease: "Less" }} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>v(()=>import(`./preset-DHIKfu-0.js`),[]));var $=`import { NumberField, NumberFieldGroup, NumberFieldInput, NumberFieldScrubArea, NumberFieldScrubAreaCursor } from "@kitora/ui/number-field"

export function NumberFieldScrub() {
  return (
    <NumberField defaultValue={100} min={0} max={500} step={1}>
      <NumberFieldScrubArea className="text-sm font-medium">
        <label htmlFor="scrub-width">Width</label>
        <NumberFieldScrubAreaCursor />
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldInput id="scrub-width" />
      </NumberFieldGroup>
      <p className="text-xs text-muted-foreground">Press the label and drag sideways to change the value.</p>
    </NumberField>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>v(()=>import(`./scrub-area-D6sZWiqi.js`),[]));var me={"./demos/number-field/build-your-own.tsx":C,"./demos/number-field/compose-seat-picker.tsx":E,"./demos/number-field/compose.tsx":A,"./demos/number-field/default.tsx":N,"./demos/number-field/form-submit.tsx":F,"./demos/number-field/format.tsx":L,"./demos/number-field/in-field.tsx":de,"./demos/number-field/kit-number-input.tsx":B,"./demos/number-field/preset.tsx":H,"./demos/number-field/scrub-area.tsx":pe},he={"./demos/number-field/build-your-own.tsx":W,"./demos/number-field/compose-seat-picker.tsx":G,"./demos/number-field/compose.tsx":K,"./demos/number-field/default.tsx":q,"./demos/number-field/form-submit.tsx":J,"./demos/number-field/format.tsx":Y,"./demos/number-field/in-field.tsx":X,"./demos/number-field/kit-number-input.tsx":Z,"./demos/number-field/preset.tsx":Q,"./demos/number-field/scrub-area.tsx":$};export{me as modules,he as sources};