import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{r as n}from"./diff-viewer-Jt8ruBEh.js";import{o as r,t as i}from"./log-viewer-BpDr3HdN.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import{d as c,i as l}from"./terminal-Br_-mZ6c.js";import"./kit-gallery-B-Yr9fP4.js";import{t as u}from"./example-CZLJLtIC.js";import{t as d}from"./-kits.terminal.shared-BuXGOuE1.js";var f=e(a(),1),p=s(),m=`export async function handler(req: Request): Promise<Response> {
  const user = await auth(req)
  if (!user) return new Response("unauthorized", { status: 401 })
  const items = await db.items.findMany({ where: { owner: user.id } })
  return Response.json(items)
}
`,h=`export async function handler(req: Request): Promise<Response> {
  const user = await auth(req)
  if (!user) return new Response("unauthorized", { status: 401 })
  const limit = Number(new URL(req.url).searchParams.get("limit") ?? 50)
  const items = await db.items.findMany({ where: { owner: user.id }, take: Math.min(limit, 200) })
  return Response.json({ items, limit })
}
`;function g(){let[e]=(0,f.useState)(()=>c()),t=(0,f.useMemo)(()=>r({intervalMs:700,burst:2}),[]);return(0,p.jsxs)(`div`,{className:`grid h-full min-h-0 grid-rows-[minmax(0,3fr)_minmax(0,2fr)] gap-2 p-2`,children:[(0,p.jsxs)(`div`,{className:`grid min-h-0 gap-2 md:grid-cols-2`,children:[(0,p.jsx)(l,{title:`dev@api: ~/service`,session:e,history:[`build`,`ls`],className:`min-h-0`}),(0,p.jsx)(i,{source:t,maxEntries:5e3,className:`min-h-0 rounded-md border`})]}),(0,p.jsx)(n,{oldText:m,newText:h,fileName:`src/routes/items.ts`,defaultMode:`split`,className:`min-h-0 rounded-md border`})]})}var _=`import { useMemo, useState } from "react"
import { createFakeLogSource, createFakeShell, DiffViewer, LogViewer, Terminal } from "@kitora/terminal"

// A dev console from the kit's three presets: a shell, the live server log beside it, and the
// review diff of the change under test below. Every piece runs on its own adapter (a fake shell
// session, a fake log source, two strings), so swapping in a real pty, an SSE stream or a git
// backend changes one line each.
const BEFORE = \`export async function handler(req: Request): Promise<Response> {
  const user = await auth(req)
  if (!user) return new Response("unauthorized", { status: 401 })
  const items = await db.items.findMany({ where: { owner: user.id } })
  return Response.json(items)
}
\`

const AFTER = \`export async function handler(req: Request): Promise<Response> {
  const user = await auth(req)
  if (!user) return new Response("unauthorized", { status: 401 })
  const limit = Number(new URL(req.url).searchParams.get("limit") ?? 50)
  const items = await db.items.findMany({ where: { owner: user.id }, take: Math.min(limit, 200) })
  return Response.json({ items, limit })
}
\`

export function DevConsole() {
  const [shell] = useState(() => createFakeShell())
  const source = useMemo(() => createFakeLogSource({ intervalMs: 700, burst: 2 }), [])
  return (
    <div className="grid h-full min-h-0 grid-rows-[minmax(0,3fr)_minmax(0,2fr)] gap-2 p-2">
      <div className="grid min-h-0 gap-2 md:grid-cols-2">
        <Terminal title="dev@api: ~/service" session={shell} history={["build", "ls"]} className="min-h-0" />
        <LogViewer source={source} maxEntries={5000} className="min-h-0 rounded-md border" />
      </div>
      <DiffViewer oldText={BEFORE} newText={AFTER} fileName="src/routes/items.ts" defaultMode="split" className="min-h-0 rounded-md border" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>o(()=>import(`./dev-console-DDvk0_Gb.js`),[]));var v=[{name:`core`,what:`Streaming ANSI parser, terminal buffer with scrollback cap and input history, the TerminalSession adapter and a fake shell; log parser, filter, search and line layout, LogSource adapters; Myers line and word diff, hunks and collapsed gaps, the JSON / YAML tree diff; the virtual window. No DOM, no React.`},{name:`dom`,what:`Clipboard and download helpers, safe during SSR.`},{name:`react`,what:`useVirtualRows, useTerminal, useLogViewer, useDiff, useTreeDiff and the headless parts: TerminalView, LogView, DiffView, TreeDiffView (behaviour, ARIA, data attributes, no styling).`},{name:`ui`,what:`The styled presets built from those parts: Terminal (themes), LogViewer (level colours), DiffViewer (split / unified), TreeDiff.`}];function y(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Terminal kit`,children:"Developer views that stay fast at 100k lines. Type `help` or `build` in the shell, scroll the log up to pause follow, flip the diff between split and unified."}),(0,p.jsx)(u,{n:1,title:`A dev console`,blurb:`A fake shell session, a live log stream with levels and search, and the review diff of the change, each on its own adapter.`,code:_,children:(0,p.jsx)(d,{testId:`dev-console`,height:640,children:(0,p.jsx)(g,{})})}),(0,p.jsx)(u,{n:2,title:`Layers`,blurb:`Use just the core on a server, the headless parts with your own markup, or the styled presets.`,children:(0,p.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,p.jsx)(`tbody`,{children:v.map(e=>(0,p.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,p.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,p.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{y as component};