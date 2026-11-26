import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./use-mask-CckkbS_C.js";import{i,r as a,s as o,t as s}from"./field-BOjHUtLS.js";import{t as c}from"./input-DQo0XDsx.js";import{Bc as l,Bo as u,Cc as d,Ic as f,ti as p,zo as m}from"./index-B9ukmIN1.js";import{t as h}from"./label-DoQXlIRk.js";var g=t(l(),1),_=f();function v({mask:e,tokens:t,transform:i,value:a,defaultValue:o,onValueChange:s,showMask:l=`never`,placeholderChar:d=`_`,submit:f=`raw`,incompleteMessage:p=`Enter the complete value.`,name:h,form:v,disabled:y,placeholder:b,dir:x,type:S=`text`,size:C,ref:w,"aria-invalid":T,...E}){let D=r({mask:e,tokens:t,transform:i,value:a,defaultValue:o,onValueChange:s,showMask:l,placeholderChar:d}),{ref:O,...k}=D.inputProps,A=g.useRef(null),j=m(w,O,A),[M,N]=g.useState(!1),P=D.raw.length>0&&!D.complete;g.useEffect(()=>{A.current?.setCustomValidity(P?p:``)},[P,p]);let F=b??n(``,e,{tokens:t,showPlaceholder:!0,placeholderChar:d}).display,I=k.inputMode===`numeric`,L=T??(M&&P?!0:void 0),R=f===`raw`&&h!==void 0;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{...u(k,E,{onBlur:()=>N(!0)}),ref:j,type:S,size:C,name:R?void 0:h,form:v,disabled:y,placeholder:F||void 0,dir:x??(I?`ltr`:void 0),...L===void 0?{}:{"aria-invalid":L},"data-complete":D.complete?``:void 0}),R?(0,_.jsx)(`input`,{type:`hidden`,name:h,value:D.raw,form:v,disabled:y}):null]})}var y=e({MaskInputCard:()=>x}),b=e=>/^3[47]/.test(e)?`9999 999999 99999`:`9999 9999 9999 9999`;function x(){let[e,t]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3 sm:grid-cols-[1fr_6rem]`,children:[(0,_.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,_.jsx)(h,{htmlFor:`mask-card-number`,children:`Card number`}),(0,_.jsx)(v,{id:`mask-card-number`,autoComplete:`cc-number`,mask:b,value:e,onValueChange:e=>t(e),placeholder:`1234 1234 1234 1234`})]}),(0,_.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,_.jsx)(h,{htmlFor:`mask-card-expiry`,children:`Expiry`}),(0,_.jsx)(v,{id:`mask-card-expiry`,autoComplete:`cc-exp`,mask:`99/99`,showMask:`focus`,placeholder:`MM/YY`})]})]})}var S=e({MaskInputComposeContactForm:()=>C});function C(){let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(`form`,{className:`grid w-full max-w-sm gap-4 rounded-md border border-border bg-card p-4`,onSubmit:e=>{e.preventDefault(),t(new URLSearchParams([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])).toString())},children:[(0,_.jsxs)(s,{children:[(0,_.jsx)(o,{children:`Name`}),(0,_.jsx)(c,{name:`name`,autoComplete:`name`,required:!0})]}),(0,_.jsxs)(s,{validationMode:`onBlur`,children:[(0,_.jsx)(o,{children:`Phone`}),(0,_.jsx)(v,{name:`phone`,type:`tel`,autoComplete:`tel-national`,mask:`(999) 999-9999`,required:!0,incompleteMessage:`Enter all ten digits.`}),(0,_.jsx)(a,{children:`Ten digits, area code first.`}),(0,_.jsx)(i,{match:`customError`,children:`Enter all ten digits.`}),(0,_.jsx)(i,{match:`valueMissing`,children:`Enter a phone number.`})]}),(0,_.jsx)(p,{type:`submit`,children:`Send`}),e?(0,_.jsxs)(`p`,{className:`text-xs break-all text-muted-foreground`,role:`status`,children:[`Posted `,e]}):null]})}var w=e({MaskInputCustomToken:()=>E}),T={h:/[0-9A-F]/};function E(){let[e,t]=(0,g.useState)(`2563EB`),n=e.length===6;return(0,_.jsxs)(`div`,{className:`grid w-full max-w-xs gap-1.5`,children:[(0,_.jsx)(h,{htmlFor:`mask-hex`,children:`Brand colour`}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`span`,{"aria-hidden":!0,className:`size-8 shrink-0 rounded-md border border-border`,style:{background:n?`#${e}`:`transparent`}}),(0,_.jsx)(v,{id:`mask-hex`,mask:`\\#hhhhhh`,tokens:T,transform:e=>e.toUpperCase(),value:e,onValueChange:e=>t(e),spellCheck:!1})]}),(0,_.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Six hex digits; lower case is upper-cased as you type.`})]})}var D=e({MaskInputIban:()=>O});function O(){return(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,_.jsx)(h,{htmlFor:`mask-iban`,children:`IBAN`}),(0,_.jsx)(v,{id:`mask-iban`,mask:`AA99 **** **** **** **** **** **`,transform:e=>e.toUpperCase(),placeholder:`DE89 3704 0044 0532 0130 00`,autoComplete:`off`,spellCheck:!1}),(0,_.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Country code, check digits, then up to 30 letters or digits.`})]})}var k=e({MaskInputPhone:()=>A});function A(){let[e,t]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{className:`grid w-full max-w-xs gap-1.5`,children:[(0,_.jsx)(h,{htmlFor:`mask-phone`,children:`Phone`}),(0,_.jsx)(v,{id:`mask-phone`,type:`tel`,autoComplete:`tel-national`,mask:`(999) 999-9999? x9999`,value:e,onValueChange:e=>t(e)}),(0,_.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Value: `,(0,_.jsx)(`span`,{className:`font-mono tabular-nums`,children:e||`—`})]})]})}var j=`import { useState } from "react"
import { Label } from "@kitora/ui/label"
import { MaskInput } from "@kitora/ui/mask-input"

/** 4-6-5 once the number reads as Amex (34 or 37), 4-4-4-4 otherwise. */
const cardMask = (raw: string) => (/^3[47]/.test(raw) ? "9999 999999 99999" : "9999 9999 9999 9999")

export function MaskInputCard() {
  const [number, setNumber] = useState("")
  return (
    <div className="grid w-full max-w-sm gap-3 sm:grid-cols-[1fr_6rem]">
      <div className="grid gap-1.5">
        <Label htmlFor="mask-card-number">Card number</Label>
        <MaskInput id="mask-card-number" autoComplete="cc-number" mask={cardMask} value={number} onValueChange={(next) => setNumber(next)} placeholder="1234 1234 1234 1234" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="mask-card-expiry">Expiry</Label>
        <MaskInput id="mask-card-expiry" autoComplete="cc-exp" mask="99/99" showMask="focus" placeholder="MM/YY" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>d(()=>import(`./card-40YC8--4.js`),[]));var M=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Input } from "@kitora/ui/input"
import { MaskInput } from "@kitora/ui/mask-input"

export function MaskInputComposeContactForm() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="grid w-full max-w-sm gap-4 rounded-md border border-border bg-card p-4"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(new URLSearchParams([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])).toString())
      }}
    >
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input name="name" autoComplete="name" required />
      </Field>
      <Field validationMode="onBlur">
        <FieldLabel>Phone</FieldLabel>
        <MaskInput name="phone" type="tel" autoComplete="tel-national" mask="(999) 999-9999" required incompleteMessage="Enter all ten digits." />
        <FieldDescription>Ten digits, area code first.</FieldDescription>
        <FieldError match="customError">Enter all ten digits.</FieldError>
        <FieldError match="valueMissing">Enter a phone number.</FieldError>
      </Field>
      <Button type="submit">Send</Button>
      {posted ? (
        <p className="text-xs break-all text-muted-foreground" role="status">
          Posted {posted}
        </p>
      ) : null}
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>d(()=>import(`./compose-D0yYM7Ae.js`),[]));var N=`import { useState } from "react"
import { Label } from "@kitora/ui/label"
import { MaskInput } from "@kitora/ui/mask-input"

const HEX = { h: /[0-9A-F]/ }

export function MaskInputCustomToken() {
  const [color, setColor] = useState("2563EB")
  const complete = color.length === 6
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="mask-hex">Brand colour</Label>
      <div className="flex items-center gap-2">
        <span aria-hidden className="size-8 shrink-0 rounded-md border border-border" style={{ background: complete ? \`#\${color}\` : "transparent" }} />
        <MaskInput id="mask-hex" mask="\\#hhhhhh" tokens={HEX} transform={(char) => char.toUpperCase()} value={color} onValueChange={(next) => setColor(next)} spellCheck={false} />
      </div>
      <p className="text-xs text-muted-foreground">Six hex digits; lower case is upper-cased as you type.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>d(()=>import(`./custom-token-Cw9SGsPv.js`),[]));var P=`import { Label } from "@kitora/ui/label"
import { MaskInput } from "@kitora/ui/mask-input"

export function MaskInputIban() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="mask-iban">IBAN</Label>
      <MaskInput id="mask-iban" mask="AA99 **** **** **** **** **** **" transform={(char) => char.toUpperCase()} placeholder="DE89 3704 0044 0532 0130 00" autoComplete="off" spellCheck={false} />
      <p className="text-xs text-muted-foreground">Country code, check digits, then up to 30 letters or digits.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./iban-2YloqwVI.js`),[]));var F=`import { useState } from "react"
import { Label } from "@kitora/ui/label"
import { MaskInput } from "@kitora/ui/mask-input"

export function MaskInputPhone() {
  const [raw, setRaw] = useState("")
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="mask-phone">Phone</Label>
      <MaskInput id="mask-phone" type="tel" autoComplete="tel-national" mask="(999) 999-9999? x9999" value={raw} onValueChange={(next) => setRaw(next)} />
      <p className="text-xs text-muted-foreground">
        Value: <span className="font-mono tabular-nums">{raw || "—"}</span>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./phone-gBO4GHTi.js`),[]));var I={"./demos/mask-input/card.tsx":y,"./demos/mask-input/compose.tsx":S,"./demos/mask-input/custom-token.tsx":w,"./demos/mask-input/iban.tsx":D,"./demos/mask-input/phone.tsx":k},L={"./demos/mask-input/card.tsx":j,"./demos/mask-input/compose.tsx":M,"./demos/mask-input/custom-token.tsx":N,"./demos/mask-input/iban.tsx":P,"./demos/mask-input/phone.tsx":F};export{I as modules,L as sources};