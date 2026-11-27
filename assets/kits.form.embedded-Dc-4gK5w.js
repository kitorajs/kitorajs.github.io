import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{W as o}from"./messages-CylclMLI.js";import{A as s,c,d as l,h as u}from"./field-config-53O_jYuu.js";import{a as d,o as f}from"./fields-DyVcPE0c.js";import{t as p}from"./field-array-M2_MqL16.js";import{t as m}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var h=e(r(),1),g=a(),_={heading:`Getting started`,items:[{type:`faq`,question:`Is there a free plan?`,answer:`Yes, up to 3 projects.`}]},v={type:`faq`,question:``,answer:``},y={type:`step`,title:``,detail:``},b={type:`tab`,label:``,content:``},x={type:`step`,title:`Install the CLI`,detail:`Run the installer from the docs.`},S=6;function C(){let[e,t]=(0,h.useState)({stack:[_],at:0}),[n,r]=(0,h.useState)([]),a=e.stack[e.at]??_,o=e=>r(t=>[{id:(t[0]?.id??0)+1,text:e},...t].slice(0,S)),u=e=>t(t=>({stack:[...t.stack.slice(0,t.at+1),e],at:t.at+1})),m=s({defaultValues:_,value:a,onChange:(e,{origin:t})=>{u(e),o(`form → host (${t})`)}});return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,g.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,g.jsx)(i,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>{t(e=>({...e,at:Math.max(0,e.at-1)})),o(`host undo → form (external)`)},disabled:e.at===0,children:`Undo (host)`}),(0,g.jsx)(i,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>{t(e=>({...e,at:Math.min(e.stack.length-1,e.at+1)})),o(`host redo → form (external)`)},disabled:e.at>=e.stack.length-1,children:`Redo (host)`}),(0,g.jsx)(i,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>{u({...a,items:[...a.items,x]}),o(`host insert → form (external)`)},children:`Insert step from toolbar (host)`})]}),(0,g.jsxs)(c,{form:m,children:[(0,g.jsx)(d,{name:`heading`,label:`Heading`}),(0,g.jsxs)(p,{name:`items`,label:`Blocks`,rowLabel:`Block`,newRow:v,layout:`cards`,children:[(0,g.jsx)(`div`,{className:`flex flex-col gap-3`,children:(0,g.jsxs)(l,{of:`.type`,children:[(0,g.jsxs)(l.Case,{is:`faq`,children:[(0,g.jsx)(d,{name:`.question`,label:`Question`,required:!0}),(0,g.jsx)(f,{name:`.answer`,label:`Answer`,rows:2})]}),(0,g.jsxs)(l.Case,{is:`step`,children:[(0,g.jsx)(d,{name:`.title`,label:`Step title`,required:!0}),(0,g.jsx)(f,{name:`.detail`,label:`Detail`,rows:2})]}),(0,g.jsxs)(l.Case,{is:`tab`,children:[(0,g.jsx)(d,{name:`.label`,label:`Tab label`,required:!0}),(0,g.jsx)(f,{name:`.content`,label:`Tab content`,rows:2})]})]})}),(0,g.jsx)(p.RowActions,{move:!0,remove:!0})]}),(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,g.jsx)(p.Add,{to:`items`,value:()=>v,children:`FAQ`}),(0,g.jsx)(p.Add,{to:`items`,value:()=>y,children:`Step`}),(0,g.jsx)(p.Add,{to:`items`,value:()=>b,children:`Tab`})]})]}),(0,g.jsx)(w,{title:`Origin log`,children:(0,g.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:n.length===0?(0,g.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:`edit a block, or use the host buttons…`}):n.map(e=>(0,g.jsx)(`div`,{children:e.text},e.id))})})]}),(0,g.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,g.jsx)(E,{form:m}),(0,g.jsx)(w,{title:`Host document`,meta:`rev ${e.at+1} / ${e.stack.length}`,children:(0,g.jsx)(T,{value:a})})]})]})}function w({title:e,meta:t,children:n}){return(0,g.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,g.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,g.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,g.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),n]})}function T({value:e}){return(0,g.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(e,null,2)})}function E({form:e}){return(0,g.jsx)(w,{title:`Live payload`,children:(0,g.jsx)(T,{value:u(e,e=>e.serialize(),o)})})}var D=`import { useState, type ReactNode } from "react"
import { Button } from "@kitora/ui/button"
import { deepEqual } from "@kitora/form/core"
import { FieldArray, TextField, TextareaField } from "@kitora/form/fields"
import { Form, type SnapshotSource, Variant, useForm, useFormSnapshot } from "@kitora/form/react"

// type aliases (not interfaces): row literals are assigned to the JSON \`newRow\`
type FaqBlock = { type: "faq"; question: string; answer: string }
type StepBlock = { type: "step"; title: string; detail: string }
type TabBlock = { type: "tab"; label: string; content: string }
type Doc = { heading: string; items: Array<FaqBlock | StepBlock | TabBlock> }
type History = { stack: Doc[]; at: number }
type LogLine = { id: number; text: string }

const defaultValues: Doc = { heading: "Getting started", items: [{ type: "faq", question: "Is there a free plan?", answer: "Yes, up to 3 projects." }] }
const NEW_FAQ: FaqBlock = { type: "faq", question: "", answer: "" }
const NEW_STEP: StepBlock = { type: "step", title: "", detail: "" }
const NEW_TAB: TabBlock = { type: "tab", label: "", content: "" }
/** What the host's "insert from toolbar" pushes in (a host-side edit). */
const HOST_STEP: StepBlock = { type: "step", title: "Install the CLI", detail: "Run the installer from the docs." }
/** How many origin-log lines the panel keeps. */
const LOG_LENGTH = 6

export function BlockEditor() {
  // the HOST editor owns the document and its undo history, not the form
  const [history, setHistory] = useState<History>({ stack: [defaultValues], at: 0 })
  const [log, setLog] = useState<LogLine[]>([])
  const doc = history.stack[history.at] ?? defaultValues
  const note = (text: string) => setLog((l) => [{ id: (l[0]?.id ?? 0) + 1, text }, ...l].slice(0, LOG_LENGTH))
  const commit = (next: Doc) => setHistory((h) => ({ stack: [...h.stack.slice(0, h.at + 1), next], at: h.at + 1 }))

  // controlled mode: host writes (undo, redo, a toolbar insert) apply with origin "external" and are
  // never echoed back; only USER edits reach onChange, which pushes a new host revision
  const form = useForm<Doc>({
    defaultValues,
    value: doc,
    onChange: (next, { origin }) => {
      commit(next)
      note(\`form → host (\${origin})\`)
    },
  })

  const undo = () => {
    setHistory((h) => ({ ...h, at: Math.max(0, h.at - 1) }))
    note("host undo → form (external)")
  }
  const redo = () => {
    setHistory((h) => ({ ...h, at: Math.min(h.stack.length - 1, h.at + 1) }))
    note("host redo → form (external)")
  }
  const insertFromHost = () => {
    commit({ ...doc, items: [...doc.items, HOST_STEP] })
    note("host insert → form (external)")
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" size="sm" onClick={undo} disabled={history.at === 0}>Undo (host)</Button>
          <Button type="button" variant="outline" size="sm" onClick={redo} disabled={history.at >= history.stack.length - 1}>Redo (host)</Button>
          <Button type="button" variant="outline" size="sm" onClick={insertFromHost}>Insert step from toolbar (host)</Button>
        </div>
        <Form form={form}>
          <TextField name="heading" label="Heading" />
          <FieldArray name="items" label="Blocks" rowLabel="Block" newRow={NEW_FAQ} layout="cards">
            <div className="flex flex-col gap-3">
              {/* polymorphic rows: '.type' is the sibling field of each row that picks the case */}
              <Variant of=".type">
                <Variant.Case is="faq">
                  <TextField name=".question" label="Question" required />
                  <TextareaField name=".answer" label="Answer" rows={2} />
                </Variant.Case>
                <Variant.Case is="step">
                  <TextField name=".title" label="Step title" required />
                  <TextareaField name=".detail" label="Detail" rows={2} />
                </Variant.Case>
                <Variant.Case is="tab">
                  <TextField name=".label" label="Tab label" required />
                  <TextareaField name=".content" label="Tab content" rows={2} />
                </Variant.Case>
              </Variant>
            </div>
            <FieldArray.RowActions move remove />
          </FieldArray>
          <div className="flex flex-wrap gap-2">
            <FieldArray.Add to="items" value={() => NEW_FAQ}>FAQ</FieldArray.Add>
            <FieldArray.Add to="items" value={() => NEW_STEP}>Step</FieldArray.Add>
            <FieldArray.Add to="items" value={() => NEW_TAB}>Tab</FieldArray.Add>
          </div>
        </Form>
        <Panel title="Origin log">
          <div className="space-y-0.5 p-3 font-mono text-[11px]">
            {log.length === 0 ? <p className="font-sans text-muted-foreground">edit a block, or use the host buttons…</p> : log.map((l) => <div key={l.id}>{l.text}</div>)}
          </div>
        </Panel>
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <Payload form={form} />
        <Panel title="Host document" meta={\`rev \${history.at + 1} / \${history.stack.length}\`}>
          <Json value={doc} />
        </Panel>
      </div>
    </div>
  )
}

/** A titled readout box beside the form; not part of it. */
function Panel({ title, meta, children }: { title: ReactNode; meta?: ReactNode; children: ReactNode }) {
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
        <span className="truncate font-medium">{title}</span>
        {meta !== undefined ? <span className="shrink-0 tabular-nums text-muted-foreground">{meta}</span> : null}
      </div>
      {children}
    </aside>
  )
}

/** JSON reads left to right on an RTL page too; focusable because a region that scrolls must be keyboard-reachable. */
function Json({ value }: { value: unknown }) {
  return (
    <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
      {JSON.stringify(value, null, 2)}
    </pre>
  )
}

/** What the form would submit, live. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <Panel title="Live payload">
      <Json value={payload} />
    </Panel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./embedded-Cz08Dj9K.js`),[]));function O(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(t,{title:`Editor-embedded subform — controlled mode`,children:[`The host editor owns the document and its undo history; the form is controlled with `,(0,g.jsx)(`code`,{children:`useForm({ value, onChange })`}),`. Host writes (undo, redo, a toolbar insert) apply with origin `,(0,g.jsx)(`code`,{children:`external`}),` and never echo back; only user edits reach `,(0,g.jsx)(`code`,{children:`onChange`}),`. The document is `,(0,g.jsx)(`code`,{children:`items[]`}),` of polymorphic FAQ / step / tab blocks — a Variant on each row's `,(0,g.jsx)(`code`,{children:`.type`}),`.`]}),(0,g.jsx)(m,{n:1,title:`Controlled block editor`,blurb:`Edit a block (user edit → host revision), then Undo / Redo / Insert from the host toolbar — host writes apply as external and never echo.`,code:D,children:(0,g.jsx)(C,{})})]})}export{O as component};