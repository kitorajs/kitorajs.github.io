import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{r as n}from"./confirm-ByMBokV0.js";import{Bc as r,Cc as i,Ic as a,Nn as o,Sr as s,_r as c,br as l,hr as u,pr as d,ti as f,wn as p,xr as m}from"./index-B9ukmIN1.js";import{t as h}from"./badge-uhFB8J9R.js";import{t as g}from"./select-IOvfzDtl.js";import"./kit-gallery-Bph7isB2.js";import{t as _}from"./example-BGnSQG2Y.js";import{n as v,t as y}from"./ui-BAeDEfiV.js";var b=e(r(),1),x=a(),S=m(`workspace`,{heading:`Release checklist`,open:{one:`{n} open task`,other:`{n} open tasks`},reviewers:{one:`{n} reviewer`,other:`{n} reviewers`},updated:`Updated {when}`,archive:`Archive list…`,archiveTitle:`Archive “{name}”?`}),C=(e,t,n)=>l(e,s(S,t),s(o,n)),w=[C(`de`,{heading:`Release-Checkliste`,open:{one:`{n} offene Aufgabe`,other:`{n} offene Aufgaben`},reviewers:{one:`{n} Prüfer`,other:`{n} Prüfer`},updated:`Aktualisiert {when}`,archive:`Liste archivieren…`,archiveTitle:`„{name}“ archivieren?`},{cancel:`Abbrechen`,confirm:`Archivieren`,close:`Schließen`}),C(`pl`,{heading:`Lista wydania`,open:{one:`{n} otwarte zadanie`,few:`{n} otwarte zadania`,many:`{n} otwartych zadań`,other:`{n} otwartego zadania`},reviewers:{one:`{n} recenzent`,few:`{n} recenzentów`,many:`{n} recenzentów`,other:`{n} recenzenta`},updated:`Zaktualizowano {when}`,archive:`Archiwizuj listę…`,archiveTitle:`Zarchiwizować „{name}”?`},{cancel:`Anuluj`,confirm:`Archiwizuj`,close:`Zamknij`}),C(`ar`,{heading:`قائمة الإصدار`,open:{zero:`لا مهام مفتوحة`,one:`مهمة مفتوحة واحدة`,two:`مهمتان مفتوحتان`,few:`{n} مهام مفتوحة`,many:`{n} مهمة مفتوحة`,other:`{n} مهمة مفتوحة`},reviewers:{one:`مراجع واحد`,two:`مراجعان`,few:`{n} مراجعين`,many:`{n} مراجعًا`,other:`{n} مراجع`},updated:`آخر تحديث {when}`,archive:`أرشفة القائمة…`,archiveTitle:`أرشفة «{name}»؟`},{cancel:`إلغاء`,confirm:`أرشفة`,close:`إغلاق`})],T=[`en`,`de`,`pl`,`ar`],E=new Date(Date.UTC(2026,9,18,14,30));function D({openTasks:e,reviewers:t}){let{t:r}=c(S),i=u(),a=new Intl.DateTimeFormat(i,{dateStyle:`medium`,timeStyle:`short`,timeZone:`UTC`}).format(E);return(0,x.jsxs)(`div`,{className:`grid gap-2 rounded-lg border p-3`,"data-demo":`workspace-card`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,x.jsx)(`h3`,{className:`font-semibold`,children:r(`heading`)}),(0,x.jsx)(h,{variant:`secondary`,className:`tabular-nums`,children:r(`open`,{n:e})})]}),(0,x.jsxs)(`p`,{className:`text-muted-foreground`,children:[r(`reviewers`,{n:t}),` · `,r(`updated`,{when:a})]}),(0,x.jsx)(p,{children:(0,x.jsx)(n,{trigger:(0,x.jsx)(f,{size:`sm`,variant:`outline`,className:`justify-self-start`,children:r(`archive`)}),title:r(`archiveTitle`,{name:`v2.4`}),destructive:!0})})]})}function O(){let[e,t]=(0,b.useState)(`de`),[n,r]=(0,b.useState)(3);return(0,x.jsxs)(`div`,{className:`grid gap-3 text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(v,{options:T,value:e,onValueChange:t,renderSelect:e=>(0,x.jsx)(g,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,x.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,x.jsx)(f,{size:`sm`,variant:`ghost`,onClick:()=>r(e=>Math.max(0,e-1)),"aria-label":`One fewer task`,children:`−`}),(0,x.jsx)(`span`,{className:`w-6 text-center tabular-nums`,"data-demo":`workspace-count`,children:n}),(0,x.jsx)(f,{size:`sm`,variant:`ghost`,onClick:()=>r(e=>e+1),"aria-label":`One more task`,children:`+`})]}),(0,x.jsx)(d,{locale:e,bundles:w,children:(0,x.jsx)(y,{children:(0,x.jsx)(D,{openTasks:n,reviewers:2})})})]})}var k=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { createBundle, defineMessages, type CatalogOf, I18nProvider, LocaleDirection, LocaleSelect, messagesFor, useLocale, useTranslator } from "@kitora/i18n"
import { Confirm, OVERLAY_UI_MESSAGES, OverlayUiProvider } from "@kitora/overlay"
import { Select } from "@kitora/collections"

// The app's own namespace, declared once with its English defaults.
const APP = defineMessages("workspace", {
  heading: "Release checklist",
  open: { one: "{n} open task", other: "{n} open tasks" },
  reviewers: { one: "{n} reviewer", other: "{n} reviewers" },
  updated: "Updated {when}",
  archive: "Archive list…",
  archiveTitle: "Archive “{name}”?",
})

const T = (locale: string, app: Partial<CatalogOf<typeof APP>>, overlay: Partial<CatalogOf<typeof OVERLAY_UI_MESSAGES>>) =>
  createBundle(locale, messagesFor(APP, app), messagesFor(OVERLAY_UI_MESSAGES, overlay))

// One bundle per locale covers every namespace the screen uses: the app's and the overlay kit's.
const BUNDLES = [
  T("de", { heading: "Release-Checkliste", open: { one: "{n} offene Aufgabe", other: "{n} offene Aufgaben" }, reviewers: { one: "{n} Prüfer", other: "{n} Prüfer" }, updated: "Aktualisiert {when}", archive: "Liste archivieren…", archiveTitle: "„{name}“ archivieren?" }, { cancel: "Abbrechen", confirm: "Archivieren", close: "Schließen" }),
  T("pl", { heading: "Lista wydania", open: { one: "{n} otwarte zadanie", few: "{n} otwarte zadania", many: "{n} otwartych zadań", other: "{n} otwartego zadania" }, reviewers: { one: "{n} recenzent", few: "{n} recenzentów", many: "{n} recenzentów", other: "{n} recenzenta" }, updated: "Zaktualizowano {when}", archive: "Archiwizuj listę…", archiveTitle: "Zarchiwizować „{name}”?" }, { cancel: "Anuluj", confirm: "Archiwizuj", close: "Zamknij" }),
  T("ar", { heading: "قائمة الإصدار", open: { zero: "لا مهام مفتوحة", one: "مهمة مفتوحة واحدة", two: "مهمتان مفتوحتان", few: "{n} مهام مفتوحة", many: "{n} مهمة مفتوحة", other: "{n} مهمة مفتوحة" }, reviewers: { one: "مراجع واحد", two: "مراجعان", few: "{n} مراجعين", many: "{n} مراجعًا", other: "{n} مراجع" }, updated: "آخر تحديث {when}", archive: "أرشفة القائمة…", archiveTitle: "أرشفة «{name}»؟" }, { cancel: "إلغاء", confirm: "أرشفة", close: "إغلاق" }),
]

const LOCALES = ["en", "de", "pl", "ar"] as const
const UPDATED_AT = new Date(Date.UTC(2026, 9, 18, 14, 30))

function Checklist({ openTasks, reviewers }: { readonly openTasks: number; readonly reviewers: number }) {
  const { t } = useTranslator(APP)
  const locale = useLocale()
  const when = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(UPDATED_AT)
  return (
    <div className="grid gap-2 rounded-lg border p-3" data-demo="workspace-card">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">{t("heading")}</h3>
        <Badge variant="secondary" className="tabular-nums">{t("open", { n: openTasks })}</Badge>
      </div>
      <p className="text-muted-foreground">
        {t("reviewers", { n: reviewers })} · {t("updated", { when })}
      </p>
      <OverlayUiProvider>
        <Confirm trigger={<Button size="sm" variant="outline" className="justify-self-start">{t("archive")}</Button>} title={t("archiveTitle", { name: "v2.4" })} destructive />
      </OverlayUiProvider>
    </div>
  )
}

/** A whole screen in four locales: the app's strings, the overlay's buttons, plurals, dates and direction from one locale value. */
export function I18nWorkspaceDemo() {
  const [locale, setLocale] = useState("de")
  const [openTasks, setOpenTasks] = useState(3)
  return (
    <div className="grid gap-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-2">
        <LocaleSelect options={LOCALES} value={locale} onValueChange={setLocale} renderSelect={(p) => (
          <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
        )} />
        <Button size="sm" variant="ghost" onClick={() => setOpenTasks((n) => Math.max(0, n - 1))} aria-label="One fewer task">−</Button>
        <span className="w-6 text-center tabular-nums" data-demo="workspace-count">{openTasks}</span>
        <Button size="sm" variant="ghost" onClick={() => setOpenTasks((n) => n + 1)} aria-label="One more task">+</Button>
      </div>
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <LocaleDirection>
          <Checklist openTasks={openTasks} reviewers={2} />
        </LocaleDirection>
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>i(()=>import(`./workspace-BjGc0Q2S.js`),[]));var A=[{name:`core`,what:`Templates ({name} interpolation, Intl.PluralRules plurals), defineMessages namespaces, bundles and override layers, the locale fallback chain (de-AT → de → defaults), negotiateLocale, createTranslator. No DOM, no React, no module state.`},{name:`dom`,what:`readDocumentLocale, applyDocumentLocale (sets <html lang> and restores it), browserLocales; all answer "nothing known" on a server.`},{name:`react`,what:`I18nProvider (locale, bundles, single-key overrides; nests), useMessages, useTranslator, useLocale, useHasI18nProvider, useI18nFrame. A component's own copy props are the nearest layer.`},{name:`ui`,what:`LocaleSelect (labels from Intl.DisplayNames; Kitora's Select by default, searchable once the list is long, or your own control through renderSelect), LocaleDirection (the locale into the theme kit's DirectionProvider), localeName.`}],j=[{id:`overlay`,what:`@kitora/overlay: every binding and preset string (OVERLAY_UI_MESSAGES; OverlayUiProvider messages still wins).`},{id:`form`,what:`@kitora/form: every built-in form text (FORM_MESSAGES, German shipped as its translation; useForm({ messages }) and MessagesProvider still win).`},{id:`i18n`,what:`This kit's own LocaleSelect label (I18N_MESSAGES).`}];function M(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(t,{title:`i18n kit`,children:`Pick a locale: the app's strings, the overlay kit's buttons, the plural forms, the date and the reading direction all follow one value. Each kit declares its strings once, with English defaults, and a host translates them with plain data.`}),(0,x.jsx)(_,{n:1,title:`One screen, four locales`,blurb:`English, German, Polish (four plural forms) and Arabic (six, and right to left). Open the archive confirm to see the overlay kit translated by the same bundle.`,code:k,children:(0,x.jsx)(O,{})}),(0,x.jsx)(_,{n:2,title:`Layers`,blurb:`Each layer is its own entry: a server picks a locale with just the core; the bare @kitora/i18n barrel re-exports all four.`,children:(0,x.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,x.jsx)(`tbody`,{children:A.map(e=>(0,x.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,x.jsxs)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px] whitespace-nowrap`,children:[`@kitora/i18n/`,e.name]}),(0,x.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})}),(0,x.jsx)(_,{n:3,title:`Namespaces in the catalog`,blurb:`Kits that read their strings through the shared provider.`,children:(0,x.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,x.jsx)(`tbody`,{children:j.map(e=>(0,x.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,x.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px] whitespace-nowrap`,children:e.id}),(0,x.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.id))})})})]})}export{M as component};