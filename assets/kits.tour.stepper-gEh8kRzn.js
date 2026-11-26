import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./input-2rqm_FXH.js";import{a as r,i,r as a,s as o}from"./stepper-lQJEWQu0.js";import{t as s}from"./stepper-DwkpSgnw.js";import{Bc as c,Cc as l,Ic as u,Ti as d,hi as f,ti as p}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as m}from"./example-CZLJLtIC.js";import{t as h}from"./-kits.tour.shared-2PN25Wpc.js";var g=e(c(),1),_=u(),v=[{title:`Clone`,detail:`acme/web@3f2a91c`},{title:`Install`,detail:`pnpm install --frozen-lockfile`},{title:`Build`,detail:`vite build`},{title:`Test`,detail:`vitest run`},{title:`Deploy`,detail:`edge · 14 regions`}],y=900;function b(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(null),[i,o]=(0,g.useState)(new Set),[c,l]=(0,g.useState)(!1),u=s({count:v.length,errors:i,navigation:`free`,finished:c}),{active:f,select:m}=u;(0,g.useEffect)(()=>{if(!e)return;let r=setTimeout(()=>{n===f?(o(new Set([f])),t(!1)):f===v.length-1?(t(!1),l(!0)):m(f+1)},y);return()=>clearTimeout(r)},[e,f,n,m]);let h=e=>{o(new Set),l(!1),r(e),m(0),t(!0)};return(0,_.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,_.jsx)(a.Root,{stepper:u,orientation:`vertical`,className:`w-72`,children:v.map((t,n)=>(0,_.jsx)(a.Item,{index:n,children:(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,_.jsx)(a.Indicator,{children:e&&n===f?(0,_.jsx)(d,{className:`size-3 animate-spin`}):void 0}),(0,_.jsx)(a.Separator,{})]}),(0,_.jsxs)(`div`,{className:`min-w-0 pb-3`,children:[(0,_.jsx)(a.Title,{children:t.title}),(0,_.jsx)(a.Description,{className:`font-mono`,children:t.detail})]})]})},t.title))}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(p,{size:`sm`,onClick:()=>h(null),disabled:e,"data-testid":`pipeline-run`,children:`Deploy`}),(0,_.jsx)(p,{size:`sm`,variant:`outline`,onClick:()=>h(3),disabled:e,children:`Deploy (tests fail)`})]})]})}var x=`import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Stepper, useStepper } from "@kitora/tour"

// A deploy pipeline drawn with the Stepper parts, vertical. The running step
// swaps its indicator for a spinner; a step can fail; the timing column is ours.
const STAGES = [
  { title: "Clone", detail: "acme/web@3f2a91c" },
  { title: "Install", detail: "pnpm install --frozen-lockfile" },
  { title: "Build", detail: "vite build" },
  { title: "Test", detail: "vitest run" },
  { title: "Deploy", detail: "edge · 14 regions" },
] as const

const STAGE_MS = 900

export function StepperPipeline() {
  const [running, setRunning] = useState(false)
  const [failAt, setFailAt] = useState<number | null>(null)
  const [errors, setErrors] = useState<ReadonlySet<number>>(new Set())
  const [shipped, setShipped] = useState(false)
  const stepper = useStepper({ count: STAGES.length, errors, navigation: "free", finished: shipped })
  const { active, select } = stepper

  useEffect(() => {
    if (!running) return undefined
    const t = setTimeout(() => {
      if (failAt === active) {
        setErrors(new Set([active]))
        setRunning(false)
      } else if (active === STAGES.length - 1) {
        setRunning(false)
        setShipped(true)
      } else {
        select(active + 1)
      }
    }, STAGE_MS)
    return () => clearTimeout(t)
  }, [running, active, failAt, select])

  const run = (fail: number | null) => {
    setErrors(new Set())
    setShipped(false)
    setFailAt(fail)
    select(0)
    setRunning(true)
  }

  return (
    <div className="flex flex-wrap items-start gap-6">
      <Stepper.Root stepper={stepper} orientation="vertical" className="w-72">
        {STAGES.map((s, i) => (
          <Stepper.Item key={s.title} index={i}>
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <Stepper.Indicator>{running && i === active ? <Loader2 className="size-3 animate-spin" /> : undefined}</Stepper.Indicator>
                <Stepper.Separator />
              </div>
              <div className="min-w-0 pb-3">
                <Stepper.Title>{s.title}</Stepper.Title>
                <Stepper.Description className="font-mono">{s.detail}</Stepper.Description>
              </div>
            </div>
          </Stepper.Item>
        ))}
      </Stepper.Root>
      <div className="flex flex-col gap-2">
        <Button size="sm" onClick={() => run(null)} disabled={running} data-testid="pipeline-run">
          Deploy
        </Button>
        <Button size="sm" variant="outline" onClick={() => run(3)} disabled={running}>
          Deploy (tests fail)
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>l(()=>import(`./stepper-pipeline-CpGqrSgS.js`),[]));var S=[`Cart`,`Shipping`,`Payment`,`Confirm`],C={complete:`bg-primary`,current:`bg-primary/50`,upcoming:`bg-muted`,error:`bg-destructive`,disabled:`bg-muted/50`};function w(){let e=s({count:S.length,defaultActive:1,navigation:`free`});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(`div`,{className:`grid grid-cols-4 gap-1.5`,role:`list`,"aria-label":`Checkout`,children:S.map((t,n)=>{let r=e.states[n]??`upcoming`;return(0,_.jsxs)(`button`,{type:`button`,role:`listitem`,"aria-current":r===`current`?`step`:void 0,onClick:()=>e.select(n),className:`flex flex-col gap-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:[(0,_.jsx)(`span`,{className:f(`h-1.5 rounded-full transition-colors`,C[r])}),(0,_.jsx)(`span`,{className:f(`text-[12px]`,r===`upcoming`?`text-muted-foreground`:`font-medium`),children:t})]},t)})}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,_.jsx)(p,{size:`xs`,variant:`outline`,onClick:e.back,children:`Back`}),(0,_.jsx)(p,{size:`xs`,onClick:e.next,children:`Next`}),(0,_.jsxs)(`span`,{children:[`states: `,r.length,` kinds · from core: `,o(4,e.active).join(`, `)]})]})]})}var T=`import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { STEP_STATES, stepStates, useStepper, type StepState } from "@kitora/tour"

// No Stepper parts at all: segmented bars with labels underneath, from
// \`useStepper\` alone. Free navigation, so any segment is a button.
const LABELS = ["Cart", "Shipping", "Payment", "Confirm"] as const

const SEGMENT: { readonly [S in StepState]: string } = {
  complete: "bg-primary",
  current: "bg-primary/50",
  upcoming: "bg-muted",
  error: "bg-destructive",
  disabled: "bg-muted/50",
}

export function StepperSegments() {
  const stepper = useStepper({ count: LABELS.length, defaultActive: 1, navigation: "free" })
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-1.5" role="list" aria-label="Checkout">
        {LABELS.map((label, i) => {
          const state = stepper.states[i] ?? "upcoming"
          return (
            <button key={label} type="button" role="listitem" aria-current={state === "current" ? "step" : undefined} onClick={() => stepper.select(i)} className="flex flex-col gap-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className={cn("h-1.5 rounded-full transition-colors", SEGMENT[state])} />
              <span className={cn("text-[12px]", state === "upcoming" ? "text-muted-foreground" : "font-medium")}>{label}</span>
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
        <Button size="xs" variant="outline" onClick={stepper.back}>
          Back
        </Button>
        <Button size="xs" onClick={stepper.next}>
          Next
        </Button>
        <span>
          states: {STEP_STATES.length} kinds · from core: {stepStates(4, stepper.active).join(", ")}
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>l(()=>import(`./stepper-segments-Do-nft0X.js`),[]));var E=[{title:`Account`,description:`Your email`},{title:`Workspace`,description:`Name and URL`},{title:`Plan`,description:`Free or Pro`},{title:`Review`}];function D(){let[e,t]=(0,g.useState)(``),[r,a]=(0,g.useState)(``),[o,c]=(0,g.useState)(`free`),[l,u]=(0,g.useState)(new Set),[d,f]=(0,g.useState)(new Set),m=s({count:E.length,completed:l,errors:d}),h=[e.includes(`@`),r.trim().length>=2,!0,!0];return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,_.jsx)(i,{stepper:m,steps:E}),(0,_.jsxs)(`div`,{className:`flex h-16 items-center gap-2 text-[13px]`,children:[m.active===0?(0,_.jsx)(n,{className:`h-7 w-64`,placeholder:`you@company.com`,"aria-label":`Email`,value:e,onChange:e=>t(e.target.value)}):null,m.active===1?(0,_.jsx)(n,{className:`h-7 w-64`,placeholder:`acme`,"aria-label":`Workspace`,value:r,onChange:e=>a(e.target.value)}):null,m.active===2?[`free`,`pro`].map(e=>(0,_.jsx)(p,{size:`sm`,variant:o===e?`default`:`outline`,onClick:()=>c(e),className:`capitalize`,children:e},e)):null,m.active===3?(0,_.jsxs)(`span`,{className:`text-muted-foreground`,children:[e,` · `,r,`.acme.app · `,(0,_.jsx)(`span`,{className:`capitalize`,children:o})]}):null,d.has(m.active)?(0,_.jsx)(`span`,{className:`text-destructive`,children:m.active===0?`Enter a valid email.`:`At least two characters.`}):null]}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(p,{size:`sm`,variant:`outline`,disabled:m.active===0,onClick:m.back,children:`Back`}),(0,_.jsx)(p,{size:`sm`,onClick:()=>{let e=m.active;if(!h[e]){f(new Set([...d,e]));return}f(new Set([...d].filter(t=>t!==e))),u(new Set([...l,e])),m.next()},disabled:m.active===E.length-1,"data-testid":`wizard-next`,children:`Continue`})]})]})}var O=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Steps, useStepper } from "@kitora/tour"

// A sign-up wizard. Continue validates the current step: a failure marks it
// as an error instead of moving on. Completed steps are tracked by the app, so
// going back to step 1 keeps step 2 complete and you can jump straight back.
const STEPS = [
  { title: "Account", description: "Your email" },
  { title: "Workspace", description: "Name and URL" },
  { title: "Plan", description: "Free or Pro" },
  { title: "Review" },
] as const

export function StepperWizard() {
  const [email, setEmail] = useState("")
  const [workspace, setWorkspace] = useState("")
  const [plan, setPlan] = useState<"free" | "pro">("free")
  const [completed, setCompleted] = useState<ReadonlySet<number>>(new Set())
  const [errors, setErrors] = useState<ReadonlySet<number>>(new Set())
  const stepper = useStepper({ count: STEPS.length, completed, errors })
  const valid = [email.includes("@"), workspace.trim().length >= 2, true, true]

  const next = () => {
    const i = stepper.active
    if (!valid[i]) {
      setErrors(new Set([...errors, i]))
      return
    }
    setErrors(new Set([...errors].filter((e) => e !== i)))
    setCompleted(new Set([...completed, i]))
    stepper.next()
  }

  return (
    <div className="flex flex-col gap-4">
      <Steps stepper={stepper} steps={STEPS} />
      <div className="flex h-16 items-center gap-2 text-[13px]">
        {stepper.active === 0 ? <Input className="h-7 w-64" placeholder="you@company.com" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> : null}
        {stepper.active === 1 ? <Input className="h-7 w-64" placeholder="acme" aria-label="Workspace" value={workspace} onChange={(e) => setWorkspace(e.target.value)} /> : null}
        {stepper.active === 2
          ? (["free", "pro"] as const).map((p) => (
              <Button key={p} size="sm" variant={plan === p ? "default" : "outline"} onClick={() => setPlan(p)} className="capitalize">
                {p}
              </Button>
            ))
          : null}
        {stepper.active === 3 ? (
          <span className="text-muted-foreground">
            {email} · {workspace}.acme.app · <span className="capitalize">{plan}</span>
          </span>
        ) : null}
        {errors.has(stepper.active) ? <span className="text-destructive">{stepper.active === 0 ? "Enter a valid email." : "At least two characters."}</span> : null}
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" disabled={stepper.active === 0} onClick={stepper.back}>
          Back
        </Button>
        <Button size="sm" onClick={next} disabled={stepper.active === STEPS.length - 1} data-testid="wizard-next">
          Continue
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>l(()=>import(`./stepper-wizard-q6JvY5ny.js`),[]));function k(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Stepper`,children:"Five states (complete, current, upcoming, error, disabled) as `data-state` on every part, linear or free navigation, horizontal or vertical."}),(0,_.jsx)(m,{n:1,title:`A validated wizard`,blurb:`Continue with an empty field marks the step as an error. Completed steps stay complete when you go back.`,code:O,children:(0,_.jsx)(h,{testId:`wizard`,children:(0,_.jsx)(D,{})})}),(0,_.jsx)(m,{n:2,title:`Deploy pipeline`,blurb:`Vertical, from the Stepper parts, with a spinner on the running stage and a failing run.`,code:x,children:(0,_.jsx)(h,{testId:`pipeline`,children:(0,_.jsx)(b,{})})}),(0,_.jsx)(m,{n:3,title:`Segments from the hook`,blurb:"No Stepper parts: segmented bars over `useStepper`, free navigation.",code:T,children:(0,_.jsx)(h,{testId:`segments`,children:(0,_.jsx)(w,{})})})]})}export{k as component};