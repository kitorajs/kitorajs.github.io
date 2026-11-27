import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,Lt as n,Wt as r,zc as i}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as a}from"./example-B67lLz1F.js";var o=i(),s=n(r({brand:{l:.5,c:.18,h:270},radius:.375}));function c(){return(0,o.jsx)(`pre`,{tabIndex:0,"aria-label":`Generated CSS variables`,className:`max-h-72 overflow-auto rounded-md border bg-muted/40 p-2.5 font-mono text-[11.5px] leading-relaxed`,children:s})}var l=`import { buildTheme, toCss } from "@kitora/theme/core"

// The core entry has no DOM and no React, so it runs anywhere: in a build script this is \`writeFileSync("theme.css", toCss(buildTheme(...)))\`.
const css = toCss(buildTheme({ brand: { l: 0.5, c: 0.18, h: 270 }, radius: 0.375 }))

/** A generated theme as CSS variables in the names src/styles.css already uses. */
export function BasicExportCss() {
  return <pre tabIndex={0} aria-label="Generated CSS variables" className="max-h-72 overflow-auto rounded-md border bg-muted/40 p-2.5 font-mono text-[11.5px] leading-relaxed">{css}</pre>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(l,()=>t(()=>import(`./export-css-Cue5DoPU.js`),[]));function u(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(e,{title:`Basics: export`,children:`The core is plain TypeScript, so a theme can be generated in a build script and written to a file.`}),(0,o.jsx)(a,{n:1,title:`CSS variables`,blurb:"`toCss(buildTheme(config))`: `:root` for light and foundations, `.dark` for dark.",code:l,children:(0,o.jsx)(c,{})})]})}export{u as component};