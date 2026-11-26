import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-CyrZpl8n.js";import{t as o}from"./form-I0-vq70A.js";import{t as s}from"./textarea-BQPz--El.js";import{Bc as c,Cc as l,Ic as u,ti as d}from"./index-9y5uwRd3.js";import{t as f}from"./label-BCdE7eBP.js";var p=e({TextareaComposeFeedbackForm:()=>_}),m=t(c(),1),h=u(),g=280;function _(){let e=(0,m.useId)(),[t,n]=(0,m.useState)(``);return(0,h.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,h.jsxs)(`form`,{className:`grid w-full max-w-sm gap-2`,onSubmit:e=>e.preventDefault(),children:[(0,h.jsx)(f,{htmlFor:e,children:`Feedback`}),(0,h.jsx)(s,{id:e,value:t,maxLength:g,onChange:e=>n(e.target.value),placeholder:`What could be better?`}),(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,h.jsxs)(`span`,{className:`text-xs tabular-nums text-muted-foreground`,children:[t.length,`/`,g,` characters`]}),(0,h.jsx)(d,{type:`submit`,size:`sm`,disabled:t.trim()===``,children:`Send`})]})]})})}var v=e({TextareaDefault:()=>y});function y(){return(0,h.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,h.jsxs)(`div`,{className:`grid w-full max-w-md gap-1.5`,children:[(0,h.jsx)(f,{htmlFor:`msg`,children:`Message`}),(0,h.jsx)(s,{id:`msg`,placeholder:`Tell us what's on your mind…`,rows:3})]})})}var b=e({TextareaInAField:()=>x});function x(){return(0,h.jsxs)(o,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>e.preventDefault(),children:[(0,h.jsxs)(a,{name:`bio`,validationMode:`onBlur`,validate:e=>String(e??``).trim().length<20?`Write at least 20 characters.`:null,children:[(0,h.jsx)(i,{children:`Bio`}),(0,h.jsx)(s,{required:!0,maxRows:6,placeholder:`A few words about you`}),(0,h.jsx)(r,{children:`Shown on your public profile.`}),(0,h.jsx)(n,{match:`valueMissing`,children:`Tell us something about you.`}),(0,h.jsx)(n,{match:`customError`})]}),(0,h.jsx)(d,{type:`submit`,size:`sm`,className:`justify-self-start`,children:`Save`})]})}var S=e({TextareaMaxRows:()=>C});function C(){return(0,h.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,h.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,h.jsx)(f,{htmlFor:`notes-rows`,children:`Release notes`}),(0,h.jsx)(s,{id:`notes-rows`,minRows:2,maxRows:5,placeholder:`Grows from two lines to five, then scrolls.`,defaultValue:`Fixed the export button.
Faster search.`})]})})}var w=`import { useId, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Label } from "@kitora/ui/label"
import { Textarea } from "@kitora/ui/textarea"

const MAX = 280

export function TextareaComposeFeedbackForm() {
  const id = useId()
  const [text, setText] = useState("")
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <form className="grid w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
        <Label htmlFor={id}>Feedback</Label>
        <Textarea id={id} value={text} maxLength={MAX} onChange={(e) => setText(e.target.value)} placeholder="What could be better?" />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs tabular-nums text-muted-foreground">
            {text.length}/{MAX} characters
          </span>
          <Button type="submit" size="sm" disabled={text.trim() === ""}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>l(()=>import(`./compose-Cjd4jVZj.js`),[]));var T=`import { Label } from "@kitora/ui/label"
import { Textarea } from "@kitora/ui/textarea"

export function TextareaDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-md gap-1.5">
        <Label htmlFor="msg">Message</Label>
        <Textarea id="msg" placeholder="Tell us what's on your mind…" rows={3} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>l(()=>import(`./default-BUew71TG.js`),[]));var E=`import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Textarea } from "@kitora/ui/textarea"

export function TextareaInAField() {
  return (
    <Form className="grid w-full max-w-sm gap-3" onSubmit={(e) => e.preventDefault()}>
      <Field name="bio" validationMode="onBlur" validate={(value) => (String(value ?? "").trim().length < 20 ? "Write at least 20 characters." : null)}>
        <FieldLabel>Bio</FieldLabel>
        <Textarea required maxRows={6} placeholder="A few words about you" />
        <FieldDescription>Shown on your public profile.</FieldDescription>
        <FieldError match="valueMissing">Tell us something about you.</FieldError>
        <FieldError match="customError" />
      </Field>
      <Button type="submit" size="sm" className="justify-self-start">
        Save
      </Button>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>l(()=>import(`./in-a-field-Bk_WxXIT.js`),[]));var D=`import { Label } from "@kitora/ui/label"
import { Textarea } from "@kitora/ui/textarea"

export function TextareaMaxRows() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="notes-rows">Release notes</Label>
        <Textarea
          id="notes-rows"
          minRows={2}
          maxRows={5}
          placeholder="Grows from two lines to five, then scrolls."
          defaultValue={"Fixed the export button.\\nFaster search."}
        />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>l(()=>import(`./max-rows-BFaPREhI.js`),[]));var O={"./demos/textarea/compose.tsx":p,"./demos/textarea/default.tsx":v,"./demos/textarea/in-a-field.tsx":b,"./demos/textarea/max-rows.tsx":S},k={"./demos/textarea/compose.tsx":w,"./demos/textarea/default.tsx":T,"./demos/textarea/in-a-field.tsx":E,"./demos/textarea/max-rows.tsx":D};export{O as modules,k as sources};