import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,zc as n}from"./index-BZuUy872.js";import{W as r}from"./messages-CylclMLI.js";import{A as i,c as a,h as o}from"./field-config-53O_jYuu.js";import{a as s}from"./fields-DyVcPE0c.js";import{t as c}from"./field-array-M2_MqL16.js";import{t as l}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var u=n(),d={items:[{topic:`Welcome`,owner:`Ada`},{topic:`Roadmap review`,owner:`Grace`},{topic:`Hiring`,owner:`Linus`},{topic:`Open questions`,owner:`Barbara`}]};function f(){let e=i({defaultValues:d});return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,u.jsxs)(a,{form:e,layout:`none`,className:`flex flex-col gap-2`,children:[(0,u.jsxs)(c,{name:`items`,label:`Agenda`,rowLabel:`Agenda item`,reorder:!0,layout:`table`,children:[(0,u.jsx)(s,{name:`.topic`,label:`Topic`}),(0,u.jsx)(s,{name:`.owner`,label:`Owner`}),(0,u.jsx)(c.RowActions,{move:!0}),`   `]}),(0,u.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Drag a row by its grip (mouse or touch; Escape cancels). Or Tab to a grip, press Space, move with ↑/↓, Space to drop. Each step is announced.`})]}),(0,u.jsx)(p,{form:e})]})}function p({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,u.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,u.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,u.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,u.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,u.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,u.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var m=`import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Agenda = { items: Array<{ topic: string; owner: string }> }

const defaultValues: Agenda = {
  items: [{ topic: "Welcome", owner: "Ada" }, { topic: "Roadmap review", owner: "Grace" }, { topic: "Hiring", owner: "Linus" }, { topic: "Open questions", owner: "Barbara" }],
}

export function AgendaForm() {
  const form = useForm<Agenda>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} layout="none" className="flex flex-col gap-2">
        {/* drag a grip (mouse/touch, Escape cancels), or Tab to it, Space, ↑/↓, Space to drop */}
        {/* the catalog FieldArray drags with dndKitDrag() (the DnD kit) by default; any DragSeam can replace it: drag={seam} */}
        <FieldArray name="items" label="Agenda" rowLabel="Agenda item" reorder layout="table">
          <TextField name=".topic" label="Topic" />
          <TextField name=".owner" label="Owner" />
          <FieldArray.RowActions move />   {/* ↑ / ↓ buttons as well */}
        </FieldArray>
        <p className="text-[12px] text-muted-foreground">
          Drag a row by its grip (mouse or touch; Escape cancels). Or Tab to a grip, press Space, move with ↑/↓, Space to drop. Each step is announced.
        </p>
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
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./reorder-CvPDejvc.js`),[]));function h(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e,{title:`Reorder`,children:`Pointer drag-and-drop on the DnD kit (mouse and touch, with a lifted row, the other rows making room and edge auto-scroll), keyboard reorder with screen-reader announcements, and move buttons. Moves keep each row's field state (errors, touched) with the row.`}),(0,u.jsx)(l,{n:1,title:`Meeting agenda`,blurb:`Drag a grip, or grab it with Space and move with the arrow keys.`,code:m,children:(0,u.jsx)(f,{})})]})}export{h as component};