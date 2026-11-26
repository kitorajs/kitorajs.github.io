import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./play--5eXVtC5.js";import{Bc as r,Cc as i,Ic as a}from"./index-9y5uwRd3.js";import{a as o,o as s,t as c}from"./adapters-DpH8EXtx.js";import{n as l,r as u,t as d}from"./code-block-qBHLFEGc.js";import{t as f}from"./timeline-BQ9mCFLX.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=a(),h=`import { CodeBlock } from "@kitora/display"

export function Example() {
  return <CodeBlock title="hello.ts" code={'console.log("hi")'} />
}`;function g(){return(0,m.jsx)(d,{title:`example.tsx`,code:h})}var _=`import { CodeBlock } from "@kitora/display"

const CODE = \`import { CodeBlock } from "@kitora/display"

export function Example() {
  return <CodeBlock title="hello.ts" code={'console.log("hi")'} />
}\`

/** One snippet: a title bar with the file name, the language from its extension, wrap and copy. */
export function BasicCodeBlock() {
  return <CodeBlock title="example.tsx" code={CODE} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./code-block-qM9EqqyS.js`),[]));var v=`export async function retry<T>(run: () => Promise<T>, attempts = 3): Promise<T> {
  let last: unknown
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await run()
    } catch (error) {
      last = error
      await new Promise((r) => setTimeout(r, 2 ** i * 100))
    }
  }
  throw last
}`;function y(){return(0,m.jsx)(d,{title:`retry.ts`,code:v,startLine:40,highlight:`44-46`})}var b=`import { CodeBlock } from "@kitora/display"

const CODE = \`export async function retry<T>(run: () => Promise<T>, attempts = 3): Promise<T> {
  let last: unknown
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await run()
    } catch (error) {
      last = error
      await new Promise((r) => setTimeout(r, 2 ** i * 100))
    }
  }
  throw last
}\`

/** Line numbers start at 40 (a snippet cut from a file) and lines 44–46 are highlighted, numbered as displayed. */
export function BasicCodeLines() {
  return <CodeBlock title="retry.ts" code={CODE} startLine={40} highlight="44-46" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./code-lines-CMEsynEE.js`),[]));var x=[{name:`button.tsx`,code:`export function Button({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>
}`},{name:`button.css`,code:`.btn {
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
}`},{name:`package.json`,code:`{
  "name": "@acme/button",
  "version": "0.1.0",
  "private": true
}`}];function S(){return(0,m.jsx)(l,{files:x})}var C=`import { CodeTabs } from "@kitora/display"

const FILES = [
  { name: "button.tsx", code: \`export function Button({ children }: { children: React.ReactNode }) {\\n  return <button className="btn">{children}</button>\\n}\` },
  { name: "button.css", code: \`.btn {\\n  height: 28px;\\n  padding: 0 10px;\\n  border-radius: 6px;\\n}\` },
  { name: "package.json", code: \`{\\n  "name": "@acme/button",\\n  "version": "0.1.0",\\n  "private": true\\n}\` },
] as const

/** Several files in one frame; ←/→ move between the tabs, copy takes the active file. */
export function BasicCodeTabs() {
  return <CodeTabs files={FILES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>i(()=>import(`./code-tabs-Ds-cM5ol.js`),[]));function w(){return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,m.jsxs)(`p`,{children:[`Run `,(0,m.jsx)(u,{children:`pnpm add @kitora/display`}),` and import `,(0,m.jsx)(u,{children:`CodeBlock`}),` from the barrel.`]}),(0,m.jsx)(d,{bare:!0,language:`bash`,code:`pnpm add @kitora/display`})]})}var T=`import { CodeBlock, InlineCode } from "@kitora/display"

/** Inline code in prose, and a bare block (no header; copy shows on hover) for one-liners. */
export function BasicInlineCode() {
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <p>
        Run <InlineCode>pnpm add @kitora/display</InlineCode> and import <InlineCode>CodeBlock</InlineCode> from the barrel.
      </p>
      <CodeBlock bare language="bash" code="pnpm add @kitora/display" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>i(()=>import(`./inline-code-_eARSJkj.js`),[]));var E=e(r(),1),D=`const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
console.log(total.toFixed(2))`;function O(){let[e,t]=(0,E.useState)(!1),[r,i]=(0,E.useState)(0);return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(d.Root,{code:D,language:`js`,wrap:e,onWrapChange:t,lineNumbers:!0,children:[(0,m.jsxs)(d.Header,{children:[(0,m.jsx)(d.Language,{}),(0,m.jsx)(d.Title,{children:`cart-total.js`}),(0,m.jsxs)(`button`,{type:`button`,onClick:()=>i(e=>e+1),className:`inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-[12px] text-muted-foreground hover:bg-accent hover:text-foreground`,"data-testid":`compose-run`,children:[(0,m.jsx)(n,{className:`size-3`,"aria-hidden":!0}),`Run`]}),(0,m.jsx)(d.WrapToggle,{}),(0,m.jsx)(d.Copy,{})]}),(0,m.jsx)(d.Body,{maxHeight:160})]}),(0,m.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,"data-testid":`compose-status`,children:[`Wrap is `,e?`on`:`off`,` (owned by this component) · ran `,r,` `,r===1?`time`:`times`]})]})}var k=`import { CodeBlock } from "@kitora/display"
import { Play } from "lucide-react"
import { useState } from "react"

const CODE = \`const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
console.log(total.toFixed(2))\`

/**
 * The \`CodeBlock\` preset rebuilt from its public parts: Root owns the state, the header is yours
 * (here the language chip moves left and a Run button joins), and wrap is controlled from outside.
 */
export function ComposeCodeBlock() {
  const [wrap, setWrap] = useState(false)
  const [runs, setRuns] = useState(0)
  return (
    <div className="flex flex-col gap-2">
      <CodeBlock.Root code={CODE} language="js" wrap={wrap} onWrapChange={setWrap} lineNumbers>
        <CodeBlock.Header>
          <CodeBlock.Language />
          <CodeBlock.Title>cart-total.js</CodeBlock.Title>
          <button type="button" onClick={() => setRuns((n) => n + 1)} className="inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-[12px] text-muted-foreground hover:bg-accent hover:text-foreground" data-testid="compose-run">
            <Play className="size-3" aria-hidden />
            Run
          </button>
          <CodeBlock.WrapToggle />
          <CodeBlock.Copy />
        </CodeBlock.Header>
        <CodeBlock.Body maxHeight={160} />
      </CodeBlock.Root>
      <p className="text-[12px] text-muted-foreground" data-testid="compose-status">
        Wrap is {wrap ? "on" : "off"} (owned by this component) · ran {runs} {runs === 1 ? "time" : "times"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>i(()=>import(`./compose-code-block-ibbbG2UQ.js`),[]));var A=`12:00:01 INFO  server listening on :8080
12:00:07 WARN  slow query: 812 ms (orders by customer)
12:00:09 ERROR payment webhook failed: 504 from hooks.example.com
12:00:10 INFO  retry scheduled in 30 s`,j=new Date(`2026-10-15T14:30:00Z`),M=[{id:`a`,title:`Webhook retried`,tone:`warning`,time:new Date(j.getTime()-3*6e4)},{id:`b`,title:`Deploy finished`,tone:`success`,time:new Date(j.getTime()-95*6e4)}],N={ERROR:`deleted`,WARN:`number`,INFO:`comment`},P={highlight:(e,t)=>t===`text`?e.split(`
`).map(e=>{let t=/\b(ERROR|WARN|INFO)\b/.exec(e)?.[1];return[{kind:(t?N[t]:void 0)??`plain`,text:e}]}):o.highlight(e,t)};function F(e,t){let n=Math.max(0,Math.round((t.getTime()-e.getTime())/6e4));return n<60?`${n}m ago`:`${Math.floor(n/60)}h ${n%60}m ago`}function I(){let[e,t]=(0,E.useState)([]);return(0,m.jsxs)(c,{adapters:{highlighter:P,clipboard:(0,E.useMemo)(()=>({writeText:async e=>t(t=>[e,...t].slice(0,3))}),[]),formatters:(0,E.useMemo)(()=>({...s(`en-GB`),relativeTime:F}),[])},children:[(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-[1fr_16rem]`,children:[(0,m.jsx)(d,{title:`server.log`,code:A,language:`text`}),(0,m.jsx)(f,{events:M,now:j,density:`compact`})]}),(0,m.jsx)(`div`,{className:`mt-2 text-[12px] text-muted-foreground`,"data-testid":`adapter-copies`,children:e.length===0?`Press copy on the log: the text lands here, not on your clipboard.`:`Copied ${e.length}: ${e[0]?.split(`
`)[0]??``}…`})]})}var L=`import { CodeBlock, DisplayProvider, Timeline, builtinHighlighter, intlFormatters, type ClipboardAdapter, type Highlighter, type TokenKind } from "@kitora/display"
import { useMemo, useState } from "react"

const LOG = \`12:00:01 INFO  server listening on :8080
12:00:07 WARN  slow query: 812 ms (orders by customer)
12:00:09 ERROR payment webhook failed: 504 from hooks.example.com
12:00:10 INFO  retry scheduled in 30 s\`

/** A fixed clock so relative times read the same on the server and in the browser. */
const NOW = new Date("2026-10-15T14:30:00Z")
const EVENTS = [
  { id: "a", title: "Webhook retried", tone: "warning" as const, time: new Date(NOW.getTime() - 3 * 60_000) },
  { id: "b", title: "Deploy finished", tone: "success" as const, time: new Date(NOW.getTime() - 95 * 60_000) },
]

/** Log levels → token kinds, so the kit's own colours apply to a custom grammar. */
const LEVEL_KIND: Readonly<Record<string, TokenKind>> = { ERROR: "deleted", WARN: "number", INFO: "comment" }

/** Highlights log lines by level when the language is plain text; every other language goes to the built-in highlighter. */
const logHighlighter: Highlighter = {
  highlight: (code, language) => {
    if (language !== "text") return builtinHighlighter.highlight(code, language)
    return code.split("\\n").map((line) => {
      const level = /\\b(ERROR|WARN|INFO)\\b/.exec(line)?.[1]
      const kind = level ? LEVEL_KIND[level] : undefined
      return [{ kind: kind ?? "plain", text: line }]
    })
  },
}

/** "3m", "1h 35m": a terse relative time instead of \`Intl\`'s. */
function terseRelative(date: Date, now: Date): string {
  const minutes = Math.max(0, Math.round((now.getTime() - date.getTime()) / 60_000))
  return minutes < 60 ? \`\${minutes}m ago\` : \`\${Math.floor(minutes / 60)}h \${minutes % 60}m ago\`
}

/**
 * Three seams swapped through one \`DisplayProvider\`: a log-level highlighter, an in-memory
 * clipboard (copies land in the list below instead of the system clipboard), and terse times.
 */
export function CustomAdapters() {
  const [copies, setCopies] = useState<readonly string[]>([])
  const clipboard = useMemo<ClipboardAdapter>(() => ({ writeText: async (text) => setCopies((prev) => [text, ...prev].slice(0, 3)) }), [])
  const formatters = useMemo(() => ({ ...intlFormatters("en-GB"), relativeTime: terseRelative }), [])
  return (
    <DisplayProvider adapters={{ highlighter: logHighlighter, clipboard, formatters }}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_16rem]">
        <CodeBlock title="server.log" code={LOG} language="text" />
        <Timeline events={EVENTS} now={NOW} density="compact" />
      </div>
      <div className="mt-2 text-[12px] text-muted-foreground" data-testid="adapter-copies">
        {copies.length === 0 ? "Press copy on the log: the text lands here, not on your clipboard." : \`Copied \${copies.length}: \${copies[0]?.split("\\n")[0] ?? ""}…\`}
      </div>
    </DisplayProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>i(()=>import(`./custom-adapters-BYQgAOih.js`),[]));function R(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: code`,children:"A code block takes a string and a language (or a file name). The kit's own small tokenizer colours it at once with nothing else to install; Shiki behind the same seam (`@kitora/display/shiki`, as on this site) makes it exact once a language's grammar has loaded."}),(0,m.jsx)(p,{n:1,title:`A code block`,blurb:`The title bar shows the file name, the language picked from its extension, a wrap toggle and copy.`,code:_,children:(0,m.jsx)(g,{})}),(0,m.jsx)(p,{n:2,title:`Line numbers and highlighted lines`,blurb:'`startLine` sets the first number; `highlight` takes `"44-46"` or an array.',code:b,children:(0,m.jsx)(y,{})}),(0,m.jsx)(p,{n:3,title:`Several files in tabs`,blurb:"`CodeTabs` takes files as data; each file's extension picks its language.",code:C,children:(0,m.jsx)(S,{})}),(0,m.jsx)(p,{n:4,title:`Inline and bare code`,blurb:"`InlineCode` for prose; `bare` drops the header and floats copy on hover.",code:T,children:(0,m.jsx)(w,{})}),(0,m.jsx)(p,{n:5,title:`Compose your own`,blurb:"The preset is built only from public parts: `CodeBlock.Root` owns the state and `Header`, `Title`, `Language`, `WrapToggle`, `Copy` and `Body` draw it, so you can reorder, drop or add pieces. Here wrap is controlled from outside.",code:k,children:(0,m.jsx)(O,{})}),(0,m.jsx)(p,{n:6,title:`Custom adapters`,blurb:"`DisplayProvider` swaps a seam for everything below it: the highlighter, the clipboard, the number and time formatters, the avatar palette. Here a log-level highlighter, an in-memory clipboard and terse relative times.",code:L,children:(0,m.jsx)(I,{})})]})}export{R as component};