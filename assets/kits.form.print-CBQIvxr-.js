import{s as e}from"./kit-docs-BUovISd0.js";import{Ic as t}from"./index-B9ukmIN1.js";import{K as n,W as r,x as i}from"./messages-C_IMdr_-.js";import{J as a,Q as o,h as s}from"./field-config-17kME8Vl.js";import{t as c}from"./example-BGnSQG2Y.js";import{n as l}from"./auto-form-9BIFbDQc.js";import{t as u}from"./demos-Ds1NfSaA.js";import{s as d}from"./demo-fixtures-DpfwlbH0.js";var f=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function p(e){return typeof e==`string`?`“${e}”`:typeof e==`boolean`?e?`Yes`:`No`:e==null?`empty`:String(e)}function m(e){if(!f(e)||!(`var`in e))return;let t=e.var;return typeof t==`string`?t.replace(/^\//,``):void 0}function h(e,t){if(e===!0)return`always`;if(e===!1)return`never`;let n=e=>{let n=m(e);return n===void 0?p(e):t.get(n)??n};if(f(e)){let[r]=Object.keys(e),i=e[r],a=Array.isArray(i)?i:[i];switch(r){case`==`:case`===`:return`${n(a[0])} is ${p(a[1])}`;case`!=`:case`!==`:return`${n(a[0])} is not ${p(a[1])}`;case`>`:return`${n(a[0])} is more than ${p(a[1])}`;case`<`:return`${n(a[0])} is less than ${p(a[1])}`;case`in`:return`${n(a[0])} is one of ${Array.isArray(a[1])?a[1].map(p).join(`, `):p(a[1])}`;case`and`:return a.map(e=>h(g(e)?e:void 0,t)).join(` and `);case`or`:return a.map(e=>h(g(e)?e:void 0,t)).join(` or `);case`!`:return`not (${h(g(a[0])?a[0]:void 0,t)})`;case`var`:return`${n(e)} is answered`}}return JSON.stringify(e)}var g=e=>e===null||[`string`,`number`,`boolean`].includes(typeof e)||typeof e==`object`;function _(e){return e==null||e===``?``:typeof e==`boolean`?e?`Yes`:`No`:Array.isArray(e)?e.map(_).filter(Boolean).join(`, `):f(e)?Object.values(e).map(_).filter(Boolean).join(`, `):String(e)}function v(e,t){if(!t.startsWith(`.`))return t;let n=t.replace(/^\.+/,``);return e?n?`${e}.${n}`:e:n}function y(e,t,n){for(let r of e)if(r.kind===`field`||r.kind===`display`)n.set(v(t,r.name),o(r.label,r.name));else if(r.kind===`group`||r.kind===`array`)n.set(v(t,r.name),o(r.label,r.name)),y(r.children,v(t,r.name),n);else if(r.kind===`variant`){for(let e of r.cases)y(e.children,t,n);r.default&&y(r.default,t,n)}else r.kind!==`use`&&r.kind!==`composite`&&y(r.children,r.kind===`step`&&r.scope?r.scope:t,n)}function b(e,t,r=`Form`){let i=new Map;y(e,``,i);let a=[],s={title:r,rows:[]},c=e=>void s.rows.push(e),l=(e,t)=>e&&t?`${e}, and ${t}`:e??t,u=(e,d,f)=>{for(let g of e){let e=`visibleIf`in g&&g.visibleIf!==void 0?h(g.visibleIf,i):void 0,y=l(f,e);switch(g.kind){case`field`:case`display`:{let e=v(d,g.name),r=n(t,e),i=g.kind===`field`&&Array.isArray(g.options)?g.options.find(e=>e.value===r):void 0;c({path:e,label:o(g.label,g.name),value:i?o(i.label):_(r),condition:y});break}case`group`:u(g.children,v(d,g.name),y);break;case`array`:{let e=v(d,g.name),r=n(t,e),i=Array.isArray(r)?r.length:0;i===0&&c({path:e,label:`${o(g.label,g.name)} (none listed)`,value:``,condition:y});for(let t=0;t<i;t++)u(g.children,`${e}.${t}`,y);break}case`variant`:{let e=m(g.on)??JSON.stringify(g.on),t=i.get(v(d,e))??e;for(let e of g.cases)u(e.children,d,l(y,`${t} is ${e.is.map(p).join(` or `)}`));g.default&&u(g.default,d,l(y,`${t} is anything else`));break}case`section`:case`step`:d===``&&f===void 0?(s.rows.length&&a.push(s),s={title:o(g.kind===`section`?g.title:g.label,r),rows:[]},u(g.children,g.kind===`step`&&g.scope?g.scope:d,e)):u(g.children,d,y);break;case`scope`:u(g.children,d,y);break;case`use`:case`composite`:break}}};return u(e,``,void 0),s.rows.length&&a.push(s),a}var x=t(),S=[{value:`waive`,label:`Waive`},{value:`single`,label:`Employee only`},{value:`family`,label:`Employee + family`}],C=[{value:`spouse`,label:`Spouse`},{value:`child`,label:`Child`}],w=1,T=100,E=a()(({f:e,c:t,v:n})=>({fields:[e.section({title:`Employee`},[e.text(`employee.name`,{label:`Full name`,required:!0}),e.text(`employee.id`,{label:`Employee ID`,required:!0}),e.date(`employee.startDate`,{label:`Start date`})]),e.section({title:`Coverage`},[e.radio(`coverage`,{label:`Medical coverage`,required:!0,options:S}),e.variant(`coverage`,{family:[e.array(`dependents`,{label:`Dependents`,newRow:{name:``,relation:`child`},min:1},e=>[e.text(`name`,{label:`Dependent name`,required:!0}),e.select(`relation`,{label:`Relation`,options:C})])]}),e.switch(`otherCoverage`,{label:`Covered by another plan?`}),e.text(`carrier`,{label:`Other carrier`,required:!0,visibleIf:t.eq(`otherCoverage`,!0)})]),e.section({title:`Life insurance`},[e.text(`beneficiary.name`,{label:`Beneficiary`,required:!0}),e.number(`beneficiary.share`,{label:`Share (%)`,rules:[n.min(w),n.max(T)]})])]})),D={employee:{name:``,id:``,startDate:``},coverage:`single`,dependents:[],otherCoverage:!1,beneficiary:{name:``}},O=`@media print {
  body * { visibility: hidden !important; }
  .print-doc, .print-doc * { visibility: visible !important; }
  .print-doc { position: absolute; inset: 0; display: block !important; }
  .print-doc section { break-after: page; }
}`;function k({sections:e}){return(0,x.jsx)(`div`,{className:`print-doc space-y-3 rounded-md border bg-background p-4 text-sm`,children:e.map(e=>(0,x.jsxs)(`section`,{className:`space-y-2`,children:[(0,x.jsx)(`h4`,{className:`border-b pb-1 font-semibold`,children:e.title}),(0,x.jsx)(`dl`,{className:`space-y-2`,children:e.rows.map(e=>(0,x.jsxs)(`div`,{className:`grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3`,children:[(0,x.jsxs)(`dt`,{children:[e.label,e.condition?(0,x.jsxs)(`span`,{className:`block text-[11px] italic text-muted-foreground`,children:[`Answer only if `,e.condition]}):null]}),(0,x.jsx)(`dd`,{className:`min-h-5 border-b border-dotted`,children:e.value})]},e.path))})]},e.title))})}function A(){let e=s(i(),e=>e.getValues(),r);return(0,x.jsxs)(`div`,{className:`space-y-2 pt-4`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsx)(`h4`,{className:`text-sm font-medium`,children:`Print preview — every branch, conditions written out`}),(0,x.jsx)(`button`,{type:`button`,className:u,onClick:()=>window.print(),children:`Print / save as PDF`})]}),(0,x.jsx)(k,{sections:b(E.fields,e)})]})}var j=`import { AutoForm } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"
import { useFormSnapshot, useFormStore } from "@kitora/form/react"
import { toDocument, type DocSection } from "@/kit/form/demo-fixtures/print-document"

type Enrollment = { name: string; coverage: string; otherCoverage: boolean; carrier?: string }

const defaultValues: Enrollment = { name: "", coverage: "single", otherCoverage: false }
const COVERAGE = [{ value: "waive", label: "Waive" }, { value: "single", label: "Employee only" }, { value: "family", label: "Employee + family" }]

const benefits = defineForm<Enrollment>()(({ f, c }) => ({
  fields: [
    f.section({ title: "Coverage" }, [
      f.text("name", { label: "Full name", required: true }),
      f.radio("coverage", { label: "Medical coverage", required: true, options: COVERAGE }),
      f.switch("otherCoverage", { label: "Covered by another plan?" }),
      // 'otherCoverage' is the sibling field above
      f.text("carrier", { label: "Other carrier", required: true, visibleIf: c.eq("otherCoverage", true) }),
    ]),
  ],
}))

// @media print: only the document, a page per section (style .print-doc in your print stylesheet)
function PrintDocument({ sections }: { sections: DocSection[] }) {
  return (
    <div className="print-doc">
      {sections.map((s) => (
        <section key={s.title}>
          <h4>{s.title}</h4>
          {s.rows.map((r) => (
            <p key={r.path}>{r.label}{r.condition ? " (answer only if " + r.condition + ")" : ""}: {r.value}</p>
          ))}
        </section>
      ))}
    </div>
  )
}

// toDocument is the subject: a demo module too big to inline (copy demo-fixtures/print-document.ts)
// inside <AutoForm>: read the live values and lay out EVERY branch with its condition written out
function PrintPreview() {
  const store = useFormStore()
  const values = useFormSnapshot(store, (s) => s.getValues())
  // → [{ title: "Coverage", rows: [{ label: "Other carrier", value: "", condition: "Covered by another plan? is “true”" }, …] }]
  return (
    <>
      <PrintDocument sections={toDocument(benefits.fields, values)} />
      <button type="button" onClick={() => window.print()}>Print / save as PDF</button>
    </>
  )
}

export function EnrollmentForm() {
  return (
    <AutoForm<Enrollment> def={benefits} defaultValues={defaultValues} submitLabel="Enroll" onSubmit={(p) => console.log(p)}>
      <PrintPreview />
    </AutoForm>
  )
}`;function M(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:O}),(0,x.jsx)(e,{title:`Print / PDF benefits form`,children:`On screen, branches hide. On paper they cannot: the print document expands every Variant case and conditional block with its condition written out, starts each section on a new page, prints entered values read-only and empty answers as blank lines. PDF is the browser's print-to-PDF; no PDF library.`}),(0,x.jsx)(c,{n:1,title:`Benefits enrollment`,blurb:`Fill a few answers, then print: the waived/family branches and the other-carrier question are all on paper with their conditions.`,code:j,children:(0,x.jsx)(l,{def:E,defaultValues:D,submitLabel:`Enroll`,onSubmit:d,children:(0,x.jsx)(A,{})})})]})}export{M as component};