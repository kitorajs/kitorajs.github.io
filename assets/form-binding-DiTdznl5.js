import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{r as n,s as r,t as i}from"./field-BOjHUtLS.js";import{t as a}from"./input-DQo0XDsx.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-B9ukmIN1.js";import{t as u}from"./checkbox-DcWEP8V9.js";import{n as d}from"./lib-CKWRlO6G.js";var f=e(o(),1),p=c();function m(){let[e,o]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>{e.preventDefault(),o(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,p.jsxs)(i,{name:`nickname`,children:[(0,p.jsx)(r,{children:`Nickname`}),(0,p.jsx)(a,{defaultValue:`ada`}),(0,p.jsx)(n,{children:`Shown on your comments.`})]}),(0,p.jsx)(u,{name:`newsletter`,label:`Monthly newsletter`,defaultChecked:!0}),(0,p.jsx)(t,{name:`beta`,label:`Beta features`}),(0,p.jsx)(l,{type:`submit`,size:`sm`,className:`justify-self-start`,children:`Save`}),(0,p.jsx)(`p`,{role:`status`,className:`text-sm text-muted-foreground`,children:e??`Not saved yet`})]})}var h=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"
import { Switch } from "@kitora/ui/switch"

// A plain <form>: every control that holds a value takes \`name\` and posts it (a native input, or a hidden one beside a
// custom control), and inside a Field the field's name, label and description reach the control.
export function FormBinding() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="grid w-full max-w-sm gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))))
      }}
    >
      <Field name="nickname">
        <FieldLabel>Nickname</FieldLabel>
        <Input defaultValue="ada" />
        <FieldDescription>Shown on your comments.</FieldDescription>
      </Field>
      <Checkbox name="newsletter" label="Monthly newsletter" defaultChecked />
      <Switch name="beta" label="Beta features" />
      <Button type="submit" size="sm" className="justify-self-start">
        Save
      </Button>
      <p role="status" className="text-sm text-muted-foreground">
        {posted ?? "Not saved yet"}
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>s(()=>import(`./form-binding-vnGdBB9u.js`),[]));function g(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...d(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||v(`Api`,!0),r||v(`Relies`,!0),i||v(`Snippet`,!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(t.p,{children:[`Every component that holds a value works in a plain `,(0,p.jsx)(t.code,{children:`<form>`}),`, with no form library:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:(0,p.jsx)(t.code,{children:`name`})}),` posts the value with the form. A native input posts itself; a custom control (a checkbox drawn as a `,(0,p.jsx)(t.code,{children:`span`}),`, a select, a date picker) renders a hidden input beside it.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:(0,p.jsx)(t.code,{children:`Field`})}),` wires a control to its label, description and error, and passes its `,(0,p.jsx)(t.code,{children:`name`}),` down, so the control inside needs none of its own.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:(0,p.jsx)(t.code,{children:`required`})}),` uses the browser's own validation.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Submit the form below to see what it posts: the field's input under the field's name, the checked box, and nothing for the switch that is off.`}),`
`,(0,p.jsx)(i,{title:`A plain form`,source:h,children:(0,p.jsx)(m,{})}),`
`,(0,p.jsxs)(t.p,{children:[`The form engine (`,(0,p.jsx)(n,{package:`@kitora/form`}),`) builds on the same binding when you need validation rules, field arrays or a wizard; see `,(0,p.jsx)(n,{name:`Field`}),` for the parts.`]}),`
`,(0,p.jsx)(r,{on:[`packages/primitives/src/react/field/root.tsx`,`packages/primitives/src/react/form-inputs.tsx`,`packages/ui/src/field.tsx`]})]})}function _(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(g,{...e})}):g(e)}function v(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};