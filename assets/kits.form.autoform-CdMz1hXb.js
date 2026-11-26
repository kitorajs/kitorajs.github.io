import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,ni as a}from"./index-q72zUtm9.js";import{d as o,u as s}from"./field-options-Ck0r8oxm.js";import{J as c,Z as l,c as u}from"./field-config-DXiPz8Cg.js";import{t as d}from"./example-B8EaWveR.js";import{i as f,n as p,r as m,t as h}from"./auto-form-BvZfA2dl.js";import{n as g}from"./question-flow-DHA9oR6s.js";import"./demos-DN9t7sug.js";import{t as _}from"./json-schema-knG_tmNQ.js";var v=e(n(),1),y=i(),b={plan:`solo`,email:``},x=[{value:`solo`,label:`Solo`},{value:`team`,label:`Team`}],S=c()(({f:e,c:t,v:n})=>({fields:[e.radio(`plan`,{label:`Plan`,required:!0,options:x}),e.email(`email`,{label:`Work email`,required:!0}),e.when(t.eq(`plan`,`team`),[e.text(`company`,{label:`Company`,required:!0}),e.number(`seats`,{label:`Seats`,rules:[n.min(2)]})])]}));function C(){let[e,t]=(0,v.useState)(null);return(0,y.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,y.jsx)(p,{def:S,defaultValues:b,cols:1,submitLabel:`Start trial`,onSubmit:e=>t(e)}),(0,y.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]`,children:[(0,y.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,y.jsx)(`span`,{className:`font-medium`,children:e?`Submitted payload`:`The definition (toJSON)`}),e?(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`✓`}):null]}),(0,y.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[360px] overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,children:JSON.stringify(e??l(S).def,null,2)})]})]})}var w=`import { useState } from "react"
import { AutoForm } from "@kitora/form/auto"
import { defineForm, toJSON } from "@kitora/form/core"

type Signup = { plan: string; email: string; company?: string; seats?: number }

const defaultValues: Signup = { plan: "solo", email: "" }
const PLANS = [{ value: "solo", label: "Solo" }, { value: "team", label: "Team" }]

const signupDef = defineForm<Signup>()(({ f, c, v }) => ({
  fields: [
    f.radio("plan", { label: "Plan", required: true, options: PLANS }),
    f.email("email", { label: "Work email", required: true }),
    // shown only for the Team plan
    f.when(c.eq("plan", "team"), [f.text("company", { label: "Company", required: true }), f.number("seats", { label: "Seats", rules: [v.min(2)] })]),
  ],
}))

export function SignupForm() {
  // stub: replace setSubmitted with your API (POST /signups); here the last payload shows beside the form
  const [submitted, setSubmitted] = useState<unknown>(null)
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <AutoForm<Signup> def={signupDef} defaultValues={defaultValues} cols={1} submitLabel="Start trial" onSubmit={(p) => setSubmitted(p)} />
      <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]">
        <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
          <span className="font-medium">{submitted ? "Submitted payload" : "The definition (toJSON)"}</span>
          {submitted ? <span className="text-muted-foreground">✓</span> : null}
        </div>
        <pre dir="ltr" tabIndex={0} className="max-h-[360px] overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring">
          {JSON.stringify(submitted ?? toJSON(signupDef).def, null, 2)}
        </pre>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./def-kduveKgY.js`),[]));var T={},{def:E}=_({type:`object`,required:[`name`,`email`],properties:{name:{type:`string`,title:`Name`,minLength:2},email:{type:`string`,title:`Email`,format:`email`},topic:{type:`string`,title:`Topic`,enum:[`sales`,`support`,`press`]},message:{type:`string`,title:`Message`,maxLength:500}}},{ui:{message:{"ui:widget":`textarea`}}});function D(){let[e,t]=(0,v.useState)(null);return(0,y.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,y.jsx)(p,{def:E,defaultValues:T,cols:1,submitLabel:`Send`,onSubmit:e=>t(e)}),(0,y.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]`,children:[(0,y.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,y.jsx)(`span`,{className:`font-medium`,children:e?`Submitted payload`:`The definition (toJSON)`}),e?(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`✓`}):null]}),(0,y.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[360px] overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,children:JSON.stringify(e??l(E).def,null,2)})]})]})}var O=`import { useState } from "react"
import { AutoForm } from "@kitora/form/auto"
import { toJSON } from "@kitora/form/core"
import { fromJSONSchema, type JSONSchema } from "@kitora/form/sources"

type Contact = Record<string, unknown>

const defaultValues: Contact = {}

// as your backend publishes it
const CONTACT_SCHEMA: JSONSchema = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string", title: "Name", minLength: 2 },
    email: { type: "string", title: "Email", format: "email" },
    topic: { type: "string", title: "Topic", enum: ["sales", "support", "press"] },
    message: { type: "string", title: "Message", maxLength: 500 },
  },
}

// required / minLength / maxLength / format / enum become field rules (messages per field);
// the result's "schema" is a whole-value Standard Schema to attach as well (e.g. on the server)
const { def } = fromJSONSchema<Contact>(CONTACT_SCHEMA, { ui: { message: { "ui:widget": "textarea" } } })

export function ContactForm() {
  // stub: replace setSubmitted with your API (POST /contact); here the last payload shows beside the form
  const [submitted, setSubmitted] = useState<unknown>(null)
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <AutoForm<Contact> def={def} defaultValues={defaultValues} cols={1} submitLabel="Send" onSubmit={(p) => setSubmitted(p)} />
      <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]">
        <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
          <span className="font-medium">{submitted ? "Submitted payload" : "The definition (toJSON)"}</span>
          {submitted ? <span className="text-muted-foreground">✓</span> : null}
        </div>
        <pre dir="ltr" tabIndex={0} className="max-h-[360px] overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring">
          {JSON.stringify(submitted ?? toJSON(def).def, null, 2)}
        </pre>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./json-schema-CmazKlq4.js`),[]));var k={first:``,last:``,email:``,notes:``},A=c()(({f:e,v:t})=>({fields:[e.text(`first`,{label:`First name`,required:!0}),e.text(`last`,{label:`Last name`,required:!0}),e.text(`email`,{label:`Email`,rules:[t.email()]}),e.textarea(`notes`,{label:`Notes`})]})),j={async save(e){console.log(`saved`,e)}};function M(){return(0,y.jsxs)(m,{def:A,defaultValues:k,onSubmit:j.save,children:[(0,y.jsxs)(o,{cols:{base:1,md:2},children:[(0,y.jsx)(h,{name:`first`}),(0,y.jsx)(h,{name:`last`}),(0,y.jsx)(s,{span:`full`,children:(0,y.jsx)(h,{name:`email`})}),(0,y.jsx)(s,{span:`full`,children:(0,y.jsx)(h,{name:`notes`})})]}),(0,y.jsx)(u.Submit,{className:a({size:`sm`,className:`w-fit`}),children:`Save contact`})]})}var N=`import { AutoField, AutoFormProvider } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"
import { Cell, FormGrid } from "@kitora/form/fields"
import { Form } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"

type Contact = { first: string; last: string; email: string; notes: string }

const defaultValues: Contact = { first: "", last: "", email: "", notes: "" }

// the rules live in the definition; the layout below is plain JSX
const contactDef = defineForm<Contact>()(({ f, v }) => ({
  fields: [
    f.text("first", { label: "First name", required: true }),
    f.text("last", { label: "Last name", required: true }),
    f.text("email", { label: "Email", rules: [v.email()] }),
    f.textarea("notes", { label: "Notes" }),
  ],
}))

// stub: replace with your API (POST /contacts)
const api = {
  async save(values: Contact): Promise<void> {
    console.log("saved", values)
  },
}

export function AutoFieldLayout() {
  return (
    <AutoFormProvider<Contact> def={contactDef} defaultValues={defaultValues} onSubmit={api.save}>
      <FormGrid cols={{ base: 1, md: 2 }}>
        <AutoField name="first" />
        <AutoField name="last" />
        {/* Cell: a grid cell that spans both columns from md up */}
        <Cell span="full">
          <AutoField name="email" />
        </Cell>
        <Cell span="full">
          <AutoField name="notes" />
        </Cell>
      </FormGrid>
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save contact</Form.Submit>
    </AutoFormProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>r(()=>import(`./auto-field-DiDWdBtR.js`),[]));var P={name:``,score:8,comment:``},F=c()(({f:e,v:t})=>({fields:[e.text(`name`,{label:`Your name`}),e.number(`score`,{label:`How likely are you to recommend us (0-10)?`,rules:[t.min(0),t.max(10)]}),e.textarea(`comment`,{label:`Anything else?`})]})),I=g(F.fields),L={async send(e){console.log(`sent`,e)}};function R(){let[e,t]=(0,v.useState)(0),n=I[e],r=e>=I.length-1;return(0,y.jsxs)(m,{def:F,defaultValues:P,onSubmit:L.send,children:[(0,y.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Question `,e+1,` of `,I.length]}),n?(0,y.jsx)(f,{node:n},n.name):null,(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(`button`,{type:`button`,disabled:e<1,onClick:()=>t(e-1),className:a({size:`sm`,variant:`outline`}),children:`Back`}),r?(0,y.jsx)(u.Submit,{className:a({size:`sm`}),children:`Send`}):(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e+1),className:a({size:`sm`}),children:`Next`})]})]})}var z=`import { AutoFormProvider, AutoQuestion, flowQuestions } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"
import { Form } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"
import { useState } from "react"

type Feedback = { name: string; score: number; comment: string }

const defaultValues: Feedback = { name: "", score: 8, comment: "" }

const feedbackDef = defineForm<Feedback>()(({ f, v }) => ({
  fields: [
    f.text("name", { label: "Your name" }),
    f.number("score", { label: "How likely are you to recommend us (0-10)?", rules: [v.min(0), v.max(10)] }),
    f.textarea("comment", { label: "Anything else?" }),
  ],
}))
// every field node of the definition, in order: one per screen
const questions = flowQuestions(feedbackDef.fields)

// stub: replace with your API (POST /feedback)
const api = {
  async send(values: Feedback): Promise<void> {
    console.log("sent", values)
  },
}

export function OneQuestionAtATime() {
  const [step, setStep] = useState(0)
  const node = questions[step]
  const last = step >= questions.length - 1
  return (
    <AutoFormProvider<Feedback> def={feedbackDef} defaultValues={defaultValues} onSubmit={api.send}>
      <p className="text-[12px] text-muted-foreground tabular-nums">
        Question {step + 1} of {questions.length}
      </p>
      {/* AutoQuestion renders one field node of the definition (its rules and widget included) */}
      {node ? <AutoQuestion key={node.name} node={node} /> : null}
      <div className="flex gap-2">
        <button type="button" disabled={step < 1} onClick={() => setStep(step - 1)} className={buttonVariants({ size: "sm", variant: "outline" })}>
          Back
        </button>
        {last ? (
          <Form.Submit className={buttonVariants({ size: "sm" })}>Send</Form.Submit>
        ) : (
          <button type="button" onClick={() => setStep(step + 1)} className={buttonVariants({ size: "sm" })}>
            Next
          </button>
        )}
      </div>
    </AutoFormProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./auto-question-DtVA9-tz.js`),[]));function B(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(t,{title:`AutoForm (definition-driven)`,children:[`Describe the form as data → get a styled, validated, isolated form. The model definition (`,(0,y.jsx)(`code`,{children:`defineForm`}),`) is the serializable model JSX also compiles to; a JSON Schema maps to the same definition through `,(0,y.jsx)(`code`,{children:`fromJSONSchema`}),`. (The older field manifest still works through `,(0,y.jsx)(`code`,{children:`fromManifest`}),`, deprecated.) Two recipes:`]}),(0,y.jsx)(d,{n:1,title:`From a definition`,blurb:`defineForm → <AutoForm def>: rules, a conditional block, and the definition's JSON beside it. Pick Team to reveal the company fields.`,code:w,children:(0,y.jsx)(C,{})}),(0,y.jsx)(d,{n:2,title:`From a JSON Schema`,blurb:`A backend's JSON Schema (+ a uiSchema widget hint) mapped by fromJSONSchema; its constraints become field rules.`,code:O,children:(0,y.jsx)(D,{})}),(0,y.jsx)(d,{n:3,title:`Your own layout with AutoField`,blurb:`AutoFormProvider holds the definition; AutoField places each generated field in a FormGrid, and Cell makes a field span both columns.`,code:N,children:(0,y.jsx)(M,{})}),(0,y.jsx)(d,{n:4,title:`One question per screen with AutoQuestion`,blurb:`flowQuestions lists the definition's fields; AutoQuestion renders one at a time with your own Back / Next buttons.`,code:z,children:(0,y.jsx)(R,{})})]})}export{B as component};