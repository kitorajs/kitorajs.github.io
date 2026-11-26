import{t as e}from"./activity-nUotr9Mb.js";import{a as t,i as n,n as r,r as i,t as a}from"./stats-C27f7H0k.js";import{t as o}from"./credit-card-DPtTbQbg.js";import{t as s}from"./dollar-sign-CMIbWncV.js";import{s as c}from"./kit-docs-BUovISd0.js";import{t as l}from"./users-BnHhGQEL.js";import{Cc as u,Ic as d}from"./index-B9ukmIN1.js";import{r as f}from"./badges-DAbO4yBh.js";import{n as p}from"./hints-RaGFHJNJ.js";import"./kit-gallery-Bph7isB2.js";import{t as m}from"./example-BGnSQG2Y.js";var h=d();function g(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}function _(){return(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(a,{children:[(0,h.jsx)(r,{label:`MRR`,value:`$98.4K`,current:98400,previous:91200,progress:98400/12e4,target:`of $120K Q4 target`}),(0,h.jsx)(r,{label:`Active accounts`,value:`2,184`,current:2184,previous:2090,series:g(3,20,2e3,6)}),(0,h.jsx)(r,{label:`Churn`,value:`1.8%`,current:1.8,previous:2.3,invert:!0,series:g(9,20,2.4,-.03)}),(0,h.jsx)(r,{label:`ARPA`,value:`$45.06`,current:45.06,previous:43.6}),(0,h.jsx)(r,{label:`NPS`,value:`52`,current:52,previous:52})]}),(0,h.jsxs)(t,{columns:4,children:[(0,h.jsx)(n,{icon:(0,h.jsx)(s,{}),label:`Revenue (30d)`,value:`$312,940`,current:312940,previous:281200,trendSuffix:`30d`,series:g(1,30,9e3,60),footnote:`Card 82% · Invoice 18%`,href:`#revenue`}),(0,h.jsx)(n,{icon:(0,h.jsx)(l,{}),label:`New sign-ups`,value:`1,204`,current:1204,previous:1310,trendSuffix:`30d`,series:g(5,30,45,-.2),footnote:`Organic 61% · Paid 39%`}),(0,h.jsx)(n,{icon:(0,h.jsx)(o,{}),label:`Failed payments`,value:`37`,current:37,previous:52,invert:!0,trendSuffix:`30d`,series:g(7,30,2,-.04),footnote:`Dunning recovered 64%`}),(0,h.jsx)(n,{icon:(0,h.jsx)(e,{}),label:`API p95 latency`,value:`182 ms`,current:182,previous:171,invert:!0,trendSuffix:`wk`,series:g(11,30,170,.5),footnote:`Budget 250 ms`})]})]})}var v=`import { KpiStrip, KpiTile, StatCard, StatGrid } from "@kitora/display"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

// A revenue header strip (five tiles, one with a goal bar, churn inverted so down is green)
// over a grid of stat cards with icons, trends, sparklines and footnotes.
export function MetricsKpis() {
  return (
    <div className="flex flex-col gap-3">
      <KpiStrip>
        <KpiTile label="MRR" value="$98.4K" current={98400} previous={91200} progress={98400 / 120000} target="of $120K Q4 target" />
        <KpiTile label="Active accounts" value="2,184" current={2184} previous={2090} series={series(3, 20, 2000, 6)} />
        <KpiTile label="Churn" value="1.8%" current={1.8} previous={2.3} invert series={series(9, 20, 2.4, -0.03)} />
        <KpiTile label="ARPA" value="$45.06" current={45.06} previous={43.6} />
        <KpiTile label="NPS" value="52" current={52} previous={52} />
      </KpiStrip>
      <StatGrid columns={4}>
        <StatCard icon={<DollarSign />} label="Revenue (30d)" value="$312,940" current={312940} previous={281200} trendSuffix="30d" series={series(1, 30, 9000, 60)} footnote="Card 82% · Invoice 18%" href="#revenue" />
        <StatCard icon={<Users />} label="New sign-ups" value="1,204" current={1204} previous={1310} trendSuffix="30d" series={series(5, 30, 45, -0.2)} footnote="Organic 61% · Paid 39%" />
        <StatCard icon={<CreditCard />} label="Failed payments" value="37" current={37} previous={52} invert trendSuffix="30d" series={series(7, 30, 2, -0.04)} footnote="Dunning recovered 64%" />
        <StatCard icon={<Activity />} label="API p95 latency" value="182 ms" current={182} previous={171} invert trendSuffix="wk" series={series(11, 30, 170, 0.5)} footnote="Budget 250 ms" />
      </StatGrid>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>u(()=>import(`./metrics-kpis-DyKE-mht.js`),[]));function y(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}var b={healthy:{tone:`success`,label:`Healthy`},degraded:{tone:`warning`,label:`Degraded`},down:{tone:`danger`,label:`Down`}},x=[{name:`api-gateway`,region:`eu-west-1`,health:`healthy`,rps:4210,p95:182,errors:.04,seed:2},{name:`billing`,region:`us-east-1`,health:`degraded`,rps:312,p95:640,errors:1.9,seed:4},{name:`search`,region:`eu-west-1`,health:`healthy`,rps:1880,p95:96,errors:.01,seed:6},{name:`notifications`,region:`ap-south-1`,health:`down`,rps:0,p95:0,errors:100,seed:8},{name:`auth`,region:`us-east-1`,health:`healthy`,rps:2560,p95:54,errors:.02,seed:10},{name:`media-resize`,region:`eu-central-1`,health:`healthy`,rps:740,p95:410,errors:.3,seed:12}],S=new Intl.NumberFormat(`en`);function C(){return(0,h.jsx)(`div`,{className:`overflow-x-auto rounded-lg border bg-card`,children:(0,h.jsxs)(`table`,{className:`w-full text-[13px]`,children:[(0,h.jsx)(`thead`,{className:`bg-muted/40 text-[11.5px] text-muted-foreground`,children:(0,h.jsxs)(`tr`,{className:`h-7 border-b text-left`,children:[(0,h.jsx)(`th`,{className:`px-3 font-medium`,children:`Service`}),(0,h.jsx)(`th`,{className:`px-3 font-medium`,children:`Status`}),(0,h.jsx)(`th`,{className:`px-3 text-right font-medium`,children:`Req/s`}),(0,h.jsx)(`th`,{className:`px-3 font-medium`,children:(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[`p95 latency (24h)`,(0,h.jsx)(p,{content:`95th percentile response time, hourly buckets over the last 24 hours. Lower is better, so a rising line is red.`})]})}),(0,h.jsx)(`th`,{className:`px-3 text-right font-medium`,children:`Errors`})]})}),(0,h.jsx)(`tbody`,{children:x.map(e=>(0,h.jsxs)(`tr`,{className:`h-8 border-b last:border-b-0 hover:bg-accent/40`,children:[(0,h.jsxs)(`td`,{className:`px-3`,children:[(0,h.jsx)(`span`,{className:`font-mono text-[12px]`,children:e.name}),(0,h.jsx)(`span`,{className:`ml-2 text-[11.5px] text-muted-foreground`,children:e.region})]}),(0,h.jsx)(`td`,{className:`px-3`,children:(0,h.jsx)(f,{tone:b[e.health].tone,dot:!0,pulse:e.health===`down`,children:b[e.health].label})}),(0,h.jsx)(`td`,{className:`px-3 text-right tabular-nums`,children:S.format(e.rps)}),(0,h.jsx)(`td`,{className:`px-3`,children:(0,h.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(i,{values:y(e.seed,24,Math.max(e.p95,20),e.health===`degraded`?8:-.4),invert:!0,width:110,height:20,dot:!1}),(0,h.jsx)(`span`,{className:`w-14 text-right tabular-nums`,children:e.p95?`${e.p95} ms`:`—`})]})}),(0,h.jsxs)(`td`,{className:`px-3 text-right tabular-nums`,children:[e.errors,`%`]})]},e.name))})]})})}var w=`import { InfoHint, Sparkline, StatusBadge, type BadgeTone } from "@kitora/display"

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

type Health = "healthy" | "degraded" | "down"

const HEALTH: Readonly<Record<Health, { readonly tone: BadgeTone; readonly label: string }>> = {
  healthy: { tone: "success", label: "Healthy" },
  degraded: { tone: "warning", label: "Degraded" },
  down: { tone: "danger", label: "Down" },
}

const SERVICES = [
  { name: "api-gateway", region: "eu-west-1", health: "healthy", rps: 4210, p95: 182, errors: 0.04, seed: 2 },
  { name: "billing", region: "us-east-1", health: "degraded", rps: 312, p95: 640, errors: 1.9, seed: 4 },
  { name: "search", region: "eu-west-1", health: "healthy", rps: 1880, p95: 96, errors: 0.01, seed: 6 },
  { name: "notifications", region: "ap-south-1", health: "down", rps: 0, p95: 0, errors: 100, seed: 8 },
  { name: "auth", region: "us-east-1", health: "healthy", rps: 2560, p95: 54, errors: 0.02, seed: 10 },
  { name: "media-resize", region: "eu-central-1", health: "healthy", rps: 740, p95: 410, errors: 0.3, seed: 12 },
] as const satisfies ReadonlyArray<{ name: string; region: string; health: Health; rps: number; p95: number; errors: number; seed: number }>

const NUMBER = new Intl.NumberFormat("en")

// A dense service table: status badge, throughput, latency with an inverted sparkline (rising is red).
export function MetricsServices() {
  return (
    <div className="overflow-x-auto rounded-lg border bg-card">
      <table className="w-full text-[13px]">
        <thead className="bg-muted/40 text-[11.5px] text-muted-foreground">
          <tr className="h-7 border-b text-left">
            <th className="px-3 font-medium">Service</th>
            <th className="px-3 font-medium">Status</th>
            <th className="px-3 text-right font-medium">Req/s</th>
            <th className="px-3 font-medium">
              <span className="inline-flex items-center gap-1">
                p95 latency (24h)
                <InfoHint content="95th percentile response time, hourly buckets over the last 24 hours. Lower is better, so a rising line is red." />
              </span>
            </th>
            <th className="px-3 text-right font-medium">Errors</th>
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.name} className="h-8 border-b last:border-b-0 hover:bg-accent/40">
              <td className="px-3">
                <span className="font-mono text-[12px]">{s.name}</span>
                <span className="ml-2 text-[11.5px] text-muted-foreground">{s.region}</span>
              </td>
              <td className="px-3">
                <StatusBadge tone={HEALTH[s.health].tone} dot pulse={s.health === "down"}>
                  {HEALTH[s.health].label}
                </StatusBadge>
              </td>
              <td className="px-3 text-right tabular-nums">{NUMBER.format(s.rps)}</td>
              <td className="px-3">
                <span className="flex items-center gap-2">
                  <Sparkline values={series(s.seed, 24, Math.max(s.p95, 20), s.health === "degraded" ? 8 : -0.4)} invert width={110} height={20} dot={false} />
                  <span className="w-14 text-right tabular-nums">{s.p95 ? \`\${s.p95} ms\` : "—"}</span>
                </span>
              </td>
              <td className="px-3 text-right tabular-nums">{s.errors}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>u(()=>import(`./metrics-services-Cte7shy2.js`),[]));function T(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(c,{title:`Metrics dashboard`,children:"KPI tiles, stat cards and sparklines. Trend colour follows meaning, not direction: for churn, failed payments and latency (`invert`) down is green."}),(0,h.jsx)(m,{n:1,title:`Revenue overview`,blurb:`A KPI strip with a goal bar, then stat cards with icons, trends, sparklines and footnotes. The revenue card is a link.`,code:v,children:(0,h.jsx)(_,{})}),(0,h.jsx)(m,{n:2,title:`Service health table`,blurb:`Dense rows with a status badge, tabular numbers and an inline latency sparkline per service; the (i) explains the column.`,code:w,children:(0,h.jsx)(C,{})})]})}export{T as component};