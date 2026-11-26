import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{n as r}from"./use-width-C9B7nVR-.js";import{o as i,s as a,t as o}from"./cartesian-D_KVetyy.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";var c=n(),l=[{day:new Date(Date.UTC(2026,9,5)),web:820,ios:410,android:380},{day:new Date(Date.UTC(2026,9,6)),web:900,ios:460,android:350},{day:new Date(Date.UTC(2026,9,7)),web:760,ios:520,android:420},{day:new Date(Date.UTC(2026,9,8)),web:1040,ios:480,android:470},{day:new Date(Date.UTC(2026,9,9)),web:1120,ios:560,android:510},{day:new Date(Date.UTC(2026,9,10)),web:980,ios:610,android:540},{day:new Date(Date.UTC(2026,9,11)),web:1210,ios:640,android:590}];function u(){return(0,c.jsx)(r,{timeZone:`UTC`,children:(0,c.jsx)(o,{title:`Sign-ins by platform`,stacked:!0,data:l,x:e=>e.day,series:[{key:`web`,label:`Web`,value:e=>e.web},{key:`ios`,label:`iOS`,value:e=>e.ios},{key:`android`,label:`Android`,value:e=>e.android}]})})}var d=`import { AreaChart, ChartConfigProvider } from "@kitora/charts"

// Days, so UTC midnights; the chart shows them in UTC, the same day for every reader.

const DATA = [
  { day: new Date(Date.UTC(2026, 9, 5)), web: 820, ios: 410, android: 380 },
  { day: new Date(Date.UTC(2026, 9, 6)), web: 900, ios: 460, android: 350 },
  { day: new Date(Date.UTC(2026, 9, 7)), web: 760, ios: 520, android: 420 },
  { day: new Date(Date.UTC(2026, 9, 8)), web: 1040, ios: 480, android: 470 },
  { day: new Date(Date.UTC(2026, 9, 9)), web: 1120, ios: 560, android: 510 },
  { day: new Date(Date.UTC(2026, 9, 10)), web: 980, ios: 610, android: 540 },
  { day: new Date(Date.UTC(2026, 9, 11)), web: 1210, ios: 640, android: 590 },
]

/** Stacked areas over dates: \`stacked\` piles the series; the tooltip adds a total. */
export function BasicArea() {
  return (
    <ChartConfigProvider timeZone="UTC">
    <AreaChart
      title="Sign-ins by platform"
      stacked
      data={DATA}
      x={(d) => d.day}
      series={[
        { key: "web", label: "Web", value: (d) => d.web },
        { key: "ios", label: "iOS", value: (d) => d.ios },
        { key: "android", label: "Android", value: (d) => d.android },
      ]}
    />
    </ChartConfigProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./area-BXyuVqC1.js`),[]));var f=[{week:`W1`,orders:312,target:300},{week:`W2`,orders:288,target:310},{week:`W3`,orders:341,target:320},{week:`W4`,orders:365,target:330},{week:`W5`,orders:322,target:340},{week:`W6`,orders:384,target:350},{week:`W7`,orders:401,target:360},{week:`W8`,orders:377,target:370}];function p(){return(0,c.jsx)(i,{title:`Orders against target`,data:f,x:e=>e.week,series:[{key:`orders`,label:`Orders`,value:e=>e.orders,type:`bar`},{key:`target`,label:`Target`,value:e=>e.target,type:`line`,dashed:!0}]})}var m=`import { ComboChart } from "@kitora/charts"

const DATA = [
  { week: "W1", orders: 312, target: 300 },
  { week: "W2", orders: 288, target: 310 },
  { week: "W3", orders: 341, target: 320 },
  { week: "W4", orders: 365, target: 330 },
  { week: "W5", orders: 322, target: 340 },
  { week: "W6", orders: 384, target: 350 },
  { week: "W7", orders: 401, target: 360 },
  { week: "W8", orders: 377, target: 370 },
]

/** Bars and a line on one value axis: give each series its \`type\`. */
export function BasicCombo() {
  return (
    <ComboChart
      title="Orders against target"
      data={DATA}
      x={(d) => d.week}
      series={[
        { key: "orders", label: "Orders", value: (d) => d.orders, type: "bar" },
        { key: "target", label: "Target", value: (d) => d.target, type: "line", dashed: true },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./combo-wf9Lb50F.js`),[]));var h=[{month:`Jan`,users:1200,sessions:2100},{month:`Feb`,users:1450,sessions:2380},{month:`Mar`,users:1380,sessions:2600},{month:`Apr`,users:1720,sessions:2950},{month:`May`,users:1960,sessions:3120},{month:`Jun`,users:2240,sessions:3480}];function g(){return(0,c.jsx)(a,{title:`Monthly active users`,data:h,x:e=>e.month,series:[{key:`users`,label:`Users`,value:e=>e.users},{key:`sessions`,label:`Sessions`,value:e=>e.sessions}]})}var _=`import { LineChart } from "@kitora/charts"

const DATA = [
  { month: "Jan", users: 1200, sessions: 2100 },
  { month: "Feb", users: 1450, sessions: 2380 },
  { month: "Mar", users: 1380, sessions: 2600 },
  { month: "Apr", users: 1720, sessions: 2950 },
  { month: "May", users: 1960, sessions: 3120 },
  { month: "Jun", users: 2240, sessions: 3480 },
]

/** The smallest line chart: rows, an x accessor, and one entry per series. */
export function BasicLine() {
  return (
    <LineChart
      title="Monthly active users"
      data={DATA}
      x={(d) => d.month}
      series={[
        { key: "users", label: "Users", value: (d) => d.users },
        { key: "sessions", label: "Sessions", value: (d) => d.sessions },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./line-CQQYqsSu.js`),[]));function v(){return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(e,{title:`Basics: lines and areas`,children:"A chart is rows, an `x` accessor and a list of series. The width follows the container; `height` sets the plot."}),(0,c.jsx)(s,{n:1,title:`A line chart`,blurb:`Two series over categories. Hover for the crosshair; click a legend entry to hide a series.`,code:_,children:(0,c.jsx)(g,{})}),(0,c.jsx)(s,{n:2,title:`Stacked areas over dates`,blurb:"Dates on x get calendar ticks; `stacked` piles the series and the tooltip adds a total.",code:d,children:(0,c.jsx)(u,{})}),(0,c.jsx)(s,{n:3,title:`Bars and a line together`,blurb:"A combo chart: each series names its `type`. One value axis, always.",code:m,children:(0,c.jsx)(p,{})})]})}export{v as component};