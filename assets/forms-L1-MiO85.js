import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as t,Uc as n,ii as r,zc as i}from"./index-BZuUy872.js";import{A as a,Y as o,c as s,et as c}from"./field-config-53O_jYuu.js";import{a as l}from"./fields-DyVcPE0c.js";import{r as u}from"./fields-extra-W6GCx72F.js";import{t as d}from"./field-array-M2_MqL16.js";import{n as f}from"./lib-C0E9zsFn.js";var p=i(),m={email:``,secret:``,confirm:``},{v:h}=o();function g(){return(0,p.jsxs)(s,{form:a({defaultValues:m,validateOn:`blur`,revalidateOn:`change`}),onSubmit:e=>`Account created for ${e.email}`,className:`grid w-full max-w-sm gap-3`,children:[(0,p.jsx)(l,{name:`email`,label:`Email`,type:`email`,required:!0,rules:[h.email(`Enter a valid email`)]}),(0,p.jsx)(u,{name:`secret`,label:`Password`,required:!0,rules:[h.minLength(8,`At least 8 characters`)]}),(0,p.jsx)(u,{name:`confirm`,label:`Confirm password`,required:!0,rules:[h.matches(`secret`,`Passwords must match`)]}),(0,p.jsx)(s.Submit,{className:r(),children:`Create account`}),(0,p.jsx)(s.Status,{success:e=>(0,p.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e})})]})}var _=`import { kit } from "@kitora/form/core"
import { PasswordField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"

type Signup = { email: string; secret: string; confirm: string }

const defaultValues: Signup = { email: "", secret: "", confirm: "" }
const { v } = kit<Signup>()

export function SignupRules() {
  // Check a field when it loses focus; once it shows an error, check it again on every keystroke.
  const form = useForm<Signup, Signup, string>({ defaultValues, validateOn: "blur", revalidateOn: "change" })
  return (
    <Form form={form} onSubmit={(values) => \`Account created for \${values.email}\`} className="grid w-full max-w-sm gap-3">
      <TextField name="email" label="Email" type="email" required rules={[v.email("Enter a valid email")]} />
      <PasswordField name="secret" label="Password" required rules={[v.minLength(8, "At least 8 characters")]} />
      {/* A cross-field rule: it compares this field with the password, and runs again whenever the password is checked. */}
      <PasswordField name="confirm" label="Confirm password" required rules={[v.matches("secret", "Passwords must match")]} />
      <Form.Submit className={buttonVariants()}>Create account</Form.Submit>
      <Form.Status<string> success={(message) => <p className="text-sm text-muted-foreground">{message}</p>} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./form-rules-BI8tg8s6.js`),[]));var v={guests:[{name:`Ada`,email:`ada@example.com`},{name:`Grace`,email:`grace@example.com`}]},{v:y}=o();function b(){return(0,p.jsxs)(s,{form:a({defaultValues:v,validateOn:`change`}),className:`grid w-full max-w-lg gap-3`,children:[(0,p.jsxs)(d,{name:`guests`,label:`Guests`,rowLabel:`Guest`,newRow:{name:``,email:``},min:1,max:4,reorder:!0,rules:[y.unique(`.email`,`Each guest needs their own email`)],children:[(0,p.jsx)(l,{name:`.name`,label:`Name`,required:!0}),(0,p.jsx)(l,{name:`.email`,label:`Email`,type:`email`,rules:[y.email(`Enter a valid email`)]}),(0,p.jsx)(d.RowActions,{move:!0,remove:!0})]}),(0,p.jsx)(d.Add,{to:`guests`,children:`Add guest`})]})}var x=`import { kit } from "@kitora/form/core"
import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Trip = { guests: Array<{ name: string; email: string }> }

const defaultValues: Trip = {
  guests: [
    { name: "Ada", email: "ada@example.com" },
    { name: "Grace", email: "grace@example.com" },
  ],
}
const { v } = kit<Trip>()

export function GuestList() {
  const form = useForm<Trip>({ defaultValues, validateOn: "change" })
  return (
    <Form form={form} className="grid w-full max-w-lg gap-3">
      {/* min and max gate Remove and Add; the rule on the array compares its rows. */}
      <FieldArray
        name="guests"
        label="Guests"
        rowLabel="Guest"
        newRow={{ name: "", email: "" }}
        min={1}
        max={4}
        reorder
        rules={[v.unique(".email", "Each guest needs their own email")]}
      >
        {/* Names that start with "." are relative to the row: guests.0.name, guests.1.name, … */}
        <TextField name=".name" label="Name" required />
        <TextField name=".email" label="Email" type="email" rules={[v.email("Enter a valid email")]} />
        <FieldArray.RowActions move remove />
      </FieldArray>
      <FieldArray.Add to="guests">Add guest</FieldArray.Add>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./form-array-kK_AFtVj.js`),[]));var S=e(n(),1),C={username:``},{v:w}=o(),T=async(e,t)=>(await new Promise(e=>setTimeout(e,400)),!t.aborted&&[`ada`,`admin`,`root`].includes(e.toLowerCase()));function E({isTaken:e=T}){let[t]=(0,S.useState)(()=>c().validator(`usernameFree`,{fn:async(t,n,{signal:r})=>await e(String(t),r)?`"${String(t)}" is taken`:void 0}));return(0,p.jsxs)(s,{form:a({defaultValues:C,registry:t,validateOn:`change`}),onSubmit:e=>`@${e.username} is yours`,className:`grid w-full max-w-sm gap-3`,children:[(0,p.jsx)(l,{name:`username`,label:`Username`,description:`Try ada or admin.`,rules:[w.minLength(3,`At least 3 characters`),w.op(`usernameFree`,void 0,{async:{debounceMs:300}})]}),(0,p.jsx)(s.Submit,{className:r(),children:`Claim username`}),(0,p.jsx)(s.Status,{success:e=>(0,p.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e})})]})}var D=`import { useState } from "react"
import { catalogRegistry, kit } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"

type Account = { username: string }

/** Asks the server whether a username is taken; \`signal\` aborts the request when a newer check replaces it. */
type IsTaken = (name: string, signal: AbortSignal) => Promise<boolean>

const defaultValues: Account = { username: "" }
const { v } = kit<Account>()

// stub: replace with your API (GET /usernames/:name)
const fakeIsTaken: IsTaken = async (name, signal) => {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return !signal.aborted && ["ada", "admin", "root"].includes(name.toLowerCase())
}

export function UsernameCheck({ isTaken = fakeIsTaken }: { isTaken?: IsTaken }) {
  // A named validator: the rule refers to it by name, the registry holds the code.
  const [registry] = useState(() =>
    catalogRegistry().validator("usernameFree", {
      fn: async (value, _args, { signal }) => ((await isTaken(String(value), signal)) ? \`"\${String(value)}" is taken\` : undefined),
    }),
  )
  const form = useForm<Account, Account, string>({ defaultValues, registry, validateOn: "change" })
  return (
    <Form form={form} onSubmit={(values) => \`@\${values.username} is yours\`} className="grid w-full max-w-sm gap-3">
      <TextField
        name="username"
        label="Username"
        description="Try ada or admin."
        // The sync rule runs first; the async one waits until typing pauses for 300 ms.
        rules={[v.minLength(3, "At least 3 characters"), v.op("usernameFree", undefined, { async: { debounceMs: 300 } })]}
      />
      <Form.Submit className={buttonVariants()}>Claim username</Form.Submit>
      <Form.Status<string> success={(message) => <p className="text-sm text-muted-foreground">{message}</p>} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>t(()=>import(`./form-async-Cu1YslU2.js`),[]));function O(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,...f(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||A(`Api`,!0),r||A(`Relies`,!0),i||A(`Snippet`,!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(t.p,{children:[`This guide starts where `,(0,p.jsx)(t.a,{href:`/docs/getting-started/first-form`,children:`a first form`}),` ends: `,(0,p.jsx)(t.code,{children:`useForm`}),`, `,(0,p.jsx)(t.code,{children:`Form`}),`, fields with a `,(0,p.jsx)(t.code,{children:`name`}),`, and `,(0,p.jsx)(t.code,{children:`Form.Submit`}),`. It adds the three things most real forms need next, all from `,(0,p.jsx)(n,{package:`@kitora/form`}),`: rules that read other fields, a list of rows the person can grow and reorder, and a check that has to ask your server.`]}),`
`,(0,p.jsx)(t.h2,{children:`Rules and cross-field rules`}),`
`,(0,p.jsxs)(t.p,{children:[`A field's `,(0,p.jsx)(t.code,{children:`rules`}),` are a list built with `,(0,p.jsx)(t.code,{children:`v`}),` from `,(0,p.jsx)(t.code,{children:`kit<YourValues>()`}),`. Built-in rules cover length, ranges, patterns, email and URL; each takes the message to show. A rule can also read another field: `,(0,p.jsx)(t.code,{children:`v.matches("secret")`}),` (the name of the field to compare with) fails until the two values are equal.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`validateOn: "blur"`}),` checks a field when it loses focus, and `,(0,p.jsx)(t.code,{children:`revalidateOn: "change"`}),` checks it again on every keystroke once it shows an error, so an error clears as soon as the value is fixed. A cross-field rule runs again whenever the field it reads is checked: change the password after confirming it, and the confirm field shows the mismatch.`]}),`
`,(0,p.jsx)(i,{title:`Rules that read another field`,source:_,children:(0,p.jsx)(g,{})}),`
`,(0,p.jsx)(t.p,{children:`Try it: type a short password and leave the field, fix it, confirm it, then change the password again and leave the field. Submit stays held back until every rule passes.`}),`
`,(0,p.jsx)(t.h2,{children:`Field arrays`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`FieldArray`}),` repeats its children once per row of an array value. Inside it, a name that starts with a dot is relative to the row, so `,(0,p.jsx)(t.code,{children:`.name`}),` is `,(0,p.jsx)(t.code,{children:`guests.0.name`}),` in the first row. `,(0,p.jsx)(t.code,{children:`FieldArray.Add`}),` appends `,(0,p.jsx)(t.code,{children:`newRow`}),`, and `,(0,p.jsx)(t.code,{children:`FieldArray.RowActions`}),` gives each row its Remove and move up / move down buttons, named for the row ("Remove guest 2").`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`min`}),` and `,(0,p.jsx)(t.code,{children:`max`}),` turn Remove and Add off at the bounds, with the reason on the button. `,(0,p.jsx)(t.code,{children:`reorder`}),` adds a handle to each row: press Space on it, move with the arrow keys, and press Space again to drop. A rule on the array itself, like `,(0,p.jsx)(t.code,{children:`v.unique(".email")`}),`, compares the rows with each other.`]}),`
`,(0,p.jsx)(i,{title:`A guest list`,source:x,children:(0,p.jsx)(b,{})}),`
`,(0,p.jsx)(t.h2,{children:`Async validation`}),`
`,(0,p.jsxs)(t.p,{children:[`A check that asks your server is a named validator: you register its code in a registry with `,(0,p.jsx)(t.code,{children:`catalogRegistry().validator(name, { fn })`}),`, pass the registry to `,(0,p.jsx)(t.code,{children:`useForm`}),`, and refer to it in `,(0,p.jsx)(t.code,{children:`rules`}),` with `,(0,p.jsx)(t.code,{children:`v.op(name)`}),`. Its function gets the value and an `,(0,p.jsx)(t.code,{children:`AbortSignal`}),`, and returns a message when the value fails.`]}),`
`,(0,p.jsxs)(t.p,{children:[`With `,(0,p.jsx)(t.code,{children:`async: { debounceMs }`}),` the check waits until typing pauses, so fast typing asks once, for the last value. A newer check aborts the one before it, and a late answer to an aborted check is dropped. While a check runs, the field is marked busy (`,(0,p.jsx)(t.code,{children:`aria-busy`}),`). Submit runs the check too, and holds back while the name is taken.`]}),`
`,(0,p.jsx)(i,{title:`Is this username free?`,source:D,children:(0,p.jsx)(E,{})}),`
`,(0,p.jsxs)(t.p,{children:[`The sync rule comes first in the list, so names shorter than three letters never reach the server. The gallery has more of each: `,(0,p.jsx)(t.a,{href:`/kits/form/validation`,children:`validation`}),`, `,(0,p.jsx)(t.a,{href:`/kits/form/array`,children:`field arrays`}),`, `,(0,p.jsx)(t.a,{href:`/kits/form/reorder`,children:`reordering`}),` and `,(0,p.jsx)(t.a,{href:`/kits/form/async`,children:`async data`}),`.`]}),`
`,(0,p.jsx)(r,{on:[`packages/form/src/core/model/builders.ts`,`packages/form/src/core/model/runtime.ts`,`packages/form/src/react/field-array.tsx`,`packages/form/src/fields/field-array.tsx`,`src/docs/examples/__tests__/forms.test.tsx`]})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(O,{...e})}):O(e)}function A(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};