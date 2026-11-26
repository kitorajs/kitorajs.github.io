import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{F as n,R as r,Y as i,Z as a}from"./data-grid-highlight-DYn2QRdt.js";import{s as o}from"./kit-docs-CvNs0WqT.js";import{Bc as s,Cc as c,Ic as l}from"./index-9y5uwRd3.js";import{t as u}from"./badge-CMT8Lr82.js";import{t as d}from"./label-BCdE7eBP.js";import{a as f,i as p,n as m,r as h,t as g}from"./data-grid-live-tail-BRsDLpDT.js";import{n as _}from"./data-grid-B2EbDNhG.js";import{t as v}from"./filter-bar-BU6BAOSU.js";import"./kit-gallery-B-Yr9fP4.js";import{t as y}from"./example-CZLJLtIC.js";var b=e(s(),1),x=l(),S=[`api`,`auth`,`worker`,`queue`,`cdn`],C={info:[`request handled`,`user logged in`,`cache hit`,`health check ok`],warn:[`slow query`,`rate-limit approached`,`cache miss`,`retry in 200ms`],error:[`500 internal`,`db timeout`,`auth failed`,`circuit breaker open`],debug:[`payload received`,`cache key resolved`,`pipeline tick`,`queue depth ok`]};function w(e,t,n){let r=n??(e%17==0?`error`:e%11==0?`warn`:e%3==0?`debug`:`info`),i=C[r];return{id:`log-${t.getTime()}-${e}`,createdAt:t.toISOString(),severity:r,service:S[e%S.length],message:i[e%i.length]}}function T(){let e=Date.now(),t=[];for(let n=0;n<60;n++){let r=Math.floor((59-n)/12),i=new Date(e-r*864e5-(60-n)*6e4);t.push(w(n,i))}return t}var E={info:`bg-sky-500/10 text-[color:var(--dk-chip-ink,var(--color-sky-700))] dark:text-[color:var(--dk-chip-ink,var(--color-sky-300))]`,warn:`bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]`,error:`bg-rose-500/10 text-[color:var(--dk-chip-ink,var(--color-rose-700))] dark:text-[color:var(--dk-chip-ink,var(--color-rose-300))]`,debug:`bg-muted text-muted-foreground`},D=h({bucketKey:e=>f(new Date(e.createdAt)),format:e=>p(new Date(e))}),O=n()([D,{id:`time`,header:`Time`,cell:e=>new Date(e.createdAt).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),meta:{className:`font-mono text-[11px] text-muted-foreground tabular-nums`}},{id:`severity`,header:`Sev`,cell:e=>(0,x.jsx)(u,{className:`${E[e.severity]} uppercase`,children:e.severity})},{id:`service`,header:`Service`,cell:e=>(0,x.jsx)(`code`,{className:`text-[11px]`,children:e.service})},{id:`message`,header:`Message`,cell:e=>e.message}]);function k(){let[e]=(0,b.useState)(T),t=(0,b.useMemo)(()=>r({initial:e,searchKeys:[`service`,`message`,`severity`],search:{placeholder:`Search logs…`,toWhere:e=>({_q:e})},latencyMs:0}),[e]);return(0,x.jsx)(a,{defaultPageSize:1/0,defaultGroupByColumnId:`date-bucket`,children:(0,x.jsx)(i,{adapter:t,children:(0,x.jsx)(A,{adapter:t})})})}function A({adapter:e}){let n=(0,b.useRef)(null),[r,i]=(0,b.useState)(!0),a=(0,b.useRef)(0);return(0,b.useEffect)(()=>{if(!r)return;let t=setInterval(()=>{a.current+=1,e.push(w(Date.now()+a.current,new Date))},1500);return()=>clearInterval(t)},[r,e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`mt-4 flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-1 p-2`,children:[(0,x.jsx)(v,{}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(d,{htmlFor:`streaming-toggle`,className:`text-[12px] text-muted-foreground`,children:`Stream`}),(0,x.jsx)(t,{id:`streaming-toggle`,checked:r,onCheckedChange:i})]})]}),(0,x.jsxs)(`div`,{className:`mt-3 relative`,children:[(0,x.jsx)(`div`,{ref:n,className:`max-h-[520px] overflow-y-auto rounded-lg border border-border`,children:(0,x.jsx)(_,{columns:O,selectable:!1,stickyHeader:!1})}),(0,x.jsx)(m,{}),(0,x.jsx)(g,{scrollContainerRef:n,enabled:r,stickThreshold:64})]}),(0,x.jsxs)(`p`,{className:`mt-4 text-[11px] text-muted-foreground`,children:[`The stream pushes a synthetic log row every 1.5s via`,` `,(0,x.jsx)(`code`,{className:`font-mono text-[10.5px]`,children:`adapter.push()`}),` on the reference in-memory adapter. Each call fans out to every`,` `,(0,x.jsx)(`code`,{className:`font-mono text-[10.5px]`,children:`adapter.subscribe`}),` `,`listener — including the one this provider opened on mount. Hover or scroll up to pause; click the "N new ↓" badge to catch up.`]})]})}var j=`import { useEffect, useMemo, useRef, useState } from "react"
import { DataGrid, DataGridDateBucketActivator, DataGridFilterBar, DataGridLiveTail, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns, defineDateBucketColumn, formatRelativeDay, startOfDayKey, type InMemoryAdapter } from "@kitora/datagrid"
import { Switch } from "@kitora/ui/switch"
import { Label } from "@kitora/ui/label"
import { Badge } from "@kitora/ui/badge"

/**
 * Log stream: date-bucket separators + live tail.
 *
 * Two overlay primitives showcased on a single page:
 *
 *   <DataGridDateBucketActivator />  → Slack-style "Today / Yesterday /
 *                                       Mar 14" section headers between
 *                                       rows whose \`createdAt\` falls on
 *                                       different UTC days. Drives via
 *                                       the existing groupBy infra; no
 *                                       new render path.
 *
 *   <DataGridLiveTail />              → sticky "N new" badge + auto-
 *                                       scroll-to-bottom while user is
 *                                       at the bottom; auto-pauses on
 *                                       hover / manual-scroll-up.
 *
 * The "stream" is faked here — a \`setInterval\` pushes synthetic rows
 * into the in-memory adapter every 1.5s so you can watch both primitives
 * react in real time. In production this would be \`adapter.subscribe\`
 * (planned) or any other push channel.
 */

type Severity = 'info' | 'warn' | 'error' | 'debug'

interface LogRow {
  id: string
  createdAt: string
  severity: Severity
  service: string
  message: string
}

const SERVICES = ['api', 'auth', 'worker', 'queue', 'cdn']
const SAMPLE_MESSAGES: Record<Severity, string[]> = {
  info: ['request handled', 'user logged in', 'cache hit', 'health check ok'],
  warn: ['slow query', 'rate-limit approached', 'cache miss', 'retry in 200ms'],
  error: ['500 internal', 'db timeout', 'auth failed', 'circuit breaker open'],
  debug: ['payload received', 'cache key resolved', 'pipeline tick', 'queue depth ok'],
}

function makeRow(idx: number, when: Date, severity?: Severity): LogRow {
  const sev = severity ?? (
    idx % 17 === 0 ? 'error' :
    idx % 11 === 0 ? 'warn' :
    idx % 3 === 0 ? 'debug' :
    'info'
  )
  const msgs = SAMPLE_MESSAGES[sev]
  return {
    id: \`log-\${when.getTime()}-\${idx}\`,
    createdAt: when.toISOString(),
    severity: sev,
    service: SERVICES[idx % SERVICES.length],
    message: msgs[idx % msgs.length],
  }
}

/* Seed — 60 rows spread across the last 5 days so users see multiple
 * date buckets at first paint. Older rows first (chronological asc) so
 * "newest at bottom" feels natural like a log tail. */
function seedRows(): LogRow[] {
  const now = Date.now()
  const out: LogRow[] = []
  for (let i = 0; i < 60; i++) {
    const daysBack = Math.floor((59 - i) / 12)
    const t = new Date(now - daysBack * 86_400_000 - (60 - i) * 60_000)
    out.push(makeRow(i, t))
  }
  return out
}

const SEVERITY_TONE: Record<Severity, string> = {
  info: 'bg-sky-500/10 text-[color:var(--dk-chip-ink,var(--color-sky-700))] dark:text-[color:var(--dk-chip-ink,var(--color-sky-300))]',
  warn: 'bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]',
  error: 'bg-rose-500/10 text-[color:var(--dk-chip-ink,var(--color-rose-700))] dark:text-[color:var(--dk-chip-ink,var(--color-rose-300))]',
  debug: 'bg-muted text-muted-foreground',
}

const dateBucket = defineDateBucketColumn<LogRow>({
  bucketKey: (r) => startOfDayKey(new Date(r.createdAt)),
  format: (key) => formatRelativeDay(new Date(key)),
})

const columns = defineColumns<LogRow>()([
  dateBucket,
  {
    id: 'time',
    header: 'Time',
    cell: (r) =>
      new Date(r.createdAt).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    meta: { className: 'font-mono text-[11px] text-muted-foreground tabular-nums' },
  },
  {
    id: 'severity',
    header: 'Sev',
    cell: (r) => (
      <Badge className={\`\${SEVERITY_TONE[r.severity]} uppercase\`}>{r.severity}</Badge>
    ),
  },
  { id: 'service', header: 'Service', cell: (r) => <code className="text-[11px]">{r.service}</code> },
  { id: 'message', header: 'Message', cell: (r) => r.message },
])

export function LogStream() {
  /* Persistent seed across re-renders. */
  const [initial] = useState(seedRows)

  const adapter = useMemo<InMemoryAdapter<LogRow>>(
    () =>
      createInMemoryAdapter<LogRow>({
        initial,
        searchKeys: ['service', 'message', 'severity'],
        search: { placeholder: 'Search logs…', toWhere: (q) => ({ _q: q }) },
        latencyMs: 0,
      }),
    [initial],
  )

  return (
    <DataGridUIProvider
      defaultPageSize={Infinity}
      defaultGroupByColumnId="date-bucket"
    >
      <DataGridProvider adapter={adapter}>
        <Body adapter={adapter} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}

function Body({ adapter }: { adapter: InMemoryAdapter<LogRow> }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [streaming, setStreaming] = useState(true)
  const tickRef = useRef(0)

  /* Fake live stream — push a synthetic log row every 1.5s while
   * streaming is on. The in-memory adapter's \`push()\` fans the row
   * out to every subscriber registered via \`adapter.subscribe()\` —
   * which is the one our provider opened on mount. The provider
   * patches its \`rows\` state → \`<DataGridLiveTail>\` sees the delta
   * and auto-scrolls (or shows "N new ↓" if user is hovering / has
   * scrolled away). Real adapters open WebSocket / SSE / poll in
   * their own \`subscribe()\` impl; this demo just simulates that. */
  useEffect(() => {
    if (!streaming) return
    const handle = setInterval(() => {
      tickRef.current += 1
      adapter.push(makeRow(Date.now() + tickRef.current, new Date()))
    }, 1500)
    return () => clearInterval(handle)
  }, [streaming, adapter])

  return (
    <>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-1 p-2">
        <DataGridFilterBar />
        <div className="flex items-center gap-2">
          <Label htmlFor="streaming-toggle" className="text-[12px] text-muted-foreground">
            Stream
          </Label>
          <Switch
            id="streaming-toggle"
            checked={streaming}
            onCheckedChange={setStreaming}
          />
        </div>
      </div>

      <div className="mt-3 relative">
        <div
          ref={scrollRef}
          className="max-h-[520px] overflow-y-auto rounded-lg border border-border"
        >
          <DataGrid<LogRow>
            columns={columns}
            selectable={false}
            stickyHeader={false}
          />
        </div>

        <DataGridDateBucketActivator />

        <DataGridLiveTail
          scrollContainerRef={scrollRef}
          enabled={streaming}
          stickThreshold={64}
        />
      </div>

      <p className="mt-4 text-[11px] text-muted-foreground">
        The stream pushes a synthetic log row every 1.5s via{' '}
        <code className="font-mono text-[10.5px]">adapter.push()</code> on
        the reference in-memory adapter. Each call fans out to every{' '}
        <code className="font-mono text-[10.5px]">adapter.subscribe</code>
        {' '}listener — including the one this provider opened on mount.
        Hover or scroll up to pause; click the &quot;N new ↓&quot; badge to
        catch up.
      </p>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>c(()=>import(`./log-stream-CtjoMqd2.js`),[]));function M(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o,{title:`Log stream`,children:[`Two overlay primitives on the same grid:`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`<DataGridDateBucketActivator>`}),` `,`bucks each row into its calendar day (Today / Yesterday / older), and`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`<DataGridLiveTail>`}),` `,`auto-scrolls when new rows land. Hover or scroll up to pause; click the "N new ↓" badge to resume.`]}),(0,x.jsx)(y,{n:1,title:`Date buckets and live tail`,blurb:`A fake stream pushes a row every 1.5s through adapter.push(); rows bucket into Today / Yesterday / older, and the tail follows new rows until you hover or scroll up.`,code:j,children:(0,x.jsx)(k,{})})]})}export{M as component};