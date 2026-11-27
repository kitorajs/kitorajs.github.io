import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,ii as n,zc as r}from"./index-BZuUy872.js";import{W as i}from"./messages-CylclMLI.js";import{A as a,C as o,J as s,S as c,Y as l,c as u,d,h as f}from"./field-config-53O_jYuu.js";import{a as p,n as m,r as h}from"./fields-DyVcPE0c.js";import{t as g}from"./date-WBqp1QkI.js";import{a as _}from"./choice-BX1Eh6ua.js";import{t as v}from"./field-array-M2_MqL16.js";import{t as y}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var b=r(),x={kind:`condition`,field:`name`,operator:`eq`},S={kind:`group`,combinator:`and`,children:[x]},C=[{value:`and`,label:`AND`},{value:`or`,label:`OR`}],w={query:S},T=s()(()=>({fields:[],data:{fieldTypes:{name:`string`,age:`number`,active:`boolean`,createdAt:`date`},fields:[{value:`name`,label:`Name`},{value:`age`,label:`Age`},{value:`active`,label:`Active`},{value:`createdAt`,label:`Created`}],operators:{string:[{value:`eq`,label:`equals`},{value:`contains`,label:`contains`}],number:[{value:`eq`,label:`=`},{value:`gt`,label:`>`},{value:`lt`,label:`<`}],boolean:[{value:`isTrue`,label:`is true`},{value:`isFalse`,label:`is false`}],date:[{value:`before`,label:`before`},{value:`after`,label:`after`}]}}})),{e:E}=l(),D=E.lookup(`fieldTypes`,E.ref(`.field`));function O(){return(0,b.jsxs)(o,{name:`condition`,children:[(0,b.jsx)(h,{name:`.field`,label:`Field`,options:E.lookup(`fields`)}),(0,b.jsx)(h,{name:`.operator`,label:`Operator`,options:E.lookup(`operators`,D),onStale:`first`}),(0,b.jsxs)(d,{of:D,children:[(0,b.jsx)(d.Case,{is:`string`,children:(0,b.jsx)(p,{name:`.value`,label:`Value`,required:!0})}),(0,b.jsx)(d.Case,{is:`number`,children:(0,b.jsx)(m,{name:`.value`,label:`Value`,required:!0})}),(0,b.jsx)(d.Case,{is:`date`,children:(0,b.jsx)(g,{name:`.value`,label:`Date`,required:!0})}),(0,b.jsx)(d.Case,{is:`boolean`,children:null})]})]})}function k(){return(0,b.jsxs)(o,{name:`group`,children:[(0,b.jsx)(_,{name:`.combinator`,label:`Match`,options:C}),(0,b.jsxs)(v,{name:`.children`,min:1,newRow:x,label:`Rules`,rowLabel:`Rule`,children:[(0,b.jsxs)(d,{of:`.kind`,children:[(0,b.jsx)(d.Case,{is:`condition`,children:(0,b.jsx)(O,{})}),(0,b.jsx)(d.Case,{is:`group`,children:(0,b.jsx)(k,{})})]}),(0,b.jsx)(v.RowActions,{remove:!0})]}),(0,b.jsx)(v.Add,{to:`.children`,value:()=>x,children:`Condition`}),(0,b.jsx)(v.Add,{to:`.children`,value:()=>S,children:`Group`})]})}var A={async saveQuery(e){}};function j(){let e=a({defaultValues:w,model:T});return(0,b.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,b.jsxs)(u,{form:e,onSubmit:A.saveQuery,children:[(0,b.jsx)(c,{name:`query`,children:(0,b.jsx)(k,{})}),(0,b.jsx)(u.Submit,{className:n({size:`sm`,className:`w-fit`}),children:`Save query`})]}),(0,b.jsx)(M,{form:e})]})}function M({form:e}){let t=f(e,e=>e.serialize(),i);return(0,b.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,b.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,b.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var N=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, defineForm, type Json, kit } from "@kitora/form/core"
import { DateField, FieldArray, NumberField, SegmentedField, SelectField, TextField } from "@kitora/form/fields"
import { FieldScope, FieldTemplate, Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"

// type aliases (not interfaces) so a row literal is assignable to the JSON newRow
type QueryCondition = { kind: "condition"; field?: string; operator?: string; value?: Json }
type QueryGroup = { kind?: "group"; combinator: "and" | "or"; children: Array<QueryCondition | QueryGroup> }
type Query = { query: QueryGroup }

const NEW_CONDITION: QueryCondition = { kind: "condition", field: "name", operator: "eq" }
const NEW_GROUP: QueryGroup = { kind: "group", combinator: "and", children: [NEW_CONDITION] }
const combinators = [{ value: "and", label: "AND" }, { value: "or", label: "OR" }]
const defaultValues: Query = { query: NEW_GROUP }

// the catalog (field → type → operators) is model data, so a server can run the same lookups
const model = defineForm<Query>()(() => ({
  fields: [],
  data: {
    fieldTypes: { name: "string", age: "number", active: "boolean", createdAt: "date" },
    fields: [{ value: "name", label: "Name" }, { value: "age", label: "Age" }, { value: "active", label: "Active" }, { value: "createdAt", label: "Created" }],
    operators: {
      string: [{ value: "eq", label: "equals" }, { value: "contains", label: "contains" }],
      number: [{ value: "eq", label: "=" }, { value: "gt", label: ">" }, { value: "lt", label: "<" }],
      boolean: [{ value: "isTrue", label: "is true" }, { value: "isFalse", label: "is false" }],
      date: [{ value: "before", label: "before" }, { value: "after", label: "after" }],
    },
  },
}))
const { e } = kit<Query>()
// '.field' is the sibling field in the same condition row (row-relative name)
const FIELD_TYPE = e.lookup("fieldTypes", e.ref(".field"))

function ConditionTemplate() {
  return (
    <FieldTemplate name="condition">
      <SelectField name=".field" label="Field" options={e.lookup("fields")} />
      {/* onStale="first": an operator the new field type lacks resets to its first one */}
      <SelectField name=".operator" label="Operator" options={e.lookup("operators", FIELD_TYPE)} onStale="first" />
      <Variant of={FIELD_TYPE}>
        <Variant.Case is="string"><TextField name=".value" label="Value" required /></Variant.Case>
        <Variant.Case is="number"><NumberField name=".value" label="Value" required /></Variant.Case>
        <Variant.Case is="date"><DateField name=".value" label="Date" required /></Variant.Case>
        <Variant.Case is="boolean">{null}</Variant.Case>
      </Variant>
    </FieldTemplate>
  )
}

// a group holds conditions or further groups, to any depth: the template recurses
function GroupTemplate() {
  return (
    <FieldTemplate name="group">
      <SegmentedField name=".combinator" label="Match" options={combinators} />
      <FieldArray name=".children" min={1} newRow={NEW_CONDITION} label="Rules" rowLabel="Rule">
        <Variant of=".kind">
          <Variant.Case is="condition"><ConditionTemplate /></Variant.Case>
          <Variant.Case is="group"><GroupTemplate /></Variant.Case>
        </Variant>
        <FieldArray.RowActions remove />
      </FieldArray>
      <FieldArray.Add to=".children" value={() => NEW_CONDITION}>Condition</FieldArray.Add>
      <FieldArray.Add to=".children" value={() => NEW_GROUP}>Group</FieldArray.Add>
    </FieldTemplate>
  )
}

// stub: replace with your API (POST /segments)
const api = { async saveQuery(_query: Query): Promise<void> {} }

export function QueryBuilderForm() {
  const form = useForm<Query>({ defaultValues, model })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.saveQuery}>
        <FieldScope name="query">
          <GroupTemplate />
        </FieldScope>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save query</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>t(()=>import(`./query-s72kjBM6.js`),[]));function P(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(e,{title:`Query / rule builder — recursive`,children:[`Recursive nesting: AND/OR groups containing condition rows or further groups, to any depth. Two named templates recurse through `,(0,b.jsx)(`code`,{children:`<FieldTemplate>`}),` with row-relative names (`,(0,b.jsx)(`code`,{children:`.field`}),`, `,(0,b.jsx)(`code`,{children:`.children`}),`), so the JSX compiles to the same model as a `,(0,b.jsx)(`code`,{children:`defineForm`}),` definition. Operators come from a model lookup on the field's type and reset when the type changes; the value input is typed per field type (text, number, between, date, none for booleans).`]}),(0,b.jsx)(y,{n:1,title:`Recursive query builder`,blurb:`AND/OR groups hold conditions or further groups to any depth; operators follow the field type and the value input is typed per type.`,code:N,children:(0,b.jsx)(j,{})})]})}export{P as component};