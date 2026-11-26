import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as ee,ti as i}from"./index-9y5uwRd3.js";import{a,c as o,d as s,f as te,n as c,o as l,r as u}from"./money-LQWubu5H.js";import{i as d,o as f,t as p}from"./adapters-Ed7GQHpH.js";import{i as m}from"./fake-CqA2cLLP.js";import{a as h,r as g}from"./shared-tk1Ml145.js";import{t as _}from"./use-cart-EOy5X8on.js";import{a as v,i as y,n as b,o as x,r as S,t as C}from"./cart-BtKzcJDb.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";import{t as T}from"./-kits.commerce.shared-BgmCQ-l8.js";var ne=e(n(),1),E=ee();function D(){let[e,t]=(0,ne.useState)(2);return(0,E.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,E.jsx)(y,{value:e,onChange:t,max:5}),(0,E.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[e,` of 5 in stock`]})]})}var O=`import { useState } from "react"
import { QuantityStepper } from "@kitora/commerce"

/** The stepper alone: −/+ buttons, typing, ↑/↓, clamped to 1–5. */
export function BasicQuantity() {
  const [qty, setQty] = useState(2)
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <QuantityStepper value={qty} onChange={setQty} max={5} />
      <span className="text-muted-foreground tabular-nums">{qty} of 5 in stock</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./quantity-7wmDKIzR.js`),[]));var k=f(8.25,{label:`Sales tax`}),A={currency:`USD`,coupon:null,lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:l(12900,`USD`),quantity:1,maxQuantity:8,image:`⌨️`},{id:`stand`,productId:`stand`,name:`Aluminium laptop stand`,variant:`Silver`,unitPrice:l(4500,`USD`),quantity:2,maxQuantity:3,image:`💻`}]};function j(){let e=_({defaultValue:A,tax:k});return(0,E.jsxs)(C.Root,{cart:e,className:`max-w-xl`,children:[(0,E.jsx)(C.Lines,{}),(0,E.jsx)(C.Totals,{shippingPending:!0})]})}var M=`import { Cart, type CartState, flatTaxPolicy, money, useCart } from "@kitora/commerce"

const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const START: CartState = {
  currency: "USD",
  coupon: null,
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: money(12900, "USD"), quantity: 1, maxQuantity: 8, image: "⌨️" },
    { id: "stand", productId: "stand", name: "Aluminium laptop stand", variant: "Silver", unitPrice: money(4500, "USD"), quantity: 2, maxQuantity: 3, image: "💻" },
  ],
}

/** A cart from the parts: lines with steppers and remove, then the totals with tax. Controlled: \`useCart\` owns the state and the root reads it. */
export function BasicCartLines() {
  const cart = useCart({ defaultValue: START, tax: TAX })
  return (
    <Cart.Root cart={cart} className="max-w-xl">
      <Cart.Lines />
      <Cart.Totals shippingPending />
    </Cart.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>r(()=>import(`./cart-lines-BjdBc4jX.js`),[]));var N=m(),P=f(8.25,{label:`Sales tax`}),F={currency:`USD`,coupon:null,lines:[{id:`mouse`,productId:`mouse`,name:`Wireless mouse`,variant:`Graphite`,unitPrice:l(5900,`USD`),quantity:1,maxQuantity:20,image:`🖱️`}]};function I(){return(0,E.jsxs)(C.Root,{defaultValue:F,coupons:N,tax:P,className:`max-w-sm`,children:[(0,E.jsx)(C.Coupon,{}),(0,E.jsx)(C.Totals,{shippingPending:!0})]})}var L=`import { Cart, type CartState, fakeCoupons, flatTaxPolicy, money } from "@kitora/commerce"

const coupons = fakeCoupons()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const START: CartState = { currency: "USD", coupon: null, lines: [{ id: "mouse", productId: "mouse", name: "Wireless mouse", variant: "Graphite", unitPrice: money(5900, "USD"), quantity: 1, maxQuantity: 20, image: "🖱️" }] }

/** Coupons through an adapter. Try SAVE10, WELCOME20 (needs $100), FREESHIP, or the expired SUMMER23. The root owns the cart (uncontrolled). */
export function BasicCoupon() {
  return (
    <Cart.Root defaultValue={START} coupons={coupons} tax={TAX} className="max-w-sm">
      <Cart.Coupon />
      <Cart.Totals shippingPending />
    </Cart.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./coupon-D8szCXvO.js`),[]));var R=[{locale:`en-US`,value:c(1234.5,`USD`)},{locale:`de-DE`,value:c(1234.5,`EUR`)},{locale:`ja-JP`,value:c(1234,`JPY`)},{locale:`en-IN`,value:c(123456.78,`INR`)}];function z(){return(0,E.jsx)(`table`,{className:`text-[13px]`,children:(0,E.jsx)(`tbody`,{children:R.map(e=>(0,E.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,E.jsx)(`td`,{className:`py-1 pr-4 font-mono text-[12px] text-muted-foreground`,children:e.locale}),(0,E.jsxs)(`td`,{className:`py-1 pr-4 font-mono text-[12px] text-muted-foreground tabular-nums`,children:[e.value.amount,` `,e.value.currency]}),(0,E.jsx)(`td`,{className:`py-1 font-medium`,children:(0,E.jsx)(h,{formatter:u(e.locale),children:(0,E.jsx)(g,{value:e.value})})})]},e.locale))})})}var B=`import { CommerceProvider, MoneyText, fromMajor, intlMoneyFormatter } from "@kitora/commerce"

const ROWS = [
  { locale: "en-US", value: fromMajor(1234.5, "USD") },
  { locale: "de-DE", value: fromMajor(1234.5, "EUR") },
  { locale: "ja-JP", value: fromMajor(1234, "JPY") },
  { locale: "en-IN", value: fromMajor(123456.78, "INR") },
] as const

/** Money is integer minor units; the formatter is a seam. Each row swaps it through \`CommerceProvider\`. */
export function BasicMoney() {
  return (
    <table className="text-[13px]">
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.locale} className="border-b last:border-b-0">
            <td className="py-1 pr-4 font-mono text-[12px] text-muted-foreground">{r.locale}</td>
            <td className="py-1 pr-4 font-mono text-[12px] text-muted-foreground tabular-nums">
              {r.value.amount} {r.value.currency}
            </td>
            <td className="py-1 font-medium">
              <CommerceProvider formatter={intlMoneyFormatter(r.locale)}>
                <MoneyText value={r.value} />
              </CommerceProvider>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>r(()=>import(`./money-CiOp3QEK.js`),[]));var V=m(),H=f(8.25,{label:`Sales tax`}),U={currency:`USD`,coupon:null,lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:l(12900,`USD`),quantity:1,maxQuantity:8,image:`⌨️`},{id:`mug`,productId:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,unitPrice:l(1800,`USD`),quantity:2,maxQuantity:40,image:`☕`}]};function W({title:e}){let{cart:t,clear:n}=x();return(0,E.jsxs)(`div`,{className:`flex items-baseline justify-between`,children:[(0,E.jsx)(`h3`,{className:`text-[14px] font-semibold tracking-tight`,children:e}),t.lines.length>0?(0,E.jsx)(i,{type:`button`,variant:`ghost`,size:`xs`,onClick:n,className:`text-[12px] text-muted-foreground`,children:`Clear`}):null]})}function G({onCheckout:e}){let{cart:t}=x();return t.lines.length===0?null:(0,E.jsx)(i,{className:`w-full`,onClick:e,children:`Checkout`})}function K(){return(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:[(0,E.jsx)(`section`,{"aria-label":`Preset cart`,className:`rounded-xl border bg-card p-3`,children:(0,E.jsx)(b,{cart:_({defaultValue:U,coupons:V,tax:H}),title:`Preset`,onCheckout:()=>void 0})}),(0,E.jsx)(`section`,{"aria-label":`Composed cart`,className:`rounded-xl border bg-card p-3`,children:(0,E.jsxs)(C.Root,{defaultValue:U,coupons:V,tax:H,children:[(0,E.jsx)(W,{title:`Composed`}),(0,E.jsx)(C.Lines,{}),(0,E.jsx)(C.Coupon,{}),(0,E.jsx)(C.Totals,{shippingPending:!0}),(0,E.jsx)(G,{onCheckout:()=>void 0})]})})]})}var q=`import { Button } from "@kitora/ui/button"
import { Cart, type CartState, CartView, fakeCoupons, flatTaxPolicy, money, useCart, useCartContext } from "@kitora/commerce"

const coupons = fakeCoupons()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const START: CartState = {
  currency: "USD",
  coupon: null,
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: money(12900, "USD"), quantity: 1, maxQuantity: 8, image: "⌨️" },
    { id: "mug", productId: "mug", name: "Ceramic mug", variant: "350 ml · Sand", unitPrice: money(1800, "USD"), quantity: 2, maxQuantity: 40, image: "☕" },
  ],
}

/** The heading row, a part of your own: it reads the cart through \`useCartContext\`. */
function CartHeading({ title }: { readonly title: string }) {
  const { cart, clear } = useCartContext()
  return (
    <div className="flex items-baseline justify-between">
      <h3 className="text-[14px] font-semibold tracking-tight">{title}</h3>
      {cart.lines.length > 0 ? (
        <Button type="button" variant="ghost" size="xs" onClick={clear} className="text-[12px] text-muted-foreground">
          Clear
        </Button>
      ) : null}
    </div>
  )
}

/** The checkout button, hidden while the cart is empty. */
function CheckoutButton({ onCheckout }: { readonly onCheckout: () => void }) {
  const { cart } = useCartContext()
  if (cart.lines.length === 0) return null
  return (
    <Button className="w-full" onClick={onCheckout}>
      Checkout
    </Button>
  )
}

/**
 * \`CartView\` rebuilt from the public parts: \`Cart.Root\` (uncontrolled here, it owns the cart),
 * \`Cart.Lines\`, \`Cart.Coupon\`, \`Cart.Totals\`, plus two parts of your own on \`useCartContext\`.
 * The preset on the left, the rebuild on the right: same state model, same markup roles.
 */
export function ComposeCart() {
  const preset = useCart({ defaultValue: START, coupons, tax: TAX })
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <section aria-label="Preset cart" className="rounded-xl border bg-card p-3">
        <CartView cart={preset} title="Preset" onCheckout={() => undefined} />
      </section>
      <section aria-label="Composed cart" className="rounded-xl border bg-card p-3">
        <Cart.Root defaultValue={START} coupons={coupons} tax={TAX}>
          <CartHeading title="Composed" />
          <Cart.Lines />
          <Cart.Coupon />
          <Cart.Totals shippingPending />
          <CheckoutButton onCheckout={() => undefined} />
        </Cart.Root>
      </section>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>r(()=>import(`./compose-cart-Dn6CKLCw.js`),[]));var J={async validate(e,t){let n=/^TEAM-(\d{1,2})$/.exec(e.trim().toUpperCase());if(!n)throw new p(`coupon-invalid`,`"${e}" is not a team code. Try TEAM-15.`);if(t.lines.reduce((e,t)=>e+t.quantity,0)<2)throw new p(`coupon-minimum`,`Team codes need at least two items.`);let r=Math.min(30,Number(n[1]));return{code:`TEAM-${r}`,kind:`percent`,value:r,label:`${r} % team discount`}}},Y={tax({goods:e}){return e.amount<5e3?{amount:te(e.currency),label:`Tax (exempt under $50)`}:{amount:o(e,5),label:`Tax (5 %)`}}},X={format(e){return`${s(e).toFixed(a(e.currency))} ${e.currency}`}},re={currency:`USD`,coupon:null,lines:[{id:`mug`,productId:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,unitPrice:l(1800,`USD`),quantity:1,maxQuantity:40,image:`☕`},{id:`cable`,productId:`cable`,name:`Braided USB-C cable`,variant:`2 m`,unitPrice:l(1500,`USD`),quantity:1,maxQuantity:99,image:`🔌`}]};function ie(){return(0,E.jsx)(h,{formatter:X,children:(0,E.jsxs)(C.Root,{defaultValue:re,coupons:J,tax:Y,className:`max-w-md`,children:[(0,E.jsx)(C.Lines,{}),(0,E.jsx)(C.Coupon,{placeholder:`Team code (TEAM-15)`}),(0,E.jsx)(C.Totals,{shippingPending:!0})]})})}var Z=`import { Cart, type CartState, CommerceError, type CouponAdapter, CommerceProvider, type MoneyFormatter, type TaxPolicy, minorDigits, money, percentOf, toMajor, zero } from "@kitora/commerce"

/**
 * A coupon service of your own (stub: replace with your API). \`TEAM-<n>\` takes n % off, up to 30,
 * and needs at least two items; anything else is rejected with the kit's closed error codes.
 */
const teamCoupons: CouponAdapter = {
  async validate(code, cart) {
    const match = /^TEAM-(\\d{1,2})$/.exec(code.trim().toUpperCase())
    if (!match) throw new CommerceError("coupon-invalid", \`"\${code}" is not a team code. Try TEAM-15.\`)
    const items = cart.lines.reduce((n, l) => n + l.quantity, 0)
    if (items < 2) throw new CommerceError("coupon-minimum", "Team codes need at least two items.")
    const percent = Math.min(30, Number(match[1]))
    return { code: \`TEAM-\${percent}\`, kind: "percent", value: percent, label: \`\${percent} % team discount\` }
  },
}

/** A tax rule of your own: goods under $50 are exempt, everything above pays 5 %. */
const exemptUnder50: TaxPolicy = {
  tax({ goods }) {
    if (goods.amount < 5000) return { amount: zero(goods.currency), label: "Tax (exempt under $50)" }
    return { amount: percentOf(goods, 5), label: "Tax (5 %)" }
  },
}

/** A formatter of your own: plain digits with the ISO code after the number. */
const isoFormatter: MoneyFormatter = {
  format(value) {
    return \`\${toMajor(value).toFixed(minorDigits(value.currency))} \${value.currency}\`
  },
}

const START: CartState = {
  currency: "USD",
  coupon: null,
  lines: [
    { id: "mug", productId: "mug", name: "Ceramic mug", variant: "350 ml · Sand", unitPrice: money(1800, "USD"), quantity: 1, maxQuantity: 40, image: "☕" },
    { id: "cable", productId: "cable", name: "Braided USB-C cable", variant: "2 m", unitPrice: money(1500, "USD"), quantity: 1, maxQuantity: 99, image: "🔌" },
  ],
}

/** Three seams swapped at once: the coupon adapter, the tax policy and the money formatter. Raise the mugs past $50 to see the tax rule switch. */
export function CustomAdapters() {
  return (
    <CommerceProvider formatter={isoFormatter}>
      <Cart.Root defaultValue={START} coupons={teamCoupons} tax={exemptUnder50} className="max-w-md">
        <Cart.Lines />
        <Cart.Coupon placeholder="Team code (TEAM-15)" />
        <Cart.Totals shippingPending />
      </Cart.Root>
    </CommerceProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./custom-adapters-DSy_MDy-.js`),[]));var Q={currency:`USD`,coupon:{code:`SAVE10`,kind:`percent`,value:10,label:`10% off`},lines:[{id:`tee`,productId:`tee`,name:`Organic tee`,variant:`M · Black`,unitPrice:l(2800,`USD`),quantity:2,image:`👕`},{id:`cap`,productId:`cap`,name:`Wool cap`,unitPrice:l(1900,`USD`),quantity:1}]},ae=d(Q,{shipping:l(600,`USD`),tax:f(7,{label:`Tax`})});function oe(){return(0,E.jsxs)(`div`,{className:`flex max-w-sm flex-col gap-2 text-[13px]`,children:[(0,E.jsx)(`ul`,{className:`flex flex-col gap-2`,children:Q.lines.map(e=>(0,E.jsxs)(`li`,{className:`flex items-center gap-2.5`,children:[(0,E.jsx)(S,{line:e,className:`size-9 text-[16px]`}),(0,E.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.name}),(0,E.jsx)(g,{value:{amount:e.unitPrice.amount*e.quantity,currency:e.unitPrice.currency}})]},e.id))}),(0,E.jsx)(v,{totals:ae,couponCode:Q.coupon?.code,className:`border-t pt-2`})]})}var $=`import { type CartState, computeTotals, flatTaxPolicy, LineThumb, money, MoneyText, TotalsTable } from "@kitora/commerce"

const CART: CartState = {
  currency: "USD",
  coupon: { code: "SAVE10", kind: "percent", value: 10, label: "10% off" },
  lines: [
    { id: "tee", productId: "tee", name: "Organic tee", variant: "M · Black", unitPrice: money(2800, "USD"), quantity: 2, image: "👕" },
    { id: "cap", productId: "cap", name: "Wool cap", unitPrice: money(1900, "USD"), quantity: 1 },
  ],
}

// Pure numbers from the core; no cart hook or provider needed.
const totals = computeTotals(CART, { shipping: money(600, "USD"), tax: flatTaxPolicy(7, { label: "Tax" }) })

/** A read-only line list with \`LineThumb\` (an emoji, an image URL or the first letter) and the \`TotalsTable\` under it. */
export function BasicTotals() {
  return (
    <div className="flex max-w-sm flex-col gap-2 text-[13px]">
      <ul className="flex flex-col gap-2">
        {CART.lines.map((line) => (
          <li key={line.id} className="flex items-center gap-2.5">
            <LineThumb line={line} className="size-9 text-[16px]" />
            <span className="min-w-0 flex-1 truncate">{line.name}</span>
            <MoneyText value={{ amount: line.unitPrice.amount * line.quantity, currency: line.unitPrice.currency }} />
          </li>
        ))}
      </ul>
      <TotalsTable totals={totals} couponCode={CART.coupon?.code} className="border-t pt-2" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./totals-LZNhiAfu.js`),[]));function se(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(t,{title:`Basics: cart`,children:`The cart is a pure reducer over plain data; totals run subtotal → discount → shipping → tax → total on integers.`}),(0,E.jsx)(w,{n:1,title:`Quantity stepper`,blurb:`Works without a cart. Type a number, or use ↑ / ↓; it clamps to the stock limit.`,code:O,children:(0,E.jsx)(T,{testId:`basic-quantity`,children:(0,E.jsx)(D,{})})}),(0,E.jsx)(w,{n:2,title:`Lines and totals`,blurb:"`Cart.Lines` and `Cart.Totals` over `useCart`. At quantity 1 the minus becomes remove.",code:M,children:(0,E.jsx)(T,{testId:`basic-cart`,children:(0,E.jsx)(j,{})})}),(0,E.jsx)(w,{n:3,title:`Coupons through an adapter`,blurb:`The fake service knows SAVE10, WELCOME20 (needs a $100 subtotal), FREESHIP and the expired SUMMER23.`,code:L,children:(0,E.jsx)(T,{testId:`basic-coupon`,children:(0,E.jsx)(I,{})})}),(0,E.jsx)(w,{n:4,title:`Money and formatting`,blurb:"Amounts are integer minor units; the formatter is a seam on `CommerceProvider`.",code:B,children:(0,E.jsx)(T,{testId:`basic-money`,children:(0,E.jsx)(z,{})})}),(0,E.jsx)(w,{n:5,title:`Compose your own`,blurb:"`CartView` rebuilt from `Cart.Root` (uncontrolled), `Cart.Lines`, `Cart.Coupon`, `Cart.Totals` and two parts of your own on `useCartContext`, next to the preset.",code:q,children:(0,E.jsx)(T,{testId:`compose-cart`,children:(0,E.jsx)(K,{})})}),(0,E.jsx)(w,{n:6,title:`Custom adapters`,blurb:`Your own coupon service (TEAM-15 needs two items), your own tax rule (exempt under $50) and your own money formatter, each through its typed seam.`,code:Z,children:(0,E.jsx)(T,{testId:`custom-adapters`,children:(0,E.jsx)(ie,{})})}),(0,E.jsx)(w,{n:7,title:`Thumbnails and a totals table`,blurb:"`LineThumb` and `TotalsTable` over plain `computeTotals` numbers, with no cart hook.",code:$,children:(0,E.jsx)(T,{testId:`basic-totals`,children:(0,E.jsx)(oe,{})})})]})}export{se as component};