import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./input-CLjf4jLu.js";import{Cr as r,Ec as i,Sr as a,Uc as o,wr as s,xr as c,zc as l}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as u}from"./example-B67lLz1F.js";var d=l(),f=r(`inbox`,{title:`Inbox`,greeting:`Welcome back, {name}`,archive:`Archive`}),p=a(`de`,s(f,{title:`Posteingang`,greeting:`Willkommen zurück, {name}`})),m=[`en`,`de`,`de-AT`];function h(){return(0,d.jsxs)(`table`,{className:`w-full text-[13px]`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{className:`border-b text-start text-muted-foreground`,children:[(0,d.jsx)(`th`,{className:`py-1 pe-3 text-start font-medium`,children:`locale`}),(0,d.jsx)(`th`,{className:`py-1 pe-3 text-start font-medium`,children:`title`}),(0,d.jsx)(`th`,{className:`py-1 pe-3 text-start font-medium`,children:`greeting`}),(0,d.jsx)(`th`,{className:`py-1 text-start font-medium`,children:`archive`})]})}),(0,d.jsx)(`tbody`,{children:m.map(e=>{let{t}=c(f,{locale:e,bundles:[p]});return(0,d.jsxs)(`tr`,{className:`border-b last:border-b-0`,"data-demo-locale":e,children:[(0,d.jsx)(`td`,{className:`py-1 pe-3 font-mono text-[12px]`,children:e}),(0,d.jsx)(`td`,{className:`py-1 pe-3`,children:t(`title`)}),(0,d.jsx)(`td`,{className:`py-1 pe-3`,children:t(`greeting`,{name:`Ada`})}),(0,d.jsx)(`td`,{className:`py-1 text-muted-foreground`,children:t(`archive`)})]},e)})})]})}var g=`import { createBundle, createTranslator, defineMessages, messagesFor } from "@kitora/i18n"

// A kit declares ONE namespace: its English defaults are every key and its type.
const INBOX = defineMessages("inbox", {
  title: "Inbox",
  greeting: "Welcome back, {name}",
  archive: "Archive",
})

// A translation is plain data for one locale; a partial catalog is fine (missing keys stay English).
const DE = createBundle("de", messagesFor(INBOX, { title: "Posteingang", greeting: "Willkommen zurück, {name}" }))

const LOCALES = ["en", "de", "de-AT"] as const

/** The core works without React: \`createTranslator\` resolves the namespace for a locale (de-AT falls back to de). */
export function BasicTranslate() {
  return (
    <table className="w-full text-[13px]">
      <thead>
        <tr className="border-b text-start text-muted-foreground">
          <th className="py-1 pe-3 text-start font-medium">locale</th>
          <th className="py-1 pe-3 text-start font-medium">title</th>
          <th className="py-1 pe-3 text-start font-medium">greeting</th>
          <th className="py-1 text-start font-medium">archive</th>
        </tr>
      </thead>
      <tbody>
        {LOCALES.map((locale) => {
          const { t } = createTranslator(INBOX, { locale, bundles: [DE] })
          return (
            <tr key={locale} className="border-b last:border-b-0" data-demo-locale={locale}>
              <td className="py-1 pe-3 font-mono text-[12px]">{locale}</td>
              <td className="py-1 pe-3">{t("title")}</td>
              <td className="py-1 pe-3">{t("greeting", { name: "Ada" })}</td>
              <td className="py-1 text-muted-foreground">{t("archive")}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./translate-C9EI4QLj.js`),[]));var _=e(o(),1),v=r(`files`,{selected:{one:`{n} file selected`,other:`{n} files selected`}}),y=[a(`pl`,s(v,{selected:{one:`Wybrano {n} plik`,few:`Wybrano {n} pliki`,many:`Wybrano {n} plików`,other:`Wybrano {n} pliku`}})),a(`ar`,s(v,{selected:{zero:`لم يتم تحديد أي ملف`,one:`تم تحديد ملف واحد`,two:`تم تحديد ملفين`,few:`تم تحديد {n} ملفات`,many:`تم تحديد {n} ملفًا`,other:`تم تحديد {n} ملف`}}))],b=[`en`,`pl`,`ar`];function x(){let[e,t]=(0,_.useState)(3);return(0,d.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,d.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-muted-foreground`,children:`Count`}),(0,d.jsx)(n,{type:`number`,min:0,value:e,onChange:e=>t(Math.max(0,Math.trunc(Number(e.target.value)||0))),className:`h-7 w-20 tabular-nums`,"data-demo":`plural-count`})]}),(0,d.jsx)(`ul`,{className:`grid gap-1`,children:b.map(t=>(0,d.jsxs)(`li`,{className:`flex gap-3`,lang:t,"data-demo-plural":t,children:[(0,d.jsx)(`span`,{className:`w-6 font-mono text-[12px] text-muted-foreground`,children:t}),(0,d.jsx)(`span`,{dir:`auto`,children:c(v,{locale:t,bundles:y}).t(`selected`,{n:e})})]},t))})]})}var S=`import { useState } from "react"
import { Input } from "@kitora/ui/input"
import { createBundle, createTranslator, defineMessages, messagesFor } from "@kitora/i18n"

const FILES = defineMessages("files", {
  selected: { one: "{n} file selected", other: "{n} files selected" },
})

// Each locale writes the plural categories it uses; Intl.PluralRules picks one from \`n\`.
const BUNDLES = [
  createBundle("pl", messagesFor(FILES, { selected: { one: "Wybrano {n} plik", few: "Wybrano {n} pliki", many: "Wybrano {n} plików", other: "Wybrano {n} pliku" } })),
  createBundle("ar", messagesFor(FILES, { selected: { zero: "لم يتم تحديد أي ملف", one: "تم تحديد ملف واحد", two: "تم تحديد ملفين", few: "تم تحديد {n} ملفات", many: "تم تحديد {n} ملفًا", other: "تم تحديد {n} ملف" } })),
]

const LOCALES = ["en", "pl", "ar"] as const

/** Type a count: English has two forms, Polish four, Arabic six. */
export function BasicPlurals() {
  const [count, setCount] = useState(3)
  return (
    <div className="grid gap-2 text-[13px]">
      <label className="flex items-center gap-2">
        <span className="text-muted-foreground">Count</span>
        <Input type="number" min={0} value={count} onChange={(e) => setCount(Math.max(0, Math.trunc(Number(e.target.value) || 0)))} className="h-7 w-20 tabular-nums" data-demo="plural-count" />
      </label>
      <ul className="grid gap-1">
        {LOCALES.map((locale) => (
          <li key={locale} className="flex gap-3" lang={locale} data-demo-plural={locale}>
            <span className="w-6 font-mono text-[12px] text-muted-foreground">{locale}</span>
            <span dir="auto">{createTranslator(FILES, { locale, bundles: BUNDLES }).t("selected", { n: count })}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>i(()=>import(`./plurals-B7k5LTr1.js`),[]));function C(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(t,{title:`Basics: catalog`,children:"`defineMessages` declares a namespace with its English defaults; `createBundle` + `messagesFor` write a translation as typed data; `createTranslator` turns it into text. All of it is the core: no React needed."}),(0,d.jsx)(u,{n:1,title:`A namespace and a translation`,blurb:`German covers two keys; de-AT falls back to de, and the untranslated key stays English.`,code:g,children:(0,d.jsx)(h,{})}),(0,d.jsx)(u,{n:2,title:`Plurals`,blurb:"Each locale writes the categories it uses; Intl.PluralRules picks one from `n`.",code:S,children:(0,d.jsx)(x,{})})]})}export{C as component};