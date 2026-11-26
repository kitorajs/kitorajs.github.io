import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-BOjHUtLS.js";import{t as o}from"./building-2-C-5qRIJX.js";import{t as s}from"./rocket-BRf3R2rG.js";import{Bc as c,Cc as l,Ic as u,Mi as d,ti as f}from"./index-B9ukmIN1.js";import{t as p}from"./label-DoQXlIRk.js";import{a as m,i as h,n as g,o as _,t as v}from"./card-B_Tor3B1.js";import{a as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./choice-card-DoZ1fw5F.js";var E=d(`sprout`,[[`path`,{d:`M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3`,key:`139s4v`}],[`path`,{d:`M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4`,key:`1dlkgp`}],[`path`,{d:`M5 21h14`,key:`11awu3`}]]),D=e({ChoiceCardAddOns:()=>j}),O=t(c(),1),k=u(),A=[{value:`backups`,title:`Daily backups`,price:`+$4`,description:`Thirty days of restore points.`},{value:`domains`,title:`Custom domains`,price:`+$2`,description:`Serve from your own hostname.`},{value:`analytics`,title:`Analytics`,price:`+$6`,description:`Traffic and conversion reports.`},{value:`priority`,title:`Priority support`,price:`+$15`,description:`A reply within four business hours.`}];function j(){let[e,t]=(0,O.useState)([`backups`]);return(0,k.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-3`,children:[(0,k.jsx)(C,{type:`checkbox`,"aria-label":`Add-ons`,name:`addons`,columns:2,value:e,onValueChange:t,children:A.map(e=>(0,k.jsxs)(T,{value:e.value,children:[(0,k.jsx)(w,{children:e.title}),(0,k.jsx)(S,{children:e.price}),(0,k.jsx)(x,{children:e.description}),(0,k.jsx)(y,{})]},e.value))}),(0,k.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Chosen: `,(0,k.jsx)(`span`,{className:`font-medium text-foreground`,children:e.length?e.join(`, `):`none`})]})]})}var M=e({ChoiceCardColumns:()=>P}),N=[{value:`xs`,title:`XS`,meta:`1 vCPU`},{value:`s`,title:`S`,meta:`2 vCPU`},{value:`m`,title:`M`,meta:`4 vCPU`},{value:`l`,title:`L`,meta:`8 vCPU`}];function P(){return(0,k.jsxs)(`div`,{className:`grid w-full max-w-3xl gap-6`,children:[(0,k.jsx)(C,{type:`radio`,"aria-label":`Machine size, four columns`,columns:4,orientation:`horizontal`,defaultValue:`m`,children:N.map(e=>(0,k.jsxs)(T,{value:e.value,children:[(0,k.jsx)(w,{children:e.title}),(0,k.jsx)(S,{children:e.meta}),(0,k.jsx)(y,{})]},e.value))}),(0,k.jsx)(C,{type:`radio`,"aria-label":`Machine size, one column`,defaultValue:`s`,className:`max-w-sm`,children:N.slice(0,2).map(e=>(0,k.jsxs)(T,{value:e.value,children:[(0,k.jsx)(w,{children:e.title}),(0,k.jsx)(S,{children:e.meta}),(0,k.jsx)(y,{})]},e.value))})]})}var F=e({ChoiceCardComposeCheckout:()=>I});function I(){let[e,t]=(0,O.useState)(null);return(0,k.jsx)(v,{className:`w-full max-w-lg`,children:(0,k.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),t(new URLSearchParams([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])).toString())},children:[(0,k.jsx)(m,{children:(0,k.jsx)(_,{children:`Upgrade your workspace`})}),(0,k.jsxs)(g,{className:`grid gap-4`,children:[(0,k.jsxs)(`div`,{className:`grid gap-2`,children:[(0,k.jsx)(p,{id:`compose-billing`,children:`Billing`}),(0,k.jsxs)(C,{type:`radio`,"aria-labelledby":`compose-billing`,name:`billing`,columns:2,defaultValue:`yearly`,required:!0,children:[(0,k.jsxs)(T,{value:`monthly`,children:[(0,k.jsx)(w,{children:`Monthly`}),(0,k.jsx)(S,{children:`$15`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`yearly`,children:[(0,k.jsx)(w,{children:`Yearly`}),(0,k.jsx)(S,{children:`$144`}),(0,k.jsx)(x,{children:`Two months free`}),(0,k.jsx)(y,{})]})]})]}),(0,k.jsxs)(`div`,{className:`grid gap-2`,children:[(0,k.jsx)(p,{id:`compose-extras`,children:`Extras`}),(0,k.jsxs)(C,{type:`checkbox`,"aria-labelledby":`compose-extras`,name:`extras`,children:[(0,k.jsxs)(T,{value:`seats`,children:[(0,k.jsx)(w,{children:`Five more seats`}),(0,k.jsx)(S,{children:`+$20`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`storage`,children:[(0,k.jsx)(w,{children:`100 GB storage`}),(0,k.jsx)(S,{children:`+$5`}),(0,k.jsx)(y,{})]})]})]})]}),(0,k.jsxs)(h,{className:`flex-col items-stretch gap-2`,children:[(0,k.jsx)(f,{type:`submit`,children:`Continue`}),e===null?null:(0,k.jsxs)(`p`,{role:`status`,className:`text-xs break-all text-muted-foreground`,children:[`Posted `,e||`nothing`]})]})]})})}var L=e({ChoiceCardDisabledAndReadOnly:()=>R});function R(){return(0,k.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-6 sm:grid-cols-2`,children:[(0,k.jsxs)(C,{type:`radio`,"aria-label":`Region`,defaultValue:`eu`,children:[(0,k.jsxs)(T,{value:`eu`,children:[(0,k.jsx)(w,{children:`Europe`}),(0,k.jsx)(x,{children:`Frankfurt`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`us`,children:[(0,k.jsx)(w,{children:`United States`}),(0,k.jsx)(x,{children:`Virginia`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`ap`,disabled:!0,children:[(0,k.jsx)(w,{children:`Asia Pacific`}),(0,k.jsx)(x,{children:`Coming soon: the arrow keys skip it`}),(0,k.jsx)(y,{})]})]}),(0,k.jsxs)(C,{type:`checkbox`,"aria-label":`Included features`,defaultValue:[`sso`,`audit`],readOnly:!0,children:[(0,k.jsxs)(T,{value:`sso`,children:[(0,k.jsx)(w,{children:`Single sign-on`}),(0,k.jsx)(x,{children:`Read-only: focusable, not editable`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`audit`,children:[(0,k.jsx)(w,{children:`Audit log`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`scim`,children:[(0,k.jsx)(w,{children:`SCIM provisioning`}),(0,k.jsx)(y,{})]})]})]})}var z=e({ChoiceCardInAField:()=>B});function B(){let[e,t]=(0,O.useState)(void 0);return(0,k.jsxs)(a,{invalid:e===void 0,className:`w-full max-w-md`,children:[(0,k.jsx)(i,{children:`Delivery`}),(0,k.jsxs)(C,{type:`radio`,value:e,onValueChange:t,children:[(0,k.jsxs)(T,{value:`standard`,children:[(0,k.jsx)(w,{children:`Standard`}),(0,k.jsx)(x,{children:`3 to 5 business days`}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(T,{value:`express`,children:[(0,k.jsx)(w,{children:`Express`}),(0,k.jsx)(x,{children:`Next business day`}),(0,k.jsx)(y,{})]})]}),(0,k.jsx)(r,{children:`Orders placed before 2 pm ship the same day.`}),(0,k.jsx)(n,{match:!0,children:`Choose a delivery speed.`})]})}var V=e({ChoiceCardPlanPicker:()=>U}),H=[{value:`starter`,title:`Starter`,price:`Free`,description:`One project and community support.`,icon:(0,k.jsx)(E,{})},{value:`pro`,title:`Pro`,price:`$12 / mo`,description:`Unlimited projects and email support.`,icon:(0,k.jsx)(s,{})},{value:`business`,title:`Business`,price:`$40 / mo`,description:`SSO, audit logs and a shared workspace.`,icon:(0,k.jsx)(o,{})}];function U(){let[e,t]=(0,O.useState)(`pro`);return(0,k.jsxs)(`div`,{className:`grid w-full max-w-3xl gap-3`,children:[(0,k.jsx)(C,{type:`radio`,"aria-label":`Plan`,name:`plan`,columns:3,value:e,onValueChange:t,children:H.map(e=>(0,k.jsxs)(T,{value:e.value,children:[(0,k.jsx)(b,{children:e.icon}),(0,k.jsx)(w,{children:e.title}),(0,k.jsx)(S,{children:e.price}),(0,k.jsx)(x,{children:e.description}),(0,k.jsx)(y,{})]},e.value))}),(0,k.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Plan: `,(0,k.jsx)(`span`,{className:`font-medium text-foreground`,children:e})]})]})}var W=`import { useState } from "react"
import { ChoiceCard, ChoiceCardDescription, ChoiceCardGroup, ChoiceCardIndicator, ChoiceCardMeta, ChoiceCardTitle } from "@kitora/ui/choice-card"

const ADD_ONS = [
  { value: "backups", title: "Daily backups", price: "+$4", description: "Thirty days of restore points." },
  { value: "domains", title: "Custom domains", price: "+$2", description: "Serve from your own hostname." },
  { value: "analytics", title: "Analytics", price: "+$6", description: "Traffic and conversion reports." },
  { value: "priority", title: "Priority support", price: "+$15", description: "A reply within four business hours." },
]

export function ChoiceCardAddOns() {
  const [addOns, setAddOns] = useState<string[]>(["backups"])
  return (
    <div className="grid w-full max-w-2xl gap-3">
      <ChoiceCardGroup type="checkbox" aria-label="Add-ons" name="addons" columns={2} value={addOns} onValueChange={setAddOns}>
        {ADD_ONS.map((a) => (
          <ChoiceCard key={a.value} value={a.value}>
            <ChoiceCardTitle>{a.title}</ChoiceCardTitle>
            <ChoiceCardMeta>{a.price}</ChoiceCardMeta>
            <ChoiceCardDescription>{a.description}</ChoiceCardDescription>
            <ChoiceCardIndicator />
          </ChoiceCard>
        ))}
      </ChoiceCardGroup>
      <p className="text-xs text-muted-foreground">
        Chosen: <span className="font-medium text-foreground">{addOns.length ? addOns.join(", ") : "none"}</span>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>l(()=>import(`./add-ons-BFsp6Xpt.js`),[]));var G=`import { ChoiceCard, ChoiceCardGroup, ChoiceCardIndicator, ChoiceCardMeta, ChoiceCardTitle } from "@kitora/ui/choice-card"

const SIZES = [
  { value: "xs", title: "XS", meta: "1 vCPU" },
  { value: "s", title: "S", meta: "2 vCPU" },
  { value: "m", title: "M", meta: "4 vCPU" },
  { value: "l", title: "L", meta: "8 vCPU" },
]

export function ChoiceCardColumns() {
  return (
    <div className="grid w-full max-w-3xl gap-6">
      <ChoiceCardGroup type="radio" aria-label="Machine size, four columns" columns={4} orientation="horizontal" defaultValue="m">
        {SIZES.map((s) => (
          <ChoiceCard key={s.value} value={s.value}>
            <ChoiceCardTitle>{s.title}</ChoiceCardTitle>
            <ChoiceCardMeta>{s.meta}</ChoiceCardMeta>
            <ChoiceCardIndicator />
          </ChoiceCard>
        ))}
      </ChoiceCardGroup>
      <ChoiceCardGroup type="radio" aria-label="Machine size, one column" defaultValue="s" className="max-w-sm">
        {SIZES.slice(0, 2).map((s) => (
          <ChoiceCard key={s.value} value={s.value}>
            <ChoiceCardTitle>{s.title}</ChoiceCardTitle>
            <ChoiceCardMeta>{s.meta}</ChoiceCardMeta>
            <ChoiceCardIndicator />
          </ChoiceCard>
        ))}
      </ChoiceCardGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>l(()=>import(`./columns-AKnr3dTW.js`),[]));var K=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { ChoiceCard, ChoiceCardDescription, ChoiceCardGroup, ChoiceCardIndicator, ChoiceCardMeta, ChoiceCardTitle } from "@kitora/ui/choice-card"
import { Label } from "@kitora/ui/label"

export function ChoiceCardComposeCheckout() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <Card className="w-full max-w-lg">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setPosted(new URLSearchParams([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])).toString())
        }}
      >
        <CardHeader>
          <CardTitle>Upgrade your workspace</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label id="compose-billing">Billing</Label>
            <ChoiceCardGroup type="radio" aria-labelledby="compose-billing" name="billing" columns={2} defaultValue="yearly" required>
              <ChoiceCard value="monthly">
                <ChoiceCardTitle>Monthly</ChoiceCardTitle>
                <ChoiceCardMeta>$15</ChoiceCardMeta>
                <ChoiceCardIndicator />
              </ChoiceCard>
              <ChoiceCard value="yearly">
                <ChoiceCardTitle>Yearly</ChoiceCardTitle>
                <ChoiceCardMeta>$144</ChoiceCardMeta>
                <ChoiceCardDescription>Two months free</ChoiceCardDescription>
                <ChoiceCardIndicator />
              </ChoiceCard>
            </ChoiceCardGroup>
          </div>
          <div className="grid gap-2">
            <Label id="compose-extras">Extras</Label>
            <ChoiceCardGroup type="checkbox" aria-labelledby="compose-extras" name="extras">
              <ChoiceCard value="seats">
                <ChoiceCardTitle>Five more seats</ChoiceCardTitle>
                <ChoiceCardMeta>+$20</ChoiceCardMeta>
                <ChoiceCardIndicator />
              </ChoiceCard>
              <ChoiceCard value="storage">
                <ChoiceCardTitle>100 GB storage</ChoiceCardTitle>
                <ChoiceCardMeta>+$5</ChoiceCardMeta>
                <ChoiceCardIndicator />
              </ChoiceCard>
            </ChoiceCardGroup>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2">
          <Button type="submit">Continue</Button>
          {posted !== null ? (
            <p role="status" className="text-xs break-all text-muted-foreground">
              Posted {posted || "nothing"}
            </p>
          ) : null}
        </CardFooter>
      </form>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>l(()=>import(`./compose-CMQZfGns.js`),[]));var q=`import { ChoiceCard, ChoiceCardDescription, ChoiceCardGroup, ChoiceCardIndicator, ChoiceCardTitle } from "@kitora/ui/choice-card"

export function ChoiceCardDisabledAndReadOnly() {
  return (
    <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
      <ChoiceCardGroup type="radio" aria-label="Region" defaultValue="eu">
        <ChoiceCard value="eu">
          <ChoiceCardTitle>Europe</ChoiceCardTitle>
          <ChoiceCardDescription>Frankfurt</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
        <ChoiceCard value="us">
          <ChoiceCardTitle>United States</ChoiceCardTitle>
          <ChoiceCardDescription>Virginia</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
        <ChoiceCard value="ap" disabled>
          <ChoiceCardTitle>Asia Pacific</ChoiceCardTitle>
          <ChoiceCardDescription>Coming soon: the arrow keys skip it</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
      </ChoiceCardGroup>
      <ChoiceCardGroup type="checkbox" aria-label="Included features" defaultValue={["sso", "audit"]} readOnly>
        <ChoiceCard value="sso">
          <ChoiceCardTitle>Single sign-on</ChoiceCardTitle>
          <ChoiceCardDescription>Read-only: focusable, not editable</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
        <ChoiceCard value="audit">
          <ChoiceCardTitle>Audit log</ChoiceCardTitle>
          <ChoiceCardIndicator />
        </ChoiceCard>
        <ChoiceCard value="scim">
          <ChoiceCardTitle>SCIM provisioning</ChoiceCardTitle>
          <ChoiceCardIndicator />
        </ChoiceCard>
      </ChoiceCardGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>l(()=>import(`./disabled-and-read-only-KcSPcN0A.js`),[]));var J=`import { useState } from "react"
import { ChoiceCard, ChoiceCardDescription, ChoiceCardGroup, ChoiceCardIndicator, ChoiceCardTitle } from "@kitora/ui/choice-card"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"

export function ChoiceCardInAField() {
  const [delivery, setDelivery] = useState<string | undefined>(undefined)
  const invalid = delivery === undefined
  return (
    <Field invalid={invalid} className="w-full max-w-md">
      <FieldLabel>Delivery</FieldLabel>
      <ChoiceCardGroup type="radio" value={delivery} onValueChange={setDelivery}>
        <ChoiceCard value="standard">
          <ChoiceCardTitle>Standard</ChoiceCardTitle>
          <ChoiceCardDescription>3 to 5 business days</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
        <ChoiceCard value="express">
          <ChoiceCardTitle>Express</ChoiceCardTitle>
          <ChoiceCardDescription>Next business day</ChoiceCardDescription>
          <ChoiceCardIndicator />
        </ChoiceCard>
      </ChoiceCardGroup>
      <FieldDescription>Orders placed before 2 pm ship the same day.</FieldDescription>
      <FieldError match>Choose a delivery speed.</FieldError>
    </Field>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>l(()=>import(`./in-a-field-BBxGrwRD.js`),[]));var Y=`import { useState } from "react"
import { Building2, Rocket, Sprout } from "lucide-react"
import { ChoiceCard, ChoiceCardDescription, ChoiceCardGroup, ChoiceCardIcon, ChoiceCardIndicator, ChoiceCardMeta, ChoiceCardTitle } from "@kitora/ui/choice-card"

const PLANS = [
  { value: "starter", title: "Starter", price: "Free", description: "One project and community support.", icon: <Sprout /> },
  { value: "pro", title: "Pro", price: "$12 / mo", description: "Unlimited projects and email support.", icon: <Rocket /> },
  { value: "business", title: "Business", price: "$40 / mo", description: "SSO, audit logs and a shared workspace.", icon: <Building2 /> },
]

export function ChoiceCardPlanPicker() {
  const [plan, setPlan] = useState("pro")
  return (
    <div className="grid w-full max-w-3xl gap-3">
      <ChoiceCardGroup type="radio" aria-label="Plan" name="plan" columns={3} value={plan} onValueChange={setPlan}>
        {PLANS.map((p) => (
          <ChoiceCard key={p.value} value={p.value}>
            <ChoiceCardIcon>{p.icon}</ChoiceCardIcon>
            <ChoiceCardTitle>{p.title}</ChoiceCardTitle>
            <ChoiceCardMeta>{p.price}</ChoiceCardMeta>
            <ChoiceCardDescription>{p.description}</ChoiceCardDescription>
            <ChoiceCardIndicator />
          </ChoiceCard>
        ))}
      </ChoiceCardGroup>
      <p className="text-xs text-muted-foreground">
        Plan: <span className="font-medium text-foreground">{plan}</span>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>l(()=>import(`./plan-picker-CO1WJFQA.js`),[]));var X={"./demos/choice-card/add-ons.tsx":D,"./demos/choice-card/columns.tsx":M,"./demos/choice-card/compose.tsx":F,"./demos/choice-card/disabled-and-read-only.tsx":L,"./demos/choice-card/in-a-field.tsx":z,"./demos/choice-card/plan-picker.tsx":V},Z={"./demos/choice-card/add-ons.tsx":W,"./demos/choice-card/columns.tsx":G,"./demos/choice-card/compose.tsx":K,"./demos/choice-card/disabled-and-read-only.tsx":q,"./demos/choice-card/in-a-field.tsx":J,"./demos/choice-card/plan-picker.tsx":Y};export{X as modules,Z as sources};