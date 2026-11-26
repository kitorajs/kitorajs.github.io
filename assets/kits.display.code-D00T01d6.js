import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{n as r,r as i,t as a}from"./code-block-qBHLFEGc.js";import"./kit-gallery-B-Yr9fP4.js";import{t as o}from"./example-CZLJLtIC.js";var s=n(),c=`import { useState } from "react"

export interface CounterProps {
  readonly initial?: number
  readonly step?: number
}

export function Counter({ initial = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initial)
  return (
    <button className="counter" onClick={() => setCount((c) => c + step)}>
      Clicked {count} times
    </button>
  )
}
`,l=`.counter {
  --counter-accent: oklch(0.62 0.19 260);
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 6px;
  background: var(--counter-accent);
  color: white;
  font: 500 13px/1 system-ui, sans-serif;
}

.counter:focus-visible {
  outline: 2px solid var(--counter-accent);
  outline-offset: 2px;
}
`,u=`{
  "name": "@acme/counter",
  "version": "0.1.0",
  "type": "module",
  "exports": { ".": "./src/counter.tsx" },
  "peerDependencies": { "react": "^19.2.0" }
}
`;function d(){return(0,s.jsx)(r,{maxHeight:320,files:[{name:`counter.tsx`,code:c,highlight:`3-6,8`},{name:`counter.css`,code:l,highlight:`2`},{name:`package.json`,code:u,highlight:[5]}]})}var f=`import { CodeTabs } from "@kitora/display"

// A component split across three files. Each file carries its own highlighted lines, so the
// lines that matter (the props, the token, the export) stand out in each tab.
const TSX = \`import { useState } from "react"

export interface CounterProps {
  readonly initial?: number
  readonly step?: number
}

export function Counter({ initial = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initial)
  return (
    <button className="counter" onClick={() => setCount((c) => c + step)}>
      Clicked {count} times
    </button>
  )
}
\`

const CSS = \`.counter {
  --counter-accent: oklch(0.62 0.19 260);
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 6px;
  background: var(--counter-accent);
  color: white;
  font: 500 13px/1 system-ui, sans-serif;
}

.counter:focus-visible {
  outline: 2px solid var(--counter-accent);
  outline-offset: 2px;
}
\`

const JSON_FILE = \`{
  "name": "@acme/counter",
  "version": "0.1.0",
  "type": "module",
  "exports": { ".": "./src/counter.tsx" },
  "peerDependencies": { "react": "^19.2.0" }
}
\`

export function ComponentFiles() {
  return (
    <CodeTabs
      maxHeight={320}
      files={[
        { name: "counter.tsx", code: TSX, highlight: "3-6,8" },
        { name: "counter.css", code: CSS, highlight: "2" },
        { name: "package.json", code: JSON_FILE, highlight: [5] },
      ]}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>t(()=>import(`./code-component-BIrINd0v.js`),[]));var p=`@@ -12,9 +12,11 @@ export function Counter({ initial = 0, step = 1 }: CounterProps) {
   const [count, setCount] = useState(initial)
+  const label = count === 1 ? "time" : "times"
   return (
-    <button className="counter" onClick={() => setCount(count + step)}>
-      Clicked {count} times
+    <button className="counter" aria-live="polite" onClick={() => setCount((c) => c + step)}>
+      Clicked {count} {label}
     </button>
   )
 }`;function m(){return(0,s.jsx)(a,{title:`src/counter.tsx`,language:`diff`,code:p,lineNumbers:!1})}var h=`import { CodeBlock } from "@kitora/display"

// A unified diff: lines starting with + and - get a green or red wash, hunk headers read as keywords.
const PATCH = \`@@ -12,9 +12,11 @@ export function Counter({ initial = 0, step = 1 }: CounterProps) {
   const [count, setCount] = useState(initial)
+  const label = count === 1 ? "time" : "times"
   return (
-    <button className="counter" onClick={() => setCount(count + step)}>
-      Clicked {count} times
+    <button className="counter" aria-live="polite" onClick={() => setCount((c) => c + step)}>
+      Clicked {count} {label}
     </button>
   )
 }\`

export function DiffBlock() {
  return <CodeBlock title="src/counter.tsx" language="diff" code={PATCH} lineNumbers={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./code-diff-mhg6LC5h.js`),[]));function g(){return(0,s.jsxs)(`div`,{className:`flex max-w-2xl flex-col gap-2 text-[13px] leading-relaxed`,children:[(0,s.jsxs)(`p`,{children:[`Pass `,(0,s.jsx)(i,{children:`highlight`}),` as a fence-style string such as `,(0,s.jsx)(i,{children:`"2,4-6"`}),`, or as an array of line numbers. Numbers follow `,(0,s.jsx)(i,{children:`startLine`}),`, so a snippet cut from line 40 highlights line 46 as `,(0,s.jsx)(i,{children:`46`}),`, not `,(0,s.jsx)(i,{children:`7`}),`.`]}),(0,s.jsx)(a,{bare:!0,language:`ts`,code:`<CodeBlock code={source} startLine={40} highlight="46-47" />`}),(0,s.jsx)(`p`,{className:`text-muted-foreground`,children:`Bare blocks suit short one-liners inside prose, where a title bar would be heavier than the code.`})]})}var _=`import { CodeBlock, InlineCode } from "@kitora/display"

// A docs paragraph: \`InlineCode\` in prose, then a \`bare\` block with no header (its copy button
// appears on hover or focus in the top-right corner).
export function InlineAndBare() {
  return (
    <div className="flex max-w-2xl flex-col gap-2 text-[13px] leading-relaxed">
      <p>
        Pass <InlineCode>highlight</InlineCode> as a fence-style string such as <InlineCode>"2,4-6"</InlineCode>, or as an array of line numbers. Numbers follow <InlineCode>startLine</InlineCode>, so a
        snippet cut from line 40 highlights line 46 as <InlineCode>46</InlineCode>, not <InlineCode>7</InlineCode>.
      </p>
      <CodeBlock bare language="ts" code={\`<CodeBlock code={source} startLine={40} highlight="46-47" />\`} />
      <p className="text-muted-foreground">Bare blocks suit short one-liners inside prose, where a title bar would be heavier than the code.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./code-inline-DZq33Hzo.js`),[]));var v=[{name:`pnpm`,language:`bash`,code:`pnpm add @kitora/display @kitora/overlay @kitora/keyboard`},{name:`npm`,language:`bash`,code:`npm install @kitora/display @kitora/overlay @kitora/keyboard`},{name:`yarn`,language:`bash`,code:`yarn add @kitora/display @kitora/overlay @kitora/keyboard`},{name:`bun`,language:`bash`,code:`bun add @kitora/display @kitora/overlay @kitora/keyboard`}];function y(){return(0,s.jsx)(r,{files:v})}var b=`import { CodeTabs } from "@kitora/display"

// Install commands for every package manager, one tab each. The selected tab is local state;
// pass \`value\` / \`onValueChange\` to sync it with a site-wide "package manager" preference.
const FILES = [
  { name: "pnpm", language: "bash", code: "pnpm add @kitora/display @kitora/overlay @kitora/keyboard" },
  { name: "npm", language: "bash", code: "npm install @kitora/display @kitora/overlay @kitora/keyboard" },
  { name: "yarn", language: "bash", code: "yarn add @kitora/display @kitora/overlay @kitora/keyboard" },
  { name: "bun", language: "bash", code: "bun add @kitora/display @kitora/overlay @kitora/keyboard" },
] as const

export function InstallTabs() {
  return <CodeTabs files={FILES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./code-install-DbsfzezH.js`),[]));var x=[{title:`main.go`,code:`package main

// Greet returns a greeting for name.
func Greet(name string) string {
	return "hello, " + name
}`},{title:`train.py`,code:`@dataclass
class Run:
    epochs: int = 10

def train(run: Run) -> float:
    loss = 0.0  # running loss
    for epoch in range(run.epochs):
        loss += step(epoch)
    return loss / run.epochs`},{title:`top_customers.sql`,code:`-- revenue per customer, last 30 days
SELECT c.name, SUM(o.amount_total) AS revenue
FROM orders o
JOIN customers c ON c.id = o.customer_id
WHERE o.created > now() - interval '30 days'
GROUP BY c.name
ORDER BY revenue DESC
LIMIT 10;`},{title:`deploy.yaml`,code:`name: deploy
on: workflow_dispatch
jobs:
  ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: task deploy # prod
        env:
          DRY_RUN: false`},{title:`card.html`,code:`<!-- a product card -->
<article class="card" data-sku="KB-75-BLK">
  <img src="/kb.png" alt="Keyboard" loading="lazy">
  <h3>Mechanical keyboard</h3>
  <button type="button" disabled>Sold out</button>
</article>`},{title:`event.json`,code:`{
  "event": "order.fulfilled",
  "attempts": 3,
  "delivered": false,
  "last_error": null
}`},{title:`theme.css`,code:`/* compact density */
:root {
  --row-height: 28px;
  --radius: 6px;
}
@media (prefers-color-scheme: dark) {
  .card { background: #0b0b0f; }
}`}];function S(){return(0,s.jsx)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-2`,children:x.map(e=>(0,s.jsx)(a,{title:e.title,code:e.code},e.title))})}var C=`import { CodeBlock } from "@kitora/display"

// The built-in tokenizer's languages side by side. Each block picks its language from the
// file name in \`title\`; no \`language\` prop needed.
const SAMPLES = [
  {
    title: "main.go",
    code: \`package main

// Greet returns a greeting for name.
func Greet(name string) string {
	return "hello, " + name
}\`,
  },
  {
    title: "train.py",
    code: \`@dataclass
class Run:
    epochs: int = 10

def train(run: Run) -> float:
    loss = 0.0  # running loss
    for epoch in range(run.epochs):
        loss += step(epoch)
    return loss / run.epochs\`,
  },
  {
    title: "top_customers.sql",
    code: \`-- revenue per customer, last 30 days
SELECT c.name, SUM(o.amount_total) AS revenue
FROM orders o
JOIN customers c ON c.id = o.customer_id
WHERE o.created > now() - interval '30 days'
GROUP BY c.name
ORDER BY revenue DESC
LIMIT 10;\`,
  },
  {
    title: "deploy.yaml",
    code: \`name: deploy
on: workflow_dispatch
jobs:
  ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: task deploy # prod
        env:
          DRY_RUN: false\`,
  },
  {
    title: "card.html",
    code: \`<!-- a product card -->
<article class="card" data-sku="KB-75-BLK">
  <img src="/kb.png" alt="Keyboard" loading="lazy">
  <h3>Mechanical keyboard</h3>
  <button type="button" disabled>Sold out</button>
</article>\`,
  },
  {
    title: "event.json",
    code: \`{
  "event": "order.fulfilled",
  "attempts": 3,
  "delivered": false,
  "last_error": null
}\`,
  },
  {
    title: "theme.css",
    code: \`/* compact density */
:root {
  --row-height: 28px;
  --radius: 6px;
}
@media (prefers-color-scheme: dark) {
  .card { background: #0b0b0f; }
}\`,
  },
] as const

export function LanguageGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {SAMPLES.map((sample) => (
        <CodeBlock key={sample.title} title={sample.title} code={sample.code} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>t(()=>import(`./code-languages-DdfUaUCS.js`),[]));var w=`export async function checkout(cart: Cart) {
  const total = sum(cart.items) // [!code word:total]
  const total = sum(cart.items) + cart.shipping // [!code --]
  const total = sum(cart.items) + shippingFor(cart) // [!code ++]
  await charge(cart.customer, total) // [!code focus]
  return receipt(cart) // [!code warning]
  sendEmail(cart.customr) // [!code error]
}`;function T(){return(0,s.jsx)(a,{title:`checkout.ts`,code:w,notation:!0})}var E='import { CodeBlock } from "@kitora/display"\n\n// Shiki\'s notation comments, read by `notation`: each marks its line (or, with `:N`, the N lines from there) and is\n// neither shown nor copied. The same marks are props too: `added`, `removed`, `focus`, `errors`, `warnings`, `words`.\nconst SOURCE = `export async function checkout(cart: Cart) {\n  const total = sum(cart.items) // [!code word:total]\n  const total = sum(cart.items) + cart.shipping // [!code --]\n  const total = sum(cart.items) + shippingFor(cart) // [!code ++]\n  await charge(cart.customer, total) // [!code focus]\n  return receipt(cart) // [!code warning]\n  sendEmail(cart.customr) // [!code error]\n}`\n\nexport function MarkedLines() {\n  return <CodeBlock title="checkout.ts" code={SOURCE} notation />\n}\n';(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./code-marks-C8YaghTN.js`),[]));var D=`  # ── HTTP server ───────────────────────────────────────────────────────────────────────────────
  server:
    host: 0.0.0.0
    port: 8080
    read_timeout: 15s
    write_timeout: 30s
    # Requests slower than this are logged at warn with their full route, user id, tenant id and trace id, so a slow endpoint can be found from the log alone.
    slow_request_threshold: 750ms
  database:
    url: postgres://app@db.internal:5432/app
    max_open_conns: 40
    max_idle_conns: 10
    conn_max_lifetime: 30m
  cache:
    driver: redis
    addr: redis.internal:6379
    ttl: 5m
  queue:
    driver: acme-worker
    concurrency: 16
    retry:
      attempts: 5
      backoff: exponential
      max_delay: 2m
  telemetry:
    traces: true
    sample_rate: 0.1
    exporter: otlp
`;function O(){return(0,s.jsx)(a,{title:`config/production.yaml`,code:D,startLine:40,highlight:`46-47,61-63`,maxHeight:260})}var k=`import { CodeBlock } from "@kitora/display"

// A slice of a long config, cut from line 40 of the real file: \`startLine\` keeps the numbers
// honest, \`highlight\` uses those same numbers and \`maxHeight\` scrolls the rest. The long
// comment on line 46 scrolls sideways; the header's wrap button soft-wraps it.
const CONFIG = \`  # ── HTTP server ───────────────────────────────────────────────────────────────────────────────
  server:
    host: 0.0.0.0
    port: 8080
    read_timeout: 15s
    write_timeout: 30s
    # Requests slower than this are logged at warn with their full route, user id, tenant id and trace id, so a slow endpoint can be found from the log alone.
    slow_request_threshold: 750ms
  database:
    url: postgres://app@db.internal:5432/app
    max_open_conns: 40
    max_idle_conns: 10
    conn_max_lifetime: 30m
  cache:
    driver: redis
    addr: redis.internal:6379
    ttl: 5m
  queue:
    driver: acme-worker
    concurrency: 16
    retry:
      attempts: 5
      backoff: exponential
      max_delay: 2m
  telemetry:
    traces: true
    sample_rate: 0.1
    exporter: otlp
\`

export function LongConfig() {
  return <CodeBlock title="config/production.yaml" code={CONFIG} startLine={40} highlight="46-47,61-63" maxHeight={260} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>t(()=>import(`./code-log-YkgUg4SM.js`),[]));function A(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(e,{title:`Code docs`,children:`Code blocks the way a documentation site needs them. Highlighting goes through the highlighting seam: the kit's own small tokenizer colours at once, and here the site's Shiki makes it exact once a language's grammar has loaded. Every block copies, toggles wrap from its header, and takes line numbers, highlighted lines and line marks.`}),(0,s.jsx)(o,{n:1,title:`Install commands`,blurb:`One tab per package manager. ←/→ moves between tabs; the copy button copies the active one.`,code:b,children:(0,s.jsx)(y,{})}),(0,s.jsx)(o,{n:2,title:`A multi-file component`,blurb:`TSX, CSS and JSON in one frame, each file with its own highlighted lines and the language from its extension.`,code:f,children:(0,s.jsx)(d,{})}),(0,s.jsx)(o,{n:3,title:`A diff`,blurb:"`language=diff` washes added and removed lines; hunk headers read as keywords.",code:h,children:(0,s.jsx)(m,{})}),(0,s.jsx)(o,{n:4,title:`A slice of a long file`,blurb:"`startLine` keeps real line numbers, `highlight` uses them, `maxHeight` scrolls; the header button soft-wraps the long line.",code:k,children:(0,s.jsx)(O,{})}),(0,s.jsx)(o,{n:5,title:`Every language`,blurb:`Go, Python, SQL, YAML, HTML, JSON and CSS, each picked from the file name in the title.`,code:C,children:(0,s.jsx)(S,{})}),(0,s.jsx)(o,{n:6,title:`Inline code and a bare block`,blurb:"`InlineCode` in prose; a `bare` block has no header and shows copy on hover.",code:_,children:(0,s.jsx)(g,{})}),(0,s.jsx)(o,{n:7,title:`Line marks`,blurb:"`notation` reads Shiki's comments (`// [!code ++]`, `--`, `focus`, `error`, `warning`, `word:name`): added and removed lines with a sign, a focused line (hover the block to clear the blur), error and warning lines, a highlighted word. The comments are neither shown nor copied; the same marks are props.",code:E,children:(0,s.jsx)(T,{})})]})}export{A as component};