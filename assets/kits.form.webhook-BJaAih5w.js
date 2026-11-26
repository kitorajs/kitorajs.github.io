import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{W as i}from"./messages-BpgLhfTN.js";import{A as a,Y as o,c as s,d as c,et as l,h as u}from"./field-config-62hz5rv-.js";import{a as d,o as f,r as p}from"./fields-3rMiSNLY.js";import{n as m}from"./advanced-Bge4sOmt.js";import{t as h}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var g=n(),_=[`GET`,`POST`,`PUT`,`DELETE`].map(e=>({value:e,label:e})),v={method:`POST`,url:``,headers:[{key:`Content-Type`,value:`application/json`}]},y=l().validator(`json`,{fn:e=>{if(!(typeof e!=`string`||e.trim()===``))try{JSON.parse(e);return}catch{return`Must be valid JSON`}}}),{v:b}=o(),x={async saveWebhook(e){}};function S(){let e=a({defaultValues:v,registry:y,validateOn:`blur`});return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,g.jsxs)(s,{form:e,onSubmit:x.saveWebhook,children:[(0,g.jsx)(p,{name:`method`,label:`Method`,options:_}),(0,g.jsx)(d,{name:`url`,label:`URL`,type:`url`,required:!0,placeholder:`https://api.example.com/hook`,rules:[b.url(`Valid URL required`)]}),(0,g.jsx)(m,{name:`headers`,label:`Headers`}),(0,g.jsx)(c,{of:`method`,children:(0,g.jsx)(c.Case,{is:[`POST`,`PUT`],children:(0,g.jsx)(f,{name:`body`,label:`JSON body`,rows:5,rules:[b.op(`json`)]})})}),(0,g.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Save webhook`})]}),(0,g.jsx)(C,{form:e})]})}function C({form:e}){let t=u(e,e=>e.serialize(),i);return(0,g.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,g.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,g.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var w=`import { buttonVariants } from "@kitora/ui/button"
import { catalogRegistry, deepEqual, kit } from "@kitora/form/core"
import { KeyValueField, SelectField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"

type Webhook = {
  method: "GET" | "POST" | "PUT" | "DELETE"
  url: string
  headers: Array<{ key: string; value: string }>
  body?: string // only in the payload for POST / PUT
}

const methods = ["GET", "POST", "PUT", "DELETE"].map((m) => ({ value: m, label: m }))
const defaultValues: Webhook = { method: "POST", url: "", headers: [{ key: "Content-Type", value: "application/json" }] }

// a named validator (serializable by name): empty is valid, required handles empty
const registry = catalogRegistry().validator("json", {
  fn: (value) => {
    if (typeof value !== "string" || value.trim() === "") return undefined
    try {
      JSON.parse(value)
      return undefined
    } catch {
      return "Must be valid JSON"
    }
  },
})
const { v } = kit<Webhook>()

// stub: replace with your API (POST /webhooks)
const api = { async saveWebhook(_hook: Webhook): Promise<void> {} }

export function WebhookForm() {
  const form = useForm<Webhook>({ defaultValues, registry, validateOn: "blur" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.saveWebhook}>
        <SelectField name="method" label="Method" options={methods} />
        <TextField name="url" label="URL" type="url" required placeholder="https://api.example.com/hook" rules={[v.url("Valid URL required")]} />
        <KeyValueField name="headers" label="Headers" />
        <Variant of="method">
          {/* one Case for both write methods: the body is declared once and unregisters for GET / DELETE */}
          <Variant.Case is={["POST", "PUT"]}>
            <TextareaField name="body" label="JSON body" rows={5} rules={[v.op("json")]} />
          </Variant.Case>
        </Variant>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save webhook</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>t(()=>import(`./webhook-D3WJUVGz.js`),[]));function T(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(e,{title:`Webhook / API request builder`,children:[`Method discriminant + validated URL + key/value headers + a JSON body that only appears for write methods: one`,` `,(0,g.jsx)(`code`,{children:`Variant.Case is={["POST", "PUT"]}`}),`, so the body is declared once and is never in the payload for GET/DELETE. The body is validated as JSON by a named validator.`]}),(0,g.jsx)(h,{n:1,title:`Request builder`,blurb:`Pick a method: the JSON body appears only for POST / PUT and is validated by a named json validator.`,code:w,children:(0,g.jsx)(S,{})})]})}export{T as component};