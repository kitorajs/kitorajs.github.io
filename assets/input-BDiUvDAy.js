import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-2rqm_FXH.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{t as s}from"./label-BCdE7eBP.js";var c=e({InputComposeSignInRow:()=>d}),l=t(r(),1),u=a();function d(){let e=(0,l.useId)();return(0,u.jsxs)(`form`,{className:`grid w-full max-w-sm gap-2`,onSubmit:e=>e.preventDefault(),children:[(0,u.jsx)(s,{htmlFor:e,children:`Work email`}),(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,u.jsx)(n,{id:e,type:`email`,placeholder:`ada@example.com`,className:`min-w-0 flex-1`}),(0,u.jsx)(o,{type:`submit`,children:`Continue`})]})]})}var f=e({InputDefault:()=>p});function p(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`email`,children:`Email`}),(0,u.jsx)(n,{id:`email`,type:`email`,placeholder:`you@example.com`}),(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`We'll never share it.`})]})})}var m=e({InputDisabled:()=>h});function h(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`email-d`,children:`Email`}),(0,u.jsx)(n,{id:`email-d`,defaultValue:`alex@example.com`,disabled:!0})]})})}var g=e({InputInvalid:()=>_});function _(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`email-bad`,children:`Email`}),(0,u.jsx)(n,{id:`email-bad`,defaultValue:`not-an-email`,"aria-invalid":!0}),(0,u.jsx)(`p`,{className:`text-xs text-destructive`,children:`Enter a valid email.`})]})})}var v=e({InputSizesAndReadOnly:()=>y});function y(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`size-sm`,children:`Small`}),(0,u.jsx)(n,{id:`size-sm`,size:`sm`,placeholder:`28px`})]}),(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`size-default`,children:`Default`}),(0,u.jsx)(n,{id:`size-default`,size:`default`,placeholder:`32px`})]}),(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`size-lg`,children:`Large`}),(0,u.jsx)(n,{id:`size-lg`,size:`lg`,placeholder:`36px`})]}),(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`api-id`,children:`Workspace ID (read-only)`}),(0,u.jsx)(n,{id:`api-id`,readOnly:!0,defaultValue:`ws_7f3a91c2`})]})]})})}var b=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function InputComposeSignInRow() {
  const id = useId()
  return (
    <form className="grid w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor={id}>Work email</Label>
      <div className="flex flex-wrap gap-2">
        <Input id={id} type="email" placeholder="ada@example.com" className="min-w-0 flex-1" />
        <Button type="submit">Continue</Button>
      </div>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./compose-CC00TBYh2.js`),[]));var x=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function InputDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
        <p className="text-xs text-muted-foreground">We'll never share it.</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./default-oYnPrtLn.js`),[]));var S=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function InputDisabled() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="email-d">Email</Label>
        <Input id="email-d" defaultValue="alex@example.com" disabled />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>i(()=>import(`./disabled-BPQjYCkJ.js`),[]));var C=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function InputInvalid() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="email-bad">Email</Label>
        <Input id="email-bad" defaultValue="not-an-email" aria-invalid />
        <p className="text-xs text-destructive">Enter a valid email.</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>i(()=>import(`./invalid-DmRf_yaK.js`),[]));var w=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function InputSizesAndReadOnly() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="size-sm">Small</Label>
          <Input id="size-sm" size="sm" placeholder="28px" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="size-default">Default</Label>
          <Input id="size-default" size="default" placeholder="32px" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="size-lg">Large</Label>
          <Input id="size-lg" size="lg" placeholder="36px" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="api-id">Workspace ID (read-only)</Label>
          <Input id="api-id" readOnly defaultValue="ws_7f3a91c2" />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>i(()=>import(`./sizes-and-read-only-Bkl0MVIV.js`),[]));var T={"./demos/input/compose.tsx":c,"./demos/input/default.tsx":f,"./demos/input/disabled.tsx":m,"./demos/input/invalid.tsx":g,"./demos/input/sizes-and-read-only.tsx":v},E={"./demos/input/compose.tsx":b,"./demos/input/default.tsx":x,"./demos/input/disabled.tsx":S,"./demos/input/invalid.tsx":C,"./demos/input/sizes-and-read-only.tsx":w};export{T as modules,E as sources};