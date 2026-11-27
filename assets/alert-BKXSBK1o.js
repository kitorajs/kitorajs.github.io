import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./circle-alert-DsKJQGKd.js";import{t as r}from"./circle-check-XWal_js-.js";import{t as i}from"./triangle-alert-ZpJlCHrv.js";import{Ec as a,Oi as o,Uc as s,ri as c,zc as l}from"./index-BZuUy872.js";import{n as u,r as d,t as f}from"./alert-Bdf8DvYD.js";import{r as p}from"./alerts-BK82ytGx.js";var m=e({AlertComposeDismissibleWithAction:()=>_}),h=t(s(),1),g=l();function _(){let[e,t]=(0,h.useState)(!0);return e?(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(f,{className:`w-full max-w-md`,children:[(0,g.jsx)(i,{}),(0,g.jsx)(d,{children:`Your trial ends in 3 days`}),(0,g.jsxs)(u,{children:[(0,g.jsx)(`p`,{children:`Add a payment method to keep your projects running.`}),(0,g.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[(0,g.jsx)(c,{size:`sm`,children:`Upgrade`}),(0,g.jsx)(c,{size:`sm`,variant:`ghost`,onClick:()=>t(!1),children:`Dismiss`})]})]})]})}):(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsx)(c,{variant:`outline`,size:`sm`,onClick:()=>t(!0),children:`Show alert again`})})}var v=e({AlertInlineParts:()=>y});function y(){let[e,t]=(0,h.useState)(!0);return(0,g.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,g.jsxs)(p.Root,{tone:`warning`,variant:`outline`,open:e,onOpenChange:t,children:[(0,g.jsx)(p.Icon,{}),(0,g.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,g.jsx)(p.Title,{children:`Storage almost full`}),(0,g.jsx)(p.Content,{children:`9.2 GB of 10 GB used. Dismissing fades the alert out (instantly with reduced motion).`}),(0,g.jsx)(p.Actions,{children:(0,g.jsx)(c,{size:`xs`,children:`Upgrade`})})]}),(0,g.jsx)(p.Dismiss,{label:`Dismiss storage warning`})]}),e?null:(0,g.jsx)(c,{variant:`outline`,size:`sm`,className:`justify-self-start`,onClick:()=>t(!0),children:`Show again`}),(0,g.jsx)(p,{tone:`info`,title:`Soft (default)`,children:`The preset is built from the same parts.`}),(0,g.jsx)(p,{tone:`success`,variant:`solid`,title:`Solid`,children:`Full tone colour for the loudest notices.`})]})}var b=e({AlertStatusVsAlert:()=>x});function x(){return(0,g.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(r,{}),(0,g.jsx)(d,{children:`Backup finished`}),(0,g.jsx)(u,{children:'The default variant is `role="status"`, so it is not announced over what the user is doing.'})]}),(0,g.jsxs)(f,{variant:`destructive`,children:[(0,g.jsx)(i,{}),(0,g.jsx)(d,{children:`Payment failed`}),(0,g.jsx)(u,{children:'The destructive variant is `role="alert"` and interrupts. Pass `role` to choose another.'})]})]})}var S=e({AlertVariants:()=>C});function C(){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(`div`,{className:`grid w-full gap-3`,children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(o,{}),(0,g.jsx)(d,{children:`Heads up`}),(0,g.jsx)(u,{children:`You can theme this with CSS variables in styles.css.`})]}),(0,g.jsxs)(f,{variant:`destructive`,children:[(0,g.jsx)(n,{}),(0,g.jsx)(d,{children:`Migration failed`}),(0,g.jsx)(u,{children:"Schema drift on `users.email`. Roll back and re-run."})]})]})})}var w=`import { useState } from "react"
import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@kitora/ui/alert"
import { Button } from "@kitora/ui/button"

export function AlertComposeDismissibleWithAction() {
  const [open, setOpen] = useState(true)
  if (!open) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Show alert again
        </Button>
      </div>
    )
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Alert className="w-full max-w-md">
        <TriangleAlert />
        <AlertTitle>Your trial ends in 3 days</AlertTitle>
        <AlertDescription>
          <p>Add a payment method to keep your projects running.</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm">Upgrade</Button>
            <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
              Dismiss
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>a(()=>import(`./compose-B0hem3Qx.js`),[]));var T=`import { useState } from "react"
import { InlineAlert } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

export function AlertInlineParts() {
  const [open, setOpen] = useState(true)
  return (
    <div className="grid w-full gap-3">
      <InlineAlert.Root tone="warning" variant="outline" open={open} onOpenChange={setOpen}>
        <InlineAlert.Icon />
        <div className="min-w-0 flex-1">
          <InlineAlert.Title>Storage almost full</InlineAlert.Title>
          <InlineAlert.Content>9.2 GB of 10 GB used. Dismissing fades the alert out (instantly with reduced motion).</InlineAlert.Content>
          <InlineAlert.Actions>
            <Button size="xs">Upgrade</Button>
          </InlineAlert.Actions>
        </div>
        <InlineAlert.Dismiss label="Dismiss storage warning" />
      </InlineAlert.Root>
      {open ? null : (
        <Button variant="outline" size="sm" className="justify-self-start" onClick={() => setOpen(true)}>
          Show again
        </Button>
      )}
      <InlineAlert tone="info" title="Soft (default)">The preset is built from the same parts.</InlineAlert>
      <InlineAlert tone="success" variant="solid" title="Solid">Full tone colour for the loudest notices.</InlineAlert>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>a(()=>import(`./inline-parts-BOIeBr48.js`),[]));var E=`import { CircleCheck, TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@kitora/ui/alert"

export function AlertStatusVsAlert() {
  return (
    <div className="grid w-full gap-3">
      {/* role="status": a polite live region, read when the reader pauses */}
      <Alert>
        <CircleCheck />
        <AlertTitle>Backup finished</AlertTitle>
        <AlertDescription>The default variant is \`role="status"\`, so it is not announced over what the user is doing.</AlertDescription>
      </Alert>
      {/* role="alert": assertive, read at once */}
      <Alert variant="destructive">
        <TriangleAlert />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>The destructive variant is \`role="alert"\` and interrupts. Pass \`role\` to choose another.</AlertDescription>
      </Alert>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>a(()=>import(`./status-vs-alert-VGOJBb11.js`),[]));var D=`import { AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@kitora/ui/alert"

export function AlertVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full gap-3">
        <Alert>
          <Info />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>You can theme this with CSS variables in styles.css.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Migration failed</AlertTitle>
          <AlertDescription>Schema drift on \`users.email\`. Roll back and re-run.</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./variants-CtO_WTYT.js`),[]));var O={"./demos/alert/compose.tsx":m,"./demos/alert/inline-parts.tsx":v,"./demos/alert/status-vs-alert.tsx":b,"./demos/alert/variants.tsx":S},k={"./demos/alert/compose.tsx":w,"./demos/alert/inline-parts.tsx":T,"./demos/alert/status-vs-alert.tsx":E,"./demos/alert/variants.tsx":D};export{O as modules,k as sources};