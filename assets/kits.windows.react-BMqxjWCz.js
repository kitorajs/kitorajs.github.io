import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{s as a}from"./hooks-CYtIGFjN.js";import{n as o,t as s}from"./desktop-y5pVQXm-.js";import{l as c,t as l,v as u,y as d}from"./windows-styles-qDdNe6P6.js";import{t as f}from"./motion-D2NZJIHG.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";var m=e(n(),1),h=i(),g=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,_=`h-7 w-full rounded-md border bg-background px-2 text-[12px]`,v=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function y({children:e}){let{surface:t}=a();return(0,h.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${v}`,children:e})}function b(){let[e,t]=(0,m.useState)(!0),[n,r]=(0,m.useState)({left:330,top:30,width:300,height:190}),[i,a]=(0,m.useState)(`normal`),[d,p]=(0,m.useState)(0);return(0,h.jsxs)(u,{chrome:c,children:[(0,h.jsx)(l,{}),(0,h.jsx)(f,{}),(0,h.jsxs)(y,{children:[(0,h.jsxs)(s,{className:`h-[300px] overflow-hidden`,role:`region`,"aria-label":`Declarative windows desktop`,children:[(0,h.jsx)(o,{title:`Uncontrolled`,defaultRect:{left:20,top:30,width:290,height:190},children:(0,h.jsxs)(`div`,{className:`grid gap-2 p-3`,children:[(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`Type here, click the other window, then click back on this title bar: the caret returns to this field.`}),(0,h.jsx)(`input`,{"aria-label":`Focus memory field`,className:_,defaultValue:`caret comes back here`})]})}),(0,h.jsx)(o,{title:`Controlled`,open:e,onOpenChange:e=>{t(e),e||p(e=>e+1)},rect:n,onRectChange:r,onStateChange:e=>a(e),children:(0,h.jsx)(`p`,{className:`p-3 text-muted-foreground`,children:`Drag or resize me: the readout below follows. Close me from the title bar and the parent hears about it.`})})]}),(0,h.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-t bg-background/80 px-2 text-[12px] backdrop-blur`,children:[(0,h.jsxs)(`button`,{type:`button`,className:g,onClick:()=>t(e=>!e),children:[e?`Close`:`Open`,` controlled`]}),(0,h.jsx)(`button`,{type:`button`,className:g,onClick:()=>r(e=>({...e,left:e.left===330?200:330})),children:`Move from props`}),(0,h.jsxs)(`output`,{className:`ms-auto font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`open=`,String(e),` state=`,i,` rect=`,Math.round(n.left),`,`,Math.round(n.top),` `,Math.round(n.width),`×`,Math.round(n.height),` closed×`,d]})]})]})]})}var x=`import { useState, type ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles, type Rect, type WindowState } from "@kitora/windows"

// Declarative windows (W128, W62): a mounted <Window> is an open window. One is uncontrolled (starts at
// defaultRect and keeps its own state); the other is controlled: open, rect and state follow props, and
// changes come back through callbacks. Content stays mounted while minimised, so typed text survives, and
// focus memory puts the caret back where it was when a window is focused again.

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const FIELD = "h-7 w-full rounded-md border bg-background px-2 text-[12px]"

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

export function DeclarativeWindows() {
  const [open, setOpen] = useState(true)
  const [rect, setRect] = useState<Rect>({ left: 330, top: 30, width: 300, height: 190 })
  const [state, setState] = useState<WindowState>("normal")
  const [closed, setClosed] = useState(0)
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[300px] overflow-hidden" role="region" aria-label="Declarative windows desktop">
          <Window title="Uncontrolled" defaultRect={{ left: 20, top: 30, width: 290, height: 190 }}>
            <div className="grid gap-2 p-3">
              <p className="text-muted-foreground">Type here, click the other window, then click back on this title bar: the caret returns to this field.</p>
              <input aria-label="Focus memory field" className={FIELD} defaultValue="caret comes back here" />
            </div>
          </Window>
          <Window
            title="Controlled"
            open={open}
            onOpenChange={(next) => {
              setOpen(next)
              if (!next) setClosed((n) => n + 1)
            }}
            rect={rect}
            onRectChange={setRect}
            onStateChange={(to) => setState(to)}
          >
            <p className="p-3 text-muted-foreground">Drag or resize me: the readout below follows. Close me from the title bar and the parent hears about it.</p>
          </Window>
        </Desktop>
        <div className="flex h-9 shrink-0 items-center gap-2 border-t bg-background/80 px-2 text-[12px] backdrop-blur">
          <button type="button" className={BUTTON} onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Open"} controlled
          </button>
          <button type="button" className={BUTTON} onClick={() => setRect((r) => ({ ...r, left: r.left === 330 ? 200 : 330 }))}>
            Move from props
          </button>
          <output className="ms-auto font-mono text-[11px] text-muted-foreground tabular-nums">
            open={String(open)} state={state} rect={Math.round(rect.left)},{Math.round(rect.top)} {Math.round(rect.width)}×{Math.round(rect.height)} closed×{closed}
          </output>
        </div>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./react-declarative-3EJaoEaZ.js`),[]));var S=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,C=`h-7 w-full rounded-md border bg-background px-2 text-[12px]`,w=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function T({children:e}){let{surface:t}=a();return(0,h.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${w}`,children:e})}function E({onDone:e,onCancel:t}){let[n,r]=(0,m.useState)(`Quarterly report`);return(0,h.jsxs)(`form`,{className:`grid gap-2 p-3 text-[12px]`,onSubmit:t=>{t.preventDefault(),e(n)},children:[(0,h.jsxs)(`label`,{className:`grid gap-1`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`New name`}),(0,h.jsx)(`input`,{"aria-label":`New name`,className:C,value:n,onChange:e=>r(e.target.value)})]}),(0,h.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,h.jsx)(`button`,{type:`button`,className:S,onClick:t,children:`Cancel`}),(0,h.jsx)(`button`,{type:`submit`,className:`h-7 rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground`,children:`Rename`})]})]})}function D(){let e=document.createElement(`canvas`);e.width=320,e.height=180,e.style.width=`100%`,e.style.height=`100%`,e.setAttribute(`aria-label`,`Gradient drawn by a plain DOM canvas`),e.setAttribute(`role`,`img`);let t=e.getContext(`2d`);if(t){let e=t.createLinearGradient(0,0,320,180);e.addColorStop(0,`#22d3ee`),e.addColorStop(1,`#a855f7`),t.fillStyle=e,t.fillRect(0,0,320,180),t.fillStyle=`white`,t.font=`600 16px system-ui`,t.fillText(`A plain <canvas> element`,20,96)}return e}function O(){let e=d(),[t,n]=(0,m.useState)(`nothing yet`),r=async()=>{n(`waiting…`);let t=await e.open({title:`Rename`,rect:{width:280,height:160},content:e=>(0,h.jsx)(E,{onDone:t=>void e.close(t),onCancel:()=>void e.close()})}).result;n(t===void 0?`cancelled`:`renamed to “${t}”`)};return(0,h.jsxs)(`div`,{className:`absolute start-3 top-3 flex flex-wrap gap-1.5`,style:{zIndex:0},children:[(0,h.jsx)(`button`,{type:`button`,className:S,onClick:()=>void r(),children:`Rename… (awaits a result)`}),(0,h.jsx)(`button`,{type:`button`,className:S,onClick:()=>e.open({key:`url`,title:`Kits (URL)`,url:`/kits`,rect:{left:300,top:50,width:420,height:260}}),children:`Open a URL`}),(0,h.jsx)(`button`,{type:`button`,className:S,onClick:()=>e.open({title:`Canvas (DOM element)`,element:D(),rect:{width:340,height:220}}),children:`Open a DOM element`}),(0,h.jsxs)(`span`,{className:`self-center rounded bg-background/80 px-2 py-1 text-[12px]`,role:`status`,children:[`Result: `,t]})]})}function k(){return(0,h.jsxs)(u,{chrome:c,children:[(0,h.jsx)(l,{}),(0,h.jsx)(f,{}),(0,h.jsx)(T,{children:(0,h.jsx)(s,{className:`h-[340px] overflow-hidden`,role:`region`,"aria-label":`Imperative windows desktop`,children:(0,h.jsx)(O,{})})})]})}var A=`import { useState, type ReactNode } from "react"
import { Desktop, DESKTOP_SURFACE, neutralChrome, useWindows, useWindowsContext, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Imperative windows (W129–W131, W109, W111): useWindows().open() from an event handler returns a handle
// to focus, minimise or close the window, and await its result, like a dialog that does not block the
// page. Content can be a React node, a URL (an iframe) or a DOM element, which is moved in, never re-created.

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const FIELD = "h-7 w-full rounded-md border bg-background px-2 text-[12px]"

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

function RenameForm({ onDone, onCancel }: { onDone: (name: string) => void; onCancel: () => void }) {
  const [name, setName] = useState("Quarterly report")
  return (
    <form
      className="grid gap-2 p-3 text-[12px]"
      onSubmit={(e) => {
        e.preventDefault()
        onDone(name)
      }}
    >
      <label className="grid gap-1">
        <span className="font-medium">New name</span>
        <input aria-label="New name" className={FIELD} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className="flex justify-end gap-2">
        <button type="button" className={BUTTON} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="h-7 rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground">
          Rename
        </button>
      </div>
    </form>
  )
}

/** A canvas element made outside React, handed to a window as-is. */
function makeCanvas(): HTMLElement {
  const canvas = document.createElement("canvas")
  canvas.width = 320
  canvas.height = 180
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.setAttribute("aria-label", "Gradient drawn by a plain DOM canvas")
  canvas.setAttribute("role", "img")
  const g = canvas.getContext("2d")
  if (g) {
    const grad = g.createLinearGradient(0, 0, 320, 180)
    grad.addColorStop(0, "#22d3ee")
    grad.addColorStop(1, "#a855f7")
    g.fillStyle = grad
    g.fillRect(0, 0, 320, 180)
    g.fillStyle = "white"
    g.font = "600 16px system-ui"
    g.fillText("A plain <canvas> element", 20, 96)
  }
  return canvas
}

function Launchers() {
  const windows = useWindows()
  const [result, setResult] = useState("nothing yet")
  const rename = async () => {
    setResult("waiting…")
    const handle = windows.open<string>({
      title: "Rename",
      rect: { width: 280, height: 160 },
      content: (h) => <RenameForm onDone={(name) => void h.close(name)} onCancel={() => void h.close()} />,
    })
    const value = await handle.result // the value given to close(), or undefined
    setResult(value === undefined ? "cancelled" : \`renamed to “\${value}”\`)
  }
  return (
    <div className="absolute start-3 top-3 flex flex-wrap gap-1.5" style={{ zIndex: 0 }}>
      <button type="button" className={BUTTON} onClick={() => void rename()}>
        Rename… (awaits a result)
      </button>
      <button type="button" className={BUTTON} onClick={() => windows.open({ key: "url", title: "Kits (URL)", url: "/kits", rect: { left: 300, top: 50, width: 420, height: 260 } })}>
        Open a URL
      </button>
      <button type="button" className={BUTTON} onClick={() => windows.open({ title: "Canvas (DOM element)", element: makeCanvas(), rect: { width: 340, height: 220 } })}>
        Open a DOM element
      </button>
      <span className="self-center rounded bg-background/80 px-2 py-1 text-[12px]" role="status">
        Result: {result}
      </span>
    </div>
  )
}

export function ImperativeWindows() {
  return (
    <WindowsProvider chrome={neutralChrome}>
      <WindowsStyles />
      <WindowMotion />
      <ScreenFrame>
        <Desktop className="h-[340px] overflow-hidden" role="region" aria-label="Imperative windows desktop">
          <Launchers />
        </Desktop>
      </ScreenFrame>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./react-imperative-y75NCDx_.js`),[]));function j(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`React API`,children:`Windows as components or as calls. A mounted Window is an open window; props can control whether it is open, where it is and what state it is in. From an event handler, open a window and await what it closes with, like a dialog that does not block the page.`}),(0,h.jsx)(p,{n:1,title:`Declarative windows`,blurb:`One uncontrolled window and one fully controlled one. Content stays mounted while minimised, so typed text survives.`,code:x,children:(0,h.jsx)(`div`,{"data-testid":`react-declarative`,children:(0,h.jsx)(b,{})})}),(0,h.jsx)(p,{n:2,title:`Imperative windows`,blurb:"open() returns a handle: focus, minimise, close it, and await its result. Content can be a React node, a URL or a DOM element. A URL window renders a plain iframe with no sandbox, so any site works as-is; pass `sandbox` (iframe tokens such as `allow-scripts allow-forms`, or an empty string for every restriction) to lock it down.",code:A,children:(0,h.jsx)(`div`,{"data-testid":`react-imperative`,children:(0,h.jsx)(k,{})})})]})}export{j as component};