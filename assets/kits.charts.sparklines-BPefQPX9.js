import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{r}from"./use-width-C9B7nVR-.js";import{t as i}from"./sparkline-DTgJkFec.js";import"./kit-gallery-Atvibnty.js";import{t as a}from"./example-B8EaWveR.js";var o=n();function s(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var c=[`api-gateway`,`auth`,`billing`,`search`,`notifications`,`media-upload`,`webhooks`],l=s(42),u=c.map((e,t)=>{let n=80+t*25,r=Array.from({length:24},()=>n=Math.max(30,n+(l()-.48)*22)),i=Array.from({length:24},()=>Math.round(Math.max(0,(l()-.6)*12+(t===4?4:0)))),a=Array.from({length:24},(e,n)=>Math.round((400+t*90)*(.6+Math.sin(n/24*Math.PI)*.7)*(.9+l()*.2)));return{name:e,latency:r.map(Math.round),errors:i,requests:a}}),d=Array.from({length:24},(e,t)=>`${String(t).padStart(2,`0`)}:00`);function f(){let{formats:e}=r();return(0,o.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Service health`,className:`overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,children:(0,o.jsxs)(`table`,{className:`w-full min-w-[640px] text-[13px] tabular-nums`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{className:`border-b text-left text-[12px] text-muted-foreground`,children:[(0,o.jsx)(`th`,{className:`h-7 pr-3 font-medium`,children:`Service`}),(0,o.jsx)(`th`,{className:`pr-3 font-medium`,children:`p95 latency · 24h`}),(0,o.jsx)(`th`,{className:`pr-3 text-right font-medium`,children:`Now`}),(0,o.jsx)(`th`,{className:`pr-3 font-medium`,children:`Requests / h`}),(0,o.jsx)(`th`,{className:`pr-3 font-medium`,children:`Errors / h`}),(0,o.jsx)(`th`,{className:`text-right font-medium`,children:`Error rate`})]})}),(0,o.jsx)(`tbody`,{children:u.map(t=>{let n=t.requests.reduce((e,t)=>e+t,0),r=t.errors.reduce((e,t)=>e+t,0),a=t.latency[t.latency.length-1];return(0,o.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,o.jsx)(`td`,{className:`h-9 pr-3 font-mono text-[12px]`,children:t.name}),(0,o.jsx)(`td`,{className:`w-40 pr-3`,children:(0,o.jsx)(i,{label:`${t.name} p95 latency`,values:t.latency,labels:d,height:22,showExtremes:!0,formatValue:e=>`${e} ms`})}),(0,o.jsxs)(`td`,{className:`pr-3 text-right`,children:[a,` ms`]}),(0,o.jsx)(`td`,{className:`w-36 pr-3`,children:(0,o.jsx)(i,{label:`${t.name} requests per hour`,type:`area`,values:t.requests,labels:d,height:22,color:`var(--dkc-3)`,formatValue:e.number})}),(0,o.jsx)(`td`,{className:`w-36 pr-3`,children:(0,o.jsx)(i,{label:`${t.name} errors per hour`,type:`bar`,values:t.errors,labels:d,height:22,color:`var(--dkc-8)`})}),(0,o.jsx)(`td`,{className:`text-right`,children:e.percent(r/n)})]},t.name)})})]})})}var p=`import { Sparkline, useChartConfig } from "@kitora/charts"

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

const SERVICES = ["api-gateway", "auth", "billing", "search", "notifications", "media-upload", "webhooks"]
const rand = seeded(42)
const ROWS = SERVICES.map((name, s) => {
  let p95 = 80 + s * 25
  const latency = Array.from({ length: 24 }, () => (p95 = Math.max(30, p95 + (rand() - 0.48) * 22)))
  const errors = Array.from({ length: 24 }, () => Math.round(Math.max(0, (rand() - 0.6) * 12 + (s === 4 ? 4 : 0))))
  const requests = Array.from({ length: 24 }, (_, h) => Math.round((400 + s * 90) * (0.6 + Math.sin((h / 24) * Math.PI) * 0.7) * (0.9 + rand() * 0.2)))
  return { name, latency: latency.map(Math.round), errors, requests }
})
const HOURS = Array.from({ length: 24 }, (_, h) => \`\${String(h).padStart(2, "0")}:00\`)

/** Sparklines in a dense table: each cell is a word-sized chart you can hover; the numbers beside them are the latest values. */
export function SparklineTableDemo() {
  const { formats } = useChartConfig()
  return (
    <div tabIndex={0} role="region" aria-label="Service health" className="overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
      <table className="w-full min-w-[640px] text-[13px] tabular-nums">
        <thead>
          <tr className="border-b text-left text-[12px] text-muted-foreground">
            <th className="h-7 pr-3 font-medium">Service</th>
            <th className="pr-3 font-medium">p95 latency · 24h</th>
            <th className="pr-3 text-right font-medium">Now</th>
            <th className="pr-3 font-medium">Requests / h</th>
            <th className="pr-3 font-medium">Errors / h</th>
            <th className="text-right font-medium">Error rate</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => {
            const total = row.requests.reduce((s, v) => s + v, 0)
            const errs = row.errors.reduce((s, v) => s + v, 0)
            const now = row.latency[row.latency.length - 1]
            return (
              <tr key={row.name} className="border-b last:border-b-0">
                <td className="h-9 pr-3 font-mono text-[12px]">{row.name}</td>
                <td className="w-40 pr-3"><Sparkline label={\`\${row.name} p95 latency\`} values={row.latency} labels={HOURS} height={22} showExtremes formatValue={(v) => \`\${v} ms\`} /></td>
                <td className="pr-3 text-right">{now} ms</td>
                <td className="w-36 pr-3"><Sparkline label={\`\${row.name} requests per hour\`} type="area" values={row.requests} labels={HOURS} height={22} color="var(--dkc-3)" formatValue={formats.number} /></td>
                <td className="w-36 pr-3"><Sparkline label={\`\${row.name} errors per hour\`} type="bar" values={row.errors} labels={HOURS} height={22} color="var(--dkc-8)" /></td>
                <td className="text-right">{formats.percent(errs / total)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./sparkline-table-BFfasfNM.js`),[]));function m(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(e,{title:`Sparklines`,children:`Trends at the size of a word, where a full chart would not fit.`}),(0,o.jsx)(a,{n:1,title:`A service health table`,blurb:`Latency with its extremes, requests as an area, errors as bars. Hover any of them.`,code:p,children:(0,o.jsx)(f,{})})]})}export{m as component};