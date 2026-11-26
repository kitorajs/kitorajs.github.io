import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,c as ee,i as r,l as i,r as a,s as te,t as o,u as s}from"./otp-field-BMETZ01L.js";import{i as c,r as l,s as u,t as d}from"./field-BOjHUtLS.js";import{t as f}from"./form-BNqp-Qmy.js";import{Bc as ne,Cc as p,Ic as re,ti as m,vo as h}from"./index-B9ukmIN1.js";import{a as g,i as _,n as v,o as y,r as b,t as x}from"./card-B_Tor3B1.js";import{t as S}from"./otp-dwuat5d1.js";var ie=e({OtpFieldBuildYourOwn:()=>D}),C=t(ne(),1),w=re(),T=6,E=`Verification code`;function D({value:e,onValueChange:t,onComplete:n,name:r}){return(0,w.jsx)(i,{...ee({length:T,value:e,onValueChange:t,onComplete:n}),name:r,"aria-label":E,className:`flex items-center gap-1.5`,children:te(T,3).map((e,t)=>(0,w.jsxs)(C.Fragment,{children:[t>0?(0,w.jsx)(h,{"aria-hidden":!0,className:`h-px w-2.5 bg-muted-foreground/50`}):null,(0,w.jsx)(`div`,{className:`flex items-center gap-1.5`,children:e.map(e=>(0,w.jsx)(s,{index:e,"aria-label":`${E}, character ${e+1} of ${T}`,className:`size-10 rounded-md border border-input bg-background text-center font-mono text-lg outline-none focus:border-ring focus:ring-3 focus:ring-ring/40 data-filled:border-foreground/25`},e))})]},e[0]))})}var O=e({OTPFieldComposeVerifyCard:()=>A}),k=6;function A(){let[e,t]=(0,C.useState)(``);return(0,w.jsxs)(x,{className:`w-full max-w-sm`,children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(y,{children:`Check your email`}),(0,w.jsx)(b,{children:`We sent a 6-digit code to a••@example.com.`})]}),(0,w.jsx)(v,{children:(0,w.jsxs)(`fieldset`,{className:`grid gap-2`,children:[(0,w.jsx)(`legend`,{className:`mb-2 text-sm font-medium`,children:`Verification code`}),(0,w.jsx)(S,{label:`Verification code`,length:k,value:e,onValueChange:t})]})}),(0,w.jsxs)(_,{className:`flex flex-wrap gap-2`,children:[(0,w.jsx)(m,{className:`flex-1`,disabled:e.length<k,children:`Verify`}),(0,w.jsx)(m,{variant:`ghost`,children:`Resend code`})]})]})}var j=e({OTPFieldComposeVerify:()=>M});function M(){let[e,t]=(0,C.useState)(null);return(0,w.jsx)(x,{className:`w-full max-w-sm`,children:(0,w.jsxs)(f,{onFormSubmit:e=>t(String(e.code)),children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(y,{children:`Verify your email`}),(0,w.jsx)(b,{children:`We sent a 6-digit code to ada@example.com.`})]}),(0,w.jsx)(v,{children:(0,w.jsxs)(d,{name:`code`,children:[(0,w.jsx)(u,{children:`Code`}),(0,w.jsx)(r,{length:6,required:!0,children:[0,1,2,3,4,5].map(e=>(0,w.jsx)(a,{"aria-label":`Digit ${e+1}`,className:`size-9`},e))}),(0,w.jsx)(l,{children:`Paste it, or type it: the boxes move on by themselves.`}),(0,w.jsx)(c,{match:`valueMissing`,children:`Enter the code we sent you.`})]})}),(0,w.jsxs)(_,{className:`flex-col items-stretch gap-2`,children:[(0,w.jsx)(m,{type:`submit`,children:`Verify`}),e?(0,w.jsxs)(`p`,{className:`text-center text-xs text-muted-foreground`,children:[`Verified with `,e]}):null]})]})})}var N=e({OTPFieldDefault:()=>P});function P(){let[e,t]=(0,C.useState)(`Type or paste the code`);return(0,w.jsxs)(`div`,{className:`grid gap-2`,children:[(0,w.jsxs)(r,{length:6,"aria-label":`Verification code`,onValueChange:()=>t(`Typing…`),onValueComplete:e=>t(`Complete: ${e}`),children:[[0,1,2].map(e=>(0,w.jsx)(a,{"aria-label":`Digit ${e+1}`},e)),(0,w.jsx)(n,{}),[3,4,5].map(e=>(0,w.jsx)(a,{"aria-label":`Digit ${e+1}`},e))]}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:e})]})}var F=e({OTPFieldFormSubmit:()=>I});function I(){let[e,t]=(0,C.useState)(null);return(0,w.jsxs)(`form`,{className:`flex max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,w.jsx)(o,{name:`code`,required:!0,labels:{group:`Sign-in code`}}),(0,w.jsx)(m,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,w.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,w.jsx)(`code`,{children:e??`not submitted`})]})]})}var L=e({OTPFieldKitOtpField:()=>R});function R(){let[e,t]=(0,C.useState)(``);return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(S,{label:`Verification code`,value:e,onValueChange:t}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Paste a number — it'll fill all slots.`})]})})}var z=e({OTPFieldPreset:()=>B});function B(){let[e,t]=(0,C.useState)(`Type or paste the code`);return(0,w.jsxs)(`div`,{className:`grid gap-2`,children:[(0,w.jsx)(o,{labels:{group:`Verification code`},onValueChange:()=>t(`Typing…`),onComplete:e=>t(`Complete: ${e}`)}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:e})]})}var V=e({OTPFieldSizesAndCharset:()=>H});function H(){return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[[`sm`,`md`,`lg`].map(e=>(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`size `,e]}),(0,w.jsx)(o,{size:e,length:4,labels:{group:`PIN, ${e}`}})]},e)),(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`charset alphanumeric, groupSize 4, size sm (type "abcd1234")`}),(0,w.jsx)(o,{length:8,groupSize:4,size:`sm`,charset:`alphanumeric`,labels:{group:`Backup code`}})]})]})}var U=e({OTPFieldValidationTypes:()=>W});function W(){return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Letters and digits, hidden while typed (validationType alphanumeric, mask)`}),(0,w.jsx)(r,{length:5,validationType:`alphanumeric`,mask:!0,"aria-label":`Recovery key`,defaultValue:`a1`,children:[0,1,2,3,4].map(e=>(0,w.jsx)(a,{"aria-label":`Character ${e+1}`},e))})]}),(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Letters only (validationType alpha)`}),(0,w.jsx)(r,{length:4,validationType:`alpha`,"aria-label":`Letters code`,children:[0,1,2,3].map(e=>(0,w.jsx)(a,{"aria-label":`Letter ${e+1}`},e))})]}),(0,w.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Your own rule (validationType none and sanitizeValue: hex, upper-cased)`}),(0,w.jsx)(r,{length:4,validationType:`none`,inputMode:`text`,sanitizeValue:e=>e.replace(/[^0-9a-f]/gi,``).toUpperCase(),"aria-label":`Hex code`,children:[0,1,2,3].map(e=>(0,w.jsx)(a,{"aria-label":`Hex digit ${e+1}`},e))})]})]})}var G=`import { Fragment } from "react"
import { OTPFieldPreview, otpGroups, otpModelOptions } from "@kitora/primitives/react"

/** Boxes in the code. */
const LENGTH = 6
/** The group's name, and the start of every box's name. */
const LABEL = "Verification code"

/**
 * A six-digit one-time-code field built from the primitives' parts only: \`OTPFieldPreview.Root\`, \`Input\` and \`Separator\`, set up
 * with \`otpModelOptions\` (digits, \`autoComplete="one-time-code"\` on the first box) and split into two groups by \`otpGroups\`.
 * Typing moves on, a paste spreads the whole code, Backspace steps back, the arrow keys and Home / End move; \`name\` posts the code.
 */
export function OtpFieldBuildYourOwn({
  value,
  onValueChange,
  onComplete,
  name,
}: {
  value?: string
  onValueChange?: (value: string) => void
  onComplete?: (value: string) => void
  name?: string
}) {
  return (
    <OTPFieldPreview.Root {...otpModelOptions({ length: LENGTH, value, onValueChange, onComplete })} name={name} aria-label={LABEL} className="flex items-center gap-1.5">
      {otpGroups(LENGTH, 3).map((group, g) => (
        <Fragment key={group[0]}>
          {g > 0 ? <OTPFieldPreview.Separator aria-hidden className="h-px w-2.5 bg-muted-foreground/50" /> : null}
          <div className="flex items-center gap-1.5">
            {group.map((index) => (
              <OTPFieldPreview.Input
                key={index}
                index={index}
                aria-label={\`\${LABEL}, character \${index + 1} of \${LENGTH}\`}
                className="size-10 rounded-md border border-input bg-background text-center font-mono text-lg outline-none focus:border-ring focus:ring-3 focus:ring-ring/40 data-filled:border-foreground/25"
              />
            ))}
          </div>
        </Fragment>
      ))}
    </OTPFieldPreview.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>p(()=>import(`./build-your-own-DvUPLKxH.js`),[]));var K=`import { useState } from "react"
import { OtpField } from "@kitora/pickers/ui"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"

const codeLength = 6

export function OTPFieldComposeVerifyCard() {
  const [code, setCode] = useState("")
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Check your email</CardTitle>
        <CardDescription>We sent a 6-digit code to a••@example.com.</CardDescription>
      </CardHeader>
      <CardContent>
        <fieldset className="grid gap-2">
          <legend className="mb-2 text-sm font-medium">Verification code</legend>
          <OtpField label="Verification code" length={codeLength} value={code} onValueChange={setCode} />
        </fieldset>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button className="flex-1" disabled={code.length < codeLength}>
          Verify
        </Button>
        <Button variant="ghost">Resend code</Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>p(()=>import(`./compose-verify-card-BGXueACg.js`),[]));var q=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { OTPFieldInput, OTPFieldRoot } from "@kitora/ui/otp-field"

export function OTPFieldComposeVerify() {
  const [verified, setVerified] = useState<string | null>(null)
  return (
    <Card className="w-full max-w-sm">
      <Form onFormSubmit={(values) => setVerified(String(values.code))}>
        <CardHeader>
          <CardTitle>Verify your email</CardTitle>
          <CardDescription>We sent a 6-digit code to ada@example.com.</CardDescription>
        </CardHeader>
        <CardContent>
          <Field name="code">
            <FieldLabel>Code</FieldLabel>
            <OTPFieldRoot length={6} required>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <OTPFieldInput key={i} aria-label={\`Digit \${i + 1}\`} className="size-9" />
              ))}
            </OTPFieldRoot>
            <FieldDescription>Paste it, or type it: the boxes move on by themselves.</FieldDescription>
            <FieldError match="valueMissing">Enter the code we sent you.</FieldError>
          </Field>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2">
          <Button type="submit">Verify</Button>
          {verified ? <p className="text-center text-xs text-muted-foreground">Verified with {verified}</p> : null}
        </CardFooter>
      </Form>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>p(()=>import(`./compose-BZItiG7U.js`),[]));var J=`import { useState } from "react"
import { OTPFieldInput, OTPFieldRoot, OTPFieldSeparator } from "@kitora/ui/otp-field"

export function OTPFieldDefault() {
  const [status, setStatus] = useState("Type or paste the code")
  return (
    <div className="grid gap-2">
      <OTPFieldRoot length={6} aria-label="Verification code" onValueChange={() => setStatus("Typing…")} onValueComplete={(code) => setStatus(\`Complete: \${code}\`)}>
        {[0, 1, 2].map((i) => (
          <OTPFieldInput key={i} aria-label={\`Digit \${i + 1}\`} />
        ))}
        <OTPFieldSeparator />
        {[3, 4, 5].map((i) => (
          <OTPFieldInput key={i} aria-label={\`Digit \${i + 1}\`} />
        ))}
      </OTPFieldRoot>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {status}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>p(()=>import(`./default-CBplv4Ck.js`),[]));var Y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { OTPField } from "@kitora/ui/otp-field"

/** \`name\` posts the code with a plain \`<form>\`; \`required\` refuses the submit until every box is filled. */
export function OTPFieldFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <OTPField name="code" required labels={{ group: "Sign-in code" }} />
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>p(()=>import(`./form-submit-B-nqJkGn.js`),[]));var X=`import { useState } from "react"
import { OtpField } from "@kitora/pickers/ui"

export function OTPFieldKitOtpField() {
  const [code, setCode] = useState("")
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid gap-3">
        <OtpField label="Verification code" value={code} onValueChange={setCode} />
        <p className="text-xs text-muted-foreground">Paste a number — it'll fill all slots.</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>p(()=>import(`./kit-otp-field-CKN6wiHG.js`),[]));var Z=`import { useState } from "react"
import { OTPField } from "@kitora/ui/otp-field"

/** The preset: six boxes in two groups of three, each box named "Verification code, character N of 6", \`onComplete\` once the last box is filled. */
export function OTPFieldPreset() {
  const [status, setStatus] = useState("Type or paste the code")
  return (
    <div className="grid gap-2">
      <OTPField labels={{ group: "Verification code" }} onValueChange={() => setStatus("Typing…")} onComplete={(code) => setStatus(\`Complete: \${code}\`)} />
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {status}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>p(()=>import(`./preset-DqVbeseA.js`),[]));var Q=`import { OTPField } from "@kitora/ui/otp-field"

/** \`size\` scales the \`otp\` slot's box (sm 0.8×, md as is, lg 1.2×); \`charset="alphanumeric"\` takes letters and digits and upper-cases them; \`groupSize\` sets the separators. */
export function OTPFieldSizesAndCharset() {
  return (
    <div className="grid gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="grid gap-1.5">
          <span className="text-xs text-muted-foreground">size {size}</span>
          <OTPField size={size} length={4} labels={{ group: \`PIN, \${size}\` }} />
        </div>
      ))}
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">charset alphanumeric, groupSize 4, size sm (type "abcd1234")</span>
        <OTPField length={8} groupSize={4} size="sm" charset="alphanumeric" labels={{ group: "Backup code" }} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>p(()=>import(`./sizes-and-charset-tlIjRI_0.js`),[]));var $=`import { OTPFieldInput, OTPFieldRoot } from "@kitora/ui/otp-field"

export function OTPFieldValidationTypes() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">Letters and digits, hidden while typed (validationType alphanumeric, mask)</span>
        <OTPFieldRoot length={5} validationType="alphanumeric" mask aria-label="Recovery key" defaultValue="a1">
          {[0, 1, 2, 3, 4].map((i) => (
            <OTPFieldInput key={i} aria-label={\`Character \${i + 1}\`} />
          ))}
        </OTPFieldRoot>
      </div>
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">Letters only (validationType alpha)</span>
        <OTPFieldRoot length={4} validationType="alpha" aria-label="Letters code">
          {[0, 1, 2, 3].map((i) => (
            <OTPFieldInput key={i} aria-label={\`Letter \${i + 1}\`} />
          ))}
        </OTPFieldRoot>
      </div>
      <div className="grid gap-1.5">
        <span className="text-xs text-muted-foreground">Your own rule (validationType none and sanitizeValue: hex, upper-cased)</span>
        <OTPFieldRoot length={4} validationType="none" inputMode="text" sanitizeValue={(v) => v.replace(/[^0-9a-f]/gi, "").toUpperCase()} aria-label="Hex code">
          {[0, 1, 2, 3].map((i) => (
            <OTPFieldInput key={i} aria-label={\`Hex digit \${i + 1}\`} />
          ))}
        </OTPFieldRoot>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>p(()=>import(`./validation-types-Ccyv2GC0.js`),[]));var ae={"./demos/otp-field/build-your-own.tsx":ie,"./demos/otp-field/compose-verify-card.tsx":O,"./demos/otp-field/compose.tsx":j,"./demos/otp-field/default.tsx":N,"./demos/otp-field/form-submit.tsx":F,"./demos/otp-field/kit-otp-field.tsx":L,"./demos/otp-field/preset.tsx":z,"./demos/otp-field/sizes-and-charset.tsx":V,"./demos/otp-field/validation-types.tsx":U},oe={"./demos/otp-field/build-your-own.tsx":G,"./demos/otp-field/compose-verify-card.tsx":K,"./demos/otp-field/compose.tsx":q,"./demos/otp-field/default.tsx":J,"./demos/otp-field/form-submit.tsx":Y,"./demos/otp-field/kit-otp-field.tsx":X,"./demos/otp-field/preset.tsx":Z,"./demos/otp-field/sizes-and-charset.tsx":Q,"./demos/otp-field/validation-types.tsx":$};export{ae as modules,oe as sources};