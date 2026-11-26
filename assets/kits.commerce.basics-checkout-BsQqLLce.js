import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,p as d,r as f,s as p,t as m}from"./checkout-BpkX9ImF.js";import{t as h}from"./input-2rqm_FXH.js";import{Bc as g,Cc as _,Ic as v,ti as y}from"./index-9y5uwRd3.js";import{o as b}from"./money-LQWubu5H.js";import{o as x}from"./adapters-Ed7GQHpH.js";import{a as S,n as C}from"./fake-CqA2cLLP.js";import{i as w,t as T}from"./shared-tk1Ml145.js";import"./kit-gallery-B-Yr9fP4.js";import{t as E}from"./example-CZLJLtIC.js";import{t as D}from"./-kits.commerce.shared-BgmCQ-l8.js";var O=e(g(),1),k=v(),A=S();function j(){let[e,t]=(0,O.useState)(null),r=n({payments:A,onTokenized:t});return(0,k.jsxs)(`form`,{noValidate:!0,className:`flex max-w-sm flex-col gap-3`,onSubmit:e=>{e.preventDefault(),r.tokenize()},children:[(0,k.jsx)(f,{field:r}),r.submitError?(0,k.jsx)(`p`,{role:`alert`,className:`text-[12px] text-destructive`,children:r.submitError}):null,(0,k.jsx)(y,{type:`submit`,size:`sm`,disabled:r.pending,children:r.pending?`Securing…`:`Save card`}),e?(0,k.jsxs)(`p`,{className:`rounded-md border bg-muted/40 px-2.5 py-1.5 font-mono text-[12px]`,children:[o(e.card.brand),` `,a(e.card),` → `,e.token]}):(0,k.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Try 4242 4242 4242 4242, any future expiry; 4000 0000 0000 0002 declines.`})]})}var M=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { CardField, type PaymentMethod, cardBrandLabel, fakePayments, maskedCard, useCardField } from "@kitora/commerce"

const payments = fakePayments()

/** The card field alone. Submit sends the digits once to the payment adapter and keeps only the token and summary. */
export function BasicCardField() {
  const [method, setMethod] = useState<PaymentMethod | null>(null)
  const field = useCardField({ payments, onTokenized: setMethod })
  return (
    <form
      noValidate
      className="flex max-w-sm flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        void field.tokenize()
      }}
    >
      <CardField field={field} />
      {field.submitError ? <p role="alert" className="text-[12px] text-destructive">{field.submitError}</p> : null}
      <Button type="submit" size="sm" disabled={field.pending}>
        {field.pending ? "Securing…" : "Save card"}
      </Button>
      {method ? (
        <p className="rounded-md border bg-muted/40 px-2.5 py-1.5 font-mono text-[12px]">
          {cardBrandLabel(method.card.brand)} {maskedCard(method.card)} → {method.token}
        </p>
      ) : (
        <p className="text-[12px] text-muted-foreground">Try 4242 4242 4242 4242, any future expiry; 4000 0000 0000 0002 declines.</p>
      )}
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>_(()=>import(`./card-field-CcgzthBy.js`),[]));function N(){let[e,t]=(0,O.useState)(c),[n,a]=(0,O.useState)({}),[o,s]=(0,O.useState)(null);return(0,k.jsxs)(`form`,{noValidate:!0,className:`flex max-w-lg flex-col gap-3`,onSubmit:t=>{t.preventDefault();let n=d(e);a(n),s(i(n)?null:r(e))},children:[(0,k.jsx)(m,{value:e,onChange:t,errors:n}),(0,k.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,k.jsx)(y,{type:`submit`,size:`sm`,children:`Validate`}),o?(0,k.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:o}):null]})]})}var P=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { AddressFields, EMPTY_ADDRESS, type AddressErrors, formatAddressLine, hasErrors, validateAddress } from "@kitora/commerce"

/** The address fields, controlled, with the core's validation (swap \`validateAddress\` for your own rules). */
export function BasicAddress() {
  const [address, setAddress] = useState(EMPTY_ADDRESS)
  const [errors, setErrors] = useState<AddressErrors>({})
  const [saved, setSaved] = useState<string | null>(null)
  return (
    <form
      noValidate
      className="flex max-w-lg flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        const next = validateAddress(address)
        setErrors(next)
        setSaved(hasErrors(next) ? null : formatAddressLine(address))
      }}
    >
      <AddressFields value={address} onChange={setAddress} errors={errors} />
      <div className="flex items-center gap-3">
        <Button type="submit" size="sm">Validate</Button>
        {saved ? <span className="text-[12px] text-muted-foreground">{saved}</span> : null}
      </div>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>_(()=>import(`./address-6WVtJ0Mc.js`),[]));var F=[{id:`standard`,label:`Standard`,eta:`3–5 business days`,price:b(500,`USD`),carrier:`USPS`},{id:`express`,label:`Express`,eta:`1–2 business days`,price:b(1500,`USD`),carrier:`UPS`},{id:`pickup`,label:`Store pickup`,eta:`Ready in 2 hours`,price:b(0,`USD`)}];function I(){let[e,t]=(0,O.useState)(`standard`);return(0,k.jsx)(p,{options:F,value:e,onChange:t,className:`max-w-md`})}var L=`import { useState } from "react"
import { ShippingOptions, type ShippingOption, money } from "@kitora/commerce"

const OPTIONS: readonly ShippingOption[] = [
  { id: "standard", label: "Standard", eta: "3–5 business days", price: money(500, "USD"), carrier: "USPS" },
  { id: "express", label: "Express", eta: "1–2 business days", price: money(1500, "USD"), carrier: "UPS" },
  { id: "pickup", label: "Store pickup", eta: "Ready in 2 hours", price: money(0, "USD") },
]

/** Shipping choices as a radiogroup (arrow keys move between them). */
export function BasicShipping() {
  const [value, setValue] = useState<string>("standard")
  return <ShippingOptions options={OPTIONS} value={value} onChange={setValue} className="max-w-md" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>_(()=>import(`./shipping-CfTAez2c.js`),[]));function R(){let[e,t]=(0,O.useState)(`month`),[n,r]=(0,O.useState)(`0`),i=Number(n)>=1?null:`At least one seat.`;return(0,k.jsxs)(`div`,{className:`flex max-w-sm flex-col gap-3`,children:[(0,k.jsx)(w,{label:`Billing period`,value:e,onChange:t,options:[{value:`month`,label:`Monthly`},{value:`year`,label:`Yearly`,hint:`−20%`}]}),(0,k.jsx)(T,{label:`Seats`,htmlFor:`form-parts-seats`,error:i,children:(0,k.jsx)(h,{id:`form-parts-seats`,inputMode:`numeric`,value:n,"aria-invalid":i?!0:void 0,"aria-describedby":i?`form-parts-seats-error`:void 0,onChange:e=>r(e.target.value),className:`h-7 text-[13px]`})}),(0,k.jsxs)(`div`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[`We take`,l.map(e=>(0,k.jsx)(u,{brand:e},e))]})]})}var z=`import { useState } from "react"
import { Input } from "@kitora/ui/input"
import { CARD_BRANDS, CardBrandMark, FieldRow, Segmented } from "@kitora/commerce"

type Plan = "month" | "year"

/** The kit's small form pieces on their own: a \`Segmented\` radiogroup, a labelled \`FieldRow\` with an error, and a \`CardBrandMark\` per brand. */
export function BasicFormParts() {
  const [plan, setPlan] = useState<Plan>("month")
  const [seats, setSeats] = useState("0")
  const error = Number(seats) >= 1 ? null : "At least one seat."
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Segmented<Plan> label="Billing period" value={plan} onChange={setPlan} options={[{ value: "month", label: "Monthly" }, { value: "year", label: "Yearly", hint: "−20%" }]} />
      <FieldRow label="Seats" htmlFor="form-parts-seats" error={error}>
        <Input id="form-parts-seats" inputMode="numeric" value={seats} aria-invalid={error ? true : undefined} aria-describedby={error ? "form-parts-seats-error" : undefined} onChange={(e) => setSeats(e.target.value)} className="h-7 text-[13px]" />
      </FieldRow>
      <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
        We take
        {CARD_BRANDS.map((brand) => (
          <CardBrandMark key={brand} brand={brand} />
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>_(()=>import(`./form-parts-DbrNJynW.js`),[]));var B=C(),V=x(8.25,{label:`Sales tax`}),H={currency:`USD`,coupon:null,lines:[{id:`mug`,productId:`mug`,name:`Stoneware mug`,variant:`Sand`,unitPrice:b(2400,`USD`),quantity:2,maxQuantity:10,image:`☕`}]};function U(){return(0,k.jsxs)(s.Root,{cart:H,adapters:B,tax:V,className:`mx-auto max-w-md`,children:[(0,k.jsx)(s.Summary,{}),(0,k.jsx)(s.Steps,{}),(0,k.jsx)(s.CurrentStep,{})]})}var W=`import { type CartState, Checkout, createFakeCommerce, flatTaxPolicy, money } from "@kitora/commerce"

const adapters = createFakeCommerce()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const CART: CartState = {
  currency: "USD",
  coupon: null,
  lines: [{ id: "mug", productId: "mug", name: "Stoneware mug", variant: "Sand", unitPrice: money(2400, "USD"), quantity: 2, maxQuantity: 10, image: "☕" }],
}

/**
 * \`CheckoutFlow\` rebuilt from \`Checkout\` parts. \`Checkout.Root\` owns the flow
 * (pass \`cart\` and \`adapters\`, or a \`checkout\` from \`useCheckout\` to drive it
 * from outside). Here the summary sits above the steps in one column.
 */
export function BasicCheckoutParts() {
  return (
    <Checkout.Root cart={CART} adapters={adapters} tax={TAX} className="mx-auto max-w-md">
      <Checkout.Summary />
      <Checkout.Steps />
      <Checkout.CurrentStep />
    </Checkout.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>_(()=>import(`./checkout-parts-BeNCE2Ii.js`),[]));function G(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(t,{title:`Basics: checkout`,children:`The pieces inside each checkout step, usable on their own.`}),(0,k.jsx)(E,{n:1,title:`The card field`,blurb:`Brand detection, grouping, Luhn, expiry and CVC checks. Digits live only in the hook and go to the payment adapter once.`,code:M,children:(0,k.jsx)(D,{testId:`basic-card`,children:(0,k.jsx)(j,{})})}),(0,k.jsx)(E,{n:2,title:`Address fields`,blurb:`Controlled fields with browser autocomplete names and the core's validation.`,code:P,children:(0,k.jsx)(D,{testId:`basic-address`,children:(0,k.jsx)(N,{})})}),(0,k.jsx)(E,{n:3,title:`Shipping options`,blurb:`A radiogroup of options with carrier, ETA and price.`,code:L,children:(0,k.jsx)(D,{testId:`basic-shipping`,children:(0,k.jsx)(I,{})})}),(0,k.jsx)(E,{n:4,title:`Form building blocks`,blurb:"`Segmented` (a radiogroup with arrow keys), `FieldRow` (label, control and error) and `CardBrandMark` for each card brand.",code:z,children:(0,k.jsx)(D,{testId:`basic-form-parts`,children:(0,k.jsx)(R,{})})}),(0,k.jsx)(E,{n:5,title:`Checkout from parts`,blurb:"`Checkout.Root` owning the flow, with `Checkout.Summary`, `Checkout.Steps` and `Checkout.CurrentStep` in one column. 4000 0000 0000 0002 declines.",code:W,children:(0,k.jsx)(D,{testId:`basic-checkout-parts`,children:(0,k.jsx)(U,{})})})]})}export{G as component};