import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./input-C8M4VLUF.js";import{Bc as r,Cc as i,Ic as a}from"./index-q72zUtm9.js";import{t as o}from"./inline-edit-DiuSYUUX.js";import{r as s,s as c,t as l}from"./field-options-Ck0r8oxm.js";import{W as u,n as d}from"./messages-Bsb0m0Hq.js";import{A as f,E as p,c as m,h,r as g}from"./field-config-DXiPz8Cg.js";import{a as _,i as v}from"./fields-CoJCsIMd.js";import{t as y}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var b=e(r(),1),x=a();function S({name:e,...t}){let r=d(),i=p(e,l(t,`text`)),[a,u]=(0,b.useState)(!1),f=typeof i.value==`string`?i.value:``,m=c(i.id,i.error,t.description);return(0,x.jsx)(s,{hidden:!i.active,readOnly:i.readOnly,htmlFor:i.id,error:i.error,warning:i.warning,validating:i.validating,label:t.label,description:t.description,required:i.required,span:t.span,readOnlyContent:(0,x.jsx)(g,{value:f||void 0}),submitAs:{name:i.name,value:i.value,native:a},children:(0,x.jsxs)(o.Root,{value:f,disabled:t.disabled||i.disabled,placeholder:t.placeholder??r.t(`field.empty`),onEditingChange:u,onSubmit:e=>{i.setValue(e),i.onBlur()},children:[(0,x.jsx)(o.Preview,{id:i.id,"aria-labelledby":i.labelledBy,"aria-describedby":m}),(0,x.jsx)(o.Input,{render:e=>(0,x.jsx)(n,{...e.inputProps,id:i.id,"aria-labelledby":i.labelledBy,"aria-describedby":m,"aria-invalid":i.error?!0:e.inputProps[`aria-invalid`],name:i.name,value:e.value,placeholder:t.placeholder,className:`h-7`,onChange:t=>e.setValue(t.target.value),onFocus:i.onFocus})})]})})}var C={displayName:`Ada`,handle:`ada`,digest:!0,project:`Analytical Engine`},w=500,T={async patchSettings(e){if(await new Promise(e=>setTimeout(e,w)),JSON.stringify(e).includes(`fail`))throw Error(`server rejected the value`)}};function E(){let e=f({defaultValues:C,autosave:{on:`blur`,save:T.patchSettings}});return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,x.jsxs)(m,{form:e,layout:`none`,className:`flex flex-col gap-4`,children:[(0,x.jsx)(_,{name:`displayName`,label:`Display name`,description:`Saved when you leave the field. Type “fail” to see the retry.`}),` `,(0,x.jsx)(_,{name:`handle`,label:`Handle`,prefix:`@`}),(0,x.jsx)(v,{name:`digest`,label:`Weekly digest`}),(0,x.jsx)(S,{name:`project`,label:`Project name (inline edit)`,description:`Click or press Enter to edit; Enter saves, Escape restores the saved value.`}),` `]}),(0,x.jsx)(D,{form:e})]})}function D({form:e}){let{payload:t,dirty:n,status:r,issues:i}=h(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),u);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,x.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var O=`import { InlineEditField, SwitchField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Settings = { displayName: string; handle: string; digest: boolean; project: string }

const defaultValues: Settings = { displayName: "Ada", handle: "ada", digest: true, project: "Analytical Engine" }

const LATENCY_MS = 500

// stub: replace with your API (PATCH /settings) — reject to show "Couldn't save · Retry"; the fake request takes 500 ms
const api = {
  async patchSettings(patch: Record<string, unknown>): Promise<void> {
    await new Promise((res) => setTimeout(res, LATENCY_MS))
    if (JSON.stringify(patch).includes("fail")) throw new Error("server rejected the value")
  },
}

export function SettingsForm() {
  const form = useForm<Settings>({
    defaultValues,
    autosave: { on: "blur", save: api.patchSettings }, // or on: "change", debounceMs: 600
  })
  // the saved field is committed (clean); a newer edit of the same field wins; fields save in parallel
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} layout="none" className="flex flex-col gap-4">
        <TextField name="displayName" label="Display name" description="Saved when you leave the field. Type “fail” to see the retry." /> {/* Saving… / Saved / Couldn't save · Retry */}
        <TextField name="handle" label="Handle" prefix="@" />
        <SwitchField name="digest" label="Weekly digest" />
        <InlineEditField name="project" label="Project name (inline edit)" description="Click or press Enter to edit; Enter saves, Escape restores the saved value." /> {/* click to edit, Enter saves, Esc restores */}
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>i(()=>import(`./autosave-BQal5GTs.js`),[]));function k(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{title:`Per-field autosave`,children:`No submit button: each field saves as you leave it, shows its own status, and becomes clean once saved. Failures keep the edit with a retry.`}),(0,x.jsx)(y,{n:1,title:`Settings page`,blurb:`Autosave on blur with a 500 ms fake PATCH, plus an inline-edit field.`,code:O,children:(0,x.jsx)(E,{})})]})}export{k as component};