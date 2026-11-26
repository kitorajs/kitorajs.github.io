import{t as e}from"./book-open-Duex-HM-.js";import{t}from"./code-xml-DYhtbpK-.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./lightbulb-C87GLgZ4.js";import{t as i}from"./table-hp90NAhr.js";import{D as a,_ as o,b as s,g as c,n as l,o as u,t as d,x as f}from"./-kits.ai-chat.shared-Cm3Q7IHz.js";import{Cc as p,Ic as m}from"./index-9y5uwRd3.js";import{t as h}from"./empty-state-F8jHW6Qw.js";import"./kit-gallery-B-Yr9fP4.js";import{t as g}from"./example-CZLJLtIC.js";var _=m(),v=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:"What does `Array.prototype.at(-1)` return?"}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:"The **last** element of the array, or `undefined` when the array is empty. Negative indexes count back from the end."}],createdAt:0,status:`complete`}],y=s({script:()=>[{type:`stream-text`,text:"`at(-1)` reads the final element; it is the readable form of `arr[arr.length - 1]`."}]});function b(){let e=o({adapter:y,thread:a(v)}),t=e.messages.at(-1)?.feedback;return(0,_.jsx)(c,{value:e,children:(0,_.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,_.jsx)(l,{}),(0,_.jsxs)(`div`,{className:`border-t px-3 py-1.5 text-[11px] text-muted-foreground`,children:[`Feedback on the last reply: `,t??`none`]})]})})}var x=`import { ChatMessages, ChatProvider, createScriptedAdapter, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"

const SEED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "What does \`Array.prototype.at(-1)\` return?" }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "The **last** element of the array, or \`undefined\` when the array is empty. Negative indexes count back from the end." }], createdAt: 0, status: "complete" },
]

const adapter = createScriptedAdapter({ script: () => [{ type: "stream-text", text: "\`at(-1)\` reads the final element; it is the readable form of \`arr[arr.length - 1]\`." }] })

/** Every reply carries Copy, thumbs up / down (press again to clear) and Regenerate; the last reply shows them without hover. */
export function BasicActions() {
  const chat = useChat({ adapter, thread: threadFrom(SEED) })
  const rating = chat.messages.at(-1)?.feedback
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="border-t px-3 py-1.5 text-[11px] text-muted-foreground">Feedback on the last reply: {rating ?? "none"}</div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>p(()=>import(`./actions-02eOGW3P.js`),[]));var S=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`Name a good variable for a retry counter.`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:"`attempt` — it reads well in `attempt < maxAttempts`."}],createdAt:0,status:`complete`}],C=["`retries`","`tryCount`","`attemptsLeft`","`backoffStep`"],w=0,T=s({script:()=>[{type:`stream-text`,text:`${C[w++%C.length]} — another solid choice.`}],firstTokenMs:200});function E(){return(0,_.jsx)(c,{value:o({adapter:T,thread:a(S)}),children:(0,_.jsx)(`div`,{className:`flex h-full flex-col`,children:(0,_.jsx)(l,{})})})}var D=`import { ChatMessages, ChatProvider, createScriptedAdapter, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"

const SEED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "Name a good variable for a retry counter." }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "\`attempt\` — it reads well in \`attempt < maxAttempts\`." }], createdAt: 0, status: "complete" },
]

const NAMES = ["\`retries\`", "\`tryCount\`", "\`attemptsLeft\`", "\`backoffStep\`"] as const
let turn = 0

// Each regenerate streams a different answer, so the alternatives are easy to tell apart.
const adapter = createScriptedAdapter({ script: () => [{ type: "stream-text", text: \`\${NAMES[turn++ % NAMES.length]} — another solid choice.\` }], firstTokenMs: 200 })

/** Regenerate adds an alternative answer instead of replacing one; ‹ 1 / 2 › switches between them. */
export function BasicBranches() {
  const chat = useChat({ adapter, thread: threadFrom(SEED) })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>p(()=>import(`./branches-DMUmBFCo.js`),[]));var O=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`Translate 'good morning' to French`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`**Bonjour** — French uses one greeting for the whole morning and afternoon.`}],createdAt:0,status:`complete`}],k=s({script:e=>[{type:`stream-text`,text:`Here's my take on "${f(e)}": done, as a fresh branch.`}]});function A(){return(0,_.jsx)(c,{value:o({adapter:k,thread:a(O)}),children:(0,_.jsx)(`div`,{className:`flex h-full flex-col`,children:(0,_.jsx)(l,{})})})}var j=`import { ChatMessages, ChatProvider, createScriptedAdapter, lastUserText, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"

const SEED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "Translate 'good morning' to French" }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "**Bonjour** — French uses one greeting for the whole morning and afternoon." }], createdAt: 0, status: "complete" },
]

const adapter = createScriptedAdapter({ script: (request) => [{ type: "stream-text", text: \`Here's my take on "\${lastUserText(request)}": done, as a fresh branch.\` }] })

/** Hover the question and press the pencil: the edit is sent as a new branch beside the original, which ‹ › brings back. */
export function BasicEditResend() {
  const chat = useChat({ adapter, thread: threadFrom(SEED) })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>p(()=>import(`./edit-resend-D-2GR37e.js`),[]));var M=[{id:`explain`,title:`Explain a concept`,detail:`like closures in JavaScript`,icon:(0,_.jsx)(r,{})},{id:`code`,title:`Write code`,detail:`a typed debounce helper`,icon:(0,_.jsx)(t,{})},{id:`table`,title:`Compare options`,detail:`SSE vs WebSocket in a table`,icon:(0,_.jsx)(i,{})},{id:`read`,title:`Summarise`,detail:`the key ideas of a paper`,icon:(0,_.jsx)(e,{})}],N=s({script:e=>[{type:`stream-text`,text:`You picked: *${f(e)}*.`}]});function P(){return(0,_.jsx)(c,{value:o({adapter:N}),children:(0,_.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,_.jsx)(l,{empty:(0,_.jsx)(h,{title:`What are we working on?`,subtitle:`Pick a starter or type your own.`,suggestions:M})}),(0,_.jsx)(`div`,{className:`p-3 pt-0`,children:(0,_.jsx)(u,{attachments:!1})})]})})}var F=`import { BookOpen, Code2, Lightbulb, Table } from "lucide-react"
import { ChatEmptyState, ChatMessages, ChatProvider, Composer, createScriptedAdapter, lastUserText, useChat, type Suggestion } from "@kitora/ai-chat"

const SUGGESTIONS: readonly Suggestion[] = [
  { id: "explain", title: "Explain a concept", detail: "like closures in JavaScript", icon: <Lightbulb /> },
  { id: "code", title: "Write code", detail: "a typed debounce helper", icon: <Code2 /> },
  { id: "table", title: "Compare options", detail: "SSE vs WebSocket in a table", icon: <Table /> },
  { id: "read", title: "Summarise", detail: "the key ideas of a paper", icon: <BookOpen /> },
]

const adapter = createScriptedAdapter({ script: (request) => [{ type: "stream-text", text: \`You picked: *\${lastUserText(request)}*.\` }] })

/** An empty thread shows \`ChatEmptyState\`; a suggestion sends its prompt (or pass \`onPick\` to fill the composer instead). */
export function BasicEmptyState() {
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages empty={<ChatEmptyState title="What are we working on?" subtitle="Pick a starter or type your own." suggestions={SUGGESTIONS} />} />
        <div className="p-3 pt-0">
          <Composer attachments={false} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>p(()=>import(`./empty-state-Cgu57yu8.js`),[]));function I(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(n,{title:`Basics: actions and branches`,children:`A thread is a tree. Regenerate and edit never overwrite: they add an alternative beside the old message, and ‹ › switches between them.`}),(0,_.jsx)(g,{n:1,title:`Copy and feedback`,blurb:`Copy puts the reply's text on the clipboard; thumbs set a rating, pressing again clears it.`,code:x,children:(0,_.jsx)(d,{testId:`basic-actions`,height:220,children:(0,_.jsx)(b,{})})}),(0,_.jsx)(g,{n:2,title:`Regenerate into branches`,blurb:`Press the circular arrow under the reply. Each run adds an alternative; ‹ 2 / 3 › walks them.`,code:D,children:(0,_.jsx)(d,{testId:`basic-branches`,height:220,children:(0,_.jsx)(E,{})})}),(0,_.jsx)(g,{n:3,title:`Edit and resend`,blurb:`Hover the question, press the pencil, change it and Send. The original question and its answer stay one ‹ away.`,code:j,children:(0,_.jsx)(d,{testId:`basic-edit`,height:240,children:(0,_.jsx)(A,{})})}),(0,_.jsx)(g,{n:4,title:`Empty state with suggestions`,blurb:`Shown while the thread is empty; a suggestion sends its prompt.`,code:F,children:(0,_.jsx)(d,{testId:`basic-empty`,height:420,children:(0,_.jsx)(P,{})})})]})}export{I as component};