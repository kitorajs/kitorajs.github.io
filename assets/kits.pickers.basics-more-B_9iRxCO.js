import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t}from"./math-BI29zVAU.js";import{t as n}from"./number-input-ChoaiyNQ.js";import{s as r}from"./kit-docs-Cf27Kpa-.js";import{i,n as a,r as o,t as s}from"./color-picker-Dx3B8BjC.js";import{_ as c,a as l,b as ee,d as u,h as d,o as f,r as te,t as p}from"./color-swatches-DrnFiqhQ.js";import{Ec as m,Uc as ne,zc as h}from"./index-BZuUy872.js";import{n as re,t as g}from"./inline-edit-C97fyYy9.js";import{n as _,t as v}from"./otp-Bd_MgMY7.js";import{n as y,t as b}from"./toggle-group-DGKH1xFk.js";import{t as x}from"./recurrence-editor-D17wfblc.js";import{t as S}from"./select-Ddc2TRJI.js";import"./kit-gallery-BBavj2rC.js";import{t as C}from"./example-B67lLz1F.js";import{t as w}from"./-kits.pickers.shared-CdzyDDwe.js";var T=e(ne(),1),E=h();function ie(){let[e,t]=(0,T.useState)(`FREQ=WEEKLY;BYDAY=TH`);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,E.jsx)(x,{value:e,onChange:t,start:`2026-10-15`,renderFrequencySelect:e=>(0,E.jsx)(S,{id:e.id,"aria-labelledby":e.labelId,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:`h-7 w-40 text-[13px]`})}),(0,E.jsxs)(`span`,{className:`text-muted-foreground`,children:[`value: `,(0,E.jsx)(`code`,{className:`font-mono`,children:JSON.stringify(e)})]})]})}var D=`import { useState } from "react"
import { RecurrenceEditor } from "@kitora/pickers"
import { Select } from "@kitora/collections"

/** A repeat rule for an event on 15 October 2026; the value is one RRULE string ("" = does not repeat). */
export function BasicRecurrence() {
  const [rule, setRule] = useState("FREQ=WEEKLY;BYDAY=TH")
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <RecurrenceEditor value={rule} onChange={setRule} start="2026-10-15" renderFrequencySelect={(p) => (
        <Select id={p.id} aria-labelledby={p.labelId} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className="h-7 w-40 text-[13px]" />
      )} />
      <span className="text-muted-foreground">
        value: <code className="font-mono">{JSON.stringify(rule)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>m(()=>import(`./recurrence-BB55E7NO.js`),[]));function ae(){let[e,t]=(0,T.useState)(`#3b82f6`);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,E.jsx)(s,{value:e,onChange:t}),(0,E.jsxs)(`p`,{className:`text-muted-foreground`,children:[`value `,(0,E.jsx)(`code`,{className:`font-mono tabular-nums text-foreground`,children:e})]})]})}var O=`import { useState } from "react"
import { ColorPicker } from "@kitora/pickers"

// The inline colour panel: drag the area and sliders, type a value, or pick a preset. The value is always canonical hex.
export function BasicColorPanel() {
  const [color, setColor] = useState("#3b82f6")
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <ColorPicker value={color} onChange={setColor} />
      <p className="text-muted-foreground">
        value <code className="font-mono tabular-nums text-foreground">{color}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>m(()=>import(`./color-panel-DY-kVRId.js`),[]));function k(){let[e,t]=(0,T.useState)(`#22c55e`);return(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Label colour`}),(0,E.jsx)(a,{label:`Label colour`,value:e,onChange:t})]})}var A=`import { useState } from "react"
import { ColorPickerPopover } from "@kitora/pickers"

// A swatch button that opens the picker in a popover; changes apply live and an outside click closes it.
export function BasicColorPopover() {
  const [color, setColor] = useState("#22c55e")
  return (
    <div className="flex items-center gap-2 text-[13px]">
      <span className="text-muted-foreground">Label colour</span>
      <ColorPickerPopover label="Label colour" value={color} onChange={setColor} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>m(()=>import(`./color-popover-1_ZL3oMr.js`),[]));var j=[`#4f46e5`,`#0ea5e9`,`#16a34a`,`#f59e0b`,`#e11d48`];function M(){let e=0;return{label:`Take the next brand colour`,isSupported:()=>!0,sample:()=>{let t=j[e%j.length]??null;return e+=1,Promise.resolve(t)}}}var N=M();function P(){let[e,t]=(0,T.useState)(`#64748b`);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,E.jsx)(s,{value:e,onChange:t,sampler:N,swatches:[]}),(0,E.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`value `,(0,E.jsx)(`code`,{"data-testid":`sampler-value`,children:e})]})]})}var F=`import { useState } from "react"
import { ColorPicker, type ColorSampler } from "@kitora/pickers"

/** The brand palette the sampler cycles through (stub: replace with your API). */
const BRAND_COLORS = ["#4f46e5", "#0ea5e9", "#16a34a", "#f59e0b", "#e11d48"] as const

/**
 * A custom ColorSampler adapter: instead of the browser's EyeDropper (Chromium
 * only), the sampler button takes the next colour from a brand palette. Any
 * source fits the same two functions: an image, a design-token service, a
 * screenshot tool.
 */
function brandPaletteSampler(): ColorSampler {
  let next = 0
  return {
    label: "Take the next brand colour",
    isSupported: () => true,
    sample: () => {
      const color = BRAND_COLORS[next % BRAND_COLORS.length] ?? null
      next += 1
      return Promise.resolve(color)
    },
  }
}

const sampler = brandPaletteSampler()

export function BasicColorSampler() {
  const [color, setColor] = useState("#64748b")
  return (
    <div className="flex flex-col gap-2">
      <ColorPicker value={color} onChange={setColor} sampler={sampler} swatches={[]} />
      <p className="text-[12px] text-muted-foreground tabular-nums">
        value <code data-testid="sampler-value">{color}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>m(()=>import(`./color-sampler-DUcT1dIR.js`),[]));var I=[`en-US`,`de-DE`,`fr-FR`,`hi-IN`];function L(){let[e,t]=(0,T.useState)(`de-DE`),[r,i]=(0,T.useState)(1299.5),[a,o]=(0,T.useState)(.15),[s,c]=(0,T.useState)(80),l=(0,T.useId)();return(0,E.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,E.jsx)(b,{value:[e],onValueChange:e=>{let n=I.find(t=>t===e[0]);n&&t(n)},variant:`outline`,size:`sm`,"aria-label":`Locale`,children:I.map(e=>(0,E.jsx)(y,{value:e,children:e},e))}),(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,E.jsxs)(`label`,{htmlFor:`${l}-price`,className:`flex flex-col gap-1`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Price`}),(0,E.jsx)(n,{id:`${l}-price`,"aria-label":`Price`,locale:e,format:{style:`currency`,currency:`EUR`},min:0,step:.5,value:r,onValueChange:i})]}),(0,E.jsxs)(`label`,{htmlFor:`${l}-discount`,className:`flex flex-col gap-1`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Discount`}),(0,E.jsx)(n,{id:`${l}-discount`,"aria-label":`Discount`,locale:e,format:{style:`percent`},min:0,max:1,value:a,onValueChange:o})]}),(0,E.jsxs)(`label`,{htmlFor:`${l}-speed`,className:`flex flex-col gap-1`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Speed limit`}),(0,E.jsx)(n,{id:`${l}-speed`,"aria-label":`Speed limit`,locale:e,format:{style:`unit`,unit:`kilometer-per-hour`},min:0,max:300,step:10,stepOnWheel:!0,value:s,onValueChange:c})]})]}),(0,E.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`price `,(0,E.jsx)(`code`,{"data-testid":`number-price`,children:JSON.stringify(r)}),` · discount `,(0,E.jsx)(`code`,{"data-testid":`number-discount`,children:JSON.stringify(a)}),` · speed `,(0,E.jsx)(`code`,{"data-testid":`number-speed`,children:JSON.stringify(s)})]})]})}var R=`import { useId, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"
import { NumberInput } from "@kitora/pickers"

const LOCALES = ["en-US", "de-DE", "fr-FR", "hi-IN"] as const
type Locale = (typeof LOCALES)[number]

/**
 * Three number fields, all typed in the chosen locale: a price in euros, a
 * discount as a percent (0–100 %, one percent per step) and a speed in km/h
 * that also steps with the wheel while focused. Type "1234,5" in de-DE and tab
 * out: it commits as 1.234,50 €. ↑/↓ step, Shift or PageUp/PageDown take ten
 * steps, Home/End go to min/max.
 */
export function BasicNumberField() {
  const [locale, setLocale] = useState<Locale>("de-DE")
  const [price, setPrice] = useState<number | null>(1299.5)
  const [discount, setDiscount] = useState<number | null>(0.15)
  const [speed, setSpeed] = useState<number | null>(80)
  const id = useId()
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <ToggleGroup
        value={[locale]}
        onValueChange={(next) => {
          const picked = LOCALES.find((l) => l === next[0])
          if (picked) setLocale(picked)
        }}
        variant="outline"
        size="sm"
        aria-label="Locale"
      >
        {LOCALES.map((l) => (
          <ToggleGroupItem key={l} value={l}>
            {l}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-wrap items-start gap-4">
        <label htmlFor={\`\${id}-price\`} className="flex flex-col gap-1">
          <span className="text-muted-foreground">Price</span>
          <NumberInput id={\`\${id}-price\`} aria-label="Price" locale={locale} format={{ style: "currency", currency: "EUR" }} min={0} step={0.5} value={price} onValueChange={setPrice} />
        </label>
        <label htmlFor={\`\${id}-discount\`} className="flex flex-col gap-1">
          <span className="text-muted-foreground">Discount</span>
          <NumberInput id={\`\${id}-discount\`} aria-label="Discount" locale={locale} format={{ style: "percent" }} min={0} max={1} value={discount} onValueChange={setDiscount} />
        </label>
        <label htmlFor={\`\${id}-speed\`} className="flex flex-col gap-1">
          <span className="text-muted-foreground">Speed limit</span>
          <NumberInput id={\`\${id}-speed\`} aria-label="Speed limit" locale={locale} format={{ style: "unit", unit: "kilometer-per-hour" }} min={0} max={300} step={10} stepOnWheel value={speed} onValueChange={setSpeed} />
        </label>
      </div>
      <p className="text-muted-foreground tabular-nums">
        price <code data-testid="number-price">{JSON.stringify(price)}</code> · discount <code data-testid="number-discount">{JSON.stringify(discount)}</code> · speed <code data-testid="number-speed">{JSON.stringify(speed)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>m(()=>import(`./number-field-ByXPvMJg.js`),[]));var z={format:e=>{let t=Math.floor(e/60),n=Math.round(e%60);return t===0?`${n}m`:n===0?`${t}h`:`${t}h ${n}m`},parse:e=>{let t=e.trim().toLowerCase();if(t===``)return null;if(/^\d+(\.\d+)?$/.test(t))return Number(t);let n=/^(?:(\d+(?:\.\d+)?)\s*h)?\s*(?:(\d+)\s*m)?$/.exec(t);return!n||n[1]===void 0&&n[2]===void 0?null:Math.round(Number(n[1]??0)*60+Number(n[2]??0))},accepts:e=>/^[\d.\shm]*$/i.test(e)};function B(){let e=(0,T.useId)(),[t,r]=(0,T.useState)(90);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,E.jsxs)(n.Root,{"aria-labelledby":e,formatter:z,min:0,max:1440,step:15,largeStep:60,value:t,onValueChange:r,classNames:{group:`w-44 gap-0 ps-0.5`},children:[(0,E.jsx)(`span`,{id:e,className:`text-muted-foreground`,children:`Meeting length`}),(0,E.jsxs)(n.Group,{children:[(0,E.jsx)(n.Decrement,{"aria-label":`15 minutes shorter`}),(0,E.jsx)(n.Input,{className:`text-center`}),(0,E.jsx)(n.Increment,{"aria-label":`15 minutes longer`})]})]}),(0,E.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`minutes `,(0,E.jsx)(`code`,{"data-testid":`compose-minutes`,children:JSON.stringify(t)})]})]})}var V=`import { useId, useState } from "react"
import { NumberInput, type NumberFormatter } from "@kitora/pickers"

/**
 * A duration formatter: the value is minutes, shown as "1h 30m". It reads
 * "90", "1h 30m", "2h", "45m" or "1.5h". Any \`NumberFormatter\` (format, parse,
 * optional accepts) replaces the Intl default without touching the field.
 */
const durationFormatter: NumberFormatter = {
  format: (minutes) => {
    const h = Math.floor(minutes / 60)
    const m = Math.round(minutes % 60)
    return h === 0 ? \`\${m}m\` : m === 0 ? \`\${h}h\` : \`\${h}h \${m}m\`
  },
  parse: (text) => {
    const t = text.trim().toLowerCase()
    if (t === "") return null
    if (/^\\d+(\\.\\d+)?$/.test(t)) return Number(t)
    const match = /^(?:(\\d+(?:\\.\\d+)?)\\s*h)?\\s*(?:(\\d+)\\s*m)?$/.exec(t)
    if (!match || (match[1] === undefined && match[2] === undefined)) return null
    return Math.round(Number(match[1] ?? 0) * 60 + Number(match[2] ?? 0))
  },
  accepts: (text) => /^[\\d.\\shm]*$/i.test(text),
}

/**
 * The NumberInput preset rebuilt from its parts and rearranged: a visible
 * label, the − and + steppers on either side of a centred input, and the
 * duration formatter above as the adapter. Steps are 15 minutes, a large step
 * (PageUp, Shift+↑) is an hour.
 */
export function BasicNumberFieldCompose() {
  const labelId = useId()
  const [minutes, setMinutes] = useState<number | null>(90)
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <NumberInput.Root aria-labelledby={labelId} formatter={durationFormatter} min={0} max={24 * 60} step={15} largeStep={60} value={minutes} onValueChange={setMinutes} classNames={{ group: "w-44 gap-0 ps-0.5" }}>
        <span id={labelId} className="text-muted-foreground">
          Meeting length
        </span>
        <NumberInput.Group>
          <NumberInput.Decrement aria-label="15 minutes shorter" />
          <NumberInput.Input className="text-center" />
          <NumberInput.Increment aria-label="15 minutes longer" />
        </NumberInput.Group>
      </NumberInput.Root>
      <p className="text-muted-foreground tabular-nums">
        minutes <code data-testid="compose-minutes">{JSON.stringify(minutes)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>m(()=>import(`./number-field-compose-BLWH3nLE.js`),[]));var H=re(),U={style:`currency`,currency:`EUR`};function W(){let[e,r]=(0,T.useState)(`Q4 launch plan`),[i,a]=(0,T.useState)(12500);return(0,E.jsxs)(`div`,{className:`flex w-72 flex-col gap-2 text-[13px]`,children:[(0,E.jsx)(g,{"aria-label":`Title`,value:e,onValueChange:r,placeholder:`Untitled`}),(0,E.jsxs)(H.Root,{"aria-label":`Budget`,value:i,onValueChange:a,children:[(0,E.jsx)(H.Preview,{children:e=>e===null?`No budget`:t(e,`de-DE`,U)}),(0,E.jsx)(H.Input,{render:e=>(0,E.jsx)(n,{locale:`de-DE`,format:U,min:0,step:100,value:e.value,onValueChange:e.setValue,inputProps:e.inputProps,classNames:{root:`w-full`,group:`w-full`}})})]}),(0,E.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`title `,(0,E.jsx)(`code`,{"data-testid":`inline-title`,children:JSON.stringify(e)}),` · budget `,(0,E.jsx)(`code`,{"data-testid":`inline-budget`,children:JSON.stringify(i)})]})]})}var G=`import { useState } from "react"
import { InlineEdit, NumberInput, createInlineEdit, formatNumber } from "@kitora/pickers"

/** Typed parts for a nullable number (createInlineEdit makes a set with its own context). */
const BudgetEdit = createInlineEdit<number | null>()
const EUR = { style: "currency", currency: "EUR" } as const

/**
 * A project title and its budget, each edited in place. Click (or Enter / F2
 * on it) to edit; Enter saves, Escape restores, leaving the field saves. The
 * budget puts a NumberInput in InlineEdit's input slot, so it is typed in
 * de-DE ("2500,5") and steps with ↑/↓ before Enter saves the number.
 */
export function BasicInlineEdit() {
  const [title, setTitle] = useState("Q4 launch plan")
  const [budget, setBudget] = useState<number | null>(12500)
  return (
    <div className="flex w-72 flex-col gap-2 text-[13px]">
      <InlineEdit aria-label="Title" value={title} onValueChange={setTitle} placeholder="Untitled" />
      <BudgetEdit.Root aria-label="Budget" value={budget} onValueChange={setBudget}>
        <BudgetEdit.Preview>{(value) => (value === null ? "No budget" : formatNumber(value, "de-DE", EUR))}</BudgetEdit.Preview>
        <BudgetEdit.Input render={(field) => <NumberInput locale="de-DE" format={EUR} min={0} step={100} value={field.value} onValueChange={field.setValue} inputProps={field.inputProps} classNames={{ root: "w-full", group: "w-full" }} />} />
      </BudgetEdit.Root>
      <p className="text-muted-foreground tabular-nums">
        title <code data-testid="inline-title">{JSON.stringify(title)}</code> · budget <code data-testid="inline-budget">{JSON.stringify(budget)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>m(()=>import(`./inline-edit-B6obn58Q.js`),[]));var K=new Set([`design`,`platform`,`growth`]);function q(e){return new Promise((t,n)=>{setTimeout(()=>K.has(e.trim().toLowerCase())?n(Error(`“${e.trim()}” is already taken`)):t(),600)})}function oe(){let[e,t]=(0,T.useState)(`Billing`);return(0,E.jsxs)(`div`,{className:`flex w-72 flex-col gap-2 text-[13px]`,children:[(0,E.jsxs)(g.Root,{"aria-label":`Team name`,value:e,onValueChange:t,onSubmit:q,validate:e=>e.trim().length<3?`At least 3 characters`:null,submitOnBlur:!1,classNames:{root:`data-[pending]:opacity-60`},children:[(0,E.jsx)(g.Preview,{className:`font-medium`}),(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsx)(g.Input,{className:`flex-1`}),(0,E.jsx)(g.Controls,{})]}),(0,E.jsx)(g.Error,{})]}),(0,E.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`saved `,(0,E.jsx)(`code`,{"data-testid":`inline-compose-value`,children:JSON.stringify(e)})]})]})}var J=`import { useState } from "react"
import { InlineEdit } from "@kitora/pickers"

/** Names the fake server refuses, to show a rejected save. */
const TAKEN = new Set(["design", "platform", "growth"])

/** A save that takes 600 ms and fails for a taken name. */
function saveTeamName(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => (TAKEN.has(name.trim().toLowerCase()) ? reject(new Error(\`“\${name.trim()}” is already taken\`)) : resolve()), 600)
  })
}

/**
 * The InlineEdit preset rebuilt from its parts: preview, input with Save and
 * Cancel buttons, and the error line. \`validate\` keeps the editor open for a
 * name under 3 characters; \`onSubmit\` returns a Promise, so the root is
 * \`data-pending\` (dimmed, read-only) while it runs and a rejection ("Design" is
 * taken) stays in edit mode with the message. Blur cancels here
 * (\`submitOnBlur={false}\`), so only Enter or Save writes.
 */
export function BasicInlineEditCompose() {
  const [name, setName] = useState("Billing")
  return (
    <div className="flex w-72 flex-col gap-2 text-[13px]">
      <InlineEdit.Root aria-label="Team name" value={name} onValueChange={setName} onSubmit={saveTeamName} validate={(v) => (v.trim().length < 3 ? "At least 3 characters" : null)} submitOnBlur={false} classNames={{ root: "data-[pending]:opacity-60" }}>
        <InlineEdit.Preview className="font-medium" />
        <div className="flex items-center gap-1">
          <InlineEdit.Input className="flex-1" />
          <InlineEdit.Controls />
        </div>
        <InlineEdit.Error />
      </InlineEdit.Root>
      <p className="text-muted-foreground tabular-nums">
        saved <code data-testid="inline-compose-value">{JSON.stringify(name)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>m(()=>import(`./inline-edit-compose-Bw2m-Ex6.js`),[]));var Y=[`#16a34a`,`#e11d48`,`#0ea5e9`];function se(){let e=0;return{label:`Take a brand colour`,isSupported:()=>!0,sample:()=>{let t=Y[e%Y.length]??null;return e+=1,Promise.resolve(t)}}}var ce=se(),X={h:220,s:.75,v:.95,a:1};function Z(e,t){let n=c(e);return n?ee(n):t}function le(){let[e,t]=(0,T.useState)(X),n=u(d(e));return(0,E.jsxs)(`div`,{className:`flex w-64 flex-col gap-2 text-[13px]`,children:[(0,E.jsx)(l,{value:e,onChange:t}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxs)(`div`,{className:`flex flex-1 flex-col gap-2`,children:[(0,E.jsx)(f,{value:e,onChange:t}),(0,E.jsx)(te,{value:e,onChange:t})]}),(0,E.jsx)(o,{sampler:ce,onPick:n=>t(Z(n,e))})]}),(0,E.jsx)(i,{value:e,onChange:t}),(0,E.jsx)(p,{value:n,onChange:n=>t(Z(n,e))}),(0,E.jsxs)(`p`,{className:`text-muted-foreground`,children:[`value `,(0,E.jsx)(`code`,{className:`font-mono tabular-nums text-foreground`,children:n})]})]})}var Q=`import { useState } from "react"
import { AlphaSlider, ColorArea, ColorInputs, ColorSwatches, EyeDropperButton, formatHex, HueSlider, hsvaToRgba, parseColor, rgbaToHsva, type ColorSampler, type Hsva } from "@kitora/pickers"

/** A sampler that always answers (the browser EyeDropper is Chromium only): it takes the next brand colour. */
const BRAND = ["#16a34a", "#e11d48", "#0ea5e9"] as const
function brandSampler(): ColorSampler {
  let next = 0
  return {
    label: "Take a brand colour",
    isSupported: () => true,
    sample: () => {
      const color = BRAND[next % BRAND.length] ?? null
      next += 1
      return Promise.resolve(color)
    },
  }
}

const sampler = brandSampler()

const START: Hsva = { h: 220, s: 0.75, v: 0.95, a: 1 }

function toHsva(hex: string, fallback: Hsva): Hsva {
  const rgba = parseColor(hex)
  return rgba ? rgbaToHsva(rgba) : fallback
}

/** The colour panel's parts laid out by hand: ColorArea, HueSlider, AlphaSlider, ColorInputs, ColorSwatches and EyeDropperButton over one HSVA value. */
export function BasicColorParts() {
  const [color, setColor] = useState<Hsva>(START)
  const hex = formatHex(hsvaToRgba(color))
  return (
    <div className="flex w-64 flex-col gap-2 text-[13px]">
      <ColorArea value={color} onChange={setColor} />
      <div className="flex items-center gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <HueSlider value={color} onChange={setColor} />
          <AlphaSlider value={color} onChange={setColor} />
        </div>
        <EyeDropperButton sampler={sampler} onPick={(picked) => setColor(toHsva(picked, color))} />
      </div>
      <ColorInputs value={color} onChange={setColor} />
      <ColorSwatches value={hex} onChange={(picked) => setColor(toHsva(picked, color))} />
      <p className="text-muted-foreground">
        value <code className="font-mono tabular-nums text-foreground">{hex}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>m(()=>import(`./color-parts-DaGv4X1b.js`),[]));function ue(){let[e,t]=(0,T.useState)(``),[n,r]=(0,T.useState)(null),[i,a]=(0,T.useState)(``);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 text-[13px]`,children:[(0,E.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Verification code`}),(0,E.jsx)(v,{label:`Verification code`,value:e,onValueChange:t,onComplete:r}),(0,E.jsx)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,"data-testid":`otp-status`,children:n?`Completed: ${n}`:`Typed: ${e||`—`}`})]}),(0,E.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`Invite code (letters and digits)`}),(0,E.jsxs)(_.Root,{length:4,charset:`alphanumeric`,label:`Invite code`,value:i,onValueChange:a,children:[(0,E.jsxs)(_.Group,{children:[(0,E.jsx)(_.Slot,{index:0,size:`sm`}),(0,E.jsx)(_.Slot,{index:1,size:`sm`})]}),(0,E.jsx)(_.Separator,{}),(0,E.jsxs)(_.Group,{children:[(0,E.jsx)(_.Slot,{index:2,size:`sm`}),(0,E.jsx)(_.Slot,{index:3,size:`sm`})]})]})]})]})}var $=`import { useState } from "react"
import { OtpField, OtpInput } from "@kitora/pickers"

/**
 * A one-time code: the \`OtpField\` preset (six cells, grouped 3 + 3) and the
 * same input rebuilt from \`OtpInput.Root\`, \`Group\`, \`Slot\` and \`Separator\` as a
 * four-character alphanumeric code. Type, paste a whole code into any cell, or
 * let the phone autofill the first one; Backspace walks back, ←/→ move.
 */
export function BasicOtp() {
  const [code, setCode] = useState("")
  const [done, setDone] = useState<string | null>(null)
  const [invite, setInvite] = useState("")
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground">Verification code</span>
        <OtpField label="Verification code" value={code} onValueChange={setCode} onComplete={setDone} />
        <span className="text-[12px] text-muted-foreground tabular-nums" data-testid="otp-status">
          {done ? \`Completed: \${done}\` : \`Typed: \${code || "—"}\`}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground">Invite code (letters and digits)</span>
        <OtpInput.Root length={4} charset="alphanumeric" label="Invite code" value={invite} onValueChange={setInvite}>
          <OtpInput.Group>
            <OtpInput.Slot index={0} size="sm" />
            <OtpInput.Slot index={1} size="sm" />
          </OtpInput.Group>
          <OtpInput.Separator />
          <OtpInput.Group>
            <OtpInput.Slot index={2} size="sm" />
            <OtpInput.Slot index={3} size="sm" />
          </OtpInput.Group>
        </OtpInput.Root>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>m(()=>import(`./otp-Bf_HkmLo.js`),[]));function de(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(r,{title:`Basics: recurrence, colour, numbers, codes and inline edit`,children:"A recurrence is one RRULE string (`FREQ=WEEKLY;BYDAY=MO,WE`, empty for does not repeat) with a readable summary; a colour is one hex string (`#3b82f6`, with alpha `#3b82f6cc`); a number is a plain `number` (or `null` when empty) typed and shown in the locale; an inline edit holds any value and writes it only when saved."}),(0,E.jsx)(C,{n:1,title:`A recurrence editor`,blurb:`Daily, weekly on days, monthly by date or weekday, ending never, after N or on a date; the summary and next dates update live.`,code:D,children:(0,E.jsx)(w,{testId:`basic-recurrence`,children:(0,E.jsx)(ie,{})})}),(0,E.jsx)(C,{n:2,title:`A colour panel`,blurb:`Drag the area and sliders, type hex, RGB or HSL, or pick a swatch; the eyedropper shows where the browser has one.`,code:O,children:(0,E.jsx)(w,{testId:`basic-color-panel`,children:(0,E.jsx)(ae,{})})}),(0,E.jsx)(C,{n:3,title:`A colour popover`,blurb:`A swatch button opening the picker; changes apply live and an outside click closes it.`,code:A,children:(0,E.jsx)(w,{testId:`basic-color-popover`,children:(0,E.jsx)(k,{})})}),(0,E.jsx)(C,{n:4,title:`A custom sampler adapter`,blurb:"The eyedropper is a `ColorSampler` (`isSupported` + `sample`). This one swaps the browser EyeDropper for a brand palette: each click takes the next brand colour.",code:F,children:(0,E.jsx)(w,{testId:`basic-color-sampler`,children:(0,E.jsx)(P,{})})}),(0,E.jsx)(C,{n:5,title:`A number field`,blurb:`Currency, percent and a unit, typed in the chosen locale (de-DE reads 1.234,5 and fr-FR a narrow-space group). Tab out to commit and format; ↑/↓ step, Shift or PageUp/PageDown take ten steps, Home/End go to min/max; the speed also steps with the wheel while focused.`,code:R,children:(0,E.jsx)(w,{testId:`basic-number-field`,children:(0,E.jsx)(L,{})})}),(0,E.jsx)(C,{n:6,title:`Compose a number field`,blurb:"The preset rebuilt from NumberInput.Root, Group, Input, Increment and Decrement with a visible label, steppers either side, and a custom `NumberFormatter` adapter that shows minutes as 1h 30m.",code:V,children:(0,E.jsx)(w,{testId:`basic-number-field-compose`,children:(0,E.jsx)(B,{})})}),(0,E.jsx)(C,{n:7,title:`Inline edit`,blurb:`Click a value (or Enter / F2 on it) to edit in place; Enter saves, Escape restores, blur saves. The budget is a NumberInput in InlineEdit's input slot, typed in de-DE.`,code:G,children:(0,E.jsx)(w,{testId:`basic-inline-edit`,children:(0,E.jsx)(W,{})})}),(0,E.jsx)(C,{n:8,title:`Compose inline edit`,blurb:`Root, Preview, Input, Controls and Error, with validation (at least 3 characters) and an async save that is pending for 600 ms and rejects a taken name (try “Design”). Blur cancels here.`,code:J,children:(0,E.jsx)(w,{testId:`basic-inline-edit-compose`,children:(0,E.jsx)(oe,{})})}),(0,E.jsx)(C,{n:9,title:`Colour from parts`,blurb:"`ColorArea`, `HueSlider`, `AlphaSlider`, `ColorInputs`, `ColorSwatches` and `EyeDropperButton` laid out by hand over one HSVA value; the dropper uses a brand-palette sampler.",code:Q,children:(0,E.jsx)(w,{testId:`basic-color-parts`,children:(0,E.jsx)(le,{})})}),(0,E.jsx)(C,{n:10,title:`A one-time code`,blurb:"`OtpField` (six cells, 3 + 3) and the same input composed from `OtpInput.Root`, `Group`, `Slot` and `Separator` as a four-character alphanumeric code. Paste a whole code into any cell or let the phone autofill it; Backspace walks back, ←/→ move. Auth re-exports these for its two-step screens.",code:$,children:(0,E.jsx)(w,{testId:`basic-otp`,children:(0,E.jsx)(ue,{})})})]})}export{de as component};