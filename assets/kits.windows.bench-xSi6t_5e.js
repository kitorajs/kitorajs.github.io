import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{s as r}from"./hooks-CYtIGFjN.js";import{n as i,t as a}from"./desktop-y5pVQXm-.js";import{l as o,t as s,v as c}from"./windows-styles-qDdNe6P6.js";import{t as l}from"./motion-D2NZJIHG.js";import"./kit-gallery-Bph7isB2.js";import{t as u}from"./example-BGnSQG2Y.js";var d=n(),f=50,p=9,m=Array.from({length:f},(e,t)=>t),h=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function g({children:e}){let{surface:t}=r();return(0,d.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${h}`,children:e})}function _(){return(0,d.jsxs)(c,{chrome:o,children:[(0,d.jsx)(s,{}),(0,d.jsx)(l,{}),(0,d.jsx)(g,{children:(0,d.jsx)(a,{className:`h-[560px] overflow-hidden`,role:`region`,"aria-label":`Fifty windows desktop`,children:m.map(e=>(0,d.jsx)(i,{title:`Window ${e+1}`,defaultRect:{left:20+e*p,top:10+e*p,width:260,height:160},children:(0,d.jsxs)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:[`Window `,e+1]})},e))})})]})}var v=`import type { ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Fifty open windows (W119): drag one across the others, click one at the back, snap one to an edge. A move
// is a transform painted once per frame and committed on release, a press re-renders only the windows whose
// focus or z-index changed, and nothing reads layout per pointer move.

/** How many windows to open (the W119 budget is stated for 50). */
const COUNT = 50
/** Cascade step between the windows, in px, so every title bar stays reachable. */
const STEP = 9
const IDS = Array.from({ length: COUNT }, (_, i) => i)

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

export function FiftyWindows() {
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[560px] overflow-hidden" role="region" aria-label="Fifty windows desktop">
          {IDS.map((i) => (
            <Window key={i} title={\`Window \${i + 1}\`} defaultRect={{ left: 20 + i * STEP, top: 10 + i * STEP, width: 260, height: 160 }}>
              <p className="p-3 text-[12px] text-muted-foreground">Window {i + 1}</p>
            </Window>
          ))}
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>t(()=>import(`./bench-ieH3LpdK.js`),[]));function y(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e,{title:`50 windows`,children:`A stress desktop for the performance budgets: drag any window across the stack, click one at the back, snap one to an edge.`}),(0,d.jsx)(u,{n:1,title:`Fifty open windows`,blurb:`Each window is its own React subtree; a move repaints one box per frame and re-renders nothing until release.`,code:v,children:(0,d.jsx)(`div`,{"data-testid":`bench-desktop`,children:(0,d.jsx)(_,{})})})]})}export{y as component};