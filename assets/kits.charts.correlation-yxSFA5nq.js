import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,zc as n}from"./index-BZuUy872.js";import{r}from"./use-width-DbIwm9Wo.js";import{t as i}from"./scatter-B2vAA7ho.js";import"./kit-gallery-BBavj2rC.js";import{t as a}from"./example-B67lLz1F.js";var o=n();function s(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var c=[`Startup`,`Mid-market`,`Enterprise`],l=s(11),u=Array.from({length:60},(e,t)=>{let n=c[t%3],r=n===`Startup`?1:n===`Mid-market`?2.2:4.5,i=Math.round(r*(8+l()*30));return{name:`Account ${String(t+1).padStart(2,`0`)}`,segment:n,seats:i,spend:Math.round(i*(18+r*2.5)*(.75+l()*.5)),tickets:Math.round(2+l()*i*.15)}});function d(){let{formats:e}=r();return(0,o.jsx)(i,{title:`Accounts: seats vs monthly spend`,description:`Bubble area is support tickets. Hide a segment from the legend.`,data:u,x:e=>e.seats,y:e=>e.spend,size:e=>e.tickets,group:e=>e.segment,groups:c,label:e=>e.name,xLabel:`Seats`,yLabel:`Spend / mo`,sizeLabel:`Tickets`,formatY:t=>`$${e.compact(t)}`,trend:!0,zero:!0,height:320})}var f=`import { ScatterChart, useChartConfig } from "@kitora/charts"

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

const SEGMENTS = ["Startup", "Mid-market", "Enterprise"] as const
const rand = seeded(11)
// Accounts: seats against monthly spend, bubble size = support tickets. Enterprise spends more per seat.
const ACCOUNTS = Array.from({ length: 60 }, (_, i) => {
  const segment = SEGMENTS[i % 3]
  const scale = segment === "Startup" ? 1 : segment === "Mid-market" ? 2.2 : 4.5
  const seats = Math.round(scale * (8 + rand() * 30))
  return { name: \`Account \${String(i + 1).padStart(2, "0")}\`, segment, seats, spend: Math.round(seats * (18 + scale * 2.5) * (0.75 + rand() * 0.5)), tickets: Math.round(2 + rand() * seats * 0.15) }
})

/** A bubble chart: seats × spend, sized by tickets, coloured by segment, with a trend line per segment. */
export function BubbleDemo() {
  const { formats } = useChartConfig()
  return (
    <ScatterChart
      title="Accounts: seats vs monthly spend"
      description="Bubble area is support tickets. Hide a segment from the legend."
      data={ACCOUNTS}
      x={(d) => d.seats}
      y={(d) => d.spend}
      size={(d) => d.tickets}
      group={(d) => d.segment}
      groups={SEGMENTS}
      label={(d) => d.name}
      xLabel="Seats"
      yLabel="Spend / mo"
      sizeLabel="Tickets"
      formatY={(v) => \`$\${formats.compact(v)}\`}
      trend
      zero
      height={320}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>t(()=>import(`./bubble-C-GleuMI.js`),[]));function p(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(e,{title:`Correlation`,children:`Two measures against each other, with a third as size.`}),(0,o.jsx)(a,{n:1,title:`Seats vs spend`,blurb:`Hover the nearest bubble; arrow keys walk the points left to right; trend lines per segment.`,code:f,children:(0,o.jsx)(d,{})})]})}export{p as component};