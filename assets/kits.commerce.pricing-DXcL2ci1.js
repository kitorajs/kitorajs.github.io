import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{o as a}from"./money-LQWubu5H.js";import{i as o,n as s,r as c}from"./pricing-DRpccK85.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";import{t as u}from"./-kits.commerce.shared-BgmCQ-l8.js";var d=e(n(),1),f=i(),p=e=>a(e*100,`USD`),m=[{id:`free`,name:`Free`,description:`For individuals trying things out.`,prices:{month:p(0),year:p(0)},features:[`Up to 3 projects`,`1 GB storage`,`Community support`],cta:`Start free`},{id:`pro`,name:`Pro`,description:`For professionals shipping every week.`,prices:{month:p(15),year:p(144)},features:[`Unlimited projects`,`50 GB storage`,`Custom domains`,`Email support`],perSeat:!0},{id:`team`,name:`Team`,description:`For teams that need control and speed.`,prices:{month:p(32),year:p(300)},features:[`Everything in Pro`,`SSO with Google and Okta`,`Roles and permissions`,`Audit log (90 days)`],highlighted:!0,badge:`Most popular`,perSeat:!0},{id:`enterprise`,name:`Enterprise`,description:`Security reviews, SLAs and a named contact.`,prices:{month:null,year:null},features:[`Everything in Team`,`SAML and SCIM`,`99.99% uptime SLA`,`Dedicated success manager`],cta:`Talk to sales`}],h=[{id:`projects`,group:`Usage`,label:`Projects`,values:{free:3,pro:`Unlimited`,team:`Unlimited`,enterprise:`Unlimited`}},{id:`storage`,group:`Usage`,label:`Storage`,values:{free:`1 GB`,pro:`50 GB`,team:`500 GB`,enterprise:`Custom`}},{id:`builds`,group:`Usage`,label:`Build minutes`,hint:`per month`,values:{free:300,pro:6e3,team:25e3,enterprise:`Custom`}},{id:`domains`,group:`Features`,label:`Custom domains`,values:{free:!1,pro:!0,team:!0,enterprise:!0}},{id:`preview`,group:`Features`,label:`Preview deployments`,values:{free:!0,pro:!0,team:!0,enterprise:!0}},{id:`analytics`,group:`Features`,label:`Analytics`,values:{free:!1,pro:`Basic`,team:`Advanced`,enterprise:`Advanced`}},{id:`sso`,group:`Security`,label:`SSO`,values:{free:!1,pro:!1,team:!0,enterprise:!0}},{id:`saml`,group:`Security`,label:`SAML and SCIM`,values:{free:!1,pro:!1,team:!1,enterprise:!0}},{id:`audit`,group:`Security`,label:`Audit log`,values:{free:!1,pro:!1,team:`90 days`,enterprise:`Unlimited`}},{id:`support`,group:`Support`,label:`Support`,values:{free:`Community`,pro:`Email`,team:`Priority`,enterprise:`Dedicated`}},{id:`sla`,group:`Support`,label:`Uptime SLA`,values:{free:null,pro:null,team:`99.9%`,enterprise:`99.99%`}}];function g(){let[e,t]=(0,d.useState)(null);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,f.jsx)(c,{plans:m,comparison:h,defaultInterval:`year`,onSelect:(e,n)=>t({plan:e,interval:n}),heading:(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-[16px] font-semibold tracking-tight`,children:`Pricing that scales with you`}),(0,f.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Start free. Upgrade when your team grows.`})]})}),(0,f.jsx)(`p`,{role:`status`,className:`text-[12px] text-muted-foreground`,children:e?`Selected ${e.plan.name}, billed ${e.interval===`year`?`yearly`:`monthly`}.`:`Pick a plan to see the selection event.`})]})}var _=`import { useState } from "react"
import { type BillingInterval, type ComparisonRow, type Plan, PricingTable, money } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")

const PLANS: readonly Plan[] = [
  { id: "free", name: "Free", description: "For individuals trying things out.", prices: { month: usd(0), year: usd(0) }, features: ["Up to 3 projects", "1 GB storage", "Community support"], cta: "Start free" },
  { id: "pro", name: "Pro", description: "For professionals shipping every week.", prices: { month: usd(15), year: usd(144) }, features: ["Unlimited projects", "50 GB storage", "Custom domains", "Email support"], perSeat: true },
  { id: "team", name: "Team", description: "For teams that need control and speed.", prices: { month: usd(32), year: usd(300) }, features: ["Everything in Pro", "SSO with Google and Okta", "Roles and permissions", "Audit log (90 days)"], highlighted: true, badge: "Most popular", perSeat: true },
  { id: "enterprise", name: "Enterprise", description: "Security reviews, SLAs and a named contact.", prices: { month: null, year: null }, features: ["Everything in Team", "SAML and SCIM", "99.99% uptime SLA", "Dedicated success manager"], cta: "Talk to sales" },
]

const COMPARISON: readonly ComparisonRow[] = [
  { id: "projects", group: "Usage", label: "Projects", values: { free: 3, pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" } },
  { id: "storage", group: "Usage", label: "Storage", values: { free: "1 GB", pro: "50 GB", team: "500 GB", enterprise: "Custom" } },
  { id: "builds", group: "Usage", label: "Build minutes", hint: "per month", values: { free: 300, pro: 6000, team: 25_000, enterprise: "Custom" } },
  { id: "domains", group: "Features", label: "Custom domains", values: { free: false, pro: true, team: true, enterprise: true } },
  { id: "preview", group: "Features", label: "Preview deployments", values: { free: true, pro: true, team: true, enterprise: true } },
  { id: "analytics", group: "Features", label: "Analytics", values: { free: false, pro: "Basic", team: "Advanced", enterprise: "Advanced" } },
  { id: "sso", group: "Security", label: "SSO", values: { free: false, pro: false, team: true, enterprise: true } },
  { id: "saml", group: "Security", label: "SAML and SCIM", values: { free: false, pro: false, team: false, enterprise: true } },
  { id: "audit", group: "Security", label: "Audit log", values: { free: false, pro: false, team: "90 days", enterprise: "Unlimited" } },
  { id: "support", group: "Support", label: "Support", values: { free: "Community", pro: "Email", team: "Priority", enterprise: "Dedicated" } },
  { id: "sla", group: "Support", label: "Uptime SLA", values: { free: null, pro: null, team: "99.9%", enterprise: "99.99%" } },
]

/** A SaaS pricing page: four plans with a highlighted one, a custom-priced plan, and the grouped comparison matrix. */
export function PricingPage() {
  const [picked, setPicked] = useState<{ readonly plan: Plan; readonly interval: BillingInterval } | null>(null)
  return (
    <div className="flex flex-col gap-3">
      <PricingTable
        plans={PLANS}
        comparison={COMPARISON}
        defaultInterval="year"
        onSelect={(plan, interval) => setPicked({ plan, interval })}
        heading={
          <div>
            <h3 className="text-[16px] font-semibold tracking-tight">Pricing that scales with you</h3>
            <p className="text-[12px] text-muted-foreground">Start free. Upgrade when your team grows.</p>
          </div>
        }
      />
      <p role="status" className="text-[12px] text-muted-foreground">
        {picked ? \`Selected \${picked.plan.name}, billed \${picked.interval === "year" ? "yearly" : "monthly"}.\` : "Pick a plan to see the selection event."}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./pricing-page-DgR96KkM.js`),[]));var v=e=>a(e*100,`USD`),y=[{id:`free`,name:`Free`,description:`For individuals trying things out.`,prices:{month:v(0),year:v(0)},features:[`Up to 3 projects`,`1 GB storage`,`Community support`],cta:`Start free`},{id:`pro`,name:`Pro`,description:`For professionals shipping every week.`,prices:{month:v(15),year:v(144)},features:[`Unlimited projects`,`50 GB storage`,`Custom domains`,`Email support`],perSeat:!0},{id:`team`,name:`Team`,description:`For teams that need control and speed.`,prices:{month:v(32),year:v(300)},features:[`Everything in Pro`,`SSO with Google and Okta`,`Roles and permissions`,`Audit log (90 days)`],highlighted:!0,badge:`Most popular`,perSeat:!0}];function b(){return(0,f.jsxs)(s.Root,{plans:y,defaultInterval:`month`,className:`gap-3`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,f.jsx)(`h3`,{className:`text-[14px] font-semibold`,children:`Change plan`}),(0,f.jsx)(s.IntervalToggle,{labels:{month:`Pay monthly`,year:`Pay yearly`}})]}),(0,f.jsx)(s.Plans,{className:`grid-cols-1 gap-1.5 md:grid-cols-1`,children:e=>(0,f.jsxs)(`div`,{"data-highlighted":e.plan.highlighted||void 0,className:`flex w-full flex-wrap items-center gap-x-4 gap-y-2 md:flex-nowrap rounded-lg border bg-card px-3 py-2.5 data-highlighted:border-primary/60 data-highlighted:bg-primary/5`,children:[(0,f.jsx)(s.PlanHeader,{view:e,className:`w-full shrink-0 md:w-56`}),(0,f.jsx)(`div`,{className:`hidden min-w-0 flex-1 text-[12px] text-muted-foreground md:block`,children:o(e.plan).filter(e=>e.included).slice(0,3).map(e=>e.label).join(` · `)}),(0,f.jsx)(s.PlanPrice,{view:e,className:`h-auto shrink-0 md:w-44`}),(0,f.jsx)(s.PlanCta,{view:e,className:`ms-auto w-28 shrink-0 md:ms-0`,children:e.plan.highlighted?`Upgrade`:`Switch`})]})})]})}var x=`import { type Plan, Pricing, money, planFeatures } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")

const PLANS: readonly Plan[] = [
  { id: "free", name: "Free", description: "For individuals trying things out.", prices: { month: usd(0), year: usd(0) }, features: ["Up to 3 projects", "1 GB storage", "Community support"], cta: "Start free" },
  { id: "pro", name: "Pro", description: "For professionals shipping every week.", prices: { month: usd(15), year: usd(144) }, features: ["Unlimited projects", "50 GB storage", "Custom domains", "Email support"], perSeat: true },
  { id: "team", name: "Team", description: "For teams that need control and speed.", prices: { month: usd(32), year: usd(300) }, features: ["Everything in Pro", "SSO with Google and Okta", "Roles and permissions", "Audit log (90 days)"], highlighted: true, badge: "Most popular", perSeat: true },
]

/** The same parts in a different layout: one row per plan, as in a billing settings page. Nothing here is a preset. */
export function PricingFromParts() {
  return (
    <Pricing.Root plans={PLANS} defaultInterval="month" className="gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold">Change plan</h3>
        <Pricing.IntervalToggle labels={{ month: "Pay monthly", year: "Pay yearly" }} />
      </div>
      <Pricing.Plans className="grid-cols-1 gap-1.5 md:grid-cols-1">
        {(view) => (
          <div data-highlighted={view.plan.highlighted || undefined} className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 md:flex-nowrap rounded-lg border bg-card px-3 py-2.5 data-highlighted:border-primary/60 data-highlighted:bg-primary/5">
            <Pricing.PlanHeader view={view} className="w-full shrink-0 md:w-56" />
            <div className="hidden min-w-0 flex-1 text-[12px] text-muted-foreground md:block">{planFeatures(view.plan).filter((f) => f.included).slice(0, 3).map((f) => f.label).join(" · ")}</div>
            <Pricing.PlanPrice view={view} className="h-auto shrink-0 md:w-44" />
            <Pricing.PlanCta view={view} className="ms-auto w-28 shrink-0 md:ms-0">
              {view.plan.highlighted ? "Upgrade" : "Switch"}
            </Pricing.PlanCta>
          </div>
        )}
      </Pricing.Plans>
    </Pricing.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./pricing-parts-DOc1PjS4.js`),[]));function S(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(t,{title:`Pricing page`,children:`A full pricing page from the preset, then the same parts in another layout.`}),(0,f.jsx)(l,{n:1,title:`A SaaS pricing page`,blurb:`Four plans, a highlighted plan with a badge, a custom-priced plan, per-seat prices and the grouped comparison matrix.`,code:_,children:(0,f.jsx)(u,{testId:`pricing-page`,children:(0,f.jsx)(g,{})})}),(0,f.jsx)(l,{n:2,title:`Rebuilt from parts`,blurb:"No preset: `Pricing.Root`, `IntervalToggle`, and `Plans` with a render function using `PlanHeader`, `PlanPrice` and `PlanCta` as rows.",code:x,children:(0,f.jsx)(u,{testId:`pricing-parts`,children:(0,f.jsx)(b,{})})})]})}export{S as component};