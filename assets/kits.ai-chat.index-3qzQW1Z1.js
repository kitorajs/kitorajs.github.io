import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./code-xml-B61_9U0V.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./globe-Bm0Nyt-y.js";import{t as i}from"./panel-left-gzFW3ch7.js";import{t as a}from"./square-pen-S_kE5Qkl.js";import{t as o}from"./sun-Dv19DF01.js";import{t as s}from"./table-A5Ua12uW.js";import{D as c,T as l,g as u,n as d,o as f,t as p,w as m,y as h}from"./-kits.ai-chat.shared-KM5YTP0o.js";import{Ec as g,Jo as _,Uc as v,_i as y,wn as b,zc as x}from"./index-BZuUy872.js";import{t as S}from"./split-view-Dgjtu3AL.js";import{r as C}from"./parts-CGX_mU_k.js";import{t as w}from"./json-CJ22rZqN.js";import{n as T,t as ee}from"./conversation-list-CCr6nLkg.js";import{t as E}from"./model-selector-CW8Wynij.js";import{t as D}from"./empty-state-CZLjdFHk.js";import"./kit-gallery-BBavj2rC.js";import{t as O}from"./example-B67lLz1F.js";import{t as k}from"./assistant-script-BmnTaET0.js";var A=x(),j=[{minPx:200,maxPx:360,collapsible:!0,priority:`low`},{minPx:340,priority:`high`},{minPx:320,collapsible:!0,priority:`low`}],M=[.2,.5,.3],N={"--dock-border":`var(--border)`,"--dock-sash-active":`var(--primary)`};function P({sidebar:e,sidebarOpen:t=!0,artifact:n=null,onSidebarOpenChange:r,onArtifactOpenChange:i,children:a,className:o}){let s=e!==void 0;return(0,A.jsxs)(`div`,{className:y(`flex h-full min-h-0 w-full bg-background text-foreground`,o),style:N,"data-ai-chat-layout":``,children:[(0,A.jsx)(C,{}),(0,A.jsxs)(S,{orientation:`horizontal`,defaultSizes:M,collapsed:[!s||!t,!1,n===null],panes:j,onSizesChange:e=>{let[a,,o]=e.collapsed;s&&a!==void 0&&a===t&&r?.(!a),o!==void 0&&o===(n!==null)&&i?.(!o)},paneLabels:[`Conversations`,`Chat`,`Artifact`],children:[(0,A.jsx)(`div`,{className:`flex h-full w-full min-w-0 flex-col`,children:e},`sidebar`),(0,A.jsx)(`div`,{className:`flex h-full w-full min-w-0 flex-col`,children:a},`chat`),(0,A.jsx)(`div`,{className:`flex h-full w-full min-w-0 flex-col`,children:n},`artifact`)]})]})}var F=e(v(),1),I=`shrink-0 rounded-md [&_svg]:size-3.5`,L=60*1e3,R=1440*L,z=[{name:`code`,description:`Write code into an artifact`,hint:`<task>`},{name:`research`,description:`Search the web and cite sources`,hint:`<question>`},{name:`table`,description:`Answer as a comparison table`},{name:`page`,description:`Build a small HTML page`},{name:`weather`,description:`Call the weather tool`,hint:`<city>`}],B=[{id:`code`,title:`Write a debounce`,detail:`typed, with cancel and flush`,icon:(0,A.jsx)(t,{}),prompt:`Write a typed debounce function in TypeScript`},{id:`research`,title:`Research streaming`,detail:`SSE vs fetch streams, with sources`,icon:(0,A.jsx)(r,{}),prompt:`Research how browsers stream responses: SSE vs fetch`},{id:`table`,title:`Compare transports`,detail:`as a table`,icon:(0,A.jsx)(s,{}),prompt:`Compare SSE, WebSocket and fetch streams in a table`},{id:`weather`,title:`Check the weather`,detail:`calls a tool`,icon:(0,A.jsx)(o,{}),prompt:`What's the weather in Lisbon?`}],V={get_weather:`Weather`,web_search:`Searched the web`};function H(e){let t=w(e);if(!t)return null;let n=typeof t.tempC==`number`?t.tempC:null;return(0,A.jsxs)(`div`,{className:`flex items-center gap-3 rounded-md bg-sky-500/10 p-2.5`,children:[(0,A.jsx)(o,{className:`size-6 text-amber-500`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`text-[15px] font-semibold tabular-nums`,children:n===null?`—`:`${n} °C`}),(0,A.jsxs)(`div`,{className:`text-[11px] text-muted-foreground`,children:[String(t.city??``),` · `,String(t.condition??``)]})]})]})}var U={get_weather:H};function W(e,t,n){return[{id:`${e}-u`,role:`user`,parentId:null,parts:[{type:`text`,text:t}],createdAt:0,status:`complete`},{id:`${e}-a`,role:`assistant`,parentId:`${e}-u`,parts:[{type:`text`,text:n}],createdAt:0,status:`complete`}]}function G(e,t,n,r=[]){return{summary:{id:e,title:t,updatedAt:n},store:new m({adapter:k,thread:c(r),conversationId:e})}}function K(e){return[G(`c-new`,`New chat`,e),G(`c-regex`,`Regex for semver tags`,e-180*L,W(`c-regex`,`Regex for a semver git tag like v1.2.3?`,"Use `^v(\\d+)\\.(\\d+)\\.(\\d+)$` — three capture groups for major, minor and patch.")),G(`c-css`,`Center a div, again`,e-R-60*L,W(`c-css`,`Shortest way to center a div?`,"`display: grid; place-items: center;` on the parent.")),G(`c-trip`,`Lisbon in four days`,e-4*R,W(`c-trip`,`Plan four days in Lisbon`,`Day 1 **Alfama** · Day 2 **Belém** · Day 3 **Sintra** · Day 4 **LX Factory** and the river.`)),G(`c-sql`,`Index for a jsonb filter`,e-20*R,W(`c-sql`,`Which index for \`where data @> '{"tag":"x"}'\`?`,"A **GIN** index on `data` with `jsonb_path_ops` — smaller and faster for `@>`."))]}var q=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,description:`Best for long, careful work.`,contextWindow:2e5,tags:[`reasoning`,`vision`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,description:`Fast and cheap for everyday tasks.`,contextWindow:128e3},{id:`lumen-pro`,label:`Lumen Pro`,provider:`Lumen Labs`,description:`A million tokens of context.`,contextWindow:1e6,tags:[`vision`]}];function J(){return(0,A.jsx)(E,{models:q,defaultValue:`orbit-large`,size:`compact`,side:`top`})}function Y({conversation:e,sidebarOpen:t,onToggleSidebar:n,onNew:r,artifact:o,onOpenArtifact:s,onFirstMessage:c}){let p=h(e.store),m=p.messages[0],g=e.summary.title;return(0,F.useEffect)(()=>{m&&g===`New chat`&&c(l(m).slice(0,48)||`Attachment`)},[m,g,c]),(0,A.jsxs)(u,{value:p,children:[(0,A.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center gap-1 border-b px-2`,children:[(0,A.jsx)(b,{size:`xs`,className:I,label:t?`Hide conversations`:`Show conversations`,onClick:n,children:(0,A.jsx)(i,{})}),t?null:(0,A.jsx)(b,{size:`xs`,className:I,label:`New chat`,onClick:r,children:(0,A.jsx)(a,{})}),(0,A.jsx)(`h2`,{className:`min-w-0 flex-1 truncate px-1 text-[13px] font-semibold`,children:g}),(0,A.jsxs)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:[p.messages.length,` messages`]})]}),(0,A.jsx)(d,{empty:(0,A.jsx)(D,{title:`What are we building today?`,subtitle:`Everything streams from a scripted adapter: ask for code, research, a table, a page or the weather.`,suggestions:B}),toolTitles:V,toolResults:U,onOpenArtifact:s,activeArtifactId:o?.id??null}),(0,A.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,A.jsx)(f,{commands:z,toolbar:(0,A.jsx)(J,{}),footnote:`Scripted replies. Type / for commands, Shift+Enter for a new line.`})})]})}function X(){let e=_();return(0,A.jsx)(Z,{now:e},e)}function Z({now:e}){let[t,n]=(0,F.useState)(()=>K(e)),[r,i]=(0,F.useState)(`c-new`),[a,o]=(0,F.useState)(!0),[s,c]=(0,F.useState)(null),l=t.find(e=>e.summary.id===r)??t[0],u=(e,t)=>n(n=>n.map(n=>n.summary.id===e?{...n,summary:{...n.summary,...t}}:n)),d=()=>{let e=`c-${Date.now().toString(36)}`;n(t=>[G(e,`New chat`,Date.now()),...t]),i(e),c(null)};return(0,A.jsx)(P,{sidebarOpen:a,onSidebarOpenChange:o,onArtifactOpenChange:e=>{e||c(null)},sidebar:(0,A.jsx)(ee,{conversations:t.map(e=>e.summary),activeId:r,onSelect:e=>{i(e),c(null)},onNew:d,onRename:(e,t)=>u(e,{title:t}),onTogglePin:e=>n(t=>t.map(t=>t.summary.id===e?{...t,summary:{...t.summary,pinned:!t.summary.pinned}}:t)),onDelete:e=>{t.find(t=>t.summary.id===e)?.store.stop(),n(t=>t.filter(t=>t.summary.id!==e)),e===r&&i(t.find(t=>t.summary.id!==e)?.summary.id??``)}}),artifact:s?(0,A.jsx)(T,{artifact:s,onClose:()=>c(null)},s.id):null,children:l?(0,A.jsx)(Y,{conversation:l,sidebarOpen:a,onToggleSidebar:()=>o(e=>!e),onNew:d,artifact:s,onOpenArtifact:c,onFirstMessage:e=>u(l.summary.id,{title:e,updatedAt:Date.now()})},l.summary.id):(0,A.jsx)(`div`,{className:`grid h-full place-items-center text-[13px] text-muted-foreground`,children:(0,A.jsx)(`button`,{type:`button`,onClick:d,className:`h-7 rounded-md border px-3 font-medium hover:bg-muted`,children:`Start a new chat`})})})}var Q=`import { useEffect, useState } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { Code2, Globe, PanelLeft, SquarePen, Sun, Table } from "lucide-react"
import { IconButton } from "@kitora/ui/icon-button"
import { ArtifactPanel, jsonObject, ChatEmptyState, ChatLayout, ChatMessages, ChatProvider, ChatStore, Composer, ConversationList, messageText, ModelSelector, threadFrom, useChatStore, type Artifact, type ChatMessage, type ConversationSummary, type JsonValue, type ModelOption, type SlashCommand, type Suggestion } from "@kitora/ai-chat"
import { demoAdapter } from "./assistant-script"

/** The header's icon buttons: ui's IconButton at 24px with the chat kit's rounded, 14px-glyph look. */
const HEADER_ICON_CLASS = "shrink-0 rounded-md [&_svg]:size-3.5"

const MINUTE = 60 * 1000
const DAY = 24 * 60 * MINUTE

const COMMANDS: readonly SlashCommand[] = [
  { name: "code", description: "Write code into an artifact", hint: "<task>" },
  { name: "research", description: "Search the web and cite sources", hint: "<question>" },
  { name: "table", description: "Answer as a comparison table" },
  { name: "page", description: "Build a small HTML page" },
  { name: "weather", description: "Call the weather tool", hint: "<city>" },
]

const SUGGESTIONS: readonly Suggestion[] = [
  { id: "code", title: "Write a debounce", detail: "typed, with cancel and flush", icon: <Code2 />, prompt: "Write a typed debounce function in TypeScript" },
  { id: "research", title: "Research streaming", detail: "SSE vs fetch streams, with sources", icon: <Globe />, prompt: "Research how browsers stream responses: SSE vs fetch" },
  { id: "table", title: "Compare transports", detail: "as a table", icon: <Table />, prompt: "Compare SSE, WebSocket and fetch streams in a table" },
  { id: "weather", title: "Check the weather", detail: "calls a tool", icon: <Sun />, prompt: "What's the weather in Lisbon?" },
]

/** Friendlier names for the tool cards. */
const TOOL_TITLES = { get_weather: "Weather", web_search: "Searched the web" } as const

/** A custom result body for the weather tool: a compact card instead of raw JSON. */
function WeatherResult(value: JsonValue) {
  const result = jsonObject(value)
  if (!result) return null
  const temp = typeof result.tempC === "number" ? result.tempC : null
  return (
    <div className="flex items-center gap-3 rounded-md bg-sky-500/10 p-2.5">
      <Sun className="size-6 text-amber-500" />
      <div>
        <div className="text-[15px] font-semibold tabular-nums">{temp === null ? "—" : \`\${temp} °C\`}</div>
        <div className="text-[11px] text-muted-foreground">
          {String(result.city ?? "")} · {String(result.condition ?? "")}
        </div>
      </div>
    </div>
  )
}

const TOOL_RESULTS = { get_weather: WeatherResult }

function seeded(id: string, question: string, answer: string): ChatMessage[] {
  return [
    { id: \`\${id}-u\`, role: "user", parentId: null, parts: [{ type: "text", text: question }], createdAt: 0, status: "complete" },
    { id: \`\${id}-a\`, role: "assistant", parentId: \`\${id}-u\`, parts: [{ type: "text", text: answer }], createdAt: 0, status: "complete" },
  ]
}

interface Conversation {
  readonly summary: ConversationSummary
  readonly store: ChatStore
}

function newConversation(id: string, title: string, updatedAt: number, messages: readonly ChatMessage[] = []): Conversation {
  return { summary: { id, title, updatedAt }, store: new ChatStore({ adapter: demoAdapter, thread: threadFrom(messages), conversationId: id }) }
}

function initialConversations(now: number): Conversation[] {
  return [
    newConversation("c-new", "New chat", now),
    newConversation("c-regex", "Regex for semver tags", now - 3 * 60 * MINUTE, seeded("c-regex", "Regex for a semver git tag like v1.2.3?", "Use \`^v(\\\\d+)\\\\.(\\\\d+)\\\\.(\\\\d+)$\` — three capture groups for major, minor and patch.")),
    newConversation("c-css", "Center a div, again", now - DAY - 60 * MINUTE, seeded("c-css", "Shortest way to center a div?", "\`display: grid; place-items: center;\` on the parent.")),
    newConversation("c-trip", "Lisbon in four days", now - 4 * DAY, seeded("c-trip", "Plan four days in Lisbon", "Day 1 **Alfama** · Day 2 **Belém** · Day 3 **Sintra** · Day 4 **LX Factory** and the river.")),
    newConversation("c-sql", "Index for a jsonb filter", now - 20 * DAY, seeded("c-sql", "Which index for \`where data @> '{\\"tag\\":\\"x\\"}'\`?", "A **GIN** index on \`data\` with \`jsonb_path_ops\` — smaller and faster for \`@>\`.")),
  ]
}

/** The models the composer toolbar offers; the scripted adapter answers the same whichever is chosen. */
const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", description: "Best for long, careful work.", contextWindow: 200_000, tags: ["reasoning", "vision"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", description: "Fast and cheap for everyday tasks.", contextWindow: 128_000 },
  { id: "lumen-pro", label: "Lumen Pro", provider: "Lumen Labs", description: "A million tokens of context.", contextWindow: 1_000_000, tags: ["vision"] },
]

/** The composer toolbar's model picker (compact, opening upwards). */
function ModelChip() {
  return <ModelSelector models={MODELS} defaultValue="orbit-large" size="compact" side="top" />
}

/** One conversation's chat column: header, transcript, composer. Keeps the active store subscribed. */
function ChatColumn({ conversation, sidebarOpen, onToggleSidebar, onNew, artifact, onOpenArtifact, onFirstMessage }: {
  readonly conversation: Conversation
  readonly sidebarOpen: boolean
  readonly onToggleSidebar: () => void
  readonly onNew: () => void
  readonly artifact: Artifact | null
  readonly onOpenArtifact: (artifact: Artifact) => void
  readonly onFirstMessage: (title: string) => void
}) {
  const chat = useChatStore(conversation.store)
  const first = chat.messages[0]
  const title = conversation.summary.title
  useEffect(() => {
    if (first && title === "New chat") onFirstMessage(messageText(first).slice(0, 48) || "Attachment")
  }, [first, title, onFirstMessage])
  return (
    <ChatProvider value={chat}>
      <header className="flex h-10 shrink-0 items-center gap-1 border-b px-2">
        <IconButton size="xs" className={HEADER_ICON_CLASS} label={sidebarOpen ? "Hide conversations" : "Show conversations"} onClick={onToggleSidebar}>
          <PanelLeft />
        </IconButton>
        {!sidebarOpen ? (
          <IconButton size="xs" className={HEADER_ICON_CLASS} label="New chat" onClick={onNew}>
            <SquarePen />
          </IconButton>
        ) : null}
        <h2 className="min-w-0 flex-1 truncate px-1 text-[13px] font-semibold">{title}</h2>
        <span className="text-[11px] text-muted-foreground tabular-nums">{chat.messages.length} messages</span>
      </header>
      <ChatMessages
        empty={<ChatEmptyState title="What are we building today?" subtitle="Everything streams from a scripted adapter: ask for code, research, a table, a page or the weather." suggestions={SUGGESTIONS} />}
        toolTitles={TOOL_TITLES}
        toolResults={TOOL_RESULTS}
        onOpenArtifact={onOpenArtifact}
        activeArtifactId={artifact?.id ?? null}
      />
      <div className="mx-auto w-full max-w-[720px] px-4 pb-3">
        <Composer commands={COMMANDS} toolbar={<ModelChip />} footnote="Scripted replies. Type / for commands, Shift+Enter for a new line." />
      </div>
    </ChatProvider>
  )
}

/**
 * A full assistant: conversations on the left (search, pin, rename, delete), the chat in the middle,
 * artifacts on the right. Each conversation is its own ChatStore, so switching keeps every thread,
 * and a reply keeps streaming in the background while you look at another one.
 */
export function AssistantWorkspace() {
  // keyed on "now", fixed for the page: conversations dated around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <Workspace key={now} now={now} />
}

function Workspace({ now }: { now: number }) {
  const [conversations, setConversations] = useState<readonly Conversation[]>(() => initialConversations(now))
  const [activeId, setActiveId] = useState("c-new")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [artifact, setArtifact] = useState<Artifact | null>(null)
  const active = conversations.find((c) => c.summary.id === activeId) ?? conversations[0]

  const patchSummary = (id: string, patch: Partial<ConversationSummary>) => setConversations((list) => list.map((c) => (c.summary.id === id ? { ...c, summary: { ...c.summary, ...patch } } : c)))

  const createChat = () => {
    const id = \`c-\${Date.now().toString(36)}\`
    setConversations((list) => [newConversation(id, "New chat", Date.now()), ...list])
    setActiveId(id)
    setArtifact(null)
  }

  return (
    <ChatLayout
      sidebarOpen={sidebarOpen}
      onSidebarOpenChange={setSidebarOpen}
      onArtifactOpenChange={(open) => {
        if (!open) setArtifact(null)
      }}
      sidebar={
        <ConversationList
          conversations={conversations.map((c) => c.summary)}
          activeId={activeId}
          onSelect={(id) => {
            setActiveId(id)
            setArtifact(null)
          }}
          onNew={createChat}
          onRename={(id, title) => patchSummary(id, { title })}
          onTogglePin={(id) => setConversations((list) => list.map((c) => (c.summary.id === id ? { ...c, summary: { ...c.summary, pinned: !c.summary.pinned } } : c)))}
          onDelete={(id) => {
            const target = conversations.find((c) => c.summary.id === id)
            target?.store.stop()
            setConversations((list) => list.filter((c) => c.summary.id !== id))
            if (id === activeId) setActiveId(conversations.find((c) => c.summary.id !== id)?.summary.id ?? "")
          }}
        />
      }
      artifact={artifact ? <ArtifactPanel key={artifact.id} artifact={artifact} onClose={() => setArtifact(null)} /> : null}
    >
      {active ? (
        <ChatColumn
          key={active.summary.id}
          conversation={active}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          onNew={createChat}
          artifact={artifact}
          onOpenArtifact={setArtifact}
          onFirstMessage={(title) => patchSummary(active.summary.id, { title, updatedAt: Date.now() })}
        />
      ) : (
        <div className="grid h-full place-items-center text-[13px] text-muted-foreground">
          <button type="button" onClick={createChat} className="h-7 rounded-md border px-3 font-medium hover:bg-muted">
            Start a new chat
          </button>
        </div>
      )}
    </ChatLayout>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>g(()=>import(`./workspace-fH35045L.js`),[]));var $=`import { createScriptedAdapter, lastUserText, type ChatRequest, type ScriptStep, type Source } from "@kitora/ai-chat"

// The demo assistant: a keyword-driven script for the scripted adapter, so every
// gallery page streams believable replies with no model behind it. Ask about a
// table, code, a web page, the weather, research, or say "fail" to see an error.

export const SOURCES: readonly Source[] = [
  { id: "s1", title: "Streams API — Web APIs | MDN", url: "https://developer.mozilla.org/en-US/docs/Web/API/Streams_API", siteName: "MDN", snippet: "The Streams API allows JavaScript to programmatically access streams of data received over the network and process them as desired." },
  { id: "s2", title: "Server-sent events — HTML Living Standard", url: "https://html.spec.whatwg.org/multipage/server-sent-events.html", siteName: "WHATWG", snippet: "To enable servers to push data to web pages over HTTP or using dedicated server-push protocols, this specification introduces the EventSource interface." },
  { id: "s3", title: "Using Fetch with ReadableStream", url: "https://web.dev/articles/fetch-api-error-handling", siteName: "web.dev", snippet: "Read a response body chunk by chunk with response.body.getReader() and decode it with TextDecoderStream." },
  { id: "s4", title: "AbortController — Web APIs | MDN", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", siteName: "MDN", snippet: "The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired." },
]

const TABLE_REPLY = \`Here's how the three transports compare for streaming model output:

| Transport | Direction | Reconnect | Best for |
|:--|:--:|:--:|:--|
| **SSE** | server → client | built in | token streams |
| **WebSocket** | both ways | manual | live collaboration |
| **fetch + ReadableStream** | server → client | manual | one-shot replies |

For a chat UI, *SSE* or a plain \\\`fetch\\\` stream is usually enough — you only need the server to push tokens.\`

const CODE_REPLY = \`Here's a small, typed \\\`debounce\\\` that also exposes \\\`cancel\\\`:

\\\`\\\`\\\`ts
export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number) {
  let timer: ReturnType<typeof setTimeout> | undefined
  const run = (...args: A) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
  run.cancel = () => clearTimeout(timer)
  return run
}
\\\`\\\`\\\`

Key points:

1. The timer resets on every call, so only the **last** call within \\\`ms\\\` runs.
2. \\\`cancel\\\` drops a pending call — handy on unmount.
3. The generic \\\`A\\\` keeps the argument types of \\\`fn\\\`.

I also put a fuller version with \\\`flush\\\` and leading-edge support in the panel →\`

const FULL_DEBOUNCE = \`export interface DebounceOptions {
  /** Run on the leading edge instead of the trailing one. */
  readonly leading?: boolean
}

export interface Debounced<A extends unknown[]> {
  (...args: A): void
  cancel(): void
  flush(): void
}

export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number, options: DebounceOptions = {}): Debounced<A> {
  let timer: ReturnType<typeof setTimeout> | undefined
  let pending: A | undefined

  const fire = () => {
    timer = undefined
    if (pending) {
      const args = pending
      pending = undefined
      fn(...args)
    }
  }

  const run = (...args: A) => {
    const idle = timer === undefined
    pending = args
    clearTimeout(timer)
    timer = setTimeout(fire, ms)
    if (options.leading && idle) fire()
  }

  run.cancel = () => {
    clearTimeout(timer)
    timer = undefined
    pending = undefined
  }
  run.flush = () => {
    clearTimeout(timer)
    fire()
  }
  return run
}\`

const PAGE_HTML = \`<!doctype html>
<html><head><style>
  body { font: 14px/1.5 system-ui, sans-serif; margin: 0; display: grid; place-items: center; min-height: 100vh; background: linear-gradient(135deg, #eef2ff, #fdf2f8); color: #1e1b4b; }
  .card { background: white; padding: 28px 32px; border-radius: 16px; box-shadow: 0 10px 30px rgb(30 27 75 / .12); text-align: center; width: 260px; }
  h1 { font-size: 18px; margin: 0 0 4px; }
  p { margin: 0 0 18px; color: #6b7280; font-size: 13px; }
  .n { font-size: 44px; font-weight: 700; font-variant-numeric: tabular-nums; }
  button { font: inherit; border: 0; border-radius: 8px; padding: 6px 14px; margin: 0 4px; background: #4f46e5; color: white; cursor: pointer; }
  button.ghost { background: #eef2ff; color: #4f46e5; }
</style></head><body>
  <div class="card">
    <h1>Counter</h1>
    <p>A tiny interactive page</p>
    <div class="n" id="n">0</div>
    <div><button class="ghost" onclick="n.textContent = +n.textContent - 1">−</button><button onclick="n.textContent = +n.textContent + 1">+</button></div>
  </div>
</body></html>\`

const DEFAULT_REPLY = \`Good question. Streaming a reply well comes down to three things:

- **Render as tokens arrive** — parse markdown on every chunk, but keep unfinished syntax (an open \\\`**\\\` or code fence) readable.
- **Stay pinned to the bottom** while the reader is there, and let go as soon as they scroll up.
- **Make Stop instant** — abort the request and keep what already streamed.

Try asking me for a *comparison table*, some *code*, a *web page*, the *weather*, or to *research* something.\`

const RESEARCH_REPLY = \`Browsers give you two good ways to consume a token stream:

**Server-sent events** use a long-lived HTTP response and the \\\`EventSource\\\` interface, with reconnection built in [2]. They are one-way, server to client, which is exactly what a chat reply needs.

**fetch with a ReadableStream** reads the body chunk by chunk through \\\`response.body.getReader()\\\` [3], and works with any method and headers, including \\\`POST\\\` with a JSON body [1].

Either way, wire an \\\`AbortController\\\` to your Stop button so the request is cancelled on the network, not just ignored [4].\`

/** What the assistant says to \`request\`, as script steps. */
export function assistantScript(request: ChatRequest): ScriptStep[] {
  const ask = lastUserText(request).toLowerCase()
  if (/\\bfail|error|break\\b/.test(ask)) {
    return [{ type: "stream-text", text: "Let me look that up for you… " }, { type: "wait", ms: 400 }, { type: "error", message: "The model is overloaded (529). Try again in a moment." }]
  }
  if (/table|compare|comparison/.test(ask)) return [{ type: "stream-text", text: TABLE_REPLY }]
  if (/code|debounce|function|typescript/.test(ask)) {
    return [
      { type: "stream-reasoning", text: "The user wants a debounce. Keep the inline version short and typed, mention cancel, and put the complete version with flush and leading-edge support in an artifact so the chat stays readable.", durationMs: 2300 },
      { type: "stream-text", text: CODE_REPLY },
      { type: "artifact", artifact: { id: "a-debounce", title: "debounce.ts", kind: "code", language: "typescript", content: FULL_DEBOUNCE } },
    ]
  }
  if (/page|html|landing|counter/.test(ask)) {
    return [
      { type: "stream-text", text: "Here's a small interactive counter page. Open it in the panel and switch between **Preview** and **Code**." },
      { type: "artifact", artifact: { id: "a-counter", title: "Counter page", kind: "html", content: PAGE_HTML } },
    ]
  }
  if (/weather/.test(ask)) {
    return [
      { type: "tool-call", id: "t-weather", name: "get_weather", args: { city: "Lisbon", units: "metric" } },
      { type: "wait", ms: 1100 },
      { type: "tool-result", id: "t-weather", result: { city: "Lisbon", tempC: 21, condition: "Sunny", humidity: 0.58, windKph: 14 } },
      { type: "stream-text", text: "It's **21 °C and sunny** in Lisbon right now, with a light 14 km/h breeze and 58% humidity. A good afternoon for a walk along the river." },
    ]
  }
  if (/research|search|latest|sse|stream/.test(ask)) {
    return [
      { type: "stream-reasoning", text: "I should check current docs rather than rely on memory: search for streaming fetch and server-sent events, then cite the specs.", durationMs: 1800 },
      { type: "tool-call", id: "t-search", name: "web_search", args: { query: "browser streaming fetch vs server-sent events", limit: 4 } },
      { type: "wait", ms: 1200 },
      { type: "tool-result", id: "t-search", result: SOURCES.map((s) => ({ title: s.title, url: s.url })) },
      { type: "sources", sources: SOURCES },
      { type: "stream-text", text: RESEARCH_REPLY },
    ]
  }
  return [{ type: "stream-text", text: DEFAULT_REPLY }]
}

/** The demo adapter every showcase page shares. */
export const demoAdapter = createScriptedAdapter({ script: assistantScript })
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>g(()=>import(`./assistant-script-m0LbiTWl.js`),[]));var te=[{name:`core`,what:`Message and part types, the thread tree (branches from edit and regenerate), stream folding, streaming-safe markdown parser, composer and list decisions, ChatStore, the ChatAdapter seam and a scripted fake adapter. No DOM, no React.`},{name:`dom`,what:`Headless browser behaviour: stick-to-bottom scrolling, textarea autosize, the AttachmentAdapter seam (default object URLs), clipboard, download and roving focus. No React, no styling.`},{name:`react`,what:`Hooks with no markup: useChat / useChatStore and the context, useComposer (draft, files, slash menu, submit and stop as prop getters), useStickToBottom (from @kitora/primitives/react), useDisclosure, useControllable. Copying goes through @kitora/display (CopyButton, useCopy).`},{name:`ui`,what:"Compound parts (ChatMessages.* on ui's MessageScroller, Message.* on ui's Message, Bubble, Attachment, MessageStatus and the MessageActions toolbar, Composer.*) and the presets built only from them, plus Markdown with renderer slots (drawn through ui's Prose, the look the editors kit's preview shares), ToolCallCard, ReasoningView, Trace (steps with plan, queue and subagent presets, the reasoning fold and tool steps on its status map), ContextUsage (the context window as a ring for the composer toolbar, details in a popover, on the feedback kit's Meter), ModelSelector (a model picker on ui's Select: models grouped by provider with descriptions and tags, searchable above 8, a bottom sheet on a phone, `name` for a form), SourceList, ArtifactPanel, ConversationList, ChatEmptyState and ChatLayout on the dock's SplitView."}];function ne(){return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(n,{title:`AI chat kit`,children:'Everything on these pages streams from a scripted adapter, so no model is called. Pick a suggestion or ask for code, research, a table, a page or the weather; type / for commands. Drag the edges between the panes to resize; drag a side pane past half its width to collapse it. Under `dir="rtl"` the thread mirrors while code stays left to right (Basics: messages has a right-to-left demo).'}),(0,A.jsx)(O,{n:1,title:`An assistant workspace`,blurb:`Conversations with recency groups, search, pin and rename; streaming replies with reasoning, tools, citations and artifacts; the artifact opens in a resizable side panel. Each conversation is its own store, so a reply keeps streaming while you switch away.`,code:Q,children:(0,A.jsx)(p,{testId:`workspace`,height:680,children:(0,A.jsx)(X,{})})}),(0,A.jsx)(O,{n:2,title:`The scripted assistant`,blurb:`The script behind the demos: steps of chunks, pauses and texts to stream, chosen by keywords in the question.`,code:$,children:(0,A.jsx)(`p`,{className:`p-4 text-[13px] text-muted-foreground`,children:"Open the Code tab to read the script. Swap `demoAdapter` for an adapter over your own backend and nothing else changes."})}),(0,A.jsx)(O,{n:3,title:`Layers`,blurb:`One package, four layers, each importing only the ones below and each its own entry.`,children:(0,A.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,A.jsx)(`tbody`,{children:te.map(e=>(0,A.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,A.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,A.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{ne as component};