import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-BOjHUtLS.js";import{t as o}from"./form-BNqp-Qmy.js";import{t as s}from"./input-DQo0XDsx.js";import{Bc as c,Cc as l,Ic as u,ti as d}from"./index-B9ukmIN1.js";import{t as f}from"./badge-uhFB8J9R.js";var p=e({FormComposeInvite:()=>g}),m=t(c(),1),h=u();function g(){let e=(0,m.useRef)(null),[t,c]=(0,m.useState)([]);return(0,h.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3 rounded-md border border-border bg-card p-4`,children:[(0,h.jsxs)(o,{validationMode:`onBlur`,actionsRef:e,onFormSubmit:e=>c(t=>[...t,String(e.email)]),children:[(0,h.jsxs)(a,{name:`email`,children:[(0,h.jsx)(i,{children:`Invite a teammate`}),(0,h.jsx)(s,{type:`email`,required:!0,placeholder:`grace@example.com`}),(0,h.jsx)(n,{}),(0,h.jsx)(r,{children:`They get an email with a link.`})]}),(0,h.jsxs)(`div`,{className:`flex gap-2`,children:[(0,h.jsx)(d,{type:`submit`,size:`sm`,children:`Send invite`}),(0,h.jsx)(d,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>e.current?.validate(),children:`Check now`})]})]}),(0,h.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,"aria-label":`Invited`,children:t.map((e,t)=>(0,h.jsx)(`li`,{children:(0,h.jsx)(f,{variant:`secondary`,children:e})},`${e}-${t}`))})]})}var _=e({FormServerErrors:()=>v});function v(){let[e,t]=(0,m.useState)({});return(0,h.jsxs)(o,{className:`max-w-sm`,errors:e,onFormSubmit:e=>{t(String(e.username).toLowerCase()===`ada`?{username:`That username is taken.`}:{})},children:[(0,h.jsxs)(a,{name:`username`,children:[(0,h.jsx)(i,{children:`Username`}),(0,h.jsx)(s,{defaultValue:`ada`}),(0,h.jsx)(n,{})]}),(0,h.jsx)(d,{type:`submit`,className:`self-start`,children:`Claim username`})]})}var y=e({FormSubmit:()=>b});function b(){let[e,t]=(0,m.useState)(null);return(0,h.jsxs)(o,{className:`max-w-sm`,onFormSubmit:t,children:[(0,h.jsxs)(a,{name:`email`,children:[(0,h.jsx)(i,{children:`Email`}),(0,h.jsx)(s,{type:`email`,required:!0}),(0,h.jsx)(n,{})]}),(0,h.jsxs)(a,{name:`age`,validate:e=>Number(e)>=18?null:`You must be 18 or older.`,children:[(0,h.jsx)(i,{children:`Age`}),(0,h.jsx)(s,{type:`number`,required:!0}),(0,h.jsx)(n,{})]}),(0,h.jsx)(d,{type:`submit`,className:`self-start`,children:`Send`}),(0,h.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-muted p-2 text-xs`,"aria-live":`polite`,children:e?JSON.stringify(e):`Nothing submitted yet.`})]})}var x=`import { useRef, useState } from "react"
import type { FormActions } from "@kitora/primitives/react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Input } from "@kitora/ui/input"

export function FormComposeInvite() {
  const actionsRef = useRef<FormActions>(null)
  const [sent, setSent] = useState<string[]>([])
  return (
    <div className="grid w-full max-w-sm gap-3 rounded-md border border-border bg-card p-4">
      <Form
        validationMode="onBlur"
        actionsRef={actionsRef}
        onFormSubmit={(values) => setSent((list) => [...list, String(values.email)])}
      >
        <Field name="email">
          <FieldLabel>Invite a teammate</FieldLabel>
          <Input type="email" required placeholder="grace@example.com" />
          <FieldError />
          <FieldDescription>They get an email with a link.</FieldDescription>
        </Field>
        <div className="flex gap-2">
          <Button type="submit" size="sm">
            Send invite
          </Button>
          <Button type="button" size="sm" variant="outline" onClick={() => actionsRef.current?.validate()}>
            Check now
          </Button>
        </div>
      </Form>
      <ul className="flex flex-wrap gap-1.5" aria-label="Invited">
        {sent.map((email, index) => (
          <li key={\`\${email}-\${index}\`}>
            <Badge variant="secondary">{email}</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>l(()=>import(`./compose-BVYDVbNV.js`),[]));var S=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Input } from "@kitora/ui/input"

/** \`errors\` shows what a server said under the matching field and moves focus to it; editing the field clears its error. */
export function FormServerErrors() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  return (
    <Form
      className="max-w-sm"
      errors={errors}
      onFormSubmit={(values) => {
        const taken = String(values.username).toLowerCase() === "ada"
        setErrors(taken ? { username: "That username is taken." } : {})
      }}
    >
      <Field name="username">
        <FieldLabel>Username</FieldLabel>
        <Input defaultValue="ada" />
        <FieldError />
      </Field>
      <Button type="submit" className="self-start">
        Claim username
      </Button>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>l(()=>import(`./server-errors-B6-gR357.js`),[]));var C=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Input } from "@kitora/ui/input"

/** A failed submit is blocked and focuses the first invalid control; a valid one hands the named fields' values to \`onFormSubmit\`. */
export function FormSubmit() {
  const [values, setValues] = useState<Record<string, unknown> | null>(null)
  return (
    <Form className="max-w-sm" onFormSubmit={setValues}>
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" required />
        <FieldError />
      </Field>
      <Field name="age" validate={(value) => (Number(value) >= 18 ? null : "You must be 18 or older.")}>
        <FieldLabel>Age</FieldLabel>
        <Input type="number" required />
        <FieldError />
      </Field>
      <Button type="submit" className="self-start">
        Send
      </Button>
      <pre className="overflow-x-auto rounded-md bg-muted p-2 text-xs" aria-live="polite">
        {values ? JSON.stringify(values) : "Nothing submitted yet."}
      </pre>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>l(()=>import(`./submit-Cyb1jjsp.js`),[]));var w={"./demos/form/compose.tsx":p,"./demos/form/server-errors.tsx":_,"./demos/form/submit.tsx":y},T={"./demos/form/compose.tsx":x,"./demos/form/server-errors.tsx":S,"./demos/form/submit.tsx":C};export{w as modules,T as sources};