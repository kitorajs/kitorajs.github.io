import{s as e}from"./kit-docs-BUovISd0.js";import{D as t,_ as n,g as r,n as i,o as a,t as o}from"./-kits.ai-chat.shared-5Z9-FsFT.js";import{Cc as s,Ic as c}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as l}from"./example-BGnSQG2Y.js";import{t as u}from"./assistant-script-_MHpIrxf.js";var d=c(),f=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`Summarise yesterday's incident`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`Let me look that up for you…`}],createdAt:0,status:`error`,error:`The model is overloaded (529). Try again in a moment.`},{id:`u2`,role:`user`,parentId:`a1`,parts:[{type:`text`,text:`Then just list the timeline`}],createdAt:0,status:`complete`},{id:`a2`,role:`assistant`,parentId:`u2`,parts:[{type:`tool-call`,id:`t1`,name:`read_timeline`,args:{incident:`INC-2041`},status:`error`,error:`Stopped before the tool finished`},{type:`text`,text:`- 09:12 alerts fire on checkout latency
- 09:15 on-call acknowledges`}],createdAt:0,status:`stopped`}];function p(){return(0,d.jsx)(r,{value:n({adapter:u,thread:t(f)}),children:(0,d.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,d.jsx)(i,{}),(0,d.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,d.jsx)(a,{attachments:!1,placeholder:`Send "fail" for an error…`})})]})})}var m=[`caching`,`indexes`,`retries`,`queues`,`feature flags`,`observability`,`rate limits`,`migrations`];function h(){let e=[],t=null;for(let n=0;n<200;n++){let r=m[n%m.length]??`caching`,i={id:`u${n}`,role:`user`,parentId:t,parts:[{type:`text`,text:`Question ${n+1}: one tip about ${r}?`}],createdAt:0,status:`complete`},a={id:`a${n}`,role:`assistant`,parentId:i.id,parts:[{type:`text`,text:`**Tip ${n+1}** on *${r}*: measure first, then change one thing at a time — \`p95\` before and after.`}],createdAt:0,status:`complete`};e.push(i,a),t=a.id}return e}var g=t(h());function _(){let e=n({adapter:u,thread:g});return(0,d.jsx)(r,{value:e,children:(0,d.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,d.jsx)(i,{}),(0,d.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,d.jsx)(a,{attachments:!1,footnote:(0,d.jsxs)(`span`,{className:`tabular-nums`,children:[e.messages.length,` messages`]})})})]})})}var v=`import { ChatMessages, ChatProvider, Composer, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"
import { demoAdapter } from "./assistant-script"

const FAILED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "Summarise yesterday's incident" }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "Let me look that up for you…" }], createdAt: 0, status: "error", error: "The model is overloaded (529). Try again in a moment." },
  { id: "u2", role: "user", parentId: "a1", parts: [{ type: "text", text: "Then just list the timeline" }], createdAt: 0, status: "complete" },
  {
    id: "a2",
    role: "assistant",
    parentId: "u2",
    parts: [
      { type: "tool-call", id: "t1", name: "read_timeline", args: { incident: "INC-2041" }, status: "error", error: "Stopped before the tool finished" },
      { type: "text", text: "- 09:12 alerts fire on checkout latency\\n- 09:15 on-call acknowledges" },
    ],
    createdAt: 0,
    status: "stopped",
  },
]

/** An error with Retry, a reply cut short by Stop (its running tool settles as failed). Send "fail" to trigger a fresh error. */
export function ErrorAndStopped() {
  const chat = useChat({ adapter: demoAdapter, thread: threadFrom(FAILED) })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="mx-auto w-full max-w-[720px] px-4 pb-3">
          <Composer attachments={false} placeholder='Send "fail" for an error…' />
        </div>
      </div>
    </ChatProvider>
  )
}

const TOPICS = ["caching", "indexes", "retries", "queues", "feature flags", "observability", "rate limits", "migrations"] as const

/** 200 question-and-answer pairs, each answer with markdown. */
function longThread(): ChatMessage[] {
  const out: ChatMessage[] = []
  let parent: string | null = null
  for (let i = 0; i < 200; i++) {
    const topic = TOPICS[i % TOPICS.length] ?? "caching"
    const u: ChatMessage = { id: \`u\${i}\`, role: "user", parentId: parent, parts: [{ type: "text", text: \`Question \${i + 1}: one tip about \${topic}?\` }], createdAt: 0, status: "complete" }
    const a: ChatMessage = { id: \`a\${i}\`, role: "assistant", parentId: u.id, parts: [{ type: "text", text: \`**Tip \${i + 1}** on *\${topic}*: measure first, then change one thing at a time — \\\`p95\\\` before and after.\` }], createdAt: 0, status: "complete" }
    out.push(u, a)
    parent = a.id
  }
  return out
}

const LONG = threadFrom(longThread())

/** 400 messages: scroll up, then send to see the transcript stick to the bottom again. */
export function LongThread() {
  const chat = useChat({ adapter: demoAdapter, thread: LONG })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="mx-auto w-full max-w-[720px] px-4 pb-3">
          <Composer attachments={false} footnote={<span className="tabular-nums">{chat.messages.length} messages</span>} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>s(()=>import(`./states-CfTouSNc.js`),[]));function y(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`States and scale`,children:`What a chat looks like when things go wrong, and when the thread gets long.`}),(0,d.jsx)(l,{n:1,title:`Error and stopped`,blurb:`A failed reply shows the error with Retry (a new branch); a stopped reply keeps its text and settles its running tool as failed.`,code:v,children:(0,d.jsx)(o,{testId:`states-error`,height:420,children:(0,d.jsx)(p,{})})}),(0,d.jsx)(l,{n:2,title:`A 400-message thread`,blurb:`Opens at the bottom; scroll up and the Jump to latest button appears; sending brings you back down.`,code:v,children:(0,d.jsx)(o,{testId:`states-long`,height:460,children:(0,d.jsx)(_,{})})})]})}export{y as component};