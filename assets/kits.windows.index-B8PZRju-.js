import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calculator-BVMcNXSz.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./file-text-jZN1FxYo.js";import{t as i}from"./globe-sWXhXf1y.js";import{t as a}from"./mail-m_AeWWGR.js";import{t as o}from"./table-2-CGj1wq2_.js";import{Bc as s,Cc as ee,Ic as c,Oc as l,tt as u,xt as d}from"./index-9y5uwRd3.js";import{s as f,t as p}from"./hooks-Dc41GNg3.js";import{n as m,t as h}from"./desktop-BeKLskx2.js";import{_ as g,n as _,r as v,t as y,v as b,y as x}from"./windows-styles-BhYIhkUl.js";import{t as S}from"./taskbar-Cxx8_y4E.js";import{t as C}from"./dock-JK3k5WIj.js";import{t as w}from"./motion-CnGJFDxj.js";import"./kit-gallery-B-Yr9fP4.js";import{t as T}from"./example-CZLJLtIC.js";var E=e(s(),1),D=c(),O={snap:{magnet:8}},k=84,A=3e4,j={mac:`macOS`,windows:`Windows 11`,neutral:`Neutral`,material:`Material`,gnome:`GNOME`,retro:`Retro`,terminal:`Terminal`},M={mac:`bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]`,windows:`bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]`,neutral:`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`,material:`bg-[linear-gradient(135deg,#e8def8,#d0bcff)] dark:bg-[linear-gradient(135deg,#2b2930,#1d1b20)]`,gnome:`bg-[linear-gradient(160deg,#99c1f1,#62a0ea_60%,#3584e4)] dark:bg-[linear-gradient(160deg,#1a5fb4,#0d3a72)]`,retro:`bg-[#008080]`,terminal:`bg-[#0c0c0c]`};function N({icon:e,from:t,to:n}){return(0,D.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] shadow-sm`,style:{backgroundImage:`linear-gradient(180deg, ${t}, ${n})`},children:(0,D.jsx)(e,{className:`size-[62%] text-white`,strokeWidth:2,"aria-hidden":`true`})})}var P=`Windows kit notes

• Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise.
• Hover the maximise button for the snap layouts.
• Minimise me, then bring me back: this text (and anything you type) is still here.`;function F(){let[e,t]=(0,E.useState)(P),n=e.trim()?e.trim().split(/\s+/).length:0;return(0,D.jsxs)(`div`,{className:`flex h-full flex-col bg-[#fffdf3] text-[13px] text-[#3a3524] dark:bg-[#262419] dark:text-[#ece6cf]`,children:[(0,D.jsx)(`textarea`,{"aria-label":`Note`,value:e,onChange:e=>t(e.target.value),className:`min-h-0 flex-1 resize-none bg-transparent p-3 leading-relaxed outline-none`}),(0,D.jsxs)(`div`,{className:`flex h-6 shrink-0 items-center justify-end border-t border-black/5 px-3 text-[11px] text-black/70 tabular-nums dark:border-white/10 dark:text-white/60`,children:[n,` words`]})]})}var I=[{name:`Ada Lovelace`,team:`Research`,status:`Active`,tasks:12},{name:`Grace Hopper`,team:`Compilers`,status:`Active`,tasks:9},{name:`Alan Turing`,team:`Research`,status:`Away`,tasks:4},{name:`Katherine Johnson`,team:`Flight`,status:`Active`,tasks:15},{name:`Linus Torvalds`,team:`Kernel`,status:`Busy`,tasks:21},{name:`Margaret Hamilton`,team:`Flight`,status:`Active`,tasks:7},{name:`Dennis Ritchie`,team:`Compilers`,status:`Away`,tasks:3},{name:`Barbara Liskov`,team:`Languages`,status:`Active`,tasks:11},{name:`Ken Thompson`,team:`Kernel`,status:`Busy`,tasks:8},{name:`Frances Allen`,team:`Compilers`,status:`Active`,tasks:6},{name:`John Backus`,team:`Languages`,status:`Away`,tasks:2},{name:`Radia Perlman`,team:`Networks`,status:`Active`,tasks:13}],L=[`name`,`team`,`status`,`tasks`],R={Active:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`,Away:`bg-zinc-500/15 text-zinc-600 dark:text-zinc-300`,Busy:`bg-amber-500/15 text-amber-800 dark:text-amber-300`};function z(){let[e,t]=(0,E.useState)({by:`name`,asc:!0}),n=(0,E.useMemo)(()=>I.toSorted((t,n)=>(t[e.by]<n[e.by]?-1:+(t[e.by]>n[e.by]))*(e.asc?1:-1)),[e]);return(0,D.jsx)(`div`,{className:`h-full overflow-auto bg-background text-[12px]`,children:(0,D.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,D.jsx)(`thead`,{className:`sticky top-0 bg-muted/90 backdrop-blur`,children:(0,D.jsx)(`tr`,{children:L.map(n=>(0,D.jsx)(`th`,{scope:`col`,"aria-sort":e.by===n?e.asc?`ascending`:`descending`:`none`,className:`border-b px-2 py-1 text-start font-medium capitalize`,children:(0,D.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:()=>t(e=>({by:n,asc:e.by===n?!e.asc:!0})),children:[n,(0,D.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:e.by===n?e.asc?`▲`:`▼`:``})]})},n))})}),(0,D.jsx)(`tbody`,{children:n.map(e=>(0,D.jsxs)(`tr`,{className:`border-b border-border/60 hover:bg-muted/50`,children:[(0,D.jsx)(`td`,{className:`px-2 py-1 font-medium`,children:e.name}),(0,D.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:e.team}),(0,D.jsx)(`td`,{className:`px-2 py-1`,children:(0,D.jsx)(`span`,{className:`rounded px-1.5 py-0.5 text-[11px] ${R[e.status]}`,children:e.status})}),(0,D.jsx)(`td`,{className:`px-2 py-1 text-end tabular-nums`,children:e.tasks})]},e.name))})]})})}var B=`h-7 w-full rounded-md border bg-background px-2 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring`;function V(){let[e,t]=(0,E.useState)(null);return(0,D.jsxs)(`form`,{className:`flex h-full flex-col gap-2 overflow-auto bg-background p-3 text-[12px]`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget).get(`name`);t(typeof n==`string`?n:``)},children:[(0,D.jsxs)(`label`,{className:`grid gap-1`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Name`}),(0,D.jsx)(`input`,{name:`name`,required:!0,className:B,placeholder:`Ada Lovelace`})]}),(0,D.jsxs)(`label`,{className:`grid gap-1`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Email`}),(0,D.jsx)(`input`,{name:`email`,type:`email`,required:!0,className:B,placeholder:`ada@example.com`})]}),(0,D.jsxs)(`label`,{className:`grid min-h-0 flex-1 gap-1`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Message`}),(0,D.jsx)(`textarea`,{name:`message`,className:`min-h-12 flex-1 resize-none rounded-md border bg-background p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring`,placeholder:`Hello!`})]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsx)(`button`,{type:`submit`,className:`h-7 rounded-md bg-primary px-3 font-medium text-primary-foreground hover:opacity-90`,children:`Send`}),(0,D.jsx)(`span`,{role:`status`,className:`text-muted-foreground`,children:e===null?``:`Thanks, ${e||`friend`}: sent.`})]})]})}var te=`<!doctype html><html><head><style>
body{margin:0;font:13px system-ui;color:#1f2328;background:#fff}
header{padding:28px 24px;background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff}
h1{margin:0 0 6px;font-size:22px}main{padding:16px 24px;line-height:1.55}
.card{border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;margin:10px 0}
@media (prefers-color-scheme: dark){body{background:#17171a;color:#e6e6e6}.card{border-color:#2e2e33}}
</style></head><body><header><h1>Kitora</h1>Windows, docks and overlays for the web.</header>
<main><div class="card"><b>An iframe inside a window.</b> Click in here: the window activates. Drag the window across other iframes: the gesture never stalls.</div>
<div class="card">Snap me to the right half, then drag another window to the left.</div></main></body></html>`;function H(){return(0,D.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-b px-2`,children:[(0,D.jsxs)(`span`,{className:`flex gap-1`,"aria-hidden":`true`,children:[(0,D.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`}),(0,D.jsx)(`span`,{className:`size-2 rounded-full bg-muted-foreground/30`})]}),(0,D.jsx)(`div`,{className:`flex h-6 flex-1 items-center rounded-full bg-muted px-3 text-[11px] text-muted-foreground`,children:`kitora.localhost/welcome`})]}),(0,D.jsx)(`iframe`,{title:`Welcome page`,srcDoc:te,sandbox:``,className:`min-h-0 w-full flex-1 border-0`})]})}var U=[`C`,`±`,`%`,`÷`,`7`,`8`,`9`,`×`,`4`,`5`,`6`,`−`,`1`,`2`,`3`,`+`,`0`,`.`,`=`],W={"÷":(e,t)=>e/t,"×":(e,t)=>e*t,"−":(e,t)=>e-t,"+":(e,t)=>e+t};function G(){let[e,t]=(0,E.useState)(`0`),[n,r]=(0,E.useState)(null),[i,a]=(0,E.useState)(!0),o=o=>{let s=Number(e);if(o===`C`)return t(`0`),r(null),a(!0);if(o===`±`)return t(String(-s));if(o===`%`)return t(String(s/100));if(o===`=`||W[o]){let e=n?W[n.op]:void 0,i=e&&n?e(n.value,s):s;t(String(Number(i.toPrecision(12)))),r(o===`=`?null:{value:i,op:o}),a(!0);return}t(e=>i?o===`.`?`0.`:o:o===`.`&&e.includes(`.`)?e:e+o),a(!1)};return(0,D.jsxs)(`div`,{className:`flex h-full flex-col bg-zinc-900 p-2 text-white`,children:[(0,D.jsx)(`output`,{"aria-live":`polite`,className:`flex h-14 items-end justify-end px-2 pb-1 text-[30px] font-light tabular-nums`,children:e}),(0,D.jsx)(`div`,{className:`grid flex-1 grid-cols-4 gap-1.5`,children:U.map(e=>(0,D.jsx)(`button`,{type:`button`,"aria-label":e===`−`?`minus`:e,onClick:()=>o(e),className:`rounded-full text-[15px] font-medium active:brightness-125 ${e===`0`?`col-span-2`:``} ${W[e]||e===`=`?`bg-orange-500`:[`C`,`±`,`%`].includes(e)?`bg-zinc-400 text-zinc-900`:`bg-zinc-700`}`,children:e},e))})]})}var K=[{id:`notes`,label:`Notes`,icon:(0,D.jsx)(N,{icon:r,from:`#fcd34d`,to:`#f59e0b`}),rect:{left:120,top:36,width:330,height:280},content:()=>(0,D.jsx)(F,{})},{id:`data`,label:`People`,icon:(0,D.jsx)(N,{icon:o,from:`#34d399`,to:`#059669`}),rect:{left:420,top:90,width:440,height:300},content:()=>(0,D.jsx)(z,{})},{id:`browser`,label:`Browser`,icon:(0,D.jsx)(N,{icon:i,from:`#60a5fa`,to:`#2563eb`}),rect:{left:230,top:160,width:460,height:320},content:()=>(0,D.jsx)(H,{})},{id:`contact`,label:`Contact`,icon:(0,D.jsx)(N,{icon:a,from:`#f472b6`,to:`#db2777`}),rect:{width:300,height:300},content:()=>(0,D.jsx)(V,{})},{id:`calc`,label:`Calculator`,icon:(0,D.jsx)(N,{icon:t,from:`#a1a1aa`,to:`#52525b`}),rect:{left:560,top:40,width:250,height:330},minSize:{width:200,height:280},content:()=>(0,D.jsx)(G,{})}],q=[`notes`,`data`,`browser`];function J(e,t){e.open({key:t.id,app:t.id,title:t.label,icon:t.icon,rect:t.rect,minSize:t.minSize,content:t.content()})}function Y(){return K.filter(e=>q.includes(e.id)).map(e=>(0,D.jsx)(m,{windowKey:e.id,app:e.id,title:e.label,icon:e.icon,defaultRect:e.rect,minSize:e.minSize,children:e.content()},e.id))}function X(){let e=x();return(0,D.jsx)(`div`,{className:`absolute start-3 top-3 flex flex-col gap-2`,style:{zIndex:0},children:K.map(t=>(0,D.jsxs)(`button`,{type:`button`,onClick:()=>J(e,t),className:`flex w-[72px] flex-col items-center gap-1 rounded-md p-1 text-[11px] font-medium text-white hover:bg-white/15 focus-visible:bg-white/20 focus-visible:outline-2 focus-visible:outline-white`,children:[(0,D.jsx)(`span`,{className:`size-10`,children:t.icon}),(0,D.jsx)(`span`,{className:`rounded bg-black/65 px-1.5 leading-4`,children:t.label})]},t.id))})}function Z({twoLines:e}){let[t,n]=(0,E.useState)(null);if((0,E.useEffect)(()=>{n(new Date);let e=setInterval(()=>n(new Date),A);return()=>clearInterval(e)},[]),!t)return(0,D.jsx)(`span`,{className:`w-14`});let r=t.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),i=t.toLocaleDateString([],e?{day:`2-digit`,month:`2-digit`,year:`numeric`}:{weekday:`short`,day:`numeric`,month:`short`});return e?(0,D.jsxs)(`span`,{className:`grid`,children:[(0,D.jsx)(`span`,{children:r}),(0,D.jsx)(`span`,{children:i})]}):(0,D.jsxs)(`span`,{children:[i,` `,r]})}function Q(){return(0,D.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[22px]`,"aria-hidden":`true`,children:(0,D.jsx)(`path`,{fill:`#0078d4`,d:`M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z`})})}function ne(){let e=p().windows.find(e=>e.focused);return(0,D.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-4 bg-white/45 px-4 text-[13px] text-black/85 backdrop-blur-xl dark:bg-black/35 dark:text-white/90`,children:[(0,D.jsx)(`svg`,{viewBox:`0 0 16 16`,className:`size-[14px]`,"aria-hidden":`true`,fill:`currentColor`,children:(0,D.jsx)(`path`,{d:`M8 1l6.5 7L8 15 1.5 8z`})}),(0,D.jsx)(`span`,{className:`font-semibold`,children:e?.title??`Finder`}),(0,D.jsx)(`span`,{className:`hidden sm:inline`,children:`File`}),(0,D.jsx)(`span`,{className:`hidden sm:inline`,children:`Edit`}),(0,D.jsx)(`span`,{className:`hidden sm:inline`,children:`View`}),(0,D.jsx)(g,{className:`rounded px-1.5 py-0.5 hover:bg-black/10 aria-expanded:bg-black/10 dark:hover:bg-white/15`}),(0,D.jsx)(`span`,{className:`ms-auto tabular-nums`,children:(0,D.jsx)(Z,{twoLines:!1})})]})}function re(){let e=x();return(0,D.jsx)(C,{apps:(0,E.useMemo)(()=>K.map(t=>({id:t.id,label:t.label,icon:t.icon,launch:()=>J(e,t)})),[e])})}function ie({className:e,...t}){let{surface:n}=f();return(0,D.jsx)(`div`,{...t,className:[n===`desktop`?`isolate`:null,e].filter(Boolean).join(` `)})}function ae({value:e,onChange:t}){return(0,D.jsx)(`div`,{role:`group`,"aria-label":`Chrome preset`,className:`mb-2 inline-flex min-h-7 max-w-full flex-wrap items-center rounded-md border bg-muted/50 p-0.5 text-[12px]`,children:v.map(n=>(0,D.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`h-6 rounded px-2.5 text-muted-foreground hover:text-foreground aria-pressed:bg-background aria-pressed:font-medium aria-pressed:text-foreground aria-pressed:shadow-sm`,children:j[n]},n))})}function oe(){let e=u(),[t,n]=(0,E.useState)(null),r=t??(e.id===d.id?`windows`:e.windowChrome),i={top:0,right:0,bottom:r===`mac`?k:0,left:0};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ae,{value:r,onChange:n}),(0,D.jsxs)(b,{options:O,chrome:_[r],children:[(0,D.jsx)(y,{}),(0,D.jsx)(w,{}),(0,D.jsxs)(ie,{className:`flex h-[580px] flex-col overflow-hidden rounded-lg border shadow-sm ${M[r]}`,children:[r===`mac`?(0,D.jsx)(ne,{}):null,(0,D.jsxs)(h,{className:`min-h-0 flex-1 overflow-hidden`,"aria-label":`${j[r]} desktop`,role:`region`,insets:i,children:[(0,D.jsx)(X,{}),(0,D.jsx)(Y,{}),r===`mac`?(0,D.jsx)(re,{}):null]}),r===`mac`?null:(0,D.jsx)(S,{labels:r===`neutral`,start:r===`windows`?(0,D.jsx)(`span`,{className:`flex size-10 items-center justify-center rounded-md`,"aria-hidden":`true`,children:(0,D.jsx)(Q,{})}):(0,D.jsx)(g,{className:`h-8 rounded-md px-2 text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/10`}),tray:(0,D.jsx)(Z,{twoLines:r===`windows`})})]})]})]})}var $=`import { useEffect, useMemo, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Calculator, FileText, Globe, Mail, Table2, type LucideIcon } from "lucide-react"
import { CHROME_PRESETS, CHROMES, Desktop, DesktopDock, DESKTOP_SURFACE, Taskbar, useDesktopSnapshot, useWindows, useWindowsContext, Window, WindowListMenu, WindowMotion, WindowsProvider, WindowsStyles, type ChromePreset, type DockApp, type Rect } from "@kitora/windows"
import { KITORA_LAYOUT } from "@kitora/theme/core"
import { useLayout } from "@kitora/theme/react"

// A whole desktop: wallpaper, desktop icons, five small working apps, and the preset's switcher
// (a Windows taskbar, or the macOS menu bar and dock). Switch the chrome: the windows keep their places.

/** Windows within 8 px of an edge or another window snap to it while dragging. */
const MANAGER_OPTIONS = { snap: { magnet: 8 } }
/** Height the dock reserves at the bottom of the work area (W48): its own height plus its margin. */
const DOCK_INSET = 84
/** How often the tray clock re-reads the time: twice a minute keeps it at most 30 s behind. */
const CLOCK_TICK_MS = 30_000

const PRESET_LABELS: { readonly [P in ChromePreset]: string } = { mac: "macOS", windows: "Windows 11", neutral: "Neutral", material: "Material", gnome: "GNOME", retro: "Retro", terminal: "Terminal" }

const WALLPAPER: { readonly [P in ChromePreset]: string } = {
  mac: "bg-[radial-gradient(120%_90%_at_10%_10%,#fbc2eb_0%,#a6c1ee_45%,#6a82fb_100%)] dark:bg-[radial-gradient(120%_90%_at_10%_10%,#3b1d5c_0%,#1f2d5c_50%,#0b1026_100%)]",
  windows: "bg-[radial-gradient(90%_120%_at_70%_120%,#3b82f6_0%,#93c5fd_45%,#e0e7ff_100%)] dark:bg-[radial-gradient(90%_120%_at_70%_120%,#1d4ed8_0%,#172554_55%,#0a0f1f_100%)]",
  neutral: "bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]",
  material: "bg-[linear-gradient(135deg,#e8def8,#d0bcff)] dark:bg-[linear-gradient(135deg,#2b2930,#1d1b20)]",
  gnome: "bg-[linear-gradient(160deg,#99c1f1,#62a0ea_60%,#3584e4)] dark:bg-[linear-gradient(160deg,#1a5fb4,#0d3a72)]",
  retro: "bg-[#008080]",
  terminal: "bg-[#0c0c0c]",
}

// ── app icons ────────────────────────────────────────────────────────────────

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
  { id: "data", label: "People", icon: <AppIcon icon={Table2} from="#34d399" to="#059669" />, rect: { left: 420, top: 90, width: 440, height: 300 }, content: () => <PeopleApp /> },
  { id: "browser", label: "Browser", icon: <AppIcon icon={Globe} from="#60a5fa" to="#2563eb" />, rect: { left: 230, top: 160, width: 460, height: 320 }, content: () => <BrowserApp /> },
  { id: "contact", label: "Contact", icon: <AppIcon icon={Mail} from="#f472b6" to="#db2777" />, rect: { width: 300, height: 300 }, content: () => <ContactApp /> },
  { id: "calc", label: "Calculator", icon: <AppIcon icon={Calculator} from="#a1a1aa" to="#52525b" />, rect: { left: 560, top: 40, width: 250, height: 330 }, minSize: { width: 200, height: 280 }, content: () => <CalculatorApp /> },
]

/** The apps open at start. */
const STARTING_APPS: readonly string[] = ["notes", "data", "browser"]

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

/** Desktop icons in a column on the wallpaper: a click opens the app. */
function DesktopIcons() {
  const api = useWindows()
  return (
    <div className="absolute start-3 top-3 flex flex-col gap-2" style={{ zIndex: 0 }}>
      {APPS.map((app) => (
        <button
          key={app.id}
          type="button"
          onClick={() => launch(api, app)}
          className="flex w-[72px] flex-col items-center gap-1 rounded-md p-1 text-[11px] font-medium text-white hover:bg-white/15 focus-visible:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
        >
          <span className="size-10">{app.icon}</span>
          {/* A dark label plate: white text stays readable on the light wallpapers too. */}
          <span className="rounded bg-black/65 px-1.5 leading-4">{app.label}</span>
        </button>
      ))}
    </div>
  )
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

/** The preset switcher: a labelled group of toggle buttons. */
function PresetSwitcher({ value, onChange }: { value: ChromePreset; onChange: (preset: ChromePreset) => void }) {
  return (
    <div role="group" aria-label="Chrome preset" className="mb-2 inline-flex min-h-7 max-w-full flex-wrap items-center rounded-md border bg-muted/50 p-0.5 text-[12px]">
      {CHROME_PRESETS.map((p) => (
        <button
          key={p}
          type="button"
          aria-pressed={value === p}
          onClick={() => onChange(p)}
          className="h-6 rounded px-2.5 text-muted-foreground hover:text-foreground aria-pressed:bg-background aria-pressed:font-medium aria-pressed:text-foreground aria-pressed:shadow-sm"
        >
          {PRESET_LABELS[p]}
        </button>
      ))}
    </div>
  )
}

export function WindowsDesktop() {
  // The site's design language picks the starting chrome (Retro's title bar under Retro); Kitora's own starts on Windows 11.
  const layout = useLayout()
  const [picked, setPreset] = useState<ChromePreset | null>(null)
  const preset = picked ?? (layout.id === KITORA_LAYOUT.id ? "windows" : layout.windowChrome)
  // The dock floats over the desktop's bottom; reserve its height so maximise and snap stop above it (W48).
  const insets = { top: 0, right: 0, bottom: preset === "mac" ? DOCK_INSET : 0, left: 0 }
  return (
    <>
      <PresetSwitcher value={preset} onChange={setPreset} />
      <WindowsProvider options={MANAGER_OPTIONS} chrome={CHROMES[preset]}>
        <WindowsStyles />
        {/* minimised windows fly into their taskbar button or dock icon */}
        <WindowMotion />
        <ScreenFrame className={\`flex h-[580px] flex-col overflow-hidden rounded-lg border shadow-sm \${WALLPAPER[preset]}\`}>
          {preset === "mac" ? <MacMenuBar /> : null}
          <Desktop className="min-h-0 flex-1 overflow-hidden" aria-label={\`\${PRESET_LABELS[preset]} desktop\`} role="region" insets={insets}>
            <DesktopIcons />
            <StartingApps />
            {preset === "mac" ? <Dock /> : null}
          </Desktop>
          {preset !== "mac" ? (
            <Taskbar
              labels={preset === "neutral"}
              start={
                preset === "windows" ? (
                  <span className="flex size-10 items-center justify-center rounded-md" aria-hidden="true">
                    <WindowsLogo />
                  </span>
                ) : (
                  <WindowListMenu className="h-8 rounded-md px-2 text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/10" />
                )
              }
              tray={<Clock twoLines={preset === "windows"} />}
            />
          ) : null}
        </ScreenFrame>
      </WindowsProvider>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>ee(()=>import(`./desktop-CSfCj-cC.js`),[]));var se=[{name:`core`,what:`States and restore stack, constraints, snap zones as data, z-order with tiers and owners, cascade and tile, layouts, the manager. No DOM.`},{name:`dom`,what:`Pointer gestures (move, 8 grips, snap, double-click), touch and pen, pointer capture, iframe shield, scaled desktops, Fullscreen API, localStorage layouts.`},{name:`react`,what:`WindowsProvider, <Desktop>, <Window>, hooks, useWindows().open() with React, URL or element content, headless parts.`},{name:`ui`,what:`Neutral, macOS and Windows chrome, WindowToolbar (in a bar below the title or merged into the title bar, per the chrome), Taskbar, DesktopDock, snap layouts flyout, styled snap preview, window menus, motion.`},{name:`overlay, keyboard`,what:`Modal windows and paint bands through the overlay stack; window commands through the keyboard kit.`}];function ce(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(n,{title:`Windows kit`,children:`A desktop window manager inside a page: windows move by the title bar, resize from eight grips, snap to halves and quarters, stack with focus, minimise to a taskbar or a dock, and wear macOS, Windows or neutral chrome. Built in layers on a framework-free core.`}),(0,D.jsx)(T,{n:1,title:`A desktop`,blurb:`Open apps from the desktop icons, the taskbar or the dock. Drag a title bar to an edge to snap, to a corner for a quarter, to the top to maximise; hover the maximise button for the snap layouts; right-click a title bar for the window menu; minimise and restore from the taskbar or dock. Switch the chrome: the windows keep their places.`,code:$,children:(0,D.jsx)(`div`,{"data-testid":`index-desktop`,children:(0,D.jsx)(oe,{})})}),(0,D.jsxs)(T,{n:2,title:`Layers`,blurb:`Every layer ships today; listed in build order.`,children:[(0,D.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,D.jsx)(`tbody`,{children:se.map(e=>(0,D.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,D.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[12px]`,children:e.name}),(0,D.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})}),(0,D.jsxs)(`p`,{className:`mt-3 text-[12px] text-muted-foreground`,children:[`In detail:`,` `,(0,D.jsx)(l,{to:`/kits/windows/move-resize`,className:`underline underline-offset-2 hover:text-foreground`,children:`Move and resize`}),` · `,(0,D.jsx)(l,{to:`/kits/windows/chrome`,className:`underline underline-offset-2 hover:text-foreground`,children:`Chrome`}),` · `,(0,D.jsx)(l,{to:`/kits/windows/taskbar`,className:`underline underline-offset-2 hover:text-foreground`,children:`Taskbar and dock`}),` · `,(0,D.jsx)(l,{to:`/kits/windows/snap`,className:`underline underline-offset-2 hover:text-foreground`,children:`Snap`}),` · `,(0,D.jsx)(l,{to:`/kits/windows/react`,className:`underline underline-offset-2 hover:text-foreground`,children:`React API`}),`.`]})]})]})}export{ce as component};