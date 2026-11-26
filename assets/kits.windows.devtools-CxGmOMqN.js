const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/panel-D_ACmVUg.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{s as a}from"./hooks-Dc41GNg3.js";import{n as o,t as s}from"./desktop-BeKLskx2.js";import{l as c,t as l,v as u}from"./windows-styles-BhYIhkUl.js";import{t as d}from"./motion-CnGJFDxj.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";var p=e(n(),1),m=i(),h=(0,p.lazy)(()=>r(()=>import(`./panel-D_ACmVUg.js`),__vite__mapDeps([0]))),g={font:`500 11px/1 ui-monospace, SFMono-Regular, Menlo, monospace`,height:24,padding:`0 8px`,borderRadius:6,border:`1px solid rgb(127 127 127 / 0.4)`,background:`transparent`,color:`inherit`,cursor:`pointer`};function _({defaultOpen:e=!1,className:t}){let[n,r]=(0,p.useState)(e);return(0,m.jsxs)(`div`,{className:t,"data-windows-devtools":``,children:[(0,m.jsx)(`button`,{type:`button`,style:g,"aria-expanded":n,onClick:()=>r(e=>!e),children:n?`Hide window devtools`:`Window devtools`}),n?(0,m.jsx)(p.Suspense,{fallback:null,children:(0,m.jsx)(h,{})}):null]})}var v=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function y({children:e}){let{surface:t}=a();return(0,m.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${v}`,children:e})}function b(){return(0,m.jsxs)(u,{chrome:c,children:[(0,m.jsx)(l,{}),(0,m.jsx)(d,{}),(0,m.jsx)(y,{children:(0,m.jsxs)(s,{className:`h-[300px] overflow-hidden`,role:`region`,"aria-label":`Devtools desktop`,children:[(0,m.jsx)(o,{id:`notes`,title:`Notes`,defaultRect:{left:24,top:24,width:300,height:180},children:(0,m.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Drag me to an edge.`})}),(0,m.jsx)(o,{id:`tasks`,title:`Tasks`,tier:`above`,defaultRect:{left:360,top:50,width:260,height:170},children:(0,m.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Always on top.`})})]})}),(0,m.jsx)(_,{defaultOpen:!0,className:`mt-2`})]})}var x=`import type { ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"
import { WindowsDevtools } from "@kitora/windows/devtools"

// The devtools panel (W140): every window's state, zone, frame, z-index, tier and flags in paint order (top
// first), the MRU order and the keyboard mode; tick "snap zones" to outline them over the desktop. The
// panel's code loads on first open through a dynamic import from the separate \`@kitora/windows/devtools\`
// entry, so a production bundle carries none of it: render it only in development.

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

export function DesktopWithDevtools() {
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[300px] overflow-hidden" role="region" aria-label="Devtools desktop">
          <Window id="notes" title="Notes" defaultRect={{ left: 24, top: 24, width: 300, height: 180 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Drag me to an edge.</p>
          </Window>
          <Window id="tasks" title="Tasks" tier="above" defaultRect={{ left: 360, top: 50, width: 260, height: 170 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Always on top.</p>
          </Window>
        </Desktop>
      </ScreenFrame>
      <WindowsDevtools defaultOpen className="mt-2" />
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./devtools-BDMy_0wJ.js`),[]));function S(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{title:`Devtools`,children:`A read-only panel over one desktop: drag, snap or minimise a window and watch its row change. Tick “snap zones” to see where a drag would land.`}),(0,m.jsx)(f,{n:1,title:`Window devtools`,blurb:`Rows in paint order, top first; MRU below; the zones drawn over the desktop.`,code:x,children:(0,m.jsx)(`div`,{"data-testid":`devtools-desktop`,children:(0,m.jsx)(b,{})})})]})}export{S as component};