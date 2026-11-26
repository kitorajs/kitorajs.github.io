import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{_ as n,n as r,r as i,t as a}from"./provider-CJrNxsO0.js";import{r as o,t as s}from"./regions-DCg8W9dJ.js";import{t as c}from"./glyphs-DIn5uSom.js";import{i as l}from"./kbd-BBrTDCPy.js";import{Bc as u,Cc as d,Ic as f}from"./index-B9ukmIN1.js";import{f as p,m}from"./manager-CgZ4YGDg.js";import{n as h,s as g}from"./hooks-CYtIGFjN.js";import{n as _,t as v}from"./desktop-y5pVQXm-.js";import{a as y,t as b,v as x}from"./windows-styles-qDdNe6P6.js";import{t as S}from"./taskbar-BmlnrGei.js";import{t as C}from"./motion-D2NZJIHG.js";import"./kit-gallery-Bph7isB2.js";import{t as w}from"./example-BGnSQG2Y.js";var T=`data-windows-announcer`,E=`position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0`;function D(e){let t=null;return n=>{t?.isConnected||(t=e.querySelector(`[data-windows-announcer]`)??e.createElement(`div`),t.setAttribute(T,``),t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`),t.setAttribute(`style`,E),t.isConnected||e.body.append(t));let r=t;r.textContent=``;let i=e.defaultView,a=()=>{r.textContent=n};i?.requestAnimationFrame?i.requestAnimationFrame(a):a()}}var O={left:`left half`,right:`right half`,top:`top half`,bottom:`bottom half`,"top-left":`top-left quarter`,"top-right":`top-right quarter`,"bottom-left":`bottom-left quarter`,"bottom-right":`bottom-right quarter`},k=e=>O[e]??e,A={category:`Window`,commandMove:`Move window with the keyboard`,commandResize:`Resize window with the keyboard`,commandSnap:e=>`Snap window to the ${k(e)}`,commandMaximize:`Maximise window`,commandMinimize:`Minimise window`,commandRestore:`Restore window`,commandRestoreOrMinimize:`Restore or minimise window`,commandToggleMaximize:`Maximise or restore window`,commandClose:`Close window`,commandCycle:`Next window`,commandCyclePrevious:`Previous window`,commandFocusTaskbar:`Focus the taskbar`,commandSystemMenu:`Open the window menu`,commandShowDesktop:`Show desktop`,commandCascade:`Cascade windows`,commandTile:`Tile windows`,snapped:(e,t)=>`${e} snapped to the ${k(t)}`,maximized:e=>`${e} maximised`,minimized:e=>`${e} minimised`,restored:e=>`${e} restored`,closed:e=>`${e} closed`,moveMode:e=>`Moving ${e}: arrow keys move, Shift moves further, Enter keeps, Escape cancels`,sizeMode:e=>`Resizing ${e}: arrow keys resize, Shift resizes further, Enter keeps, Escape cancels`,moved:e=>`${e} moved`,resized:e=>`${e} resized`,modeCancelled:e=>`${e} put back`,cycled:(e,t,n)=>`${e}, ${t} of ${n}`},j=`window`,M={move:`window.move`,resize:`window.resize`,snapLeft:`window.snapLeft`,snapRight:`window.snapRight`,snapTop:`window.snapTop`,snapBottom:`window.snapBottom`,snapTopLeft:`window.snapTopLeft`,snapTopRight:`window.snapTopRight`,snapBottomLeft:`window.snapBottomLeft`,snapBottomRight:`window.snapBottomRight`,maximize:`window.maximize`,minimize:`window.minimize`,restore:`window.restore`,restoreOrMinimize:`window.restoreOrMinimize`,toggleMaximize:`window.toggleMaximize`,close:`window.close`,cycle:`window.cycle`,cyclePrevious:`window.cyclePrevious`,focusTaskbar:`window.focusTaskbar`,systemMenu:`window.systemMenu`,showDesktop:`window.showDesktop`,cascade:`window.cascade`,tile:`window.tile`},N={focus:`windowFocus`,state:`windowState`,count:`windowCount`,mode:`windowMoveMode`},P=[[M.snapLeft,`left`],[M.snapRight,`right`],[M.snapTop,`top`],[M.snapBottom,`bottom`],[M.snapTopLeft,`top-left`],[M.snapTopRight,`top-right`],[M.snapBottomLeft,`bottom-left`],[M.snapBottomRight,`bottom-right`]],F=N.focus,I=`${F} && ${N.state} != 'maximized' && ${N.state} != 'fullscreen'`,L=[{key:`Ctrl+Alt+Left`,command:M.snapLeft,when:F,inputs:`allow`},{key:`Ctrl+Alt+Right`,command:M.snapRight,when:F,inputs:`allow`},{key:`Ctrl+Alt+Up`,command:M.maximize,when:F,inputs:`allow`},{key:`Ctrl+Alt+Down`,command:M.restoreOrMinimize,when:F,inputs:`allow`},{key:`Ctrl+Alt+Shift+Up`,command:M.snapTop,when:F,inputs:`allow`},{key:`Ctrl+Alt+Shift+Down`,command:M.snapBottom,when:F,inputs:`allow`},{key:`Ctrl+Alt+U`,command:M.snapTopLeft,when:F,inputs:`allow`},{key:`Ctrl+Alt+I`,command:M.snapTopRight,when:F,inputs:`allow`},{key:`Ctrl+Alt+J`,command:M.snapBottomLeft,when:F,inputs:`allow`},{key:`Ctrl+Alt+K`,command:M.snapBottomRight,when:F,inputs:`allow`},{key:`Alt+F7`,command:M.move,when:I,inputs:`allow`},{key:`Alt+F8`,command:M.resize,when:I,inputs:`allow`},{key:`Ctrl+F6`,command:M.cycle,inputs:`allow`,repeat:`allow`},{key:`Ctrl+Shift+F6`,command:M.cyclePrevious,inputs:`allow`,repeat:`allow`},{key:`Ctrl+Alt+W`,command:M.close,when:F,inputs:`allow`},{key:`Ctrl+Alt+M`,command:M.minimize,when:F,inputs:`allow`},{key:`Ctrl+Alt+D`,command:M.showDesktop,inputs:`allow`},{key:`Alt+Shift+Space`,command:M.systemMenu,when:F,inputs:`allow`},{key:`Alt+Shift+T`,command:M.focusTaskbar,inputs:`allow`}],R={minimize:M.minimize,maximize:M.maximize,close:M.close};function z(e,t=L){let n=n=>t.filter(e=>e.command===n).map(t=>t[e]??t.key);return{minimize:c(n(R.minimize),e),maximize:c(n(R.maximize),e),close:c(n(R.close),e)}}var B=new Set([`Control`,`Alt`,`Meta`,`Shift`]);function V(e,t={}){let n={...A,...t.messages},r=()=>t.document??(typeof document>`u`?null:document),i=null,a=e=>{if(t.announce)return t.announce(e);let n=r();n&&(i??=D(n),i(e))},o=()=>{let t=e.getSnapshot().focused;return t===null?null:e.get(t)},s=(e,t)=>()=>{let n=o();return!n||!e(n.id)?!1:(a(t(n.title)),!0)},c=null,l=t=>()=>{let r=e.getSnapshot();if(!c){let t=r.mru.filter(t=>{let n=e.get(t);return n!==null&&!n.hidden&&n.blockedBy===null});if(t.length<2)return!1;c={list:t,index:0}}c.index=(c.index+t+c.list.length)%c.list.length;let i=c.list[c.index];if(i===void 0||!e.focus(i))return!1;let o=e.get(i);return o&&a(n.cycled(o.title,c.index+1,c.list.length)),!0},u=t=>s(n=>e.startMode(n,t),e=>t===`move`?n.moveMode(e):n.sizeMode(e)),d={[M.move]:{title:n.commandMove,category:n.category,when:F,run:u(`move`)},[M.resize]:{title:n.commandResize,category:n.category,when:F,run:u(`size`)},...Object.fromEntries(P.map(([t,r])=>[t,{title:n.commandSnap(r),category:n.category,when:F,run:s(t=>e.snap(t,r),e=>n.snapped(e,r))}])),[M.maximize]:{title:n.commandMaximize,category:n.category,when:F,run:s(t=>e.maximize(t),n.maximized)},[M.minimize]:{title:n.commandMinimize,category:n.category,when:F,run:s(t=>e.minimize(t),n.minimized)},[M.restore]:{title:n.commandRestore,category:n.category,when:F,run:s(t=>e.restore(t),n.restored)},[M.restoreOrMinimize]:{title:n.commandRestoreOrMinimize,category:n.category,when:F,run:()=>{let t=o();return t?t.state===`normal`?s(t=>e.minimize(t),n.minimized)():s(t=>e.restore(t),n.restored)():!1}},[M.toggleMaximize]:{title:n.commandToggleMaximize,category:n.category,when:F,run:()=>{let t=o();return t?s(t=>e.toggleMaximize(t),t.state===`maximized`?n.restored:n.maximized)():!1}},[M.close]:{title:n.commandClose,category:n.category,when:F,run:async()=>{let t=o();if(!t)return!1;let r=await e.close(t.id);return r&&a(n.closed(t.title)),r}},[M.cycle]:{title:n.commandCycle,category:n.category,run:l(1)},[M.cyclePrevious]:{title:n.commandCyclePrevious,category:n.category,run:l(-1)},[M.focusTaskbar]:{title:n.commandFocusTaskbar,category:n.category,run:()=>{let e=r()?.querySelector(`[${p}="${m}"]`);return e?((e.querySelector(`[tabindex="0"]`)??e).focus(),!0):!1}},[M.systemMenu]:{title:n.commandSystemMenu,category:n.category,when:F,run:()=>{let e=o(),t=(e?Array.from(r()?.querySelectorAll(`[data-window-id]`)??[]).find(t=>t.getAttribute(`data-window-id`)===e.id):void 0)?.querySelector(`[data-window-titlebar]`);if(!t)return!1;let n=t.getBoundingClientRect();return t.dispatchEvent(new MouseEvent(`contextmenu`,{bubbles:!0,cancelable:!0,button:2,clientX:n.left+16,clientY:n.bottom})),!0}},[M.showDesktop]:{title:n.commandShowDesktop,category:n.category,run:()=>(e.showDesktop(),!0)},[M.cascade]:{title:n.commandCascade,category:n.category,run:()=>(e.cascade(),!0)},[M.tile]:{title:n.commandTile,category:n.category,run:()=>(e.tile(`grid`),!0)}},f={keys:Object.values(N),get(t){let n=e.getSnapshot(),r=n.focused===null?null:e.get(n.focused);switch(t){case N.focus:return r!==null;case N.state:return r?.state??``;case N.count:return n.windows.length;case N.mode:return n.mode?.kind??``;default:return}}};return{name:j,commands:d,keybindings:t.keybindings??L,weight:t.weight,context:[f],setup(){let t=e.onEvent(t=>{if(t.type===`focus`&&c&&t.id!==c.list[c.index]&&(c=null),t.type!==`mode`||t.phase===`start`)return;let r=e.get(t.id);r&&a(t.phase===`cancel`?n.modeCancelled(r.title):t.kind===`move`?n.moved(r.title):n.resized(r.title))}),i=r(),o=e=>{B.has(e.key)&&(c=null)};return i?.addEventListener(`keyup`,o,!0),()=>{t(),i?.removeEventListener(`keyup`,o,!0),c=null}}}}var H=e(u(),1);function U(e,t={}){let n=i(),r=(0,H.useRef)(t);r.current=t;let a=t.regions??!1;(0,H.useEffect)(()=>n.plugin(V(e,r.current)),[n,e]),(0,H.useEffect)(()=>a?n.plugin(o(s({document:r.current.document}))):void 0,[n,a])}var W=f(),G=`bg-[linear-gradient(135deg,#e7e5e4,#d6d3d1)] dark:bg-[linear-gradient(135deg,#1c1917,#0c0a09)]`;function K({children:e}){let{surface:t}=g();return(0,W.jsx)(`div`,{className:`${t===`desktop`?`isolate `:``}flex flex-col overflow-hidden rounded-lg border shadow-sm ${G}`,children:e})}function q(){return U(h(),{regions:!0}),null}function J(){let e=i();return(0,W.jsxs)(x,{chrome:(0,H.useMemo)(()=>y(`windows`,{keyshortcuts:z(e.platform)}),[e]),children:[(0,W.jsx)(b,{}),(0,W.jsx)(C,{}),(0,W.jsx)(q,{}),(0,W.jsxs)(K,{children:[(0,W.jsxs)(v,{className:`h-[380px] overflow-hidden`,role:`region`,"aria-label":`Keyboard desktop`,children:[(0,W.jsx)(_,{title:`Notes`,defaultRect:{left:24,top:24,width:320,height:200},children:(0,W.jsxs)(`div`,{className:`grid gap-2 p-3 text-[12px]`,children:[(0,W.jsx)(`p`,{className:`text-muted-foreground`,children:`Click here, then try Ctrl+Alt+← / → / ↑, Alt+F7 then the arrows, Ctrl+F6.`}),(0,W.jsx)(`input`,{"aria-label":`Notes field`,className:`h-7 rounded-md border bg-background px-2`,defaultValue:`keys work from a field too`})]})}),(0,W.jsx)(_,{title:`Tasks`,defaultRect:{left:380,top:40,width:280,height:190},children:(0,W.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Right-click the title bar for Move and Size.`})}),(0,W.jsx)(_,{title:`Mail`,defaultRect:{left:200,top:140,width:300,height:180},children:(0,W.jsx)(`p`,{className:`p-3 text-[12px] text-muted-foreground`,children:`Ctrl+F6 cycles, most recently used first.`})})]}),(0,W.jsx)(S,{peek:!1})]})]})}function Y(){return(0,W.jsx)(a,{children:(0,W.jsx)(J,{})})}var X=`import { useMemo, type ReactNode } from "react"
import { KeyboardProvider, useKeyboard } from "@kitora/keyboard"
import { createChrome, Desktop, DESKTOP_SURFACE, Taskbar, useWindowManager, useWindowsContext, Window, WindowMotion, WindowsProvider, WindowsStyles } from "@kitora/windows"
import { useWindowsKeyboard, windowKeyShortcuts } from "@kitora/windows/keyboard"

// Windows from the keyboard (W73, W88–W93, W96–W98): every window action is a command in the keyboard kit
// with a default key. Ctrl+Alt+arrows snap and maximise, Alt+F7 / Alt+F8 move and size by arrows (also from
// the window menu's Move and Size), Ctrl+F6 cycles in most-recently-used order, F6 visits the windows and
// the taskbar, title-bar buttons announce their keys, and each command's result is announced politely.

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

/** Installs the windows plugin, plus F6 / Shift+F6 between the windows and the taskbar, while mounted. Without React: keyboard.plugin(windowsKeyboardPlugin(manager)). */
function WindowKeys() {
  useWindowsKeyboard(useWindowManager(), { regions: true })
  return null
}

function Screen() {
  const kb = useKeyboard()
  // Title-bar buttons announce the keys that really work on this platform (W97).
  const chrome = useMemo(() => createChrome("windows", { keyshortcuts: windowKeyShortcuts(kb.platform) }), [kb])
  return (
    <WindowsProvider chrome={chrome}>
      <WindowsStyles />
      <WindowMotion />
      <WindowKeys />
      <ScreenFrame>
        <Desktop className="h-[380px] overflow-hidden" role="region" aria-label="Keyboard desktop">
          <Window title="Notes" defaultRect={{ left: 24, top: 24, width: 320, height: 200 }}>
            <div className="grid gap-2 p-3 text-[12px]">
              <p className="text-muted-foreground">Click here, then try Ctrl+Alt+← / → / ↑, Alt+F7 then the arrows, Ctrl+F6.</p>
              <input aria-label="Notes field" className="h-7 rounded-md border bg-background px-2" defaultValue="keys work from a field too" />
            </div>
          </Window>
          <Window title="Tasks" defaultRect={{ left: 380, top: 40, width: 280, height: 190 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Right-click the title bar for Move and Size.</p>
          </Window>
          <Window title="Mail" defaultRect={{ left: 200, top: 140, width: 300, height: 180 }}>
            <p className="p-3 text-[12px] text-muted-foreground">Ctrl+F6 cycles, most recently used first.</p>
          </Window>
        </Desktop>
        <Taskbar peek={false} />
      </ScreenFrame>
    </WindowsProvider>
  )
}

export function KeyboardDesktop() {
  return (
    <KeyboardProvider>
      <Screen />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>d(()=>import(`./keyboard-ByeVApYl.js`),[]));function Z(){U(h());let e=i();return(0,W.jsxs)(`table`,{className:`w-full text-[12px]`,children:[(0,W.jsx)(`thead`,{children:(0,W.jsxs)(`tr`,{className:`text-left text-muted-foreground`,children:[(0,W.jsx)(`th`,{className:`py-1 pe-3 font-medium`,children:`Command`}),(0,W.jsx)(`th`,{className:`py-1 font-medium`,children:`Default key`})]})}),(0,W.jsx)(`tbody`,{children:L.map(t=>{let r=e.commands.get(t.command)?.spec;return(0,W.jsxs)(`tr`,{className:`border-t`,children:[(0,W.jsx)(`td`,{className:`py-1 pe-3`,children:r?n(r.title):t.command}),(0,W.jsx)(`td`,{className:`py-1`,children:(0,W.jsx)(l,{binding:t.key})})]},t.command)})})]})}function Q(){return(0,W.jsx)(a,{children:(0,W.jsx)(x,{children:r()?(0,W.jsx)(Z,{}):null})})}var $=`import { KeyboardProvider, messageText, ProviderKbd, useHydrated, useKeyboard } from "@kitora/keyboard"
import { useWindowManager, WindowsProvider } from "@kitora/windows"
import { DEFAULT_WINDOW_KEYBINDINGS, useWindowsKeyboard } from "@kitora/windows/keyboard"

// The windows plugin's default keys, read from the live command registry: each row is a command's title
// and its key, drawn for this platform. They avoid what the browser and OS keep (Win, Alt+Tab, Alt+F4,
// Ctrl+Tab, Mod+W); a user keymap overrides any of them. The plugin needs a window manager, so the table
// sits inside a WindowsProvider of its own (no desktop drawn).

/** The default bindings with their command titles. */
function BindingTable() {
  useWindowsKeyboard(useWindowManager())
  const kb = useKeyboard()
  return (
    <table className="w-full text-[12px]">
      <thead>
        <tr className="text-left text-muted-foreground">
          <th className="py-1 pe-3 font-medium">Command</th>
          <th className="py-1 font-medium">Default key</th>
        </tr>
      </thead>
      <tbody>
        {DEFAULT_WINDOW_KEYBINDINGS.map((rule) => {
          const spec = kb.commands.get(rule.command)?.spec
          return (
            <tr key={rule.command} className="border-t">
              <td className="py-1 pe-3">{spec ? messageText(spec.title) : rule.command}</td>
              <td className="py-1">
                <ProviderKbd binding={rule.key} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export function WindowKeysTable() {
  // The keys are drawn per platform, which only the client knows.
  const ready = useHydrated()
  return (
    <KeyboardProvider>
      <WindowsProvider>{ready ? <BindingTable /> : null}</WindowsProvider>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./keyboard-keys-BHb8kmF0.js`),[]));function ee(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(t,{title:`Keyboard`,children:`Every window action is a command in the keyboard kit: rebindable, listed in the palette and the cheatsheet, gated by when-clauses such as “a window is focused and not maximised”. Results are announced politely.`}),(0,W.jsx)(w,{n:1,title:`Drive windows from the keyboard`,blurb:`Snap, maximise, move and size with arrows, cycle like Alt+Tab, F6 to the taskbar.`,code:X,children:(0,W.jsx)(`div`,{"data-testid":`keyboard-desktop`,children:(0,W.jsx)(Y,{})})}),(0,W.jsx)(w,{n:2,title:`Default keys`,blurb:`Avoid what the browser and OS keep (Win, Alt+Tab, Alt+F4, Ctrl+Tab, Mod+W); a user keymap overrides any of them.`,code:$,children:(0,W.jsx)(Q,{})})]})}export{ee as component};