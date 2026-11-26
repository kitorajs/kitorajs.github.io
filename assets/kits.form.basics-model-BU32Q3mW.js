import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ti as r}from"./index-9y5uwRd3.js";import{A as i,J as a,c as o,g as s}from"./field-config-62hz5rv-.js";import{a as c,n as l}from"./fields-3rMiSNLY.js";import{t as u}from"./example-CZLJLtIC.js";import{n as d}from"./auto-form-C__G2h4N.js";import"./demos-DilKtWQ6.js";var f=n(),p={title:``,seats:20,online:!1},m=a()(({f:e,c:t,v:n})=>({fields:[e.text(`title`,{label:`Title`,required:!0}),e.number(`seats`,{label:`Seats`,rules:[n.min(1)]}),e.switch(`online`,{label:`Online event`}),e.when(t.eq(`online`,!0),[e.text(`link`,{label:`Meeting link`,required:!0})])]})),h={async create(e){console.log(`created`,e)}};function g(){return(0,f.jsx)(d,{def:m,defaultValues:p,submitLabel:`Create event`,onSubmit:h.create})}var _=`import { AutoForm } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"

type Event = { title: string; seats: number; online: boolean; link?: string }

const defaultValues: Event = { title: "", seats: 20, online: false }

// the form as data: fields, rules and conditions in one serializable definition
const eventDef = defineForm<Event>()(({ f, c, v }) => ({
  fields: [
    f.text("title", { label: "Title", required: true }),
    f.number("seats", { label: "Seats", rules: [v.min(1)] }),
    f.switch("online", { label: "Online event" }),
    // shown only while online is on
    f.when(c.eq("online", true), [f.text("link", { label: "Meeting link", required: true })]),
  ],
}))

// stub: replace with your API (POST /events)
const api = {
  async create(values: Event): Promise<void> {
    console.log("created", values)
  },
}

export function AutoFormBasic() {
  return <AutoForm<Event> def={eventDef} defaultValues={defaultValues} submitLabel="Create event" onSubmit={api.create} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./autoform-CJG4hNe5.js`),[]));var v={product:`Notebook`,quantity:1};function y(){let e=i({defaultValues:v}),t=s(e,`quantity`);return(0,f.jsxs)(o,{form:e,children:[(0,f.jsx)(c,{name:`product`,label:`Product`}),(0,f.jsx)(l,{name:`quantity`,label:`Quantity`}),(0,f.jsxs)(`p`,{className:`text-sm`,children:[`You are ordering `,t,` item`,t===1?``:`s`,`.`]}),(0,f.jsx)(r,{type:`button`,variant:`outline`,className:`self-start`,onClick:()=>e.setValue(`quantity`,t+10),children:`Add 10`})]})}var b=`import { Button } from "@kitora/ui/button"
import { NumberField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormValue } from "@kitora/form/react"

type Order = { product: string; quantity: number }

const defaultValues: Order = { product: "Notebook", quantity: 1 }

export function HooksBasic() {
  const form = useForm<Order>({ defaultValues })
  // re-renders only when quantity changes
  const quantity = useFormValue(form, "quantity")
  return (
    <Form form={form}>
      <TextField name="product" label="Product" />
      <NumberField name="quantity" label="Quantity" />
      <p className="text-sm">You are ordering {quantity} item{quantity === 1 ? "" : "s"}.</p>
      {/* writing from outside a field: typed by path, validated like typing */}
      <Button type="button" variant="outline" className="self-start" onClick={() => form.setValue("quantity", quantity + 10)}>
        Add 10
      </Button>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./hooks-HBaB24EB.js`),[]));function x(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(e,{title:`Basics: model and hooks`,children:[`Describe a form as data and let `,(0,f.jsx)(`code`,{children:`AutoForm`}),` draw it, or read and write values yourself.`]}),(0,f.jsx)(u,{n:1,title:`A form from a definition`,blurb:`defineForm lists fields, rules and conditions; AutoForm renders them with a submit button.`,code:_,children:(0,f.jsx)(g,{})}),(0,f.jsx)(u,{n:2,title:`Reading and writing values`,blurb:`useFormValue re-renders on one value; form.setValue writes one by its typed path.`,code:b,children:(0,f.jsx)(y,{})})]})}export{x as component};