import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./color-picker-NZ72pw--.js";import{_ as n,f as r,y as i}from"./color-swatches-xuFXwr5t.js";import{Bc as a,Cc as o,Ic as s}from"./index-q72zUtm9.js";import{n as c}from"./lib-CDU_56K6.js";var l=e(a(),1),u=s();function d(){let[e,a]=(0,l.useState)(`#2563eb`),o=n(e);return(0,u.jsxs)(`div`,{className:`grid gap-3`,children:[(0,u.jsx)(t,{value:e,onChange:a,swatches:[],"aria-label":`Accent colour`}),(0,u.jsxs)(`p`,{className:`text-sm`,children:[`In HSL: `,(0,u.jsx)(`code`,{children:o?r(i(o)):`not a colour`})]})]})}var f=`import { useState } from "react"
import { ColorPicker } from "@kitora/pickers"
import { formatHsl, parseColor, rgbaToHsla } from "@kitora/pickers/core"

// Two layers of one package: the styled picker from the package root (its ui layer), and the colour maths from its
// core layer, which needs no React and no DOM, so a server or a script can use it too.
export function ColorLayers() {
  const [hex, setHex] = useState("#2563eb")
  const rgba = parseColor(hex)
  return (
    <div className="grid gap-3">
      <ColorPicker value={hex} onChange={setHex} swatches={[]} aria-label="Accent colour" />
      <p className="text-sm">
        In HSL: <code>{rgba ? formatHsl(rgbaToHsla(rgba)) : "not a colour"}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>o(()=>import(`./color-layers-BPZQe4dX.js`),[]));function p(e){let t={h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components},{Api:n,Entries:r,Relies:i,Snippet:a,Tiers:o}=t;return n||h(`Api`,!0),r||h(`Entries`,!0),i||h(`Relies`,!0),a||h(`Snippet`,!0),o||h(`Tiers`,!0),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h2,{children:`Layers inside a package`}),`
`,(0,u.jsx)(t.p,{children:`A package splits into entries that build on each other, from plain data to styled parts:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`core`}),`: state and maths with no DOM and no React, so a server, a script or another renderer can run it;`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`dom`}),`: browser behaviour (pointer, focus, measuring) on top of core;`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`react`}),`: hooks and unstyled parts on top of both;`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`ui`}),`: the styled parts, usually the package's root entry.`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`A layer imports only the layers below it, and the packages' layer tests fail an import that reaches upward. Import the lowest layer that does the job: the pickers' colour maths costs a fraction of the picker.`}),`
`,(0,u.jsx)(r,{package:`@kitora/pickers`}),`
`,(0,u.jsx)(a,{title:`Two layers of one package`,source:f,children:(0,u.jsx)(d,{})}),`
`,(0,u.jsx)(t.h2,{children:`Tiers between packages`}),`
`,(0,u.jsxs)(t.p,{children:[`Packages build on each other the same way. `,(0,u.jsx)(n,{package:`@kitora/primitives`}),` is the bottom: it depends on no other Kitora package. `,(0,u.jsx)(n,{package:`@kitora/ui`}),` builds on it, and every kit sits above the packages it uses. Dependencies only point down a tier, so a package never pulls in one built on top of it.`]}),`
`,(0,u.jsx)(o,{}),`
`,(0,u.jsx)(i,{on:[`packages/*/package.json`,`packages/*/src/__tests__/layers.test.ts`,`packages/pickers/src/core/color.ts`]})]})}function m(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(p,{...e})}):p(e)}function h(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default};