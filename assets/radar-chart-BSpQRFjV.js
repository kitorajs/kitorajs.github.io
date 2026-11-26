import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{t as a}from"./badge-CMT8Lr82.js";import{a as o,n as s,o as c,r as l,t as u}from"./card-AZ_23TG_.js";import{t as d}from"./radar-BweOxmfN.js";import{t as f}from"./separator-CJFdFqN7.js";var p=e({RadarChartCompose:()=>_}),m=i(),h=[{area:`Problem solving`,score:4},{area:`Communication`,score:5},{area:`Code quality`,score:3},{area:`Collaboration`,score:4},{area:`Ownership`,score:5}],g=[{key:`score`,label:`Panel average`,value:e=>e.score}];function _(){let e=h.filter(e=>e.score>=5);return(0,m.jsxs)(u,{className:`w-full max-w-md`,children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(c,{children:`Candidate scorecard`}),(0,m.jsx)(l,{children:`Panel average out of 5 for a made-up candidate.`})]}),(0,m.jsxs)(s,{className:`grid gap-4`,children:[(0,m.jsx)(d,{title:`Interview areas`,hideTitle:!0,data:h,axis:e=>e.area,series:g,domain:[0,5],rings:5,dots:!0,height:240}),(0,m.jsx)(f,{}),(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`Strengths`}),e.map(e=>(0,m.jsx)(a,{variant:`secondary`,children:e.area},e.area))]})]})]})}var v=e({RadarChartControlled:()=>S}),y=t(n(),1),b=[{skill:`Frontend`,ana:5,ben:3,cleo:4},{skill:`Backend`,ana:2,ben:5,cleo:3},{skill:`Design`,ana:4,ben:1,cleo:5},{skill:`Testing`,ana:3,ben:4,cleo:3},{skill:`Ops`,ana:1,ben:4,cleo:2}],x=[{key:`ana`,label:`Ana`,value:e=>e.ana},{key:`ben`,label:`Ben`,value:e=>e.ben},{key:`cleo`,label:`Cleo`,value:e=>e.cleo}];function S(){let[e,t]=(0,y.useState)(0),[n,r]=(0,y.useState)(()=>new Set([`cleo`]));return(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,role:`group`,"aria-label":`Highlight a skill`,children:[b.map((n,r)=>(0,m.jsx)(`button`,{type:`button`,"aria-pressed":e===r,onClick:()=>t(e===r?null:r),className:`h-8 rounded-md border px-2.5 hover:bg-accent aria-pressed:bg-accent aria-pressed:font-medium`,children:n.skill},n.skill)),(0,m.jsxs)(`span`,{className:`ms-auto text-muted-foreground`,children:[`Hidden: `,n.size?[...n].join(`, `):`none`]})]}),(0,m.jsx)(d,{title:`Team skills`,data:b,axis:e=>e.skill,series:x,domain:[0,5],rings:5,activeIndex:e,onActiveIndexChange:t,hidden:n,onHiddenChange:r})]})}var C=e({RadarChartDefault:()=>E}),w=[{metric:`Speed`,north:7,south:5},{metric:`Range`,north:4,south:8},{metric:`Comfort`,north:6,south:6},{metric:`Safety`,north:9,south:7},{metric:`Price`,north:5,south:8}],T=[{key:`north`,label:`North Coupe`,value:e=>e.north},{key:`south`,label:`South Wagon`,value:e=>e.south}];function E(){return(0,m.jsx)(d,{title:`Car test scores`,data:w,axis:e=>e.metric,series:T,domain:[0,10]})}var D=e({RadarChartExport:()=>A}),O=[{axis:`Delivery`,team:8},{axis:`Quality`,team:6},{axis:`Morale`,team:7},{axis:`Learning`,team:5},{axis:`Support`,team:9}],k=[{key:`team`,label:`Team`,value:e=>e.team}];function A(){return(0,m.jsx)(d,{title:`Team health check`,data:O,axis:e=>e.axis,series:k,domain:[0,10],exportFormats:[`svg`,`png`]})}var j=e({RadarChartGrid:()=>P}),M=[{stat:`Attack`,value:72},{stat:`Defence`,value:55},{stat:`Speed`,value:88},{stat:`Stamina`,value:64},{stat:`Magic`,value:40},{stat:`Luck`,value:70}],N=[{key:`value`,label:`Hero`,value:e=>e.value}];function P(){return(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,m.jsx)(d,{title:`Polygon grid, 4 rings`,data:M,axis:e=>e.stat,series:N,domain:[0,100],rings:4,height:240}),(0,m.jsx)(d,{title:`Circle grid with stripes`,data:M,axis:e=>e.stat,series:N,domain:[0,100],rings:5,shape:`circle`,stripes:!0,height:240})]})}var F=e({RadarChartMarks:()=>R}),I=[{sense:`Body`,espresso:9,filter:4},{sense:`Acidity`,espresso:5,filter:8},{sense:`Sweetness`,espresso:6,filter:6},{sense:`Bitterness`,espresso:8,filter:3},{sense:`Aroma`,espresso:7,filter:9}],L=[{key:`espresso`,label:`Espresso`,value:e=>e.espresso},{key:`filter`,label:`Filter`,value:e=>e.filter,color:`var(--dkc-5)`}];function R(){return(0,m.jsx)(d,{title:`Tasting notes`,data:I,axis:e=>e.sense,series:L,domain:[0,10],fill:!1,dots:!0,legend:`bottom`})}var z=e({RadarChartMissing:()=>H}),B=[{week:`Week 1`,score:72},{week:`Week 2`,score:68},{week:`Week 3`,score:75},{week:`Week 4`,score:null},{week:`Week 5`,score:81},{week:`Week 6`,score:79}],V=[{key:`score`,label:`Team pulse`,value:e=>e.score}];function H(){return(0,m.jsx)(d,{title:`Team pulse survey`,data:B,axis:e=>e.week,series:V,domain:[0,100],dots:!0,defaultActiveIndex:3})}var U=`import { RadarChart, type ChartSeries } from "@kitora/charts"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Separator } from "@kitora/ui/separator"

interface Row {
  readonly area: string
  readonly score: number
}

const INTERVIEW: readonly Row[] = [
  { area: "Problem solving", score: 4 },
  { area: "Communication", score: 5 },
  { area: "Code quality", score: 3 },
  { area: "Collaboration", score: 4 },
  { area: "Ownership", score: 5 },
]

const SERIES: readonly ChartSeries<Row>[] = [{ key: "score", label: "Panel average", value: (d) => d.score }]

export function RadarChartCompose() {
  const strengths = INTERVIEW.filter((r) => r.score >= 5)
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Candidate scorecard</CardTitle>
        <CardDescription>Panel average out of 5 for a made-up candidate.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <RadarChart title="Interview areas" hideTitle data={INTERVIEW} axis={(d) => d.area} series={SERIES} domain={[0, 5]} rings={5} dots height={240} />
        <Separator />
        <div className="flex flex-wrap items-center gap-2 text-[13px]">
          <span className="text-muted-foreground">Strengths</span>
          {strengths.map((r) => (
            <Badge key={r.area} variant="secondary">
              {r.area}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>r(()=>import(`./compose-D_xxtnMW.js`),[]));var W=`import { useState } from "react"
import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Row {
  readonly skill: string
  readonly ana: number
  readonly ben: number
  readonly cleo: number
}

const TEAM: readonly Row[] = [
  { skill: "Frontend", ana: 5, ben: 3, cleo: 4 },
  { skill: "Backend", ana: 2, ben: 5, cleo: 3 },
  { skill: "Design", ana: 4, ben: 1, cleo: 5 },
  { skill: "Testing", ana: 3, ben: 4, cleo: 3 },
  { skill: "Ops", ana: 1, ben: 4, cleo: 2 },
]

const SERIES: readonly ChartSeries<Row>[] = [
  { key: "ana", label: "Ana", value: (d) => d.ana },
  { key: "ben", label: "Ben", value: (d) => d.ben },
  { key: "cleo", label: "Cleo", value: (d) => d.cleo },
]

export function RadarChartControlled() {
  const [active, setActive] = useState<number | null>(0)
  const [hidden, setHidden] = useState<ReadonlySet<string>>(() => new Set(["cleo"]))
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2 text-[13px]" role="group" aria-label="Highlight a skill">
        {TEAM.map((row, i) => (
          <button key={row.skill} type="button" aria-pressed={active === i} onClick={() => setActive(active === i ? null : i)} className="h-8 rounded-md border px-2.5 hover:bg-accent aria-pressed:bg-accent aria-pressed:font-medium">
            {row.skill}
          </button>
        ))}
        <span className="ms-auto text-muted-foreground">Hidden: {hidden.size ? [...hidden].join(", ") : "none"}</span>
      </div>
      <RadarChart title="Team skills" data={TEAM} axis={(d) => d.skill} series={SERIES} domain={[0, 5]} rings={5} activeIndex={active} onActiveIndexChange={setActive} hidden={hidden} onHiddenChange={setHidden} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./controlled-Dnodv6Tk.js`),[]));var G=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Score {
  readonly metric: string
  readonly north: number
  readonly south: number
}

const SCORES: readonly Score[] = [
  { metric: "Speed", north: 7, south: 5 },
  { metric: "Range", north: 4, south: 8 },
  { metric: "Comfort", north: 6, south: 6 },
  { metric: "Safety", north: 9, south: 7 },
  { metric: "Price", north: 5, south: 8 },
]

const SERIES: readonly ChartSeries<Score>[] = [
  { key: "north", label: "North Coupe", value: (d) => d.north },
  { key: "south", label: "South Wagon", value: (d) => d.south },
]

export function RadarChartDefault() {
  return <RadarChart title="Car test scores" data={SCORES} axis={(d) => d.metric} series={SERIES} domain={[0, 10]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>r(()=>import(`./default-ah752MG-.js`),[]));var K=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Row {
  readonly axis: string
  readonly team: number
}

const HEALTH: readonly Row[] = [
  { axis: "Delivery", team: 8 },
  { axis: "Quality", team: 6 },
  { axis: "Morale", team: 7 },
  { axis: "Learning", team: 5 },
  { axis: "Support", team: 9 },
]

const SERIES: readonly ChartSeries<Row>[] = [{ key: "team", label: "Team", value: (d) => d.team }]

export function RadarChartExport() {
  return <RadarChart title="Team health check" data={HEALTH} axis={(d) => d.axis} series={SERIES} domain={[0, 10]} exportFormats={["svg", "png"]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./export-CDuLg1mY.js`),[]));var q=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Stat {
  readonly stat: string
  readonly value: number
}

const STATS: readonly Stat[] = [
  { stat: "Attack", value: 72 },
  { stat: "Defence", value: 55 },
  { stat: "Speed", value: 88 },
  { stat: "Stamina", value: 64 },
  { stat: "Magic", value: 40 },
  { stat: "Luck", value: 70 },
]

const SERIES: readonly ChartSeries<Stat>[] = [{ key: "value", label: "Hero", value: (d) => d.value }]

export function RadarChartGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <RadarChart title="Polygon grid, 4 rings" data={STATS} axis={(d) => d.stat} series={SERIES} domain={[0, 100]} rings={4} height={240} />
      <RadarChart title="Circle grid with stripes" data={STATS} axis={(d) => d.stat} series={SERIES} domain={[0, 100]} rings={5} shape="circle" stripes height={240} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>r(()=>import(`./grid-DOpn_SJa.js`),[]));var J=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Row {
  readonly sense: string
  readonly espresso: number
  readonly filter: number
}

const TASTING: readonly Row[] = [
  { sense: "Body", espresso: 9, filter: 4 },
  { sense: "Acidity", espresso: 5, filter: 8 },
  { sense: "Sweetness", espresso: 6, filter: 6 },
  { sense: "Bitterness", espresso: 8, filter: 3 },
  { sense: "Aroma", espresso: 7, filter: 9 },
]

const SERIES: readonly ChartSeries<Row>[] = [
  { key: "espresso", label: "Espresso", value: (d) => d.espresso },
  { key: "filter", label: "Filter", value: (d) => d.filter, color: "var(--dkc-5)" },
]

export function RadarChartMarks() {
  return <RadarChart title="Tasting notes" data={TASTING} axis={(d) => d.sense} series={SERIES} domain={[0, 10]} fill={false} dots legend="bottom" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./marks-7BWZryH9.js`),[]));var Y=`import { RadarChart, type ChartSeries } from "@kitora/charts"

interface Row {
  readonly week: string
  readonly score: number | null
}

// No survey ran in week 4, so its value is null.
const PULSE: readonly Row[] = [
  { week: "Week 1", score: 72 },
  { week: "Week 2", score: 68 },
  { week: "Week 3", score: 75 },
  { week: "Week 4", score: null },
  { week: "Week 5", score: 81 },
  { week: "Week 6", score: 79 },
]

const SERIES: readonly ChartSeries<Row>[] = [{ key: "score", label: "Team pulse", value: (d) => d.score }]

export function RadarChartMissing() {
  return <RadarChart title="Team pulse survey" data={PULSE} axis={(d) => d.week} series={SERIES} domain={[0, 100]} dots defaultActiveIndex={3} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>r(()=>import(`./missing-DhQ83C1c.js`),[]));var X={"./demos/radar-chart/compose.tsx":p,"./demos/radar-chart/controlled.tsx":v,"./demos/radar-chart/default.tsx":C,"./demos/radar-chart/export.tsx":D,"./demos/radar-chart/grid.tsx":j,"./demos/radar-chart/marks.tsx":F,"./demos/radar-chart/missing.tsx":z},Z={"./demos/radar-chart/compose.tsx":U,"./demos/radar-chart/controlled.tsx":W,"./demos/radar-chart/default.tsx":G,"./demos/radar-chart/export.tsx":K,"./demos/radar-chart/grid.tsx":q,"./demos/radar-chart/marks.tsx":J,"./demos/radar-chart/missing.tsx":Y};export{X as modules,Z as sources};