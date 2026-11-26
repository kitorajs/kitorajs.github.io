import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ni as a}from"./index-9y5uwRd3.js";import{A as o,Pt as s,c,p as l}from"./field-config-62hz5rv-.js";import{a as u,r as d}from"./fields-3rMiSNLY.js";import{t as f}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var p=e(n(),1),m=i(),h={name:``,email:``,plan:`free`},g=[{label:`Free`,value:`free`},{label:`Pro`,value:`pro`}],_=14,v=(e,t)=>({id:t,type:e.type,path:e.path,origin:e.type===`change`?e.origin:void 0}),y={async save(e){return{id:`lead_`+e.email}}};function b(){let e=o({defaultValues:h}),[t,n]=(0,p.useState)([]);return l(e,s,e=>n(t=>[v(e,(t[0]?.id??0)+1),...t].slice(0,_))),(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,m.jsxs)(c,{form:e,onSubmit:y.save,children:[(0,m.jsx)(u,{name:`name`,label:`Name`}),(0,m.jsx)(u,{name:`email`,label:`Email`,type:`email`}),(0,m.jsx)(d,{name:`plan`,label:`Plan`,options:g}),(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,m.jsx)(c.Submit,{className:a({size:`sm`,className:`w-fit`}),pendingLabel:`Saving…`,children:`Submit`}),(0,m.jsx)(c.Status,{className:`text-[13px]`,pending:(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,m.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>(0,m.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Saved · `,e.id]})})]})]}),(0,m.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]`,children:[(0,m.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,m.jsx)(`span`,{className:`truncate font-medium`,children:`Event stream`}),(0,m.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t.length})]}),(0,m.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:t.length===0?(0,m.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:`interact to emit events…`}):t.map(e=>(0,m.jsxs)(`div`,{className:`flex gap-2`,children:[(0,m.jsx)(`span`,{className:`rounded bg-primary/15 px-1.5 text-primary`,children:e.type}),(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:e.path||`(form)`}),e.origin?(0,m.jsx)(`span`,{className:`text-amber-700 dark:text-amber-400`,children:e.origin}):null]},e.id))})]})]})}var x=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { FORM_EVENT_TYPES, type FormEvent } from "@kitora/form/core"
import { SelectField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormEvent } from "@kitora/form/react"

type Lead = { name: string; email: string; plan: string }
/** One stream row. \`id\` is monotonic: the list key (rows are prepended and trimmed). */
type Row = { id: number; type: string; path?: string; origin?: string }

const defaultValues: Lead = { name: "", email: "", plan: "free" }
const plans = [{ label: "Free", value: "free" }, { label: "Pro", value: "pro" }]
/** How many events the stream keeps. */
const STREAM_LENGTH = 14

/** The row an event shows: type, path and (change events only) origin, read from the typed union, no casts. */
const toRow = (e: FormEvent, id: number): Row => ({ id, type: e.type, path: e.path, origin: e.type === "change" ? e.origin : undefined })

// stub: replace with your API (POST /leads)
const api = {
  async save(lead: Lead): Promise<{ id: string }> {
    return { id: "lead_" + lead.email }
  },
}

export function InstrumentedLeadForm() {
  const form = useForm<Lead>({ defaultValues })
  const [rows, setRows] = useState<Row[]>([])
  // every focus / blur / change / validate / submit event, path-tagged (change events carry their origin).
  // Subscribes once (StrictMode-safe), unsubscribes on unmount; in production feed analytics here.
  useFormEvent(form, FORM_EVENT_TYPES, (e) => setRows((prev) => [toRow(e, (prev[0]?.id ?? 0) + 1), ...prev].slice(0, STREAM_LENGTH)))
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={api.save}>
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email" type="email" />
        <SelectField name="plan" label="Plan" options={plans} />
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Saving…">Submit</Form.Submit>
          <Form.Status<{ id: string }>
            className="text-[13px]"
            pending={<span className="text-muted-foreground">Submitting…</span>}
            invalid={<span className="text-destructive">Fix the highlighted fields.</span>}
            success={(r) => <span className="text-emerald-700 dark:text-emerald-400">Saved · {r.id}</span>}
          />
        </div>
      </Form>
      <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card lg:sticky lg:top-[4.5rem]">
        <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
          <span className="truncate font-medium">Event stream</span>
          <span className="shrink-0 tabular-nums text-muted-foreground">{rows.length}</span>
        </div>
        <div className="space-y-0.5 p-3 font-mono text-[11px]">
          {rows.length === 0 ? (
            <p className="font-sans text-muted-foreground">interact to emit events…</p>
          ) : (
            rows.map((r) => (
              <div key={r.id} className="flex gap-2">
                <span className="rounded bg-primary/15 px-1.5 text-primary">{r.type}</span>
                <span className="text-muted-foreground">{r.path || "(form)"}</span>
                {r.origin ? <span className="text-amber-700 dark:text-amber-400">{r.origin}</span> : null}
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./instrumented-DM1AUVTi.js`),[]));function S(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{title:`Instrumented KYC — analytics event bus`,children:[`Every interaction emits a typed, path-tagged event; the panel reads them with `,(0,m.jsx)(`code`,{children:`useFormEvent`}),` (the same bus the `,(0,m.jsx)(`code`,{children:`analytics`}),` and`,` `,(0,m.jsx)(`code`,{children:`devtools`}),` plugins consume). It rides the per-field path-diff — no whole-store subscription, no re-render regression. Edit fields and watch the stream.`]}),(0,m.jsx)(f,{n:1,title:`Live event stream`,blurb:`Type, tab between fields and submit — every typed, path-tagged event lands in the stream on the right.`,code:x,children:(0,m.jsx)(b,{})})]})}export{S as component};