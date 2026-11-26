import{Cc as e,Ic as t,ni as n}from"./index-B9ukmIN1.js";import{A as r,Y as i,c as a}from"./field-config-17kME8Vl.js";import{a as o}from"./fields-CwxxBZgA.js";import{n as s}from"./lib-CKWRlO6G.js";var c=t(),l={name:``,email:``},{v:u}=i();function d(){return(0,c.jsxs)(a,{form:r({defaultValues:l,validateOn:`blur`}),onSubmit:e=>`Invited ${e.name}`,className:`grid w-full max-w-sm gap-3`,children:[(0,c.jsx)(o,{name:`name`,label:`Name`,required:!0}),(0,c.jsx)(o,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[u.email(`Enter a valid email`)]}),(0,c.jsx)(a.Submit,{className:n(),children:`Send invite`}),(0,c.jsx)(a.Status,{success:e=>(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e})})]})}var f=`import { kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"

type Invite = { name: string; email: string }

const defaultValues: Invite = { name: "", email: "" }
const { v } = kit<Invite>()

export function FirstForm() {
  const form = useForm<Invite, Invite, string>({ defaultValues, validateOn: "blur" })
  return (
    <Form form={form} onSubmit={(values) => \`Invited \${values.name}\`} className="grid w-full max-w-sm gap-3">
      <TextField name="name" label="Name" required />
      <TextField name="email" label="Email" type="email" required rules={[v.email("Enter a valid email")]} />
      <Form.Submit className={buttonVariants()}>Send invite</Form.Submit>
      <Form.Status<string> success={(message) => <p className="text-sm text-muted-foreground">{message}</p>} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>e(()=>import(`./first-form-Dh4T4ogK.js`),[]));function p(e){let t={code:`code`,p:`p`,...s(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||h(`Api`,!0),r||h(`Relies`,!0),i||h(`Snippet`,!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`A form from `,(0,c.jsx)(n,{package:`@kitora/form`}),`: `,(0,c.jsx)(t.code,{children:`useForm`}),` holds the values, `,(0,c.jsx)(t.code,{children:`Form`}),` wires them to the fields, and each field reads and writes its `,(0,c.jsx)(t.code,{children:`name`}),`. `,(0,c.jsx)(t.code,{children:`required`}),` and the `,(0,c.jsx)(t.code,{children:`rules`}),` validate on blur; `,(0,c.jsx)(t.code,{children:`Form.Submit`}),` runs `,(0,c.jsx)(t.code,{children:`onSubmit`}),`, and `,(0,c.jsx)(t.code,{children:`Form.Status`}),` shows what it returned.`]}),`
`,(0,c.jsx)(i,{title:`An invite form`,source:f,children:(0,c.jsx)(d,{})}),`
`,(0,c.jsx)(t.p,{children:`Try it: submit it empty, type a name and a broken email, then fix the email and send.`}),`
`,(0,c.jsx)(t.p,{children:`Next: the forms guide goes from this to field arrays and async validation, and the form kit's gallery shows every field.`}),`
`,(0,c.jsx)(r,{on:[`packages/form/src/react/index.ts`,`packages/form/src/fields/index.ts`,`src/docs/examples/__tests__/getting-started.test.tsx`]})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}function h(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default};