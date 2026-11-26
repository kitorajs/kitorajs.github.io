import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,hi as a,ni as o}from"./index-B9ukmIN1.js";import{K as s,W as c}from"./messages-C_IMdr_-.js";import{A as l,G as u,J as d,Y as f,c as p,g as m,h,p as g}from"./field-config-17kME8Vl.js";import{a as _,n as v,r as y}from"./fields-CwxxBZgA.js";import{t as b}from"./field-array-BUA8h98X.js";import{t as x}from"./display-CjsFrQus.js";import{t as S}from"./example-BGnSQG2Y.js";import{a as C,o as w,r as T,s as E,t as D}from"./demos-Ds1NfSaA.js";import{o as O}from"./demo-fixtures-DpfwlbH0.js";var k={block:`block`,cascade:`cascade`,nullify:`nullify`},A=({label:e,count:t,noun:n})=>`“${e}” is used by ${t} ${n}`,j=e=>e.split(`.`).at(-1)??e;function M(e,t){return n=>{let r=s(n.row,t.idKey);if(typeof r!=`string`&&typeof r!=`number`)return{allow:!0};let i=e.getValues(),a=[];for(let e of t.refs){let t=s(i,e.array);Array.isArray(t)&&t.forEach((t,n)=>{for(let i of e.keys)s(t,i)===r&&a.push({source:e,index:n,key:i})})}if(a.length===0)return{allow:!0};let o=new Set(a.map(e=>`${e.source.array}.${e.index}`)).size;switch(t.action){case k.block:{let e=s(n.row,t.labelKey??`label`)??s(n.row,`name`)??r,i=t.refs.length===1?t.refs[0].noun??j(t.refs[0].array):`rows`;return{allow:!1,reason:(t.message??A)({id:String(r),label:String(e),count:o,noun:i})}}case k.cascade:return{allow:!0,before:()=>{for(let n of t.refs){let t=[...new Set(a.filter(e=>e.source===n).map(e=>e.index))].toSorted((e,t)=>t-e);for(let r of t)e.array(n.array).remove(r)}}};case k.nullify:return{allow:!0,before:()=>{for(let t of a)e.setValue(`${t.source.array}.${t.index}.${t.key}`,null)}}}}}var N=e=>`~standard`in e;async function P(e,t,n={}){let r=N(e)?void 0:e,i=N(e)?e:n.schema,a=u({defaultValues:t,model:r,registry:n.registry,loaders:n.loaders,schema:i,toSubmit:n.toSubmit});try{let e=await a.validate();return e.valid?{valid:!0,issues:[],payload:a.serialize()}:{valid:!1,issues:e.issues.map(e=>({path:e.path,message:e.message}))}}finally{a.destroy()}}var F=e(n(),1),I=i(),L={nodes:[{id:`draft`,label:`Draft`},{id:`review`,label:`Review`},{id:`done`,label:`Done`},{id:`archived`,label:`Archived`}],edges:[{from:`draft`,to:`review`},{from:`review`,to:`done`}]},{v:R,e:z}=f(),B=[R.oneOf(z.map(`nodes`,e=>e.ref(`id`)),`Pick an existing step`)],V={block:`Block`,cascade:`Cascade`,nullify:`Nullify`},H=Object.values(k);function U(){let[e,t]=(0,F.useState)(k.block),[n,r]=(0,F.useState)(``),i=l({defaultValues:L}),s=m(i,`nodes`).filter(e=>e.id!==``).map(e=>({value:e.id,label:e.label||e.id}));g(i,`error`,e=>{e.kind===`remove-blocked`&&r(e.message)}),g(i,`change`,()=>r(``));let c=M(i,{idKey:`id`,refs:[{array:`edges`,keys:[`from`,`to`],noun:`transitions`}],action:e});return(0,I.jsxs)(`div`,{className:`grid grid-cols-1 gap-4`,children:[(0,I.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,I.jsx)(`div`,{role:`radiogroup`,"aria-label":`When a referenced step is removed`,className:`inline-flex w-fit rounded-md border border-input p-0.5 text-xs`,children:H.map(n=>(0,I.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===n,className:a(`rounded px-2 py-0.5`,e===n?`bg-primary text-primary-foreground`:`hover:bg-accent`),onClick:()=>t(n),children:V[n]},n))}),(0,I.jsxs)(p,{form:i,onSubmit:O,layout:`none`,className:`flex flex-col gap-4`,children:[(0,I.jsxs)(b,{name:`nodes`,label:`Steps`,rowLabel:`Step`,layout:`table`,newRow:{id:``,label:``},removeGuard:c,children:[(0,I.jsx)(_,{name:`.id`,label:`Key`,required:!0}),(0,I.jsx)(_,{name:`.label`,label:`Label`}),(0,I.jsx)(b.RowActions,{remove:!0})]}),n?(0,I.jsxs)(`p`,{role:`status`,className:`text-[13px] text-amber-700 dark:text-amber-400`,children:[n,` — remove those transitions first, or switch to Cascade / Nullify.`]}):null,(0,I.jsx)(b.Add,{to:`nodes`,children:`Add step`}),(0,I.jsxs)(b,{name:`edges`,label:`Transitions`,rowLabel:`Transition`,layout:`table`,newRow:{from:null,to:null},children:[(0,I.jsx)(y,{name:`.from`,label:`From`,options:s,rules:B}),(0,I.jsx)(y,{name:`.to`,label:`To`,options:s,rules:B}),(0,I.jsx)(b.RowActions,{remove:!0})]}),(0,I.jsx)(b.Add,{to:`edges`,children:`Add transition`}),(0,I.jsx)(p.Submit,{className:o({size:`sm`,className:`w-fit`}),pendingLabel:`Saving…`,children:`Save workflow`})]})]}),(0,I.jsx)(W,{form:i})]})}function W({form:e}){let t=h(e,e=>e.serialize(),c);return(0,I.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,I.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,I.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var G=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { deepEqual, kit, REFERENCE_ACTIONS, referenceGuard, REMOVE_BLOCKED_EVENT_KIND, type ReferenceAction } from "@kitora/form/core"
import { FieldArray, SelectField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormEvent, useFormSnapshot, useFormValue } from "@kitora/form/react"
import { mockSave } from "@/kit/form/demo-fixtures"

type Workflow = { nodes: Array<{ id: string; label: string }>; edges: Array<{ from: string | null; to: string | null }> }

const defaultValues: Workflow = {
  nodes: [
    { id: "draft", label: "Draft" },
    { id: "review", label: "Review" },
    { id: "done", label: "Done" },
    { id: "archived", label: "Archived" },
  ],
  edges: [
    { from: "draft", to: "review" },
    { from: "review", to: "done" },
  ],
}
const { v, e } = kit<Workflow>()
// validation: an edge end must be an existing node id ("nodes" is a sibling array)
const existingNode = [v.oneOf(e.map("nodes", (n) => n.ref("id")), "Pick an existing step")]
const ACTION_LABELS: Readonly<Record<ReferenceAction, string>> = { block: "Block", cascade: "Cascade", nullify: "Nullify" }
const ACTIONS = Object.values(REFERENCE_ACTIONS)

// mockSave is the gallery's stand-in: replace it with your API (PUT /workflows/1)
export function WorkflowForm() {
  // which policy the remove guard applies: the switch is demo chrome, a real app picks one
  const [action, setAction] = useState<ReferenceAction>(REFERENCE_ACTIONS.block)
  const [notice, setNotice] = useState("")
  const form = useForm<Workflow>({ defaultValues })
  const nodes = useFormValue(form, "nodes")
  const steps = nodes.filter((n) => n.id !== "").map((n) => ({ value: n.id, label: n.label || n.id }))
  // a blocked removal is reported as an "error" event of this kind; any edit clears the notice
  useFormEvent(form, "error", (ev) => {
    if (ev.kind === REMOVE_BLOCKED_EVENT_KIND) setNotice(ev.message)
  })
  useFormEvent(form, "change", () => setNotice(""))
  // removal: block (with a reason), cascade (drop the edges) or nullify (clear their ends);
  // cascade/nullify and the removal are ONE undo step; it also guards form.array("nodes").remove()
  const guard = referenceGuard(form, { idKey: "id", refs: [{ array: "edges", keys: ["from", "to"], noun: "transitions" }], action })
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col gap-3">
        <div role="radiogroup" aria-label="When a referenced step is removed" className="inline-flex w-fit rounded-md border border-input p-0.5 text-xs">
          {ACTIONS.map((a) => (
            <button key={a} type="button" role="radio" aria-checked={action === a} className={cn("rounded px-2 py-0.5", action === a ? "bg-primary text-primary-foreground" : "hover:bg-accent")} onClick={() => setAction(a)}>
              {ACTION_LABELS[a]}
            </button>
          ))}
        </div>
        <Form form={form} onSubmit={mockSave} layout="none" className="flex flex-col gap-4">
          <FieldArray name="nodes" label="Steps" rowLabel="Step" layout="table" newRow={{ id: "", label: "" }} removeGuard={guard}>
            <TextField name=".id" label="Key" required />
            <TextField name=".label" label="Label" />
            <FieldArray.RowActions remove />
          </FieldArray>
          {notice ? (
            <p role="status" className="text-[13px] text-amber-700 dark:text-amber-400">
              {notice} — remove those transitions first, or switch to Cascade / Nullify.
            </p>
          ) : null}
          <FieldArray.Add to="nodes">Add step</FieldArray.Add>
          <FieldArray name="edges" label="Transitions" rowLabel="Transition" layout="table" newRow={{ from: null, to: null }}>
            <SelectField name=".from" label="From" options={steps} rules={existingNode} />
            <SelectField name=".to" label="To" options={steps} rules={existingNode} />
            <FieldArray.RowActions remove />
          </FieldArray>
          <FieldArray.Add to="edges">Add transition</FieldArray.Add>
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Saving…">
            Save workflow
          </Form.Submit>
        </Form>
      </div>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>r(()=>import(`./workflow-l_nSkNqY.js`),[]));var K={items:[{sku:`SAMPLE`,qty:1,price:0}],total:0},q=1,J=d()(({f:e,e:t,v:n})=>({fields:[e.array(`items`,{newRow:{sku:``,qty:1,price:0}},e=>[e.text(`sku`),e.number(`qty`),e.number(`price`)]),e.display(`total`,{label:`Total`,rules:[n.min(q,`Orders start at $${q}`)]})],derived:{total:t.sum(`items`,e=>e.mul(e.ref(`qty`),e.ref(`price`)))}})),Y=e=>typeof e==`number`?`$${e.toFixed(2)}`:`—`;function X(){let e=l({defaultValues:K,model:J}),[t,n]=(0,F.useState)(null),r=async t=>{let r=await P(J,{...e.getValues(),total:t});n({posted:{total:t},valid:r.valid,issues:r.issues,payloadTotal:r.payload?.total})};return(0,I.jsxs)(E,{children:[(0,I.jsxs)(p,{form:e,onSubmit:O,children:[(0,I.jsxs)(b,{name:`items`,label:`Items`,rowLabel:`Item`,layout:`table`,newRow:{sku:``,qty:1,price:0},children:[(0,I.jsx)(_,{name:`.sku`,label:`SKU`}),(0,I.jsx)(v,{name:`.qty`,label:`Qty`}),(0,I.jsx)(v,{name:`.price`,label:`Price`}),(0,I.jsx)(b.RowActions,{remove:!0})]}),(0,I.jsx)(b.Add,{to:`items`,children:`Add item`}),(0,I.jsx)(x,{name:`total`,label:`Total`,render:Y,live:!0}),(0,I.jsx)(w,{label:`Place order`})]}),(0,I.jsxs)(C,{title:`Server check (validateValues)`,children:[(0,I.jsxs)(`div`,{className:`mb-2 flex flex-wrap gap-2`,children:[(0,I.jsx)(`button`,{type:`button`,className:D,onClick:()=>void r(999),children:`Post a forged $999 total`}),(0,I.jsx)(`button`,{type:`button`,className:D,onClick:()=>void r(.01),children:`Post a forged $0.01 total`})]}),t===null?(0,I.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`The server recomputes the total from the items before it validates.`}):(0,I.jsx)(T,{value:t})]})]})}var Z={order:`import { useState } from "react"
import { defineForm } from "@kitora/form/core"
import { DisplayField, FieldArray, NumberField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { validateValues } from "@kitora/form/server"

type Order = { items: Array<{ sku: string; qty: number; price: number }>; total: number }

const defaultValues: Order = { items: [{ sku: "", qty: 1, price: 0 }], total: 0 }
// one definition for client and server: the total is derived AND validated
export const orderDef = defineForm<Order>()(({ f, e, v }) => ({
  fields: [
    f.array("items", { newRow: { sku: "", qty: 1, price: 0 } }, (r) => [r.text("sku"), r.number("qty"), r.number("price")]),
    f.display("total", { label: "Total", rules: [v.min(1, "Orders start at $1")] }),
  ],
  derived: { total: e.sum("items", (r) => r.mul(r.ref("qty"), r.ref("price"))) },
}))

// on the server: the posted total is ignored — validateValues recomputes it from the items
export async function placeOrder(posted: Order): Promise<Order> {
  const res = await validateValues<Order>(orderDef, posted)
  if (!res.valid || !res.payload) throw new Error(res.issues.map((i) => i.message).join(", "))
  return res.payload // res.payload.total is the server's own sum
}

const usd = (v: unknown) => (typeof v === "number" ? "$" + v.toFixed(2) : "—")

export function OrderForm() {
  const form = useForm<Order>({ defaultValues, model: orderDef })
  const [verdict, setVerdict] = useState<unknown>(null)
  // what a tampering client could post: the real items with a forged total
  const forge = async (total: number): Promise<void> => {
    const res = await validateValues(orderDef, { ...form.getValues(), total })
    setVerdict({ posted: { total }, valid: res.valid, issues: res.issues, payloadTotal: res.payload?.total })
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={placeOrder}>
        <FieldArray name="items" label="Items" rowLabel="Item" layout="table" newRow={{ sku: "", qty: 1, price: 0 }}>
          <TextField name=".sku" label="SKU" />
          <NumberField name=".qty" label="Qty" />
          <NumberField name=".price" label="Price" />
          <FieldArray.RowActions remove />
        </FieldArray>
        <FieldArray.Add to="items">Add item</FieldArray.Add>
        {/* a failing rule on the derived total blocks submit and shows here */}
        <DisplayField name="total" label="Total" render={usd} live />
        <Form.Submit>Place order</Form.Submit>
      </Form>
      <section>
        <button type="button" onClick={() => void forge(999)}>Post a forged $999 total</button>
        <button type="button" onClick={() => void forge(0.01)}>Post a forged $0.01 total</button>
        {verdict === null ? <p>The server recomputes the total from the items before it validates.</p> : <pre>{JSON.stringify(verdict, null, 2)}</pre>}
      </section>
    </div>
  )
}`};function Q(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(t,{title:`Integrity: references and derived values`,children:`Rows that other rows point at cannot silently vanish, and a computed total is checked like any field on the client and recomputed on the server.`}),(0,I.jsx)(S,{n:1,title:`Referential integrity between arrays`,blurb:`Transitions point at steps. Remove “Review” (used twice) under Block, Cascade and Nullify; an unused step (Archived) always goes. A dangling transition is a field error.`,code:G,children:(0,I.jsx)(U,{})}),(0,I.jsx)(S,{n:2,title:`Derived total: validated, never trusted`,blurb:`The total is derived from the items. A $0 order fails the total's own rule on submit; a forged total posted to the server is replaced by the recomputed one.`,code:Z.order,children:(0,I.jsx)(X,{})})]})}export{Q as component};