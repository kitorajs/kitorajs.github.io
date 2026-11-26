import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{n as r,r as i}from"./use-width-LKZMXZBG.js";import{t as a}from"./cartesian-C3RIC6UA.js";import{t as o}from"./pie-Cn7EN2Kr.js";import"./kit-gallery-B-Yr9fP4.js";import{t as s}from"./example-CZLJLtIC.js";var c=n();function l(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var u=Date.UTC(2026,9,15);function d(e){return new Date(u-e*864e5)}function f(e=365,t=7){let n=l(t);return Array.from({length:e},(t,r)=>{let i=d(e-1-r),a=i.getUTCDay(),o=a===0||a===6?.72:1,s=1+r/e,c=Math.abs(r-e*.7)<4?1.9-Math.abs(r-e*.7)*.2:1,l=1800*o*s*c,u=Math.round(l*(.42+n()*.06)),f=Math.round(l*(.22+n()*.05)),p=Math.round(l*(.12+n()*.04)),m=Math.round(l*(.18+n()*.04)),h=u+f+p+m;return{date:i,visitors:h,signups:Math.round(h*(.031+n()*.012)),organic:u,paid:f,referral:p,direct:m}})}var p=[{country:`United States`,users:48210},{country:`India`,users:21400},{country:`Germany`,users:12830},{country:`United Kingdom`,users:11920},{country:`Brazil`,users:8110},{country:`France`,users:7460},{country:`Japan`,users:6020},{country:`Canada`,users:5380},{country:`Spain`,users:3900},{country:`Netherlands`,users:3410},{country:`Poland`,users:2150},{country:`Mexico`,users:1980}],m=f(84).filter((e,t)=>t%7==6);function h(){return(0,c.jsx)(r,{timeZone:`UTC`,children:(0,c.jsx)(g,{})})}function g(){let{formats:e}=i();return(0,c.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]`,children:[(0,c.jsx)(o,{title:`Users by country`,description:`Twelve countries, top seven shown`,data:p,label:e=>e.country,value:e=>e.users,formatValue:e.compact,height:200}),(0,c.jsx)(a,{title:`Channel mix`,description:`Share of weekly visitors`,stacked:!0,normalise:!0,data:m,x:e=>e.date,height:220,series:[{key:`organic`,label:`Organic`,value:e=>e.organic},{key:`paid`,label:`Paid`,value:e=>e.paid},{key:`referral`,label:`Referral`,value:e=>e.referral},{key:`direct`,label:`Direct`,value:e=>e.direct}]})]})}var _=`import { AreaChart, ChartConfigProvider, DonutChart, useChartConfig } from "@kitora/charts"

// Sample data, seeded (never Math.random) so the server render and the browser draw the same numbers.
/** mulberry32: a tiny seeded PRNG; returns a function giving floats in [0, 1). */
function seeded(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A fixed "today" so date demos do not drift between runs: a day, so a UTC midnight (the chart shows it in UTC). */
const DEMO_TODAY = Date.UTC(2026, 9, 15)

function daysAgo(n: number): Date {
  return new Date(DEMO_TODAY - n * 86_400_000)
}

interface DailyTraffic {
  readonly date: Date
  readonly visitors: number
  readonly signups: number
  readonly organic: number
  readonly paid: number
  readonly referral: number
  readonly direct: number
}

/** A year of daily traffic with a weekly rhythm, slow growth and a launch spike. */
function dailyTraffic(days = 365, seed = 7): DailyTraffic[] {
  const rand = seeded(seed)
  return Array.from({ length: days }, (_, i) => {
    const date = daysAgo(days - 1 - i)
    const weekday = date.getUTCDay()
    const weekly = weekday === 0 || weekday === 6 ? 0.72 : 1
    const trend = 1 + i / days
    const launch = Math.abs(i - days * 0.7) < 4 ? 1.9 - Math.abs(i - days * 0.7) * 0.2 : 1
    const base = 1800 * weekly * trend * launch
    const organic = Math.round(base * (0.42 + rand() * 0.06))
    const paid = Math.round(base * (0.22 + rand() * 0.05))
    const referral = Math.round(base * (0.12 + rand() * 0.04))
    const direct = Math.round(base * (0.18 + rand() * 0.04))
    const visitors = organic + paid + referral + direct
    return { date, visitors, signups: Math.round(visitors * (0.031 + rand() * 0.012)), organic, paid, referral, direct }
  })
}

const COUNTRIES = [
  { country: "United States", users: 48_210 },
  { country: "India", users: 21_400 },
  { country: "Germany", users: 12_830 },
  { country: "United Kingdom", users: 11_920 },
  { country: "Brazil", users: 8_110 },
  { country: "France", users: 7_460 },
  { country: "Japan", users: 6_020 },
  { country: "Canada", users: 5_380 },
  { country: "Spain", users: 3_900 },
  { country: "Netherlands", users: 3_410 },
  { country: "Poland", users: 2_150 },
  { country: "Mexico", users: 1_980 },
]
const WEEKS = dailyTraffic(84).filter((_, i) => i % 7 === 6)

/** Parts of a whole: twelve countries fold past the eighth slot into "Other"; a 100% area shows the mix shifting. The weeks are UTC days, shown in UTC. */
export function CompositionDemo() {
  return (
    <ChartConfigProvider timeZone="UTC">
      <Composition />
    </ChartConfigProvider>
  )
}

function Composition() {
  const { formats } = useChartConfig()
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <DonutChart title="Users by country" description="Twelve countries, top seven shown" data={COUNTRIES} label={(d) => d.country} value={(d) => d.users} formatValue={formats.compact} height={200} />
      <AreaChart
        title="Channel mix"
        description="Share of weekly visitors"
        stacked
        normalise
        data={WEEKS}
        x={(d) => d.date}
        height={220}
        series={[
          { key: "organic", label: "Organic", value: (d) => d.organic },
          { key: "paid", label: "Paid", value: (d) => d.paid },
          { key: "referral", label: "Referral", value: (d) => d.referral },
          { key: "direct", label: "Direct", value: (d) => d.direct },
        ]}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./composition-0BzWkRNo.js`),[]));function v(){return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(e,{title:`Composition`,children:`Parts of a whole.`}),(0,c.jsx)(s,{n:1,title:`Donut with Other, and a 100% stacked area`,blurb:`Past eight slices the rest folds into Other rather than repeating a colour; the 100% area shows how the mix moves.`,code:_,children:(0,c.jsx)(h,{})})]})}export{v as component};