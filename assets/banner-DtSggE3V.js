import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./arrow-up-right-CDYg675f.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-q72zUtm9.js";import{n as s,t as c}from"./alerts-lJNUGOeS.js";var l=e({BannerDismissible:()=>f}),u=t(r(),1),d=a();function f(){let[e,t]=(0,u.useState)(!0);return(0,d.jsx)(`div`,{className:`w-full overflow-hidden rounded-lg border border-border`,children:e?(0,d.jsx)(c,{tone:`info`,onDismiss:()=>t(!1),actions:(0,d.jsx)(o,{size:`xs`,children:`Upgrade`}),children:`Your trial ends in 3 days. Upgrade to keep your projects.`}):(0,d.jsxs)(`div`,{className:`flex h-9 items-center gap-1 px-3 text-xs text-muted-foreground`,children:[`Banner dismissed.`,(0,d.jsx)(o,{size:`xs`,variant:`link`,onClick:()=>t(!0),children:`Show again`})]})})}var p=e({BannerInlineNotification:()=>m});function m(){return(0,d.jsx)(`div`,{className:`w-full overflow-hidden rounded-lg border border-border`,children:(0,d.jsx)(c,{tone:`warning`,actions:(0,d.jsxs)(o,{variant:`outline`,size:`xs`,children:[`View logs`,(0,d.jsx)(n,{})]}),children:`Deploy was rolled back automatically: the healthcheck failed at 11:42 PT.`})})}var h=e({BannerTonesAndVariants:()=>g});function g(){return(0,d.jsx)(`div`,{className:`grid w-full gap-2`,children:s.map(e=>(0,d.jsxs)(`div`,{className:`grid gap-px overflow-hidden rounded-lg border border-border`,children:[(0,d.jsxs)(c,{tone:e,children:[`A `,e,` banner in the soft look.`]}),(0,d.jsxs)(c,{tone:e,variant:`solid`,children:[`A `,e,` banner in the solid look.`]})]},e))})}var _=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Banner } from "@kitora/feedback"

// \`onDismiss\` adds a close button; the host owns whether the banner shows, so it can remember the choice.
export function BannerDismissible() {
  const [open, setOpen] = useState(true)
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border">
      {open ? (
        <Banner tone="info" onDismiss={() => setOpen(false)} actions={<Button size="xs">Upgrade</Button>}>
          Your trial ends in 3 days. Upgrade to keep your projects.
        </Banner>
      ) : (
        <div className="flex h-9 items-center gap-1 px-3 text-xs text-muted-foreground">
          Banner dismissed.
          <Button size="xs" variant="link" onClick={() => setOpen(true)}>
            Show again
          </Button>
        </div>
      )}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./dismissible-tAiN_ISL.js`),[]));var v=`import { ArrowUpRight } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Banner } from "@kitora/feedback"

// A full-width strip with a tone icon, the message and an action. Banners belong at the top of a page
// or a panel; inside content, use an inline alert instead.
export function BannerInlineNotification() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border">
      <Banner
        tone="warning"
        actions={
          <Button variant="outline" size="xs">
            View logs
            <ArrowUpRight />
          </Button>
        }
      >
        Deploy was rolled back automatically: the healthcheck failed at 11:42 PT.
      </Banner>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./inline-notification-CU-O8ujW.js`),[]));var y=`import { FEEDBACK_TONES, Banner } from "@kitora/feedback"

// Four tones, each in the \`soft\` look (the default) and the \`solid\` one for a message that must not be missed.
export function BannerTonesAndVariants() {
  return (
    <div className="grid w-full gap-2">
      {FEEDBACK_TONES.map((tone) => (
        <div key={tone} className="grid gap-px overflow-hidden rounded-lg border border-border">
          <Banner tone={tone}>A {tone} banner in the soft look.</Banner>
          <Banner tone={tone} variant="solid">
            A {tone} banner in the solid look.
          </Banner>
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>i(()=>import(`./tones-and-variants-Cuo4zZsB.js`),[]));var b={"./demos/banner/dismissible.tsx":l,"./demos/banner/inline-notification.tsx":p,"./demos/banner/tones-and-variants.tsx":h},x={"./demos/banner/dismissible.tsx":_,"./demos/banner/inline-notification.tsx":v,"./demos/banner/tones-and-variants.tsx":y};export{b as modules,x as sources};