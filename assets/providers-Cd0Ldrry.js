import{i as e}from"./toaster-CBJXOSeo.js";import{Cc as t,Ic as n,K as r,Qr as i,Xr as a,Yr as o,Zr as s,ht as c,ti as l,wn as u}from"./index-q72zUtm9.js";import{n as d}from"./lib-CDU_56K6.js";var f=n();function p({children:t}){return(0,f.jsxs)(r,{storageKey:`app:language`,children:[(0,f.jsx)(s,{children:(0,f.jsx)(u,{children:t})}),(0,f.jsx)(e,{})]})}function m(){return(0,f.jsx)(p,{children:(0,f.jsxs)(o,{children:[(0,f.jsx)(i,{render:(0,f.jsx)(l,{onClick:()=>c(`Saved`)}),children:`Save`}),(0,f.jsx)(a,{children:`Saves your changes`})]})})}var h=`import type { ReactNode } from "react"
import { toast, Toaster } from "@kitora/feedback"
import { OverlayUiProvider } from "@kitora/overlay"
import { LanguageProvider } from "@kitora/theme/react"
import { Button } from "@kitora/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kitora/ui/tooltip"

/** Wrap your app once, at the root: the design language, tooltips' shared delay, the overlay stack, and one toaster. */
function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider storageKey="app:language">
      <TooltipProvider>
        <OverlayUiProvider>{children}</OverlayUiProvider>
      </TooltipProvider>
      <Toaster />
    </LanguageProvider>
  )
}

export function AppProviders() {
  return (
    <Providers>
      <Tooltip>
        <TooltipTrigger render={<Button onClick={() => toast("Saved")} />}>Save</TooltipTrigger>
        <TooltipContent>Saves your changes</TooltipContent>
      </Tooltip>
    </Providers>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./app-providers-BiczoepB.js`),[]));function g(e){let t={code:`code`,li:`li`,p:`p`,ul:`ul`,...d(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||v(`Api`,!0),r||v(`Relies`,!0),i||v(`Snippet`,!0),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.p,{children:`Most components work without a provider. Four live at the root of an app, once:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`LanguageProvider`}),` from `,(0,f.jsx)(n,{package:`@kitora/theme`}),` holds the design language (tokens, component styles, layout presets) and remembers the choice under its `,(0,f.jsx)(t.code,{children:`storageKey`}),`. Use `,(0,f.jsx)(t.code,{children:`ThemeProvider`}),` instead when the same provider should also own light, dark and density.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`TooltipProvider`}),` from `,(0,f.jsx)(n,{name:`Tooltip`}),` shares one open delay between tooltips, so moving from one to the next opens it at once.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`OverlayUiProvider`}),` from `,(0,f.jsx)(n,{package:`@kitora/overlay`}),` runs the overlay stack: dialogs, sheets, drawers and confirms opened from code, and the image preview's lightbox.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`Toaster`}),` from `,(0,f.jsx)(n,{package:`@kitora/feedback`}),` draws every `,(0,f.jsx)(t.code,{children:`toast(…)`}),` raised anywhere in the app.`]}),`
`]}),`
`,(0,f.jsx)(i,{title:`The root of an app`,source:h,children:(0,f.jsx)(m,{})}),`
`,(0,f.jsx)(r,{on:[`src/routes/__root.tsx`,`packages/theme/src/react/index.tsx`,`packages/overlay/src/ui/provider.tsx`,`packages/feedback/src/ui/toaster.tsx`]})]})}function _(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(g,{...e})}):g(e)}function v(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};