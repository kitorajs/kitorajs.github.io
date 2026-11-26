import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{r as a}from"./use-width-C9B7nVR-.js";import{n as o}from"./cartesian-D_KVetyy.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";var c=e(n(),1),l=i();function u({label:e,options:t,value:n,onChange:r}){let i=e=>{let i=t.findIndex(e=>e.value===n),a=e.key===`ArrowRight`?1:e.key===`ArrowLeft`?-1:0;if(!a)return;e.preventDefault();let o=t[(i+a+t.length)%t.length];r(o.value),(e.currentTarget.parentElement?.querySelector(`[data-value="${o.value}"]`))?.focus()};return(0,l.jsx)(`div`,{role:`radiogroup`,"aria-label":e,className:`inline-flex h-7 items-center rounded-md border bg-muted/40 p-0.5`,children:t.map(e=>(0,l.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===n,tabIndex:e.value===n?0:-1,"data-value":e.value,onClick:()=>r(e.value),onKeyDown:i,className:`h-full rounded-[5px] px-2 text-[12px] text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-sm`,children:e.label},e.value))})}var d=[{month:`Jan`,americas:42100,emea:31800,apac:18400},{month:`Feb`,americas:45300,emea:29900,apac:21200},{month:`Mar`,americas:51800,emea:34600,apac:24900},{month:`Apr`,americas:48200,emea:37100,apac:27300},{month:`May`,americas:55900,emea:39400,apac:29800},{month:`Jun`,americas:61200,emea:41700,apac:33100}],f=[{value:`grouped`,label:`Grouped`},{value:`stacked`,label:`Stacked`},{value:`percent`,label:`100%`}],p=[{value:`vertical`,label:`Columns`},{value:`horizontal`,label:`Bars`}];function m(){let{formats:e}=a(),[t,n]=(0,c.useState)(`grouped`),[r,i]=(0,c.useState)(`vertical`);return(0,l.jsx)(o,{title:`Bookings by region`,layout:t,orientation:r,actions:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{label:`Layout`,options:f,value:t,onChange:n}),(0,l.jsx)(u,{label:`Orientation`,options:p,value:r,onChange:i})]}),data:d,x:e=>e.month,height:r===`horizontal`?300:260,formatTick:t===`percent`?void 0:t=>`$${e.compact(t)}`,formatValue:t=>`$${e.number(t)}`,series:[{key:`americas`,label:`Americas`,value:e=>e.americas},{key:`emea`,label:`EMEA`,value:e=>e.emea},{key:`apac`,label:`APAC`,value:e=>e.apac}]})}var h=`import { useState, type KeyboardEvent } from "react"
import { BarChart, useChartConfig, type BarLayout } from "@kitora/charts"

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

const REGIONS = [
  { month: "Jan", americas: 42_100, emea: 31_800, apac: 18_400 },
  { month: "Feb", americas: 45_300, emea: 29_900, apac: 21_200 },
  { month: "Mar", americas: 51_800, emea: 34_600, apac: 24_900 },
  { month: "Apr", americas: 48_200, emea: 37_100, apac: 27_300 },
  { month: "May", americas: 55_900, emea: 39_400, apac: 29_800 },
  { month: "Jun", americas: 61_200, emea: 41_700, apac: 33_100 },
]
const LAYOUTS = [
  { value: "grouped", label: "Grouped" },
  { value: "stacked", label: "Stacked" },
  { value: "percent", label: "100%" },
] as const satisfies readonly { value: BarLayout; label: string }[]
const ORIENTATIONS = [
  { value: "vertical", label: "Columns" },
  { value: "horizontal", label: "Bars" },
] as const
type Orientation = (typeof ORIENTATIONS)[number]["value"]

/** One data set, three layouts and two orientations; click a legend entry to hide a region. */
export function BarLayoutsDemo() {
  const { formats } = useChartConfig()
  const [layout, setLayout] = useState<BarLayout>("grouped")
  const [orientation, setOrientation] = useState<Orientation>("vertical")
  return (
    <BarChart
      title="Bookings by region"
      layout={layout}
      orientation={orientation}
      actions={
        <>
          <Segmented label="Layout" options={LAYOUTS} value={layout} onChange={setLayout} />
          <Segmented label="Orientation" options={ORIENTATIONS} value={orientation} onChange={setOrientation} />
        </>
      }
      data={REGIONS}
      x={(d) => d.month}
      height={orientation === "horizontal" ? 300 : 260}
      formatTick={layout === "percent" ? undefined : (v) => \`$\${formats.compact(v)}\`}
      formatValue={(v) => \`$\${formats.number(v)}\`}
      series={[
        { key: "americas", label: "Americas", value: (d) => d.americas },
        { key: "emea", label: "EMEA", value: (d) => d.emea },
        { key: "apac", label: "APAC", value: (d) => d.apac },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./bar-layouts-BkNse45m.js`),[]));function g(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var _=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function v(e=3){let t=g(e);return _.map((e,n)=>{let r=Math.round(42e3+n*3600+(t()-.4)*14e3),i=Math.round(48e3+n*1800+(t()-.5)*9e3);return{month:e,revenue:r,target:45e3+n*3e3,expenses:i,profit:r-i,lastYear:Math.round(r*(.72+t()*.15))}})}var y=v();function b(){let{formats:e}=a();return(0,l.jsx)(o,{title:`Net profit by month`,data:y,x:e=>e.month,height:240,formatTick:t=>`$${e.compact(t)}`,formatValue:t=>`$${e.number(t)}`,series:[{key:`profit`,label:`Net profit`,value:e=>e.profit}]})}var x=`import { BarChart, useChartConfig } from "@kitora/charts"

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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const

interface MonthlyRevenue {
  readonly month: string
  readonly revenue: number
  readonly target: number
  readonly expenses: number
  readonly profit: number
  readonly lastYear: number
}

/** Twelve months of revenue, target, expenses and profit (some months at a loss). */
function monthlyRevenue(seed = 3): MonthlyRevenue[] {
  const rand = seeded(seed)
  return MONTHS.map((month, i) => {
    const revenue = Math.round(42_000 + i * 3_600 + (rand() - 0.4) * 14_000)
    const expenses = Math.round(48_000 + i * 1_800 + (rand() - 0.5) * 9_000)
    return { month, revenue, target: 45_000 + i * 3_000, expenses, profit: revenue - expenses, lastYear: Math.round(revenue * (0.72 + rand() * 0.15)) }
  })
}

const ROWS = monthlyRevenue()

/** Negative values grow down from a zero baseline drawn across the plot; each bar is rounded only at its data end. */
export function ProfitLossDemo() {
  const { formats } = useChartConfig()
  return (
    <BarChart
      title="Net profit by month"
      data={ROWS}
      x={(d) => d.month}
      height={240}
      formatTick={(v) => \`$\${formats.compact(v)}\`}
      formatValue={(v) => \`$\${formats.number(v)}\`}
      series={[{ key: "profit", label: "Net profit", value: (d) => d.profit }]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./profit-loss-D15DtRnz.js`),[]));function S(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Bar layouts`,children:`Every bar arrangement from one component.`}),(0,l.jsx)(s,{n:1,title:`Grouped, stacked and 100%`,blurb:`Switch the layout and the orientation; hide a region from the legend and the others restack.`,code:h,children:(0,l.jsx)(m,{})}),(0,l.jsx)(s,{n:2,title:`Negative values`,blurb:`Losses grow down from the zero line; positive and negative stacks diverge from it too.`,code:x,children:(0,l.jsx)(b,{})})]})}export{S as component};