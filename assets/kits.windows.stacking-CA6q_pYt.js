import{s as e}from"./kit-docs-CvNs0WqT.js";import{r as t}from"./confirm-DhL4LzKS.js";import{Cc as n,Ic as r,ti as i}from"./index-9y5uwRd3.js";import{s as a}from"./hooks-Dc41GNg3.js";import{n as o,t as s}from"./desktop-BeKLskx2.js";import{l as c,t as l,v as u,y as d}from"./windows-styles-BhYIhkUl.js";import{t as f}from"./motion-CnGJFDxj.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=r(),h=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function g({children:e}){let{surface:t}=a();return(0,m.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${h}`,children:e})}function _(){return(0,m.jsxs)(u,{chrome:c,children:[(0,m.jsx)(l,{}),(0,m.jsx)(f,{}),(0,m.jsx)(g,{children:(0,m.jsxs)(s,{className:`h-[320px] overflow-hidden`,role:`region`,"aria-label":`Paint bands desktop`,children:[(0,m.jsx)(o,{title:`Document`,defaultRect:{left:24,top:24,width:380,height:220},children:(0,m.jsxs)(`div`,{className:`grid gap-2 p-3 text-[12px]`,children:[(0,m.jsx)(`p`,{className:`text-muted-foreground`,children:`Dialogs opened from here paint above every window.`}),(0,m.jsx)(`div`,{children:(0,m.jsx)(t,{title:`Delete this file?`,description:`An overlay dialog opened from inside a window: it paints above every window.`,destructive:!0,confirmLabel:`Delete`,trigger:(0,m.jsx)(i,{size:`sm`,variant:`destructive`,children:`Delete…`})})})]})}),(0,m.jsx)(o,{title:`Inspector`,tier:`above`,defaultRect:{left:440,top:60,width:260,height:200},children:(0,m.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Always on top, yet below every overlay.`})})]})})]})}var v=`import type { ReactNode } from "react"
import { Confirm } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Paint bands (W63). The desktop is one stacking context in the overlay kit's "windows" band (z 40), below
// the "overlay" band (z 50): a dialog or menu opened from inside a window paints above every window, the
// always-on-top Inspector included, and toasts and tooltips stay above that.

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

export function PaintBandsDesktop() {
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[320px] overflow-hidden" role="region" aria-label="Paint bands desktop">
          <Window title="Document" defaultRect={{ left: 24, top: 24, width: 380, height: 220 }}>
            <div className="grid gap-2 p-3 text-[12px]">
              <p className="text-muted-foreground">Dialogs opened from here paint above every window.</p>
              <div>
                <Confirm
                  title="Delete this file?"
                  description="An overlay dialog opened from inside a window: it paints above every window."
                  destructive
                  confirmLabel="Delete"
                  trigger={
                    <Button size="sm" variant="destructive">
                      Delete…
                    </Button>
                  }
                />
              </div>
            </div>
          </Window>
          <Window title="Inspector" tier="above" defaultRect={{ left: 440, top: 60, width: 260, height: 200 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Always on top, yet below every overlay.</p>
          </Window>
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>n(()=>import(`./stacking-bands-B6d_uYxn.js`),[]));var y=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,b=`document`,x=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function S({children:e}){let{surface:t}=a();return(0,m.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${x}`,children:e})}function C(){let e=d();return(0,m.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-t bg-background/80 px-2 text-[12px] backdrop-blur`,children:[(0,m.jsx)(`button`,{type:`button`,className:y,onClick:()=>e.open({title:`Discard changes?`,modal:`app`,rect:{width:320,height:170},content:e=>(0,m.jsxs)(`div`,{className:`grid gap-3 p-3 text-[12px]`,children:[(0,m.jsx)(`p`,{className:`text-muted-foreground`,children:`The other windows are blocked until you answer. Escape cancels.`}),(0,m.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,m.jsx)(`button`,{type:`button`,className:y,onClick:()=>void e.close(!1),children:`Cancel`}),(0,m.jsx)(`button`,{type:`button`,className:y,onClick:()=>void e.close(!0),children:`Discard`})]})]})}),children:`Open app-modal window`}),(0,m.jsx)(`button`,{type:`button`,className:y,onClick:()=>e.open({title:`Save as`,owner:b,modal:`owner`,rect:{width:280,height:150},content:(0,m.jsxs)(`div`,{className:`grid gap-2 p-3 text-[12px]`,children:[(0,m.jsxs)(`label`,{className:`grid gap-1`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`File name`}),(0,m.jsx)(`input`,{className:`h-7 rounded-md border bg-background px-2`,defaultValue:`report.txt`})]}),(0,m.jsx)(`p`,{className:`text-muted-foreground`,children:`Only “Document” is blocked; “Inspector” still works.`})]})}),children:`Open sheet on Document`})]})}function w(){return(0,m.jsxs)(u,{chrome:c,children:[(0,m.jsx)(l,{}),(0,m.jsx)(f,{}),(0,m.jsxs)(S,{children:[(0,m.jsxs)(s,{className:`h-[380px] overflow-hidden`,role:`region`,"aria-label":`Modal windows desktop`,children:[(0,m.jsx)(o,{id:b,title:`Document`,defaultRect:{left:24,top:24,width:380,height:250},children:(0,m.jsx)(`div`,{className:`p-3 text-[12px]`,children:(0,m.jsx)(`textarea`,{"aria-label":`Document text`,className:`h-20 w-full rounded-md border bg-background p-2`,defaultValue:`Open the sheet: only this window is blocked.`})})}),(0,m.jsx)(o,{title:`Inspector`,tier:`above`,defaultRect:{left:440,top:60,width:260,height:200},children:(0,m.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Always on top, yet below an app-modal window.`})})]}),(0,m.jsx)(C,{})]})]})}var T=`import type { ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindows, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Modal windows (W58, W59, W95). An app-modal window blocks every other window behind a scrim until it
// closes; a window-modal sheet blocks only its owner. Both are entries in the app's overlay stack: Escape
// closes the one on top, and focus goes into the window when it opens and back to the button that opened it.

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

/** The id the sheet names as its owner. */
const DOCUMENT_ID = "document"

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

function Launchers() {
  const api = useWindows()
  // app-modal: open() returns a handle whose result settles with the value given to close()
  const askDiscard = () =>
    api.open<boolean>({
      title: "Discard changes?",
      modal: "app",
      rect: { width: 320, height: 170 },
      content: (h) => (
        <div className="grid gap-3 p-3 text-[12px]">
          <p className="text-muted-foreground">The other windows are blocked until you answer. Escape cancels.</p>
          <div className="flex justify-end gap-2">
            <button type="button" className={BUTTON} onClick={() => void h.close(false)}>
              Cancel
            </button>
            <button type="button" className={BUTTON} onClick={() => void h.close(true)}>
              Discard
            </button>
          </div>
        </div>
      ),
    })
  // window-modal: a sheet that blocks only its owner
  const saveAs = () =>
    api.open({
      title: "Save as",
      owner: DOCUMENT_ID,
      modal: "owner",
      rect: { width: 280, height: 150 },
      content: (
        <div className="grid gap-2 p-3 text-[12px]">
          <label className="grid gap-1">
            <span className="text-muted-foreground">File name</span>
            <input className="h-7 rounded-md border bg-background px-2" defaultValue="report.txt" />
          </label>
          <p className="text-muted-foreground">Only “Document” is blocked; “Inspector” still works.</p>
        </div>
      ),
    })
  return (
    <div className="flex h-9 shrink-0 items-center gap-2 border-t bg-background/80 px-2 text-[12px] backdrop-blur">
      <button type="button" className={BUTTON} onClick={askDiscard}>
        Open app-modal window
      </button>
      <button type="button" className={BUTTON} onClick={saveAs}>
        Open sheet on Document
      </button>
    </div>
  )
}

export function ModalWindowsDesktop() {
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[380px] overflow-hidden" role="region" aria-label="Modal windows desktop">
          <Window id={DOCUMENT_ID} title="Document" defaultRect={{ left: 24, top: 24, width: 380, height: 250 }}>
            <div className="p-3 text-[12px]">
              <textarea aria-label="Document text" className="h-20 w-full rounded-md border bg-background p-2" defaultValue="Open the sheet: only this window is blocked." />
            </div>
          </Window>
          <Window title="Inspector" tier="above" defaultRect={{ left: 440, top: 60, width: 260, height: 200 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Always on top, yet below an app-modal window.</p>
          </Window>
        </Desktop>
        <Launchers />
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./stacking-modal-DL8dJ-4T.js`),[]));function E(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e,{title:`Stacking and modality`,children:`Modal windows join the overlay kit's stack, so Escape, focus return and page shortcuts behave like every other dialog in the app. The desktop paints in its own band below overlays, so menus and dialogs opened from a window are never covered by another window.`}),(0,m.jsx)(p,{n:1,title:`Modal windows`,blurb:`App-modal blocks every other window behind a scrim; a window-modal sheet blocks only its owner. Escape closes the modal one; focus goes back to the launcher.`,code:T,children:(0,m.jsx)(`div`,{"data-testid":`stacking-desktop`,children:(0,m.jsx)(w,{})})}),(0,m.jsx)(p,{n:2,title:`Paint bands`,blurb:`Open the dialog from the Document window: it covers the always-on-top Inspector too.`,code:v,children:(0,m.jsx)(`div`,{"data-testid":`bands-desktop`,children:(0,m.jsx)(_,{})})})]})}export{E as component};