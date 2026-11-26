import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{S as n,b as r,l as i}from"./chat-app-DSDOSsdJ.js";import{Bc as a,Cc as o,Ic as s}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as c}from"./example-BGnSQG2Y.js";import{t as l}from"./-kits.chat.shared-CX9DtyWE.js";import{t as u}from"./fake-adapter-ByXeVoEp.js";import{a as d,l as f,n as p,o as m,u as h}from"./fixtures-DW555mY5.js";var g=e(a(),1),_=s();function v(){let[{store:e,adapter:t}]=(0,g.useState)(()=>{let e=f(),t=u({users:m,channels:p,messages:e,reads:h(e),selfId:d,autoReply:!0});return{adapter:t,store:n({adapter:t,selfId:d})}}),[a,o]=(0,g.useState)(`c-general`),[s,c]=(0,g.useState)(!1);return(0,_.jsx)(r,{store:e,children:(0,_.jsx)(i,{workspaceName:`Acme`,channelId:a,onChannelChange:o,headerActions:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>t.simulateIncoming(a),className:`h-6 rounded-md border px-2 text-xs hover:bg-muted`,children:`Simulate message`}),(0,_.jsxs)(`label`,{className:`flex h-6 items-center gap-1 text-xs text-muted-foreground`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:s,onChange:e=>{c(e.target.checked),t.setFailing(e.target.checked)}}),`Fail sends`]})]})})})}var y=`import { useState } from "react"
import { ChatApp, ChatProvider, createChatStore, createFakeAdapter } from "@kitora/chat"
import { CHANNELS, SELF_ID, USERS, seedMessages, seedReads } from "./fixtures"

/**
 * A Slack-style workspace on the fake realtime adapter: post in a channel and a teammate reads
 * it, types and answers. Hover a message for reactions, threads, edit and delete; press ↑ in an
 * empty composer to edit your last message; type @ to mention.
 */
export function SlackDemo() {
  const [{ store, adapter }] = useState(() => {
    const messages = seedMessages()
    const adapter = createFakeAdapter({ users: USERS, channels: CHANNELS, messages, reads: seedReads(messages), selfId: SELF_ID, autoReply: true })
    return { adapter, store: createChatStore({ adapter, selfId: SELF_ID }) }
  })
  const [channelId, setChannelId] = useState("c-general")
  const [failing, setFailing] = useState(false)
  return (
    <ChatProvider store={store}>
      <ChatApp
        workspaceName="Acme"
        channelId={channelId}
        onChannelChange={setChannelId}
        headerActions={
          <>
            <button type="button" onClick={() => adapter.simulateIncoming(channelId)} className="h-6 rounded-md border px-2 text-xs hover:bg-muted">
              Simulate message
            </button>
            <label className="flex h-6 items-center gap-1 text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={failing}
                onChange={(e) => {
                  setFailing(e.target.checked)
                  adapter.setFailing(e.target.checked)
                }}
              />
              Fail sends
            </label>
          </>
        }
      />
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>o(()=>import(`./slack-B4Qyyqnt.js`),[]));var b=[{name:`core`,what:`The model (users, channels, messages, reads, comment threads, activity, audit entries), timeline grouping with day dividers, the light markup parser, reactions and receipts, the comments reducer and highlight math, audit diffs and filters, the store with optimistic sends, the ChatAdapter seam with a fake adapter, and the ChatFormatters seam. No DOM, no React.`},{name:`dom`,what:`Headless DOM behaviour: rangeOffsets and selectionIn turn a text selection into comment-anchor offsets; autoGrow sizes a growing textarea. No React, no styling.`},{name:`react`,what:`ChatProvider (with formatters) and hooks over the store through useSyncExternalStore: useChatState, useChannelTimeline, useThread, useTyping, useUserLookup, useChannelTitle; useComments and CommentsProvider; useChatFormatters; useControllable; useChatShortcuts (keys as @kitora/keyboard commands). No styling.`},{name:`ui`,what:`Compound parts (Chat.Root, Chat.Layout, Chat.Sidebar, Chat.ChannelList, Chat.ChannelRoot, Chat.ChannelHeader, Chat.Messages, Chat.Footer, Chat.Typing, Chat.Composer, Chat.Thread) and the ChatApp / ChannelView presets made from them; MessageItem (drawn through ui's Message, MessageHeader, MessageStatus and MessageActions parts, its day dividers ui's Marker and its files ui's Attachment), Composer, reactions (with the emoji picker from @kitora/pickers), typing and seen; the ChatRenderers seam; CommentableText, CommentableBlock, CommentsRail; ActivityFeed; AuditLogViewer and FieldChanges. The list and layout run on @kitora/sidebar, the phone thread sheet on @kitora/overlay, shortcuts and grid arrows on @kitora/keyboard.`}];function x(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Chat kit`,children:'Post in a channel and a teammate reads it, types and answers through the fake realtime adapter. Hover a message to react, reply in a thread, edit or delete; press ↑ in an empty composer to edit your last message; type @ to mention someone; drop or attach a file. Channels with unread messages turn bold, and mentions of you get a red count. Under `dir="rtl"` the kit mirrors, and in the audit log ← turns to the next page (Audit log has a right-to-left demo).'}),(0,_.jsx)(c,{n:1,title:`A Slack-style workspace`,blurb:`Channels and DMs with unread and mention counts, day dividers, author groups, reactions, threads, mentions, typing, seen receipts, edit and delete with tombstones, attachments, a failing-network toggle with Retry.`,code:y,children:(0,_.jsx)(l,{testId:`slack`,height:620,children:(0,_.jsx)(v,{})})}),(0,_.jsx)(c,{n:2,title:`Layers`,blurb:`One package, four layers, each its own entry (@kitora/chat/core, /dom, /react, /ui) beside the @kitora/chat barrel.`,children:(0,_.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,_.jsx)(`tbody`,{children:b.map(e=>(0,_.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,_.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,_.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{x as component};