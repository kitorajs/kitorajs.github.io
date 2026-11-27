import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./minus-CJTGd-IY.js";import{t as r}from"./square-B9UpastD.js";import{Ec as i,Ni as a,Si as o,Uc as s,zc as c}from"./index-BZuUy872.js";import{n as l,t as u}from"./hooks-BsnxIcZj.js";import{n as d,r as f,t as p}from"./desktop-Cf2asQJd.js";import{S as m,c as h,d as g,f as _,g as v,h as y,l as b,m as x,o as S,s as C,t as w,u as T,v as E,w as D,y as O}from"./windows-styles-MyHmEdOT.js";import"./kit-gallery-BBavj2rC.js";import{t as k}from"./example-B67lLz1F.js";var A=c(),j=[{name:`macOS`,chrome:C},{name:`Windows 11`,chrome:_},{name:`Neutral`,chrome:b},{name:`Material`,chrome:h},{name:`GNOME`,chrome:S},{name:`Retro`,chrome:T},{name:`Terminal`,chrome:g}];function M(){return(0,A.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-3`,children:j.map(({name:e,chrome:t})=>(0,A.jsxs)(E,{chrome:t,mobile:null,children:[(0,A.jsx)(w,{}),(0,A.jsx)(p,{className:`isolate h-[190px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`${e} chrome desktop`,children:(0,A.jsx)(d,{title:e,defaultRect:{left:16,top:16,width:280,height:140},children:(0,A.jsxs)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:[`The `,e,` chrome.`]})})})]},e))})}var N=`import { Desktop, gnomeChrome, macChrome, materialChrome, neutralChrome, retroChrome, terminalChrome, Window, WindowsProvider, WindowsStyles, windowsChrome, type WindowChrome } from "@kitora/windows"

// The seven chrome presets: pass one to the provider (or to a single window) and the title bar, buttons
// and frame follow it. Colours come from --wk-* variables, so each also works in dark mode.

const PRESETS = [
  { name: "macOS", chrome: macChrome },
  { name: "Windows 11", chrome: windowsChrome },
  { name: "Neutral", chrome: neutralChrome },
  { name: "Material", chrome: materialChrome },
  { name: "GNOME", chrome: gnomeChrome },
  { name: "Retro", chrome: retroChrome },
  { name: "Terminal", chrome: terminalChrome },
] as const satisfies readonly { readonly name: string; readonly chrome: WindowChrome }[]

export function ChromePresets() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {PRESETS.map(({ name, chrome }) => (
        <WindowsProvider key={name} chrome={chrome} mobile={null}>
          <WindowsStyles />
          <Desktop className="isolate h-[190px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label={\`\${name} chrome desktop\`}>
            <Window title={name} defaultRect={{ left: 16, top: 16, width: 280, height: 140 }}>
              <p className="p-3 text-[12px] text-muted-foreground">The {name} chrome.</p>
            </Window>
          </Desktop>
        </WindowsProvider>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>i(()=>import(`./chrome-presets-CM6YnPWl.js`),[]));var P=`grid size-6 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground`,F={name:`menu`,className:`flex flex-col overflow-hidden rounded-lg border bg-card text-[12px] shadow-lg`,render:({children:e})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(v,{className:`flex h-8 shrink-0 items-center gap-1 border-b px-1`,children:[(0,A.jsx)(y,{className:P,children:(0,A.jsx)(a,{className:`size-3.5`,"aria-hidden":`true`})}),(0,A.jsx)(D,{className:`flex-1 truncate font-medium`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-0.5`,"data-window-no-drag":``,children:[(0,A.jsx)(m,{action:`minimize`,className:P,children:(0,A.jsx)(n,{className:`size-3.5`,"aria-hidden":`true`})}),(0,A.jsx)(x,{variant:`windows`,className:P,children:(0,A.jsx)(r,{className:`size-3`,"aria-hidden":`true`})}),(0,A.jsx)(m,{action:`close`,className:P,children:(0,A.jsx)(o,{className:`size-3.5`,"aria-hidden":`true`})})]})]}),(0,A.jsx)(`div`,{className:`min-h-0 flex-1 p-3 text-muted-foreground`,children:e})]})};function I(){return(0,A.jsxs)(E,{chrome:F,mobile:null,children:[(0,A.jsx)(w,{}),(0,A.jsx)(p,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`System menu desktop`,children:(0,A.jsx)(d,{title:`Report.txt`,defaultRect:{left:40,top:30,width:320,height:160},children:`Click the app icon or right-click the title bar for the system menu; rest on the square for snap layouts.`})})]})}var L=`import { AppWindow, Minus, Square, X } from "lucide-react"
import { Desktop, SnapMaximizeButton, SystemMenuButton, SystemMenuTitleBar, Window, WindowControl, WindowsProvider, WindowsStyles, WindowTitle, type WindowChrome } from "@kitora/windows"

// A chrome of your own that keeps the preset behaviours: SystemMenuTitleBar opens the system menu on
// right-click (and still drags and double-clicks), SystemMenuButton opens the same menu from the app
// icon, and SnapMaximizeButton shows the snap layouts flyout on hover or ArrowDown.
const BUTTON = "grid size-6 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground"

const menuChrome: WindowChrome = {
  name: "menu",
  className: "flex flex-col overflow-hidden rounded-lg border bg-card text-[12px] shadow-lg",
  render: ({ children }) => (
    <>
      <SystemMenuTitleBar className="flex h-8 shrink-0 items-center gap-1 border-b px-1">
        <SystemMenuButton className={BUTTON}>
          <AppWindow className="size-3.5" aria-hidden="true" />
        </SystemMenuButton>
        <WindowTitle className="flex-1 truncate font-medium" />
        <div className="flex items-center gap-0.5" data-window-no-drag="">
          <WindowControl action="minimize" className={BUTTON}>
            <Minus className="size-3.5" aria-hidden="true" />
          </WindowControl>
          <SnapMaximizeButton variant="windows" className={BUTTON}>
            <Square className="size-3" aria-hidden="true" />
          </SnapMaximizeButton>
          <WindowControl action="close" className={BUTTON}>
            <X className="size-3.5" aria-hidden="true" />
          </WindowControl>
        </div>
      </SystemMenuTitleBar>
      <div className="min-h-0 flex-1 p-3 text-muted-foreground">{children}</div>
    </>
  ),
}

export function MenuChrome() {
  return (
    <WindowsProvider chrome={menuChrome} mobile={null}>
      <WindowsStyles />
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="System menu desktop">
        <Window title="Report.txt" defaultRect={{ left: 40, top: 30, width: 320, height: 160 }}>
          Click the app icon or right-click the title bar for the system menu; rest on the square for snap layouts.
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>i(()=>import(`./menu-chrome-CRlT4R6w.js`),[]));var R=e(s(),1),z=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted`;function B(){let e=O(),[t,n]=(0,R.useState)(`—`),r=async()=>{n(await e.open({title:`Delete notes.txt?`,modal:`app`,rect:{width:280,height:110},content:e=>(0,A.jsxs)(`div`,{className:`flex justify-end gap-2 p-3`,children:[(0,A.jsx)(`button`,{type:`button`,className:z,onClick:()=>void e.close(!1),children:`Cancel`}),(0,A.jsx)(`button`,{type:`button`,className:z,onClick:()=>void e.close(!0),children:`Delete`})]})}).result?`deleted`:`kept`)};return(0,A.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 text-[12px]`,children:[(0,A.jsx)(`button`,{type:`button`,className:z,onClick:()=>void r(),children:`Delete…`}),(0,A.jsxs)(`span`,{role:`status`,children:[`notes.txt: `,t]})]})}function V(){return(0,A.jsxs)(E,{chrome:b,mobile:null,children:[(0,A.jsx)(w,{}),(0,A.jsx)(B,{}),(0,A.jsx)(p,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Modal window desktop`,children:(0,A.jsx)(d,{title:`Files`,defaultRect:{left:30,top:20,width:300,height:170},children:(0,A.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Blocked while the modal window is open.`})})})]})}var H=`import { useState } from "react"
import { Desktop, neutralChrome, useWindows, Window, WindowsProvider, WindowsStyles } from "@kitora/windows"

// A modal window: \`modal: "app"\` blocks every other window behind a scrim until it closes.
// Escape cancels it, and focus goes back to the button that opened it.

const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted"

function DeleteButton() {
  const windows = useWindows()
  const [outcome, setOutcome] = useState("—")
  const confirm = async () => {
    const handle = windows.open<boolean>({
      title: "Delete notes.txt?",
      modal: "app",
      rect: { width: 280, height: 110 },
      content: (h) => (
        <div className="flex justify-end gap-2 p-3">
          <button type="button" className={BUTTON} onClick={() => void h.close(false)}>
            Cancel
          </button>
          <button type="button" className={BUTTON} onClick={() => void h.close(true)}>
            Delete
          </button>
        </div>
      ),
    })
    setOutcome((await handle.result) ? "deleted" : "kept")
  }
  return (
    <div className="mb-2 flex items-center gap-2 text-[12px]">
      <button type="button" className={BUTTON} onClick={() => void confirm()}>
        Delete…
      </button>
      <span role="status">notes.txt: {outcome}</span>
    </div>
  )
}

export function ModalWindow() {
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <DeleteButton />
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Modal window desktop">
        <Window title="Files" defaultRect={{ left: 30, top: 20, width: 300, height: 170 }}>
          <p className="p-3 text-[12px] text-muted-foreground">Blocked while the modal window is open.</p>
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>i(()=>import(`./modal-window-AxP4gUxi.js`),[]));var U=[{id:`note-a`,title:`Groceries`,body:`Milk, eggs, coffee.`,left:30,top:20},{id:`note-b`,title:`Ideas`,body:`One window per record in your store.`,left:230,top:56}];function W(){let e=l(),{windows:t}=u(),n=new Set(t.map(e=>e.id));return(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(`div`,{className:`flex gap-1.5`,children:U.map(t=>(0,A.jsxs)(`button`,{type:`button`,className:`h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent`,onClick:()=>e.open({id:t.id,title:t.title,rect:{left:t.left,top:t.top,width:220,height:120},data:{icon:null,app:null}}),children:[`Open `,t.title]},t.id))}),(0,A.jsx)(p,{className:`isolate h-[220px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Window frames desktop`,children:U.filter(e=>n.has(e.id)).map(e=>(0,A.jsx)(f,{id:e.id,chrome:null,className:void 0,children:(0,A.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:e.body})},e.id))})]})}function G(){return(0,A.jsxs)(E,{chrome:b,mobile:null,children:[(0,A.jsx)(w,{}),(0,A.jsx)(W,{})]})}var K=`import { Desktop, neutralChrome, useDesktopSnapshot, useWindowManager, WindowFrame, WindowsProvider, WindowsStyles } from "@kitora/windows"

// WindowFrame is the element <Window> renders: the frame the binding moves and sizes, wearing the chrome.
// Render it yourself when the windows come from your own store: open a window in the manager with your
// record's id, and draw a frame for every one of your records the manager has open. \`chrome={null}\` uses
// the provider's chrome. Closing goes through the manager, so the frame disappears with the window.
interface Note {
  readonly id: string
  readonly title: string
  readonly body: string
  readonly left: number
  readonly top: number
}

const NOTES: readonly Note[] = [
  { id: "note-a", title: "Groceries", body: "Milk, eggs, coffee.", left: 30, top: 20 },
  { id: "note-b", title: "Ideas", body: "One window per record in your store.", left: 230, top: 56 },
]

function NoteDesktop() {
  const manager = useWindowManager()
  const { windows } = useDesktopSnapshot()
  const open = new Set(windows.map((w) => w.id))
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1.5">
        {NOTES.map((note) => (
          <button
            key={note.id}
            type="button"
            className="h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent"
            // Opening an id that is already open focuses it.
            onClick={() => manager.open({ id: note.id, title: note.title, rect: { left: note.left, top: note.top, width: 220, height: 120 }, data: { icon: null, app: null } })}
          >
            Open {note.title}
          </button>
        ))}
      </div>
      <Desktop className="isolate h-[220px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Window frames desktop">
        {NOTES.filter((note) => open.has(note.id)).map((note) => (
          <WindowFrame key={note.id} id={note.id} chrome={null} className={undefined}>
            <p className="p-3 text-[12px] text-muted-foreground">{note.body}</p>
          </WindowFrame>
        ))}
      </Desktop>
    </div>
  )
}

export function OwnWindowFrames() {
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <NoteDesktop />
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>i(()=>import(`./window-frame-O3MLum-N.js`),[]));function q(){return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(t,{title:`Modal and chrome`,children:`A modal window that blocks the others until it is answered, the same window in each chrome preset, a chrome of your own with the system menu, and frames drawn from your own store.`}),(0,A.jsx)(k,{n:1,title:`A modal window`,blurb:`modal: "app" puts a scrim over every other window; Escape cancels.`,code:H,children:(0,A.jsx)(V,{})}),(0,A.jsx)(k,{n:2,title:`Chrome presets`,blurb:`macOS, Windows 11, neutral, Material, GNOME, Retro and Terminal: one prop on the provider.`,code:N,children:(0,A.jsx)(M,{})}),(0,A.jsx)(k,{n:3,title:`Your own chrome with the system menu`,blurb:`SystemMenuTitleBar (right-click menu), SystemMenuButton (app icon menu) and SnapMaximizeButton (snap layouts flyout) inside a chrome you draw.`,code:L,children:(0,A.jsx)(I,{})}),(0,A.jsx)(k,{n:4,title:`Window frames from your own store`,blurb:`WindowFrame is what Window renders: open a window in the manager and draw its frame yourself, one per record.`,code:K,children:(0,A.jsx)(G,{})})]})}export{q as component};