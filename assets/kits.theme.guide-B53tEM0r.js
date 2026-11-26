import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{t as n}from"./arrow-down-DFaEMtgZ.js";import{t as r}from"./arrow-right-DYKdR1v_.js";import{a as i,s as a}from"./kit-docs-CvNs0WqT.js";import{t as o}from"./input-2rqm_FXH.js";import{t as s}from"./macos-Br5JWgQo.js";import{t as c}from"./material-D43ZlW40.js";import{t as l}from"./retro-jhnxC7X2.js";import{t as u}from"./terminal-DcjQdHh5.js";import{Bc as d,Cc as f,Et as p,Ic as m,K as h,Tt as g,et as _,jt as v,q as y,ti as b}from"./index-9y5uwRd3.js";import{t as x}from"./badge-CMT8Lr82.js";import{n as S,t as C}from"./toggle-group-DGN5AhCC.js";import w,{meta as T}from"./guide-DyRdKhjL.js";import"./kit-gallery-B-Yr9fP4.js";import{t as E}from"./example-CZLJLtIC.js";var D=e(d(),1),O=m(),k=g.slots,A={...g,id:`pill`,label:`Pill`,description:`Kitora with round ends and roomier controls.`,slots:{...k,button:{...k.button,corner:{px:999},heights:{xs:26,sm:30,md:36,lg:40,xl:44}},input:{...k.input,corner:{px:999},height:36},badge:{...k.badge,corner:{px:999}}}};function j(){let{language:e,setLanguage:n,languages:r}=_();return(0,O.jsxs)(`div`,{className:`grid gap-3`,children:[(0,O.jsx)(C,{"aria-label":`Language`,value:[e.id],onValueChange:e=>e[0]&&n(e[0]),children:r.filter(e=>e.id===`kitora`||e.id===`pill`).map(e=>(0,O.jsx)(S,{value:e.id,children:e.label},e.id))}),(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,O.jsx)(b,{children:`Save`}),(0,O.jsx)(b,{variant:`outline`,children:`Cancel`}),(0,O.jsx)(x,{children:`New`}),(0,O.jsx)(t,{"aria-label":`Notify me`,defaultChecked:!0})]}),(0,O.jsx)(o,{"aria-label":`Email`,placeholder:`you@example.com`,className:`max-w-64`})]})}function M(){let e=(0,D.useMemo)(()=>{let e=p();return e.register(A),e},[]),t=v(A);return(0,O.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,O.jsx)(h,{target:`scope`,languages:e,defaultLanguage:`pill`,storage:null,children:(0,O.jsx)(j,{})}),(0,O.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`validateLanguage: `,t.length===0?`no problems`:t.join(`; `)]})]})}var N=`import { useMemo } from "react"
import { builtinLanguageRegistry, KITORA_LANGUAGE, validateLanguage, type DesignLanguage } from "@kitora/theme/core"
import { LanguageProvider, useLanguage } from "@kitora/theme/react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Switch } from "@kitora/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

const base = KITORA_LANGUAGE.slots

/**
 * A language of your own: Kitora's, with pill-shaped buttons, fields and badges and taller controls. It is plain data,
 * so it starts from a built-in and changes only the slot fields it cares about. Colours stay the page's (\`source: "host"\`).
 */
export const PILL_LANGUAGE: DesignLanguage = {
  ...KITORA_LANGUAGE,
  id: "pill",
  label: "Pill",
  description: "Kitora with round ends and roomier controls.",
  slots: {
    ...base,
    button: { ...base.button, corner: { px: 999 }, heights: { xs: 26, sm: 30, md: 36, lg: 40, xl: 44 } },
    input: { ...base.input, corner: { px: 999 }, height: 36 },
    badge: { ...base.badge, corner: { px: 999 } },
  },
}

/** The same few components, in whichever language the nearest provider has chosen. */
function Sample() {
  const { language, setLanguage, languages } = useLanguage()
  return (
    <div className="grid gap-3">
      <ToggleGroup aria-label="Language" value={[language.id]} onValueChange={(next) => next[0] && setLanguage(next[0])}>
        {languages
          .filter((l) => l.id === "kitora" || l.id === "pill")
          .map((l) => (
            <ToggleGroupItem key={l.id} value={l.id}>
              {l.label}
            </ToggleGroupItem>
          ))}
      </ToggleGroup>
      <div className="flex flex-wrap items-center gap-2">
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
        <Badge>New</Badge>
        <Switch aria-label="Notify me" defaultChecked />
      </div>
      <Input aria-label="Email" placeholder="you@example.com" className="max-w-64" />
    </div>
  )
}

/**
 * Register the language on a registry that already holds the built-ins, then hand the registry to a provider.
 * \`register\` validates first and throws with every problem listed, so \`validateLanguage\` here is only for display.
 */
export function CustomLanguageDemo() {
  const registry = useMemo(() => {
    const r = builtinLanguageRegistry()
    r.register(PILL_LANGUAGE)
    return r
  }, [])
  const problems = validateLanguage(PILL_LANGUAGE)
  return (
    <div className="grid w-full gap-3">
      <LanguageProvider target="scope" languages={registry} defaultLanguage="pill" storage={null}>
        <Sample />
      </LanguageProvider>
      <p className="text-xs text-muted-foreground">validateLanguage: {problems.length === 0 ? "no problems" : problems.join("; ")}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>f(()=>import(`./custom-language-BWbQp2_3.js`),[]));function P({children:e}){return(0,O.jsx)(`span`,{className:`inline-flex h-[var(--dk-badge-h,calc(var(--spacing)*5))] items-center rounded-[var(--dk-badge-radius,calc(var(--radius)*2.6))] bg-muted px-2 text-[length:var(--dk-badge-text,var(--text-xs))] font-[weight:var(--dk-badge-weight,500)]`,children:e})}var F=[g,s,c,l,u];function I(){return(0,O.jsx)(`div`,{className:`flex w-full flex-wrap gap-3`,children:F.map(e=>(0,O.jsxs)(y,{language:e,className:`grid min-w-28 gap-1.5 rounded-lg border p-3`,children:[(0,O.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:e.id}),(0,O.jsx)(P,{children:`In review`})]},e.id))})}var L=`import type { ReactNode } from "react"
import { KITORA_LANGUAGE, MACOS_LANGUAGE, MATERIAL_LANGUAGE, RETRO_LANGUAGE, TERMINAL_LANGUAGE } from "@kitora/theme/core"
import { LanguageScope } from "@kitora/theme/react"

/**
 * An app's own component that follows the language: it reads the \`badge\` slot's variables, each with Kitora's value as
 * the fallback, so with no language on the page it looks the same as before. The type hints (\`length:\`, \`weight:\`) keep
 * Tailwind from guessing what the variable holds.
 */
function StatusPill({ children }: { readonly children: ReactNode }) {
  return (
    <span className="inline-flex h-[var(--dk-badge-h,calc(var(--spacing)*5))] items-center rounded-[var(--dk-badge-radius,calc(var(--radius)*2.6))] bg-muted px-2 text-[length:var(--dk-badge-text,var(--text-xs))] font-[weight:var(--dk-badge-weight,500)]">
      {children}
    </span>
  )
}

// the languages as data, so the server-rendered page has every scope's look (an id not loaded yet would load after hydration)
const LANGUAGES = [KITORA_LANGUAGE, MACOS_LANGUAGE, MATERIAL_LANGUAGE, RETRO_LANGUAGE, TERMINAL_LANGUAGE]

/** The same component in five scopes: one class list, five looks. */
export function SlotReaderDemo() {
  return (
    <div className="flex w-full flex-wrap gap-3">
      {LANGUAGES.map((language) => (
        <LanguageScope key={language.id} language={language} className="grid min-w-28 gap-1.5 rounded-lg border p-3">
          <span className="font-mono text-[11px] text-muted-foreground">{language.id}</span>
          <StatusPill>In review</StatusPill>
        </LanguageScope>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>f(()=>import(`./slot-reader-G9hojQDi.js`),[]));var R=[{title:`Language data`,where:`@kitora/theme/core`,what:`slots.button.corner = { px: 999 }`},{title:`DOM adapter`,where:`@kitora/theme/dom`,what:`slotDeclarations → --dk-button-radius: 999px`},{title:`One stylesheet`,where:`data-language + boundaries`,what:`[data-language="pill"] { --dk-button-radius: … }`},{title:`Component`,where:`@kitora/ui`,what:`rounded-[var(--dk-button-radius, …)]`}];function z(){return(0,O.jsx)(`ol`,{"aria-label":`How a language reaches a component`,className:`my-5 flex flex-col items-stretch gap-1.5 md:flex-row md:items-center`,children:R.map((e,t)=>(0,O.jsxs)(`li`,{className:`flex flex-col items-center gap-1.5 md:flex-1 md:flex-row`,children:[(0,O.jsxs)(`div`,{className:`w-full min-w-0 rounded-lg border bg-card p-2.5 text-card-foreground`,children:[(0,O.jsxs)(`div`,{className:`text-[13px] font-medium`,children:[t+1,`. `,e.title]}),(0,O.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:e.where}),(0,O.jsx)(`code`,{className:`mt-1 block font-mono text-[11px] break-words text-foreground`,children:e.what})]}),t<R.length-1?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n,{"aria-hidden":!0,className:`size-4 shrink-0 text-muted-foreground md:hidden`}),(0,O.jsx)(r,{"aria-hidden":!0,className:`hidden size-4 shrink-0 text-muted-foreground md:block`})]}):null]},e.title))})}function B(){return(0,O.jsx)(E,{n:1,title:`Your own language`,blurb:`Kitora with pill-shaped buttons, fields and badges, registered on the built-in registry. Switch between the two to compare.`,code:N,children:(0,O.jsx)(M,{})})}function V(){return(0,O.jsx)(E,{n:2,title:`Your component on a slot`,blurb:`An app's own status pill reads the badge slot's variables, so it follows each language with one class list.`,code:L,children:(0,O.jsx)(I,{})})}function H(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(a,{title:T.title,children:T.description}),(0,O.jsx)(`div`,{className:`max-w-3xl`,children:(0,O.jsx)(i,{components:{FlowDiagram:z,CustomLanguageExample:B,SlotReaderExample:V},children:(0,O.jsx)(w,{})})})]})}export{H as component};