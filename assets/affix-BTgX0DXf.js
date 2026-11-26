import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./message-circle-Dj0f1Szt.js";import{t as r}from"./input-2rqm_FXH.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-9y5uwRd3.js";import{t as c}from"./label-BCdE7eBP.js";import{n as l,t as u}from"./card-AZ_23TG_.js";import{n as d,t as f}from"./affix-BZMmkkJa.js";var p=e({AffixFeedbackButton:()=>g}),m=t(i(),1),h=o();function g(){let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,h.jsx)(s,{variant:`outline`,onClick:()=>t(e=>!e),children:e?`Remove the pinned button`:`Pin a button to the window`}),(0,h.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`It sits at the bottom start corner of the window, above the safe-area insets.`}),e?(0,h.jsx)(f,{position:`bottom-start`,children:(0,h.jsxs)(s,{className:`rounded-full shadow-md`,children:[(0,h.jsx)(n,{}),`Feedback`]})}):null]})}var _=e({AffixBackToTop:()=>y}),v=Array.from({length:12},(e,t)=>`Section ${t+1}. Scroll this box: once it has moved 120px, a button appears in its corner and takes you back to the top, smoothly unless you prefer reduced motion.`);function y(){let e=(0,m.useRef)(null);return(0,h.jsxs)(`div`,{className:`relative w-full max-w-md`,children:[(0,h.jsx)(`div`,{ref:e,tabIndex:0,role:`region`,"aria-label":`Release notes`,className:`h-64 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md border border-border bg-card p-4 text-[13px] leading-relaxed`,children:v.map(e=>(0,h.jsx)(`p`,{className:`mb-3`,children:e},e))}),(0,h.jsx)(d,{target:()=>e.current,threshold:120,withinPortal:!1,affixClassName:`absolute`,offset:12})]})}var b=e({AffixComposeUnsavedChanges:()=>x});function x(){let[e,t]=(0,m.useState)(`Acme`),[n,i]=(0,m.useState)(`Acme`);return(0,h.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,h.jsx)(c,{htmlFor:`affix-workspace-name`,children:`Workspace name`}),(0,h.jsx)(r,{id:`affix-workspace-name`,value:e,onChange:e=>t(e.target.value)}),(0,h.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Edit the name: a save bar is pinned to the bottom of the window until you save or discard.`}),e===n?null:(0,h.jsx)(f,{position:`bottom-end`,children:(0,h.jsx)(u,{className:`py-3 shadow-lg`,children:(0,h.jsxs)(l,{className:`flex items-center gap-3 px-3`,children:[(0,h.jsx)(`span`,{className:`text-[13px]`,children:`Unsaved changes`}),(0,h.jsx)(s,{size:`sm`,variant:`ghost`,onClick:()=>t(n),children:`Discard`}),(0,h.jsx)(s,{size:`sm`,onClick:()=>i(e),children:`Save`})]})})})]})}var S=`import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Affix } from "@kitora/ui/affix"
import { Button } from "@kitora/ui/button"

export function AffixFeedbackButton() {
  const [shown, setShown] = useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant="outline" onClick={() => setShown((s) => !s)}>
        {shown ? "Remove the pinned button" : "Pin a button to the window"}
      </Button>
      <p className="text-[13px] text-muted-foreground">It sits at the bottom start corner of the window, above the safe-area insets.</p>
      {shown ? (
        <Affix position="bottom-start">
          <Button className="rounded-full shadow-md">
            <MessageCircle />
            Feedback
          </Button>
        </Affix>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./affix-B0lkeOhW.js`),[]));var C=`import { useRef } from "react"
import { BackToTop } from "@kitora/ui/affix"

const PARAGRAPHS = Array.from({ length: 12 }, (_, i) => \`Section \${i + 1}. Scroll this box: once it has moved 120px, a button appears in its corner and takes you back to the top, smoothly unless you prefer reduced motion.\`)

export function AffixBackToTop() {
  const scroller = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full max-w-md">
      <div ref={scroller} tabIndex={0} role="region" aria-label="Release notes" className="h-64 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md border border-border bg-card p-4 text-[13px] leading-relaxed">
        {PARAGRAPHS.map((text) => (
          <p key={text} className="mb-3">
            {text}
          </p>
        ))}
      </div>
      <BackToTop target={() => scroller.current} threshold={120} withinPortal={false} affixClassName="absolute" offset={12} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>a(()=>import(`./back-to-top-CFrA4dEF.js`),[]));var w=`import { useState } from "react"
import { Affix } from "@kitora/ui/affix"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function AffixComposeUnsavedChanges() {
  const [name, setName] = useState("Acme")
  const [saved, setSaved] = useState("Acme")
  const dirty = name !== saved

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="affix-workspace-name">Workspace name</Label>
      <Input id="affix-workspace-name" value={name} onChange={(e) => setName(e.target.value)} />
      <p className="text-[13px] text-muted-foreground">Edit the name: a save bar is pinned to the bottom of the window until you save or discard.</p>
      {dirty ? (
        <Affix position="bottom-end">
          <Card className="py-3 shadow-lg">
            <CardContent className="flex items-center gap-3 px-3">
              <span className="text-[13px]">Unsaved changes</span>
              <Button size="sm" variant="ghost" onClick={() => setName(saved)}>
                Discard
              </Button>
              <Button size="sm" onClick={() => setSaved(name)}>
                Save
              </Button>
            </CardContent>
          </Card>
        </Affix>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>a(()=>import(`./compose-C8cuDhW1.js`),[]));var T={"./demos/affix/affix.tsx":p,"./demos/affix/back-to-top.tsx":_,"./demos/affix/compose.tsx":b},E={"./demos/affix/affix.tsx":S,"./demos/affix/back-to-top.tsx":C,"./demos/affix/compose.tsx":w};export{T as modules,E as sources};