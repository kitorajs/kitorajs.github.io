import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DpYkDbpD.js";import{c as i,l as a,u as o}from"./progress-Crc-sqB4.js";import{Bc as s,Cc as c,Ic as l,ti as u}from"./index-9y5uwRd3.js";import{a as d,n as f,t as p}from"./card-AZ_23TG_.js";import{t as m}from"./skeleton-DwsB03zU.js";var h=e({SkeletonComposeLoadingCard:()=>_}),g=l();function _(){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(p,{className:`w-full max-w-sm`,role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,children:[(0,g.jsxs)(d,{className:`flex flex-row items-center gap-3`,children:[(0,g.jsx)(m,{className:`size-10 rounded-full`}),(0,g.jsxs)(`div`,{className:`grid flex-1 gap-2`,children:[(0,g.jsx)(m,{className:`h-4 w-1/2`}),(0,g.jsx)(m,{className:`h-3 w-1/3`})]})]}),(0,g.jsxs)(f,{className:`grid gap-2`,children:[(0,g.jsx)(m,{className:`h-3 w-full`}),(0,g.jsx)(m,{className:`h-3 w-5/6`}),(0,g.jsx)(m,{className:`h-3 w-2/3`})]})]})})}var v=e({SkeletonLoadingWrapper:()=>b}),y=t(s(),1);function b(){let[e,t]=(0,y.useState)(!0);return(0,g.jsxs)(`div`,{className:`grid justify-items-start gap-4`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(i,{loading:e,rounded:`full`,children:(0,g.jsx)(r,{children:(0,g.jsx)(n,{children:`AB`})})}),(0,g.jsxs)(`div`,{className:`grid gap-1`,children:[(0,g.jsx)(i,{loading:e,className:`w-fit`,children:(0,g.jsx)(`p`,{className:`text-sm font-medium`,children:`Aman Bansal`})}),(0,g.jsx)(i,{loading:e,className:`w-fit`,children:(0,g.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Joined March 2024`})})]})]}),(0,g.jsx)(u,{variant:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:e?`Finish loading`:`Load again`})]})}var x=e({SkeletonPatternShaped:()=>S});function S(){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(`div`,{className:`flex w-full max-w-sm items-center gap-3`,children:[(0,g.jsx)(m,{className:`size-10 rounded-full`}),(0,g.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,g.jsx)(m,{className:`h-3 w-3/4`}),(0,g.jsx)(m,{className:`h-3 w-1/2`})]})]})})}var C=e({SkeletonWave:()=>w});function w(){return(0,g.jsxs)(a,{label:`Loading profile`,className:`flex w-full max-w-sm items-start gap-3`,children:[(0,g.jsx)(i,{animation:`wave`,rounded:`full`,className:`size-10 shrink-0`}),(0,g.jsxs)(`div`,{className:`flex-1 space-y-3`,children:[(0,g.jsx)(i,{animation:`wave`,className:`h-4 w-1/2`}),(0,g.jsx)(o,{lines:3,animation:`wave`})]})]})}var T=`import { Card, CardContent, CardHeader } from "@kitora/ui/card"
import { Skeleton } from "@kitora/ui/skeleton"

export function SkeletonComposeLoadingCard() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm" role="status" aria-busy="true" aria-label="Loading profile">
        <CardHeader className="flex flex-row items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="grid flex-1 gap-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-3 w-2/3" />
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>c(()=>import(`./compose-CozRYurR.js`),[]));var E=`import { useState } from "react"
import { Skeleton } from "@kitora/feedback"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Button } from "@kitora/ui/button"

export function SkeletonLoadingWrapper() {
  const [loading, setLoading] = useState(true)
  return (
    <div className="grid justify-items-start gap-4">
      <div className="flex items-center gap-3">
        <Skeleton loading={loading} rounded="full">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </Skeleton>
        <div className="grid gap-1">
          <Skeleton loading={loading} className="w-fit">
            <p className="text-sm font-medium">Aman Bansal</p>
          </Skeleton>
          <Skeleton loading={loading} className="w-fit">
            <p className="text-xs text-muted-foreground">Joined March 2024</p>
          </Skeleton>
        </div>
      </div>
      <Button variant="outline" size="sm" onClick={() => setLoading((v) => !v)}>
        {loading ? "Finish loading" : "Load again"}
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>c(()=>import(`./loading-wrapper-Dps17qG-.js`),[]));var D=`import { Skeleton } from "@kitora/ui/skeleton"

export function SkeletonPatternShaped() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="flex w-full max-w-sm items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>c(()=>import(`./pattern-shaped-BmbkwLn8.js`),[]));var O=`import { Skeleton, SkeletonGroup, SkeletonText } from "@kitora/feedback"

export function SkeletonWave() {
  return (
    <SkeletonGroup label="Loading profile" className="flex w-full max-w-sm items-start gap-3">
      <Skeleton animation="wave" rounded="full" className="size-10 shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton animation="wave" className="h-4 w-1/2" />
        <SkeletonText lines={3} animation="wave" />
      </div>
    </SkeletonGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>c(()=>import(`./wave-Db270WoD.js`),[]));var k={"./demos/skeleton/compose.tsx":h,"./demos/skeleton/loading-wrapper.tsx":v,"./demos/skeleton/pattern-shaped.tsx":x,"./demos/skeleton/wave.tsx":C},A={"./demos/skeleton/compose.tsx":T,"./demos/skeleton/loading-wrapper.tsx":E,"./demos/skeleton/pattern-shaped.tsx":D,"./demos/skeleton/wave.tsx":O};export{k as modules,A as sources};