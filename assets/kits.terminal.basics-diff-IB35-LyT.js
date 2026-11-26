import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./diff-viewer-Bb5u8RBO.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./tree-diff-COjv097K.js";import{Bc as h,Cc as g,Ic as _}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as v}from"./example-B8EaWveR.js";import{t as y}from"./-kits.terminal.shared-CPr0cNX3.js";var b=_(),x=`[server]
host = "127.0.0.1"
port = 8080
workers = 2

[log]
level = "info"
`,S=`[server]
host = "0.0.0.0"
port = 8080
workers = 8
timeout = "30s"

[log]
level = "debug"
`;function C(){return(0,b.jsx)(o,{oldText:x,newText:S,fileName:`config.toml`,defaultMode:`split`})}var w=`import { DiffViewer } from "@kitora/terminal"

// The same diff side by side: \`defaultMode="split"\` starts in split view; the header toggle switches.
const before = \`[server]
host = "127.0.0.1"
port = 8080
workers = 2

[log]
level = "info"
\`

const after = \`[server]
host = "0.0.0.0"
port = 8080
workers = 8
timeout = "30s"

[log]
level = "debug"
\`

export function BasicDiffSplit() {
  return <DiffViewer oldText={before} newText={after} fileName="config.toml" defaultMode="split" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>g(()=>import(`./diff-split-Dhc5cEgK.js`),[]));var T=`greeting = "hello"
name = "world"
print(greeting, name)
`,E=`greeting = "hello"
name = "kitora"
print(greeting, name)
print("done")
`;function D(){return(0,b.jsx)(o,{oldText:T,newText:E,fileName:`hello.py`})}var O=`import { DiffViewer } from "@kitora/terminal"

// The smallest diff: two strings in, a unified diff out (line numbers on both sides, +/− stats).
const before = \`greeting = "hello"
name = "world"
print(greeting, name)
\`

const after = \`greeting = "hello"
name = "kitora"
print(greeting, name)
print("done")
\`

export function BasicDiffUnified() {
  return <DiffViewer oldText={before} newText={after} fileName="hello.py" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>g(()=>import(`./diff-unified-DPT1Zzxf.js`),[]));var k=e(h(),1),A=`export function total(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}
`,j=`export function total(items: readonly Item[], tax = 0): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0) * (1 + tax)
}
`;function M(){let[e,t]=(0,k.useState)(!0);return(0,b.jsx)(o,{oldText:A,newText:j,fileName:`total.ts`,wordDiff:e,actions:(0,b.jsxs)(`label`,{className:`inline-flex h-7 items-center gap-1.5 px-2 text-[12px] text-muted-foreground`,children:[(0,b.jsx)(`input`,{type:`checkbox`,className:`size-3.5 accent-foreground`,checked:e,onChange:e=>t(e.target.checked)}),`Word diff`]})})}var N=`import { useState } from "react"
import { DiffViewer } from "@kitora/terminal"

// Word-level highlights: a changed line pairs with its replacement, and only the words that differ
// get the strong colour. Flip \`wordDiff\` off to compare whole lines only.
const before = \`export function total(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}
\`

const after = \`export function total(items: readonly Item[], tax = 0): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0) * (1 + tax)
}
\`

export function BasicDiffWords() {
  const [words, setWords] = useState(true)
  return (
    <DiffViewer
      oldText={before}
      newText={after}
      fileName="total.ts"
      wordDiff={words}
      actions={
        <label className="inline-flex h-7 items-center gap-1.5 px-2 text-[12px] text-muted-foreground">
          <input type="checkbox" className="size-3.5 accent-foreground" checked={words} onChange={(e) => setWords(e.target.checked)} />
          Word diff
        </label>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>g(()=>import(`./diff-words-CTtqrDr4.js`),[]));var P=JSON.stringify({name:`api`,version:`1.2.0`,port:8080,features:{auth:!0,cache:!1},tags:[`web`,`beta`]}),F=JSON.stringify({name:`api`,version:`1.3.0`,features:{auth:!0,cache:!0,metrics:!0},tags:[`web`],owner:`platform`});function I(){return(0,b.jsx)(m,{oldText:P,newText:F,title:`service.json`})}var L=`import { TreeDiff } from "@kitora/terminal"

// A structural diff of two small JSON documents: keys added, removed and changed, old → new.
const before = JSON.stringify({ name: "api", version: "1.2.0", port: 8080, features: { auth: true, cache: false }, tags: ["web", "beta"] })

const after = JSON.stringify({ name: "api", version: "1.3.0", features: { auth: true, cache: true, metrics: true }, tags: ["web"], owner: "platform" })

export function BasicTreeDiffJson() {
  return <TreeDiff oldText={before} newText={after} title="service.json" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>g(()=>import(`./tree-diff-json-BUAxyTfC.js`),[]));var R=`port: 8080
workers: 2
log: info
`,z=`port: 8080
workers: 4
log: debug
metrics: true
`;function B(){let e=s({oldText:R,newText:z}),t=n(e.result.oldLines.length,e.result.newLines.length);return(0,b.jsxs)(a.Root,{diff:e,className:`flex min-h-0 flex-1 flex-col overflow-hidden bg-background font-mono text-[12px] text-foreground`,children:[(0,b.jsx)(a.Header,{className:`flex h-9 shrink-0 items-center gap-2 border-b bg-muted/30 px-2 font-sans`,children:({added:e,removed:t})=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{className:`font-mono text-[12px] font-medium`,children:`config.yml`}),(0,b.jsx)(i,{added:e,removed:t}),(0,b.jsx)(`span`,{className:`flex-1 truncate text-[11px] text-muted-foreground`,children:`Needs review`}),(0,b.jsx)(c,{})]})}),(0,b.jsx)(a.List,{className:`min-h-0 flex-1 overflow-auto`,children:(e,n)=>(0,b.jsx)(r,{row:e,index:n,gutterWidth:t},e.key)})]})}var V=`import { DiffView, useDiff } from "@kitora/terminal/react"
import { DiffModeToggle, DiffStatsBadge, DiffViewerRow, diffGutterWidth } from "@kitora/terminal/ui"

// The \`DiffViewer\` preset's layout rebuilt from parts: the headless \`DiffView.*\` frame with the styled
// \`DiffStatsBadge\`, \`DiffModeToggle\` and \`DiffViewerRow\`. The header here adds a review note.
const before = \`port: 8080
workers: 2
log: info
\`
const after = \`port: 8080
workers: 4
log: debug
metrics: true
\`

export function BasicDiffCompose() {
  const diff = useDiff({ oldText: before, newText: after })
  const gutterWidth = diffGutterWidth(diff.result.oldLines.length, diff.result.newLines.length)
  return (
    <DiffView.Root diff={diff} className="flex min-h-0 flex-1 flex-col overflow-hidden bg-background font-mono text-[12px] text-foreground">
      <DiffView.Header className="flex h-9 shrink-0 items-center gap-2 border-b bg-muted/30 px-2 font-sans">
        {({ added, removed }) => (
          <>
            <span className="font-mono text-[12px] font-medium">config.yml</span>
            <DiffStatsBadge added={added} removed={removed} />
            <span className="flex-1 truncate text-[11px] text-muted-foreground">Needs review</span>
            <DiffModeToggle />
          </>
        )}
      </DiffView.Header>
      <DiffView.List className="min-h-0 flex-1 overflow-auto">
        {(row, index) => <DiffViewerRow key={row.key} row={row} index={index} gutterWidth={gutterWidth} />}
      </DiffView.List>
    </DiffView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>g(()=>import(`./diff-compose-DVkPKpcO.js`),[]));var H=JSON.stringify({name:`web`,replicas:2,env:{LOG:`info`,REGION:`eu`}}),U=JSON.stringify({name:`web`,replicas:3,env:{LOG:`debug`,REGION:`eu`,TRACE:`on`}});function W(){let e=f({oldText:H,newText:U});return(0,b.jsxs)(l.Root,{diff:e,className:`flex min-h-0 flex-1 flex-col overflow-hidden bg-background font-mono text-[12px] text-foreground`,children:[(0,b.jsx)(u,{title:`deploy.json`,className:`font-sans`}),(0,b.jsx)(l.List,{className:`min-h-0 flex-1 overflow-auto py-1`,children:(e,t)=>(0,b.jsx)(p,{row:e,index:t},e.node.id)}),(0,b.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-2 border-t px-2 font-sans text-[11px] text-muted-foreground`,children:[`Whole document`,(0,b.jsx)(l.Counts,{children:e=>(0,b.jsx)(d,{counts:e})})]})]})}var G=`import { TreeDiffView, useTreeDiff } from "@kitora/terminal/react"
import { TreeDiffCountBadges, TreeDiffRowView, TreeDiffToolbar } from "@kitora/terminal/ui"

// The \`TreeDiff\` preset rebuilt from parts: the headless \`TreeDiffView.*\` frame with the styled
// \`TreeDiffToolbar\` and \`TreeDiffRowView\`, plus a footer of \`TreeDiffCountBadges\` for the whole document.
const before = JSON.stringify({ name: "web", replicas: 2, env: { LOG: "info", REGION: "eu" } })
const after = JSON.stringify({ name: "web", replicas: 3, env: { LOG: "debug", REGION: "eu", TRACE: "on" } })

export function BasicTreeDiffCompose() {
  const diff = useTreeDiff({ oldText: before, newText: after })
  return (
    <TreeDiffView.Root diff={diff} className="flex min-h-0 flex-1 flex-col overflow-hidden bg-background font-mono text-[12px] text-foreground">
      <TreeDiffToolbar title="deploy.json" className="font-sans" />
      <TreeDiffView.List className="min-h-0 flex-1 overflow-auto py-1">
        {(row, index) => <TreeDiffRowView key={row.node.id} row={row} index={index} />}
      </TreeDiffView.List>
      <div className="flex h-7 shrink-0 items-center gap-2 border-t px-2 font-sans text-[11px] text-muted-foreground">
        Whole document
        <TreeDiffView.Counts>{(counts) => <TreeDiffCountBadges counts={counts} />}</TreeDiffView.Counts>
      </div>
    </TreeDiffView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>g(()=>import(`./tree-diff-compose-7wRgNxv5.js`),[]));function K(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Basics: diffs`,children:"`DiffViewer` takes two strings and draws a line diff; `TreeDiff` takes two JSON or YAML documents and diffs their structure."}),(0,b.jsx)(v,{n:1,title:`A unified diff`,blurb:`Two strings in: old and new line numbers, + and − rows, a hunk header and the +/− stats.`,code:O,children:(0,b.jsx)(y,{testId:`basic-diff-unified`,height:200,children:(0,b.jsx)(D,{})})}),(0,b.jsx)(v,{n:2,title:`Split view`,blurb:'`defaultMode="split"` puts old and new side by side; the toggle in the header switches layouts.',code:w,children:(0,b.jsx)(y,{testId:`basic-diff-split`,height:260,children:(0,b.jsx)(C,{})})}),(0,b.jsx)(v,{n:3,title:`Word highlights`,blurb:`A changed line pairs with its replacement and only the words that differ get the strong colour.`,code:N,children:(0,b.jsx)(y,{testId:`basic-diff-words`,height:180,children:(0,b.jsx)(M,{})})}),(0,b.jsx)(v,{n:4,title:`A JSON tree diff`,blurb:`Keys added, removed and changed, with old → new values; nested objects fold.`,code:L,children:(0,b.jsx)(y,{testId:`basic-tree-diff`,height:280,children:(0,b.jsx)(I,{})})}),(0,b.jsx)(v,{n:5,title:`A diff from parts`,blurb:"`DiffView.*` with the styled `DiffStatsBadge`, `DiffModeToggle` and `DiffViewerRow`: the preset's layout, your own header.",code:V,children:(0,b.jsx)(y,{testId:`basic-diff-compose`,height:200,children:(0,b.jsx)(B,{})})}),(0,b.jsx)(v,{n:6,title:`A tree diff from parts`,blurb:"`TreeDiffView.*` with `TreeDiffToolbar`, `TreeDiffRowView` rows and a footer of `TreeDiffCountBadges`.",code:G,children:(0,b.jsx)(y,{testId:`basic-tree-diff-compose`,height:240,children:(0,b.jsx)(W,{})})})]})}export{K as component};