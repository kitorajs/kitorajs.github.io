import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,t as i}from"./tabs-OlNP7cG6.js";import{a,i as o}from"./stats-BB0zNHyx.js";import{Ec as s,zc as c}from"./index-BZuUy872.js";var l=e({StatCardComposeRangeTabs:()=>d}),u=c();function d(){return(0,u.jsxs)(i,{defaultValue:`7d`,className:`w-full max-w-md`,children:[(0,u.jsxs)(n,{children:[(0,u.jsx)(t,{value:`7d`,children:`7 days`}),(0,u.jsx)(t,{value:`30d`,children:`30 days`})]}),(0,u.jsx)(r,{value:`7d`,className:`mt-3`,children:(0,u.jsxs)(a,{columns:2,children:[(0,u.jsx)(o,{label:`Signups`,value:`312`,current:312,previous:289,trendSuffix:`vs prior week`}),(0,u.jsx)(o,{label:`Errors`,value:`14`,current:14,previous:18,invert:!0,trendSuffix:`lower is better`})]})}),(0,u.jsx)(r,{value:`30d`,className:`mt-3`,children:(0,u.jsxs)(a,{columns:2,children:[(0,u.jsx)(o,{label:`Signups`,value:`1,284`,current:1284,previous:1242,trendSuffix:`vs prior month`}),(0,u.jsx)(o,{label:`Errors`,value:`71`,current:71,previous:68,invert:!0,trendSuffix:`lower is better`})]})})]})}var f=e({StatCardDefault:()=>p});function p(){return(0,u.jsxs)(a,{columns:2,className:`w-full`,children:[(0,u.jsx)(o,{label:`MRR`,value:`$24,400`,current:24400,previous:21710,trendSuffix:`vs last month`}),(0,u.jsx)(o,{label:`Churn`,value:`1.8%`,current:1.8,previous:2.1,invert:!0,trendSuffix:`lower is better`})]})}var m=e({StatCardWithSparkline:()=>h});function h(){return(0,u.jsxs)(a,{columns:2,className:`w-full`,children:[(0,u.jsx)(o,{label:`API requests`,value:`248K`,current:248,previous:229,trendSuffix:`last 24h`,series:[20,28,22,36,32,44,40,52,50,64]}),(0,u.jsx)(o,{label:`Error rate`,value:`0.03%`,current:.03,previous:.034,invert:!0,trendSuffix:`last 24h`,series:[60,52,48,44,40,32,28,22,18,12]})]})}var g=`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { StatCard, StatGrid } from "@kitora/display"

export function StatCardComposeRangeTabs() {
  return (
    <Tabs defaultValue="7d" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="7d">7 days</TabsTrigger>
        <TabsTrigger value="30d">30 days</TabsTrigger>
      </TabsList>
      <TabsContent value="7d" className="mt-3">
        <StatGrid columns={2}>
          <StatCard label="Signups" value="312" current={312} previous={289} trendSuffix="vs prior week" />
          <StatCard label="Errors" value="14" current={14} previous={18} invert trendSuffix="lower is better" />
        </StatGrid>
      </TabsContent>
      <TabsContent value="30d" className="mt-3">
        <StatGrid columns={2}>
          <StatCard label="Signups" value="1,284" current={1284} previous={1242} trendSuffix="vs prior month" />
          <StatCard label="Errors" value="71" current={71} previous={68} invert trendSuffix="lower is better" />
        </StatGrid>
      </TabsContent>
    </Tabs>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>s(()=>import(`./compose-DSQHyYLo.js`),[]));var _=`import { StatCard, StatGrid } from "@kitora/display"

export function StatCardDefault() {
  return (
    <StatGrid columns={2} className="w-full">
      <StatCard label="MRR" value="$24,400" current={24400} previous={21710} trendSuffix="vs last month" />
      <StatCard label="Churn" value="1.8%" current={1.8} previous={2.1} invert trendSuffix="lower is better" />
    </StatGrid>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>s(()=>import(`./default-C2LN9UKa.js`),[]));var v=`import { StatCard, StatGrid } from "@kitora/display"

export function StatCardWithSparkline() {
  return (
    <StatGrid columns={2} className="w-full">
      <StatCard label="API requests" value="248K" current={248} previous={229} trendSuffix="last 24h" series={[20, 28, 22, 36, 32, 44, 40, 52, 50, 64]} />
      <StatCard label="Error rate" value="0.03%" current={0.03} previous={0.034} invert trendSuffix="last 24h" series={[60, 52, 48, 44, 40, 32, 28, 22, 18, 12]} />
    </StatGrid>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>s(()=>import(`./with-sparkline-SO_U5SGn.js`),[]));var y={"./demos/stat-card/compose.tsx":l,"./demos/stat-card/default.tsx":f,"./demos/stat-card/with-sparkline.tsx":m},b={"./demos/stat-card/compose.tsx":g,"./demos/stat-card/default.tsx":_,"./demos/stat-card/with-sparkline.tsx":v};export{y as modules,b as sources};