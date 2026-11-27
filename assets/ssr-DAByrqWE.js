import{Ec as e,mt as t,zc as n}from"./index-BZuUy872.js";import{n as r}from"./lib-C0E9zsFn.js";var i=n(),a={storageKey:`app`,defaultMode:`system`};function o(){return(0,i.jsx)(`script`,{dangerouslySetInnerHTML:{__html:t(a)}})}var s=`import { themeInitScript } from "@kitora/theme/dom"

// The same options as the app's <ThemeProvider storageKey="app" defaultMode="system">: the script reads the keys the
// provider writes, so the two cannot drift.
const THEME_OPTIONS = { storageKey: "app", defaultMode: "system" } as const

// Render this first in the server-rendered <head>: before the first paint it puts the saved mode (light, dark or the
// system's), the density and the design language on <html>, so a reload in dark mode never shows a white frame and a
// saved language never flashes the default.
export function DocumentHead() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitScript(THEME_OPTIONS) }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(s,()=>e(()=>import(`./document-head-CVKLlGDo.js`),[]));var c={storageKey:`app`,defaultMode:`system`},l=()=>({name:`kitora-theme-init`,transformIndexHtml:()=>[{tag:`script`,children:t(c),injectTo:`head-prepend`}]});function u(){return(0,i.jsxs)(`figure`,{className:`flex w-full flex-col gap-1.5`,children:[(0,i.jsxs)(`figcaption`,{className:`text-[12px] text-muted-foreground`,children:[`The `,l().name,` plugin puts this first in <head>:`]}),(0,i.jsx)(`pre`,{className:`max-h-48 overflow-auto rounded-md border p-3 font-mono text-[11px] break-all whitespace-pre-wrap`,tabIndex:0,"aria-label":`The pre-paint script`,children:t(c)})]})}var d=`import { themeInitScript } from "@kitora/theme/dom"
import type { Plugin } from "vite"

// One set of options for the app's <ThemeProvider {...THEME_OPTIONS}> and for the script (keep it in its own file).
const THEME_OPTIONS = { storageKey: "app", defaultMode: "system" } as const

// In vite.config.ts: \`plugins: [themeInit(), react(), tailwindcss()]\`. A single-page app's index.html is static, so the
// script goes in at build time, first in <head>.
const themeInit = (): Plugin => ({
  name: "kitora-theme-init",
  transformIndexHtml: () => [{ tag: "script", children: themeInitScript(THEME_OPTIONS), injectTo: "head-prepend" }],
})

// What the plugin puts in <head>: plain JavaScript, no imports.
export function SpaInitScript() {
  return (
    <figure className="flex w-full flex-col gap-1.5">
      <figcaption className="text-[12px] text-muted-foreground">The {themeInit().name} plugin puts this first in &lt;head&gt;:</figcaption>
      <pre className="max-h-48 overflow-auto rounded-md border p-3 font-mono text-[11px] break-all whitespace-pre-wrap" tabIndex={0} aria-label="The pre-paint script">
        {themeInitScript(THEME_OPTIONS)}
      </pre>
    </figure>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>e(()=>import(`./spa-init-script-nSEHNRNd.js`),[]));function f(e){let t={code:`code`,h2:`h2`,p:`p`,...r(),...e.components},{Relies:n,Snippet:a}=t;return n||m(`Relies`,!0),a||m(`Snippet`,!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`The components render on the server: the gallery's own production build server-renders every page with them, and every example in these guides is also rendered with `,(0,i.jsx)(t.code,{children:`renderToString`}),` from `,(0,i.jsx)(t.code,{children:`react-dom/server`}),` by a test.`]}),`
`,(0,i.jsx)(t.h2,{children:`No flash of the default look`}),`
`,(0,i.jsxs)(t.p,{children:[`A saved mode, density and design language live in `,(0,i.jsx)(t.code,{children:`localStorage`}),`, which the server cannot read, and the provider reads them only after React starts. Without help, a user who chose dark sees a white first frame on every hard load. `,(0,i.jsx)(t.code,{children:`themeInitScript`}),` from `,(0,i.jsx)(t.code,{children:`@kitora/theme/dom`}),` returns a small dependency-free script for the top of `,(0,i.jsx)(t.code,{children:`<head>`}),`: before the first paint it puts the saved mode (`,(0,i.jsx)(t.code,{children:`dark`}),` class, `,(0,i.jsx)(t.code,{children:`color-scheme`}),`, `,(0,i.jsx)(t.code,{children:`data-theme`}),`; "system" resolved from `,(0,i.jsx)(t.code,{children:`prefers-color-scheme`}),`), the density and the design language on `,(0,i.jsx)(t.code,{children:`<html>`}),`. Pass it the same `,(0,i.jsx)(t.code,{children:`storageKey`}),` and `,(0,i.jsx)(t.code,{children:`defaultMode`}),` as the `,(0,i.jsx)(t.code,{children:`ThemeProvider`}),`: it is built from the provider's own keys, so the two cannot drift. The provider leaves `,(0,i.jsx)(t.code,{children:`<html>`}),` as the script set it until it has read the stored choice.`]}),`
`,(0,i.jsx)(a,{title:`The document head`,source:s,children:(0,i.jsx)(o,{})}),`
`,(0,i.jsxs)(t.p,{children:[`In a single-page app (Vite, no server rendering) the HTML file is static: put the script in it at build time. The Kitora starter does it with a few lines in `,(0,i.jsx)(t.code,{children:`vite.config.ts`}),`, from one options object it also passes to the provider:`]}),`
`,(0,i.jsx)(a,{title:`A single-page app (Vite)`,source:d,children:(0,i.jsx)(u,{})}),`
`,(0,i.jsxs)(t.p,{children:[`A page with its own light and dark switch and only a `,(0,i.jsx)(t.code,{children:`LanguageProvider`}),` passes `,(0,i.jsx)(t.code,{children:`density: false`}),` (it keeps no density on `,(0,i.jsx)(t.code,{children:`<html>`}),`); `,(0,i.jsx)(t.code,{children:`language: false`}),` leaves the language out.`]}),`
`,(0,i.jsx)(n,{on:[`packages/theme/src/dom/index.ts`,`packages/theme/src/dom/language.ts`,`packages/theme/src/__tests__/init-script.test.tsx`,`src/docs/examples/__tests__/getting-started.test.tsx`]})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}function m(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default};