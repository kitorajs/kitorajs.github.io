import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calculator-BBzVQgtk.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./file-text-DN2dXqcR.js";import{t as i}from"./globe-Bm0Nyt-y.js";import{t as a}from"./table-2-C8AXqbxu.js";import{Ec as o,Uc as s,zc as c}from"./index-BZuUy872.js";import{o as l}from"./manager-BBdagqVo.js";import{s as u,t as d}from"./hooks-BsnxIcZj.js";import{n as f,t as p}from"./desktop-Cf2asQJd.js";import{E as m,_ as ee,f as te,p as h,s as g,t as _,v,y}from"./windows-styles-MyHmEdOT.js";import{t as b}from"./taskbar-B_QjsVDG.js";import{t as ne}from"./dock-D6mzmyNp.js";import{t as x}from"./motion-PrKxq7r-.js";import"./kit-gallery-BBavj2rC.js";import{t as S}from"./example-B67lLz1F.js";var C=e(s(),1),w=c(),T={snap:{magnet:8}},E=3e4,D=`bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]`;function O({icon:e,from:t,to:n}){return(0,w.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,w.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var k=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function A(){let[e,t]=(0,C.useState)(k),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,w.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,w.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var j=[{name:`Ada Lovelace`,team:`Research`,status:`Active`,tasks:12},{name:`Grace Hopper`,team:`Compilers`,status:`Active`,tasks:9},{name:`Alan Turing`,team:`Research`,status:`Away`,tasks:4},{name:`Katherine Johnson`,team:`Flight`,status:`Active`,tasks:15},{name:`Linus Torvalds`,team:`Kernel`,status:`Busy`,tasks:21},{name:`Margaret Hamilton`,team:`Flight`,status:`Active`,tasks:7},{name:`Dennis Ritchie`,team:`Compilers`,status:`Away`,tasks:3},{name:`Barbara Liskov`,team:`Languages`,status:`Active`,tasks:11},{name:`Ken Thompson`,team:`Kernel`,status:`Busy`,tasks:8},{name:`Frances Allen`,team:`Compilers`,status:`Active`,tasks:6},{name:`John Backus`,team:`Languages`,status:`Away`,tasks:2},{name:`Radia Perlman`,team:`Networks`,status:`Active`,tasks:13}],M=[`name`,`team`,`status`,`tasks`],N={Active:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`,Away:`bg-zinc-500/15 text-zinc-600 dark:text-zinc-300`,Busy:`bg-amber-500/15 text-amber-800 dark:text-amber-300`};function P(){let[e,t]=(0,C.useState)({by:`name`,asc:!0}),n=(0,C.useMemo)(()=>j.toSorted((t,n)=>(t[e.by]<n[e.by]?-1:+(t[e.by]>n[e.by]))*(e.asc?1:-1)),[e]);return(0,w.jsx)(`div`,{className:`h-full overflow-auto bg-background text-[12px]`,children:(0,w.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,w.jsx)(`thead`,{className:`sticky top-0 bg-muted/90 backdrop-blur`,children:(0,w.jsx)(`tr`,{children:M.map(n=>(0,w.jsx)(`th`,{scope:`col`,"aria-sort":e.by===n?e.asc?`ascending`:`descending`:`none`,className:`border-b px-2 py-1 text-start font-medium capitalize`,children:(0,w.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:()=>t(e=>({by:n,asc:e.by===n?!e.asc:!0})),children:[n,(0,w.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:e.by===n?e.asc?`▲`:`▼`:``})]})},n))})}),(0,w.jsx)(`tbody`,{children:n.map(e=>(0,w.jsxs)(`tr`,{className:`border-b border-border/60 hover:bg-muted/50`,children:[(0,w.jsx)(`td`,{className:`px-2 py-1 font-medium`,children:e.name}),(0,w.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:e.team}),(0,w.jsx)(`td`,{className:`px-2 py-1`,children:(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5 text-[11px] ${N[e.status]}`,children:e.status})}),(0,w.jsx)(`td`,{className:`px-2 py-1 text-end tabular-nums`,children:e.tasks})]},e.name))})]})})}var F=[{id:`notes`,label:`Notes`,icon:(0,w.jsx)(O,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,w.jsx)(A,{})},{id:`data`,label:`People`,icon:(0,w.jsx)(O,{icon:a,from:`#34d399`,to:`#059669`}),rect:{left:420,top:90,width:440,height:300},content:()=>(0,w.jsx)(P,{})}],I=[`notes`,`data`];function L(){return F.filter(e=>I.includes(e.id)).map(e=>(0,w.jsx)(f,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function R({twoLines:e}){let[t,n]=(0,C.useState)(null);if((0,C.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),E);return()=>clearInterval(e)},[]),!t)return(0,w.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,w.jsxs)(`span`,{className:`grid`,children:[(0,w.jsx)(`span`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):(0,w.jsxs)(`span`,{children:[i,` `,r]})}function z(){return(0,w.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[22px]`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{fill:`#0078d4`,d:`M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z`})})}function B({className:e,...t}){let{surface:n}=u();return(0,w.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function V(){return(0,w.jsxs)(v,{options:T,chrome:te,children:[(0,w.jsx)(_,{}),(0,w.jsx)(x,{}),(0,w.jsxs)(B,{className:`flex h-[480px] flex-col overflow-hidden rounded-lg border shadow-sm ${D}`,children:[(0,w.jsx)(p,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`Windows 11 desktop`,role:`region`,children:(0,w.jsx)(L,{})}),(0,w.jsx)(b,{labels:!1,start:(0,w.jsx)(`span`,{className:`flex size-10 items-center justify-center rounded-md`,"aria-hidden":`true`,children:(0,w.jsx)(z,{})}),tray:(0,w.jsx)(R,{twoLines:!0})})]})]})}var H=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { FileText, Table2, type LucideIcon } from "lucide-react"
import { Desktop, DESKTOP_SURFACE, Taskbar, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, windowsChrome, type Rect } from "@kitora/windows"

// Drag to snap (W29–W44): a title bar to the left or right edge for a half, into a corner for a quarter, to
// the top to maximise; the frosted preview ([data-window-snap-preview], restyle with --wk-snap) shows where
// it lands. Hold Shift while dragging to drop without snapping. Drag a snapped window away and it gets its
// old size back. Zones are data: pass options={{ snap: { zones } }} for your own.

/** Windows within 8 px of an edge or another window snap to it while dragging. */
const MANAGER_OPTIONS = { snap: { magnet: 8 } }
/** How often the clock re-reads the time: twice a minute keeps it at most 30 s behind. */
const CLOCK_TICK_MS = 30_000
const WALLPAPER =
  "bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]"

/** A rounded app tile filling its box: a gradient and a white glyph, like a launcher icon. */
function AppIcon({ icon: Icon, from, to }: { icon: LucideIcon; from: string; to: string }) {
  return (
    <span className="grid size-full place-items-center rounded-[24%] shadow-sm" style={{ backgroundImage: \`linear-gradient(180deg, \${from}, \${to})\` }}>
      <Icon className="size-[62%] text-white" strokeWidth={2} aria-hidden="true" />
    </span>
  )
}

// ── the apps ─────────────────────────────────────────────────────────────────

const NOTES_TEXT = \`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.\`

function NotesApp() {
  const [text, setText] = useState(NOTES_TEXT)
  const words = text.trim() ? text.trim().split(/\\s+/).length : 0
  return (
    <div className="flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]">
      <textarea aria-label="Note" value={text} onChange={(e) => setText(e.target.value)} className="min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none" />
      <div className="flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60">{words} words</div>
    </div>
  )
}

const ROWS = [
  { name: "Ada Lovelace", team: "Research", status: "Active", tasks: 12 },
  { name: "Grace Hopper", team: "Compilers", status: "Active", tasks: 9 },
  { name: "Alan Turing", team: "Research", status: "Away", tasks: 4 },
  { name: "Katherine Johnson", team: "Flight", status: "Active", tasks: 15 },
  { name: "Linus Torvalds", team: "Kernel", status: "Busy", tasks: 21 },
  { name: "Margaret Hamilton", team: "Flight", status: "Active", tasks: 7 },
  { name: "Dennis Ritchie", team: "Compilers", status: "Away", tasks: 3 },
  { name: "Barbara Liskov", team: "Languages", status: "Active", tasks: 11 },
  { name: "Ken Thompson", team: "Kernel", status: "Busy", tasks: 8 },
  { name: "Frances Allen", team: "Compilers", status: "Active", tasks: 6 },
  { name: "John Backus", team: "Languages", status: "Away", tasks: 2 },
  { name: "Radia Perlman", team: "Networks", status: "Active", tasks: 13 },
] as const
type Row = (typeof ROWS)[number]
const COLUMNS = ["name", "team", "status", "tasks"] as const satisfies readonly (keyof Row)[]
type Column = (typeof COLUMNS)[number]
const STATUS_TONE: { readonly [S in Row["status"]]: string } = {
  Active: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  Away: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-300",
  Busy: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
}

function PeopleApp() {
  const [sort, setSort] = useState<{ readonly by: Column; readonly asc: boolean }>({ by: "name", asc: true })
  const rows = useMemo(() => ROWS.toSorted((a, b) => (a[sort.by] < b[sort.by] ? -1 : a[sort.by] > b[sort.by] ? 1 : 0) * (sort.asc ? 1 : -1)), [sort])
  return (
    <div className="h-full overflow-auto bg-background text-[12px]">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-muted/90 backdrop-blur">
          <tr>
            {COLUMNS.map((c) => (
              <th key={c} scope="col" aria-sort={sort.by === c ? (sort.asc ? "ascending" : "descending") : "none"} className="border-b px-2 py-1 text-start font-medium capitalize">
                <button type="button" className="inline-flex items-center gap-1 hover:text-foreground" onClick={() => setSort((s) => ({ by: c, asc: s.by === c ? !s.asc : true }))}>
                  {c}
                  <span className="text-[10px] text-muted-foreground">{sort.by === c ? (sort.asc ? "▲" : "▼") : ""}</span>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-border/60 hover:bg-muted/50">
              <td className="px-2 py-1 font-medium">{r.name}</td>
              <td className="px-2 py-1 text-muted-foreground">{r.team}</td>
              <td className="px-2 py-1">
                <span className={\`rounded px-1.5 py-0.5 text-[11px] \${STATUS_TONE[r.status]}\`}>{r.status}</span>
              </td>
              <td className="px-2 py-1 text-end tabular-nums">{r.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** One app: its window spec and its dock / desktop icon. */
interface App {
  readonly id: string
  readonly label: string
  readonly icon: ReactNode
  readonly rect: Partial<Rect>
  readonly minSize?: { readonly width: number; readonly height: number }
  readonly content: () => ReactNode
}

const APPS: readonly App[] = [
  { id: "notes", label: "Notes", icon: <AppIcon icon={FileText} from="#fcd34d" to="#f59e0b" />, rect: { left: 120, top: 36, width: 330, height: 280 }, content: () => <NotesApp /> },
  { id: "data", label: "People", icon: <AppIcon icon={Table2} from="#34d399" to="#059669" />, rect: { left: 420, top: 90, width: 440, height: 300 }, content: () => <PeopleApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "data"]

// ── the desktop ──────────────────────────────────────────────────────────────

/** The starting apps as declarative windows: mounted = open, so nothing needs an effect to open them. */
function StartingApps() {
  return APPS.filter((a) => STARTING_APPS.includes(a.id)).map((app) => (
    <Window key={app.id} windowKey={app.id} app={app.id} title={app.label} icon={app.icon} defaultRect={app.rect} minSize={app.minSize}>
      {app.content()}
    </Window>
  ))
}

function Clock({ twoLines }: { twoLines: boolean }) {
  const [now, setNow] = useState<Date | null>(null)
  // demo-chrome: the tray clock ticks on its own; it drives no window.
  useEffect(() => {
    setNow(new Date())
    // demo-chrome: the tray clock's minute tick.
    const t = setInterval(() => setNow(new Date()), CLOCK_TICK_MS)
    return () => clearInterval(t)
  }, [])
  if (!now) return <span className="w-14" />
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const date = now.toLocaleDateString([], twoLines ? { day: "2-digit", month: "2-digit", year: "numeric" } : { weekday: "short", day: "numeric", month: "short" })
  return twoLines ? (
    <span className="grid">
      <span>{time}</span>
      <span>{date}</span>
    </span>
  ) : (
    <span>
      {date} {time}
    </span>
  )
}

function WindowsLogo() {
  return (
    <svg viewBox="0 0 16 16" className="size-[22px]" aria-hidden="true">
      <path fill="#0078d4" d="M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z" />
    </svg>
  )
}

/**
 * The screen's outer box. While windows float on the desktop it is its own stacking context, so the
 * desktop's band z-index stays inside it and never paints over the page's sticky header; as a mobile
 * surface (W107) it is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  const { surface } = useWindowsContext()
  return <div {...rest} className={[surface === DESKTOP_SURFACE ? "isolate" : null, className].filter(Boolean).join(" ")} />
}

export function SnapDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={windowsChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their taskbar button */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[480px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="Windows 11 desktop" role="region">
          <StartingApps />
        </Desktop>
        {/* a button per window: click to focus, click the active one to minimise, click a minimised one to restore */}
        <Taskbar
          labels={false}
          start={
            <span className="flex size-10 items-center justify-center rounded-md" aria-hidden="true">
              <WindowsLogo />
            </span>
          }
          tray={<Clock twoLines />}
        />
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>o(()=>import(`./snap-drag-Bux63QfM.js`),[]));var re={snap:{magnet:8}},U={top:0,right:0,bottom:84,left:0},W=3e4,G=`bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]`;function K({icon:e,from:t,to:n}){return(0,w.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,w.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var q=`<!doctype html><html><head><style>
body{margin:0;font:13px system-ui;color:#1f2328;background:#fff}
header{padding:28px 24px;background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff}
h1{margin:0 0 6px;font-size:22px}main{padding:16px 24px;line-height:1.55}
.card{border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;margin:10px 0}
@media (prefers-color-scheme: dark){body{background:#17171a;color:#e6e6e6}.card{border-color:#2e2e33}}
</style></head><body><header><h1>Kitora</h1>Windows, docks and overlays for the web.</header>
<main><div class="card"><b>An iframe inside a window.</b> Click in here: the window activates. Drag the window across other iframes: the gesture never stalls.</div>
<div class="card">Snap me to the right half, then drag another window to the left.</div></main></body></html>`;function J(){return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,w.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-b px-2`,children:[(0,w.jsxs)(`span`,{className:`flex gap-1`,"aria-hidden":`true`,children:[(0,w.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`}),(0,w.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`})]}),(0,w.jsx)(`div`,{className:`flex h-6 flex-1 items-center rounded-full bg-muted px-3 text-[11px] text-muted-foreground`,children:`kitora.localhost/welcome`})]}),(0,w.jsx)(`iframe`,{title:`Welcome page`,srcDoc:q,sandbox:``,className:`min-h-0 w-full flex-1 border-0`})]})}var Y=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],X={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function ie(){let[e,t]=(0,C.useState)(`0`),[n,r]=(0,C.useState)(null),[i,a]=(0,C.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||X[o]){let e=n?X[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,w.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,w.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:Y.map(e=>(0,w.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${X[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var Z=[{id:`browser`,label:`Browser`,icon:(0,w.jsx)(K,{icon:i,from:`#60a5fa`,to:`#2563eb`}),rect:{left:230,top:160,width:460,height:320},content:()=>(0,w.jsx)(J,{})},{id:`calc`,label:`Calculator`,icon:(0,w.jsx)(K,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,w.jsx)(ie,{})}],ae=[`browser`,`calc`];function oe(e,t){e.open({key:t.id,app:t.id,title:t.label,icon:t.icon,rect:t.rect,minSize:t.minSize,content:t.content()})}function se(){return Z.filter(e=>ae.includes(e.id)).map(e=>(0,w.jsx)(f,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function ce({twoLines:e}){let[t,n]=(0,C.useState)(null);if((0,C.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),W);return()=>clearInterval(e)},[]),!t)return(0,w.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,w.jsxs)(`span`,{className:`grid`,children:[(0,w.jsx)(`span`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):(0,w.jsxs)(`span`,{children:[i,` `,r]})}function le(){let e=d().windows.find(e=>e.focused);return(0,w.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-4 bg-white/45 px-4 text-[13px] text-black/85 backdrop-blur-xl dark:bg-black/35 dark:text-white/90`,children:[(0,w.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[14px]`,"aria-hidden":`true`,fill:`currentColor`,children:(0,w.jsx)(`path`,{d:`M8 1l6.5 7L8 15 1.5 8z`})}),(0,w.jsx)(`span`,{className:`font-semibold`,children:e?.title??`Finder`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`File`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`Edit`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`View`}),(0,w.jsx)(ee,{className:`rounded px-1.5 py-0.5 hover:bg-black/10 aria-expanded:bg-black/10 dark:hover:bg-white/15`}),(0,w.jsx)(`span`,{className:`ms-auto tabular-nums`,children:(0,w.jsx)(ce,{twoLines:!1})})]})}function ue(){let e=y();return(0,w.jsx)(ne,{apps:(0,C.useMemo)(()=>Z.map(t=>({id:t.id,label:t.label,icon:t.icon,launch:()=>oe(e,t)})),[e])})}function Q(){let e=d(),t=y(),[n,r]=(0,C.useState)(null),i=e.windows.find(e=>e.focused);return(0,w.jsxs)(`div`,{className:`dkw-pop absolute end-3 top-3 flex flex-col gap-1 p-1`,style:{zIndex:0},children:[(0,w.jsx)(h,{layouts:l,label:`Snap the active window`,zoneLabel:m.snapZone,onPick:e=>{i&&(t.manager.snap(i.id,e),r(e))}}),(0,w.jsx)(`span`,{className:`px-2 pb-1 text-[11px] opacity-70`,children:i?`${i.title}${n?` → ${n}`:``}`:`no active window`})]})}function de({className:e,...t}){let{surface:n}=u();return(0,w.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function fe(){return(0,w.jsxs)(v,{options:re,chrome:g,children:[(0,w.jsx)(_,{}),(0,w.jsx)(x,{}),(0,w.jsxs)(de,{className:`flex h-[480px] flex-col overflow-hidden rounded-lg border shadow-sm ${G}`,children:[(0,w.jsx)(le,{}),(0,w.jsxs)(p,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`macOS desktop`,role:`region`,insets:U,children:[(0,w.jsx)(se,{}),(0,w.jsx)(Q,{}),(0,w.jsx)(ue,{})]})]})]})}var $=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, Globe, type LucideIcon } from "lucide-react"
import { DEFAULT_SNAP_LAYOUTS, DEFAULT_WINDOW_MESSAGES, Desktop, DesktopDock, DESKTOP_SURFACE, macChrome, SnapLayoutsPanel, useDesktopSnapshot, useWindows, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type DockApp, type Rect } from "@kitora/windows"

// The snap layouts panel (W36, W37) on its own: the panel the maximise flyout shows, here floating on the
// desktop. Each small rectangle is a zone; click one to send the active window there.

/** Windows within 8 px of an edge or another window snap to it while dragging. */
const MANAGER_OPTIONS = { snap: { magnet: 8 } }
/** The dock floats over the desktop's bottom: reserve its height (plus margin) so maximise and snap stop above it (W48). */
const DOCK_INSETS = { top: 0, right: 0, bottom: 84, left: 0 }
/** How often the clock re-reads the time: twice a minute keeps it at most 30 s behind. */
const CLOCK_TICK_MS = 30_000
const WALLPAPER =
  "bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]"

/** A rounded app tile filling its box: a gradient and a white glyph, like a launcher icon. */
function AppIcon({ icon: Icon, from, to }: { icon: LucideIcon; from: string; to: string }) {
  return (
    <span className="grid size-full place-items-center rounded-[24%] shadow-sm" style={{ backgroundImage: \`linear-gradient(180deg, \${from}, \${to})\` }}>
      <Icon className="size-[62%] text-white" strokeWidth={2} aria-hidden="true" />
    </span>
  )
}

// ── the apps ─────────────────────────────────────────────────────────────────

const BROWSER_DOC = \`<!doctype html><html><head><style>
body{margin:0;font:13px system-ui;color:#1f2328;background:#fff}
header{padding:28px 24px;background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff}
h1{margin:0 0 6px;font-size:22px}main{padding:16px 24px;line-height:1.55}
.card{border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;margin:10px 0}
@media (prefers-color-scheme: dark){body{background:#17171a;color:#e6e6e6}.card{border-color:#2e2e33}}
</style></head><body><header><h1>Kitora</h1>Windows, docks and overlays for the web.</header>
<main><div class="card"><b>An iframe inside a window.</b> Click in here: the window activates. Drag the window across other iframes: the gesture never stalls.</div>
<div class="card">Snap me to the right half, then drag another window to the left.</div></main></body></html>\`

function BrowserApp() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-8 shrink-0 items-center gap-2 border-b px-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
        </span>
        <div className="flex h-6 flex-1 items-center rounded-full bg-muted px-3 text-[11px] text-muted-foreground">kitora.localhost/welcome</div>
      </div>
      <iframe title="Welcome page" srcDoc={BROWSER_DOC} sandbox="" className="min-h-0 w-full flex-1 border-0" />
    </div>
  )
}

const KEYS = ["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "="] as const
type Key = (typeof KEYS)[number]
const OPS: { readonly [K in Key]?: (a: number, b: number) => number } = { "÷": (a, b) => a / b, "×": (a, b) => a * b, "−": (a, b) => a - b, "+": (a, b) => a + b }

function CalculatorApp() {
  const [display, setDisplay] = useState("0")
  const [acc, setAcc] = useState<{ readonly value: number; readonly op: Key } | null>(null)
  const [fresh, setFresh] = useState(true)
  const press = (k: Key) => {
    const current = Number(display)
    if (k === "C") return (setDisplay("0"), setAcc(null), setFresh(true))
    if (k === "±") return setDisplay(String(-current))
    if (k === "%") return setDisplay(String(current / 100))
    if (k === "=" || OPS[k]) {
      const run = acc ? OPS[acc.op] : undefined
      const value = run && acc ? run(acc.value, current) : current
      setDisplay(String(Number(value.toPrecision(12))))
      setAcc(k === "=" ? null : { value, op: k })
      setFresh(true)
      return
    }
    setDisplay((d) => (fresh ? (k === "." ? "0." : k) : k === "." && d.includes(".") ? d : d + k))
    setFresh(false)
  }
  return (
    <div className="flex h-full flex-col bg-zinc-900 p-2 text-white">
      <output aria-live="polite" className="flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums">
        {display}
      </output>
      <div className="grid flex-1 grid-cols-4 gap-1.5">
        {KEYS.map((k) => (
          <button
            key={k}
            type="button"
            aria-label={k === "−" ? "minus" : k}
            onClick={() => press(k)}
            className={\`rounded-full text-[15px] font-medium active:brightness-125 \${k === "0" ? "col-span-2" : ""} \${OPS[k] || k === "=" ? "bg-orange-500" : ["C", "±", "%"].includes(k) ? "bg-zinc-400 text-zinc-900" : "bg-zinc-700"}\`}
          >
            {k}
          </button>
        ))}
      </div>
    </div>
  )
}

/** One app: its window spec and its dock / desktop icon. */
interface App {
  readonly id: string
  readonly label: string
  readonly icon: ReactNode
  readonly rect: Partial<Rect>
  readonly minSize?: { readonly width: number; readonly height: number }
  readonly content: () => ReactNode
}

const APPS: readonly App[] = [
  { id: "browser", label: "Browser", icon: <AppIcon icon={Globe} from="#60a5fa" to="#2563eb" />, rect: { left: 230, top: 160, width: 460, height: 320 }, content: () => <BrowserApp /> },
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["browser", "calc"]

// ── the desktop ──────────────────────────────────────────────────────────────

/** Opens (or focuses) an app's single window: the key makes a second launch focus the open one. */
function launch(api: ReturnType<typeof useWindows>, app: App): void {
  api.open({ key: app.id, app: app.id, title: app.label, icon: app.icon, rect: app.rect, minSize: app.minSize, content: app.content() })
}

/** The starting apps as declarative windows: mounted = open, so nothing needs an effect to open them. */
function StartingApps() {
  return APPS.filter((a) => STARTING_APPS.includes(a.id)).map((app) => (
    <Window key={app.id} windowKey={app.id} app={app.id} title={app.label} icon={app.icon} defaultRect={app.rect} minSize={app.minSize}>
      {app.content()}
    </Window>
  ))
}

function Clock({ twoLines }: { twoLines: boolean }) {
  const [now, setNow] = useState<Date | null>(null)
  // demo-chrome: the tray clock ticks on its own; it drives no window.
  useEffect(() => {
    setNow(new Date())
    // demo-chrome: the tray clock's minute tick.
    const t = setInterval(() => setNow(new Date()), CLOCK_TICK_MS)
    return () => clearInterval(t)
  }, [])
  if (!now) return <span className="w-14" />
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const date = now.toLocaleDateString([], twoLines ? { day: "2-digit", month: "2-digit", year: "numeric" } : { weekday: "short", day: "numeric", month: "short" })
  return twoLines ? (
    <span className="grid">
      <span>{time}</span>
      <span>{date}</span>
    </span>
  ) : (
    <span>
      {date} {time}
    </span>
  )
}

/** The macOS menu bar: the focused app's name in bold, a Window menu (W72), the clock. */
function MacMenuBar() {
  const snapshot = useDesktopSnapshot()
  const focused = snapshot.windows.find((w) => w.focused)
  return (
    <div className="flex h-7 shrink-0 items-center gap-4 bg-white/45 px-4 text-[13px] text-black/85 backdrop-blur-xl dark:bg-black/35 dark:text-white/90">
      <svg viewBox="0 0 16 16" className="size-[14px]" aria-hidden="true" fill="currentColor">
        <path d="M8 1l6.5 7L8 15 1.5 8z" />
      </svg>
      <span className="font-semibold">{focused?.title ?? "Finder"}</span>
      <span className="hidden sm:inline">File</span>
      <span className="hidden sm:inline">Edit</span>
      <span className="hidden sm:inline">View</span>
      <WindowListMenu className="rounded px-1.5 py-0.5 hover:bg-black/10 aria-expanded:bg-black/10 dark:hover:bg-white/15" />
      <span className="ms-auto tabular-nums">
        <Clock twoLines={false} />
      </span>
    </div>
  )
}

/** The dock with every app; built inside the provider so each icon launches through its API. */
function Dock() {
  const api = useWindows()
  const apps = useMemo<readonly DockApp[]>(() => APPS.map((app) => ({ id: app.id, label: app.label, icon: app.icon, launch: () => launch(api, app) })), [api])
  return <DesktopDock apps={apps} />
}

/** Snaps the active window from a standalone panel: the same component the maximise flyout renders. */
function SnapPanel() {
  const snapshot = useDesktopSnapshot()
  const api = useWindows()
  const [last, setLast] = useState<string | null>(null)
  const active = snapshot.windows.find((w) => w.focused)
  return (
    <div className="dkw-pop absolute end-3 top-3 flex flex-col gap-1 p-1" style={{ zIndex: 0 }}>
      <SnapLayoutsPanel
        layouts={DEFAULT_SNAP_LAYOUTS} // halves, two-thirds, thirds, half + quarters, quarters
        label="Snap the active window"
        zoneLabel={DEFAULT_WINDOW_MESSAGES.snapZone}
        onPick={(zone) => {
          if (!active) return
          api.manager.snap(active.id, zone)
          setLast(zone)
        }}
      />
      <span className="px-2 pb-1 text-[11px] opacity-70">{active ? \`\${active.title}\${last ? \` → \${last}\` : ""}\` : "no active window"}</span>
    </div>
  )
}

/**
 * The screen's outer box. While windows float on the desktop it is its own stacking context, so the
 * desktop's band z-index stays inside it and never paints over the page's sticky header; as a mobile
 * surface (W107) it is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  const { surface } = useWindowsContext()
  return <div {...rest} className={[surface === DESKTOP_SURFACE ? "isolate" : null, className].filter(Boolean).join(" ")} />
}

export function SnapPanelDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={macChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their dock icon */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[480px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <MacMenuBar />
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="macOS desktop" role="region" insets={DOCK_INSETS}>
          <StartingApps />
          <SnapPanel />
          <Dock />
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>o(()=>import(`./snap-panel-BbtYjKZb.js`),[]));function pe(){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(n,{title:`Snap`,children:`Drag a window to the left or right edge for a half, into a corner for a quarter, to the top edge to maximise; the frosted preview shows where it lands before you let go. Hover a maximise button for the snap layouts, or pick a zone from the panel.`}),(0,w.jsx)(S,{n:1,title:`Drag to snap`,blurb:`Halves, quarters and maximise. Drag a snapped window away and it gets its old size back.`,code:H,children:(0,w.jsx)(`div`,{"data-testid":`snap-drag`,children:(0,w.jsx)(V,{})})}),(0,w.jsx)(S,{n:2,title:`Snap layouts`,blurb:`The panel the maximise flyout shows, here on the desktop: each small rectangle is a zone; click one to send the active window there.`,code:$,children:(0,w.jsx)(`div`,{"data-testid":`snap-panel`,children:(0,w.jsx)(fe,{})})})]})}export{pe as component};