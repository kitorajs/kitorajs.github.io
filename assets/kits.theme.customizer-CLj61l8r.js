import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./builtin-languages-BsJikRUY.js";import{c as r,i,l as a,n as o,t as s}from"./select-CQAiESKx.js";import{Bc as c,Cc as l,Ic as u,K as d,ct as f,ot as p}from"./index-q72zUtm9.js";import{n as m,r as h}from"./ui-g6SIwLct.js";import"./kit-gallery-Atvibnty.js";import{t as g}from"./example-B8EaWveR.js";var _=u();function v(){let e=f({storageKey:`kitora:demo-customizer`});return(0,_.jsx)(p,{value:e,children:(0,_.jsx)(d,{target:`scope`,storageKey:`kitora:demo-customizer`,languages:e.registry,className:`w-full max-w-xl`,children:(0,_.jsx)(h,{})})})}var y=`import { LanguageProvider, SavedLanguagesProvider, useSavedLanguages } from "@kitora/theme/react"
import { ThemeCustomizer } from "@kitora/theme/ui"

/**
 * The customizer on its own store and provider (its own storage key, so it never touches the site's languages): start
 * from any built-in, edit colours, type and every slot, watch the preview, then save, duplicate, delete, import or export.
 * A saved language joins the provider's registry, so "Save and apply" switches this demo's scope to it.
 */
export function ThemeCustomizerDemo() {
  const saved = useSavedLanguages({ storageKey: "kitora:demo-customizer" })
  return (
    <SavedLanguagesProvider value={saved}>
      <LanguageProvider target="scope" storageKey="kitora:demo-customizer" languages={saved.registry} className="w-full max-w-xl">
        <ThemeCustomizer />
      </LanguageProvider>
    </SavedLanguagesProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>l(()=>import(`./customizer-B2jdHMMD.js`),[]));var b=e(c(),1);function x(){let[e,t]=(0,b.useState)(`macos`),c=n.find(t=>t.id===e)??n[0];return(0,_.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,_.jsxs)(s,{items:n.map(e=>({value:e.id,label:e.label})),value:e,onValueChange:e=>e!==null&&t(e),children:[(0,_.jsx)(r,{"aria-label":`Language`,className:`w-full`,children:(0,_.jsx)(a,{})}),(0,_.jsx)(o,{children:n.map(e=>(0,_.jsx)(i,{value:e.id,children:e.label},e.id))})]}),c?(0,_.jsx)(m,{language:c}):null]})}var S=`import { useState } from "react"
import { BUILTIN_LANGUAGES } from "@kitora/theme/core"
import { LanguagePreview } from "@kitora/theme/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

/** LanguagePreview: a few components under any language, in its own scope (here a built-in picked from a list). */
export function LanguagePreviewDemo() {
  const [id, setId] = useState("macos")
  const language = BUILTIN_LANGUAGES.find((l) => l.id === id) ?? BUILTIN_LANGUAGES[0]
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Select items={BUILTIN_LANGUAGES.map((l) => ({ value: l.id, label: l.label }))} value={id} onValueChange={(next: string | null) => next !== null && setId(next)}>
        <SelectTrigger aria-label="Language" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {BUILTIN_LANGUAGES.map((l) => (
            <SelectItem key={l.id} value={l.id}>
              {l.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {language ? <LanguagePreview language={language} /> : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>l(()=>import(`./language-preview-BrZT49Zf.js`),[]));function C(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Customizer`,children:`Make your own design language: start from a built-in, edit colours, type and every component slot with controls generated from the slot schema, watch it live, then save it in this browser, duplicate, delete, import or export it as JSON, or copy its CSS variables. The same component is behind "Customize…" in the site header.`}),(0,_.jsx)(g,{n:1,title:`ThemeCustomizer on its own store`,blurb:`Its own storage key and LanguageProvider, so nothing here touches the site's languages; a saved language joins this provider and Save and apply switches it.`,code:y,children:(0,_.jsx)(v,{})}),(0,_.jsx)(g,{n:2,title:`LanguagePreview`,blurb:`The customizer's preview on its own: a few components under any language, in a scope with its own id.`,code:S,children:(0,_.jsx)(x,{})})]})}export{C as component};