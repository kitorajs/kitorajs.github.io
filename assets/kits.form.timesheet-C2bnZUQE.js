import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,ni as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,J as o,c as s,h as c,s as l}from"./field-config-DXiPz8Cg.js";import{t as u}from"./editable-grid-BB9AY4rW.js";import{t as d}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var f=n(),p={rows:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`].map(e=>({day:e,task:``}))},m=[{key:`day`,header:`Day`,editor:`text`,width:90},{key:`task`,header:`Task`,editor:`text`,width:260},{key:`hours`,header:`Hrs`,editor:`number`,width:80}],h=e=>typeof e==`number`?e+` h`:`0 h`,g={async save(e){console.log(e)}},_=o()(({f:e,c:t,e:n,v:r})=>({fields:[e.array(`rows`,{newRow:{day:`Sat`,task:``}},e=>[e.text(`day`,{required:!0}),e.text(`task`),e.number(`hours`,{rules:[r.min(0),r.max(24)]})])],derived:{total:n.sum(`rows`,e=>e.ref(`hours`))},validate:[r.assert(t.lte(n.ref(`total`),60),`More than 60 hours in a week`,{path:`total`})],actions:{fillWeek:[{set:`rows.*.hours`,to:8}]}}));function v(){let e=a({defaultValues:p,model:_});return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,f.jsxs)(s,{form:e,onSubmit:e=>g.save(e),children:[(0,f.jsx)(`button`,{type:`button`,onClick:()=>e.run(`fillWeek`),children:`Bulk fill 8h`}),`  `,(0,f.jsx)(u,{name:`rows`,label:`Timesheet`,columns:m,height:240,newRow:()=>({day:`Sat`,task:``})}),(0,f.jsx)(l.Display,{name:`total`,label:`Week total`,render:h,live:!0}),(0,f.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Submit week`})]}),(0,f.jsx)(y,{form:e})]})}function y({form:e}){let t=c(e,e=>e.serialize(),i);return(0,f.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,f.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,f.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var b=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, defineForm } from "@kitora/form/core"
import { EditableGrid, type GridColumn } from "@kitora/form/fields"
import { Field, Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Entry = { day: string; task: string; hours?: number }
type Timesheet = { rows: Entry[]; total?: number }

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const defaultValues: Timesheet = { rows: DAYS.map((day) => ({ day, task: "" })) }
const COLUMNS: GridColumn[] = [
  { key: "day", header: "Day", editor: "text", width: 90 },
  { key: "task", header: "Task", editor: "text", width: 260 },
  { key: "hours", header: "Hrs", editor: "number", width: 80 },
]
const hours = (v: unknown) => (typeof v === "number" ? v + " h" : "0 h")

// stub: replace with your API (PUT /timesheets/:week)
const api = {
  async save(sheet: Timesheet): Promise<void> {
    console.log(sheet)
  },
}

// rows, their rules, the derived total, the 60-hour assertion and the bulk action are all model data
const def = defineForm<Timesheet>()(({ f, c, e, v }) => ({
  fields: [f.array("rows", { newRow: { day: "Sat", task: "" } }, (r) => [
    r.text("day", { required: true }), r.text("task"), r.number("hours", { rules: [v.min(0), v.max(24)] }),
  ])],
  derived: { total: e.sum("rows", (r) => r.ref("hours")) },
  validate: [v.assert(c.lte(e.ref("total"), 60), "More than 60 hours in a week", { path: "total" })],
  actions: { fillWeek: [{ set: "rows.*.hours", to: 8 }] },
}))

export function TimesheetForm() {
  const form = useForm<Timesheet>({ defaultValues, model: def })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(sheet) => api.save(sheet)}>
        <button type="button" onClick={() => form.run("fillWeek")}>Bulk fill 8h</button>  {/* one undo step */}
        {/* arrow keys, type-to-edit, paste from a spreadsheet; virtualized */}
        <EditableGrid name="rows" label="Timesheet" columns={COLUMNS} height={240} newRow={() => ({ day: "Sat", task: "" })} />
        <Field.Display name="total" label="Week total" render={hours} live />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Submit week</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./week-BXb3hCrU.js`),[]));var x={rows:Array.from({length:500},(e,t)=>({day:`Day ${t+1}`,task:t%7==0?`Planning`:``,hours:t%7<5?8:0}))},S=[{key:`day`,header:`Day`,editor:`text`,width:90},{key:`task`,header:`Task`,editor:`text`,width:260},{key:`hours`,header:`Hrs`,editor:`number`,width:80}],C=e=>typeof e==`number`?e+` h`:`0 h`,w=o()(({f:e,c:t,e:n,v:r})=>({fields:[e.array(`rows`,{newRow:{day:`Sat`,task:``}},e=>[e.text(`day`,{required:!0}),e.text(`task`),e.number(`hours`,{rules:[r.min(0),r.max(24)]})])],derived:{total:n.sum(`rows`,e=>e.ref(`hours`))},validate:[r.assert(t.lte(n.ref(`total`),60),`More than 60 hours in a week`,{path:`total`})],actions:{fillWeek:[{set:`rows.*.hours`,to:8}]}}));function T(){return(0,f.jsxs)(s,{form:a({defaultValues:x,model:w}),children:[(0,f.jsx)(u,{name:`rows`,label:`Year of entries`,columns:S,height:320,bulkEdit:!0}),(0,f.jsx)(l.Display,{name:`total`,label:`Total`,render:C,live:!0})]})}var E=`import { defineForm } from "@kitora/form/core"
import { EditableGrid, type GridColumn } from "@kitora/form/fields"
import { Field, Form, useForm } from "@kitora/form/react"

type Entry = { day: string; task: string; hours?: number }
type Timesheet = { rows: Entry[]; total?: number }

// a year of daily entries: the grid renders only the visible rows
const YEAR: Entry[] = Array.from({ length: 500 }, (_, i) => ({ day: \`Day \${i + 1}\`, task: i % 7 === 0 ? "Planning" : "", hours: i % 7 < 5 ? 8 : 0 }))
const defaultValues: Timesheet = { rows: YEAR }
const COLUMNS: GridColumn[] = [
  { key: "day", header: "Day", editor: "text", width: 90 },
  { key: "task", header: "Task", editor: "text", width: 260 },
  { key: "hours", header: "Hrs", editor: "number", width: 80 },
]
const hours = (v: unknown) => (typeof v === "number" ? v + " h" : "0 h")

// rows, their rules, the derived total, the 60-hour assertion and the bulk action are all model data
const def = defineForm<Timesheet>()(({ f, c, e, v }) => ({
  fields: [f.array("rows", { newRow: { day: "Sat", task: "" } }, (r) => [
    r.text("day", { required: true }), r.text("task"), r.number("hours", { rules: [v.min(0), v.max(24)] }),
  ])],
  derived: { total: e.sum("rows", (r) => r.ref("hours")) },
  validate: [v.assert(c.lte(e.ref("total"), 60), "More than 60 hours in a week", { path: "total" })],
  actions: { fillWeek: [{ set: "rows.*.hours", to: 8 }] },
}))

// the same definition over 500 rows; bulkEdit adds select-and-fill across rows
export function YearTimesheet() {
  const form = useForm<Timesheet>({ defaultValues, model: def })
  return (
    <Form form={form}>
      <EditableGrid name="rows" label="Year of entries" columns={COLUMNS} height={320} bulkEdit />
      <Field.Display name="total" label="Total" render={hours} live />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./year-41vgyzm5.js`),[]));var D=500;function O(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(e,{title:`Timesheet grid`,children:`A row-per-day editable grid: arrow keys, type-to-edit, paste from a spreadsheet. The weekly total is a model-derived value, the 60-hour cap is a form-level assertion, and "fill 8h" is a named action — all in the definition. The grid is virtualized, so the 500-row example renders only the visible rows.`}),(0,f.jsx)(d,{n:1,title:`One week`,blurb:`Fill 8h, then push a day past 24h or the week past 60h to see the rules.`,code:b,children:(0,f.jsx)(v,{})}),(0,f.jsx)(d,{n:2,title:`${D} rows (virtualized)`,blurb:`The same definition over a year of entries; scroll — only the visible rows are in the DOM.`,code:E,children:(0,f.jsx)(T,{})})]})}export{O as component};