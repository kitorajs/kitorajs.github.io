import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./slider-Djr0oU3B.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{c as r,d as i,l as a,r as o,s,t as c,u as l}from"./progress-Bf3hL7zI.js";import{i as u,n as d,r as f}from"./stepper-3GMmtV7n.js";import{t as p}from"./stepper-BTo6qhhl.js";import{Ec as m,Uc as h,ri as g,zc as _}from"./index-BZuUy872.js";import{r as v,t as y}from"./alerts-BK82ytGx.js";import{n as b}from"./meter-BbQwNtF4.js";import{t as x}from"./loading-overlay-BloOvGYk.js";import"./kit-gallery-BBavj2rC.js";import{t as S}from"./example-B67lLz1F.js";import{t as C}from"./-kits.feedback.shared-BPeKgepB.js";var w=e(h(),1),T=_();function E(){let[e,t]=(0,w.useState)(!0);return(0,T.jsxs)(`div`,{className:`flex h-full flex-col`,children:[e?(0,T.jsxs)(y,{tone:`warning`,onDismiss:()=>t(!1),actions:(0,T.jsx)(g,{size:`xs`,variant:`outline`,children:`Upgrade`}),children:[`Your trial ends in `,(0,T.jsx)(`b`,{children:`3 days`}),`. Upgrade to keep your projects.`]}):(0,T.jsxs)(`div`,{className:`flex h-9 items-center border-b px-3 text-[12px] text-muted-foreground`,children:[`Banner dismissed. `,(0,T.jsx)(g,{size:`xs`,variant:`link`,className:`ml-1 h-auto px-0`,onClick:()=>t(!0),children:`Show again`})]}),(0,T.jsxs)(`div`,{className:`grid items-start gap-2 p-4 sm:grid-cols-2`,children:[(0,T.jsx)(v,{tone:`info`,title:`Scheduled maintenance`,children:`The API is read-only on Sunday from 02:00 to 03:00 UTC.`}),(0,T.jsx)(v,{tone:`success`,title:`Domain verified`,children:`acme.dev is ready to send email.`}),(0,T.jsx)(v,{tone:`error`,title:`2 fields need attention`,actions:(0,T.jsx)(g,{size:`xs`,variant:`outline`,children:`Review`}),children:`Fix the highlighted fields before you publish.`}),(0,T.jsx)(v,{tone:`warning`,compact:!0,children:`This API key expires in 7 days.`})]})]})}var D=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Banner, InlineAlert } from "@kitora/feedback"

/** A dismissible banner above the page, and inline alerts inside it. */
export function BasicBanners() {
  const [banner, setBanner] = useState(true)
  return (
    <div className="flex h-full flex-col">
      {banner ? (
        <Banner tone="warning" onDismiss={() => setBanner(false)} actions={<Button size="xs" variant="outline">Upgrade</Button>}>
          Your trial ends in <b>3 days</b>. Upgrade to keep your projects.
        </Banner>
      ) : (
        <div className="flex h-9 items-center border-b px-3 text-[12px] text-muted-foreground">
          Banner dismissed. <Button size="xs" variant="link" className="ml-1 h-auto px-0" onClick={() => setBanner(true)}>Show again</Button>
        </div>
      )}
      <div className="grid items-start gap-2 p-4 sm:grid-cols-2">
        <InlineAlert tone="info" title="Scheduled maintenance">The API is read-only on Sunday from 02:00 to 03:00 UTC.</InlineAlert>
        <InlineAlert tone="success" title="Domain verified">acme.dev is ready to send email.</InlineAlert>
        <InlineAlert tone="error" title="2 fields need attention" actions={<Button size="xs" variant="outline">Review</Button>}>Fix the highlighted fields before you publish.</InlineAlert>
        <InlineAlert tone="warning" compact>This API key expires in 7 days.</InlineAlert>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>m(()=>import(`./banners-CyIk9fip.js`),[]));function O(){return(0,T.jsxs)(`div`,{className:`grid gap-5 p-4 sm:grid-cols-2`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-4 text-muted-foreground`,children:[(0,T.jsx)(i,{size:`xs`}),(0,T.jsx)(i,{size:`sm`}),(0,T.jsx)(i,{size:`md`}),(0,T.jsx)(i,{size:`lg`,className:`text-primary`}),(0,T.jsx)(i,{variant:`dots`,label:`Typing`}),(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-[13px]`,children:[(0,T.jsx)(i,{size:`xs`}),` Saving…`]})]}),(0,T.jsxs)(a,{label:`Loading members`,className:`space-y-3`,children:[[0,1].map(e=>(0,T.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,T.jsx)(r,{rounded:`full`,className:`size-8`}),(0,T.jsxs)(`div`,{className:`flex-1 space-y-1.5`,children:[(0,T.jsx)(r,{className:`h-3 w-1/3`,rounded:`sm`}),(0,T.jsx)(r,{className:`h-2.5 w-2/3`,rounded:`sm`})]})]},e)),(0,T.jsx)(l,{lines:3})]})]})}var k=`import { Skeleton, SkeletonGroup, SkeletonText, Spinner } from "@kitora/feedback"

/** Spinners in four sizes and the dots variant, and a skeleton for a list row and a card. */
export function BasicLoading() {
  return (
    <div className="grid gap-5 p-4 sm:grid-cols-2">
      <div className="flex items-center gap-4 text-muted-foreground">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" className="text-primary" />
        <Spinner variant="dots" label="Typing" />
        <span className="inline-flex items-center gap-1.5 text-[13px]"><Spinner size="xs" /> Saving…</span>
      </div>
      <SkeletonGroup label="Loading members" className="space-y-3">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Skeleton rounded="full" className="size-8" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-3 w-1/3" rounded="sm" />
              <Skeleton className="h-2.5 w-2/3" rounded="sm" />
            </div>
          </div>
        ))}
        <SkeletonText lines={3} />
      </SkeletonGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>m(()=>import(`./loading-C2RQpcjG.js`),[]));var A=e=>`${e.value.toFixed(1)} GB of ${e.max} GB`;function j(){let[e,n]=(0,w.useState)(42);return(0,T.jsxs)(`div`,{className:`grid gap-4 p-4`,children:[(0,T.jsx)(t,{value:[e],onValueChange:e=>n(typeof e==`number`?e:e[0]??0),"aria-label":`Reading`,className:`max-w-xs`}),(0,T.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:[(0,T.jsx)(b,{label:`Disk used`,value:e/10,max:10,low:6,high:8.5,optimum:0,format:A}),(0,T.jsx)(b,{label:`Battery`,value:e,low:20,high:60,optimum:100}),(0,T.jsx)(b,{label:`Focus`,value:e,low:30,high:70})]})]})}var M=`import { useState } from "react"
import { Slider } from "@kitora/ui/slider"
import { Meter, type MeterFormatter } from "@kitora/feedback"

/** "7.2 GB of 10 GB": the formatter is both the visible value and the aria-valuetext. */
const gigabytes: MeterFormatter = (s) => \`\${s.value.toFixed(1)} GB of \${s.max} GB\`

/**
 * Three meters, three optimum placements. Disk: less is better (optimum 0), so
 * past \`high\` it turns critical. Battery: more is better (optimum at max), so
 * below \`low\` it turns critical. Focus: the middle band is best, either side
 * is only suboptimal. Drag the slider (or focus it and press End / Home).
 */
export function BasicMeter() {
  const [value, setValue] = useState(42)
  return (
    <div className="grid gap-4 p-4">
      <Slider value={[value]} onValueChange={(v) => setValue(typeof v === "number" ? v : (v[0] ?? 0))} aria-label="Reading" className="max-w-xs" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Meter label="Disk used" value={value / 10} max={10} low={6} high={8.5} optimum={0} format={gigabytes} />
        <Meter label="Battery" value={value} low={20} high={60} optimum={100} />
        <Meter label="Focus" value={value} low={30} high={70} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>m(()=>import(`./meter-Dapq-95b.js`),[]));var N=e=>`${e.value} of ${e.max} seats`,P=50,F=80;function I(){let[e,t]=(0,w.useState)(4);return(0,T.jsxs)(`div`,{className:`grid gap-3 p-4`,children:[(0,T.jsxs)(b.Root,{value:e,max:10,low:P/10,high:F/10,optimum:0,format:N,tones:{critical:`default`},size:`lg`,className:`max-w-sm grid-cols-1`,children:[(0,T.jsx)(b.Label,{className:`font-medium`,children:`Team seats`}),(0,T.jsxs)(b.Track,{className:`rounded-sm`,children:[(0,T.jsx)(b.Indicator,{className:`rounded-sm`}),[P,F].map(e=>(0,T.jsx)(`span`,{"aria-hidden":!0,className:`absolute inset-y-0 w-px bg-background`,style:{left:`${e}%`}},e))]}),(0,T.jsx)(b.Value,{className:`justify-self-start`,children:(e,t)=>e.zone===`optimum`?t:`${t} · ${e.zone===`critical`?`upgrade to add more`:`getting full`}`})]}),(0,T.jsxs)(`div`,{className:`flex gap-2`,children:[(0,T.jsx)(g,{size:`sm`,variant:`outline`,onClick:()=>t(e=>Math.max(0,e-1)),children:`Remove seat`}),(0,T.jsx)(g,{size:`sm`,variant:`outline`,onClick:()=>t(e=>Math.min(10,e+1)),children:`Add seat`})]})]})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Meter, type MeterFormatter } from "@kitora/feedback"

/** Seats in use on a plan: "8 of 10 seats". */
const seats: MeterFormatter = (s) => \`\${s.value} of \${s.max} seats\`

/** Where the thresholds sit on the track, as percents. */
const LOW = 50
const HIGH = 80

/**
 * \`<Meter>\` rebuilt from its parts: the value moves under the label, the track
 * gets tick marks at \`low\` and \`high\`, the critical zone uses the brand tone
 * instead of red, and the Value part takes a render function to add a hint.
 */
export function BasicMeterCompose() {
  const [used, setUsed] = useState(4)
  return (
    <div className="grid gap-3 p-4">
      <Meter.Root value={used} max={10} low={LOW / 10} high={HIGH / 10} optimum={0} format={seats} tones={{ critical: "default" }} size="lg" className="max-w-sm grid-cols-1">
        <Meter.Label className="font-medium">Team seats</Meter.Label>
        <Meter.Track className="rounded-sm">
          <Meter.Indicator className="rounded-sm" />
          {[LOW, HIGH].map((at) => (
            <span key={at} aria-hidden className="absolute inset-y-0 w-px bg-background" style={{ left: \`\${at}%\` }} />
          ))}
        </Meter.Track>
        <Meter.Value className="justify-self-start">{(state, text) => (state.zone === "optimum" ? text : \`\${text} · \${state.zone === "critical" ? "upgrade to add more" : "getting full"}\`)}</Meter.Value>
      </Meter.Root>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setUsed((n) => Math.max(0, n - 1))}>
          Remove seat
        </Button>
        <Button size="sm" variant="outline" onClick={() => setUsed((n) => Math.min(10, n + 1))}>
          Add seat
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>m(()=>import(`./meter-compose-B8v0_848.js`),[]));var R=[{label:`Account`},{label:`Workspace`},{label:`Invite`},{label:`Done`}];function z(){let[e,t]=(0,w.useState)(20);return(0,w.useEffect)(()=>{let e=setInterval(()=>t(e=>e>=100?0:e+5),400);return()=>clearInterval(e)},[]),(0,T.jsxs)(`div`,{className:`grid gap-5 p-4`,children:[(0,T.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-3`,children:[(0,T.jsx)(o,{value:e,label:`Uploading`,showValue:!0}),(0,T.jsx)(o,{value:e,buffer:Math.min(100,e+25),label:`Streaming`,showValue:!0,tone:`info`}),(0,T.jsx)(o,{label:`Indexing`,showValue:!0})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,T.jsx)(c,{value:e,showValue:!0,label:`Uploading`}),(0,T.jsx)(c,{value:e,size:28,thickness:3,tone:`success`,label:`Sync`}),(0,T.jsx)(c,{size:28,thickness:3,label:`Working`})]}),(0,T.jsx)(d,{steps:R,current:Math.floor(e/34)})]})}var B=`import { useEffect, useState } from "react"
import { CircularProgress, LinearProgress, StepProgress } from "@kitora/feedback"

const STEPS = [{ label: "Account" }, { label: "Workspace" }, { label: "Invite" }, { label: "Done" }]

/** Linear (determinate, buffered, indeterminate), circular, and steps. */
export function BasicProgress() {
  const [value, setValue] = useState(20)
  useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 5)), 400)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="grid gap-5 p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <LinearProgress value={value} label="Uploading" showValue />
        <LinearProgress value={value} buffer={Math.min(100, value + 25)} label="Streaming" showValue tone="info" />
        <LinearProgress label="Indexing" showValue />
      </div>
      <div className="flex items-center gap-4">
        <CircularProgress value={value} showValue label="Uploading" />
        <CircularProgress value={value} size={28} thickness={3} tone="success" label="Sync" />
        <CircularProgress size={28} thickness={3} label="Working" />
      </div>
      <StepProgress steps={STEPS} current={Math.floor(value / 34)} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>m(()=>import(`./progress-CGTYF3Hn.js`),[]));var V=[{title:`Account`,description:`Email and password`},{title:`Workspace`,description:`Name and URL`},{title:`Invite`},{title:`Done`}];function H(){let e=p({count:V.length});return(0,T.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,T.jsx)(u,{stepper:e,steps:V}),(0,T.jsx)(f.Root,{stepper:e,"aria-label":`Setup, compact`,className:`w-auto gap-1.5`,children:V.map((e,t)=>(0,T.jsx)(f.Item,{index:t,className:`flex-none`,children:(0,T.jsx)(f.Trigger,{"aria-label":e.title,children:(0,T.jsx)(f.Indicator,{className:`size-5 text-[11px]`})})},e.title))}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(g,{size:`sm`,variant:`outline`,disabled:e.active===0,onClick:e.back,children:`Back`}),(0,T.jsx)(g,{size:`sm`,disabled:e.active===V.length-1,onClick:e.next,children:`Next`})]})]})}var U=`import { Button } from "@kitora/ui/button"
import { Stepper, Steps, useStepper } from "@kitora/feedback"

const STEPS = [{ title: "Account", description: "Email and password" }, { title: "Workspace", description: "Name and URL" }, { title: "Invite" }, { title: "Done" }]

/** The clickable stepper for a wizard: \`Steps\` with linear navigation, then the same state drawn from \`Stepper.*\` parts as a compact dot row. */
export function BasicStepper() {
  const stepper = useStepper({ count: STEPS.length })
  return (
    <div className="flex flex-col gap-4">
      <Steps stepper={stepper} steps={STEPS} />
      <Stepper.Root stepper={stepper} aria-label="Setup, compact" className="w-auto gap-1.5">
        {STEPS.map((step, i) => (
          <Stepper.Item key={step.title} index={i} className="flex-none">
            <Stepper.Trigger aria-label={step.title}>
              <Stepper.Indicator className="size-5 text-[11px]" />
            </Stepper.Trigger>
          </Stepper.Item>
        ))}
      </Stepper.Root>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" disabled={stepper.active === 0} onClick={stepper.back}>
          Back
        </Button>
        <Button size="sm" disabled={stepper.active === STEPS.length - 1} onClick={stepper.next}>
          Next
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>m(()=>import(`./stepper-Fdlb-VPz.js`),[]));function W(){let[e,t]=(0,w.useState)(!0);return(0,T.jsxs)(`div`,{className:`grid gap-4 p-4 sm:grid-cols-2`,children:[(0,T.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,T.jsx)(g,{size:`sm`,variant:`outline`,className:`self-start`,onClick:()=>t(e=>!e),children:e?`Finish loading`:`Reload`}),(0,T.jsx)(x,{visible:e,label:`Loading activity`,className:`rounded-lg`,children:(0,T.jsxs)(`ul`,{className:`divide-y rounded-lg border text-[13px]`,"aria-label":`Activity`,children:[(0,T.jsx)(`li`,{className:`px-3 py-2`,children:`Ada merged #1042`}),(0,T.jsx)(`li`,{className:`px-3 py-2`,children:`Alan opened #1043`}),(0,T.jsx)(`li`,{className:`px-3 py-2`,children:`Grace closed #1039`})]})})]}),(0,T.jsx)(x,{backdrop:`blur`,label:`Saving`,showLabel:!0,className:`rounded-lg`,children:(0,T.jsx)(`div`,{className:`grid h-full min-h-28 place-items-center rounded-lg border p-4 text-[13px]`,children:`Profile form`})})]})}var G=`import { useState } from "react"
import { LoadingOverlay } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

/** A region that reloads in place: dimmed, inert and aria-busy under a named spinner, its content kept mounted; a blurred variant with a printed label beside it. */
export function BasicLoadingOverlay() {
  const [loading, setLoading] = useState(true)
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Button size="sm" variant="outline" className="self-start" onClick={() => setLoading((v) => !v)}>
          {loading ? "Finish loading" : "Reload"}
        </Button>
        <LoadingOverlay visible={loading} label="Loading activity" className="rounded-lg">
          <ul className="divide-y rounded-lg border text-[13px]" aria-label="Activity">
            <li className="px-3 py-2">Ada merged #1042</li>
            <li className="px-3 py-2">Alan opened #1043</li>
            <li className="px-3 py-2">Grace closed #1039</li>
          </ul>
        </LoadingOverlay>
      </div>
      <LoadingOverlay backdrop="blur" label="Saving" showLabel className="rounded-lg">
        <div className="grid h-full min-h-28 place-items-center rounded-lg border p-4 text-[13px]">Profile form</div>
      </LoadingOverlay>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>m(()=>import(`./loading-overlay-4vVDCO6_.js`),[]));function K(){return(0,T.jsxs)(`div`,{className:`grid w-full max-w-sm gap-6`,children:[(0,T.jsxs)(s.Root,{label:`Sprint`,max:40,showValue:!0,showLegend:!0,children:[(0,T.jsx)(s.Section,{value:18,tone:`success`,label:`Done`}),(0,T.jsx)(s.Section,{value:6,tone:`warning`,label:`In review`}),(0,T.jsx)(s.Section,{value:3,tone:`error`,label:`Blocked`})]}),(0,T.jsxs)(s.Root,{label:`Storage`,size:`lg`,valueText:`61 of 100 GB`,showValue:!0,showLegend:!0,children:[(0,T.jsx)(s.Section,{value:34,tone:`info`,label:`Photos`}),(0,T.jsx)(s.Section,{value:19,tone:`default`,label:`Documents`}),(0,T.jsx)(s.Section,{value:8,tone:`success`,label:`Other`})]})]})}var q=`import { SectionedProgress } from "@kitora/feedback"

export function BasicSectionedProgress() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <SectionedProgress.Root label="Sprint" max={40} showValue showLegend>
        <SectionedProgress.Section value={18} tone="success" label="Done" />
        <SectionedProgress.Section value={6} tone="warning" label="In review" />
        <SectionedProgress.Section value={3} tone="error" label="Blocked" />
      </SectionedProgress.Root>
      <SectionedProgress.Root label="Storage" size="lg" valueText="61 of 100 GB" showValue showLegend>
        <SectionedProgress.Section value={34} tone="info" label="Photos" />
        <SectionedProgress.Section value={19} tone="default" label="Documents" />
        <SectionedProgress.Section value={8} tone="success" label="Other" />
      </SectionedProgress.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>m(()=>import(`./sectioned-progress-D7QPK30z.js`),[]));function J(){return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(n,{title:`Basics: inline status`,children:`Messages that live in the page rather than float over it: banners, inline alerts, progress, meters and loading placeholders.`}),(0,T.jsx)(S,{n:1,title:`Banners and inline alerts`,blurb:"Four tones. Warnings and errors are `role=alert`, the rest `role=status`.",code:D,children:(0,T.jsx)(C,{testId:`basic-banners`,children:(0,T.jsx)(E,{})})}),(0,T.jsx)(S,{n:2,title:`Progress`,blurb:`Linear with a value, a buffer or none (indeterminate), a circular ring, and numbered steps.`,code:B,children:(0,T.jsx)(C,{testId:`basic-progress`,children:(0,T.jsx)(z,{})})}),(0,T.jsx)(S,{n:3,title:`Meter`,blurb:"A value inside a known range, `role=meter`. `low`, `high` and `optimum` split the range into zones by the HTML `<meter>` rules; the zone sets `data-zone` and the tone, and `format` writes the value text and aria-valuetext.",code:M,children:(0,T.jsx)(C,{testId:`basic-meter`,children:(0,T.jsx)(j,{})})}),(0,T.jsx)(S,{n:4,title:`Meter: compose your own`,blurb:`The preset rebuilt from Meter.Root, Label, Track, Indicator and Value, with threshold ticks, a tone override and a render function for the value.`,code:L,children:(0,T.jsx)(C,{testId:`basic-meter-compose`,children:(0,T.jsx)(I,{})})}),(0,T.jsx)(S,{n:5,title:`Spinners and skeletons`,blurb:`A spinner for a short wait in place; skeletons in the shape of the content that is coming.`,code:k,children:(0,T.jsx)(C,{testId:`basic-loading`,children:(0,T.jsx)(O,{})})}),(0,T.jsx)(S,{n:6,title:`A stepper`,blurb:"`Steps` over `useStepper`: linear navigation lets you click back to a done step, never ahead. Below it the same state drawn from `Stepper.Root`, `Item`, `Trigger` and `Indicator`. `StepProgress` (example 2) is the read-only preset on the same parts.",code:U,children:(0,T.jsx)(C,{testId:`basic-stepper`,children:(0,T.jsx)(H,{})})}),(0,T.jsx)(S,{n:7,title:`Loading overlay`,blurb:"`LoadingOverlay` covers a region while it reloads: the content stays mounted but inert and `aria-busy`, under a dim or blurred cover with a named spinner that fades in and out (no fade under reduced motion).",code:G,children:(0,T.jsx)(C,{testId:`basic-loading-overlay`,children:(0,T.jsx)(W,{})})}),(0,T.jsx)(S,{n:8,title:`Sectioned progress`,blurb:"`SectionedProgress.Root` with `SectionedProgress.Section` parts: one progressbar whose value is the sum of its toned, labelled sections, each listed in the `aria-valuetext`.",code:q,children:(0,T.jsx)(C,{testId:`basic-sectioned-progress`,children:(0,T.jsx)(K,{})})})]})}export{J as component};