import{l as e,n as t}from"./trace-BHqlpFZl.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./globe-sWXhXf1y.js";import{_ as i,g as a,n as o,o as s,t as c}from"./-kits.ai-chat.shared-Cm3Q7IHz.js";import{Cc as l,Ic as u}from"./index-9y5uwRd3.js";import{t as d}from"./empty-state-F8jHW6Qw.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{t as p}from"./assistant-script-CMcaHRJP.js";var m=u(),h=[{id:`sse`,title:`How do browsers stream responses?`,detail:`SSE vs fetch, with sources`,icon:(0,m.jsx)(r,{}),prompt:`Research how browsers stream responses: SSE vs fetch`},{id:`latest`,title:`What's the latest on AbortController?`,detail:`cite the docs`,icon:(0,m.jsx)(r,{}),prompt:`Search the latest docs on stream cancellation`}];function g(){return(0,m.jsx)(a,{value:i({adapter:p}),children:(0,m.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,m.jsx)(o,{empty:(0,m.jsx)(d,{title:`Research`,subtitle:`Answers come with numbered citations and the sources they came from.`,suggestions:h}),toolTitles:{web_search:`Searched the web`},maxWidth:680}),(0,m.jsx)(`div`,{className:`mx-auto w-full max-w-[680px] px-4 pb-3`,children:(0,m.jsx)(s,{attachments:!1,placeholder:`Ask a research question…`})})]})})}var _=`import { Globe } from "lucide-react"
import { ChatEmptyState, ChatMessages, ChatProvider, Composer, useChat, type Suggestion } from "@kitora/ai-chat"
import { demoAdapter } from "./assistant-script"

const SUGGESTIONS: readonly Suggestion[] = [
  { id: "sse", title: "How do browsers stream responses?", detail: "SSE vs fetch, with sources", icon: <Globe />, prompt: "Research how browsers stream responses: SSE vs fetch" },
  { id: "latest", title: "What's the latest on AbortController?", detail: "cite the docs", icon: <Globe />, prompt: "Search the latest docs on stream cancellation" },
]

/** A research answer: reasoning, a web search tool, a sources strip, and inline citations that preview on hover. */
export function ResearchAssistant() {
  const chat = useChat({ adapter: demoAdapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages empty={<ChatEmptyState title="Research" subtitle="Answers come with numbered citations and the sources they came from." suggestions={SUGGESTIONS} />} toolTitles={{ web_search: "Searched the web" }} maxWidth={680} />
        <div className="mx-auto w-full max-w-[680px] px-4 pb-3">
          <Composer attachments={false} placeholder="Ask a research question…" />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>l(()=>import(`./research-CghyPrpk.js`),[]));var v=[{id:`sse`,title:`How do browsers stream responses?`,detail:`SSE vs fetch, with sources`,icon:(0,m.jsx)(r,{}),prompt:`Research how browsers stream responses: SSE vs fetch`}];function y(){return(0,m.jsx)(a,{value:i({adapter:p}),children:(0,m.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,m.jsx)(`div`,{className:`mx-auto w-full max-w-[680px] px-4 pt-3`,children:(0,m.jsxs)(t,{label:`Subagents`,children:[(0,m.jsx)(e,{name:`Explore the specs`,summary:`Read 6 pages · 34s`,startedAt:0,endedAt:34e3,steps:[{id:`whatwg`,title:`Read the Fetch standard`,status:`done`,description:`fetch.spec.whatwg.org`},{id:`html`,title:`Read the EventSource section`,status:`done`,description:`html.spec.whatwg.org`}]}),(0,m.jsx)(e,{name:`Check browser support`,summary:`2 of 3 sources checked`,steps:[{id:`mdn`,title:`Read MDN compatibility tables`,status:`done`},{id:`caniuse`,title:`Reading caniuse`,status:`running`},{id:`notes`,title:`Release notes`,status:`pending`}]})]})}),(0,m.jsx)(o,{groupSteps:!0,empty:(0,m.jsx)(d,{title:`Research`,subtitle:`Thinking and tool calls show as one trace of steps.`,suggestions:v}),toolTitles:{web_search:`Searched the web`},maxWidth:680}),(0,m.jsx)(`div`,{className:`mx-auto w-full max-w-[680px] px-4 pb-3`,children:(0,m.jsx)(s,{attachments:!1,placeholder:`Ask a research question…`})})]})})}var b=`import { Globe } from "lucide-react"
import { ChatEmptyState, ChatMessages, ChatProvider, Composer, Trace, TraceSubagent, useChat, type Suggestion } from "@kitora/ai-chat"
import { demoAdapter } from "./assistant-script"

const SUGGESTIONS: readonly Suggestion[] = [
  { id: "sse", title: "How do browsers stream responses?", detail: "SSE vs fetch, with sources", icon: <Globe />, prompt: "Research how browsers stream responses: SSE vs fetch" },
]

/**
 * The same research answer with \`groupSteps\`: the thinking and the web search are one trace of steps (each open while it
 * runs) instead of a fold and a card. Above it, the subagents a bigger research run would hand work to, each one step
 * whose detail is its own trace.
 */
export function ResearchSteps() {
  const chat = useChat({ adapter: demoAdapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <div className="mx-auto w-full max-w-[680px] px-4 pt-3">
          <Trace label="Subagents">
            <TraceSubagent
              name="Explore the specs"
              summary="Read 6 pages · 34s"
              startedAt={0}
              endedAt={34_000}
              steps={[
                { id: "whatwg", title: "Read the Fetch standard", status: "done", description: "fetch.spec.whatwg.org" },
                { id: "html", title: "Read the EventSource section", status: "done", description: "html.spec.whatwg.org" },
              ]}
            />
            <TraceSubagent
              name="Check browser support"
              summary="2 of 3 sources checked"
              steps={[
                { id: "mdn", title: "Read MDN compatibility tables", status: "done" },
                { id: "caniuse", title: "Reading caniuse", status: "running" },
                { id: "notes", title: "Release notes", status: "pending" },
              ]}
            />
          </Trace>
        </div>
        <ChatMessages groupSteps empty={<ChatEmptyState title="Research" subtitle="Thinking and tool calls show as one trace of steps." suggestions={SUGGESTIONS} />} toolTitles={{ web_search: "Searched the web" }} maxWidth={680} />
        <div className="mx-auto w-full max-w-[680px] px-4 pb-3">
          <Composer attachments={false} placeholder="Ask a research question…" />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>l(()=>import(`./research-steps-Dr-_Ytk0.js`),[]));function x(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{title:`Research`,children:"A `sources` chunk adds the strip of source cards; `[n]` in the streamed text links to source n and previews it on hover or focus."}),(0,m.jsx)(f,{n:1,title:`A cited answer`,blurb:`Pick a suggestion: the reply thinks, searches, lists its sources, then streams an answer with citations.`,code:_,children:(0,m.jsx)(c,{testId:`research`,height:600,children:(0,m.jsx)(g,{})})}),(0,m.jsx)(f,{n:2,title:`Steps as a trace, and subagents`,blurb:"`groupSteps` draws the thinking and the search as one `Trace`, each step open while it runs; `TraceSubagent` folds a subagent's own steps under one line such as “Read 6 pages · 34s”.",code:b,children:(0,m.jsx)(c,{testId:`research-steps`,height:640,children:(0,m.jsx)(y,{})})})]})}export{x as component};