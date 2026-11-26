import{t as e}from"./input-DQo0XDsx.js";import{Cc as t,Et as n,Ft as r,Ht as i,Ic as a,J as o,K as s,Rt as c,Tt as l,Ut as u,Vt as d,Y as f,et as p,jt as m,ti as h}from"./index-B9ukmIN1.js";import{t as g}from"./badge-uhFB8J9R.js";import{t as _}from"./checkbox-DcWEP8V9.js";import{n as v,r as y}from"./controls-PZrLeW-4.js";import{n as b}from"./lib-CKWRlO6G.js";var x=a(),S=i({brand:d(`#7c3aed`)??c,radius:.75,density:`comfortable`}),C=e=>u(S,e,`primary-foreground`,`primary`).toFixed(1);function w(){return(0,x.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,x.jsxs)(f,{theme:S,className:`flex flex-wrap items-center gap-2 rounded-lg border p-3`,children:[(0,x.jsx)(h,{children:`Upgrade`}),(0,x.jsx)(h,{variant:`outline`,children:`Later`}),(0,x.jsx)(g,{children:`Pro`}),(0,x.jsx)(e,{"aria-label":`Email`,placeholder:`you@example.com`,className:`max-w-48`})]}),(0,x.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"data-testid":`contrast`,children:[`Text on primary: `,C(`light`),`:1 in light, `,C(`dark`),`:1 in dark`]}),(0,x.jsx)(`pre`,{className:`max-h-48 w-full overflow-auto rounded-md border p-3 font-mono text-[11px]`,tabIndex:0,"aria-label":`Generated CSS variables`,children:r(S)})]})}var T=`import { brandFrom, buildTheme, DEFAULT_BRAND, pairRatio, toCss } from "@kitora/theme/core"
import { ThemeScope } from "@kitora/theme/react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

// Your brand colour (any CSS colour text), a base radius in rem and a density. buildTheme fits the text colours to the
// contrast you ask for (\`contrast\`, 4.5:1 by default) in light and in dark.
const theme = buildTheme({ brand: brandFrom("#7c3aed") ?? DEFAULT_BRAND, radius: 0.75, density: "comfortable" })

const ratio = (scheme: "light" | "dark") => pairRatio(theme, scheme, "primary-foreground", "primary").toFixed(1)

export function BrandTheme() {
  return (
    <div className="grid w-full gap-3">
      {/* ThemeScope applies the theme to this box only. In an app, write toTailwindV4(theme) to the CSS file your build reads. */}
      <ThemeScope theme={theme} className="flex flex-wrap items-center gap-2 rounded-lg border p-3">
        <Button>Upgrade</Button>
        <Button variant="outline">Later</Button>
        <Badge>Pro</Badge>
        <Input aria-label="Email" placeholder="you@example.com" className="max-w-48" />
      </ThemeScope>
      <p className="text-xs text-muted-foreground" data-testid="contrast">
        Text on primary: {ratio("light")}:1 in light, {ratio("dark")}:1 in dark
      </p>
      <pre className="max-h-48 w-full overflow-auto rounded-md border p-3 font-mono text-[11px]" tabIndex={0} aria-label="Generated CSS variables">
        {toCss(theme)}
      </pre>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./theming-brand-ByH6bic1.js`),[]));var E=i({brand:d(`#7c3aed`)??c});function D(){return(0,x.jsxs)(o,{theme:E,defaultMode:`light`,target:`scope`,storage:null,className:`grid w-full gap-3 rounded-lg border p-3`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(y,{}),(0,x.jsx)(v,{})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,x.jsx)(e,{"aria-label":`Email`,placeholder:`you@example.com`,className:`max-w-48`}),(0,x.jsx)(_,{label:`Remember me`,defaultChecked:!0}),(0,x.jsx)(h,{children:`Sign in`})]})]})}var O=`import { brandFrom, buildTheme, DEFAULT_BRAND } from "@kitora/theme/core"
import { ThemeProvider } from "@kitora/theme/react"
import { DensityToggle, ModeToggle } from "@kitora/theme/ui"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Input } from "@kitora/ui/input"

const theme = buildTheme({ brand: brandFrom("#7c3aed") ?? DEFAULT_BRAND })

// At an app's root, leave out \`target\` and \`storage\`: the provider then writes the scheme, the density and the theme to
// <html> and remembers the choices in localStorage. Here \`target="scope"\` keeps it to this example.
export function LightDark() {
  return (
    <ThemeProvider theme={theme} defaultMode="light" target="scope" storage={null} className="grid w-full gap-3 rounded-lg border p-3">
      <div className="flex flex-wrap gap-2">
        <ModeToggle />
        <DensityToggle />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Input aria-label="Email" placeholder="you@example.com" className="max-w-48" />
        <Checkbox label="Remember me" defaultChecked />
        <Button>Sign in</Button>
      </div>
    </ThemeProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>t(()=>import(`./theming-light-dark-CP2X_mtZ.js`),[]));var k=l.slots,A={...l,id:`acme`,label:`Acme`,description:`Kitora with the Acme brand and round ends.`,tokens:{source:`generated`,config:{brand:d(`#7c3aed`)??c}},slots:{...k,button:{...k.button,corner:{px:999}},badge:{...k.badge,corner:{px:999}},input:{...k.input,corner:{px:999},height:36}}},j=n();j.register(A);function M(){let{language:e,choices:t,setLanguage:n}=p();return(0,x.jsx)(`div`,{role:`group`,"aria-label":`Design language`,className:`flex flex-wrap gap-1`,children:t.map(t=>(0,x.jsx)(h,{size:`sm`,variant:t.id===e.id?`default`:`outline`,"aria-pressed":t.id===e.id,onClick:()=>n(t.id),children:t.label},t.id))})}function N(){let t=m(A);return(0,x.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,x.jsxs)(s,{languages:j,target:`scope`,storage:null,className:`grid gap-3`,children:[(0,x.jsx)(M,{}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(e,{"aria-label":`Email`,placeholder:`you@example.com`,className:`max-w-48`}),(0,x.jsx)(g,{children:`New`}),(0,x.jsx)(h,{children:`Save`})]})]}),(0,x.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"data-testid":`problems`,children:[`validateLanguage: `,t.length===0?`no problems`:t.join(`; `)]})]})}var P=`import { brandFrom, builtinLanguageRegistry, DEFAULT_BRAND, KITORA_LANGUAGE, validateLanguage, type DesignLanguage } from "@kitora/theme/core"
import { LanguageProvider, useLanguage } from "@kitora/theme/react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

const base = KITORA_LANGUAGE.slots

// A language is plain data. Start from a built-in and change what you care about: colours generated from your brand,
// pill-shaped buttons and badges, and taller fields. Every other slot keeps Kitora's values.
const ACME: DesignLanguage = {
  ...KITORA_LANGUAGE,
  id: "acme",
  label: "Acme",
  description: "Kitora with the Acme brand and round ends.",
  tokens: { source: "generated", config: { brand: brandFrom("#7c3aed") ?? DEFAULT_BRAND } },
  slots: {
    ...base,
    button: { ...base.button, corner: { px: 999 } },
    badge: { ...base.badge, corner: { px: 999 } },
    input: { ...base.input, corner: { px: 999 }, height: 36 },
  },
}

// Register it beside the built-ins, once, before a provider reads the registry. \`register\` checks the language first and
// throws with every problem listed.
const languages = builtinLanguageRegistry()
languages.register(ACME)

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

export function OwnLanguage() {
  const problems = validateLanguage(ACME)
  return (
    <div className="grid w-full gap-3">
      <LanguageProvider languages={languages} target="scope" storage={null} className="grid gap-3">
        <LanguagePicker />
        <div className="flex flex-wrap items-center gap-2">
          <Input aria-label="Email" placeholder="you@example.com" className="max-w-48" />
          <Badge>New</Badge>
          <Button>Save</Button>
        </div>
      </LanguageProvider>
      <p className="text-xs text-muted-foreground" data-testid="problems">
        validateLanguage: {problems.length === 0 ? "no problems" : problems.join("; ")}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>t(()=>import(`./theming-language-BJEXKEfA.js`),[]));function F(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...b(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||L(`Api`,!0),r||L(`Relies`,!0),i||L(`Snippet`,!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(t.p,{children:[`Theming has two steps. First put your brand into the design tokens, the CSS variables every component reads. Then, if colours are not enough, write a design language of your own that also changes how components are shaped. Everything here comes from `,(0,x.jsx)(n,{package:`@kitora/theme`}),`.`]}),`
`,(0,x.jsx)(t.h2,{children:`Brand tokens`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`buildTheme`}),` takes your brand colour, a base radius and a density, and returns the full set of tokens for light and dark. It fits the text colours to the contrast you ask for (`,(0,x.jsx)(t.code,{children:`contrast`}),`, WCAG AA by default), so text on your brand colour stays readable. `,(0,x.jsx)(t.code,{children:`toCss`}),` writes the tokens as plain CSS variables, light on `,(0,x.jsx)(t.code,{children:`:root`}),` and dark on `,(0,x.jsx)(t.code,{children:`.dark`}),`; `,(0,x.jsx)(t.code,{children:`toTailwindV4`}),` writes the same with the Tailwind theme block, for the CSS file your build reads (the `,(0,x.jsx)(t.a,{href:`/docs/getting-started/install`,children:`install page`}),` shows it).`]}),`
`,(0,x.jsx)(i,{title:`Tokens from a brand colour`,source:T,children:(0,x.jsx)(w,{})}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`ThemeScope`}),` applies a theme to one subtree, which is handy for a preview. In an app you write the stylesheet once and need no component at all. The `,(0,x.jsx)(t.a,{href:`/kits/theme/designer`,children:`theme designer`}),` picks the brand, radius and density with controls and exports the result.`]}),`
`,(0,x.jsx)(t.h2,{children:`Light and dark`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`ThemeProvider`}),` owns the colour mode (light, dark or system), the density, and optionally a generated theme. `,(0,x.jsx)(t.code,{children:`ModeToggle`}),` and `,(0,x.jsx)(t.code,{children:`DensityToggle`}),` from `,(0,x.jsx)(t.code,{children:`@kitora/theme/ui`}),` read and write the nearest provider. Leave the choices uncontrolled and the provider remembers them in its `,(0,x.jsx)(t.code,{children:`storage`}),` (`,(0,x.jsx)(t.code,{children:`localStorage`}),` unless you pass another); pass `,(0,x.jsx)(t.code,{children:`mode`}),` and `,(0,x.jsx)(t.code,{children:`density`}),` to control them yourself.`]}),`
`,(0,x.jsx)(i,{title:`Light, dark and density`,source:O,children:(0,x.jsx)(D,{})}),`
`,(0,x.jsxs)(t.p,{children:[`At an app's root the provider writes to `,(0,x.jsx)(t.code,{children:`<html>`}),`; the `,(0,x.jsx)(t.a,{href:`/docs/getting-started/providers`,children:`providers page`}),` shows where it goes, and the `,(0,x.jsx)(t.a,{href:`/docs/getting-started/ssr`,children:`server rendering page`}),` shows the boot script that keeps a saved choice from flashing.`]}),`
`,(0,x.jsx)(t.h2,{children:`A design language of your own`}),`
`,(0,x.jsxs)(t.p,{children:[`A design language restyles components, not only colours: corners, heights, fills, focus rings and more, one slot per component (see `,(0,x.jsx)(t.a,{href:`/docs/concepts/design-languages`,children:`Design languages`}),`). A language is plain data, so make yours by copying a built-in and changing the slots you care about. Its tokens can keep the page's own (`,(0,x.jsx)(t.code,{children:`source: "host"`}),`) or be generated from a brand colour (`,(0,x.jsx)(t.code,{children:`source: "generated"`}),`), as below.`]}),`
`,(0,x.jsx)(i,{title:`Define, register and switch to a language`,source:P,children:(0,x.jsx)(N,{})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Register`}),` it on a registry that already holds the built-ins (`,(0,x.jsx)(t.code,{children:`builtinLanguageRegistry()`}),`), then pass the registry to the provider's `,(0,x.jsx)(t.code,{children:`languages`}),` prop. A provider reads its registry once, so register first.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Validate`}),` it with `,(0,x.jsx)(t.code,{children:`validateLanguage`}),`: it returns every problem as a path and a message (`,(0,x.jsx)(t.code,{children:`slots.button.heights.md: expected a positive number`}),`), and an empty list when the language is valid. `,(0,x.jsx)(t.code,{children:`register`}),` runs the same check and throws with every problem listed.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Switch`}),` to it like any built-in, with `,(0,x.jsx)(t.code,{children:`setLanguage(id)`}),` from `,(0,x.jsx)(t.code,{children:`useLanguage()`}),`. The provider sets `,(0,x.jsx)(t.code,{children:`data-language`}),`, and the language's slot variables (`,(0,x.jsx)(t.code,{children:`--dk-button-radius`}),` and the rest) follow.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Load saved JSON`}),` (an import, a save from an older release) with `,(0,x.jsx)(t.code,{children:`tryCompleteLanguage`}),`: it fills the slots the JSON lacks from Kitora before it checks.`]}),`
`]}),`
`,(0,x.jsxs)(t.p,{children:[`You do not have to write the data by hand. The `,(0,x.jsx)(t.a,{href:`/kits/theme/customizer`,children:`customizer`}),` builds a language with controls drawn from the slot schema, saves it in the browser and exports it as JSON. The `,(0,x.jsx)(t.a,{href:`/kits/theme/languages`,children:`languages page`}),` shows every built-in side by side, and the `,(0,x.jsx)(t.a,{href:`/kits/theme/guide`,children:`theme guide`}),` shows how to make a component of your own read a slot.`]}),`
`,(0,x.jsx)(r,{on:[`packages/theme/src/core/theme.ts`,`packages/theme/src/core/export.ts`,`packages/theme/src/core/language.ts`,`packages/theme/src/core/languages.ts`,`packages/theme/src/dom/language.ts`,`packages/theme/src/react/index.tsx`,`packages/theme/src/ui/controls.tsx`,`src/docs/examples/__tests__/theming.test.tsx`]})]})}function I(e={}){let{wrapper:t}={...b(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(F,{...e})}):F(e)}function L(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default};