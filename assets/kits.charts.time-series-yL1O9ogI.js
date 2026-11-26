import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{n as a,r as o}from"./use-width-C9B7nVR-.js";import{s}from"./cartesian-D_KVetyy.js";import"./kit-gallery-Atvibnty.js";import{t as c}from"./example-B8EaWveR.js";var l=i(),u=[21.4,21.9,22.6,23.8,24.9,25.7,26.1,null,null,null,27.2,26.8,25.9,24.6,23.1,22.4].map((e,t)=>({hour:new Date(Date.UTC(2026,9,15,3+t)),value:e}));function d(){return(0,l.jsx)(a,{timeZone:`UTC`,children:(0,l.jsx)(s,{title:`Server room temperature (°C, UTC)`,data:u,x:e=>e.hour,series:[{key:`t`,label:`Temperature`,value:e=>e.value,dots:!0}],height:200,formatValue:e=>`${e.toFixed(1)} °C`})})}var f=`import { ChartConfigProvider, LineChart } from "@kitora/charts"

// Hourly readings with an outage between 10:00 and 13:00 UTC (null values).
const READINGS = [21.4, 21.9, 22.6, 23.8, 24.9, 25.7, 26.1, null, null, null, 27.2, 26.8, 25.9, 24.6, 23.1, 22.4].map((value, i) => ({ hour: new Date(Date.UTC(2026, 9, 15, 3 + i)), value }))

/** Missing values break the line instead of drawing a straight bridge across the outage; the table shows them as "–". */
export function GapsDemo() {
  return (
    <ChartConfigProvider timeZone="UTC">
      <LineChart title="Server room temperature (°C, UTC)" data={READINGS} x={(d) => d.hour} series={[{ key: "t", label: "Temperature", value: (d) => d.value, dots: true }]} height={200} formatValue={(v) => \`\${v.toFixed(1)} °C\`} />
    </ChartConfigProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>r(()=>import(`./gaps-Dshqcomx.js`),[]));var p=e(n(),1);function m(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var h=Date.UTC(2026,9,15);function g(e){return new Date(h-e*864e5)}function _(e=365,t=7){let n=m(t);return Array.from({length:e},(t,r)=>{let i=g(e-1-r),a=i.getUTCDay(),o=a===0||a===6?.72:1,s=1+r/e,c=Math.abs(r-e*.7)<4?1.9-Math.abs(r-e*.7)*.2:1,l=1800*o*s*c,u=Math.round(l*(.42+n()*.06)),d=Math.round(l*(.22+n()*.05)),f=Math.round(l*(.12+n()*.04)),p=Math.round(l*(.18+n()*.04)),m=u+d+f+p;return{date:i,visitors:m,signups:Math.round(m*(.031+n()*.012)),organic:u,paid:d,referral:f,direct:p}})}function v(e,t){return e.map((n,r)=>{let i=e.slice(Math.max(0,r-t+1),r+1);return Math.round(i.reduce((e,t)=>e+t,0)/i.length)})}function y({label:e,options:t,value:n,onChange:r}){let i=e=>{let i=t.findIndex(e=>e.value===n),a=e.key===`ArrowRight`?1:e.key===`ArrowLeft`?-1:0;if(!a)return;e.preventDefault();let o=t[(i+a+t.length)%t.length];r(o.value),(e.currentTarget.parentElement?.querySelector(`[data-value="${o.value}"]`))?.focus()};return(0,l.jsx)(`div`,{role:`radiogroup`,"aria-label":e,className:`inline-flex h-7 items-center rounded-md border bg-muted/40 p-0.5`,children:t.map(e=>(0,l.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===n,tabIndex:e.value===n?0:-1,"data-value":e.value,onClick:()=>r(e.value),onKeyDown:i,className:`h-full rounded-[5px] px-2 text-[12px] text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-sm`,children:e.label},e.value))})}var b=_(365),x=[{value:`7`,label:`7D`},{value:`30`,label:`30D`},{value:`90`,label:`90D`},{value:`365`,label:`1Y`}];function S(){return(0,l.jsx)(a,{timeZone:`UTC`,children:(0,l.jsx)(C,{})})}function C(){let{formats:e}=o(),[t,n]=(0,p.useState)(`90`),r=(0,p.useMemo)(()=>{let e=v(b.map(e=>e.visitors),7);return b.map((t,n)=>({...t,avg:e[n]})).slice(-Number(t))},[t]),i=Math.round(r.reduce((e,t)=>e+t.visitors,0)/r.length);return(0,l.jsx)(s,{title:`Daily visitors`,description:`Hover or focus the chart and use ← → to read each day`,actions:(0,l.jsx)(y,{label:`Range`,options:x,value:t,onChange:n}),data:r,x:e=>e.date,height:280,endLabels:!0,formatTick:e.compact,references:[{value:i,label:`Average ${e.compact(i)}`}],series:[{key:`visitors`,label:`Visitors`,value:e=>e.visitors,curve:`linear`,dots:Number(t)<=30},{key:`avg`,label:`7-day average`,value:e=>e.avg,dashed:!0}]})}var w=`import { useMemo, useState, type KeyboardEvent } from "react"
import { ChartConfigProvider, LineChart, useChartConfig } from "@kitora/charts"

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

/** A moving average over \`window\` values (shorter at the start), for a smoothed line beside raw bars. */
function movingAverage(values: readonly number[], window: number): number[] {
  return values.map((_, i) => {
    const slice = values.slice(Math.max(0, i - window + 1), i + 1)
    return Math.round(slice.reduce((s, v) => s + v, 0) / slice.length)
  })
}

// A compact segmented control for the chart toolbar. Radio semantics: one choice, arrow keys move it.
function Segmented<V extends string>({ label, options, value, onChange }: { label: string; options: readonly { value: V; label: string }[]; value: V; onChange: (value: V) => void }) {
  // on each radio (the focused one is the group's only tab stop): ←/→ move the choice and the focus
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const i = options.findIndex((o) => o.value === value)
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0
    if (!step) return
    event.preventDefault()
    const next = options[(i + step + options.length) % options.length]
    onChange(next.value)
    const target = event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(\`[data-value="\${next.value}"]\`)
    target?.focus()
  }
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex h-7 items-center rounded-md border bg-muted/40 p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={o.value === value}
          tabIndex={o.value === value ? 0 : -1}
          data-value={o.value}
          onClick={() => onChange(o.value)}
          onKeyDown={onKeyDown}
          className="h-full rounded-[5px] px-2 text-[12px] text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-sm"
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

const YEAR = dailyTraffic(365)
const RANGES = [
  { value: "7", label: "7D" },
  { value: "30", label: "30D" },
  { value: "90", label: "90D" },
  { value: "365", label: "1Y" },
] as const
type Range = (typeof RANGES)[number]["value"]

/** A year of daily visitors with a range picker, a 7-day average, a goal line and direct labels at the line ends; UTC days, shown in UTC. */
export function TimeSeriesDemo() {
  return (
    <ChartConfigProvider timeZone="UTC">
      <TimeSeries />
    </ChartConfigProvider>
  )
}

function TimeSeries() {
  const { formats } = useChartConfig()
  const [range, setRange] = useState<Range>("90")
  const rows = useMemo(() => {
    const avg = movingAverage(YEAR.map((d) => d.visitors), 7)
    return YEAR.map((d, i) => ({ ...d, avg: avg[i] })).slice(-Number(range))
  }, [range])
  const mean = Math.round(rows.reduce((s, r) => s + r.visitors, 0) / rows.length)
  return (
    <LineChart
      title="Daily visitors"
      description="Hover or focus the chart and use ← → to read each day"
      actions={<Segmented label="Range" options={RANGES} value={range} onChange={setRange} />}
      data={rows}
      x={(d) => d.date}
      height={280}
      endLabels
      formatTick={formats.compact}
      references={[{ value: mean, label: \`Average \${formats.compact(mean)}\` }]}
      series={[
        { key: "visitors", label: "Visitors", value: (d) => d.visitors, curve: "linear", dots: Number(range) <= 30 },
        { key: "avg", label: "7-day average", value: (d) => d.avg, dashed: true },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./time-series-BTk3HDcT.js`),[]));function T(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Time series`,children:`Continuous dates on x: calendar ticks that adapt to the range, a monotone curve that never invents peaks, gaps where data is missing.`}),(0,l.jsx)(c,{n:1,title:`A year of daily visitors`,blurb:`Pick a range; the 7-day average is dashed, the average is a reference line and both lines are labelled at their ends. Dots appear at 30 days and under.`,code:w,children:(0,l.jsx)(S,{})}),(0,l.jsx)(c,{n:2,title:`Missing data`,blurb:`Null values break the line instead of bridging the outage.`,code:f,children:(0,l.jsx)(d,{})})]})}export{T as component};