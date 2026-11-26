import{t as e}from"./input-DQo0XDsx.js";import{Cc as t,Ic as n,K as r,et as i,ti as a}from"./index-B9ukmIN1.js";import{t as o}from"./checkbox-DcWEP8V9.js";import{n as s}from"./lib-CKWRlO6G.js";var c=n();function l(){let{language:e,choices:t,setLanguage:n}=i();return(0,c.jsx)(`div`,{role:`group`,"aria-label":`Design language`,className:`flex flex-wrap gap-1`,children:t.map(t=>(0,c.jsx)(a,{size:`sm`,variant:t.id===e.id?`default`:`outline`,"aria-pressed":t.id===e.id,onClick:()=>n(t.id),children:t.label},t.id))})}function u(){return(0,c.jsxs)(r,{target:`scope`,storageKey:`docs:language-example`,className:`grid gap-3`,children:[(0,c.jsx)(l,{}),(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,c.jsx)(e,{"aria-label":`Email`,placeholder:`you@example.com`,className:`max-w-48`}),(0,c.jsx)(o,{label:`Remember me`,defaultChecked:!0}),(0,c.jsx)(a,{children:`Sign in`})]})]})}var d=`import { LanguageProvider, useLanguage } from "@kitora/theme/react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Input } from "@kitora/ui/input"

function LanguagePicker() {
  const { language, choices, setLanguage } = useLanguage()
  return (
    <div role="group" aria-label="Design language" className="flex flex-wrap gap-1">
      {choices.map((l) => (
        <Button key={l.id} size="sm" variant={l.id === language.id ? "default" : "outline"} aria-pressed={l.id === language.id} onClick={() => setLanguage(l.id)}>
          {l.label}
        </Button>
      ))}
    </div>
  )
}

// \`target="scope"\` styles only what is inside the provider; at an app's root, leave it out to style the whole page.
export function LanguageScope() {
  return (
    <LanguageProvider target="scope" storageKey="docs:language-example" className="grid gap-3">
      <LanguagePicker />
      <div className="flex flex-wrap items-center gap-3">
        <Input aria-label="Email" placeholder="you@example.com" className="max-w-48" />
        <Checkbox label="Remember me" defaultChecked />
        <Button>Sign in</Button>
      </div>
    </LanguageProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./language-scope-1h_I_IIk.js`),[]));function f(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||m(`Api`,!0),r||m(`Relies`,!0),i||m(`Snippet`,!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`A design language restyles every component without touching it. It has three layers, all plain data in `,(0,c.jsx)(n,{package:`@kitora/theme`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tokens`}),`: colours, radius, type and shadows, written as CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component slots`}),`: per-component choices (a button's heights and corner, a menu's surface, a checkbox's tick) that the styled parts read as `,(0,c.jsx)(t.code,{children:`var(--dk-<slot>-…, <Kitora value>)`}),`, so with no language set the default look is exactly the same.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout presets`}),`: where chrome sits (a title bar, the header, the toolbar), read by the shell, sidebar and windows kits.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`A language switches live: the provider sets one attribute and the variables follow. Pick one below; only this example changes, because its provider is scoped.`}),`
`,(0,c.jsx)(i,{title:`Switch the design language`,source:d,children:(0,c.jsx)(u,{})}),`
`,(0,c.jsxs)(t.p,{children:[`Each `,(0,c.jsx)(t.code,{children:`/components`}),` page lists the slot fields its component reads (see `,(0,c.jsx)(n,{name:`Button`}),`), and the theming guide shows how to write a language of your own.`]}),`
`,(0,c.jsx)(r,{on:[`packages/theme/src/core/language.ts`,`packages/theme/src/core/languages.ts`,`packages/theme/src/react/index.tsx`]})]})}function p(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(f,{...e})}):f(e)}function m(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default};