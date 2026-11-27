import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{r as a}from"./polar-BWAC29-i.js";import{t as o}from"./gauge-QGjIwiTH.js";import{t as s}from"./frame-C638nGqD.js";import{n as c,t as l}from"./polar-DRuai55-.js";import{t as u}from"./radar-nTVbaA5u.js";import{t as d}from"./radial-bar-B_pPnf1T.js";import{n as f}from"./meter-BbQwNtF4.js";import"./kit-gallery-BBavj2rC.js";import{t as p}from"./example-B67lLz1F.js";var m=e(r(),1),h=i(),g=[{to:60,color:`var(--dkc-6)`,label:`Healthy`},{to:85,color:`var(--dkc-4)`,label:`Busy`},{to:100,color:`var(--dkc-8)`,label:`Critical`}];function _(){let[e,t]=(0,m.useState)(72);return(0,h.jsxs)(`div`,{className:`grid gap-3`,children:[(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,h.jsx)(o,{title:`Uptime this month`,value:99.2,min:95,max:100,format:e=>`${e}%`,centerLabel:`target 99.5%`}),(0,h.jsx)(o,{title:`CPU load`,value:e,segments:g,format:e=>`${e}%`,centerLabel:`of 100%`})]}),(0,h.jsx)(`div`,{className:`flex flex-wrap items-center justify-end gap-2 text-[13px]`,children:[24,72,93].map(n=>(0,h.jsxs)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`h-8 rounded-md border px-2.5 hover:bg-accent aria-pressed:bg-accent aria-pressed:font-medium`,children:[`CPU `,n,`%`]},n))})]})}var v=`import { useState } from "react"
import { GaugeChart } from "@kitora/charts"

const BANDS = [
  { to: 60, color: "var(--dkc-6)", label: "Healthy" },
  { to: 85, color: "var(--dkc-4)", label: "Busy" },
  { to: 100, color: "var(--dkc-8)", label: "Critical" },
]

/** A plain gauge and one with coloured bands; the arc takes the colour of the band it ends in, and moves when the value changes. */
export function BasicGauge() {
  const [cpu, setCpu] = useState(72)
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <GaugeChart title="Uptime this month" value={99.2} min={95} max={100} format={(v) => \`\${v}%\`} centerLabel="target 99.5%" />
        <GaugeChart title="CPU load" value={cpu} segments={BANDS} format={(v) => \`\${v}%\`} centerLabel="of 100%" />
      </div>
      <div className="flex flex-wrap items-center justify-end gap-2 text-[13px]">
        {[24, 72, 93].map((v) => (
          <button key={v} type="button" aria-pressed={cpu === v} onClick={() => setCpu(v)} className="h-8 rounded-md border px-2.5 hover:bg-accent aria-pressed:bg-accent aria-pressed:font-medium">
            CPU {v}%
          </button>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>n(()=>import(`./gauge-DSn0WcEJ.js`),[]));var y=96,b=9,x=64;function S(){return(0,h.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-10`,children:[(0,h.jsx)(`div`,{className:`w-40`,children:(0,h.jsx)(o,{title:`GaugeChart`,value:x,startAngle:0,endAngle:360,size:y,thickness:b,format:e=>`${e}%`,tableToggle:!1})}),(0,h.jsxs)(`div`,{className:`grid w-40 justify-items-center gap-2`,children:[(0,h.jsx)(`div`,{className:`text-[13px] font-medium leading-7`,children:`Meter.Ring`}),(0,h.jsx)(f.Root,{value:x,"aria-label":`Meter.Ring`,className:`w-auto justify-items-center`,children:(0,h.jsx)(f.Ring,{size:y,thickness:b,showValue:!0})})]})]})}var C=`import { GaugeChart } from "@kitora/charts"
import { Meter } from "@kitora/feedback"

const SIZE = 96
const THICKNESS = 9
const VALUE = 64

/**
 * A full-sweep \`GaugeChart\` beside the feedback kit's \`Meter.Ring\` at the same size, thickness and value: both draw the
 * charts kit's one arc (\`arcGeometry\`), so the radius, the round caps and the painted length are the same.
 */
export function GaugeBesideMeterRing() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-10">
      <div className="w-40">
        <GaugeChart title="GaugeChart" value={VALUE} startAngle={0} endAngle={360} size={SIZE} thickness={THICKNESS} format={(v) => \`\${v}%\`} tableToggle={false} />
      </div>
      <div className="grid w-40 justify-items-center gap-2">
        <div className="text-[13px] font-medium leading-7">Meter.Ring</div>
        <Meter.Root value={VALUE} aria-label="Meter.Ring" className="w-auto justify-items-center">
          <Meter.Ring size={SIZE} thickness={THICKNESS} showValue />
        </Meter.Root>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>n(()=>import(`./gauge-meter-ring-DLF_tsVY.js`),[]));var w=[{metric:`Battery`,aster:8,bryce:6,cobalt:9},{metric:`Display`,aster:7,bryce:9,cobalt:6},{metric:`Speed`,aster:9,bryce:7,cobalt:5},{metric:`Weight`,aster:5,bryce:8,cobalt:7},{metric:`Keyboard`,aster:6,bryce:7,cobalt:8},{metric:`Price`,aster:4,bryce:6,cobalt:9}],T=[{key:`aster`,label:`Aster 14`,value:e=>e.aster},{key:`bryce`,label:`Bryce Pro`,value:e=>e.bryce},{key:`cobalt`,label:`Cobalt Air`,value:e=>e.cobalt}];function E(){return(0,h.jsx)(u,{title:`Laptop review scores`,description:`Out of 10, from a made-up review panel`,data:w,axis:e=>e.metric,series:T,domain:[0,10],rings:5})}var D=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Score {
  readonly metric: string
  readonly aster: number
  readonly bryce: number
  readonly cobalt: number
}

// Three made-up laptops scored 0 to 10 on six axes.
const SCORES: readonly Score[] = [
  { metric: "Battery", aster: 8, bryce: 6, cobalt: 9 },
  { metric: "Display", aster: 7, bryce: 9, cobalt: 6 },
  { metric: "Speed", aster: 9, bryce: 7, cobalt: 5 },
  { metric: "Weight", aster: 5, bryce: 8, cobalt: 7 },
  { metric: "Keyboard", aster: 6, bryce: 7, cobalt: 8 },
  { metric: "Price", aster: 4, bryce: 6, cobalt: 9 },
]

// Module-level series keep the model stable between renders.
const SERIES: readonly ChartSeries<Score>[] = [
  { key: "aster", label: "Aster 14", value: (d) => d.aster },
  { key: "bryce", label: "Bryce Pro", value: (d) => d.bryce },
  { key: "cobalt", label: "Cobalt Air", value: (d) => d.cobalt },
]

/** Three series on six axes. Hover near a spoke (or focus the plot and use the arrow keys) to read every laptop on it; the legend hides one. */
export function BasicRadar() {
  return <RadarChart title="Laptop review scores" description="Out of 10, from a made-up review panel" data={SCORES} axis={(d) => d.metric} series={SERIES} domain={[0, 10]} rings={5} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./radar-D8nXXNLq.js`),[]));var O={title:`Customer satisfaction by area (composed)`,data:[{area:`Support`,thisYear:82,lastYear:74},{area:`Onboarding`,thisYear:68,lastYear:71},{area:`Docs`,thisYear:77,lastYear:60},{area:`Pricing`,thisYear:55,lastYear:58},{area:`Reliability`,thisYear:91,lastYear:86}],axis:e=>e.area,domain:[0,100],formatValue:e=>`${e}%`,series:[{key:`thisYear`,label:`This year`,value:e=>e.thisYear},{key:`lastYear`,label:`Last year`,value:e=>e.lastYear}]};function k(){let e=c(O);return(0,h.jsxs)(s.Root,{title:O.title,summary:e.model.summary,table:e.model.table,children:[(0,h.jsxs)(s.Header,{children:[(0,h.jsx)(s.Title,{}),(0,h.jsx)(s.Actions,{children:(0,h.jsx)(s.TableToggle,{})})]}),(0,h.jsx)(s.Plot,{height:260,children:t=>(0,h.jsxs)(l.Root,{chart:e,layout:a(e.model,{width:t,height:260,shape:`circle`,rings:4},e.adapters),label:O.title,children:[(0,h.jsxs)(l.Surface,{children:[(0,h.jsx)(l.Grid,{}),(0,h.jsx)(l.Radar,{fillOpacity:.12}),(0,h.jsx)(l.ActivePoints,{}),(0,h.jsx)(l.AngleAxis,{})]}),(0,h.jsx)(l.Tooltip,{render:e=>(0,h.jsxs)(`div`,{"data-testid":`composed-radar-tooltip`,children:[(0,h.jsx)(`div`,{className:`font-medium`,children:e.title}),e.rows.map(e=>(0,h.jsxs)(`div`,{className:`tabular-nums`,children:[e.label,`: `,(0,h.jsx)(`b`,{children:e.value})]},e.key))]})}),(0,h.jsx)(l.Announcer,{})]})}),(0,h.jsx)(s.Legend,{className:`mt-2`,items:e.model.legendItems,onToggle:e.toggle}),(0,h.jsx)(s.ScreenReaderTable,{})]})}var A=`import { Chart, layoutPolar, Polar, usePolarChart, type PolarOptions } from "@kitora/charts"

interface Row {
  readonly area: string
  readonly thisYear: number
  readonly lastYear: number
}

const DATA: readonly Row[] = [
  { area: "Support", thisYear: 82, lastYear: 74 },
  { area: "Onboarding", thisYear: 68, lastYear: 71 },
  { area: "Docs", thisYear: 77, lastYear: 60 },
  { area: "Pricing", thisYear: 55, lastYear: 58 },
  { area: "Reliability", thisYear: 91, lastYear: 86 },
]

// Module-level options keep \`axis\` and \`series\` stable, so the model is built once.
const OPTIONS: PolarOptions<Row> = {
  title: "Customer satisfaction by area (composed)",
  data: DATA,
  axis: (d) => d.area,
  domain: [0, 100],
  formatValue: (v) => \`\${v}%\`,
  series: [
    { key: "thisYear", label: "This year", value: (d) => d.thisYear },
    { key: "lastYear", label: "Last year", value: (d) => d.lastYear },
  ],
}

/** A radar rebuilt from the \`Chart.*\` and \`Polar.*\` parts: circle rings, the legend under the plot, no radius labels and a custom tooltip. */
export function ComposedRadar() {
  const chart = usePolarChart(OPTIONS)
  return (
    <Chart.Root title={OPTIONS.title} summary={chart.model.summary} table={chart.model.table}>
      <Chart.Header>
        <Chart.Title />
        <Chart.Actions>
          <Chart.TableToggle />
        </Chart.Actions>
      </Chart.Header>
      <Chart.Plot height={260}>
        {(width) => (
          <Polar.Root chart={chart} layout={layoutPolar(chart.model, { width, height: 260, shape: "circle", rings: 4 }, chart.adapters)} label={OPTIONS.title}>
            <Polar.Surface>
              <Polar.Grid />
              <Polar.Radar fillOpacity={0.12} />
              <Polar.ActivePoints />
              <Polar.AngleAxis />
            </Polar.Surface>
            <Polar.Tooltip
              render={(readout) => (
                <div data-testid="composed-radar-tooltip">
                  <div className="font-medium">{readout.title}</div>
                  {readout.rows.map((row) => (
                    <div key={row.key} className="tabular-nums">
                      {row.label}: <b>{row.value}</b>
                    </div>
                  ))}
                </div>
              )}
            />
            <Polar.Announcer />
          </Polar.Root>
        )}
      </Chart.Plot>
      <Chart.Legend className="mt-2" items={chart.model.legendItems} onToggle={chart.toggle} />
      <Chart.ScreenReaderTable />
    </Chart.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>n(()=>import(`./radar-compose-D9hHsowy.js`),[]));var j=[{skill:`TypeScript`,level:4,target:4},{skill:`Testing`,level:3,target:4},{skill:`Accessibility`,level:2,target:3},{skill:`Performance`,level:3,target:3},{skill:`Mentoring`,level:null,target:3},{skill:`System design`,level:2,target:4},{skill:`Writing`,level:4,target:3}],M=[{key:`level`,label:`Level`,value:e=>e.level}],N=[{key:`level`,label:`Level`,value:e=>e.level},{key:`target`,label:`Target`,value:e=>e.target,color:`var(--dkc-muted)`}];function P(){return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,h.jsx)(u,{title:`Skills: circle grid`,data:j,axis:e=>e.skill,series:M,domain:[0,5],rings:5,shape:`circle`,stripes:!0,dots:!0,height:260}),(0,h.jsx)(u,{title:`Skills against the target`,data:j,axis:e=>e.skill,series:N,domain:[0,5],rings:5,fill:!1,dots:!0,legend:`bottom`,height:260})]})}var F=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Skill {
  readonly skill: string
  readonly level: number | null
  readonly target: number
}

// A made-up engineer's self-review; "Mentoring" has no score yet, so it is drawn at the centre and read as missing.
const SKILLS: readonly Skill[] = [
  { skill: "TypeScript", level: 4, target: 4 },
  { skill: "Testing", level: 3, target: 4 },
  { skill: "Accessibility", level: 2, target: 3 },
  { skill: "Performance", level: 3, target: 3 },
  { skill: "Mentoring", level: null, target: 3 },
  { skill: "System design", level: 2, target: 4 },
  { skill: "Writing", level: 4, target: 3 },
]

const LEVEL: readonly ChartSeries<Skill>[] = [{ key: "level", label: "Level", value: (d) => d.level }]
const VERSUS: readonly ChartSeries<Skill>[] = [
  { key: "level", label: "Level", value: (d) => d.level },
  { key: "target", label: "Target", value: (d) => d.target, color: "var(--dkc-muted)" },
]

/** \`shape="circle"\` with \`stripes\` and \`dots\` on one series, then an outline-only comparison (\`fill={false}\`) with the legend under it. */
export function RadarOptions() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <RadarChart title="Skills: circle grid" data={SKILLS} axis={(d) => d.skill} series={LEVEL} domain={[0, 5]} rings={5} shape="circle" stripes dots height={260} />
      <RadarChart title="Skills against the target" data={SKILLS} axis={(d) => d.skill} series={VERSUS} domain={[0, 5]} rings={5} fill={false} dots legend="bottom" height={260} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>n(()=>import(`./radar-options-MOEhQNic.js`),[]));var I=[{goal:`New signups`,done:86},{goal:`Activation`,done:64},{goal:`Upgrades`,done:41},{goal:`Referrals`,done:23}];function L(){return(0,h.jsx)(d,{title:`Quarterly goals`,description:`Percent of each goal reached`,data:I,label:e=>e.goal,value:e=>e.done,max:100,formatValue:e=>`${e}%`})}var R=`import { RadialBarChart } from "@kitora/charts"

interface Goal {
  readonly goal: string
  readonly done: number
}

// Progress towards four made-up quarterly goals, in percent; the first row is the outermost ring.
const GOALS: readonly Goal[] = [
  { goal: "New signups", done: 86 },
  { goal: "Activation", done: 64 },
  { goal: "Upgrades", done: 41 },
  { goal: "Referrals", done: 23 },
]

/** Bars against a goal of 100 over faint tracks, in input order. Hover a ring or use the arrow keys to read one. */
export function BasicRadialBar() {
  return <RadialBarChart title="Quarterly goals" description="Percent of each goal reached" data={GOALS} label={(d) => d.goal} value={(d) => d.done} max={100} formatValue={(v) => \`\${v}%\`} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>n(()=>import(`./radial-bar-DMapnz4Y.js`),[]));var z=[{kind:`Video`,gb:212},{kind:`Photos`,gb:148},{kind:`Apps`,gb:96},{kind:`Documents`,gb:41},{kind:`Music`,gb:27}],B=e=>`${e} GB`;function V(){return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,h.jsx)(d,{title:`Storage by kind`,data:z,label:e=>e.kind,value:e=>e.gb,sort:!0,startAngle:-135,endAngle:135,formatValue:B,height:240}),(0,h.jsx)(d,{title:`Storage, legend instead of labels`,data:z,label:e=>e.kind,value:e=>e.gb,max:512,labels:!1,track:!1,barSize:12,gap:6,formatValue:B,height:240})]})}var H=`import { RadialBarChart } from "@kitora/charts"

interface Kind {
  readonly kind: string
  readonly gb: number
}

const STORAGE: readonly Kind[] = [
  { kind: "Video", gb: 212 },
  { kind: "Photos", gb: 148 },
  { kind: "Apps", gb: 96 },
  { kind: "Documents", gb: 41 },
  { kind: "Music", gb: 27 },
]

const gb = (v: number) => \`\${v} GB\`

/** \`sort\` (largest first, scaled to the largest), a symmetric \`startAngle\` / \`endAngle\` sweep, then no labels so the legend lists each bar, with a fixed \`barSize\` and no \`track\`. */
export function RadialBarOptions() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <RadialBarChart title="Storage by kind" data={STORAGE} label={(d) => d.kind} value={(d) => d.gb} sort startAngle={-135} endAngle={135} formatValue={gb} height={240} />
      <RadialBarChart title="Storage, legend instead of labels" data={STORAGE} label={(d) => d.kind} value={(d) => d.gb} max={512} labels={false} track={false} barSize={12} gap={6} formatValue={gb} height={240} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>n(()=>import(`./radial-bar-options-C8kje9CW.js`),[]));function U(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Basics: polar charts`,children:`Charts drawn around a centre: a radar compares several metrics across series, a radial bar chart compares values against one full sweep, a gauge shows one value on a dial. The plot reads clockwise from 12 o'clock in either text direction; the legend, table and header follow the page.`}),(0,h.jsx)(p,{n:1,title:`Radar`,blurb:"One row per axis (`axis`), one closed shape per series. Hover near a spoke, or focus the plot and use the arrow keys, to read every series on it; the legend toggles a series.",code:D,children:(0,h.jsx)(E,{})}),(0,h.jsx)(p,{n:2,title:`Radar options`,blurb:"`shape` polygon or circle, `rings`, `stripes`, `dots`, `fill`, a fixed `domain`. A missing value sits at the centre and reads as missing.",code:F,children:(0,h.jsx)(P,{})}),(0,h.jsx)(p,{n:3,title:`Radar from the parts`,blurb:"`usePolarChart`, `layoutPolar` and the `Polar.*` parts inside the `Chart.*` frame: circle rings, no radius labels, the legend under the plot and a custom tooltip.",code:A,children:(0,h.jsx)(k,{})}),(0,h.jsx)(p,{n:4,title:`Radial bar`,blurb:"One ring per row against a full sweep (`max`, here a goal of 100), over faint tracks; 0° to 270° by default so lengths stay comparable. Hover a ring or use the arrow keys.",code:R,children:(0,h.jsx)(L,{})}),(0,h.jsx)(p,{n:5,title:`Radial bar options`,blurb:"`sort`, `startAngle` / `endAngle` in degrees, `labels={false}` with the legend, `track={false}`, `barSize` and `gap`.",code:H,children:(0,h.jsx)(V,{})}),(0,h.jsx)(p,{n:6,title:`Gauge`,blurb:'One `value` between `min` and `max` on a 240° dial; `segments` colour the track and the arc takes the band it ends in. The root is a meter (`role="meter"`), not a tab stop. Press a CPU button to animate it.',code:v,children:(0,h.jsx)(_,{})}),(0,h.jsx)(p,{n:7,title:`Gauge and Meter.Ring`,blurb:"A full-sweep gauge beside the feedback kit's `Meter.Ring` at the same size, thickness and value: one arc drawing (`arcGeometry`) behind both.",code:C,children:(0,h.jsx)(S,{})})]})}export{U as component};