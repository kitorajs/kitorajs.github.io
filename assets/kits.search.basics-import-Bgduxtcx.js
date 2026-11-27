import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as a}from"./example-B67lLz1F.js";import{c as o,d as s,f as c,i as l,l as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./import-QRH5hwKN.js";import{t as v}from"./parts-SQLQrw7N.js";import{t as y}from"./-kits.search.shared-Cuvf7mCH.js";var b=e(r(),1),x=i(),S=[{id:`email`,label:`Email`,type:`email`,required:!0,aliases:[`e-mail`]},{id:`name`,label:`Full name`,type:`text`,aliases:[`name`]},{id:`plan`,label:`Plan`,type:`select`,options:[`Free`,`Pro`],aliases:[`tier`]}],C=c(`Name,E-mail,Tier,Notes
Ada,ada@x.io,Pro,vip
Alan,alan@x.io,Free,`),w=o(C.headers,S);function T(){let[e,t]=(0,b.useState)(w);return(0,x.jsx)(g,{table:C,fields:S,mapping:e,autoMapped:w,problems:s(e,S),onChange:(e,n)=>t(t=>t.map((t,r)=>r===e?n:t===n?null:t))})}var E=`import { useState } from "react"
import { autoMap, ColumnMapper, mappingIssues, parseCsv, type ImportField } from "@kitora/search"

const FIELDS: readonly ImportField[] = [
  { id: "email", label: "Email", type: "email", required: true, aliases: ["e-mail"] },
  { id: "name", label: "Full name", type: "text", aliases: ["name"] },
  { id: "plan", label: "Plan", type: "select", options: ["Free", "Pro"], aliases: ["tier"] },
]
const TABLE = parseCsv("Name,E-mail,Tier,Notes\\nAda,ada@x.io,Pro,vip\\nAlan,alan@x.io,Free,")
const AUTO = autoMap(TABLE.headers, FIELDS)

// autoMap matches headers to fields by name and aliases; a field can feed from one column only, and required fields must be mapped.
export function BasicColumnMapping() {
  const [mapping, setMapping] = useState(AUTO)
  return (
    <ColumnMapper
      table={TABLE}
      fields={FIELDS}
      mapping={mapping}
      autoMapped={AUTO}
      problems={mappingIssues(mapping, FIELDS)}
      onChange={(column, fieldId) => setMapping((m) => m.map((id, i) => (i === column ? fieldId : id === fieldId ? null : id)))}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./column-mapping-BcQvhAjn.js`),[]));var D=`name;city;note
"Lovelace; Ada";London;"says ""hi"""
Hopper;Arlington;"two
lines"`;function O(){let[e,t]=(0,b.useState)(D),n=c(e);return(0,x.jsxs)(`div`,{className:`grid gap-3 text-[13px] md:grid-cols-2`,children:[(0,x.jsx)(`textarea`,{value:e,onChange:e=>t(e.target.value),"aria-label":`CSV`,spellCheck:!1,className:`min-h-32 resize-y rounded-md border bg-background p-2 font-mono text-[12px] outline-none focus:border-ring`}),(0,x.jsxs)(`div`,{className:`space-y-1`,children:[(0,x.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Delimiter `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1`,children:n.delimiter===`	`?`tab`:n.delimiter}),` · `,n.rows.length,` rows`]}),(0,x.jsxs)(`table`,{className:`w-full rounded-md border`,children:[(0,x.jsx)(`thead`,{className:`bg-muted/40 text-left text-[12px]`,children:(0,x.jsx)(`tr`,{children:n.headers.map(e=>(0,x.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:e},e))})}),(0,x.jsx)(`tbody`,{children:n.rows.map((e,t)=>(0,x.jsx)(`tr`,{className:`border-t align-top`,children:e.map((e,t)=>(0,x.jsx)(`td`,{className:`px-2 py-1 whitespace-pre-wrap`,children:e},`${t}:${e}`))},`${t}:${e.join(`|`)}`))})]})]})]})}var k=`import { useState } from "react"
import { parseCsv } from "@kitora/search"

const START = \`name;city;note
"Lovelace; Ada";London;"says ""hi"""
Hopper;Arlington;"two
lines"\`

// parseCsv sniffs the delimiter (here ";") and handles quoted delimiters, doubled quotes and newlines inside cells.
export function BasicCsvParse() {
  const [text, setText] = useState(START)
  const table = parseCsv(text)
  return (
    <div className="grid gap-3 text-[13px] md:grid-cols-2">
      <textarea value={text} onChange={(e) => setText(e.target.value)} aria-label="CSV" spellCheck={false} className="min-h-32 resize-y rounded-md border bg-background p-2 font-mono text-[12px] outline-none focus:border-ring" />
      <div className="space-y-1">
        <p className="text-[12px] text-muted-foreground">Delimiter <code className="rounded bg-muted px-1">{table.delimiter === "\\t" ? "tab" : table.delimiter}</code> · {table.rows.length} rows</p>
        <table className="w-full rounded-md border">
          <thead className="bg-muted/40 text-left text-[12px]"><tr>{table.headers.map((h) => <th key={h} className="px-2 py-1 font-medium">{h}</th>)}</tr></thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={\`\${r}:\${row.join("|")}\`} className="border-t align-top">{row.map((cell, c) => <td key={\`\${c}:\${cell}\`} className="px-2 py-1 whitespace-pre-wrap">{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>n(()=>import(`./csv-parse-CtpOV2Gk.js`),[]));var A=[{id:`email`,label:`Email`,type:`email`,required:!0},{id:`name`,label:`Full name`,type:`text`}],j=`email,name
ada@x.io,Ada Lovelace
alan@x.io,Alan Turing
,Grace Hopper`,M=h.map(e=>({value:e,label:e})),N=e=>h.some(t=>t===e);function P(e){let t=c(e).rows.map((e,t)=>({line:t+2,values:{email:e[0]??``,name:e[1]??``}}));return{records:t.filter(e=>e.values.email).map(e=>e.values),skipped:t.filter(e=>!e.values.email),removed:0}}function F(){let[e,t]=(0,b.useState)(`upload`),[n,r]=(0,b.useState)(()=>P(j));return(0,x.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsx)(m,{step:e,className:`flex-wrap gap-y-1`}),(0,x.jsx)(v,{label:`Step`,value:e,options:M,onChange:e=>{N(e)&&t(e)}})]}),e===`done`?(0,x.jsx)(l,{result:n,fields:A,onRestart:()=>t(`upload`)}):(0,x.jsx)(d,{sample:j,onLoad:e=>{r(P(e)),t(`done`)}})]})}var I=`import { useState } from "react"
import { IMPORT_STEPS, ImportSource, ImportSteps, ImportSummary, MiniSelect, parseCsv, type ImportField, type ImportResult, type ImportStep } from "@kitora/search"

const FIELDS: readonly ImportField[] = [
  { id: "email", label: "Email", type: "email", required: true },
  { id: "name", label: "Full name", type: "text" },
]
const SAMPLE = "email,name\\nada@x.io,Ada Lovelace\\nalan@x.io,Alan Turing\\n,Grace Hopper"
const STEP_OPTIONS = IMPORT_STEPS.map((s) => ({ value: s, label: s }))
const isStep = (value: string): value is ImportStep => IMPORT_STEPS.some((s) => s === value)

/** Splits the parsed rows the way the wizard would: rows with an email are imported, the rest skipped. */
function toResult(text: string): ImportResult {
  const table = parseCsv(text)
  const rows = table.rows.map((row, n) => ({ line: n + 2, values: { email: row[0] ?? "", name: row[1] ?? "" } }))
  return { records: rows.filter((r) => r.values.email).map((r) => r.values), skipped: rows.filter((r) => !r.values.email), removed: 0 }
}

// The wizard's styled parts used alone: \`ImportSteps\` is the step strip, \`ImportSource\` the drop / pick / paste
// step, \`ImportSummary\` the last step, and \`MiniSelect\` the compact select the mapper uses (here it picks the step).
export function BasicImportParts() {
  const [step, setStep] = useState<ImportStep>("upload")
  const [result, setResult] = useState<ImportResult>(() => toResult(SAMPLE))
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ImportSteps step={step} className="flex-wrap gap-y-1" />
        <MiniSelect label="Step" value={step} options={STEP_OPTIONS} onChange={(value) => { if (isStep(value)) setStep(value) }} />
      </div>
      {step === "done" ? (
        <ImportSummary result={result} fields={FIELDS} onRestart={() => setStep("upload")} />
      ) : (
        <ImportSource sample={SAMPLE} onLoad={(text) => { setResult(toResult(text)); setStep("done") }} />
      )}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>n(()=>import(`./import-parts-CIjn-YL3.js`),[]));var L=[{id:`email`,label:`Email`,type:`email`,required:!0,unique:!0},{id:`seats`,label:`Seats`,type:`number`},{id:`joined`,label:`Joined`,type:`date`}],R=c(`email,seats,joined
ada@x.io,12,2026-01-04
not-an-email,3,2026-02-30
ada@x.io,many,2026-03-01
,4,2026-03-09`);function z(){let[e,t]=(0,b.useState)(()=>_(R.rows,[`email`,`seats`,`joined`]));return(0,x.jsx)(f,{rows:e,fields:L,issueAt:(0,b.useMemo)(()=>u(p(e,L)),[e]),onEdit:(e,n,r)=>t(t=>t.map((t,i)=>i===e?{...t,values:{...t.values,[n]:r}}:t))})}var B=`import { useMemo, useState } from "react"
import { issueIndex, mapRows, parseCsv, ReviewGrid, validateRows, type ImportField, type ImportRow } from "@kitora/search"

const FIELDS: readonly ImportField[] = [
  { id: "email", label: "Email", type: "email", required: true, unique: true },
  { id: "seats", label: "Seats", type: "number" },
  { id: "joined", label: "Joined", type: "date" },
]
const TABLE = parseCsv("email,seats,joined\\nada@x.io,12,2026-01-04\\nnot-an-email,3,2026-02-30\\nada@x.io,many,2026-03-01\\n,4,2026-03-09")

// validateRows checks types, required and unique fields; every cell is editable and re-validates as you type.
export function BasicValidate() {
  const [rows, setRows] = useState<readonly ImportRow[]>(() => mapRows(TABLE.rows, ["email", "seats", "joined"]))
  const issueAt = useMemo(() => issueIndex(validateRows(rows, FIELDS)), [rows])
  return <ReviewGrid rows={rows} fields={FIELDS} issueAt={issueAt} onEdit={(row, field, value) => setRows((list) => list.map((r, i) => (i === row ? { ...r, values: { ...r.values, [field]: value } } : r)))} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>n(()=>import(`./validate-DS5ZBi2d.js`),[]));function V(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(t,{title:`Basics: import`,children:`The import pipeline is three pure steps (parse, map, validate) with a styled part for each. The wizard on the Import page chains them.`}),(0,x.jsx)(a,{n:1,title:`Parse CSV`,blurb:`Delimiter sniffing, quoted delimiters, doubled quotes and newlines inside cells.`,code:k,children:(0,x.jsx)(y,{testId:`basic-csv`,children:(0,x.jsx)(O,{})})}),(0,x.jsx)(a,{n:2,title:`Map columns`,blurb:`Headers auto-match fields by name and alias; required fields must be mapped.`,code:E,children:(0,x.jsx)(y,{testId:`basic-mapping`,children:(0,x.jsx)(T,{})})}),(0,x.jsx)(a,{n:3,title:`Validate rows`,blurb:`Type, required and unique checks per cell; fix a red cell and it re-validates.`,code:B,children:(0,x.jsx)(y,{testId:`basic-validate`,children:(0,x.jsx)(z,{})})}),(0,x.jsx)(a,{n:4,title:`Wizard parts`,blurb:"`ImportSteps`, `ImportSource` and `ImportSummary` used alone, with `MiniSelect` picking the step; load the sample to jump to the summary.",code:I,children:(0,x.jsx)(y,{testId:`basic-import-parts`,children:(0,x.jsx)(F,{})})})]})}export{V as component};