import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as t,_i as n,zc as r}from"./index-BZuUy872.js";import{t as i}from"./badge-zOMNRv4l.js";import{a,n as o,o as s,r as c,t as l}from"./card-XcfOPVWP.js";var u=r();function d(e){if(typeof e==`number`)return Number.isFinite(e)&&e>0?e:1;if(typeof e!=`string`)return 1;let[t,n]=e.split(`/`).map(e=>Number(e.trim()));return t!==void 0&&n!==void 0&&t>0&&n>0&&Number.isFinite(t)&&Number.isFinite(n)?`${t} / ${n}`:1}function f({ratio:e,className:t,style:r,...i}){return(0,u.jsx)(`div`,{"data-slot":`aspect-ratio`,style:{"--ratio":d(e),...r},className:n(`relative aspect-(--ratio)`,t),...i})}var p=e({AspectRatio169:()=>m});function m(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsx)(`div`,{className:`w-full max-w-md`,children:(0,u.jsx)(f,{ratio:16/9,className:`overflow-hidden rounded-md border border-border bg-muted`,children:(0,u.jsx)(`div`,{className:`grid h-full place-items-center text-xs text-muted-foreground`,children:`16 × 9`})})})})}var h=e({AspectRatioComposeMediaCard:()=>g});function g(){return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsxs)(l,{className:`w-full max-w-sm overflow-hidden pt-0`,children:[(0,u.jsx)(f,{ratio:16/9,className:`bg-muted`,children:(0,u.jsx)(`div`,{className:`grid h-full place-items-center text-xs text-muted-foreground`,children:`Video thumbnail`})}),(0,u.jsxs)(a,{children:[(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,u.jsx)(s,{children:`Shipping with feature flags`}),(0,u.jsx)(i,{variant:`secondary`,children:`12:40`})]}),(0,u.jsx)(c,{children:`A walkthrough of staged rollouts.`})]}),(0,u.jsx)(o,{className:`text-xs text-muted-foreground`,children:`2.3k views · 3 days ago`})]})})}var _=e({AspectRatioStringRatio:()=>y}),v=[`1/1`,`4/3`,`21/9`];function y(){return(0,u.jsx)(`div`,{className:`grid w-full max-w-xl grid-cols-3 items-start gap-3`,children:v.map(e=>(0,u.jsx)(f,{ratio:e,className:`flex items-center justify-center rounded-md bg-muted font-mono text-xs text-muted-foreground`,children:e},e))})}var b=`import { AspectRatio } from "@kitora/ui/aspect-ratio"

export function AspectRatio169() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-md">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md border border-border bg-muted">
          <div className="grid h-full place-items-center text-xs text-muted-foreground">16 × 9</div>
        </AspectRatio>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./16-9-DcgE-Xs9.js`),[]));var x=`import { AspectRatio } from "@kitora/ui/aspect-ratio"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Badge } from "@kitora/ui/badge"

export function AspectRatioComposeMediaCard() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm overflow-hidden pt-0">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <div className="grid h-full place-items-center text-xs text-muted-foreground">Video thumbnail</div>
        </AspectRatio>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>Shipping with feature flags</CardTitle>
            <Badge variant="secondary">12:40</Badge>
          </div>
          <CardDescription>A walkthrough of staged rollouts.</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">2.3k views · 3 days ago</CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./compose-BXj41quJ.js`),[]));var S=`import { AspectRatio } from "@kitora/ui/aspect-ratio"

const ratios = ["1/1", "4/3", "21/9"] as const

export function AspectRatioStringRatio() {
  return (
    <div className="grid w-full max-w-xl grid-cols-3 items-start gap-3">
      {ratios.map((ratio) => (
        <AspectRatio key={ratio} ratio={ratio} className="flex items-center justify-center rounded-md bg-muted font-mono text-xs text-muted-foreground">
          {ratio}
        </AspectRatio>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./string-ratio-AdxD1O1r.js`),[]));var C={"./demos/aspect-ratio/16-9.tsx":p,"./demos/aspect-ratio/compose.tsx":h,"./demos/aspect-ratio/string-ratio.tsx":_},w={"./demos/aspect-ratio/16-9.tsx":b,"./demos/aspect-ratio/compose.tsx":x,"./demos/aspect-ratio/string-ratio.tsx":S};export{C as modules,w as sources};