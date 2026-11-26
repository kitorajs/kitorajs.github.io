import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calculator-DCbfEPw2.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./file-text-B8CPDozU.js";import{t as i}from"./globe-X8eHtpbL.js";import{t as a}from"./mail-qXJt5uVa.js";import{t as o}from"./table-2-Ii29QUcX.js";import{Bc as s,Cc as c,Ic as l}from"./index-B9ukmIN1.js";import{s as u,t as d}from"./hooks-CYtIGFjN.js";import{n as f,t as p}from"./desktop-y5pVQXm-.js";import{_ as m,f as h,l as g,s as _,t as v,v as y,y as b}from"./windows-styles-qDdNe6P6.js";import{t as x}from"./taskbar-BmlnrGei.js";import{t as ee}from"./dock-BJgQOkPs.js";import{t as S}from"./motion-D2NZJIHG.js";import"./kit-gallery-Bph7isB2.js";import{t as C}from"./example-BGnSQG2Y.js";var w=e(s(),1),T=l(),E={snap:{magnet:8}},te={top:0,right:0,bottom:84,left:0},ne=3e4,re=`bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]`;function D({icon:e,from:t,to:n}){return(0,T.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,T.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var ie=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function ae(){let[e,t]=(0,w.useState)(ie),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,T.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,T.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,T.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var oe=`<!doctype html><html><head><style>
body{margin:0;font:13px system-ui;color:#1f2328;background:#fff}
header{padding:28px 24px;background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff}
h1{margin:0 0 6px;font-size:22px}main{padding:16px 24px;line-height:1.55}
.card{border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;margin:10px 0}
@media (prefers-color-scheme: dark){body{background:#17171a;color:#e6e6e6}.card{border-color:#2e2e33}}
</style></head><body><header><h1>Kitora</h1>Windows, docks and overlays for the web.</header>
<main><div class="card"><b>An iframe inside a window.</b> Click in here: the window activates. Drag the window across other iframes: the gesture never stalls.</div>
<div class="card">Snap me to the right half, then drag another window to the left.</div></main></body></html>`;function se(){return(0,T.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,T.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-b px-2`,children:[(0,T.jsxs)(`span`,{className:`flex gap-1`,"aria-hidden":`true`,children:[(0,T.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`}),(0,T.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`})]}),(0,T.jsx)(`div`,{className:`flex h-6 flex-1 items-center rounded-full bg-muted px-3 text-[11px] text-muted-foreground`,children:`kitora.localhost/welcome`})]}),(0,T.jsx)(`iframe`,{title:`Welcome page`,srcDoc:oe,sandbox:``,className:`min-h-0 w-full flex-1 border-0`})]})}var O=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],k={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function A(){let[e,t]=(0,w.useState)(`0`),[n,r]=(0,w.useState)(null),[i,a]=(0,w.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||k[o]){let e=n?k[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,T.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,T.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,T.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:O.map(e=>(0,T.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${k[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var j=[{id:`notes`,label:`Notes`,icon:(0,T.jsx)(D,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,T.jsx)(ae,{})},{id:`browser`,label:`Browser`,icon:(0,T.jsx)(D,{icon:i,from:`#60a5fa`,to:`#2563eb`}),rect:{left:230,top:160,width:460,height:320},content:()=>(0,T.jsx)(se,{})},{id:`calc`,label:`Calculator`,icon:(0,T.jsx)(D,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,T.jsx)(A,{})}],M=[`notes`,`browser`];function N(e,t){e.open({key:t.id,app:t.id,title:t.label,icon:t.icon,rect:t.rect,minSize:t.minSize,content:t.content()})}function P(){return j.filter(e=>M.includes(e.id)).map(e=>(0,T.jsx)(f,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function F({twoLines:e}){let[t,n]=(0,w.useState)(null);if((0,w.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),ne);return()=>clearInterval(e)},[]),!t)return(0,T.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,T.jsxs)(`span`,{className:`grid`,children:[(0,T.jsx)(`span`,{children:r}),(0,T.jsx)(`span`,{children:i})]}):(0,T.jsxs)(`span`,{children:[i,` `,r]})}function I(){let e=d().windows.find(e=>e.focused);return(0,T.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-4 bg-white/45 px-4 text-[13px] text-black/85 backdrop-blur-xl dark:bg-black/35 dark:text-white/90`,children:[(0,T.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[14px]`,"aria-hidden":`true`,fill:`currentColor`,children:(0,T.jsx)(`path`,{d:`M8 1l6.5 7L8 15 1.5 8z`})}),(0,T.jsx)(`span`,{className:`font-semibold`,children:e?.title??`Finder`}),(0,T.jsx)(`span`,{className:`hidden sm:inline`,children:`File`}),(0,T.jsx)(`span`,{className:`hidden sm:inline`,children:`Edit`}),(0,T.jsx)(`span`,{className:`hidden sm:inline`,children:`View`}),(0,T.jsx)(m,{className:`rounded px-1.5 py-0.5 hover:bg-black/10 aria-expanded:bg-black/10 dark:hover:bg-white/15`}),(0,T.jsx)(`span`,{className:`ms-auto tabular-nums`,children:(0,T.jsx)(F,{twoLines:!1})})]})}function L(){let e=b();return(0,T.jsx)(ee,{apps:(0,w.useMemo)(()=>j.map(t=>({id:t.id,label:t.label,icon:t.icon,launch:()=>N(e,t)})),[e])})}var R=`h-6 rounded-md border border-black/10 bg-white/80 px-2 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900`;function z(){let e=b();return(0,T.jsxs)(`div`,{className:`absolute end-3 top-3 flex gap-1.5`,style:{zIndex:0},children:[(0,T.jsx)(`button`,{type:`button`,className:R,onClick:()=>e.cascade(),children:`Cascade`}),(0,T.jsx)(`button`,{type:`button`,className:R,onClick:()=>e.tile(`grid`),children:`Tile`}),(0,T.jsx)(`button`,{type:`button`,className:R,onClick:()=>e.showDesktop(),children:`Show desktop`})]})}function B({className:e,...t}){let{surface:n}=u();return(0,T.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function V(){return(0,T.jsxs)(y,{options:E,chrome:_,children:[(0,T.jsx)(v,{}),(0,T.jsx)(S,{}),(0,T.jsxs)(B,{className:`flex h-[460px] flex-col overflow-hidden rounded-lg border shadow-sm ${re}`,children:[(0,T.jsx)(I,{}),(0,T.jsxs)(p,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`macOS desktop`,role:`region`,insets:te,children:[(0,T.jsx)(P,{}),(0,T.jsx)(z,{}),(0,T.jsx)(L,{})]})]})]})}var H=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, Globe, type LucideIcon } from "lucide-react"
import { Desktop, DesktopDock, DESKTOP_SURFACE, macChrome, useDesktopSnapshot, useWindows, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type DockApp, type Rect } from "@kitora/windows"

// The macOS-style DesktopDock (W66): hover to magnify; a dot marks a running app and clicking it brings
// its window forward, clicking a stopped one (Calculator) launches it; minimised windows sit after the
// separator as thumbnails.

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
  { id: "notes", label: "Notes", icon: <AppIcon icon={FileText} from="#fcd34d" to="#f59e0b" />, rect: { left: 120, top: 36, width: 330, height: 280 }, content: () => <NotesApp /> },
  { id: "browser", label: "Browser", icon: <AppIcon icon={Globe} from="#60a5fa" to="#2563eb" />, rect: { left: 230, top: 160, width: 460, height: 320 }, content: () => <BrowserApp /> },
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "browser"]

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

const ACTION = "h-6 rounded-md border border-black/10 bg-white/80 px-2 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"

/** Desktop commands floating at the desktop's top-right: cascade, tile and show desktop. */
function DesktopActions() {
  const api = useWindows()
  return (
    <div className="absolute end-3 top-3 flex gap-1.5" style={{ zIndex: 0 }}>
      <button type="button" className={ACTION} onClick={() => api.cascade()}>
        Cascade
      </button>
      <button type="button" className={ACTION} onClick={() => api.tile("grid")}>
        Tile
      </button>
      <button type="button" className={ACTION} onClick={() => api.showDesktop()}>
        Show desktop
      </button>
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

export function DockDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={macChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their dock icon */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[460px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <MacMenuBar />
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="macOS desktop" role="region" insets={DOCK_INSETS}>
          <StartingApps />
          <DesktopActions />
          <Dock />
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>c(()=>import(`./taskbar-dock-JTmhCBat.js`),[]));var U={snap:{magnet:8}},W=3e4,G=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function K({icon:e,from:t,to:n}){return(0,T.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,T.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var ce=[{name:`Ada Lovelace`,team:`Research`,status:`Active`,tasks:12},{name:`Grace Hopper`,team:`Compilers`,status:`Active`,tasks:9},{name:`Alan Turing`,team:`Research`,status:`Away`,tasks:4},{name:`Katherine Johnson`,team:`Flight`,status:`Active`,tasks:15},{name:`Linus Torvalds`,team:`Kernel`,status:`Busy`,tasks:21},{name:`Margaret Hamilton`,team:`Flight`,status:`Active`,tasks:7},{name:`Dennis Ritchie`,team:`Compilers`,status:`Away`,tasks:3},{name:`Barbara Liskov`,team:`Languages`,status:`Active`,tasks:11},{name:`Ken Thompson`,team:`Kernel`,status:`Busy`,tasks:8},{name:`Frances Allen`,team:`Compilers`,status:`Active`,tasks:6},{name:`John Backus`,team:`Languages`,status:`Away`,tasks:2},{name:`Radia Perlman`,team:`Networks`,status:`Active`,tasks:13}],le=[`name`,`team`,`status`,`tasks`],ue={Active:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`,Away:`bg-zinc-500/15 text-zinc-600 dark:text-zinc-300`,Busy:`bg-amber-500/15 text-amber-800 dark:text-amber-300`};function de(){let[e,t]=(0,w.useState)({by:`name`,asc:!0}),n=(0,w.useMemo)(()=>ce.toSorted((t,n)=>(t[e.by]<n[e.by]?-1:+(t[e.by]>n[e.by]))*(e.asc?1:-1)),[e]);return(0,T.jsx)(`div`,{className:`h-full overflow-auto bg-background text-[12px]`,children:(0,T.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,T.jsx)(`thead`,{className:`sticky top-0 bg-muted/90 backdrop-blur`,children:(0,T.jsx)(`tr`,{children:le.map(n=>(0,T.jsx)(`th`,{scope:`col`,"aria-sort":e.by===n?e.asc?`ascending`:`descending`:`none`,className:`border-b px-2 py-1 text-start font-medium capitalize`,children:(0,T.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:()=>t(e=>({by:n,asc:e.by===n?!e.asc:!0})),children:[n,(0,T.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:e.by===n?e.asc?`▲`:`▼`:``})]})},n))})}),(0,T.jsx)(`tbody`,{children:n.map(e=>(0,T.jsxs)(`tr`,{className:`border-b border-border/60 hover:bg-muted/50`,children:[(0,T.jsx)(`td`,{className:`px-2 py-1 font-medium`,children:e.name}),(0,T.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:e.team}),(0,T.jsx)(`td`,{className:`px-2 py-1`,children:(0,T.jsx)(`span`,{className:`rounded px-1.5 py-0.5 text-[11px] ${ue[e.status]}`,children:e.status})}),(0,T.jsx)(`td`,{className:`px-2 py-1 text-end tabular-nums`,children:e.tasks})]},e.name))})]})})}var q=`h-7 w-full rounded-md border bg-background px-2 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring`;function fe(){let[e,t]=(0,w.useState)(null);return(0,T.jsxs)(`form`,{className:`flex h-full flex-col gap-2 overflow-auto bg-background p-3 text-[12px]`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget).get(`name`);t(typeof n==`string`?n:``)},children:[(0,T.jsxs)(`label`,{className:`grid gap-1`,children:[(0,T.jsx)(`span`,{className:`font-medium`,children:`Name`}),(0,T.jsx)(`input`,{name:`name`,required:!0,className:q,placeholder:`Ada Lovelace`})]}),(0,T.jsxs)(`label`,{className:`grid gap-1`,children:[(0,T.jsx)(`span`,{className:`font-medium`,children:`Email`}),(0,T.jsx)(`input`,{name:`email`,type:`email`,required:!0,className:q,placeholder:`ada@example.com`})]}),(0,T.jsxs)(`label`,{className:`grid min-h-0 flex-1 gap-1`,children:[(0,T.jsx)(`span`,{className:`font-medium`,children:`Message`}),(0,T.jsx)(`textarea`,{name:`message`,className:`min-h-12 flex-1 resize-none rounded-md border bg-background p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring`,placeholder:`Hello!`})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(`button`,{type:`submit`,className:`h-7 rounded-md bg-primary px-3 font-medium text-primary-foreground hover:opacity-90`,children:`Send`}),(0,T.jsx)(`span`,{role:`status`,className:`text-muted-foreground`,children:e===null?``:`Thanks, ${e||`friend`}: sent.`})]})]})}var pe=[{id:`data`,label:`People`,icon:(0,T.jsx)(K,{icon:o,from:`#34d399`,to:`#059669`}),rect:{left:420,top:90,width:440,height:300},content:()=>(0,T.jsx)(de,{})},{id:`contact`,label:`Contact`,icon:(0,T.jsx)(K,{icon:a,from:`#f472b6`,to:`#db2777`}),rect:{width:300,height:300},content:()=>(0,T.jsx)(fe,{})}],me=[`data`,`contact`];function he(){return pe.filter(e=>me.includes(e.id)).map(e=>(0,T.jsx)(f,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function ge({twoLines:e}){let[t,n]=(0,w.useState)(null);if((0,w.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),W);return()=>clearInterval(e)},[]),!t)return(0,T.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,T.jsxs)(`span`,{className:`grid`,children:[(0,T.jsx)(`span`,{children:r}),(0,T.jsx)(`span`,{children:i})]}):(0,T.jsxs)(`span`,{children:[i,` `,r]})}function _e({className:e,...t}){let{surface:n}=u();return(0,T.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function ve(){return(0,T.jsxs)(y,{options:U,chrome:g,children:[(0,T.jsx)(v,{}),(0,T.jsx)(S,{}),(0,T.jsxs)(_e,{className:`flex h-[400px] flex-col overflow-hidden rounded-lg border shadow-sm ${G}`,children:[(0,T.jsx)(p,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`Neutral desktop`,role:`region`,children:(0,T.jsx)(he,{})}),(0,T.jsx)(x,{labels:!0,start:(0,T.jsx)(m,{className:`h-8 rounded-md px-2 text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/10`}),tray:(0,T.jsx)(ge,{twoLines:!1})})]})]})}var J=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Mail, Table2, type LucideIcon } from "lucide-react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, Taskbar, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type Rect } from "@kitora/windows"

// The Window menu (W72) on the neutral taskbar: every window listed (the active one checked) with the
// arrange commands; the taskbar shows titles next to the icons.

/** Windows within 8 px of an edge or another window snap to it while dragging. */
const MANAGER_OPTIONS = { snap: { magnet: 8 } }
/** How often the clock re-reads the time: twice a minute keeps it at most 30 s behind. */
const CLOCK_TICK_MS = 30_000
const WALLPAPER =
  "bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]"

/** A rounded app tile filling its box: a gradient and a white glyph, like a launcher icon. */
function AppIcon({ icon: Icon, from, to }: { icon: LucideIcon; from: string; to: string }) {
  return (
    <span className="grid size-full place-items-center rounded-[24%] shadow-sm" style={{ backgroundImage: \`linear-gradient(180deg, \${from}, \${to})\` }}>
      <Icon className="size-[62%] text-white" strokeWidth={2} aria-hidden="true" />
    </span>
  )
}

// ── the apps ─────────────────────────────────────────────────────────────────

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

const FIELD = "h-7 w-full rounded-md border bg-background px-2 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring"

function ContactApp() {
  const [sent, setSent] = useState<string | null>(null)
  return (
    <form
      className="flex h-full flex-col gap-2 overflow-auto bg-background p-3 text-[12px]"
      onSubmit={(e) => {
        e.preventDefault()
        const name = new FormData(e.currentTarget).get("name")
        setSent(typeof name === "string" ? name : "")
      }}
    >
      <label className="grid gap-1">
        <span className="font-medium">Name</span>
        <input name="name" required className={FIELD} placeholder="Ada Lovelace" />
      </label>
      <label className="grid gap-1">
        <span className="font-medium">Email</span>
        <input name="email" type="email" required className={FIELD} placeholder="ada@example.com" />
      </label>
      <label className="grid min-h-0 flex-1 gap-1">
        <span className="font-medium">Message</span>
        <textarea name="message" className="min-h-12 flex-1 resize-none rounded-md border bg-background p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Hello!" />
      </label>
      <div className="flex items-center gap-2">
        <button type="submit" className="h-7 rounded-md bg-primary px-3 font-medium text-primary-foreground hover:opacity-90">
          Send
        </button>
        <span role="status" className="text-muted-foreground">
          {sent !== null ? \`Thanks, \${sent || "friend"}: sent.\` : ""}
        </span>
      </div>
    </form>
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
  { id: "data", label: "People", icon: <AppIcon icon={Table2} from="#34d399" to="#059669" />, rect: { left: 420, top: 90, width: 440, height: 300 }, content: () => <PeopleApp /> },
  { id: "contact", label: "Contact", icon: <AppIcon icon={Mail} from="#f472b6" to="#db2777" />, rect: { width: 300, height: 300 }, content: () => <ContactApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["data", "contact"]

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

/**
 * The screen's outer box. While windows float on the desktop it is its own stacking context, so the
 * desktop's band z-index stays inside it and never paints over the page's sticky header; as a mobile
 * surface (W107) it is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  const { surface } = useWindowsContext()
  return <div {...rest} className={[surface === DESKTOP_SURFACE ? "isolate" : null, className].filter(Boolean).join(" ")} />
}

export function WindowMenuDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={neutralChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their taskbar button */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[400px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="Neutral desktop" role="region">
          <StartingApps />
        </Desktop>
        {/* a button per window: click to focus, click the active one to minimise, click a minimised one to restore */}
        <Taskbar
          labels={true}
          start={
            <WindowListMenu className="h-8 rounded-md px-2 text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/10" />
          }
          tray={<Clock twoLines={false} />}
        />
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>c(()=>import(`./taskbar-menu-CEp31JHI.js`),[]));var ye={snap:{magnet:8}},be=3e4,xe=`bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]`;function Y({icon:e,from:t,to:n}){return(0,T.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,T.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var Se=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function Ce(){let[e,t]=(0,w.useState)(Se),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,T.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,T.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,T.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var we=[{name:`Ada Lovelace`,team:`Research`,status:`Active`,tasks:12},{name:`Grace Hopper`,team:`Compilers`,status:`Active`,tasks:9},{name:`Alan Turing`,team:`Research`,status:`Away`,tasks:4},{name:`Katherine Johnson`,team:`Flight`,status:`Active`,tasks:15},{name:`Linus Torvalds`,team:`Kernel`,status:`Busy`,tasks:21},{name:`Margaret Hamilton`,team:`Flight`,status:`Active`,tasks:7},{name:`Dennis Ritchie`,team:`Compilers`,status:`Away`,tasks:3},{name:`Barbara Liskov`,team:`Languages`,status:`Active`,tasks:11},{name:`Ken Thompson`,team:`Kernel`,status:`Busy`,tasks:8},{name:`Frances Allen`,team:`Compilers`,status:`Active`,tasks:6},{name:`John Backus`,team:`Languages`,status:`Away`,tasks:2},{name:`Radia Perlman`,team:`Networks`,status:`Active`,tasks:13}],Te=[`name`,`team`,`status`,`tasks`],Ee={Active:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`,Away:`bg-zinc-500/15 text-zinc-600 dark:text-zinc-300`,Busy:`bg-amber-500/15 text-amber-800 dark:text-amber-300`};function De(){let[e,t]=(0,w.useState)({by:`name`,asc:!0}),n=(0,w.useMemo)(()=>we.toSorted((t,n)=>(t[e.by]<n[e.by]?-1:+(t[e.by]>n[e.by]))*(e.asc?1:-1)),[e]);return(0,T.jsx)(`div`,{className:`h-full overflow-auto bg-background text-[12px]`,children:(0,T.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,T.jsx)(`thead`,{className:`sticky top-0 bg-muted/90 backdrop-blur`,children:(0,T.jsx)(`tr`,{children:Te.map(n=>(0,T.jsx)(`th`,{scope:`col`,"aria-sort":e.by===n?e.asc?`ascending`:`descending`:`none`,className:`border-b px-2 py-1 text-start font-medium capitalize`,children:(0,T.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:()=>t(e=>({by:n,asc:e.by===n?!e.asc:!0})),children:[n,(0,T.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:e.by===n?e.asc?`▲`:`▼`:``})]})},n))})}),(0,T.jsx)(`tbody`,{children:n.map(e=>(0,T.jsxs)(`tr`,{className:`border-b border-border/60 hover:bg-muted/50`,children:[(0,T.jsx)(`td`,{className:`px-2 py-1 font-medium`,children:e.name}),(0,T.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:e.team}),(0,T.jsx)(`td`,{className:`px-2 py-1`,children:(0,T.jsx)(`span`,{className:`rounded px-1.5 py-0.5 text-[11px] ${Ee[e.status]}`,children:e.status})}),(0,T.jsx)(`td`,{className:`px-2 py-1 text-end tabular-nums`,children:e.tasks})]},e.name))})]})})}var Oe=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],X={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function ke(){let[e,t]=(0,w.useState)(`0`),[n,r]=(0,w.useState)(null),[i,a]=(0,w.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||X[o]){let e=n?X[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,T.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,T.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,T.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:Oe.map(e=>(0,T.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${X[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var Z=[{id:`notes`,label:`Notes`,icon:(0,T.jsx)(Y,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,T.jsx)(Ce,{})},{id:`data`,label:`People`,icon:(0,T.jsx)(Y,{icon:o,from:`#34d399`,to:`#059669`}),rect:{left:420,top:90,width:440,height:300},content:()=>(0,T.jsx)(De,{})},{id:`calc`,label:`Calculator`,icon:(0,T.jsx)(Y,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,T.jsx)(ke,{})}],Ae=[`notes`,`data`,`calc`];function je(){return Z.filter(e=>Ae.includes(e.id)).map(e=>(0,T.jsx)(f,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function Me({twoLines:e}){let[t,n]=(0,w.useState)(null);if((0,w.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),be);return()=>clearInterval(e)},[]),!t)return(0,T.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,T.jsxs)(`span`,{className:`grid`,children:[(0,T.jsx)(`span`,{children:r}),(0,T.jsx)(`span`,{children:i})]}):(0,T.jsxs)(`span`,{children:[i,` `,r]})}function Ne(){return(0,T.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[22px]`,"aria-hidden":`true`,children:(0,T.jsx)(`path`,{fill:`#0078d4`,d:`M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z`})})}var Q=`h-6 rounded-md border border-black/10 bg-white/80 px-2 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900`;function Pe(){let e=b(),t=d();return(0,T.jsxs)(`div`,{className:`absolute end-3 top-3 flex gap-1.5`,style:{zIndex:0},children:[(0,T.jsx)(`button`,{type:`button`,className:Q,onClick:()=>{let n=t.windows.find(e=>!e.focused);n&&e.manager.setFlags(n.id,{attention:!0})},children:`Request attention`}),(0,T.jsx)(`button`,{type:`button`,className:Q,onClick:()=>e.cascade(),children:`Cascade`}),(0,T.jsx)(`button`,{type:`button`,className:Q,onClick:()=>e.tile(`grid`),children:`Tile`}),(0,T.jsx)(`button`,{type:`button`,className:Q,onClick:()=>e.showDesktop(),children:`Show desktop`})]})}function Fe({className:e,...t}){let{surface:n}=u();return(0,T.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function Ie(){return(0,T.jsxs)(y,{options:ye,chrome:h,children:[(0,T.jsx)(v,{}),(0,T.jsx)(S,{}),(0,T.jsxs)(Fe,{className:`flex h-[460px] flex-col overflow-hidden rounded-lg border shadow-sm ${xe}`,children:[(0,T.jsxs)(p,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`Windows 11 desktop`,role:`region`,children:[(0,T.jsx)(je,{}),(0,T.jsx)(Pe,{})]}),(0,T.jsx)(x,{labels:!1,start:(0,T.jsx)(`span`,{className:`flex size-10 items-center justify-center rounded-md`,"aria-hidden":`true`,children:(0,T.jsx)(Ne,{})}),tray:(0,T.jsx)(Me,{twoLines:!0})})]})]})}var $=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, Table2, type LucideIcon } from "lucide-react"
import { Desktop, DESKTOP_SURFACE, Taskbar, useDesktopSnapshot, useWindows, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, windowsChrome, type Rect } from "@kitora/windows"

// The Windows-style taskbar (W65, W68, W80): a button per window, the active one pressed; click the active one
// to minimise (it flies into its button), click again to restore. Request attention flashes a background
// window's button until it is focused; cascade, tile and show desktop arrange every window (W70, W71, W77).

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
  { id: "notes", label: "Notes", icon: <AppIcon icon={FileText} from="#fcd34d" to="#f59e0b" />, rect: { left: 120, top: 36, width: 330, height: 280 }, content: () => <NotesApp /> },
  { id: "data", label: "People", icon: <AppIcon icon={Table2} from="#34d399" to="#059669" />, rect: { left: 420, top: 90, width: 440, height: 300 }, content: () => <PeopleApp /> },
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "data", "calc"]

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

const ACTION = "h-6 rounded-md border border-black/10 bg-white/80 px-2 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"

/** Desktop commands floating at the desktop's top-right: request attention, cascade, tile and show desktop. */
function DesktopActions() {
  const api = useWindows()
  const snapshot = useDesktopSnapshot()
  // Flashes a background window's taskbar button until that window is focused.
  const requestAttention = () => {
    const target = snapshot.windows.find((w) => !w.focused)
    if (target) api.manager.setFlags(target.id, { attention: true })
  }
  return (
    <div className="absolute end-3 top-3 flex gap-1.5" style={{ zIndex: 0 }}>
      <button type="button" className={ACTION} onClick={requestAttention}>
        Request attention
      </button>
      <button type="button" className={ACTION} onClick={() => api.cascade()}>
        Cascade
      </button>
      <button type="button" className={ACTION} onClick={() => api.tile("grid")}>
        Tile
      </button>
      <button type="button" className={ACTION} onClick={() => api.showDesktop()}>
        Show desktop
      </button>
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

export function TaskbarDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={windowsChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their taskbar button */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[460px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="Windows 11 desktop" role="region">
          <StartingApps />
          <DesktopActions />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>c(()=>import(`./taskbar-taskbar-CpCfsC3g.js`),[]));function Le(){return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(n,{title:`Taskbar and dock`,children:`Two ways back to a window. The taskbar has a button per window: the active one is pressed, clicking it minimises, clicking again restores. The dock launches apps, marks running ones with a dot, keeps minimised windows after the separator and magnifies under the pointer. Minimise a window to watch it fly into its button.`}),(0,T.jsx)(C,{n:1,title:`Taskbar`,blurb:`Request attention flashes a background window's button until you focus it. Cascade, tile and show desktop arrange every window.`,code:$,children:(0,T.jsx)(`div`,{"data-testid":`taskbar-screen`,children:(0,T.jsx)(Ie,{})})}),(0,T.jsx)(C,{n:2,title:`DesktopDock`,blurb:`Hover the dock to magnify. A dot marks a running app; clicking it brings its window forward, clicking a stopped one launches it.`,code:H,children:(0,T.jsx)(`div`,{"data-testid":`dock-screen`,children:(0,T.jsx)(V,{})})}),(0,T.jsx)(C,{n:3,title:`Window menu`,blurb:`The neutral taskbar's Window menu lists every window (the active one checked) with the arrange commands; titles show next to the icons.`,code:J,children:(0,T.jsx)(`div`,{"data-testid":`menu-screen`,children:(0,T.jsx)(ve,{})})})]})}export{Le as component};