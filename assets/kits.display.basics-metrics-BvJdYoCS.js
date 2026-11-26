import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./stats-V6U4lkOu.js";import{t as s}from"./dollar-sign-C3DYrUPZ.js";import{s as c}from"./kit-docs-CvNs0WqT.js";import{t as l}from"./timer-Cp2lT3Tz.js";import{t as u}from"./users-DvvoKKua.js";import{Bc as d,Cc as f,Ic as p,ti as m}from"./index-9y5uwRd3.js";import{d as h,o as g,t as _}from"./adapters-DpH8EXtx.js";import{i as v,n as y,r as b,t as x}from"./format-mUf6Fbyb.js";import{n as S,t as C}from"./toggle-group-DGN5AhCC.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";var T=e(d(),1),E=p(),D=[`en-US`,`de-DE`,`fr-FR`,`ja-JP`,`en-IN`],O=new Date(`2026-10-15T14:30:00Z`),k=new Date(`2026-10-15T17:05:00Z`),A=36e5,j={dateStyle:`medium`,timeStyle:`short`,timeZone:`UTC`},M=4e4;function N({label:e,children:t}){return(0,E.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3 border-b py-1 last:border-b-0`,children:[(0,E.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:e}),(0,E.jsx)(`span`,{className:`text-right`,children:t})]})}function P(){let[e,t]=(0,T.useState)(`en-US`),[n,r]=(0,T.useState)(null);return(0,E.jsxs)(_,{locale:e,children:[(0,E.jsx)(C,{value:[e],onValueChange:e=>{let n=D.find(t=>t===e[0]);n&&t(n)},variant:`outline`,size:`sm`,"aria-label":`Locale`,children:D.map(e=>(0,E.jsx)(S,{value:e,children:e},e))}),(0,E.jsxs)(`div`,{className:`mt-2 grid gap-x-6 text-[13px] md:grid-cols-2`,"data-testid":`formatters`,"data-locale":e,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(N,{label:`number`,children:(0,E.jsx)(b,{value:1234567.891})}),(0,E.jsx)(N,{label:`currency`,children:(0,E.jsx)(b,{value:48210.5,options:{style:`currency`,currency:`EUR`}})}),(0,E.jsx)(N,{label:`percent`,children:(0,E.jsx)(b,{value:.1275,options:{style:`percent`,maximumFractionDigits:1}})}),(0,E.jsx)(N,{label:`unit`,children:(0,E.jsx)(b,{value:88,options:{style:`unit`,unit:`kilometer-per-hour`}})}),(0,E.jsx)(N,{label:`compact`,children:(0,E.jsx)(b,{value:3982e3,options:{notation:`compact`}})})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(N,{label:`bytes (binary)`,children:(0,E.jsx)(x,{value:1572864})}),(0,E.jsx)(N,{label:`bytes (decimal)`,children:(0,E.jsx)(x,{value:1572864,units:`decimal`})}),(0,E.jsx)(N,{label:`date`,children:(0,E.jsx)(y,{value:O,dateStyle:`long`,timeStyle:`short`,timeZone:`UTC`})}),(0,E.jsxs)(N,{label:`relative (fixed now)`,children:[(0,E.jsx)(v,{value:O,now:k,absoluteOptions:j}),` · `,(0,E.jsx)(v,{value:k.getTime()+26*A,now:k,absoluteOptions:j})]}),(0,E.jsxs)(N,{label:`relative (live)`,children:[n===null?(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`not started`}):(0,E.jsx)(`span`,{"data-testid":`fmt-live`,children:(0,E.jsx)(v,{value:n})}),(0,E.jsx)(m,{size:`xs`,variant:`outline`,className:`ml-2`,onClick:()=>r(Date.now()-M),"data-testid":`fmt-stamp`,children:`Stamp 40 s ago`})]})]})]})]})}var F=`import { DisplayProvider, FormatBytes, FormatDate, FormatNumber, RelativeTime } from "@kitora/display"
import { Button } from "@kitora/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"
import { useState, type ReactNode } from "react"

const LOCALES = ["en-US", "de-DE", "fr-FR", "ja-JP", "en-IN"] as const
type Locale = (typeof LOCALES)[number]

/** A fixed instant and clock, in UTC, so the server and the browser print the same text. */
const RELEASED = new Date("2026-10-15T14:30:00Z")
const NOW = new Date("2026-10-15T17:05:00Z")
const HOUR = 3_600_000
/** The tooltip's absolute form, pinned to UTC for the same reason. */
const UTC_ABSOLUTE = { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" } as const
/** How far back the live row stamps its time: under 45 s reads "now", then it counts seconds. */
const LIVE_OFFSET_MS = 40_000

function Row({ label, children }: { readonly label: string; readonly children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b py-1 last:border-b-0">
      <span className="text-[12px] text-muted-foreground">{label}</span>
      <span className="text-right">{children}</span>
    </div>
  )
}

/**
 * One \`DisplayProvider locale\` drives every formatter below it: numbers, currency, percent, units,
 * byte sizes, dates and relative times. The live row ticks every second while it is under a minute.
 */
export function BasicFormatters() {
  const [locale, setLocale] = useState<Locale>("en-US")
  const [stamp, setStamp] = useState<number | null>(null)
  return (
    <DisplayProvider locale={locale}>
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
      <div className="mt-2 grid gap-x-6 text-[13px] md:grid-cols-2" data-testid="formatters" data-locale={locale}>
        <div>
          <Row label="number">
            <FormatNumber value={1234567.891} />
          </Row>
          <Row label="currency">
            <FormatNumber value={48210.5} options={{ style: "currency", currency: "EUR" }} />
          </Row>
          <Row label="percent">
            <FormatNumber value={0.1275} options={{ style: "percent", maximumFractionDigits: 1 }} />
          </Row>
          <Row label="unit">
            <FormatNumber value={88} options={{ style: "unit", unit: "kilometer-per-hour" }} />
          </Row>
          <Row label="compact">
            <FormatNumber value={3_982_000} options={{ notation: "compact" }} />
          </Row>
        </div>
        <div>
          <Row label="bytes (binary)">
            <FormatBytes value={1_572_864} />
          </Row>
          <Row label="bytes (decimal)">
            <FormatBytes value={1_572_864} units="decimal" />
          </Row>
          <Row label="date">
            <FormatDate value={RELEASED} dateStyle="long" timeStyle="short" timeZone="UTC" />
          </Row>
          <Row label="relative (fixed now)">
            <RelativeTime value={RELEASED} now={NOW} absoluteOptions={UTC_ABSOLUTE} /> · <RelativeTime value={NOW.getTime() + 26 * HOUR} now={NOW} absoluteOptions={UTC_ABSOLUTE} />
          </Row>
          <Row label="relative (live)">
            {stamp === null ? (
              <span className="text-muted-foreground">not started</span>
            ) : (
              <span data-testid="fmt-live">
                <RelativeTime value={stamp} />
              </span>
            )}
            <Button size="xs" variant="outline" className="ml-2" onClick={() => setStamp(Date.now() - LIVE_OFFSET_MS)} data-testid="fmt-stamp">
              Stamp 40 s ago
            </Button>
          </Row>
        </div>
      </div>
    </DisplayProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>f(()=>import(`./formatters-vBSCOYRf.js`),[]));var I=new Date(`2026-10-15T14:30:00Z`),L=new Date(I.getTime()-95*6e4),R={dateStyle:`medium`,timeStyle:`short`,timeZone:`UTC`};function z(e,t){let n=Math.max(0,Math.round((t.getTime()-e.getTime())/6e4));return n<60?`${n}m ago`:`${Math.floor(n/60)}h ${n%60}m ago`}var B={...g(`en-IN`),bytes:(e,t,n)=>h(e,n??`en-IN`,{...t,units:`decimal`}),relativeTime:z};function V({title:e,children:t}){return(0,E.jsxs)(`div`,{className:`rounded-md border p-2.5 text-[13px]`,children:[(0,E.jsx)(`div`,{className:`mb-1 text-[12px] font-medium text-muted-foreground`,children:e}),(0,E.jsx)(`div`,{className:`flex flex-col gap-0.5`,children:t})]})}function H(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`span`,{children:[`Size: `,(0,E.jsx)(x,{value:1572864e3})]}),(0,E.jsxs)(`span`,{children:[`Objects: `,(0,E.jsx)(b,{value:1234567})]}),(0,E.jsxs)(`span`,{children:[`Uploaded `,(0,E.jsx)(v,{value:L,now:I,absoluteOptions:R})]})]})}function U(){return(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[(0,E.jsx)(_,{locale:`en-US`,children:(0,E.jsx)(V,{title:`Default (Intl, en-US)`,children:(0,E.jsx)(H,{})})}),(0,E.jsx)(_,{adapters:{formatters:B},children:(0,E.jsx)(`div`,{"data-testid":`custom-formatters`,children:(0,E.jsx)(V,{title:`Custom adapter (decimal sizes, en-IN, terse)`,children:(0,E.jsx)(H,{})})})})]})}var W=`import { DisplayProvider, FormatBytes, FormatNumber, RelativeTime, formatBytes, intlFormatters, type DisplayFormatters } from "@kitora/display"
import type { ReactNode } from "react"

/** A fixed clock so the relative text reads the same on the server and in the browser. */
const NOW = new Date("2026-10-15T14:30:00Z")
const UPLOADED = new Date(NOW.getTime() - 95 * 60_000)
const UTC_ABSOLUTE = { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" } as const

/** "1h 35m ago": a terse relative time instead of \`Intl\`'s. */
function terseRelative(date: Date, now: Date): string {
  const minutes = Math.max(0, Math.round((now.getTime() - date.getTime()) / 60_000))
  return minutes < 60 ? \`\${minutes}m ago\` : \`\${Math.floor(minutes / 60)}h \${minutes % 60}m ago\`
}

/**
 * A storage dashboard's house style as one adapter: sizes in decimal units (what disks are sold
 * in), numbers in Indian grouping (12,34,567), terse relative times. Every other formatter keeps
 * the \`Intl\` default, spread in from \`intlFormatters\`.
 */
const storageFormatters: DisplayFormatters = {
  ...intlFormatters("en-IN"),
  bytes: (bytes, options, locale) => formatBytes(bytes, locale ?? "en-IN", { ...options, units: "decimal" }),
  relativeTime: terseRelative,
}

function Panel({ title, children }: { readonly title: string; readonly children: ReactNode }) {
  return (
    <div className="rounded-md border p-2.5 text-[13px]">
      <div className="mb-1 text-[12px] font-medium text-muted-foreground">{title}</div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  )
}

/** The same three components, left on the default adapter and right under a custom one. */
function Values() {
  return (
    <>
      <span>
        Size: <FormatBytes value={1_572_864_000} />
      </span>
      <span>
        Objects: <FormatNumber value={1234567} />
      </span>
      <span>
        Uploaded <RelativeTime value={UPLOADED} now={NOW} absoluteOptions={UTC_ABSOLUTE} />
      </span>
    </>
  )
}

/** Swap the formatting for a whole subtree through \`DisplayProvider adapters={{ formatters }}\`. */
export function CustomFormatterAdapter() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <DisplayProvider locale="en-US">
        <Panel title="Default (Intl, en-US)">
          <Values />
        </Panel>
      </DisplayProvider>
      <DisplayProvider adapters={{ formatters: storageFormatters }}>
        <div data-testid="custom-formatters">
          <Panel title="Custom adapter (decimal sizes, en-IN, terse)">
            <Values />
          </Panel>
        </div>
      </DisplayProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>f(()=>import(`./formatters-adapter-B5HthUk3.js`),[]));function G(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}function K(){return(0,E.jsxs)(o,{children:[(0,E.jsx)(r,{label:`MRR`,value:`$128.4K`,current:128.4,previous:119.2,progress:.82,target:`of $156K target`}),(0,E.jsx)(r,{label:`Signups`,value:`1,204`,current:1204,previous:1100,series:G(4)}),(0,E.jsx)(r,{label:`Churn`,value:`2.1%`,current:2.1,previous:2.6,invert:!0,series:G(8,24,3,-.04)}),(0,E.jsx)(r,{label:`NPS`,value:`61`,current:61,previous:61})]})}var q=`import { KpiStrip, KpiTile } from "@kitora/display"

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

/** Dense tiles in one strip: trend inline, an optional sparkline, and progress toward a target. */
export function BasicKpiStrip() {
  return (
    <KpiStrip>
      <KpiTile label="MRR" value="$128.4K" current={128.4} previous={119.2} progress={0.82} target="of $156K target" />
      <KpiTile label="Signups" value="1,204" current={1204} previous={1100} series={series(4)} />
      <KpiTile label="Churn" value="2.1%" current={2.1} previous={2.6} invert series={series(8, 24, 3, -0.04)} />
      <KpiTile label="NPS" value="61" current={61} previous={61} />
    </KpiStrip>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>f(()=>import(`./kpi-strip-BgApiGFV.js`),[]));function J(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}function Y(){return(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-6 text-[13px]`,children:[(0,E.jsx)(a,{values:J(1)}),(0,E.jsx)(a,{values:J(2,24,100,-1.2)}),(0,E.jsx)(a,{values:J(5),tone:`accent`,area:!1,width:140,height:32}),(0,E.jsx)(a,{values:J(9,40),tone:`neutral`,dot:!1,width:180,height:20}),(0,E.jsx)(i,{current:130,previous:100,suffix:`this month`}),(0,E.jsx)(i,{current:80,previous:100,invert:!0,suffix:`errors`})]})}var X=`import { Sparkline, TrendBadge } from "@kitora/display"

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

/** The pieces alone: a sparkline in each tone and size, and the trend badge. */
export function BasicSparkline() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-[13px]">
      <Sparkline values={series(1)} />
      <Sparkline values={series(2, 24, 100, -1.2)} />
      <Sparkline values={series(5)} tone="accent" area={false} width={140} height={32} />
      <Sparkline values={series(9, 40)} tone="neutral" dot={false} width={180} height={20} />
      <TrendBadge current={130} previous={100} suffix="this month" />
      <TrendBadge current={80} previous={100} invert suffix="errors" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>f(()=>import(`./sparkline-5VyMZxUP.js`),[]));function Z(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}function Q(){return(0,E.jsxs)(t,{columns:3,children:[(0,E.jsx)(n,{label:`Revenue`,icon:(0,E.jsx)(s,{}),value:`$48,210`,current:48210,previous:42100,trendSuffix:`vs last week`,series:Z(3)}),(0,E.jsx)(n,{label:`Active users`,icon:(0,E.jsx)(u,{}),value:`3,982`,current:3982,previous:4120,trendSuffix:`vs last week`,series:Z(7,24,100,-.8)}),(0,E.jsx)(n,{label:`p95 latency`,icon:(0,E.jsx)(l,{}),value:`182 ms`,current:182,previous:240,invert:!0,trendSuffix:`vs last week`,series:Z(11,24,240,-2.4)})]})}var $=`import { StatCard, StatGrid } from "@kitora/display"
import { DollarSign, Timer, Users } from "lucide-react"

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

/** Label, value, the change against the last period, and a sparkline; latency is \`invert\`ed, so down is green. */
export function BasicStatCard() {
  return (
    <StatGrid columns={3}>
      <StatCard label="Revenue" icon={<DollarSign />} value="$48,210" current={48210} previous={42100} trendSuffix="vs last week" series={series(3)} />
      <StatCard label="Active users" icon={<Users />} value="3,982" current={3982} previous={4120} trendSuffix="vs last week" series={series(7, 24, 100, -0.8)} />
      <StatCard label="p95 latency" icon={<Timer />} value="182 ms" current={182} previous={240} invert trendSuffix="vs last week" series={series(11, 24, 240, -2.4)} />
    </StatGrid>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>f(()=>import(`./stat-card-Dn7ACQnY.js`),[]));function ee(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(c,{title:`Basics: metrics`,children:`Numbers with context: the value, the change against the last period, and the shape of the trend.`}),(0,E.jsx)(w,{n:1,title:`Stat cards`,blurb:"A label, a value, a trend badge and a sparkline. `invert` flips which direction is good.",code:$,children:(0,E.jsx)(Q,{})}),(0,E.jsx)(w,{n:2,title:`Sparklines and trend badges`,blurb:`The pieces on their own, in each tone and size.`,code:X,children:(0,E.jsx)(Y,{})}),(0,E.jsx)(w,{n:3,title:`A KPI strip`,blurb:`Dense tiles joined in one strip, with progress toward a target.`,code:q,children:(0,E.jsx)(K,{})}),(0,E.jsx)(w,{n:4,title:`Formatters`,blurb:"FormatNumber, FormatBytes, FormatDate and RelativeTime read the formatter adapter, so one `DisplayProvider locale` switches them all. The live relative time re-renders every second under a minute, every minute under an hour, then hourly.",code:F,children:(0,E.jsx)(P,{})}),(0,E.jsx)(w,{n:5,title:`Formatters with a custom adapter`,blurb:"The same components under `DisplayProvider adapters={{ formatters }}`: decimal byte units, Indian digit grouping and terse relative times, with every other formatter left on Intl.",code:W,children:(0,E.jsx)(U,{})})]})}export{ee as component};