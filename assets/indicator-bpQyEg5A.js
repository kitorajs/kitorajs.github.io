import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DpYkDbpD.js";import{t as r}from"./bell-QnxoqhU6.js";import{t as i}from"./mail-m_AeWWGR.js";import{t as a}from"./message-square-3FtuajII.js";import{Cc as o,Ic as s,Sn as c}from"./index-9y5uwRd3.js";import{t as l}from"./indicator-CyHE45Tn.js";import{t as u}from"./separator-CJFdFqN7.js";var d=e({IndicatorComposeAppHeader:()=>p}),f=s();function p(){return(0,f.jsxs)(`header`,{className:`flex w-full max-w-md items-center justify-between rounded-md border border-border bg-card px-3 py-2`,children:[(0,f.jsx)(`span`,{className:`text-sm font-semibold`,children:`Acme`}),(0,f.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,f.jsx)(l,{count:3,size:`sm`,label:`3 unread messages`,children:(0,f.jsx)(c,{label:`Messages`,variant:`ghost`,children:(0,f.jsx)(a,{})})}),(0,f.jsx)(l,{size:`sm`,processing:!0,label:`New notifications`,children:(0,f.jsx)(c,{label:`Notifications`,variant:`ghost`,children:(0,f.jsx)(r,{})})}),(0,f.jsx)(u,{orientation:`vertical`,className:`h-5`}),(0,f.jsx)(l,{tone:`success`,position:`bottom-end`,offset:2,size:`sm`,label:`You are online`,children:(0,f.jsx)(n,{size:`sm`,children:(0,f.jsx)(t,{children:`AB`})})})]})]})}var m=e({IndicatorDotAndCount:()=>h});function h(){return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-8`,children:[(0,f.jsx)(l,{label:`New activity`,children:(0,f.jsx)(c,{label:`Notifications`,variant:`outline`,children:(0,f.jsx)(r,{})})}),(0,f.jsx)(l,{count:4,label:`4 unread messages`,children:(0,f.jsx)(c,{label:`Inbox`,variant:`outline`,children:(0,f.jsx)(i,{})})}),(0,f.jsx)(l,{count:240,max:99,label:`240 unread messages`,children:(0,f.jsx)(c,{label:`Archive`,variant:`outline`,children:(0,f.jsx)(i,{})})}),(0,f.jsx)(l,{tone:`success`,position:`bottom-end`,offset:2,label:`Online`,children:(0,f.jsx)(n,{children:(0,f.jsx)(t,{children:`GH`})})})]})}var g=e({IndicatorPositions:()=>v}),_=[`top-start`,`top-end`,`bottom-start`,`bottom-end`];function v(){return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-8`,children:[_.map(e=>(0,f.jsx)(l,{position:e,count:7,tone:`primary`,children:(0,f.jsx)(`div`,{className:`flex size-14 items-center justify-center rounded-md border border-border bg-muted text-[11px] text-muted-foreground`,children:e})},e)),(0,f.jsx)(l,{processing:!0,tone:`success`,label:`Deploying`,children:(0,f.jsx)(`div`,{className:`flex size-14 items-center justify-center rounded-md border border-border bg-muted text-[11px] text-muted-foreground`,children:`live`})})]})}var y=`import { Bell, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { IconButton } from "@kitora/ui/icon-button"
import { Indicator } from "@kitora/ui/indicator"
import { Separator } from "@kitora/ui/separator"

export function IndicatorComposeAppHeader() {
  return (
    <header className="flex w-full max-w-md items-center justify-between rounded-md border border-border bg-card px-3 py-2">
      <span className="text-sm font-semibold">Acme</span>
      <div className="flex items-center gap-3">
        <Indicator count={3} size="sm" label="3 unread messages">
          <IconButton label="Messages" variant="ghost">
            <MessageSquare />
          </IconButton>
        </Indicator>
        <Indicator size="sm" processing label="New notifications">
          <IconButton label="Notifications" variant="ghost">
            <Bell />
          </IconButton>
        </Indicator>
        <Separator orientation="vertical" className="h-5" />
        <Indicator tone="success" position="bottom-end" offset={2} size="sm" label="You are online">
          <Avatar size="sm">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </Indicator>
      </div>
    </header>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>o(()=>import(`./compose-CJGPtJqS.js`),[]));var b=`import { Bell, Mail } from "lucide-react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { IconButton } from "@kitora/ui/icon-button"
import { Indicator } from "@kitora/ui/indicator"

export function IndicatorDotAndCount() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <Indicator label="New activity">
        <IconButton label="Notifications" variant="outline">
          <Bell />
        </IconButton>
      </Indicator>
      <Indicator count={4} label="4 unread messages">
        <IconButton label="Inbox" variant="outline">
          <Mail />
        </IconButton>
      </Indicator>
      <Indicator count={240} max={99} label="240 unread messages">
        <IconButton label="Archive" variant="outline">
          <Mail />
        </IconButton>
      </Indicator>
      <Indicator tone="success" position="bottom-end" offset={2} label="Online">
        <Avatar>
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
      </Indicator>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>o(()=>import(`./dot-and-count-CG8BSSRB.js`),[]));var x=`import { Indicator } from "@kitora/ui/indicator"

const POSITIONS = ["top-start", "top-end", "bottom-start", "bottom-end"] as const

export function IndicatorPositions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {POSITIONS.map((position) => (
        <Indicator key={position} position={position} count={7} tone="primary">
          <div className="flex size-14 items-center justify-center rounded-md border border-border bg-muted text-[11px] text-muted-foreground">{position}</div>
        </Indicator>
      ))}
      <Indicator processing tone="success" label="Deploying">
        <div className="flex size-14 items-center justify-center rounded-md border border-border bg-muted text-[11px] text-muted-foreground">live</div>
      </Indicator>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>o(()=>import(`./positions-DXw51xlw.js`),[]));var S={"./demos/indicator/compose.tsx":d,"./demos/indicator/dot-and-count.tsx":m,"./demos/indicator/positions.tsx":g},C={"./demos/indicator/compose.tsx":y,"./demos/indicator/dot-and-count.tsx":b,"./demos/indicator/positions.tsx":x};export{S as modules,C as sources};