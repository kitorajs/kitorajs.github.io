import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{r as t,s as n,t as r}from"./field-DApIfONr.js";import{s as i}from"./kit-docs-DpYhPoxM.js";import{n as a,t as o}from"./color-picker-NZ72pw--.js";import{t as s}from"./input-C8M4VLUF.js";import{_ as c,c as l,u,v as d}from"./color-swatches-xuFXwr5t.js";import{Bc as f,Cc as p,Ic as m,ti as h}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as g}from"./example-B8EaWveR.js";import{t as _}from"./-kits.pickers.shared-CkZQBdgi.js";var v=e(f(),1),y=m(),b=[`background`,`surface`,`border`,`text`,`muted`,`primary`,`onPrimary`],x={background:`Background`,surface:`Surface`,border:`Border`,text:`Text`,muted:`Muted text`,primary:`Primary`,onPrimary:`On primary`},S={background:`#f8fafc`,surface:`#ffffff`,border:`#e2e8f0`,text:`#0f172a`,muted:`#64748b`,primary:`#2563eb`,onPrimary:`#ffffff`},C={Daylight:S,Midnight:{background:`#020617`,surface:`#0f172a`,border:`#1e293b`,text:`#f1f5f9`,muted:`#94a3b8`,primary:`#38bdf8`,onPrimary:`#082f49`},Forest:{background:`#f0fdf4`,surface:`#ffffff`,border:`#bbf7d0`,text:`#14532d`,muted:`#4d7c0f`,primary:`#15803d`,onPrimary:`#f0fdf4`}},w=[`#0f172a`,`#334155`,`#64748b`,`#e2e8f0`,`#f8fafc`,`#ffffff`,`#2563eb`,`#38bdf8`,`#15803d`,`#f59e0b`,`#e11d48`,`#7c3aed`],T=[{fg:`text`,bg:`surface`,min:l,note:`body text`},{fg:`muted`,bg:`surface`,min:l,note:`secondary text`},{fg:`onPrimary`,bg:`primary`,min:l,note:`button label`},{fg:`primary`,bg:`background`,min:3,note:`link / UI`},{fg:`border`,bg:`surface`,min:1.3,note:`divider (soft)`}],E={r:0,g:0,b:0,a:1};function D(e,t){return u(c(e[t.fg])??E,c(e[t.bg])??E)}function O({value:e,min:t}){let n=e>=7?`AAA`:e>=4.5?`AA`:e>=3?`AA large`:`fail`,r=e>=t;return(0,y.jsx)(`span`,{className:r?`rounded px-1 text-[11px] font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`:`rounded px-1 text-[11px] font-medium bg-destructive/15 text-destructive`,children:r?n:`${n} · needs ${t}`})}function k(){let[e,t]=(0,v.useState)(S),n=e=>n=>t(t=>({...t,[e]:n}));return(0,y.jsxs)(`div`,{className:`grid gap-4 text-[13px] md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`div`,{className:`flex flex-wrap items-center gap-1`,role:`group`,"aria-label":`Presets`,children:Object.entries(C).map(([e,n])=>(0,y.jsx)(h,{size:`xs`,variant:`outline`,onClick:()=>t(n),children:e},e))}),(0,y.jsx)(`ul`,{className:`flex flex-col divide-y divide-border rounded-md border border-border`,children:b.map(t=>(0,y.jsxs)(`li`,{className:`flex items-center justify-between gap-2 px-2 py-1`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:x[t]}),(0,y.jsx)(a,{label:x[t],value:e[t],onChange:n(t),swatches:w,swatchColumns:6,align:`end`,triggerClassName:`w-28`})]},t))})]}),(0,y.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,y.jsx)(`div`,{className:`rounded-lg p-4`,style:{backgroundColor:e.background},children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-md border p-3`,style:{backgroundColor:e.surface,borderColor:e.border},children:[(0,y.jsx)(`div`,{className:`text-[15px] font-semibold`,style:{color:e.text},children:`Quarterly report is ready`}),(0,y.jsx)(`p`,{style:{color:e.muted},children:`Revenue grew 14% on last quarter. Three regions beat their targets; one needs a review before Friday.`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3 border-t pt-2`,style:{borderColor:e.border},children:[(0,y.jsx)(`span`,{className:`inline-flex h-7 items-center rounded-md px-3 font-medium`,style:{backgroundColor:e.primary,color:e.onPrimary},children:`Open report`}),(0,y.jsx)(`span`,{className:`underline underline-offset-2`,style:{color:e.primary},children:`Share link`})]})]})}),(0,y.jsxs)(`table`,{className:`w-full text-[12px] tabular-nums`,children:[(0,y.jsx)(`caption`,{className:`pb-1 text-start font-medium`,children:`Contrast`}),(0,y.jsx)(`thead`,{className:`text-muted-foreground`,children:(0,y.jsxs)(`tr`,{className:`text-start`,children:[(0,y.jsx)(`th`,{className:`py-1 text-start font-normal`,children:`Pair`}),(0,y.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`Ratio`}),(0,y.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`WCAG`})]})}),(0,y.jsx)(`tbody`,{className:`divide-y divide-border`,children:T.map(t=>{let n=D(e,t);return(0,y.jsxs)(`tr`,{children:[(0,y.jsxs)(`td`,{className:`py-1`,children:[x[t.fg],` on `,x[t.bg].toLowerCase(),` `,(0,y.jsxs)(`span`,{className:`text-muted-foreground`,children:[`· `,t.note]})]}),(0,y.jsxs)(`td`,{className:`py-1 text-end font-mono`,children:[n.toFixed(2),`:1`]}),(0,y.jsx)(`td`,{className:`py-1 text-end`,children:(0,y.jsx)(O,{value:n,min:t.min})})]},`${t.fg}-${t.bg}`)})})]})]})]})}var A=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { ColorPickerPopover, contrastRatio, parseColor, WCAG_AA, WCAG_AA_LARGE, WCAG_AAA, type Rgba } from "@kitora/pickers"

// Brand theme editor: seven colour tokens, a live preview card and a WCAG contrast readout for every text-on-surface pair.

const TOKENS = ["background", "surface", "border", "text", "muted", "primary", "onPrimary"] as const

type Token = (typeof TOKENS)[number]

type Theme = Readonly<Record<Token, string>>

const LABELS: Readonly<Record<Token, string>> = {
  background: "Background",
  surface: "Surface",
  border: "Border",
  text: "Text",
  muted: "Muted text",
  primary: "Primary",
  onPrimary: "On primary",
}

const DAYLIGHT: Theme = { background: "#f8fafc", surface: "#ffffff", border: "#e2e8f0", text: "#0f172a", muted: "#64748b", primary: "#2563eb", onPrimary: "#ffffff" }

const PRESETS: Readonly<Record<string, Theme>> = {
  Daylight: DAYLIGHT,
  Midnight: { background: "#020617", surface: "#0f172a", border: "#1e293b", text: "#f1f5f9", muted: "#94a3b8", primary: "#38bdf8", onPrimary: "#082f49" },
  Forest: { background: "#f0fdf4", surface: "#ffffff", border: "#bbf7d0", text: "#14532d", muted: "#4d7c0f", primary: "#15803d", onPrimary: "#f0fdf4" },
}

const BRAND_SWATCHES = ["#0f172a", "#334155", "#64748b", "#e2e8f0", "#f8fafc", "#ffffff", "#2563eb", "#38bdf8", "#15803d", "#f59e0b", "#e11d48", "#7c3aed"]

/** A text-on-surface pair to check, with the WCAG bar it has to clear. */
interface Pair {
  readonly fg: Token
  readonly bg: Token
  readonly min: number
  readonly note: string
}

const PAIRS: readonly Pair[] = [
  { fg: "text", bg: "surface", min: WCAG_AA, note: "body text" },
  { fg: "muted", bg: "surface", min: WCAG_AA, note: "secondary text" },
  { fg: "onPrimary", bg: "primary", min: WCAG_AA, note: "button label" },
  { fg: "primary", bg: "background", min: WCAG_AA_LARGE, note: "link / UI" },
  { fg: "border", bg: "surface", min: 1.3, note: "divider (soft)" },
]

const OPAQUE_BLACK: Rgba = { r: 0, g: 0, b: 0, a: 1 }

function ratio(theme: Theme, pair: Pair): number {
  return contrastRatio(parseColor(theme[pair.fg]) ?? OPAQUE_BLACK, parseColor(theme[pair.bg]) ?? OPAQUE_BLACK)
}

function Grade({ value, min }: { value: number; min: number }) {
  const grade = value >= WCAG_AAA ? "AAA" : value >= WCAG_AA ? "AA" : value >= WCAG_AA_LARGE ? "AA large" : "fail"
  const pass = value >= min
  return (
    <span className={pass ? "rounded px-1 text-[11px] font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "rounded px-1 text-[11px] font-medium bg-destructive/15 text-destructive"}>
      {pass ? grade : \`\${grade} · needs \${min}\`}
    </span>
  )
}

export function ColorThemeEditor() {
  const [theme, setTheme] = useState<Theme>(DAYLIGHT)
  const set = (token: Token) => (value: string) => setTheme((t) => ({ ...t, [token]: value }))
  return (
    <div className="grid gap-4 text-[13px] md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Presets">
          {Object.entries(PRESETS).map(([name, preset]) => (
            <Button key={name} size="xs" variant="outline" onClick={() => setTheme(preset)}>
              {name}
            </Button>
          ))}
        </div>
        <ul className="flex flex-col divide-y divide-border rounded-md border border-border">
          {TOKENS.map((token) => (
            <li key={token} className="flex items-center justify-between gap-2 px-2 py-1">
              <span className="text-muted-foreground">{LABELS[token]}</span>
              <ColorPickerPopover label={LABELS[token]} value={theme[token]} onChange={set(token)} swatches={BRAND_SWATCHES} swatchColumns={6} align="end" triggerClassName="w-28" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <div className="rounded-lg p-4" style={{ backgroundColor: theme.background }}>
          <div className="flex flex-col gap-2 rounded-md border p-3" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
            <div className="text-[15px] font-semibold" style={{ color: theme.text }}>
              Quarterly report is ready
            </div>
            <p style={{ color: theme.muted }}>Revenue grew 14% on last quarter. Three regions beat their targets; one needs a review before Friday.</p>
            <div className="flex items-center gap-3 border-t pt-2" style={{ borderColor: theme.border }}>
              <span className="inline-flex h-7 items-center rounded-md px-3 font-medium" style={{ backgroundColor: theme.primary, color: theme.onPrimary }}>
                Open report
              </span>
              <span className="underline underline-offset-2" style={{ color: theme.primary }}>
                Share link
              </span>
            </div>
          </div>
        </div>

        <table className="w-full text-[12px] tabular-nums">
          <caption className="pb-1 text-start font-medium">Contrast</caption>
          <thead className="text-muted-foreground">
            <tr className="text-start">
              <th className="py-1 text-start font-normal">Pair</th>
              <th className="py-1 text-end font-normal">Ratio</th>
              <th className="py-1 text-end font-normal">WCAG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PAIRS.map((pair) => {
              const r = ratio(theme, pair)
              return (
                <tr key={\`\${pair.fg}-\${pair.bg}\`}>
                  <td className="py-1">
                    {LABELS[pair.fg]} on {LABELS[pair.bg].toLowerCase()} <span className="text-muted-foreground">· {pair.note}</span>
                  </td>
                  <td className="py-1 text-end font-mono">{r.toFixed(2)}:1</td>
                  <td className="py-1 text-end">
                    <Grade value={r} min={pair.min} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>p(()=>import(`./color-theme-editor-BlSr-xHv.js`),[]));var j=[{value:`#b91c1c`,label:`Bug red`},{value:`#c2410c`,label:`Burnt orange`},{value:`#a16207`,label:`Ochre`},{value:`#15803d`,label:`Green`},{value:`#0e7490`,label:`Cyan`},{value:`#1d4ed8`,label:`Blue`},{value:`#6d28d9`,label:`Purple`},{value:`#be185d`,label:`Magenta`},{value:`#fecaca`,label:`Rose tint`},{value:`#fde68a`,label:`Butter`},{value:`#bbf7d0`,label:`Mint`},{value:`#bfdbfe`,label:`Sky tint`},{value:`#e9d5ff`,label:`Lilac`},{value:`#e4e4e7`,label:`Zinc`},{value:`#52525b`,label:`Slate`},{value:`#18181b`,label:`Ink`}],M=[{id:1,name:`bug`,color:`#b91c1c`},{id:2,name:`design`,color:`#e9d5ff`},{id:3,name:`needs review`,color:`#fde68a`},{id:4,name:`infra`,color:`#0e7490`}];function N({name:e,color:t}){let n=c(t);return(0,y.jsx)(`span`,{className:`inline-flex h-5 items-center rounded-full px-2 text-[11px] font-medium`,style:{backgroundColor:t,color:n?d(n):void 0},children:e})}function P(){let[e,t]=(0,v.useState)(M),[n,r]=(0,v.useState)(``),i=(e,n)=>t(t=>t.map(t=>t.id===e?{...t,...n}:t)),o=()=>{let e=n.trim();e&&(t(t=>[...t,{id:Math.max(0,...t.map(e=>e.id))+1,name:e,color:j[t.length*5%j.length]?.value??`#52525b`}]),r(``))};return(0,y.jsxs)(`div`,{className:`flex max-w-md flex-col gap-2 text-[13px]`,children:[(0,y.jsx)(`div`,{className:`flex flex-wrap gap-1`,"aria-label":`Preview`,children:e.map(e=>(0,y.jsx)(N,{name:e.name,color:e.color},e.id))}),(0,y.jsx)(`ul`,{className:`flex flex-col divide-y divide-border rounded-md border border-border`,children:e.map(e=>(0,y.jsxs)(`li`,{className:`flex items-center gap-2 px-2 py-1`,children:[(0,y.jsx)(a,{label:`Colour of ${e.name}`,value:e.color,onChange:t=>i(e.id,{color:t}),alpha:!1,formats:[`hex`],swatches:j,showValue:!1}),(0,y.jsx)(`span`,{className:`flex-1 truncate`,children:e.name}),(0,y.jsx)(`span`,{className:`font-mono text-[12px] tabular-nums text-muted-foreground`,children:e.color}),(0,y.jsx)(h,{size:`icon-xs`,variant:`ghost`,"aria-label":`Delete ${e.name}`,onClick:()=>t(t=>t.filter(t=>t.id!==e.id)),children:(0,y.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,"aria-hidden":!0,focusable:`false`,children:(0,y.jsx)(`path`,{d:`M4 4l8 8M12 4l-8 8`})})})]},e.id))}),(0,y.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),o()},children:[(0,y.jsx)(s,{className:`h-7 text-[13px] md:text-[13px]`,placeholder:`New label`,"aria-label":`New label name`,value:n,onChange:e=>r(e.currentTarget.value)}),(0,y.jsx)(h,{type:`submit`,size:`sm`,variant:`outline`,disabled:!n.trim(),children:`Add`})]})]})}var F=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { ColorPickerPopover, parseColor, readableOn } from "@kitora/pickers"

// Issue labels: each label gets an opaque colour from a curated palette (hex only, no alpha), and its chip text flips black or white for contrast.

interface Label {
  readonly id: number
  readonly name: string
  readonly color: string
}

const PALETTE = [
  { value: "#b91c1c", label: "Bug red" },
  { value: "#c2410c", label: "Burnt orange" },
  { value: "#a16207", label: "Ochre" },
  { value: "#15803d", label: "Green" },
  { value: "#0e7490", label: "Cyan" },
  { value: "#1d4ed8", label: "Blue" },
  { value: "#6d28d9", label: "Purple" },
  { value: "#be185d", label: "Magenta" },
  { value: "#fecaca", label: "Rose tint" },
  { value: "#fde68a", label: "Butter" },
  { value: "#bbf7d0", label: "Mint" },
  { value: "#bfdbfe", label: "Sky tint" },
  { value: "#e9d5ff", label: "Lilac" },
  { value: "#e4e4e7", label: "Zinc" },
  { value: "#52525b", label: "Slate" },
  { value: "#18181b", label: "Ink" },
]

const INITIAL: readonly Label[] = [
  { id: 1, name: "bug", color: "#b91c1c" },
  { id: 2, name: "design", color: "#e9d5ff" },
  { id: 3, name: "needs review", color: "#fde68a" },
  { id: 4, name: "infra", color: "#0e7490" },
]

function Chip({ name, color }: { name: string; color: string }) {
  const rgba = parseColor(color)
  return (
    <span className="inline-flex h-5 items-center rounded-full px-2 text-[11px] font-medium" style={{ backgroundColor: color, color: rgba ? readableOn(rgba) : undefined }}>
      {name}
    </span>
  )
}

export function ColorLabels() {
  const [labels, setLabels] = useState<readonly Label[]>(INITIAL)
  const [draft, setDraft] = useState("")
  const update = (id: number, patch: Partial<Label>) => setLabels((all) => all.map((l) => (l.id === id ? { ...l, ...patch } : l)))
  const add = () => {
    const name = draft.trim()
    if (!name) return
    setLabels((all) => [...all, { id: Math.max(0, ...all.map((l) => l.id)) + 1, name, color: PALETTE[(all.length * 5) % PALETTE.length]?.value ?? "#52525b" }])
    setDraft("")
  }
  return (
    <div className="flex max-w-md flex-col gap-2 text-[13px]">
      <div className="flex flex-wrap gap-1" aria-label="Preview">
        {labels.map((l) => (
          <Chip key={l.id} name={l.name} color={l.color} />
        ))}
      </div>
      <ul className="flex flex-col divide-y divide-border rounded-md border border-border">
        {labels.map((l) => (
          <li key={l.id} className="flex items-center gap-2 px-2 py-1">
            <ColorPickerPopover label={\`Colour of \${l.name}\`} value={l.color} onChange={(color) => update(l.id, { color })} alpha={false} formats={["hex"]} swatches={PALETTE} showValue={false} />
            <span className="flex-1 truncate">{l.name}</span>
            <span className="font-mono text-[12px] tabular-nums text-muted-foreground">{l.color}</span>
            <Button size="icon-xs" variant="ghost" aria-label={\`Delete \${l.name}\`} onClick={() => setLabels((all) => all.filter((x) => x.id !== l.id))}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden focusable="false">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </Button>
          </li>
        ))}
      </ul>
      <form
        className="flex gap-1"
        onSubmit={(e) => {
          e.preventDefault()
          add()
        }}
      >
        <Input className="h-7 text-[13px] md:text-[13px]" placeholder="New label" aria-label="New label name" value={draft} onChange={(e) => setDraft(e.currentTarget.value)} />
        <Button type="submit" size="sm" variant="outline" disabled={!draft.trim()}>
          Add
        </Button>
      </form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>p(()=>import(`./color-labels-Cf6jHYQG.js`),[]));function I(){let[e,i]=(0,v.useState)(null);return(0,y.jsxs)(`form`,{className:`flex flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),i(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,y.jsxs)(r,{name:`accent`,children:[(0,y.jsx)(n,{children:`Accent`}),(0,y.jsx)(a,{defaultValue:`#2563eb`}),(0,y.jsx)(t,{children:`Links and focus rings.`})]}),(0,y.jsxs)(r,{name:`surface`,children:[(0,y.jsx)(n,{children:`Surface`}),(0,y.jsx)(o,{defaultValue:`#f8fafc`,swatches:[]})]}),(0,y.jsx)(h,{type:`submit`,size:`sm`,className:`self-start`,children:`Save theme`}),(0,y.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,y.jsx)(`code`,{children:e??`not submitted`})]})]})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { ColorPicker, ColorPickerPopover } from "@kitora/pickers"

/** Both colour pickers post canonical hex with a plain \`<form>\`; inside a Field its label names them. */
export function ColorForm() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="accent">
        <FieldLabel>Accent</FieldLabel>
        <ColorPickerPopover defaultValue="#2563eb" />
        <FieldDescription>Links and focus rings.</FieldDescription>
      </Field>
      <Field name="surface">
        <FieldLabel>Surface</FieldLabel>
        <ColorPicker defaultValue="#f8fafc" swatches={[]} />
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Save theme
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>p(()=>import(`./color-form-DrmDRHI6.js`),[]));function R(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(i,{title:`Colour`,children:`The panel's parts (area, hue, alpha, inputs, swatches) are exported one by one, so a host can lay out its own picker.`}),(0,y.jsx)(g,{n:1,title:`A brand theme editor`,blurb:`Seven colour tokens, a live preview card and a WCAG contrast grade for every text-on-surface pair.`,code:A,children:(0,y.jsx)(_,{testId:`color-theme`,children:(0,y.jsx)(k,{})})}),(0,y.jsx)(g,{n:2,title:`Issue label colours`,blurb:`Opaque colours from a curated palette; each chip's text flips to black or white for contrast.`,code:F,children:(0,y.jsx)(_,{testId:`color-labels`,children:(0,y.jsx)(P,{})})}),(0,y.jsx)(g,{n:3,title:`Submits with a form`,blurb:"`name` posts canonical hex with a plain `<form>`; inside a `Field` the label names the popover's trigger (with its hex) or the panel's group.",code:L,children:(0,y.jsx)(_,{testId:`color-form`,children:(0,y.jsx)(I,{})})})]})}export{R as component};