import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./brain-COFpobH3.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./sparkles-B4LD-Yja.js";import{E as i,T as a,_ as o,b as s,g as c,n as l,o as u,t as d,x as f}from"./-kits.ai-chat.shared-5Z9-FsFT.js";import{t as p}from"./zap-BA254TV6.js";import{Bc as m,Cc as h,Ic as g}from"./index-B9ukmIN1.js";import{t as _}from"./context-usage-_GfYKmHd.js";import{t as v}from"./model-selector-uML3O7Os.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";var b=g(),x=s({script:e=>[{type:`stream-text`,text:`Noted: **${f(e)||`nothing`}**. Every message and reply counts against the context window, so the ring in the toolbar fills as the conversation grows.`}]}),S=2e5,C=136e3,w=2400;function T(e){return Math.ceil(e.length/4)}function E(){let e=o({adapter:x}),t=C,n=0;for(let r of e.messages)r.role===`user`?t+=T(a(r)):(t+=w,n+=T(a(r)));let r=Math.min(S,t+n);return(0,b.jsx)(c,{value:e,children:(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsx)(l,{}),(0,b.jsx)(`div`,{className:`p-3 pt-0`,children:(0,b.jsx)(u,{placeholder:`Send a few messages and watch the ring`,attachments:!1,toolbar:(0,b.jsx)(_,{used:r,max:S,breakdown:{input:t,output:n},cost:t*3e-6+n*15e-6})})})]})})}var D=`import { ChatMessages, ChatProvider, Composer, ContextUsage, createScriptedAdapter, lastUserText, messageText, useChat } from "@kitora/ai-chat"

const adapter = createScriptedAdapter({
  script: (request) => [{ type: "stream-text", text: \`Noted: **\${lastUserText(request) || "nothing"}**. Every message and reply counts against the context window, so the ring in the toolbar fills as the conversation grows.\` }],
})

/** A 200k window that already holds a long system prompt and earlier turns. */
const WINDOW = 200_000
const EARLIER = 136_000
/** Each reply here also reads a file with a tool, and that tool result comes back as input tokens. */
const TOOL_RESULT = 2_400

/** A rough count, four characters a token; a real host reads the model's own usage numbers. */
function tokens(text: string): number {
  return Math.ceil(text.length / 4)
}

/** The composer's toolbar shows how much of the context window the conversation has used; press the ring for the details. */
export function BasicContextUsage() {
  const chat = useChat({ adapter })
  let input = EARLIER
  let output = 0
  for (const message of chat.messages) {
    if (message.role === "user") input += tokens(messageText(message))
    else {
      input += TOOL_RESULT
      output += tokens(messageText(message))
    }
  }
  const used = Math.min(WINDOW, input + output)
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer
            placeholder="Send a few messages and watch the ring"
            attachments={false}
            toolbar={<ContextUsage used={used} max={WINDOW} breakdown={{ input, output }} cost={input * 0.000003 + output * 0.000015} />}
          />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>h(()=>import(`./context-usage-CvdRfaxT.js`),[]));var O=e(m(),1),k=[{id:`orbit-large`,label:`Orbit Large`,provider:`Northwind AI`,icon:(0,b.jsx)(r,{}),description:`Best for long, careful work.`,contextWindow:2e5,tags:[`reasoning`,`vision`]},{id:`orbit-small`,label:`Orbit Small`,provider:`Northwind AI`,icon:(0,b.jsx)(p,{}),description:`Fast and cheap for everyday tasks.`,contextWindow:128e3},{id:`lumen-pro`,label:`Lumen Pro`,provider:`Lumen Labs`,icon:(0,b.jsx)(t,{}),description:`A million tokens of context.`,contextWindow:1e6,tags:[`vision`]}];function A(){let[e,t]=(0,O.useState)(`orbit-small`),n=(0,O.useRef)(e);n.current=e;let[r]=(0,O.useState)(()=>s({script:e=>[{type:`stream-text`,text:`**${k.find(e=>e.id===n.current)?.label??`No model`}** here. You said: ${f(e)||`nothing`}.`}]}));return(0,b.jsx)(c,{value:o({adapter:r}),children:(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsx)(l,{}),(0,b.jsx)(`div`,{className:`p-3 pt-0`,children:(0,b.jsx)(u,{placeholder:`Pick a model, then send`,attachments:!1,toolbar:(0,b.jsx)(v,{models:k,value:e,onValueChange:t,size:`compact`,side:`top`})})})]})})}var j=`import { useRef, useState } from "react"
import { Brain, Sparkles, Zap } from "lucide-react"
import { ChatMessages, ChatProvider, Composer, ModelSelector, createScriptedAdapter, lastUserText, useChat, type ModelOption } from "@kitora/ai-chat"

const MODELS: readonly ModelOption[] = [
  { id: "orbit-large", label: "Orbit Large", provider: "Northwind AI", icon: <Sparkles />, description: "Best for long, careful work.", contextWindow: 200_000, tags: ["reasoning", "vision"] },
  { id: "orbit-small", label: "Orbit Small", provider: "Northwind AI", icon: <Zap />, description: "Fast and cheap for everyday tasks.", contextWindow: 128_000 },
  { id: "lumen-pro", label: "Lumen Pro", provider: "Lumen Labs", icon: <Brain />, description: "A million tokens of context.", contextWindow: 1_000_000, tags: ["vision"] },
]

/** The composer's toolbar picks the model; the scripted reply says which one answered (a real adapter sends it with the request). */
export function BasicModelSelector() {
  const [model, setModel] = useState<string | null>("orbit-small")
  // The store keeps the adapter it was made with, so the reply reads the model chosen at the time of each send.
  const chosen = useRef(model)
  chosen.current = model
  const [adapter] = useState(() =>
    createScriptedAdapter({
      script: (request) => [{ type: "stream-text", text: \`**\${MODELS.find((m) => m.id === chosen.current)?.label ?? "No model"}** here. You said: \${lastUserText(request) || "nothing"}.\` }],
    }),
  )
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer placeholder="Pick a model, then send" attachments={false} toolbar={<ModelSelector models={MODELS} value={model} onValueChange={setModel} size="compact" side="top" />} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>h(()=>import(`./model-selector-BF4Anf7u.js`),[]));var M=s({script:e=>{let t=e.messages.at(-1)?.attachments??[];return[{type:`stream-text`,text:t.length>0?`Got ${t.length} file${t.length===1?``:`s`}: ${t.map(e=>`\`${e.name}\``).join(`, `)}.`:`No files this time.`}]}});function N(){let e=o({adapter:M}),[t,n]=(0,O.useState)(null);return(0,b.jsx)(c,{value:e,children:(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsx)(l,{}),(0,b.jsxs)(`div`,{className:`p-3 pt-0`,children:[t?(0,b.jsx)(`p`,{role:`alert`,className:`mb-1.5 text-[12px] text-red-600 dark:text-red-400`,children:t}):null,(0,b.jsx)(u,{placeholder:`Attach a file and send…`,attachmentRules:{accept:[`image/*`,`application/pdf`],maxBytes:5*1024*1024,maxFiles:3},onReject:n})]})]})})}var P=`import { useState } from "react"
import { ChatMessages, ChatProvider, Composer, createScriptedAdapter, useChat } from "@kitora/ai-chat"

const adapter = createScriptedAdapter({
  script: (request) => {
    const files = request.messages.at(-1)?.attachments ?? []
    return [{ type: "stream-text", text: files.length > 0 ? \`Got \${files.length} file\${files.length === 1 ? "" : "s"}: \${files.map((f) => \`\\\`\${f.name}\\\`\`).join(", ")}.\` : "No files this time." }]
  },
})

/** Attach with the clip, paste an image, or drop files on the box. Images and PDFs only, 5 MB each, three at most. */
export function BasicAttachments() {
  const chat = useChat({ adapter })
  const [refused, setRefused] = useState<string | null>(null)
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          {refused ? <p role="alert" className="mb-1.5 text-[12px] text-red-600 dark:text-red-400">{refused}</p> : null}
          <Composer placeholder="Attach a file and send…" attachmentRules={{ accept: ["image/*", "application/pdf"], maxBytes: 5 * 1024 * 1024, maxFiles: 3 }} onReject={setRefused} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>h(()=>import(`./attachments-CP-UNCe6.js`),[]));var F=[{name:`summarize`,description:`Summarise a page`,hint:`<url>`},{name:`translate`,description:`Translate text`,hint:`<language>`},{name:`explain`,description:`Explain code step by step`},{name:`clear`,description:`Clear the conversation`}],I=s({script:e=>[{type:`stream-text`,text:`You ran \`${f(e)}\`.`}]});function L(){let e=o({adapter:I});return(0,b.jsx)(c,{value:e,children:(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsx)(l,{}),(0,b.jsx)(`div`,{className:`p-3 pt-0`,children:(0,b.jsx)(u,{placeholder:`Type / for commands`,attachments:!1,commands:F,onCommand:t=>t.name===`clear`?(e.store.load(i()),!0):!1})})]})})}var R=`import { ChatMessages, ChatProvider, Composer, createScriptedAdapter, emptyThread, lastUserText, useChat, type SlashCommand } from "@kitora/ai-chat"

const COMMANDS: readonly SlashCommand[] = [
  { name: "summarize", description: "Summarise a page", hint: "<url>" },
  { name: "translate", description: "Translate text", hint: "<language>" },
  { name: "explain", description: "Explain code step by step" },
  { name: "clear", description: "Clear the conversation" },
]

const adapter = createScriptedAdapter({ script: (request) => [{ type: "stream-text", text: \`You ran \\\`\${lastUserText(request)}\\\`.\` }] })

/** Type \`/\` to open the menu; ↑↓ choose, Enter or Tab pick. \`/clear\` is handled locally and never sent. */
export function BasicSlashCommands() {
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer
            placeholder="Type / for commands"
            attachments={false}
            commands={COMMANDS}
            onCommand={(command) => {
              if (command.name !== "clear") return false
              chat.store.load(emptyThread())
              return true
            }}
          />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>h(()=>import(`./slash-commands-B28yyVWh.js`),[]));var z=Array.from({length:12},(e,t)=>`${t+1}. A deliberately slow line of text, so there is time to press **Stop**.`).join(`
`),B=s({script:()=>[{type:`stream-text`,text:z}],tokenDelayMs:60});function V(){let e=o({adapter:B});return(0,b.jsx)(c,{value:e,children:(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsx)(l,{}),(0,b.jsx)(`div`,{className:`p-3 pt-0`,children:(0,b.jsx)(u,{placeholder:`Send anything, then Stop`,attachments:!1,footnote:(0,b.jsxs)(`span`,{className:`tabular-nums`,children:[`Status: `,e.state.status]})})})]})})}var H=`import { ChatMessages, ChatProvider, Composer, createScriptedAdapter, useChat } from "@kitora/ai-chat"

const LONG = Array.from({ length: 12 }, (_, i) => \`\${i + 1}. A deliberately slow line of text, so there is time to press **Stop**.\`).join("\\n")

// A slow adapter (60 ms per word) makes the Send → Stop switch easy to see.
const adapter = createScriptedAdapter({ script: () => [{ type: "stream-text", text: LONG }], tokenDelayMs: 60 })

/** While a reply streams the Send button becomes Stop (Esc works too); what already arrived stays, marked Stopped. */
export function BasicSubmitStop() {
  const chat = useChat({ adapter })
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages />
        <div className="p-3 pt-0">
          <Composer placeholder="Send anything, then Stop" attachments={false} footnote={<span className="tabular-nums">Status: {chat.state.status}</span>} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>h(()=>import(`./submit-stop-DRO4rZOw.js`),[]));function U(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`Basics: the composer`,children:`A multiline box that grows with its text: Enter sends, Shift+Enter breaks the line, and IME composition never sends early.`}),(0,b.jsx)(y,{n:1,title:`Attachments`,blurb:`The clip, paste or drop. Rules refuse a file with a reason: type, size, or count.`,code:P,children:(0,b.jsx)(d,{testId:`basic-attachments`,height:300,children:(0,b.jsx)(N,{})})}),(0,b.jsx)(y,{n:2,title:`Slash commands`,blurb:"Type `/` at the start: a filtered menu, ↑↓ to choose, Enter or Tab to pick, Esc to close. A host can handle a command locally.",code:R,children:(0,b.jsx)(d,{testId:`basic-slash`,height:320,children:(0,b.jsx)(L,{})})}),(0,b.jsx)(y,{n:3,title:`Submit and stop`,blurb:`Send turns into Stop while a reply streams (Esc too). The partial reply stays, marked Stopped.`,code:H,children:(0,b.jsx)(d,{testId:`basic-stop`,height:340,children:(0,b.jsx)(V,{})})}),(0,b.jsx)(y,{n:4,title:`Context usage`,blurb:"`ContextUsage` in the toolbar: a ring and the percent of the context window used, green under 70%, amber to 90%, red above. Press it for the tokens, the input and output breakdown and the cost.",code:D,children:(0,b.jsx)(d,{testId:`basic-context-usage`,height:340,children:(0,b.jsx)(E,{})})}),(0,b.jsx)(y,{n:5,title:`Model selector`,blurb:"`ModelSelector` in the toolbar: the ui Select with models grouped by provider, each with its description and tags, opening upwards. A searchable list above 8 models, a bottom sheet on a phone, and `name` for a form.",code:j,children:(0,b.jsx)(d,{testId:`basic-model-selector`,height:340,children:(0,b.jsx)(A,{})})})]})}export{U as component};