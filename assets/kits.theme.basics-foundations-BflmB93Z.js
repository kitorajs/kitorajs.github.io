import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,Jt as n,Qt as r,Zt as i,en as a,nn as o,qt as s,rn as c,zc as l}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as u}from"./example-B67lLz1F.js";var d=l(),f=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`];function p(){return(0,d.jsx)(`div`,{className:`grid gap-3`,children:[0,.25,.5,.875].map(e=>{let t=o(e);return(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsxs)(`span`,{className:`w-32 shrink-0 whitespace-nowrap font-mono text-[11.5px] text-muted-foreground tabular-nums`,children:[`--radius `,e,`rem`]}),(0,d.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:f.map(e=>(0,d.jsx)(`div`,{title:`radius-${e}: ${t[e]}rem`,className:`flex h-8 w-12 items-center justify-center border-2 border-primary/60 bg-primary/10 text-[10.5px] font-medium tabular-nums`,style:{borderRadius:`${t[e]}rem`},children:e},e))})]},e)})})}var m=`import { radiusScale, type RadiusName } from "@kitora/theme"

const NAMES: readonly RadiusName[] = ["xs", "sm", "md", "lg", "xl", "2xl"]

/** Every named radius derives from one base \`--radius\`, with the same multipliers as src/styles.css. */
export function BasicRadius() {
  return (
    <div className="grid gap-3">
      {[0, 0.25, 0.5, 0.875].map((base) => {
        const scale = radiusScale(base)
        return (
          <div key={base} className="flex items-center gap-3">
            <span className="w-32 shrink-0 whitespace-nowrap font-mono text-[11.5px] text-muted-foreground tabular-nums">--radius {base}rem</span>
            <div className="flex flex-wrap gap-2">
              {NAMES.map((n) => (
                <div key={n} title={\`radius-\${n}: \${scale[n]}rem\`} className="flex h-8 w-12 items-center justify-center border-2 border-primary/60 bg-primary/10 text-[10.5px] font-medium tabular-nums" style={{ borderRadius: \`\${scale[n]}rem\` }}>
                  {n}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./radius-BERy7H58.js`),[]));function h(){return(0,d.jsxs)(`table`,{className:`w-full text-[12.5px]`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{className:`border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide`,children:[(0,d.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:`Step`}),s.map(e=>(0,d.jsxs)(`th`,{className:`py-1 pr-3 font-medium capitalize`,children:[e,` (`,n[e].spacing,`rem)`]},e))]})}),(0,d.jsx)(`tbody`,{children:c(n.compact).map(({step:e},t)=>(0,d.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,d.jsx)(`td`,{className:`py-1 pr-3 font-mono text-[11.5px] tabular-nums`,children:e}),s.map(e=>{let r=c(n[e])[t]?.rem??0;return(0,d.jsx)(`td`,{className:`py-1 pr-3`,children:(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`h-2 rounded-sm bg-primary/70`,style:{width:`${r}rem`}}),(0,d.jsxs)(`span`,{className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[r,`rem`]})]})},e)})]},e))})]})}var g=`import { DENSITIES, DENSITY_TOKENS, spacingScale } from "@kitora/theme"

/** Tailwind v4 multiplies one \`--spacing\` unit for every size class, so a density is one variable. */
export function BasicSpacing() {
  return (
    <table className="w-full text-[12.5px]">
      <thead>
        <tr className="border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide">
          <th className="py-1 pr-3 font-medium">Step</th>
          {DENSITIES.map((d) => (
            <th key={d} className="py-1 pr-3 font-medium capitalize">
              {d} ({DENSITY_TOKENS[d].spacing}rem)
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {spacingScale(DENSITY_TOKENS.compact).map(({ step }, i) => (
          <tr key={step} className="border-b last:border-b-0">
            <td className="py-1 pr-3 font-mono text-[11.5px] tabular-nums">{step}</td>
            {DENSITIES.map((d) => {
              const rem = spacingScale(DENSITY_TOKENS[d])[i]?.rem ?? 0
              return (
                <td key={d} className="py-1 pr-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 rounded-sm bg-primary/70" style={{ width: \`\${rem}rem\` }} />
                    <span className="font-mono text-[11px] text-muted-foreground tabular-nums">{rem}rem</span>
                  </div>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./spacing-BxZiouYZ.js`),[]));var _=a(i.base,1.125);function v(){return(0,d.jsxs)(`table`,{className:`w-full text-[12.5px]`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{className:`border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide`,children:[(0,d.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:`Step`}),(0,d.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:`styles.css`}),(0,d.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:`Modular 1.125`}),(0,d.jsx)(`th`,{className:`py-1 font-medium`,children:`Sample`})]})}),(0,d.jsx)(`tbody`,{children:r.slice(0,9).map(e=>(0,d.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,d.jsxs)(`td`,{className:`py-1 pr-3 font-mono text-[11.5px]`,children:[`text-`,e]}),(0,d.jsxs)(`td`,{className:`py-1 pr-3 font-mono text-[11.5px] text-muted-foreground tabular-nums`,children:[i[e],`rem · `,i[e]*16,`px`]}),(0,d.jsxs)(`td`,{className:`py-1 pr-3 font-mono text-[11.5px] text-muted-foreground tabular-nums`,children:[_[e].toFixed(3),`rem`]}),(0,d.jsx)(`td`,{className:`truncate py-1 font-medium tracking-tight`,style:{fontSize:`${i[e]}rem`},children:`Ship it`})]},e))})]})}var y=`import { modularTypeScale, TYPE_SCALE, TYPE_STEPS } from "@kitora/theme"

// A major-second modular scale from the same 14px base, for comparison with the hand-tuned one.
const modular = modularTypeScale(TYPE_SCALE.base, 1.125)

/** The repo's compact type steps (\`--text-*\`) beside a generated modular scale. */
export function BasicType() {
  return (
    <table className="w-full text-[12.5px]">
      <thead>
        <tr className="border-b text-left text-[11px] text-muted-foreground uppercase tracking-wide">
          <th className="py-1 pr-3 font-medium">Step</th>
          <th className="py-1 pr-3 font-medium">styles.css</th>
          <th className="py-1 pr-3 font-medium">Modular 1.125</th>
          <th className="py-1 font-medium">Sample</th>
        </tr>
      </thead>
      <tbody>
        {TYPE_STEPS.slice(0, 9).map((step) => (
          <tr key={step} className="border-b last:border-b-0">
            <td className="py-1 pr-3 font-mono text-[11.5px]">text-{step}</td>
            <td className="py-1 pr-3 font-mono text-[11.5px] text-muted-foreground tabular-nums">
              {TYPE_SCALE[step]}rem · {TYPE_SCALE[step] * 16}px
            </td>
            <td className="py-1 pr-3 font-mono text-[11.5px] text-muted-foreground tabular-nums">{modular[step].toFixed(3)}rem</td>
            <td className="truncate py-1 font-medium tracking-tight" style={{ fontSize: \`\${TYPE_SCALE[step]}rem\` }}>
              Ship it
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>t(()=>import(`./type-cpLRt8a2.js`),[]));function b(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`Basics: foundations`,children:`The non-colour scales, with the same values src/styles.css ships.`}),(0,d.jsx)(u,{n:1,title:`Radius`,blurb:"One `--radius` base; `radius-xs` … `radius-2xl` are fixed multiples of it.",code:m,children:(0,d.jsx)(p,{})}),(0,d.jsx)(u,{n:2,title:`Spacing and density`,blurb:"Tailwind v4 sizes are multiples of `--spacing`. Compact is the repo's 0.25rem; comfortable is 0.3rem.",code:g,children:(0,d.jsx)(h,{})}),(0,d.jsx)(u,{n:3,title:`Type`,blurb:"The compact `--text-*` steps beside a generated modular scale.",code:y,children:(0,d.jsx)(v,{})})]})}export{b as component};