import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{o as r,r as i}from"./money-LQWubu5H.js";import{o as a,s as o}from"./adapters-Ed7GQHpH.js";import{i as s}from"./fake-CqA2cLLP.js";import{t as c}from"./use-cart-DUREiAYj.js";import"./kit-gallery-Atvibnty.js";import{t as l}from"./example-B8EaWveR.js";import{t as u}from"./-kits.commerce.shared-B8GC_PZn.js";var d=n(),f=s(),p=a(8.25,{label:`Sales tax`}),m={currency:`USD`,coupon:null,lines:[{id:`mouse`,productId:`mouse`,name:`Wireless mouse`,variant:`Graphite`,unitPrice:r(5900,`USD`),quantity:1,maxQuantity:20},{id:`cable`,productId:`cable`,name:`Braided USB-C cable`,variant:`2 m`,unitPrice:r(1500,`USD`),quantity:2,maxQuantity:99}]},h=i(`en-US`);function g(){let e=c({defaultValue:m,coupons:f,tax:p}),t=h.format;return(0,d.jsxs)(`div`,{className:`max-w-md font-mono text-[12px]`,children:[e.cart.lines.map(n=>(0,d.jsxs)(`div`,{className:`flex items-center gap-2 py-0.5`,children:[(0,d.jsx)(`button`,{type:`button`,className:`w-5 rounded border`,"aria-label":`One less ${n.name}`,onClick:()=>e.setQuantity(n.id,n.quantity-1),children:`−`}),(0,d.jsx)(`span`,{className:`w-4 text-center tabular-nums`,children:n.quantity}),(0,d.jsx)(`button`,{type:`button`,className:`w-5 rounded border`,"aria-label":`One more ${n.name}`,onClick:()=>e.setQuantity(n.id,n.quantity+1),children:`+`}),(0,d.jsx)(`span`,{className:`flex-1 truncate`,children:n.name}),(0,d.jsx)(`span`,{className:`tabular-nums`,children:t(o(n))})]},n.id)),(0,d.jsxs)(`div`,{className:`mt-2 border-t pt-2 tabular-nums`,children:[(0,d.jsxs)(`div`,{children:[`subtotal `,t(e.totals.subtotal)]}),(0,d.jsxs)(`div`,{children:[`discount −`,t(e.totals.discount)]}),(0,d.jsxs)(`div`,{children:[e.totals.tax.label,` `,t(e.totals.tax.amount)]}),(0,d.jsxs)(`div`,{className:`font-bold`,children:[`total `,t(e.totals.total)]})]}),(0,d.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,d.jsx)(`button`,{type:`button`,className:`rounded border px-2 py-0.5`,disabled:e.couponPending,onClick:()=>void e.applyCoupon(`SAVE10`),children:`apply SAVE10`}),e.cart.coupon?(0,d.jsxs)(`button`,{type:`button`,className:`rounded border px-2 py-0.5`,onClick:e.removeCoupon,children:[`remove `,e.cart.coupon.code]}):null,e.couponPending?(0,d.jsx)(`span`,{children:`checking…`}):null]})]})}var _=`import { type CartState, fakeCoupons, flatTaxPolicy, intlMoneyFormatter, lineTotal, money, useCart } from "@kitora/commerce"

const coupons = fakeCoupons()
const TAX = flatTaxPolicy(8.25, { label: "Sales tax" })
const START: CartState = {
  currency: "USD",
  coupon: null,
  lines: [
    { id: "mouse", productId: "mouse", name: "Wireless mouse", variant: "Graphite", unitPrice: money(5900, "USD"), quantity: 1, maxQuantity: 20 },
    { id: "cable", productId: "cable", name: "Braided USB-C cable", variant: "2 m", unitPrice: money(1500, "USD"), quantity: 2, maxQuantity: 99 },
  ],
}
const usd = intlMoneyFormatter("en-US")

/** Only the headless hook: \`useCart\` owns the state, totals and coupon flow; every element here is plain markup. */
export function HeadlessCart() {
  const cart = useCart({ defaultValue: START, coupons, tax: TAX })
  const fmt = usd.format
  return (
    <div className="max-w-md font-mono text-[12px]">
      {cart.cart.lines.map((l) => (
        <div key={l.id} className="flex items-center gap-2 py-0.5">
          <button type="button" className="w-5 rounded border" aria-label={\`One less \${l.name}\`} onClick={() => cart.setQuantity(l.id, l.quantity - 1)}>−</button>
          <span className="w-4 text-center tabular-nums">{l.quantity}</span>
          <button type="button" className="w-5 rounded border" aria-label={\`One more \${l.name}\`} onClick={() => cart.setQuantity(l.id, l.quantity + 1)}>+</button>
          <span className="flex-1 truncate">{l.name}</span>
          <span className="tabular-nums">{fmt(lineTotal(l))}</span>
        </div>
      ))}
      <div className="mt-2 border-t pt-2 tabular-nums">
        <div>subtotal {fmt(cart.totals.subtotal)}</div>
        <div>discount −{fmt(cart.totals.discount)}</div>
        <div>{cart.totals.tax.label} {fmt(cart.totals.tax.amount)}</div>
        <div className="font-bold">total {fmt(cart.totals.total)}</div>
      </div>
      <div className="mt-2 flex gap-2">
        <button type="button" className="rounded border px-2 py-0.5" disabled={cart.couponPending} onClick={() => void cart.applyCoupon("SAVE10")}>apply SAVE10</button>
        {cart.cart.coupon ? <button type="button" className="rounded border px-2 py-0.5" onClick={cart.removeCoupon}>remove {cart.cart.coupon.code}</button> : null}
        {cart.couponPending ? <span>checking…</span> : null}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./headless-cart-BlYuu90y.js`),[]));function v(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`Headless`,children:`The hooks without the styled parts, for your own markup.`}),(0,d.jsx)(l,{n:1,title:`A cart in plain markup`,blurb:"`useCart` owns the lines, totals and the coupon flow; nothing from the ui layer is used.",code:_,children:(0,d.jsx)(u,{testId:`headless-cart`,children:(0,d.jsx)(g,{})})})]})}export{v as component};