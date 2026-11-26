import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{c as t,n,o as r,r as i,s as a,t as o}from"./trace-D-TD-fec.js";import{s}from"./kit-docs-BUovISd0.js";import{C as c,D as l,_ as u,b as d,d as f,f as p,g as m,l as h,m as g,n as _,o as v,p as y,t as b}from"./-kits.ai-chat.shared-5Z9-FsFT.js";import{Bc as x,Cc as S,Ic as C}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as w}from"./example-BGnSQG2Y.js";var T=C(),E=[{id:`mdn`,title:`AbortController — Web APIs`,url:`https://developer.mozilla.org/en-US/docs/Web/API/AbortController`,siteName:`MDN`,snippet:`Represents a controller object that allows you to abort one or more Web requests as and when desired.`},{id:`whatwg`,title:`Server-sent events`,url:`https://html.spec.whatwg.org/multipage/server-sent-events.html`,siteName:`WHATWG`,snippet:`Enables servers to push data to web pages over HTTP using the EventSource interface.`}];function D(){return(0,T.jsxs)(`div`,{className:`p-4`,children:[(0,T.jsx)(g,{sources:E,text:"Server-sent events stream text over one HTTP response and reconnect on their own [2]. Wire an `AbortController` to Stop so the request is really cancelled [1]."}),(0,T.jsx)(f,{sources:E})]})}var O=`import { Markdown, SourceList, type Source } from "@kitora/ai-chat"

const SOURCES: readonly Source[] = [
  { id: "mdn", title: "AbortController — Web APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", siteName: "MDN", snippet: "Represents a controller object that allows you to abort one or more Web requests as and when desired." },
  { id: "whatwg", title: "Server-sent events", url: "https://html.spec.whatwg.org/multipage/server-sent-events.html", siteName: "WHATWG", snippet: "Enables servers to push data to web pages over HTTP using the EventSource interface." },
]

/** \`[n]\` in the text becomes a chip; hover or focus it to preview source n. The cards below list every source. */
export function BasicCitations() {
  return (
    <div className="p-4">
      <Markdown sources={SOURCES} text="Server-sent events stream text over one HTTP response and reconnect on their own [2]. Wire an \`AbortController\` to Stop so the request is really cancelled [1]." />
      <SourceList sources={SOURCES} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>S(()=>import(`./citations-CnNXC31Z.js`),[]));var k=d({script:()=>[{type:`stream-text`,text:`Hi! I'm a **scripted** assistant. Every reply on this page streams from a fake adapter, so nothing leaves your browser.`}]});function A(){return(0,T.jsx)(m,{value:u({adapter:k}),children:(0,T.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,T.jsx)(_,{}),(0,T.jsx)(`div`,{className:`p-3 pt-0`,children:(0,T.jsx)(v,{placeholder:`Say hi…`,attachments:!1})})]})})}var j=`import { ChatMessages, ChatProvider, Composer, createScriptedAdapter, useChat } from "@kitora/ai-chat"

// A scripted adapter stands in for a real backend: it streams this reply word by word.
const adapter = createScriptedAdapter({
  script: () => [{ type: "stream-text", text: "Hi! I'm a **scripted** assistant. Every reply on this page streams from a fake adapter, so nothing leaves your browser." }],
})

/** The smallest chat: \`useChat\` owns the thread, \`ChatMessages\` draws it, \`Composer\` sends. */
export function BasicMinimalChat() {
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer placeholder="Say hi…" attachments={false} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>S(()=>import(`./minimal-chat-C3HWdkbc.js`),[]));var M=[{type:`tool-call`,id:`1`,name:`send_email`,args:{to:`ops@acme.dev`,subject:`Deploy finished`},status:`pending`},{type:`tool-call`,id:`2`,name:`web_search`,args:{query:`vite 8 release notes`,limit:5},status:`running`,startedAt:0},{type:`tool-call`,id:`3`,name:`get_weather`,args:{city:`Lisbon`},status:`result`,result:{tempC:21,condition:`Sunny`},startedAt:0,endedAt:840},{type:`tool-call`,id:`4`,name:`run_sql`,args:{sql:`select * from orders limit 10`},status:`error`,error:`permission denied for table orders`,startedAt:0,endedAt:120}];function N(){return(0,T.jsxs)(`div`,{className:`flex flex-col gap-1 p-4`,children:[(0,T.jsx)(h,{part:{type:`reasoning`,text:`Checking which tables the user can read before running the query…`,done:!1}}),(0,T.jsx)(h,{part:{type:`reasoning`,text:`The question needs live data, so search first, then summarise the top results and cite them.`,done:!0,durationMs:4200}}),M.map(e=>(0,T.jsx)(p,{part:e,onApprove:()=>void 0,onDeny:()=>void 0},e.id))]})}var P=`import { ReasoningView, ToolCallCard, type ToolCallPart } from "@kitora/ai-chat"

// One tool call in each of its four states. In a real thread these come from the adapter's stream.
const CALLS: readonly ToolCallPart[] = [
  { type: "tool-call", id: "1", name: "send_email", args: { to: "ops@acme.dev", subject: "Deploy finished" }, status: "pending" },
  { type: "tool-call", id: "2", name: "web_search", args: { query: "vite 8 release notes", limit: 5 }, status: "running", startedAt: 0 },
  { type: "tool-call", id: "3", name: "get_weather", args: { city: "Lisbon" }, status: "result", result: { tempC: 21, condition: "Sunny" }, startedAt: 0, endedAt: 840 },
  { type: "tool-call", id: "4", name: "run_sql", args: { sql: "select * from orders limit 10" }, status: "error", error: "permission denied for table orders", startedAt: 0, endedAt: 120 },
]

/** The reasoning fold (live and done) and tool cards. Click a card to see its input and result. */
export function BasicReasoningTools() {
  return (
    <div className="flex flex-col gap-1 p-4">
      <ReasoningView part={{ type: "reasoning", text: "Checking which tables the user can read before running the query…", done: false }} />
      <ReasoningView part={{ type: "reasoning", text: "The question needs live data, so search first, then summarise the top results and cite them.", done: true, durationMs: 4200 }} />
      {CALLS.map((part) => (
        <ToolCallCard key={part.id} part={part} onApprove={() => undefined} onDeny={() => undefined} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>S(()=>import(`./reasoning-tools-OQS1eVx1.js`),[]));var F=e(x(),1),I=`### Streaming markdown

Every prefix of this text parses: an open \`**\` stays literal until it closes, and a code fence grows as it streams.

- **Bold**, *italic*, ~~struck~~ and \`inline code\`
- Links like https://developer.mozilla.org stay safe: only http, https and mailto become links
- [x] Task items render as checkboxes

\`\`\`ts
const reply = await chat.send({ text: "hello" })
\`\`\`

| Part | Streams? |
|:--|:--:|
| text | yes |
| table | once its header row lands |`;function L(){let[e,t]=(0,F.useState)(``),[n,r]=(0,F.useState)(0);(0,F.useEffect)(()=>{let e=c(I),n=0;t(``);let r=setInterval(()=>{n++,t(e.slice(0,n).join(``)),n>=e.length&&clearInterval(r)},25);return()=>clearInterval(r)},[n]);let i=e.length<I.length;return(0,T.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,T.jsxs)(`div`,{className:`flex h-9 items-center gap-2 border-b px-3 text-[12px] text-muted-foreground`,children:[(0,T.jsxs)(`span`,{className:`tabular-nums`,children:[e.length,` / `,I.length,` chars`]}),(0,T.jsx)(`button`,{type:`button`,onClick:()=>r(e=>e+1),className:`ml-auto h-6 rounded-md border px-2 font-medium text-foreground hover:bg-muted`,children:`Replay`})]}),(0,T.jsx)(`div`,{className:`min-h-0 flex-1 overflow-y-auto p-4`,children:(0,T.jsx)(g,{text:e,streaming:i})})]})}var R=`import { useEffect, useState } from "react"
import { Markdown, tokenize } from "@kitora/ai-chat"

const ANSWER = \`### Streaming markdown

Every prefix of this text parses: an open \\\`**\\\` stays literal until it closes, and a code fence grows as it streams.

- **Bold**, *italic*, ~~struck~~ and \\\`inline code\\\`
- Links like https://developer.mozilla.org stay safe: only http, https and mailto become links
- [x] Task items render as checkboxes

\\\`\\\`\\\`ts
const reply = await chat.send({ text: "hello" })
\\\`\\\`\\\`

| Part | Streams? |
|:--|:--:|
| text | yes |
| table | once its header row lands |\`

/** \`Markdown\` re-parses on each chunk; the replay below feeds it word-sized deltas every 25 ms. */
export function BasicStreamingMarkdown() {
  const [text, setText] = useState("")
  const [run, setRun] = useState(0)
  useEffect(() => {
    const tokens = tokenize(ANSWER)
    let i = 0
    setText("")
    const timer = setInterval(() => {
      i++
      setText(tokens.slice(0, i).join(""))
      if (i >= tokens.length) clearInterval(timer)
    }, 25)
    return () => clearInterval(timer)
  }, [run])
  const streaming = text.length < ANSWER.length
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-9 items-center gap-2 border-b px-3 text-[12px] text-muted-foreground">
        <span className="tabular-nums">{text.length} / {ANSWER.length} chars</span>
        <button type="button" onClick={() => setRun((r) => r + 1)} className="ml-auto h-6 rounded-md border px-2 font-medium text-foreground hover:bg-muted">
          Replay
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <Markdown text={text} streaming={streaming} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>S(()=>import(`./streaming-markdown-CuocD1qc.js`),[]));var z=[{type:`tool-call`,id:`1`,name:`web_search`,args:{query:`vite 8 release notes`,limit:5},status:`result`,result:{hits:5},startedAt:0,endedAt:1240},{type:`tool-call`,id:`2`,name:`get_weather`,args:{city:`Lisbon`},status:`running`},{type:`tool-call`,id:`3`,name:`run_sql`,args:{sql:`select * from orders limit 10`},status:`error`,error:`permission denied for table orders`,startedAt:0,endedAt:120},{type:`tool-call`,id:`4`,name:`send_email`,args:{to:`ops@acme.dev`},status:`pending`}],B=[`pending`,`running`,`done`,`error`,`skipped`];function V(){return(0,T.jsxs)(`div`,{className:`flex flex-col gap-3 p-4`,children:[(0,T.jsxs)(n,{label:`Agent steps`,children:[(0,T.jsx)(a,{status:`done`,title:`Planned the answer`,startedAt:0,endedAt:2300,children:(0,T.jsx)(i,{children:`Search first, then read the two best sources, then answer with citations.`})}),(0,T.jsx)(a,{status:`done`,title:`Read 2 sources`,description:`vitejs.dev, github.com`,children:(0,T.jsxs)(t,{children:[(0,T.jsx)(a,{status:`done`,title:`vitejs.dev/blog`}),(0,T.jsx)(a,{status:`skipped`,title:`news.example.com`,description:`Paywalled`})]})}),z.map(e=>(0,T.jsx)(y,{part:e,onApprove:()=>void 0,onDeny:()=>void 0},e.id))]}),(0,T.jsx)(`ul`,{"aria-label":`Step statuses`,className:`flex flex-wrap gap-2 text-[11px]`,children:B.map(e=>(0,T.jsxs)(`li`,{className:`inline-flex h-5 items-center gap-1 rounded-full px-1.5 font-medium ${o[e].className}`,children:[(0,T.jsx)(r,{status:e,className:`size-3`}),o[e].label]},e))})]})}var H=`import { Trace, TRACE_STATUS, TraceDetail, TraceStatusIcon, TraceStep, TraceSteps, ToolCallStep, type ToolCallPart, type TraceStatus } from "@kitora/ai-chat"

// The same four tool calls as the cards above, drawn as steps of one trace (what \`groupSteps\` does in a transcript).
const CALLS: readonly ToolCallPart[] = [
  { type: "tool-call", id: "1", name: "web_search", args: { query: "vite 8 release notes", limit: 5 }, status: "result", result: { hits: 5 }, startedAt: 0, endedAt: 1240 },
  { type: "tool-call", id: "2", name: "get_weather", args: { city: "Lisbon" }, status: "running" },
  { type: "tool-call", id: "3", name: "run_sql", args: { sql: "select * from orders limit 10" }, status: "error", error: "permission denied for table orders", startedAt: 0, endedAt: 120 },
  { type: "tool-call", id: "4", name: "send_email", args: { to: "ops@acme.dev" }, status: "pending" },
]

const STATUSES: readonly TraceStatus[] = ["pending", "running", "done", "error", "skipped"]

/** Steps built from the parts: a step with folded detail, one with nested steps, tool calls as steps, and the status map. */
export function BasicTraceSteps() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <Trace label="Agent steps">
        <TraceStep status="done" title="Planned the answer" startedAt={0} endedAt={2300}>
          <TraceDetail>Search first, then read the two best sources, then answer with citations.</TraceDetail>
        </TraceStep>
        <TraceStep status="done" title="Read 2 sources" description="vitejs.dev, github.com">
          <TraceSteps>
            <TraceStep status="done" title="vitejs.dev/blog" />
            <TraceStep status="skipped" title="news.example.com" description="Paywalled" />
          </TraceSteps>
        </TraceStep>
        {CALLS.map((part) => (
          <ToolCallStep key={part.id} part={part} onApprove={() => undefined} onDeny={() => undefined} />
        ))}
      </Trace>
      <ul aria-label="Step statuses" className="flex flex-wrap gap-2 text-[11px]">
        {STATUSES.map((s) => (
          <li key={s} className={\`inline-flex h-5 items-center gap-1 rounded-full px-1.5 font-medium \${TRACE_STATUS[s].className}\`}>
            <TraceStatusIcon status={s} className="size-3" />
            {TRACE_STATUS[s].label}
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>S(()=>import(`./trace-steps-CuxaWUsw.js`),[]));var U=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`ما عاصمة البرتغال؟`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`عاصمة البرتغال هي **لشبونة**.`}],createdAt:0,status:`complete`},{id:`u2`,role:`user`,parentId:null,parts:[{type:`text`,text:`ما عاصمة إسبانيا؟`}],createdAt:1,status:`complete`},{id:`a2`,role:`assistant`,parentId:`u2`,parts:[{type:`text`,text:`عاصمة إسبانيا هي **مدريد**.`}],createdAt:1,status:`complete`}],W=d({script:()=>[{type:`stream-text`,text:`هذا رد تجريبي من محوّل وهمي.`}]});function G(){return(0,T.jsx)(m,{value:u({adapter:W,thread:l(U)}),children:(0,T.jsxs)(`div`,{dir:`rtl`,lang:`ar`,className:`flex h-full flex-col`,children:[(0,T.jsx)(`div`,{className:`px-4 pt-3`,children:(0,T.jsx)(h,{part:{type:`reasoning`,text:`السؤال عن عاصمة، فالجواب مباشر.`,done:!0,durationMs:1200}})}),(0,T.jsx)(_,{}),(0,T.jsx)(`div`,{className:`p-3 pt-0`,children:(0,T.jsx)(v,{placeholder:`اكتب رسالة…`,attachments:!1})})]})})}var K=`import { ChatMessages, ChatProvider, Composer, ReasoningView, createScriptedAdapter, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"

// Two versions of the question (an edit sent as a new branch), so the branch switcher shows.
const SEED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "ما عاصمة البرتغال؟" }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "عاصمة البرتغال هي **لشبونة**." }], createdAt: 0, status: "complete" },
  { id: "u2", role: "user", parentId: null, parts: [{ type: "text", text: "ما عاصمة إسبانيا؟" }], createdAt: 1, status: "complete" },
  { id: "a2", role: "assistant", parentId: "u2", parts: [{ type: "text", text: "عاصمة إسبانيا هي **مدريد**." }], createdAt: 1, status: "complete" },
]

const adapter = createScriptedAdapter({ script: () => [{ type: "stream-text", text: "هذا رد تجريبي من محوّل وهمي." }] })

/**
 * Right to left: inside \`dir="rtl"\` the user's bubble sits at the inline end with its tail on the inline-end corner,
 * the branch switcher's ‹ › and the reasoning fold's chevron point the reading way, and the composer mirrors.
 */
export function RightToLeftChat() {
  const chat = useChat({ adapter, thread: threadFrom(SEED) })
  return (
    <ChatProvider value={chat}>
      <div dir="rtl" lang="ar" className="flex h-full flex-col">
        <div className="px-4 pt-3">
          <ReasoningView part={{ type: "reasoning", text: "السؤال عن عاصمة، فالجواب مباشر.", done: true, durationMs: 1200 }} />
        </div>
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer placeholder="اكتب رسالة…" attachments={false} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>S(()=>import(`./right-to-left-59-uBTnz.js`),[]));function q(){return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(s,{title:`Basics: messages`,children:`A message is a list of typed parts (text, reasoning, tool calls, sources, artifacts) that an adapter streams in. The parts render on their own too.`}),(0,T.jsx)(w,{n:1,title:`A minimal chat`,blurb:"`useChat` with an adapter, `ChatMessages` and `Composer` inside a `ChatProvider`. Send anything.",code:j,children:(0,T.jsx)(b,{testId:`basic-minimal`,height:320,children:(0,T.jsx)(A,{})})}),(0,T.jsx)(w,{n:2,title:`Streaming markdown`,blurb:`Every prefix parses: open emphasis stays literal, a code fence grows, a table appears with its header. Replay to watch.`,code:R,children:(0,T.jsx)(b,{testId:`basic-markdown`,height:420,children:(0,T.jsx)(L,{})})}),(0,T.jsx)(w,{n:3,title:`Reasoning and tool calls`,blurb:`The reasoning fold while thinking and once done, and a tool card in each state: waiting for approval, running, done, failed.`,code:P,children:(0,T.jsx)(b,{testId:`basic-tools`,height:370,children:(0,T.jsx)(N,{})})}),(0,T.jsx)(w,{n:4,title:`Citations and sources`,blurb:"`[n]` in the text becomes a chip that previews source n; the sources strip lists them all.",code:O,children:(0,T.jsx)(b,{testId:`basic-citations`,height:190,children:(0,T.jsx)(D,{})})}),(0,T.jsx)(w,{n:5,title:`Right to left`,blurb:`Inside \`dir="rtl"\` the thread mirrors: the user's bubble and its tail sit at the inline end, and the branch switcher's and the reasoning fold's chevrons point the reading way.`,code:K,children:(0,T.jsx)(b,{testId:`basic-rtl`,height:420,children:(0,T.jsx)(G,{})})}),(0,T.jsx)(w,{n:6,title:`Steps as a trace`,blurb:"`Trace` and `TraceStep` with folded `TraceDetail` and nested `TraceSteps`, the four tool calls above as `ToolCallStep`s (what `groupSteps` draws in a transcript), and the one status map, `TRACE_STATUS` with `TraceStatusIcon`, that the cards and the steps share.",code:H,children:(0,T.jsx)(b,{testId:`basic-trace`,height:520,children:(0,T.jsx)(V,{})})})]})}export{q as component};