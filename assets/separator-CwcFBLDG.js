import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./github-Bc0z96-m.js";import{t as n}from"./mail-qXJt5uVa.js";import{Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{t as o}from"./badge-uhFB8J9R.js";import{t as s}from"./separator-BAbS8iiG.js";var c=e({SeparatorComposeSocialSignIn:()=>u}),l=i();function u(){return(0,l.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,l.jsxs)(a,{variant:`outline`,className:`flex-1`,children:[(0,l.jsx)(t,{}),`GitHub`]}),(0,l.jsxs)(a,{variant:`outline`,className:`flex-1`,children:[(0,l.jsx)(n,{}),`Google`]})]}),(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(s,{className:`flex-1`}),(0,l.jsx)(`span`,{className:`text-xs text-muted-foreground uppercase`,children:`or`}),(0,l.jsx)(s,{className:`flex-1`})]}),(0,l.jsxs)(`div`,{className:`flex h-5 items-center justify-center gap-3 text-sm text-muted-foreground`,children:[(0,l.jsx)(`span`,{children:`Terms`}),(0,l.jsx)(s,{orientation:`vertical`}),(0,l.jsx)(`span`,{children:`Privacy`}),(0,l.jsx)(s,{orientation:`vertical`}),(0,l.jsx)(`span`,{children:`Help`})]})]})}var d=e({SeparatorHorizontal:()=>f});function f(){return(0,l.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,l.jsxs)(`div`,{className:`w-full max-w-md text-sm`,children:[(0,l.jsxs)(`div`,{className:`flex items-center justify-between py-2`,children:[(0,l.jsx)(`span`,{children:`Free tier`}),(0,l.jsx)(o,{variant:`outline`,children:`Current`})]}),(0,l.jsx)(s,{}),(0,l.jsxs)(`div`,{className:`flex items-center justify-between py-2`,children:[(0,l.jsx)(`span`,{children:`Pro tier`}),(0,l.jsx)(a,{size:`sm`,variant:`outline`,children:`Upgrade`})]})]})})}var p=e({SeparatorLabelAndVariants:()=>m});function m(){return(0,l.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-5 text-sm`,children:[(0,l.jsx)(s,{label:`or continue with`}),(0,l.jsx)(s,{label:`Today`,labelPosition:`start`}),(0,l.jsx)(s,{label:`End of results`,labelPosition:`end`,variant:`dotted`}),(0,l.jsx)(s,{variant:`dashed`}),(0,l.jsxs)(`div`,{className:`flex h-5 items-center gap-3`,children:[(0,l.jsx)(`span`,{children:`Docs`}),(0,l.jsx)(s,{orientation:`vertical`,variant:`dotted`}),(0,l.jsx)(`span`,{children:`API`})]})]})}var h=`import { Github, Mail } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Separator } from "@kitora/ui/separator"

export function SeparatorComposeSocialSignIn() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex-1">
          <Github />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./compose-DoMzEUU8.js`),[]));var g=`import { Badge } from "@kitora/ui/badge"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>r(()=>import(`./horizontal-Bv2J3L4o.js`),[]));var _=`import { Separator } from "@kitora/ui/separator"

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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./label-and-variants-TutpNCWa.js`),[]));var v={"./demos/separator/compose.tsx":c,"./demos/separator/horizontal.tsx":d,"./demos/separator/label-and-variants.tsx":p},y={"./demos/separator/compose.tsx":h,"./demos/separator/horizontal.tsx":g,"./demos/separator/label-and-variants.tsx":_};export{v as modules,y as sources};