import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{n as o,t as s}from"./card-B_Tor3B1.js";import{n as c,t as l}from"./bubble-CoKDppBZ.js";var u=e({BubbleAlign:()=>p}),d=i();function f(){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,d.jsx)(l,{children:`Short one.`}),(0,d.jsx)(l,{align:`end`,children:`A longer reply that wraps onto a second line, so the bubble stops growing at 85% of the row.`}),(0,d.jsx)(l,{align:`end`,children:`averyveryveryveryverylongwordwithoutanyspacesthatbreaksinsteadofwideningtherow`})]})}function p(){return(0,d.jsxs)(`div`,{className:`grid w-full max-w-md gap-4 text-[13px]`,children:[(0,d.jsx)(`section`,{"aria-label":`Left to right`,children:(0,d.jsx)(f,{})}),(0,d.jsx)(`section`,{"aria-label":`Right to left`,dir:`rtl`,children:(0,d.jsx)(f,{})})]})}var m=e({BubbleCompose:()=>_}),h=t(n(),1),g=[`Sounds good`,`Can we do 3pm?`,`I'll check and get back`];function _(){let[e,t]=(0,h.useState)(null);return(0,d.jsx)(s,{className:`w-full max-w-md`,children:(0,d.jsxs)(o,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,d.jsx)(l,{children:`Are we still on for the design review at 2pm?`}),e?(0,d.jsx)(l,{align:`end`,variant:`tinted`,children:e}):(0,d.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,role:`group`,"aria-label":`Suggested replies`,children:g.map(e=>(0,d.jsx)(a,{size:`sm`,variant:`outline`,onClick:()=>t(e),children:e},e))})]})})}var v=e({BubbleInteractive:()=>y});function y(){let[e,t]=(0,h.useState)(0);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-2 text-[13px]`,children:[(0,d.jsx)(l,{variant:`outline`,children:(0,d.jsxs)(c,{render:(0,d.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1)}),children:[(0,d.jsx)(`span`,{className:`block font-medium`,children:`Shared a link: Q4 roadmap`}),(0,d.jsx)(`span`,{className:`block text-[12px] text-muted-foreground`,children:`docs.example.com · press to open`})]})}),(0,d.jsxs)(`p`,{role:`status`,className:`text-[12px] text-muted-foreground`,children:[`Opened `,e,` `,e===1?`time`:`times`]})]})}var b=e({BubbleVariants:()=>S}),x=[`default`,`secondary`,`muted`,`tinted`,`outline`,`destructive`,`ghost`];function S(){return(0,d.jsx)(`div`,{className:`flex w-full max-w-md flex-col gap-2 text-[13px]`,children:x.map(e=>(0,d.jsxs)(l,{variant:e,children:[(0,d.jsx)(`code`,{className:`font-semibold`,children:e}),`: the build finished and the preview link is ready.`]},e))})}var C=`import { Bubble } from "@kitora/ui/bubble"

function Thread() {
  return (
    <div className="flex flex-col gap-2">
      <Bubble>Short one.</Bubble>
      <Bubble align="end">A longer reply that wraps onto a second line, so the bubble stops growing at 85% of the row.</Bubble>
      <Bubble align="end">averyveryveryveryverylongwordwithoutanyspacesthatbreaksinsteadofwideningtherow</Bubble>
    </div>
  )
}

export function BubbleAlign() {
  return (
    <div className="grid w-full max-w-md gap-4 text-[13px]">
      <section aria-label="Left to right">
        <Thread />
      </section>
      <section aria-label="Right to left" dir="rtl">
        <Thread />
      </section>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./align-ZwfftPI1.js`),[]));var w=`import { useState } from "react"
import { Bubble } from "@kitora/ui/bubble"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"

const REPLIES = ["Sounds good", "Can we do 3pm?", "I'll check and get back"] as const

export function BubbleCompose() {
  const [sent, setSent] = useState<string | null>(null)
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-2 text-[13px]">
        <Bubble>Are we still on for the design review at 2pm?</Bubble>
        {sent ? (
          <Bubble align="end" variant="tinted">
            {sent}
          </Bubble>
        ) : (
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Suggested replies">
            {REPLIES.map((r) => (
              <Button key={r} size="sm" variant="outline" onClick={() => setSent(r)}>
                {r}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./compose-D3Siah0j.js`),[]));var T=`import { useState } from "react"
import { Bubble, BubbleContent } from "@kitora/ui/bubble"

export function BubbleInteractive() {
  const [opened, setOpened] = useState(0)
  return (
    <div className="flex w-full max-w-md flex-col gap-2 text-[13px]">
      <Bubble variant="outline">
        <BubbleContent render={<button type="button" onClick={() => setOpened((n) => n + 1)} />}>
          <span className="block font-medium">Shared a link: Q4 roadmap</span>
          <span className="block text-[12px] text-muted-foreground">docs.example.com · press to open</span>
        </BubbleContent>
      </Bubble>
      <p role="status" className="text-[12px] text-muted-foreground">
        Opened {opened} {opened === 1 ? "time" : "times"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./interactive-BS-B5PPy.js`),[]));var E=`import { Bubble, type BubbleProps } from "@kitora/ui/bubble"

const VARIANTS: readonly NonNullable<BubbleProps["variant"]>[] = ["default", "secondary", "muted", "tinted", "outline", "destructive", "ghost"]

export function BubbleVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 text-[13px]">
      {VARIANTS.map((variant) => (
        <Bubble key={variant} variant={variant}>
          <code className="font-semibold">{variant}</code>: the build finished and the preview link is ready.
        </Bubble>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./variants-DhfRIPIc.js`),[]));var D={"./demos/bubble/align.tsx":u,"./demos/bubble/compose.tsx":m,"./demos/bubble/interactive.tsx":v,"./demos/bubble/variants.tsx":b},O={"./demos/bubble/align.tsx":C,"./demos/bubble/compose.tsx":w,"./demos/bubble/interactive.tsx":T,"./demos/bubble/variants.tsx":E};export{D as modules,O as sources};