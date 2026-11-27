import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,zc as n}from"./index-BZuUy872.js";import{n as r}from"./cartesian-DSDLk_49.js";import"./kit-gallery-BBavj2rC.js";import{t as i}from"./example-B67lLz1F.js";var a=n(),o=[{quarter:`Q1`,plan:120,actual:98},{quarter:`Q2`,plan:140,actual:151},{quarter:`Q3`,plan:160,actual:149},{quarter:`Q4`,plan:180,actual:192}];function s(){return(0,a.jsx)(r,{title:`Deals closed, plan vs actual`,data:o,x:e=>e.quarter,series:[{key:`plan`,label:`Plan`,value:e=>e.plan},{key:`actual`,label:`Actual`,value:e=>e.actual}]})}var c=`import { BarChart } from "@kitora/charts"

const DATA = [
  { quarter: "Q1", plan: 120, actual: 98 },
  { quarter: "Q2", plan: 140, actual: 151 },
  { quarter: "Q3", plan: 160, actual: 149 },
  { quarter: "Q4", plan: 180, actual: 192 },
]

/** Grouped bars: several series side by side in each category. */
export function BasicBars() {
  return (
    <BarChart
      title="Deals closed, plan vs actual"
      data={DATA}
      x={(d) => d.quarter}
      series={[
        { key: "plan", label: "Plan", value: (d) => d.plan },
        { key: "actual", label: "Actual", value: (d) => d.actual },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(c,()=>t(()=>import(`./bar-9yEwpswv.js`),[]));var l=[{page:`/pricing`,views:18420},{page:`/docs/getting-started`,views:14210},{page:`/blog/launch-week`,views:9870},{page:`/changelog`,views:6430},{page:`/about`,views:3120}];function u(){return(0,a.jsx)(r,{title:`Top pages`,orientation:`horizontal`,height:200,data:l,x:e=>e.page,series:[{key:`views`,label:`Views`,value:e=>e.views}]})}var d=`import { BarChart } from "@kitora/charts"

const DATA = [
  { page: "/pricing", views: 18_420 },
  { page: "/docs/getting-started", views: 14_210 },
  { page: "/blog/launch-week", views: 9_870 },
  { page: "/changelog", views: 6_430 },
  { page: "/about", views: 3_120 },
]

/** \`orientation="horizontal"\` puts long category names down the left edge. */
export function BasicHorizontalBars() {
  return (
    <BarChart
      title="Top pages"
      orientation="horizontal"
      height={200}
      data={DATA}
      x={(d) => d.page}
      series={[{ key: "views", label: "Views", value: (d) => d.views }]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./horizontal-bar-fezLPZc2.js`),[]));var f=[{team:`Mon`,bugs:12,features:18,chores:6},{team:`Tue`,bugs:9,features:22,chores:4},{team:`Wed`,bugs:15,features:16,chores:8},{team:`Thu`,bugs:7,features:25,chores:5},{team:`Fri`,bugs:11,features:14,chores:9}];function p(){return(0,a.jsx)(r,{title:`Issues closed by kind`,layout:`stacked`,data:f,x:e=>e.team,series:[{key:`features`,label:`Features`,value:e=>e.features},{key:`bugs`,label:`Bugs`,value:e=>e.bugs},{key:`chores`,label:`Chores`,value:e=>e.chores}]})}var m=`import { BarChart } from "@kitora/charts"

const DATA = [
  { team: "Mon", bugs: 12, features: 18, chores: 6 },
  { team: "Tue", bugs: 9, features: 22, chores: 4 },
  { team: "Wed", bugs: 15, features: 16, chores: 8 },
  { team: "Thu", bugs: 7, features: 25, chores: 5 },
  { team: "Fri", bugs: 11, features: 14, chores: 9 },
]

/** \`layout="stacked"\` piles the series; only each stack's top segment is rounded. */
export function BasicStackedBars() {
  return (
    <BarChart
      title="Issues closed by kind"
      layout="stacked"
      data={DATA}
      x={(d) => d.team}
      series={[
        { key: "features", label: "Features", value: (d) => d.features },
        { key: "bugs", label: "Bugs", value: (d) => d.bugs },
        { key: "chores", label: "Chores", value: (d) => d.chores },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./stacked-bar-BPxDPR0F.js`),[]));function h(){return(0,a.jsxs)(`div`,{children:[(0,a.jsx)(e,{title:`Basics: bars`,children:"`BarChart` takes the same rows and series as every other chart; `layout` and `orientation` change the arrangement."}),(0,a.jsx)(i,{n:1,title:`Grouped bars`,blurb:`Series side by side in each category, rounded only at the data end.`,code:c,children:(0,a.jsx)(s,{})}),(0,a.jsx)(i,{n:2,title:`Stacked bars`,blurb:'`layout="stacked"`: segments separated by a 2px gap, the top one rounded.',code:m,children:(0,a.jsx)(p,{})}),(0,a.jsx)(i,{n:3,title:`Horizontal bars`,blurb:'`orientation="horizontal"` for long category names.',code:d,children:(0,a.jsx)(u,{})})]})}export{h as component};