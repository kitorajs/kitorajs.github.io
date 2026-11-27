import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{s as a}from"./hooks-BsnxIcZj.js";import{n as o,t as s}from"./desktop-Cf2asQJd.js";import{O as c,l,t as u,v as d}from"./windows-styles-MyHmEdOT.js";import{t as f}from"./taskbar-B_QjsVDG.js";import{t as p}from"./motion-PrKxq7r-.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";var h=e(r(),1),g=i(),_=[`sm`,`md`,`lg`],v={fullscreen:`Full screen`,"bottom-sheet":`Bottom sheet`},y=`h-6 rounded px-2.5 text-[12px] text-muted-foreground hover:text-foreground aria-pressed:bg-background aria-pressed:font-medium aria-pressed:text-foreground aria-pressed:shadow-sm`,b=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function x({children:e}){let{surface:t}=a();return(0,g.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${b}`,children:e})}function S(){let[e,t]=(0,h.useState)(`sm`),[n,r]=(0,h.useState)(`fullscreen`),i={breakpoint:e,surface:n};return(0,g.jsxs)(`div`,{className:`grid gap-2`,children:[(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[12px]`,children:[(0,g.jsx)(`div`,{className:`inline-flex rounded-md bg-muted p-0.5`,role:`group`,"aria-label":`Breakpoint`,children:_.map(n=>(0,g.jsxs)(`button`,{type:`button`,className:y,"aria-pressed":e===n,onClick:()=>t(n),children:[`below `,n]},n))}),(0,g.jsx)(`div`,{className:`inline-flex rounded-md bg-muted p-0.5`,role:`group`,"aria-label":`Surface`,children:c.map(e=>(0,g.jsx)(`button`,{type:`button`,className:y,"aria-pressed":n===e,onClick:()=>r(e),children:v[e]},e))})]}),(0,g.jsxs)(d,{chrome:l,mobile:i,children:[(0,g.jsx)(u,{}),(0,g.jsx)(p,{}),(0,g.jsxs)(x,{children:[(0,g.jsxs)(s,{className:`h-[320px] overflow-hidden`,role:`region`,"aria-label":`Phone-friendly desktop`,children:[(0,g.jsx)(o,{title:`Notes`,defaultRect:{left:24,top:24,width:320,height:200},children:(0,g.jsxs)(`div`,{className:`grid gap-2 p-3 text-[12px]`,children:[(0,g.jsx)(`p`,{className:`text-muted-foreground`,children:`Type, then cross the breakpoint: the text stays, the window comes back where it was.`}),(0,g.jsx)(`input`,{"aria-label":`Notes field`,className:`h-7 rounded-md border bg-background px-2`,defaultValue:`still here`})]})}),(0,g.jsx)(o,{title:`Tasks`,defaultRect:{left:380,top:60,width:280,height:180},children:(0,g.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Only the focused window shows as a surface; switch with the taskbar.`})})]}),(0,g.jsx)(f,{peek:!1})]})]},`${e}-${n}`)]})}var C=`import { useState, type ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, MOBILE_SURFACES, neutralChrome, Taskbar, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, type MobileFallback, type MobileSurface } from "@kitora/windows"

// The mobile fallback (W107): below a breakpoint each window renders as one of the overlay kit's surfaces
// (full screen or a bottom sheet) instead of floating on the desktop; only the focused one shows, and the
// taskbar switches. The core state is untouched, so widening the viewport brings the desktop back exactly
// as it was, and a window's content never remounts. The default is full screen below sm (640 px), the
// overlay kit's sheet breakpoint; mobile={null} never falls back.

/** Breakpoints offered here; \`lg\` shows the fallback on most laptop windows without resizing. */
const BREAKPOINTS = ["sm", "md", "lg"] as const
type Breakpoint = (typeof BREAKPOINTS)[number]

const SURFACE_LABELS: { readonly [S in MobileSurface]: string } = { fullscreen: "Full screen", "bottom-sheet": "Bottom sheet" }

const SEGMENT = "h-6 rounded px-2.5 text-[12px] text-muted-foreground hover:text-foreground aria-pressed:bg-background aria-pressed:font-medium aria-pressed:text-foreground aria-pressed:shadow-sm"

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

export function PhoneFriendlyDesktop() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm")
  const [surface, setSurface] = useState<MobileSurface>("fullscreen")
  const mobile: MobileFallback = { breakpoint, surface }
  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap items-center gap-3 text-[12px]">
        <div className="inline-flex rounded-md bg-muted p-0.5" role="group" aria-label="Breakpoint">
          {BREAKPOINTS.map((b) => (
            <button key={b} type="button" className={SEGMENT} aria-pressed={breakpoint === b} onClick={() => setBreakpoint(b)}>
              below {b}
            </button>
          ))}
        </div>
        <div className="inline-flex rounded-md bg-muted p-0.5" role="group" aria-label="Surface">
          {MOBILE_SURFACES.map((s) => (
            <button key={s} type="button" className={SEGMENT} aria-pressed={surface === s} onClick={() => setSurface(s)}>
              {SURFACE_LABELS[s]}
            </button>
          ))}
        </div>
      </div>
      {/* The fallback is read once per provider: a new key starts a fresh desktop with the chosen setting. */}
      <WindowsProvider key={\`\${breakpoint}-\${surface}\`} chrome={neutralChrome} mobile={mobile}>
        <WindowsStyles />
        <WindowMotion />
        <ScreenFrame>
          <Desktop className="h-[320px] overflow-hidden" role="region" aria-label="Phone-friendly desktop">
            <Window title="Notes" defaultRect={{ left: 24, top: 24, width: 320, height: 200 }}>
              <div className="grid gap-2 p-3 text-[12px]">
                <p className="text-muted-foreground">Type, then cross the breakpoint: the text stays, the window comes back where it was.</p>
                <input aria-label="Notes field" className="h-7 rounded-md border bg-background px-2" defaultValue="still here" />
              </div>
            </Window>
            <Window title="Tasks" defaultRect={{ left: 380, top: 60, width: 280, height: 180 }}>
              <p className="p-3 text-[12px] text-muted-foreground">Only the focused window shows as a surface; switch with the taskbar.</p>
            </Window>
          </Desktop>
          <Taskbar peek={false} />
        </ScreenFrame>
      </WindowsProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>n(()=>import(`./mobile-DnMEzsqo.js`),[]));function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{title:`Mobile fallback`,children:`Floating windows need room and a pointer. Below a breakpoint the focused window becomes one of the overlay kit's surfaces, full screen or a bottom sheet, and the rest wait until you switch to them.`}),(0,g.jsx)(m,{n:1,title:`Window → overlay surface`,blurb:`Pick a breakpoint and a surface, then narrow the browser past it (or pick “below lg” on a laptop).`,code:C,children:(0,g.jsx)(`div`,{"data-testid":`mobile-desktop`,children:(0,g.jsx)(S,{})})})]})}export{w as component};