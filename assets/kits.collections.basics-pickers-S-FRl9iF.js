import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./popup-bxd07wHe.js";import{r as n}from"./virtual-Bg6562KW.js";import{i as r,r as i,s as a,t as o}from"./field-DApIfONr.js";import{_ as s,r as c}from"./input-DxNY09be.js";import{t as l}from"./root-CHHb8oab.js";import{s as u}from"./kit-docs-DpYhPoxM.js";import{t as d}from"./file-text-DcQTIaDt.js";import{t as f}from"./folder-CcDNU7s5.js";import{t as p}from"./image-BbAdbuDr.js";import{t as m}from"./star-Cbf2qr-O.js";import{t as h}from"./input-C8M4VLUF.js";import{l as g,r as _}from"./model-DKICKTZE.js";import{r as v}from"./filter-Du4PcxFR.js";import{t as y}from"./tags-input-UXdtC2Uu.js";import{a as ee,c as b,d as te,f as ne,i as re,l as x,n as S,o as C,r as ie,s as w,t as T,u as E}from"./key-value-editor-DsxM1TxR.js";import{a as ae,c as oe,d as se,f as ce,i as le,l as ue,n as de,o as fe,p as pe,r as me,s as he,t as D,u as ge}from"./combobox-Dju6inbb.js";import{t as _e}from"./mention-B4CGzRoD.js";import{t as ve}from"./highlight-CFN7jkyY.js";import{Bc as ye,Cc as O,Ic as be,Sr as xe,br as Se,hi as Ce,pr as we,ti as k}from"./index-q72zUtm9.js";import{t as Te}from"./badge-Be8rVEaF.js";import{a as A,n as Ee}from"./styles-z-ZxYS8s.js";import{t as j}from"./messages-CC_41aco.js";import{a as De,c as M,d as Oe,i as ke,l as N,n as P,o as Ae,r as F,s as je,t as I,u as L}from"./parts-D3O4J3oE.js";import{t as Me}from"./chips-BGsaS0es.js";import{a as Ne,i as Pe,n as Fe,o as Ie,r as Le,t as Re}from"./listbox-De6UlrhA.js";import{a as ze,i as Be,n as Ve,r as He,t as Ue}from"./item-list-CGKf_1kM.js";import{c as We,i as R,n as z,r as B,u as V}from"./item-hANTbFM7.js";import{a as Ge,i as Ke,n as qe,t as Je}from"./virtual-options-CtZtefPP.js";import{a as Ye,c as Xe,i as Ze,l as Qe,n as $e,o as et,r as tt,s as nt,t as H}from"./select-CBN5RXbD.js";import{a as rt,c as it,i as at,l as ot,o as st,s as ct,t as lt}from"./combo-list-D9XKCxJ-.js";import{t as U}from"./multi-select-Da3Ni2jO.js";import{t as ut}from"./cascader-KCTYvO0W.js";import{i as dt,n as ft,r as pt,t as mt}from"./virtual-list-D-kqNVvJ.js";import{t as W}from"./transfer-list-DFPeucpT.js";import{t as ht}from"./password-input-BcrYg2z2.js";import"./kit-gallery-Atvibnty.js";import{t as G}from"./example-B8EaWveR.js";import{t as K}from"./-kits.collections.shared-C9jKxDoh.js";import{n as gt}from"./ui-C0JhHO2b.js";var q=e(ye(),1),J=be(),_t=[g(`summer`,`Summer`,[{id:`peach`,label:`Peach`},{id:`cherry`,label:`Cherry`},{id:`melon`,label:`Melon`,disabled:!0}]),g(`winter`,`Winter`,[{id:`orange`,label:`Orange`},{id:`pear`,label:`Pear`}])];function vt(){let[e,t]=(0,q.useState)([`cherry`]);return(0,J.jsxs)(`div`,{className:`w-56 space-y-2`,children:[(0,J.jsx)(Re,{"aria-label":`Fruit`,items:_t,value:e,onChange:t}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Selected: `,e.join(`, `)||`none`]})]})}var Y=`import { useState } from "react"
import { Listbox, section } from "@kitora/collections"

const FRUIT = [
  section("summer", "Summer", [
    { id: "peach", label: "Peach" },
    { id: "cherry", label: "Cherry" },
    { id: "melon", label: "Melon", disabled: true },
  ]),
  section("winter", "Winter", [
    { id: "orange", label: "Orange" },
    { id: "pear", label: "Pear" },
  ]),
]

/** A listbox with sections: click, arrows, Home/End and type-to-jump; Space or Enter selects. */
export function BasicListbox() {
  const [value, setValue] = useState<string[]>(["cherry"])
  return (
    <div className="w-56 space-y-2">
      <Listbox aria-label="Fruit" items={FRUIT} value={value} onChange={setValue} />
      <p className="text-[12px] text-muted-foreground">Selected: {value.join(", ") || "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>O(()=>import(`./listbox-XIqGlIuP.js`),[]));var yt=[{id:`backlog`,label:`Backlog`},{id:`todo`,label:`Todo`},{id:`progress`,label:`In progress`},{id:`review`,label:`In review`},{id:`done`,label:`Done`}];function bt(){let[e,t]=(0,q.useState)(`todo`);return(0,J.jsx)(`div`,{className:`w-56`,children:(0,J.jsx)(H,{"aria-label":`Status`,items:yt,value:e,onChange:t})})}var xt=`import { useState } from "react"
import { Select } from "@kitora/collections"

const STATUSES = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "Todo" },
  { id: "progress", label: "In progress" },
  { id: "review", label: "In review" },
  { id: "done", label: "Done" },
]

/** A select: ↓ opens on the chosen option, arrows move, Enter picks, a letter jumps (on the closed field it picks). */
export function BasicSelect() {
  const [status, setStatus] = useState<string | null>("todo")
  return (
    <div className="w-56">
      <Select aria-label="Status" items={STATUSES} value={status} onChange={setStatus} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(xt,()=>O(()=>import(`./select-Ci5QIKnR.js`),[]));var St=[`Amsterdam`,`Barcelona`,`Berlin`,`Lisbon`,`London`,`Madrid`,`München`,`Paris`,`Prague`,`Rome`,`Vienna`,`Zürich`].map(e=>({id:e.toLowerCase(),label:e}));function Ct(){let[e,t]=(0,q.useState)(null);return(0,J.jsxs)(`div`,{className:`w-64 space-y-2`,children:[(0,J.jsx)(D,{"aria-label":`City`,placeholder:`Search a city…`,items:St,value:e,onChange:t}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Value: `,e??`none`]})]})}var X=`import { useState } from "react"
import { Combobox } from "@kitora/collections"

const CITIES = ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "London", "Madrid", "München", "Paris", "Prague", "Rome", "Vienna", "Zürich"].map((name) => ({ id: name.toLowerCase(), label: name }))

/** A combobox: type to filter (accents ignored, matches highlighted), ↓/↑ to move, Enter to pick. */
export function BasicCombobox() {
  const [city, setCity] = useState<string | null>(null)
  return (
    <div className="w-64 space-y-2">
      <Combobox aria-label="City" placeholder="Search a city…" items={CITIES} value={city} onChange={setCity} />
      <p className="text-[12px] text-muted-foreground">Value: {city ?? "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>O(()=>import(`./combobox-DRkVOJtv.js`),[]));var wt=[`Bug`,`Feature`,`Design`,`Docs`,`Performance`,`Security`,`Accessibility`].map(e=>({id:e.toLowerCase(),label:e}));function Tt(){let[e,t]=(0,q.useState)([`bug`,`design`]);return(0,J.jsx)(`div`,{className:`w-72`,children:(0,J.jsx)(U,{"aria-label":`Labels`,items:wt,value:e,onChange:t})})}var Z=`import { useState } from "react"
import { MultiSelect } from "@kitora/collections"

const LABELS = ["Bug", "Feature", "Design", "Docs", "Performance", "Security", "Accessibility"].map((name) => ({ id: name.toLowerCase(), label: name }))

/** Pick many: the popup stays open, chips show the picks, Backspace removes the last one. */
export function BasicMultiSelect() {
  const [labels, setLabels] = useState<string[]>(["bug", "design"])
  return (
    <div className="w-72">
      <MultiSelect aria-label="Labels" items={LABELS} value={labels} onChange={setLabels} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>O(()=>import(`./multi-select-aNgac-Of.js`),[]));function Et(){let[e,t]=(0,q.useState)([`react`,`typescript`]);return(0,J.jsx)(`div`,{className:`w-72`,children:(0,J.jsx)(y,{"aria-label":`Topics`,value:e,onChange:t})})}var Dt=`import { useState } from "react"
import { TagsInput } from "@kitora/collections"

/** Free-text tags: Enter or a comma adds, pasting "a, b, c" adds three, duplicates are ignored. */
export function BasicTagsInput() {
  const [tags, setTags] = useState<string[]>(["react", "typescript"])
  return (
    <div className="w-72">
      <TagsInput aria-label="Topics" value={tags} onChange={setTags} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Dt,()=>O(()=>import(`./tags-input-BOMMljuA.js`),[]));var Ot=[g(`summer`,`Summer`,[{id:`peach`,label:`Peach`,kcal:39},{id:`cherry`,label:`Cherry`,kcal:50},{id:`melon`,label:`Melon`,kcal:34,disabled:!0}]),g(`winter`,`Winter`,[{id:`orange`,label:`Orange`,kcal:47},{id:`pear`,label:`Pear`,kcal:57}])];function kt(){let[e,t]=(0,q.useState)([`peach`,`pear`]),[n,r]=(0,q.useState)(`cherry`);return(0,J.jsxs)(`div`,{className:`grid w-full max-w-xl gap-4 sm:grid-cols-2`,children:[(0,J.jsxs)(`div`,{className:`space-y-2`,children:[(0,J.jsx)(Ie,{"aria-label":`Fruit`,selectionMode:`multiple`,items:Ot,value:e,onChange:t,classNames:{header:`normal-case tracking-normal`,option:`data-[selected]:font-medium`},children:({rows:e})=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Fe,{children:`No fruit`}),(0,J.jsx)(Le,{rows:e,renderHeader:e=>(0,J.jsxs)(`span`,{children:[e.label,` fruit`]}),renderOption:e=>(0,J.jsxs)(Ne,{row:e,children:[(0,J.jsx)(Pe,{}),(0,J.jsx)(`span`,{className:`flex-1 truncate`,children:e.item.label}),(0,J.jsxs)(`span`,{className:`text-[11px] tabular-nums ${A}`,children:[e.item.kcal,` kcal`]})]})})]})}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Selected: `,e.join(`, `)||`none`]})]}),(0,J.jsxs)(`div`,{className:`space-y-2`,children:[(0,J.jsx)(nt,{"aria-label":`Favourite fruit`,items:Ot,value:n,onChange:r,children:({rows:e,current:t})=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Xe,{children:[(0,J.jsx)(Qe,{children:t?(0,J.jsxs)(`span`,{className:`truncate`,children:[t.label,` · `,t.kcal,` kcal`]}):null}),(0,J.jsx)($e,{}),(0,J.jsx)(Ze,{})]}),(0,J.jsxs)(et,{children:[(0,J.jsx)(tt,{}),(0,J.jsx)(Ye,{rows:e,renderItem:e=>(0,J.jsx)(`span`,{className:`flex-1 truncate`,children:e.label})})]})]})}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Favourite: `,n??`none`]})]})]})}var At=`import { useState } from "react"
import { ListboxEmpty, ListboxGroups, ListboxIndicator, ListboxOption, ListboxRoot, mutedClass, section, SelectClear, SelectEmpty, SelectIcon, SelectOptions, SelectPopup, SelectRoot, SelectTrigger, SelectValue } from "@kitora/collections"

interface Fruit {
  readonly id: string
  readonly label: string
  readonly disabled?: boolean
  readonly children?: readonly Fruit[]
  /** A field of our own: the parts hand it back typed, no cast. */
  readonly kcal: number
}

const FRUIT = [
  section<Fruit>("summer", "Summer", [
    { id: "peach", label: "Peach", kcal: 39 },
    { id: "cherry", label: "Cherry", kcal: 50 },
    { id: "melon", label: "Melon", kcal: 34, disabled: true },
  ]),
  section<Fruit>("winter", "Winter", [
    { id: "orange", label: "Orange", kcal: 47 },
    { id: "pear", label: "Pear", kcal: 57 },
  ]),
]

/** The \`<Listbox>\` and \`<Select>\` presets rebuilt from their public parts, with our own layout, heading and value. */
export function ComposeListbox() {
  const [value, setValue] = useState<string[]>(["peach", "pear"])
  const [favourite, setFavourite] = useState<string | null>("cherry")
  return (
    <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
    <div className="space-y-2">
      <ListboxRoot<Fruit> aria-label="Fruit" selectionMode="multiple" items={FRUIT} value={value} onChange={setValue} classNames={{ header: "normal-case tracking-normal", option: "data-[selected]:font-medium" }}>
        {({ rows }) => (
          <>
            <ListboxEmpty>No fruit</ListboxEmpty>
            <ListboxGroups
              rows={rows}
              renderHeader={(group) => <span>{group.label} fruit</span>}
              renderOption={(row) => (
                <ListboxOption row={row}>
                  <ListboxIndicator />
                  <span className="flex-1 truncate">{row.item.label}</span>
                  {/* \`mutedClass\`: secondary text that follows the row highlight (a language can highlight in the brand colour). */}
                  <span className={\`text-[11px] tabular-nums \${mutedClass}\`}>{row.item.kcal} kcal</span>
                </ListboxOption>
              )}
            />
          </>
        )}
      </ListboxRoot>
      <p className="text-[12px] text-muted-foreground">Selected: {value.join(", ") || "none"}</p>
    </div>
    <div className="space-y-2">
      <SelectRoot<Fruit> aria-label="Favourite fruit" items={FRUIT} value={favourite} onChange={setFavourite}>
        {({ rows, current }) => (
          <>
            <SelectTrigger>
              <SelectValue>{current ? <span className="truncate">{current.label} · {current.kcal} kcal</span> : null}</SelectValue>
              <SelectClear />
              <SelectIcon />
            </SelectTrigger>
            <SelectPopup>
              <SelectEmpty />
              <SelectOptions rows={rows} renderItem={(item) => <span className="flex-1 truncate">{item.label}</span>} />
            </SelectPopup>
          </>
        )}
      </SelectRoot>
      <p className="text-[12px] text-muted-foreground">Favourite: {favourite ?? "none"}</p>
    </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(At,()=>O(()=>import(`./compose-listbox-lVD47KmH.js`),[]));var jt=[`Go`,`Haskell`,`JavaScript`,`Kotlin`,`Python`,`Rust`,`Swift`,`TypeScript`,`Zig`].map(e=>({id:e.toLowerCase(),label:e})),Mt=(e,t)=>v(e.label).startsWith(v(t.trim())),Nt={search:(e,t)=>new Promise((n,r)=>{let i=[`Austria`,`Belgium`,`Canada`,`Denmark`,`Estonia`,`Finland`,`France`,`Germany`,`India`,`Japan`,`Norway`,`Spain`],a=setTimeout(()=>n(i.filter(t=>v(t).includes(v(e))).map(e=>({id:e.toLowerCase(),label:e,hint:`api`}))),250);t.addEventListener(`abort`,()=>{clearTimeout(a),r(Error(`aborted`))})})},Pt=(e,t)=>Nt.search(e,t);function Ft(){let[e,t]=(0,q.useState)(null),[n,r]=(0,q.useState)(null);return(0,J.jsxs)(`div`,{className:`grid w-full max-w-md gap-3 sm:grid-cols-2`,children:[(0,J.jsxs)(`div`,{className:`space-y-1 text-[12px]`,children:[(0,J.jsx)(`span`,{className:`text-muted-foreground`,children:`Prefix matcher`}),(0,J.jsx)(D,{"aria-label":`Language`,placeholder:`Type “s”…`,items:jt,match:Mt,value:e,onChange:t})]}),(0,J.jsxs)(`div`,{className:`space-y-1 text-[12px]`,children:[(0,J.jsx)(`span`,{className:`text-muted-foreground`,children:`Search backend`}),(0,J.jsx)(D,{"aria-label":`Country`,placeholder:`Search countries…`,loadItems:Pt,value:n,onChange:r})]}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground sm:col-span-2`,children:[`Language: `,e??`none`,` · Country: `,n??`none`]})]})}var It=`import { useState } from "react"
import { Combobox, normalize, type Entry, type ItemLoader, type ItemMatcher } from "@kitora/collections"

const LANGUAGES: Entry[] = ["Go", "Haskell", "JavaScript", "Kotlin", "Python", "Rust", "Swift", "TypeScript", "Zig"].map((name) => ({ id: name.toLowerCase(), label: name }))

/** Matcher adapter: only labels that START with the query (the default matches any word anywhere). */
const startsWith: ItemMatcher<Entry> = (item, query) => normalize(item.label).startsWith(normalize(query.trim()))

/** The shape our backend exposes; any object with this method can back a combobox. */
interface CountryBackend {
  readonly search: (query: string, signal: AbortSignal) => Promise<readonly Entry[]>
}

/** A stand-in backend (stub: replace with your API client). It honours the AbortSignal like a real fetch. */
const backend: CountryBackend = {
  search: (query, signal) =>
    new Promise((resolve, reject) => {
      const all = ["Austria", "Belgium", "Canada", "Denmark", "Estonia", "Finland", "France", "Germany", "India", "Japan", "Norway", "Spain"]
      const timer = setTimeout(() => resolve(all.filter((c) => normalize(c).includes(normalize(query))).map((c) => ({ id: c.toLowerCase(), label: c, hint: "api" }))), 250)
      signal.addEventListener("abort", () => {
        clearTimeout(timer)
        reject(new Error("aborted"))
      })
    }),
}

/** Loader adapter: the combobox asks for items through this one function, so the backend is swappable. */
const loadCountries: ItemLoader<Entry> = (query, signal) => backend.search(query, signal)

/** Two seams swapped: a prefix matcher on static items, and a search backend behind \`loadItems\`. */
export function CustomAdapters() {
  const [language, setLanguage] = useState<string | null>(null)
  const [country, setCountry] = useState<string | null>(null)
  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
      <div className="space-y-1 text-[12px]">
        <span className="text-muted-foreground">Prefix matcher</span>
        <Combobox aria-label="Language" placeholder="Type “s”…" items={LANGUAGES} match={startsWith} value={language} onChange={setLanguage} />
      </div>
      <div className="space-y-1 text-[12px]">
        <span className="text-muted-foreground">Search backend</span>
        <Combobox aria-label="Country" placeholder="Search countries…" loadItems={loadCountries} value={country} onChange={setCountry} />
      </div>
      <p className="text-[12px] text-muted-foreground sm:col-span-2">
        Language: {language ?? "none"} · Country: {country ?? "none"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(It,()=>O(()=>import(`./adapters-yOCEAX9v.js`),[]));var Lt=[{key:`DATABASE_URL`,value:`postgres://localhost:5432/app`},{key:`PORT`,value:`8080`},{key:`LOG_LEVEL`,value:`debug`}];function Rt(){let[e,t]=(0,q.useState)(Lt);return(0,J.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-3 md:grid-cols-[1fr_14rem]`,children:[(0,J.jsx)(ie,{label:`Environment variables`,value:e,onValueChange:t,paste:!0}),(0,J.jsx)(`code`,{"data-testid":`env-preview`,className:`block self-start rounded-md bg-muted/50 p-2 font-mono text-[11px] break-all whitespace-pre-wrap text-muted-foreground`,children:ne(e)||`# empty`})]})}var zt=`import { useState } from "react"
import { KeyValueEditor, serializeEnv, type KeyValuePair } from "@kitora/collections"

const START: KeyValuePair[] = [
  { key: "DATABASE_URL", value: "postgres://localhost:5432/app" },
  { key: "PORT", value: "8080" },
  { key: "LOG_LEVEL", value: "debug" },
]

/** Env vars: drag the grip (or Space, arrows, Space) to reorder, a clashing key is flagged, and a pasted .env block becomes rows. */
export function BasicKeyValueEditor() {
  const [env, setEnv] = useState<readonly KeyValuePair[]>(START)
  return (
    <div className="grid w-full max-w-2xl gap-3 md:grid-cols-[1fr_14rem]">
      <KeyValueEditor label="Environment variables" value={env} onValueChange={setEnv} paste />
      <code data-testid="env-preview" className="block self-start rounded-md bg-muted/50 p-2 font-mono text-[11px] break-all whitespace-pre-wrap text-muted-foreground">{serializeEnv(env) || "# empty"}</code>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(zt,()=>O(()=>import(`./key-value-editor-ltawDCOd.js`),[]));var Bt=[{id:`literal`,label:`Literal`},{id:`vault`,label:`Vault secret`},{id:`env`,label:`Host env`}],Vt=/(SECRET|TOKEN|PASSWORD|KEY)$/;function Ht(){let[e,t]=(0,q.useState)([{key:`STRIPE_KEY`,value:`vault`},{key:`REGION`,value:`literal`}]),[n,r]=(0,q.useState)([{key:`API_TOKEN`,value:`tok_example_value`},{key:`API_HOST`,value:`api.example.test`}]);return(0,J.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-5`,children:[(0,J.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,J.jsx)(`p`,{className:`text-[12px] font-medium`,children:`Where each value comes from`}),(0,J.jsxs)(w,{label:`Value sources`,value:e,onValueChange:t,emptyValue:`literal`,classNames:{key:`uppercase`},children:[(0,J.jsx)(x,{children:(e,t)=>(0,J.jsxs)(b,{children:[(0,J.jsx)(`span`,{className:`w-4 text-right text-[11px] tabular-nums text-muted-foreground`,children:t.index+1}),(0,J.jsx)(S,{}),(0,J.jsx)(E,{render:e=>(0,J.jsx)(`div`,{className:`w-40`,children:(0,J.jsx)(H,{"aria-label":e.inputProps[`aria-label`],disabled:e.disabled,items:Bt,value:e.value,onChange:t=>e.setValue(t??`literal`)})})}),(0,J.jsx)(C,{}),(0,J.jsx)(re,{})]})}),(0,J.jsx)(T,{children:`+ Source`})]})]}),(0,J.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,J.jsx)(`p`,{className:`text-[12px] font-medium`,children:`Secrets are masked`}),(0,J.jsx)(w,{label:`Request config`,value:n,onValueChange:r,messages:{duplicate:e=>`${e} is already set`},children:e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(x,{sortable:!1,children:e=>(0,J.jsxs)(b,{children:[(0,J.jsx)(S,{}),(0,J.jsx)(E,{render:t=>Vt.test(e.key)?(0,J.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,J.jsx)(ht,{...t.inputProps,value:t.value,onChange:e=>t.setValue(e.target.value),className:`h-7 text-[13px] md:text-[13px]`})}):(0,J.jsx)(h,{...t.inputProps,value:t.value,onChange:e=>t.setValue(e.target.value),className:`h-7 min-w-0 flex-1 text-[13px] md:text-[13px]`})}),(0,J.jsx)(C,{}),(0,J.jsx)(re,{})]})}),(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(T,{}),(0,J.jsxs)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:[e.pairs.length,` set · `,Object.keys(te(e.pairs)).join(`, `)]})]}),(0,J.jsx)(ee,{mode:`replace`})]})})]})]})}var Ut=`import { useState } from "react"
import { KeyValueEditorAdd, KeyValueEditorKey, KeyValueEditorMessage, KeyValueEditorPaste, KeyValueEditorRemove, KeyValueEditorRoot, KeyValueEditorRow, KeyValueEditorRows, KeyValueEditorValue, pairsToObject, Select, type KeyValuePair } from "@kitora/collections"
import { Input } from "@kitora/ui/input"
import { PasswordInput } from "@kitora/ui/password-input"

const SOURCES = [
  { id: "literal", label: "Literal" },
  { id: "vault", label: "Vault secret" },
  { id: "env", label: "Host env" },
]

const SECRET_KEY = /(SECRET|TOKEN|PASSWORD|KEY)$/

/** The preset rebuilt from its parts: a numbered row, a Select as the value of one editor, a masked input for secret-looking keys in another. */
export function ComposeKeyValueEditor() {
  const [sources, setSources] = useState<readonly KeyValuePair[]>([
    { key: "STRIPE_KEY", value: "vault" },
    { key: "REGION", value: "literal" },
  ])
  const [secrets, setSecrets] = useState<readonly KeyValuePair[]>([
    { key: "API_TOKEN", value: "tok_example_value" },
    { key: "API_HOST", value: "api.example.test" },
  ])
  return (
    <div className="grid w-full max-w-2xl gap-5">
      <div className="space-y-1.5">
        <p className="text-[12px] font-medium">Where each value comes from</p>
        <KeyValueEditorRoot label="Value sources" value={sources} onValueChange={setSources} emptyValue="literal" classNames={{ key: "uppercase" }}>
          <KeyValueEditorRows>
            {(_row, state) => (
              <KeyValueEditorRow>
                <span className="w-4 text-right text-[11px] tabular-nums text-muted-foreground">{state.index + 1}</span>
                <KeyValueEditorKey />
                <KeyValueEditorValue
                  render={(slot) => (
                    <div className="w-40">
                      <Select aria-label={slot.inputProps["aria-label"]} disabled={slot.disabled} items={SOURCES} value={slot.value} onChange={(id) => slot.setValue(id ?? "literal")} />
                    </div>
                  )}
                />
                <KeyValueEditorRemove />
                <KeyValueEditorMessage />
              </KeyValueEditorRow>
            )}
          </KeyValueEditorRows>
          <KeyValueEditorAdd>+ Source</KeyValueEditorAdd>
        </KeyValueEditorRoot>
      </div>
      <div className="space-y-1.5">
        <p className="text-[12px] font-medium">Secrets are masked</p>
        <KeyValueEditorRoot label="Request config" value={secrets} onValueChange={setSecrets} messages={{ duplicate: (key) => \`\${key} is already set\` }}>
          {(editor) => (
            <>
              <KeyValueEditorRows sortable={false}>
                {(row) => (
                  <KeyValueEditorRow>
                    <KeyValueEditorKey />
                    <KeyValueEditorValue
                      render={(slot) =>
                        SECRET_KEY.test(row.key) ? (
                          <div className="min-w-0 flex-1">
                            <PasswordInput {...slot.inputProps} value={slot.value} onChange={(event) => slot.setValue(event.target.value)} className="h-7 text-[13px] md:text-[13px]" />
                          </div>
                        ) : (
                          <Input {...slot.inputProps} value={slot.value} onChange={(event) => slot.setValue(event.target.value)} className="h-7 min-w-0 flex-1 text-[13px] md:text-[13px]" />
                        )
                      }
                    />
                    <KeyValueEditorRemove />
                    <KeyValueEditorMessage />
                  </KeyValueEditorRow>
                )}
              </KeyValueEditorRows>
              <div className="flex items-center gap-2">
                <KeyValueEditorAdd />
                <span className="text-[11px] text-muted-foreground tabular-nums">{editor.pairs.length} set · {Object.keys(pairsToObject(editor.pairs)).join(", ")}</span>
              </div>
              <KeyValueEditorPaste mode="replace" />
            </>
          )}
        </KeyValueEditorRoot>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Ut,()=>O(()=>import(`./compose-key-value-editor-DCOmlKgW.js`),[]));var Wt=1e5;function Gt(){let e=(0,q.useRef)(null),[t,r]=(0,q.useState)(`50000`),[i,a]=(0,q.useState)(`start`),[o,s]=(0,q.useState)(0);return(0,J.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,J.jsxs)(`form`,{onSubmit:n=>{n.preventDefault();let r=Number.parseInt(t,10);Number.isFinite(r)&&e.current?.scrollToIndex(r,{align:i})},className:`flex items-center gap-1.5`,children:[(0,J.jsx)(h,{"aria-label":`Row to jump to`,inputMode:`numeric`,value:t,onChange:e=>r(e.target.value),className:`h-7 w-24 text-[13px] tabular-nums md:text-[13px]`}),(0,J.jsx)(`div`,{role:`group`,"aria-label":`Align`,className:`flex`,children:n.map(e=>(0,J.jsx)(k,{type:`button`,size:`xs`,variant:e===i?`secondary`:`ghost`,"aria-pressed":e===i,onClick:()=>a(e),children:e},e))}),(0,J.jsx)(k,{type:`submit`,size:`xs`,children:`Jump`})]}),(0,J.jsx)(dt,{"aria-label":`One hundred thousand rows`,handleRef:e,count:Wt,rowHeight:28,onScrollOffsetChange:s,itemClassName:`gap-2 border-b border-border/50 odd:bg-muted/30`,renderItem:e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`span`,{className:`w-14 text-right text-[11px] tabular-nums text-muted-foreground`,children:[`#`,e]}),(0,J.jsxs)(`span`,{className:`truncate`,children:[`Row `,e.toLocaleString(`en-US`)]})]})}),(0,J.jsxs)(`p`,{className:`text-[11px] tabular-nums text-muted-foreground`,children:[Wt.toLocaleString(`en-US`),` rows · scrollTop `,Math.round(o).toLocaleString(`en-US`),` px`]})]})}var Kt=`import { useRef, useState, type FormEvent } from "react"
import { SCROLL_ALIGNS, VirtualList, type ScrollAlign, type VirtualListHandle } from "@kitora/collections"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

const COUNT = 100_000

/** 100,000 fixed-height rows: only the visible ones (plus overscan) are in the DOM. Jump to any row with scrollToIndex. */
export function BasicVirtualList() {
  const list = useRef<VirtualListHandle>(null)
  const [row, setRow] = useState("50000")
  const [align, setAlign] = useState<ScrollAlign>("start")
  const [offset, setOffset] = useState(0)
  const jump = (event: FormEvent) => {
    event.preventDefault()
    const n = Number.parseInt(row, 10)
    if (Number.isFinite(n)) list.current?.scrollToIndex(n, { align })
  }
  return (
    <div className="w-full max-w-md space-y-2">
      <form onSubmit={jump} className="flex items-center gap-1.5">
        <Input aria-label="Row to jump to" inputMode="numeric" value={row} onChange={(event) => setRow(event.target.value)} className="h-7 w-24 text-[13px] tabular-nums md:text-[13px]" />
        <div role="group" aria-label="Align" className="flex">
          {SCROLL_ALIGNS.map((a) => (
            <Button key={a} type="button" size="xs" variant={a === align ? "secondary" : "ghost"} aria-pressed={a === align} onClick={() => setAlign(a)}>
              {a}
            </Button>
          ))}
        </div>
        <Button type="submit" size="xs">
          Jump
        </Button>
      </form>
      <VirtualList
        aria-label="One hundred thousand rows"
        handleRef={list}
        count={COUNT}
        rowHeight={28}
        onScrollOffsetChange={setOffset}
        itemClassName="gap-2 border-b border-border/50 odd:bg-muted/30"
        renderItem={(index) => (
          <>
            <span className="w-14 text-right text-[11px] tabular-nums text-muted-foreground">#{index}</span>
            <span className="truncate">Row {index.toLocaleString("en-US")}</span>
          </>
        )}
      />
      <p className="text-[11px] tabular-nums text-muted-foreground">
        {COUNT.toLocaleString("en-US")} rows · scrollTop {Math.round(offset).toLocaleString("en-US")} px
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Kt,()=>O(()=>import(`./virtual-list-BkY4XqKl.js`),[]));var qt=[`deploy`,`rollback`,`cache miss`,`retry`,`timeout`,`user signed in`,`invoice paid`,`webhook queued`,`index rebuilt`,`token rotated`],Jt=[`info`,`warn`,`error`];function Yt(e){let t=Array.from({length:1+e*7%9},(t,n)=>qt[(e+n*3)%qt.length]).join(`, `);return{level:Jt[e%7==0?2:+(e%3==0)],text:`${t}.`}}function Xt(){return(0,J.jsx)(pt,{"aria-label":`Log lines`,count:2e4,estimateSize:()=>40,height:300,className:`w-full max-w-xl`,children:(0,J.jsx)(mt,{children:e=>{let{level:t,text:n}=Yt(e.index);return(0,J.jsxs)(ft,{item:e,className:`grid grid-cols-[5.5rem_1fr] items-start gap-2 border-b border-border/50 py-1.5`,children:[(0,J.jsxs)(`span`,{className:`flex items-center gap-1 text-[11px] tabular-nums text-muted-foreground`,children:[(0,J.jsx)(`span`,{className:t===`error`?`text-destructive`:t===`warn`?`text-amber-800 dark:text-amber-400`:``,children:t}),(0,J.jsxs)(`span`,{children:[`#`,e.index]})]}),(0,J.jsx)(`span`,{className:`text-[12px] leading-4`,children:n})]},e.key)}})})}var Zt=`import { VirtualListContent, VirtualListItem, VirtualListRoot } from "@kitora/collections"

const WORDS = ["deploy", "rollback", "cache miss", "retry", "timeout", "user signed in", "invoice paid", "webhook queued", "index rebuilt", "token rotated"]
const LEVELS = ["info", "warn", "error"] as const

/** A log line of varying length, so rows have different heights. */
function line(i: number) {
  const words = Array.from({ length: 1 + ((i * 7) % 9) }, (_, k) => WORDS[(i + k * 3) % WORDS.length]).join(", ")
  return { level: LEVELS[i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0], text: \`\${words}.\` }
}

/** The preset rebuilt from \`VirtualListRoot\` / \`VirtualListContent\` / \`VirtualListItem\` (also \`VirtualList.Root\` / \`.Content\` / \`.Item\`): a two-column log row, measured variable heights (\`estimateSize\`). */
export function ComposeVirtualList() {
  return (
    <VirtualListRoot aria-label="Log lines" count={20_000} estimateSize={() => 40} height={300} className="w-full max-w-xl">
      <VirtualListContent>
            {(item) => {
              const { level, text } = line(item.index)
              return (
                <VirtualListItem key={item.key} item={item} className="grid grid-cols-[5.5rem_1fr] items-start gap-2 border-b border-border/50 py-1.5">
                  <span className="flex items-center gap-1 text-[11px] tabular-nums text-muted-foreground">
                    <span className={level === "error" ? "text-destructive" : level === "warn" ? "text-amber-800 dark:text-amber-400" : ""}>{level}</span>
                    <span>#{item.index}</span>
                  </span>
                  <span className="text-[12px] leading-4">{text}</span>
                </VirtualListItem>
              )
            }}
      </VirtualListContent>
    </VirtualListRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Zt,()=>O(()=>import(`./compose-virtual-list-C9l-DzEb.js`),[]));var Qt=[{id:`free`,label:`Free`},{id:`team`,label:`Team`},{id:`enterprise`,label:`Enterprise`}],$t=[{id:`bug`,label:`bug`},{id:`design`,label:`design`},{id:`docs`,label:`docs`}],en=[Se(`de`,xe(j,{selectPlaceholder:`Auswählen…`,clearValue:`{label} entfernen`,removeItem:`{label} entfernen`,addPlaceholder:`Hinzufügen…`,addTagPlaceholder:`Tag hinzufügen…`,noMatches:`Keine Treffer`,createItem:`„{query}“ anlegen`})),Se(`es`,xe(j,{selectPlaceholder:`Seleccionar…`,clearValue:`Quitar {label}`,removeItem:`Quitar {label}`,addPlaceholder:`Añadir…`,addTagPlaceholder:`Añadir etiqueta…`,noMatches:`Sin resultados`,createItem:`Crear «{query}»`}))];function tn(){let[e,t]=(0,q.useState)(`de`),[n,r]=(0,q.useState)(`team`);return(0,J.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,J.jsx)(gt,{options:[`en`,`de`,`es`],value:e,onValueChange:t,renderSelect:e=>(0,J.jsx)(H,{id:e.id,"aria-label":e.label,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:e.className,renderItem:e=>(0,J.jsx)(`span`,{lang:e.id,children:e.label})})}),(0,J.jsx)(we,{locale:e,bundles:en,children:(0,J.jsxs)(`div`,{className:`grid max-w-sm gap-2`,children:[(0,J.jsx)(H,{items:Qt,value:n,onChange:r,clearable:!0,"aria-label":`Plan`}),(0,J.jsx)(U,{items:$t,defaultValue:[`bug`],"aria-label":`Labels`}),(0,J.jsx)(y,{defaultValue:[`urgent`],"aria-label":`Tags`})]})})]})}var nn=`import { useState } from "react"
import { createBundle, I18nProvider, LocaleSelect, messagesFor } from "@kitora/i18n"
import { COLLECTIONS_MESSAGES, MultiSelect, Select, TagsInput } from "@kitora/collections"

const PLANS = [
  { id: "free", label: "Free" },
  { id: "team", label: "Team" },
  { id: "enterprise", label: "Enterprise" },
]
const LABELS = [
  { id: "bug", label: "bug" },
  { id: "design", label: "design" },
  { id: "docs", label: "docs" },
]

// The parts' own words (placeholder, clear and remove buttons, empty states) are the
// shared catalog's \`collections\` namespace; the items stay the host's data.
const BUNDLES = [
  createBundle(
    "de",
    messagesFor(COLLECTIONS_MESSAGES, { selectPlaceholder: "Auswählen…", clearValue: "{label} entfernen", removeItem: "{label} entfernen", addPlaceholder: "Hinzufügen…", addTagPlaceholder: "Tag hinzufügen…", noMatches: "Keine Treffer", createItem: "„{query}“ anlegen" }),
  ),
  createBundle(
    "es",
    messagesFor(COLLECTIONS_MESSAGES, { selectPlaceholder: "Seleccionar…", clearValue: "Quitar {label}", removeItem: "Quitar {label}", addPlaceholder: "Añadir…", addTagPlaceholder: "Añadir etiqueta…", noMatches: "Sin resultados", createItem: "Crear «{query}»" }),
  ),
]

/** One \`I18nProvider\` relabels every collection part below it; a part's own \`placeholder\` / \`emptyText\` still win. */
export function TranslatedParts() {
  const [locale, setLocale] = useState("de")
  const [plan, setPlan] = useState<string | null>("team")
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <LocaleSelect options={["en", "de", "es"]} value={locale} onValueChange={setLocale} renderSelect={(p) => (
        <Select id={p.id} aria-label={p.label} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className={p.className} renderItem={(item) => <span lang={item.id}>{item.label}</span>} />
      )} />
      <I18nProvider locale={locale} bundles={BUNDLES}>
        <div className="grid max-w-sm gap-2">
          <Select items={PLANS} value={plan} onChange={setPlan} clearable aria-label="Plan" />
          <MultiSelect items={LABELS} defaultValue={["bug"]} aria-label="Labels" />
          <TagsInput defaultValue={["urgent"]} aria-label="Tags" />
        </div>
      </I18nProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(nn,()=>O(()=>import(`./translated-DtJXBcll.js`),[]));var rn=[g(`type`,`Type`,[{id:`bug`,label:`bug`,issues:42},{id:`feature`,label:`feature`,issues:17},{id:`chore`,label:`chore`,issues:8}]),g(`area`,`Area`,[{id:`docs`,label:`docs`,issues:11},{id:`infra`,label:`infra`,issues:5}])],an=0;function on(){let[e,t]=(0,q.useState)(rn),[n,r]=(0,q.useState)(`bug`),[i,a]=(0,q.useState)(null),o=e=>{let n={id:`new-${++an}`,label:e,issues:0};return t(e=>[...e,g(n.id,`New`,[n])]),n};return(0,J.jsxs)(`div`,{className:`w-full max-w-xs space-y-2`,children:[(0,J.jsx)(ge,{"aria-label":`Label`,items:e,value:n,onChange:(e,t)=>{r(e),a(t)},onCreate:o,action:{label:`Add a “triage” label`,run:()=>o(`triage`)},placeholder:`Find or create a label`,children:({rows:e})=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ae,{children:[(0,J.jsx)(he,{}),(0,J.jsx)(fe,{}),(0,J.jsx)(se,{}),(0,J.jsx)(me,{}),(0,J.jsx)(pe,{})]}),(0,J.jsxs)(ue,{children:[(0,J.jsx)(ce,{emptyText:`No label matches`}),(0,J.jsx)(oe,{rows:e,renderItem:e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{className:`flex-1 truncate`,children:e.label}),(0,J.jsx)(`span`,{className:`text-[11px] tabular-nums ${A}`,children:e.issues})]})}),(0,J.jsx)(le,{label:e=>`New label “${e}”`}),(0,J.jsx)(de,{})]})]})}),(0,J.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Label: `,i?.label??n??`none`]})]})}var sn=`import { useState } from "react"
import { ComboboxAction, ComboboxClear, ComboboxCreate, ComboboxField, ComboboxInput, ComboboxLeadingIcon, ComboboxOptions, ComboboxPopup, ComboboxRoot, ComboboxSpinner, ComboboxStatus, ComboboxToggle, mutedClass, section } from "@kitora/collections"

interface Label {
  readonly id: string
  readonly label: string
  readonly disabled?: boolean
  readonly children?: readonly Label[]
  /** A field of our own: the parts hand it back typed, no cast. */
  readonly issues: number
}

const START = [
  section<Label>("type", "Type", [
    { id: "bug", label: "bug", issues: 42 },
    { id: "feature", label: "feature", issues: 17 },
    { id: "chore", label: "chore", issues: 8 },
  ]),
  section<Label>("area", "Area", [
    { id: "docs", label: "docs", issues: 11 },
    { id: "infra", label: "infra", issues: 5 },
  ]),
]

let created = 0

/** The \`<Combobox>\` preset rebuilt from its parts: our own row (a count on the right), a create row and an extra action. */
export function ComposeCombobox() {
  const [items, setItems] = useState(START)
  const [value, setValue] = useState<string | null>("bug")
  const [picked, setPicked] = useState<Label | null>(null)
  const add = (name: string): Label => {
    const label = { id: \`new-\${++created}\`, label: name, issues: 0 }
    setItems((now) => [...now, section<Label>(label.id, "New", [label])])
    return label
  }
  return (
    <div className="w-full max-w-xs space-y-2">
      <ComboboxRoot<Label>
        aria-label="Label"
        items={items}
        value={value}
        onChange={(id, item) => {
          setValue(id)
          setPicked(item)
        }}
        onCreate={add}
        action={{ label: "Add a “triage” label", run: () => add("triage") }}
        placeholder="Find or create a label"
      >
        {({ rows }) => (
          <>
            <ComboboxField>
              <ComboboxLeadingIcon />
              <ComboboxInput />
              <ComboboxSpinner />
              <ComboboxClear />
              <ComboboxToggle />
            </ComboboxField>
            <ComboboxPopup>
              <ComboboxStatus emptyText="No label matches" />
              <ComboboxOptions
                rows={rows}
                renderItem={(item) => (
                  <>
                    <span className="flex-1 truncate">{item.label}</span>
                    <span className={\`text-[11px] tabular-nums \${mutedClass}\`}>{item.issues}</span>
                  </>
                )}
              />
              <ComboboxCreate label={(query) => \`New label “\${query}”\`} />
              <ComboboxAction />
            </ComboboxPopup>
          </>
        )}
      </ComboboxRoot>
      <p className="text-[12px] text-muted-foreground">Label: {picked?.label ?? value ?? "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(sn,()=>O(()=>import(`./compose-combobox-Opp2Yjrz.js`),[]));var cn=[{name:`CheckIcon`,glyph:(0,J.jsx)(P,{})},{name:`ChevronDownIcon`,glyph:(0,J.jsx)(F,{})},{name:`ChevronRightIcon`,glyph:(0,J.jsx)(ke,{})},{name:`XIcon`,glyph:(0,J.jsx)(Oe,{})},{name:`PlusIcon`,glyph:(0,J.jsx)(je,{})},{name:`SearchIcon`,glyph:(0,J.jsx)(M,{})},{name:`SpinnerIcon`,glyph:(0,J.jsx)(N,{})}],Q=[{id:`todo`,label:`Todo`,hint:`T`},{id:`doing`,label:`In progress`,hint:`P`},{id:`done`,label:`Done`,icon:(0,J.jsx)(P,{}),hint:`D`}],ln=_(Q);function un(){let[e,n]=(0,q.useState)(`pro`),[r,i]=(0,q.useState)([`urgent`,`frontend`,`q4`]),[a,o]=(0,q.useState)(`doing`),[s,c]=(0,q.useState)(!1),[l,u]=(0,q.useState)(null),d=(0,q.useId)(),f=Q.find(e=>e.id===a);return(0,J.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-4 text-[13px]`,children:[(0,J.jsx)(`ul`,{"aria-label":`Glyphs`,className:`flex flex-wrap gap-x-4 gap-y-2`,children:cn.map(e=>(0,J.jsxs)(`li`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[e.glyph,(0,J.jsx)(`code`,{className:`text-[11px]`,children:e.name})]},e.name))}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,J.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(I,{state:`unchecked`}),` unchecked`]}),(0,J.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(I,{state:`mixed`}),` mixed`]}),(0,J.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(I,{state:`checked`}),` checked`]})]}),(0,J.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[(0,J.jsxs)(`label`,{className:`grid gap-1`,children:[(0,J.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`Highlight a query`}),(0,J.jsx)(h,{value:e,onChange:e=>n(e.target.value),className:`h-7 text-[13px] md:text-[13px]`})]}),(0,J.jsxs)(`div`,{className:`grid gap-1`,children:[(0,J.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`Highlight and ItemContent`}),(0,J.jsx)(`span`,{className:`truncate`,children:(0,J.jsx)(ve,{text:`Project progress report`,query:e})}),(0,J.jsx)(`span`,{className:`flex items-center gap-2 rounded-md border border-border px-2 py-1`,children:(0,J.jsx)(De,{item:{id:`report`,label:`Progress report`,description:`PDF`,hint:`⌘P`,icon:(0,J.jsx)(M,{})},query:e})})]})]}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[r.map(e=>(0,J.jsx)(Me,{removeLabel:`Remove ${e}`,onRemove:()=>i(t=>t.filter(t=>t!==e)),children:e},e)),r.length===0?(0,J.jsx)(L,{children:`No tags left`}):null]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsxs)(`button`,{ref:u,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":s,"aria-controls":s?d:void 0,onClick:()=>c(e=>!e),onKeyDown:e=>{e.key===`Escape`&&c(!1)},className:`inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-background px-2 text-[13px] hover:bg-accent`,children:[`Status: `,f?.label,(0,J.jsx)(F,{className:`text-muted-foreground`})]}),(0,J.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`A picker hand-made from Popup and OptionList`})]}),(0,J.jsxs)(t,{open:s,anchor:l,matchWidth:!0,onOutside:()=>c(!1),className:`w-56 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md`,children:[(0,J.jsx)(`div`,{id:d,role:`listbox`,"aria-label":`Status`,children:(0,J.jsx)(Ae,{rows:ln,selected:new Set([a]),idPrefix:d,mark:`check`,onPick:e=>{o(e.item.id),c(!1),l?.focus()}})}),(0,J.jsxs)(L,{children:[(0,J.jsx)(N,{}),` Syncing statuses…`]})]})]})}var dn=`import { useId, useState } from "react"
import { CheckBox, CheckIcon, ChevronDownIcon, ChevronRightIcon, Chip, flatten, ItemContent, OptionList, PlusIcon, Popup, SearchIcon, SpinnerIcon, StatusRow, XIcon, type Entry } from "@kitora/collections"
import { Highlight } from "@kitora/ui/highlight"
import { Input } from "@kitora/ui/input"

const GLYPHS = [
  { name: "CheckIcon", glyph: <CheckIcon /> },
  { name: "ChevronDownIcon", glyph: <ChevronDownIcon /> },
  { name: "ChevronRightIcon", glyph: <ChevronRightIcon /> },
  { name: "XIcon", glyph: <XIcon /> },
  { name: "PlusIcon", glyph: <PlusIcon /> },
  { name: "SearchIcon", glyph: <SearchIcon /> },
  { name: "SpinnerIcon", glyph: <SpinnerIcon /> },
]

const STATUSES: readonly Entry[] = [
  { id: "todo", label: "Todo", hint: "T" },
  { id: "doing", label: "In progress", hint: "P" },
  { id: "done", label: "Done", icon: <CheckIcon />, hint: "D" },
]

const ROWS = flatten(STATUSES)

/** The shared parts every list is drawn with: the glyphs, a checkbox square, match highlighting, an option's inside, a chip, a status row, and an \`OptionList\` in a \`Popup\` as a hand-made picker. */
export function SharedParts() {
  const [query, setQuery] = useState("pro")
  const [tags, setTags] = useState(["urgent", "frontend", "q4"])
  const [status, setStatus] = useState("doing")
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
  const listId = useId()
  const current = STATUSES.find((s) => s.id === status)
  return (
    <div className="grid w-full max-w-2xl gap-4 text-[13px]">
      <ul aria-label="Glyphs" className="flex flex-wrap gap-x-4 gap-y-2">
        {GLYPHS.map((g) => (
          <li key={g.name} className="flex items-center gap-1.5 text-muted-foreground">
            {g.glyph}
            <code className="text-[11px]">{g.name}</code>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex items-center gap-1.5"><CheckBox state="unchecked" /> unchecked</span>
        <span className="flex items-center gap-1.5"><CheckBox state="mixed" /> mixed</span>
        <span className="flex items-center gap-1.5"><CheckBox state="checked" /> checked</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-[12px] text-muted-foreground">Highlight a query</span>
          <Input value={query} onChange={(event) => setQuery(event.target.value)} className="h-7 text-[13px] md:text-[13px]" />
        </label>
        <div className="grid gap-1">
          <span className="text-[12px] text-muted-foreground">Highlight and ItemContent</span>
          <span className="truncate"><Highlight text="Project progress report" query={query} /></span>
          <span className="flex items-center gap-2 rounded-md border border-border px-2 py-1">
            <ItemContent item={{ id: "report", label: "Progress report", description: "PDF", hint: "⌘P", icon: <SearchIcon /> }} query={query} />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {tags.map((tag) => (
          <Chip key={tag} removeLabel={\`Remove \${tag}\`} onRemove={() => setTags((now) => now.filter((t) => t !== tag))}>{tag}</Chip>
        ))}
        {tags.length === 0 ? <StatusRow>No tags left</StatusRow> : null}
      </div>
      <div className="flex items-center gap-2">
        <button
          ref={setAnchor}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          onClick={() => setOpen((now) => !now)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false)
          }}
          className="inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-background px-2 text-[13px] hover:bg-accent"
        >
          Status: {current?.label}
          <ChevronDownIcon className="text-muted-foreground" />
        </button>
        <span className="text-[12px] text-muted-foreground">A picker hand-made from Popup and OptionList</span>
      </div>
      <Popup open={open} anchor={anchor} matchWidth onOutside={() => setOpen(false)} className="w-56 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">
        <div id={listId} role="listbox" aria-label="Status">
          <OptionList
            rows={ROWS}
            selected={new Set([status])}
            idPrefix={listId}
            mark="check"
            onPick={(row) => {
              setStatus(row.item.id)
              setOpen(false)
              anchor?.focus()
            }}
          />
        </div>
        <StatusRow>
          <SpinnerIcon /> Syncing statuses…
        </StatusRow>
      </Popup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(dn,()=>O(()=>import(`./shared-parts-Qw4_8Fv9.js`),[]));var fn=[{id:`designs`,label:`Designs`,kind:`folder`,detail:`12 items`},{id:`brief`,label:`Launch brief.docx`,kind:`doc`,detail:`Edited 2 hours ago`},{id:`hero`,label:`Hero image.png`,kind:`image`,detail:`Edited yesterday`},{id:`legal`,label:`Legal review.docx`,kind:`doc`,detail:`Locked by Legal`,disabled:!0},{id:`notes`,label:`Interview notes.docx`,kind:`doc`,detail:`Edited last week`}],pn={folder:(0,J.jsx)(f,{}),doc:(0,J.jsx)(d,{}),image:(0,J.jsx)(p,{})};function mn(){let[e,t]=(0,q.useState)([`brief`]),[n,r]=(0,q.useState)(``);return(0,J.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,J.jsx)(Ue,{"aria-label":`Files`,items:fn,selectionMode:`multiple`,selectedKeys:e,onSelectionChange:t,onAction:e=>r(e.label),size:`sm`,renderItem:e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(We,{variant:`icon`,children:pn[e.kind]}),(0,J.jsxs)(B,{children:[(0,J.jsx)(V,{children:e.label}),(0,J.jsx)(R,{children:e.detail})]}),(0,J.jsx)(z,{children:(0,J.jsx)(k,{size:`xs`,variant:`outline`,onClick:()=>r(e.label),children:`Open`})})]})}),(0,J.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[e.length,` selected`,n?`, opened ${n}`:``]})]})}var hn=`import { useState } from "react"
import { FileTextIcon, FolderIcon, ImageIcon } from "lucide-react"
import { ItemList } from "@kitora/collections"
import { Button } from "@kitora/ui/button"
import { ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@kitora/ui/item"

interface FileEntry {
  readonly id: string
  readonly label: string
  readonly kind: "folder" | "doc" | "image"
  readonly detail: string
  readonly disabled?: boolean
}

const FILES: FileEntry[] = [
  { id: "designs", label: "Designs", kind: "folder", detail: "12 items" },
  { id: "brief", label: "Launch brief.docx", kind: "doc", detail: "Edited 2 hours ago" },
  { id: "hero", label: "Hero image.png", kind: "image", detail: "Edited yesterday" },
  { id: "legal", label: "Legal review.docx", kind: "doc", detail: "Locked by Legal", disabled: true },
  { id: "notes", label: "Interview notes.docx", kind: "doc", detail: "Edited last week" },
]

const ICONS = { folder: <FolderIcon />, doc: <FileTextIcon />, image: <ImageIcon /> }

/** The preset: Item rows with a checkbox each (multiple mode), a button inside every row, Enter or a double click to open. */
export function BasicItemList() {
  const [selected, setSelected] = useState<string[]>(["brief"])
  const [opened, setOpened] = useState("")
  return (
    <div className="w-full max-w-md space-y-2">
      <ItemList<FileEntry>
        aria-label="Files"
        items={FILES}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onAction={(file) => setOpened(file.label)}
        size="sm"
        renderItem={(file) => (
          <>
            <ItemMedia variant="icon">{ICONS[file.kind]}</ItemMedia>
            <ItemContent>
              <ItemTitle>{file.label}</ItemTitle>
              <ItemDescription>{file.detail}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="xs" variant="outline" onClick={() => setOpened(file.label)}>
                Open
              </Button>
            </ItemActions>
          </>
        )}
      />
      <p className="text-xs text-muted-foreground">
        {selected.length} selected{opened ? \`, opened \${opened}\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(hn,()=>O(()=>import(`./item-list-TzUaEGOJ.js`),[]));var gn=[{id:`t1`,label:`Write the release notes`,owner:`Ada`,status:`open`},{id:`t2`,label:`Review the pricing page`,owner:`Grace`,status:`open`},{id:`t3`,label:`Fix the focus ring on rows`,owner:`Alan`,status:`done`},{id:`t4`,label:`Translate the empty states`,owner:`Katherine`,status:`open`}];function _n(){let[e,t]=(0,q.useState)(``),[n,r]=(0,q.useState)([]),i=gn.filter(t=>t.label.toLowerCase().includes(e.trim().toLowerCase()));return(0,J.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,J.jsx)(h,{"aria-label":`Filter tasks`,placeholder:`Filter tasks`,value:e,onChange:e=>t(e.target.value)}),(0,J.jsx)(Be,{"aria-label":`Tasks`,items:i,selectionMode:`multiple`,selectionBehavior:`replace`,children:({rows:e})=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(He,{children:(0,J.jsx)(`span`,{className:A,children:`No task matches`})}),e.map(e=>(0,J.jsxs)(ze,{row:e,size:`xs`,children:[(0,J.jsx)(Ve,{}),(0,J.jsxs)(B,{className:`gap-0`,children:[(0,J.jsx)(V,{children:e.item.label}),(0,J.jsx)(R,{className:`line-clamp-1`,children:e.item.owner})]}),(0,J.jsxs)(z,{children:[(0,J.jsx)(Te,{variant:e.item.status===`done`?`secondary`:`outline`,children:e.item.status}),(0,J.jsx)(k,{size:`icon-xs`,variant:`ghost`,"aria-label":`${n.includes(e.key)?`Unstar`:`Star`} ${e.item.label}`,"aria-pressed":n.includes(e.key),onClick:()=>r(t=>t.includes(e.key)?t.filter(t=>t!==e.key):[...t,e.key]),children:(0,J.jsx)(m,{className:n.includes(e.key)?`fill-current`:void 0})})]})]},e.key))]})})]})}var vn=`import { useState } from "react"
import { StarIcon } from "lucide-react"
import { ItemListCheckbox, ItemListEmpty, ItemListRoot, ItemListRow, mutedClass } from "@kitora/collections"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { ItemActions, ItemContent, ItemDescription, ItemTitle } from "@kitora/ui/item"

interface Task {
  readonly id: string
  readonly label: string
  readonly owner: string
  readonly status: "open" | "done"
}

const TASKS: Task[] = [
  { id: "t1", label: "Write the release notes", owner: "Ada", status: "open" },
  { id: "t2", label: "Review the pricing page", owner: "Grace", status: "open" },
  { id: "t3", label: "Fix the focus ring on rows", owner: "Alan", status: "done" },
  { id: "t4", label: "Translate the empty states", owner: "Katherine", status: "open" },
]

/** The \`<ItemList>\` preset rebuilt from \`ItemListRoot\` / \`Row\` / \`Checkbox\` / \`Empty\`: a filter, our own row layout and a status badge. */
export function ComposeItemList() {
  const [query, setQuery] = useState("")
  const [starred, setStarred] = useState<string[]>([])
  const tasks = TASKS.filter((task) => task.label.toLowerCase().includes(query.trim().toLowerCase()))
  return (
    <div className="w-full max-w-md space-y-2">
      <Input aria-label="Filter tasks" placeholder="Filter tasks" value={query} onChange={(event) => setQuery(event.target.value)} />
      <ItemListRoot<Task> aria-label="Tasks" items={tasks} selectionMode="multiple" selectionBehavior="replace">
        {({ rows }) => (
          <>
            <ItemListEmpty>
              <span className={mutedClass}>No task matches</span>
            </ItemListEmpty>
            {rows.map((row) => (
              <ItemListRow key={row.key} row={row} size="xs">
                <ItemListCheckbox />
                <ItemContent className="gap-0">
                  <ItemTitle>{row.item.label}</ItemTitle>
                  <ItemDescription className="line-clamp-1">{row.item.owner}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant={row.item.status === "done" ? "secondary" : "outline"}>{row.item.status}</Badge>
                  <Button
                    size="icon-xs"
                    variant="ghost"
                    aria-label={\`\${starred.includes(row.key) ? "Unstar" : "Star"} \${row.item.label}\`}
                    aria-pressed={starred.includes(row.key)}
                    onClick={() => setStarred((keys) => (keys.includes(row.key) ? keys.filter((key) => key !== row.key) : [...keys, row.key]))}
                  >
                    <StarIcon className={starred.includes(row.key) ? "fill-current" : undefined} />
                  </Button>
                </ItemActions>
              </ItemListRow>
            ))}
          </>
        )}
      </ItemListRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(vn,()=>O(()=>import(`./compose-item-list-fT3gC7Dq.js`),[]));var yn=[{id:`asia`,label:`Asia`,children:[{id:`japan`,label:`Japan`,children:[{id:`tokyo`,label:`Tokyo`}]}]},{id:`europe`,label:`Europe`,children:[{id:`france`,label:`France`,children:[{id:`paris`,label:`Paris`}]}]}],bn=[`Ada`,`Grace`,`Linus`,`Barbara`].map(e=>({id:e.toLowerCase(),label:e}));function xn(){let[e,t]=(0,q.useState)(null);return(0,J.jsxs)(`form`,{className:`flex w-full max-w-lg flex-col gap-3 p-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,J.jsxs)(o,{name:`office`,children:[(0,J.jsx)(a,{children:`Office`}),(0,J.jsx)(ut,{items:yn,placeholder:`Pick a city…`,required:!0}),(0,J.jsx)(r,{match:`valueMissing`,children:`Pick an office.`})]}),(0,J.jsxs)(o,{name:`reviewers`,children:[(0,J.jsx)(a,{children:`Reviewers`}),(0,J.jsx)(W,{items:bn,defaultValue:[`grace`]})]}),(0,J.jsxs)(o,{name:`labels`,children:[(0,J.jsx)(a,{children:`Labels`}),(0,J.jsx)(y,{defaultValue:[`bug`]}),(0,J.jsx)(i,{children:`Press Enter after each label.`})]}),(0,J.jsx)(k,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,J.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,J.jsx)(`code`,{children:e??`not submitted`})]})]})}var Sn=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Cascader, TagsInput, TransferList } from "@kitora/collections/ui"

const PLACES = [
  { id: "asia", label: "Asia", children: [{ id: "japan", label: "Japan", children: [{ id: "tokyo", label: "Tokyo" }] }] },
  { id: "europe", label: "Europe", children: [{ id: "france", label: "France", children: [{ id: "paris", label: "Paris" }] }] },
]
const PEOPLE = ["Ada", "Grace", "Linus", "Barbara"].map((name) => ({ id: name.toLowerCase(), label: name }))

/** Each picker posts with a plain \`<form>\`: the Cascader its path in order, the TransferList its chosen ids, the TagsInput one entry per tag. */
export function BasicFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-lg flex-col gap-3 p-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="office">
        <FieldLabel>Office</FieldLabel>
        <Cascader items={PLACES} placeholder="Pick a city…" required />
        <FieldError match="valueMissing">Pick an office.</FieldError>
      </Field>
      <Field name="reviewers">
        <FieldLabel>Reviewers</FieldLabel>
        <TransferList items={PEOPLE} defaultValue={["grace"]} />
      </Field>
      <Field name="labels">
        <FieldLabel>Labels</FieldLabel>
        <TagsInput defaultValue={["bug"]} />
        <FieldDescription>Press Enter after each label.</FieldDescription>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Sn,()=>O(()=>import(`./form-submit-DVVhz1eU.js`),[]));var Cn=[`Europe`,`Asia`,`Americas`].map(e=>({id:e.toLowerCase(),label:e,children:Array.from({length:100},(t,n)=>({id:`${e.toLowerCase()}-${n+1}`,label:`${e} city ${n+1}`}))})),$=Ge(!0);function wn(){let[e,t]=(0,q.useState)(null),[n,r]=(0,q.useState)(``),[i,a]=(0,q.useState)(!1),[o,u]=(0,q.useState)([]),[d,f]=(0,q.useState)(null),[p,m]=(0,q.useState)(!0),h=lt({items:Cn,query:n,open:i,creatable:!p}),g=(0,q.useMemo)(()=>ot(h.options,h.canCreate,!0),[h.options,h.canCreate]),_=Ke(p,i);return $===null?null:(0,J.jsxs)(`div`,{className:`grid w-72 gap-2 text-[13px]`,children:[(0,J.jsxs)(l,{items:g.ids,itemToStringLabel:g.label,filter:null,virtualized:p,value:e,onValueChange:e=>{if(e===`\0collections:create`){u(e=>[...e,n.trim()]);return}if(e===`\0collections:action`){u(e=>[...e,n.trim()||`New city`]);return}t(e)},inputValue:n,onInputValueChange:e=>r(e),open:i,onOpenChange:a,onItemHighlighted:(e,t)=>_.onHighlight(t),children:[(0,J.jsx)(`div`,{ref:f,className:Ce(Ee,`w-full`),children:(0,J.jsx)(c,{"aria-label":`City`,placeholder:`Search 300 cities…`,className:`h-5 min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground`})}),(0,J.jsxs)(ct,{popupHeight:240,label:`City`,anchor:d,children:[(0,J.jsx)(it,{listEmpty:h.options.length===0&&!h.canCreate,children:h.options.length===0?(0,J.jsx)(L,{children:`No city matches`}):null}),p?(0,J.jsx)(qe,{rows:h.rows,config:$,highlight:_.highlight,renderRow:e=>e.kind===`header`?(0,J.jsx)(Je,{label:e.section.label,first:e.first,config:$},e.key):(0,J.jsx)(s,{value:e.item.id,label:e.item.label,index:e.index,style:{height:$.rowHeight},className:`flex items-center rounded px-2 data-highlighted:bg-accent data-highlighted:text-accent-foreground`,children:e.item.label},e.key)}):(0,J.jsx)(st,{rows:h.rows,selected:new Set(e?[e]:[]),query:n,mark:`check`}),h.canCreate?(0,J.jsxs)(rt,{afterOptions:h.options.length>0,children:[`Create “`,n.trim(),`”`]}):null,(0,J.jsx)(at,{afterOptions:h.options.length>0,busy:!1,children:`Add a city`})]})]}),(0,J.jsxs)(`label`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:!p,onChange:e=>m(!e.target.checked)}),`Mount every row (and offer Create)`]}),(0,J.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Picked: `,e??`none`,o.length>0?` · added: ${o.join(`, `)}`:``]})]})}var Tn=`import { useMemo, useState } from "react"
import { Combobox } from "@kitora/primitives/react"
import type { CollectionNode } from "@kitora/collections/core"
import { ACTION_VALUE, cn, ComboActionRow, ComboCreateRow, ComboOptions, ComboPopup, ComboStatusBox, comboEntries, CREATE_VALUE, fieldClass, StatusRow, useComboSource, useVirtualHighlight, virtualConfig, VirtualHeading, VirtualRows, type Entry } from "@kitora/collections/ui"

// 300 cities in three regions: enough rows that only the ones in view are mounted.
const REGIONS = ["Europe", "Asia", "Americas"]
const ITEMS: CollectionNode<Entry>[] = REGIONS.map((region) => ({
  id: region.toLowerCase(),
  label: region,
  children: Array.from({ length: 100 }, (_, i) => ({ id: \`\${region.toLowerCase()}-\${i + 1}\`, label: \`\${region} city \${i + 1}\` })),
}))

const config = virtualConfig(true)

/**
 * A picker of your own from the collections kit's public parts: \`useComboSource\` filters the items by the query, \`comboEntries\` turns its rows
 * into the primitives root's \`items\` (plus an action row), \`VirtualRows\` mounts only the rows in view (each region's heading drawn by
 * \`VirtualHeading\`) and keeps the highlighted one mounted, \`useVirtualHighlight\` follows the root's highlight, and \`ComboPopup\`,
 * \`ComboStatusBox\` and \`ComboActionRow\` draw the popup, the empty row and the last "Add a city" row. With "Mount every row" on, \`ComboOptions\`
 * draws the grouped list instead, and a query no city matches offers \`ComboCreateRow\`.
 */
export function ComposePicker() {
  const [value, setValue] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [added, setAdded] = useState<string[]>([])
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null)
  const [windowed, setWindowed] = useState(true)
  const source = useComboSource<Entry>({ items: ITEMS, query, open, creatable: !windowed })
  const entries = useMemo(() => comboEntries(source.options, source.canCreate, true), [source.options, source.canCreate])
  const virtual = useVirtualHighlight(windowed, open)
  if (config === null) return null
  return (
    <div className="grid w-72 gap-2 text-[13px]">
      <Combobox.Root<string>
        items={entries.ids}
        itemToStringLabel={entries.label}
        filter={null}
        virtualized={windowed}
        value={value}
        onValueChange={(next) => {
          if (next === CREATE_VALUE) {
            setAdded((list) => [...list, query.trim()])
            return
          }
          if (next === ACTION_VALUE) {
            setAdded((list) => [...list, query.trim() || "New city"])
            return
          }
          setValue(next)
        }}
        inputValue={query}
        onInputValueChange={(next) => setQuery(next)}
        open={open}
        onOpenChange={setOpen}
        onItemHighlighted={(_item, details) => virtual.onHighlight(details)}
      >
        <div ref={setAnchor} className={cn(fieldClass, "w-full")}>
          <Combobox.Input aria-label="City" placeholder="Search 300 cities…" className="h-5 min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground" />
        </div>
        <ComboPopup popupHeight={240} label="City" anchor={anchor}>
          <ComboStatusBox listEmpty={source.options.length === 0 && !source.canCreate}>{source.options.length === 0 ? <StatusRow>No city matches</StatusRow> : null}</ComboStatusBox>
          {windowed ? (
            <VirtualRows
              rows={source.rows}
              config={config}
              highlight={virtual.highlight}
              renderRow={(row) =>
                row.kind === "header" ? (
                  <VirtualHeading key={row.key} label={row.section.label} first={row.first} config={config} />
                ) : (
                  <Combobox.Item key={row.key} value={row.item.id} label={row.item.label} index={row.index} style={{ height: config.rowHeight }} className="flex items-center rounded px-2 data-highlighted:bg-accent data-highlighted:text-accent-foreground">
                    {row.item.label}
                  </Combobox.Item>
                )
              }
            />
          ) : (
            <ComboOptions rows={source.rows} selected={new Set(value ? [value] : [])} query={query} mark="check" />
          )}
          {source.canCreate ? <ComboCreateRow afterOptions={source.options.length > 0}>Create “{query.trim()}”</ComboCreateRow> : null}
          <ComboActionRow afterOptions={source.options.length > 0} busy={false}>
            Add a city
          </ComboActionRow>
        </ComboPopup>
      </Combobox.Root>
      <label className="flex items-center gap-1.5 text-muted-foreground">
        <input type="checkbox" checked={!windowed} onChange={(e) => setWindowed(!e.target.checked)} />
        Mount every row (and offer Create)
      </label>
      <p className="text-muted-foreground">
        Picked: {value ?? "none"}
        {added.length > 0 ? \` · added: \${added.join(", ")}\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Tn,()=>O(()=>import(`./compose-picker-WcHApcqO.js`),[]));var En=[{id:`read`,label:`Read`},{id:`comment`,label:`Comment`},{id:`edit`,label:`Edit`},{id:`admin`,label:`Administer`,disabled:!0},{id:`billing`,label:`Billing`}],Dn=[{id:`ada`,label:`Ada Lovelace`},{id:`alan`,label:`Alan Turing`},{id:`grace`,label:`Grace Hopper`}];function On(){return(0,J.jsxs)(`div`,{className:`flex flex-col gap-4 p-4`,children:[(0,J.jsx)(W,{items:En,defaultValue:[`read`],searchable:!0,height:168}),(0,J.jsx)(_e,{"aria-label":`Comment`,placeholder:`Type @ to mention someone`,triggers:[{char:`@`,items:Dn,label:`People`}]})]})}var kn=`import { Mention, TransferList } from "@kitora/collections/ui"

const ROLES = [
  { id: "read", label: "Read" },
  { id: "comment", label: "Comment" },
  { id: "edit", label: "Edit" },
  { id: "admin", label: "Administer", disabled: true },
  { id: "billing", label: "Billing" },
]
const PEOPLE = [
  { id: "ada", label: "Ada Lovelace" },
  { id: "alan", label: "Alan Turing" },
  { id: "grace", label: "Grace Hopper" },
]

/** TransferList (two multi-select Listboxes, search per side, select-all with counts, moves both ways) and Mention (a textarea where @ opens ranked suggestions). */
export function BasicTransferAndMention() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <TransferList items={ROLES} defaultValue={["read"]} searchable height={168} />
      <Mention aria-label="Comment" placeholder="Type @ to mention someone" triggers={[{ char: "@", items: PEOPLE, label: "People" }]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(kn,()=>O(()=>import(`./transfer-and-mention-Ds4GDXz0.js`),[]));function An(){return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(u,{title:`Basics: lists and pickers`,children:"The smallest working example of each list and picker. Each one takes plain items (`id`, `label`) or sections of them. Then a key-value editor and a virtual list, each with its parts. Examples 6 and 7 show how to compose a component from its parts and how to swap an adapter; 13 composes a combobox and 14 shows the shared parts every list is drawn with; 16 is a selectable list of Item rows that hold buttons, and 17 composes it from its parts."}),(0,J.jsx)(G,{n:1,title:`Listbox`,blurb:`Always visible; sections become labelled groups, disabled options are skipped.`,code:Y,children:(0,J.jsx)(K,{testId:`basics-listbox`,children:(0,J.jsx)(vt,{})})}),(0,J.jsx)(G,{n:2,title:`Select`,blurb:"A select-only combobox over the primitives' Select parts: the field is the `combobox`, the options hold focus while the list is open, a typed letter jumps (on the closed field it picks).",code:xt,children:(0,J.jsx)(K,{testId:`basics-select`,children:(0,J.jsx)(bt,{})})}),(0,J.jsx)(G,{n:3,title:`Combobox`,blurb:`Type to filter; the input keeps focus while ↓/↑ move through the matches.`,code:X,children:(0,J.jsx)(K,{testId:`basics-combobox`,children:(0,J.jsx)(Ct,{})})}),(0,J.jsx)(G,{n:4,title:`MultiSelect`,blurb:`Many values as chips; Enter toggles and the list stays open.`,code:Z,children:(0,J.jsx)(K,{testId:`basics-multi-select`,children:(0,J.jsx)(Tt,{})})}),(0,J.jsx)(G,{n:5,title:`TagsInput`,blurb:`Free text: Enter, a comma or a paste adds tags.`,code:Dt,children:(0,J.jsx)(K,{testId:`basics-tags-input`,children:(0,J.jsx)(Et,{})})}),(0,J.jsx)(G,{n:6,title:`Compose your own`,blurb:"Every preset is built only from public parts (`ListboxRoot` / `ListboxGroups` / `ListboxOption` / `ListboxIndicator` / `ListboxEmpty`, `SelectRoot` / `SelectTrigger` / `SelectValue` / `SelectClear` / `SelectIcon` / `SelectPopup` / `SelectEmpty` / `SelectOptions`, each also reachable as `Listbox.Root`, `Select.Trigger` and so on; likewise for Combobox and TreeView). Rebuild them with your own option layout, heading, value and per-part classes.",code:At,children:(0,J.jsx)(K,{testId:`basics-compose`,children:(0,J.jsx)(kt,{})})}),(0,J.jsx)(G,{n:7,title:`Custom adapters`,blurb:"Swap a seam with one typed option: `match` takes any `ItemMatcher` (here prefix only) and `loadItems` takes any `ItemLoader` (here a stand-in search backend).",code:It,children:(0,J.jsx)(K,{testId:`basics-adapters`,minHeight:120,children:(0,J.jsx)(Ft,{})})}),(0,J.jsx)(G,{n:8,title:`A key-value editor`,blurb:`Env vars as rows: a duplicate key is flagged on both rows, Enter in the last value adds a row, the grip (or Space, ↑/↓, Space) reorders, and pasting a .env block into a key, or into the Paste .env panel, splits it into rows.`,code:zt,children:(0,J.jsx)(K,{testId:`basics-key-value`,children:(0,J.jsx)(Rt,{})})}),(0,J.jsx)(G,{n:9,title:`Compose a key-value editor`,blurb:"The preset rebuilt from `KeyValueEditorRoot` / `Rows` / `Row` / `Key` / `Value` / `Remove` / `Message` / `Add` / `Paste` (also `KeyValueEditor.Root` and so on): the value slot renders a Select in one editor and a masked secret input in the other, with reworded messages.",code:Ut,children:(0,J.jsx)(K,{testId:`basics-key-value-compose`,children:(0,J.jsx)(Ht,{})})}),(0,J.jsx)(G,{n:10,title:`A virtual list`,blurb:"100,000 fixed-height rows; only the rows in view plus overscan are mounted. Type a row number and Jump: `scrollToIndex` with `start`, `center`, `end` or `auto` (the least scroll that shows it).",code:Kt,children:(0,J.jsx)(K,{testId:`basics-virtual-list`,children:(0,J.jsx)(Gt,{})})}),(0,J.jsx)(G,{n:11,title:`Compose a virtual list`,blurb:"The preset rebuilt from `VirtualListRoot` / `VirtualListContent` / `VirtualListItem` (also `VirtualList.Root` / `.Content` / `.Item`): a two-column log row whose height depends on its text, measured as it mounts (`estimateSize` turns on measuring).",code:Zt,children:(0,J.jsx)(K,{testId:`basics-virtual-list-compose`,children:(0,J.jsx)(Xt,{})})}),(0,J.jsx)(G,{n:12,title:`Translated part strings`,blurb:"The parts' own words (placeholder, the clear and remove buttons, empty and create rows) come from the shared i18n catalog: an `I18nProvider` with German or Spanish bundles relabels every Select, MultiSelect and TagsInput below it.",code:nn,children:(0,J.jsx)(K,{testId:`basics-translated`,children:(0,J.jsx)(tn,{})})}),(0,J.jsx)(G,{n:13,title:`Compose a combobox`,blurb:"The preset rebuilt from `ComboboxRoot` / `Field` / `LeadingIcon` / `Input` / `Spinner` / `Clear` / `Toggle` / `Popup` / `Status` / `Options` / `Create` / `Action` (also `Combobox.Root` and so on): a count on each row, a create row for a new label and one extra action.",code:sn,children:(0,J.jsx)(K,{testId:`basics-combobox-compose`,children:(0,J.jsx)(on,{})})}),(0,J.jsx)(G,{n:14,title:`Shared parts`,blurb:"The pieces every list is drawn with: the glyphs (`CheckIcon`, `ChevronDownIcon`, `ChevronRightIcon`, `XIcon`, `PlusIcon`, `SearchIcon`, `SpinnerIcon`), `CheckBox`, ui `Highlight`, `ItemContent`, `Chip` and `StatusRow`, plus `OptionList` in a `Popup` as a hand-made picker.",code:dn,children:(0,J.jsx)(K,{testId:`basics-shared-parts`,children:(0,J.jsx)(un,{})})}),(0,J.jsx)(G,{n:15,title:`Transfer list and mention`,blurb:"`TransferList` moves items between two multi-select listboxes with search, select-all and counts per side; `Mention` opens ranked suggestions after @ or # in a plain textarea and inserts the name as text.",code:kn,children:(0,J.jsx)(K,{testId:`basics-transfer-mention`,children:(0,J.jsx)(On,{})})}),(0,J.jsx)(G,{n:16,title:`Item list`,blurb:"A selectable list of ui `Item` rows whose rows hold buttons (the grid pattern, `role=grid`, not an APG listbox): a checkbox per row in multiple mode, Space, Shift+arrows, Shift+click and Ctrl/Cmd+A, Left and Right between a row and its button (mirrored in right-to-left text), Enter or a double click runs `onAction`, a locked row is skipped. Tab leaves the list; `virtual` mounts a window of 10,000 rows.",code:hn,children:(0,J.jsx)(K,{testId:`basics-item-list`,children:(0,J.jsx)(mn,{})})}),(0,J.jsx)(G,{n:17,title:`Compose an item list`,blurb:"The preset rebuilt from `ItemListRoot` / `ItemListRow` / `ItemListCheckbox` / `ItemListEmpty` (also `ItemList.Root` and so on): a filter, our own row layout in the replace behaviour, a badge and a star button per row.",code:vn,children:(0,J.jsx)(K,{testId:`basics-item-list-compose`,children:(0,J.jsx)(_n,{})})}),(0,J.jsx)(G,{n:18,title:`Submits with a form`,blurb:"The `Cascader` posts its path in order, the `TransferList` its chosen ids in their order and the `TagsInput` one entry per tag, each through hidden inputs; inside a `Field` its label names them.",code:Sn,children:(0,J.jsx)(K,{testId:`basics-form-submit`,children:(0,J.jsx)(xn,{})})}),(0,J.jsx)(G,{n:19,title:`Compose a picker`,blurb:"A picker of your own from the parts `Combobox`, `MultiSelect` and `TagsInput` are built from: `useComboSource` filters the items, `comboEntries` hands the rows to the primitives' `Combobox`, `VirtualRows` and `VirtualHeading` mount only the rows in view, and `ComboPopup`, `ComboStatusBox` and `ComboActionRow` draw the popup, the empty row and an action.",code:Tn,children:(0,J.jsx)(K,{testId:`basics-compose-picker`,children:(0,J.jsx)(wn,{})})})]})}export{An as component};