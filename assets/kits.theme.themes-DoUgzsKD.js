import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,Ft as n,Wt as r,X as i,zc as a}from"./index-BZuUy872.js";import{t as o}from"./sampler-CAYp_AQx.js";import"./kit-gallery-BBavj2rC.js";import{t as s}from"./example-B67lLz1F.js";var c=a(),l=n.slice(0,4).map((e,t)=>({preset:e,theme:r({brand:e.color,radius:[.25,.5,.75,1][t]??.5,density:t%2?`comfortable`:`compact`})}));function u(){return(0,c.jsx)(`div`,{className:`grid gap-3 2xl:grid-cols-2`,children:l.map(({preset:e,theme:t},n)=>(0,c.jsxs)(`figure`,{className:`grid gap-1`,children:[(0,c.jsxs)(`figcaption`,{className:`text-[12px] text-muted-foreground`,children:[(0,c.jsx)(`b`,{className:`text-foreground`,children:e.label}),` · radius `,t.config.radius,`rem · `,t.config.density,` · `,n%2?`dark`:`follows page`]}),(0,c.jsx)(i,{theme:t,scheme:n%2?`dark`:void 0,className:`rounded-lg border`,children:(0,c.jsx)(o,{})})]},e.id))})}var d=`import { BRAND_PRESETS, buildTheme, ThemeSampler, ThemeScope } from "@kitora/theme"

const THEMES = BRAND_PRESETS.slice(0, 4).map((p, i) => ({ preset: p, theme: buildTheme({ brand: p.color, radius: [0.25, 0.5, 0.75, 1][i] ?? 0.5, density: i % 2 ? "comfortable" : "compact" }) }))

/** Four themes on one page, each a ThemeScope around the same sampler; half pinned dark. */
export function BrandGallery() {
  return (
    <div className="grid gap-3 2xl:grid-cols-2">
      {THEMES.map(({ preset, theme }, i) => (
        <figure key={preset.id} className="grid gap-1">
          <figcaption className="text-[12px] text-muted-foreground">
            <b className="text-foreground">{preset.label}</b> · radius {theme.config.radius}rem · {theme.config.density} · {i % 2 ? "dark" : "follows page"}
          </figcaption>
          <ThemeScope theme={theme} scheme={i % 2 ? "dark" : undefined} className="rounded-lg border">
            <ThemeSampler />
          </ThemeScope>
        </figure>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./brand-gallery-9WZiiajO.js`),[]));function f(){return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(e,{title:`Many themes`,children:`Scopes are plain CSS variables on a wrapper, so any number of themes can share a page.`}),(0,c.jsx)(s,{n:1,title:`Four themes, one page`,blurb:`Different brands, radii and densities around the same sampler.`,code:d,children:(0,c.jsx)(u,{})})]})}export{f as component};