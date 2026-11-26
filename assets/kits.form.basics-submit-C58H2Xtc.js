import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{A as i,Y as a,c as o}from"./field-config-62hz5rv-.js";import{a as s}from"./fields-3rMiSNLY.js";import{t as c}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var l=n(),u={email:``},d={async subscribe(e){return await new Promise(e=>setTimeout(e,800)),{id:`sub_${e.email.length}`}}};function f(){return(0,l.jsxs)(o,{form:i({defaultValues:u}),onSubmit:d.subscribe,children:[(0,l.jsx)(s,{name:`email`,label:`Email`,type:`email`,required:!0}),(0,l.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),pendingLabel:`Subscribing…`,children:`Subscribe`}),(0,l.jsx)(o.Status,{success:e=>(0,l.jsxs)(`p`,{children:[`Subscribed · `,e.id]})})]})}var p=`import { buttonVariants } from "@kitora/ui/button"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Newsletter = { email: string }
type Saved = { id: string }

const defaultValues: Newsletter = { email: "" }

// stub: replace with your API (POST /subscriptions); the wait makes the pending state visible
const api = {
  async subscribe(values: Newsletter): Promise<Saved> {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return { id: \`sub_\${values.email.length}\` }
  },
}

export function SubmitBasic() {
  const form = useForm<Newsletter, Newsletter, Saved>({ defaultValues })
  return (
    <Form form={form} onSubmit={api.subscribe}>
      <TextField name="email" label="Email" type="email" required />
      {/* disabled and relabelled while the handler runs */}
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Subscribing…">Subscribe</Form.Submit>
      {/* shows what the handler returned once it resolves */}
      <Form.Status<Saved> success={(r) => <p>Subscribed · {r.id}</p>} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./submit-DWCkCoZ8.js`),[]));var m={email:``,username:``},{v:h}=a();function g(){return(0,l.jsxs)(o,{form:i({defaultValues:m,validateOn:`blur`,revalidateOn:`change`}),children:[(0,l.jsx)(s,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[h.email(`Enter a valid email`)]}),(0,l.jsx)(s,{name:`username`,label:`Username`,required:!0,rules:[h.minLength(3,`At least 3 characters`)]}),(0,l.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Check`})]})}var _=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Signup = { email: string; username: string }

const defaultValues: Signup = { email: "", username: "" }
const { v } = kit<Signup>()

export function ValidationBasic() {
  // errors show when a field is left, then update on every keystroke
  const form = useForm<Signup>({ defaultValues, validateOn: "blur", revalidateOn: "change" })
  return (
    <Form form={form}>
      <TextField name="email" label="Email" type="email" required rules={[v.email("Enter a valid email")]} />
      <TextField name="username" label="Username" required rules={[v.minLength(3, "At least 3 characters")]} />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Check</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./validation-BalqanWN.js`),[]));function v(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e,{title:`Basics: validate and submit`,children:[`Rules sit on the field; `,(0,l.jsx)(`code`,{children:`Form.Submit`}),` and `,(0,l.jsx)(`code`,{children:`Form.Status`}),` follow the submit for you.`]}),(0,l.jsx)(c,{n:1,title:`A field with validation`,blurb:`required plus a rule per field. Errors appear when you leave a field, then follow your typing.`,code:_,children:(0,l.jsx)(g,{})}),(0,l.jsx)(c,{n:2,title:`Submit with loading and success`,blurb:`The button is disabled and relabelled while the handler runs; the status line shows what it returned.`,code:p,children:(0,l.jsx)(f,{})})]})}export{v as component};