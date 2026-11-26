import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{n as r,r as i}from"./use-width-LKZMXZBG.js";import{t as a}from"./heatmap-CXEw-ET8.js";import"./kit-gallery-B-Yr9fP4.js";import{t as o}from"./example-CZLJLtIC.js";var s=n();function c(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var l=new Date(Date.UTC(2026,9,15)),u=864e5,d=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],f=c(5),p=new Date(l.getTime()-((l.getUTCDay()+6)%7+175)*u),m=Array.from({length:182},(e,t)=>{let n=new Date(p.getTime()+t*u),r=(n.getUTCDay()+6)%7,i=r<5?1:.3,a=n>l?null:Math.max(0,Math.round((f()*9-1.5)*i));return{week:g(n).toISOString().slice(0,10),weekday:d[r],date:n,value:a}}),h=[...new Set(m.map(e=>e.week))];function g(e){return new Date(e.getTime()-(e.getUTCDay()+6)%7*u)}var _=e=>new Date(`${e}T00:00Z`);function v(){return(0,s.jsx)(r,{timeZone:`UTC`,children:(0,s.jsx)(y,{})})}function y(){let{formats:e}=i();return(0,s.jsx)(a,{title:`Commits per day`,description:`The last 26 weeks`,data:m,x:e=>e.week,y:e=>e.weekday,value:e=>e.value,xKeys:h,yKeys:d,cellSize:14,formatX:t=>e.date(_(t),`month`),xLabelFilter:(e,t)=>t===0||_(e).getUTCMonth()!==_(h[t-1]??e).getUTCMonth(),yLabelFilter:e=>e===`Mon`||e===`Wed`||e===`Fri`,label:t=>e.dateLong(t.date),summary:`Commits per day for the 26 weeks to ${e.dateLong(l)}.`})}var b=`import { ChartConfigProvider, Heatmap, useChartConfig } from "@kitora/charts"

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

/** A fixed "today" so date demos do not drift between runs: a day, so a UTC midnight (the chart shows days in UTC). */
const DEMO_TODAY = new Date(Date.UTC(2026, 9, 15))
const DAY_MS = 86_400_000

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const rand = seeded(5)

// 26 weeks ending this week, one cell per day: x = the week's Monday, y = the weekday.
const start = new Date(DEMO_TODAY.getTime() - (((DEMO_TODAY.getUTCDay() + 6) % 7) + 25 * 7) * DAY_MS)
const DAYS = Array.from({ length: 26 * 7 }, (_, i) => {
  const date = new Date(start.getTime() + i * DAY_MS)
  const weekday = (date.getUTCDay() + 6) % 7
  const busy = weekday < 5 ? 1 : 0.3
  const value = date > DEMO_TODAY ? null : Math.max(0, Math.round((rand() * 9 - 1.5) * busy))
  return { week: monday(date).toISOString().slice(0, 10), weekday: WEEKDAYS[weekday], date, value }
})
const WEEKS = [...new Set(DAYS.map((d) => d.week))]

function monday(date: Date): Date {
  return new Date(date.getTime() - ((date.getUTCDay() + 6) % 7) * DAY_MS)
}

/** A week key (\`2026-10-12\`) as its UTC midnight. */
const weekStart = (week: string) => new Date(\`\${week}T00:00Z\`)

/** A contributions calendar: weeks across, weekdays down, month names over the first week of each month; future days are empty. */
export function CalendarHeatmapDemo() {
  return (
    <ChartConfigProvider timeZone="UTC">
      <CalendarHeatmap />
    </ChartConfigProvider>
  )
}

function CalendarHeatmap() {
  const { formats } = useChartConfig()
  return (
    <Heatmap
      title="Commits per day"
      description="The last 26 weeks"
      data={DAYS}
      x={(d) => d.week}
      y={(d) => d.weekday}
      value={(d) => d.value}
      xKeys={WEEKS}
      yKeys={WEEKDAYS}
      cellSize={14}
      formatX={(week) => formats.date(weekStart(week), "month")}
      xLabelFilter={(week, i) => i === 0 || weekStart(week).getUTCMonth() !== weekStart(WEEKS[i - 1] ?? week).getUTCMonth()}
      yLabelFilter={(day) => day === "Mon" || day === "Wed" || day === "Fri"}
      label={(d) => formats.dateLong(d.date)}
      summary={\`Commits per day for the 26 weeks to \${formats.dateLong(DEMO_TODAY)}.\`}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./calendar-CXhTKKVS.js`),[]));function x(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var S=[`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`],C=x(21),w=S.flatMap((e,t)=>Array.from({length:S.length-t},(n,r)=>({cohort:e,month:`M${r}`,retained:r===0?1:Math.max(.05,.62*.86**(r-1)+(C()-.5)*.06+t*.012)})));function T(){let{formats:e}=i();return(0,s.jsx)(a,{title:`Monthly retention by signup cohort`,data:w,x:e=>e.month,y:e=>e.cohort,value:e=>e.retained,xKeys:S.map((e,t)=>`M${t}`),yKeys:S,domain:[0,1],formatValue:e.percent,label:e=>`${e.cohort} cohort, month ${e.month.slice(1)}`,showValues:!0,cellSize:46})}var E=`import { Heatmap, useChartConfig } from "@kitora/charts"

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

const COHORTS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
const rand = seeded(21)
// Retention decays month over month; younger cohorts have fewer months observed (the triangle).
const ROWS = COHORTS.flatMap((cohort, c) =>
  Array.from({ length: COHORTS.length - c }, (_, m) => ({ cohort, month: \`M\${m}\`, retained: m === 0 ? 1 : Math.max(0.05, 0.62 * Math.pow(0.86, m - 1) + (rand() - 0.5) * 0.06 + c * 0.012) })),
)

/** A cohort retention table: values printed in the cells, a fixed 0–100% scale, months not yet observed left empty. */
export function CohortDemo() {
  const { formats } = useChartConfig()
  return (
    <Heatmap
      title="Monthly retention by signup cohort"
      data={ROWS}
      x={(d) => d.month}
      y={(d) => d.cohort}
      value={(d) => d.retained}
      xKeys={COHORTS.map((_, m) => \`M\${m}\`)}
      yKeys={COHORTS}
      domain={[0, 1]}
      formatValue={formats.percent}
      label={(d) => \`\${d.cohort} cohort, month \${d.month.slice(1)}\`}
      showValues
      cellSize={46}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./cohort-vrVSJbw_.js`),[]));function D(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(e,{title:`Heatmaps`,children:`Grids shaded on one hue: lighter is less, in both themes.`}),(0,s.jsx)(o,{n:1,title:`Contributions calendar`,blurb:`Weeks across, weekdays down, month names where a month starts; future days stay empty.`,code:b,children:(0,s.jsx)(v,{})}),(0,s.jsx)(o,{n:2,title:`Cohort retention`,blurb:`A fixed 0–100% scale with the values printed in the cells.`,code:E,children:(0,s.jsx)(T,{})})]})}export{D as component};