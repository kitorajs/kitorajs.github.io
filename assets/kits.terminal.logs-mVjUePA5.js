import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-down-B95Dehwt.js";import{s as n}from"./kit-docs-BUovISd0.js";import{c as r,i,l as a,o,r as s,t as c}from"./log-viewer-B7vgYhkG.js";import{t as l}from"./search-D4xjEJsY.js";import{Bc as u,Cc as d,Go as f,Ic as p,Ko as m,Oi as h,Uo as g,hi as _}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as v}from"./example-BGnSQG2Y.js";import{t as y}from"./-kits.terminal.shared-BQ6z3kzr.js";var b=e(u(),1),x=p(),S=1e5;function C(){let{entries:e,generateMs:t,parseMs:n}=(0,b.useMemo)(()=>{let e=performance.now(),t=a(S,{seed:42,gapMs:25}),n=performance.now(),i=t.map((e,t)=>r.parse(e,t)),o=performance.now();return{entries:i,generateMs:n-e,parseMs:o-n}},[]),i=f();return(0,x.jsx)(c,{entries:e,statusEnd:(0,x.jsxs)(`span`,{children:[`generated in `,i?t.toFixed(0):`–`,` ms · parsed in `,i?n.toFixed(0):`–`,` ms`]})})}var w=`import { useMemo } from "react"
import { useHydrated } from "@kitora/primitives/react"
import { defaultLogParser, generateFakeLogLines, LogViewer } from "@kitora/terminal"

// 100k lines, generated and parsed up front, then filtered, searched and scrolled at frame rate.
// The list renders only the rows on screen; the status bar shows how long each filter pass takes.
const LINE_COUNT = 100_000

export function Log100k() {
  const { entries, generateMs, parseMs } = useMemo(() => {
    const t0 = performance.now()
    const lines = generateFakeLogLines(LINE_COUNT, { seed: 42, gapMs: 25 })
    const t1 = performance.now()
    const parsed = lines.map((line, i) => defaultLogParser.parse(line, i))
    const t2 = performance.now()
    return { entries: parsed, generateMs: t1 - t0, parseMs: t2 - t1 }
  }, [])
  // measured times differ on every render: shown once the page has hydrated, a dash in the server HTML
  const hydrated = useHydrated()
  return (
    <LogViewer
      entries={entries}
      statusEnd={
        <span>
          generated in {hydrated ? generateMs.toFixed(0) : "–"} ms · parsed in {hydrated ? parseMs.toFixed(0) : "–"} ms
        </span>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>d(()=>import(`./log-100k-Cb_eqIt6.js`),[]));var T={trace:`bg-zinc-300 dark:bg-zinc-700`,debug:`bg-sky-400`,info:`bg-emerald-500`,warn:`bg-amber-500`,error:`bg-red-500`,fatal:`bg-fuchsia-600`},E=e=>T[e]??`bg-muted-foreground`;function D(){let e=m(),n=i({source:(0,b.useMemo)(()=>{let t=a(300,{seed:9,start:e-6e4});return{subscribe:o({intervalMs:900,burst:2,seed:21}).subscribe,snapshot:()=>t}},[e]),defaultTimeMode:`relative`,lineHeight:24});return(0,x.jsxs)(s.Root,{viewer:n,className:`flex h-full flex-col bg-zinc-50 font-sans text-[12px] dark:bg-zinc-950`,children:[(0,x.jsxs)(s.Toolbar,{className:`flex shrink-0 items-center gap-2 border-b bg-background px-3 py-1.5`,children:[(0,x.jsxs)(`div`,{className:`flex h-7 min-w-0 flex-1 items-center gap-1.5 rounded-md border bg-background px-2 focus-within:ring-2 focus-within:ring-ring`,children:[(0,x.jsx)(l,{className:`size-3.5 shrink-0 text-muted-foreground`}),(0,x.jsx)(s.Filter,{placeholder:`Filter messages, fields, /regex/`,className:`h-full min-w-0 flex-1 bg-transparent font-mono text-[12px] outline-none [&::-webkit-search-cancel-button]:hidden`})]}),(0,x.jsx)(`div`,{className:`flex items-center gap-0.5`,children:n.levels.map(e=>(0,x.jsx)(s.LevelToggle,{level:e.name,className:`group grid size-7 place-items-center rounded-md outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring`,children:({active:t,label:n,count:r})=>(0,x.jsx)(`span`,{title:`${n} · ${r}`,className:_(`size-2.5 rounded-full transition`,E(e.name),!t&&`opacity-25 ring-1 ring-current`)})},e.name))})]}),(0,x.jsxs)(`div`,{className:`relative min-h-0 flex-1`,children:[(0,x.jsx)(s.List,{className:`absolute inset-0 outline-none`,renderRow:e=>(0,x.jsxs)(s.Row,{className:`group flex border-b border-border/50 bg-background/60 hover:bg-background`,children:[(0,x.jsx)(`span`,{className:_(`w-1 shrink-0`,E(e.entry.level))}),(0,x.jsxs)(`div`,{className:`min-w-0 flex-1 px-2`,children:[(0,x.jsxs)(s.Line,{className:`flex items-center gap-2`,children:[(0,x.jsx)(s.Time,{className:`w-[9ch] shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`}),(0,x.jsx)(s.Source,{className:`max-w-[10ch] shrink-0 truncate rounded bg-muted px-1.5 text-[10px] leading-4 font-medium text-muted-foreground data-[empty]:hidden`}),(0,x.jsx)(s.Message,{className:`min-w-0 flex-1 truncate`}),(0,x.jsx)(s.Expander,{className:`grid size-5 shrink-0 place-items-center rounded text-muted-foreground hover:bg-muted`,children:e=>(0,x.jsx)(h,{className:_(`size-3.5 transition-transform`,e&&`rotate-90`)})})]}),(0,x.jsx)(s.Detail,{className:`font-mono text-[11px] text-muted-foreground`,renderLine:(e,t)=>(0,x.jsxs)(`div`,{style:{height:n.lineHeight,paddingLeft:`${e.depth*2+9}ch`},className:`flex items-center gap-1 whitespace-pre`,children:[e.key===void 0?null:(0,x.jsx)(`span`,{className:`text-foreground/60`,children:e.key}),(0,x.jsx)(`span`,{className:_(e.kind===`string`&&`text-emerald-700 dark:text-emerald-400`,e.kind===`number`&&`text-sky-700 dark:text-sky-400`),children:e.text})]},t)})]})]})}),(0,x.jsx)(s.JumpToLatest,{className:`absolute right-3 bottom-3 inline-flex h-7 items-center gap-1 rounded-md bg-foreground px-2.5 text-[12px] font-medium text-background shadow-lg`,children:e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{className:`size-3.5`}),` `,e>0?`${e} new`:`Latest`]})})]})]})}var O=`import { useMemo } from "react"
import { ArrowDown, ChevronRight, Search } from "lucide-react"
import { usePageTime } from "@kitora/primitives/react"
import { createFakeLogSource, generateFakeLogLines, LogView, useLogViewer, type LogLevel, type LogSourceItem } from "@kitora/terminal"
import { cn } from "@kitora/ui/utils"

// A different log viewer rebuilt from the headless \`LogView\` parts: level dots instead of labelled
// toggles, a coloured bar per row, the source as a pill, fields expanded under the message, and the
// "N new" pill. Same hook, same behaviour, none of the preset's markup.
const BAR: Record<string, string> = {
  trace: "bg-zinc-300 dark:bg-zinc-700",
  debug: "bg-sky-400",
  info: "bg-emerald-500",
  warn: "bg-amber-500",
  error: "bg-red-500",
  fatal: "bg-fuchsia-600",
}
const barOf = (level: LogLevel) => BAR[level] ?? "bg-muted-foreground"
export function LogCustomParts() {
  // the last minute of history before "now", fixed for the page (the build's in the server HTML, the visitor's right after hydration)
  const now = usePageTime()
  const source = useMemo(() => {
    const history: readonly LogSourceItem[] = generateFakeLogLines(300, { seed: 9, start: now - 60_000 })
    const live = createFakeLogSource({ intervalMs: 900, burst: 2, seed: 21 })
    return { subscribe: live.subscribe, snapshot: () => history }
  }, [now])
  const viewer = useLogViewer({ source, defaultTimeMode: "relative", lineHeight: 24 })

  return (
    <LogView.Root viewer={viewer} className="flex h-full flex-col bg-zinc-50 font-sans text-[12px] dark:bg-zinc-950">
      <LogView.Toolbar className="flex shrink-0 items-center gap-2 border-b bg-background px-3 py-1.5">
        <div className="flex h-7 min-w-0 flex-1 items-center gap-1.5 rounded-md border bg-background px-2 focus-within:ring-2 focus-within:ring-ring">
          <Search className="size-3.5 shrink-0 text-muted-foreground" />
          <LogView.Filter placeholder="Filter messages, fields, /regex/" className="h-full min-w-0 flex-1 bg-transparent font-mono text-[12px] outline-none [&::-webkit-search-cancel-button]:hidden" />
        </div>
        <div className="flex items-center gap-0.5">
          {viewer.levels.map((l) => (
            <LogView.LevelToggle key={l.name} level={l.name} className="group grid size-7 place-items-center rounded-md outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
              {({ active, label, count }) => (
                <span title={\`\${label} · \${count}\`} className={cn("size-2.5 rounded-full transition", barOf(l.name), !active && "opacity-25 ring-1 ring-current")} />
              )}
            </LogView.LevelToggle>
          ))}
        </div>
      </LogView.Toolbar>
      <div className="relative min-h-0 flex-1">
        <LogView.List
          className="absolute inset-0 outline-none"
          renderRow={(row) => (
            <LogView.Row className="group flex border-b border-border/50 bg-background/60 hover:bg-background">
              <span className={cn("w-1 shrink-0", barOf(row.entry.level))} />
              <div className="min-w-0 flex-1 px-2">
                <LogView.Line className="flex items-center gap-2">
                  <LogView.Time className="w-[9ch] shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums" />
                  <LogView.Source className="max-w-[10ch] shrink-0 truncate rounded bg-muted px-1.5 text-[10px] leading-4 font-medium text-muted-foreground data-[empty]:hidden" />
                  <LogView.Message className="min-w-0 flex-1 truncate" />
                  <LogView.Expander className="grid size-5 shrink-0 place-items-center rounded text-muted-foreground hover:bg-muted">
                    {(open) => <ChevronRight className={cn("size-3.5 transition-transform", open && "rotate-90")} />}
                  </LogView.Expander>
                </LogView.Line>
                <LogView.Detail
                  className="font-mono text-[11px] text-muted-foreground"
                  renderLine={(line, i) => (
                    <div key={i} style={{ height: viewer.lineHeight, paddingLeft: \`\${line.depth * 2 + 9}ch\` }} className="flex items-center gap-1 whitespace-pre">
                      {line.key !== undefined ? <span className="text-foreground/60">{line.key}</span> : null}
                      <span className={cn(line.kind === "string" && "text-emerald-700 dark:text-emerald-400", line.kind === "number" && "text-sky-700 dark:text-sky-400")}>{line.text}</span>
                    </div>
                  )}
                />
              </div>
            </LogView.Row>
          )}
        />
        <LogView.JumpToLatest className="absolute right-3 bottom-3 inline-flex h-7 items-center gap-1 rounded-md bg-foreground px-2.5 text-[12px] font-medium text-background shadow-lg">
          {(n) => (
            <>
              <ArrowDown className="size-3.5" /> {n > 0 ? \`\${n} new\` : "Latest"}
            </>
          )}
        </LogView.JumpToLatest>
      </div>
    </LogView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>d(()=>import(`./log-custom-parts-CbMcrz_L.js`),[]));function k(){let[e,t]=(0,b.useState)(!1),n=(0,b.useRef)(e);return(0,b.useEffect)(()=>{n.current=e},[e]),(0,x.jsx)(c,{source:(0,b.useMemo)(()=>{let e=o({intervalMs:200,burst:8,seed:11,jsonRatio:.5});return{subscribe:t=>e.subscribe(e=>{n.current||t(e)})}},[]),maxEntries:2e4,defaultFilter:{hiddenLevels:[`trace`],text:``},toolbarStart:(0,x.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border px-2 font-sans text-[12px] font-medium hover:bg-muted`,"aria-pressed":e,title:e?`Resume the stream`:`Pause the stream`,children:[(0,x.jsx)(`span`,{className:e?`size-1.5 rounded-full bg-muted-foreground`:`size-1.5 animate-pulse rounded-full bg-emerald-500`}),e?`Paused`:`api-7f9c · prod`]})})}var A=`import { useEffect, useMemo, useRef, useState } from "react"
import { createFakeLogSource, LogViewer, type LogSource } from "@kitora/terminal"

// A live API server stream. The demo wraps the fake source in its own \`LogSource\` adapter that drops
// batches while paused (the seam any WebSocket or SSE stream plugs into), capped at 20k lines.
// Follow tail, filters and search keep working while lines arrive.
export function LogLive() {
  const [paused, setPaused] = useState(false)
  const pausedRef = useRef(paused)
  useEffect(() => {
    pausedRef.current = paused
  }, [paused])
  const source = useMemo<LogSource>(() => {
    const upstream = createFakeLogSource({ intervalMs: 200, burst: 8, seed: 11, jsonRatio: 0.5 })
    return {
      subscribe: (listener) =>
        upstream.subscribe((batch) => {
          if (!pausedRef.current) listener(batch)
        }),
    }
  }, [])
  return (
    <LogViewer
      source={source}
      maxEntries={20_000}
      defaultFilter={{ hiddenLevels: ["trace"], text: "" }}
      toolbarStart={
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border px-2 font-sans text-[12px] font-medium hover:bg-muted"
          aria-pressed={paused}
          title={paused ? "Resume the stream" : "Pause the stream"}
        >
          <span className={paused ? "size-1.5 rounded-full bg-muted-foreground" : "size-1.5 animate-pulse rounded-full bg-emerald-500"} />
          {paused ? "Paused" : "api-7f9c · prod"}
        </button>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>d(()=>import(`./log-live-fl6ASG-M.js`),[]));var j=a(2e4,{seed:5}),M=[`timed out`,`/ 5\\d\\d /`,`u_8f2a`,`/slow query took \\d{4}ms/`];function N(){let[e,t]=(0,b.useState)(M[0]),n=i({lines:j,search:e,onSearchChange:t,lineHeight:24}),r=g();return(0,x.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,x.jsxs)(`div`,{className:`flex shrink-0 flex-wrap items-center gap-1 border-b bg-muted/40 px-2 py-1.5 font-sans text-[12px]`,children:[(0,x.jsx)(`span`,{className:`mr-1 text-muted-foreground`,children:`Try:`}),M.map(n=>(0,x.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`h-6 rounded-md border bg-background px-2 font-mono text-[11px] hover:bg-muted aria-pressed:border-primary/50 aria-pressed:text-primary`,children:n},n)),(0,x.jsxs)(`span`,{className:`ml-auto text-muted-foreground tabular-nums`,children:[n.hits.length.toLocaleString(r),` hits · press Enter in the search box`]})]}),(0,x.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,x.jsx)(c,{viewer:n})})]})}var P=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { generateFakeLogLines, LogViewer, useLogViewer } from "@kitora/terminal"

// Search across hits with the state lifted out: \`useLogViewer\` owns it, preset chips drive the
// controlled search, and the viewer steps through hits with Enter / Shift+Enter (n of m).
const LINES = generateFakeLogLines(20_000, { seed: 5 })
const PRESETS = ["timed out", "/ 5\\\\d\\\\d /", "u_8f2a", "/slow query took \\\\d{4}ms/"] as const

export function LogSearch() {
  const [search, setSearch] = useState<string>(PRESETS[0])
  const viewer = useLogViewer({ lines: LINES, search, onSearchChange: setSearch, lineHeight: 24 })
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center gap-1 border-b bg-muted/40 px-2 py-1.5 font-sans text-[12px]">
        <span className="mr-1 text-muted-foreground">Try:</span>
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={search === p}
            onClick={() => setSearch(p)}
            className="h-6 rounded-md border bg-background px-2 font-mono text-[11px] hover:bg-muted aria-pressed:border-primary/50 aria-pressed:text-primary"
          >
            {p}
          </button>
        ))}
        <span className="ml-auto text-muted-foreground tabular-nums">
          {viewer.hits.length.toLocaleString(locale)} hits · press Enter in the search box
        </span>
      </div>
      <div className="min-h-0 flex-1">
        <LogViewer viewer={viewer} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>d(()=>import(`./log-search-Bp9I0F_k.js`),[]));function F(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(n,{title:`Log viewer`,children:"Virtualised logs for power users: level toggles with counts, text and regex filters, search with hit stepping, follow tail, inline JSON fields, wrap, relative time, copy and export. The core is plain TypeScript; the parts are headless; `LogViewer` is one preset of them."}),(0,x.jsx)(v,{n:1,title:`100,000 lines`,blurb:`Generated and parsed up front (timings in the status line), then filtered on every keystroke; the status bar shows each pass. Only the rows on screen are in the DOM.`,code:w,children:(0,x.jsx)(y,{testId:`log-100k`,height:460,children:(0,x.jsx)(C,{})})}),(0,x.jsx)(v,{n:2,title:`A live API server stream`,blurb:"A `LogSource` adapter pushes batches several times a second (pause drops them at the adapter). Follow tail, filters and search keep working while lines arrive.",code:A,children:(0,x.jsx)(y,{testId:`log-live`,height:420,children:(0,x.jsx)(k,{})})}),(0,x.jsx)(v,{n:3,title:`Search across hits`,blurb:"State lifted into `useLogViewer`; the chips drive the controlled search. Enter and Shift+Enter step through hits, `n of m` tracks where you are.",code:P,children:(0,x.jsx)(y,{testId:`log-search`,height:420,children:(0,x.jsx)(N,{})})}),(0,x.jsx)(v,{n:4,title:`Rebuilt from the parts`,blurb:"The same hook and headless `LogView` parts in a different design: level dots, row colour bars, source pills, expandable fields, a compact N new button.",code:O,children:(0,x.jsx)(y,{testId:`log-custom`,height:420,children:(0,x.jsx)(D,{})})})]})}export{F as component};