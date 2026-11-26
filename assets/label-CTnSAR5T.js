import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-DQo0XDsx.js";import{Bc as r,Cc as i,Ic as a}from"./index-B9ukmIN1.js";import{t as o}from"./label-DoQXlIRk.js";import{t as s}from"./checkbox-DcWEP8V9.js";var c=e({LabelComposeFormFields:()=>d}),l=t(r(),1),u=a();function d(){let e=(0,l.useId)(),t=(0,l.useId)();return(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,u.jsxs)(`div`,{className:`grid gap-2`,children:[(0,u.jsx)(o,{htmlFor:e,children:`Workspace name`}),(0,u.jsx)(n,{id:e,placeholder:`Acme Inc`})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(s,{id:t}),(0,u.jsx)(o,{htmlFor:t,children:`I accept the terms`})]})]})}var f=e({LabelRequired:()=>p});function p(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(o,{htmlFor:`req-name`,required:!0,children:`Full name`}),(0,u.jsx)(n,{id:`req-name`,required:!0,autoComplete:`name`})]}),(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(o,{htmlFor:`req-company`,children:`Company`}),(0,u.jsx)(n,{id:`req-company`,autoComplete:`organization`})]})]})})}var m=e({LabelWithInput:()=>h});function h(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,u.jsx)(o,{htmlFor:`name`,children:`Full name`}),(0,u.jsx)(n,{id:`name`,placeholder:`Ada Lovelace`})]})})}var g=`import { useId } from "react"
import { Checkbox } from "@kitora/ui/checkbox"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function LabelComposeFormFields() {
  const nameId = useId()
  const termsId = useId()
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-2">
        <Label htmlFor={nameId}>Workspace name</Label>
        <Input id={nameId} placeholder="Acme Inc" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={termsId} />
        <Label htmlFor={termsId}>I accept the terms</Label>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./compose-DMcjKVnO.js`),[]));var _=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function LabelRequired() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="req-name" required>
            Full name
          </Label>
          <Input id="req-name" required autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="req-company">Company</Label>
          <Input id="req-company" autoComplete="organization" />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./required-DmztI5sM.js`),[]));var v=`import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function LabelWithInput() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" placeholder="Ada Lovelace" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./with-input-_IMX6cZi.js`),[]));var y={"./demos/label/compose.tsx":c,"./demos/label/required.tsx":f,"./demos/label/with-input.tsx":m},b={"./demos/label/compose.tsx":g,"./demos/label/required.tsx":_,"./demos/label/with-input.tsx":v};export{y as modules,b as sources};