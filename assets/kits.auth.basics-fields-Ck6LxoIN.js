import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-q72zUtm9.js";import{n as o,t as s}from"./otp-CZBYGVnC.js";import{n as c,r as l}from"./totp-C-21QxHn.js";import{a as u,i as d,t as f,w as p}from"./-kits.auth.shared-B697pN85.js";import{t as m}from"./qr-HXK96Ad6.js";import{a as h,i as g,n as _,r as v,t as y}from"./password-CLqc96WA.js";import{t as b}from"./oauth-BPpSbxB9.js";import"./kit-gallery-Atvibnty.js";import{t as x}from"./example-B8EaWveR.js";var S=e(n(),1),C=i(),w=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`},{id:`microsoft`,label:`Microsoft`},{id:`apple`,label:`Apple`}];function T(){let[e,t]=(0,S.useState)(null),n=e=>{t(e.id),setTimeout(()=>t(null),1200)};return(0,C.jsxs)(`div`,{className:`grid w-full max-w-[320px] gap-4`,children:[(0,C.jsx)(b,{providers:w.slice(0,2),onSelect:n,pending:e}),(0,C.jsx)(b,{providers:w,onSelect:n,pending:e,layout:`grid`}),(0,C.jsx)(b,{providers:[...w,{id:`okta`,label:`Okta SSO`,icon:`sso`}],onSelect:n,pending:e,layout:`icons`})]})}var E=`import { useState } from "react"
import { OAuthButtons, type OAuthProvider } from "@kitora/auth"

const providers: OAuthProvider[] = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
  { id: "microsoft", label: "Microsoft" },
  { id: "apple", label: "Apple" },
]

export function BasicOAuth() {
  const [pending, setPending] = useState<string | null>(null)
  // stub: replace with your redirect (signIn("github") etc.)
  const start = (p: OAuthProvider) => {
    setPending(p.id)
    setTimeout(() => setPending(null), 1200)
  }
  return (
    <div className="grid w-full max-w-[320px] gap-4">
      <OAuthButtons providers={providers.slice(0, 2)} onSelect={start} pending={pending} />
      <OAuthButtons providers={providers} onSelect={start} pending={pending} layout="grid" />
      <OAuthButtons providers={[...providers, { id: "okta", label: "Okta SSO", icon: "sso" }]} onSelect={start} pending={pending} layout="icons" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./oauth-2vOhsZUl.js`),[]));function D(){let[e,t]=(0,S.useState)(``),[n,r]=(0,S.useState)(null);return(0,C.jsxs)(`div`,{className:`grid justify-items-center gap-2`,children:[(0,C.jsx)(s,{value:e,onValueChange:t,onComplete:r}),(0,C.jsx)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:n?`Completed: ${n}`:`Typed: ${e||`—`}`})]})}var O=`import { useState } from "react"
import { OtpField } from "@kitora/auth"

export function BasicOtp() {
  const [code, setCode] = useState("")
  const [done, setDone] = useState<string | null>(null)
  // type, paste a whole code into any box, or let the phone autofill it
  return (
    <div className="grid justify-items-center gap-2">
      <OtpField value={code} onValueChange={setCode} onComplete={setDone} />
      <p className="text-[12px] text-muted-foreground tabular-nums">{done ? \`Completed: \${done}\` : \`Typed: \${code || "—"}\`}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./otp-Dk12QKFo.js`),[]));function k(){return(0,C.jsx)(o.Root,{length:8,charset:`alphanumeric`,label:`Recovery key`,children:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.Group,{children:[0,1,2,3].map(e=>(0,C.jsx)(o.Slot,{index:e,size:`sm`},e))}),(0,C.jsx)(o.Separator,{}),(0,C.jsx)(o.Group,{children:[4,5,6,7].map(e=>(0,C.jsx)(o.Slot,{index:e,size:`sm`},e))}),(0,C.jsx)(a,{variant:`ghost`,size:`xs`,className:`ml-2 text-muted-foreground`,onClick:e.clear,children:`Clear`})]})})}var A=`import { Button } from "@kitora/ui/button"
import { OtpInput } from "@kitora/auth"

// the preset rebuilt from its parts: 8 alphanumeric slots as XXXX–XXXX
export function BasicOtpParts() {
  return (
    <OtpInput.Root length={8} charset="alphanumeric" label="Recovery key">
      {(api) => (
        <>
          <OtpInput.Group>
            {[0, 1, 2, 3].map((i) => (
              <OtpInput.Slot key={i} index={i} size="sm" />
            ))}
          </OtpInput.Group>
          <OtpInput.Separator />
          <OtpInput.Group>
            {[4, 5, 6, 7].map((i) => (
              <OtpInput.Slot key={i} index={i} size="sm" />
            ))}
          </OtpInput.Group>
          <Button variant="ghost" size="xs" className="ml-2 text-muted-foreground" onClick={api.clear}>
            Clear
          </Button>
        </>
      )}
    </OtpInput.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./otp-parts-oLfP9eom.js`),[]));function j(){let[e,t]=(0,S.useState)(``);return(0,C.jsx)(`div`,{className:`w-full max-w-[320px]`,children:(0,C.jsx)(_,{value:e,onValueChange:t,userInputs:[`Ada Lovelace`,`ada@example.com`]})})}var M=`import { useState } from "react"
import { NewPasswordField } from "@kitora/auth"

export function BasicPassword() {
  const [password, setPassword] = useState("")
  // meter + policy checklist; the user's own name and email count against it
  return (
    <div className="w-full max-w-[320px]">
      <NewPasswordField value={password} onValueChange={setPassword} userInputs={["Ada Lovelace", "ada@example.com"]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>r(()=>import(`./password-D8ZxNVvQ.js`),[]));var N={rules:[p.minLength(14),p.symbol()],minScore:3};function P(){let[e,t]=(0,S.useState)(``),n=h(e,{policy:N});return(0,C.jsxs)(`div`,{className:`grid w-full max-w-[320px] gap-2`,children:[(0,C.jsx)(d,{label:`Vault passphrase`,hint:n.acceptable?`Good to go.`:`Long and unusual beats short and complex.`,children:(0,C.jsx)(y,{value:e,onChange:e=>t(e.target.value),autoComplete:`new-password`})}),(0,C.jsx)(v,{rules:n.rules}),(0,C.jsx)(g,{strength:e?n.strength:null})]})}var F=`import { useState } from "react"
import { AuthField, PasswordChecklist, AuthPasswordInput, PasswordStrengthMeter, passwordRules, usePasswordStrength, type PasswordPolicy } from "@kitora/auth"

// your own policy: 14 characters and a symbol, at least "Strong"
const policy: PasswordPolicy = { rules: [passwordRules.minLength(14), passwordRules.symbol()], minScore: 3 }

export function BasicPasswordParts() {
  const [password, setPassword] = useState("")
  const check = usePasswordStrength(password, { policy })
  return (
    <div className="grid w-full max-w-[320px] gap-2">
      <AuthField label="Vault passphrase" hint={check.acceptable ? "Good to go." : "Long and unusual beats short and complex."}>
        <AuthPasswordInput value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
      </AuthField>
      <PasswordChecklist rules={check.rules} />
      <PasswordStrengthMeter strength={password ? check.strength : null} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>r(()=>import(`./password-parts-kFu8MWWh.js`),[]));function I(){let[e,t]=(0,S.useState)(`ada@example.com`),n=`JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP`,r=l({secret:n,issuer:`Acme`,account:e});return(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-5`,children:[(0,C.jsx)(m,{value:r,size:148,label:`Authenticator QR code for ${e}`}),(0,C.jsxs)(`div`,{className:`grid w-[240px] gap-2`,children:[(0,C.jsx)(d,{label:`Account`,children:(0,C.jsx)(u,{value:e,onChange:e=>t(e.target.value)})}),(0,C.jsx)(`p`,{className:`font-mono text-[11.5px] break-all text-muted-foreground`,children:r}),(0,C.jsx)(`p`,{className:`font-mono text-[12px] tracking-wide`,children:c(n)})]})]})}var L=`import { useState } from "react"
import { AuthField, AuthInput, QrCode, groupSecret, totpUri } from "@kitora/auth"

export function BasicQr() {
  const [account, setAccount] = useState("ada@example.com")
  const secret = "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP"
  // the otpauth:// URI any authenticator app scans
  const uri = totpUri({ secret, issuer: "Acme", account })
  return (
    <div className="flex flex-wrap items-center gap-5">
      <QrCode value={uri} size={148} label={\`Authenticator QR code for \${account}\`} />
      <div className="grid w-[240px] gap-2">
        <AuthField label="Account">
          <AuthInput value={account} onChange={(e) => setAccount(e.target.value)} />
        </AuthField>
        <p className="font-mono text-[11.5px] break-all text-muted-foreground">{uri}</p>
        <p className="font-mono text-[12px] tracking-wide">{groupSecret(secret)}</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./qr-CM_2_zXd.js`),[]));function R(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Basics: fields`,children:`The pieces every auth screen is made of. Each one is a styled preset over a headless hook and a pure core function, so you can keep the logic and bring your own markup.`}),(0,C.jsx)(x,{n:1,title:`New password`,blurb:"`NewPasswordField`: reveal toggle, Caps Lock hint, a strength meter and the policy checklist, ticking as you type. Try your name or 'password1'.",code:M,children:(0,C.jsx)(f,{testId:`basic-password`,center:!0,children:(0,C.jsx)(j,{})})}),(0,C.jsx)(x,{n:2,title:`Password, from parts`,blurb:"`usePasswordStrength` with your own `PasswordPolicy`, rendered with `AuthPasswordInput`, `PasswordChecklist` and `PasswordStrengthMeter`. The estimator is a seam too: pass zxcvbn or a breached-password check.",code:F,children:(0,C.jsx)(f,{testId:`basic-password-parts`,center:!0,children:(0,C.jsx)(P,{})})}),(0,C.jsx)(x,{n:3,title:`One-time code`,blurb:"`OtpField`: auto-advance, Backspace walks back, arrows and Home/End, paste or SMS autofill spreads the whole code, `onComplete` fires once.",code:O,children:(0,C.jsx)(f,{testId:`basic-otp`,center:!0,children:(0,C.jsx)(D,{})})}),(0,C.jsx)(x,{n:4,title:`One-time code, from parts`,blurb:"`OtpInput.Root`, `Group`, `Slot` and `Separator`: 8 alphanumeric slots, with the render-prop api for a Clear button.",code:A,children:(0,C.jsx)(f,{testId:`basic-otp-parts`,center:!0,children:(0,C.jsx)(k,{})})}),(0,C.jsx)(x,{n:5,title:`OAuth buttons`,blurb:`Providers are data and icons are a replaceable map. Three layouts: list, grid and icons; the pending provider spins and the rest disable.`,code:E,children:(0,C.jsx)(f,{testId:`basic-oauth`,center:!0,children:(0,C.jsx)(T,{})})}),(0,C.jsx)(x,{n:6,title:`QR code`,blurb:"`QrCode` over the kit's own encoder (byte mode, versions 1–40, auto mask), drawing an `otpauth://` URI from `totpUri`. No dependency.",code:L,children:(0,C.jsx)(f,{testId:`basic-qr`,center:!0,children:(0,C.jsx)(I,{})})})]})}export{R as component};