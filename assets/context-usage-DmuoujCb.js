import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./textarea-BQPz--El.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{t as s}from"./context-usage-DIqe0hjz.js";var c=e({ContextUsageBreakdown:()=>u}),l=a();function u(){return(0,l.jsx)(s,{used:128400,max:2e5,breakdown:{input:96200,output:18900,reasoning:13300,cached:61e3},cost:.4127,side:`bottom`})}var d=e({ContextUsageCompose:()=>p}),f=t(r(),1);function p(){let[e,t]=(0,f.useState)(137e3),[r,i]=(0,f.useState)(``);return(0,l.jsxs)(`div`,{className:`w-full max-w-md rounded-xl border bg-background`,children:[(0,l.jsx)(n,{value:r,onChange:e=>i(e.target.value),placeholder:`Message…`,"aria-label":`Message`,className:`min-h-16 resize-none border-0 shadow-none focus-visible:ring-0`}),(0,l.jsxs)(`div`,{className:`flex items-center gap-2 px-2 pb-2`,children:[(0,l.jsx)(s,{used:e,max:2e5,breakdown:{input:Math.round(e*.8),output:Math.round(e*.2)}}),(0,l.jsx)(o,{size:`sm`,className:`ms-auto`,disabled:!r.trim(),onClick:()=>{t(e=>Math.min(2e5,e+Math.ceil(r.length/4)+1200)),i(``)},children:`Send`})]})]})}var m=e({ContextUsageDefault:()=>h});function h(){return(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,l.jsx)(s,{used:84e3,max:2e5,side:`bottom`}),(0,l.jsx)(s,{used:84e3,max:2e5,size:`sm`,side:`bottom`})]})}var g=e({ContextUsageZones:()=>_});function _(){return(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,l.jsx)(s,{used:42e3,max:2e5,side:`bottom`}),(0,l.jsx)(s,{used:15e4,max:2e5,side:`bottom`}),(0,l.jsx)(s,{used:192e3,max:2e5,side:`bottom`}),(0,l.jsx)(s,{used:9e3,max:16e3,low:8e3,high:12e3,side:`bottom`})]})}var v=`import { ContextUsage } from "@kitora/ai-chat/ui"

export function ContextUsageBreakdown() {
  return (
    <ContextUsage
      used={128_400}
      max={200_000}
      breakdown={{ input: 96_200, output: 18_900, reasoning: 13_300, cached: 61_000 }}
      cost={0.4127}
      side="bottom"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./breakdown-CUYTVREQ.js`),[]));var y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Textarea } from "@kitora/ui/textarea"
import { ContextUsage } from "@kitora/ai-chat/ui"

/** Each send adds the message (about four characters a token) and a reply of about 1,200 tokens; two sends cross 70% and the ring turns amber. */
export function ContextUsageCompose() {
  const [used, setUsed] = useState(137_000)
  const [text, setText] = useState("")
  return (
    <div className="w-full max-w-md rounded-xl border bg-background">
      <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Message…" aria-label="Message" className="min-h-16 resize-none border-0 shadow-none focus-visible:ring-0" />
      <div className="flex items-center gap-2 px-2 pb-2">
        <ContextUsage used={used} max={200_000} breakdown={{ input: Math.round(used * 0.8), output: Math.round(used * 0.2) }} />
        <Button
          size="sm"
          className="ms-auto"
          disabled={!text.trim()}
          onClick={() => {
            setUsed((u) => Math.min(200_000, u + Math.ceil(text.length / 4) + 1_200))
            setText("")
          }}
        >
          Send
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>i(()=>import(`./compose-cqdk3Nww.js`),[]));var b=`import { ContextUsage } from "@kitora/ai-chat/ui"

export function ContextUsageDefault() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ContextUsage used={84_000} max={200_000} side="bottom" />
      <ContextUsage used={84_000} max={200_000} size="sm" side="bottom" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./default-BIruShok.js`),[]));var x=`import { ContextUsage } from "@kitora/ai-chat/ui"

export function ContextUsageZones() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ContextUsage used={42_000} max={200_000} side="bottom" />
      <ContextUsage used={150_000} max={200_000} side="bottom" />
      <ContextUsage used={192_000} max={200_000} side="bottom" />
      <ContextUsage used={9_000} max={16_000} low={8_000} high={12_000} side="bottom" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./zones-fraf5gR6.js`),[]));var S={"./demos/context-usage/breakdown.tsx":c,"./demos/context-usage/compose.tsx":d,"./demos/context-usage/default.tsx":m,"./demos/context-usage/zones.tsx":g},C={"./demos/context-usage/breakdown.tsx":v,"./demos/context-usage/compose.tsx":y,"./demos/context-usage/default.tsx":b,"./demos/context-usage/zones.tsx":x};export{S as modules,C as sources};