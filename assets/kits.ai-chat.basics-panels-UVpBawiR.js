import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{D as n,O as r,S as i,_ as a,a as o,b as s,c as ee,g as c,i as l,n as u,o as d,r as f,s as p,t as m,u as h,x as g}from"./-kits.ai-chat.shared-Cm3Q7IHz.js";import{Bc as _,Cc as v,Ic as y}from"./index-9y5uwRd3.js";import{t as b}from"./code-block-qBHLFEGc.js";import{t as x}from"./copy-D6KPkybI.js";import{n as S,r as C,t as w}from"./conversation-list-C9jS1tef.js";import"./kit-gallery-B-Yr9fP4.js";import{t as T}from"./example-CZLJLtIC.js";var E=e(_(),1),D=y(),O=[{id:`code`,title:`retry.ts`,kind:`code`,language:`typescript`,content:`export async function retry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let last: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      last = err
      await new Promise((r) => setTimeout(r, 2 ** i * 100))
    }
  }
  throw last
}`},{id:`page`,title:`Badge page`,kind:`html`,content:`<!doctype html><body style="font:14px system-ui;display:grid;place-items:center;height:100vh;margin:0;background:#f8fafc"><span style="padding:6px 12px;border-radius:999px;background:#4f46e5;color:white">Shipped ✓</span></body>`},{id:`doc`,title:`Release notes`,kind:`document`,content:`## v1.4

- **Streaming** replies render as they arrive
- Stop keeps the partial answer

> Branches keep every edit and regenerate.`}];function k(){let[e,t]=(0,E.useState)(O[0]??null);return(0,D.jsxs)(`div`,{className:`flex h-full`,children:[(0,D.jsx)(`div`,{className:`flex w-60 shrink-0 flex-col gap-0 border-r p-3`,children:O.map(n=>(0,D.jsx)(p,{artifact:n,active:e?.id===n.id,onOpen:t},n.id))}),(0,D.jsx)(`div`,{className:`min-w-0 flex-1`,children:e?(0,D.jsx)(S,{artifact:e,onClose:()=>t(null)},e.id):(0,D.jsx)(`div`,{className:`grid h-full place-items-center text-[12px] text-muted-foreground`,children:`Closed. Pick a card to reopen.`})})]})}var A=`import { useState } from "react"
import { ArtifactCard, ArtifactPanel, type Artifact } from "@kitora/ai-chat"

const ARTIFACTS: readonly Artifact[] = [
  { id: "code", title: "retry.ts", kind: "code", language: "typescript", content: "export async function retry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {\\n  let last: unknown\\n  for (let i = 0; i < attempts; i++) {\\n    try {\\n      return await fn()\\n    } catch (err) {\\n      last = err\\n      await new Promise((r) => setTimeout(r, 2 ** i * 100))\\n    }\\n  }\\n  throw last\\n}" },
  { id: "page", title: "Badge page", kind: "html", content: "<!doctype html><body style=\\"font:14px system-ui;display:grid;place-items:center;height:100vh;margin:0;background:#f8fafc\\"><span style=\\"padding:6px 12px;border-radius:999px;background:#4f46e5;color:white\\">Shipped ✓</span></body>" },
  { id: "doc", title: "Release notes", kind: "document", content: "## v1.4\\n\\n- **Streaming** replies render as they arrive\\n- Stop keeps the partial answer\\n\\n> Branches keep every edit and regenerate." },
]

/** Cards in a message open the panel: Code / Preview tabs for pages and documents, copy, download, close. */
export function BasicArtifactPanel() {
  const [open, setOpen] = useState<Artifact | null>(ARTIFACTS[0] ?? null)
  return (
    <div className="flex h-full">
      <div className="flex w-60 shrink-0 flex-col gap-0 border-r p-3">
        {ARTIFACTS.map((a) => (
          <ArtifactCard key={a.id} artifact={a} active={open?.id === a.id} onOpen={setOpen} />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        {open ? <ArtifactPanel key={open.id} artifact={open} onClose={() => setOpen(null)} /> : <div className="grid h-full place-items-center text-[12px] text-muted-foreground">Closed. Pick a card to reopen.</div>}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>v(()=>import(`./artifact-panel-CaxDQ7_f.js`),[]));var j=Date.UTC(2026,9,15,15,0),M=3600*1e3,N=[{id:`c1`,title:`Streaming fetch vs SSE`,updatedAt:j-M,pinned:!0},{id:`c2`,title:`Debounce with leading edge`,updatedAt:j-2*M},{id:`c3`,title:`Postgres index for a jsonb filter`,updatedAt:j-26*M},{id:`c4`,title:`Trip plan: Lisbon in four days`,updatedAt:j-72*M},{id:`c5`,title:`Rename the billing service`,updatedAt:j-288*M},{id:`c6`,title:`Q3 retro notes`,updatedAt:j-1680*M}];function P(){let[e,t]=(0,E.useState)(N),[n,r]=(0,E.useState)(`c2`),i=e.find(e=>e.id===n);return(0,D.jsxs)(`div`,{className:`flex h-full`,children:[(0,D.jsx)(`div`,{className:`h-full w-64 shrink-0 border-r`,children:(0,D.jsx)(w,{conversations:e,activeId:n,now:j,onSelect:r,onNew:()=>{let n=`c${e.length+1}-${Date.now()}`;t(e=>[{id:n,title:`New chat`,updatedAt:j},...e]),r(n)},onRename:(e,n)=>t(t=>t.map(t=>t.id===e?{...t,title:n}:t)),onDelete:e=>t(t=>t.filter(t=>t.id!==e)),onTogglePin:e=>t(t=>t.map(t=>t.id===e?{...t,pinned:!t.pinned}:t))})}),(0,D.jsx)(`div`,{className:`grid min-w-0 flex-1 place-items-center p-4 text-center text-[13px] text-muted-foreground`,children:i?(0,D.jsxs)(`span`,{children:[`Open: `,(0,D.jsx)(`strong`,{className:`font-medium text-foreground`,children:i.title})]}):`No conversation selected`})]})}var F=`import { useState } from "react"
import { ConversationList, type ConversationSummary } from "@kitora/ai-chat"

const NOW = Date.UTC(2026, 9, 15, 15, 0)
const HOUR = 60 * 60 * 1000

const SEED: readonly ConversationSummary[] = [
  { id: "c1", title: "Streaming fetch vs SSE", updatedAt: NOW - HOUR, pinned: true },
  { id: "c2", title: "Debounce with leading edge", updatedAt: NOW - 2 * HOUR },
  { id: "c3", title: "Postgres index for a jsonb filter", updatedAt: NOW - 26 * HOUR },
  { id: "c4", title: "Trip plan: Lisbon in four days", updatedAt: NOW - 3 * 24 * HOUR },
  { id: "c5", title: "Rename the billing service", updatedAt: NOW - 12 * 24 * HOUR },
  { id: "c6", title: "Q3 retro notes", updatedAt: NOW - 70 * 24 * HOUR },
]

/** Recency groups, search, pin, rename (double-click or F2) and delete. ↑/↓ move between rows. */
export function BasicConversationList() {
  const [items, setItems] = useState<readonly ConversationSummary[]>(SEED)
  const [active, setActive] = useState("c2")
  const current = items.find((c) => c.id === active)
  return (
    <div className="flex h-full">
      <div className="h-full w-64 shrink-0 border-r">
        <ConversationList
        conversations={items}
        activeId={active}
        now={NOW}
        onSelect={setActive}
        onNew={() => {
          const id = \`c\${items.length + 1}-\${Date.now()}\`
          setItems((list) => [{ id, title: "New chat", updatedAt: NOW }, ...list])
          setActive(id)
        }}
        onRename={(id, title) => setItems((list) => list.map((c) => (c.id === id ? { ...c, title } : c)))}
        onDelete={(id) => setItems((list) => list.filter((c) => c.id !== id))}
        onTogglePin={(id) => setItems((list) => list.map((c) => (c.id === id ? { ...c, pinned: !c.pinned } : c)))}
        />
      </div>
      <div className="grid min-w-0 flex-1 place-items-center p-4 text-center text-[13px] text-muted-foreground">{current ? <span>Open: <strong className="font-medium text-foreground">{current.title}</strong></span> : "No conversation selected"}</div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>v(()=>import(`./conversation-list-D-TVOe2d.js`),[]));var I=s({script:e=>[{type:`stream-text`,text:`You said **${g(e)||`nothing`}**. Here it is as code:\n\n\`\`\`ts\nconst said = ${JSON.stringify(g(e))}\n\`\`\``}]});function L({lang:e,text:t}){let n=t.split(`
`).length;return(0,D.jsxs)(`figure`,{className:`my-2 overflow-hidden rounded-md border border-dashed`,children:[(0,D.jsxs)(`figcaption`,{className:`flex h-6 items-center justify-between bg-muted/50 px-2 font-mono text-[11px] text-muted-foreground`,children:[(0,D.jsx)(`span`,{children:e||`text`}),(0,D.jsxs)(`span`,{className:`tabular-nums`,children:[n,` `,n===1?`line`:`lines`]})]}),(0,D.jsx)(`pre`,{className:`overflow-x-auto p-2 font-mono text-[12px]`,children:t})]})}var R={code:e=>(0,D.jsx)(L,{...e})};function z(){return(0,D.jsx)(c,{value:a({adapter:I}),children:(0,D.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,D.jsxs)(u.Root,{children:[(0,D.jsx)(u.Viewport,{maxWidth:640,children:(0,D.jsx)(u.Items,{empty:(0,D.jsx)(`p`,{className:`py-8 text-center text-[12px] text-muted-foreground`,children:`Built from parts. Type something below.`}),renderMessage:(e,t)=>(0,D.jsxs)(o.Root,{message:e,isLast:t,className:`flex items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/40 data-[role=user]:bg-muted/30`,children:[(0,D.jsx)(`span`,{className:`w-16 shrink-0 pt-0.5 text-[11px] font-semibold text-muted-foreground uppercase`,children:e.role===`user`?`You`:`Bot`}),(0,D.jsxs)(o.Content,{children:[e.role===`user`?(0,D.jsx)(o.Bubble,{className:`max-w-none rounded-none bg-transparent p-0`}):(0,D.jsx)(o.Parts,{markdown:R}),(0,D.jsx)(o.Status,{})]}),(0,D.jsxs)(o.Actions,{visible:`hover`,children:[(0,D.jsx)(o.Copy,{}),e.role===`assistant`?(0,D.jsx)(o.Regenerate,{}):(0,D.jsx)(o.Edit,{}),(0,D.jsx)(o.Branches,{})]})]})})}),(0,D.jsx)(u.JumpToLatest,{}),(0,D.jsx)(u.Announcer,{})]}),(0,D.jsx)(`div`,{className:`p-3 pt-0`,children:(0,D.jsx)(d.Root,{allowFiles:!1,children:(0,D.jsxs)(d.Box,{className:`rounded-lg`,children:[(0,D.jsx)(d.Input,{placeholder:`Built from parts…`}),(0,D.jsxs)(d.Toolbar,{children:[(0,D.jsx)(d.Submit,{}),(0,D.jsx)(B,{})]})]})})})]})})}function B(){let{text:e}=d.useContext();return(0,D.jsxs)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:[e.length,` chars`]})}var V=`import { createScriptedAdapter, lastUserText } from "@kitora/ai-chat/core"
import { ChatProvider, useChat } from "@kitora/ai-chat/react"
import { ChatMessages, Composer, Message, type CodeBlockData, type MarkdownRenderers } from "@kitora/ai-chat/ui"

// A scripted adapter stands in for a real backend: it answers with a line of text and a code block.
const adapter = createScriptedAdapter({
  script: (request) => [{ type: "stream-text", text: \`You said **\${lastUserText(request) || "nothing"}**. Here it is as code:\\n\\n\\\`\\\`\\\`ts\\nconst said = \${JSON.stringify(lastUserText(request))}\\n\\\`\\\`\\\`\` }],
})

/** A code block renderer of our own: a slim header with the language and a line count. */
function MyCodeBlock({ lang, text }: CodeBlockData) {
  const lines = text.split("\\n").length
  return (
    <figure className="my-2 overflow-hidden rounded-md border border-dashed">
      <figcaption className="flex h-6 items-center justify-between bg-muted/50 px-2 font-mono text-[11px] text-muted-foreground">
        <span>{lang || "text"}</span>
        <span className="tabular-nums">
          {lines} {lines === 1 ? "line" : "lines"}
        </span>
      </figcaption>
      <pre className="overflow-x-auto p-2 font-mono text-[12px]">{text}</pre>
    </figure>
  )
}

const markdown: MarkdownRenderers = { code: (block) => <MyCodeBlock {...block} /> }

/**
 * The presets rebuilt from their public parts, in a different layout: every message is a
 * left-aligned row with a name label and actions on the right, and the composer puts Send on the
 * left of its toolbar with a character count beside it. Each layer comes from its own entry.
 */
export function BasicComposeYourOwn() {
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages.Root>
          <ChatMessages.Viewport maxWidth={640}>
            <ChatMessages.Items
              empty={<p className="py-8 text-center text-[12px] text-muted-foreground">Built from parts. Type something below.</p>}
              renderMessage={(message, isLast) => (
                <Message.Root message={message} isLast={isLast} className="flex items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/40 data-[role=user]:bg-muted/30">
                  <span className="w-16 shrink-0 pt-0.5 text-[11px] font-semibold text-muted-foreground uppercase">{message.role === "user" ? "You" : "Bot"}</span>
                  <Message.Content>
                    {message.role === "user" ? <Message.Bubble className="max-w-none rounded-none bg-transparent p-0" /> : <Message.Parts markdown={markdown} />}
                    <Message.Status />
                  </Message.Content>
                  <Message.Actions visible="hover">
                    <Message.Copy />
                    {message.role === "assistant" ? <Message.Regenerate /> : <Message.Edit />}
                    <Message.Branches />
                  </Message.Actions>
                </Message.Root>
              )}
            />
          </ChatMessages.Viewport>
          <ChatMessages.JumpToLatest />
          <ChatMessages.Announcer />
        </ChatMessages.Root>
        <div className="p-3 pt-0">
          <Composer.Root allowFiles={false}>
            <Composer.Box className="rounded-lg">
              <Composer.Input placeholder="Built from parts…" />
              <Composer.Toolbar>
                <Composer.Submit />
                <CharCount />
              </Composer.Toolbar>
            </Composer.Box>
          </Composer.Root>
        </div>
      </div>
    </ChatProvider>
  )
}

/** Any part can read the composer's state: here, the draft's length. */
function CharCount() {
  const { text } = Composer.useContext()
  return <span className="text-[11px] text-muted-foreground tabular-nums">{text.length} chars</span>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>v(()=>import(`./compose-your-own-C78N9S73.js`),[]));var H={async*stream(e,t){let n=g(e).split(``).toReversed().join(``),r=e.messages.at(-1)?.attachments??[],a=r.length>0?` (and ${r.length} uploaded: ${r.map(e=>e.url).join(`, `)})`:``;for(let e of`${n}${a}`.split(/(?<= )/))await i(40,t),yield{type:`text-delta`,delta:e}}},U={async fromFile(e){return await new Promise(e=>setTimeout(e,150)),{id:r(),name:e.name,size:e.size,mime:e.type||`application/octet-stream`,url:`https://files.example.com/${encodeURIComponent(e.name)}`}}};function W(){return(0,D.jsx)(c,{value:a({adapter:H}),children:(0,D.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,D.jsx)(u,{}),(0,D.jsx)(`div`,{className:`p-3 pt-0`,children:(0,D.jsx)(d,{placeholder:`Type something to echo…`,attachmentAdapter:U})})]})})}var G=`import { ChatMessages, ChatProvider, Composer, createAttachmentId, lastUserText, sleep, useChat, type AttachmentAdapter, type ChatAdapter, type ChatChunk } from "@kitora/ai-chat"

/**
 * The whole backend contract: turn a request into an async stream of chunks, and stop when the
 * signal aborts. This one echoes the question backwards; a real one reads your server's stream.
 */
const echoAdapter: ChatAdapter = {
  async *stream(request, signal) {
    const reversed = lastUserText(request).split("").toReversed().join("")
    const files = request.messages.at(-1)?.attachments ?? []
    const note = files.length > 0 ? \` (and \${files.length} uploaded: \${files.map((f) => f.url).join(", ")})\` : ""
    for (const word of \`\${reversed}\${note}\`.split(/(?<= )/)) {
      await sleep(40, signal)
      yield { type: "text-delta", delta: word }
    }
  },
}

/**
 * Files go through their own seam. This one pretends to upload (a short wait) and returns the
 * URL a storage service would hand back; a real one would PUT the file to S3 or your API.
 */
const fakeUpload: AttachmentAdapter = {
  async fromFile(file) {
    await new Promise((resolve) => setTimeout(resolve, 150))
    return { id: createAttachmentId(), name: file.name, size: file.size, mime: file.type || "application/octet-stream", url: \`https://files.example.com/\${encodeURIComponent(file.name)}\` }
  },
}

/**
 * The same seam over a server that sends one JSON \`ChatChunk\` per server-sent event. Not used on
 * this page (there is no server); shown as the shape a real adapter takes.
 */
export function sseAdapter(url: string): ChatAdapter {
  return {
    async *stream(request, signal) {
      const res = await fetch(url, { method: "POST", body: JSON.stringify(request), headers: { "content-type": "application/json" }, signal })
      if (!res.body) throw new Error(\`No stream from \${url} (\${res.status})\`)
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader()
      let buffer = ""
      for (;;) {
        const { value, done } = await reader.read()
        if (done) return
        buffer += value
        const events = buffer.split("\\n\\n")
        buffer = events.pop() ?? ""
        for (const event of events) {
          const data = event.replace(/^data: ?/gm, "")
          if (data) yield parseChunk(data)
        }
      }
    },
  }
}

/** Narrows one event's JSON to a chunk; anything unexpected becomes an error chunk instead of a crash. */
function parseChunk(data: string): ChatChunk {
  const value: unknown = JSON.parse(data)
  if (typeof value === "object" && value !== null && "type" in value && value.type === "text-delta" && "delta" in value && typeof value.delta === "string") return { type: "text-delta", delta: value.delta }
  return { type: "error", message: \`Unexpected event: \${data.slice(0, 80)}\` }
}

/** Any backend plugs in through \`ChatAdapter\`, any file store through \`AttachmentAdapter\`. Type something (and attach a file): it streams back reversed. */
export function BasicCustomAdapter() {
  const chat = useChat({ adapter: echoAdapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer placeholder="Type something to echo…" attachmentAdapter={fakeUpload} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>v(()=>import(`./custom-adapter-DXqO1WyV.js`),[]));var K=[{id:`u1`,role:`user`,parentId:null,parts:[{type:`text`,text:`One word for a function that may run twice safely?`}],createdAt:0,status:`complete`},{id:`a1`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`**Idempotent.** Running it again leaves the same result.`}],createdAt:0,status:`complete`},{id:`a2`,role:`assistant`,parentId:`u1`,parts:[{type:`text`,text:`**Re-entrant**, if you mean it can be called again before the first call returns.`}],createdAt:0,status:`complete`}],q=s({script:()=>[{type:`stream-text`,text:`**Safe to retry.**`}]});function J(){return(0,D.jsx)(c,{value:a({adapter:q,thread:n(K)}),children:(0,D.jsx)(`div`,{className:`flex h-full flex-col`,children:(0,D.jsx)(u,{renderMessage:(e,t)=>(0,D.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[e.role===`assistant`?(0,D.jsx)(f,{messageId:e.id,className:`self-start`}):null,(0,D.jsx)(l,{message:e,isLast:t,assistantName:`Helper`})]})})})})}var Y=`import { BranchSwitcher, ChatMessages, ChatMessageView, ChatProvider, createScriptedAdapter, threadFrom, useChat, type ChatMessage } from "@kitora/ai-chat"

// Two answers to the same question: both have parentId "u1", so they are alternatives.
const SEED: readonly ChatMessage[] = [
  { id: "u1", role: "user", parentId: null, parts: [{ type: "text", text: "One word for a function that may run twice safely?" }], createdAt: 0, status: "complete" },
  { id: "a1", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "**Idempotent.** Running it again leaves the same result." }], createdAt: 0, status: "complete" },
  { id: "a2", role: "assistant", parentId: "u1", parts: [{ type: "text", text: "**Re-entrant**, if you mean it can be called again before the first call returns." }], createdAt: 0, status: "complete" },
]

const adapter = createScriptedAdapter({ script: () => [{ type: "stream-text", text: "**Safe to retry.**" }] })

/**
 * The preset message row (\`ChatMessageView\`) reused inside your own \`renderMessage\`, with a
 * \`BranchSwitcher\` placed above each answer that has alternatives instead of only in the actions.
 */
export function BasicMessageRows() {
  const chat = useChat({ adapter, thread: threadFrom(SEED) })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages
          renderMessage={(message, isLast) => (
            <div className="flex flex-col gap-0.5">
              {message.role === "assistant" ? <BranchSwitcher messageId={message.id} className="self-start" /> : null}
              <ChatMessageView message={message} isLast={isLast} assistantName="Helper" />
            </div>
          )}
        />
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>v(()=>import(`./message-rows-Cv1-93MZ.js`),[]));var X=`const ctrl = new AbortController()
fetch(url, { signal: ctrl.signal })
stop.onclick = () => ctrl.abort()`,Z=[{id:`spec`,name:`streaming-spec.pdf`,size:482133,mime:`application/pdf`},{id:`log`,name:`server.log`,size:12480,mime:`text/plain`}],Q={id:`mdn`,title:`AbortController — Web APIs`,url:`https://developer.mozilla.org/en-US/docs/Web/API/AbortController`,siteName:`MDN`};function te(){return(0,D.jsxs)(`div`,{className:`grid gap-3 p-4 sm:grid-cols-2`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`p`,{className:`mb-1 text-[11px] font-medium text-muted-foreground`,children:`CodeBlock`}),(0,D.jsx)(b,{code:X,language:`ts`})]}),(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`p`,{className:`mb-1 text-[11px] font-medium text-muted-foreground`,children:`CodeLines`}),(0,D.jsx)(`div`,{className:`h-24 overflow-hidden rounded-lg border`,children:(0,D.jsx)(C,{text:X})})]}),(0,D.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,D.jsx)(`p`,{className:`text-[11px] font-medium text-muted-foreground`,children:`AttachmentChip and CopyButton`}),(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[Z.map(e=>(0,D.jsx)(ee,{attachment:e},e.id)),(0,D.jsx)(x,{value:`npm install @kitora/ai-chat`,label:`Copy install command`})]})]}),(0,D.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,D.jsx)(`p`,{className:`text-[11px] font-medium text-muted-foreground`,children:`SourceCard`}),(0,D.jsx)(h,{source:Q,index:1})]})]})}var $=`import { AttachmentChip, CodeLines, SourceCard, type Attachment, type Source } from "@kitora/ai-chat"
import { CodeBlock, CopyButton } from "@kitora/display"

// Short lines keep the CodeBlock readable at phone width; its <pre> is still a focusable stop when it does scroll.
// CodeBlock and CopyButton are display's: the same ones the chat's own fenced blocks are built from.
const SNIPPET = \`const ctrl = new AbortController()\\nfetch(url, { signal: ctrl.signal })\\nstop.onclick = () => ctrl.abort()\`

const FILES: readonly Attachment[] = [
  { id: "spec", name: "streaming-spec.pdf", size: 482_133, mime: "application/pdf" },
  { id: "log", name: "server.log", size: 12_480, mime: "text/plain" },
]

const SOURCE: Source = { id: "mdn", title: "AbortController — Web APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", siteName: "MDN" }

/**
 * The small pieces the presets are made of, used on their own: a fenced code block with its copy
 * button, numbered code lines, a bare copy button, attachment chips and one source card.
 */
export function BasicStandaloneParts() {
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2">
      <div className="min-w-0">
        <p className="mb-1 text-[11px] font-medium text-muted-foreground">CodeBlock</p>
        <CodeBlock code={SNIPPET} language="ts" />
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-[11px] font-medium text-muted-foreground">CodeLines</p>
        <div className="h-24 overflow-hidden rounded-lg border">
          <CodeLines text={SNIPPET} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-medium text-muted-foreground">AttachmentChip and CopyButton</p>
        <div className="flex flex-wrap items-center gap-1.5">
          {FILES.map((file) => (
            <AttachmentChip key={file.id} attachment={file} />
          ))}
          <CopyButton value="npm install @kitora/ai-chat" label="Copy install command" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-medium text-muted-foreground">SourceCard</p>
        <SourceCard source={SOURCE} index={1} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>v(()=>import(`./standalone-parts-CC-l8xlG.js`),[]));function ne(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Basics: panels and adapters`,children:`The pieces around the chat: the conversation list, the artifact panel, the adapters a backend and a file store implement, and the presets rebuilt from parts.`}),(0,D.jsx)(T,{n:1,title:`Conversation list`,blurb:`Pinned, Today, Yesterday, Previous 7 and 30 days, then months. Search, pin, rename (double-click or F2), delete.`,code:F,children:(0,D.jsx)(m,{testId:`basic-conversations`,height:420,children:(0,D.jsx)(P,{})})}),(0,D.jsx)(T,{n:2,title:`Artifact panel`,blurb:`Code with line numbers; pages preview in a sandboxed iframe; documents render as markdown. Copy, download, close.`,code:A,children:(0,D.jsx)(m,{testId:`basic-artifact`,height:340,children:(0,D.jsx)(k,{})})}),(0,D.jsx)(T,{n:3,title:`Your own adapters`,blurb:"`ChatAdapter` is one method: request in, async chunks out, stop on abort. `AttachmentAdapter` turns a picked file into an attachment (here a fake upload). The file also shows the shape of an SSE adapter.",code:G,children:(0,D.jsx)(m,{testId:`basic-adapter`,height:300,children:(0,D.jsx)(W,{})})}),(0,D.jsx)(T,{n:4,title:`Compose your own`,blurb:"The transcript, message and composer presets rebuilt from their public parts (`ChatMessages.*`, `Message.*`, `Composer.*`) in another layout, with a custom code-block renderer. Imports come from the per-layer entries.",code:V,children:(0,D.jsx)(m,{testId:`basic-compose`,height:360,children:(0,D.jsx)(z,{})})}),(0,D.jsx)(T,{n:5,title:`Your own message rows`,blurb:"`ChatMessageView`, the preset row, reused inside `renderMessage`, with a `BranchSwitcher` placed above each answer that has alternatives.",code:Y,children:(0,D.jsx)(m,{testId:`basic-message-rows`,height:300,children:(0,D.jsx)(J,{})})}),(0,D.jsx)(T,{n:6,title:`Small parts on their own`,blurb:"`CodeLines`, `AttachmentChip` and `SourceCard` outside a chat, for your own layouts, next to display's `CodeBlock` and `CopyButton`, which the chat's own code blocks and copy actions are built from.",code:$,children:(0,D.jsx)(m,{testId:`basic-standalone-parts`,height:500,children:(0,D.jsx)(te,{})})})]})}export{ne as component};