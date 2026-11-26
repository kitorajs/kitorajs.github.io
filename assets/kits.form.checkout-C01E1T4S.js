import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{d as i,p as a}from"./field-options-BxYA8-No.js";import{W as o}from"./messages-BpgLhfTN.js";import{A as s,J as c,T as l,Y as u,c as d,d as f,h as p}from"./field-config-62hz5rv-.js";import{a as m,i as h,n as g,r as _}from"./fields-3rMiSNLY.js";import{t as v}from"./composites-BLtDqbKQ.js";import{i as y,t as b}from"./codec-DJBM5bdq.js";import{n as x,r as S}from"./card-Di_pKork.js";import{t as C}from"./field-array-B0BhXTG7.js";import{t as w}from"./display-BL6k8-He.js";import{t as T}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var E=n(),D={items:[{sku:`WIDGET`,qty:1,unitPrice:29.99}],shipping:v.empty(`US`),sameAsShipping:!0,billing:v.empty(`US`),phone:``,method:`card`},O=[{value:`card`,label:`Card`},{value:`paypal`,label:`PayPal`}],k=e=>typeof e==`number`?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(e):`—`,{c:A,e:j,v:M}=u(),N=c()(()=>({fields:[],derived:{subtotal:j.sum(`items`,e=>e.mul(e.ref(`qty`),e.ref(`unitPrice`))),billing:{when:A.eq(`sameAsShipping`,!0),expr:j.ref(`shipping`),readOnly:!0}}})),P={async placeOrder(e){console.log(`order`,e)}};function F(){let e=s({defaultValues:D,model:N,validateOn:`blur`});return(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,E.jsx)(d,{form:e,onSubmit:P.placeOrder,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,E.jsxs)(a,{title:`Cart`,children:[(0,E.jsxs)(C,{name:`items`,label:`Cart`,rowLabel:`Item`,newRow:{sku:``,qty:1,unitPrice:0},min:1,layout:`table`,children:[(0,E.jsx)(m,{name:`.sku`,label:`SKU`,required:!0}),(0,E.jsx)(g,{name:`.qty`,label:`Qty`,rules:[M.min(1)]}),(0,E.jsx)(g,{name:`.unitPrice`,label:`Price`,rules:[M.min(0)]}),(0,E.jsx)(C.RowActions,{remove:!0})]}),(0,E.jsxs)(`div`,{className:`mt-3 flex items-center justify-between`,children:[(0,E.jsx)(C.Add,{to:`items`,children:`Add item`}),(0,E.jsx)(w,{name:`subtotal`,label:`Subtotal`,render:k,live:!0,tone:`inline`})]})]}),(0,E.jsx)(a,{title:`Shipping`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsx)(v,{name:`shipping`,required:!0,section:`shipping`}),(0,E.jsx)(b,{name:`phone`,label:`Phone`,codec:y,inputMode:`tel`,autoComplete:`tel`})]})}),(0,E.jsx)(a,{title:`Billing`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsx)(h,{name:`sameAsShipping`,label:`Billing same as shipping`}),(0,E.jsx)(v,{name:`billing`,label:`Billing address`,required:!0,section:`billing`})]})}),(0,E.jsx)(a,{title:`Payment`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsx)(_,{name:`method`,label:`Method`,options:O}),(0,E.jsxs)(f,{of:`method`,children:[(0,E.jsx)(f.Case,{is:`card`,children:(0,E.jsxs)(i,{cols:{base:1,sm:3},children:[(0,E.jsx)(S,{name:`cardNumber`,label:`Card number`,required:!0,span:{sm:2}}),(0,E.jsx)(x,{name:`cardExp`,label:`Expiry`,required:!0,span:{sm:1}})]})}),(0,E.jsx)(f.Case,{is:`paypal`,children:(0,E.jsx)(m,{name:`paypalEmail`,label:`PayPal email`,type:`email`,required:!0,rules:[M.email()]})})]})]})}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsx)(d.Submit,{className:r({size:`sm`,className:`w-fit`}),pendingLabel:`Placing order…`,children:`Place order`}),(0,E.jsx)(d.Status,{className:`text-[13px]`,pending:(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,E.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:()=>(0,E.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Order placed`}),error:e=>(0,E.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})]})}),(0,E.jsx)(I,{form:e})]})}function I({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,E.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,E.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,E.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,E.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,E.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,E.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var L=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, defineForm, type Issue, kit, type SubmitStatus } from "@kitora/form/core"
import { AddressField, CardExpiryField, CardNumberField, CodecField, DisplayField, FieldArray, FormGrid, NumberField, Section, SelectField, SwitchField, TextField, usPhoneCodec } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"

type Addr = ReturnType<typeof AddressField.empty>
type Checkout = {
  items: Array<{ sku: string; qty: number; unitPrice: number }>
  subtotal?: number
  shipping: Addr
  sameAsShipping: boolean
  billing: Addr
  phone: string
  method: "card" | "paypal"
  cardNumber?: string // digits only; luhn rule + PCI redaction come with the field
  cardExp?: string
  paypalEmail?: string
}

const defaultValues: Checkout = {
  items: [{ sku: "WIDGET", qty: 1, unitPrice: 29.99 }],
  shipping: AddressField.empty("US"),
  sameAsShipping: true,
  billing: AddressField.empty("US"),
  phone: "",
  method: "card",
}
const METHODS = [{ value: "card", label: "Card" }, { value: "paypal", label: "PayPal" }]
const usd = (x: unknown) => (typeof x === "number" ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(x) : "—")

const { c, e, v } = kit<Checkout>()
const model = defineForm<Checkout>()(() => ({
  fields: [],
  derived: {
    subtotal: e.sum("items", (r) => r.mul(r.ref("qty"), r.ref("unitPrice"))),
    // conditional mirror of the sibling 'shipping': read-only while 'sameAsShipping' is on, still in the payload
    billing: { when: c.eq("sameAsShipping", true), expr: e.ref("shipping"), readOnly: true },
  },
}))

// stub: replace with your API (POST /orders)
const api = {
  async placeOrder(values: Checkout): Promise<void> {
    console.log("order", values)
  },
}

export function CheckoutForm() {
  const form = useForm<Checkout>({ defaultValues, model, validateOn: "blur" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.placeOrder}>
        <div className="flex flex-col gap-4">
          <Section title="Cart">
            <FieldArray name="items" label="Cart" rowLabel="Item" newRow={{ sku: "", qty: 1, unitPrice: 0 }} min={1} layout="table">
              <TextField name=".sku" label="SKU" required />
              <NumberField name=".qty" label="Qty" rules={[v.min(1)]} />
              <NumberField name=".unitPrice" label="Price" rules={[v.min(0)]} />
              <FieldArray.RowActions remove />
            </FieldArray>
            <div className="mt-3 flex items-center justify-between">
              <FieldArray.Add to="items">Add item</FieldArray.Add>
              <DisplayField name="subtotal" label="Subtotal" render={usd} live tone="inline" />
            </div>
          </Section>
          <Section title="Shipping">
            <div className="flex flex-col gap-3">
              <AddressField name="shipping" required section="shipping" />
              <CodecField name="phone" label="Phone" codec={usPhoneCodec} inputMode="tel" autoComplete="tel" />
            </div>
          </Section>
          <Section title="Billing">
            <div className="flex flex-col gap-3">
              <SwitchField name="sameAsShipping" label="Billing same as shipping" />
              <AddressField name="billing" label="Billing address" required section="billing" />
            </div>
          </Section>
          <Section title="Payment">
            <div className="flex flex-col gap-3">
              <SelectField name="method" label="Method" options={METHODS} />
              {/* 'method' is the sibling select above: only the matching case mounts and submits */}
              <Variant of="method">
                <Variant.Case is="card">
                  <FormGrid cols={{ base: 1, sm: 3 }}>
                    <CardNumberField name="cardNumber" label="Card number" required span={{ sm: 2 }} />
                    <CardExpiryField name="cardExp" label="Expiry" required span={{ sm: 1 }} />
                  </FormGrid>
                </Variant.Case>
                <Variant.Case is="paypal">
                  <TextField name="paypalEmail" label="PayPal email" type="email" required rules={[v.email()]} />
                </Variant.Case>
              </Variant>
            </div>
          </Section>
          <div className="flex items-center gap-2">
            <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Placing order…">Place order</Form.Submit>
            <Form.Status<void>
              className="text-[13px]"
              pending={<span className="text-muted-foreground">Submitting…</span>}
              invalid={<span className="text-destructive">Fix the highlighted fields.</span>}
              success={() => <span className="text-emerald-700 dark:text-emerald-400">Order placed</span>}
              error={(err) => <span className="text-destructive">{err.message}</span>}
            />
          </div>
        </div>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>t(()=>import(`./checkout-DcAioOPM.js`),[]));var R={lines:[{item:`Design`,qty:3,price:120},{item:`Build`,qty:10,price:95}],taxRate:.2},z=e=>typeof e==`number`?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(e):`—`,B=c()(({e})=>({fields:[],derived:{subtotal:e.sum(`lines`,e=>e.mul(e.ref(`qty`),e.ref(`price`))),tax:e.mul(e.ref(`subtotal`),e.ref(`taxRate`)),total:e.add(e.ref(`subtotal`),e.ref(`tax`))}}));function V(){let e=l(B,`subtotal`),t=l(B,`tax`),n=l(B,`total`);return(0,E.jsxs)(`dl`,{className:`grid grid-cols-3 gap-2 rounded-lg border bg-muted/30 p-2 text-[13px] tabular-nums`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`dt`,{className:`text-muted-foreground`,children:`Subtotal`}),(0,E.jsx)(`dd`,{children:z(e)})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`dt`,{className:`text-muted-foreground`,children:`Tax`}),(0,E.jsx)(`dd`,{children:z(t)})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`dt`,{className:`text-muted-foreground`,children:`Total`}),(0,E.jsx)(`dd`,{className:`font-medium`,children:z(n)})]})]})}var H={async save(e){return{id:`q_`+e.lines.length}}};function U(){let e=s({defaultValues:R,model:B});return(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,E.jsxs)(d,{form:e,onSubmit:H.save,children:[(0,E.jsxs)(C,{name:`lines`,label:`Lines`,rowLabel:`Line`,newRow:{item:``,qty:1,price:0},layout:`table`,children:[(0,E.jsx)(m,{name:`.item`,label:`Item`,required:!0}),(0,E.jsx)(g,{name:`.qty`,label:`Qty`}),(0,E.jsx)(g,{name:`.price`,label:`Price`}),(0,E.jsx)(C.RowActions,{remove:!0})]}),(0,E.jsx)(C.Add,{to:`lines`,children:`Add line`}),(0,E.jsx)(g,{name:`taxRate`,label:`Tax rate`}),(0,E.jsx)(V,{}),(0,E.jsx)(d.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Save quote`})]}),(0,E.jsx)(W,{form:e})]})}function W({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,E.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,E.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,E.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,E.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,E.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,E.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var G=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, defineForm, type Issue, type SubmitStatus } from "@kitora/form/core"
import { FieldArray, NumberField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useComputed, useForm, useFormSnapshot } from "@kitora/form/react"

type Quote = { lines: Array<{ item: string; qty: number; price: number }>; taxRate: number }
// computed keys live OUTSIDE Quote: typed, sent with the payload, never settable
type QuoteTotals = { subtotal: number; tax: number; total: number }

const defaultValues: Quote = { lines: [{ item: "Design", qty: 3, price: 120 }, { item: "Build", qty: 10, price: 95 }], taxRate: 0.2 }
const usd = (x: unknown) => (typeof x === "number" ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(x) : "—")

const model = defineForm<Quote, QuoteTotals>()(({ e }) => ({
  fields: [],
  derived: {
    subtotal: e.sum("lines", (r) => r.mul(r.ref("qty"), r.ref("price"))),
    tax: e.mul(e.ref("subtotal"), e.ref("taxRate")),
    total: e.add(e.ref("subtotal"), e.ref("tax")),
  },
}))

function Totals() {
  // typed by the definition: number | undefined, read-only (form.setValue("total", …) does not compile)
  const subtotal = useComputed(model, "subtotal")
  const tax = useComputed(model, "tax")
  const total = useComputed(model, "total")
  return (
    <dl className="grid grid-cols-3 gap-2 rounded-lg border bg-muted/30 p-2 text-[13px] tabular-nums">
      <div><dt className="text-muted-foreground">Subtotal</dt><dd>{usd(subtotal)}</dd></div>
      <div><dt className="text-muted-foreground">Tax</dt><dd>{usd(tax)}</dd></div>
      <div><dt className="text-muted-foreground">Total</dt><dd className="font-medium">{usd(total)}</dd></div>
    </dl>
  )
}

// stub: replace with your API (POST /quotes)
const api = {
  async save(values: Quote): Promise<{ id: string }> {
    return { id: "q_" + values.lines.length }
  },
}

export function QuoteForm() {
  const form = useForm<Quote>({ defaultValues, model })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.save}>
        <FieldArray name="lines" label="Lines" rowLabel="Line" newRow={{ item: "", qty: 1, price: 0 }} layout="table">
          <TextField name=".item" label="Item" required />
          <NumberField name=".qty" label="Qty" />
          <NumberField name=".price" label="Price" />
          <FieldArray.RowActions remove />
        </FieldArray>
        <FieldArray.Add to="lines">Add line</FieldArray.Add>
        <NumberField name="taxRate" label="Tax rate" />
        <Totals />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save quote</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>t(()=>import(`./quote-DAhttSte.js`),[]));function K(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(e,{title:`Checkout`,children:`Cart table + model-derived subtotal, shipping/billing addresses where "billing same as shipping" mirrors the shipping address into billing (read-only, still sent), a discriminated payment method, and catalog card fields (canonical digits, Luhn and expiry rules, redacted as PCI).`}),(0,E.jsx)(T,{n:1,title:`Checkout`,blurb:`Edit the cart to see the subtotal derive; turn off “billing same as shipping” to edit billing; switch the method.`,code:L,children:(0,E.jsx)(F,{})}),(0,E.jsx)(T,{n:2,title:`Computed totals outside the value type`,blurb:`defineForm<Quote, QuoteTotals>: subtotal, tax and total are computed keys that are NOT in Quote — typed for reads (useComputed), sent with the payload, and setValue("total") does not compile. Edit a quantity or the tax rate.`,code:G,children:(0,E.jsx)(U,{})})]})}export{K as component};