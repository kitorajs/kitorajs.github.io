import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{A as o,c as s}from"./field-config-17kME8Vl.js";import{a as c,c as l}from"./fields-CwxxBZgA.js";import{n as u}from"./wizard-D4W23MbD.js";import{n as d,t as f}from"./wizard-chrome-D0CpQAFy.js";import{t as p}from"./field-array-BUA8h98X.js";import{t as m}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var h=e(n(),1),g=i(),_={name:``,email:``},v={async create(e){return e}};function y(){let[e,t]=(0,h.useState)(null);return(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsxs)(l,{title:`New customer`,trigger:(0,g.jsx)(a,{className:`w-fit`,children:`New customer`}),form:{defaultValues:_},onSubmit:v.create,onSuccess:t,children:[(0,g.jsx)(c,{name:`name`,label:`Name`,required:!0}),(0,g.jsx)(c,{name:`email`,label:`Email`,type:`email`,required:!0})]}),e?(0,g.jsxs)(`p`,{className:`text-sm`,children:[`Created `,e.name]}):null]})}var b=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { FormDialog, TextField } from "@kitora/form/fields"

type Customer = { name: string; email: string }

const defaultValues: Customer = { name: "", email: "" }

// stub: replace with your API (POST /customers)
const api = {
  async create(values: Customer): Promise<Customer> {
    return values
  },
}

export function DialogBasic() {
  const [created, setCreated] = useState<Customer | null>(null)
  return (
    <div className="flex items-center gap-3">
      {/* a fresh form each time it opens; closes itself after a successful submit */}
      <FormDialog<Customer, Customer> title="New customer" trigger={<Button className="w-fit">New customer</Button>} form={{ defaultValues }} onSubmit={api.create} onSuccess={setCreated}>
        <TextField name="name" label="Name" required />
        <TextField name="email" label="Email" type="email" required />
      </FormDialog>
      {created ? <p className="text-sm">Created {created.name}</p> : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./form-dialog-Nrsz-Axm.js`),[]));var x={members:[{name:`Ada`,email:`ada@example.com`}]};function S(){return(0,g.jsxs)(s,{form:o({defaultValues:x}),children:[(0,g.jsxs)(p,{name:`members`,label:`Team`,rowLabel:`Member`,newRow:{name:``,email:``},children:[(0,g.jsx)(c,{name:`.name`,label:`Name`}),(0,g.jsx)(c,{name:`.email`,label:`Email`,type:`email`}),(0,g.jsx)(p.RowActions,{remove:!0})]}),(0,g.jsx)(p.Add,{to:`members`,children:`Add member`})]})}var C=`import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Team = { members: Array<{ name: string; email: string }> }

const defaultValues: Team = { members: [{ name: "Ada", email: "ada@example.com" }] }

export function FieldArrayBasic() {
  const form = useForm<Team>({ defaultValues })
  return (
    <Form form={form}>
      <FieldArray name="members" label="Team" rowLabel="Member" newRow={{ name: "", email: "" }}>
        {/* a leading dot names a key of the current row */}
        <TextField name=".name" label="Name" />
        <TextField name=".email" label="Email" type="email" />
        <FieldArray.RowActions remove />
      </FieldArray>
      <FieldArray.Add to="members">Add member</FieldArray.Add>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./array-JjXf5wJP.js`),[]));var w={you:{name:``},team:{name:``}},T={async create(e){console.log(`created`,e)}};function E(){return(0,g.jsx)(s,{form:o({defaultValues:w}),onSubmit:T.create,children:(0,g.jsxs)(u,{progress:(0,g.jsx)(d,{}),nav:(0,g.jsx)(f,{}),children:[(0,g.jsx)(u.Step,{id:`you`,label:`About you`,scope:`you`,children:(0,g.jsx)(c,{name:`.name`,label:`Your name`,required:!0})}),(0,g.jsx)(u.Step,{id:`team`,label:`Your team`,scope:`team`,children:(0,g.jsx)(c,{name:`.name`,label:`Team name`,required:!0})})]})})}var D=`import { TextField, WizardNav, WizardProgress } from "@kitora/form/fields"
import { Form, useForm, Wizard } from "@kitora/form/react"

type Account = { you: { name: string }; team: { name: string } }

const defaultValues: Account = { you: { name: "" }, team: { name: "" } }

// stub: replace with your API (POST /accounts)
const api = {
  async create(values: Account): Promise<void> {
    console.log("created", values)
  },
}

export function WizardBasic() {
  const form = useForm<Account>({ defaultValues })
  return (
    <Form form={form} onSubmit={api.create}>
      {/* Next validates only the current step; the last step's button submits */}
      <Wizard progress={<WizardProgress />} nav={<WizardNav />}>
        <Wizard.Step id="you" label="About you" scope="you">
          <TextField name=".name" label="Your name" required />
        </Wizard.Step>
        <Wizard.Step id="team" label="Your team" scope="team">
          <TextField name=".name" label="Team name" required />
        </Wizard.Step>
      </Wizard>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>r(()=>import(`./wizard-BnUNmxSH.js`),[]));function O(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{title:`Basics: lists, steps and dialogs`,children:`Repeat rows, split a form into steps, or open it in a dialog, each with one component.`}),(0,g.jsx)(m,{n:1,title:`A field array`,blurb:`Rows of the same fields: add and remove; each row's fields name keys of that row.`,code:C,children:(0,g.jsx)(S,{})}),(0,g.jsx)(m,{n:2,title:`A two-step wizard`,blurb:`Next checks only the current step; the last step submits the whole form.`,code:D,children:(0,g.jsx)(E,{})}),(0,g.jsx)(m,{n:3,title:`A form in a dialog`,blurb:`FormDialog builds a fresh form per open and closes itself after a successful submit.`,code:b,children:(0,g.jsx)(y,{})})]})}export{O as component};