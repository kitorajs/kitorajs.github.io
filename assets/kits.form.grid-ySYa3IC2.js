import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ni as a,ti as o}from"./index-9y5uwRd3.js";import{A as s,G as c,J as l,M as u,c as d,et as f}from"./field-config-62hz5rv-.js";import{a as p}from"./fields-3rMiSNLY.js";import{n as m}from"./choice-ZQTH2Ken.js";import{t as h}from"./editable-grid-v1DL6S5_.js";import{t as g}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";import{n as _}from"./json-schema-knG_tmNQ.js";var v=e(n()),y=i(),b=[{value:`active`,label:`Active`},{value:`draft`,label:`Draft`}],x=1e3,S=499,C={rows:Array.from({length:x},(e,t)=>t===S?{sku:`SKU-${String(t+1).padStart(4,`0`)}`,name:``,price:-5,status:`draft`}:{sku:`SKU-${String(t+1).padStart(4,`0`)}`,name:`Item ${t+1}`,price:Math.round(t*37%500+999)/100,status:b[t%b.length].value})},w=l()(({f:e,v:t})=>({fields:[e.array(`rows`,{newRow:{sku:``,name:``,status:`draft`}},e=>[e.text(`sku`,{required:!0}),e.text(`name`,{required:!0}),e.number(`price`,{rules:[t.min(0,`Price can't be negative`)]}),e.select(`status`,{options:b})])]})),T=[{key:`sku`,header:`SKU`,editor:`text`,width:120},{key:`name`,header:`Name`,editor:`text`,width:200},{key:`price`,header:`Price`,editor:`number`,format:e=>typeof e==`number`?e.toFixed(2):``},{key:`status`,header:`Status`,editor:`select`,options:b}];function E(){let e=u();return(0,y.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,y.jsx)(o,{className:`w-fit`,type:`button`,variant:`outline`,size:`xs`,disabled:!e.canUndo,onClick:e.undo,children:`Undo`}),(0,y.jsx)(o,{className:`w-fit`,type:`button`,variant:`outline`,size:`xs`,disabled:!e.canRedo,onClick:e.redo,children:`Redo`})]})}function D(){return(0,y.jsxs)(d,{form:s({defaultValues:C,model:w,validateOn:`mount`,revalidateOn:`change`}),children:[(0,y.jsx)(E,{}),(0,y.jsx)(h,{name:`rows`,label:`Price list`,columns:T,height:420,bulkEdit:!0})]})}var O=`import { Button } from "@kitora/ui/button"
import { defineForm } from "@kitora/form/core"
import { EditableGrid, type GridColumn } from "@kitora/form/fields"
import { Form, useForm, useFormHistory } from "@kitora/form/react"

type PriceRow = { sku: string; name: string; price?: number; status: string }
type PriceList = { rows: PriceRow[] }

const STATUS = [{ value: "active", label: "Active" }, { value: "draft", label: "Draft" }]

/** How many rows the sample price list has; the grid virtualizes, so thousands are fine. */
const ROW_COUNT = 1000
/** The row that starts invalid, so the error count and "go to first" have something to show. */
const BAD_ROW = 499

// stub: replace with your API (GET /prices)
const defaultValues: PriceList = {
  rows: Array.from({ length: ROW_COUNT }, (_, i) =>
    i === BAD_ROW
      ? { sku: \`SKU-\${String(i + 1).padStart(4, "0")}\`, name: "", price: -5, status: "draft" }
      : { sku: \`SKU-\${String(i + 1).padStart(4, "0")}\`, name: \`Item \${i + 1}\`, price: Math.round(((i * 37) % 500) + 999) / 100, status: STATUS[i % STATUS.length].value },
  ),
}

const priceDef = defineForm<PriceList>()(({ f, v }) => ({
  fields: [
    f.array("rows", { newRow: { sku: "", name: "", status: "draft" } }, (r) => [
      r.text("sku", { required: true }),
      r.text("name", { required: true }),
      r.number("price", { rules: [v.min(0, "Price can't be negative")] }),
      r.select("status", { options: STATUS }),
    ]),
  ],
}))

const columns: GridColumn[] = [
  { key: "sku", header: "SKU", editor: "text", width: 120 },
  { key: "name", header: "Name", editor: "text", width: 200 },
  { key: "price", header: "Price", editor: "number", format: (v) => (typeof v === "number" ? v.toFixed(2) : "") },
  { key: "status", header: "Status", editor: "select", options: STATUS },
]

function UndoBar() {
  const h = useFormHistory() // a pasted block is one undo step
  return (
    <div className="flex gap-1.5">
      <Button className="w-fit" type="button" variant="outline" size="xs" disabled={!h.canUndo} onClick={h.undo}>Undo</Button>
      <Button className="w-fit" type="button" variant="outline" size="xs" disabled={!h.canRedo} onClick={h.redo}>Redo</Button>
    </div>
  )
}

export function PriceListForm() {
  // validateOn "mount": errors on off-screen rows are counted too
  const form = useForm<PriceList>({ defaultValues, model: priceDef, validateOn: "mount", revalidateOn: "change" })
  return (
    <Form form={form}>
      <UndoBar />
      {/* Keys: arrows · Home/End · Ctrl+Home/End · PageUp/PageDown · Enter/F2 or type to edit · Esc cancels · Tab → next cell */}
      <EditableGrid name="rows" label="Price list" columns={columns} height={420} bulkEdit />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./grid-CYsCxmqi.js`),[]));var k=[{value:`active`,label:`Active`},{value:`draft`,label:`Draft`},{value:`archived`,label:`Archived`}],A=[{value:`web`,label:`Web`},{value:`pos`,label:`Point of sale`},{value:`b2b`,label:`B2B`}],j=741,M=400,N={title:`Spring`,rows:Array.from({length:1e3},(e,t)=>({sku:`SKU-${String(t+1).padStart(4,`0`)}`,name:`Item ${t+1}`,price:t===j?-1:Math.round(t*37%500+9.99*100)/100,stock:t*13%120,status:k[t%k.length].value})),channels:[]},P=f().validator(`titleUnique`,{fn:async e=>(await new Promise(e=>setTimeout(e,M)),e===`Spring`?`A release with this title exists`:void 0)}),F=l()(({f:e,v:t})=>({fields:[e.text(`title`,{required:!0,rules:[t.op(`titleUnique`)]}),e.array(`rows`,{newRow:{sku:``,name:``,status:`draft`}},e=>[e.text(`sku`,{required:!0}),e.text(`name`,{required:!0}),e.number(`price`,{rules:[t.min(0,`Price can't be negative`)]}),e.select(`status`,{options:k})]),e.checkboxGroup(`channels`,{options:A,rules:[t.minItems(1,`Pick at least one channel`)]})]})),I=[{key:`sku`,header:`SKU`,editor:`text`,width:120},{key:`name`,header:`Name`,editor:`text`,width:200},{key:`price`,header:`Price`,editor:`number`,width:100,format:e=>typeof e==`number`?e.toFixed(2):``},{key:`stock`,header:`Stock`,editor:`number`,width:90},{key:`status`,header:`Status`,editor:`select`,options:k,width:120}];function L(){return(0,y.jsxs)(d,{form:s({defaultValues:N,model:F,registry:P}),onSubmit:e=>console.log(e),children:[(0,y.jsx)(p,{name:`title`,label:`Release title`,description:`“Spring” is taken (checked on the server)`,required:!0}),(0,y.jsx)(h,{name:`rows`,label:`Prices`,columns:I,height:240}),(0,y.jsx)(m,{name:`channels`,label:`Channels`,options:A,inline:!0}),(0,y.jsx)(d.Submit,{className:a({size:`sm`,className:`w-fit`}),children:`Publish`})]})}var R=`import { buttonVariants } from "@kitora/ui/button"
import { catalogRegistry, defineForm } from "@kitora/form/core"
import { CheckboxGroupField, EditableGrid, type GridColumn, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type PriceRow = { sku: string; name: string; price?: number; stock?: number; status: string }
type Release = { title: string; rows: PriceRow[]; channels: string[] }

const STATUS = [
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
  { value: "archived", label: "Archived" },
]
const channels = [{ value: "web", label: "Web" }, { value: "pos", label: "Point of sale" }, { value: "b2b", label: "B2B" }]
/** The off-screen row that starts invalid (0-based index 741 = row 742). */
const BAD_ROW = 741
/** How long the simulated "title is unique" server check takes. */
const TITLE_CHECK_MS = 400

// stub: replace with your API (GET /prices); row 742 starts invalid, far below the fold
const defaultValues: Release = {
  title: "Spring",
  rows: Array.from({ length: 1000 }, (_, i) => ({
    sku: \`SKU-\${String(i + 1).padStart(4, "0")}\`,
    name: \`Item \${i + 1}\`,
    price: i === BAD_ROW ? -1 : Math.round(((i * 37) % 500) + 9.99 * 100) / 100,
    stock: (i * 13) % 120,
    status: STATUS[i % STATUS.length].value,
  })),
  channels: [],
}

// stub: replace with your API (GET /releases?title=…)
const registry = catalogRegistry().validator("titleUnique", {
  fn: async (value) => {
    await new Promise((res) => setTimeout(res, TITLE_CHECK_MS))
    return value === "Spring" ? "A release with this title exists" : undefined
  },
})

const def = defineForm<Release>()(({ f, v }) => ({
  fields: [
    f.text("title", { required: true, rules: [v.op("titleUnique")] }),
    f.array("rows", { newRow: { sku: "", name: "", status: "draft" } }, (r) => [
      r.text("sku", { required: true }),
      r.text("name", { required: true }),
      r.number("price", { rules: [v.min(0, "Price can't be negative")] }),
      r.select("status", { options: STATUS }),
    ]),
    f.checkboxGroup("channels", { options: channels, rules: [v.minItems(1, "Pick at least one channel")] }),
  ],
}))

const columns: GridColumn[] = [
  { key: "sku", header: "SKU", editor: "text", width: 120 },
  { key: "name", header: "Name", editor: "text", width: 200 },
  { key: "price", header: "Price", editor: "number", width: 100, format: (v) => (typeof v === "number" ? v.toFixed(2) : "") },
  { key: "stock", header: "Stock", editor: "number", width: 90 },
  { key: "status", header: "Status", editor: "select", options: STATUS, width: 120 },
]

// A failed submit focuses the FIRST error in page order, after async rules settle:
// the title (async) → the grid's row 742 (scrolled in, though never rendered) → the checkbox group (its first box).
export function ReleaseForm() {
  const form = useForm<Release>({ defaultValues, model: def, registry })
  return (
    <Form form={form} onSubmit={(values) => console.log(values)}>
      <TextField name="title" label="Release title" description="“Spring” is taken (checked on the server)" required />
      <EditableGrid name="rows" label="Prices" columns={columns} height={240} />
      <CheckboxGroupField name="channels" label="Channels" options={channels} inline />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Publish</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./focus-B7Mx_XPh.js`),[]));var z=[{value:`active`,label:`Active`},{value:`draft`,label:`Draft`},{value:`archived`,label:`Archived`}],B=Array.from({length:1e3},(e,t)=>({sku:`SKU-${String(t+1).padStart(4,`0`)}`,name:`Item ${t+1}`,price:Math.round(t*37%500+9.99*100)/100,stock:t*13%120,status:z[t%z.length].value}));B[499]={...B[499],name:``,price:-5};var V=[{key:`sku`,header:`SKU`,editor:`text`,width:120},{key:`name`,header:`Name`,editor:`text`,width:200},{key:`price`,header:`Price`,editor:`number`,width:100,format:e=>typeof e==`number`?e.toFixed(2):``},{key:`stock`,header:`Stock`,editor:`number`,width:90},{key:`status`,header:`Status`,editor:`select`,options:z,width:120}],H={type:`object`,required:[`sku`,`name`],properties:{sku:{type:`string`,minLength:1},name:{type:`string`,minLength:1},price:{type:`number`,minimum:0},stock:{type:`integer`,minimum:0}}},U=_({type:`object`,properties:{rows:{type:`array`,items:H}}}),W=_(H),G=20,K=[{id:`whole`,label:`whole schema per keystroke`,config:{schemaDebounceMs:0}},{id:`scoped`,label:`schemaScopes rows.*`,config:{schemaScopes:{"rows.*":W}}},{id:`debounced`,label:`schemaDebounceMs 250`,config:{schemaDebounceMs:250}}];function q(){return K.map(e=>{let t=c({defaultValues:{rows:B},schema:U,...e.config}),n=performance.now();for(let e=0;e<G;e++)t.setValue(`rows.511.price`,e);let r=performance.now()-n;return t.destroy(),{mode:e.label,ms:r}})}function J(){let e=s({defaultValues:{rows:B},schema:U,schemaScopes:{"rows.*":W}}),[t,n]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,y.jsx)(d,{form:e,layout:`none`,className:`flex min-w-0 flex-col gap-2`,children:(0,y.jsx)(h,{name:`rows`,label:`Price list (JSON Schema per row)`,columns:V,height:300})}),(0,y.jsxs)(`div`,{className:`space-y-2 text-[13px]`,children:[(0,y.jsxs)(o,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>n(q()),children:[`Measure `,G,` keystrokes × 3 modes`]}),t.length?(0,y.jsx)(`table`,{className:`w-full text-xs tabular-nums`,children:(0,y.jsx)(`tbody`,{children:t.map(e=>(0,y.jsxs)(`tr`,{className:`border-b last:border-0`,children:[(0,y.jsx)(`td`,{className:`py-1 pe-2`,children:e.mode}),(0,y.jsxs)(`td`,{className:`py-1 text-end`,children:[e.ms.toFixed(1),` ms`]})]},e.mode))})}):(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Each mode types into row 512 of a fresh 1,000-row store with the whole-form JSON Schema.`})]})]})}var Y=`import { useState } from "react"
import { createFormStore } from "@kitora/form/core"
import { type JSONSchema, jsonSchemaStandard } from "@kitora/form/sources"
import { EditableGrid, type GridColumn } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type PriceRow = { sku: string; name: string; price?: number; stock?: number }
type PriceList = { rows: PriceRow[] }

// stub: replace with your API (GET /prices) — 1,000 rows
const ROWS: PriceRow[] = Array.from({ length: 1000 }, (_, i) => ({ sku: "SKU-" + i, name: "Item " + i, price: 10, stock: 5 }))
const defaultValues: PriceList = { rows: ROWS }

const row: JSONSchema = {
  type: "object",
  required: ["sku", "name"],
  properties: { sku: { type: "string", minLength: 1 }, name: { type: "string", minLength: 1 }, price: { type: "number", minimum: 0 }, stock: { type: "integer", minimum: 0 } },
}
const schema = jsonSchemaStandard({ type: "object", properties: { rows: { type: "array", items: row } } })
const rowSchema = jsonSchemaStandard(row)

const columns: GridColumn[] = [
  { key: "sku", header: "SKU", editor: "text" },
  { key: "name", header: "Name", editor: "text" },
  { key: "price", header: "Price", editor: "number" },
  { key: "stock", header: "Stock", editor: "number" },
]

// the three ways to run a whole-form schema on a big form, timed on fresh throwaway stores
const BENCH_KEYS = 20
const MODES = [
  { label: "whole schema per keystroke", config: { schemaDebounceMs: 0 } },
  { label: "schemaScopes rows.*", config: { schemaScopes: { "rows.*": rowSchema } } },
  { label: "schemaDebounceMs 250", config: { schemaDebounceMs: 250 } },
] as const

function runBench(): Array<{ mode: string; ms: number }> {
  return MODES.map((m) => {
    const store = createFormStore<PriceList>({ defaultValues, schema, ...m.config })
    const started = performance.now()
    for (let k = 0; k < BENCH_KEYS; k++) store.setValue("rows.511.price", k)
    const ms = performance.now() - started
    store.destroy()
    return { mode: m.label, ms }
  })
}

// A keystroke in row 512 validates row 512 with rowSchema (schemaScopes), not 1,000 rows.
// The whole schema still runs on submit. Without a sub-schema, set schemaDebounceMs (or keep
// the default "auto": once one whole run takes > 8 ms, per-change runs debounce by 250 ms).
export function PriceListForm() {
  const form = useForm<PriceList>({ defaultValues, schema, schemaScopes: { "rows.*": rowSchema } })
  const [bench, setBench] = useState<Array<{ mode: string; ms: number }>>([])
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <EditableGrid name="rows" label="Price list (JSON Schema per row)" columns={columns} height={300} />
      </Form>
      <div>
        <button type="button" onClick={() => setBench(runBench())}>Measure {BENCH_KEYS} keystrokes × 3 modes</button>
        <table>
          <tbody>
            {bench.map((b) => (
              <tr key={b.mode}>
                <td>{b.mode}</td>
                <td>{b.ms.toFixed(1)} ms</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}`;function X(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t,{title:`Editable grid`,children:`A virtualized spreadsheet over a form array: arrow-key navigation, type-to-edit, tab-separated paste in one undo step, per-cell errors across all rows (rendered or not), bulk edit on selected rows. A keystroke re-renders one cell.`}),(0,y.jsx)(g,{n:1,title:`1,000-row price list`,blurb:`Row 500 starts invalid — use the error link to jump to it. Select rows to bulk-set a column.`,code:O,children:(0,y.jsx)(D,{})}),(0,y.jsx)(g,{n:2,title:`Focus the first error on submit`,blurb:`Press Publish: the async title check settles first, then focus goes to the first error in PAGE order — the title. Rename it and publish again: the grid scrolls row 742 into view and focuses its price cell (the row was never rendered). Fix it (type 1): focus lands on the checkbox group's first box.`,code:R,children:(0,y.jsx)(L,{})}),(0,y.jsx)(g,{n:3,title:`A whole-form schema on 1,000 rows`,blurb:`A Standard Schema has no "validate one path" call, so on a big form every keystroke used to walk all 1,000 rows. schemaScopes maps rows.* to the row's own sub-schema: an edit validates one row (the whole schema runs on submit). Measure compares whole / scoped / debounced on fresh stores.`,code:Y,children:(0,y.jsx)(J,{})})]})}export{X as component};