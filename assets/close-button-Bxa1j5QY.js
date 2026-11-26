import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./chevron-up-Co8vzHBr.js";import{Bc as r,Cc as i,Ic as a,ti as o,xn as s}from"./index-9y5uwRd3.js";import{a as c,n as l,o as u,r as d,t as f}from"./card-AZ_23TG_.js";import{a as p}from"./badges-CKbRtUKd.js";import{t as m}from"./alerts-CZ8ZY0W9.js";import{a as h,c as g,i as _,l as v,o as y,r as b,s as x,t as S}from"./dialog-oT-L6SVn.js";var C=e({CloseButtonComposeDialog:()=>T}),w=a();function T(){return(0,w.jsx)(`div`,{className:`flex justify-center`,children:(0,w.jsxs)(S,{children:[(0,w.jsx)(v,{render:(0,w.jsx)(o,{variant:`outline`}),children:`Open dialog`}),(0,w.jsxs)(_,{showCloseButton:!1,children:[(0,w.jsxs)(x,{children:[(0,w.jsx)(g,{children:`Invite your team`}),(0,w.jsx)(h,{children:`Teammates get an email with a link to join this workspace.`})]}),(0,w.jsx)(b,{render:(0,w.jsx)(s,{label:`Close invite dialog`,className:`absolute top-2 end-2`})}),(0,w.jsxs)(y,{children:[(0,w.jsx)(b,{render:(0,w.jsx)(o,{variant:`outline`}),children:`Cancel`}),(0,w.jsx)(o,{children:`Send invites`})]})]})]})})}var E=e({CloseButtonLabelAndIcon:()=>D});function D(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(s,{label:`Close filters`}),(0,w.jsx)(s,{label:`Dismiss notice`,variant:`outline`}),(0,w.jsx)(s,{label:`Collapse panel`,tooltip:!0,children:(0,w.jsx)(n,{"aria-hidden":`true`})})]})}var O=e({CloseButtonOnACard:()=>A}),k=t(r(),1);function A(){let[e,t]=(0,k.useState)(!0);return e?(0,w.jsxs)(f,{className:`relative mx-auto w-full max-w-sm`,children:[(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Keyboard shortcuts`}),(0,w.jsx)(d,{children:`Press ? anywhere to see every shortcut.`})]}),(0,w.jsx)(l,{className:`text-sm text-muted-foreground`,children:`Placed with logical offsets, so it sits in the top corner on the reading-direction end.`}),(0,w.jsx)(s,{label:`Dismiss tip`,className:`absolute top-2 end-2`,onClick:()=>t(!1)})]}):(0,w.jsx)(`div`,{className:`flex justify-center`,children:(0,w.jsx)(o,{variant:`outline`,size:`sm`,onClick:()=>t(!0),children:`Show the tip again`})})}var j=e({CloseButtonSizesAndVariants:()=>M});function M(){return(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(s,{size:`xs`}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{size:`default`}),(0,w.jsx)(s,{size:`lg`}),(0,w.jsx)(`span`,{className:`mx-1 h-5 w-px bg-border`,"aria-hidden":`true`}),(0,w.jsx)(s,{variant:`outline`}),(0,w.jsx)(s,{variant:`soft`}),(0,w.jsx)(s,{disabled:!0})]})}var N=e({CloseButtonTagsAndBanners:()=>P});function P(){let[e,t]=(0,k.useState)(!0),[n,r]=(0,k.useState)([`design`,`accessibility`,`rtl`]);return(0,w.jsxs)(`div`,{className:`grid w-full gap-3`,children:[e?(0,w.jsx)(m,{tone:`info`,onDismiss:()=>t(!1),dismissLabel:`Dismiss banner`,children:`Release notes are ready.`}):null,(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[n.map(e=>(0,w.jsx)(p,{onRemove:()=>r(t=>t.filter(t=>t!==e)),children:e},e)),e&&n.length===3?null:(0,w.jsx)(`button`,{type:`button`,className:`text-xs text-muted-foreground underline`,onClick:()=>{t(!0),r([`design`,`accessibility`,`rtl`])},children:`Reset`})]})]})}var F=`import { Button } from "@kitora/ui/button"
import { CloseButton } from "@kitora/ui/close-button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"

export function CloseButtonComposeDialog() {
  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
        {/* showCloseButton={false} turns off the built-in ×; DialogClose draws our own and closes the dialog. */}
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Invite your team</DialogTitle>
            <DialogDescription>Teammates get an email with a link to join this workspace.</DialogDescription>
          </DialogHeader>
          <DialogClose render={<CloseButton label="Close invite dialog" className="absolute top-2 end-2" />} />
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button>Send invites</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>i(()=>import(`./compose-CuaPd8FH.js`),[]));var I=`import { ChevronUpIcon } from "lucide-react"
import { CloseButton } from "@kitora/ui/close-button"

export function CloseButtonLabelAndIcon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {/* The accessible name is "Close" unless \`label\` says otherwise: name what it closes. */}
      <CloseButton label="Close filters" />
      <CloseButton label="Dismiss notice" variant="outline" />
      {/* \`children\` replaces the × icon; \`tooltip\` shows the label on hover. */}
      <CloseButton label="Collapse panel" tooltip>
        <ChevronUpIcon aria-hidden="true" />
      </CloseButton>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>i(()=>import(`./label-and-icon-D2Fc_0EE.js`),[]));var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { CloseButton } from "@kitora/ui/close-button"

export function CloseButtonOnACard() {
  const [open, setOpen] = useState(true)
  if (!open) {
    return (
      <div className="flex justify-center">
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Show the tip again
        </Button>
      </div>
    )
  }
  return (
    <Card className="relative mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Keyboard shortcuts</CardTitle>
        <CardDescription>Press ? anywhere to see every shortcut.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Placed with logical offsets, so it sits in the top corner on the reading-direction end.</CardContent>
      <CloseButton label="Dismiss tip" className="absolute top-2 end-2" onClick={() => setOpen(false)} />
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>i(()=>import(`./on-a-card-CsiYnbE_.js`),[]));var R=`import { CloseButton } from "@kitora/ui/close-button"

export function CloseButtonSizesAndVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <CloseButton size="xs" />
      <CloseButton />
      <CloseButton size="default" />
      <CloseButton size="lg" />
      <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <CloseButton variant="outline" />
      <CloseButton variant="soft" />
      <CloseButton disabled />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./sizes-and-variants-DRpa5pgE.js`),[]));var z=`import { useState } from "react"
import { Tag } from "@kitora/display"
import { Banner } from "@kitora/feedback"

export function CloseButtonTagsAndBanners() {
  const [banner, setBanner] = useState(true)
  const [tags, setTags] = useState(["design", "accessibility", "rtl"])
  return (
    <div className="grid w-full gap-3">
      {/* The kits' own × buttons are CloseButtons: Tag's remove button and Banner's dismiss button. */}
      {banner ? (
        <Banner tone="info" onDismiss={() => setBanner(false)} dismissLabel="Dismiss banner">
          Release notes are ready.
        </Banner>
      ) : null}
      <div className="flex flex-wrap items-center gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag} onRemove={() => setTags((all) => all.filter((t) => t !== tag))}>
            {tag}
          </Tag>
        ))}
        {banner && tags.length === 3 ? null : (
          <button type="button" className="text-xs text-muted-foreground underline" onClick={() => { setBanner(true); setTags(["design", "accessibility", "rtl"]) }}>
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>i(()=>import(`./tags-and-banners-DDKDCSqj.js`),[]));var B={"./demos/close-button/compose.tsx":C,"./demos/close-button/label-and-icon.tsx":E,"./demos/close-button/on-a-card.tsx":O,"./demos/close-button/sizes-and-variants.tsx":j,"./demos/close-button/tags-and-banners.tsx":N},V={"./demos/close-button/compose.tsx":F,"./demos/close-button/label-and-icon.tsx":I,"./demos/close-button/on-a-card.tsx":L,"./demos/close-button/sizes-and-variants.tsx":R,"./demos/close-button/tags-and-banners.tsx":z};export{B as modules,V as sources};