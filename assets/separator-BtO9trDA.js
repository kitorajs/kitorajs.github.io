import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./mail-C0QDlHH1.js";import{Ec as n,ri as r,zc as i}from"./index-BZuUy872.js";import{t as a}from"./badge-zOMNRv4l.js";import{t as o}from"./separator-BeYrD2Vo.js";import{n as s}from"./oauth-Doz3w9Z1.js";var c=e({SeparatorComposeSocialSignIn:()=>u}),l=i();function u(){return(0,l.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,l.jsxs)(r,{variant:`outline`,className:`flex-1`,children:[(0,l.jsx)(s,{provider:`github`}),`GitHub`]}),(0,l.jsxs)(r,{variant:`outline`,className:`flex-1`,children:[(0,l.jsx)(t,{}),`Google`]})]}),(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(o,{className:`flex-1`}),(0,l.jsx)(`span`,{className:`text-xs text-muted-foreground uppercase`,children:`or`}),(0,l.jsx)(o,{className:`flex-1`})]}),(0,l.jsxs)(`div`,{className:`flex h-5 items-center justify-center gap-3 text-sm text-muted-foreground`,children:[(0,l.jsx)(`span`,{children:`Terms`}),(0,l.jsx)(o,{orientation:`vertical`}),(0,l.jsx)(`span`,{children:`Privacy`}),(0,l.jsx)(o,{orientation:`vertical`}),(0,l.jsx)(`span`,{children:`Help`})]})]})}var d=e({SeparatorHorizontal:()=>f});function f(){return(0,l.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,l.jsxs)(`div`,{className:`w-full max-w-md text-sm`,children:[(0,l.jsxs)(`div`,{className:`flex items-center justify-between py-2`,children:[(0,l.jsx)(`span`,{children:`Free tier`}),(0,l.jsx)(a,{variant:`outline`,children:`Current`})]}),(0,l.jsx)(o,{}),(0,l.jsxs)(`div`,{className:`flex items-center justify-between py-2`,children:[(0,l.jsx)(`span`,{children:`Pro tier`}),(0,l.jsx)(r,{size:`sm`,variant:`outline`,children:`Upgrade`})]})]})})}var p=e({SeparatorLabelAndVariants:()=>m});function m(){return(0,l.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-5 text-sm`,children:[(0,l.jsx)(o,{label:`or continue with`}),(0,l.jsx)(o,{label:`Today`,labelPosition:`start`}),(0,l.jsx)(o,{label:`End of results`,labelPosition:`end`,variant:`dotted`}),(0,l.jsx)(o,{variant:`dashed`}),(0,l.jsxs)(`div`,{className:`flex h-5 items-center gap-3`,children:[(0,l.jsx)(`span`,{children:`Docs`}),(0,l.jsx)(o,{orientation:`vertical`,variant:`dotted`}),(0,l.jsx)(`span`,{children:`API`})]})]})}var h=`import { Mail } from "lucide-react"
import { ProviderIcon } from "@kitora/auth/ui"
import { Button } from "@kitora/ui/button"
import { Separator } from "@kitora/ui/separator"

export function SeparatorComposeSocialSignIn() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex-1">
          <ProviderIcon provider="github" />
          GitHub
        </Button>
        <Button variant="outline" className="flex-1">
          <Mail />
          Google
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground uppercase">or</span>
        <Separator className="flex-1" />
      </div>
      <div className="flex h-5 items-center justify-center gap-3 text-sm text-muted-foreground">
        <span>Terms</span>
        <Separator orientation="vertical" />
        <span>Privacy</span>
        <Separator orientation="vertical" />
        <span>Help</span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./compose-CzkLFwed.js`),[]));var g=`import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Separator } from "@kitora/ui/separator"

export function SeparatorHorizontal() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-md text-sm">
        <div className="flex items-center justify-between py-2">
          <span>Free tier</span>
          <Badge variant="outline">Current</Badge>
        </div>
        <Separator />
        <div className="flex items-center justify-between py-2">
          <span>Pro tier</span>
          <Button size="sm" variant="outline">
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./horizontal-DXiiAi8n.js`),[]));var _=`import { Separator } from "@kitora/ui/separator"

export function SeparatorLabelAndVariants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 text-sm">
      <Separator label="or continue with" />
      <Separator label="Today" labelPosition="start" />
      <Separator label="End of results" labelPosition="end" variant="dotted" />
      <Separator variant="dashed" />
      <div className="flex h-5 items-center gap-3">
        <span>Docs</span>
        <Separator orientation="vertical" variant="dotted" />
        <span>API</span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./label-and-variants-CPp8m9-s.js`),[]));var v={"./demos/separator/compose.tsx":c,"./demos/separator/horizontal.tsx":d,"./demos/separator/label-and-variants.tsx":p},y={"./demos/separator/compose.tsx":h,"./demos/separator/horizontal.tsx":g,"./demos/separator/label-and-variants.tsx":_};export{v as modules,y as sources};