import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n,s as r,t as i}from"./field-DApIfONr.js";import{t as a}from"./form-BwzByG5g.js";import{t as o}from"./input-C8M4VLUF.js";import{Bc as s,Cc as c,Ic as l,ti as u}from"./index-q72zUtm9.js";import{a as d,c as f,i as p,l as m,o as h,r as g,s as _,t as v}from"./dialog-DUcAD2bv.js";import{n as y}from"./lib-CDU_56K6.js";var b=e(s(),1),x=l();function S(){let[e,s]=(0,b.useState)(null);return(0,x.jsxs)(a,{className:`w-full max-w-sm gap-3`,onFormSubmit:e=>s(String(e.email)),children:[(0,x.jsxs)(i,{name:`email`,children:[(0,x.jsx)(r,{required:!0,children:`Email`}),(0,x.jsx)(o,{type:`email`,required:!0}),(0,x.jsx)(n,{children:`We send the receipt here.`}),(0,x.jsx)(t,{match:`valueMissing`,children:`Enter your email.`}),(0,x.jsx)(t,{match:`typeMismatch`,children:`That is not an email address.`})]}),(0,x.jsx)(u,{type:`submit`,size:`sm`,className:`self-start`,children:`Pay`}),(0,x.jsx)(`p`,{role:`status`,className:`text-sm text-muted-foreground`,children:e?`Receipt goes to ${e}`:`Not paid yet`})]})}var C=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Input } from "@kitora/ui/input"

// A field that names and describes its control with no ids to wire: the label is the input's accessible name, the
// description is read with it, and an error joins the description once the field is invalid. The asterisk is drawn
// for sight only (\`aria-hidden\`); \`required\` on the input is what validates and announces it. Form blocks a failed
// submit and moves focus to the first invalid control.
export function AccessibleField() {
  const [sent, setSent] = useState<string | null>(null)
  return (
    <Form className="w-full max-w-sm gap-3" onFormSubmit={(values) => setSent(String(values.email))}>
      <Field name="email">
        <FieldLabel required>Email</FieldLabel>
        <Input type="email" required />
        <FieldDescription>We send the receipt here.</FieldDescription>
        <FieldError match="valueMissing">Enter your email.</FieldError>
        <FieldError match="typeMismatch">That is not an email address.</FieldError>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Pay
      </Button>
      <p role="status" className="text-sm text-muted-foreground">
        {sent ? \`Receipt goes to \${sent}\` : "Not paid yet"}
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./accessible-field-ZUa3IzlL.js`),[]));function w(){return(0,x.jsxs)(v,{children:[(0,x.jsx)(m,{render:(0,x.jsx)(u,{variant:`outline`}),children:`Rename project`}),(0,x.jsxs)(p,{children:[(0,x.jsxs)(_,{children:[(0,x.jsx)(f,{children:`Rename project`}),(0,x.jsx)(d,{children:`The new name shows in the sidebar and in links.`})]}),(0,x.jsxs)(i,{name:`name`,children:[(0,x.jsx)(r,{children:`Name`}),(0,x.jsx)(o,{defaultValue:`Apollo`})]}),(0,x.jsxs)(h,{children:[(0,x.jsx)(g,{render:(0,x.jsx)(u,{variant:`outline`}),children:`Cancel`}),(0,x.jsx)(g,{render:(0,x.jsx)(u,{}),children:`Save`})]})]})]})}var T=`import { Button } from "@kitora/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
import { Field, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"

// A dialog owns focus while it is open: opening moves focus inside, Tab stays inside, and Escape or a close button
// puts focus back on the trigger. The title names the dialog and the description describes it.
export function DialogFocus() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Rename project</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename project</DialogTitle>
          <DialogDescription>The new name shows in the sidebar and in links.</DialogDescription>
        </DialogHeader>
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="Apollo" />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>c(()=>import(`./dialog-focus-BngZVnW3.js`),[]));function E(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...y(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||O(`Api`,!0),r||O(`Relies`,!0),i||O(`Snippet`,!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.p,{children:`The components bring their own roles, keys and focus handling. Two things stay with you: give every control a label, and give every dialog a title. This page shows both, then where to find each component's keyboard map and how Kitora checks all of it.`}),`
`,(0,x.jsx)(t.h2,{children:`Labels and descriptions`}),`
`,(0,x.jsxs)(t.p,{children:[`Put a control inside a `,(0,x.jsx)(n,{name:`Field`}),` and the field wires it up, with no ids to pass:`]}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`FieldLabel`}),` is the control's accessible name, and `,(0,x.jsx)(t.code,{children:`FieldDescription`}),` is read with it.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`FieldLabel required`}),` draws an asterisk that screen readers skip; `,(0,x.jsx)(t.code,{children:`required`}),` on the control is what validates and announces it.`]}),`
`,(0,x.jsxs)(t.li,{children:[`When the field is invalid, the control gets `,(0,x.jsx)(t.code,{children:`aria-invalid`}),` and the matching `,(0,x.jsx)(t.code,{children:`FieldError`}),` joins its description.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`Form`}),` blocks a submit that fails and moves focus to the first invalid control.`]}),`
`]}),`
`,(0,x.jsx)(t.p,{children:`Press Pay with the field empty to see the error and where focus lands.`}),`
`,(0,x.jsx)(i,{title:`A labelled and described field`,source:C,children:(0,x.jsx)(S,{})}),`
`,(0,x.jsx)(t.h2,{children:`Focus in dialogs`}),`
`,(0,x.jsxs)(t.p,{children:[`A `,(0,x.jsx)(n,{name:`Dialog`}),` owns focus while it is open: opening it moves focus inside, Tab from the last control wraps to the first (and Shift+Tab back), and Escape or any `,(0,x.jsx)(t.code,{children:`Close`}),` part closes it and puts focus back on the trigger. `,(0,x.jsx)(t.code,{children:`DialogTitle`}),` is the dialog's accessible name and `,(0,x.jsx)(t.code,{children:`DialogDescription`}),` its description.`]}),`
`,(0,x.jsx)(i,{title:`A dialog that returns focus`,source:T,children:(0,x.jsx)(w,{})}),`
`,(0,x.jsx)(t.h2,{children:`Keyboard maps`}),`
`,(0,x.jsxs)(t.p,{children:[`Each `,(0,x.jsx)(t.code,{children:`/components`}),` page built on a primitive names the WAI-ARIA pattern it follows with that pattern's roles, and where the primitive's meta has a keyboard map, it shows it as a Keyboard table (every key, the part it acts on and what it does): see the `,(0,x.jsx)(t.a,{href:`/components/tabs#api-reference-keyboard`,children:`Tabs keyboard map`}),` or the `,(0,x.jsx)(t.a,{href:`/components/select#api-reference-keyboard`,children:`Select keyboard map`}),`. The tables are generated from each primitive's meta, and a test renders the page's demos, presses every key on the part the table names and checks its effect, and checks that the pattern's roles are rendered, so a table that drifts from the code fails. When you build your own component from the parts (see `,(0,x.jsx)(t.a,{href:`/docs/guides/build-your-own`,children:`Build your own component`}),`), the parts keep these keys.`]}),`
`,(0,x.jsx)(t.h2,{children:`How Kitora checks`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Tests in jsdom`}),` prove names, descriptions, focus and keys, like this page's own test, and the rebuild tests compare the accessible tree of a rebuilt component with the real one.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`axe in the browser smokes.`}),` `,(0,x.jsx)(t.code,{children:`task components:smoke`}),` loads every `,(0,x.jsx)(t.code,{children:`/components`}),` page in headless Chrome and runs axe-core in light and dark, failing on any serious or critical issue; the kits' smokes (dnd, windows, dock, sidebar and more) run axe on their own pages the same way.`]}),`
`]}),`
`,(0,x.jsxs)(t.p,{children:[`Right-to-left reading has its own page: `,(0,x.jsx)(t.a,{href:`/docs/guides/rtl`,children:`Right to left`}),`.`]}),`
`,(0,x.jsx)(r,{on:[`packages/primitives/src/react/field/root.tsx`,`packages/ui/src/field.tsx`,`packages/ui/src/form.tsx`,`packages/ui/src/dialog.tsx`,`packages/primitives/src/core/meta/index.ts`,`src/kit/components/__tests__/meta.test.tsx`,`src/kit/reference/component-reference.tsx`,`scripts/components-smoke.mjs`,`src/docs/examples/__tests__/accessibility.test.tsx`]})]})}function D(e={}){let{wrapper:t}={...y(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(E,{...e})}):E(e)}function O(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};