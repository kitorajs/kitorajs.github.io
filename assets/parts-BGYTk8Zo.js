import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./chevrons-up-down-Dk-Sghwn.js";import{t as n}from"./circle-alert-DsKJQGKd.js";import{t as r}from"./clock-D37DdvgX.js";import{t as i}from"./ellipsis-BBw58PQy.js";import{t as a}from"./external-link-x8MCXkn7.js";import{t as o}from"./panel-left-gzFW3ch7.js";import{t as s}from"./plus-DdsWgtk9.js";import{t as c}from"./search-B6QTpngp.js";import{t as l}from"./star-jfaSYwES.js";import{Ai as ee,Ci as te,Mi as u,Si as d,Uc as f,_i as p,zc as m}from"./index-BZuUy872.js";import{a as h,d as g,f as _,i as ne,t as v}from"./context-C6mmtqBC.js";import{n as y}from"./state-B-Cig1y6.js";import{t as re}from"./split-view-Dgjtu3AL.js";function ie(e,t={}){let n=t.enterMs??150,r=t.leaveMs??300,i=!1,a=null,o=()=>{a!==null&&clearTimeout(a),a=null},s=t=>{o(),t!==i&&(i=t,e(t))};return{enter(){o(),i||(a=setTimeout(()=>s(!0),n))},leave(){o(),i&&(a=setTimeout(()=>s(!1),r))},set:s,dispose:o}}var b=e(f(),1),x=m(),S=1600,C=30,w=(0,b.createContext)(null);function T(){return(0,b.useContext)(w)}var E=(0,b.createContext)({surface:`solid`,activeRow:`bar`});function D(){return(0,b.useContext)(E)}function O({sidebar:e,children:t,rail:n,aside:r,asideWidth:i=280,topBar:a,shape:o=`sidebar`,surface:s=`solid`,activeRow:c=`bar`,presentation:l=`push`,peek:ee=!1,edgeSwipe:te=!1,contentRegion:u=`main`,contentLabel:d=`Main content`,minWidth:f=200,maxWidth:p=480,className:m,style:g}){let{side:_,railWidth:T,collapse:D,label:O}=h(),k=(0,b.useMemo)(()=>({surface:s,activeRow:c}),[s,c]),A=ne(),{mode:j,width:M}=A,N=A.band===`desktop`,[P,F]=(0,b.useState)(!1),I=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=ie(F);return I.current=e,()=>{e.dispose(),I.current=null}},[]);let L=ee&&N&&j===`hidden`;(0,b.useEffect)(()=>{L||I.current?.set(!1)},[L]);let R=l===`overlay`&&N,z=R&&j===`panel`||L&&P,B=D===`offcanvas`?`hidden`:`rail`,V=R?B:j,ae=V===`rail`?T:0,H=V!==`panel`,U=y(M,f,p)/S,W=_===`right`,oe=W?[1-U,U]:[U,1-U],G=+!!W,K={minPx:f,maxPx:p,collapsible:D!==`none`,collapsedPx:ae,priority:`low`},q={minPx:0,priority:`high`},se=W?[q,K]:[K,q],ce=W?[!1,H]:[H,!1],le=e=>{let t=e.collapsed[G]??!1;R||(N&&t!==A.collapsed&&A.setCollapsed(t),t||A.setWidth(Math.round((e.sizes[G]??U)*e.basisPx)))},J=(0,b.useRef)(null),Y=()=>{L&&P&&I.current?.set(!1),R&&j===`panel`&&(A.setCollapsed(!0),requestAnimationFrame(()=>J.current?.querySelector(`[data-sidebar-trigger]`)?.focus()))},ue=e=>{e.key!==`Escape`||e.defaultPrevented||(e.preventDefault(),Y())},X=(0,x.jsx)(`div`,{"data-sidebar-slot":``,className:`flex h-full w-full min-w-0`,children:R?(0,x.jsx)(v,{value:B,children:e}):e},`sidebar`),Z=(0,x.jsx)(`div`,{"data-sidebar-content":``,"data-kb-region":u??void 0,"data-kb-region-label":u?d:void 0,inert:R&&z,className:`flex h-full w-full min-w-0 flex-col`,children:t},`content`),Q=W?{insetInlineEnd:0}:{insetInlineStart:0},$=(0,b.useRef)(null),de=te&&!N&&!A.mobileOpen?(0,x.jsx)(`div`,{"aria-hidden":`true`,"data-sidebar-edge-swipe":``,onPointerDown:e=>{let t=getComputedStyle(e.currentTarget).direction===`rtl`;$.current={id:e.pointerId,x:e.clientX,inward:W===t?1:-1},e.currentTarget.setPointerCapture?.(e.pointerId)},onPointerMove:e=>{let t=$.current;!t||t.id!==e.pointerId||(e.clientX-t.x)*t.inward<40||($.current=null,A.setMobileOpen(!0))},onPointerUp:()=>{$.current=null},onPointerCancel:()=>{$.current=null},style:{position:`absolute`,insetBlock:0,width:16,zIndex:C,touchAction:`pan-y`,...Q}}):null,fe=(0,x.jsxs)(`div`,{"data-sidebar-body":``,style:{display:`flex`,flex:`1 1 0%`,minHeight:0,flexDirection:W?`row-reverse`:`row`},children:[n,(0,x.jsxs)(`div`,{"data-sidebar-frame":``,style:{position:`relative`,flex:`1 1 0%`,minWidth:0,minHeight:0,display:`flex`},children:[(0,x.jsx)(re,{orientation:`horizontal`,className:`sidebar-split`,sizes:oe,basisPx:S,collapsed:ce,panes:se,onSizesChange:le,paneLabels:W?[`Content`,O]:[O,`Content`],children:W?[Z,X]:[X,Z]}),de,L&&!P?(0,x.jsx)(`div`,{"aria-hidden":`true`,"data-sidebar-peek-zone":``,onPointerEnter:()=>I.current?.enter(),onPointerLeave:()=>I.current?.leave(),style:{position:`absolute`,insetBlock:0,width:8,zIndex:C,...Q}}):null,R&&z&&!P?(0,x.jsx)(`div`,{"aria-hidden":`true`,"data-sidebar-scrim":``,onClick:Y,style:{position:`absolute`,inset:0,zIndex:C}}):null,z?(0,x.jsx)(w.Provider,{value:{close:Y},children:(0,x.jsx)(`div`,{role:`presentation`,"data-sidebar-overlay":P?`peek`:`overlay`,onKeyDown:ue,onPointerEnter:P?()=>I.current?.enter():void 0,onPointerLeave:P?()=>I.current?.leave():void 0,style:{position:`absolute`,insetBlock:0,width:y(M,f,p),zIndex:C+1,display:`flex`,...Q},children:(0,x.jsx)(v,{value:`panel`,children:e})})}):null]}),r?(0,x.jsx)(`div`,{"data-sidebar-aside":``,style:{flex:`0 0 ${i}px`,minWidth:0,minHeight:0,display:`flex`},children:r}):null]});return(0,x.jsx)(E.Provider,{value:k,children:(0,x.jsxs)(`div`,{ref:J,"data-sidebar-layout":``,"data-shape":o,"data-surface":s===`solid`?void 0:s,"data-active-row":c===`bar`?void 0:c,"data-side":_,"data-mode":j,"data-band":A.band,"data-presentation":l,className:m,style:{display:`flex`,flexDirection:`column`,height:`100%`,minHeight:0,...g},children:[a?(0,x.jsx)(`div`,{"data-sidebar-topbar":``,children:a}):null,fe]})})}var k=`kitora-sidebar`,A=[`--sb-bg`,`--sb-fg`,`--sb-border`,`--sb-accent`,`--sb-mention`,`--sb-mention-fg`,`--sb-radius`,`--sb-content-bg`,`--sb-muted`,`--sb-faint`,`--sb-hover`,`--sb-active-bg`,`--sb-active-fg`,`--sb-rail-bg`,`--sb-rail-fg`],j=`
/* Constants on the root, so a theme set on any ancestor (or on the layout itself) wins. */
:root {
  --sb-mention: oklch(0.55 0.22 25);
  --sb-mention-fg: white;
  --sb-row-h: 28px;
  --sb-radius: 6px;
}
/* Resolved tokens, computed where the sidebar renders (the layout, the phone sheet, the rail flyout, its menus, and a
   dragged row's preview in the body): a theme's --sb-* wins, else the design tokens in scope here (not at the root, so a
   nested token scope applies). The portaled ones also carry the host's --sb-* values (carry.tsx). The derived ones
   follow; a theme may still set --sb-muted, --sb-faint, --sb-hover or --sb-active-bg itself. */
[data-sidebar-layout], [data-sidebar-sheet], [data-sidebar-flyout], [data-sidebar-menu], [data-dnd-preview] {
  --sbc-bg: var(--sb-bg, var(--sidebar, oklch(0.985 0 0)));
  --sbc-fg: var(--sb-fg, var(--sidebar-foreground, oklch(0.2 0 0)));
  --sbc-border: var(--sb-border, var(--sidebar-border, oklch(0.92 0 0)));
  --sbc-accent: var(--sb-accent, var(--primary, oklch(0.55 0.2 260)));
  --sbc-content-bg: var(--sb-content-bg, var(--background, white));
  --sbc-muted: var(--sb-muted, color-mix(in oklab, var(--sbc-fg) 68%, transparent));
  --sbc-faint: var(--sb-faint, color-mix(in oklab, var(--sbc-fg) 38%, transparent));
  --sbc-hover: var(--sb-hover, color-mix(in oklab, var(--sbc-fg) 7%, transparent));
  --sbc-active-bg: var(--sb-active-bg, color-mix(in oklab, var(--sbc-accent) 14%, transparent));
  --sbc-active-fg: var(--sb-active-fg, var(--sbc-fg));
  --sbc-rail-bg: var(--sb-rail-bg, var(--sbc-bg));
  --sbc-rail-fg: var(--sb-rail-fg, var(--sbc-fg));
}
[data-density="comfortable"] { --sb-row-h: 32px; }
[data-density="touch"], [data-sidebar-sheet] { --sb-row-h: 40px; }
@media (pointer: coarse) { [data-sidebar-panel] { --sb-row-h: 40px; } }

[data-sidebar-layout] { background: var(--sbc-content-bg); color: var(--sbc-fg); }
[data-sidebar-panel], [data-sidebar-rail] { background: var(--sbc-bg); color: var(--sbc-fg); }
[data-sidebar-rail] { background: var(--sbc-rail-bg); color: var(--sbc-rail-fg); }

.sidebar-split > [data-dock-pane] { transition: flex-basis 180ms cubic-bezier(0.2, 0.8, 0.2, 1); }
:root[data-dock-resizing] .sidebar-split > [data-dock-pane] { transition: none; }
@media (prefers-reduced-motion: reduce) { .sidebar-split > [data-dock-pane] { transition: none; } }

.sidebar-split > [data-dock-sash] { background: var(--sbc-border); position: relative; z-index: 5; outline: none; }
.sidebar-split > [data-dock-sash]::before { content: ""; position: absolute; inset: 0 -4px; cursor: col-resize; transition: background-color 120ms ease; }
.sidebar-split > [data-dock-sash]:hover::before { background: color-mix(in oklab, var(--sbc-accent) 55%, transparent); inset: 0 -1px; transition-delay: 300ms; }
.sidebar-split > [data-dock-sash][data-active]::before, .sidebar-split > [data-dock-sash]:focus-visible::before { background: var(--sbc-accent); inset: 0 -1px; transition-delay: 0ms; }
[data-band="phone"] .sidebar-split > [data-dock-sash] { display: none; }
[data-mode="hidden"] .sidebar-split > [data-dock-sash] { background: transparent; }

/* Translucent surface (SidebarLayout surface="translucent", a macOS source list): the layout itself is see-through and its
   own panel (marked by the ui layer, so a nested layout keeps its own look) is a blurred, partly transparent layer over
   whatever sits behind the layout (a window, a wallpaper); the content and a top bar keep an opaque background. */
[data-sidebar-layout][data-surface="translucent"] { background: transparent; }
[data-sidebar-layout][data-surface="translucent"] > [data-sidebar-topbar], [data-sidebar-layout][data-surface="translucent"] [data-sidebar-content] { background: var(--sbc-content-bg); }
[data-sidebar-panel][data-surface="translucent"] {
  background: color-mix(in oklab, var(--sbc-bg) 72%, transparent);
  backdrop-filter: blur(20px) saturate(1.8); -webkit-backdrop-filter: blur(20px) saturate(1.8);
}
@media (prefers-reduced-transparency: reduce) { [data-sidebar-panel][data-surface="translucent"] { background: var(--sbc-bg); backdrop-filter: none; -webkit-backdrop-filter: none; } }

/* Floating (S5): the panel is a card inset from the edges. */
[data-shape="floating"] [data-sidebar-slot] { padding: 8px; background: var(--sbc-content-bg); }
[data-shape="floating"] [data-sidebar-panel] { border: 1px solid var(--sbc-border); border-radius: 12px; box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 8px 24px -12px rgb(0 0 0 / 0.18); overflow: hidden; }
[data-shape="floating"] .sidebar-split > [data-dock-sash] { background: transparent; }

/* Inset (S6): the sidebar sits on the page background and the content is a raised card. */
[data-shape="inset"] { background: var(--sbc-bg); }
[data-shape="inset"] [data-sidebar-content] { margin: 8px; margin-inline-start: 0; border-radius: 12px; background: var(--sbc-content-bg); border: 1px solid var(--sbc-border); box-shadow: 0 1px 2px rgb(0 0 0 / 0.05); overflow: hidden; height: calc(100% - 16px); }
[data-shape="inset"] .sidebar-split > [data-dock-sash] { background: transparent; }

/* Overlay presentation and hover-peek (S7, S8): the open panel floats over the content. */
[data-sidebar-overlay] { background: var(--sbc-bg); color: var(--sbc-fg); border-inline-end: 1px solid var(--sbc-border); box-shadow: 0 10px 38px -10px rgb(0 0 0 / 0.35), 0 10px 20px -15px rgb(0 0 0 / 0.2); animation: sb-slide-in 160ms cubic-bezier(0.2, 0.8, 0.2, 1); }
[data-side="right"] [data-sidebar-overlay] { border-inline-end: 0; border-inline-start: 1px solid var(--sbc-border); animation-name: sb-slide-in-end; }
[data-sidebar-overlay="peek"] { inset-block: 8px !important; border: 1px solid var(--sbc-border); border-radius: 10px; overflow: hidden; }
[data-sidebar-scrim] { background: rgb(0 0 0 / 0.18); animation: sb-fade-in 160ms ease-out; }
@keyframes sb-slide-in { from { transform: translateX(-12px); opacity: 0; } }
@keyframes sb-slide-in-end { from { transform: translateX(12px); opacity: 0; } }
[dir="rtl"] [data-sidebar-overlay] { animation-name: sb-slide-in-end; }
[dir="rtl"] [data-side="right"] [data-sidebar-overlay] { animation-name: sb-slide-in; }
@keyframes sb-fade-in { from { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { [data-sidebar-overlay], [data-sidebar-scrim] { animation: none; } }

/* Skip links (S108): out of sight until one takes focus. */
[data-kb-skip-links] { position: absolute; inset-inline-start: 8px; top: 8px; z-index: 40; display: flex; gap: 6px; }
[data-kb-skip-links] a { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
[data-kb-skip-links] a:focus { position: static; width: auto; height: auto; clip: auto; padding: 4px 10px; border-radius: 6px; background: var(--sbc-accent); color: white; font-size: 12.5px; font-weight: 500; outline: 2px solid var(--sbc-fg); outline-offset: 1px; }

[data-nav-drop-line] { background: var(--sbc-accent); }
[data-nav-row][data-dnd-pressing] { opacity: 0.9; }
[data-dnd-preview] [data-nav-rowbox] { background: var(--sbc-bg); color: var(--sbc-fg); box-shadow: 0 6px 18px -6px rgb(0 0 0 / 0.3); border: 1px solid var(--sbc-border); }

/* Scroll fades (S77): a fade at an edge only while there is more to scroll past it, driven by the
   scroll position itself (a scroll-driven animation; browsers without it simply draw no fades). */
[data-sidebar-scroll] { scrollbar-width: thin; scrollbar-color: color-mix(in oklab, var(--sbc-fg) 22%, transparent) transparent; }
@property --sb-fade-top { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --sb-fade-bottom { syntax: "<length>"; inherits: false; initial-value: 0px; }
@keyframes sb-scroll-fades { 0% { --sb-fade-top: 0px; --sb-fade-bottom: 14px; } 3%, 97% { --sb-fade-top: 14px; --sb-fade-bottom: 14px; } 100% { --sb-fade-top: 14px; --sb-fade-bottom: 0px; } }
@supports (animation-timeline: scroll()) {
  [data-sidebar-scroll] { mask-image: linear-gradient(to bottom, transparent, #000 var(--sb-fade-top), #000 calc(100% - var(--sb-fade-bottom)), transparent); animation: sb-scroll-fades linear both; animation-timeline: scroll(self); }
}

@media (forced-colors: active) {
  [data-nav-row][aria-current="page"] [data-nav-rowbox] { outline: 2px solid Highlight; }
  [data-nav-drop-line] { background: Highlight; }
  .sidebar-split > [data-dock-sash] { background: CanvasText; }
}
`;function M(){return(0,x.jsx)(`style`,{href:k,precedence:`default`,children:j})}var N={chevron:ee,plus:s,more:i,search:c,panel:o,external:a,updown:t,check:u,x:d,alert:n,star:l,clock:r,sliders:te};function P({name:e,className:t,size:n=14}){let r=N[e];return(0,x.jsx)(r,{size:n,"aria-hidden":`true`,focusable:`false`,className:t})}function F({icon:e,color:t,size:n=16,className:r}){let{icons:i}=h();if(!e)return null;if(`emoji`in e)return(0,x.jsx)(`span`,{"aria-hidden":`true`,className:p(`inline-grid shrink-0 place-items-center leading-none`,r),style:{width:n,height:n,fontSize:n-2},children:e.emoji});if(`initials`in e)return(0,x.jsx)(`span`,{"aria-hidden":`true`,className:p(`inline-grid shrink-0 place-items-center rounded-[5px] font-semibold`,r),style:{color:`white`,width:n,height:n,fontSize:Math.max(9,Math.round(n*.55)),background:e.color??t??`var(--sbc-accent, var(--sb-accent, var(--primary, oklch(0.55 0.2 260))))`},children:e.initials.slice(0,2)});if(`src`in e)return(0,x.jsx)(`img`,{src:e.src,alt:``,"aria-hidden":`true`,className:p(`shrink-0 rounded-[5px] object-cover`,r),style:{width:n,height:n}});let a=i[e.name];return a?(0,x.jsx)(`span`,{className:p(`inline-grid shrink-0 place-items-center`,r),style:{width:n,height:n,color:e.color??t},children:(0,x.jsx)(a,{className:`size-full`,"aria-hidden":!0})}):(0,x.jsx)(`span`,{"aria-hidden":`true`,className:p(`inline-block shrink-0 rounded-sm bg-current opacity-30`,r),style:{width:n-4,height:n-4,margin:2}})}var I={neutral:`bg-[var(--sbc-faint)]`,info:`bg-sky-500`,success:`bg-emerald-500`,warning:`bg-amber-500`,danger:`bg-red-500`};function L({badge:e,className:t}){return!e||_(e)?null:(0,x.jsxs)(`span`,{"aria-hidden":`true`,"data-nav-badge":``,className:p(`ms-auto flex shrink-0 items-center gap-1 ps-1`,t),children:[e.text?(0,x.jsx)(`span`,{className:`rounded px-1 py-px text-[10px] font-semibold tracking-wide text-[var(--sbc-fg)] uppercase ring-1 ring-[color-mix(in_oklab,var(--sbc-accent)_35%,transparent)]`,children:e.text}):null,e.count?(0,x.jsx)(`span`,{className:`text-[11.5px] tabular-nums text-[var(--sbc-muted)]`,children:g(e.count)}):null,e.mentions?(0,x.jsx)(`span`,{className:`min-w-[18px] rounded-full bg-[var(--sb-mention)] px-1.5 text-center text-[11px] leading-[18px] font-semibold tabular-nums text-[var(--sb-mention-fg)]`,children:g(e.mentions)}):null,e.dot?(0,x.jsx)(`span`,{className:p(`size-2 rounded-full`,I[e.dot])}):null,e.unread&&!e.mentions&&!e.count&&!e.dot?(0,x.jsx)(`span`,{className:`size-1.5 rounded-full bg-[var(--sbc-fg)]`}):null]})}var R={online:`bg-emerald-500`,away:`bg-transparent ring-[1.5px] ring-inset ring-[var(--sbc-muted)]`,busy:`bg-red-500`,offline:`bg-transparent ring-[1.5px] ring-inset ring-[var(--sbc-faint)]`};function z({presence:e,className:t}){return(0,x.jsx)(`span`,{"aria-hidden":`true`,"data-presence":e,className:p(`absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-[var(--sbc-bg)]`,R[e],t)})}var B=`rounded-[2px] bg-[color-mix(in_oklab,var(--sbc-accent)_28%,transparent)] text-inherit`;export{B as a,O as c,z as i,D as l,L as n,M as o,F as r,A as s,P as t,T as u};