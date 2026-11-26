import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{o as r}from"./money-LQWubu5H.js";import{n as i,r as a,t as o}from"./pricing-BV09dThv.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";import{t as c}from"./-kits.commerce.shared-B8GC_PZn.js";var l=n(),u=e=>r(e*100,`USD`),d=[{id:`free`,name:`Free`,description:`For individuals trying things out.`,prices:{month:u(0),year:u(0)},features:[`Up to 3 projects`,`1 GB storage`,`Community support`,{label:`Custom domains`,included:!1}],cta:`Start free`},{id:`pro`,name:`Pro`,description:`For professionals shipping every week.`,prices:{month:u(15),year:u(144)},features:[`Unlimited projects`,`50 GB storage`,`Custom domains`,`Email support`,{label:`SSO with Google and Okta`,included:!1}],perSeat:!0},{id:`team`,name:`Team`,description:`For teams that need control and speed.`,prices:{month:u(32),year:u(300)},features:[`Everything in Pro`,`SSO with Google and Okta`,`Roles and permissions`,`Audit log (90 days)`],highlighted:!0,badge:`Most popular`,perSeat:!0}];function f(){return(0,l.jsx)(a,{plans:d,defaultInterval:`year`,heading:(0,l.jsx)(`h3`,{className:`text-[14px] font-semibold`,children:`Choose a plan`})})}var p=`import { type Plan, PricingTable, money } from "@kitora/commerce"

const usd = (dollars: number) => money(dollars * 100, "USD")

const PLANS: readonly Plan[] = [
  { id: "free", name: "Free", description: "For individuals trying things out.", prices: { month: usd(0), year: usd(0) }, features: ["Up to 3 projects", "1 GB storage", "Community support", { label: "Custom domains", included: false }], cta: "Start free" },
  { id: "pro", name: "Pro", description: "For professionals shipping every week.", prices: { month: usd(15), year: usd(144) }, features: ["Unlimited projects", "50 GB storage", "Custom domains", "Email support", { label: "SSO with Google and Okta", included: false }], perSeat: true },
  { id: "team", name: "Team", description: "For teams that need control and speed.", prices: { month: usd(32), year: usd(300) }, features: ["Everything in Pro", "SSO with Google and Okta", "Roles and permissions", "Audit log (90 days)"], highlighted: true, badge: "Most popular", perSeat: true },
]

/** Plans plus the monthly / yearly toggle. Yearly shows the per-month figure and the saving. \`{ label, included: false }\` lists a feature a plan lacks (struck through, read as "not included"). */
export function BasicPlanCards() {
  return <PricingTable plans={PLANS} defaultInterval="year" heading={<h3 className="text-[14px] font-semibold">Choose a plan</h3>} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./plan-card-CCkU5vJK.js`),[]));var m=e=>r(e*100,`USD`),h=[{id:`free`,name:`Free`,description:`For individuals trying things out.`,prices:{month:m(0),year:m(0)},features:[`Up to 3 projects`,`1 GB storage`,`Community support`],cta:`Start free`},{id:`pro`,name:`Pro`,description:`For professionals shipping every week.`,prices:{month:m(15),year:m(144)},features:[`Unlimited projects`,`50 GB storage`,`Custom domains`,`Email support`],perSeat:!0},{id:`team`,name:`Team`,description:`For teams that need control and speed.`,prices:{month:m(32),year:m(300)},features:[`Everything in Pro`,`SSO with Google and Okta`,`Roles and permissions`,`Audit log (90 days)`],highlighted:!0,badge:`Most popular`,perSeat:!0},{id:`enterprise`,name:`Enterprise`,description:`Security reviews, SLAs and a named contact.`,prices:{month:null,year:null},features:[`Everything in Team`,`SAML and SCIM`,`99.99% uptime SLA`,`Dedicated success manager`],cta:`Talk to sales`}],g=[{id:`projects`,group:`Usage`,label:`Projects`,values:{free:3,pro:`Unlimited`,team:`Unlimited`,enterprise:`Unlimited`}},{id:`storage`,group:`Usage`,label:`Storage`,values:{free:`1 GB`,pro:`50 GB`,team:`500 GB`,enterprise:`Custom`}},{id:`builds`,group:`Usage`,label:`Build minutes`,hint:`per month`,values:{free:300,pro:6e3,team:25e3,enterprise:`Custom`}},{id:`domains`,group:`Features`,label:`Custom domains`,values:{free:!1,pro:!0,team:!0,enterprise:!0}},{id:`preview`,group:`Features`,label:`Preview deployments`,values:{free:!0,pro:!0,team:!0,enterprise:!0}},{id:`analytics`,group:`Features`,label:`Analytics`,values:{free:!1,pro:`Basic`,team:`Advanced`,enterprise:`Advanced`}},{id:`sso`,group:`Security`,label:`SSO`,values:{free:!1,pro:!1,team:!0,enterprise:!0}},{id:`saml`,group:`Security`,label:`SAML and SCIM`,values:{free:!1,pro:!1,team:!1,enterprise:!0}},{id:`audit`,group:`Security`,label:`Audit log`,values:{free:!1,pro:!1,team:`90 days`,enterprise:`Unlimited`}}];function _(){return(0,l.jsx)(i.Root,{plans:h,children:(0,l.jsx)(i.Comparison,{rows:g,renderValue:e=>e===`Custom`?(0,l.jsx)(`span`,{className:`text-muted-foreground italic`,children:`Custom`}):(0,l.jsx)(o,{value:e})})})}var v=`import { ComparisonCell, type ComparisonRow, type Plan, Pricing, money } from "@kitora/commerce"

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
]

/**
 * The comparison matrix alone: rows grouped under headings, ticks, text and numbers per plan.
 * \`renderValue\` swaps a cell; here "Custom" reads as a muted note and every other value
 * falls back to the default \`ComparisonCell\`.
 */
export function BasicComparison() {
  return (
    <Pricing.Root plans={PLANS}>
      <Pricing.Comparison rows={COMPARISON} renderValue={(value) => (value === "Custom" ? <span className="text-muted-foreground italic">Custom</span> : <ComparisonCell value={value} />)} />
    </Pricing.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>t(()=>import(`./comparison-Do9niItM.js`),[]));function y(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(e,{title:`Basics: pricing`,children:`Plans are data with one price per billing interval; the comparison matrix is rows of per-plan values.`}),(0,l.jsx)(s,{n:1,title:`Plan cards and the billing toggle`,blurb:`Arrow keys move the toggle. Yearly shows the per-month figure, the yearly total and the saving. A feature written as { label, included: false } is one the plan lacks: muted, struck through and read as not included.`,code:p,children:(0,l.jsx)(c,{testId:`basic-plans`,children:(0,l.jsx)(f,{})})}),(0,l.jsx)(s,{n:2,title:`The comparison matrix`,blurb:"Rows grouped under headings; a cell is a tick, a dash, text or a number. `renderValue` swaps the cell, here falling back to `ComparisonCell`.",code:v,children:(0,l.jsx)(c,{testId:`basic-comparison`,children:(0,l.jsx)(_,{})})})]})}export{y as component};