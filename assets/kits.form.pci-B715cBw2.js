import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Ic as r}from"./index-q72zUtm9.js";import{r as i}from"./field-options-Ck0r8oxm.js";import{W as a}from"./messages-Bsb0m0Hq.js";import{A as o,At as s,E as c,Y as l,c as u,h as d}from"./field-config-DXiPz8Cg.js";import{a as f,n as p}from"./fields-CoJCsIMd.js";import{n as m,t as h}from"./card-DkB008VL.js";import{t as g}from"./example-B8EaWveR.js";import{a as _,n as v,o as y,r as b,s as x}from"./demos-DN9t7sug.js";import{n as S}from"./demo-fixtures-DpfwlbH0.js";var C=e(n(),1),w=r(),T={token:`card-token`,error:`card-error`},E=e=>typeof e==`string`;function D(e){if(typeof e!=`object`||!e)return null;let t=`type`in e?e.type:void 0;if(t===T.token&&`token`in e&&`last4`in e&&`brand`in e){let{token:n,last4:r,brand:i}=e;return E(n)&&E(r)&&E(i)?{type:t,token:n,last4:r,brand:i}:null}return t===T.error&&`message`in e&&E(e.message)?{type:t,message:e.message}:null}function O(e){return typeof e==`object`&&!!e&&`token`in e&&`last4`in e&&`brand`in e&&E(e.token)&&E(e.last4)&&E(e.brand)}var k=28,A=k+4,j=`<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;overflow:hidden;font:13px system-ui,sans-serif;background:transparent;color-scheme:light dark}
body{padding:2px}
input{display:block;box-sizing:border-box;width:100%;height:${k}px;padding:0 8px;border:1px solid #8884;border-radius:8px;background:transparent;color:inherit;font:inherit;letter-spacing:.04em}
input:focus{outline:2px solid #10b98166;outline-offset:0}
</style></head><body>
<input id="n" inputmode="numeric" autocomplete="cc-number" placeholder="4242 4242 4242 4242" aria-label="Card number (secure frame)">
<script>
var port=null;
window.addEventListener("message",function(e){if(e.ports&&e.ports[0])port=e.ports[0];});
function luhn(d){var s=0,alt=false;for(var i=d.length-1;i>=0;i--){var n=+d[i];if(alt){n*=2;if(n>9)n-=9;}s+=n;alt=!alt;}return s%10===0;}
function brand(d){if(/^4/.test(d))return"visa";if(/^(5[1-5]|2[2-7])/.test(d))return"mastercard";if(/^3[47]/.test(d))return"amex";return"card";}
var input=document.getElementById("n");
input.addEventListener("input",function(){var d=input.value.replace(/\\D/g,"").slice(0,19);input.value=d.replace(/(.{4})/g,"$1 ").trim();});
input.addEventListener("blur",function(){if(!port)return;var d=input.value.replace(/\\D/g,"");
if(d.length===0)return;
if(d.length<13||!luhn(d)){port.postMessage({type:"${T.error}",message:"Card number is not valid"});return;}
var t="tok_"+(crypto.randomUUID?crypto.randomUUID().slice(0,12):String(Math.random()).slice(2,14));
port.postMessage({type:"${T.token}",token:t,last4:d.slice(-4),brand:brand(d)});});
<\/script></body></html>`;function M(e,t,n){let r=new MessageChannel;r.port1.addEventListener(`message`,e=>{let r=D(e.data);r&&(r.type===T.token?(n(void 0),t.setValue({token:r.token,last4:r.last4,brand:r.brand})):(n(r.message),t.setValue(void 0)),t.onBlur())}),r.port1.start(),e.contentWindow?.postMessage({type:`init`},`*`,[r.port2])}function N({name:e,label:t=`Card`,required:n,sensitive:r=`pci`}){let a=c(e,{type:`tokenizedCard`,label:t,required:n,sensitive:r}),o=(0,C.useId)(),[s,l]=(0,C.useState)(void 0),u=O(a.value)?a.value:void 0;return(0,w.jsxs)(i,{hidden:!a.active,htmlFor:a.id,label:t,required:a.required,error:s??a.error,submitAs:{name:a.name,value:u?.token??``},children:[(0,w.jsx)(`iframe`,{id:a.id,title:`${t} — secure card entry`,"aria-describedby":o,sandbox:`allow-scripts`,srcDoc:j,height:A,className:`-mx-0.5 -my-0.5 w-[calc(100%+4px)] border-0`,onLoad:e=>M(e.currentTarget,a,l)}),(0,w.jsx)(`p`,{id:o,className:`text-[11px] text-muted-foreground`,children:u?`Tokenized ${u.brand} •••• ${u.last4} (${u.token})`:`Digits stay in the secure frame; the form receives a token on blur.`})]})}var P=800,F=`0002`,{v:I}=l();function L({store:e}){return(0,w.jsx)(_,{title:`serialize({ redact: true })`,meta:`safe for logs`,className:`w-full`,children:(0,w.jsx)(b,{value:d(e,e=>e.serialize({redact:!0}),a)})})}var R=`import { deepEqual, kit, SubmitError } from "@kitora/form/core"
import { CardCvcField, CardExpiryField, NumberField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormSnapshot } from "@kitora/form/react"
import { TokenizedCardField, type CardToken } from "@/kit/form/demo-fixtures/tokenized-card"

// TokenizedCardField is demo-only (too big to inline): a sandboxed card-number iframe standing in
// for Stripe Elements; the form only ever receives { token, last4, brand }, never the digits
type Payment = { amount: number; card?: CardToken; expiry: string; cvc: string; email: string }

const defaultValues: Payment = { amount: 49.99, expiry: "", cvc: "", email: "" }
const { v } = kit<Payment>()

// stub: replace with your API (POST /charges: recomputes the amount, charges the TOKEN)
const api = {
  async charge(p: Payment): Promise<{ id: string }> {
    if (p.card?.last4 === "0002") throw new SubmitError({ fields: { card: "Card declined" } }) // lands on the card field
    return { id: "ch_" + (p.card?.token ?? "none") }
  },
}

export function CheckoutForm() {
  const form = useForm<Payment>({ defaultValues, validateOn: "blur" })
  // what is safe to log: sensitive="pci" fields are redacted (and dropped from drafts), still submitted
  const redacted = useFormSnapshot(form, (s) => s.serialize({ redact: true }), deepEqual)

  return (
    // integrity: the form renders a hidden honeypot and refuses a filled trap or a submit
    // faster than 800 ms (SubmitError code "integrity", shown by Form.Status); api.charge never runs
    <Form form={form} onSubmit={api.charge} integrity={{ minFillMs: 800 }}>
      <NumberField name="amount" label="Amount (the server recomputes it)" />
      <TokenizedCardField name="card" label="Card number" required />
      <CardExpiryField name="expiry" label="Expiry" required sensitive="pci" />
      <CardCvcField name="cvc" label="CVC" required sensitive="pci" />
      <TextField name="email" label="Receipt email" type="email" required rules={[v.email()]} />
      <Form.Submit pendingLabel="Charging…">Pay</Form.Submit>
      <Form.Status /> {/* shows the integrity refusal or the server's message */}
      <pre>{JSON.stringify(redacted, null, 2)}</pre>
    </Form>
  )
}`;function z(){let e=o({defaultValues:{amount:49.99,expiry:``,cvc:``,email:``},validateOn:`blur`});async function n(e){if(await S(600),e.card?.last4===F)throw new s({fields:{card:`Card declined (server)`}});return{id:`ch_${e.card?.token??`none`}`,savedAt:new Date().toISOString()}}return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(t,{title:`PCI checkout — tokenized card, sensitivity + integrity`,children:[`The card number is typed into a sandboxed iframe (a stand-in for Stripe Elements); the form only ever receives `,(0,w.jsx)(`code`,{children:`{ token, last4, brand }`}),`, so the digits are in no store, event, draft or payload. Expiry and CVC are `,(0,w.jsx)(`code`,{children:`sensitive: "pci"`}),` — redacted from the event bus and drafts, still submitted. `,(0,w.jsx)(`code`,{children:`<Form integrity>`}),` runs a honeypot + timing trap on every submit and refuses bots before the handler; the test card `,(0,w.jsx)(`code`,{children:`4000 0000 0000 0002`}),` is declined by the server and the error lands on the card field. Compare the two payloads on the right.`]}),(0,w.jsx)(g,{n:1,title:`Tokenized checkout`,blurb:`Pay with 4242 4242 4242 4242 (charged) or 4000 0000 0000 0002 (declined onto the card field); compare the live and redacted payloads.`,code:R,children:(0,w.jsxs)(x,{children:[(0,w.jsxs)(u,{form:e,onSubmit:n,integrity:{minFillMs:P},children:[(0,w.jsx)(p,{name:`amount`,label:`Amount (server recomputes — client value untrusted)`}),(0,w.jsx)(N,{name:`card`,label:`Card number`,required:!0}),(0,w.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,w.jsx)(m,{name:`expiry`,label:`Expiry`,required:!0,sensitive:`pci`}),(0,w.jsx)(h,{name:`cvc`,label:`CVC`,required:!0,sensitive:`pci`})]}),(0,w.jsx)(f,{name:`email`,label:`Receipt email`,type:`email`,required:!0,rules:[I.email()]}),(0,w.jsx)(y,{label:`Pay`,pendingLabel:`Charging…`,success:e=>(0,w.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`✓ Charged · `,e?.id]})})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsx)(v,{store:e}),(0,w.jsx)(L,{store:e})]})]})})]})}export{z as component};