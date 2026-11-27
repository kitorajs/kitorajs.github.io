import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{S as n,b as r,p as i,s as a}from"./chat-app-KjBTGNiM.js";import{Ec as o,Uc as s,zc as c}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as l}from"./example-B67lLz1F.js";import{t as u}from"./-kits.chat.shared-DwvlyqHM.js";import{t as d}from"./fake-adapter-CEXmALgX.js";import{a as f,l as p,n as m,o as h,r as g,u as _}from"./fixtures-Dj1vgtdl.js";var v=e(s(),1),y=c();function b(){let[e]=(0,v.useState)(()=>{let e=p();return n({adapter:d({users:h,channels:m,messages:e,reads:_(e),selfId:f,autoReply:!0,replies:[`Got it, thanks!`,`Will do 👍`,`Haha yes`,`Let me check my calendar`]}),selfId:f})});return(0,y.jsx)(r,{store:e,children:(0,y.jsx)(`div`,{className:`flex h-full min-h-0`,children:(0,y.jsx)(a,{channelId:`d-ana`})})})}var x=`import { useState } from "react"
import { ChannelView, ChatProvider, createChatStore, createFakeAdapter } from "@kitora/chat"
import { CHANNELS, SELF_ID, USERS, seedMessages, seedReads } from "./fixtures"

/** A one-to-one conversation: presence in the header, a "Seen" receipt under the message Ana last read. */
export function DirectMessageDemo() {
  const [store] = useState(() => {
    const messages = seedMessages()
    return createChatStore({ adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages, reads: seedReads(messages), selfId: SELF_ID, autoReply: true, replies: ["Got it, thanks!", "Will do 👍", "Haha yes", "Let me check my calendar"] }), selfId: SELF_ID })
  })
  return (
    <ChatProvider store={store}>
      <div className="flex h-full min-h-0">
        <ChannelView channelId="d-ana" />
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>o(()=>import(`./direct-message-D7L3zImi.js`),[]));function S(){let[e]=(0,v.useState)(()=>{let e=p();return n({adapter:d({users:h,channels:m,messages:e,reads:_(e),selfId:f,autoReply:!0}),selfId:f})}),[t,o]=(0,v.useState)(g);return(0,y.jsx)(r,{store:e,children:(0,y.jsxs)(`div`,{className:`@container relative flex h-full min-h-0`,children:[(0,y.jsx)(a,{channelId:`c-design`,onOpenThread:o}),t?(0,y.jsx)(i,{rootId:t,onClose:()=>o(null),className:`absolute inset-y-0 right-0 z-20 w-full shadow-xl @[700px]:static @[700px]:w-[340px] @[700px]:shadow-none`}):null]})})}var C=`import { useState } from "react"
import { ChannelView, ChatProvider, ThreadPanel, createChatStore, createFakeAdapter } from "@kitora/chat"
import { CHANNELS, DESIGN_THREAD_ID, SELF_ID, USERS, seedMessages, seedReads } from "./fixtures"

/** A channel with its thread panel open beside it; replies in the panel get answered too. */
export function ThreadsDemo() {
  const [store] = useState(() => {
    const messages = seedMessages()
    return createChatStore({ adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages, reads: seedReads(messages), selfId: SELF_ID, autoReply: true }), selfId: SELF_ID })
  })
  const [threadId, setThreadId] = useState<string | null>(DESIGN_THREAD_ID)
  return (
    <ChatProvider store={store}>
      {/* Below 700px the panel overlays the channel instead of squeezing it. */}
      <div className="@container relative flex h-full min-h-0">
        <ChannelView channelId="c-design" onOpenThread={setThreadId} />
        {threadId ? <ThreadPanel rootId={threadId} onClose={() => setThreadId(null)} className="absolute inset-y-0 right-0 z-20 w-full shadow-xl @[700px]:static @[700px]:w-[340px] @[700px]:shadow-none" /> : null}
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>o(()=>import(`./threads-czCU2vBi.js`),[]));function w(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Threads and direct messages`,children:`Replies live beside the channel, not in it: the root shows a summary with participants and the last reply time. Escape closes the panel.`}),(0,y.jsx)(l,{n:1,title:`A thread panel`,blurb:"`ChannelView` + `ThreadPanel`. Reply in the panel and a teammate answers in the thread; the root's summary updates. The replies follow new answers while you are at the bottom, with Jump to latest reply when you have scrolled up.",code:C,children:(0,y.jsx)(u,{testId:`threads`,height:560,children:(0,y.jsx)(S,{})})}),(0,y.jsx)(l,{n:2,title:`A direct message`,blurb:`Presence in the header; the Seen receipt sits under the newest message the other person has read and moves when they read more.`,code:x,children:(0,y.jsx)(u,{testId:`dm`,height:420,children:(0,y.jsx)(b,{})})})]})}export{w as component};