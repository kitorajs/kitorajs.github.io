import{t as e}from"./activity-CGPZKjKV.js";import{i as t}from"./stats-CtcjhyCn.js";import{t as n}from"./arrow-up-right-CDYg675f.js";import{t as r}from"./circle-check-CzxPyIkl.js";import{t as i}from"./database-DFh-unBy.js";import{t as a}from"./download-DmNVxFcg.js";import{t as o}from"./file-text-DcQTIaDt.js";import{t as s}from"./git-branch-Cwmkb4Z_.js";import{t as c}from"./git-commit-horizontal-On2VFlmH.js";import{t as l}from"./git-pull-request-bY-XAhZg.js";import{t as u}from"./globe-DhCQ2plc.js";import{a as d,s as f,t as p}from"./log-viewer-CwS10mVF.js";import{t as m}from"./refresh-cw-BxB-PhHi.js";import{t as h}from"./server-Bi_mEC3o.js";import{t as g}from"./users-ZX8x1RHA.js";import{t as _}from"./zap-CddFqPAs.js";import{Cc as v,Ic as y,ti as b}from"./index-q72zUtm9.js";import{t as x}from"./badge-Be8rVEaF.js";import{t as S}from"./timeline-DcgQzW6Q.js";import{t as C}from"./page-5VykEPaJ.js";import{t as w}from"./separator-DbMx24vO.js";import{t as T}from"./button-group-ptoJBpd1.js";import{t as E}from"./template-page-ImOqJCRR.js";var D=y(),O=[{label:`Requests`,value:`248K`,delta:`+8.1%`,current:248,previous:229.4,series:[20,28,22,36,32,44,40,52,50,64,60,68],hint:`last 24h`},{label:`Error rate`,value:`0.03%`,delta:`-12%`,current:.03,previous:.034,invert:!0,series:[60,52,48,44,40,32,28,22,18,12,14,8],hint:`last 24h`},{label:`P99 latency`,value:`124ms`,delta:`+4ms`,current:124,previous:120,invert:!0,series:[100,105,102,110,108,115,112,118,120,122,124,124],hint:`last 24h`},{label:`Uptime`,value:`99.98%`,delta:`0`,current:99.98,previous:99.98,series:[100,100,100,99.9,100,100,100,99.95,100,100,100,100],hint:`30 day`}],k=e=>(0,D.jsx)(`span`,{className:`font-medium text-foreground`,children:e}),A=[{id:`1`,actor:`Grace H`,title:(0,D.jsxs)(D.Fragment,{children:[`merged `,k(`#412 auth refactor`)]}),timeLabel:`just now`,icon:(0,D.jsx)(l,{}),tone:`success`},{id:`2`,actor:`Alex Kim`,title:(0,D.jsxs)(D.Fragment,{children:[`deployed `,k(`production`)]}),timeLabel:`14m ago`,icon:(0,D.jsx)(r,{}),tone:`success`},{id:`3`,actor:`Linus T`,title:(0,D.jsxs)(D.Fragment,{children:[`pushed to `,k(`main`)]}),timeLabel:`1h ago`,icon:(0,D.jsx)(c,{})},{id:`4`,actor:`Mira O`,title:(0,D.jsxs)(D.Fragment,{children:[`opened `,k(`feat/cdn-cache-policy`)]}),timeLabel:`2h ago`,icon:(0,D.jsx)(s,{})},{id:`5`,actor:`Alex Kim`,title:(0,D.jsxs)(D.Fragment,{children:[`edited `,k(`rate-limit spec`)]}),timeLabel:`5h ago`,icon:(0,D.jsx)(o,{})}],j=Date.UTC(2026,0,1),M=[{time:`11:42:01`,level:`info`,source:`api`,message:`GET /v1/users 200 24ms`},{time:`11:42:01`,level:`debug`,source:`cache`,message:`HIT user:42`},{time:`11:42:02`,level:`info`,source:`api`,message:`POST /v1/sessions 201 88ms`},{time:`11:42:02`,level:`info`,source:`api`,message:`GET /v1/projects 200 31ms`},{time:`11:42:03`,level:`warn`,source:`limiter`,message:`rate exceeded for ip 203.0.113.42`},{time:`11:42:03`,level:`info`,source:`api`,message:`POST /v1/tasks 201 102ms`},{time:`11:42:04`,level:`error`,source:`db`,message:`connection refused: max pool reached`},{time:`11:42:05`,level:`info`,source:`db`,message:`reconnecting…`},{time:`11:42:06`,level:`info`,source:`db`,message:`connected (pool size: 20)`},{time:`11:42:07`,level:`info`,source:`api`,message:`GET /v1/users/42 200 19ms`},{time:`11:42:08`,level:`debug`,source:`cache`,message:`MISS user:128`},{time:`11:42:08`,level:`info`,source:`api`,message:`GET /v1/users/128 200 56ms`}],N=d.filter(e=>M.some(t=>t.level===e.name)),P=M.map((e,t)=>{let[n,r,i]=e.time.split(`:`).map(Number);return f(t,{time:j+((n*60+r)*60+i)*1e3,level:e.level,source:e.source,message:e.message})});function F({metric:e}){return(0,D.jsxs)(t.Root,{children:[(0,D.jsx)(t.Label,{children:e.label}),(0,D.jsx)(t.Value,{chart:(0,D.jsx)(t.Sparkline,{values:e.series,invert:e.invert,width:72,height:28,className:`w-11 sm:w-auto`}),children:e.value}),(0,D.jsx)(t.Trend,{current:e.current,previous:e.previous,invert:e.invert,format:()=>e.delta,className:`mt-1.5`}),(0,D.jsx)(t.Footnote,{children:e.hint})]})}function I(){return(0,D.jsxs)(`div`,{className:`mx-auto max-w-[1400px] px-6 py-8`,children:[(0,D.jsx)(C.Header,{className:`border-border px-0 pt-0 pb-5 sm:px-0`,children:(0,D.jsxs)(C.Heading,{className:`gap-x-3 gap-y-3`,actions:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(T,{children:[(0,D.jsx)(b,{variant:`outline`,size:`sm`,children:`1h`}),(0,D.jsx)(b,{variant:`secondary`,size:`sm`,children:`24h`}),(0,D.jsx)(b,{variant:`outline`,size:`sm`,children:`7d`}),(0,D.jsx)(b,{variant:`outline`,size:`sm`,children:`30d`})]}),(0,D.jsxs)(b,{variant:`outline`,size:`sm`,children:[(0,D.jsx)(m,{}),`Refresh`]}),(0,D.jsxs)(b,{size:`sm`,children:[(0,D.jsx)(a,{}),`Export`]})]}),children:[(0,D.jsx)(C.Title,{className:`text-2xl leading-8 tracking-tighter`,children:`Production · us-east-1`}),(0,D.jsx)(C.Description,{className:`mt-1 max-w-2xl text-sm`,children:`Live overview of API health, deploy state, and traffic.`})]})}),(0,D.jsx)(`div`,{className:`mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4`,children:O.map(e=>(0,D.jsx)(F,{metric:e},e.label))}),(0,D.jsxs)(`div`,{className:`mt-6 grid gap-4 lg:grid-cols-3`,children:[(0,D.jsxs)(`div`,{className:`space-y-3 rounded-lg border border-border bg-card p-4 lg:col-span-2`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold tracking-tight`,children:`Service health`}),(0,D.jsxs)(x,{variant:`outline`,className:`font-mono text-[10px]`,children:[(0,D.jsx)(`span`,{className:`mr-1.5 size-1.5 rounded-full bg-emerald-500`}),`All systems normal`]})]}),(0,D.jsx)(w,{}),(0,D.jsx)(`ul`,{className:`divide-y divide-border`,children:[{name:`API gateway`,icon:u,status:`ok`,latency:`24ms`,traffic:`4.2K rps`},{name:`Auth service`,icon:g,status:`ok`,latency:`18ms`,traffic:`1.8K rps`},{name:`Database (primary)`,icon:i,status:`ok`,latency:`6ms`,traffic:`8.4K qps`},{name:`Database (replica)`,icon:i,status:`ok`,latency:`8ms`,traffic:`12K qps`},{name:`Workers`,icon:h,status:`warn`,latency:`210ms`,traffic:`320 jps`},{name:`CDN edge`,icon:_,status:`ok`,latency:`12ms`,traffic:`78K rps`}].map(e=>{let t=e.icon;return(0,D.jsxs)(`li`,{className:`flex items-center gap-3 py-2.5`,children:[(0,D.jsx)(`span`,{className:`grid size-7 place-items-center rounded-md border border-border bg-surface-1 [&_svg]:size-3.5 ${e.status===`ok`?`text-emerald-700 dark:text-emerald-400`:`text-amber-700 dark:text-amber-400`}`,children:(0,D.jsx)(t,{})}),(0,D.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,D.jsx)(`div`,{className:`text-sm font-medium`,children:e.name}),(0,D.jsxs)(`div`,{className:`font-mono text-[11px] text-muted-foreground`,children:[e.latency,` · `,e.traffic]})]}),(0,D.jsx)(`span`,{className:`size-2 rounded-full ${e.status===`ok`?`bg-emerald-500`:`bg-amber-500`}`})]},e.name)})})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-border bg-card p-4`,children:[(0,D.jsxs)(`div`,{className:`mb-3 flex items-center justify-between`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold tracking-tight`,children:`Activity`}),(0,D.jsxs)(b,{variant:`ghost`,size:`xs`,children:[`View all`,(0,D.jsx)(n,{})]})]}),(0,D.jsx)(S,{label:`Recent activity`,density:`compact`,events:A})]})]}),(0,D.jsxs)(`div`,{className:`mt-6 rounded-lg border border-border bg-card p-4`,children:[(0,D.jsxs)(`div`,{className:`mb-3 flex items-center justify-between`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold tracking-tight`,children:`Live logs`}),(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Tailing api-gateway · prod-us-east-1`})]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsxs)(x,{variant:`outline`,className:`font-mono text-[10px]`,children:[(0,D.jsx)(e,{className:`mr-1 size-3 animate-pulse`}),`Live`]}),(0,D.jsx)(b,{variant:`outline`,size:`sm`,children:`Pause`})]})]}),(0,D.jsx)(p,{entries:P,levels:N,defaultFollow:!0,className:`h-72 w-full rounded-md border`})]})]})}var L=`import { Activity, ArrowUpRight, Database, Download, Globe, RefreshCw, Server, Users, Zap } from 'lucide-react'
import { Badge } from '@kitora/ui/badge'
import { Button } from '@kitora/ui/button'
import { ButtonGroup } from '@kitora/ui/button-group'
import { Separator } from '@kitora/ui/separator'
import { StatCard, Timeline } from '@kitora/display'
import { LogViewer } from '@kitora/terminal'
import { Page } from '@kitora/shell'
import { ACTIVITY, LOG_ENTRIES, LOG_VIEW_LEVELS, METRICS, type Metric } from './data'

/** The display kit's StatCard parts: label, value with sparkline, a trend badge carrying the delta text, the hint as footnote. */
function MetricCard({ metric: m }: { metric: Metric }) {
  return (
    <StatCard.Root>
      <StatCard.Label>{m.label}</StatCard.Label>
      {/* The sparkline shrinks on phones so a wide value (99.98%) never runs into it. */}
      <StatCard.Value chart={<StatCard.Sparkline values={m.series} invert={m.invert} width={72} height={28} className="w-11 sm:w-auto" />}>{m.value}</StatCard.Value>
      <StatCard.Trend current={m.current} previous={m.previous} invert={m.invert} format={() => m.delta} className="mt-1.5" />
      <StatCard.Footnote>{m.hint}</StatCard.Footnote>
    </StatCard.Root>
  )
}

/** An operations dashboard: headline metrics with sparklines, service health, recent activity and a live log tail. */
export function DashboardTemplate() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-8">
      {/* The shell kit's page header: title, description and actions. */}
      <Page.Header className="border-border px-0 pt-0 pb-5 sm:px-0">
        <Page.Heading
          className="gap-x-3 gap-y-3"
          actions={
            <>
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  1h
                </Button>
                <Button variant="secondary" size="sm">
                  24h
                </Button>
                <Button variant="outline" size="sm">
                  7d
                </Button>
                <Button variant="outline" size="sm">
                  30d
                </Button>
              </ButtonGroup>
              <Button variant="outline" size="sm">
                <RefreshCw />
                Refresh
              </Button>
              <Button size="sm">
                <Download />
                Export
              </Button>
            </>
          }
        >
          <Page.Title className="text-2xl leading-8 tracking-tighter">Production · us-east-1</Page.Title>
          <Page.Description className="mt-1 max-w-2xl text-sm">
            Live overview of API health, deploy state, and traffic.
          </Page.Description>
        </Page.Heading>
      </Page.Header>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {METRICS.map((m) => (
          <MetricCard key={m.label} metric={m} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-lg border border-border bg-card p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-tight">Service health</h3>
            <Badge variant="outline" className="font-mono text-[10px]">
              <span className="mr-1.5 size-1.5 rounded-full bg-emerald-500" />
              All systems normal
            </Badge>
          </div>
          <Separator />
          <ul className="divide-y divide-border">
            {[
              { name: 'API gateway', icon: Globe, status: 'ok', latency: '24ms', traffic: '4.2K rps' },
              { name: 'Auth service', icon: Users, status: 'ok', latency: '18ms', traffic: '1.8K rps' },
              { name: 'Database (primary)', icon: Database, status: 'ok', latency: '6ms', traffic: '8.4K qps' },
              { name: 'Database (replica)', icon: Database, status: 'ok', latency: '8ms', traffic: '12K qps' },
              { name: 'Workers', icon: Server, status: 'warn', latency: '210ms', traffic: '320 jps' },
              { name: 'CDN edge', icon: Zap, status: 'ok', latency: '12ms', traffic: '78K rps' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <li key={s.name} className="flex items-center gap-3 py-2.5">
                  <span
                    className={\`grid size-7 place-items-center rounded-md border border-border bg-surface-1 [&_svg]:size-3.5 \${
                      s.status === 'ok' ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'
                    }\`}
                  >
                    <Icon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      {s.latency} · {s.traffic}
                    </div>
                  </div>
                  <span
                    className={\`size-2 rounded-full \${
                      s.status === 'ok' ? 'bg-emerald-500' : 'bg-amber-500'
                    }\`}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-tight">Activity</h3>
            <Button variant="ghost" size="xs">
              View all
              <ArrowUpRight />
            </Button>
          </div>
          <Timeline label="Recent activity" density="compact" events={ACTIVITY} />
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold tracking-tight">Live logs</h3>
            <p className="text-xs text-muted-foreground">Tailing api-gateway · prod-us-east-1</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-[10px]">
              <Activity className="mr-1 size-3 animate-pulse" />
              Live
            </Badge>
            <Button variant="outline" size="sm">
              Pause
            </Button>
          </div>
        </div>
        {/* The terminal kit's viewer brings its own toolbar (level toggles, filter, search, follow). */}
        <LogViewer entries={LOG_ENTRIES} levels={LOG_VIEW_LEVELS} defaultFollow className="h-72 w-full rounded-md border" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>v(()=>import(`./page-IXdfI9CF.js`),[]));var R=`import { CheckCircle2, FileText, GitBranch, GitCommit, GitPullRequest } from 'lucide-react'
import type { TimelineEvent } from '@kitora/display'
import { createLogEntry, LOG_LEVELS, type LogEntry } from '@kitora/terminal'

/** One headline metric: \`delta\` is the trend badge's text, \`invert\` when down is good. */
export interface Metric {
  readonly label: string
  readonly value: string
  /** The trend text shown in the badge (\`+8.1%\`, \`+4ms\`). */
  readonly delta: string
  /** Raw numbers the badge's direction and colour come from. */
  readonly current: number
  readonly previous: number
  readonly invert?: boolean
  readonly series: readonly number[]
  readonly hint: string
}

export const METRICS: readonly Metric[] = [
  { label: 'Requests', value: '248K', delta: '+8.1%', current: 248, previous: 229.4, series: [20, 28, 22, 36, 32, 44, 40, 52, 50, 64, 60, 68], hint: 'last 24h' },
  { label: 'Error rate', value: '0.03%', delta: '-12%', current: 0.03, previous: 0.034, invert: true, series: [60, 52, 48, 44, 40, 32, 28, 22, 18, 12, 14, 8], hint: 'last 24h' },
  { label: 'P99 latency', value: '124ms', delta: '+4ms', current: 124, previous: 120, invert: true, series: [100, 105, 102, 110, 108, 115, 112, 118, 120, 122, 124, 124], hint: 'last 24h' },
  { label: 'Uptime', value: '99.98%', delta: '0', current: 99.98, previous: 99.98, series: [100, 100, 100, 99.9, 100, 100, 100, 99.95, 100, 100, 100, 100], hint: '30 day' },
]

/** Deploy and repo events for the Activity card (display Timeline: actor, action, emphasised target). */
const target = (text: string) => <span className="font-medium text-foreground">{text}</span>
export const ACTIVITY: readonly TimelineEvent[] = [
  { id: '1', actor: 'Grace H', title: <>merged {target('#412 auth refactor')}</>, timeLabel: 'just now', icon: <GitPullRequest />, tone: 'success' },
  { id: '2', actor: 'Alex Kim', title: <>deployed {target('production')}</>, timeLabel: '14m ago', icon: <CheckCircle2 />, tone: 'success' },
  { id: '3', actor: 'Linus T', title: <>pushed to {target('main')}</>, timeLabel: '1h ago', icon: <GitCommit /> },
  { id: '4', actor: 'Mira O', title: <>opened {target('feat/cdn-cache-policy')}</>, timeLabel: '2h ago', icon: <GitBranch /> },
  { id: '5', actor: 'Alex Kim', title: <>edited {target('rate-limit spec')}</>, timeLabel: '5h ago', icon: <FileText /> },
]

/** A fixed day for the sample log, so its \`HH:MM:SS\` times render the same on server and client. */
const LOG_DAY = Date.UTC(2026, 0, 1)
const LOG_LINES: readonly { time: string; level: string; source: string; message: string }[] = [
  { time: '11:42:01', level: 'info', source: 'api', message: 'GET /v1/users 200 24ms' },
  { time: '11:42:01', level: 'debug', source: 'cache', message: 'HIT user:42' },
  { time: '11:42:02', level: 'info', source: 'api', message: 'POST /v1/sessions 201 88ms' },
  { time: '11:42:02', level: 'info', source: 'api', message: 'GET /v1/projects 200 31ms' },
  { time: '11:42:03', level: 'warn', source: 'limiter', message: 'rate exceeded for ip 203.0.113.42' },
  { time: '11:42:03', level: 'info', source: 'api', message: 'POST /v1/tasks 201 102ms' },
  { time: '11:42:04', level: 'error', source: 'db', message: 'connection refused: max pool reached' },
  { time: '11:42:05', level: 'info', source: 'db', message: 'reconnecting…' },
  { time: '11:42:06', level: 'info', source: 'db', message: 'connected (pool size: 20)' },
  { time: '11:42:07', level: 'info', source: 'api', message: 'GET /v1/users/42 200 19ms' },
  { time: '11:42:08', level: 'debug', source: 'cache', message: 'MISS user:128' },
  { time: '11:42:08', level: 'info', source: 'api', message: 'GET /v1/users/128 200 56ms' },
]
/** Only the levels the sample uses get a toolbar toggle, so the toolbar fits a phone-width card. */
export const LOG_VIEW_LEVELS = LOG_LEVELS.filter((l) => LOG_LINES.some((line) => line.level === l.name))
export const LOG_ENTRIES: readonly LogEntry[] = LOG_LINES.map((l, i) => {
  const [h, m, sec] = l.time.split(':').map(Number)
  return createLogEntry(i, { time: LOG_DAY + ((h * 60 + m) * 60 + sec) * 1000, level: l.level, source: l.source, message: l.message })
})
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>v(()=>import(`./data-Cqd0vLNG.js`),[]));var z=[{name:`page.tsx`,code:L},{name:`data.tsx`,code:R}];function B(){return(0,D.jsx)(E,{slug:`dashboard`,files:z,children:(0,D.jsx)(I,{})})}export{B as component};