import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-Clz4Lth_.js";import{t as r}from"./input-C8M4VLUF.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-q72zUtm9.js";import{t as c}from"./label-DjxTNoON.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./password-input-BcrYg2z2.js";var h=e({PasswordInputCapsLockControlled:()=>v}),g=t(i(),1),_=o();function v(){let[e,t]=(0,g.useState)(!1);return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,_.jsx)(c,{htmlFor:`pw-caps`,children:`Password`}),(0,_.jsxs)(c,{htmlFor:`pw-show`,className:`gap-2 text-xs font-normal text-muted-foreground`,children:[`Show password`,(0,_.jsx)(n,{id:`pw-show`,checked:e,onCheckedChange:t})]})]}),(0,_.jsx)(m,{id:`pw-caps`,placeholder:`Turn Caps Lock on and type`,capsLockHint:!0,revealed:e,onRevealedChange:t})]})})}var y=e({PasswordInputComposeSignUpForm:()=>b});function b(){let e=(0,g.useId)();return(0,_.jsxs)(`form`,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>e.preventDefault(),children:[(0,_.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,_.jsx)(c,{htmlFor:`${e}-email`,children:`Email`}),(0,_.jsx)(r,{id:`${e}-email`,type:`email`,autoComplete:`email`,placeholder:`you@example.com`})]}),(0,_.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,_.jsx)(c,{htmlFor:`${e}-password`,children:`Password`}),(0,_.jsx)(m,{id:`${e}-password`,autoComplete:`new-password`,showStrength:!0})]}),(0,_.jsx)(s,{type:`submit`,className:`w-full`,children:`Create account`})]})}var x=e({PasswordInputPartsAndScorer:()=>w}),S=e=>{if(e.length<10)return{score:e.length<6?0:1};let t=Number(/\d/.test(e))+Number(/[^A-Za-z0-9]/.test(e));return{score:t===2?4:t===1?3:2}},C=[`Muy corta`,`Débil`,`Aceptable`,`Fuerte`,`Excelente`];function w(){return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,_.jsxs)(u,{className:`w-full max-w-sm gap-2`,children:[(0,_.jsx)(c,{htmlFor:`pw-parts`,children:`Contraseña`}),(0,_.jsx)(l,{scorePassword:S,strengthLabels:C}),(0,_.jsx)(p,{id:`pw-parts`,placeholder:`Al menos 10 caracteres`,children:(0,_.jsx)(f,{labels:{show:`Mostrar contraseña`,hide:`Ocultar contraseña`}})}),(0,_.jsx)(d,{children:`Bloq Mayús está activado`})]})})}var T=e({PasswordInputWithReveal:()=>E});function E(){return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,_.jsx)(c,{htmlFor:`pw`,children:`Password`}),(0,_.jsx)(m,{id:`pw`,placeholder:`••••••••`})]})})}var D=e({PasswordInputWithStrengthMeter:()=>O});function O(){return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,_.jsx)(c,{htmlFor:`pw2`,children:`New password`}),(0,_.jsx)(m,{id:`pw2`,placeholder:`••••••••`,showStrength:!0})]})})}var k=`import { useState } from "react"
import { Label } from "@kitora/ui/label"
import { PasswordInput } from "@kitora/ui/password-input"
import { Switch } from "@kitora/ui/switch"

export function PasswordInputCapsLockControlled() {
  const [shown, setShown] = useState(false)
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="pw-caps">Password</Label>
          <Label htmlFor="pw-show" className="gap-2 text-xs font-normal text-muted-foreground">
            Show password
            <Switch id="pw-show" checked={shown} onCheckedChange={setShown} />
          </Label>
        </div>
        <PasswordInput id="pw-caps" placeholder="Turn Caps Lock on and type" capsLockHint revealed={shown} onRevealedChange={setShown} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./caps-lock-controlled-PgIy30P9.js`),[]));var A=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"
import { PasswordInput } from "@kitora/ui/password-input"

export function PasswordInputComposeSignUpForm() {
  const id = useId()
  return (
    <form className="grid w-full max-w-sm gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-1.5">
        <Label htmlFor={\`\${id}-email\`}>Email</Label>
        <Input id={\`\${id}-email\`} type="email" autoComplete="email" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={\`\${id}-password\`}>Password</Label>
        <PasswordInput id={\`\${id}-password\`} autoComplete="new-password" showStrength />
      </div>
      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>a(()=>import(`./compose-BcKZXtti.js`),[]));var j=`import { Label } from "@kitora/ui/label"
import { PasswordInputCapsLockHint, PasswordInputInput, PasswordInputRoot, PasswordInputToggle, PasswordInputStrength, type PasswordScorer } from "@kitora/ui/password-input"

// A policy of your own: length first, then one point each for a digit and a symbol.
const policy: PasswordScorer = (pw) => {
  if (pw.length < 10) return { score: pw.length < 6 ? 0 : 1 }
  const extras = Number(/\\d/.test(pw)) + Number(/[^A-Za-z0-9]/.test(pw))
  return { score: extras === 2 ? 4 : extras === 1 ? 3 : 2 }
}

const WORDS = ["Muy corta", "Débil", "Aceptable", "Fuerte", "Excelente"] as const

export function PasswordInputPartsAndScorer() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <PasswordInputRoot className="w-full max-w-sm gap-2">
        <Label htmlFor="pw-parts">Contraseña</Label>
        <PasswordInputStrength scorePassword={policy} strengthLabels={WORDS} />
        <PasswordInputInput id="pw-parts" placeholder="Al menos 10 caracteres">
          <PasswordInputToggle labels={{ show: "Mostrar contraseña", hide: "Ocultar contraseña" }} />
        </PasswordInputInput>
        <PasswordInputCapsLockHint>Bloq Mayús está activado</PasswordInputCapsLockHint>
      </PasswordInputRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>a(()=>import(`./parts-and-scorer-Pj9RTFSZ.js`),[]));var M=`import { Label } from "@kitora/ui/label"
import { PasswordInput } from "@kitora/ui/password-input"

export function PasswordInputWithReveal() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="pw">Password</Label>
        <PasswordInput id="pw" placeholder="••••••••" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>a(()=>import(`./with-reveal-CCeBkRLT.js`),[]));var N=`import { Label } from "@kitora/ui/label"
import { PasswordInput } from "@kitora/ui/password-input"

export function PasswordInputWithStrengthMeter() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="pw2">New password</Label>
        <PasswordInput id="pw2" placeholder="••••••••" showStrength />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>a(()=>import(`./with-strength-meter-B1FMrDkD.js`),[]));var P={"./demos/password-input/caps-lock-controlled.tsx":h,"./demos/password-input/compose.tsx":y,"./demos/password-input/parts-and-scorer.tsx":x,"./demos/password-input/with-reveal.tsx":T,"./demos/password-input/with-strength-meter.tsx":D},F={"./demos/password-input/caps-lock-controlled.tsx":k,"./demos/password-input/compose.tsx":A,"./demos/password-input/parts-and-scorer.tsx":j,"./demos/password-input/with-reveal.tsx":M,"./demos/password-input/with-strength-meter.tsx":N};export{P as modules,F as sources};