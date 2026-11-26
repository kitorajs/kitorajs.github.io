import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{t as r}from"./adapters-DpH8EXtx.js";import{i,n as a,r as o,t as s}from"./format-mUf6Fbyb.js";var c=e({FormatBytesExample:()=>d}),l=n(),u=[512,1536,1572864,5368709120];function d(){return(0,l.jsxs)(`table`,{className:`w-full max-w-md text-sm`,children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{className:`text-xs text-muted-foreground`,children:[(0,l.jsx)(`th`,{className:`py-1 text-start font-normal`,children:`Bytes`}),(0,l.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`binary`}),(0,l.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`decimal`}),(0,l.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`long`})]})}),(0,l.jsx)(`tbody`,{children:u.map(e=>(0,l.jsxs)(`tr`,{className:`border-t border-border tabular-nums`,children:[(0,l.jsx)(`td`,{className:`py-1 text-muted-foreground`,children:e.toLocaleString(`en-US`)}),(0,l.jsx)(`td`,{className:`py-1 text-end`,children:(0,l.jsx)(s,{value:e,locale:`en-US`})}),(0,l.jsx)(`td`,{className:`py-1 text-end`,children:(0,l.jsx)(s,{value:e,units:`decimal`,locale:`en-US`})}),(0,l.jsx)(`td`,{className:`py-1 text-end`,children:(0,l.jsx)(s,{value:e,unitDisplay:`long`,locale:`en-US`})})]},e))})]})}var f=e({FormatDatesAndRelativeTime:()=>_}),p=new Date(`2026-10-15T14:30:00Z`),m=new Date(`2026-10-15T17:05:00Z`),h=36e5,g={dateStyle:`medium`,timeStyle:`short`,timeZone:`UTC`};function _(){return(0,l.jsx)(`div`,{className:`grid w-full max-w-md gap-4 text-sm sm:grid-cols-2`,children:[`en-US`,`fr-FR`].map(e=>(0,l.jsx)(r,{locale:e,children:(0,l.jsxs)(`dl`,{className:`grid gap-1`,children:[(0,l.jsx)(`dt`,{className:`text-xs text-muted-foreground`,children:e}),(0,l.jsx)(`dd`,{children:(0,l.jsx)(a,{value:p,dateStyle:`long`,timeStyle:`short`,timeZone:`UTC`})}),(0,l.jsx)(`dd`,{children:(0,l.jsx)(i,{value:p,now:m,absoluteOptions:g})}),(0,l.jsx)(`dd`,{children:(0,l.jsx)(i,{value:m.getTime()+26*h,now:m,absoluteOptions:g})})]})},e))})}var v=e({FormatNumbers:()=>b}),y=[{label:`Number`,value:1234567.891,options:void 0},{label:`Currency`,value:48210.5,options:{style:`currency`,currency:`EUR`}},{label:`Percent`,value:.1275,options:{style:`percent`,maximumFractionDigits:1}},{label:`Unit`,value:88,options:{style:`unit`,unit:`kilometer-per-hour`}},{label:`Compact`,value:3982e3,options:{notation:`compact`}}];function b(){return(0,l.jsxs)(`table`,{className:`w-full max-w-md text-sm`,children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{className:`text-start text-xs text-muted-foreground`,children:[(0,l.jsx)(`th`,{className:`py-1 text-start font-normal`,children:`Style`}),(0,l.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`en-US`}),(0,l.jsx)(`th`,{className:`py-1 text-end font-normal`,children:`de-DE`})]})}),(0,l.jsx)(`tbody`,{children:y.map(e=>(0,l.jsxs)(`tr`,{className:`border-t border-border`,children:[(0,l.jsx)(`td`,{className:`py-1 text-muted-foreground`,children:e.label}),(0,l.jsx)(`td`,{className:`py-1 text-end tabular-nums`,children:(0,l.jsx)(o,{value:e.value,options:e.options,locale:`en-US`})}),(0,l.jsx)(`td`,{className:`py-1 text-end tabular-nums`,children:(0,l.jsx)(o,{value:e.value,options:e.options,locale:`de-DE`})})]},e.label))})]})}var x=`import { FormatBytes } from "@kitora/display"

const SIZES = [512, 1_536, 1_572_864, 5_368_709_120] as const

// \`FormatBytes\` picks the unit: \`units="binary"\` (the default, KiB / MiB, steps of 1024) or \`"decimal"\`
// (kB / MB, steps of 1000); \`unitDisplay="long"\` spells the unit out.
export function FormatBytesExample() {
  return (
    <table className="w-full max-w-md text-sm">
      <thead>
        <tr className="text-xs text-muted-foreground">
          <th className="py-1 text-start font-normal">Bytes</th>
          <th className="py-1 text-end font-normal">binary</th>
          <th className="py-1 text-end font-normal">decimal</th>
          <th className="py-1 text-end font-normal">long</th>
        </tr>
      </thead>
      <tbody>
        {SIZES.map((size) => (
          <tr key={size} className="border-t border-border tabular-nums">
            <td className="py-1 text-muted-foreground">{size.toLocaleString("en-US")}</td>
            <td className="py-1 text-end">
              <FormatBytes value={size} locale="en-US" />
            </td>
            <td className="py-1 text-end">
              <FormatBytes value={size} units="decimal" locale="en-US" />
            </td>
            <td className="py-1 text-end">
              <FormatBytes value={size} unitDisplay="long" locale="en-US" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./bytes-Bw05W64G.js`),[]));var S=`import { DisplayProvider, FormatDate, RelativeTime } from "@kitora/display"

/** A fixed instant and a fixed "now", in UTC, so the server and the browser print the same text. */
const RELEASED = new Date("2026-10-15T14:30:00Z")
const NOW = new Date("2026-10-15T17:05:00Z")
const HOUR = 3_600_000
const UTC_ABSOLUTE = { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" } as const

// \`FormatDate\` takes \`dateStyle\` / \`timeStyle\` and a \`timeZone\`; \`RelativeTime\` writes "3 hours ago" in a
// \`<time>\` whose tooltip is the absolute date (pass \`now\` to pin it, or \`live\` to tick). A
// \`DisplayProvider\` sets the locale for everything under it.
export function FormatDatesAndRelativeTime() {
  return (
    <div className="grid w-full max-w-md gap-4 text-sm sm:grid-cols-2">
      {(["en-US", "fr-FR"] as const).map((locale) => (
        <DisplayProvider key={locale} locale={locale}>
          <dl className="grid gap-1">
            <dt className="text-xs text-muted-foreground">{locale}</dt>
            <dd>
              <FormatDate value={RELEASED} dateStyle="long" timeStyle="short" timeZone="UTC" />
            </dd>
            <dd>
              <RelativeTime value={RELEASED} now={NOW} absoluteOptions={UTC_ABSOLUTE} />
            </dd>
            <dd>
              <RelativeTime value={NOW.getTime() + 26 * HOUR} now={NOW} absoluteOptions={UTC_ABSOLUTE} />
            </dd>
          </dl>
        </DisplayProvider>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./dates-and-relative-time-CmreWCV1.js`),[]));var C=`import { FormatNumber } from "@kitora/display"

const ROWS = [
  { label: "Number", value: 1234567.891, options: undefined },
  { label: "Currency", value: 48210.5, options: { style: "currency", currency: "EUR" } },
  { label: "Percent", value: 0.1275, options: { style: "percent", maximumFractionDigits: 1 } },
  { label: "Unit", value: 88, options: { style: "unit", unit: "kilometer-per-hour" } },
  { label: "Compact", value: 3_982_000, options: { notation: "compact" } },
] as const satisfies readonly { label: string; value: number; options: Intl.NumberFormatOptions | undefined }[]

// \`FormatNumber\` is \`Intl.NumberFormat\` as a component: \`options\` takes any of its options, and \`locale\`
// (or a \`DisplayProvider\` above) picks the locale. Two locales side by side.
export function FormatNumbers() {
  return (
    <table className="w-full max-w-md text-sm">
      <thead>
        <tr className="text-start text-xs text-muted-foreground">
          <th className="py-1 text-start font-normal">Style</th>
          <th className="py-1 text-end font-normal">en-US</th>
          <th className="py-1 text-end font-normal">de-DE</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.label} className="border-t border-border">
            <td className="py-1 text-muted-foreground">{row.label}</td>
            <td className="py-1 text-end tabular-nums">
              <FormatNumber value={row.value} options={row.options} locale="en-US" />
            </td>
            <td className="py-1 text-end tabular-nums">
              <FormatNumber value={row.value} options={row.options} locale="de-DE" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>t(()=>import(`./numbers-7XvKTKJp.js`),[]));var w={"./demos/format/bytes.tsx":c,"./demos/format/dates-and-relative-time.tsx":f,"./demos/format/numbers.tsx":v},T={"./demos/format/bytes.tsx":x,"./demos/format/dates-and-relative-time.tsx":S,"./demos/format/numbers.tsx":C};export{w as modules,T as sources};