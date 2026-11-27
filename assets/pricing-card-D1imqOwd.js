import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{n as a,t as o}from"./toggle-group-DGKH1xFk.js";import{o as s}from"./money-ByZXOwR7.js";import{n as c,r as l}from"./pricing-kTUHp600.js";var u=e({PricingCardComposeBillingToggle:()=>m}),d=t(r(),1),f=i(),p=[{id:`team`,name:`Team`,description:`For growing product teams.`,prices:{month:s(2e3,`USD`),year:s(19200,`USD`)},features:[`Unlimited projects`,`10 team seats`,`Priority support`],cta:`Start free trial`,highlighted:!0,badge:`Popular`}];function m(){let[e,t]=(0,d.useState)(`month`);return(0,f.jsxs)(`div`,{className:`grid w-full max-w-sm justify-items-center gap-4`,children:[(0,f.jsxs)(o,{value:[e],onValueChange:e=>{(e[0]===`month`||e[0]===`year`)&&t(e[0])},variant:`outline`,"aria-label":`Billing cycle`,children:[(0,f.jsx)(a,{value:`month`,children:`Monthly`}),(0,f.jsx)(a,{value:`year`,children:`Yearly (−20%)`})]}),(0,f.jsx)(c.Root,{plans:p,interval:e,onIntervalChange:t,className:`w-full`,children:(0,f.jsx)(c.Plans,{className:`md:grid-cols-1`})})]})}var h=e({PricingCardThreeTiers:()=>y}),g=e=>s(e*100,`USD`),_=[{id:`hobby`,name:`Hobby`,description:`For tinkering.`,prices:{month:g(0),year:g(0)},cta:`Start free`,features:[`1 workspace`,`5 collaborators`,`Community support`]},{id:`pro`,name:`Pro`,description:`For teams shipping fast.`,prices:{month:g(24),year:g(240)},highlighted:!0,badge:`Most popular`,cta:`Start 14-day trial`,features:[`10 workspaces`,`Unlimited collaborators`,`Priority support`,`Full API access`,`Custom domain`]},{id:`enterprise`,name:`Enterprise`,description:`For larger orgs.`,prices:{month:null,year:null},cta:`Contact sales`,features:[`Unlimited workspaces`,`SSO + SCIM`,`24/7 support`,`Dedicated CSM`,`On-prem option`]}],v=[{id:`api`,label:`API access`,values:{hobby:!1,pro:`Full`,enterprise:`Full`}},{id:`domain`,label:`Custom domain`,values:{hobby:!1,pro:!0,enterprise:!0}},{id:`sso`,label:`SSO + SCIM`,values:{hobby:!1,pro:!1,enterprise:!0}},{id:`onprem`,label:`On-prem`,hint:`optional`,values:{hobby:!1,pro:!1,enterprise:!0}}];function y(){return(0,f.jsx)(l,{plans:_,comparison:v,defaultInterval:`month`,className:`w-full`})}var b=`import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"
import { money, type BillingInterval, type Plan } from "@kitora/commerce/core"
import { Pricing } from "@kitora/commerce/ui"

const TEAM: readonly Plan[] = [
  {
    id: "team",
    name: "Team",
    description: "For growing product teams.",
    prices: { month: money(2000, "USD"), year: money(19200, "USD") },
    features: ["Unlimited projects", "10 team seats", "Priority support"],
    cta: "Start free trial",
    highlighted: true,
    badge: "Popular",
  },
]

export function PricingCardComposeBillingToggle() {
  const [interval, setInterval] = useState<BillingInterval>("month")
  return (
    <div className="grid w-full max-w-sm justify-items-center gap-4">
      <ToggleGroup
        value={[interval]}
        onValueChange={(v: string[]) => {
          if (v[0] === "month" || v[0] === "year") setInterval(v[0])
        }}
        variant="outline"
        aria-label="Billing cycle"
      >
        <ToggleGroupItem value="month">Monthly</ToggleGroupItem>
        <ToggleGroupItem value="year">Yearly (−20%)</ToggleGroupItem>
      </ToggleGroup>
      <Pricing.Root plans={TEAM} interval={interval} onIntervalChange={setInterval} className="w-full">
        <Pricing.Plans className="md:grid-cols-1" />
      </Pricing.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>n(()=>import(`./compose-BIjonnxa2.js`),[]));var x=`import { money, type ComparisonRow, type Plan } from "@kitora/commerce/core"
import { PricingTable } from "@kitora/commerce/ui"

const usd = (dollars: number) => money(dollars * 100, "USD")

const PLANS: readonly Plan[] = [
  { id: "hobby", name: "Hobby", description: "For tinkering.", prices: { month: usd(0), year: usd(0) }, cta: "Start free", features: ["1 workspace", "5 collaborators", "Community support"] },
  { id: "pro", name: "Pro", description: "For teams shipping fast.", prices: { month: usd(24), year: usd(240) }, highlighted: true, badge: "Most popular", cta: "Start 14-day trial", features: ["10 workspaces", "Unlimited collaborators", "Priority support", "Full API access", "Custom domain"] },
  { id: "enterprise", name: "Enterprise", description: "For larger orgs.", prices: { month: null, year: null }, cta: "Contact sales", features: ["Unlimited workspaces", "SSO + SCIM", "24/7 support", "Dedicated CSM", "On-prem option"] },
]

// What each plan leaves out shows in the comparison matrix under the cards.
const COMPARISON: readonly ComparisonRow[] = [
  { id: "api", label: "API access", values: { hobby: false, pro: "Full", enterprise: "Full" } },
  { id: "domain", label: "Custom domain", values: { hobby: false, pro: true, enterprise: true } },
  { id: "sso", label: "SSO + SCIM", values: { hobby: false, pro: false, enterprise: true } },
  { id: "onprem", label: "On-prem", hint: "optional", values: { hobby: false, pro: false, enterprise: true } },
]

export function PricingCardThreeTiers() {
  return <PricingTable plans={PLANS} comparison={COMPARISON} defaultInterval="month" className="w-full" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>n(()=>import(`./three-tiers-DkAkk6on.js`),[]));var S={"./demos/pricing-card/compose.tsx":u,"./demos/pricing-card/three-tiers.tsx":h},C={"./demos/pricing-card/compose.tsx":b,"./demos/pricing-card/three-tiers.tsx":x};export{S as modules,C as sources};