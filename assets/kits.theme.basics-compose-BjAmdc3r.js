import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,n,t as r}from"./contrast-jawUxEsg.js";import{s as i}from"./kit-docs-DpYhPoxM.js";import{Bc as a,Bt as o,Cc as s,Ic as c,J as l,an as u,at as d,ln as f,ti as p,un as m}from"./index-q72zUtm9.js";import{n as h,r as g}from"./controls-BZlD3MK_.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";var v=e(a(),1),y=c();function b(){let{score:e,use:n,algorithm:i}=t(),a=u(e,n,i);return(0,y.jsxs)(`p`,{className:`flex items-center gap-2 text-[12.5px] text-muted-foreground`,children:[`As `,n.replace(`-`,` `),`: `,(0,y.jsx)(r,{level:a})]})}var x={fg:{l:.5,c:.12,h:30},bg:{l:.99,c:0,h:0}},S={fg:{l:.7,c:.12,h:30},bg:{l:.99,c:0,h:0}};function C(){let e=(0,v.useId)(),t=(0,v.useId)(),[r,i]=(0,v.useState)({failing:!1,n:0}),a=r.failing?S:x;return(0,y.jsxs)(n.Root,{defaultForeground:a.fg,defaultBackground:a.bg,className:`grid max-w-md gap-2`,children:[(0,y.jsx)(p,{type:`button`,size:`xs`,variant:`outline`,className:`justify-self-start`,onClick:()=>i(e=>({failing:!e.failing,n:e.n+1})),children:r.failing?`Back to a passing pair`:`Try a failing pair`}),(0,y.jsxs)(`div`,{className:`flex items-end gap-1`,children:[(0,y.jsxs)(`div`,{className:`grid flex-1 gap-1 text-[12px] font-medium text-muted-foreground`,children:[(0,y.jsx)(`label`,{htmlFor:e,children:`Text`}),(0,y.jsx)(n.ForegroundField,{id:e})]}),(0,y.jsx)(n.Swap,{}),(0,y.jsxs)(`div`,{className:`grid flex-1 gap-1 text-[12px] font-medium text-muted-foreground`,children:[(0,y.jsx)(`label`,{htmlFor:t,children:`Background`}),(0,y.jsx)(n.BackgroundField,{id:t})]})]}),(0,y.jsx)(n.Sample,{children:`Composed from parts`}),(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,y.jsx)(n.Ratio,{}),(0,y.jsx)(n.UsePicker,{})]}),(0,y.jsx)(b,{}),(0,y.jsx)(n.Levels,{}),(0,y.jsx)(n.Fix,{className:`justify-self-start`})]},r.n)}var w=`import { useId, useState } from "react"
import { ContrastChecker, ContrastBadge, contrastLevel, useContrastChecker, type Oklch } from "@kitora/theme"
import { Button } from "@kitora/ui/button"

/** A part of your own: reads the same state as the built-in parts through \`useContrastChecker()\`. */
function Verdict() {
  const { score, use, algorithm } = useContrastChecker()
  const level = contrastLevel(score, use, algorithm)
  return (
    <p className="flex items-center gap-2 text-[12.5px] text-muted-foreground">
      As {use.replace("-", " ")}: <ContrastBadge level={level} />
    </p>
  )
}

/** Opens on a passing pair; the failing one is a click away, to show a Fail grade and the Fix button. */
const PASSING: { readonly fg: Oklch; readonly bg: Oklch } = { fg: { l: 0.5, c: 0.12, h: 30 }, bg: { l: 0.99, c: 0, h: 0 } }
const FAILING: { readonly fg: Oklch; readonly bg: Oklch } = { fg: { l: 0.7, c: 0.12, h: 30 }, bg: { l: 0.99, c: 0, h: 0 } }

/**
 * \`ContrastChecker.Panel\` rebuilt from the public parts, in a single column with a custom \`Verdict\`
 * part. The preset is made exactly this way; move, drop or restyle any part.
 */
export function BasicCompose() {
  // each caption names its colour field's text input by id (the field holds a <label> of its own)
  const fgId = useId()
  const bgId = useId()
  // a click on "Try a failing pair" remounts the root (key) so it restarts from that pair
  const [start, setStart] = useState({ failing: false, n: 0 })
  const pair = start.failing ? FAILING : PASSING
  return (
    <ContrastChecker.Root key={start.n} defaultForeground={pair.fg} defaultBackground={pair.bg} className="grid max-w-md gap-2">
      <Button type="button" size="xs" variant="outline" className="justify-self-start" onClick={() => setStart((s) => ({ failing: !s.failing, n: s.n + 1 }))}>
        {start.failing ? "Back to a passing pair" : "Try a failing pair"}
      </Button>
      <div className="flex items-end gap-1">
        <div className="grid flex-1 gap-1 text-[12px] font-medium text-muted-foreground">
          <label htmlFor={fgId}>Text</label>
          <ContrastChecker.ForegroundField id={fgId} />
        </div>
        <ContrastChecker.Swap />
        <div className="grid flex-1 gap-1 text-[12px] font-medium text-muted-foreground">
          <label htmlFor={bgId}>Background</label>
          <ContrastChecker.BackgroundField id={bgId} />
        </div>
      </div>
      <ContrastChecker.Sample>Composed from parts</ContrastChecker.Sample>
      <div className="flex flex-wrap items-center gap-3">
        <ContrastChecker.Ratio />
        <ContrastChecker.UsePicker />
      </div>
      <Verdict />
      <ContrastChecker.Levels />
      <ContrastChecker.Fix className="justify-self-start" />
    </ContrastChecker.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./compose-C_nMZ2Ov.js`),[]));function T(e){let t=new Map;return{get:e=>t.get(e)??null,set:(n,r)=>{t.set(n,r),e({key:n,value:r,at:new Date().toLocaleTimeString()})}}}function E(){let[e,t]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,y.jsxs)(l,{target:`scope`,storage:(0,v.useMemo)(()=>T(e=>t(t=>[e,...t].slice(0,5))),[]),storageKey:`demo`,defaultMode:`light`,className:`grid content-start gap-2 rounded-lg border p-3`,children:[(0,y.jsx)(g,{}),(0,y.jsx)(h,{})]}),(0,y.jsxs)(`div`,{className:`min-w-0`,children:[(0,y.jsx)(`p`,{className:`mb-1 text-[11.5px] font-medium text-muted-foreground`,children:`Adapter writes`}),e.length===0?(0,y.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`None yet. Pick a mode or density.`}):(0,y.jsx)(`ul`,{"aria-label":`Adapter writes`,className:`grid gap-0.5 font-mono text-[11.5px]`,children:e.map((e,t)=>(0,y.jsxs)(`li`,{children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:e.at}),` set(`,e.key,`, `,e.value,`)`]},`${e.at}-${t}`))})]})]})}var D=`import { useMemo, useState } from "react"
import { DensityToggle, ModeToggle, ThemeProvider, type ThemeStorage } from "@kitora/theme"

/** One write the adapter saw. */
interface StorageWrite {
  readonly key: string
  readonly value: string
  readonly at: string
}

/**
 * A \`ThemeStorage\` of your own. This one keeps values in memory and reports each write, standing in
 * for a cookie, a user-settings API or an Electron store. Two methods, both synchronous.
 */
function loggingStorage(onWrite: (write: StorageWrite) => void): ThemeStorage {
  const values = new Map<string, string>()
  return {
    get: (key) => values.get(key) ?? null,
    set: (key, value) => {
      values.set(key, value)
      onWrite({ key, value, at: new Date().toLocaleTimeString() })
    },
  }
}

/** The provider persists mode and density through the adapter passed as \`storage\`. */
export function BasicStorageAdapter() {
  const [writes, setWrites] = useState<readonly StorageWrite[]>([])
  // One adapter for the component's life: a new object each render would make the provider re-read it.
  const storage = useMemo(() => loggingStorage((w) => setWrites((all) => [w, ...all].slice(0, 5))), [])
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ThemeProvider target="scope" storage={storage} storageKey="demo" defaultMode="light" className="grid content-start gap-2 rounded-lg border p-3">
        <ModeToggle />
        <DensityToggle />
      </ThemeProvider>
      <div className="min-w-0">
        <p className="mb-1 text-[11.5px] font-medium text-muted-foreground">Adapter writes</p>
        {writes.length === 0 ? (
          <p className="text-[12px] text-muted-foreground">None yet. Pick a mode or density.</p>
        ) : (
          <ul aria-label="Adapter writes" className="grid gap-0.5 font-mono text-[11.5px]">
            {writes.map((w, i) => (
              <li key={\`\${w.at}-\${i}\`}>
                <span className="text-muted-foreground">{w.at}</span> set({w.key}, {w.value})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>s(()=>import(`./storage-adapter-BKWjhfuC.js`),[]));function O(){let e=d(),{theme:t,config:n}=e;return(0,y.jsxs)(`div`,{className:`grid gap-3`,children:[(0,y.jsxs)(`label`,{className:`flex items-center gap-2 text-[12.5px]`,children:[`Brand`,(0,y.jsx)(`input`,{"aria-label":`Brand hue`,type:`range`,min:0,max:360,value:Math.round(n.brand.h),onChange:t=>e.update({brand:{...n.brand,h:Number(t.target.value)}}),className:`w-48`}),(0,y.jsx)(`output`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:m(n.brand)})]}),(0,y.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:o.map(e=>(0,y.jsxs)(`div`,{"data-scheme":e,className:`rounded-md p-3`,style:{background:f(t[e].background),color:f(t[e].foreground)},children:[(0,y.jsx)(`p`,{className:`mb-2 text-[12px] font-medium capitalize`,children:e}),(0,y.jsxs)(`span`,{className:`inline-flex h-7 items-center rounded-md px-3 text-[12.5px] font-medium`,style:{background:f(t[e].primary),color:f(t[e][`primary-foreground`])},children:[`Primary `,f(t[e].primary)]})]},e))})]})}var k=`import { SCHEMES, formatHex, formatOklch } from "@kitora/theme/core"
import { useThemeDesigner } from "@kitora/theme/react"

/**
 * Only the headless entries: \`@kitora/theme/core\` for the maths and \`@kitora/theme/react\` for the
 * designer state, with plain markup of your own. No styled preset is imported.
 */
export function BasicHeadless() {
  const designer = useThemeDesigner()
  const { theme, config } = designer
  return (
    <div className="grid gap-3">
      <label className="flex items-center gap-2 text-[12.5px]">
        Brand
        <input
          aria-label="Brand hue"
          type="range"
          min={0}
          max={360}
          value={Math.round(config.brand.h)}
          onChange={(e) => designer.update({ brand: { ...config.brand, h: Number(e.target.value) } })}
          className="w-48"
        />
        <output className="font-mono text-[11.5px] text-muted-foreground">{formatOklch(config.brand)}</output>
      </label>
      <div className="grid gap-2 sm:grid-cols-2">
        {SCHEMES.map((scheme) => (
          <div key={scheme} data-scheme={scheme} className="rounded-md p-3" style={{ background: formatHex(theme[scheme].background), color: formatHex(theme[scheme].foreground) }}>
            <p className="mb-2 text-[12px] font-medium capitalize">{scheme}</p>
            <span className="inline-flex h-7 items-center rounded-md px-3 text-[12.5px] font-medium" style={{ background: formatHex(theme[scheme].primary), color: formatHex(theme[scheme]["primary-foreground"]) }}>
              Primary {formatHex(theme[scheme].primary)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>s(()=>import(`./headless-WStKoWV5.js`),[]));function A(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(i,{title:`Basics: compose and swap`,children:"Every preset is built from public parts, every seam takes an adapter, and each layer is its own entry: `@kitora/theme/core`, `/dom`, `/react` and `/ui`."}),(0,y.jsx)(_,{n:1,title:`Compose your own`,blurb:`The contrast checker preset rebuilt from its parts, plus a part of your own.`,code:w,children:(0,y.jsx)(C,{})}),(0,y.jsx)(_,{n:2,title:`A custom storage adapter`,blurb:`ThemeProvider persists through any ThemeStorage; this one logs every write.`,code:D,children:(0,y.jsx)(E,{})}),(0,y.jsx)(_,{n:3,title:`Headless entries only`,blurb:`The core and react entries with your own markup; no styled preset.`,code:k,children:(0,y.jsx)(O,{})})]})}export{A as component};