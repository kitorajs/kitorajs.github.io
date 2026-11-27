import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./emoji-picker-BLiVaXOe.js";import{C as r,S as i,_ as a,b as o,g as s,h as ee,s as te,v as c,x as l,y as u}from"./chat-app-KjBTGNiM.js";import{Ec as d,Uc as f,zc as p}from"./index-BZuUy872.js";import{o as ne}from"./people-BirwDKzw.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";import{S as h,b as g,c as _,l as v,n as y,o as b,r as x,s as re,t as S,u as C}from"./-kits.chat.shared-DwvlyqHM.js";import{t as w}from"./fake-adapter-CEXmALgX.js";import{t as T}from"./composer-CBRIMMCd.js";var E=e(f(),1),D=p(),O=[{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`},{id:`chen`,name:`Chen Wei`,handle:`chen`,color:`#16a34a`}];function k(){let[e,t]=(0,E.useState)([]);return(0,D.jsxs)(`div`,{className:`flex h-full flex-col justify-end gap-2 p-3`,children:[(0,D.jsx)(`ul`,{className:`min-h-0 flex-1 space-y-1 overflow-y-auto font-mono text-xs text-muted-foreground`,children:e.length===0?(0,D.jsx)(`li`,{children:`Sent drafts appear here as raw markup.`}):e.map((e,t)=>(0,D.jsxs)(`li`,{children:[`→ `,e]},t))}),(0,D.jsx)(T,{users:O,placeholder:"Try *bold*, `code` or @ana",onSend:(e,n)=>t(t=>[...t,n.length?`${e} [+${n.length} file]`:e])})]})}var A=`import { useState } from "react"
import { Composer, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2" },
  { id: "chen", name: "Chen Wei", handle: "chen", color: "#16a34a" },
]

/** The composer on its own: Enter sends, Shift+Enter breaks a line, ⌘B / ⌘I / ⌘E format, @ mentions, the clip attaches. */
export function BasicComposer() {
  const [sent, setSent] = useState<readonly string[]>([])
  return (
    <div className="flex h-full flex-col justify-end gap-2 p-3">
      <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto font-mono text-xs text-muted-foreground">
        {sent.length === 0 ? <li>Sent drafts appear here as raw markup.</li> : sent.map((t, i) => <li key={i}>→ {t}</li>)}
      </ul>
      <Composer users={USERS} placeholder="Try *bold*, \`code\` or @ana" onSend={(text, files) => setSent((s) => [...s, files.length ? \`\${text} [+\${files.length} file]\` : text])} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>d(()=>import(`./composer-D6oq_kkU.js`),[]));var j=[{id:`me`,name:`You`,handle:`you`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`}],M="Ship *dark mode* today? _Only_ if `pnpm test` is green ~and docs~ — @ana @you see https://example.com/pr/42";function N(){let[e,t]=(0,E.useState)({"👍":[`ana`],"🎉":[`ana`,`me`]});return(0,D.jsxs)(`div`,{className:`p-4 text-[13px] leading-5`,children:[(0,D.jsx)(b,{text:M,users:j,selfId:`me`}),(0,D.jsx)(re,{reactions:e,selfId:`me`,users:j,onToggle:e=>t(t=>r(t,e,`me`))})]})}var P=`import { useState } from "react"
import { MessageText, ReactionBar, toggleReaction, type ChatUser, type Reactions } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you" },
  { id: "ana", name: "Ana Ruiz", handle: "ana" },
]
const TEXT = "Ship *dark mode* today? _Only_ if \`pnpm test\` is green ~and docs~ — @ana @you see https://example.com/pr/42"

/** Markup renders as elements (never HTML): bold, italic, strike, code, links, and mentions (yours highlighted). Click a pill to toggle your reaction. */
export function BasicMarkup() {
  const [reactions, setReactions] = useState<Reactions>({ "👍": ["ana"], "🎉": ["ana", "me"] })
  return (
    <div className="p-4 text-[13px] leading-5">
      <MessageText text={TEXT} users={USERS} selfId="me" />
      <ReactionBar reactions={reactions} selfId="me" users={USERS} onToggle={(e) => setReactions((r) => toggleReaction(r, e, "me"))} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./markup-CTPJoyLG.js`),[]));var F=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`kim`,name:`Kim Tan`,handle:`kim`,color:`#16a34a`,presence:`online`}],I=[{id:`list`,name:`list`,kind:`channel`,memberIds:[`me`,`kim`]}],L=Date.now(),R=[{id:`k1`,channelId:`list`,authorId:`kim`,text:`Deploy window is *3pm*`,createdAt:L-30*6e4},{id:`k2`,channelId:`list`,authorId:`me`,text:`Works for me`,createdAt:L-20*6e4},{id:`k3`,channelId:`list`,authorId:`kim`,text:`Logs are here`,createdAt:L-18*6e4,parentId:`k1`}];function ie(){let[e]=(0,E.useState)(()=>i({selfId:`me`,adapter:w({users:F,channels:I,messages:R,selfId:`me`})})),[t,n]=(0,E.useState)(null);return(0,D.jsx)(o,{store:e,children:(0,D.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[(0,D.jsx)(a,{channelId:`list`,onOpenThread:n,empty:(0,D.jsx)(`p`,{className:`p-4 text-xs text-muted-foreground`,children:`No messages yet`})}),(0,D.jsx)(`p`,{className:`border-t px-4 py-1 text-xs text-muted-foreground`,children:t?`Thread ${t} asked to open`:`Hover a message for its actions`})]})})}var z=`import { useState } from "react"
import { ChatProvider, MessageList, createChatStore, createFakeAdapter, type Channel, type ChatUser, type Message } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "kim", name: "Kim Tan", handle: "kim", color: "#16a34a", presence: "online" },
]
const CHANNELS: readonly Channel[] = [{ id: "list", name: "list", kind: "channel", memberIds: ["me", "kim"] }]
const now = Date.now()
const MESSAGES: readonly Message[] = [
  { id: "k1", channelId: "list", authorId: "kim", text: "Deploy window is *3pm*", createdAt: now - 30 * 60_000 },
  { id: "k2", channelId: "list", authorId: "me", text: "Works for me", createdAt: now - 20 * 60_000 },
  { id: "k3", channelId: "list", authorId: "kim", text: "Logs are here", createdAt: now - 18 * 60_000, parentId: "k1" },
]

/** \`MessageList\` on its own: day dividers, groups, hover actions, inline edit and thread summaries, with no header or composer around it. */
export function BasicMessageList() {
  const [store] = useState(() => createChatStore({ selfId: "me", adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages: MESSAGES, selfId: "me" }) }))
  const [thread, setThread] = useState<string | null>(null)
  return (
    <ChatProvider store={store}>
      <div className="flex h-full min-h-0 flex-col">
        <MessageList channelId="list" onOpenThread={setThread} empty={<p className="p-4 text-xs text-muted-foreground">No messages yet</p>} />
        <p className="border-t px-4 py-1 text-xs text-muted-foreground">{thread ? \`Thread \${thread} asked to open\` : "Hover a message for its actions"}</p>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>d(()=>import(`./message-list-B-SlAmbd.js`),[]));var B=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#db2777`,presence:`online`}],V=[{id:`rows`,name:`rows`,kind:`channel`,memberIds:[`me`,`ana`]}],H=36e5,U=Date.now(),W=[{id:`r1`,channelId:`rows`,authorId:`ana`,text:`Yesterday's standup notes are up`,createdAt:U-26*H},{id:`r2`,channelId:`rows`,authorId:`ana`,text:`Can someone review the copy?`,createdAt:U-2*H},{id:`r3`,channelId:`rows`,authorId:`me`,text:`Looking now`,createdAt:U-H,parentId:`r2`}];function G(){let{messages:e,users:t}=l(),n=(0,E.useMemo)(()=>g(e.filter(e=>e.channelId===`rows`&&e.parentId===void 0).toSorted((e,t)=>e.createdAt-t.createdAt)),[e]),[r,i]=(0,E.useState)(null);return(0,D.jsxs)(`div`,{className:`h-full overflow-y-auto pb-2`,children:[(0,D.jsx)(c,{items:n,renderDay:e=>(0,D.jsx)(ee,{dayStart:e}),renderMessage:(n,r)=>{let a=h(e,n.id);return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(s,{message:n,first:r,inThread:!0}),a.replies.length>0?(0,D.jsx)(`div`,{className:`pl-[58px]`,children:(0,D.jsx)(u,{thread:a,users:t,onOpen:()=>i(n.id)})}):null]},n.id)}}),r?(0,D.jsxs)(`p`,{className:`px-4 pt-1 text-xs text-muted-foreground`,children:[`Opened thread `,r]}):null]})}function K(){let[e]=(0,E.useState)(()=>i({selfId:`me`,adapter:w({users:B,channels:V,messages:W,selfId:`me`})}));return(0,D.jsx)(o,{store:e,children:(0,D.jsx)(G,{})})}var q=`import { useMemo, useState } from "react"
import { ChatProvider, DayDivider, MessageItem, ThreadSummary, MessageTimeline, buildTimeline, createChatStore, createFakeAdapter, threadOf, useChatState, type Channel, type ChatUser, type Message } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#db2777", presence: "online" },
]
const CHANNELS: readonly Channel[] = [{ id: "rows", name: "rows", kind: "channel", memberIds: ["me", "ana"] }]
const HOUR = 3_600_000
const now = Date.now()
const MESSAGES: readonly Message[] = [
  { id: "r1", channelId: "rows", authorId: "ana", text: "Yesterday's standup notes are up", createdAt: now - 26 * HOUR },
  { id: "r2", channelId: "rows", authorId: "ana", text: "Can someone review the copy?", createdAt: now - 2 * HOUR },
  { id: "r3", channelId: "rows", authorId: "me", text: "Looking now", createdAt: now - HOUR, parentId: "r2" },
]

/** The rows a channel draws, from parts: \`MessageTimeline\` groups by day and author, \`DayDivider\` heads each day, \`MessageItem\` is one row, \`ThreadSummary\` sits under a thread root. */
function Rows() {
  const { messages, users } = useChatState()
  const timeline = useMemo(() => buildTimeline(messages.filter((m) => m.channelId === "rows" && m.parentId === undefined).toSorted((a, b) => a.createdAt - b.createdAt)), [messages])
  const [opened, setOpened] = useState<string | null>(null)
  return (
    <div className="h-full overflow-y-auto pb-2">
      <MessageTimeline
        items={timeline}
        renderDay={(dayStart) => <DayDivider dayStart={dayStart} />}
        renderMessage={(m, first) => {
          const thread = threadOf(messages, m.id)
          return (
            <div key={m.id}>
              <MessageItem message={m} first={first} inThread />
              {thread.replies.length > 0 ? (
                <div className="pl-[58px]">
                  <ThreadSummary thread={thread} users={users} onOpen={() => setOpened(m.id)} />
                </div>
              ) : null}
            </div>
          )
        }}
      />
      {opened ? <p className="px-4 pt-1 text-xs text-muted-foreground">Opened thread {opened}</p> : null}
    </div>
  )
}

/** A store over a fake adapter, so \`MessageItem\` can react, edit and delete. */
export function BasicMessageRows() {
  const [store] = useState(() => createChatStore({ selfId: "me", adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, messages: MESSAGES, selfId: "me" }) }))
  return (
    <ChatProvider store={store}>
      <Rows />
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>d(()=>import(`./message-rows-1JYzRzTi.js`),[]));var J=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#db2777`,presence:`away`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`,presence:`offline`}],Y=[{id:`a1`,name:`release-notes.pdf`,size:182400,mime:`application/pdf`},{id:`a2`,name:`screenshot.png`,size:54210,mime:`image/png`}];function ae(){let[e,t]=(0,E.useState)(`👍`),[r,i]=(0,E.useState)(Y);return(0,D.jsxs)(`div`,{className:`flex flex-col gap-3 p-4 text-[13px]`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-3`,children:[J.map(e=>(0,D.jsx)(x,{user:e,size:28,presence:!0},e.id)),(0,D.jsxs)(`span`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[(0,D.jsx)(ne,{presence:`away`,className:`size-2.5`}),` away`]})]}),(0,D.jsx)(`p`,{children:(0,D.jsx)(_,{text:"Thanks *@ana*, the `build` is green",users:J,selfId:`me`})}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsx)(n,{onPick:t,label:`Pick an emoji`}),(0,D.jsxs)(`span`,{children:[`Picked `,(0,D.jsx)(`span`,{className:`text-base`,children:e})]})]}),(0,D.jsx)(y,{attachments:r,onRemove:e=>i(t=>t.filter(t=>t.id!==e))})]})}var X=`import { useState } from "react"
import { PresenceDot } from "@kitora/display"
import { AttachmentList, RenderedText, ChatAvatar, type Attachment, type ChatUser } from "@kitora/chat"
import { EmojiPicker } from "@kitora/pickers"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#db2777", presence: "away" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2", presence: "offline" },
]
const FILES: readonly Attachment[] = [
  { id: "a1", name: "release-notes.pdf", size: 182_400, mime: "application/pdf" },
  { id: "a2", name: "screenshot.png", size: 54_210, mime: "image/png" },
]

/** The small parts on plain props: avatars with presence, a bare presence dot, rendered markup, the emoji picker (from \`@kitora/pickers\`), and an attachment list with remove. */
export function BasicPeopleParts() {
  const [picked, setPicked] = useState("👍")
  const [files, setFiles] = useState(FILES)
  return (
    <div className="flex flex-col gap-3 p-4 text-[13px]">
      <div className="flex items-center gap-3">
        {USERS.map((u) => (
          <ChatAvatar key={u.id} user={u} size={28} presence />
        ))}
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <PresenceDot presence="away" className="size-2.5" /> away
        </span>
      </div>
      <p>
        <RenderedText text="Thanks *@ana*, the \`build\` is green" users={USERS} selfId="me" />
      </p>
      <div className="flex items-center gap-2">
        <EmojiPicker onPick={setPicked} label="Pick an emoji" />
        <span>
          Picked <span className="text-base">{picked}</span>
        </span>
      </div>
      <AttachmentList attachments={files} onRemove={(id) => setFiles((f) => f.filter((a) => a.id !== id))} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>d(()=>import(`./people-parts-C5cXLfCW.js`),[]));var oe=[{id:`me`,name:`You`,handle:`you`,color:`#4f46e5`,presence:`online`},{id:`sam`,name:`Sam Lee`,handle:`sam`,color:`#0891b2`,presence:`online`}],se=[{id:`hello`,name:`hello`,kind:`channel`,memberIds:[`me`,`sam`]}];function ce(){let[e]=(0,E.useState)(()=>i({selfId:`me`,adapter:w({users:oe,channels:se,selfId:`me`,autoReply:!0,messages:[{id:`m1`,channelId:`hello`,authorId:`sam`,text:`Hey! Send me a message 👋`,createdAt:Date.now()-6e4}]})}));return(0,D.jsx)(o,{store:e,children:(0,D.jsx)(`div`,{className:`flex h-full min-h-0`,children:(0,D.jsx)(te,{channelId:`hello`})})})}var Z=`import { useState } from "react"
import { ChannelView, ChatProvider, createChatStore, createFakeAdapter, type Channel, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "me", name: "You", handle: "you", color: "#4f46e5", presence: "online" },
  { id: "sam", name: "Sam Lee", handle: "sam", color: "#0891b2", presence: "online" },
]
const CHANNELS: readonly Channel[] = [{ id: "hello", name: "hello", kind: "channel", memberIds: ["me", "sam"] }]

/** The smallest chat: a fake adapter, a store, a provider and one channel view. Sam answers. */
export function BasicSmallestChat() {
  const [store] = useState(() =>
    createChatStore({
      selfId: "me",
      adapter: createFakeAdapter({ users: USERS, channels: CHANNELS, selfId: "me", autoReply: true, messages: [{ id: "m1", channelId: "hello", authorId: "sam", text: "Hey! Send me a message 👋", createdAt: Date.now() - 60_000 }] }),
    }),
  )
  return (
    <ChatProvider store={store}>
      <div className="flex h-full min-h-0">
        <ChannelView channelId="hello" />
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>d(()=>import(`./smallest-chat-BEV1U_tm.js`),[]));var Q=[{id:`ana`,name:`Ana Ruiz`,handle:`ana`,color:`#e11d48`},{id:`ben`,name:`Ben Okafor`,handle:`ben`,color:`#0891b2`},{id:`chen`,name:`Chen Wei`,handle:`chen`,color:`#16a34a`}];function le(){let[e,t]=(0,E.useState)(1);return(0,D.jsxs)(`div`,{className:`space-y-3 p-4 text-[13px]`,children:[(0,D.jsx)(`div`,{className:`flex items-center gap-1`,children:[0,1,2,3].map(n=>(0,D.jsxs)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`h-6 rounded border px-2 text-xs tabular-nums aria-pressed:bg-foreground aria-pressed:text-background`,children:[n,` typing`]},n))}),(0,D.jsx)(C,{userIds:Q.slice(0,e).map(e=>e.id),users:Q}),(0,D.jsxs)(`div`,{className:`max-w-sm rounded-md border bg-card p-2`,children:[(0,D.jsx)(`p`,{children:`Deploy is done, closing the ticket.`}),(0,D.jsx)(v,{userIds:[`ana`,`ben`,`chen`],users:Q})]})]})}var $=`import { useState } from "react"
import { SeenReceipts, TypingIndicator, type ChatUser } from "@kitora/chat"

const USERS: readonly ChatUser[] = [
  { id: "ana", name: "Ana Ruiz", handle: "ana", color: "#e11d48" },
  { id: "ben", name: "Ben Okafor", handle: "ben", color: "#0891b2" },
  { id: "chen", name: "Chen Wei", handle: "chen", color: "#16a34a" },
]

/** The typing line for one, two and many people, and the "Seen" receipt with stacked avatars. */
export function BasicTypingSeen() {
  const [typing, setTyping] = useState(1)
  return (
    <div className="space-y-3 p-4 text-[13px]">
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((n) => (
          <button key={n} type="button" aria-pressed={typing === n} onClick={() => setTyping(n)} className="h-6 rounded border px-2 text-xs tabular-nums aria-pressed:bg-foreground aria-pressed:text-background">
            {n} typing
          </button>
        ))}
      </div>
      <TypingIndicator userIds={USERS.slice(0, typing).map((u) => u.id)} users={USERS} />
      <div className="max-w-sm rounded-md border bg-card p-2">
        <p>Deploy is done, closing the ticket.</p>
        <SeenReceipts userIds={["ana", "ben", "chen"]} users={USERS} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./typing-seen-DR_Ub8fT.js`),[]));function ue(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Basics: the chat`,children:`A store over an adapter, a provider, and the parts. Every part below also works on its own with plain props.`}),(0,D.jsx)(m,{n:1,title:`The smallest chat`,blurb:"`createFakeAdapter` + `createChatStore` + `ChatProvider` + `ChannelView`. Send something: Sam reads it, types, and answers.",code:Z,children:(0,D.jsx)(S,{testId:`basic-chat`,height:340,children:(0,D.jsx)(ce,{})})}),(0,D.jsx)(m,{n:2,title:`The composer`,blurb:`Enter sends, Shift+Enter breaks a line, ⌘B / ⌘I / ⌘E format the selection, @ opens mention suggestions, the clip or a drop attaches files.`,code:A,children:(0,D.jsx)(S,{testId:`basic-composer`,height:220,children:(0,D.jsx)(k,{})})}),(0,D.jsx)(m,{n:3,title:`Markup and reactions`,blurb:"`MessageText` renders markup as elements, never as HTML. `ReactionBar` shows counts; click one to toggle yours.",code:P,children:(0,D.jsx)(S,{testId:`basic-markup`,height:120,children:(0,D.jsx)(N,{})})}),(0,D.jsx)(m,{n:4,title:`Typing and seen`,blurb:"`TypingIndicator` words one, two or many typers; `SeenReceipts` stacks the readers' avatars.",code:$,children:(0,D.jsx)(S,{testId:`basic-typing`,height:170,children:(0,D.jsx)(le,{})})}),(0,D.jsx)(m,{n:5,title:`Avatars, emoji and attachments`,blurb:"`ChatAvatar` (ui's Avatar on the user's colour) with display's `PresenceDot`, `RenderedText` (the host renderer or our markup), `EmojiPicker` on its own (it lives in `@kitora/pickers`), and `AttachmentList` (ui's `Attachment` cards) with remove.",code:X,children:(0,D.jsx)(S,{testId:`basic-people`,height:200,children:(0,D.jsx)(ae,{})})}),(0,D.jsx)(m,{n:6,title:`Rows from parts`,blurb:"`MessageTimeline` groups messages by day and author, `DayDivider` (ui's sticky separator `Marker`) heads each day, `MessageItem` draws a row with its hover actions (ui's `Message` parts; the actions are one toolbar, arrow keys between its buttons), `ThreadSummary` sits under a thread root.",code:q,children:(0,D.jsx)(S,{testId:`basic-rows`,height:260,children:(0,D.jsx)(K,{})})}),(0,D.jsx)(m,{n:7,title:`The message list alone`,blurb:"`MessageList` without a header or composer: groups, hover actions, inline edit, thread summaries and an empty state. It scrolls on ui's `MessageScroller`: it follows new messages while you are at the bottom, leaves you where you are when you have scrolled up, and shows Jump to latest until you are back.",code:z,children:(0,D.jsx)(S,{testId:`basic-message-list`,height:240,children:(0,D.jsx)(ie,{})})})]})}export{ue as component};