import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calculator-UCbhqqA0.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./file-text-DcQTIaDt.js";import{t as i}from"./pin-CMSmWlNI.js";import{Bc as a,Cc as o,Ic as s}from"./index-q72zUtm9.js";import{s as c,t as l}from"./hooks-B9ivFJ1b.js";import{n as u,t as d}from"./desktop-DmdGz_2X.js";import{C as ee,S as f,T as p,_ as m,a as te,b as ne,f as re,l as h,s as g,t as _,v,w as y,y as b}from"./windows-styles-RAe2mtb3.js";import{t as x}from"./taskbar-DnNhSJIU.js";import{t as ie}from"./dock-DEFCKbKb.js";import{t as S}from"./motion-C7SNEyWt.js";import"./kit-gallery-Atvibnty.js";import{t as C}from"./example-B8EaWveR.js";var w=s(),ae=te(`neutral`,{controls:[{key:`pin`,label:`Keep on top`,icon:(0,w.jsx)(i,{className:`size-3`,"aria-hidden":`true`}),pressed:e=>e.tier===`above`,onClick:(e,t)=>t.setTier(e,t.get(e)?.tier===`above`?`normal`:`above`)},`minimize`,`close`],keyshortcuts:{close:`Control+Alt+W`}}),oe=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function se({children:e}){let{surface:t}=c();return(0,w.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${oe}`,children:e})}function ce(){return(0,w.jsxs)(v,{chrome:ae,children:[(0,w.jsx)(_,{}),(0,w.jsx)(S,{}),(0,w.jsx)(se,{children:(0,w.jsx)(d,{className:`h-[240px] overflow-hidden`,role:`region`,"aria-label":`Pinned tools desktop`,children:(0,w.jsx)(u,{title:`Pinned tools`,defaultRect:{left:40,top:30,width:320,height:160},children:(0,w.jsx)(`p`,{className:`p-3 text-muted-foreground`,children:`Controls: keep on top (a toggle), minimise, close. No maximise.`})})})})]})}var T=`import type { ReactNode } from "react"
import { Pin } from "lucide-react"
import { createChrome, Desktop, DESKTOP_SURFACE, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, type WindowChrome } from "@kitora/windows"

// Custom title-bar controls (W125): add, remove and reorder the buttons. Here a "keep on top" toggle comes
// first, then minimise and close; maximise is left out.

const pinned: WindowChrome = createChrome("neutral", {
  controls: [
    {
      key: "pin",
      label: "Keep on top",
      icon: <Pin className="size-3" aria-hidden="true" />,
      pressed: (w) => w.tier === "above",
      onClick: (id, manager) => manager.setTier(id, manager.get(id)?.tier === "above" ? "normal" : "above"),
    },
    "minimize",
    "close",
  ],
  // aria-keyshortcuts (W97): windowKeyShortcuts(platform) from @kitora/windows/keyboard fills these
  keyshortcuts: { close: "Control+Alt+W" },
})

/** The neutral wallpaper behind the windows, light and dark. */
const WALLPAPER = "bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]"

/**
 * The screen's box. While windows float on the desktop it is its own stacking context, so the desktop's
 * band z-index stays inside it and never paints over the page's sticky header; as a phone surface (W107) it
 * is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ children }: { children: ReactNode }) {
  const { surface } = useWindowsContext()
  return <div className={\`\${surface === DESKTOP_SURFACE ? "isolate " : ""}flex flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>{children}</div>
}

export function PinnedToolsDesktop() {
  return (
    // Every window on this desktop wears \`pinned\`; or <Window chrome={pinned}> for one window.
    <WindowsProvider chrome={pinned}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[240px] overflow-hidden" role="region" aria-label="Pinned tools desktop">
          <Window title="Pinned tools" defaultRect={{ left: 40, top: 30, width: 320, height: 160 }}>
            <p className="p-3 text-muted-foreground">Controls: keep on top (a toggle), minimise, close. No maximise.</p>
          </Window>
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>o(()=>import(`./chrome-custom-CMggfNLJ.js`),[]));var E={name:`pill`,className:`flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white text-[12px] shadow-xl dark:border-white/10 dark:bg-zinc-900`,render:({children:e})=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(p,{className:`m-1.5 flex h-7 items-center gap-2 rounded-lg bg-zinc-900 px-3 text-white dark:bg-zinc-700`,children:[(0,w.jsx)(y,{className:`flex-1 truncate font-medium`}),(0,w.jsx)(f,{action:`minimize`,className:`rounded px-1.5 text-[11px] hover:bg-white/15`,children:`hide`}),(0,w.jsx)(f,{action:`close`,className:`rounded px-1.5 text-[11px] hover:bg-white/15`,children:`close`})]}),(0,w.jsx)(`div`,{className:`min-h-0 flex-1 p-3 text-muted-foreground`,children:e})]})},D=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function O({children:e}){let{surface:t}=c();return(0,w.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${D}`,children:e})}function k(){return(0,w.jsxs)(v,{chrome:E,children:[(0,w.jsx)(_,{}),(0,w.jsx)(S,{}),(0,w.jsx)(O,{children:(0,w.jsxs)(d,{className:`h-[280px] overflow-hidden`,role:`region`,"aria-label":`Custom chromes desktop`,children:[(0,w.jsx)(u,{title:`Pill chrome`,defaultRect:{left:30,top:30,width:300,height:170},children:`Built from WindowTitleBar, WindowTitle and WindowControl: the gestures, double-click and names come with the parts.`}),(0,w.jsx)(u,{title:`Now playing`,chrome:ne,defaultRect:{left:380,top:60,width:260,height:120},className:`overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-2xl`,children:(0,w.jsxs)(ee,{className:`flex h-full flex-col justify-between p-4`,children:[(0,w.jsx)(`span`,{className:`text-[11px] tracking-wide uppercase opacity-80`,children:`Now playing · drag anywhere`}),(0,w.jsx)(`span`,{className:`text-[15px] font-semibold`,children:`Window Manager Blues`}),(0,w.jsx)(f,{action:`close`,className:`self-end rounded-full bg-white/20 px-2 py-0.5 text-[11px] hover:bg-white/30`,children:`close`})]})})]})})]})}var A=`import type { ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, FRAMELESS_CHROME, useWindowsContext, Window, WindowControl, WindowDragRegion, WindowMotion, WindowsProvider, WindowsStyles, WindowTitle, WindowTitleBar, type WindowChrome } from "@kitora/windows"

// A chrome built only from the headless parts (W123), and a frameless window (W124). The parts bring the
// gestures, double-click and accessible names with them; a frameless window has no chrome at all and marks
// its own drag region.

/** A dark pill title bar with the title and two text buttons. */
const pill: WindowChrome = {
  name: "pill",
  className: "flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white text-[12px] shadow-xl dark:border-white/10 dark:bg-zinc-900",
  render: ({ children }) => (
    <>
      <WindowTitleBar className="m-1.5 flex h-7 items-center gap-2 rounded-lg bg-zinc-900 px-3 text-white dark:bg-zinc-700">
        <WindowTitle className="flex-1 truncate font-medium" />
        <WindowControl action="minimize" className="rounded px-1.5 text-[11px] hover:bg-white/15">
          hide
        </WindowControl>
        <WindowControl action="close" className="rounded px-1.5 text-[11px] hover:bg-white/15">
          close
        </WindowControl>
      </WindowTitleBar>
      <div className="min-h-0 flex-1 p-3 text-muted-foreground">{children}</div>
    </>
  ),
}

/** The neutral wallpaper behind the windows, light and dark. */
const WALLPAPER = "bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]"

/**
 * The screen's box. While windows float on the desktop it is its own stacking context, so the desktop's
 * band z-index stays inside it and never paints over the page's sticky header; as a phone surface (W107) it
 * is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ children }: { children: ReactNode }) {
  const { surface } = useWindowsContext()
  return <div className={\`\${surface === DESKTOP_SURFACE ? "isolate " : ""}flex flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>{children}</div>
}

export function CustomChromesDesktop() {
  return (
    <WindowsProvider chrome={pill}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[280px] overflow-hidden" role="region" aria-label="Custom chromes desktop">
          <Window title="Pill chrome" defaultRect={{ left: 30, top: 30, width: 300, height: 170 }}>
            Built from WindowTitleBar, WindowTitle and WindowControl: the gestures, double-click and names come with the parts.
          </Window>
          {/* Frameless: no chrome; the whole surface is a drag region, and buttons inside it keep their press. */}
          <Window
            title="Now playing"
            chrome={FRAMELESS_CHROME}
            defaultRect={{ left: 380, top: 60, width: 260, height: 120 }}
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-2xl"
          >
            <WindowDragRegion className="flex h-full flex-col justify-between p-4">
              <span className="text-[11px] tracking-wide uppercase opacity-80">Now playing · drag anywhere</span>
              <span className="text-[15px] font-semibold">Window Manager Blues</span>
              <WindowControl action="close" className="self-end rounded-full bg-white/20 px-2 py-0.5 text-[11px] hover:bg-white/30">
                close
              </WindowControl>
            </WindowDragRegion>
          </Window>
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>o(()=>import(`./chrome-headless-DIwNRhh4.js`),[]));var j=e(a(),1),M={snap:{magnet:8}},N={top:0,right:0,bottom:84,left:0},P=3e4,F=`bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]`;function I({icon:e,from:t,to:n}){return(0,w.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,w.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var L=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function R(){let[e,t]=(0,j.useState)(L),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,w.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,w.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var z=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],B={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function V(){let[e,t]=(0,j.useState)(`0`),[n,r]=(0,j.useState)(null),[i,a]=(0,j.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||B[o]){let e=n?B[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,w.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,w.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:z.map(e=>(0,w.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${B[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var H=[{id:`notes`,label:`Notes`,icon:(0,w.jsx)(I,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,w.jsx)(R,{})},{id:`calc`,label:`Calculator`,icon:(0,w.jsx)(I,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,w.jsx)(V,{})}],U=[`notes`,`calc`];function W(e,t){e.open({key:t.id,app:t.id,title:t.label,icon:t.icon,rect:t.rect,minSize:t.minSize,content:t.content()})}function G(){return H.filter(e=>U.includes(e.id)).map(e=>(0,w.jsx)(u,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function le({twoLines:e}){let[t,n]=(0,j.useState)(null);if((0,j.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),P);return()=>clearInterval(e)},[]),!t)return(0,w.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,w.jsxs)(`span`,{className:`grid`,children:[(0,w.jsx)(`span`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):(0,w.jsxs)(`span`,{children:[i,` `,r]})}function ue(){let e=l().windows.find(e=>e.focused);return(0,w.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-4 bg-white/45 px-4 text-[13px] text-black/85 backdrop-blur-xl dark:bg-black/35 dark:text-white/90`,children:[(0,w.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[14px]`,"aria-hidden":`true`,fill:`currentColor`,children:(0,w.jsx)(`path`,{d:`M8 1l6.5 7L8 15 1.5 8z`})}),(0,w.jsx)(`span`,{className:`font-semibold`,children:e?.title??`Finder`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`File`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`Edit`}),(0,w.jsx)(`span`,{className:`hidden sm:inline`,children:`View`}),(0,w.jsx)(m,{className:`rounded px-1.5 py-0.5 hover:bg-black/10 aria-expanded:bg-black/10 dark:hover:bg-white/15`}),(0,w.jsx)(`span`,{className:`ms-auto tabular-nums`,children:(0,w.jsx)(le,{twoLines:!1})})]})}function de(){let e=b();return(0,w.jsx)(ie,{apps:(0,j.useMemo)(()=>H.map(t=>({id:t.id,label:t.label,icon:t.icon,launch:()=>W(e,t)})),[e])})}function fe({className:e,...t}){let{surface:n}=c();return(0,w.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function pe(){return(0,w.jsxs)(v,{options:M,chrome:g,children:[(0,w.jsx)(_,{}),(0,w.jsx)(S,{}),(0,w.jsxs)(fe,{className:`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm ${F}`,children:[(0,w.jsx)(ue,{}),(0,w.jsxs)(d,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`macOS desktop`,role:`region`,insets:N,children:[(0,w.jsx)(G,{}),(0,w.jsx)(de,{})]})]})]})}var K=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, type LucideIcon } from "lucide-react"
import { Desktop, DesktopDock, DESKTOP_SURFACE, macChrome, useDesktopSnapshot, useWindows, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type DockApp, type Rect } from "@kitora/windows"

// The macOS chrome preset (W121): traffic lights on the left (glyphs on hover; hover the green one for the
// tile menu), a centred title, a translucent frame, the menu bar and the dock. The front window is active,
// the other shows the inactive style. Theme through the --wk-* variables on [data-chrome="mac"].

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
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "calc"]

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

/**
 * The screen's outer box. While windows float on the desktop it is its own stacking context, so the
 * desktop's band z-index stays inside it and never paints over the page's sticky header; as a mobile
 * surface (W107) it is not, so a window can cover the page like any overlay.
 */
function ScreenFrame({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  const { surface } = useWindowsContext()
  return <div {...rest} className={[surface === DESKTOP_SURFACE ? "isolate" : null, className].filter(Boolean).join(" ")} />
}

export function MacChromeDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={macChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their dock icon */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
        <MacMenuBar />
        <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label="macOS desktop" role="region" insets={DOCK_INSETS}>
          <StartingApps />
          <Dock />
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>o(()=>import(`./chrome-mac-CaaaQOFA.js`),[]));var me={snap:{magnet:8}},he=3e4,ge=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function q({icon:e,from:t,to:n}){return(0,w.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,w.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var _e=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function ve(){let[e,t]=(0,j.useState)(_e),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,w.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,w.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var ye=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],J={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function be(){let[e,t]=(0,j.useState)(`0`),[n,r]=(0,j.useState)(null),[i,a]=(0,j.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||J[o]){let e=n?J[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,w.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,w.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:ye.map(e=>(0,w.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${J[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var xe=[{id:`notes`,label:`Notes`,icon:(0,w.jsx)(q,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,w.jsx)(ve,{})},{id:`calc`,label:`Calculator`,icon:(0,w.jsx)(q,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,w.jsx)(be,{})}],Se=[`notes`,`calc`];function Ce(){return xe.filter(e=>Se.includes(e.id)).map(e=>(0,w.jsx)(u,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function we({twoLines:e}){let[t,n]=(0,j.useState)(null);if((0,j.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),he);return()=>clearInterval(e)},[]),!t)return(0,w.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,w.jsxs)(`span`,{className:`grid`,children:[(0,w.jsx)(`span`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):(0,w.jsxs)(`span`,{children:[i,` `,r]})}function Te({className:e,...t}){let{surface:n}=c();return(0,w.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function Ee(){return(0,w.jsxs)(v,{options:me,chrome:h,children:[(0,w.jsx)(_,{}),(0,w.jsx)(S,{}),(0,w.jsxs)(Te,{className:`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm ${ge}`,children:[(0,w.jsx)(d,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`Neutral desktop`,role:`region`,children:(0,w.jsx)(Ce,{})}),(0,w.jsx)(x,{labels:!0,start:(0,w.jsx)(m,{className:`h-8 rounded-md px-2 text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/10`}),tray:(0,w.jsx)(we,{twoLines:!1})})]})]})}var Y=`import { useEffect, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, type LucideIcon } from "lucide-react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, Taskbar, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type Rect } from "@kitora/windows"

// The neutral chrome preset (W120): compact, on the Kitora tokens (--background, --border, --muted,
// --primary), so it follows the site theme. The taskbar shows titles and opens a Window menu (W72).

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
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "calc"]

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

export function NeutralDesktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={neutralChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their taskbar button */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>o(()=>import(`./chrome-neutral-BVz7FBAh.js`),[]));var De={snap:{magnet:8}},Oe=3e4,ke=`bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]`;function X({icon:e,from:t,to:n}){return(0,w.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,w.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var Z=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function Ae(){let[e,t]=(0,j.useState)(Z),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,w.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,w.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var je=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],Q={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function Me(){let[e,t]=(0,j.useState)(`0`),[n,r]=(0,j.useState)(null),[i,a]=(0,j.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||Q[o]){let e=n?Q[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,w.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,w.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,w.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:je.map(e=>(0,w.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${Q[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var Ne=[{id:`notes`,label:`Notes`,icon:(0,w.jsx)(X,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,w.jsx)(Ae,{})},{id:`calc`,label:`Calculator`,icon:(0,w.jsx)(X,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,w.jsx)(Me,{})}],Pe=[`notes`,`calc`];function Fe(){return Ne.filter(e=>Pe.includes(e.id)).map(e=>(0,w.jsx)(u,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function Ie({twoLines:e}){let[t,n]=(0,j.useState)(null);if((0,j.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),Oe);return()=>clearInterval(e)},[]),!t)return(0,w.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,w.jsxs)(`span`,{className:`grid`,children:[(0,w.jsx)(`span`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):(0,w.jsxs)(`span`,{children:[i,` `,r]})}function Le(){return(0,w.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[22px]`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{fill:`#0078d4`,d:`M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z`})})}function Re({className:e,...t}){let{surface:n}=c();return(0,w.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function ze(){return(0,w.jsxs)(v,{options:De,chrome:re,children:[(0,w.jsx)(_,{}),(0,w.jsx)(S,{}),(0,w.jsxs)(Re,{className:`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm ${ke}`,children:[(0,w.jsx)(d,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`Windows 11 desktop`,role:`region`,children:(0,w.jsx)(Fe,{})}),(0,w.jsx)(x,{labels:!1,start:(0,w.jsx)(`span`,{className:`flex size-10 items-center justify-center rounded-md`,"aria-hidden":`true`,children:(0,w.jsx)(Le,{})}),tray:(0,w.jsx)(Ie,{twoLines:!0})})]})]})}var $=`import { useEffect, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, type LucideIcon } from "lucide-react"
import { Desktop, DESKTOP_SURFACE, Taskbar, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, windowsChrome, type Rect } from "@kitora/windows"

// The Windows 11 chrome preset (W122): caption buttons on the right (close turns red), the snap layouts
// flyout on the maximise button, the system menu on the app icon, and a taskbar. Theme through the
// --wk-* variables on [data-chrome="windows"].

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
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "calc"]

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

export function Windows11Desktop() {
  return (
    <WindowsProvider options={MANAGER_OPTIONS} chrome={windowsChrome}>
      <WindowsStyles />
      {/* minimised windows fly into their taskbar button */}
      <WindowMotion />
      <ScreenFrame className={\`flex h-[380px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER}\`}>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>o(()=>import(`./chrome-windows-CJspGIbG.js`),[]));function Be(){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(n,{title:`Chrome`,children:`Three presets on the same windows: neutral (Kitora tokens), macOS (traffic lights, centred title, translucent) and Windows 11 (caption buttons on the right, a snap layouts flyout on maximise). The front window is active; the others show the inactive style. Right-click any title bar for the window menu.`}),(0,w.jsx)(C,{n:1,title:`macOS`,blurb:`Traffic lights show their glyphs on hover; hover the green one for the tile menu. The title bar and window are translucent over the wallpaper.`,code:K,children:(0,w.jsx)(`div`,{"data-testid":`chrome-mac`,children:(0,w.jsx)(pe,{})})}),(0,w.jsx)(C,{n:2,title:`Windows 11`,blurb:`Caption buttons right, close turns red; hover maximise for the snap layouts; click the app icon for the system menu.`,code:$,children:(0,w.jsx)(`div`,{"data-testid":`chrome-windows`,children:(0,w.jsx)(ze,{})})}),(0,w.jsx)(C,{n:3,title:`Neutral`,blurb:`Compact, on the Kitora tokens (--background, --border, --muted, --primary), so it follows the site theme.`,code:Y,children:(0,w.jsx)(`div`,{"data-testid":`chrome-neutral`,children:(0,w.jsx)(Ee,{})})}),(0,w.jsx)(C,{n:4,title:`Custom controls`,blurb:`Add, remove and reorder the title-bar buttons: a pin button first, no maximise.`,code:T,children:(0,w.jsx)(`div`,{"data-testid":`chrome-custom`,children:(0,w.jsx)(ce,{})})}),(0,w.jsx)(C,{n:5,title:`Headless and frameless`,blurb:`A chrome built from the headless parts, and a frameless window whose whole surface is a drag region.`,code:A,children:(0,w.jsx)(`div`,{"data-testid":`chrome-headless`,children:(0,w.jsx)(k,{})})})]})}export{Be as component};