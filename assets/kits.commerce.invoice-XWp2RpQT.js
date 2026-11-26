import{t as e}from"./download-Ky9GVUPR.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./printer-C8SJYS1l.js";import{o as r,u as i}from"./checkout-BpkX9ImF.js";import{Cc as a,Ic as o,ti as s}from"./index-9y5uwRd3.js";import{o as c}from"./money-LQWubu5H.js";import{i as l,o as u}from"./adapters-Ed7GQHpH.js";import{t as d}from"./invoice-jNh9izI7.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{t as p}from"./-kits.commerce.shared-BgmCQ-l8.js";var m=o(),h=e=>c(e*100,`USD`),g=u(8.25,{label:`Sales tax`}),_={currency:`USD`,coupon:{code:`SAVE10`,kind:`percent`,value:10,label:`10 % off`},lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:h(129),quantity:1,image:`⌨️`},{id:`mug`,productId:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,unitPrice:h(18),quantity:2,image:`☕`}]},v={id:`ord_sample`,number:`#1042`,placedAt:Date.UTC(2026,9,14,15,30),status:`paid`,lines:_.lines,totals:l(_,{shipping:h(5),tax:g}),address:{name:`Ada Lovelace`,email:`ada@example.com`,line1:`12 Analytical Row`,city:`Austin`,region:`TX`,postalCode:`78701`,country:`US`},shipping:{id:`standard`,label:`Standard`,eta:`3–5 business days`,price:h(5),carrier:`USPS`},payment:{brand:`visa`,last4:`4242`,expMonth:12,expYear:2028},couponCode:`SAVE10`};function y(){return(0,m.jsx)(r,{order:v,locale:`en-US`,className:`max-w-xl`})}var b=`import { type CartState, type Order, OrderSummary, computeTotals, flatTaxPolicy, money } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })

const CART: CartState = {
  currency: "USD",
  coupon: { code: "SAVE10", kind: "percent", value: 10, label: "10 % off" },
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: usd(129), quantity: 1, image: "⌨️" },
    { id: "mug", productId: "mug", name: "Ceramic mug", variant: "350 ml · Sand", unitPrice: usd(18), quantity: 2, image: "☕" },
  ],
}

/** A paid order, as an order adapter would return it. */
const ORDER: Order = {
  id: "ord_sample",
  number: "#1042",
  placedAt: Date.UTC(2026, 9, 14, 15, 30),
  status: "paid",
  lines: CART.lines,
  totals: computeTotals(CART, { shipping: usd(5), tax: TAX }),
  address: { name: "Ada Lovelace", email: "ada@example.com", line1: "12 Analytical Row", city: "Austin", region: "TX", postalCode: "78701", country: "US" },
  shipping: { id: "standard", label: "Standard", eta: "3–5 business days", price: usd(5), carrier: "USPS" },
  payment: { brand: "visa", last4: "4242", expMonth: 12, expYear: 2028 },
  couponCode: "SAVE10",
}

/** A placed order: lines, ship-to, card summary and totals. The card shows as •••• 4242; the number never existed here. */
export function OrderSummaryDemo() {
  return <OrderSummary order={ORDER} locale="en-US" className="max-w-xl" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>a(()=>import(`./order-summary-DiGAysuQ.js`),[]));var x=e=>c(e*100,`USD`),S=u(8.25,{label:`Sales tax`}),C={name:`Northwind Supply Co.`,address:[`500 Congress Ave, Suite 210`,`Austin TX 78701, US`],email:`billing@northwind.example`,taxId:`US-74-1234567`},w={currency:`USD`,coupon:{code:`SAVE10`,kind:`percent`,value:10,label:`10 % off`},lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:x(129),quantity:1,image:`⌨️`},{id:`mug`,productId:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,unitPrice:x(18),quantity:2,image:`☕`}]},T={id:`ord_sample`,number:`#1042`,placedAt:Date.UTC(2026,9,14,15,30),status:`paid`,lines:w.lines,totals:l(w,{shipping:x(5),tax:S}),address:{name:`Ada Lovelace`,email:`ada@example.com`,line1:`12 Analytical Row`,city:`Austin`,region:`TX`,postalCode:`78701`,country:`US`},shipping:{id:`standard`,label:`Standard`,eta:`3–5 business days`,price:x(5),carrier:`USPS`},payment:{brand:`visa`,last4:`4242`,expMonth:12,expYear:2028},couponCode:`SAVE10`},E=(0,m.jsx)(`div`,{"aria-hidden":!0,className:`grid size-9 place-items-center rounded-lg bg-primary text-[15px] font-bold text-primary-foreground`,children:`N`});function D(){return(0,m.jsx)(d,{invoice:i(T,C),logo:E,footer:`Questions? billing@northwind.example`,actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s,{size:`sm`,variant:`outline`,onClick:()=>window.print(),children:[(0,m.jsx)(n,{}),` Print`]}),(0,m.jsxs)(s,{size:`sm`,variant:`outline`,disabled:!0,title:`Wire your PDF service here`,children:[(0,m.jsx)(e,{}),` PDF`]})]})})}var O=`import { Download, Printer } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { type CartState, InvoiceView, type Order, type Seller, buildInvoice, computeTotals, flatTaxPolicy, money } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })

const SELLER: Seller = { name: "Northwind Supply Co.", address: ["500 Congress Ave, Suite 210", "Austin TX 78701, US"], email: "billing@northwind.example", taxId: "US-74-1234567" }

const CART: CartState = {
  currency: "USD",
  coupon: { code: "SAVE10", kind: "percent", value: 10, label: "10 % off" },
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: usd(129), quantity: 1, image: "⌨️" },
    { id: "mug", productId: "mug", name: "Ceramic mug", variant: "350 ml · Sand", unitPrice: usd(18), quantity: 2, image: "☕" },
  ],
}

/** A paid order, as an order adapter would return it. */
const ORDER: Order = {
  id: "ord_sample",
  number: "#1042",
  placedAt: Date.UTC(2026, 9, 14, 15, 30),
  status: "paid",
  lines: CART.lines,
  totals: computeTotals(CART, { shipping: usd(5), tax: TAX }),
  address: { name: "Ada Lovelace", email: "ada@example.com", line1: "12 Analytical Row", city: "Austin", region: "TX", postalCode: "78701", country: "US" },
  shipping: { id: "standard", label: "Standard", eta: "3–5 business days", price: usd(5), carrier: "USPS" },
  payment: { brand: "visa", last4: "4242", expMonth: 12, expYear: 2028 },
  couponCode: "SAVE10",
}

const LOGO = <div aria-hidden className="grid size-9 place-items-center rounded-lg bg-primary text-[15px] font-bold text-primary-foreground">N</div>

/** An invoice derived from a placed order and the seller's details; actions are a slot and hide when printing. */
export function InvoiceDemo() {
  return (
    <InvoiceView
      invoice={buildInvoice(ORDER, SELLER)}
      logo={LOGO}
      footer="Questions? billing@northwind.example"
      actions={
        <>
          <Button size="sm" variant="outline" onClick={() => window.print()}>
            <Printer /> Print
          </Button>
          <Button size="sm" variant="outline" disabled title="Wire your PDF service here">
            <Download /> PDF
          </Button>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./invoice-Drw-EC_L.js`),[]));var k=e=>c(e*100,`USD`),A=u(8.25,{label:`Sales tax`}),j={name:`Northwind Supply Co.`,address:[`500 Congress Ave, Suite 210`,`Austin TX 78701, US`],email:`billing@northwind.example`,taxId:`US-74-1234567`},M={currency:`USD`,coupon:{code:`SAVE10`,kind:`percent`,value:10,label:`10 % off`},lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:k(129),quantity:1,image:`⌨️`},{id:`mug`,productId:`mug`,name:`Ceramic mug`,variant:`350 ml · Sand`,unitPrice:k(18),quantity:2,image:`☕`}]},N={id:`ord_sample`,number:`#1042`,placedAt:Date.UTC(2026,9,14,15,30),status:`paid`,lines:M.lines,totals:l(M,{shipping:k(5),tax:A}),address:{name:`Ada Lovelace`,email:`ada@example.com`,line1:`12 Analytical Row`,city:`Austin`,region:`TX`,postalCode:`78701`,country:`US`},shipping:{id:`standard`,label:`Standard`,eta:`3–5 business days`,price:k(5),carrier:`USPS`},payment:{brand:`visa`,last4:`4242`,expMonth:12,expYear:2028},couponCode:`SAVE10`};function P(){return(0,m.jsx)(d,{invoice:i({...N,status:`placed`},j,{number:`INV-2026-0107`,dueDays:30}),actions:(0,m.jsx)(s,{size:`sm`,children:`Pay now`})})}var F=`import { Button } from "@kitora/ui/button"
import { type CartState, InvoiceView, type Order, type Seller, buildInvoice, computeTotals, flatTaxPolicy, money } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })

const SELLER: Seller = { name: "Northwind Supply Co.", address: ["500 Congress Ave, Suite 210", "Austin TX 78701, US"], email: "billing@northwind.example", taxId: "US-74-1234567" }

const CART: CartState = {
  currency: "USD",
  coupon: { code: "SAVE10", kind: "percent", value: 10, label: "10 % off" },
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: usd(129), quantity: 1, image: "⌨️" },
    { id: "mug", productId: "mug", name: "Ceramic mug", variant: "350 ml · Sand", unitPrice: usd(18), quantity: 2, image: "☕" },
  ],
}

/** A paid order, as an order adapter would return it. */
const ORDER: Order = {
  id: "ord_sample",
  number: "#1042",
  placedAt: Date.UTC(2026, 9, 14, 15, 30),
  status: "paid",
  lines: CART.lines,
  totals: computeTotals(CART, { shipping: usd(5), tax: TAX }),
  address: { name: "Ada Lovelace", email: "ada@example.com", line1: "12 Analytical Row", city: "Austin", region: "TX", postalCode: "78701", country: "US" },
  shipping: { id: "standard", label: "Standard", eta: "3–5 business days", price: usd(5), carrier: "USPS" },
  payment: { brand: "visa", last4: "4242", expMonth: 12, expYear: 2028 },
  couponCode: "SAVE10",
}

/** The same order before payment: an unpaid order gives a "Due" invoice with net-30 terms. */
export function InvoiceDueDemo() {
  return <InvoiceView invoice={buildInvoice({ ...ORDER, status: "placed" }, SELLER, { number: "INV-2026-0107", dueDays: 30 })} actions={<Button size="sm">Pay now</Button>} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>a(()=>import(`./invoice-due-ChpmRFlx.js`),[]));function I(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Orders and invoices`,children:`A placed order freezes the lines, totals, address and card summary; an invoice is derived from it.`}),(0,m.jsx)(f,{n:1,title:`Order summary`,blurb:`What a confirmation or an order page shows.`,code:b,children:(0,m.jsx)(p,{testId:`order-summary`,children:(0,m.jsx)(y,{})})}),(0,m.jsx)(f,{n:2,title:`A paid invoice`,blurb:`Seller, bill-to, dates, lines and totals. The actions are a slot and hide when printing.`,code:O,children:(0,m.jsx)(p,{testId:`invoice-paid`,children:(0,m.jsx)(D,{})})}),(0,m.jsx)(f,{n:3,title:`A due invoice`,blurb:`The same order before payment, with net-30 terms.`,code:F,children:(0,m.jsx)(p,{testId:`invoice-due`,children:(0,m.jsx)(P,{})})})]})}export{I as component};