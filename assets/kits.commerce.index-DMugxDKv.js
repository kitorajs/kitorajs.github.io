import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-left-kLYTrtWo.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./plus-DkT_QJcZ.js";import{a as i,u as a}from"./checkout-BpkX9ImF.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-9y5uwRd3.js";import{o as u}from"./money-LQWubu5H.js";import{o as d}from"./adapters-Ed7GQHpH.js";import{n as f}from"./fake-CqA2cLLP.js";import{r as p}from"./shared-tk1Ml145.js";import{t as m}from"./use-cart-EOy5X8on.js";import{n as h}from"./cart-BtKzcJDb.js";import{t as g}from"./invoice-jNh9izI7.js";import"./kit-gallery-B-Yr9fP4.js";import{t as _}from"./example-CZLJLtIC.js";import{t as v}from"./-kits.commerce.shared-BgmCQ-l8.js";var y=e(o(),1),b=c(),x=f(),S=d(8.25,{label:`Sales tax`}),C={name:`Northwind Supply Co.`,address:[`500 Congress Ave, Suite 210`,`Austin TX 78701, US`],email:`billing@northwind.example`,taxId:`US-74-1234567`},w=[{id:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,price:129,emoji:`⌨️`,stock:8},{id:`mouse`,name:`Wireless mouse`,variant:`Graphite`,price:59,emoji:`🖱️`,stock:20},{id:`stand`,name:`Aluminium laptop stand`,variant:`Silver`,price:45,emoji:`💻`,stock:3},{id:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,price:18,emoji:`☕`,stock:40},{id:`cable`,name:`Braided USB-C cable`,variant:`2 m`,price:15,emoji:`🔌`,stock:99},{id:`ebook`,name:`Field guide to focus`,variant:`PDF + EPUB`,price:12,emoji:`📘`,stock:999,shippable:!1}];function T(e,t=1){return{id:e.id,productId:e.id,name:e.name,variant:e.variant,unitPrice:u(e.price*100,`USD`),quantity:t,maxQuantity:e.stock,image:e.emoji,shippable:e.shippable}}var E={currency:`USD`,coupon:null,lines:w.filter(e=>e.id===`kbd`||e.id===`mug`).map(e=>T(e,e.id===`mug`?2:1))};function D(){let e=m({defaultValue:E,coupons:x.coupons,tax:S}),[n,o]=(0,y.useState)(`shop`),[s,c]=(0,y.useState)(null);return n===`checkout`?(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsxs)(l,{size:`sm`,variant:`ghost`,className:`self-start`,onClick:()=>o(`shop`),children:[(0,b.jsx)(t,{}),` Back to shop`]}),(0,b.jsx)(i,{cart:e.cart,adapters:x,tax:S,onPlaced:t=>{c(t),e.clear()}}),s?(0,b.jsx)(l,{size:`sm`,variant:`outline`,className:`self-end`,onClick:()=>o(`invoice`),children:`View invoice`}):null]}):n===`invoice`&&s?(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsxs)(l,{size:`sm`,variant:`ghost`,className:`self-start`,onClick:()=>o(`shop`),children:[(0,b.jsx)(t,{}),` Keep shopping`]}),(0,b.jsx)(g,{invoice:a(s,C),footer:`Thank you for your business.`,actions:(0,b.jsx)(l,{size:`sm`,variant:`outline`,onClick:()=>window.print(),children:`Print`})})]}):(0,b.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]`,children:[(0,b.jsx)(`ul`,{"aria-label":`Products`,className:`grid grid-cols-2 gap-2 sm:grid-cols-3`,children:w.map(t=>{let n=e.cart.lines.find(e=>e.id===t.id)?.quantity??0;return(0,b.jsxs)(`li`,{className:`flex flex-col gap-2 rounded-lg border bg-card p-2.5`,children:[(0,b.jsx)(`div`,{"aria-hidden":!0,className:`grid aspect-[4/3] place-items-center rounded-md bg-muted text-[34px]`,children:t.emoji}),(0,b.jsxs)(`div`,{className:`min-w-0`,children:[(0,b.jsx)(`p`,{className:`truncate text-[13px] font-medium`,children:t.name}),(0,b.jsx)(`p`,{className:`truncate text-[12px] text-muted-foreground`,children:t.variant})]}),(0,b.jsxs)(`div`,{className:`mt-auto flex items-center justify-between gap-2`,children:[(0,b.jsx)(p,{value:{amount:t.price*100,currency:`USD`},className:`text-[13px] font-semibold`}),(0,b.jsxs)(l,{size:`xs`,variant:n?`soft`:`outline`,"aria-label":`Add ${t.name}`,disabled:n>=t.stock,onClick:()=>e.add(T(t)),children:[(0,b.jsx)(r,{}),` `,n||`Add`]})]})]},t.id)})}),(0,b.jsx)(`div`,{className:`h-fit rounded-xl border bg-card p-3 lg:sticky lg:top-3`,children:(0,b.jsx)(h,{cart:e,onCheckout:()=>o(`checkout`),title:`Cart · ${e.totals.itemCount}`})})]})}var O=`import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { type CartLine, CartView, CheckoutFlow, InvoiceView, MoneyText, type Order, type Seller, buildInvoice, createFakeCommerce, flatTaxPolicy, money, useCart } from "@kitora/commerce"

const adapters = createFakeCommerce()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const SELLER: Seller = { name: "Northwind Supply Co.", address: ["500 Congress Ave, Suite 210", "Austin TX 78701, US"], email: "billing@northwind.example", taxId: "US-74-1234567" }

interface Product {
  readonly id: string
  readonly name: string
  readonly variant: string
  /** Whole dollars. */
  readonly price: number
  readonly emoji: string
  readonly stock: number
  readonly shippable?: boolean
}

const PRODUCTS: readonly Product[] = [
  { id: "kbd", name: "Low-profile keyboard", variant: "Brown switches", price: 129, emoji: "⌨️", stock: 8 },
  { id: "mouse", name: "Wireless mouse", variant: "Graphite", price: 59, emoji: "🖱️", stock: 20 },
  { id: "stand", name: "Aluminium laptop stand", variant: "Silver", price: 45, emoji: "💻", stock: 3 },
  { id: "mug", name: "Ceramic mug", variant: "350 ml · Sand", price: 18, emoji: "☕", stock: 40 },
  { id: "cable", name: "Braided USB-C cable", variant: "2 m", price: 15, emoji: "🔌", stock: 99 },
  { id: "ebook", name: "Field guide to focus", variant: "PDF + EPUB", price: 12, emoji: "📘", stock: 999, shippable: false },
]

/** A cart line for a product. */
function lineFor(p: Product, quantity = 1): CartLine {
  return { id: p.id, productId: p.id, name: p.name, variant: p.variant, unitPrice: money(p.price * 100, "USD"), quantity, maxQuantity: p.stock, image: p.emoji, shippable: p.shippable }
}

/** The cart a visitor arrives with: one keyboard, two mugs. */
const START = { currency: "USD", coupon: null, lines: PRODUCTS.filter((p) => p.id === "kbd" || p.id === "mug").map((p) => lineFor(p, p.id === "mug" ? 2 : 1)) }
type Stage = "shop" | "checkout" | "invoice"

/** A whole store on fake adapters: browse → cart with coupons → checkout → invoice. */
export function Storefront() {
  const cart = useCart({ defaultValue: START, coupons: adapters.coupons, tax: TAX })
  const [stage, setStage] = useState<Stage>("shop")
  const [order, setOrder] = useState<Order | null>(null)

  if (stage === "checkout") {
    return (
      <div className="flex flex-col gap-3">
        <Button size="sm" variant="ghost" className="self-start" onClick={() => setStage("shop")}>
          <ArrowLeft /> Back to shop
        </Button>
        <CheckoutFlow
          cart={cart.cart}
          adapters={adapters}
          tax={TAX}
          onPlaced={(placed) => {
            setOrder(placed)
            cart.clear()
          }}
        />
        {order ? (
          <Button size="sm" variant="outline" className="self-end" onClick={() => setStage("invoice")}>
            View invoice
          </Button>
        ) : null}
      </div>
    )
  }
  if (stage === "invoice" && order) {
    return (
      <div className="flex flex-col gap-3">
        <Button size="sm" variant="ghost" className="self-start" onClick={() => setStage("shop")}>
          <ArrowLeft /> Keep shopping
        </Button>
        <InvoiceView invoice={buildInvoice(order, SELLER)} footer="Thank you for your business." actions={<Button size="sm" variant="outline" onClick={() => window.print()}>Print</Button>} />
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <ul aria-label="Products" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {PRODUCTS.map((p) => {
          const inCart = cart.cart.lines.find((l) => l.id === p.id)?.quantity ?? 0
          return (
            <li key={p.id} className="flex flex-col gap-2 rounded-lg border bg-card p-2.5">
              <div aria-hidden className="grid aspect-[4/3] place-items-center rounded-md bg-muted text-[34px]">{p.emoji}</div>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">{p.name}</p>
                <p className="truncate text-[12px] text-muted-foreground">{p.variant}</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-2">
                <MoneyText value={{ amount: p.price * 100, currency: "USD" }} className="text-[13px] font-semibold" />
                <Button size="xs" variant={inCart ? "soft" : "outline"} aria-label={\`Add \${p.name}\`} disabled={inCart >= p.stock} onClick={() => cart.add(lineFor(p))}>
                  <Plus /> {inCart ? inCart : "Add"}
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="h-fit rounded-xl border bg-card p-3 lg:sticky lg:top-3">
        <CartView cart={cart} onCheckout={() => setStage("checkout")} title={\`Cart · \${cart.totals.itemCount}\`} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>s(()=>import(`./storefront-DN7l84iT.js`),[]));var k=[{name:`core`,what:`Money in integer minor units and a formatter seam; plans, intervals, savings and the comparison matrix; the cart reducer, coupons and totals with a pluggable TaxPolicy; card brand, Luhn, expiry and CVC rules; the checkout step machine; orders and invoices; booking's zone helpers (over @kitora/pickers/core's one wall-time ↔ instant conversion) and booking slots; adapter interfaces and in-memory fakes. No DOM, no React.`},{name:`dom`,what:`The viewer's time zone, supported zones and locale (SSR-safe); caret-safe card input formatting and the attributes that keep card data out of form posts.`},{name:`react`,what:`usePricing, useCart, useCardField, useCheckout, useBooking, controlled or uncontrolled, plus an optional CommerceProvider for the formatter, locale and clock.`},{name:`ui`,what:`Pricing.*, Cart.*, Checkout.*, Booking.* compound parts with className / classNames and data-* state; CardField, AddressFields, ShippingOptions, TotalsTable, OrderSummary, InvoiceView; presets PricingTable, CartView, CheckoutFlow, BookingWidget built from those parts.`}];function A(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`Commerce kit`,children:`Add products, change quantities, try the codes SAVE10, WELCOME20 or FREESHIP, then check out with 4242 4242 4242 4242 and any future expiry. The order lands on an invoice. Every backend call goes through an adapter; here they are fakes.`}),(0,b.jsx)(_,{n:1,title:`A store from browse to invoice`,blurb:`Product grid, cart with stock limits and coupons, the checkout steps with shipping quotes from the address, a tokenised card, the confirmation and the invoice.`,code:O,children:(0,b.jsx)(v,{testId:`storefront`,children:(0,b.jsx)(D,{})})}),(0,b.jsx)(_,{n:2,title:`Layers`,blurb:"Use any layer alone: `@kitora/commerce/core`, `/dom`, `/react`, `/ui`, or the whole barrel.",children:(0,b.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,b.jsx)(`tbody`,{children:k.map(e=>(0,b.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,b.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,b.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{A as component};