import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calendar-B4FHCcg0.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./mail-qXJt5uVa.js";import{Bc as i,Cc as a,Ic as o}from"./index-B9ukmIN1.js";import{i as s}from"./manager-CgZ4YGDg.js";import{t as c}from"./storage-B_0ohaqt.js";import{n as l,t as u}from"./desktop-y5pVQXm-.js";import{f as d,l as f,s as p,t as m,v as h,y as g}from"./windows-styles-qDdNe6P6.js";import{t as _}from"./taskbar-BmlnrGei.js";import{t as v}from"./dock-BJgQOkPs.js";import{t as y}from"./motion-D2NZJIHG.js";import"./kit-gallery-Bph7isB2.js";import{t as b}from"./example-BGnSQG2Y.js";var x=o(),S={top:0,right:0,bottom:84,left:0},C=[{id:`mail`,label:`Mail`,icon:r,tile:`bg-sky-500`},{id:`calendar`,label:`Calendar`,icon:t,tile:`bg-rose-500`}];function w(){let e=g();return(0,x.jsx)(v,{apps:C.map(({id:t,label:n,icon:r,tile:i})=>{let a=(0,x.jsx)(`span`,{className:`grid size-full place-items-center rounded-[24%] ${i}`,children:(0,x.jsx)(r,{className:`size-[60%] text-white`,"aria-hidden":`true`})});return{id:t,label:n,icon:a,launch:()=>e.open({key:t,app:t,title:n,icon:a,rect:{width:260,height:150},content:(0,x.jsx)(`p`,{className:`p-3 text-[12px]`,children:n})})}})})}function T(){return(0,x.jsxs)(h,{chrome:p,mobile:null,children:[(0,x.jsx)(m,{}),(0,x.jsx)(y,{}),(0,x.jsx)(u,{className:`isolate h-[300px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Dock desktop`,insets:S,children:(0,x.jsx)(w,{})})]})}var E=`import { Calendar, Mail, type LucideIcon } from "lucide-react"
import { Desktop, DesktopDock, macChrome, useWindows, WindowMotion, WindowsProvider, WindowsStyles, type DockApp } from "@kitora/windows"

// A DesktopDock on its own: an icon per app launches its window (a second click focuses it), a dot marks a
// running app and minimised windows sit after the separator. \`insets\` keeps maximised windows above the dock.

const DOCK_INSETS = { top: 0, right: 0, bottom: 84, left: 0 }
const APPS: readonly { readonly id: string; readonly label: string; readonly icon: LucideIcon; readonly tile: string }[] = [
  { id: "mail", label: "Mail", icon: Mail, tile: "bg-sky-500" },
  { id: "calendar", label: "Calendar", icon: Calendar, tile: "bg-rose-500" },
]

function Dock() {
  const windows = useWindows()
  const apps: readonly DockApp[] = APPS.map(({ id, label, icon: Icon, tile }) => {
    const icon = (
      <span className={\`grid size-full place-items-center rounded-[24%] \${tile}\`}>
        <Icon className="size-[60%] text-white" aria-hidden="true" />
      </span>
    )
    return { id, label, icon, launch: () => windows.open({ key: id, app: id, title: label, icon, rect: { width: 260, height: 150 }, content: <p className="p-3 text-[12px]">{label}</p> }) }
  })
  return <DesktopDock apps={apps} />
}

export function DockOnly() {
  return (
    <WindowsProvider chrome={macChrome} mobile={null}>
      <WindowsStyles />
      <WindowMotion />
      <Desktop className="isolate h-[300px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Dock desktop" insets={DOCK_INSETS}>
        <Dock />
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>a(()=>import(`./dock-only-DHpP5Fcn.js`),[]));var D=e(i(),1),O=c({prefix:`my-app.windows.`}),k=`h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted`;function A(){let e=g(),[t,n]=(0,D.useState)(`move the windows, then save`),r=async()=>{await O.save(`main`,e.manager.serialize()),n(`saved`)},i=async()=>{let t=s(await O.load(`main`));if(!t.ok)return n(`not restored: ${t.errors.join(`; `)}`);n(`restored ${e.manager.applyLayout(t.layout).applied.length} window(s)`)};return(0,x.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 text-[12px]`,children:[(0,x.jsx)(`button`,{type:`button`,className:k,onClick:()=>void r(),children:`Save layout`}),(0,x.jsx)(`button`,{type:`button`,className:k,onClick:()=>void i(),children:`Restore layout`}),(0,x.jsx)(`span`,{role:`status`,className:`text-muted-foreground`,children:t})]})}function j(){return(0,x.jsxs)(h,{chrome:f,mobile:null,children:[(0,x.jsx)(m,{}),(0,x.jsx)(A,{}),(0,x.jsxs)(u,{className:`isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40`,role:`region`,"aria-label":`Saved layout desktop`,children:[(0,x.jsx)(l,{windowKey:`left`,title:`Left`,defaultRect:{left:30,top:20,width:240,height:150},children:(0,x.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Move or resize me, then save.`})}),(0,x.jsx)(l,{windowKey:`right`,title:`Right`,defaultRect:{left:300,top:50,width:240,height:150},children:(0,x.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Maximise or minimise me too.`})})]})]})}var M=`import { useState } from "react"
import { createLocalStorageLayoutStore, Desktop, neutralChrome, parseLayout, useWindows, Window, WindowsProvider, WindowsStyles } from "@kitora/windows"

// Save and restore the layout: serialize() captures every window's rect, state and z-order; parseLayout
// rejects stale or tampered data with reasons; applyLayout puts the windows back, matched by windowKey.

const store = createLocalStorageLayoutStore({ prefix: "my-app.windows." })
const BUTTON = "h-7 rounded-md border bg-background px-2 text-[12px] hover:bg-muted"

function LayoutButtons() {
  const windows = useWindows()
  const [status, setStatus] = useState("move the windows, then save")
  const save = async () => {
    await store.save("main", windows.manager.serialize())
    setStatus("saved")
  }
  const restore = async () => {
    const parsed = parseLayout(await store.load("main"))
    if (!parsed.ok) return setStatus(\`not restored: \${parsed.errors.join("; ")}\`)
    setStatus(\`restored \${windows.manager.applyLayout(parsed.layout).applied.length} window(s)\`)
  }
  return (
    <div className="mb-2 flex items-center gap-2 text-[12px]">
      <button type="button" className={BUTTON} onClick={() => void save()}>
        Save layout
      </button>
      <button type="button" className={BUTTON} onClick={() => void restore()}>
        Restore layout
      </button>
      <span role="status" className="text-muted-foreground">
        {status}
      </span>
    </div>
  )
}

export function SaveLayout() {
  return (
    <WindowsProvider chrome={neutralChrome} mobile={null}>
      <WindowsStyles />
      <LayoutButtons />
      <Desktop className="isolate h-[240px] overflow-hidden rounded-lg border bg-muted/40" role="region" aria-label="Saved layout desktop">
        <Window windowKey="left" title="Left" defaultRect={{ left: 30, top: 20, width: 240, height: 150 }}>
          <p className="p-3 text-[12px] text-muted-foreground">Move or resize me, then save.</p>
        </Window>
        <Window windowKey="right" title="Right" defaultRect={{ left: 300, top: 50, width: 240, height: 150 }}>
          <p className="p-3 text-[12px] text-muted-foreground">Maximise or minimise me too.</p>
        </Window>
      </Desktop>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>a(()=>import(`./save-layout-BQ22_9K2.js`),[]));function N(){return(0,x.jsxs)(h,{chrome:d,mobile:null,children:[(0,x.jsx)(m,{}),(0,x.jsx)(y,{}),(0,x.jsxs)(`div`,{className:`isolate flex h-[280px] flex-col overflow-hidden rounded-lg border bg-muted/40`,children:[(0,x.jsxs)(u,{className:`min-h-0 flex-1 overflow-hidden`,role:`region`,"aria-label":`Taskbar desktop`,children:[(0,x.jsx)(l,{title:`Mail`,defaultRect:{left:30,top:20,width:260,height:150},children:(0,x.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Inbox (3)`})}),(0,x.jsx)(l,{title:`Calendar`,defaultRect:{left:220,top:60,width:260,height:150},children:(0,x.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`No events today.`})})]}),(0,x.jsx)(_,{})]})]})}var P=`import { Desktop, Taskbar, Window, WindowMotion, WindowsProvider, WindowsStyles, windowsChrome } from "@kitora/windows"

// A Taskbar on its own: one button per open window, the focused one pressed. Click the pressed one to
// minimise (WindowMotion flies it into its button), click it again to bring the window back.

export function TaskbarOnly() {
  return (
    <WindowsProvider chrome={windowsChrome} mobile={null}>
      <WindowsStyles />
      <WindowMotion />
      <div className="isolate flex h-[280px] flex-col overflow-hidden rounded-lg border bg-muted/40">
        <Desktop className="min-h-0 flex-1 overflow-hidden" role="region" aria-label="Taskbar desktop">
          <Window title="Mail" defaultRect={{ left: 30, top: 20, width: 260, height: 150 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Inbox (3)</p>
          </Window>
          <Window title="Calendar" defaultRect={{ left: 220, top: 60, width: 260, height: 150 }}>
            <p className="p-3 text-[12px] text-muted-foreground">No events today.</p>
          </Window>
        </Desktop>
        <Taskbar />
      </div>
    </WindowsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./taskbar-only-D3YBVIvs.js`),[]));function F(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(n,{title:`Taskbar, dock and layout`,children:`The desktop shell pieces one at a time: a taskbar, a dock, and a layout saved and restored.`}),(0,x.jsx)(b,{n:1,title:`A Taskbar on its own`,blurb:`A button per window; click the pressed one to minimise, again to restore.`,code:P,children:(0,x.jsx)(N,{})}),(0,x.jsx)(b,{n:2,title:`A DesktopDock on its own`,blurb:`Click an icon to open its app; minimised windows join the dock.`,code:E,children:(0,x.jsx)(T,{})}),(0,x.jsx)(b,{n:3,title:`Save and restore the layout`,blurb:`Move the windows, save, move them again, restore.`,code:M,children:(0,x.jsx)(j,{})})]})}export{F as component};