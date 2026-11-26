import{s as e}from"./kit-docs-DpYhPoxM.js";import{D as t,_ as n,g as r,n as i,o as a,t as o}from"./-kits.ai-chat.shared-uiMxprtL.js";import{Cc as s,Ic as c}from"./index-q72zUtm9.js";import{t as l}from"./kit-gallery-Atvibnty.js";import{t as u}from"./example-B8EaWveR.js";import{t as d}from"./assistant-script-BnMchqj1.js";var f=c(),p=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`Summarise yesterday's incident`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`Let me look that up for you…`}],createdAt:0,status:`error`,error:`The model is overloaded (529). Try again in a moment.`},{id:`u2`,role:`user`,parentId:`a1`,parts:[{type:`text`,text:`Then just list the timeline`}],createdAt:0,status:`complete`},{id:`a2`,role:`assistant`,parentId:`u2`,parts:[{type:`tool-call`,id:`t1`,name:`read_timeline`,args:{incident:`INC-2041`},status:`error`,error:`Stopped before the tool finished`},{type:`text`,text:`- 09:12 alerts fire on checkout latency
- 09:15 on-call acknowledges`}],createdAt:0,status:`stopped`}];function m(){return(0,f.jsx)(r,{value:n({adapter:d,thread:t(p)}),children:(0,f.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,f.jsx)(a,{attachments:!1,placeholder:`Send "fail" for an error…`})})]})})}var h=[`caching`,`indexes`,`retries`,`queues`,`feature flags`,`observability`,`rate limits`,`migrations`];function g(){let e=[],t=null;for(let n=0;n<200;n++){let r=h[n%h.length]??`caching`,i={id:`u${n}`,role:`user`,parentId:t,parts:[{type:`text`,text:`Question ${n+1}: one tip about ${r}?`}],createdAt:0,status:`complete`},a={id:`a${n}`,role:`assistant`,parentId:i.id,parts:[{type:`text`,text:`**Tip ${n+1}** on *${r}*: measure first, then change one thing at a time — \`p95\` before and after.`}],createdAt:0,status:`complete`};e.push(i,a),t=a.id}return e}var _=t(g());function v(){let e=n({adapter:d,thread:_});return(0,f.jsx)(r,{value:e,children:(0,f.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,f.jsx)(a,{attachments:!1,footnote:(0,f.jsxs)(`span`,{className:`tabular-nums`,children:[e.messages.length,` messages`]})})})]})})}var y=`import { ChatMessages, ChatProvider, Composer, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>s(()=>import(`./states-CfTouSNc.js`),[]));function b(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(e,{title:`States and scale`,children:`What a chat looks like when things go wrong, and when the thread gets long.`}),(0,f.jsx)(u,{n:1,title:`Error and stopped`,blurb:`A failed reply shows the error with Retry (a new branch); a stopped reply keeps its text and settles its running tool as failed.`,code:y,children:(0,f.jsx)(o,{testId:`states-error`,height:420,children:(0,f.jsx)(m,{})})}),(0,f.jsx)(u,{n:2,title:`A 400-message thread`,blurb:`Opens at the bottom; scroll up and the Jump to latest button appears; sending brings you back down.`,code:y,children:(0,f.jsx)(o,{testId:`states-long`,height:460,children:(0,f.jsx)(l,{className:`h-full`,children:(0,f.jsx)(v,{})})})})]})}export{b as component};