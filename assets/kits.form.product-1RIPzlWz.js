import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,ii as n,zc as r}from"./index-BZuUy872.js";import{W as i}from"./messages-CylclMLI.js";import{A as a,J as o,Y as s,c,et as l,h as u,s as d}from"./field-config-53O_jYuu.js";import{a as f,n as p}from"./fields-DyVcPE0c.js";import{d as m}from"./field-options-eiseGCMF.js";import{r as h}from"./composites-x8bDUG7p.js";import{t as g}from"./tags-cb1NBuZ5.js";import{t as _}from"./field-array-M2_MqL16.js";import{t as v}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var y=r(),b=[{value:`USD`,label:`USD`},{value:`EUR`,label:`EUR`}],x=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`),S=e=>typeof e==`object`&&!!e&&`size`in e&&typeof e.size==`string`&&`color`in e&&typeof e.color==`string`;function C(e,t,n){let r=new Map(n.map(e=>[e.size+`/`+e.color,e]));return e.flatMap(e=>t.map(t=>r.get(e+`/`+t)??{size:e,color:t,stock:0}))}var w=l().effect(`regenerateVariants`,{fn:(e,{values:t,set:n})=>{typeof t!=`object`||!t||n(`variants`,C(`sizes`in t&&x(t.sizes)?t.sizes:[],`colors`in t&&x(t.colors)?t.colors:[],`variants`in t&&Array.isArray(t.variants)?t.variants.filter(S):[]))}}),T=o()(()=>({fields:[],effects:[{on:[`sizes`,`colors`],do:[{op:`regenerateVariants`}]}]})),{v:E}=s(),D={title:``,images:[],sizes:[`S`,`M`],colors:[`Black`],variants:C([`S`,`M`],[`Black`],[])},O={async saveProduct(e){}};function k(){let e=a({defaultValues:D,model:T,registry:w});return(0,y.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,y.jsxs)(c,{form:e,onSubmit:O.saveProduct,children:[(0,y.jsx)(f,{name:`title`,label:`Product title`,required:!0}),(0,y.jsx)(g,{name:`images`,label:`Image URLs / tags`,placeholder:`add an image url…`}),(0,y.jsxs)(m,{cols:{base:1,sm:2},children:[(0,y.jsx)(g,{name:`sizes`,label:`Sizes`,placeholder:`add a size…`}),(0,y.jsx)(g,{name:`colors`,label:`Colors`,placeholder:`add a color…`})]}),(0,y.jsxs)(_,{name:`variants`,label:`Variants`,rowLabel:`Variant`,layout:`table`,children:[(0,y.jsx)(d.Display,{name:`.size`,label:`Size`}),(0,y.jsx)(d.Display,{name:`.color`,label:`Color`}),(0,y.jsx)(h,{name:`.price`,label:`Price`,required:!0,compact:!0,currencies:b}),(0,y.jsx)(p,{name:`.stock`,label:`Stock`,rules:[E.min(0),E.integer()]})]}),(0,y.jsx)(c.Submit,{className:n({size:`sm`,className:`w-fit`}),children:`Save product`})]}),(0,y.jsx)(A,{form:e})]})}function A({form:e}){let{payload:t,dirty:n,status:r,issues:a}=u(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,y.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,y.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,y.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,y.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,y.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,y.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,y.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var j=`import { buttonVariants } from "@kitora/ui/button"
import { catalogRegistry, deepEqual, defineForm, kit, type Issue, type SubmitStatus } from "@kitora/form/core"
import { FieldArray, FormGrid, MoneyField, NumberField, TagsField, TextField } from "@kitora/form/fields"
import { Field, Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

// a type alias (not an interface) so a row is JSON-assignable
type VariantRow = { size: string; color: string; price?: { amount?: number; currency: string }; stock: number }
type Product = { title: string; images: string[]; sizes: string[]; colors: string[]; variants: VariantRow[] }

const currencies = [{ value: "USD", label: "USD" }, { value: "EUR", label: "EUR" }]
const isStrings = (x: unknown): x is string[] => Array.isArray(x) && x.every((s) => typeof s === "string")
const isRow = (x: unknown): x is VariantRow =>
  typeof x === "object" && x !== null && "size" in x && typeof x.size === "string" && "color" in x && typeof x.color === "string"

// size × color → rows; a row whose option key survives keeps its price and stock
function cartesian(sizes: string[], colors: string[], current: VariantRow[]): VariantRow[] {
  const byKey = new Map(current.map((r) => [r.size + "/" + r.color, r]))
  return sizes.flatMap((size) => colors.map((color) => byKey.get(size + "/" + color) ?? { size, color, stock: 0 }))
}

// the effect lives in the registry (code); the model references it by name (data)
const registry = catalogRegistry().effect("regenerateVariants", {
  fn: (_args, { values, set }) => {
    if (typeof values !== "object" || values === null) return
    const sizes = "sizes" in values && isStrings(values.sizes) ? values.sizes : []
    const colors = "colors" in values && isStrings(values.colors) ? values.colors : []
    const rows = "variants" in values && Array.isArray(values.variants) ? values.variants.filter(isRow) : []
    set("variants", cartesian(sizes, colors, rows))
  },
})
const model = defineForm<Product>()(() => ({
  fields: [],
  effects: [{ on: ["sizes", "colors"], do: [{ op: "regenerateVariants" }] }],
}))
const { v } = kit<Product>()

const defaultValues: Product = { title: "", images: [], sizes: ["S", "M"], colors: ["Black"], variants: cartesian(["S", "M"], ["Black"], []) }

// stub: replace with your API (PUT /products/:id)
const api = { async saveProduct(_product: Product): Promise<void> {} }

export function ProductForm() {
  const form = useForm<Product>({ defaultValues, model, registry })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.saveProduct}>
        <TextField name="title" label="Product title" required />
        <TagsField name="images" label="Image URLs / tags" placeholder="add an image url…" />
        <FormGrid cols={{ base: 1, sm: 2 }}>
          <TagsField name="sizes" label="Sizes" placeholder="add a size…" />
          <TagsField name="colors" label="Colors" placeholder="add a color…" />
        </FormGrid>
        {/* rows are generated by the effect, not added by hand */}
        <FieldArray name="variants" label="Variants" rowLabel="Variant" layout="table">
          <Field.Display name=".size" label="Size" />
          <Field.Display name=".color" label="Color" />
          {/* amount + currency in one h-7 control; the row's price is { amount, currency } */}
          <MoneyField name=".price" label="Price" required compact currencies={currencies} />
          <NumberField name=".stock" label="Stock" rules={[v.min(0), v.integer()]} />
        </FieldArray>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save product</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>t(()=>import(`./product-BhSLy_xy.js`),[]));function M(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(e,{title:`Product editor — variant matrix`,children:`Option sets drive the variant matrix: add a size or a color and the size × color rows regenerate through a named effect, keeping the price and stock of every combination that still exists. Each row's price is a compact money control (amount and currency in one cell), so rows can be priced in different currencies.`}),(0,y.jsx)(v,{n:1,title:`Variant matrix`,blurb:`Add a size or a color: the size × color rows regenerate through a named effect, keeping the price and stock of every surviving combination. Price is a compact MoneyField: amount and currency in one h-7 cell.`,code:j,children:(0,y.jsx)(k,{})})]})}export{M as component};