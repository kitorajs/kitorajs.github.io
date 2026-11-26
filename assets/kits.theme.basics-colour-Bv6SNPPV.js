import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{r as t}from"./contrast-XXF7XhZ8.js";import{s as n}from"./kit-docs-BUovISd0.js";import{$t as r,Bc as i,Cc as a,Ht as o,Ic as s,Wt as c,Y as l,Zt as u,in as d}from"./index-B9ukmIN1.js";import{t as f}from"./controls-PZrLeW-4.js";import{n as p,r as m,t as h}from"./swatches-sTM5px4q.js";import"./kit-gallery-Bph7isB2.js";import{t as g}from"./example-BGnSQG2Y.js";import{n as _,t as v}from"./checker-DRc-y1j3.js";var y=e(i(),1),b=s();function x(){let[e,t]=(0,y.useState)({l:.55,c:.18,h:250});return(0,b.jsxs)(`div`,{className:`grid gap-3`,children:[(0,b.jsx)(`div`,{className:`w-64`,children:(0,b.jsx)(f,{label:`Seed colour`,value:e,onChange:t})}),(0,b.jsx)(h,{scale:u(e),marked:[r(e.l)]})]})}var S=`import { useState } from "react"
import { ColorField, generateScale, nearestStep, ScaleSwatches, type Oklch } from "@kitora/theme"

/** One colour in, an 11-step OKLCH ramp out; the seed lands exactly on its nearest step (outlined). */
export function BasicScale() {
  const [seed, setSeed] = useState<Oklch>({ l: 0.55, c: 0.18, h: 250 })
  return (
    <div className="grid gap-3">
      <div className="w-64">
        <ColorField label="Seed colour" value={seed} onChange={setSeed} />
      </div>
      <ScaleSwatches scale={generateScale(seed)} marked={[nearestStep(seed.l)]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./scale-CD85HpeL.js`),[]));var C=o({brand:{l:.8,c:.16,h:75}});function w(){let e=c(C,`light`),{results:n}=d(e);return(0,b.jsxs)(`div`,{className:`grid gap-2`,children:[(0,b.jsx)(l,{theme:C,scheme:`light`,className:`rounded-md border px-2`,children:(0,b.jsx)(t,{results:n.slice(0,7),tokens:e})}),(0,b.jsx)(`ul`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:C.adjustments.map(e=>(0,b.jsxs)(`li`,{children:[e.scheme,` --`,e.token,`: L `,e.from.l.toFixed(3),` → `,e.to.l.toFixed(3),` (`,e.reason,`)`]},`${e.scheme}-${e.token}`))})]})}var T=`import { auditContrast, buildTheme, ContrastReport, ThemeScope, tokenMap } from "@kitora/theme"

// Amber is too light for white text or for text on white; the generator darkens it until both pass.
const theme = buildTheme({ brand: { l: 0.8, c: 0.16, h: 75 } })

/** \`buildTheme\` checks every foreground pair it generates and reports what it moved to pass. */
export function BasicPairs() {
  const tokens = tokenMap(theme, "light")
  const { results } = auditContrast(tokens)
  return (
    <div className="grid gap-2">
      <ThemeScope theme={theme} scheme="light" className="rounded-md border px-2">
        <ContrastReport results={results.slice(0, 7)} tokens={tokens} />
      </ThemeScope>
      <ul className="font-mono text-[11.5px] text-muted-foreground">
        {theme.adjustments.map((a) => (
          <li key={\`\${a.scheme}-\${a.token}\`}>
            {a.scheme} --{a.token}: L {a.from.l.toFixed(3)} → {a.to.l.toFixed(3)} ({a.reason})
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>a(()=>import(`./pairs-BVl8JUZF.js`),[]));var E=o({brand:{l:.6,c:.12,h:185}});function D(){return(0,b.jsxs)(`div`,{className:`grid gap-3`,children:[(0,b.jsx)(p,{color:{l:.6,c:.12,h:185},label:`Brand seed`}),(0,b.jsx)(m,{tokens:E.light,only:[`background`,`foreground`,`primary`,`primary-foreground`,`muted`,`muted-foreground`,`border`,`ring`]})]})}var O=`import { buildTheme, Swatch, TokenGrid } from "@kitora/theme"

// A teal brand; every colour token below is generated from this one seed.
const theme = buildTheme({ brand: { l: 0.6, c: 0.12, h: 185 } })

/** The seed as one \`Swatch\`, then a scheme's colour tokens as a \`TokenGrid\` (here the first eight). */
export function BasicTokens() {
  return (
    <div className="grid gap-3">
      <Swatch color={{ l: 0.6, c: 0.12, h: 185 }} label="Brand seed" />
      <TokenGrid tokens={theme.light} only={["background", "foreground", "primary", "primary-foreground", "muted", "muted-foreground", "border", "ring"]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./tokens-D5ybNi_Z.js`),[]));function k(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`Basics: colour`,children:"Every colour in a theme starts from one brand colour in OKLCH. `generateScale` makes the ramp; `buildTheme` makes the tokens and checks each foreground pair."}),(0,b.jsx)(g,{n:1,title:`A ramp from one colour`,blurb:`Type a colour or use the picker. The outlined step is the seed itself; every step is in sRGB gamut.`,code:S,children:(0,b.jsx)(x,{})}),(0,b.jsx)(g,{n:2,title:`Contrast-checked pairs`,blurb:"An amber brand fails as text on white, so the generator darkens `--primary` until it reaches 4.5:1 and says so.",code:T,children:(0,b.jsx)(w,{})}),(0,b.jsx)(g,{n:3,title:`Checking one pair`,blurb:`Any two colours, graded for normal text, large text and UI. Fix moves the text colour's lightness the least distance that passes.`,code:v,children:(0,b.jsx)(_,{})}),(0,b.jsx)(g,{n:4,title:`Swatches and the token grid`,blurb:"One labelled `Swatch` for the seed, and a scheme's colour tokens as a `TokenGrid`, each with its OKLCH value as text.",code:O,children:(0,b.jsx)(D,{})})]})}export{k as component};