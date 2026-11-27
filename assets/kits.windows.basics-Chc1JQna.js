import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{n as a,t as o}from"./desktop-Cf2asQJd.js";import{l as s,t as c,v as l,y as u}from"./windows-styles-MyHmEdOT.js";import"./kit-gallery-BBavj2rC.js";import{t as d}from"./example-B67lLz1F.js";var f=e(r(),1),p=i(),m={left:40,top:30,width:280,height:150},h=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted`;function g(){let[e,t]=(0,f.useState)(m);return(0,p.jsxs)(l,{chrome:s,mobile:null,children:[(0,p.jsx)(c,{}),(0,p.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-2 text-[12px]`,children:[(0,p.jsx)(`button`,{type:`button`,className:h,onClick:()=>t(e=>({...e,left:e.left+40})),children:`Move right`}),(0,p.jsx)(`button`,{type:`button`,className:h,onClick:()=>t(e=>({...e,width:e.width+40})),children:`Wider`}),(0,p.jsx)(`button`,{type:`button`,className:h,onClick:()=>t(m),children:`Reset`}),(0,p.jsxs)(`output`,{className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[Math.round(e.left),`, `,Math.round(e.top),` · `,Math.round(e.width),` × `,Math.round(e.height)]})]}),(0,p.jsx)(o,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Controlled window desktop`,children:(0,p.jsx)(a,{title:`Controlled`,rect:e,onRectChange:t,children:(0,p.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Drag or resize me: the readout above follows.`})})})]})}var _=`import { useState } from "react"
import { Desktop, neutralChrome, Window, WindowsProvider, WindowsStyles, type Rect } from "@kitora/windows"

// A controlled window: its position and size come from state, and every drag or resize comes back
// through onRectChange. The buttons change the state; the window follows.

const START: Rect = { left: 40, top: 30, width: 280, height: 150 }
const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted"

export function ControlledRect() {
  const [rect, setRect] = useState<Rect>(START)
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <div className="mb-2 flex flex-wrap items-center gap-2 text-[12px]">
        <button type="button" className={BUTTON} onClick={() => setRect((r) => ({ ...r, left: r.left + 40 }))}>
          Move right
        </button>
        <button type="button" className={BUTTON} onClick={() => setRect((r) => ({ ...r, width: r.width + 40 }))}>
          Wider
        </button>
        <button type="button" className={BUTTON} onClick={() => setRect(START)}>
          Reset
        </button>
        <output className="font-mono text-[11px] text-muted-foreground tabular-nums">
          {Math.round(rect.left)}, {Math.round(rect.top)} · {Math.round(rect.width)} × {Math.round(rect.height)}
        </output>
      </div>
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Controlled window desktop">
        <Window title="Controlled" rect={rect} onRectChange={setRect}>
          <p className="p-3 text-[12px] text-muted-foreground">Drag or resize me: the readout above follows.</p>
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./controlled-rect-U2HTFUAC.js`),[]));function v(){return(0,p.jsxs)(l,{chrome:s,mobile:null,children:[(0,p.jsx)(c,{}),(0,p.jsx)(o,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`One window desktop`,children:(0,p.jsx)(a,{title:`Hello`,defaultRect:{left:40,top:30,width:300,height:160},children:(0,p.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Drag the title bar, resize from any edge or corner, double-click the title to maximise.`})})})]})}var y=`import { Desktop, neutralChrome, Window, WindowsProvider, WindowsStyles } from "@kitora/windows"

// The smallest setup: a provider with a chrome, the kit's stylesheet, a desktop and one <Window>.
// A mounted <Window> is an open window. \`isolate\` keeps the windows' z-index inside the desktop box,
// and \`mobile={null}\` keeps them floating on a phone too (the Mobile fallback page shows the other way).

export function OneWindow() {
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="One window desktop">
        <Window title="Hello" defaultRect={{ left: 40, top: 30, width: 300, height: 160 }}>
          <p className="p-3 text-[12px] text-muted-foreground">Drag the title bar, resize from any edge or corner, double-click the title to maximise.</p>
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./one-window-BW8zF-i6.js`),[]));var b=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted`,x=[`Red`,`Green`,`Blue`];function S(){let e=u(),[t,n]=(0,f.useState)(`nothing yet`),r=async()=>{n(await e.open({title:`Pick a colour`,rect:{left:40,top:30,width:260,height:110},content:e=>(0,p.jsx)(`div`,{className:`flex gap-2 p-3`,children:x.map(t=>(0,p.jsx)(`button`,{type:`button`,className:b,onClick:()=>void e.close(t),children:t},t))})}).result??`closed without an answer`)};return(0,p.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 text-[12px]`,children:[(0,p.jsx)(`button`,{type:`button`,className:b,onClick:()=>void r(),children:`Open window`}),(0,p.jsxs)(`span`,{role:`status`,children:[`Answer: `,t]})]})}function C(){return(0,p.jsxs)(l,{chrome:s,mobile:null,children:[(0,p.jsx)(c,{}),(0,p.jsx)(S,{}),(0,p.jsx)(o,{className:`isolate h-[200px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Open and await desktop`})]})}var w=`import { useState } from "react"
import { Desktop, neutralChrome, useWindows, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Open a window from a click and await its answer: \`result\` settles with the value given to close(),
// or undefined when the window is closed another way (its close button, Escape).

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted"
const COLOURS = ["Red", "Green", "Blue"] as const

function AskButton() {
  const windows = useWindows()
  const [answer, setAnswer] = useState("nothing yet")
  const ask = async () => {
    const handle = windows.open<string>({
      title: "Pick a colour",
      rect: { left: 40, top: 30, width: 260, height: 110 },
      content: (h) => (
        <div className="flex gap-2 p-3">
          {COLOURS.map((colour) => (
            <button key={colour} type="button" className={BUTTON} onClick={() => void h.close(colour)}>
              {colour}
            </button>
          ))}
        </div>
      ),
    })
    setAnswer((await handle.result) ?? "closed without an answer")
  }
  return (
    <div className="mb-2 flex items-center gap-2 text-[12px]">
      <button type="button" className={BUTTON} onClick={() => void ask()}>
        Open window
      </button>
      <span role="status">Answer: {answer}</span>
    </div>
  )
}

export function OpenAndAwait() {
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <AskButton />
      <Desktop className="isolate h-[200px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Open and await desktop" />
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./open-and-await-Ce-XEFSE.js`),[]));var T=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium`,E=[{state:`minimized`,label:`Minimise`},{state:`maximized`,label:`Maximise`},{state:`normal`,label:`Restore`}];function D(){let[e,t]=(0,f.useState)(`normal`);return(0,p.jsxs)(l,{chrome:s,mobile:null,children:[(0,p.jsx)(c,{}),(0,p.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 text-[12px]`,children:[E.map(n=>(0,p.jsx)(`button`,{type:`button`,className:T,"aria-pressed":e===n.state,onClick:()=>t(n.state),children:n.label},n.state)),(0,p.jsxs)(`output`,{className:`font-mono text-[11px] text-muted-foreground`,children:[`state=`,e]})]}),(0,p.jsx)(o,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Window state desktop`,children:(0,p.jsx)(a,{title:`Report`,state:e,onStateChange:e=>t(e),defaultRect:{left:40,top:30,width:280,height:150},children:(0,p.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Use my title-bar buttons or the ones above.`})})})]})}var O=`import { useState } from "react"
import { Desktop, neutralChrome, Window, WindowsProvider, WindowsStyles, type WindowState } from "@kitora/windows"

// Minimise, maximise and restore: the title-bar buttons do it, and so does a controlled \`state\`.
// Either way onStateChange reports the new state, so the buttons below and the title bar stay in step.
// Restore steps back one state, like an OS: maximise, minimise, restore lands on maximised, then normal.

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium"
const STATES = [
  { state: "minimized", label: "Minimise" },
  { state: "maximized", label: "Maximise" },
  { state: "normal", label: "Restore" },
] as const satisfies readonly { readonly state: WindowState; readonly label: string }[]

export function WindowStateButtons() {
  const [state, setState] = useState<WindowState>("normal")
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <div className="mb-2 flex items-center gap-2 text-[12px]">
        {STATES.map((s) => (
          <button key={s.state} type="button" className={BUTTON} aria-pressed={state === s.state} onClick={() => setState(s.state)}>
            {s.label}
          </button>
        ))}
        <output className="font-mono text-[11px] text-muted-foreground">state={state}</output>
      </div>
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Window state desktop">
        <Window title="Report" state={state} onStateChange={(to) => setState(to)} defaultRect={{ left: 40, top: 30, width: 280, height: 150 }}>
          <p className="p-3 text-[12px] text-muted-foreground">Use my title-bar buttons or the ones above.</p>
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>n(()=>import(`./window-state-Cn905nYM.js`),[]));function k(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`A window`,children:`The building blocks one at a time, each the smallest file that works: copy the Code tab into an app that has the kit installed.`}),(0,p.jsx)(d,{n:1,title:`One window`,blurb:`A provider, the stylesheet, a desktop and one declarative window.`,code:y,children:(0,p.jsx)(v,{})}),(0,p.jsx)(d,{n:2,title:`Open from a button and await the result`,blurb:`useWindows().open() returns a handle; its result settles with the value the window closed with.`,code:w,children:(0,p.jsx)(C,{})}),(0,p.jsx)(d,{n:3,title:`Controlled position and size`,blurb:`rect from state, changes back through onRectChange.`,code:_,children:(0,p.jsx)(g,{})}),(0,p.jsx)(d,{n:4,title:`Minimise, maximise and restore`,blurb:`The title-bar buttons and a controlled state, kept in step by onStateChange.`,code:O,children:(0,p.jsx)(D,{})})]})}export{k as component};