import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./pause-DT6isEA_.js";import{t as r}from"./play-QIB3BLWv.js";import{t as i}from"./plus-DdsWgtk9.js";import{t as a}from"./zap-Cc_MY59V.js";import{Ec as o,Uc as s,_i as c,_t as l,ri as u,zc as d}from"./index-BZuUy872.js";import{t as f}from"./badge-zOMNRv4l.js";import"./kit-gallery-BBavj2rC.js";import{t as p}from"./example-B67lLz1F.js";import{n as m,r as h,t as g}from"./tabster-DdIcOxyJ.js";import{t as _}from"./define-panels-ftPk9pfn.js";var v=e(s(),1),y=d(),b={emerald:`bg-emerald-500/15 text-emerald-800 dark:text-emerald-300`,sky:`bg-sky-500/15 text-sky-800 dark:text-sky-300`,violet:`bg-violet-500/15 text-violet-800 dark:text-violet-300`,amber:`bg-amber-500/15 text-amber-800 dark:text-amber-300`},x=[`emerald`,`sky`,`violet`,`amber`],S=1200,C=200,w=(e,t=2)=>String(e).padStart(t,`0`),T=()=>{let e=new Date;return`${w(e.getMinutes())}:${w(e.getSeconds())}.${w(e.getMilliseconds(),3)}`};function E(e){let t=e.params?.label??`session`,i=e.params?.tone??`emerald`,o=(0,v.useRef)(Date.now()),s=(0,v.useRef)(0),[u,d]=(0,v.useState)(!0),[p,g]=(0,v.useState)(()=>[`[${T()}] session "${t}" started`,`[${T()}] heartbeat 0`]),[_,x]=(0,v.useState)(!1);if(_)throw Error(`Intentional crash from "${t}" — error boundary test`);return(0,v.useEffect)(()=>{l.success(`Session "${t}" started`,{description:`pid ${Math.random().toString(36).slice(2,8)}`})},[t]),m(()=>{l.info(`Session "${t}" closed`,{description:`uptime ${((Date.now()-o.current)/1e3).toFixed(1)}s`})}),h(e=>{d(e),g(t=>[...t,`[${T()}] ${e?`▶ resumed`:`⏸ paused`}`])}),(0,v.useEffect)(()=>{if(!u)return;let e=window.setInterval(()=>{s.current+=1,g(e=>[...e,`[${T()}] heartbeat ${s.current}`].slice(-C))},S);return()=>window.clearInterval(e)},[u]),(0,y.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground`,children:[(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,y.jsx)(a,{className:`size-3`}),(0,y.jsx)(f,{className:c(b[i],`text-[10px]`),children:t})]}),(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-2 font-mono`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>x(!0),className:`rounded border border-destructive/30 px-1.5 py-0.5 text-[10px] text-destructive hover:bg-destructive/10`,title:`Throw to test the per-panel error boundary`,children:`crash`}),u?(0,y.jsx)(r,{className:`size-2.5`}):(0,y.jsx)(n,{className:`size-2.5`}),u?`live`:`paused`]})]}),(0,y.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-foreground`,children:p.join(`
`)})]})}var D=_({session:E}),O=D.specs([{id:`session.1`,component:`session`,title:`session-1`,renderer:`always`,params:{label:`always-1`,tone:`emerald`}},{id:`session.2`,component:`session`,title:`session-2`,renderer:`onlyWhenVisible`,position:{referencePanel:`session.1`,direction:`right`},params:{label:`visible-only-2`,tone:`amber`}}]),k={always:`always`,onlyWhenVisible:`visible-only`};function A(){let e=(0,v.useRef)(null),t=(0,v.useRef)(3),n=n=>{let r=t.current++,i=`${k[n]}-${r}`;e.current?.addPanel(D.spec({id:`session.${r}`,component:`session`,title:i,renderer:n,params:{label:i,tone:x[r%x.length]}}))};return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,y.jsxs)(u,{size:`sm`,onClick:()=>n(`always`),children:[(0,y.jsx)(i,{}),`New session (always)`]}),(0,y.jsxs)(u,{size:`sm`,variant:`outline`,onClick:()=>n(`onlyWhenVisible`),children:[(0,y.jsx)(i,{}),`New session (visible-only)`]})]}),(0,y.jsx)(`div`,{className:`mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,y.jsx)(g,{panels:D.panels,initialPanels:O,onReady:({api:t})=>{e.current=t},onPanelClose:e=>console.info(`[lifecycle] closed panel: ${e}`)})}),(0,y.jsx)(`p`,{className:`mt-3 text-[11px] text-muted-foreground`,children:`Switch between the two starter tabs — the visible-only one toasts on every focus (it re-mounts), while the always one keeps its heartbeat counter. Click × on any tab to see the close toast with the uptime.`})]})}var j=`import { useEffect, useRef, useState } from "react"
import { Pause, Play, Plus, Zap } from "lucide-react"
import { toast } from "@kitora/feedback"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { Tabster, defineTabsterPanels, useTabsterPanelClose, useTabsterPanelVisible, type TabsterApi, type TabsterPanelRenderProps } from "@kitora/tabster"

type Tone = "emerald" | "sky" | "violet" | "amber"
type Renderer = "always" | "onlyWhenVisible"

type SessionParams = {
  /** Display label, also named in the toasts. */
  label: string
  /** Tints the badge so two sessions in adjacent tabs are told apart. */
  tone: Tone
}

const TONE_CLASS: Record<Tone, string> = {
  emerald: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
  sky: "bg-sky-500/15 text-sky-800 dark:text-sky-300",
  violet: "bg-violet-500/15 text-violet-800 dark:text-violet-300",
  amber: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
}
const TONES: readonly Tone[] = ["emerald", "sky", "violet", "amber"]
const HEARTBEAT_MS = 1200
const MAX_LINES = 200

const pad = (n: number, width = 2) => String(n).padStart(width, "0")
const stamp = () => {
  const d = new Date()
  return \`\${pad(d.getMinutes())}:\${pad(d.getSeconds())}.\${pad(d.getMilliseconds(), 3)}\`
}

// A fake session: starts on mount, logs a heartbeat while visible, pauses when hidden, and
// tears down on a real close. Params arrive as stored JSON, so every field is optional.
function SessionPanel(props: TabsterPanelRenderProps<Partial<SessionParams>>) {
  const label = props.params?.label ?? "session"
  const tone = props.params?.tone ?? "emerald"
  const startedAt = useRef(Date.now())
  const beats = useRef(0)
  const [visible, setVisible] = useState(true)
  const [lines, setLines] = useState(() => [\`[\${stamp()}] session "\${label}" started\`, \`[\${stamp()}] heartbeat 0\`])
  // throwing on demand shows the per-panel error boundary
  const [crash, setCrash] = useState(false)
  if (crash) throw new Error(\`Intentional crash from "\${label}" — error boundary test\`)

  useEffect(() => {
    toast.success(\`Session "\${label}" started\`, { description: \`pid \${Math.random().toString(36).slice(2, 8)}\` })
  }, [label])

  // fires on a real close (×), not on a tab switch
  useTabsterPanelClose(() => {
    toast.info(\`Session "\${label}" closed\`, { description: \`uptime \${((Date.now() - startedAt.current) / 1000).toFixed(1)}s\` })
  })

  // pause the work while the tab is hidden
  useTabsterPanelVisible((next) => {
    setVisible(next)
    setLines((prev) => [...prev, \`[\${stamp()}] \${next ? "▶ resumed" : "⏸ paused"}\`])
  })

  useEffect(() => {
    if (!visible) return
    const handle = window.setInterval(() => {
      beats.current += 1
      setLines((prev) => [...prev, \`[\${stamp()}] heartbeat \${beats.current}\`].slice(-MAX_LINES))
    }, HEARTBEAT_MS)
    return () => window.clearInterval(handle)
  }, [visible])

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Zap className="size-3" />
          <Badge className={cn(TONE_CLASS[tone], "text-[10px]")}>{label}</Badge>
        </span>
        <span className="inline-flex items-center gap-2 font-mono">
          <button type="button" onClick={() => setCrash(true)} className="rounded border border-destructive/30 px-1.5 py-0.5 text-[10px] text-destructive hover:bg-destructive/10" title="Throw to test the per-panel error boundary">
            crash
          </button>
          {visible ? <Play className="size-2.5" /> : <Pause className="size-2.5" />}
          {visible ? "live" : "paused"}
        </span>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-foreground">
        {lines.join("\\n")}
      </pre>
    </div>
  )
}

// typed registry: spec({ component: "sesion" }) fails to compile
const PANELS = defineTabsterPanels({ session: SessionPanel })

const INITIAL = PANELS.specs<SessionParams>([
  // stays mounted across tab switches
  { id: "session.1", component: "session", title: "session-1", renderer: "always", params: { label: "always-1", tone: "emerald" } },
  // the default: unmounted when hidden, remounted on focus
  { id: "session.2", component: "session", title: "session-2", renderer: "onlyWhenVisible", position: { referencePanel: "session.1", direction: "right" }, params: { label: "visible-only-2", tone: "amber" } },
])

const NAMES: Record<Renderer, string> = { always: "always", onlyWhenVisible: "visible-only" }

export function SessionDock() {
  const apiRef = useRef<TabsterApi | null>(null)
  const counter = useRef(3)
  const addSession = (renderer: Renderer) => {
    const n = counter.current++
    const label = \`\${NAMES[renderer]}-\${n}\`
    apiRef.current?.addPanel(PANELS.spec<SessionParams>({ id: \`session.\${n}\`, component: "session", title: label, renderer, params: { label, tone: TONES[n % TONES.length] } }))
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => addSession("always")}>
          <Plus />
          New session (always)
        </Button>
        <Button size="sm" variant="outline" onClick={() => addSession("onlyWhenVisible")}>
          <Plus />
          New session (visible-only)
        </Button>
      </div>

      <div className="mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background">
        <Tabster
          panels={PANELS.panels}
          initialPanels={INITIAL}
          onReady={({ api }) => {
            apiRef.current = api
          }}
          // app-level breadcrumb next to each panel's own useTabsterPanelClose: telemetry, not teardown
          onPanelClose={(id) => console.info(\`[lifecycle] closed panel: \${id}\`)}
        />
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">Switch between the two starter tabs — the visible-only one toasts on every focus (it re-mounts), while the always one keeps its heartbeat counter. Click × on any tab to see the close toast with the uptime.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>o(()=>import(`./lifecycle-B1hq1_XY.js`),[]));function M(){return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(t,{title:`Lifecycle`,children:[`Two sample sessions mounted: one with `,(0,y.jsx)(`code`,{className:`font-mono`,children:`renderer:'always'`}),` (stays mounted across tab switches), one with `,(0,y.jsx)(`code`,{className:`font-mono`,children:`renderer:'onlyWhenVisible'`}),` (the default — torn down and remounted on every switch). Each panel toasts on mount and close, pauses its heartbeat when hidden, and shows uptime in the close toast.`]}),(0,y.jsx)(p,{n:1,title:`Panel-owned sessions`,blurb:`Switch tabs to see the visible-only session remount while the always one keeps running; × shows the close toast; crash trips the per-panel error boundary.`,code:j,children:(0,y.jsx)(A,{})})]})}export{M as component};