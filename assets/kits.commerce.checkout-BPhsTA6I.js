import{s as e}from"./kit-docs-Cf27Kpa-.js";import{a as t}from"./checkout-CHEFGhwa.js";import{Ec as n,zc as r}from"./index-BZuUy872.js";import{o as i}from"./money-ByZXOwR7.js";import{o as a}from"./adapters-CVe_2MEL.js";import{n as o}from"./fake-Dm1Dt5OA.js";import"./kit-gallery-BBavj2rC.js";import{t as s}from"./example-B67lLz1F.js";import{t as c}from"./-kits.commerce.shared-CXqE4w_z.js";var l=r(),u=o(),d=a(8.25,{label:`Sales tax`}),f={currency:`USD`,coupon:{code:`FREESHIP`,kind:`free-shipping`,value:0,label:`Free shipping`},lines:[{id:`kbd`,productId:`kbd`,name:`Low-profile keyboard`,variant:`Brown switches`,unitPrice:i(12900,`USD`),quantity:1,maxQuantity:8,image:`⌨️`},{id:`cable`,productId:`cable`,name:`Braided USB-C cable`,variant:`2 m`,unitPrice:i(1500,`USD`),quantity:3,maxQuantity:99,image:`🔌`}]};function p(){return(0,l.jsx)(t,{cart:f,adapters:u,tax:d})}var m=`import { type CartState, CheckoutFlow, createFakeCommerce, flatTaxPolicy, money } from "@kitora/commerce"

const adapters = createFakeCommerce()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const CART: CartState = {
  currency: "USD",
  coupon: { code: "FREESHIP", kind: "free-shipping", value: 0, label: "Free shipping" },
  lines: [
    { id: "kbd", productId: "kbd", name: "Low-profile keyboard", variant: "Brown switches", unitPrice: money(12900, "USD"), quantity: 1, maxQuantity: 8, image: "⌨️" },
    { id: "cable", productId: "cable", name: "Braided USB-C cable", variant: "2 m", unitPrice: money(1500, "USD"), quantity: 3, maxQuantity: 99, image: "🔌" },
  ],
}

/** The checkout preset on fake adapters. Shipping quotes come from the address; 4000 0000 0000 0002 declines. */
export function CheckoutFlowDemo() {
  return <CheckoutFlow cart={CART} adapters={adapters} tax={TAX} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./checkout-flow-5fM2s_mM.js`),[]));var h=o(),g={currency:`USD`,coupon:null,lines:[{id:`ebook`,productId:`ebook`,name:`Field guide to focus`,variant:`PDF + EPUB`,unitPrice:i(1200,`USD`),quantity:1,image:`📘`,shippable:!1}]},_=a(20,{label:`VAT`,inclusive:!0});function v(){return(0,l.jsx)(t,{cart:g,adapters:h,tax:_,defaultAddress:{name:`Grace Hopper`,email:`grace@example.com`,line1:`1 Harbour St`,city:`London`,region:`London`,postalCode:`EC1A 1BB`,country:`GB`}})}var y=`import { type CartState, CheckoutFlow, createFakeCommerce, flatTaxPolicy, money } from "@kitora/commerce"

const adapters = createFakeCommerce()
const CART: CartState = { currency: "USD", coupon: null, lines: [{ id: "ebook", productId: "ebook", name: "Field guide to focus", variant: "PDF + EPUB", unitPrice: money(1200, "USD"), quantity: 1, image: "📘", shippable: false }] }
const VAT = flatTaxPolicy(20, { label: "VAT", inclusive: true })

/** A digital-only cart: nothing ships, so the step machine drops the shipping step; prices include 20% VAT. */
export function DigitalCheckout() {
  return <CheckoutFlow cart={CART} adapters={adapters} tax={VAT} defaultAddress={{ name: "Grace Hopper", email: "grace@example.com", line1: "1 Harbour St", city: "London", region: "London", postalCode: "EC1A 1BB", country: "GB" }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./checkout-digital-bsssftpC.js`),[]));function b(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(e,{title:`Checkout flow`,children:`Steps unlock in order, so the stepper can never skip validation. Shipping quotes follow the address.`}),(0,l.jsx)(s,{n:1,title:`The checkout preset`,blurb:`Address → shipping → payment → review → confirmation, with a FREESHIP coupon already applied. 4000 0000 0000 0002 declines.`,code:m,children:(0,l.jsx)(c,{testId:`checkout-flow`,children:(0,l.jsx)(p,{})})}),(0,l.jsx)(s,{n:2,title:`Digital goods with VAT included`,blurb:`Nothing ships, so the shipping step is gone; the tax policy is VAT-inclusive, so tax shows but is not added.`,code:y,children:(0,l.jsx)(c,{testId:`checkout-digital`,children:(0,l.jsx)(v,{})})})]})}export{b as component};