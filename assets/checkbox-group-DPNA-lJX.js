import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./checkbox-C36tYYfQ.js";import{i,o as a,r as o,s,t as c}from"./field-E9FuDlTf.js";import{r as l,t as u}from"./fieldset-v_q3J5CI.js";import{t as d}from"./form-Dc0eOb7w.js";import{t as f}from"./checkbox-group-D9Rcp7V0.js";import{t as p}from"./minus-CJTGd-IY.js";import{Ec as m,Mi as h,Uc as g,_i as _,ri as v,zc as y}from"./index-BZuUy872.js";import{t as b}from"./label-Cw7IrV7Q.js";import{n as x,t as S}from"./choice-styles-2pScbkss.js";import{t as C}from"./checkbox-BLU1Y2K7.js";var w=e({CheckboxGroupBuildYourOwn:()=>O}),T=y(),E=[`cheese`,`ham`,`mushroom`,`olives`];function D({children:e,value:t,parent:i,name:a}){return(0,T.jsxs)(`label`,{className:`flex items-center gap-2 text-sm capitalize`,children:[(0,T.jsx)(n,{value:t,parent:i,name:a,className:S,children:(0,T.jsxs)(r,{className:x,children:[(0,T.jsx)(h,{className:`group-data-indeterminate/checkbox:hidden`}),(0,T.jsx)(p,{className:`hidden group-data-indeterminate/checkbox:block`})]})}),e]})}function O({value:e,defaultValue:t=e===void 0?[`cheese`,`ham`]:void 0,onValueChange:n,name:r}){return(0,T.jsxs)(f,{"aria-label":`Toppings`,allValues:E,value:e,defaultValue:t,onValueChange:e=>n?.(e),className:`flex flex-col items-start gap-2`,children:[(0,T.jsx)(D,{parent:!0,children:`All toppings`}),(0,T.jsx)(`div`,{className:`grid gap-2 ps-6`,children:E.map(e=>(0,T.jsx)(D,{value:e,name:r,children:e},e))})]})}function k({className:e,orientation:t,...n}){return(0,T.jsx)(f,{"data-slot":`checkbox-group`,"data-orientation":t,className:_(`flex w-full flex-col items-start gap-2`,t===`horizontal`&&`flex-row flex-wrap items-center gap-x-4 gap-y-2`,e),...n})}var A=e({CheckboxGroupComposeScopes:()=>N}),j=t(g(),1),M=[{value:`read`,label:`Read repositories`},{value:`write`,label:`Write repositories`},{value:`admin`,label:`Manage settings`}];function N(){let[e,t]=(0,j.useState)(null);return(0,T.jsxs)(d,{className:`w-full max-w-sm gap-3 rounded-md border border-border bg-card p-4`,onFormSubmit:e=>t(JSON.stringify(e.scopes)),children:[(0,T.jsxs)(c,{name:`scopes`,validate:e=>Array.isArray(e)&&e.length>0?null:`Pick at least one scope.`,children:[(0,T.jsxs)(u,{render:(0,T.jsx)(k,{allValues:M.map(e=>e.value),defaultValue:[`read`]}),children:[(0,T.jsx)(l,{children:`Token scopes`}),(0,T.jsx)(a,{children:(0,T.jsxs)(s,{children:[(0,T.jsx)(C,{parent:!0}),`Everything`]})}),M.map(e=>(0,T.jsx)(a,{children:(0,T.jsxs)(s,{children:[(0,T.jsx)(C,{value:e.value}),e.label]})},e.value))]}),(0,T.jsx)(i,{}),(0,T.jsx)(o,{children:`Scopes can be changed later.`})]}),(0,T.jsx)(v,{type:`submit`,size:`sm`,className:`self-start`,children:`Create token`}),e?(0,T.jsxs)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:[`Created with `,e]}):null]})}var P=e({CheckboxGroupDefault:()=>F});function F(){let[e,t]=(0,j.useState)([`email`]);return(0,T.jsxs)(`div`,{className:`grid gap-2`,children:[(0,T.jsx)(k,{"aria-label":`Notify me by`,value:e,onValueChange:t,children:[`email`,`sms`,`push`].map(e=>(0,T.jsxs)(b,{className:`capitalize`,children:[(0,T.jsx)(C,{value:e}),e]},e))}),(0,T.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:[`Ticked: `,e.length===0?`none`:e.join(`, `)]})]})}var I=e({CheckboxGroupHorizontal:()=>R}),L=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`];function R(){let[e,t]=(0,j.useState)([`Mon`,`Wed`,`Fri`]);return(0,T.jsxs)(`div`,{className:`grid w-full max-w-md gap-2`,children:[(0,T.jsx)(k,{"aria-label":`Repeat on`,orientation:`horizontal`,value:e,onValueChange:t,children:L.map(e=>(0,T.jsx)(C,{value:e,label:e},e))}),(0,T.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:[`Repeats on `,e.length===0?`no days`:e.join(`, `)]})]})}var z=e({CheckboxGroupParent:()=>V}),B=[`cheese`,`ham`,`mushroom`,`olives`];function V(){return(0,T.jsxs)(k,{"aria-label":`Toppings`,allValues:B,defaultValue:[`cheese`,`ham`],children:[(0,T.jsxs)(b,{className:`font-semibold`,children:[(0,T.jsx)(C,{parent:!0}),`All toppings`]}),(0,T.jsx)(`div`,{className:`grid gap-2 ps-6`,children:B.map(e=>(0,T.jsxs)(b,{className:`capitalize`,children:[(0,T.jsx)(C,{value:e}),e]},e))})]})}var H=`import type { ReactNode } from "react"
import { CheckIcon, MinusIcon } from "lucide-react"
import { Checkbox, CheckboxGroup } from "@kitora/primitives/react"
import { checkboxControlClassName, checkboxIndicatorClassName } from "@kitora/ui/choice-styles"

const TOPPINGS = ["cheese", "ham", "mushroom", "olives"]

/** One box wrapped in its label (a wrapping \`<label>\` needs no ids): the tick while checked, a dash while mixed. */
function Choice({ children, value, parent, name }: { children: ReactNode; value?: string; parent?: boolean; name?: string }) {
  return (
    <label className="flex items-center gap-2 text-sm capitalize">
      <Checkbox.Root value={value} parent={parent} name={name} className={checkboxControlClassName}>
        <Checkbox.Indicator className={checkboxIndicatorClassName}>
          <CheckIcon className="group-data-indeterminate/checkbox:hidden" />
          <MinusIcon className="hidden group-data-indeterminate/checkbox:block" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {children}
    </label>
  )
}

/**
 * A checkbox group with a parent box, built from the primitives' \`CheckboxGroup\` and \`Checkbox\` parts: the group holds the ticked values,
 * \`allValues\` lets the \`parent\` box tick or clear them all (checked when every child is, mixed when some are), and each child submits its
 * \`value\` under \`name\`.
 */
export function CheckboxGroupBuildYourOwn({
  value,
  defaultValue = value === undefined ? ["cheese", "ham"] : undefined,
  onValueChange,
  name,
}: {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  name?: string
}) {
  return (
    <CheckboxGroup
      aria-label="Toppings"
      allValues={TOPPINGS}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => onValueChange?.(next)}
      className="flex flex-col items-start gap-2"
    >
      <Choice parent>All toppings</Choice>
      <div className="grid gap-2 ps-6">
        {TOPPINGS.map((topping) => (
          <Choice key={topping} value={topping} name={name}>
            {topping}
          </Choice>
        ))}
      </div>
    </CheckboxGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>m(()=>import(`./build-your-own-3BS7_ipi.js`),[]));var U=`import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { CheckboxGroup } from "@kitora/ui/checkbox-group"
import { Field, FieldDescription, FieldError, FieldItem, FieldLabel } from "@kitora/ui/field"
import { Fieldset, FieldsetLegend } from "@kitora/ui/fieldset"
import { Form } from "@kitora/ui/form"
import { useState } from "react"

const SCOPES = [
  { value: "read", label: "Read repositories" },
  { value: "write", label: "Write repositories" },
  { value: "admin", label: "Manage settings" },
]

export function CheckboxGroupComposeScopes() {
  const [created, setCreated] = useState<string | null>(null)
  return (
    <Form
      className="w-full max-w-sm gap-3 rounded-md border border-border bg-card p-4"
      onFormSubmit={(values) => setCreated(JSON.stringify(values.scopes))}
    >
      <Field name="scopes" validate={(value) => (Array.isArray(value) && value.length > 0 ? null : "Pick at least one scope.")}>
        <Fieldset render={<CheckboxGroup allValues={SCOPES.map((s) => s.value)} defaultValue={["read"]} />}>
          <FieldsetLegend>Token scopes</FieldsetLegend>
          <FieldItem>
            <FieldLabel>
              <Checkbox parent />
              Everything
            </FieldLabel>
          </FieldItem>
          {SCOPES.map((scope) => (
            <FieldItem key={scope.value}>
              <FieldLabel>
                <Checkbox value={scope.value} />
                {scope.label}
              </FieldLabel>
            </FieldItem>
          ))}
        </Fieldset>
        <FieldError />
        <FieldDescription>Scopes can be changed later.</FieldDescription>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Create token
      </Button>
      {created ? (
        <p className="text-xs text-muted-foreground" role="status">
          Created with {created}
        </p>
      ) : null}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>m(()=>import(`./compose-BM7xzvpG.js`),[]));var W=`import { useState } from "react"
import { Checkbox } from "@kitora/ui/checkbox"
import { CheckboxGroup } from "@kitora/ui/checkbox-group"
import { Label } from "@kitora/ui/label"

export function CheckboxGroupDefault() {
  const [value, setValue] = useState<string[]>(["email"])
  return (
    <div className="grid gap-2">
      <CheckboxGroup aria-label="Notify me by" value={value} onValueChange={setValue}>
        {["email", "sms", "push"].map((channel) => (
          <Label key={channel} className="capitalize">
            <Checkbox value={channel} />
            {channel}
          </Label>
        ))}
      </CheckboxGroup>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        Ticked: {value.length === 0 ? "none" : value.join(", ")}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>m(()=>import(`./default-CztH9tiF.js`),[]));var G=`import { useState } from "react"
import { Checkbox } from "@kitora/ui/checkbox"
import { CheckboxGroup } from "@kitora/ui/checkbox-group"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

/** \`orientation="horizontal"\` lays the boxes out in a wrapping row. */
export function CheckboxGroupHorizontal() {
  const [days, setDays] = useState<string[]>(["Mon", "Wed", "Fri"])
  return (
    <div className="grid w-full max-w-md gap-2">
      <CheckboxGroup aria-label="Repeat on" orientation="horizontal" value={days} onValueChange={setDays}>
        {DAYS.map((day) => (
          <Checkbox key={day} value={day} label={day} />
        ))}
      </CheckboxGroup>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        Repeats on {days.length === 0 ? "no days" : days.join(", ")}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>m(()=>import(`./horizontal-CX5tVzO1.js`),[]));var K=`import { Checkbox } from "@kitora/ui/checkbox"
import { CheckboxGroup } from "@kitora/ui/checkbox-group"
import { Label } from "@kitora/ui/label"

const TOPPINGS = ["cheese", "ham", "mushroom", "olives"]

/** The parent is checked when every child is, mixed when some are; pressing it cycles all, none, then back to what you picked. */
export function CheckboxGroupParent() {
  return (
    <CheckboxGroup aria-label="Toppings" allValues={TOPPINGS} defaultValue={["cheese", "ham"]}>
      <Label className="font-semibold">
        <Checkbox parent />
        All toppings
      </Label>
      <div className="grid gap-2 ps-6">
        {TOPPINGS.map((topping) => (
          <Label key={topping} className="capitalize">
            <Checkbox value={topping} />
            {topping}
          </Label>
        ))}
      </div>
    </CheckboxGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>m(()=>import(`./parent-C31kenPM.js`),[]));var q={"./demos/checkbox-group/build-your-own.tsx":w,"./demos/checkbox-group/compose.tsx":A,"./demos/checkbox-group/default.tsx":P,"./demos/checkbox-group/horizontal.tsx":I,"./demos/checkbox-group/parent.tsx":z},J={"./demos/checkbox-group/build-your-own.tsx":H,"./demos/checkbox-group/compose.tsx":U,"./demos/checkbox-group/default.tsx":W,"./demos/checkbox-group/horizontal.tsx":G,"./demos/checkbox-group/parent.tsx":K};export{q as modules,J as sources};