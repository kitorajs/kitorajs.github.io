import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-BOjHUtLS.js";import{t as o}from"./form-BNqp-Qmy.js";import{t as s}from"./brain-COFpobH3.js";import{t as c}from"./sparkles-B4LD-Yja.js";import{t as l}from"./zap-BA254TV6.js";import{t as u}from"./textarea-C8WF-XOD.js";import{Bc as d,Cc as f,Ic as p,Mi as m,ti as h}from"./index-B9ukmIN1.js";import{t as g}from"./model-selector-uML3O7Os.js";var _=m(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),v=e({ModelSelectorCompose:()=>S}),y=t(d(),1),b=p(),x=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,icon:(0,b.jsx)(c,{}),description:`Best for long, careful work.`,contextWindow:2e5,tags:[`reasoning`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,icon:(0,b.jsx)(l,{}),description:`Fast and cheap.`,contextWindow:128e3}];function S(){let[e,t]=(0,y.useState)(`orbit-small`),[n,r]=(0,y.useState)(``),[i,a]=(0,y.useState)(null),o=x.find(t=>t.id===e)?.label??`no model`;return(0,b.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-2`,children:[(0,b.jsxs)(`div`,{className:`rounded-xl border bg-background`,children:[(0,b.jsx)(u,{value:n,onChange:e=>r(e.target.value),placeholder:`Message…`,"aria-label":`Message`,className:`min-h-16 resize-none border-0 shadow-none focus-visible:ring-0`}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2 px-2 pb-2`,children:[(0,b.jsx)(g,{models:x,value:e,onValueChange:t,size:`compact`,side:`top`}),(0,b.jsx)(h,{size:`sm`,className:`ms-auto`,disabled:!n.trim(),onClick:()=>{a(`Sent to ${o}: ${n.trim()}`),r(``)},children:`Send`})]})]}),i?(0,b.jsx)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:i}):null]})}var C=e({ModelSelectorDefault:()=>T}),w=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,icon:(0,b.jsx)(c,{}),description:`Best for long, careful work.`,contextWindow:2e5,tags:[`reasoning`,`vision`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,icon:(0,b.jsx)(l,{}),description:`Fast and cheap for everyday tasks.`,contextWindow:128e3},{id:`lumen-pro`,label:`Lumen Pro`,provider:`Lumen Labs`,icon:(0,b.jsx)(s,{}),description:`A million tokens of context.`,contextWindow:1e6,tags:[`vision`]},{id:`lumen-lite`,label:`Lumen Lite`,provider:`Lumen Labs`,icon:(0,b.jsx)(_,{}),description:`Retired: no new conversations.`,contextWindow:32e3,disabled:!0}];function T(){return(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,b.jsx)(g,{models:w,defaultValue:`orbit-large`}),(0,b.jsx)(g,{models:w,defaultValue:`orbit-small`,size:`compact`})]})}var E=e({ModelSelectorForm:()=>O}),D=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,contextWindow:2e5,tags:[`reasoning`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,contextWindow:128e3},{id:`lumen-pro`,label:`Lumen Pro`,provider:`Lumen Labs`,contextWindow:1e6,tags:[`vision`]}];function O(){let[e,t]=(0,y.useState)(null);return(0,b.jsxs)(o,{className:`w-full max-w-xs gap-3`,onFormSubmit:e=>t(JSON.stringify(e)),children:[(0,b.jsxs)(a,{name:`defaultModel`,children:[(0,b.jsx)(i,{nativeLabel:!1,render:(0,b.jsx)(`div`,{}),children:`Default model`}),(0,b.jsx)(g,{models:D,name:`defaultModel`,required:!0,className:`w-full`}),(0,b.jsx)(r,{children:`New conversations start on this model.`}),(0,b.jsx)(n,{match:`valueMissing`,children:`Choose a model.`})]}),(0,b.jsx)(h,{type:`submit`,children:`Save`}),e?(0,b.jsxs)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:[`Submitted `,e]}):null]})}var k=e({ModelSelectorSearchable:()=>j}),A=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,contextWindow:2e5,tags:[`reasoning`,`vision`]},{id:`orbit-medium`,label:`Orbit Medium`,provider:`Northwind AI`,contextWindow:2e5,tags:[`vision`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,contextWindow:128e3},{id:`orbit-code`,label:`Orbit Code`,provider:`Northwind AI`,contextWindow:256e3,tags:[`reasoning`]},{id:`lumen-pro`,label:`Lumen Pro`,provider:`Lumen Labs`,contextWindow:1e6,tags:[`vision`]},{id:`lumen-flash`,label:`Lumen Flash`,provider:`Lumen Labs`,contextWindow:1e6},{id:`lumen-think`,label:`Lumen Think`,provider:`Lumen Labs`,contextWindow:5e5,tags:[`reasoning`]},{id:`lumen-lite`,label:`Lumen Lite`,provider:`Lumen Labs`,contextWindow:32e3},{id:`cedar-70`,label:`Cedar 70`,provider:`Cedar (self-hosted)`,contextWindow:128e3},{id:`cedar-8`,label:`Cedar 8`,provider:`Cedar (self-hosted)`,contextWindow:64e3},{id:`cedar-vision`,label:`Cedar Vision`,provider:`Cedar (self-hosted)`,contextWindow:64e3,tags:[`vision`]},{id:`cedar-reason`,label:`Cedar Reason`,provider:`Cedar (self-hosted)`,contextWindow:128e3,tags:[`reasoning`]}];function j(){return(0,b.jsx)(g,{models:A,defaultValue:`lumen-pro`})}var M=`import { useState } from "react"
import { Sparkles, Zap } from "lucide-react"
import { ModelSelector, type ModelOption } from "@kitora/ai-chat/ui"
import { Button } from "@kitora/ui/button"
import { Textarea } from "@kitora/ui/textarea"

const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", icon: <Sparkles />, description: "Best for long, careful work.", contextWindow: 200_000, tags: ["reasoning"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", icon: <Zap />, description: "Fast and cheap.", contextWindow: 128_000 },
]

/** A message box whose toolbar picks the model the message goes to; the sent line names it. */
export function ModelSelectorCompose() {
  const [model, setModel] = useState<string | null>("orbit-small")
  const [text, setText] = useState("")
  const [sent, setSent] = useState<string | null>(null)
  const label = MODELS.find((m) => m.id === model)?.label ?? "no model"
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="rounded-xl border bg-background">
        <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Message…" aria-label="Message" className="min-h-16 resize-none border-0 shadow-none focus-visible:ring-0" />
        <div className="flex items-center gap-2 px-2 pb-2">
          <ModelSelector models={MODELS} value={model} onValueChange={setModel} size="compact" side="top" />
          <Button
            size="sm"
            className="ms-auto"
            disabled={!text.trim()}
            onClick={() => {
              setSent(\`Sent to \${label}: \${text.trim()}\`)
              setText("")
            }}
          >
            Send
          </Button>
        </div>
      </div>
      {sent ? (
        <p className="text-xs text-muted-foreground" role="status">
          {sent}
        </p>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>f(()=>import(`./compose-D5pk77uo.js`),[]));var N=`import { Brain, Feather, Sparkles, Zap } from "lucide-react"
import { ModelSelector, type ModelOption } from "@kitora/ai-chat/ui"

const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", icon: <Sparkles />, description: "Best for long, careful work.", contextWindow: 200_000, tags: ["reasoning", "vision"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", icon: <Zap />, description: "Fast and cheap for everyday tasks.", contextWindow: 128_000 },
  { id: "lumen-pro", label: "Lumen Pro", provider: "Lumen Labs", icon: <Brain />, description: "A million tokens of context.", contextWindow: 1_000_000, tags: ["vision"] },
  { id: "lumen-lite", label: "Lumen Lite", provider: "Lumen Labs", icon: <Feather />, description: "Retired: no new conversations.", contextWindow: 32_000, disabled: true },
]

export function ModelSelectorDefault() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ModelSelector models={MODELS} defaultValue="orbit-large" />
      <ModelSelector models={MODELS} defaultValue="orbit-small" size="compact" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>f(()=>import(`./default-B-K5vOz3.js`),[]));var P=`import { useState } from "react"
import { ModelSelector, type ModelOption } from "@kitora/ai-chat/ui"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"

const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", contextWindow: 200_000, tags: ["reasoning"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", contextWindow: 128_000 },
  { id: "lumen-pro", label: "Lumen Pro", provider: "Lumen Labs", contextWindow: 1_000_000, tags: ["vision"] },
]

export function ModelSelectorForm() {
  const [submitted, setSubmitted] = useState<string | null>(null)
  return (
    <Form className="w-full max-w-xs gap-3" onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}>
      <Field name="defaultModel">
        {/* A select's label is not a native <label>: that would click the button and open the list. */}
        <FieldLabel nativeLabel={false} render={<div />}>
          Default model
        </FieldLabel>
        <ModelSelector models={MODELS} name="defaultModel" required className="w-full" />
        <FieldDescription>New conversations start on this model.</FieldDescription>
        <FieldError match="valueMissing">Choose a model.</FieldError>
      </Field>
      <Button type="submit">Save</Button>
      {submitted ? (
        <p className="text-xs text-muted-foreground" role="status">
          Submitted {submitted}
        </p>
      ) : null}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>f(()=>import(`./form-76potRom.js`),[]));var F=`import { ModelSelector, type ModelOption } from "@kitora/ai-chat/ui"

/** Twelve models over three providers: above eight the list gets a search box that matches names, providers and tags. */
const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", contextWindow: 200_000, tags: ["reasoning", "vision"] },
  { id: "orbit-medium", label: "Orbit Medium", provider: "Northwind AI", contextWindow: 200_000, tags: ["vision"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", contextWindow: 128_000 },
  { id: "orbit-code", label: "Orbit Code", provider: "Northwind AI", contextWindow: 256_000, tags: ["reasoning"] },
  { id: "lumen-pro", label: "Lumen Pro", provider: "Lumen Labs", contextWindow: 1_000_000, tags: ["vision"] },
  { id: "lumen-flash", label: "Lumen Flash", provider: "Lumen Labs", contextWindow: 1_000_000 },
  { id: "lumen-think", label: "Lumen Think", provider: "Lumen Labs", contextWindow: 500_000, tags: ["reasoning"] },
  { id: "lumen-lite", label: "Lumen Lite", provider: "Lumen Labs", contextWindow: 32_000 },
  { id: "cedar-70", label: "Cedar 70", provider: "Cedar (self-hosted)", contextWindow: 128_000 },
  { id: "cedar-8", label: "Cedar 8", provider: "Cedar (self-hosted)", contextWindow: 64_000 },
  { id: "cedar-vision", label: "Cedar Vision", provider: "Cedar (self-hosted)", contextWindow: 64_000, tags: ["vision"] },
  { id: "cedar-reason", label: "Cedar Reason", provider: "Cedar (self-hosted)", contextWindow: 128_000, tags: ["reasoning"] },
]

export function ModelSelectorSearchable() {
  return <ModelSelector models={MODELS} defaultValue="lumen-pro" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>f(()=>import(`./searchable-0z4yfnbk.js`),[]));var I={"./demos/model-selector/compose.tsx":v,"./demos/model-selector/default.tsx":C,"./demos/model-selector/form.tsx":E,"./demos/model-selector/searchable.tsx":k},L={"./demos/model-selector/compose.tsx":M,"./demos/model-selector/default.tsx":N,"./demos/model-selector/form.tsx":P,"./demos/model-selector/searchable.tsx":F};export{I as modules,L as sources};