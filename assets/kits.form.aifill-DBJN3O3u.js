import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ii as i,ri as a,zc as o}from"./index-BZuUy872.js";import{W as s}from"./messages-CylclMLI.js";import{A as c,Y as l,c as u,h as d,p as f}from"./field-config-53O_jYuu.js";import{a as p,o as m,r as h}from"./fields-DyVcPE0c.js";import{t as g}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var _=e(r(),1),v=o(),y={title:``,priority:`low`,description:``},b=[{value:`low`,label:`Low`},{value:`high`,label:`High`}],x=[{value:`web`,label:`Web`},{value:`mobile`,label:`Mobile`}],{c:S}=l(),C={async fileTicket(e){console.log(`filed`,e)}};function w(){let e=c({defaultValues:y}),[t,n]=(0,_.useState)([]);return f(e,`change`,e=>n(t=>[{id:(t[0]?.id??0)+1,text:`${e.path??`(form)`} ← ${e.origin}`},...t].slice(0,8))),(0,v.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,v.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,v.jsxs)(u,{form:e,onSubmit:C.fileTicket,children:[(0,v.jsx)(p,{name:`title`,label:`Title`,required:!0}),(0,v.jsx)(h,{name:`priority`,label:`Priority`,options:b}),(0,v.jsx)(m,{name:`description`,label:`Description`,rows:4}),(0,v.jsx)(m,{name:`impact`,label:`Customer impact`,rows:2,required:!0,visibleIf:S.eq(`priority`,`high`)}),(0,v.jsx)(h,{name:`oncall`,label:`Page on-call team`,options:x,required:!0,visibleIf:S.eq(`priority`,`high`)}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(u.Submit,{className:i({size:`sm`,className:`w-fit`}),pendingLabel:`Filing…`,children:`File ticket`}),(0,v.jsx)(u.Status,{className:`text-[13px]`,success:()=>(0,v.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Filed`})})]})]}),(0,v.jsx)(a,{className:`self-start`,type:`button`,variant:`outline`,size:`sm`,onClick:()=>e.batch(()=>{e.setValue(`title`,`Login button unresponsive on Safari`),e.setValue(`priority`,`high`),e.setValue(`description`,`Reported via voice: tapping Login does nothing on iOS Safari 17.`),e.setValue(`impact`,`All iOS Safari users are blocked at sign-in.`),e.setValue(`oncall`,`mobile`)},{origin:`programmatic`}),children:`AI fill (programmatic)`}),(0,v.jsxs)(`aside`,{className:`overflow-hidden rounded-lg border bg-card`,children:[(0,v.jsx)(`div`,{className:`flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium`,children:`Origin log`}),(0,v.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:t.length===0?(0,v.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:`edit a field or hit AI fill…`}):t.map(e=>(0,v.jsx)(`div`,{children:e.text},e.id))})]})]}),(0,v.jsx)(T,{form:e})]})}function T({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,v.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,v.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,v.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,v.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,v.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,v.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,v.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var E=`import { useState } from "react"
import { Button, buttonVariants } from "@kitora/ui/button"
import { deepEqual, kit, type Issue, type SubmitStatus } from "@kitora/form/core"
import { SelectField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormEvent, useFormSnapshot } from "@kitora/form/react"

type Ticket = { title: string; priority: string; description: string; impact?: string; oncall?: string }

const defaultValues: Ticket = { title: "", priority: "low", description: "" }
const PRIORITIES = [{ value: "low", label: "Low" }, { value: "high", label: "High" }]
const ONCALL = [{ value: "web", label: "Web" }, { value: "mobile", label: "Mobile" }]
const { c } = kit<Ticket>()

// stub: replace with your API (POST /tickets)
const api = {
  async fileTicket(values: Ticket): Promise<void> {
    console.log("filed", values)
  },
}

export function TicketForm() {
  const form = useForm<Ticket>({ defaultValues })
  const [log, setLog] = useState<{ id: number; text: string }[]>([])
  // origin tells machine-authored values ("programmatic") from human edits ("user")
  useFormEvent(form, "change", (e) => setLog((l) => [{ id: (l[0]?.id ?? 0) + 1, text: \`\${e.path ?? "(form)"} ← \${e.origin}\` }, ...l].slice(0, 8)))

  // an agent / voice transcript: ONE batch = one undo step, origin "programmatic" on every change.
  // It switches the High branch on AND fills it — the branch mounts with the values in place.
  const aiFill = () =>
    form.batch(() => {
      form.setValue("title", "Login button unresponsive on Safari")
      form.setValue("priority", "high")
      form.setValue("description", "Reported via voice: tapping Login does nothing on iOS Safari 17.")
      form.setValue("impact", "All iOS Safari users are blocked at sign-in.")
      form.setValue("oncall", "mobile")
    }, { origin: "programmatic" })

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div className="flex flex-col gap-3">
      <Form form={form} onSubmit={api.fileTicket}>
        <TextField name="title" label="Title" required />
        <SelectField name="priority" label="Priority" options={PRIORITIES} />
        <TextareaField name="description" label="Description" rows={4} />
        {/* 'priority' is the sibling field above */}
        <TextareaField name="impact" label="Customer impact" rows={2} required visibleIf={c.eq("priority", "high")} />
        {/* 'priority' is the sibling field above */}
        <SelectField name="oncall" label="Page on-call team" options={ONCALL} required visibleIf={c.eq("priority", "high")} />
        <div className="flex items-center gap-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Filing…">File ticket</Form.Submit>
          <Form.Status className="text-[13px]" success={() => <span className="text-emerald-700 dark:text-emerald-400">Filed</span>} />
        </div>
      </Form>
      <Button className="self-start" type="button" variant="outline" size="sm" onClick={aiFill}>AI fill (programmatic)</Button>
      {/* the origin log: machine-authored writes read "programmatic", human edits "user" */}
      <aside className="overflow-hidden rounded-lg border bg-card">
        <div className="flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium">Origin log</div>
        <div className="space-y-0.5 p-3 font-mono text-[11px]">
          {log.length === 0 ? <p className="font-sans text-muted-foreground">edit a field or hit AI fill…</p> : log.map((l) => <div key={l.id}>{l.text}</div>)}
        </div>
      </aside>
      </div>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./aifill-CkR0zWWB.js`),[]));function D(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(t,{title:`AI / voice fill — programmatic origin, into a conditional branch`,children:[`An agent fills the form in one `,(0,v.jsx)(`code`,{children:`form.batch(…, { origin: "programmatic" })`}),`. Its values include the High-priority branch (`,(0,v.jsx)(`code`,{children:`visibleIf priority = "high"`}),`) that the same batch switches on, and they all land: nothing is dropped by the branch mounting. The origin enum (`,(0,v.jsx)(`code`,{children:`user`}),` / `,(0,v.jsx)(`code`,{children:`external`}),` /`,` `,(0,v.jsx)(`code`,{children:`programmatic`}),`) lets the event stream tell machine-authored values from human edits.`]}),(0,v.jsx)(g,{n:1,title:`Agent fill into a branch`,blurb:`Hit AI fill: one programmatic batch switches on the High branch and fills it; then edit a field and compare origins in the log.`,code:E,children:(0,v.jsx)(w,{})})]})}export{D as component};