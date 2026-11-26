import{Cc as e,Ic as t,ft as n}from"./index-9y5uwRd3.js";import{n as r}from"./lib-NYJzi901.js";var i=t(),a=`app:language`;function o(){return(0,i.jsx)(`script`,{dangerouslySetInnerHTML:{__html:n(a)}})}var s=`import { languageBootScript } from "@kitora/theme/dom"

const LANGUAGE_KEY = "app:language"

// Render this inside the server-rendered <head>: the script sets the saved design language before the first paint, so a
// reload does not flash the default one. Use the same key as the LanguageProvider's storageKey.
export function DocumentHead() {
  return <script dangerouslySetInnerHTML={{ __html: languageBootScript(LANGUAGE_KEY) }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(s,()=>e(()=>import(`./document-head-r7UnjXJe.js`),[]));function c(e){let t={code:`code`,h2:`h2`,p:`p`,...r(),...e.components},{Relies:n,Snippet:a}=t;return n||u(`Relies`,!0),a||u(`Snippet`,!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`The components render on the server: the gallery's own production build server-renders every page with them, and every example in these guides is also rendered with `,(0,i.jsx)(t.code,{children:`renderToString`}),` from `,(0,i.jsx)(t.code,{children:`react-dom/server`}),` by a test.`]}),`
`,(0,i.jsx)(t.h2,{children:`No flash of the default look`}),`
`,(0,i.jsxs)(t.p,{children:[`A saved design language lives in `,(0,i.jsx)(t.code,{children:`localStorage`}),`, which the server cannot read. Put the boot script in the server-rendered `,(0,i.jsx)(t.code,{children:`<head>`}),`: it sets the saved language before the first paint, so a reload never shows the default first. Use the same key as the provider's `,(0,i.jsx)(t.code,{children:`storageKey`}),`.`]}),`
`,(0,i.jsx)(a,{title:`The document head`,source:s,children:(0,i.jsx)(o,{})}),`
`,(0,i.jsx)(n,{on:[`packages/theme/src/dom/language.ts`,`src/docs/examples/__tests__/getting-started.test.tsx`]})]})}function l(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{l as default};