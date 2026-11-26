import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{r as t,t as n}from"./contrast-Crdckz9i.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{t as i}from"./refresh-cw-Gzbe3OkD.js";import{Bc as a,Bt as o,Cc as s,Ht as c,Ic as l,Lt as u,Nt as d,Wt as f,dt as p,in as m,ti as h,un as g}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as _}from"./example-CZLJLtIC.js";import{n as v,t as y}from"./checker-D40ilApA.js";var b=e(a(),1),x=l();function S(){let e=(0,b.useRef)(null),[n,r]=(0,b.useState)([]),[a,o]=(0,b.useState)(0),s=()=>{if(!e.current)return;let t=m(p(e.current,u));r(t.results),o(t.missing.length)};(0,b.useEffect)(s,[]);let c=n.filter(e=>e.level===`fail`).length;return(0,x.jsxs)(`div`,{ref:e,className:`grid gap-2`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 text-[12.5px]`,children:[(0,x.jsxs)(`span`,{className:`tabular-nums`,children:[n.length,` pairs · `,(0,x.jsxs)(`b`,{className:c?`text-destructive`:`text-foreground`,children:[c,` failing`]}),a?` · ${a} unreadable`:``]}),(0,x.jsxs)(h,{size:`sm`,variant:`outline`,className:`ml-auto`,onClick:s,children:[(0,x.jsx)(i,{}),` Re-check`]})]}),(0,x.jsx)(t,{results:n,caption:`Live page tokens`})]})}var C=`import { useEffect, useRef, useState } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { auditContrast, ContrastReport, COLOR_TOKENS, readTokens, type ContrastResult } from "@kitora/theme"

/**
 * Audits the tokens this page is actually painting with right now (src/styles.css plus any Theme Lab
 * override), read off the computed style. Toggle the site's dark mode and press Re-check.
 */
export function LiveAudit() {
  const ref = useRef<HTMLDivElement>(null)
  const [results, setResults] = useState<readonly ContrastResult[]>([])
  const [missing, setMissing] = useState(0)
  const check = () => {
    if (!ref.current) return
    const audit = auditContrast(readTokens(ref.current, COLOR_TOKENS))
    setResults(audit.results)
    setMissing(audit.missing.length)
  }
  useEffect(check, [])
  const fails = results.filter((r) => r.level === "fail").length
  return (
    <div ref={ref} className="grid gap-2">
      <div className="flex items-center gap-2 text-[12.5px]">
        <span className="tabular-nums">
          {results.length} pairs · <b className={fails ? "text-destructive" : "text-foreground"}>{fails} failing</b>
          {missing ? \` · \${missing} unreadable\` : ""}
        </span>
        <Button size="sm" variant="outline" className="ml-auto" onClick={check}>
          <RefreshCw /> Re-check
        </Button>
      </div>
      <ContrastReport results={results} caption="Live page tokens" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./live-audit-Cuh-R5Cv.js`),[]));function w(){return(0,x.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Preset brands by scheme`,className:`overflow-x-auto rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:(0,x.jsxs)(`table`,{className:`w-full text-[12.5px]`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide`,children:[(0,x.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`Brand`}),o.map(e=>(0,x.jsxs)(`th`,{className:`py-1 pr-2 font-medium`,children:[e,` primary`]},e)),(0,x.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`Text pairs`}),(0,x.jsx)(`th`,{className:`py-1 text-right font-medium`,children:`Moves`})]})}),(0,x.jsx)(`tbody`,{children:d.map(e=>{let t=c({brand:e.color}),r=o.flatMap(e=>m(f(t,e)).results.filter(e=>e.use===`text`&&e.level===`fail`));return(0,x.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,x.jsx)(`td`,{className:`py-1 pr-2`,children:(0,x.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`span`,{"aria-hidden":!0,className:`size-3.5 rounded-full`,style:{background:g(e.color)}}),e.label]})}),o.map(e=>(0,x.jsx)(`td`,{className:`py-1 pr-2`,children:(0,x.jsx)(`span`,{className:`inline-flex h-6 items-center gap-2 rounded-md px-2 font-mono text-[11px]`,style:{background:g(t[e].primary),color:g(t[e][`primary-foreground`])},children:g(t[e].primary)})},e)),(0,x.jsx)(`td`,{className:`py-1 pr-2`,children:(0,x.jsx)(n,{level:r.length?`fail`:`AA`,label:r.length?`${r.length}`:`All`})}),(0,x.jsx)(`td`,{className:`py-1 text-right tabular-nums text-muted-foreground`,children:t.adjustments.length})]},e.id)})})]})})}var T=`import { auditContrast, BRAND_PRESETS, buildTheme, ContrastBadge, formatOklch, SCHEMES, tokenMap } from "@kitora/theme"

/** Every preset brand × scheme: the generated primary, its label, and whether all text pairs pass. */
export function BrandMatrix() {
  return (
    // Wider than a phone: the region scrolls sideways and is a Tab stop so the keyboard can scroll it too.
    <div tabIndex={0} role="region" aria-label="Preset brands by scheme" className="overflow-x-auto rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr className="border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide">
            <th className="py-1 pr-2 font-medium">Brand</th>
            {SCHEMES.map((s) => (
              <th key={s} className="py-1 pr-2 font-medium">
                {s} primary
              </th>
            ))}
            <th className="py-1 pr-2 font-medium">Text pairs</th>
            <th className="py-1 text-right font-medium">Moves</th>
          </tr>
        </thead>
        <tbody>
          {BRAND_PRESETS.map((p) => {
            const theme = buildTheme({ brand: p.color })
            const fails = SCHEMES.flatMap((s) => auditContrast(tokenMap(theme, s)).results.filter((r) => r.use === "text" && r.level === "fail"))
            return (
              <tr key={p.id} className="border-b last:border-b-0">
                <td className="py-1 pr-2">
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="size-3.5 rounded-full" style={{ background: formatOklch(p.color) }} />
                    {p.label}
                  </span>
                </td>
                {SCHEMES.map((s) => (
                  <td key={s} className="py-1 pr-2">
                    <span className="inline-flex h-6 items-center gap-2 rounded-md px-2 font-mono text-[11px]" style={{ background: formatOklch(theme[s].primary), color: formatOklch(theme[s]["primary-foreground"]) }}>
                      {formatOklch(theme[s].primary)}
                    </span>
                  </td>
                ))}
                <td className="py-1 pr-2">
                  <ContrastBadge level={fails.length ? "fail" : "AA"} label={fails.length ? \`\${fails.length}\` : "All"} />
                </td>
                <td className="py-1 text-right tabular-nums text-muted-foreground">{theme.adjustments.length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>s(()=>import(`./brand-matrix-_JDKQ7z2.js`),[]));function E(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(r,{title:`Contrast`,children:"WCAG 2 contrast through a swappable `ContrastAlgorithm`."}),(0,x.jsx)(_,{n:1,title:`Contrast checker`,blurb:`Hex, rgb() or oklch() in; ratio, grades and a fix out.`,code:y,children:(0,x.jsx)(v,{})}),(0,x.jsx)(_,{n:2,title:`Live audit of this page`,blurb:`The tokens this page is painting with right now, read off the computed style and audited.`,code:C,children:(0,x.jsx)(S,{})}),(0,x.jsx)(_,{n:3,title:`Every preset brand × scheme`,blurb:`The generated primary per scheme and whether every text pair passes AA.`,code:T,children:(0,x.jsx)(w,{})})]})}export{E as component};