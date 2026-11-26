import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,t as r}from"./tabs-oUW2hCtt.js";import{t as i}from"./chevron-left-B4XuTl4_.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{r as o}from"./confirm-CQ9jnarK.js";import{Bc as s,Cc as c,Cr as l,Ic as u,Nn as d,Oi as f,Sr as p,_r as m,br as h,hr as g,pr as _,ti as v,vr as y,wn as b,xr as x}from"./index-q72zUtm9.js";import{t as S}from"./select-CBN5RXbD.js";import"./kit-gallery-Atvibnty.js";import{t as C}from"./example-B8EaWveR.js";import{n as w,r as T,t as E}from"./ui-C0JhHO2b.js";var D=e(s(),1),O=u(),k=x(`cart`,{title:`Your cart`,items:{one:`{n} item`,other:`{n} items`},checkout:`Check out`}),A=[h(`de`,p(k,{title:`Dein Warenkorb`,items:{one:`{n} Artikel`,other:`{n} Artikel`},checkout:`Zur Kasse`})),h(`fr`,p(k,{title:`Votre panier`,items:{one:`{n} article`,other:`{n} articles`},checkout:`Commander`}))];function j({count:e}){let{t}=m(k);return(0,O.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-md border px-3 py-2`,"data-demo":`cart`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`font-medium`,children:t(`title`)}),(0,O.jsx)(`p`,{className:`text-muted-foreground tabular-nums`,children:t(`items`,{n:e})})]}),(0,O.jsx)(v,{size:`sm`,children:t(`checkout`)})]})}function M(){let[e,t]=(0,D.useState)(`de`);return(0,O.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,O.jsx)(w,{options:[`en`,`de`,`fr`],value:e,onValueChange:t,renderSelect:e=>(0,O.jsx)(S,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,O.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,O.jsxs)(_,{locale:e,bundles:A,children:[(0,O.jsx)(j,{count:1}),(0,O.jsx)(j,{count:4})]})]})}var N=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createBundle, defineMessages, I18nProvider, LocaleSelect, messagesFor, useTranslator } from "@kitora/i18n"
import { Select } from "@kitora/collections"

const CART = defineMessages("cart", {
  title: "Your cart",
  items: { one: "{n} item", other: "{n} items" },
  checkout: "Check out",
})

const BUNDLES = [
  createBundle("de", messagesFor(CART, { title: "Dein Warenkorb", items: { one: "{n} Artikel", other: "{n} Artikel" }, checkout: "Zur Kasse" })),
  createBundle("fr", messagesFor(CART, { title: "Votre panier", items: { one: "{n} article", other: "{n} articles" }, checkout: "Commander" })),
]

/** Any component below reads its namespace with \`useTranslator\`; it never sees the locale plumbing. */
function CartSummary({ count }: { readonly count: number }) {
  const { t } = useTranslator(CART)
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border px-3 py-2" data-demo="cart">
      <div>
        <p className="font-medium">{t("title")}</p>
        <p className="text-muted-foreground tabular-nums">{t("items", { n: count })}</p>
      </div>
      <Button size="sm">{t("checkout")}</Button>
    </div>
  )
}

/** One \`I18nProvider\` sets the locale and the bundles for everything below it. */
export function BasicProvider() {
  const [locale, setLocale] = useState("de")
  return (
    <div className="grid gap-2 text-[13px]">
      <LocaleSelect options={["en", "de", "fr"]} value={locale} onValueChange={setLocale} renderSelect={(p) => (
        <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
      )} />
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <CartSummary count={1} />
        <CartSummary count={4} />
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>c(()=>import(`./provider-V-KeLEjg.js`),[]));var P=x(`tasks`,{heading:`Tasks`,add:`Add task`,empty:`Nothing to do`}),F=h(`de`,p(P,{heading:`Aufgaben`,add:`Aufgabe hinzufügen`,empty:`Nichts zu tun`}));function I({label:e}){let{t}=m(P);return(0,O.jsxs)(`div`,{className:`grid gap-0.5 rounded-md border px-3 py-2`,"data-demo-panel":e,children:[(0,O.jsx)(`span`,{className:`text-[11px] text-muted-foreground uppercase`,children:e}),(0,O.jsx)(`span`,{className:`font-medium`,children:t(`heading`)}),(0,O.jsx)(`span`,{children:t(`add`)}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:t(`empty`)})]})}function L(){return(0,O.jsx)(_,{locale:`de`,bundles:[F],children:(0,O.jsxs)(`div`,{className:`grid gap-2 text-[13px] sm:grid-cols-2`,children:[(0,O.jsx)(I,{label:`de`}),(0,O.jsx)(_,{messages:p(P,{empty:`Alles erledigt`}),children:(0,O.jsx)(I,{label:`de + one key`})})]})})}var R=`import { createBundle, defineMessages, I18nProvider, messagesFor, useTranslator } from "@kitora/i18n"

const TASKS = defineMessages("tasks", {
  heading: "Tasks",
  add: "Add task",
  empty: "Nothing to do",
})

const DE = createBundle("de", messagesFor(TASKS, { heading: "Aufgaben", add: "Aufgabe hinzufügen", empty: "Nichts zu tun" }))

function TaskPanel({ label }: { readonly label: string }) {
  const { t } = useTranslator(TASKS)
  return (
    <div className="grid gap-0.5 rounded-md border px-3 py-2" data-demo-panel={label}>
      <span className="text-[11px] text-muted-foreground uppercase">{label}</span>
      <span className="font-medium">{t("heading")}</span>
      <span>{t("add")}</span>
      <span className="text-muted-foreground">{t("empty")}</span>
    </div>
  )
}

/** Providers nest: the inner one replaces single keys (a product's wording) and keeps the locale. */
export function BasicOverrides() {
  return (
    <I18nProvider locale="de" bundles={[DE]}>
      <div className="grid gap-2 text-[13px] sm:grid-cols-2">
        <TaskPanel label="de" />
        <I18nProvider messages={messagesFor(TASKS, { empty: "Alles erledigt" })}>
          <TaskPanel label="de + one key" />
        </I18nProvider>
      </div>
    </I18nProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>c(()=>import(`./overrides-BBx8Quu3.js`),[]));var z=x(`nav`,{back:`Back`,next:`Next`,step:`Step {n} of {count}`}),B=[h(`ar`,p(z,{back:`رجوع`,next:`التالي`,step:`الخطوة {n} من {count}`})),h(`he`,p(z,{back:`חזרה`,next:`הבא`,step:`שלב {n} מתוך {count}`}))];function V(){let{t:e}=m(z);return(0,O.jsxs)(`div`,{className:`grid gap-2 rounded-md border p-3`,"data-demo":`direction-box`,children:[(0,O.jsx)(r,{defaultValue:`1`,children:(0,O.jsxs)(n,{children:[(0,O.jsx)(t,{value:`1`,children:`1`}),(0,O.jsx)(t,{value:`2`,children:`2`}),(0,O.jsx)(t,{value:`3`,children:`3`})]})}),(0,O.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,O.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,O.jsx)(i,{className:`size-3.5 rtl:-scale-x-100`,"aria-hidden":!0}),e(`back`)]}),(0,O.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:e(`step`,{n:2,count:3})}),(0,O.jsxs)(`span`,{className:`flex items-center gap-1`,children:[e(`next`),(0,O.jsx)(f,{className:`size-3.5 rtl:-scale-x-100`,"aria-hidden":!0})]})]})]})}function H(){let[e,t]=(0,D.useState)(`ar`);return(0,O.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,O.jsx)(w,{options:[`en`,`ar`,`he`],value:e,onValueChange:t,renderSelect:e=>(0,O.jsx)(S,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,O.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,O.jsx)(_,{locale:e,bundles:B,children:(0,O.jsx)(E,{children:(0,O.jsx)(V,{})})})]})}var U=`import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { createBundle, defineMessages, I18nProvider, LocaleDirection, LocaleSelect, messagesFor, useTranslator } from "@kitora/i18n"
import { Select } from "@kitora/collections"

const NAV = defineMessages("nav", { back: "Back", next: "Next", step: "Step {n} of {count}" })

const BUNDLES = [
  createBundle("ar", messagesFor(NAV, { back: "رجوع", next: "التالي", step: "الخطوة {n} من {count}" })),
  createBundle("he", messagesFor(NAV, { back: "חזרה", next: "הבא", step: "שלב {n} מתוך {count}" })),
]

function Stepper() {
  const { t } = useTranslator(NAV)
  return (
    <div className="grid gap-2 rounded-md border p-3" data-demo="direction-box">
      <Tabs defaultValue="1">
        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
          <TabsTrigger value="3">3</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ChevronLeft className="size-3.5 rtl:-scale-x-100" aria-hidden />
          {t("back")}
        </span>
        <span className="text-muted-foreground tabular-nums">{t("step", { n: 2, count: 3 })}</span>
        <span className="flex items-center gap-1">
          {t("next")}
          <ChevronRight className="size-3.5 rtl:-scale-x-100" aria-hidden />
        </span>
      </div>
    </div>
  )
}

/** \`LocaleDirection\` turns the locale into the theme kit's DirectionProvider: Arabic and Hebrew flip the box and the Tabs' arrow keys. */
export function BasicDirection() {
  const [locale, setLocale] = useState("ar")
  return (
    <div className="grid gap-2 text-[13px]">
      <LocaleSelect options={["en", "ar", "he"]} value={locale} onValueChange={setLocale} renderSelect={(p) => (
        <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
      )} />
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <LocaleDirection>
          <Stepper />
        </LocaleDirection>
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>c(()=>import(`./direction-CVKqNeOq.js`),[]));var W=[h(`de`,p(d,{cancel:`Abbrechen`,confirm:`Bestätigen`,typeToConfirm:`Gib {text} ein, um zu bestätigen`,close:`Schließen`})),h(`es`,p(d,{cancel:`Cancelar`,confirm:`Confirmar`,typeToConfirm:`Escribe {text} para confirmar`,close:`Cerrar`}))];function G(){let[e,t]=(0,D.useState)(`de`),[n,r]=(0,D.useState)(`—`);return(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,O.jsx)(w,{options:[`en`,`de`,`es`],value:e,onValueChange:t,renderSelect:e=>(0,O.jsx)(S,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,O.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,O.jsx)(_,{locale:e,bundles:W,children:(0,O.jsx)(b,{children:(0,O.jsx)(o,{trigger:(0,O.jsx)(v,{size:`sm`,variant:`outline`,"data-demo":`i18n-confirm`,children:`Delete project…`}),title:`Delete “atlas”?`,requireText:`atlas`,destructive:!0,onResult:e=>r(e.status)})})}),(0,O.jsx)(`span`,{className:`text-muted-foreground`,"data-demo":`i18n-confirm-result`,children:n})]})}var K=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createBundle, I18nProvider, LocaleSelect, messagesFor } from "@kitora/i18n"
import { Confirm, OVERLAY_UI_MESSAGES, OverlayUiProvider } from "@kitora/overlay"
import { Select } from "@kitora/collections"

// The overlay kit's strings are the shared catalog's \`overlay\` namespace, so they translate like any other.
const BUNDLES = [
  createBundle("de", messagesFor(OVERLAY_UI_MESSAGES, { cancel: "Abbrechen", confirm: "Bestätigen", typeToConfirm: "Gib {text} ein, um zu bestätigen", close: "Schließen" })),
  createBundle("es", messagesFor(OVERLAY_UI_MESSAGES, { cancel: "Cancelar", confirm: "Confirmar", typeToConfirm: "Escribe {text} para confirmar", close: "Cerrar" })),
]

/** Put the \`I18nProvider\` ABOVE the \`OverlayUiProvider\`: overlays render at the provider, so they read its locale. */
export function BasicOverlay() {
  const [locale, setLocale] = useState("de")
  const [answer, setAnswer] = useState("—")
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <LocaleSelect options={["en", "de", "es"]} value={locale} onValueChange={setLocale} renderSelect={(p) => (
        <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
      )} />
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <OverlayUiProvider>
          <Confirm
            trigger={<Button size="sm" variant="outline" data-demo="i18n-confirm">Delete project…</Button>}
            title="Delete “atlas”?"
            requireText="atlas"
            destructive
            onResult={(r) => setAnswer(r.status)}
          />
        </OverlayUiProvider>
      </I18nProvider>
      <span className="text-muted-foreground" data-demo="i18n-confirm-result">{answer}</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>c(()=>import(`./overlay-B-5iT2np.js`),[]));var q=[`en`,`de`,`ja`],J=x(`hello`,{line:`Hello from {place}`}),Y=[h(`de`,p(J,{line:`Hallo aus {place}`})),h(`ja`,p(J,{line:`{place}からこんにちは`}))];function X(){let{t:e}=m(J);return(0,O.jsx)(`p`,{lang:g(),"data-demo":`compose-line`,children:e(`line`,{place:`Lisbon`})})}function Z(){let[e,t]=(0,D.useState)(`en`);return(0,D.useEffect)(()=>t(l(y(),q)),[]),(0,O.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,O.jsx)(`div`,{role:`group`,"aria-label":`Language`,className:`flex gap-1`,children:q.map(n=>(0,O.jsx)(v,{size:`sm`,variant:n===e?`default`:`outline`,"aria-pressed":n===e,lang:n,onClick:()=>t(n),children:T(n)},n))}),(0,O.jsx)(_,{locale:e,bundles:Y,children:(0,O.jsx)(X,{})})]})}var Q=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { browserLocales, createBundle, defineMessages, I18nProvider, localeName, messagesFor, negotiateLocale, useLocale, useTranslator } from "@kitora/i18n"

const AVAILABLE = ["en", "de", "ja"] as const

const HELLO = defineMessages("hello", { line: "Hello from {place}" })
const BUNDLES = [createBundle("de", messagesFor(HELLO, { line: "Hallo aus {place}" })), createBundle("ja", messagesFor(HELLO, { line: "{place}からこんにちは" }))]

function Line() {
  const { t } = useTranslator(HELLO)
  const locale = useLocale()
  return (
    <p lang={locale} data-demo="compose-line">
      {t("line", { place: "Lisbon" })}
    </p>
  )
}

/**
 * Your own switcher from the headless pieces: \`browserLocales()\` + \`negotiateLocale()\` pick the start
 * locale after mount (the server renders the fallback), \`localeName()\` labels each button in its own language.
 */
export function BasicCompose() {
  const [locale, setLocale] = useState<string>("en")
  // After mount only, so the server render and the first client render agree.
  useEffect(() => setLocale(negotiateLocale(browserLocales(), AVAILABLE)), [])
  return (
    <div className="grid gap-2 text-[13px]">
      <div role="group" aria-label="Language" className="flex gap-1">
        {AVAILABLE.map((tag) => (
          <Button key={tag} size="sm" variant={tag === locale ? "default" : "outline"} aria-pressed={tag === locale} lang={tag} onClick={() => setLocale(tag)}>
            {localeName(tag)}
          </Button>
        ))}
      </div>
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <Line />
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>c(()=>import(`./compose-DcfVJm_2.js`),[]));function $(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(a,{title:`Basics: provider`,children:"`I18nProvider` sets the locale and adds bundles and single-key overrides for everything below; providers nest. Components read their namespace with `useTranslator` or `useMessages`. No global state: two providers side by side never meet."}),(0,O.jsx)(C,{n:1,title:`Locale and bundles`,blurb:`Switch the language; both summaries follow, plurals included.`,code:N,children:(0,O.jsx)(M,{})}),(0,O.jsx)(C,{n:2,title:`Nested overrides`,blurb:`The inner provider replaces one key and keeps the outer locale.`,code:R,children:(0,O.jsx)(L,{})}),(0,O.jsx)(C,{n:3,title:`Direction from the locale`,blurb:`LocaleDirection feeds the theme kit's DirectionProvider: Arabic and Hebrew flip the layout and the primitives' arrow keys.`,code:U,children:(0,O.jsx)(H,{})}),(0,O.jsx)(C,{n:4,title:`The overlay kit, translated`,blurb:"Overlay strings are the catalog's `overlay` namespace. Open the confirm: Cancel, Confirm and the type-to-confirm prompt follow the locale.",code:K,children:(0,O.jsx)(G,{})}),(0,O.jsx)(C,{n:5,title:`Compose your own switcher`,blurb:`browserLocales + negotiateLocale pick the start locale; localeName labels each button in its own language.`,code:Q,children:(0,O.jsx)(Z,{})})]})}export{$ as component};