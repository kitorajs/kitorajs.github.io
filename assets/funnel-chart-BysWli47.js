import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{t as r}from"./badge-CMT8Lr82.js";import{a as i,n as a,o,r as s,t as c}from"./card-AZ_23TG_.js";import{t as l}from"./funnel-DcL-zQea.js";import{t as u}from"./separator-CJFdFqN7.js";var d=e({FunnelChartColors:()=>h}),f=n(),p=[{stage:`Leads`,deals:640},{stage:`Qualified`,deals:290},{stage:`Proposal`,deals:120},{stage:`Won`,deals:48}],m=`var(--dkc-6)`;function h(){return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,f.jsx)(l,{title:`A slot per stage`,data:p,label:e=>e.stage,value:e=>e.deals,colorBy:`stage`,height:200}),(0,f.jsx)(l,{title:`Only the last stage stands out`,data:p,label:e=>e.stage,value:e=>e.deals,color:e=>e.stage===`Won`?m:`var(--dkc-muted)`,height:200})]})}var g=e({FunnelChartCompose:()=>v}),_=[{stage:`Requested a demo`,n:410},{stage:`Demo held`,n:268},{stage:`Trial started`,n:151},{stage:`Bought`,n:57}];function v(){let e=_[0].n,t=_[_.length-1].n;return(0,f.jsxs)(c,{className:`w-full max-w-lg`,children:[(0,f.jsxs)(i,{className:`flex flex-row flex-wrap items-start justify-between gap-2`,children:[(0,f.jsxs)(`div`,{className:`grid gap-1`,children:[(0,f.jsx)(o,{children:`Demo to deal`}),(0,f.jsx)(s,{children:`Made-up numbers for one quarter.`})]}),(0,f.jsxs)(r,{variant:`secondary`,children:[Math.round(t/e*100),`% convert`]})]}),(0,f.jsxs)(a,{className:`grid gap-4`,children:[(0,f.jsx)(l,{title:`Demo to deal funnel`,hideTitle:!0,data:_,label:e=>e.stage,value:e=>e.n,height:200}),(0,f.jsx)(u,{}),(0,f.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`The biggest drop is between the demo and the trial.`})]})]})}var y=e({FunnelChartDefault:()=>x}),b=[{stage:`Applied`,people:840},{stage:`Screened`,people:310},{stage:`Interviewed`,people:96},{stage:`Offered`,people:14},{stage:`Hired`,people:11}];function x(){return(0,f.jsx)(l,{title:`Hiring pipeline`,data:b,label:e=>e.stage,value:e=>e.people})}var S=e({FunnelChartExport:()=>w}),C=[{stage:`Installed`,users:9200},{stage:`Signed in`,users:6100},{stage:`Subscribed`,users:900}];function w(){return(0,f.jsx)(l,{title:`App funnel`,data:C,label:e=>e.stage,value:e=>e.users,exportFormats:[`svg`,`png`],height:180})}var T=e({FunnelChartLabels:()=>D}),E=[{step:`Sent`,n:25e3},{step:`Opened`,n:9800},{step:`Clicked`,n:2100},{step:`Bought`,n:380}];function D(){return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,f.jsx)(l,{title:`Value only`,data:E,label:e=>e.step,value:e=>e.n,labels:`value`,height:200}),(0,f.jsx)(l,{title:`Percent of the previous step`,data:E,label:e=>e.step,value:e=>e.n,labels:`percent`,percentOf:`previous`,height:200})]})}var O=e({FunnelChartOrientation:()=>A}),k=[{step:`Opened app`,users:5200},{step:`Made profile`,users:3900},{step:`First post`,users:1700},{step:`Came back`,users:1150}];function A(){return(0,f.jsx)(l,{title:`Onboarding, left to right`,data:k,label:e=>e.step,value:e=>e.users,orientation:`horizontal`,height:200})}var j=e({FunnelChartShape:()=>N}),M=[{stage:`Tickets opened`,count:1200},{stage:`Answered in 1 h`,count:860},{stage:`Solved first reply`,count:530},{stage:`Rated 5 stars`,count:410}];function N(){return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,f.jsx)(l,{title:`Joined (default)`,data:M,label:e=>e.stage,value:e=>e.count,height:220}),(0,f.jsx)(l,{title:`Bars with a wider gap`,data:M,label:e=>e.stage,value:e=>e.count,shape:`bars`,gap:8,height:220})]})}var P=`import { FunnelChart } from "@kitora/charts"

const SALES = [
  { stage: "Leads", deals: 640 },
  { stage: "Qualified", deals: 290 },
  { stage: "Proposal", deals: 120 },
  { stage: "Won", deals: 48 },
]

const WON = "var(--dkc-6)"

export function FunnelChartColors() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <FunnelChart title="A slot per stage" data={SALES} label={(d) => d.stage} value={(d) => d.deals} colorBy="stage" height={200} />
      <FunnelChart title="Only the last stage stands out" data={SALES} label={(d) => d.stage} value={(d) => d.deals} color={(d) => (d.stage === "Won" ? WON : "var(--dkc-muted)")} height={200} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>t(()=>import(`./colors-Cok0CtXJ.js`),[]));var F=`import { FunnelChart } from "@kitora/charts"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Separator } from "@kitora/ui/separator"

const DEMO_REQUESTS = [
  { stage: "Requested a demo", n: 410 },
  { stage: "Demo held", n: 268 },
  { stage: "Trial started", n: 151 },
  { stage: "Bought", n: 57 },
]

export function FunnelChartCompose() {
  const first = DEMO_REQUESTS[0].n
  const last = DEMO_REQUESTS[DEMO_REQUESTS.length - 1].n
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2">
        <div className="grid gap-1">
          <CardTitle>Demo to deal</CardTitle>
          <CardDescription>Made-up numbers for one quarter.</CardDescription>
        </div>
        <Badge variant="secondary">{Math.round((last / first) * 100)}% convert</Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FunnelChart title="Demo to deal funnel" hideTitle data={DEMO_REQUESTS} label={(d) => d.stage} value={(d) => d.n} height={200} />
        <Separator />
        <p className="text-[13px] text-muted-foreground">The biggest drop is between the demo and the trial.</p>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>t(()=>import(`./compose-oMGrAiSK2.js`),[]));var I=`import { FunnelChart } from "@kitora/charts"

const HIRING = [
  { stage: "Applied", people: 840 },
  { stage: "Screened", people: 310 },
  { stage: "Interviewed", people: 96 },
  { stage: "Offered", people: 14 },
  { stage: "Hired", people: 11 },
]

export function FunnelChartDefault() {
  return <FunnelChart title="Hiring pipeline" data={HIRING} label={(d) => d.stage} value={(d) => d.people} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>t(()=>import(`./default-D8b31VCD.js`),[]));var L=`import { FunnelChart } from "@kitora/charts"

const APP = [
  { stage: "Installed", users: 9200 },
  { stage: "Signed in", users: 6100 },
  { stage: "Subscribed", users: 900 },
]

export function FunnelChartExport() {
  return <FunnelChart title="App funnel" data={APP} label={(d) => d.stage} value={(d) => d.users} exportFormats={["svg", "png"]} height={180} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>t(()=>import(`./export-mCGyRsL1.js`),[]));var R=`import { FunnelChart } from "@kitora/charts"

const EMAIL = [
  { step: "Sent", n: 25000 },
  { step: "Opened", n: 9800 },
  { step: "Clicked", n: 2100 },
  { step: "Bought", n: 380 },
]

export function FunnelChartLabels() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <FunnelChart title="Value only" data={EMAIL} label={(d) => d.step} value={(d) => d.n} labels="value" height={200} />
      <FunnelChart title="Percent of the previous step" data={EMAIL} label={(d) => d.step} value={(d) => d.n} labels="percent" percentOf="previous" height={200} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>t(()=>import(`./labels-DfoD95O4.js`),[]));var z=`import { FunnelChart } from "@kitora/charts"

const ONBOARDING = [
  { step: "Opened app", users: 5200 },
  { step: "Made profile", users: 3900 },
  { step: "First post", users: 1700 },
  { step: "Came back", users: 1150 },
]

export function FunnelChartOrientation() {
  return <FunnelChart title="Onboarding, left to right" data={ONBOARDING} label={(d) => d.step} value={(d) => d.users} orientation="horizontal" height={200} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>t(()=>import(`./orientation-edDayXR2.js`),[]));var B=`import { FunnelChart } from "@kitora/charts"

const SUPPORT = [
  { stage: "Tickets opened", count: 1200 },
  { stage: "Answered in 1 h", count: 860 },
  { stage: "Solved first reply", count: 530 },
  { stage: "Rated 5 stars", count: 410 },
]

export function FunnelChartShape() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <FunnelChart title="Joined (default)" data={SUPPORT} label={(d) => d.stage} value={(d) => d.count} height={220} />
      <FunnelChart title="Bars with a wider gap" data={SUPPORT} label={(d) => d.stage} value={(d) => d.count} shape="bars" gap={8} height={220} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>t(()=>import(`./shape-DzLOz-Mt.js`),[]));var V={"./demos/funnel-chart/colors.tsx":d,"./demos/funnel-chart/compose.tsx":g,"./demos/funnel-chart/default.tsx":y,"./demos/funnel-chart/export.tsx":S,"./demos/funnel-chart/labels.tsx":T,"./demos/funnel-chart/orientation.tsx":O,"./demos/funnel-chart/shape.tsx":j},H={"./demos/funnel-chart/colors.tsx":P,"./demos/funnel-chart/compose.tsx":F,"./demos/funnel-chart/default.tsx":I,"./demos/funnel-chart/export.tsx":L,"./demos/funnel-chart/labels.tsx":R,"./demos/funnel-chart/orientation.tsx":z,"./demos/funnel-chart/shape.tsx":B};export{V as modules,H as sources};