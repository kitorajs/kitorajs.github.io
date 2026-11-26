import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Ai as n,Bc as r,Cc as i,Ic as a,Ti as o,ti as s}from"./index-q72zUtm9.js";import{t as c}from"./badge-Be8rVEaF.js";import{a as l,n as u,o as d,t as f}from"./card-WiouR7Ep.js";import{t as p}from"./shimmer-BlgrW_uA.js";var m=e({ShimmerComposeAgentSteps:()=>_}),h=a(),g=[{id:`read`,title:`Read the failing test`,done:!0},{id:`search`,title:`Searched the codebase for the date parser`,done:!0},{id:`patch`,title:`Writing a fix for the leap-year case`,done:!1}];function _(){return(0,h.jsxs)(f,{className:`w-full max-w-md`,children:[(0,h.jsxs)(l,{className:`flex flex-row items-center justify-between gap-2`,children:[(0,h.jsx)(d,{className:`text-[14px]`,children:`Agent`}),(0,h.jsx)(c,{variant:`secondary`,children:`2 of 3 done`})]}),(0,h.jsx)(u,{children:(0,h.jsx)(`ol`,{className:`flex flex-col gap-2 text-[13px]`,children:g.map(e=>(0,h.jsxs)(`li`,{className:`flex items-center gap-2`,children:[e.done?(0,h.jsx)(n,{"aria-hidden":!0,className:`size-4 shrink-0 text-emerald-600 dark:text-emerald-400`}):(0,h.jsx)(o,{"aria-hidden":!0,className:`size-4 shrink-0 text-muted-foreground motion-safe:animate-spin`}),e.done?(0,h.jsx)(`span`,{children:e.title}):(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(`span`,{className:`sr-only`,children:e.done?`done`:`running`})]},e.id))})})]})}var v=e({ShimmerDefault:()=>y});function y(){return(0,h.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,children:[(0,h.jsx)(p,{children:`Thinking…`}),(0,h.jsx)(p,{children:`Searching 12 sources for “vite 8 release notes”`}),(0,h.jsx)(p,{active:!1,children:`Thought for 4.2s`})]})}var b=e({ShimmerToggle:()=>S}),x=t(r(),1);function S(){let[e,t]=(0,x.useState)(!0);return(0,h.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-start gap-4`,children:[(0,h.jsx)(p,{as:`h3`,active:e,className:`text-[15px] font-medium`,children:e?`Generating the release notes…`:`Release notes ready`}),(0,h.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>t(e=>!e),children:e?`Finish`:`Run again`})]})}var C=`import { Check, Loader2 } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Shimmer } from "@kitora/ui/shimmer"

const steps = [
  { id: "read", title: "Read the failing test", done: true },
  { id: "search", title: "Searched the codebase for the date parser", done: true },
  { id: "patch", title: "Writing a fix for the leap-year case", done: false },
] as const

export function ShimmerComposeAgentSteps() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle className="text-[14px]">Agent</CardTitle>
        <Badge variant="secondary">2 of 3 done</Badge>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-2 text-[13px]">
          {steps.map((step) => (
            <li key={step.id} className="flex items-center gap-2">
              {step.done ? <Check aria-hidden className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" /> : <Loader2 aria-hidden className="size-4 shrink-0 text-muted-foreground motion-safe:animate-spin" />}
              {step.done ? <span>{step.title}</span> : <Shimmer>{step.title}</Shimmer>}
              <span className="sr-only">{step.done ? "done" : "running"}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>i(()=>import(`./compose-rb0r4f9i.js`),[]));var w=`import { Shimmer } from "@kitora/ui/shimmer"

export function ShimmerDefault() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-[13px]">
      <Shimmer>Thinking…</Shimmer>
      <Shimmer>Searching 12 sources for “vite 8 release notes”</Shimmer>
      <Shimmer active={false}>Thought for 4.2s</Shimmer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>i(()=>import(`./default-PcCGm-PU.js`),[]));var T=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Shimmer } from "@kitora/ui/shimmer"

export function ShimmerToggle() {
  const [running, setRunning] = useState(true)
  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4">
      <Shimmer as="h3" active={running} className="text-[15px] font-medium">
        {running ? "Generating the release notes…" : "Release notes ready"}
      </Shimmer>
      <Button size="sm" variant="outline" onClick={() => setRunning((r) => !r)}>
        {running ? "Finish" : "Run again"}
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>i(()=>import(`./toggle-CC5veacg.js`),[]));var E={"./demos/shimmer/compose.tsx":m,"./demos/shimmer/default.tsx":v,"./demos/shimmer/toggle.tsx":b},D={"./demos/shimmer/compose.tsx":C,"./demos/shimmer/default.tsx":w,"./demos/shimmer/toggle.tsx":T};export{E as modules,D as sources};