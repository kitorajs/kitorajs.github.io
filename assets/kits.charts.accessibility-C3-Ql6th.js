import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{n as a,s as o}from"./cartesian-D_KVetyy.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";var c=e(n(),1),l=i(),u=[{stage:`Visited`,people:12400},{stage:`Signed up`,people:3210},{stage:`Activated`,people:1870},{stage:`Invited a teammate`,people:940},{stage:`Paid`,people:412}];function d(){let[e,t]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{className:`grid gap-2`,children:[(0,l.jsx)(a,{title:`Signup funnel`,data:u,x:e=>e.stage,series:[{key:`people`,label:`People`,value:e=>e.people}],height:220,onActiveChange:t}),(0,l.jsx)(`div`,{className:`h-6 rounded bg-muted/60 px-2 text-[12px] leading-6 text-muted-foreground tabular-nums`,"aria-hidden":`true`,children:e?`onActiveChange → ${e.stage}: ${e.people.toLocaleString()} (${(e.people/u[0].people*100).toFixed(1)}% of visitors)`:`onActiveChange → null (hover or focus the chart)`})]})}var f=`import { useState } from "react"
import { BarChart } from "@kitora/charts"

const DATA = [
  { stage: "Visited", people: 12_400 },
  { stage: "Signed up", people: 3_210 },
  { stage: "Activated", people: 1_870 },
  { stage: "Invited a teammate", people: 940 },
  { stage: "Paid", people: 412 },
]

/**
 * Keyboard and screen readers: Tab to the plot, ← → (or Home / End) to move, Esc to clear. Each step is
 * announced through a live region; \`onActiveChange\` lets the page react too. "Table" swaps in the numbers.
 */
export function KeyboardDemo() {
  const [active, setActive] = useState<(typeof DATA)[number] | null>(null)
  return (
    <div className="grid gap-2">
      <BarChart title="Signup funnel" data={DATA} x={(d) => d.stage} series={[{ key: "people", label: "People", value: (d) => d.people }]} height={220} onActiveChange={setActive} />
      <div className="h-6 rounded bg-muted/60 px-2 text-[12px] leading-6 text-muted-foreground tabular-nums" aria-hidden="true">
        {active ? \`onActiveChange → \${active.stage}: \${active.people.toLocaleString()} (\${((active.people / DATA[0].people) * 100).toFixed(1)}% of visitors)\` : "onActiveChange → null (hover or focus the chart)"}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>r(()=>import(`./keyboard-Bn0zba43.js`),[]));function p(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var m=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function h(e=3){let t=p(e);return m.map((e,n)=>{let r=Math.round(42e3+n*3600+(t()-.4)*14e3),i=Math.round(48e3+n*1800+(t()-.5)*9e3);return{month:e,revenue:r,target:45e3+n*3e3,expenses:i,profit:r-i,lastYear:Math.round(r*(.72+t()*.15))}})}var g=h();function _(){let[e,t]=(0,c.useState)(0);return(0,l.jsxs)(`div`,{className:`grid gap-3`,children:[(0,l.jsx)(`div`,{children:(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1),className:`h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent`,children:`Replay`})}),(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:[(0,l.jsx)(o,{title:`Animated`,data:g,x:e=>e.month,series:[{key:`revenue`,label:`Revenue`,value:e=>e.revenue}],height:180}),(0,l.jsx)(a,{title:`animate={false}`,animate:!1,data:g,x:e=>e.month,series:[{key:`revenue`,label:`Revenue`,value:e=>e.revenue}],height:180})]},e)]})}var v=`import { useState } from "react"
import { BarChart, LineChart } from "@kitora/charts"

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

/**
 * Enter animations (lines draw in, bars grow from the baseline, slices turn in) run only when the reader
 * has not asked for reduced motion, and \`animate={false}\` turns them off per chart. Replay remounts both.
 */
export function MotionDemo() {
  const [run, setRun] = useState(0)
  return (
    <div className="grid gap-3">
      <div>
        <button type="button" onClick={() => setRun((n) => n + 1)} className="h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent">
          Replay
        </button>
      </div>
      <div key={run} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <LineChart title="Animated" data={ROWS} x={(d) => d.month} series={[{ key: "revenue", label: "Revenue", value: (d) => d.revenue }]} height={180} />
        <BarChart title="animate={false}" animate={false} data={ROWS} x={(d) => d.month} series={[{ key: "revenue", label: "Revenue", value: (d) => d.revenue }]} height={180} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./motion-C3xhdcGT.js`),[]));function y(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var b=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function x(e=3){let t=y(e);return b.map((e,n)=>{let r=Math.round(42e3+n*3600+(t()-.4)*14e3),i=Math.round(48e3+n*1800+(t()-.5)*9e3);return{month:e,revenue:r,target:45e3+n*3e3,expenses:i,profit:r-i,lastYear:Math.round(r*(.72+t()*.15))}})}var S=x().slice(0,8),C=[{key:`revenue`,label:`Revenue`,value:e=>e.revenue},{key:`expenses`,label:`Expenses`,value:e=>e.expenses},{key:`lastYear`,label:`Last year`,value:e=>e.lastYear}];function w(){return(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[[`light`,`dark`].map(e=>(0,l.jsx)(`div`,{className:`${e} rounded-lg border bg-card p-3 text-card-foreground`,children:(0,l.jsx)(o,{title:`Revenue · ${e}`,data:S,x:e=>e.month,series:C,height:200,tableToggle:!1})},e)),[`light`,`dark`].map(e=>(0,l.jsx)(`div`,{className:`${e} rounded-lg border bg-card p-3 text-card-foreground`,children:(0,l.jsx)(a,{title:`Revenue · ${e}`,data:S,x:e=>e.month,series:C,height:200,tableToggle:!1})},`bars-${e}`))]})}var T=`import { BarChart, LineChart } from "@kitora/charts"

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

const ROWS = monthlyRevenue().slice(0, 8)
const SERIES = [
  { key: "revenue", label: "Revenue", value: (d: (typeof ROWS)[number]) => d.revenue },
  { key: "expenses", label: "Expenses", value: (d: (typeof ROWS)[number]) => d.expenses },
  { key: "lastYear", label: "Last year", value: (d: (typeof ROWS)[number]) => d.lastYear },
]

/** The same chart on a light and a dark surface side by side: \`.dark\` on any ancestor switches to the dark steps. */
export function ThemesDemo() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {(["light", "dark"] as const).map((theme) => (
        <div key={theme} className={\`\${theme} rounded-lg border bg-card p-3 text-card-foreground\`}>
          <LineChart title={\`Revenue · \${theme}\`} data={ROWS} x={(d) => d.month} series={SERIES} height={200} tableToggle={false} />
        </div>
      ))}
      {(["light", "dark"] as const).map((theme) => (
        <div key={\`bars-\${theme}\`} className={\`\${theme} rounded-lg border bg-card p-3 text-card-foreground\`}>
          <BarChart title={\`Revenue · \${theme}\`} data={ROWS} x={(d) => d.month} series={SERIES} height={200} tableToggle={false} />
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./themes-CEj0sTug.js`),[]));function E(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Accessibility and themes`,children:`Every chart is a labelled group with a hidden summary and data table, a Table view, keyboard reading with live announcements, colour slots that stay distinguishable for common colour-vision deficiencies, and dark steps chosen for the dark surface.`}),(0,l.jsx)(s,{n:1,title:`Keyboard and screen readers`,blurb:`Tab to the chart, then ← → Home End; Esc clears. The strip under it shows onActiveChange.`,code:f,children:(0,l.jsx)(d,{})}),(0,l.jsx)(s,{n:2,title:`Light and dark`,blurb:`The same charts on both surfaces at once.`,code:T,children:(0,l.jsx)(w,{})}),(0,l.jsx)(s,{n:3,title:`Motion`,blurb:"Enter animations honour prefers-reduced-motion; `animate={false}` turns them off.",code:v,children:(0,l.jsx)(_,{})})]})}export{E as component};