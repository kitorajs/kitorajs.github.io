import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{t as r}from"./badge-uhFB8J9R.js";import{a as i,n as a,o,t as s}from"./card-B_Tor3B1.js";import{t as c}from"./gauge-DiZ5UJ96.js";var l=e({GaugeChartCenter:()=>f}),u=n(),d=e=>`${e} GB`;function f(){return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,u.jsx)(c,{title:`Mailbox (over quota)`,value:53,max:50,format:d,centerLabel:`of 50 GB`}),(0,u.jsx)(c,{title:`Battery`,value:64,children:(0,u.jsxs)(`div`,{className:`grid leading-tight`,children:[(0,u.jsx)(`span`,{className:`text-2xl font-semibold tabular-nums`,children:`64%`}),(0,u.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`about 5 h left`})]})})]})}var p=e({GaugeChartCompose:()=>_}),m=[{to:70,color:`var(--dkc-6)`,label:`OK`},{to:90,color:`var(--dkc-4)`,label:`Watch`},{to:100,color:`var(--dkc-8)`,label:`Act now`}],h=[{name:`CPU`,value:46},{name:`Memory`,value:81},{name:`Disk`,value:94}],g=e=>m.find(t=>e<=t.to)??m[m.length-1];function _(){return(0,u.jsx)(`div`,{className:`grid w-full grid-cols-1 gap-4 sm:grid-cols-3`,children:h.map(e=>(0,u.jsxs)(s,{children:[(0,u.jsxs)(i,{className:`flex flex-row items-center justify-between gap-2`,children:[(0,u.jsx)(o,{children:e.name}),(0,u.jsx)(r,{variant:g(e.value).label===`OK`?`secondary`:`destructive`,children:g(e.value).label})]}),(0,u.jsx)(a,{children:(0,u.jsx)(c,{title:`${e.name} use`,hideTitle:!0,tableToggle:!1,legend:`none`,value:e.value,segments:m,format:e=>`${e}%`,size:130})})]},e.name))})}var v=e({GaugeChartDefault:()=>y});function y(){return(0,u.jsx)(`div`,{className:`mx-auto w-full max-w-xs`,children:(0,u.jsx)(c,{title:`Customer satisfaction`,value:78,format:e=>`${e}%`})})}var b=e({GaugeChartExport:()=>S}),x=[{to:50,color:`var(--dkc-8)`,label:`Poor`},{to:80,color:`var(--dkc-4)`,label:`Fair`},{to:100,color:`var(--dkc-6)`,label:`Good`}];function S(){return(0,u.jsx)(`div`,{className:`mx-auto w-full max-w-sm`,children:(0,u.jsx)(c,{title:`Lighthouse score`,value:86,segments:x,exportFormats:[`svg`,`png`]})})}var C=e({GaugeChartSegments:()=>T}),w=[{to:200,color:`var(--dkc-6)`,label:`Fast`},{to:500,color:`var(--dkc-4)`,label:`Slow`},{to:1e3,color:`var(--dkc-8)`,label:`Too slow`}];function T(){return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,u.jsx)(c,{title:`p95 latency, checkout`,value:340,max:1e3,segments:w,format:e=>`${e} ms`}),(0,u.jsx)(c,{title:`p95 latency, search`,value:120,max:1e3,segments:w,format:e=>`${e} ms`})]})}var E=e({GaugeChartSweep:()=>D});function D(){return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-3`,children:[(0,u.jsx)(c,{title:`Half dial`,value:35,startAngle:-90,endAngle:90,size:140}),(0,u.jsx)(c,{title:`Default 240°`,value:35,size:140}),(0,u.jsx)(c,{title:`Full ring`,value:35,startAngle:0,endAngle:360,size:110,thickness:10})]})}var O=`import { GaugeChart } from "@kitora/charts"

const gb = (v: number) => \`\${v} GB\`

export function GaugeChartCenter() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <GaugeChart title="Mailbox (over quota)" value={53} max={50} format={gb} centerLabel="of 50 GB" />
      <GaugeChart title="Battery" value={64}>
        <div className="grid leading-tight">
          <span className="text-2xl font-semibold tabular-nums">64%</span>
          <span className="text-[11px] text-muted-foreground">about 5 h left</span>
        </div>
      </GaugeChart>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>t(()=>import(`./center-CXhtVjh2.js`),[]));var k=`import { GaugeChart } from "@kitora/charts"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"

const BANDS = [
  { to: 70, color: "var(--dkc-6)", label: "OK" },
  { to: 90, color: "var(--dkc-4)", label: "Watch" },
  { to: 100, color: "var(--dkc-8)", label: "Act now" },
]

const KPIS = [
  { name: "CPU", value: 46 },
  { name: "Memory", value: 81 },
  { name: "Disk", value: 94 },
]

const bandOf = (value: number) => BANDS.find((b) => value <= b.to) ?? BANDS[BANDS.length - 1]

export function GaugeChartCompose() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
      {KPIS.map((kpi) => (
        <Card key={kpi.name}>
          <CardHeader className="flex flex-row items-center justify-between gap-2">
            <CardTitle>{kpi.name}</CardTitle>
            <Badge variant={bandOf(kpi.value).label === "OK" ? "secondary" : "destructive"}>{bandOf(kpi.value).label}</Badge>
          </CardHeader>
          <CardContent>
            <GaugeChart title={\`\${kpi.name} use\`} hideTitle tableToggle={false} legend="none" value={kpi.value} segments={BANDS} format={(v) => \`\${v}%\`} size={130} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>t(()=>import(`./compose-D31nJrln.js`),[]));var A=`import { GaugeChart } from "@kitora/charts"

export function GaugeChartDefault() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <GaugeChart title="Customer satisfaction" value={78} format={(v) => \`\${v}%\`} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>t(()=>import(`./default-BpLWz0J8.js`),[]));var j=`import { GaugeChart } from "@kitora/charts"

const BANDS = [
  { to: 50, color: "var(--dkc-8)", label: "Poor" },
  { to: 80, color: "var(--dkc-4)", label: "Fair" },
  { to: 100, color: "var(--dkc-6)", label: "Good" },
]

export function GaugeChartExport() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <GaugeChart title="Lighthouse score" value={86} segments={BANDS} exportFormats={["svg", "png"]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>t(()=>import(`./export-DiH7zM6k.js`),[]));var M=`import { GaugeChart } from "@kitora/charts"

const LATENCY_BANDS = [
  { to: 200, color: "var(--dkc-6)", label: "Fast" },
  { to: 500, color: "var(--dkc-4)", label: "Slow" },
  { to: 1000, color: "var(--dkc-8)", label: "Too slow" },
]

export function GaugeChartSegments() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <GaugeChart title="p95 latency, checkout" value={340} max={1000} segments={LATENCY_BANDS} format={(v) => \`\${v} ms\`} />
      <GaugeChart title="p95 latency, search" value={120} max={1000} segments={LATENCY_BANDS} format={(v) => \`\${v} ms\`} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>t(()=>import(`./segments-8OIwCu3n.js`),[]));var N=`import { GaugeChart } from "@kitora/charts"

export function GaugeChartSweep() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <GaugeChart title="Half dial" value={35} startAngle={-90} endAngle={90} size={140} />
      <GaugeChart title="Default 240°" value={35} size={140} />
      <GaugeChart title="Full ring" value={35} startAngle={0} endAngle={360} size={110} thickness={10} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>t(()=>import(`./sweep-DrgQ9jEL.js`),[]));var P={"./demos/gauge-chart/center.tsx":l,"./demos/gauge-chart/compose.tsx":p,"./demos/gauge-chart/default.tsx":v,"./demos/gauge-chart/export.tsx":b,"./demos/gauge-chart/segments.tsx":C,"./demos/gauge-chart/sweep.tsx":E},F={"./demos/gauge-chart/center.tsx":O,"./demos/gauge-chart/compose.tsx":k,"./demos/gauge-chart/default.tsx":A,"./demos/gauge-chart/export.tsx":j,"./demos/gauge-chart/segments.tsx":M,"./demos/gauge-chart/sweep.tsx":N};export{P as modules,F as sources};