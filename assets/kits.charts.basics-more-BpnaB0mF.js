import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{t as r}from"./scatter-JL0jYygs.js";import{n as i,t as a}from"./pie-Cn7EN2Kr.js";import{t as o}from"./sparkline-DcIxQ5Dq.js";import{t as s}from"./heatmap-CXEw-ET8.js";import"./kit-gallery-B-Yr9fP4.js";import{t as c}from"./example-CZLJLtIC.js";var l=n(),u=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`],d=[`9am`,`11am`,`1pm`,`3pm`,`5pm`],f=u.flatMap((e,t)=>d.map((n,r)=>({day:e,slot:n,meetings:Math.max(0,Math.round(6-Math.abs(r-1.2)*1.6-(t===4?r:0)+(t*7+r*3)%4))})));function p(){return(0,l.jsx)(s,{title:`Meetings by time slot`,data:f,x:e=>e.slot,y:e=>e.day,value:e=>e.meetings,showValues:!0,cellSize:34})}var m=`import { Heatmap } from "@kitora/charts"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const SLOTS = ["9am", "11am", "1pm", "3pm", "5pm"]
// Busy late mornings, quiet Friday afternoons.
const DATA = DAYS.flatMap((day, d) => SLOTS.map((slot, s) => ({ day, slot, meetings: Math.max(0, Math.round(6 - Math.abs(s - 1.2) * 1.6 - (d === 4 ? s : 0) + ((d * 7 + s * 3) % 4))) })))

/** Cells shaded by value on one hue; arrow keys move between cells once the grid is focused. */
export function BasicHeatmap() {
  return <Heatmap title="Meetings by time slot" data={DATA} x={(d) => d.slot} y={(d) => d.day} value={(d) => d.meetings} showValues cellSize={34} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./heatmap-CxnTdKNz.js`),[]));var h=[{name:`Chrome`,share:64.2},{name:`Safari`,share:18.6},{name:`Edge`,share:5.3},{name:`Firefox`,share:3.1},{name:`Other`,share:8.8}];function g(){return(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 sm:grid-cols-2`,children:[(0,l.jsx)(i,{title:`Browser share`,data:h,label:e=>e.name,value:e=>e.share,legend:`bottom`,height:180,formatValue:e=>`${e}%`}),(0,l.jsx)(a,{title:`Browser share (donut)`,data:h,label:e=>e.name,value:e=>e.share,legend:`bottom`,height:180,formatValue:e=>`${e}%`,centerLabel:`Tracked`})]})}var _=`import { DonutChart, PieChart } from "@kitora/charts"

const BROWSERS = [
  { name: "Chrome", share: 64.2 },
  { name: "Safari", share: 18.6 },
  { name: "Edge", share: 5.3 },
  { name: "Firefox", share: 3.1 },
  { name: "Other", share: 8.8 },
]

/** A pie and a donut over the same rows; the donut's hole shows the total, or the hovered slice's share. */
export function BasicPie() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <PieChart title="Browser share" data={BROWSERS} label={(d) => d.name} value={(d) => d.share} legend="bottom" height={180} formatValue={(v) => \`\${v}%\`} />
      <DonutChart title="Browser share (donut)" data={BROWSERS} label={(d) => d.name} value={(d) => d.share} legend="bottom" height={180} formatValue={(v) => \`\${v}%\`} centerLabel="Tracked" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./pie-CCRM7pCu.js`),[]));var v=[{name:`Atlas`,price:12,rating:3.9,team:`Free`},{name:`Beacon`,price:19,rating:4.2,team:`Pro`},{name:`Cobalt`,price:9,rating:3.4,team:`Free`},{name:`Delta`,price:29,rating:4.6,team:`Pro`},{name:`Ember`,price:24,rating:4.1,team:`Pro`},{name:`Flint`,price:15,rating:3.7,team:`Free`},{name:`Grove`,price:34,rating:4.8,team:`Pro`},{name:`Harbor`,price:6,rating:3.1,team:`Free`}];function y(){return(0,l.jsx)(r,{title:`Price vs rating`,data:v,x:e=>e.price,y:e=>e.rating,group:e=>e.team,label:e=>e.name,xLabel:`Price ($/mo)`,yLabel:`Rating`,formatX:e=>`$${e}`,height:220,trend:!0})}var b=`import { ScatterChart } from "@kitora/charts"

const DATA = [
  { name: "Atlas", price: 12, rating: 3.9, team: "Free" },
  { name: "Beacon", price: 19, rating: 4.2, team: "Pro" },
  { name: "Cobalt", price: 9, rating: 3.4, team: "Free" },
  { name: "Delta", price: 29, rating: 4.6, team: "Pro" },
  { name: "Ember", price: 24, rating: 4.1, team: "Pro" },
  { name: "Flint", price: 15, rating: 3.7, team: "Free" },
  { name: "Grove", price: 34, rating: 4.8, team: "Pro" },
  { name: "Harbor", price: 6, rating: 3.1, team: "Free" },
]

/** Two measures against each other, coloured by group; \`trend\` adds a least-squares line per group. */
export function BasicScatter() {
  return (
    <ScatterChart
      title="Price vs rating"
      data={DATA}
      x={(d) => d.price}
      y={(d) => d.rating}
      group={(d) => d.team}
      label={(d) => d.name}
      xLabel="Price ($/mo)"
      yLabel="Rating"
      formatX={(v) => \`$\${v}\`}
      height={220}
      trend
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./scatter-BZpefJbC.js`),[]));var x=[42,48,45,51,58,55,63],S=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],C=[3,-2,5,4,-6,2,7];function w(){return(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px]`,children:[(0,l.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[`Signups `,(0,l.jsx)(o,{label:`Signups this week`,values:x,labels:S,width:96})]}),(0,l.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[`Revenue `,(0,l.jsx)(o,{label:`Revenue this week`,type:`area`,values:x,labels:S,width:96,showExtremes:!0})]}),(0,l.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[`Net change `,(0,l.jsx)(o,{label:`Net change per day`,type:`bar`,values:C,labels:S,width:96})]})]})}var T=`import { Sparkline } from "@kitora/charts"

const WEEK = [42, 48, 45, 51, 58, 55, 63]
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const DELTAS = [3, -2, 5, 4, -6, 2, 7]

/** Word-sized charts: a line, an area and bars (negatives use the negative colour). Hover to read a point. */
export function BasicSparkline() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px]">
      <span className="inline-flex items-center gap-2">Signups <Sparkline label="Signups this week" values={WEEK} labels={DAYS} width={96} /></span>
      <span className="inline-flex items-center gap-2">Revenue <Sparkline label="Revenue this week" type="area" values={WEEK} labels={DAYS} width={96} showExtremes /></span>
      <span className="inline-flex items-center gap-2">Net change <Sparkline label="Net change per day" type="bar" values={DELTAS} labels={DAYS} width={96} /></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./sparkline-CBLXk2E6.js`),[]));function E(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(e,{title:`Basics: pie, scatter and more`,children:`The charts that are not one-x-many-series: parts of a whole, two measures against each other, word-sized trends and grids.`}),(0,l.jsx)(c,{n:1,title:`Pie and donut`,blurb:"`label` and `value` accessors; the legend lists each value and share. Hover a slice.",code:_,children:(0,l.jsx)(g,{})}),(0,l.jsx)(c,{n:2,title:`Scatter`,blurb:"`x` and `y` are numbers; `group` colours, `trend` fits a line per group.",code:b,children:(0,l.jsx)(y,{})}),(0,l.jsx)(c,{n:3,title:`Sparklines`,blurb:`Line, area and bar sparklines sized like a word.`,code:T,children:(0,l.jsx)(w,{})}),(0,l.jsx)(c,{n:4,title:`Heatmap`,blurb:"`x` and `y` are categories, `value` the shade.",code:m,children:(0,l.jsx)(p,{})})]})}export{E as component};