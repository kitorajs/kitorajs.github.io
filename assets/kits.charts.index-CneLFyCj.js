import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{n as a,r as o}from"./use-width-LKZMXZBG.js";import{t as s}from"./bars-list-SqWP9R1a.js";import{t as c}from"./gauge-BjiUp1tn.js";import{o as l,t as u}from"./cartesian-C3RIC6UA.js";import{t as d}from"./pie-Cn7EN2Kr.js";import{t as f}from"./sparkline-DcIxQ5Dq.js";import{t as p}from"./heatmap-CXEw-ET8.js";import"./kit-gallery-B-Yr9fP4.js";import{t as m}from"./example-CZLJLtIC.js";var h=e(n(),1),g=i();function _(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var v=Date.UTC(2026,9,15);function y(e){return new Date(v-e*864e5)}var b=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function x(e=365,t=7){let n=_(t);return Array.from({length:e},(t,r)=>{let i=y(e-1-r),a=i.getUTCDay(),o=a===0||a===6?.72:1,s=1+r/e,c=Math.abs(r-e*.7)<4?1.9-Math.abs(r-e*.7)*.2:1,l=1800*o*s*c,u=Math.round(l*(.42+n()*.06)),d=Math.round(l*(.22+n()*.05)),f=Math.round(l*(.12+n()*.04)),p=Math.round(l*(.18+n()*.04)),m=u+d+f+p;return{date:i,visitors:m,signups:Math.round(m*(.031+n()*.012)),organic:u,paid:d,referral:f,direct:p}})}function S(e=3){let t=_(e);return b.map((e,n)=>{let r=Math.round(42e3+n*3600+(t()-.4)*14e3),i=Math.round(48e3+n*1800+(t()-.5)*9e3);return{month:e,revenue:r,target:45e3+n*3e3,expenses:i,profit:r-i,lastYear:Math.round(r*(.72+t()*.15))}})}function C(e,t){return e.map((n,r)=>{let i=e.slice(Math.max(0,r-t+1),r+1);return Math.round(i.reduce((e,t)=>e+t,0)/i.length)})}var w=x(90),T=S(),E=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],D=Array.from({length:24},(e,t)=>String(t));function O(){return(0,g.jsx)(a,{timeZone:`UTC`,children:(0,g.jsx)(k,{})})}function k(){let{formats:e}=o(),t=t=>`$${e.compact(t)}`,n=w.slice(-30),r=w.slice(-60,-30),i=(e,t)=>e.reduce((e,n)=>e+t(n),0),a=[{label:`Visitors`,now:i(n,e=>e.visitors),before:i(r,e=>e.visitors),series:n.map(e=>e.visitors)},{label:`Signups`,now:i(n,e=>e.signups),before:i(r,e=>e.signups),series:n.map(e=>e.signups)},{label:`Conversion`,now:i(n,e=>e.signups)/i(n,e=>e.visitors),before:i(r,e=>e.signups)/i(r,e=>e.visitors),series:n.map(e=>e.signups/e.visitors),percent:!0},{label:`Paid share`,now:i(n,e=>e.paid)/i(n,e=>e.visitors),before:i(r,e=>e.paid)/i(r,e=>e.visitors),series:n.map(e=>e.paid/e.visitors),percent:!0}],m=(0,h.useMemo)(()=>{let e=C(T.map(e=>e.revenue),3);return T.map((t,n)=>({...t,avg:e[n]}))},[]),_=[{name:`Organic`,value:i(n,e=>e.organic)},{name:`Paid`,value:i(n,e=>e.paid)},{name:`Referral`,value:i(n,e=>e.referral)},{name:`Direct`,value:i(n,e=>e.direct)}],v=[{page:`/pricing`,views:48210},{page:`/docs/quickstart`,views:39870},{page:`/blog/launch-week`,views:27430},{page:`/integrations/slack`,views:18920},{page:`/changelog`,views:12340},{page:`/careers`,views:6110}],y=E.flatMap((e,t)=>D.map((n,r)=>{let i=r>=8&&r<=18?1:.25,a=t>=5?.45:1;return{day:e,hour:n,events:Math.round(120*i*a*(.7+(t*13+r*7)%10/16))}})),b=T[T.length-1],x=`rounded-lg border bg-background p-3`;return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3`,children:[(0,g.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:a.map(t=>{let n=(t.now-t.before)/t.before;return(0,g.jsxs)(`div`,{className:x,children:[(0,g.jsxs)(`div`,{className:`text-[12px] text-muted-foreground`,children:[t.label,` · 30 days`]}),(0,g.jsxs)(`div`,{className:`mt-0.5 flex items-end justify-between gap-2`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{className:`text-lg font-semibold`,children:t.percent?e.percent(t.now):e.compact(t.now)}),(0,g.jsxs)(`div`,{className:`text-[12px] tabular-nums ${n>=0?`text-emerald-700 dark:text-emerald-400`:`text-red-700 dark:text-red-400`}`,children:[n>=0?`▲`:`▼`,` `,e.percent(Math.abs(n)),` `,(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:`vs prior`})]})]}),(0,g.jsx)(f,{label:`${t.label}, last 30 days`,values:t.series,type:`area`,width:88,height:30,formatValue:t.percent?e.percent:e.compact})]})]},t.label)})}),(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-3`,children:[(0,g.jsx)(`div`,{className:`${x} lg:col-span-2`,children:(0,g.jsx)(l,{title:`Revenue`,description:`Monthly, with the 3-month average and the plan`,data:m,x:e=>e.month,formatTick:t,formatValue:t=>`$${e.number(t)}`,series:[{key:`revenue`,label:`Revenue`,value:e=>e.revenue,type:`bar`},{key:`avg`,label:`3-month average`,value:e=>e.avg,type:`line`},{key:`target`,label:`Plan`,value:e=>e.target,type:`line`,dashed:!0,curve:`linear`}],height:240,exportFormats:[`svg`,`png`]})}),(0,g.jsx)(`div`,{className:x,children:(0,g.jsx)(d,{title:`Visitors by channel`,description:`Last 30 days`,data:_,label:e=>e.name,value:e=>e.value,formatValue:e.compact,legend:`bottom`,height:170})})]}),(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-3`,children:[(0,g.jsx)(`div`,{className:`${x} lg:col-span-2`,children:(0,g.jsx)(u,{title:`Traffic by channel`,description:`Daily visitors, stacked`,stacked:!0,data:w,x:e=>e.date,series:[{key:`organic`,label:`Organic`,value:e=>e.organic},{key:`paid`,label:`Paid`,value:e=>e.paid},{key:`referral`,label:`Referral`,value:e=>e.referral},{key:`direct`,label:`Direct`,value:e=>e.direct}],height:220})}),(0,g.jsx)(`div`,{className:x,children:(0,g.jsx)(s,{title:`Top pages`,description:`Views, last 30 days`,data:v,label:e=>e.page,value:e=>e.views,formatValue:e.compact,limit:5})})]}),(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-3`,children:[(0,g.jsx)(`div`,{className:`${x} lg:col-span-2`,children:(0,g.jsx)(p,{title:`Activity by hour`,description:`Events per hour of the week, local time`,data:y,x:e=>e.hour,y:e=>e.day,value:e=>e.events,formatX:e=>`${e}:00`,xLabelFilter:e=>Number(e)%3==0})}),(0,g.jsx)(`div`,{className:x,children:(0,g.jsx)(c,{title:`Plan reached`,description:`${b.month}, revenue against the plan`,value:Math.round(b.revenue/b.target*100),max:120,segments:[{to:90,color:`var(--dkc-8)`,label:`Behind`},{to:100,color:`var(--dkc-4)`,label:`Close`},{to:120,color:`var(--dkc-6)`,label:`Ahead`}],format:e=>`${e}%`,centerLabel:`of plan`})})]})]})}var A=`import { useMemo } from "react"
import { AreaChart, BarsList, ChartConfigProvider, ComboChart, DonutChart, GaugeChart, Heatmap, Sparkline, useChartConfig } from "@kitora/charts"

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

/** A fixed "today" so date demos do not drift between runs: a day, so a UTC midnight (the charts show it in UTC). */
const DEMO_TODAY = Date.UTC(2026, 9, 15)

function daysAgo(n: number): Date {
  return new Date(DEMO_TODAY - n * 86_400_000)
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const

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

/** A moving average over \`window\` values (shorter at the start), for a smoothed line beside raw bars. */
function movingAverage(values: readonly number[], window: number): number[] {
  return values.map((_, i) => {
    const slice = values.slice(Math.max(0, i - window + 1), i + 1)
    return Math.round(slice.reduce((s, v) => s + v, 0) / slice.length)
  })
}

const TRAFFIC = dailyTraffic(90)
const REVENUE = monthlyRevenue()
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const HOURS = Array.from({ length: 24 }, (_, h) => String(h))

/**
 * A product analytics dashboard built only from the kit: KPI tiles, a combo, stacked areas, a donut, bars and a heatmap.
 * The traffic is daily, so its dates are UTC days and the charts show them in UTC (\`timeZone="UTC"\`), the same day for
 * every reader; numbers format in the reader's locale (\`useChartConfig().formats\`).
 */
export function ChartsDashboard() {
  return (
    <ChartConfigProvider timeZone="UTC">
      <Dashboard />
    </ChartConfigProvider>
  )
}

function Dashboard() {
  const { formats } = useChartConfig()
  const money = (v: number) => \`$\${formats.compact(v)}\`
  const last30 = TRAFFIC.slice(-30)
  const prev30 = TRAFFIC.slice(-60, -30)
  const sum = (rows: typeof TRAFFIC, pick: (r: (typeof TRAFFIC)[number]) => number) => rows.reduce((s, r) => s + pick(r), 0)
  const kpis = [
    { label: "Visitors", now: sum(last30, (r) => r.visitors), before: sum(prev30, (r) => r.visitors), series: last30.map((r) => r.visitors) },
    { label: "Signups", now: sum(last30, (r) => r.signups), before: sum(prev30, (r) => r.signups), series: last30.map((r) => r.signups) },
    { label: "Conversion", now: sum(last30, (r) => r.signups) / sum(last30, (r) => r.visitors), before: sum(prev30, (r) => r.signups) / sum(prev30, (r) => r.visitors), series: last30.map((r) => r.signups / r.visitors), percent: true },
    { label: "Paid share", now: sum(last30, (r) => r.paid) / sum(last30, (r) => r.visitors), before: sum(prev30, (r) => r.paid) / sum(prev30, (r) => r.visitors), series: last30.map((r) => r.paid / r.visitors), percent: true },
  ]
  const revenue = useMemo(() => {
    const avg = movingAverage(REVENUE.map((r) => r.revenue), 3)
    return REVENUE.map((r, i) => ({ ...r, avg: avg[i] }))
  }, [])
  const channels = [
    { name: "Organic", value: sum(last30, (r) => r.organic) },
    { name: "Paid", value: sum(last30, (r) => r.paid) },
    { name: "Referral", value: sum(last30, (r) => r.referral) },
    { name: "Direct", value: sum(last30, (r) => r.direct) },
  ]
  const pages = [
    { page: "/pricing", views: 48_210 },
    { page: "/docs/quickstart", views: 39_870 },
    { page: "/blog/launch-week", views: 27_430 },
    { page: "/integrations/slack", views: 18_920 },
    { page: "/changelog", views: 12_340 },
    { page: "/careers", views: 6_110 },
  ]
  const activity = WEEKDAYS.flatMap((day, d) =>
    HOURS.map((hour, h) => {
      const work = h >= 8 && h <= 18 ? 1 : 0.25
      const weekend = d >= 5 ? 0.45 : 1
      return { day, hour, events: Math.round(120 * work * weekend * (0.7 + ((d * 13 + h * 7) % 10) / 16)) }
    }),
  )
  const latest = REVENUE[REVENUE.length - 1]
  const card = "rounded-lg border bg-background p-3"
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => {
          const change = (k.now - k.before) / k.before
          return (
            <div key={k.label} className={card}>
              <div className="text-[12px] text-muted-foreground">{k.label} · 30 days</div>
              <div className="mt-0.5 flex items-end justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">{k.percent ? formats.percent(k.now) : formats.compact(k.now)}</div>
                  <div className={\`text-[12px] tabular-nums \${change >= 0 ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400"}\`}>
                    {change >= 0 ? "▲" : "▼"} {formats.percent(Math.abs(change))} <span className="text-muted-foreground">vs prior</span>
                  </div>
                </div>
                <Sparkline label={\`\${k.label}, last 30 days\`} values={k.series} type="area" width={88} height={30} formatValue={k.percent ? formats.percent : formats.compact} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className={\`\${card} lg:col-span-2\`}>
          <ComboChart
            title="Revenue"
            description="Monthly, with the 3-month average and the plan"
            data={revenue}
            x={(d) => d.month}
            formatTick={money}
            formatValue={(v) => \`$\${formats.number(v)}\`}
            series={[
              { key: "revenue", label: "Revenue", value: (d) => d.revenue, type: "bar" },
              { key: "avg", label: "3-month average", value: (d) => d.avg, type: "line" },
              { key: "target", label: "Plan", value: (d) => d.target, type: "line", dashed: true, curve: "linear" },
            ]}
            height={240}
            exportFormats={["svg", "png"]}
          />
        </div>
        <div className={card}>
          <DonutChart title="Visitors by channel" description="Last 30 days" data={channels} label={(d) => d.name} value={(d) => d.value} formatValue={formats.compact} legend="bottom" height={170} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className={\`\${card} lg:col-span-2\`}>
          <AreaChart
            title="Traffic by channel"
            description="Daily visitors, stacked"
            stacked
            data={TRAFFIC}
            x={(d) => d.date}
            series={[
              { key: "organic", label: "Organic", value: (d) => d.organic },
              { key: "paid", label: "Paid", value: (d) => d.paid },
              { key: "referral", label: "Referral", value: (d) => d.referral },
              { key: "direct", label: "Direct", value: (d) => d.direct },
            ]}
            height={220}
          />
        </div>
        <div className={card}>
          <BarsList title="Top pages" description="Views, last 30 days" data={pages} label={(d) => d.page} value={(d) => d.views} formatValue={formats.compact} limit={5} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className={\`\${card} lg:col-span-2\`}>
          <Heatmap title="Activity by hour" description="Events per hour of the week, local time" data={activity} x={(d) => d.hour} y={(d) => d.day} value={(d) => d.events} formatX={(h) => \`\${h}:00\`} xLabelFilter={(h) => Number(h) % 3 === 0} />
        </div>
        <div className={card}>
          <GaugeChart
            title="Plan reached"
            description={\`\${latest.month}, revenue against the plan\`}
            value={Math.round((latest.revenue / latest.target) * 100)}
            max={120}
            segments={[
              { to: 90, color: "var(--dkc-8)", label: "Behind" },
              { to: 100, color: "var(--dkc-4)", label: "Close" },
              { to: 120, color: "var(--dkc-6)", label: "Ahead" },
            ]}
            format={(v) => \`\${v}%\`}
            centerLabel="of plan"
          />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./dashboard-CMlhfnfT.js`),[]));var j=[{name:`core`,what:`@kitora/charts/core. Scales and ticks, line / area / bar / arc paths, pie layout, the shared arc (arcGeometry, also drawn by the feedback kit's rings), stacking, regression, keyboard steps, the cartesian and polar engines, the gauge, funnel and bars-list maths (models and layouts as pure data), and the adapters: ChartFormats (createIntlFormats), ChartPalette (createPalette), TextMeasure. No DOM, no React.`},{name:`dom`,what:`@kitora/charts/dom. observeWidth (ResizeObserver), localPoint (pointer to plot pixels), elementDirection, and export to SVG and PNG (exportChartSvg, exportChartPng, downloadBlob). No React.`},{name:`react`,what:`@kitora/charts/react. Headless: ChartConfigProvider for the adapters, useControllableState, useWidth, useSeriesVisibility, useActiveIndex, useCartesianChart and useCartesianPlot, usePolarChart and usePolarPlot. No styling.`},{name:`ui`,what:`@kitora/charts/ui. Chart.* frame parts (with Chart.Export) and ChartFrame; Cartesian.* plot parts and CartesianChart with LineChart, AreaChart, BarChart, ComboChart; Polar.* parts with RadarChart and RadialBarChart; GaugeChart; FunnelChart; BarsList; PieChart and DonutChart; ScatterChart; Sparkline; Heatmap; Legend, TooltipBox, ChartDataTable, ChartStyles.`}];function M(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Charts kit`,children:`Every chart below reads the same way: hover for a crosshair and tooltip, Tab to a plot and use the arrow keys, click a legend entry to hide a series, press Table for the numbers. Switch the site to dark mode and the palette steps over to its dark values. In right-to-left text the frame around the plot (header, actions, legend, table) mirrors; the plot keeps its x axis running left to right.`}),(0,g.jsx)(m,{n:1,title:`A product analytics dashboard`,blurb:`KPI tiles with sparklines, revenue bars with a moving average and the plan (downloadable as SVG or PNG), a channel donut, stacked daily traffic, top pages as a ranked bars list, an hour-of-week heatmap and a gauge of the plan reached.`,code:A,children:(0,g.jsx)(O,{})}),(0,g.jsx)(m,{n:2,title:`Layers`,blurb:`What the package is made of.`,children:(0,g.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,g.jsx)(`tbody`,{children:j.map(e=>(0,g.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,g.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,g.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{M as component};