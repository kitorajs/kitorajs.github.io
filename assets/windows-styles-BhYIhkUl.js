import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./context-menu-CvV3DA2z.js";import{r}from"./layers-BoMt6F8k.js";import{s as i,t as a}from"./responsive-zkkl46YG.js";import{Bc as o,Bi as s,Gi as c,Ic as l,Ji as u,Ki as d,Rr as f,Ui as p,Ur as m,Xi as h,Yi as g,Zi as _,gs as v,qi as y,ta as b,vo as x,zc as S,zi as C}from"./index-9y5uwRd3.js";import{c as w,o as T,r as ee,s as E}from"./manager-CgZ4YGDg.js";import{m as D,r as te}from"./attrs-BUMdEK5h.js";import{a as ne,i as re,n as ie,o as O,r as ae,s as k,t as oe}from"./hooks-Dc41GNg3.js";var A=e(o(),1),j=l(),se=[`fullscreen`,`bottom-sheet`],M=`desktop`,ce={breakpoint:`sm`,surface:`fullscreen`},le=`data-window-surface`;function ue(e){let t=a.indexOf(e.breakpoint),n=n=>a.indexOf(n)>=t?M:e.surface;return{base:e.surface,sm:n(`sm`),md:n(`md`),lg:n(`lg`),xl:n(`xl`)}}function de(e){return i(e?ue(e):M,M)}var fe={left:`left half`,right:`right half`,top:`top half`,bottom:`bottom half`,"top-left":`top-left quarter`,"top-right":`top-right quarter`,"bottom-left":`bottom-left quarter`,"bottom-right":`bottom-right quarter`,"left-third":`left third`,"center-third":`centre third`,"right-third":`right third`,"left-two-thirds":`left two thirds`,"right-two-thirds":`right two thirds`},pe={minimize:e=>`Minimise ${e}`,maximize:e=>`Maximise ${e}`,restore:e=>`Restore ${e}`,close:e=>`Close ${e}`,fullscreen:e=>`Full screen ${e}`,systemMenu:e=>`${e} window menu`,move:`Move`,size:`Size`,alwaysOnTop:`Always on top`,snapLayouts:e=>`Snap layouts for ${e}`,snapZone:e=>`Snap to the ${fe[e]??e}`,taskbar:`Open windows`,dock:`Dock`,windowList:`Window`,cascade:`Cascade windows`,tileGrid:`Tile windows`,tileColumns:`Side by side`,showDesktop:`Show desktop`,minimized:`minimised`};function me(){let e=(0,A.useContext)(re);if(!e)throw Error(`@kitora/windows: window parts must be inside a <Window>.`);return e}function N(){let{id:e,titleId:t}=me(),{manager:n,binding:r,messages:i}=k();return{id:e,titleId:t,window:ae(e),messages:i,minimize:()=>n.minimize(e),toggleMaximize:()=>n.toggleMaximize(e),restore:()=>n.restore(e),close:()=>n.close(e),fullscreen:()=>r?.fullscreen(e)??n.fullscreen(e),snap:t=>n.snap(e,t),setAlwaysOnTop:t=>n.setTier(e,t?`above`:`normal`)}}function P(e){return(0,j.jsx)(`div`,{...e,[D]:``})}function he(e){return(0,j.jsx)(`div`,{...e,[te]:``})}function F(e){let{titleId:t,window:n}=N();return(0,j.jsx)(`span`,{...e,id:t,children:n?.title??``})}function ge(e,t,n){return e===`maximize`?t.state===`maximized`?n.restore(t.title):n.maximize(t.title):n[e](t.title)}function _e(e,t){return e===`close`?t.capabilities.closable:e===`minimize`?t.capabilities.minimizable:t.capabilities.maximizable}function I({action:e,keyshortcuts:t,children:n,...r}){let i=N(),a=i.window;if(!a)return null;let o=()=>{e===`minimize`?i.minimize():e===`maximize`?i.toggleMaximize():e===`close`?i.close():i.fullscreen()};return(0,j.jsx)(`button`,{type:`button`,...r,"aria-label":ge(e,a,i.messages),"aria-keyshortcuts":t,disabled:!_e(e,a),"data-window-action":e,onClick:o,children:n})}var L={name:`headless`,render:({children:e})=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(P,{children:[(0,j.jsx)(F,{}),(0,j.jsx)(I,{action:`minimize`,children:`–`}),(0,j.jsx)(I,{action:`maximize`,children:`□`}),(0,j.jsx)(I,{action:`close`,children:`×`})]}),(0,j.jsx)(`div`,{"data-window-body":``,children:e})]})},ve={name:`frameless`,render:({children:e})=>e},ye={left:0,top:0,width:1024,height:640};function be({manager:e,options:t,dir:n,chrome:r,messages:i,mobile:a,children:o}){let[s]=(0,A.useState)(()=>e??ee({bounds:ye,direction:n,...t})),[c,l]=(0,A.useState)(null),[u,d]=(0,A.useState)([]),p=(0,A.useRef)(new Set),h=(0,A.useRef)(new Map),[g]=(0,A.useState)(()=>new Map);O(()=>{let e=()=>{for(let e of s.getSnapshot().windows)e.frame&&g.set(e.id,e.frame)};return e(),s.subscribe(e)},[s,g]),O(()=>(R.set(s,d),()=>{R.get(s)===d&&R.delete(s)}),[s]);let _=f(),[y]=(0,A.useState)(()=>m({fallbackFocus:v})),b=_?.stack??y,[x]=(0,A.useState)(()=>a===void 0?ce:a),S=de(x),[C]=(0,A.useState)(()=>({current:!1})),w=(0,A.useCallback)((e,t)=>(p.current.has(e)?p.current.delete(e):t(),()=>{p.current.add(e),queueMicrotask(()=>{p.current.delete(e)&&s.close(e,{force:!0})})}),[s]),T=(0,A.useCallback)((e,t)=>(h.current.set(e,t),()=>{h.current.get(e)===t&&h.current.delete(e)}),[]),E=(0,A.useCallback)(e=>h.current.get(e)??null,[]),D=(0,A.useMemo)(()=>({manager:s,binding:c,messages:{...pe,...i},chrome:r??L,content:u,setBinding:l,retain:w,registerTarget:T,target:E,lastFrames:g,stack:b,surface:S,focusReturn:C}),[s,c,i,r,u,w,T,E,g,b,S,C]);return(0,j.jsx)(ne.Provider,{value:D,children:o})}var R=new WeakMap;function xe(e,t){let{content:n,url:r,sandbox:i,element:a,icon:o,app:s,chrome:c,className:l,...u}=t,d=()=>{},f=new Promise(e=>{d=e}),p,m=new Set(e.getSnapshot().windows.map(e=>e.id)),h=e.open({...u,data:{icon:o??null,app:s??null}}),g=m.has(h),_={id:h,result:f,close(t){return p=t,e.close(h)},focus:()=>void e.focus(h),minimize:()=>void e.minimize(h),maximize:()=>void e.maximize(h),restore:()=>void e.restore(h)},v=typeof n==`function`?n(_):n??null,y=R.get(e),b={id:h,node:r===void 0?a?(0,j.jsx)(Ce,{element:a}):v:(0,j.jsx)(Se,{url:r,title:u.title,sandbox:i}),chrome:c??null,className:l};g||y?.(e=>e.some(e=>e.id===h)?e:[...e,b]);let x=e.onEvent(e=>{e.type!==`close`||e.id!==h||(x(),y?.(e=>e.filter(e=>e.id!==h)),d(p))});return _}function z(){let{manager:e}=k();return(0,A.useMemo)(()=>({open:t=>xe(e,t),focus:t=>void e.focus(t),minimize:t=>void e.minimize(t),maximize:t=>void e.maximize(t),restore:t=>void e.restore(t),close:t=>e.close(t),cascade:()=>e.cascade(),tile:(t=`grid`)=>e.tile(t),showDesktop:()=>e.showDesktop(),manager:e}),[e])}function Se({url:e,title:t,sandbox:n}){return(0,j.jsx)(`iframe`,{src:e,title:t,sandbox:n,"data-window-content-frame":``,style:{display:`block`,width:`100%`,height:`100%`,border:0}})}function Ce({element:e}){return(0,j.jsx)(`div`,{ref:(0,A.useCallback)(t=>{if(t)return t.append(e),()=>e.remove()},[e]),style:{width:`100%`,height:`100%`}})}var B=e(S(),1);function V({children:e}){return(0,j.jsx)(`svg`,{viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1`,"aria-hidden":`true`,focusable:`false`,children:e})}var we=()=>(0,j.jsx)(V,{children:(0,j.jsx)(`path`,{d:`M0 5.5h10`})}),H=()=>(0,j.jsx)(V,{children:(0,j.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`9`,height:`9`,rx:`1`})}),Te=()=>(0,j.jsxs)(V,{children:[(0,j.jsx)(`rect`,{x:`0.5`,y:`2.5`,width:`7`,height:`7`,rx:`1`}),(0,j.jsx)(`path`,{d:`M2.5 2.5V1.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1`})]}),Ee=()=>(0,j.jsx)(V,{children:(0,j.jsx)(`path`,{d:`M0.5 0.5l9 9M9.5 0.5l-9 9`})}),De=()=>(0,j.jsx)(`svg`,{viewBox:`0 0 10 10`,"aria-hidden":`true`,focusable:`false`,fill:`currentColor`,children:(0,j.jsx)(`path`,{d:`M2 2h4.2L2 6.2zM8 8H3.8L8 3.8z`})}),Oe=()=>(0,j.jsx)(`svg`,{viewBox:`0 0 10 10`,"aria-hidden":`true`,focusable:`false`,stroke:`currentColor`,strokeWidth:`1.4`,children:(0,j.jsx)(`path`,{d:`M1.5 5h7`})}),ke=()=>(0,j.jsx)(`svg`,{viewBox:`0 0 10 10`,"aria-hidden":`true`,focusable:`false`,stroke:`currentColor`,strokeWidth:`1.3`,children:(0,j.jsx)(`path`,{d:`M2.2 2.2l5.6 5.6M7.8 2.2l-5.6 5.6`})}),Ae=()=>(0,j.jsx)(V,{children:(0,j.jsx)(`path`,{d:`M0.5 3.5v-3h3M6.5 0.5h3v3M9.5 6.5v3h-3M3.5 9.5h-3v-3`})}),U=()=>(0,j.jsx)(`svg`,{viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,"aria-hidden":`true`,focusable:`false`,width:`10`,height:`10`,children:(0,j.jsx)(`path`,{d:`M1.5 5.2l2.3 2.3 4.7-5`})});function W(){let e=N(),{manager:t}=k(),n=e.window;if(!n)return null;let r=e.messages,i=n.state===`maximized`,a=i||n.state===`fullscreen`;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:n.state===`normal`,onClick:e.restore,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.restore(n.title)]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:!n.capabilities.movable||a,onClick:()=>t.startMode(n.id,`move`),"data-window-menu":`move`,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.move]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:!n.capabilities.resizable||a||n.collapsed,onClick:()=>t.startMode(n.id,`size`),"data-window-menu":`size`,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.size]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:!n.capabilities.minimizable,onClick:e.minimize,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.minimize(n.title)]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:!n.capabilities.maximizable||i,onClick:e.toggleMaximize,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.maximize(n.title)]}),(0,j.jsxs)(C,{className:`dkw-menu-item`,closeOnClick:!0,checked:n.tier===`above`,onCheckedChange:t=>e.setAlwaysOnTop(t),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`,children:(0,j.jsx)(s,{children:(0,j.jsx)(U,{})})}),r.alwaysOnTop]}),(0,j.jsx)(x,{className:`dkw-menu-sep`}),(0,j.jsxs)(p,{className:`dkw-menu-item`,disabled:!n.capabilities.closable,onClick:()=>void e.close(),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),r.close(n.title)]})]})}function G({children:e}){return(0,j.jsx)(d,{children:(0,j.jsx)(y,{className:`dkw-positioner`,sideOffset:4,align:`start`,children:(0,j.jsx)(c,{className:`dkw-pop dkw-menu`,children:e})})})}function K(e){return(0,j.jsxs)(n,{children:[(0,j.jsx)(t,{...e,[D]:``}),(0,j.jsx)(G,{children:(0,j.jsx)(W,{})})]})}function q({className:e,children:t}){let n=N();return n.window?(0,j.jsxs)(_,{children:[(0,j.jsx)(b,{className:e,"aria-label":n.messages.systemMenu(n.window.title),"data-window-no-drag":``,children:t}),(0,j.jsx)(G,{children:(0,j.jsx)(W,{})})]}):null}function je({className:e,children:t}){let n=oe(),r=z(),{messages:i}=k();return(0,j.jsxs)(_,{children:[(0,j.jsx)(b,{className:e,children:t??i.windowList}),(0,j.jsxs)(G,{children:[(0,j.jsxs)(p,{className:`dkw-menu-item`,onClick:()=>r.cascade(),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),i.cascade]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,onClick:()=>r.tile(`grid`),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),i.tileGrid]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,onClick:()=>r.tile(`columns`),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),i.tileColumns]}),(0,j.jsxs)(p,{className:`dkw-menu-item`,onClick:()=>r.showDesktop(),children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`}),i.showDesktop]}),n.windows.length>0?(0,j.jsx)(x,{className:`dkw-menu-sep`}):null,(0,j.jsx)(u,{value:n.focused??``,onValueChange:e=>typeof e==`string`&&r.focus(e),children:n.windows.map(e=>(0,j.jsxs)(g,{value:e.id,className:`dkw-menu-item`,closeOnClick:!0,children:[(0,j.jsx)(`span`,{className:`dkw-menu-check`,children:(0,j.jsx)(h,{children:(0,j.jsx)(U,{})})}),e.title,e.state===`minimized`?(0,j.jsx)(`span`,{className:`dkw-kbd`,children:i.minimized}):null]},e.id))})]})]})}var Me=6,Ne=[{id:`halves`,zones:[`left`,`right`]},{id:`rows`,zones:[`top`,`bottom`]},{id:`quarters`,zones:[`top-left`,`top-right`,`bottom-left`,`bottom-right`]},{id:`thirds`,zones:[`left-third`,`center-third`,`right-third`]}];function Pe({layouts:e=T,zones:t=E,variant:n=`windows`,onPick:r,label:i,zoneLabel:a}){return(0,j.jsx)(`div`,{role:`group`,"aria-label":i,className:`dkw-flyout`,"data-variant":n,children:e.map(e=>(0,j.jsx)(`div`,{role:`group`,"aria-label":e.id,className:`dkw-layout`,children:e.zones.flatMap(e=>{let n=w(t,e);if(!n)return[];let{x:i,y:o,width:s,height:c}=n.rect;return[(0,j.jsx)(`button`,{type:`button`,className:`dkw-zone`,"aria-label":a(e),"data-zone":e,onClick:()=>r(e),style:{left:`calc(${i*100}% + 2px)`,top:`calc(${o*100}% + 2px)`,width:`calc(${s*100}% - 4px)`,height:`calc(${c*100}% - 4px)`}},e)]})},e.id))})}function Fe({variant:e,layouts:t,className:n,keyshortcuts:r,children:i}){let a=N(),o=a.window,s=(0,A.useRef)(null),c=(0,A.useRef)(null),l=(0,A.useRef)(null),[u,d]=(0,A.useState)(null),f=()=>{l.current!==null&&clearTimeout(l.current),l.current=null},p=()=>{let e=s.current?.getBoundingClientRect();e&&d({top:e.bottom+Me,left:e.left,right:e.right})},m=e=>{f(),d(null),e&&s.current?.focus()};if((0,A.useEffect)(()=>f,[]),(0,A.useEffect)(()=>{if(!u)return;let e=e=>{e.key===`Escape`&&m(!0)},t=e=>{let t=e.target;t instanceof Node&&(c.current?.contains(t)||s.current?.contains(t))||m(!1)};return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t,!0),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t,!0)}},[u]),!o)return null;let h=o.state===`maximized`?a.messages.restore(o.title):a.messages.maximize(o.title),g=typeof window>`u`?0:window.innerWidth;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{ref:s,type:`button`,className:n,"aria-label":h,"aria-keyshortcuts":r,"aria-expanded":u!==null,"aria-haspopup":`true`,"data-window-action":`maximize`,disabled:!o.capabilities.maximizable,onClick:()=>{m(!1),a.toggleMaximize()},onPointerEnter:e=>{e.pointerType===`mouse`&&(f(),l.current=setTimeout(p,450))},onPointerLeave:()=>{f(),l.current=setTimeout(()=>m(!1),250)},onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),p(),requestAnimationFrame(()=>c.current?.querySelector(`button`)?.focus()))},children:i}),u?(0,B.createPortal)((0,j.jsx)(`div`,{ref:c,className:`dkw-pop`,"data-testid":`snap-flyout`,style:{position:`fixed`,top:u.top,...e===`mac`?{left:u.left-8}:{right:Math.max(8,g-u.right)}},onPointerEnter:f,onPointerLeave:()=>{f(),l.current=setTimeout(()=>m(!1),250)},children:(0,j.jsx)(Pe,{variant:e,layouts:t??(e===`mac`?Ne:T),label:a.messages.snapLayouts(o.title),zoneLabel:a.messages.snapZone,onPick:e=>{m(!0),a.snap(e)}})}),document.body):null]})}var Ie=[`neutral`,`mac`,`windows`,`material`,`gnome`,`retro`,`terminal`],Le=(0,A.createContext)(null);function Re({children:e,className:t}){let n=(0,A.useContext)(Le),r=(0,j.jsx)(`div`,{className:t?`dkw-toolbar ${t}`:`dkw-toolbar`,"data-window-toolbar":n?.placement??``,children:e});return n?n.slot?(0,B.createPortal)(r,n.slot):null:r}var ze={neutral:[`minimize`,`maximize`,`close`],mac:[`close`,`minimize`,`maximize`],windows:[`minimize`,`maximize`,`close`],material:[`minimize`,`maximize`,`close`],gnome:[`close`],retro:[`minimize`,`maximize`,`close`],terminal:[`minimize`,`maximize`,`close`]};function Be(e,t,n){return e===`mac`?t===`close`?(0,j.jsx)(ke,{}):t===`minimize`?(0,j.jsx)(Oe,{}):(0,j.jsx)(De,{}):t===`close`?(0,j.jsx)(Ee,{}):t===`minimize`?(0,j.jsx)(we,{}):t===`fullscreen`?(0,j.jsx)(Ae,{}):n?(0,j.jsx)(Te,{}):(0,j.jsx)(H,{})}function J({preset:e,options:t}){let{window:n,id:r}=N(),i=ie();if(!n)return null;let a=n.state===`maximized`,o=(t.snapLayouts??(e===`mac`||e===`windows`))&&n.capabilities.maximizable;return(0,j.jsx)(`div`,{className:`dkw-controls`,"data-window-no-drag":``,children:(t.controls??ze[e]).map(s=>{if(typeof s!=`string`)return(0,j.jsx)(`button`,{type:`button`,className:`dkw-btn`,"aria-label":s.label,"data-window-control":s.key,"aria-pressed":s.pressed?.(n),onClick:()=>s.onClick(r,i),children:s.icon},s.key);let c=t.keyshortcuts?.[s];return s===`maximize`&&o?(0,j.jsx)(Fe,{variant:e===`mac`?`mac`:`windows`,className:`dkw-btn`,keyshortcuts:c,children:Be(e,s,a)},s):(0,j.jsx)(I,{action:s,className:`dkw-btn`,keyshortcuts:c,children:Be(e,s,a)},s)})})}function Ve({preset:e,options:t,window:n,children:r}){let i=t.toolbar??`below-title`,[a,o]=(0,A.useState)(null),s=(0,A.useMemo)(()=>({placement:i,slot:a}),[i,a]),c=i===`in-title`?(0,j.jsx)(`div`,{ref:o,className:`dkw-toolbar-slot`,"data-placement":`in-title`}):null;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(K,{className:`dkw-titlebar`,children:e===`windows`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(q,{className:`dkw-btn dkw-icon`,children:n.data.icon??(0,j.jsx)(H,{})}),(0,j.jsx)(F,{className:`dkw-title`}),c,(0,j.jsx)(J,{preset:e,options:t})]}):e===`mac`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(J,{preset:e,options:t}),(0,j.jsx)(F,{className:`dkw-title`}),c]}):e===`gnome`?(0,j.jsxs)(j.Fragment,{children:[c,(0,j.jsx)(F,{className:`dkw-title`}),(0,j.jsx)(J,{preset:e,options:t})]}):(0,j.jsxs)(j.Fragment,{children:[n.data.icon?(0,j.jsx)(`span`,{className:`dkw-icon`,"aria-hidden":`true`,children:n.data.icon}):null,(0,j.jsx)(F,{className:`dkw-title`}),c,(0,j.jsx)(J,{preset:e,options:t})]})}),i===`below-title`?(0,j.jsx)(`div`,{ref:o,className:`dkw-toolbar-slot`,"data-placement":`below-title`}):null,(0,j.jsx)(`div`,{className:`dkw-body`,children:(0,j.jsx)(Le.Provider,{value:s,children:r})})]})}function Y(e,t={}){return{name:e,render:n=>(0,j.jsx)(Ve,{...n,preset:e,options:t})}}var He=Y(`neutral`),Ue=Y(`mac`),We=Y(`windows`),Ge=Y(`material`),Ke=Y(`gnome`),X=Y(`retro`),Z=Y(`terminal`),qe={neutral:He,mac:Ue,windows:We,material:Ge,gnome:Ke,retro:X,terminal:Z},Je=`kitora-windows-ui`,Q=`ui-sans-serif, system-ui, -apple-system, "Segoe UI Variable Text", "Segoe UI", "Geist Variable", sans-serif`,$=e=>`:where(.dark, [data-theme="dark"]) ${e}`,Ye=`
[data-chrome] {
  --wk-font: ${Q};
  --wk-accent: #2563eb;
  --wk-radius: 8px;
  --wk-frame-bg: #fff;
  --wk-frame-fg: #1f2328;
  --wk-frame-border: rgb(0 0 0 / 0.14);
  --wk-shadow: 0 2px 6px rgb(0 0 0 / 0.08), 0 8px 24px rgb(0 0 0 / 0.10);
  --wk-shadow-active: 0 4px 10px rgb(0 0 0 / 0.10), 0 18px 48px rgb(0 0 0 / 0.22);
  --wk-title-bg: #f5f5f5;
  --wk-title-fg: #1f2328;
  --wk-title-fg-inactive: #5f646a;
  --wk-title-height: 30px;
  --wk-control-hover: rgb(0 0 0 / 0.07);
}
[data-chrome="neutral"] {
  --wk-radius: calc(var(--radius, 0.5rem) + 2px);
  --wk-frame-bg: var(--background, #fff);
  --wk-frame-fg: var(--foreground, #18181b);
  --wk-frame-border: var(--border, #e4e4e7);
  --wk-title-bg: color-mix(in srgb, var(--muted, #f4f4f5) 70%, var(--background, #fff));
  --wk-title-fg: var(--foreground, #18181b);
  --wk-title-fg-inactive: var(--muted-foreground, #71717a);
  --wk-title-height: 30px;
  --wk-accent: var(--primary, #10b981);
  --wk-control-hover: color-mix(in srgb, var(--foreground, #000) 9%, transparent);
}
[data-chrome="mac"] {
  --wk-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", ${Q};
  --wk-radius: 11px;
  --wk-frame-bg: rgb(255 255 255 / 0.92);
  --wk-frame-border: rgb(0 0 0 / 0.22);
  --wk-shadow: 0 0 0 0.5px rgb(0 0 0 / 0.12), 0 6px 18px rgb(0 0 0 / 0.14);
  --wk-shadow-active: 0 0 0 0.5px rgb(0 0 0 / 0.18), 0 12px 30px rgb(0 0 0 / 0.22), 0 30px 70px rgb(0 0 0 / 0.30);
  --wk-title-bg: rgb(236 236 238 / 0.78);
  --wk-title-fg: #3b3b3d;
  --wk-title-fg-inactive: #6a6a70;
  --wk-title-height: 30px;
  --wk-accent: #007aff;
}
[data-chrome="windows"] {
  --wk-font: "Segoe UI Variable Text", "Segoe UI", ${Q};
  --wk-radius: 8px;
  --wk-frame-bg: #fbfbfb;
  --wk-frame-border: rgb(0 0 0 / 0.16);
  --wk-shadow: 0 2px 8px rgb(0 0 0 / 0.12);
  --wk-shadow-active: 0 8px 16px rgb(0 0 0 / 0.14), 0 32px 64px rgb(0 0 0 / 0.28);
  --wk-title-bg: #f0f3f9;
  --wk-title-fg: #1b1b1b;
  --wk-title-fg-inactive: #636363;
  --wk-title-height: 32px;
  --wk-accent: #0067c0;
  --wk-control-hover: rgb(0 0 0 / 0.06);
}
${$(`[data-chrome]`)} {
  --wk-frame-bg: #1f2023;
  --wk-frame-fg: #e6e6e6;
  --wk-frame-border: rgb(255 255 255 / 0.12);
  --wk-shadow: 0 2px 8px rgb(0 0 0 / 0.4);
  --wk-shadow-active: 0 8px 20px rgb(0 0 0 / 0.45), 0 24px 60px rgb(0 0 0 / 0.55);
  --wk-title-bg: #2a2b2f;
  --wk-title-fg: #ececec;
  --wk-title-fg-inactive: #9d9ea4;
  --wk-control-hover: rgb(255 255 255 / 0.09);
}
${$(`[data-chrome="neutral"]`)} {
  --wk-frame-bg: var(--background, #0b0b0c);
  --wk-frame-fg: var(--foreground, #fafafa);
  --wk-frame-border: var(--border, #27272a);
  --wk-title-bg: color-mix(in srgb, var(--muted, #27272a) 70%, var(--background, #0b0b0c));
  --wk-title-fg: var(--foreground, #fafafa);
  --wk-title-fg-inactive: var(--muted-foreground, #a1a1aa);
}
${$(`[data-chrome="mac"]`)} {
  --wk-frame-bg: rgb(30 30 32 / 0.9);
  --wk-frame-border: rgb(0 0 0 / 0.6);
  --wk-shadow: 0 0 0 0.5px rgb(255 255 255 / 0.12) inset, 0 6px 18px rgb(0 0 0 / 0.4);
  --wk-shadow-active: 0 0 0 0.5px rgb(255 255 255 / 0.16) inset, 0 12px 30px rgb(0 0 0 / 0.45), 0 30px 70px rgb(0 0 0 / 0.55);
  --wk-title-bg: rgb(44 44 47 / 0.8);
  --wk-title-fg: #e3e3e5;
  --wk-title-fg-inactive: #98989e;
}
${$(`[data-chrome="windows"]`)} {
  --wk-frame-bg: #202020;
  --wk-frame-border: rgb(255 255 255 / 0.1);
  --wk-title-bg: #1c2129;
  --wk-title-fg: #fff;
  --wk-title-fg-inactive: #a0a0a0;
  --wk-accent: #4cc2ff;
}
[data-chrome="material"], [data-chrome="gnome"], [data-chrome="retro"], [data-chrome="terminal"] {
  --wk-font: var(--font-sans, ${Q});
  --wk-frame-bg: var(--background, #fff);
  --wk-frame-fg: var(--foreground, #18181b);
  --wk-frame-border: var(--border, #e4e4e7);
  --wk-title-fg: var(--foreground, #18181b);
  --wk-title-fg-inactive: var(--muted-foreground, #71717a);
  --wk-accent: var(--primary, #10b981);
  --wk-control-hover: color-mix(in srgb, var(--foreground, #000) 8%, transparent);
}
[data-chrome="material"] {
  --wk-radius: 16px;
  --wk-shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 2px 6px 2px rgb(0 0 0 / 0.15);
  --wk-shadow-active: 0 2px 3px rgb(0 0 0 / 0.3), 0 6px 10px 4px rgb(0 0 0 / 0.15);
  --wk-title-bg: color-mix(in srgb, var(--primary, #6750a4) 6%, var(--background, #fff));
  --wk-title-height: 40px;
}
[data-chrome="gnome"] {
  --wk-radius: 12px;
  --wk-shadow: 0 0 0 1px rgb(0 0 0 / 0.06), 0 2px 8px rgb(0 0 0 / 0.12);
  --wk-shadow-active: 0 0 0 1px rgb(0 0 0 / 0.08), 0 4px 18px rgb(0 0 0 / 0.22);
  --wk-title-bg: color-mix(in srgb, var(--muted, #ebebeb) 80%, var(--background, #fff));
  --wk-title-height: 46px;
}
[data-chrome="retro"] {
  --wk-radius: 0px;
  --wk-frame-bg: var(--card, #c0c0c0);
  --wk-shadow: inset 1px 1px 0 0 rgb(255 255 255 / 0.7), inset -1px -1px 0 0 rgb(0 0 0 / 0.55), inset 2px 2px 0 0 rgb(255 255 255 / 0.25), inset -2px -2px 0 0 rgb(0 0 0 / 0.25);
  --wk-shadow-active: var(--wk-shadow), 2px 2px 0 0 rgb(0 0 0 / 0.5);
  --wk-title-bg: linear-gradient(90deg, #000080, #1084d0);
  --wk-title-bg-inactive: linear-gradient(90deg, #555555, #707070);
  --wk-title-height: 24px;
}
[data-chrome="terminal"] {
  --wk-font: var(--font-mono, ui-monospace, monospace);
  --wk-radius: 0px;
  --wk-frame-border: var(--foreground, #18181b);
  --wk-shadow: none;
  --wk-shadow-active: none;
  --wk-title-bg: var(--muted, #f4f4f5);
  --wk-title-height: 25px; /* one 24 px row of buttons under the 1 px frame line (WCAG 2.5.8 target size) */
}
${$(`[data-chrome="material"]`)}, ${$(`[data-chrome="gnome"]`)}, ${$(`[data-chrome="retro"]`)}, ${$(`[data-chrome="terminal"]`)} {
  --wk-frame-bg: var(--background, #0b0b0c);
  --wk-frame-fg: var(--foreground, #fafafa);
  --wk-frame-border: var(--border, #27272a);
  --wk-title-fg: var(--foreground, #fafafa);
  --wk-title-fg-inactive: var(--muted-foreground, #a1a1aa);
}
${$(`[data-chrome="material"]`)} { --wk-title-bg: color-mix(in srgb, var(--primary, #d0bcff) 8%, var(--background, #141218)); }
${$(`[data-chrome="gnome"]`)} { --wk-title-bg: color-mix(in srgb, var(--muted, #303030) 80%, var(--background, #1e1e1e)); }
${$(`[data-chrome="retro"]`)} { --wk-frame-bg: var(--card, #4d4d4d); }
${$(`[data-chrome="terminal"]`)} { --wk-frame-border: var(--foreground, #fafafa); --wk-title-bg: var(--muted, #27272a); }
`,Xe=`
[data-windows-desktop] { font-family: ${Q}; isolation: isolate; }
[data-window-id][data-chrome] {
  display: flex; flex-direction: column; overflow: hidden;
  font-family: var(--wk-font); font-size: 12px; color: var(--wk-frame-fg);
  /* No var() inside a shorthand: a shorthand holding var() is re-substituted and re-parsed for each of its longhands on every
     restyle, and a raise restyles every window it renumbers (W119). The literal shorthands still reset every longhand
     (background-image, border-image…) as before; only the colours read the tokens. Same computed values. */
  background: none; background-color: var(--wk-frame-bg);
  border: 1px solid;
  border-top-color: var(--wk-frame-border); border-right-color: var(--wk-frame-border); border-bottom-color: var(--wk-frame-border); border-left-color: var(--wk-frame-border);
  border-radius: var(--wk-radius);
  box-shadow: var(--wk-shadow);
  transition: box-shadow 160ms ease, opacity 160ms ease, scale 160ms ease;
}
@starting-style { [data-window-id][data-chrome] { opacity: 0; scale: 0.97; } }
[data-window-id][data-chrome][data-window-focused] { box-shadow: var(--wk-shadow-active); }
[data-window-id][data-chrome][data-window-state="maximized"], [data-window-id][data-chrome][data-window-state="fullscreen"] { border-radius: 0; }
[data-window-id][data-chrome]:focus-visible { outline: 2px solid var(--wk-accent); outline-offset: 2px; }
[data-window-id][data-window-gesture] { transition: none; }
.dkw-titlebar {
  display: flex; align-items: center; flex: none; gap: 6px; height: var(--wk-title-height); padding-inline: 8px;
  background: var(--wk-title-bg); color: var(--wk-title-fg-inactive); border-bottom: 1px solid color-mix(in srgb, var(--wk-frame-border) 70%, transparent);
  cursor: default;
}
[data-window-focused] > .dkw-titlebar { color: var(--wk-title-fg); }
.dkw-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; font-size: 12px; }
.dkw-icon { display: grid; place-items: center; width: 16px; height: 16px; flex: none; }
.dkw-icon > svg { width: 14px; height: 14px; }
.dkw-body { flex: 1; min-height: 0; overflow: auto; position: relative; }
.dkw-controls { display: flex; align-items: center; flex: none; }
.dkw-btn {
  display: grid; place-items: center; border: 0; background: transparent; color: inherit; padding: 0; margin: 0; cursor: default; font: inherit;
}
.dkw-btn:focus-visible { outline: 2px solid var(--wk-accent); outline-offset: -2px; }
.dkw-btn:disabled { opacity: 0.4; }
[data-chrome="neutral"] .dkw-btn[aria-pressed="true"] { color: var(--wk-accent); background: var(--wk-control-hover); }
.dkw-btn svg { width: 10px; height: 10px; pointer-events: none; }

/* The window toolbar (WindowToolbar): in a bar between the title bar and the body, or inside the title bar when the chrome's
   toolbar is "in-title". A slot shows only while a toolbar with content sits in it, so a window without one (or with an
   empty one) is unchanged. */
.dkw-toolbar { display: flex; flex: 1; align-items: center; gap: 6px; min-width: 0; }
.dkw-toolbar-slot { display: flex; align-items: center; min-width: 0; }
.dkw-toolbar-slot:not(:has(> .dkw-toolbar:not(:empty))) { display: none; }
.dkw-toolbar-slot[data-placement="below-title"] { flex: none; padding: 4px 8px; background: var(--wk-title-bg); border-bottom: 1px solid color-mix(in srgb, var(--wk-frame-border) 70%, transparent); }
.dkw-toolbar-slot[data-placement="in-title"] { flex: 1; align-self: stretch; }
.dkw-titlebar:has(> .dkw-toolbar-slot > .dkw-toolbar:not(:empty)) { height: var(--wk-toolbar-title-height, 40px); gap: 8px; }
.dkw-titlebar:has(> .dkw-toolbar-slot > .dkw-toolbar:not(:empty)) > .dkw-title { flex: 0 1 auto; }

/* neutral */
[data-chrome="neutral"] .dkw-titlebar { padding-inline: 8px 4px; }
/* 24 px: the smallest tap target WCAG 2.5.8 allows for buttons this close together */
[data-chrome="neutral"] .dkw-btn { width: 24px; height: 24px; border-radius: 5px; color: var(--wk-title-fg-inactive); }
[data-chrome="neutral"] .dkw-btn:hover { background: var(--wk-control-hover); color: var(--wk-title-fg); }
[data-chrome="neutral"] .dkw-btn[data-window-action="close"]:hover { background: color-mix(in srgb, #ef4444 85%, transparent); color: #fff; }

/* macOS: traffic lights, centred title, translucent title bar */
[data-chrome="mac"] .dkw-titlebar {
  position: relative; justify-content: center; padding-inline: 12px; border-bottom-color: color-mix(in srgb, var(--wk-frame-border) 60%, transparent);
  backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);
}
[data-chrome="mac"] { backdrop-filter: blur(24px) saturate(160%); -webkit-backdrop-filter: blur(24px) saturate(160%); }
[data-chrome="mac"] .dkw-title { flex: 0 1 auto; text-align: center; font-weight: 600; font-size: 13px; padding-inline: 72px; }
[data-chrome="mac"] .dkw-controls { position: absolute; inset-inline-start: 12px; top: 0; bottom: 0; gap: 8px; }
[data-chrome="mac"] .dkw-btn {
  width: 12px; height: 12px; border-radius: 50%; color: transparent;
  background: #d1d1d4; box-shadow: inset 0 0 0 0.5px rgb(0 0 0 / 0.15);
}
${$(`[data-chrome="mac"] .dkw-btn`)} { background: #4a4a4e; }
[data-chrome="mac"] .dkw-btn svg { width: 8px; height: 8px; }
[data-chrome="mac"][data-window-focused] .dkw-btn[data-window-action="close"], [data-chrome="mac"] .dkw-controls:hover .dkw-btn[data-window-action="close"] { background: #ff5f57; box-shadow: inset 0 0 0 0.5px #e2463f; }
[data-chrome="mac"][data-window-focused] .dkw-btn[data-window-action="minimize"], [data-chrome="mac"] .dkw-controls:hover .dkw-btn[data-window-action="minimize"] { background: #febc2e; box-shadow: inset 0 0 0 0.5px #e1a116; }
[data-chrome="mac"][data-window-focused] .dkw-btn[data-window-action="maximize"], [data-chrome="mac"] .dkw-controls:hover .dkw-btn[data-window-action="maximize"] { background: #28c840; box-shadow: inset 0 0 0 0.5px #14ae2c; }
[data-chrome="mac"] .dkw-controls:hover .dkw-btn, [data-chrome="mac"] .dkw-btn:focus-visible { color: rgb(0 0 0 / 0.6); }
[data-chrome="mac"] .dkw-btn:active { filter: brightness(0.85); }
/* macOS unified toolbar: a taller title bar, the title after the traffic lights instead of centred, the toolbar at the end. */
[data-chrome="mac"] .dkw-titlebar:has(> .dkw-toolbar-slot > .dkw-toolbar:not(:empty)) { --wk-toolbar-title-height: 46px; justify-content: flex-start; padding-inline: 84px 10px; }
[data-chrome="mac"] .dkw-titlebar:has(> .dkw-toolbar-slot > .dkw-toolbar:not(:empty)) > .dkw-title { padding-inline: 0; text-align: start; }

/* Windows 11: icon and title left, 46 px caption buttons right, red close */
[data-chrome="windows"] .dkw-titlebar { padding-inline: 12px 0; gap: 8px; border-bottom: 0; }
[data-chrome="windows"] .dkw-title { font-weight: 400; font-size: 12px; }
[data-chrome="windows"] .dkw-controls { align-self: stretch; }
[data-chrome="windows"] .dkw-btn { width: 46px; height: 100%; color: var(--wk-title-fg-inactive); transition: background 80ms linear; }
[data-chrome="windows"][data-window-focused] .dkw-btn { color: var(--wk-title-fg); }
[data-chrome="windows"] .dkw-btn:hover { background: var(--wk-control-hover); }
[data-chrome="windows"] .dkw-btn[data-window-action="close"]:hover { background: #c42b1c; color: #fff; }
[data-chrome="windows"] .dkw-btn.dkw-icon { width: 18px; height: 18px; border-radius: 4px; padding: 1px; }
[data-chrome="windows"] .dkw-btn.dkw-icon:hover { background: var(--wk-control-hover); }
[data-chrome="windows"] .dkw-btn[data-window-action="close"]:active { background: #c84031; color: #fff; }
[data-chrome="windows"] .dkw-toolbar-slot[data-placement="below-title"] { background: var(--wk-frame-bg); border-bottom: 0; padding-block: 6px; }
[data-chrome="windows"] .dkw-body { border-top: 1px solid color-mix(in srgb, var(--wk-frame-border) 60%, transparent); background: var(--wk-frame-bg); }
/* Material 3: a top app bar with the title at the start, round 32 px icon buttons, no rule under it */
[data-chrome="material"] .dkw-titlebar { padding-inline: 16px 6px; gap: 8px; border-bottom: 0; }
[data-chrome="material"] .dkw-title { font-weight: 500; font-size: 14px; }
[data-chrome="material"] .dkw-controls { gap: 2px; }
[data-chrome="material"] .dkw-btn { width: 32px; height: 32px; border-radius: 50%; color: var(--wk-title-fg-inactive); }
[data-chrome="material"] .dkw-btn:hover { background: var(--wk-control-hover); color: var(--wk-title-fg); }

/* GNOME (libadwaita): a 46 px header bar, the title bold and centred, the toolbar at the start, one round close button */
[data-chrome="gnome"] .dkw-titlebar { position: relative; justify-content: center; padding-inline: 8px; }
[data-chrome="gnome"] .dkw-title { flex: 0 1 auto; text-align: center; font-weight: 700; font-size: 13px; padding-inline: 48px; }
[data-chrome="gnome"] .dkw-controls { position: absolute; inset-inline-end: 10px; top: 0; bottom: 0; gap: 6px; }
[data-chrome="gnome"] .dkw-btn { width: 24px; height: 24px; border-radius: 50%; color: var(--wk-title-fg); background: color-mix(in srgb, var(--foreground, #000) 10%, transparent); }
[data-chrome="gnome"] .dkw-btn:hover { background: color-mix(in srgb, var(--foreground, #000) 16%, transparent); }
[data-chrome="gnome"] .dkw-btn svg { width: 8px; height: 8px; }
[data-chrome="gnome"] .dkw-toolbar-slot[data-placement="in-title"] { position: absolute; inset-inline-start: 8px; top: 0; bottom: 0; }
[data-chrome="gnome"] .dkw-titlebar:has(> .dkw-toolbar-slot > .dkw-toolbar:not(:empty)) { --wk-toolbar-title-height: 46px; }

/* Retro (Windows 95): a navy band (grey when inactive), the title white and bold, bevelled grey caption buttons */
[data-chrome="retro"] { padding: 3px; border-color: transparent; }
[data-chrome="retro"] .dkw-titlebar { padding-inline: 4px 3px; gap: 4px; background: var(--wk-title-bg-inactive); color: #fff; border-bottom: 0; }
[data-chrome="retro"][data-window-focused] > .dkw-titlebar { background: var(--wk-title-bg); color: #fff; }
[data-chrome="retro"] .dkw-title { font-weight: 700; font-size: 12px; }
[data-chrome="retro"] .dkw-controls { gap: 2px; }
[data-chrome="retro"] .dkw-btn {
  width: 18px; height: 16px; border-radius: 0; color: #000; background: #c0c0c0;
  box-shadow: inset 1px 1px 0 0 #fff, inset -1px -1px 0 0 #000, inset 2px 2px 0 0 #dfdfdf, inset -2px -2px 0 0 #808080;
}
[data-chrome="retro"] .dkw-btn:active { box-shadow: inset 1px 1px 0 0 #000, inset -1px -1px 0 0 #fff, inset 2px 2px 0 0 #808080; }
[data-chrome="retro"] .dkw-btn svg { width: 8px; height: 8px; }
[data-chrome="retro"] .dkw-btn[data-window-action="close"] { margin-inline-start: 2px; }
[data-chrome="retro"] .dkw-body { background: var(--wk-frame-bg); }
[data-chrome="retro"] .dkw-toolbar-slot[data-placement="below-title"] { background: var(--wk-frame-bg); border-bottom: 1px solid var(--wk-frame-border); }

/* Terminal: one line in the muted fill, monospace, square text buttons, a hard 1 px frame */
[data-chrome="terminal"] .dkw-titlebar { padding-inline: 6px 0; gap: 6px; border-bottom: 1px solid var(--wk-frame-border); }
[data-chrome="terminal"] .dkw-title { font-weight: 400; font-size: 12px; }
[data-chrome="terminal"] .dkw-controls { align-self: stretch; }
[data-chrome="terminal"] .dkw-btn { width: 26px; height: 100%; border-radius: 0; border-inline-start: 1px solid var(--wk-frame-border); color: var(--wk-title-fg); }
[data-chrome="terminal"] .dkw-btn:hover { background: var(--wk-title-fg); color: var(--wk-frame-bg); }
`,Ze=`
[data-windows-desktop] [data-window-snap-preview] {
  outline: none; border-radius: 12px;
  background: color-mix(in srgb, var(--wk-snap, #3b82f6) 18%, rgb(255 255 255 / 0.35));
  border: 1px solid color-mix(in srgb, var(--wk-snap, #3b82f6) 55%, transparent);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--wk-snap, #3b82f6) 10%, transparent) inset, 0 10px 30px rgb(0 0 0 / 0.18);
  backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%);
  clip-path: inset(6px round 12px);
  transition: left 140ms ease, top 140ms ease, width 140ms ease, height 140ms ease;
}
${$(`[data-windows-desktop] [data-window-snap-preview]`)} { background: color-mix(in srgb, var(--wk-snap, #60a5fa) 22%, rgb(20 20 24 / 0.45)); }
`,Qe=`
.dkw-pop {
  --wk-pop-bg: rgb(250 250 252 / 0.92); --wk-pop-fg: #1f2328; --wk-pop-border: rgb(0 0 0 / 0.12); --wk-pop-hover: rgb(0 0 0 / 0.06); --wk-accent: #2563eb;
  font-family: ${Q}; font-size: 12px; color: var(--wk-pop-fg);
  background: var(--wk-pop-bg); border: 1px solid var(--wk-pop-border); border-radius: 10px;
  box-shadow: 0 12px 40px rgb(0 0 0 / 0.22), 0 2px 6px rgb(0 0 0 / 0.08);
  backdrop-filter: blur(24px) saturate(160%); -webkit-backdrop-filter: blur(24px) saturate(160%);
  z-index: ${r(`overlay`)};
}
${$(`.dkw-pop`)}, .dark.dkw-pop { --wk-pop-bg: rgb(40 40 44 / 0.92); --wk-pop-fg: #ececec; --wk-pop-border: rgb(255 255 255 / 0.12); --wk-pop-hover: rgb(255 255 255 / 0.08); --wk-accent: #60a5fa; }
.dkw-positioner { z-index: ${r(`overlay`)}; outline: none; }
.dkw-menu { min-width: 200px; padding: 4px; outline: none; }
.dkw-menu-item {
  display: flex; align-items: center; gap: 8px; height: 26px; padding-inline: 8px; border-radius: 6px; cursor: default; outline: none; user-select: none;
}
.dkw-menu-item[data-highlighted] { background: var(--wk-accent); color: #fff; }
.dkw-menu-item[data-disabled] { opacity: 0.45; }
.dkw-menu-item .dkw-kbd { margin-inline-start: auto; opacity: 0.6; font-size: 11px; }
.dkw-menu-check { width: 14px; display: grid; place-items: center; }
.dkw-menu-sep { height: 1px; margin: 4px 6px; background: var(--wk-pop-border); }
.dkw-menu-label { padding: 4px 8px 2px; font-size: 11px; opacity: 0.6; }

.dkw-flyout { padding: 10px; display: grid; grid-template-columns: repeat(3, auto); gap: 10px; }
.dkw-flyout[data-variant="mac"] { grid-template-columns: repeat(4, auto); }
.dkw-layout { position: relative; width: 74px; height: 46px; padding: 0; border: 0; background: transparent; }
.dkw-zone {
  position: absolute; padding: 0; border: 1px solid color-mix(in srgb, var(--wk-pop-fg) 30%, transparent); border-radius: 4px;
  background: color-mix(in srgb, var(--wk-pop-fg) 8%, transparent); cursor: default;
}
.dkw-zone:hover, .dkw-zone:focus-visible { background: var(--wk-accent); border-color: var(--wk-accent); outline: none; }
.dkw-flyout-title { grid-column: 1 / -1; font-size: 11px; font-weight: 600; opacity: 0.7; }

.dkw-taskbar {
  display: flex; align-items: center; gap: 4px; height: 48px; padding-inline: 10px; flex: none;
  font-family: ${Q}; font-size: 12px; color: #1b1b1b;
  background: rgb(238 241 247 / 0.85); border-top: 1px solid rgb(0 0 0 / 0.08);
  backdrop-filter: blur(30px) saturate(150%); -webkit-backdrop-filter: blur(30px) saturate(150%);
}
${$(`.dkw-taskbar`)} { background: rgb(28 30 36 / 0.86); color: #f3f3f3; border-top-color: rgb(255 255 255 / 0.08); }
.dkw-taskbar-apps { display: flex; align-items: center; gap: 4px; flex: 1; justify-content: center; min-width: 0; }
.dkw-task {
  position: relative; display: flex; align-items: center; gap: 8px; height: 40px; min-width: 40px; padding-inline: 8px; border: 0; border-radius: 6px;
  background: transparent; color: inherit; font: inherit; cursor: default;
}
.dkw-task:hover { background: rgb(0 0 0 / 0.05); }
${$(`.dkw-task:hover`)} { background: rgb(255 255 255 / 0.07); }
.dkw-task[aria-pressed="true"] { background: rgb(255 255 255 / 0.75); box-shadow: 0 0 0 1px rgb(0 0 0 / 0.05); }
${$(`.dkw-task[aria-pressed="true"]`)} { background: rgb(255 255 255 / 0.1); box-shadow: none; }
.dkw-task:focus-visible { outline: 2px solid #0067c0; outline-offset: -2px; }
.dkw-task-icon { display: grid; place-items: center; width: 24px; height: 24px; }
.dkw-task-label { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dkw-taskbar[data-labels="false"] .dkw-task-label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.dkw-task::after {
  content: ""; position: absolute; bottom: 2px; left: 50%; translate: -50% 0; width: 6px; height: 3px; border-radius: 2px; background: #8a8a8a; transition: width 160ms ease, background 160ms ease;
}
.dkw-task[aria-pressed="true"]::after { width: 16px; background: #0067c0; }
${$(`.dkw-task[aria-pressed="true"]::after`)} { background: #4cc2ff; }
.dkw-task[data-attention] { animation: dkw-attention 1s ease-in-out infinite alternate; }
@keyframes dkw-attention { from { background: rgb(255 170 60 / 0.25); } to { background: rgb(255 140 0 / 0.75); } }
.dkw-tray { display: flex; align-items: center; gap: 10px; font-size: 11px; line-height: 1.25; text-align: end; font-variant-numeric: tabular-nums; }
.dkw-peek { width: 6px; height: 40px; border-inline-start: 1px solid rgb(127 127 127 / 0.35); margin-inline-start: 4px; padding: 0; border-block: 0; border-inline-end: 0; background: transparent; }
.dkw-peek:hover, .dkw-peek:focus-visible { background: rgb(127 127 127 / 0.2); outline: none; }

.dkw-dock {
  position: absolute; bottom: 8px; left: 50%; translate: -50% 0;
  display: flex; align-items: flex-end; gap: 6px; padding: 6px 8px; height: 64px;
  background: rgb(255 255 255 / 0.32); border: 1px solid rgb(255 255 255 / 0.45); border-radius: 18px;
  box-shadow: 0 10px 40px rgb(0 0 0 / 0.25), inset 0 0 0 0.5px rgb(0 0 0 / 0.08);
  backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%);
  font-family: ${Q};
}
${$(`.dkw-dock`)} { background: rgb(40 40 44 / 0.42); border-color: rgb(255 255 255 / 0.16); }
.dkw-dock-item {
  --dkw-mag: 1;
  position: relative; display: grid; place-items: center; width: 50px; height: 50px; padding: 0; border: 0; background: transparent; cursor: default;
  scale: var(--dkw-mag); transform-origin: 50% 100%; transition: scale 90ms ease-out, margin 90ms ease-out;
  margin-inline: calc((var(--dkw-mag) - 1) * 14px);
}
.dkw-dock-item:focus-visible { outline: 2px solid #fff; outline-offset: 2px; border-radius: 12px; }
.dkw-dock-item > .dkw-dock-icon { width: 100%; height: 100%; display: grid; place-items: center; }
.dkw-dock-item[data-running]::after { content: ""; position: absolute; bottom: -5px; width: 4px; height: 4px; border-radius: 50%; background: rgb(0 0 0 / 0.7); }
${$(`.dkw-dock-item[data-running]::after`)} { background: rgb(255 255 255 / 0.85); }
.dkw-dock-label {
  position: absolute; bottom: calc(100% + 10px); left: 50%; translate: -50% 0; padding: 3px 9px; border-radius: 6px; white-space: nowrap;
  font-size: 12px; color: #1f2328; background: rgb(240 240 242 / 0.92); box-shadow: 0 2px 10px rgb(0 0 0 / 0.2); pointer-events: none; opacity: 0; transition: opacity 120ms;
}
${$(`.dkw-dock-label`)} { color: #ececec; background: rgb(50 50 54 / 0.92); }
.dkw-dock-item:hover .dkw-dock-label, .dkw-dock-item:focus-visible .dkw-dock-label { opacity: 1; }
.dkw-dock-sep { align-self: stretch; width: 1px; margin-inline: 4px; background: rgb(0 0 0 / 0.18); }
${$(`.dkw-dock-sep`)} { background: rgb(255 255 255 / 0.2); }
.dkw-dock-thumb {
  width: 44px; height: 34px; border-radius: 5px; background: #fff; box-shadow: 0 1px 4px rgb(0 0 0 / 0.3); overflow: hidden; display: flex; flex-direction: column;
}
.dkw-dock-thumb > span:first-child { height: 7px; background: #e7e7ea; }
.dkw-dock-thumb > span:last-child { flex: 1; display: grid; place-items: center; }
${$(`.dkw-dock-thumb`)} { background: #2a2a2e; }
${$(`.dkw-dock-thumb > span:first-child`)} { background: #3a3a3e; }
.dkw-ghost { position: fixed; z-index: ${r(`overlay`)}; pointer-events: none; margin: 0; transform-origin: 0 0; }
`,$e=`
@media (prefers-reduced-motion: reduce) {
  [data-window-id][data-chrome], [data-windows-desktop] [data-window-snap-preview], .dkw-dock-item, .dkw-task, .dkw-task::after { transition: none; }
  .dkw-task[data-attention] { animation: none; outline: 2px solid #ff8c00; outline-offset: -2px; }
}
@media (prefers-reduced-motion: reduce) { @starting-style { [data-window-id][data-chrome] { opacity: 1; scale: 1; } } }
@media (forced-colors: active) {
  [data-window-id][data-chrome] { border: 1px solid CanvasText; }
  [data-window-id][data-chrome][data-window-focused] { border: 2px solid Highlight; }
  [data-window-id][data-chrome]:focus-visible, .dkw-btn:focus-visible, .dkw-task:focus-visible, .dkw-dock-item:focus-visible { outline: 2px solid Highlight; }
  [data-windows-desktop] [data-window-snap-preview] { forced-color-adjust: none; background: transparent; border: 3px solid Highlight; clip-path: none; }
  [data-chrome="mac"] .dkw-btn { forced-color-adjust: none; background: ButtonText; }
  .dkw-task[aria-pressed="true"] { outline: 2px solid Highlight; }
  .dkw-zone:hover, .dkw-zone:focus-visible { forced-color-adjust: none; background: Highlight; }
}
`,et=[`neutral`,`mac`,`windows`,`material`,`gnome`,`retro`,`terminal`,`headless`,`frameless`].map(e=>`[data-windows-chrome="${e}"] > [data-chrome="${e}"]`).join(`, `),tt=`:where(.dark, [data-theme="dark"]) `;function nt(e){let t=[],n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i];a===`(`?n++:a===`)`?n--:a===`,`&&n===0&&(t.push(e.slice(r,i).trim()),r=i+1)}return t.push(e.slice(r).trim()),t}function rt(e){return e.replace(/([^{}]+)\{([^{}]*)\}/g,(e,t,n)=>{let r=nt(t.trim()),i=r.flatMap(e=>{let t=e.replaceAll(`[data-chrome`,`[data-windows-chrome`);return t.startsWith(tt)?[t,`${t.slice(35)}:where(.dark, [data-theme="dark"])`]:[t]}),a=r.map(e=>`${e}:where(:not(${et}))`);return`\n${i.join(`, `)} {${n}}\n${a.join(`, `)} {${n}}`})}var it=[rt(Ye),Xe,Ze,Qe,$e].join(`
`);function at(){return(0,j.jsx)(`style`,{href:Je,precedence:`default`,children:it})}export{he as C,M as D,pe as E,se as O,I as S,P as T,je as _,Y as a,ve as b,Ge as c,Z as d,We as f,K as g,q as h,Re as i,le as k,He as l,Fe as m,qe as n,Ke as o,Pe as p,Ie as r,Ue as s,at as t,X as u,be as v,F as w,L as x,z as y};