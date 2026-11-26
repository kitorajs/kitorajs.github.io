import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{o as t,r as n,t as r}from"./progress-CDG4ypA_.js";import{Cc as i,Ic as a,ti as o}from"./index-q72zUtm9.js";import{a as s,n as c,o as l,r as u,t as d}from"./card-WiouR7Ep.js";import{t as f}from"./radial-bar-B32LIpAZ.js";var p=e({RadialBarChartCompose:()=>g}),m=a(),h=[{quota:`Seats`,used:18,limit:20},{quota:`Projects`,used:7,limit:10},{quota:`Storage (GB)`,used:31,limit:100}];function g(){return(0,m.jsxs)(d,{className:`w-full max-w-md`,children:[(0,m.jsxs)(s,{className:`flex flex-row flex-wrap items-start justify-between gap-2`,children:[(0,m.jsxs)(`div`,{className:`grid gap-1`,children:[(0,m.jsx)(l,{children:`Team plan usage`}),(0,m.jsx)(u,{children:`Share of each limit used this month.`})]}),(0,m.jsx)(o,{size:`sm`,children:`Upgrade`})]}),(0,m.jsxs)(c,{className:`grid gap-4`,children:[(0,m.jsx)(f,{title:`Plan usage`,hideTitle:!0,tableToggle:!1,data:h,label:e=>e.quota,value:e=>Math.round(e.used/e.limit*100),max:100,formatValue:e=>`${e}%`,height:200}),h.map(e=>(0,m.jsxs)(r,{value:e.used,max:e.limit,getAriaValueText:()=>`${e.used} of ${e.limit}`,children:[(0,m.jsx)(n,{children:e.quota}),(0,m.jsx)(t,{children:()=>`${e.used} of ${e.limit}`})]},e.quota))]})]})}var _=e({RadialBarChartDefault:()=>y}),v=[{team:`Sales`,reached:92},{team:`Support`,reached:78},{team:`Marketing`,reached:55},{team:`Product`,reached:34}];function y(){return(0,m.jsx)(f,{title:`Targets reached`,data:v,label:e=>e.team,value:e=>e.reached,max:100,formatValue:e=>`${e}%`})}var b=e({RadialBarChartExport:()=>S}),x=[{goal:`Ship v2`,done:80},{goal:`Halve churn`,done:45},{goal:`Hire 3`,done:67}];function S(){return(0,m.jsx)(f,{title:`Quarter goals`,data:x,label:e=>e.goal,value:e=>e.done,max:100,formatValue:e=>`${e}%`,exportFormats:[`svg`,`png`]})}var C=e({RadialBarChartSort:()=>E}),w=[{name:`Go`,repos:31},{name:`TypeScript`,repos:58},{name:`Rust`,repos:12},{name:`Python`,repos:44}],T={Go:`var(--dkc-3)`,TypeScript:`var(--dkc-1)`,Rust:`var(--dkc-2)`,Python:`var(--dkc-4)`};function E(){return(0,m.jsx)(f,{title:`Repositories by language`,data:w,label:e=>e.name,value:e=>e.repos,color:e=>T[e.name]??`var(--dkc-muted)`,sort:!0})}var D=e({RadialBarChartSweep:()=>k}),O=[{course:`Security basics`,done:100},{course:`Privacy`,done:75},{course:`Accessibility`,done:48}];function k(){return(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,m.jsx)(f,{title:`Half dial (-90° to 90°)`,data:O,label:e=>e.course,value:e=>e.done,max:100,startAngle:-90,endAngle:90,formatValue:e=>`${e}%`,height:200}),(0,m.jsx)(f,{title:`Three quarters (default)`,data:O,label:e=>e.course,value:e=>e.done,max:100,formatValue:e=>`${e}%`,height:200})]})}var A=e({RadialBarChartTracksAndLabels:()=>N}),j=[{line:`Cloud`,spent:18400},{line:`Payroll tools`,spent:9600},{line:`Ads`,spent:7200},{line:`Travel`,spent:2100}],M=e=>`$${e.toLocaleString(`en-US`)}`;function N(){return(0,m.jsx)(f,{title:`Budget spent of $20,000 each`,data:j,label:e=>e.line,value:e=>e.spent,max:2e4,track:!1,labels:!1,barSize:14,gap:6,formatValue:M})}var P=`import { RadialBarChart } from "@kitora/charts"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Progress, ProgressLabel, ProgressValue } from "@kitora/ui/progress"

const QUOTAS = [
  { quota: "Seats", used: 18, limit: 20 },
  { quota: "Projects", used: 7, limit: 10 },
  { quota: "Storage (GB)", used: 31, limit: 100 },
]

export function RadialBarChartCompose() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2">
        <div className="grid gap-1">
          <CardTitle>Team plan usage</CardTitle>
          <CardDescription>Share of each limit used this month.</CardDescription>
        </div>
        <Button size="sm">Upgrade</Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        <RadialBarChart title="Plan usage" hideTitle tableToggle={false} data={QUOTAS} label={(d) => d.quota} value={(d) => Math.round((d.used / d.limit) * 100)} max={100} formatValue={(v) => \`\${v}%\`} height={200} />
        {QUOTAS.map((q) => (
          <Progress key={q.quota} value={q.used} max={q.limit} getAriaValueText={() => \`\${q.used} of \${q.limit}\`}>
            <ProgressLabel>{q.quota}</ProgressLabel>
            <ProgressValue>{() => \`\${q.used} of \${q.limit}\`}</ProgressValue>
          </Progress>
        ))}
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>i(()=>import(`./compose-BRR9j8kI.js`),[]));var F=`import { RadialBarChart } from "@kitora/charts"

const TARGETS = [
  { team: "Sales", reached: 92 },
  { team: "Support", reached: 78 },
  { team: "Marketing", reached: 55 },
  { team: "Product", reached: 34 },
]

export function RadialBarChartDefault() {
  return <RadialBarChart title="Targets reached" data={TARGETS} label={(d) => d.team} value={(d) => d.reached} max={100} formatValue={(v) => \`\${v}%\`} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>i(()=>import(`./default-DWOQkHRq.js`),[]));var I=`import { RadialBarChart } from "@kitora/charts"

const OKRS = [
  { goal: "Ship v2", done: 80 },
  { goal: "Halve churn", done: 45 },
  { goal: "Hire 3", done: 67 },
]

export function RadialBarChartExport() {
  return <RadialBarChart title="Quarter goals" data={OKRS} label={(d) => d.goal} value={(d) => d.done} max={100} formatValue={(v) => \`\${v}%\`} exportFormats={["svg", "png"]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>i(()=>import(`./export-vjXJG3OL.js`),[]));var L=`import { RadialBarChart } from "@kitora/charts"

const LANGUAGES = [
  { name: "Go", repos: 31 },
  { name: "TypeScript", repos: 58 },
  { name: "Rust", repos: 12 },
  { name: "Python", repos: 44 },
]

const BRAND: Readonly<Record<string, string>> = { Go: "var(--dkc-3)", TypeScript: "var(--dkc-1)", Rust: "var(--dkc-2)", Python: "var(--dkc-4)" }

export function RadialBarChartSort() {
  return <RadialBarChart title="Repositories by language" data={LANGUAGES} label={(d) => d.name} value={(d) => d.repos} color={(d) => BRAND[d.name] ?? "var(--dkc-muted)"} sort />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>i(()=>import(`./sort-Ckz6fsW7.js`),[]));var R=`import { RadialBarChart } from "@kitora/charts"

const TRAINING = [
  { course: "Security basics", done: 100 },
  { course: "Privacy", done: 75 },
  { course: "Accessibility", done: 48 },
]

export function RadialBarChartSweep() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <RadialBarChart title="Half dial (-90° to 90°)" data={TRAINING} label={(d) => d.course} value={(d) => d.done} max={100} startAngle={-90} endAngle={90} formatValue={(v) => \`\${v}%\`} height={200} />
      <RadialBarChart title="Three quarters (default)" data={TRAINING} label={(d) => d.course} value={(d) => d.done} max={100} formatValue={(v) => \`\${v}%\`} height={200} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./sweep-CiNMhSGb.js`),[]));var z=`import { RadialBarChart } from "@kitora/charts"

const BUDGET = [
  { line: "Cloud", spent: 18400 },
  { line: "Payroll tools", spent: 9600 },
  { line: "Ads", spent: 7200 },
  { line: "Travel", spent: 2100 },
]

const usd = (v: number) => \`$\${v.toLocaleString("en-US")}\`

export function RadialBarChartTracksAndLabels() {
  return <RadialBarChart title="Budget spent of $20,000 each" data={BUDGET} label={(d) => d.line} value={(d) => d.spent} max={20000} track={false} labels={false} barSize={14} gap={6} formatValue={usd} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>i(()=>import(`./tracks-and-labels-FNZSKXJU.js`),[]));var B={"./demos/radial-bar-chart/compose.tsx":p,"./demos/radial-bar-chart/default.tsx":_,"./demos/radial-bar-chart/export.tsx":b,"./demos/radial-bar-chart/sort.tsx":C,"./demos/radial-bar-chart/sweep.tsx":D,"./demos/radial-bar-chart/tracks-and-labels.tsx":A},V={"./demos/radial-bar-chart/compose.tsx":P,"./demos/radial-bar-chart/default.tsx":F,"./demos/radial-bar-chart/export.tsx":I,"./demos/radial-bar-chart/sort.tsx":L,"./demos/radial-bar-chart/sweep.tsx":R,"./demos/radial-bar-chart/tracks-and-labels.tsx":z};export{B as modules,V as sources};