import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{C as n,S as r,b as i,s as a}from"./chat-app-BeuGIKKx.js";import{Bc as o,Cc as s,Ic as c}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";import{t as u}from"./-kits.chat.shared--tJW3dQS.js";import{n as d,o as f}from"./fixtures-DW555mY5.js";var p=e(o(),1),m=c();function h(){let e=[],t=[],r=new Set,i=e=>{for(let t of r)t(e)},a=t=>{e=e.some(e=>e.id===t.id)?e.map(e=>e.id===t.id?t:e):[...e,t],i({type:`message`,message:t})},o=(t,n)=>{let r=e.find(e=>e.id===t);r&&a(n(r))};return{adapter(){return{connect(n){return r.add(n),queueMicrotask(()=>n({type:`snapshot`,users:f,channels:d,messages:e,reads:t})),()=>r.delete(n)},send:async e=>a(e),edit:async(e,t)=>o(e,e=>({...e,text:t,editedAt:Date.now()})),remove:async e=>o(e,e=>({...e,text:``,deletedAt:Date.now()})),react:async(e,t,r)=>o(e,e=>({...e,reactions:n(e.reactions,t,r)})),typing:(e,t,n)=>i({type:`typing`,channelId:e,userId:t,typing:n}),markRead(e){t=[...t.filter(t=>!(t.userId===e.userId&&t.channelId===e.channelId)),e],i({type:`read`,read:e})}}}}}function g(){let[e]=(0,p.useState)(()=>{let e=h();return[r({adapter:e.adapter(),selfId:`u-me`}),r({adapter:e.adapter(),selfId:`u-ana`})]});return(0,m.jsx)(`div`,{className:`grid h-full min-h-0 grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0`,children:e.map(e=>(0,m.jsxs)(`div`,{className:`flex min-h-0 flex-col`,children:[(0,m.jsxs)(`div`,{className:`border-b bg-surface-1 px-4 py-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase`,children:[`Signed in as `,f.find(t=>t.id===e.getState().selfId)?.name]}),(0,m.jsx)(i,{store:e,children:(0,m.jsx)(`div`,{className:`flex min-h-0 flex-1`,children:(0,m.jsx)(a,{channelId:`d-ana`})})})]},e.getState().selfId))})}var _=`import { useState } from "react"
import { ChannelView, ChatProvider, createChatStore, toggleReaction, type ChatAdapter, type ChatEvent, type Message, type ReadState } from "@kitora/chat"
import { CHANNELS, USERS } from "./fixtures"

/**
 * A custom \`ChatAdapter\`: a tiny in-page "server" that fans every change out to all connected
 * clients. Swap this hub for a websocket or SSE client and nothing above the adapter changes.
 */
function createHub() {
  let messages: Message[] = []
  let reads: ReadState[] = []
  const clients = new Set<(e: ChatEvent) => void>()
  const broadcast = (e: ChatEvent) => {
    for (const c of clients) c(e)
  }
  const put = (m: Message) => {
    messages = messages.some((x) => x.id === m.id) ? messages.map((x) => (x.id === m.id ? m : x)) : [...messages, m]
    broadcast({ type: "message", message: m })
  }
  const update = (id: string, fn: (m: Message) => Message) => {
    const m = messages.find((x) => x.id === id)
    if (m) put(fn(m))
  }
  return {
    adapter(): ChatAdapter {
      return {
        connect(listener) {
          clients.add(listener)
          queueMicrotask(() => listener({ type: "snapshot", users: USERS, channels: CHANNELS, messages, reads }))
          return () => clients.delete(listener)
        },
        send: async (m) => put(m),
        edit: async (id, text) => update(id, (m) => ({ ...m, text, editedAt: Date.now() })),
        remove: async (id) => update(id, (m) => ({ ...m, text: "", deletedAt: Date.now() })),
        react: async (id, emoji, userId) => update(id, (m) => ({ ...m, reactions: toggleReaction(m.reactions, emoji, userId) })),
        typing: (channelId, userId, typing) => broadcast({ type: "typing", channelId, userId, typing }),
        markRead(read) {
          reads = [...reads.filter((r) => !(r.userId === read.userId && r.channelId === read.channelId)), read]
          broadcast({ type: "read", read })
        },
      }
    },
  }
}

/** Two people, two stores, one hub: type on one side and watch typing, messages, reactions and "Seen" arrive on the other. */
export function TwoClientsDemo() {
  const [stores] = useState(() => {
    const hub = createHub()
    return [createChatStore({ adapter: hub.adapter(), selfId: "u-me" }), createChatStore({ adapter: hub.adapter(), selfId: "u-ana" })] as const
  })
  return (
    <div className="grid h-full min-h-0 grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
      {stores.map((store) => (
        <div key={store.getState().selfId} className="flex min-h-0 flex-col">
          <div className="border-b bg-surface-1 px-4 py-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Signed in as {USERS.find((u) => u.id === store.getState().selfId)?.name}</div>
          <ChatProvider store={store}>
            <div className="flex min-h-0 flex-1">
              <ChannelView channelId="d-ana" />
            </div>
          </ChatProvider>
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>s(()=>import(`./two-clients-DH6lot3j.js`),[]));function v(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Adapters`,children:"The store talks to a transport only through `ChatAdapter`: commands go out as calls, every change comes back as an event, including the echo of your own. Implement it over a websocket, SSE, Firebase or Liveblocks and the UI does not change."}),(0,m.jsx)(l,{n:1,title:`Two clients, one hub`,blurb:`Each side is its own store with its own signed-in user. Type on the left: the right sees typing, then the message, then you see Seen. React or edit on either side.`,code:_,children:(0,m.jsx)(u,{testId:`two-clients`,height:460,children:(0,m.jsx)(g,{})})})]})}export{v as component};