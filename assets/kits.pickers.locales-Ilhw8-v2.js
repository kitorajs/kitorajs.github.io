import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./number-input-DVUtvPJI.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{r}from"./range-BMtDYCFV.js";import{t as i}from"./messages-vFauijzp.js";import{t as a}from"./calendar-JJd8Xm9H.js";import{n as o}from"./date-picker-B5u5tMYl.js";import{Bc as s,Cc as c,Ic as l,Sr as u,br as d,pr as f}from"./index-9y5uwRd3.js";import{r as p}from"./time-picker-B9Azon23.js";import{t as m}from"./date-range-picker-BaZBtnLD.js";import{t as h}from"./select-SH8KPD1g.js";import"./kit-gallery-B-Yr9fP4.js";import{t as g}from"./example-CZLJLtIC.js";import{n as _}from"./ui-CRWyRYT3.js";import{t as v}from"./-kits.pickers.shared-2m0jwxYJ.js";var y=e(s(),1),b=l(),x=[{tag:`en-US`,dir:`ltr`,label:`English (US)`},{tag:`de-DE`,dir:`ltr`,label:`Deutsch`},{tag:`ja-JP`,dir:`ltr`,label:`日本語`},{tag:`ar-EG`,dir:`rtl`,label:`العربية`},{tag:`he-IL`,dir:`rtl`,label:`עברית`}];function S(){let[e,t]=(0,y.useState)(`2026-10-15`),[n,i]=(0,y.useState)(`14:30`),[s,c]=(0,y.useState)(r);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 text-[13px]`,children:[(0,b.jsx)(`div`,{className:`relative overflow-x-auto`,children:(0,b.jsx)(`table`,{className:`w-full min-w-[600px]`,children:(0,b.jsx)(`tbody`,{children:x.map(r=>(0,b.jsxs)(`tr`,{dir:r.dir,className:`border-b last:border-b-0`,children:[(0,b.jsxs)(`td`,{className:`w-28 py-1.5 pe-3 align-middle`,children:[(0,b.jsx)(`div`,{children:r.label}),(0,b.jsx)(`div`,{className:`font-mono text-[11px] text-muted-foreground`,children:r.tag})]}),(0,b.jsx)(`td`,{className:`py-1.5 pe-3`,children:(0,b.jsx)(o,{value:e,onChange:t,locale:r.tag,"aria-label":`Date (${r.tag})`})}),(0,b.jsx)(`td`,{className:`py-1.5 pe-3`,children:(0,b.jsx)(p,{value:n,onChange:i,locale:r.tag,step:15,"aria-label":`Time (${r.tag})`})}),(0,b.jsx)(`td`,{className:`py-1.5`,children:(0,b.jsx)(m,{value:s,onChange:c,locale:r.tag,"aria-label":`Range (${r.tag})`,presets:[]})})]},r.tag))})})}),(0,b.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,b.jsxs)(`div`,{dir:`rtl`,className:`flex flex-col gap-1`,children:[(0,b.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`ar-EG, right to left: ← moves to the next day`}),(0,b.jsx)(a,{value:e,onChange:t,locale:`ar-EG`,"aria-label":`Calendar (ar-EG)`})]}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,b.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`de-DE, week starts Monday`}),(0,b.jsx)(a,{value:e,onChange:t,locale:`de-DE`,"aria-label":`Calendar (de-DE)`})]})]})]})}var C=`import { useState } from "react"
import { Calendar, DatePicker, DateRangePicker, EMPTY_RANGE, TimePicker, type DateRange, type IsoDate, type IsoTime } from "@kitora/pickers"

/** Each row: a BCP 47 tag, its writing direction, and a label. */
const LOCALES = [
  { tag: "en-US", dir: "ltr", label: "English (US)" },
  { tag: "de-DE", dir: "ltr", label: "Deutsch" },
  { tag: "ja-JP", dir: "ltr", label: "日本語" },
  { tag: "ar-EG", dir: "rtl", label: "العربية" },
  { tag: "he-IL", dir: "rtl", label: "עברית" },
] as const

/** The same three pickers across locales: segment order, separators, 12/24-hour, week start, numerals and direction all come from Intl. One shared value. */
export function PickerLocales() {
  const [date, setDate] = useState<IsoDate | null>("2026-10-15")
  const [time, setTime] = useState<IsoTime | null>("14:30")
  const [range, setRange] = useState<DateRange>(EMPTY_RANGE)
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      {/* relative: the pickers' screen-reader text is positioned absolutely; inside RTL rows it would escape the scroll box */}
      <div className="relative overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <tbody>
            {LOCALES.map((l) => (
              <tr key={l.tag} dir={l.dir} className="border-b last:border-b-0">
                <td className="w-28 py-1.5 pe-3 align-middle">
                  <div>{l.label}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{l.tag}</div>
                </td>
                <td className="py-1.5 pe-3">
                  <DatePicker value={date} onChange={setDate} locale={l.tag} aria-label={\`Date (\${l.tag})\`} />
                </td>
                <td className="py-1.5 pe-3">
                  <TimePicker value={time} onChange={setTime} locale={l.tag} step={15} aria-label={\`Time (\${l.tag})\`} />
                </td>
                <td className="py-1.5">
                  <DateRangePicker value={range} onChange={setRange} locale={l.tag} aria-label={\`Range (\${l.tag})\`} presets={[]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-6">
        <div dir="rtl" className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground">ar-EG, right to left: ← moves to the next day</span>
          <Calendar value={date} onChange={setDate} locale="ar-EG" aria-label="Calendar (ar-EG)" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-muted-foreground">de-DE, week starts Monday</span>
          <Calendar value={date} onChange={setDate} locale="de-DE" aria-label="Calendar (de-DE)" />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./locales-BAQ-Q2Xf.js`),[]));var w=[d(`de`,u(i,{previousMonth:`Vorheriger Monat`,nextMonth:`Nächster Monat`,chooseMonthCaption:`{month}, Monat wählen`,openCalendar:`Kalender öffnen`,clearDate:`Datum löschen`,chooseDate:`Datum wählen`,increase:`Erhöhen`,decrease:`Verringern`})),d(`es`,u(i,{previousMonth:`Mes anterior`,nextMonth:`Mes siguiente`,chooseMonthCaption:`{month}, elegir mes`,openCalendar:`Abrir calendario`,clearDate:`Borrar fecha`,chooseDate:`Elegir fecha`,increase:`Aumentar`,decrease:`Disminuir`}))];function T(){let[e,n]=(0,y.useState)(`de`),[r,i]=(0,y.useState)(`2026-10-15`);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,b.jsx)(_,{options:[`en`,`de`,`es`],value:e,onValueChange:n,renderSelect:e=>(0,b.jsx)(h,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,b.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,b.jsx)(f,{locale:e,bundles:w,children:(0,b.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,b.jsx)(a,{value:r,onChange:i,locale:e,"aria-label":`Calendar`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsx)(o,{value:r,onChange:i,locale:e,"aria-label":`Date`}),(0,b.jsx)(t,{"aria-label":`Guests`,defaultValue:2,min:1,max:12})]})]})})]})}var E=`import { useState } from "react"
import { createBundle, I18nProvider, LocaleSelect, messagesFor } from "@kitora/i18n"
import { Calendar, DatePicker, NumberInput, PICKERS_MESSAGES, type IsoDate } from "@kitora/pickers"
import { Select } from "@kitora/collections"

// The pickers' own strings (nav buttons, icon-button names, placeholders) are the shared
// catalog's \`pickers\` namespace; dates, month and weekday names already come from Intl.
const BUNDLES = [
  createBundle(
    "de",
    messagesFor(PICKERS_MESSAGES, {
      previousMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      chooseMonthCaption: "{month}, Monat wählen",
      openCalendar: "Kalender öffnen",
      clearDate: "Datum löschen",
      chooseDate: "Datum wählen",
      increase: "Erhöhen",
      decrease: "Verringern",
    }),
  ),
  createBundle(
    "es",
    messagesFor(PICKERS_MESSAGES, {
      previousMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      chooseMonthCaption: "{month}, elegir mes",
      openCalendar: "Abrir calendario",
      clearDate: "Borrar fecha",
      chooseDate: "Elegir fecha",
      increase: "Aumentar",
      decrease: "Disminuir",
    }),
  ),
]

/** One \`I18nProvider\` translates every picker below it; the \`locale\` prop still drives Intl formatting. */
export function PickerTranslated() {
  const [locale, setLocale] = useState("de")
  const [date, setDate] = useState<IsoDate | null>("2026-10-15")
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <LocaleSelect options={["en", "de", "es"]} value={locale} onValueChange={setLocale} renderSelect={(p) => (
        <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
      )} />
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <div className="flex flex-wrap items-start gap-4">
          <Calendar value={date} onChange={setDate} locale={locale} aria-label="Calendar" />
          <div className="flex flex-col gap-2">
            <DatePicker value={date} onChange={setDate} locale={locale} aria-label="Date" />
            <NumberInput aria-label="Guests" defaultValue={2} min={1} max={12} />
          </div>
        </div>
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>c(()=>import(`./translated-f0w2xzE6.js`),[]));function D(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`Locales and RTL`,children:"Segment order, separators, 12- or 24-hour, the first day of the week, month and day names and the writing direction all come from Intl and `dir`; the handful of the pickers' own words are translated through `@kitora/i18n`."}),(0,b.jsx)(g,{n:1,title:`Five locales, one value`,blurb:`English, German, Japanese, Arabic and Hebrew sharing one date, time and range.`,code:C,children:(0,b.jsx)(v,{testId:`locales`,children:(0,b.jsx)(S,{})})}),(0,b.jsx)(g,{n:2,title:`Translated part strings`,blurb:"The few strings Intl cannot give (nav buttons, icon-button names) come from the shared i18n catalog: an `I18nProvider` with German or Spanish bundles relabels every picker below it, and a picker's own `label` / `aria-label` props still win.",code:E,children:(0,b.jsx)(v,{testId:`translated`,children:(0,b.jsx)(T,{})})})]})}export{D as component};