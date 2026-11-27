import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{l as n,n as r,o as i,s as a,t as o}from"./log-viewer-CjlksPU-.js";import{Ec as s,Uc as c,zc as l}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as u}from"./example-B67lLz1F.js";import{t as d}from"./-kits.terminal.shared-Cb96TasL.js";var f=e(c(),1),p=l(),m=[`ts=2026-10-16T10:00:00.012Z level=info svc=api msg="starting server" version=1.42.0`,`ts=2026-10-16T10:00:00.203Z level=info svc=api msg="listening on :8080"`,`ts=2026-10-16T10:00:03.019Z level=warn svc=db msg="slow query" took=812ms`,`ts=2026-10-16T10:00:04.100Z level=error svc=worker msg="payments timed out" retries=3`,`ts=2026-10-16T10:00:04.388Z level=debug svc=http msg="GET /healthz" status=200`],h=/(\w+)=(?:"((?:[^"\\]|\\.)*)"|(\S+))/g,g={parse(e,t){let n={};for(let t of e.matchAll(h))n[t[1]??``]=t[2]??t[3]??``;let{ts:r,level:i,svc:o,msg:s,...c}=n,l=r===void 0?void 0:Date.parse(r);return a(t,{raw:e,time:Number.isNaN(l)?void 0:l,level:i,source:o,message:s??e,fields:c})}},_=(e,t,n)=>t===`relative`?`+${((e-n)/1e3).toFixed(3)}s`:`${new Date(e).toISOString().slice(11,23)} UTC`;function v(){let[e,t]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[(0,p.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,p.jsx)(o,{lines:m,parser:g,formatTime:_,copy:e=>t(t=>[e,...t].slice(0,3))})}),(0,p.jsx)(`div`,{className:`shrink-0 border-t px-2 py-1 font-mono text-[11px] text-muted-foreground`,"data-testid":`log-adapter-copied`,children:e.length===0?`Copied lines land here (hover a row, click Copy).`:`Last copied: ${e[0]}`})]})}var y=`import { useState } from "react"
import { createLogEntry, LogViewer, type LogParser, type LogTimeFormatter } from "@kitora/terminal"

// Every seam of the log viewer swapped through its typed option: a \`LogParser\` for logfmt lines
// (\`level=warn msg="..."\`), a \`formatTime\` that prints the time in UTC with an explicit zone, and a
// \`copy\` adapter that keeps the copied lines in a little history instead of the clipboard.
const LINES = [
  'ts=2026-10-16T10:00:00.012Z level=info svc=api msg="starting server" version=1.42.0',
  'ts=2026-10-16T10:00:00.203Z level=info svc=api msg="listening on :8080"',
  'ts=2026-10-16T10:00:03.019Z level=warn svc=db msg="slow query" took=812ms',
  'ts=2026-10-16T10:00:04.100Z level=error svc=worker msg="payments timed out" retries=3',
  'ts=2026-10-16T10:00:04.388Z level=debug svc=http msg="GET /healthz" status=200',
]

/** Pairs of \`key=value\` or \`key="quoted value"\`. */
const PAIR = /(\\w+)=(?:"((?:[^"\\\\]|\\\\.)*)"|(\\S+))/g

/** A logfmt parser: the well-known keys become the entry's time, level, source and message; the rest are fields. */
const logfmtParser: LogParser = {
  parse(raw, id) {
    const pairs: Record<string, string> = {}
    for (const m of raw.matchAll(PAIR)) pairs[m[1] ?? ""] = m[2] ?? m[3] ?? ""
    const { ts, level, svc, msg, ...fields } = pairs
    const time = ts === undefined ? undefined : Date.parse(ts)
    return createLogEntry(id, { raw, time: Number.isNaN(time) ? undefined : time, level, source: svc, message: msg ?? raw, fields })
  },
}

const utcTime: LogTimeFormatter = (time, mode, base) => (mode === "relative" ? \`+\${((time - base) / 1000).toFixed(3)}s\` : \`\${new Date(time).toISOString().slice(11, 23)} UTC\`)

export function BasicLogAdapters() {
  const [copied, setCopied] = useState<readonly string[]>([])
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1">
        <LogViewer lines={LINES} parser={logfmtParser} formatTime={utcTime} copy={(text) => setCopied((prev) => [text, ...prev].slice(0, 3))} />
      </div>
      <div className="shrink-0 border-t px-2 py-1 font-mono text-[11px] text-muted-foreground" data-testid="log-adapter-copied">
        {copied.length === 0 ? "Copied lines land here (hover a row, click Copy)." : \`Last copied: \${copied[0]}\`}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>s(()=>import(`./log-adapters-DxSeZm3x.js`),[]));function b(){return(0,p.jsx)(o,{source:(0,f.useMemo)(()=>i({intervalMs:500,burst:3}),[]),maxEntries:5e3})}var x=`import { useMemo } from "react"
import { createFakeLogSource, LogViewer } from "@kitora/terminal"

// Follow tail with a live source. The viewer sticks to the bottom while new lines arrive; scroll up
// and follow switches off, with a "Jump to latest (N new)" pill to get back.
export function BasicLogFollow() {
  // Any LogSource works: a WebSocket, an SSE stream, your backend tailing a file.
  const source = useMemo(() => createFakeLogSource({ intervalMs: 500, burst: 3 }), [])
  return <LogViewer source={source} maxEntries={5000} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>s(()=>import(`./log-follow-DOOq69V1.js`),[]));var S=[`{"ts":"2026-10-16T10:00:00Z","level":"info","logger":"api","msg":"request served","method":"GET","path":"/api/orders","status":200,"duration_ms":14}`,`{"ts":"2026-10-16T10:00:01Z","level":"warn","logger":"db.pool","msg":"slow query","sql":"SELECT * FROM orders WHERE account_id = $1","rows":4120,"pool":{"active":18,"idle":2,"waiting":5}}`,`2026-10-16T10:00:02Z INFO [api] plain lines still parse next to JSON ones`,`{"time":1792144803,"severity":"ERROR","service":"payments","message":"charge failed","error":{"code":"card_declined","retryable":false},"tags":["eu","stripe"],"customer":null}`,`{"ts":"2026-10-16T10:00:04Z","lvl":"debug","component":"cache","msg":"evicted","keys":312,"ok":true}`];function C(){return(0,p.jsx)(o,{lines:S})}var w=`import { LogViewer } from "@kitora/terminal"

// JSON lines are detected per line: common keys (level, msg, ts, logger…) fill the columns and the
// rest become fields. Click a row's chevron to expand them inline.
const LINES = [
  '{"ts":"2026-10-16T10:00:00Z","level":"info","logger":"api","msg":"request served","method":"GET","path":"/api/orders","status":200,"duration_ms":14}',
  '{"ts":"2026-10-16T10:00:01Z","level":"warn","logger":"db.pool","msg":"slow query","sql":"SELECT * FROM orders WHERE account_id = $1","rows":4120,"pool":{"active":18,"idle":2,"waiting":5}}',
  "2026-10-16T10:00:02Z INFO [api] plain lines still parse next to JSON ones",
  '{"time":1792144803,"severity":"ERROR","service":"payments","message":"charge failed","error":{"code":"card_declined","retryable":false},"tags":["eu","stripe"],"customer":null}',
  '{"ts":"2026-10-16T10:00:04Z","lvl":"debug","component":"cache","msg":"evicted","keys":312,"ok":true}',
]

export function BasicLogJson() {
  return <LogViewer lines={LINES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./log-json-C_8JrVLZ.js`),[]));var T=n(400,{seed:3});function E(){return(0,p.jsx)(o,{lines:T,defaultFilter:{hiddenLevels:[`trace`,`debug`],text:`/5\\d\\d|timed out/`}})}var D=`import { generateFakeLogLines, LogViewer } from "@kitora/terminal"

// Levels and filter: toggles carry per-level counts (Alt-click shows one level only), and the
// filter box takes plain text or a /regex/. Trace and debug start hidden through \`defaultFilter\`.
const LINES = generateFakeLogLines(400, { seed: 3 })

export function BasicLogLevels() {
  return <LogViewer lines={LINES} defaultFilter={{ hiddenLevels: ["trace", "debug"], text: "/5\\\\d\\\\d|timed out/" }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>s(()=>import(`./log-levels-BIBJU3ZJ.js`),[]));var O=[`2026-10-16T10:00:00.012Z INFO [api] starting server version=1.42.0`,`2026-10-16T10:00:00.140Z INFO [db.pool] connected to postgres://db:5432/app (pool=20)`,`2026-10-16T10:00:00.161Z INFO [cache] redis ready in 18ms`,`2026-10-16T10:00:00.203Z INFO [api] listening on :8080`,`2026-10-16T10:00:02.871Z INFO [http] GET /api/users 200 14ms`,`2026-10-16T10:00:03.019Z WARN [db.pool] slow query took 812ms`,`2026-10-16T10:00:03.552Z INFO [http] POST /api/orders 201 63ms`,`2026-10-16T10:00:04.100Z ERROR [worker] upstream payments timed out after 3 retries`,`2026-10-16T10:00:04.388Z INFO [http] GET /healthz 200 1ms`];function k(){return(0,p.jsx)(o,{lines:O})}var A=`import { LogViewer } from "@kitora/terminal"

// The smallest log viewer: an array of raw lines in, a parsed, virtualised list out.
const LINES = [
  "2026-10-16T10:00:00.012Z INFO [api] starting server version=1.42.0",
  "2026-10-16T10:00:00.140Z INFO [db.pool] connected to postgres://db:5432/app (pool=20)",
  "2026-10-16T10:00:00.161Z INFO [cache] redis ready in 18ms",
  "2026-10-16T10:00:00.203Z INFO [api] listening on :8080",
  "2026-10-16T10:00:02.871Z INFO [http] GET /api/users 200 14ms",
  "2026-10-16T10:00:03.019Z WARN [db.pool] slow query took 812ms",
  "2026-10-16T10:00:03.552Z INFO [http] POST /api/orders 201 63ms",
  "2026-10-16T10:00:04.100Z ERROR [worker] upstream payments timed out after 3 retries",
  "2026-10-16T10:00:04.388Z INFO [http] GET /healthz 200 1ms",
]

export function BasicLogStatic() {
  return <LogViewer lines={LINES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>s(()=>import(`./log-static-C3D_pQZc.js`),[]));var j=[`2026-10-16T10:00:00.012Z INFO [api] starting server version=1.42.0`,`2026-10-16T10:00:00.203Z INFO [api] listening on :8080`,`2026-10-16T10:00:02.871Z INFO [http] GET /api/users 200 14ms`,`2026-10-16T10:00:03.019Z WARN [db.pool] slow query took 812ms`,`2026-10-16T10:00:04.100Z ERROR [worker] upstream payments timed out after 3 retries`,`2026-10-16T10:00:04.388Z INFO [http] GET /healthz 200 1ms`];function M(){return(0,p.jsx)(o,{lines:j,renderRow:e=>(0,p.jsx)(r,{row:e,classNames:{row:e.entry.level===`error`?`bg-red-500/10 font-semibold`:void 0}})})}var N=`import { LogViewer, LogViewerRow } from "@kitora/terminal"

// A custom \`renderRow\` that keeps the preset's \`LogViewerRow\` and only tints the error rows.
const LINES = [
  "2026-10-16T10:00:00.012Z INFO [api] starting server version=1.42.0",
  "2026-10-16T10:00:00.203Z INFO [api] listening on :8080",
  "2026-10-16T10:00:02.871Z INFO [http] GET /api/users 200 14ms",
  "2026-10-16T10:00:03.019Z WARN [db.pool] slow query took 812ms",
  "2026-10-16T10:00:04.100Z ERROR [worker] upstream payments timed out after 3 retries",
  "2026-10-16T10:00:04.388Z INFO [http] GET /healthz 200 1ms",
]

export function BasicLogRow() {
  return (
    <LogViewer
      lines={LINES}
      renderRow={(row) => <LogViewerRow row={row} classNames={{ row: row.entry.level === "error" ? "bg-red-500/10 font-semibold" : undefined }} />}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>s(()=>import(`./log-row-Dg3O3eKZ.js`),[]));function P(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Basics: logs`,children:"`LogViewer` takes raw lines, parsed entries or a live `LogSource`, parses plain and JSON lines, and virtualises the list so any length scrolls smoothly."}),(0,p.jsx)(u,{n:1,title:`A static log`,blurb:`An array of raw lines in; time, level, source and message come out. Hover a row to copy it.`,code:A,children:(0,p.jsx)(d,{testId:`log-basic-static`,height:260,children:(0,p.jsx)(k,{})})}),(0,p.jsx)(u,{n:2,title:`Levels and filter`,blurb:"Toggles show per-level counts; Alt-click shows one level only. The filter takes text (smart case) or a `/regex/`.",code:D,children:(0,p.jsx)(d,{testId:`log-basic-levels`,height:300,children:(0,p.jsx)(E,{})})}),(0,p.jsx)(u,{n:3,title:`Follow tail`,blurb:`A live source streams lines in. Scroll up and follow pauses, with a Jump to latest pill counting what arrived.`,code:x,children:(0,p.jsx)(d,{testId:`log-basic-follow`,height:300,children:(0,p.jsx)(b,{})})}),(0,p.jsx)(u,{n:4,title:`JSON lines`,blurb:`JSON lines are detected per line and mixed freely with plain ones. Click a chevron to expand the fields.`,code:w,children:(0,p.jsx)(d,{testId:`log-basic-json`,height:300,children:(0,p.jsx)(C,{})})}),(0,p.jsx)(u,{n:5,title:`Your own parser, time format and clipboard`,blurb:"Each seam is one typed option: `parser` reads logfmt lines, `formatTime` prints UTC, and `copy` sends Copy to your own handler instead of the clipboard.",code:y,children:(0,p.jsx)(d,{testId:`log-basic-adapters`,height:260,children:(0,p.jsx)(v,{})})}),(0,p.jsx)(u,{n:6,title:`Wrap the preset row`,blurb:"A custom `renderRow` that keeps the preset's `LogViewerRow` and only tints the error rows.",code:N,children:(0,p.jsx)(d,{testId:`log-basic-row`,height:220,children:(0,p.jsx)(M,{})})})]})}export{P as component};