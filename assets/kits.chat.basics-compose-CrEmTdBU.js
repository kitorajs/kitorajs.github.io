import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{S as n,a as r,b as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,r as f,s as p,t as m,u as h}from"./chat-app-C9npUi70.js";import{Bc as g,Cc as _,Ic as v}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as y}from"./example-B8EaWveR.js";import{i as b,o as x,t as S}from"./-kits.chat.shared-0M2sSyep.js";import{t as C}from"./fake-adapter-I3yoEmyk.js";var w=e(g(),1),T=v(),E=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#db2777`,presence:`online`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`,presence:`away`}],D=[{id:`launch`,name:`launch`,kind:`channel`,topic:`Ship it Thursday`,memberIds:[`me`,`ana`,`ben`]},{id:`design`,name:`design`,kind:`private`,memberIds:[`me`,`ana`]},{id:`dm-ana`,name:``,kind:`dm`,memberIds:[`me`,`ana`]}],O=Date.now(),k=[{id:`l1`,channelId:`launch`,authorId:`ana`,text:`Release notes are *drafted*. Can someone check the screenshots?`,createdAt:O-40*6e4},{id:`l2`,channelId:`launch`,authorId:`ben`,text:`On it`,createdAt:O-38*6e4,parentId:`l1`},{id:`l3`,channelId:`launch`,authorId:`ben`,text:`@you the build is green 🎉`,createdAt:O-12*6e4},{id:`d1`,channelId:`design`,authorId:`ana`,text:`New icons are in Figma`,createdAt:O-90*6e4}];function A(){let[e]=(0,w.useState)(()=>n({selfId:`me`,adapter:C({users:E,channels:D,messages:k,selfId:`me`,autoReply:!0})})),[t,r]=(0,w.useState)(`launch`),[o,s]=(0,w.useState)(null);return(0,T.jsx)(i,{store:e,children:(0,T.jsx)(a.Root,{channelId:t,onChannelChange:r,threadId:o,onThreadChange:s,children:(0,T.jsx)(a.Layout,{sidebar:(0,T.jsx)(a.Sidebar,{header:(0,T.jsx)(a.WorkspaceHeader,{name:`Launch crew`}),children:(0,T.jsx)(a.ChannelList,{sections:[{label:`Rooms`,kinds:[`channel`,`private`]},{label:`People`,kinds:[`dm`]}]})}),children:(0,T.jsxs)(`div`,{className:`flex h-full min-w-0 flex-1 flex-col`,children:[(0,T.jsxs)(a.ChannelRoot,{children:[(0,T.jsx)(a.ChannelHeader,{actions:(0,T.jsx)(`button`,{type:`button`,onClick:()=>s(`l1`),className:`h-6 rounded-md border px-2 text-xs hover:bg-muted`,children:`Open thread`})}),(0,T.jsx)(a.Messages,{}),(0,T.jsxs)(a.Footer,{children:[(0,T.jsx)(a.Typing,{}),(0,T.jsx)(a.Composer,{placeholder:`Write to the room…`})]})]}),(0,T.jsx)(a.Thread,{className:`h-48 w-full border-t border-l-0`})]})})})})}var j=`import { useState } from "react"
import { Chat, ChatProvider, createChatStore, createFakeAdapter, type Channel, type ChatUser, type Message } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#db2777", presence: "online" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2", presence: "away" },
]
const CHANNELS: readonly Channel[] = [
  { id: "launch", name: "launch", kind: "channel", topic: "Ship it Thursday", memberIds: ["me", "ana", "ben"] },
  { id: "design", name: "design", kind: "private", memberIds: ["me", "ana"] },
  { id: "dm-ana", name: "", kind: "dm", memberIds: ["me", "ana"] },
]
const now = Date.now()
const MESSAGES: readonly Message[] = [
  { id: "l1", channelId: "launch", authorId: "ana", text: "Release notes are *drafted*. Can someone check the screenshots?", createdAt: now - 40 * 60_000 },
  { id: "l2", channelId: "launch", authorId: "ben", text: "On it", createdAt: now - 38 * 60_000, parentId: "l1" },
  { id: "l3", channelId: "launch", authorId: "ben", text: "@you the build is green 🎉", createdAt: now - 12 * 60_000 },
  { id: "d1", channelId: "design", authorId: "ana", text: "New icons are in Figma", createdAt: now - 90 * 60_000 },
]

/**
 * \`ChatApp\` rebuilt from its public parts, with the layout changed: the thread opens as a strip
 * under the channel instead of in the layout's side slot, the list has its own sections, and the
 * header gets its own action. \`Chat.Root\` holds the open channel and thread (both controlled
 * here), and every part below reads them.
 */
export function ComposeYourOwn() {
  const [store] = useState(() => createChatStore({ selfId: "me", adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages: MESSAGES, selfId: "me", autoReply: true }) }))
  const [channelId, setChannelId] = useState("launch")
  const [threadId, setThreadId] = useState<string | null>(null)
  return (
    <ChatProvider store={store}>
      <Chat.Root channelId={channelId} onChannelChange={setChannelId} threadId={threadId} onThreadChange={setThreadId}>
        <Chat.Layout
          sidebar={
            <Chat.Sidebar header={<Chat.WorkspaceHeader name="Launch crew" />}>
              <Chat.ChannelList
                sections={[
                  { label: "Rooms", kinds: ["channel", "private"] },
                  { label: "People", kinds: ["dm"] },
                ]}
              />
            </Chat.Sidebar>
          }
        >
          <div className="flex h-full min-w-0 flex-1 flex-col">
            <Chat.ChannelRoot>
              <Chat.ChannelHeader
                actions={
                  <button type="button" onClick={() => setThreadId("l1")} className="h-6 rounded-md border px-2 text-xs hover:bg-muted">
                    Open thread
                  </button>
                }
              />
              <Chat.Messages />
              <Chat.Footer>
                <Chat.Typing />
                <Chat.Composer placeholder="Write to the room…" />
              </Chat.Footer>
            </Chat.ChannelRoot>
            <Chat.Thread className="h-48 w-full border-t border-l-0" />
          </div>
        </Chat.Layout>
      </Chat.Root>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>_(()=>import(`./compose-your-own-Bnq9JyI8.js`),[]));var M=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`lia`,name:`Lia Moreau`,handle:`lia`,color:`#ea580c`,presence:`online`}],N=[{id:`general`,name:`general`,kind:`channel`,topic:`Say hi`,memberIds:[`me`,`lia`]},{id:`dm-lia`,name:``,kind:`dm`,memberIds:[`me`,`lia`]}],P=[{id:`g1`,channelId:`general`,authorId:`lia`,text:`Morning all ☕`,createdAt:Date.now()-15*6e4}];function F(){let[e]=(0,w.useState)(()=>n({selfId:`me`,adapter:C({users:M,channels:N,messages:P,selfId:`me`,autoReply:!0})}));return(0,T.jsx)(i,{store:e,children:(0,T.jsx)(o,{defaultChannelId:`general`,children:(0,T.jsx)(h,{sidebar:(0,T.jsx)(s,{header:(0,T.jsx)(l,{name:`Studio`}),children:(0,T.jsx)(c,{})}),children:(0,T.jsxs)(d,{children:[(0,T.jsx)(f,{}),(0,T.jsx)(r,{}),(0,T.jsx)(u,{children:(0,T.jsx)(m,{placeholder:`Message the room…`})})]})})})})}var I=`import { useState } from "react"
import { ChannelComposer, ChannelFooter, ChannelHeader, ChannelList, ChannelMessages, ChannelRoot, ChatLayout, ChatProvider, ChatRoot, ChatSidebar, WorkspaceHeader, createChatStore, createFakeAdapter, type Channel, type ChatUser, type Message } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "lia", name: "Lia Moreau", handle: "lia", color: "#ea580c", presence: "online" },
]
const CHANNELS: readonly Channel[] = [
  { id: "general", name: "general", kind: "channel", topic: "Say hi", memberIds: ["me", "lia"] },
  { id: "dm-lia", name: "", kind: "dm", memberIds: ["me", "lia"] },
]
const MESSAGES: readonly Message[] = [{ id: "g1", channelId: "general", authorId: "lia", text: "Morning all ☕", createdAt: Date.now() - 15 * 60_000 }]

/** The same parts \`Chat.*\` names, imported by their own names: \`ChatRoot\`, \`WorkspaceHeader\`, \`ChannelList\`, \`ChannelRoot\`, \`ChannelHeader\` and the rest. */
export function BasicNamedParts() {
  const [store] = useState(() => createChatStore({ selfId: "me", adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages: MESSAGES, selfId: "me", autoReply: true }) }))
  return (
    <ChatProvider store={store}>
      <ChatRoot defaultChannelId="general">
        <ChatLayout
          sidebar={
            <ChatSidebar header={<WorkspaceHeader name="Studio" />}>
              <ChannelList />
            </ChatSidebar>
          }
        >
          <ChannelRoot>
            <ChannelHeader />
            <ChannelMessages />
            <ChannelFooter>
              <ChannelComposer placeholder="Message the room…" />
            </ChannelFooter>
          </ChannelRoot>
        </ChatLayout>
      </ChatRoot>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>_(()=>import(`./named-parts-DtLOJXHR.js`),[]));var L=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`kim`,name:`Kim Tan`,handle:`kim`,color:`#16a34a`,presence:`online`}],R=[{id:`ops`,name:`ops`,kind:`channel`,memberIds:[`me`,`kim`]}],z=/\b[A-Z]{2,5}-\d+\b/g,B={time:e=>new Date(e).toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),day:e=>new Date(e).toISOString().slice(0,10)};function V(e){let t=[...new Set(e.text.match(z)??[])];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(x,{...e}),t.map(e=>(0,T.jsx)(`a`,{href:`#${e}`,className:`ml-1.5 inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[11px] text-foreground no-underline hover:bg-muted/70`,children:e},e))]})}function H(){let[e]=(0,w.useState)(()=>n({selfId:`me`,adapter:C({users:L,channels:R,selfId:`me`,messages:[{id:`o1`,channelId:`ops`,authorId:`kim`,text:`OPS-42 is fixed, *OPS-43* still flaky`,createdAt:Date.now()-5*6e4}]})}));return(0,T.jsx)(i,{store:e,formatters:B,children:(0,T.jsx)(b,{renderers:{text:V},children:(0,T.jsx)(`div`,{className:`flex h-full min-h-0`,children:(0,T.jsx)(p,{channelId:`ops`})})})})}var U=`import { useState, type ReactNode } from "react"
import { ChatProvider, ChatRenderersProvider, ChannelView, MessageText, createChatStore, createFakeAdapter, type Channel, type ChatFormatters, type ChatUser, type TextRenderProps } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "kim", name: "Kim Tan", handle: "kim", color: "#16a34a", presence: "online" },
]
const CHANNELS: readonly Channel[] = [{ id: "ops", name: "ops", kind: "channel", memberIds: ["me", "kim"] }]
const ISSUE = /\\b[A-Z]{2,5}-\\d+\\b/g

/** Formatters are a seam: here a 24-hour clock with seconds and ISO day headings. */
const FORMATTERS: Partial<ChatFormatters> = {
  time: (ms) => new Date(ms).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
  day: (dayStart) => new Date(dayStart).toISOString().slice(0, 10),
}

/** A text renderer is a seam too: our markup first, then a chip for every issue key it mentions. */
function renderText(props: TextRenderProps): ReactNode {
  const issues = [...new Set(props.text.match(ISSUE) ?? [])]
  return (
    <>
      <MessageText {...props} />
      {issues.map((key) => (
        <a key={key} href={\`#\${key}\`} className="ml-1.5 inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[11px] text-foreground no-underline hover:bg-muted/70">
          {key}
        </a>
      ))}
    </>
  )
}

/** The same \`ChannelView\`, with the host's label formatters and text renderer plugged in. */
export function CustomFormatters() {
  const [store] = useState(() =>
    createChatStore({
      selfId: "me",
      adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, selfId: "me", messages: [{ id: "o1", channelId: "ops", authorId: "kim", text: "OPS-42 is fixed, *OPS-43* still flaky", createdAt: Date.now() - 5 * 60_000 }] }),
    }),
  )
  return (
    <ChatProvider store={store} formatters={FORMATTERS}>
      <ChatRenderersProvider renderers={{ text: renderText }}>
        <div className="flex h-full min-h-0">
          <ChannelView channelId="ops" />
        </div>
      </ChatRenderersProvider>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>_(()=>import(`./custom-formatters-wW81YkUi.js`),[]));function W(){return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(t,{title:`Basics: compose your own`,children:"`ChatApp` and `ChannelView` are presets made only of public parts (`Chat.Root`, `Chat.ChannelList`, `Chat.ChannelRoot`, `Chat.ChannelHeader`, `Chat.Messages`, `Chat.Footer`, `Chat.Typing`, `Chat.Composer`, `Chat.Thread`). Rearrange them, or swap a seam: transport (`ChatAdapter`), labels (`ChatFormatters`), text drawing (`ChatRenderers`)."}),(0,T.jsx)(y,{n:1,title:`Rebuild the preset`,blurb:`The thread opens as a strip under the channel, the list has its own sections, the header its own action. Open channel and thread are controlled by the demo.`,code:j,children:(0,T.jsx)(S,{testId:`basic-compose`,height:460,children:(0,T.jsx)(A,{})})}),(0,T.jsx)(y,{n:2,title:`Your formatters and text renderer`,blurb:"`ChatProvider formatters` swaps the clock and the day headings; `ChatRenderersProvider` draws message text, here adding a chip per issue key.",code:U,children:(0,T.jsx)(S,{testId:`basic-formatters`,height:260,children:(0,T.jsx)(H,{})})}),(0,T.jsx)(y,{n:3,title:`The parts by their own names`,blurb:"`ChatRoot`, `ChatLayout`, `ChatSidebar`, `WorkspaceHeader`, `ChannelList`, `ChannelRoot`, `ChannelHeader`, `ChannelMessages`, `ChannelFooter` and `ChannelComposer`: the same parts `Chat.*` names, imported one by one.",code:I,children:(0,T.jsx)(S,{testId:`basic-named-parts`,height:400,children:(0,T.jsx)(F,{})})})]})}export{W as component};