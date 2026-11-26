import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-CA6hUnoS.js";import{a as r,t as i}from"./log-viewer-BpDr3HdN.js";import{Bc as a,Cc as o,Ic as s,Ko as c}from"./index-9y5uwRd3.js";import{t as l}from"./badge-CMT8Lr82.js";import{a as u,n as d,o as f,t as p}from"./card-AZ_23TG_.js";var m=e({LogViewerComposeDeployPanel:()=>v}),h=t(a(),1),g=s(),_=[`2026-10-16T09:14:02Z INFO [build] Installing dependencies…`,`2026-10-16T09:14:19Z INFO [build] Compiled 214 modules in 3.1s`,`2026-10-16T09:14:20Z WARN [build] Bundle exceeds 500 kB`,`2026-10-16T09:14:22Z INFO [deploy] Uploading to edge…`,`2026-10-16T09:14:25Z INFO [deploy] Live at https://app.example.com`];function v(){let[e,t]=(0,h.useState)(!0);return(0,g.jsxs)(p,{className:`w-full max-w-xl`,children:[(0,g.jsxs)(u,{className:`flex flex-row flex-wrap items-center justify-between gap-2`,children:[(0,g.jsx)(f,{children:`Deploy #482`}),(0,g.jsx)(l,{variant:`secondary`,children:`Succeeded`})]}),(0,g.jsxs)(d,{className:`space-y-3`,children:[(0,g.jsxs)(`label`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[(0,g.jsx)(n,{checked:e,onCheckedChange:t}),`Follow output`]}),(0,g.jsx)(i,{className:`h-56 w-full rounded-md border`,lines:_,follow:e,onFollowChange:t,toolbar:!1})]})]})}var y=e({LogViewerStreamingLogs:()=>C}),b=[{level:`info`,source:`api`,message:`GET /v1/users 200 24ms`},{level:`debug`,source:`cache`,message:`HIT user:42`},{level:`info`,source:`api`,message:`POST /v1/sessions 201 88ms`},{level:`warn`,source:`limiter`,message:`rate exceeded for ip 203.0.113.42`},{level:`error`,source:`db`,message:`connection refused: max pool reached`},{level:`info`,source:`db`,message:`reconnecting…`},{level:`info`,source:`db`,message:`connected (pool size: 20)`}],x=r.filter(e=>[`debug`,`info`,`warn`,`error`].includes(e.name));function S(e,t){return{snapshot:()=>b.map((e,n)=>({...e,time:t-(b.length-n)*1e3})),subscribe(t){let n=0,r=setInterval(()=>{let e=b[n%b.length];n+=1,e&&t([{...e,time:Date.now()}])},e);return()=>clearInterval(r)}}}function C(){let e=c();return(0,g.jsx)(i,{source:(0,h.useMemo)(()=>S(700,e),[e]),levels:x,maxEntries:500,className:`h-64 w-full rounded-md border`},e)}var w=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Switch } from "@kitora/ui/switch"
import { LogViewer } from "@kitora/terminal/ui"

const lines = [
  "2026-10-16T09:14:02Z INFO [build] Installing dependencies…",
  "2026-10-16T09:14:19Z INFO [build] Compiled 214 modules in 3.1s",
  "2026-10-16T09:14:20Z WARN [build] Bundle exceeds 500 kB",
  "2026-10-16T09:14:22Z INFO [deploy] Uploading to edge…",
  "2026-10-16T09:14:25Z INFO [deploy] Live at https://app.example.com",
]

export function LogViewerComposeDeployPanel() {
  const [follow, setFollow] = useState(true)
  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
        <CardTitle>Deploy #482</CardTitle>
        <Badge variant="secondary">Succeeded</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <Switch checked={follow} onCheckedChange={setFollow} />
          Follow output
        </label>
        <LogViewer className="h-56 w-full rounded-md border" lines={lines} follow={follow} onFollowChange={setFollow} toolbar={false} />
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>o(()=>import(`./compose-D9lXSWCz.js`),[]));var T=`import { useMemo } from "react"
import { usePageTime } from "@kitora/primitives/react"
import { LOG_LEVELS, type LogEntryInit, type LogSource } from "@kitora/terminal"
import { LogViewer } from "@kitora/terminal/ui"

// The lines an API server keeps printing; the source below replays them on a timer.
const SCRIPT: readonly Omit<LogEntryInit, "time">[] = [
  { level: "info", source: "api", message: "GET /v1/users 200 24ms" },
  { level: "debug", source: "cache", message: "HIT user:42" },
  { level: "info", source: "api", message: "POST /v1/sessions 201 88ms" },
  { level: "warn", source: "limiter", message: "rate exceeded for ip 203.0.113.42" },
  { level: "error", source: "db", message: "connection refused: max pool reached" },
  { level: "info", source: "db", message: "reconnecting…" },
  { level: "info", source: "db", message: "connected (pool size: 20)" },
]

/** Only the levels this service emits get a toggle, which keeps the toolbar narrow. */
const LEVELS = LOG_LEVELS.filter((l) => ["debug", "info", "warn", "error"].includes(l.name))

/** A live source: one scripted line every 700 ms, stamped with the wall clock, after a history ending at \`now\`. Swap it for a WebSocket or SSE stream. */
function createScriptedSource(intervalMs: number, now: number): LogSource {
  return {
    // What the server printed before we connected: the whole script, one second apart.
    snapshot: () => SCRIPT.map((line, i) => ({ ...line, time: now - (SCRIPT.length - i) * 1000 })),
    subscribe(listener) {
      let i = 0
      const timer = setInterval(() => {
        const line = SCRIPT[i % SCRIPT.length]
        i += 1
        if (line) listener([{ ...line, time: Date.now() }])
      }, intervalMs)
      return () => clearInterval(timer)
    },
  }
}

export function LogViewerStreamingLogs() {
  // "now", fixed for the page: the build's in the server HTML, the visitor's right after hydration (the key restarts the viewer then)
  const now = usePageTime()
  const source = useMemo(() => createScriptedSource(700, now), [now])
  return <LogViewer key={now} source={source} levels={LEVELS} maxEntries={500} className="h-64 w-full rounded-md border" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>o(()=>import(`./streaming-logs-BLDUjKFN.js`),[]));var E={"./demos/log-viewer/compose.tsx":m,"./demos/log-viewer/streaming-logs.tsx":y},D={"./demos/log-viewer/compose.tsx":w,"./demos/log-viewer/streaming-logs.tsx":T};export{E as modules,D as sources};