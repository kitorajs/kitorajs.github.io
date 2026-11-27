import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{i as a,r as o}from"./manager-BBdagqVo.js";import{t as s}from"./desktop-HTCaU--P.js";import{t as c}from"./storage-Dkbl9qB8.js";import"./kit-gallery-BBavj2rC.js";import{t as l}from"./example-B67lLz1F.js";var u=e(r(),1),d=i(),f=[{key:`dbl`,title:`Double-click me`,rect:{left:40,top:30,width:260,height:140}}],p={left:0,top:0,width:800,height:400},m=`grid size-5 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring`;function h({win:e,manager:t,binding:n}){let r=(0,u.useCallback)(t=>n&&t?n.mount(e.id,t):void 0,[n,e.id]),i=e.state===`maximized`;return(0,d.jsxs)(`div`,{ref:r,className:`flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none`,children:[(0,d.jsxs)(`div`,{"data-window-titlebar":``,className:`flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2`,children:[(0,d.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.title}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`Minimise ${e.title}`,className:m,onClick:()=>t.minimize(e.id),children:`–`}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`${i?`Restore`:`Maximise`} ${e.title}`,className:m,onClick:()=>t.toggleMaximize(e.id),children:i?`❐`:`□`})]}),(0,d.jsxs)(`p`,{className:`min-h-0 flex-1 p-2 text-muted-foreground`,children:[e.state,` · `,Math.round(e.rect.left),`, `,Math.round(e.rect.top),` · `,Math.round(e.rect.width),` × `,Math.round(e.rect.height)]})]})}function g({windows:e,manager:t}){return(0,d.jsx)(`div`,{role:`toolbar`,"aria-label":`Windows`,className:`flex h-7 items-center gap-1 text-[12px]`,children:e.map(e=>(0,d.jsxs)(`button`,{type:`button`,"aria-pressed":e.focused,onClick:()=>e.state===`minimized`?t.restore(e.id):t.focus(e.id),className:`h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium`,children:[e.title,e.state===`minimized`?` (min)`:``]},e.id))})}function _(){let[e]=(0,u.useState)(()=>o({bounds:p,snap:{magnet:8}})),[t,n]=(0,u.useState)(null),r=(0,u.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,d.jsx)(`div`,{ref:(0,u.useCallback)(t=>{if(!t)return;let r=s(e,t,{doubleClick:`minimize`});for(let t of f)e.open({key:t.key,title:t.title,rect:t.rect,data:null});return n(r),()=>{r.destroy(),n(null)}},[e]),className:`relative h-[220px] overflow-hidden rounded-md border bg-muted/40`,children:r.windows.map(n=>(0,d.jsx)(h,{win:n,manager:e,binding:t},n.id))}),(0,d.jsx)(g,{windows:r.windows,manager:e})]})}var v=`import { useCallback, useState, useSyncExternalStore } from "react"
import { attachDesktop, createWindowManager, type DesktopBinding, type Rect, type WindowManager, type WindowSnapshot } from "@kitora/windows"

// The double-click action (W22): \`doubleClick: "minimize"\`, the macOS alternative to maximise (or "none").
// Double-click the title bar: the window minimises, and its taskbar button brings it back.

/** The windows the desktop opens with: a key (stable across StrictMode re-runs), title and first rect. */
const WINDOWS: readonly { readonly key: string; readonly title: string; readonly rect: Partial<Rect> }[] = [
  { key: "dbl", title: "Double-click me", rect: { left: 40, top: 30, width: 260, height: 140 } },
]

/** Bounds the manager starts with; the binding replaces them with the element's size on attach. */
const INITIAL_BOUNDS: Rect = { left: 0, top: 0, width: 800, height: 400 }

const ICON_BUTTON = "grid size-5 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

/** One window's markup; hands its element to the binding while mounted. */
function WindowFrame({ win, manager, binding }: { win: WindowSnapshot<null>; manager: WindowManager<null>; binding: DesktopBinding | null }) {
  // The window element joins the binding through its ref callback (React 19 runs the returned cleanup on detach).
  const ref = useCallback((el: HTMLDivElement | null) => (binding && el ? binding.mount(win.id, el) : undefined), [binding, win.id])
  const maximized = win.state === "maximized"
  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none"
    >
      <div data-window-titlebar="" className="flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2">
        <span className="min-w-0 flex-1 truncate font-medium">{win.title}</span>
        <button type="button" aria-label={\`Minimise \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.minimize(win.id)}>
          –
        </button>
        <button type="button" aria-label={\`\${maximized ? "Restore" : "Maximise"} \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.toggleMaximize(win.id)}>
          {maximized ? "❐" : "□"}
        </button>
      </div>
      <p className="min-h-0 flex-1 p-2 text-muted-foreground">
        {win.state} · {Math.round(win.rect.left)}, {Math.round(win.rect.top)} · {Math.round(win.rect.width)} × {Math.round(win.rect.height)}
      </p>
    </div>
  )
}

/** A one-row taskbar: a button per window brings a minimised one back. */
function TaskButtons({ windows, manager }: { windows: readonly WindowSnapshot<null>[]; manager: WindowManager<null> }) {
  return (
    <div role="toolbar" aria-label="Windows" className="flex h-7 items-center gap-1 text-[12px]">
      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          aria-pressed={w.focused}
          onClick={() => (w.state === "minimized" ? manager.restore(w.id) : manager.focus(w.id))}
          className="h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium"
        >
          {w.title}
          {w.state === "minimized" ? " (min)" : ""}
        </button>
      ))}
    </div>
  )
}

export function DoubleClickDesktop() {
  const [manager] = useState(() => createWindowManager<null>({ bounds: INITIAL_BOUNDS, snap: { magnet: 8 } }))
  const [binding, setBinding] = useState<DesktopBinding | null>(null)
  const snapshot = useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getSnapshot)
  // Attaching the binding is DOM wiring, so it lives in the desktop's ref callback, not in an effect.
  const desktopRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return undefined
      const b = attachDesktop(manager, el, { doubleClick: "minimize" })
      // Opening by key focuses the window if a re-run finds it already open.
      for (const w of WINDOWS) manager.open({ key: w.key, title: w.title, rect: w.rect, data: null })
      setBinding(b)
      return () => {
        b.destroy()
        setBinding(null)
      }
    },
    [manager],
  )
  return (
    <div className="flex flex-col gap-1.5">
      <div ref={desktopRef} className="relative h-[220px] overflow-hidden rounded-md border bg-muted/40">
        {snapshot.windows.map((w) => (
          <WindowFrame key={w.id} win={w} manager={manager} binding={binding} />
        ))}
      </div>
      <TaskButtons windows={snapshot.windows} manager={manager} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>n(()=>import(`./move-resize-double-click-CEj6fvw_.js`),[]));var y=[{key:`notes`,title:`Notes`,rect:{left:40,top:30,width:280,height:180},body:`text`},{key:`preview`,title:`Preview`,rect:{left:300,top:60,width:320,height:220},body:`iframe`},{key:`tools`,title:`Tools`,rect:{left:120,top:200,width:300,height:150},body:`toolbar`}],b={left:0,top:0,width:800,height:400},x=`grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring`,S=`<!doctype html><body style="font:12px system-ui;margin:8px;color:#555">An iframe. Drag a window across it: the gesture never stalls, because a shield covers every iframe while a window moves.</body>`;function C({win:e,manager:t,binding:n}){let r=(0,u.useCallback)(t=>n&&t?n.mount(e.id,t):void 0,[n,e.id]),i=e.state===`maximized`;return(0,d.jsxs)(`div`,{ref:r,className:`flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none`,children:[(0,d.jsxs)(`div`,{"data-window-titlebar":``,className:`flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2`,children:[(0,d.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.title}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`Minimise ${e.title}`,className:x,onClick:()=>t.minimize(e.id),children:`–`}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`${i?`Restore`:`Maximise`} ${e.title}`,className:x,onClick:()=>t.toggleMaximize(e.id),children:i?`❐`:`□`}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`Fullscreen ${e.title}`,className:x,onClick:()=>n?.fullscreen(e.id),children:`⤢`})]}),e.data===`toolbar`?(0,d.jsxs)(`div`,{"data-window-drag":``,className:`flex h-6 shrink-0 items-center gap-2 border-b px-2 text-[11px] text-muted-foreground`,children:[`drag region (data-window-drag)`,(0,d.jsx)(`input`,{"aria-label":`Toolbar field`,className:`h-5 w-24 rounded border bg-background px-1`,placeholder:`inputs still type`})]}):null,(0,d.jsx)(`div`,{className:`min-h-0 flex-1 p-2 text-muted-foreground`,children:e.data===`iframe`?(0,d.jsx)(`iframe`,{title:`${e.title} content`,srcDoc:S,sandbox:``,className:`size-full rounded border bg-white`}):(0,d.jsxs)(`p`,{children:[e.state,` · `,Math.round(e.rect.left),`, `,Math.round(e.rect.top),` · `,Math.round(e.rect.width),` × `,Math.round(e.rect.height)]})})]})}function w(){let[e]=(0,u.useState)(()=>o({bounds:b,snap:{magnet:8}})),[t,n]=(0,u.useState)(null),r=(0,u.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,d.jsx)(`div`,{ref:(0,u.useCallback)(t=>{if(!t)return;let r=s(e,t,{doubleClick:`maximize`,moveModifier:`alt`,noSnapModifier:`shift`});for(let t of y)e.open({key:t.key,title:t.title,rect:t.rect,data:t.body});return n(r),()=>{r.destroy(),n(null)}},[e]),className:`relative h-[400px] overflow-hidden rounded-md border bg-muted/40`,children:r.windows.map(n=>(0,d.jsx)(C,{win:n,manager:e,binding:t},n.id))}),(0,d.jsxs)(`div`,{role:`toolbar`,"aria-label":`Windows`,className:`flex h-7 items-center gap-1 text-[12px]`,children:[r.windows.map(t=>(0,d.jsxs)(`button`,{type:`button`,"aria-pressed":t.focused,onClick:()=>t.state===`minimized`?e.restore(t.id):e.focus(t.id),className:`h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium`,children:[t.title,t.state===`minimized`?` (min)`:``]},t.id)),(0,d.jsx)(`output`,{className:`ml-auto font-mono text-[11px] text-muted-foreground tabular-nums`,children:r.windows.map(e=>`${e.key}:${e.state}${e.zone?`/${e.zone}`:``}`).join(` `)})]})]})}var T=`import { useCallback, useState, useSyncExternalStore } from "react"
import { attachDesktop, createWindowManager, type DesktopBinding, type Rect, type WindowManager, type WindowSnapshot } from "@kitora/windows"

// The vanilla dom binding (W136) on real pointers, no React layer: one manager, \`attachDesktop\` on the
// desktop element, and each window element handed to \`binding.mount\`. React renders the markup from the
// manager's snapshot; the binding owns every window's geometry, so React never writes a window's style.
//
// Drag a title bar (or the Tools window's drag region) to move; drag any edge or corner to resize. Drag to
// the left or right edge for a half, a corner for a quarter, the top for maximise; hold Shift to skip
// snapping, Alt to move from anywhere, Alt on a grip to resize from the centre. Double-click a title to
// maximise and again to restore. Esc cancels a gesture.

/** What a window's body shows. */
type Body = "text" | "iframe" | "toolbar"

/** The windows the desktop opens with: a key (stable across StrictMode re-runs), title, first rect and body. */
const WINDOWS: readonly { readonly key: string; readonly title: string; readonly rect: Partial<Rect>; readonly body: Body }[] = [
  { key: "notes", title: "Notes", rect: { left: 40, top: 30, width: 280, height: 180 }, body: "text" },
  { key: "preview", title: "Preview", rect: { left: 300, top: 60, width: 320, height: 220 }, body: "iframe" },
  { key: "tools", title: "Tools", rect: { left: 120, top: 200, width: 300, height: 150 }, body: "toolbar" },
]

/** Bounds the manager starts with; the binding replaces them with the element's size on attach. */
const INITIAL_BOUNDS: Rect = { left: 0, top: 0, width: 800, height: 400 }

const ICON_BUTTON = "grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

const IFRAME_DOC = \`<!doctype html><body style="font:12px system-ui;margin:8px;color:#555">An iframe. Drag a window across it: the gesture never stalls, because a shield covers every iframe while a window moves.</body>\`

/** One window's markup; hands its element to the binding while mounted. */
function WindowFrame({ win, manager, binding }: { win: WindowSnapshot<Body>; manager: WindowManager<Body>; binding: DesktopBinding | null }) {
  // The window element joins the binding through its ref callback (React 19 runs the returned cleanup on detach).
  const ref = useCallback((el: HTMLDivElement | null) => (binding && el ? binding.mount(win.id, el) : undefined), [binding, win.id])
  const maximized = win.state === "maximized"
  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none"
    >
      {/* [data-window-titlebar] moves; buttons inside it keep their own press */}
      <div data-window-titlebar="" className="flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2">
        <span className="min-w-0 flex-1 truncate font-medium">{win.title}</span>
        <button type="button" aria-label={\`Minimise \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.minimize(win.id)}>
          –
        </button>
        <button type="button" aria-label={\`\${maximized ? "Restore" : "Maximise"} \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.toggleMaximize(win.id)}>
          {maximized ? "❐" : "□"}
        </button>
        <button type="button" aria-label={\`Fullscreen \${win.title}\`} className={ICON_BUTTON} onClick={() => binding?.fullscreen(win.id)}>
          ⤢
        </button>
      </div>
      {win.data === "toolbar" ? (
        // [data-window-drag] marks an extra drag region; inputs inside it still type
        <div data-window-drag="" className="flex h-6 shrink-0 items-center gap-2 border-b px-2 text-[11px] text-muted-foreground">
          drag region (data-window-drag)
          <input aria-label="Toolbar field" className="h-5 w-24 rounded border bg-background px-1" placeholder="inputs still type" />
        </div>
      ) : null}
      <div className="min-h-0 flex-1 p-2 text-muted-foreground">
        {win.data === "iframe" ? (
          <iframe title={\`\${win.title} content\`} srcDoc={IFRAME_DOC} sandbox="" className="size-full rounded border bg-white" />
        ) : (
          <p>
            {win.state} · {Math.round(win.rect.left)}, {Math.round(win.rect.top)} · {Math.round(win.rect.width)} × {Math.round(win.rect.height)}
          </p>
        )}
      </div>
    </div>
  )
}

export function GesturesDesktop() {
  const [manager] = useState(() => createWindowManager<Body>({ bounds: INITIAL_BOUNDS, snap: { magnet: 8 } }))
  const [binding, setBinding] = useState<DesktopBinding | null>(null)
  const snapshot = useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getSnapshot)
  // Attaching the binding is DOM wiring, so it lives in the desktop's ref callback, not in an effect.
  const desktopRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return undefined
      const b = attachDesktop(manager, el, {
        doubleClick: "maximize", // W22: or "minimize" / "none"
        moveModifier: "alt", // W3: Alt + press anywhere moves
        noSnapModifier: "shift", // W42: Shift held while dragging = no snap
      })
      // Opening by key focuses the window if a re-run finds it already open.
      for (const w of WINDOWS) manager.open({ key: w.key, title: w.title, rect: w.rect, data: w.body })
      setBinding(b)
      return () => {
        b.destroy()
        setBinding(null)
      }
    },
    [manager],
  )
  return (
    <div className="flex flex-col gap-1.5">
      <div ref={desktopRef} className="relative h-[400px] overflow-hidden rounded-md border bg-muted/40">
        {snapshot.windows.map((w) => (
          <WindowFrame key={w.id} win={w} manager={manager} binding={binding} />
        ))}
      </div>
      {/* A one-row taskbar: brings minimised windows back, and reads out each window's state. */}
      <div role="toolbar" aria-label="Windows" className="flex h-7 items-center gap-1 text-[12px]">
        {snapshot.windows.map((w) => (
          <button
            key={w.id}
            type="button"
            aria-pressed={w.focused}
            onClick={() => (w.state === "minimized" ? manager.restore(w.id) : manager.focus(w.id))}
            className="h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium"
          >
            {w.title}
            {w.state === "minimized" ? " (min)" : ""}
          </button>
        ))}
        <output className="ml-auto font-mono text-[11px] text-muted-foreground tabular-nums">{snapshot.windows.map((w) => \`\${w.key}:\${w.state}\${w.zone ? \`/\${w.zone}\` : ""}\`).join(" ")}</output>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./move-resize-gestures-DKnQBQQS.js`),[]));var E=[{key:`left`,title:`Left`,rect:{left:30,top:30,width:240,height:150}},{key:`right`,title:`Right`,rect:{left:320,top:50,width:240,height:150}}],D=`work`,O=c({prefix:`my-app.windows.`}),k=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,A={left:0,top:0,width:800,height:400},j=`grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring`;function M({win:e,manager:t,binding:n}){let r=(0,u.useCallback)(t=>n&&t?n.mount(e.id,t):void 0,[n,e.id]),i=e.state===`maximized`;return(0,d.jsxs)(`div`,{ref:r,className:`flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none`,children:[(0,d.jsxs)(`div`,{"data-window-titlebar":``,className:`flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2`,children:[(0,d.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.title}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`Minimise ${e.title}`,className:j,onClick:()=>t.minimize(e.id),children:`–`}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`${i?`Restore`:`Maximise`} ${e.title}`,className:j,onClick:()=>t.toggleMaximize(e.id),children:i?`❐`:`□`})]}),(0,d.jsxs)(`p`,{className:`min-h-0 flex-1 p-2 text-muted-foreground`,children:[e.state,` · `,Math.round(e.rect.left),`, `,Math.round(e.rect.top),` · `,Math.round(e.rect.width),` × `,Math.round(e.rect.height)]})]})}function N({windows:e,manager:t}){return(0,d.jsx)(`div`,{role:`toolbar`,"aria-label":`Windows`,className:`flex h-7 items-center gap-1 text-[12px]`,children:e.map(e=>(0,d.jsxs)(`button`,{type:`button`,"aria-pressed":e.focused,onClick:()=>e.state===`minimized`?t.restore(e.id):t.focus(e.id),className:`h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium`,children:[e.title,e.state===`minimized`?` (min)`:``]},e.id))})}function P(){let[e]=(0,u.useState)(()=>o({bounds:A,snap:{magnet:8}})),[t,n]=(0,u.useState)(null),r=(0,u.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot),i=(0,u.useCallback)(t=>{if(!t)return;let r=s(e,t);for(let t of E)e.open({key:t.key,title:t.title,rect:t.rect,data:null});return n(r),()=>{r.destroy(),n(null)}},[e]),[c,l]=(0,u.useState)(`nothing saved yet`),f=async()=>{await O.save(D,e.serialize()),l(`saved`)},p=async()=>{let t=a(await O.load(D));if(!t.ok){l(`not restored: ${t.errors.join(`; `)}`);return}l(`restored ${e.applyLayout(t.layout).applied.length} window(s)`)};return(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`button`,{type:`button`,className:k,onClick:()=>void f(),children:`Save layout`}),(0,d.jsx)(`button`,{type:`button`,className:k,onClick:()=>void p(),children:`Restore layout`}),(0,d.jsx)(`span`,{role:`status`,className:`text-[12px] text-muted-foreground`,children:c})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,d.jsx)(`div`,{ref:i,className:`relative h-[240px] overflow-hidden rounded-md border bg-muted/40`,children:r.windows.map(n=>(0,d.jsx)(M,{win:n,manager:e,binding:t},n.id))}),(0,d.jsx)(N,{windows:r.windows,manager:e})]})]})}var F=`import { useCallback, useState, useSyncExternalStore } from "react"
import { attachDesktop, createWindowManager, createLocalStorageLayoutStore, parseLayout, type DesktopBinding, type Rect, type WindowManager, type WindowSnapshot } from "@kitora/windows"

// Saved layouts (W81, W82, W84): \`manager.serialize()\` captures every window's rect, state and z-order;
// \`parseLayout\` rejects stale or tampered data with reasons; \`applyLayout\` puts the windows back.
// Move the windows, save, move them again, restore. Stored in localStorage under this app's own prefix.

/** The windows the desktop opens with: a key (stable across StrictMode re-runs), title and first rect. */
const WINDOWS: readonly { readonly key: string; readonly title: string; readonly rect: Partial<Rect> }[] = [
  { key: "left", title: "Left", rect: { left: 30, top: 30, width: 240, height: 150 } },
  { key: "right", title: "Right", rect: { left: 320, top: 50, width: 240, height: 150 } },
]
/** The saved layout's name. */
const LAYOUT_NAME = "work"
/** A key prefix of your own, so the layouts never collide with another app's on the same origin. */
const store = createLocalStorageLayoutStore({ prefix: "my-app.windows." })

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

/** Bounds the manager starts with; the binding replaces them with the element's size on attach. */
const INITIAL_BOUNDS: Rect = { left: 0, top: 0, width: 800, height: 400 }

const ICON_BUTTON = "grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

/** One window's markup; hands its element to the binding while mounted. */
function WindowFrame({ win, manager, binding }: { win: WindowSnapshot<null>; manager: WindowManager<null>; binding: DesktopBinding | null }) {
  // The window element joins the binding through its ref callback (React 19 runs the returned cleanup on detach).
  const ref = useCallback((el: HTMLDivElement | null) => (binding && el ? binding.mount(win.id, el) : undefined), [binding, win.id])
  const maximized = win.state === "maximized"
  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none"
    >
      <div data-window-titlebar="" className="flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2">
        <span className="min-w-0 flex-1 truncate font-medium">{win.title}</span>
        <button type="button" aria-label={\`Minimise \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.minimize(win.id)}>
          –
        </button>
        <button type="button" aria-label={\`\${maximized ? "Restore" : "Maximise"} \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.toggleMaximize(win.id)}>
          {maximized ? "❐" : "□"}
        </button>
      </div>
      <p className="min-h-0 flex-1 p-2 text-muted-foreground">
        {win.state} · {Math.round(win.rect.left)}, {Math.round(win.rect.top)} · {Math.round(win.rect.width)} × {Math.round(win.rect.height)}
      </p>
    </div>
  )
}

/** A one-row taskbar: a button per window brings a minimised one back. */
function TaskButtons({ windows, manager }: { windows: readonly WindowSnapshot<null>[]; manager: WindowManager<null> }) {
  return (
    <div role="toolbar" aria-label="Windows" className="flex h-7 items-center gap-1 text-[12px]">
      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          aria-pressed={w.focused}
          onClick={() => (w.state === "minimized" ? manager.restore(w.id) : manager.focus(w.id))}
          className="h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium"
        >
          {w.title}
          {w.state === "minimized" ? " (min)" : ""}
        </button>
      ))}
    </div>
  )
}

export function LayoutDesktop() {
  const [manager] = useState(() => createWindowManager<null>({ bounds: INITIAL_BOUNDS, snap: { magnet: 8 } }))
  const [binding, setBinding] = useState<DesktopBinding | null>(null)
  const snapshot = useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getSnapshot)
  // Attaching the binding is DOM wiring, so it lives in the desktop's ref callback, not in an effect.
  const desktopRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return undefined
      const b = attachDesktop(manager, el)
      // Opening by key focuses the window if a re-run finds it already open.
      for (const w of WINDOWS) manager.open({ key: w.key, title: w.title, rect: w.rect, data: null })
      setBinding(b)
      return () => {
        b.destroy()
        setBinding(null)
      }
    },
    [manager],
  )
  const [status, setStatus] = useState("nothing saved yet")
  const save = async () => {
    await store.save(LAYOUT_NAME, manager.serialize())
    setStatus("saved")
  }
  const restore = async () => {
    const parsed = parseLayout(await store.load(LAYOUT_NAME))
    if (!parsed.ok) {
      setStatus(\`not restored: \${parsed.errors.join("; ")}\`)
      return
    }
    const result = manager.applyLayout(parsed.layout)
    setStatus(\`restored \${result.applied.length} window(s)\`)
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button type="button" className={BUTTON} onClick={() => void save()}>
          Save layout
        </button>
        <button type="button" className={BUTTON} onClick={() => void restore()}>
          Restore layout
        </button>
        <span role="status" className="text-[12px] text-muted-foreground">
          {status}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div ref={desktopRef} className="relative h-[240px] overflow-hidden rounded-md border bg-muted/40">
          {snapshot.windows.map((w) => (
            <WindowFrame key={w.id} win={w} manager={manager} binding={binding} />
          ))}
        </div>
        <TaskButtons windows={snapshot.windows} manager={manager} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>n(()=>import(`./move-resize-layout-BWxZy7gj.js`),[]));var I=[{key:`scaled`,title:`Scaled`,rect:{left:40,top:30,width:280,height:170}}],L=.75,R=300,z={left:0,top:0,width:800,height:400},B=`grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring`;function V({win:e,manager:t,binding:n}){let r=(0,u.useCallback)(t=>n&&t?n.mount(e.id,t):void 0,[n,e.id]),i=e.state===`maximized`;return(0,d.jsxs)(`div`,{ref:r,className:`flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none`,children:[(0,d.jsxs)(`div`,{"data-window-titlebar":``,className:`flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2`,children:[(0,d.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.title}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`Minimise ${e.title}`,className:B,onClick:()=>t.minimize(e.id),children:`–`}),(0,d.jsx)(`button`,{type:`button`,"aria-label":`${i?`Restore`:`Maximise`} ${e.title}`,className:B,onClick:()=>t.toggleMaximize(e.id),children:i?`❐`:`□`})]}),(0,d.jsxs)(`p`,{className:`min-h-0 flex-1 p-2 text-muted-foreground`,children:[e.state,` · `,Math.round(e.rect.left),`, `,Math.round(e.rect.top),` · `,Math.round(e.rect.width),` × `,Math.round(e.rect.height)]})]})}function H({windows:e,manager:t}){return(0,d.jsx)(`div`,{role:`toolbar`,"aria-label":`Windows`,className:`flex h-7 items-center gap-1 text-[12px]`,children:e.map(e=>(0,d.jsxs)(`button`,{type:`button`,"aria-pressed":e.focused,onClick:()=>e.state===`minimized`?t.restore(e.id):t.focus(e.id),className:`h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium`,children:[e.title,e.state===`minimized`?` (min)`:``]},e.id))})}function U(){let[e]=(0,u.useState)(()=>o({bounds:z,snap:{magnet:8}})),[t,n]=(0,u.useState)(null),r=(0,u.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot),i=(0,u.useCallback)(t=>{if(!t)return;let r=s(e,t);for(let t of I)e.open({key:t.key,title:t.title,rect:t.rect,data:null});return n(r),()=>{r.destroy(),n(null)}},[e]);return(0,d.jsx)(`div`,{style:{height:R*L+40},children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5`,style:{transform:`scale(${L})`,transformOrigin:`0 0`,width:`${100/L}%`},children:[(0,d.jsx)(`div`,{ref:i,style:{height:R},className:`relative overflow-hidden rounded-md border bg-muted/40`,children:r.windows.map(n=>(0,d.jsx)(V,{win:n,manager:e,binding:t},n.id))}),(0,d.jsx)(H,{windows:r.windows,manager:e})]})})}var W=`import { useCallback, useState, useSyncExternalStore } from "react"
import { attachDesktop, createWindowManager, type DesktopBinding, type Rect, type WindowManager, type WindowSnapshot } from "@kitora/windows"

// A scaled desktop (W14): the desktop is drawn at 75 % with a CSS transform, and the window still follows
// the pointer exactly. Nothing to configure: at press the binding reads the desktop's rendered box against
// its layout size (one getBoundingClientRect per gesture) and converts every pointer point by that scale.

/** The windows the desktop opens with: a key (stable across StrictMode re-runs), title and first rect. */
const WINDOWS: readonly { readonly key: string; readonly title: string; readonly rect: Partial<Rect> }[] = [
  { key: "scaled", title: "Scaled", rect: { left: 40, top: 30, width: 280, height: 170 } },
]
/** How much smaller the desktop is drawn. */
const SCALE = 0.75
/** The desktop's layout height, before scaling. */
const HEIGHT = 300

/** Bounds the manager starts with; the binding replaces them with the element's size on attach. */
const INITIAL_BOUNDS: Rect = { left: 0, top: 0, width: 800, height: 400 }

const ICON_BUTTON = "grid size-6 place-items-center rounded text-[11px] leading-none text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

/** One window's markup; hands its element to the binding while mounted. */
function WindowFrame({ win, manager, binding }: { win: WindowSnapshot<null>; manager: WindowManager<null>; binding: DesktopBinding | null }) {
  // The window element joins the binding through its ref callback (React 19 runs the returned cleanup on detach).
  const ref = useCallback((el: HTMLDivElement | null) => (binding && el ? binding.mount(win.id, el) : undefined), [binding, win.id])
  const maximized = win.state === "maximized"
  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-md border bg-background text-[12px] shadow-md data-[window-focused]:border-foreground/30 data-[window-focused]:shadow-xl data-[window-state=maximized]:rounded-none"
    >
      <div data-window-titlebar="" className="flex h-7 shrink-0 items-center gap-1 border-b bg-muted px-2">
        <span className="min-w-0 flex-1 truncate font-medium">{win.title}</span>
        <button type="button" aria-label={\`Minimise \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.minimize(win.id)}>
          –
        </button>
        <button type="button" aria-label={\`\${maximized ? "Restore" : "Maximise"} \${win.title}\`} className={ICON_BUTTON} onClick={() => manager.toggleMaximize(win.id)}>
          {maximized ? "❐" : "□"}
        </button>
      </div>
      <p className="min-h-0 flex-1 p-2 text-muted-foreground">
        {win.state} · {Math.round(win.rect.left)}, {Math.round(win.rect.top)} · {Math.round(win.rect.width)} × {Math.round(win.rect.height)}
      </p>
    </div>
  )
}

/** A one-row taskbar: a button per window brings a minimised one back. */
function TaskButtons({ windows, manager }: { windows: readonly WindowSnapshot<null>[]; manager: WindowManager<null> }) {
  return (
    <div role="toolbar" aria-label="Windows" className="flex h-7 items-center gap-1 text-[12px]">
      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          aria-pressed={w.focused}
          onClick={() => (w.state === "minimized" ? manager.restore(w.id) : manager.focus(w.id))}
          className="h-6 rounded border bg-background px-2 hover:bg-muted aria-pressed:border-foreground/40 aria-pressed:font-medium"
        >
          {w.title}
          {w.state === "minimized" ? " (min)" : ""}
        </button>
      ))}
    </div>
  )
}

export function ScaledDesktop() {
  const [manager] = useState(() => createWindowManager<null>({ bounds: INITIAL_BOUNDS, snap: { magnet: 8 } }))
  const [binding, setBinding] = useState<DesktopBinding | null>(null)
  const snapshot = useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getSnapshot)
  // Attaching the binding is DOM wiring, so it lives in the desktop's ref callback, not in an effect.
  const desktopRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return undefined
      const b = attachDesktop(manager, el)
      // Opening by key focuses the window if a re-run finds it already open.
      for (const w of WINDOWS) manager.open({ key: w.key, title: w.title, rect: w.rect, data: null })
      setBinding(b)
      return () => {
        b.destroy()
        setBinding(null)
      }
    },
    [manager],
  )
  return (
    // The outer box takes the scaled size; the inner one is laid out at full size, then drawn at SCALE.
    <div style={{ height: HEIGHT * SCALE + 40 }}>
      <div className="flex flex-col gap-1.5" style={{ transform: \`scale(\${SCALE})\`, transformOrigin: "0 0", width: \`\${100 / SCALE}%\` }}>
        <div ref={desktopRef} style={{ height: HEIGHT }} className="relative overflow-hidden rounded-md border bg-muted/40">
          {snapshot.windows.map((w) => (
            <WindowFrame key={w.id} win={w} manager={manager} binding={binding} />
          ))}
        </div>
        <TaskButtons windows={snapshot.windows} manager={manager} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>n(()=>import(`./move-resize-scaled-Y-deyVpL.js`),[]));function G(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(t,{title:`Move and resize`,children:`The dom layer on real pointers. One Pointer Events path for mouse, touch and pen; moves paint as transforms, coalesced to one per frame, and the core commits on release.`}),(0,d.jsx)(l,{n:1,title:`Move, resize, snap`,blurb:`Drag a title bar (or the Tools window's drag region) to move; drag any edge or corner to resize. Drag to the left or right edge for a half, a corner for a quarter, the top for maximise; hold Shift to skip snapping, Alt to move from anywhere, Alt on a grip to resize from the centre. Double-click a title to maximise and again to restore. Esc cancels a gesture.`,code:T,children:(0,d.jsx)(`div`,{"data-testid":`gestures-desktop`,children:(0,d.jsx)(w,{})})}),(0,d.jsx)(l,{n:2,title:`Scaled desktop`,blurb:`The desktop is drawn at 75 %: the window still follows the pointer exactly.`,code:W,children:(0,d.jsx)(`div`,{"data-testid":`scaled-desktop`,children:(0,d.jsx)(U,{})})}),(0,d.jsx)(l,{n:3,title:`Double-click action`,blurb:`doubleClick: "minimize", the macOS alternative; the taskbar button brings it back.`,code:v,children:(0,d.jsx)(`div`,{"data-testid":`dbl-desktop`,children:(0,d.jsx)(_,{})})}),(0,d.jsx)(l,{n:4,title:`Saved layout`,blurb:`Move the windows, save, move them again, restore. Stored in localStorage under the app's own prefix.`,code:F,children:(0,d.jsx)(P,{})})]})}export{G as component};