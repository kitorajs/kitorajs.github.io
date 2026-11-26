import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DDurds49.js";import{t as i}from"./message-square-text-D-9YMJb-.js";import{t as a}from"./pencil-B4UI5Wo7.js";import{t as o}from"./thumbs-up-CEgpZs75.js";import{Bc as s,Cc as c,Di as l,Ic as u,Si as d}from"./index-B9ukmIN1.js";import{t as f}from"./badge-uhFB8J9R.js";import{a as p,n as m,o as h,t as g}from"./card-B_Tor3B1.js";import{t as _}from"./attachment-Au_AgTaO.js";import{a as v,c as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./message-xH4zBI3s.js";import{t as O}from"./bubble-CoKDppBZ.js";import{t as k}from"./marker-Cp_0gcIk.js";var A=e({MessageActionsDemo:()=>N}),j=t(s(),1),M=u();function N(){let[e,t]=(0,j.useState)(`Hover a message or Tab to its actions.`);return(0,M.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-5 text-[13px]`,children:[(0,M.jsx)(E,{last:!0,children:(0,M.jsxs)(C,{children:[(0,M.jsx)(O,{variant:`ghost`,children:`Your deploy finished in 4 minutes. Two warnings were logged, both about deprecated flags.`}),(0,M.jsx)(T,{children:(0,M.jsxs)(w,{visible:`auto`,className:`-ms-1`,children:[(0,M.jsx)(S,{label:`Copy reply`,onClick:()=>t(`Copied the reply`),children:(0,M.jsx)(l,{})}),(0,M.jsx)(S,{label:`Good reply`,onClick:()=>t(`Marked as good`),children:(0,M.jsx)(o,{})}),(0,M.jsx)(S,{label:`Regenerate`,onClick:()=>t(`Regenerating`),children:(0,M.jsx)(d,{})})]})})]})}),(0,M.jsxs)(E,{className:`rounded-md px-3 py-1 hover:bg-muted/50`,children:[(0,M.jsxs)(C,{children:[(0,M.jsx)(x,{name:`Eli Novak`,time:`2026-11-21T10:02:00Z`,timeLabel:`10:02`}),(0,M.jsx)(`p`,{className:`break-words`,children:`Pushed the fix for the flaky checkout test.`})]}),(0,M.jsxs)(w,{placement:`floating`,label:`Actions for Eli's message`,children:[(0,M.jsx)(S,{label:`Reply in thread`,onClick:()=>t(`Opened the thread`),children:(0,M.jsx)(i,{})}),(0,M.jsx)(S,{label:`Edit`,onClick:()=>t(`Editing`),children:(0,M.jsx)(a,{})})]})]}),(0,M.jsx)(`p`,{role:`status`,className:`text-[12px] text-muted-foreground`,children:e})]})}var P=e({MessageCompose:()=>F});function F(){return(0,M.jsxs)(g,{className:`w-full max-w-md`,children:[(0,M.jsx)(p,{children:(0,M.jsx)(h,{children:`Ticket #4821: refund`})}),(0,M.jsxs)(m,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,M.jsx)(k,{variant:`separator`,children:`Today`}),(0,M.jsx)(y,{"aria-label":`Mara from support`,children:(0,M.jsxs)(E,{children:[(0,M.jsx)(v,{children:(0,M.jsx)(r,{size:`sm`,children:(0,M.jsx)(n,{children:`MS`})})}),(0,M.jsxs)(C,{className:`flex flex-col gap-1`,children:[(0,M.jsx)(x,{name:`Mara`,time:`2026-11-21T08:30:00Z`,timeLabel:`08:30`,children:(0,M.jsx)(f,{variant:`secondary`,children:`Support`})}),(0,M.jsx)(O,{children:`I have issued the refund. The receipt is attached.`}),(0,M.jsx)(b,{children:(0,M.jsx)(_,{name:`refund-receipt.pdf`,kind:`application/pdf`,size:84e3})})]})]})}),(0,M.jsx)(E,{align:`end`,status:`sent`,children:(0,M.jsxs)(C,{className:`flex flex-col gap-1`,children:[(0,M.jsx)(O,{variant:`tinted`,children:`Got it, thank you!`}),(0,M.jsx)(T,{children:(0,M.jsx)(D,{children:`Read`})})]})})]})]})}var I=e({MessageConversation:()=>z}),L=[{id:`m1`,text:`Morning! Is the release still on for today?`,time:`09:12`,at:`2026-11-21T09:12:00Z`},{id:`m2`,text:`QA signed off on the checkout flow last night.`,time:`09:13`,at:`2026-11-21T09:13:00Z`}],R=[{id:`m3`,text:`Yes, 14:00. I will post the notes once it is out.`,time:`09:15`,at:`2026-11-21T09:15:00Z`},{id:`m4`,text:`Thanks for chasing QA 🙏`,time:`09:15`,at:`2026-11-21T09:15:30Z`}];function z(){return(0,M.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,children:[(0,M.jsx)(y,{"aria-label":`Ana Ruiz`,className:`gap-1`,children:L.map((e,t)=>(0,M.jsxs)(E,{first:t===0,"data-message-id":e.id,children:[(0,M.jsx)(v,{time:e.at,timeLabel:e.time,children:(0,M.jsx)(r,{children:(0,M.jsx)(n,{children:`AR`})})}),(0,M.jsxs)(C,{children:[t===0?(0,M.jsx)(x,{name:`Ana Ruiz`,time:e.at,timeLabel:e.time}):null,(0,M.jsx)(O,{children:e.text})]})]},e.id))}),(0,M.jsx)(y,{"aria-label":`You`,className:`gap-1`,children:R.map((e,t)=>(0,M.jsx)(E,{align:`end`,first:t===0,"data-message-id":e.id,children:(0,M.jsxs)(C,{children:[t===0?(0,M.jsx)(x,{name:`You`,time:e.at,timeLabel:e.time}):null,(0,M.jsx)(O,{variant:`tinted`,children:e.text})]})},e.id))})]})}var B=e({MessageStatusDemo:()=>V});function V(){let[e,t]=(0,j.useState)(`failed`);return(0,M.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4 text-[13px]`,children:[(0,M.jsx)(E,{align:`end`,status:`sending`,children:(0,M.jsxs)(C,{children:[(0,M.jsx)(O,{children:`Uploading the screenshots now`}),(0,M.jsx)(T,{children:(0,M.jsx)(D,{})})]})}),(0,M.jsx)(E,{align:`end`,status:e,children:(0,M.jsxs)(C,{children:[(0,M.jsx)(O,{children:`Can you check the invoice total?`}),(0,M.jsx)(T,{children:(0,M.jsx)(D,{onRetry:()=>t(`sent`),children:`Seen by Eli`})})]})}),(0,M.jsx)(E,{status:`stopped`,children:(0,M.jsxs)(C,{children:[(0,M.jsx)(O,{variant:`ghost`,children:`The quarterly numbers show revenue up 12%, driven mostly by`}),(0,M.jsx)(T,{children:(0,M.jsx)(D,{})})]})})]})}var H=`import { useState } from "react"
import { Copy, MessageSquareText, Pencil, RotateCcw, ThumbsUp } from "lucide-react"
import { Bubble } from "@kitora/ui/bubble"
import { Message, MessageAction, MessageActions, MessageContent, MessageFooter, MessageHeader } from "@kitora/ui/message"

export function MessageActionsDemo() {
  const [log, setLog] = useState("Hover a message or Tab to its actions.")
  return (
    <div className="flex w-full max-w-md flex-col gap-5 text-[13px]">
      <Message last>
        <MessageContent>
          <Bubble variant="ghost">Your deploy finished in 4 minutes. Two warnings were logged, both about deprecated flags.</Bubble>
          <MessageFooter>
            <MessageActions visible="auto" className="-ms-1">
              <MessageAction label="Copy reply" onClick={() => setLog("Copied the reply")}>
                <Copy />
              </MessageAction>
              <MessageAction label="Good reply" onClick={() => setLog("Marked as good")}>
                <ThumbsUp />
              </MessageAction>
              <MessageAction label="Regenerate" onClick={() => setLog("Regenerating")}>
                <RotateCcw />
              </MessageAction>
            </MessageActions>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message className="rounded-md px-3 py-1 hover:bg-muted/50">
        <MessageContent>
          <MessageHeader name="Eli Novak" time="2026-11-21T10:02:00Z" timeLabel="10:02" />
          <p className="break-words">Pushed the fix for the flaky checkout test.</p>
        </MessageContent>
        <MessageActions placement="floating" label="Actions for Eli's message">
          <MessageAction label="Reply in thread" onClick={() => setLog("Opened the thread")}>
            <MessageSquareText />
          </MessageAction>
          <MessageAction label="Edit" onClick={() => setLog("Editing")}>
            <Pencil />
          </MessageAction>
        </MessageActions>
      </Message>
      <p role="status" className="text-[12px] text-muted-foreground">
        {log}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>c(()=>import(`./actions-D4Ce9N04.js`),[]));var U=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Attachment } from "@kitora/ui/attachment"
import { Badge } from "@kitora/ui/badge"
import { Bubble } from "@kitora/ui/bubble"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Marker } from "@kitora/ui/marker"
import { Message, MessageAttachments, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader, MessageStatus } from "@kitora/ui/message"

export function MessageCompose() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Ticket #4821: refund</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-[13px]">
        <Marker variant="separator">Today</Marker>
        <MessageGroup aria-label="Mara from support">
          <Message>
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent className="flex flex-col gap-1">
              <MessageHeader name="Mara" time="2026-11-21T08:30:00Z" timeLabel="08:30">
                <Badge variant="secondary">Support</Badge>
              </MessageHeader>
              <Bubble>I have issued the refund. The receipt is attached.</Bubble>
              <MessageAttachments>
                <Attachment name="refund-receipt.pdf" kind="application/pdf" size={84_000} />
              </MessageAttachments>
            </MessageContent>
          </Message>
        </MessageGroup>
        <Message align="end" status="sent">
          <MessageContent className="flex flex-col gap-1">
            <Bubble variant="tinted">Got it, thank you!</Bubble>
            <MessageFooter>
              <MessageStatus>Read</MessageStatus>
            </MessageFooter>
          </MessageContent>
        </Message>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>c(()=>import(`./compose-DsMt83vc.js`),[]));var W=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Bubble } from "@kitora/ui/bubble"
import { Message, MessageAvatar, MessageContent, MessageGroup, MessageHeader } from "@kitora/ui/message"

interface Row {
  readonly id: string
  readonly text: string
  readonly time: string
  readonly at: string
}

const THEIRS: readonly Row[] = [
  { id: "m1", text: "Morning! Is the release still on for today?", time: "09:12", at: "2026-11-21T09:12:00Z" },
  { id: "m2", text: "QA signed off on the checkout flow last night.", time: "09:13", at: "2026-11-21T09:13:00Z" },
]

const MINE: readonly Row[] = [
  { id: "m3", text: "Yes, 14:00. I will post the notes once it is out.", time: "09:15", at: "2026-11-21T09:15:00Z" },
  { id: "m4", text: "Thanks for chasing QA 🙏", time: "09:15", at: "2026-11-21T09:15:30Z" },
]

export function MessageConversation() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-[13px]">
      <MessageGroup aria-label="Ana Ruiz" className="gap-1">
        {THEIRS.map((m, i) => (
          <Message key={m.id} first={i === 0} data-message-id={m.id}>
            <MessageAvatar time={m.at} timeLabel={m.time}>
              <Avatar>
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              {i === 0 ? <MessageHeader name="Ana Ruiz" time={m.at} timeLabel={m.time} /> : null}
              <Bubble>{m.text}</Bubble>
            </MessageContent>
          </Message>
        ))}
      </MessageGroup>
      <MessageGroup aria-label="You" className="gap-1">
        {MINE.map((m, i) => (
          <Message key={m.id} align="end" first={i === 0} data-message-id={m.id}>
            <MessageContent>
              {i === 0 ? <MessageHeader name="You" time={m.at} timeLabel={m.time} /> : null}
              <Bubble variant="tinted">{m.text}</Bubble>
            </MessageContent>
          </Message>
        ))}
      </MessageGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>c(()=>import(`./conversation-zLNAiWWO.js`),[]));var G=`import { useState } from "react"
import { Bubble } from "@kitora/ui/bubble"
import { Message, MessageContent, MessageFooter, MessageStatus, type MessageStatusValue } from "@kitora/ui/message"

export function MessageStatusDemo() {
  const [status, setStatus] = useState<MessageStatusValue>("failed")
  return (
    <div className="flex w-full max-w-md flex-col gap-4 text-[13px]">
      <Message align="end" status="sending">
        <MessageContent>
          <Bubble>Uploading the screenshots now</Bubble>
          <MessageFooter>
            <MessageStatus />
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end" status={status}>
        <MessageContent>
          <Bubble>Can you check the invoice total?</Bubble>
          <MessageFooter>
            <MessageStatus onRetry={() => setStatus("sent")}>Seen by Eli</MessageStatus>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message status="stopped">
        <MessageContent>
          <Bubble variant="ghost">The quarterly numbers show revenue up 12%, driven mostly by</Bubble>
          <MessageFooter>
            <MessageStatus />
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>c(()=>import(`./status-PPi9pLRd.js`),[]));var K={"./demos/message/actions.tsx":A,"./demos/message/compose.tsx":P,"./demos/message/conversation.tsx":I,"./demos/message/status.tsx":B},q={"./demos/message/actions.tsx":H,"./demos/message/compose.tsx":U,"./demos/message/conversation.tsx":W,"./demos/message/status.tsx":G};export{K as modules,q as sources};