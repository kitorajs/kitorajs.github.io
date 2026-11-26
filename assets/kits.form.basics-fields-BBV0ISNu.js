import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n,ni as r}from"./index-B9ukmIN1.js";import{i,o as a,r as o}from"./field-options-CrzCnxI5.js";import{A as s,c,r as l,s as u}from"./field-config-17kME8Vl.js";import{a as d,i as f,r as p,t as m}from"./fields-CwxxBZgA.js";import{t as h}from"./async-select-NZnKPMvh.js";import{t as g}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var _=n(),v={userId:``},y=[{id:`u1`,name:`Ada Lovelace`},{id:`u2`,name:`Alan Turing`},{id:`u3`,name:`Grace Hopper`}],b={async search(e){return y.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))}};function x(){return(0,_.jsx)(c,{form:s({defaultValues:v}),children:(0,_.jsx)(h,{name:`userId`,label:`Assignee`,placeholder:`Search people…`,loadOptions:async({query:e})=>(await b.search(e)).map(e=>({value:e.id,label:e.name}))})})}var S=`import { AsyncSelectField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Assignee = { userId: string }
type User = { id: string; name: string }

const defaultValues: Assignee = { userId: "" }

// stub: replace with your API (GET /users?q=…)
const USERS: User[] = [{ id: "u1", name: "Ada Lovelace" }, { id: "u2", name: "Alan Turing" }, { id: "u3", name: "Grace Hopper" }]
const api = {
  async search(query: string): Promise<User[]> {
    return USERS.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
  },
}

export function AsyncSelectBasic() {
  const form = useForm<Assignee>({ defaultValues })
  return (
    <Form form={form}>
      {/* debounced as you type; an older response never overwrites a newer one */}
      <AsyncSelectField
        name="userId"
        label="Assignee"
        placeholder="Search people…"
        loadOptions={async ({ query }) => (await api.search(query)).map((u) => ({ value: u.id, label: u.name }))}
      />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./async-select-DGNha5tN.js`),[]));var C={terms:!1,emails:!0};function w(){return(0,_.jsxs)(c,{form:s({defaultValues:C}),children:[(0,_.jsx)(m,{name:`terms`,label:`I accept the terms`,required:!0}),(0,_.jsx)(f,{name:`emails`,label:`Product emails`,description:`About once a month`})]})}var T=`import { CheckboxField, SwitchField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Preferences = { terms: boolean; emails: boolean }

const defaultValues: Preferences = { terms: false, emails: true }

export function CheckboxSwitchBasic() {
  const form = useForm<Preferences>({ defaultValues })
  return (
    <Form form={form}>
      {/* both hold a boolean; required on a checkbox means it must be ticked */}
      <CheckboxField name="terms" label="I accept the terms" required />
      <SwitchField name="emails" label="Product emails" description="About once a month" />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./checkbox-switch-D0NmeSIr.js`),[]));var E={priority:`normal`},D=[{value:`low`,label:`Low`},{value:`normal`,label:`Normal`},{value:`high`,label:`High`}];function O(){return(0,_.jsx)(c,{form:s({defaultValues:E}),children:(0,_.jsx)(p,{name:`priority`,label:`Priority`,options:D})})}var k=`import { SelectField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Ticket = { priority: string }

const defaultValues: Ticket = { priority: "normal" }
const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
]

export function SelectBasic() {
  const form = useForm<Ticket>({ defaultValues })
  return (
    <Form form={form}>
      {/* stores the option's value; shows its label */}
      <SelectField name="priority" label="Priority" options={PRIORITIES} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>t(()=>import(`./select-Uyc3q9bG.js`),[]));var A={name:``};function j(){return(0,_.jsx)(c,{form:s({defaultValues:A}),children:(0,_.jsx)(d,{name:`name`,label:`Name`,placeholder:`Ada Lovelace`,description:`As it appears on your badge`})})}var M=`import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Profile = { name: string }

const defaultValues: Profile = { name: "" }

export function TextFieldBasic() {
  const form = useForm<Profile>({ defaultValues })
  return (
    <Form form={form}>
      {/* name is the key in the values; the field reads and writes it */}
      <TextField name="name" label="Name" placeholder="Ada Lovelace" description="As it appears on your badge" />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>t(()=>import(`./text-field-Dg1cF4tn.js`),[]));var N={handle:``,rating:3},P=20,F=[1,2,3,4,5];function I(){return(0,_.jsxs)(c,{form:s({defaultValues:N}),children:[(0,_.jsx)(u,{name:`handle`,children:e=>(0,_.jsx)(o,{htmlFor:e.id,label:`Handle`,description:`Letters and digits`,error:e.error,readOnly:e.readOnly,readOnlyContent:(0,_.jsx)(l,{value:e.value?`@${e.value}.dev`:void 0}),children:(0,_.jsx)(a,{prefix:`@`,suffix:`.dev`,counter:!0,length:e.value.length,maxLength:P,children:(0,_.jsx)(`input`,{id:e.id,name:`handle`,value:e.value,maxLength:P,onChange:t=>e.setValue(t.target.value),onBlur:e.onBlur,onFocus:e.onFocus,className:`h-7 w-full rounded-lg border border-input bg-transparent px-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring`})})})}),(0,_.jsx)(u,{name:`rating`,children:e=>(0,_.jsxs)(o,{htmlFor:e.id,label:`Rating`,group:!0,children:[(0,_.jsx)(`div`,{className:`flex gap-1`,children:F.map(t=>(0,_.jsx)(`button`,{type:`button`,"aria-pressed":e.value>=t,"aria-label":`${t} of ${F.length}`,onClick:()=>e.setValue(t),className:r({size:`sm`,variant:e.value>=t?`default`:`outline`}),children:`★`},t))}),(0,_.jsx)(i,{name:`rating`,value:e.value})]})})]})}var L=`import { FieldShell, NativeValue, ReadOnlyValue, TextChrome } from "@kitora/form/fields"
import { Field, Form, useForm } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"

type Profile = { handle: string; rating: number }

const defaultValues: Profile = { handle: "", rating: 3 }
const MAX_HANDLE = 20
const STARS = [1, 2, 3, 4, 5]

export function CustomFieldParts() {
  const form = useForm<Profile>({ defaultValues })
  return (
    <Form form={form}>
      <Field<string> name="handle">
        {(f) => (
          <FieldShell htmlFor={f.id} label="Handle" description="Letters and digits" error={f.error} readOnly={f.readOnly} readOnlyContent={<ReadOnlyValue value={f.value ? \`@\${f.value}.dev\` : undefined} />}>
            {/* TextChrome: prefix + suffix adornments and a character counter around your own input */}
            <TextChrome prefix="@" suffix=".dev" counter length={f.value.length} maxLength={MAX_HANDLE}>
              <input
                id={f.id}
                name="handle"
                value={f.value}
                maxLength={MAX_HANDLE}
                onChange={(e) => f.setValue(e.target.value)}
                onBlur={f.onBlur}
                onFocus={f.onFocus}
                className="h-7 w-full rounded-lg border border-input bg-transparent px-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </TextChrome>
          </FieldShell>
        )}
      </Field>
      <Field<number> name="rating">
        {(f) => (
          <FieldShell htmlFor={f.id} label="Rating" group>
            <div className="flex gap-1">
              {STARS.map((n) => (
                <button key={n} type="button" aria-pressed={f.value >= n} aria-label={\`\${n} of \${STARS.length}\`} onClick={() => f.setValue(n)} className={buttonVariants({ size: "sm", variant: f.value >= n ? "default" : "outline" })}>
                  ★
                </button>
              ))}
            </div>
            {/* buttons post nothing: NativeValue writes hidden inputs so a native submit still sends rating */}
            <NativeValue name="rating" value={f.value} />
          </FieldShell>
        )}
      </Field>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>t(()=>import(`./custom-field-BDEehNnw.js`),[]));function R(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(e,{title:`Basics: fields`,children:[`One field per example: create a store with `,(0,_.jsx)(`code`,{children:`useForm`}),`, wrap the fields in `,(0,_.jsx)(`code`,{children:`Form`}),`, and give each field the name of its value.`]}),(0,_.jsx)(g,{n:1,title:`One text field`,blurb:`The whole setup: a typed value, its defaults, the store and one field.`,code:M,children:(0,_.jsx)(j,{})}),(0,_.jsx)(g,{n:2,title:`A select`,blurb:`Static options; the value is the option's value, the label is what you see.`,code:k,children:(0,_.jsx)(O,{})}),(0,_.jsx)(g,{n:3,title:`A checkbox and a switch`,blurb:`Both hold a boolean. A required checkbox must be ticked.`,code:T,children:(0,_.jsx)(w,{})}),(0,_.jsx)(g,{n:4,title:`An async select`,blurb:`Options come from a loader as you type: debounced, and an older answer never replaces a newer one.`,code:S,children:(0,_.jsx)(x,{})}),(0,_.jsx)(g,{n:5,title:`A custom field from parts`,blurb:`Field + FieldShell around your own control: TextChrome adds the @ / .dev adornments and a counter, NativeValue posts a button-group value in a native submit, ReadOnlyValue is what the shell shows when the form is read only.`,code:L,children:(0,_.jsx)(I,{})})]})}export{R as component};