import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./arrow-right-DV4UInPZ.js";import{t as r}from"./arrow-up-right-DYspX3Ag.js";import{t as i}from"./github-Bc0z96-m.js";import{t as a}from"./plus-DS8FiCg5.js";import{t as o}from"./rocket-BRf3R2rG.js";import{t as s}from"./save-TP2LkkCE.js";import{t as c}from"./settings-DVlOJsLs.js";import{t as l}from"./input-DQo0XDsx.js";import{Bc as u,Cc as d,Do as f,Ic as p,Lo as m,Qr as h,Ro as g,Xr as _,Yr as v,ti as y}from"./index-B9ukmIN1.js";import{t as b}from"./label-DoQXlIRk.js";var x=t(u(),1);function S(e){let{disabled:t=!1,focusableWhenDisabled:n=!1,nativeButton:r=!0,ref:i,...a}=e,o=m(a),{getButtonProps:s,buttonRef:c}=f({disabled:t,focusableWhenDisabled:n,native:r});return g(`button`,e,{state:{disabled:t},ref:[i,c],props:[o,s]})}var C=e({ButtonComposeNewsletterSignup:()=>T}),w=p();function T(){let e=(0,x.useId)();return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(`form`,{className:`grid w-full max-w-sm gap-1.5`,onSubmit:e=>e.preventDefault(),children:[(0,w.jsx)(b,{htmlFor:e,children:`Email`}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,w.jsx)(l,{id:e,type:`email`,placeholder:`you@example.com`,className:`min-w-0 flex-1`}),(0,w.jsx)(y,{type:`submit`,children:`Subscribe`})]}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`One email a month. Unsubscribe any time.`})]})})}var E=e({ButtonDisabledWithReason:()=>D});function D(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsxs)(v,{children:[(0,w.jsx)(h,{render:(0,w.jsx)(y,{disabled:!0,focusableWhenDisabled:!0}),children:`Publish`}),(0,w.jsx)(_,{children:`Add a title before publishing`})]}),(0,w.jsx)(y,{variant:`outline`,disabled:!0,children:`Plain disabled`})]})}var O=e({ButtonFocusableWhenDisabled:()=>k});function k(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,w.jsx)(S,{disabled:!0,className:`h-8 rounded-md border border-border px-3 text-sm data-disabled:opacity-50`,children:`Disabled, skipped by Tab`}),(0,w.jsx)(S,{disabled:!0,focusableWhenDisabled:!0,title:`Choose a plan first`,className:`h-8 rounded-md border border-border px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring data-disabled:opacity-50`,children:`Disabled, still focusable`}),(0,w.jsx)(S,{nativeButton:!1,render:(0,w.jsx)(`span`,{}),className:`inline-flex h-8 items-center rounded-md bg-primary px-3 text-sm text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring`,children:`A span that acts as a button`})]})}var A=e({ButtonIconOnly:()=>j});function j(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(y,{size:`icon-xs`,variant:`ghost`,"aria-label":`Settings`,children:(0,w.jsx)(c,{})}),(0,w.jsx)(y,{size:`icon-sm`,variant:`ghost`,"aria-label":`Settings`,children:(0,w.jsx)(c,{})}),(0,w.jsx)(y,{size:`icon`,variant:`outline`,"aria-label":`Settings`,children:(0,w.jsx)(c,{})}),(0,w.jsx)(y,{size:`icon-lg`,variant:`outline`,"aria-label":`Settings`,children:(0,w.jsx)(c,{})}),(0,w.jsx)(y,{size:`icon`,"aria-label":`Add`,children:(0,w.jsx)(a,{})})]})}var M=e({ButtonLoadingDisabled:()=>N});function N(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(y,{loading:!0,loadingText:`Saving…`,children:`Save`}),(0,w.jsx)(y,{variant:`soft`,loading:!0,loadingText:`Deploying…`,children:`Deploy`}),(0,w.jsx)(y,{variant:`outline`,disabled:!0,children:`Disabled`})]})}var P=e({ButtonLoading:()=>F});function F(){let[e,t]=(0,x.useState)(!1),n=()=>{t(!0),window.setTimeout(()=>t(!1),1500)};return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(y,{loading:e,onClick:n,children:`Save changes`}),(0,w.jsx)(y,{variant:`outline`,loading:e,loadingText:`Saving…`,onClick:n,children:`Save draft`}),(0,w.jsx)(y,{variant:`soft`,loading:!0,children:`Always loading`})]})}var I=e({ButtonSizes:()=>L});function L(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(y,{size:`xs`,children:`xs`}),(0,w.jsx)(y,{size:`sm`,children:`sm`}),(0,w.jsx)(y,{children:`default`}),(0,w.jsx)(y,{size:`lg`,children:`lg`}),(0,w.jsx)(y,{size:`xl`,children:`xl`})]})}var R=e({ButtonVariants:()=>z});function z(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(y,{children:`Default`}),(0,w.jsx)(y,{variant:`soft`,children:`Soft`}),(0,w.jsx)(y,{variant:`secondary`,children:`Secondary`}),(0,w.jsx)(y,{variant:`outline`,children:`Outline`}),(0,w.jsx)(y,{variant:`ghost`,children:`Ghost`}),(0,w.jsx)(y,{variant:`destructive`,children:`Destructive`}),(0,w.jsx)(y,{variant:`destructive-soft`,children:`Destructive soft`}),(0,w.jsx)(y,{variant:`link`,children:`Link`})]})}var B=e({ButtonWidth:()=>V});function V(){return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(`div`,{className:`grid w-full max-w-xs gap-2`,children:[(0,w.jsxs)(y,{className:`w-full`,children:[(0,w.jsx)(s,{}),`Save changes`]}),(0,w.jsx)(y,{variant:`outline`,className:`w-full`,children:`Cancel`})]})})}var H=e({ButtonWithIcons:()=>U});function U(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsxs)(y,{children:[(0,w.jsx)(a,{}),`New project`]}),(0,w.jsxs)(y,{variant:`soft`,children:[(0,w.jsx)(o,{}),`Deploy`]}),(0,w.jsxs)(y,{variant:`outline`,children:[(0,w.jsx)(i,{}),`Continue with GitHub`]}),(0,w.jsxs)(y,{variant:`ghost`,children:[`View docs`,(0,w.jsx)(r,{})]}),(0,w.jsxs)(y,{variant:`link`,children:[`Read the announcement`,(0,w.jsx)(n,{})]})]})}var W=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function ButtonComposeNewsletterSignup() {
  const id = useId()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <form className="grid w-full max-w-sm gap-1.5" onSubmit={(e) => e.preventDefault()}>
        <Label htmlFor={id}>Email</Label>
        <div className="flex flex-wrap gap-2">
          <Input id={id} type="email" placeholder="you@example.com" className="min-w-0 flex-1" />
          <Button type="submit">Subscribe</Button>
        </div>
        <p className="text-xs text-muted-foreground">One email a month. Unsubscribe any time.</p>
      </form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>d(()=>import(`./compose-C8UMjTYc.js`),[]));var G=`import { Button } from "@kitora/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kitora/ui/tooltip"

/** \`focusableWhenDisabled\` keeps a disabled button hoverable and in the tab order, so a tooltip can say why it is off. */
export function ButtonDisabledWithReason() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tooltip>
        <TooltipTrigger render={<Button disabled focusableWhenDisabled />}>Publish</TooltipTrigger>
        <TooltipContent>Add a title before publishing</TooltipContent>
      </Tooltip>
      <Button variant="outline" disabled>
        Plain disabled
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>d(()=>import(`./disabled-with-reason-J8TdNnBP.js`),[]));var K=`import { Button } from "@kitora/primitives/react"

/** The headless Button: a disabled one can stay in the tab order (aria-disabled), so a screen reader finds it and a tooltip can say why. */
export function ButtonFocusableWhenDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled className="h-8 rounded-md border border-border px-3 text-sm data-disabled:opacity-50">
        Disabled, skipped by Tab
      </Button>
      <Button disabled focusableWhenDisabled title="Choose a plan first" className="h-8 rounded-md border border-border px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring data-disabled:opacity-50">
        Disabled, still focusable
      </Button>
      <Button nativeButton={false} render={<span />} className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-sm text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring">
        A span that acts as a button
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>d(()=>import(`./focusable-when-disabled-D6gygzeM.js`),[]));var q=`import { Plus, Settings } from "lucide-react"
import { Button } from "@kitora/ui/button"

export function ButtonIconOnly() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="icon-xs" variant="ghost" aria-label="Settings">
        <Settings />
      </Button>
      <Button size="icon-sm" variant="ghost" aria-label="Settings">
        <Settings />
      </Button>
      <Button size="icon" variant="outline" aria-label="Settings">
        <Settings />
      </Button>
      <Button size="icon-lg" variant="outline" aria-label="Settings">
        <Settings />
      </Button>
      <Button size="icon" aria-label="Add">
        <Plus />
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>d(()=>import(`./icon-only-C0hT5g0t.js`),[]));var J=`import { Button } from "@kitora/ui/button"

export function ButtonLoadingDisabled() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button loading loadingText="Saving…">
        Save
      </Button>
      <Button variant="soft" loading loadingText="Deploying…">
        Deploy
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>d(()=>import(`./loading-disabled-DKOeRgAJ.js`),[]));var Y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"

/** \`loading\` keeps the button's width and focus while it is busy; \`loadingText\` puts the spinner beside a label instead. */
export function ButtonLoading() {
  const [saving, setSaving] = useState(false)
  const save = () => {
    setSaving(true)
    // A fake request: a real one would clear the flag when it settles.
    window.setTimeout(() => setSaving(false), 1500)
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button loading={saving} onClick={save}>
        Save changes
      </Button>
      <Button variant="outline" loading={saving} loadingText="Saving…" onClick={save}>
        Save draft
      </Button>
      <Button variant="soft" loading>
        Always loading
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>d(()=>import(`./loading-DL3v-5BZ.js`),[]));var X=`import { Button } from "@kitora/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button>default</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>d(()=>import(`./sizes-BkLkNB8z.js`),[]));var Z=`import { Button } from "@kitora/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Default</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-soft">Destructive soft</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>d(()=>import(`./variants-RhyCCVQs.js`),[]));var Q=`import { Save } from "lucide-react"
import { Button } from "@kitora/ui/button"

export function ButtonWidth() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-xs gap-2">
        <Button className="w-full">
          <Save />
          Save changes
        </Button>
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>d(()=>import(`./width-BjQ1hS8p.js`),[]));var $=`import { ArrowRight, ArrowUpRight, Github, Plus, Rocket } from "lucide-react"
import { Button } from "@kitora/ui/button"

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>
        <Plus />
        New project
      </Button>
      <Button variant="soft">
        <Rocket />
        Deploy
      </Button>
      <Button variant="outline">
        <Github />
        Continue with GitHub
      </Button>
      <Button variant="ghost">
        View docs
        <ArrowUpRight />
      </Button>
      <Button variant="link">
        Read the announcement
        <ArrowRight />
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./with-icons-BI-KfpJ9.js`),[]));var ee={"./demos/button/compose.tsx":C,"./demos/button/disabled-with-reason.tsx":E,"./demos/button/focusable-when-disabled.tsx":O,"./demos/button/icon-only.tsx":A,"./demos/button/loading-disabled.tsx":M,"./demos/button/loading.tsx":P,"./demos/button/sizes.tsx":I,"./demos/button/variants.tsx":R,"./demos/button/width.tsx":B,"./demos/button/with-icons.tsx":H},te={"./demos/button/compose.tsx":W,"./demos/button/disabled-with-reason.tsx":G,"./demos/button/focusable-when-disabled.tsx":K,"./demos/button/icon-only.tsx":q,"./demos/button/loading-disabled.tsx":J,"./demos/button/loading.tsx":Y,"./demos/button/sizes.tsx":X,"./demos/button/variants.tsx":Z,"./demos/button/width.tsx":Q,"./demos/button/with-icons.tsx":$};export{ee as modules,te as sources};