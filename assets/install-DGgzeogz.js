import{Cc as e,Ht as t,Ic as n,It as r}from"./index-9y5uwRd3.js";import{n as i}from"./lib-NYJzi901.js";var a=n(),o=r(t());function s(){return(0,a.jsx)(`pre`,{className:`max-h-64 w-full overflow-auto rounded-md border p-3 font-mono text-[11px]`,tabIndex:0,"aria-label":`Generated stylesheet`,children:o})}var c=`import { buildTheme, toTailwindV4 } from "@kitora/theme/core"

// Write this string to the CSS file your build reads, in place of \`@import "tailwindcss"\` (it starts with that import):
// the components' classes read these tokens. buildTheme takes your brand colour, radius, density and more.
const stylesheet = toTailwindV4(buildTheme())

export function ThemeTokens() {
  return (
    <pre className="max-h-64 w-full overflow-auto rounded-md border p-3 font-mono text-[11px]" tabIndex={0} aria-label="Generated stylesheet">
      {stylesheet}
    </pre>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(c,()=>e(()=>import(`./theme-tokens-DunGwirB.js`),[]));function l(e){let t={code:`code`,h2:`h2`,p:`p`,...i(),...e.components},{Api:n,CssImports:r,Install:o,PackageTable:l,Relies:u,Snippet:f}=t;return n||d(`Api`,!0),r||d(`CssImports`,!0),o||d(`Install`,!0),l||d(`PackageTable`,!0),u||d(`Relies`,!0),f||d(`Snippet`,!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[`Kitora is a set of packages under the `,(0,a.jsx)(t.code,{children:`@kitora`}),` scope; install the ones you use. Each package's page lists its entries, their size budgets and its dependencies.`]}),`
`,(0,a.jsx)(l,{packages:[`@kitora/ui`,`@kitora/form`,`@kitora/datagrid`,`@kitora/overlay`,`@kitora/theme`]}),`
`,(0,a.jsx)(t.h2,{children:`Install`}),`
`,(0,a.jsx)(t.p,{children:`Start with the styled components. The line below adds the package, the primitives whose behaviour stylesheet it needs, and its peers:`}),`
`,(0,a.jsx)(o,{packages:[`@kitora/ui`]}),`
`,(0,a.jsx)(t.h2,{children:`CSS`}),`
`,(0,a.jsx)(t.p,{children:`The components carry Tailwind v4 class names, so your own Tailwind build generates their CSS, for the packages you use only. Put these imports in the CSS file your build reads:`}),`
`,(0,a.jsx)(r,{packages:[`@kitora/ui`]}),`
`,(0,a.jsxs)(t.p,{children:[`Each package you add has its own `,(0,a.jsx)(t.code,{children:`tailwind.css`}),`; its page shows the line. For a smaller stylesheet, `,(0,a.jsx)(t.code,{children:`@kitora/ui`}),` also has one file per module (`,(0,a.jsx)(t.code,{children:`@kitora/ui/tailwind/button.css`}),` and so on).`]}),`
`,(0,a.jsx)(t.h2,{children:`Design tokens`}),`
`,(0,a.jsxs)(t.p,{children:[`The classes read design tokens (`,(0,a.jsx)(t.code,{children:`--background`}),`, `,(0,a.jsx)(t.code,{children:`--primary`}),`, `,(0,a.jsx)(t.code,{children:`--radius`}),` and the rest) through Tailwind theme variables. Generate them with `,(0,a.jsx)(n,{package:`@kitora/theme`}),`: the stylesheet it writes starts with `,(0,a.jsx)(t.code,{children:`@import "tailwindcss"`}),`, so it takes that line's place.`]}),`
`,(0,a.jsx)(f,{title:`Generate the design tokens`,source:c,children:(0,a.jsx)(s,{})}),`
`,(0,a.jsx)(u,{on:[`packages/*/package.json`,`packages/theme/src/core/export.ts`,`scripts/docs-api/packages.ts`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function d(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};