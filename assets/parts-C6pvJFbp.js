import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as t,Fn as n,Ic as r,Rn as i,Un as a,Yn as o,er as s}from"./index-B9ukmIN1.js";import{l as c,t as l}from"./windows-styles-qDdNe6P6.js";import{d as u,l as d,r as f,s as p,t as m,u as h}from"./context-menu-BE3LETtp.js";var g=e(t(),1),_=`kitora-dock-ui`,v=[`comfortable`,`compact`],y=`
/* Tokens (DK109) at zero specificity, so any plain rule on the dock element wins: a host re-themes with
   <Dock className> plus a rule such as ".my-theme[data-dock] { --dock-accent: … }". (Utility classes inside a
   cascade layer, such as Tailwind's, lose to this unlayered sheet whatever their specificity.) */
:where([data-dock]) {
  --dock-bg: var(--background, #fff);
  --dock-fg: var(--foreground, #1f2328);
  --dock-muted: var(--muted-foreground, #6b7280);
  --dock-border: var(--border, #e5e7eb);
  --dock-strip-bg: var(--surface-2, var(--muted, #f4f4f5));
  --dock-tab-active-bg: var(--background, #fff);
  --dock-tab-hover-bg: var(--surface-3, rgb(0 0 0 / 0.04));
  --dock-accent: var(--primary, #2563eb);
  --dock-ring: var(--ring, #2563eb);
  --dock-sash-active: var(--primary, #2563eb);
  --dock-strip-height: 30px;
  --dock-tab-max: 220px;
  font-size: 12.5px;
  color: var(--dock-fg);
  background: var(--dock-border);
}
[data-dock] [data-dock-pane] { background: var(--dock-bg); }

/* Sashes: a 1 px divider in flow, an 8 px hit area across it, a highlight after a short hover. */
[data-dock-sash] { background: var(--dock-border); z-index: 2; outline: none; }
[data-dock-sash]::before {
  content: ""; position: absolute; transition: background-color 120ms ease 0ms;
}
[data-dock-sash][data-orientation="horizontal"]::before { inset: 0 -${8/2}px; cursor: col-resize; }
[data-dock-sash][data-orientation="vertical"]::before { inset: -${8/2}px 0; cursor: row-resize; }
[data-dock-sash]:hover::before { background: color-mix(in oklab, var(--dock-sash-active) 70%, transparent); transition-delay: 300ms; }
[data-dock-sash][data-orientation="horizontal"]:hover::before, [data-dock-sash][data-orientation="horizontal"][data-active]::before, [data-dock-sash][data-orientation="horizontal"]:focus-visible::before { inset: 0 -2px; }
[data-dock-sash][data-orientation="vertical"]:hover::before, [data-dock-sash][data-orientation="vertical"][data-active]::before, [data-dock-sash][data-orientation="vertical"]:focus-visible::before { inset: -2px 0; }
[data-dock-sash][data-active]::before, [data-dock-sash]:focus-visible::before { background: var(--dock-sash-active); transition-delay: 0ms; }
:root[data-dock-resizing="horizontal"], :root[data-dock-resizing="horizontal"] * { cursor: col-resize !important; user-select: none; }
:root[data-dock-resizing="vertical"], :root[data-dock-resizing="vertical"] * { cursor: row-resize !important; user-select: none; }
:root[data-dock-resizing] iframe { pointer-events: none; }

/* Groups: strip + body; the strip moves with data-tab-position (DK23). */
[data-dock-group] { display: flex; flex-direction: column; width: 100%; height: 100%; min-width: 0; min-height: 0; background: var(--dock-bg); }
[data-dock-group][data-tab-position="bottom"] { flex-direction: column-reverse; }
[data-dock-group][data-tab-position="left"] { flex-direction: row; }
[data-dock-group][data-tab-position="right"] { flex-direction: row-reverse; }
[data-dock-tabstrip][hidden] { display: none; }
[data-dock-tabstrip] { display: flex; align-items: stretch; flex: none; background: var(--dock-strip-bg); min-width: 0; min-height: 0; }
[data-dock-group][data-tab-position="top"] [data-dock-tabstrip] { height: var(--dock-strip-height); box-shadow: inset 0 -1px var(--dock-border); }
[data-dock-group][data-tab-position="bottom"] [data-dock-tabstrip] { height: var(--dock-strip-height); box-shadow: inset 0 1px var(--dock-border); }
[data-dock-group][data-tab-position="left"] [data-dock-tabstrip], [data-dock-group][data-tab-position="right"] [data-dock-tabstrip] { flex-direction: column; width: 150px; }
[data-dock-group][data-tab-position="left"] [data-dock-tabstrip] { box-shadow: inset -1px 0 var(--dock-border); }
[data-dock-group][data-tab-position="right"] [data-dock-tabstrip] { box-shadow: inset 1px 0 var(--dock-border); }
[data-dock-tablist] { display: flex; flex: 1 1 auto; min-width: 0; min-height: 0; overflow: auto; scrollbar-width: none; }
[data-dock-tablist]::-webkit-scrollbar { display: none; }
[data-dock-tablist][aria-orientation="vertical"] { flex-direction: column; }
[data-dock-strip-tail] { flex: 1 0 24px; min-height: 24px; }
[data-dock-strip-tail][data-over] { background: color-mix(in oklab, var(--dock-accent) 12%, transparent); }

/* Tabs. */
[data-dock-tab] {
  position: relative; display: flex; align-items: center; gap: 6px; flex: none; max-width: var(--dock-tab-max);
  padding: 0 6px 0 10px; color: var(--dock-muted); cursor: default; user-select: none; white-space: nowrap;
  border-inline-end: 1px solid var(--dock-border); outline: none; touch-action: none;
}
[data-dock-tablist][aria-orientation="vertical"] [data-dock-tab] { max-width: none; height: 26px; border-inline-end: 0; border-bottom: 1px solid var(--dock-border); }
[data-dock-tab]:hover { background: var(--dock-tab-hover-bg); color: var(--dock-fg); }
[data-dock-tab][data-active] { background: var(--dock-tab-active-bg); color: var(--dock-fg); }
[data-dock-group][data-tab-position="top"] [data-dock-tab][data-active] { box-shadow: inset 0 -1px var(--dock-tab-active-bg); }
[data-dock-group][data-active-group] [data-dock-tab][data-active]::after { content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; background: var(--dock-accent); }
[data-dock-group][data-tab-position="bottom"][data-active-group] [data-dock-tab][data-active]::after { inset: auto 0 0 0; }
[data-dock-tablist][aria-orientation="vertical"] [data-dock-tab][data-active]::after { inset: 0 auto 0 0; width: 2px; height: auto; }
[data-dock-tab]:focus-visible { box-shadow: inset 0 0 0 1px var(--dock-ring); }
[data-dock-tab][data-dragging] { opacity: 0.45; }
[data-dock-tab-title] { overflow: hidden; text-overflow: ellipsis; }
[data-dock-tab-close] {
  display: grid; place-items: center; width: 16px; height: 16px; border-radius: 3px; flex: none;
  color: var(--dock-muted); visibility: hidden;
}
[data-dock-tab]:hover [data-dock-tab-close], [data-dock-tab][data-active] [data-dock-tab-close] { visibility: visible; }
[data-dock-tab-close]:hover { background: var(--dock-tab-hover-bg); color: var(--dock-fg); }
[data-dock-tab-rename] { width: 120px; height: 20px; font: inherit; padding: 0 4px; border: 1px solid var(--dock-ring); border-radius: 3px; background: var(--dock-bg); color: var(--dock-fg); outline: none; }
[data-dock-group][data-locked] [data-dock-tab] { font-style: italic; }

/* Group actions (DK18 overflow, DK29 header actions). */
[data-dock-group-prefix] { display: flex; align-items: center; flex: none; min-width: 0; }
/* 24 px buttons with no gap and 1 px ends: never wider than the 22 px buttons 1 px apart with 4 px ends were (up to
   five actions), so a narrow group keeps its tabs where it kept them before */
[data-dock-group-actions] { display: flex; align-items: center; gap: 0; padding: 0 1px; flex: none; }
[data-dock-group][data-tab-position="left"] [data-dock-group-actions], [data-dock-group][data-tab-position="right"] [data-dock-group-actions] { padding: 4px 0; justify-content: center; }
/* 24 px: the smallest tap target WCAG 2.5.8 allows for neighbours this close (the actions touch). */
.dkd-icon-button {
  display: grid; place-items: center; width: 24px; height: 24px; border-radius: 4px; border: 0; background: transparent;
  color: var(--dock-muted); cursor: default; padding: 0;
}
.dkd-icon-button:hover { background: var(--dock-tab-hover-bg); color: var(--dock-fg); }
.dkd-icon-button:focus-visible { outline: 1px solid var(--dock-ring); outline-offset: -1px; }
.dkd-icon-button[data-overflowing] { color: var(--dock-accent); }

/* Body: panels stack; the keep-alive host shows the active one. */
[data-dock-group-body] { position: relative; flex: 1 1 auto; min-width: 0; min-height: 0; }
[data-dock-group-panels] { position: absolute; inset: 0; }
[data-dock-group-panels] > [data-dock-panel] { position: absolute; inset: 0; overflow: auto; outline: none; }
[data-dock-group-panels] > [data-dock-panel]:focus-visible { box-shadow: inset 0 0 0 1px var(--dock-ring); }
[data-dock-group-panels] > [data-dock-panel][hidden] { display: none; }

/* Watermark (DK27) and the unknown-panel placeholder (DK73). */
[data-dock-watermark] {
  position: absolute; inset: 0; display: grid; place-items: center; text-align: center; color: var(--dock-muted); background: var(--dock-bg);
}
[data-dock-main] > [data-dock-watermark] { position: relative; flex: 1; }
[data-dock-unknown] { display: grid; place-content: center; gap: 8px; height: 100%; padding: 16px; text-align: center; color: var(--dock-muted); }

/* Docking drag (DK33, DK34): the overlay is portaled to the body, so it reads the page tokens, not --dock-*. */
[data-dock-drop-preview] {
  width: 100%; height: 100%; box-sizing: border-box; border-radius: 3px;
  background: color-mix(in oklab, var(--primary, #2563eb) 16%, transparent);
  border: 1.5px solid color-mix(in oklab, var(--primary, #2563eb) 75%, transparent);
  transition: none;
}
[data-dock-drop-preview][data-marker] { background: var(--primary, #2563eb); border: 0; border-radius: 1px; }
[data-dock-tabstrip][data-dragging] { opacity: 0.5; }
@media (forced-colors: active) {
  [data-dock-drop-preview] { border: 2px solid Highlight; background: transparent; }
  [data-dock-drop-preview][data-marker] { background: Highlight; }
}

/* Maximise and zen (DK44, DK45). */
[data-dock-group][data-maximized] [data-dock-tab][data-active]::after { background: var(--dock-accent); }
[data-dock-zen-exit] {
  position: absolute; top: 6px; inset-inline-end: 10px; z-index: 2; height: 22px; padding: 0 8px; border-radius: 4px;
  border: 1px solid var(--dock-border); background: var(--dock-bg); color: var(--dock-muted); font: inherit; font-size: 11.5px; opacity: 0.85;
}
[data-dock-zen-exit]:hover, [data-dock-zen-exit]:focus-visible { opacity: 1; color: var(--dock-fg); outline: none; box-shadow: 0 0 0 1px var(--dock-ring); }

/* Borders (DK47–DK50): activity bar + side bar on the left and right, tab bar + panel at the top and bottom. */
[data-dock-border] { position: relative; display: flex; flex: none; min-width: 0; min-height: 0; background: var(--dock-bg); }
[data-dock-border="left"] { flex-direction: row; box-shadow: inset -1px 0 var(--dock-border); }
[data-dock-border="right"] { flex-direction: row-reverse; box-shadow: inset 1px 0 var(--dock-border); }
[data-dock-border="bottom"] { flex-direction: column; box-shadow: inset 0 1px var(--dock-border); }
[data-dock-border="top"] { flex-direction: column-reverse; box-shadow: inset 0 -1px var(--dock-border); }
[data-dock-border][data-over] [data-dock-border-bar] { background: color-mix(in oklab, var(--dock-accent) 10%, var(--dock-strip-bg)); }
[data-dock-border-head] { display: flex; flex: none; background: var(--dock-strip-bg); }
[data-dock-border="left"] > [data-dock-border-head], [data-dock-border="right"] > [data-dock-border-head] { flex-direction: column; }
[data-dock-border="bottom"] > [data-dock-border-head], [data-dock-border="top"] > [data-dock-border-head] { align-items: center; }
[data-dock-border-bar] { display: flex; flex: none; background: var(--dock-strip-bg); }
[data-dock-border-header][data-inline] { margin-inline-start: auto; height: auto; padding: 0 4px; }
[data-dock-border-bar][aria-orientation="vertical"] { flex-direction: column; width: 40px; padding-top: 4px; gap: 2px; }
[data-dock-border="left"] > [data-dock-border-head] { box-shadow: inset -1px 0 var(--dock-border); }
[data-dock-border="right"] > [data-dock-border-head] { box-shadow: inset 1px 0 var(--dock-border); }
[data-dock-border-bar][aria-orientation="horizontal"] { height: var(--dock-strip-height); align-items: stretch; padding: 0 4px; }
[data-dock-border="bottom"] > [data-dock-border-head] { box-shadow: inset 0 -1px var(--dock-border); }
[data-dock-border-tab] {
  position: relative; display: grid; place-items: center; color: var(--dock-muted); cursor: default; user-select: none; outline: none; touch-action: none;
}
[data-dock-border-bar][aria-orientation="vertical"] [data-dock-border-tab] { height: 38px; width: 40px; }
[data-dock-border-bar][aria-orientation="horizontal"] [data-dock-border-tab] { padding: 0 10px; font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; }
[data-dock-border-tab]:hover { color: var(--dock-fg); }
[data-dock-border-tab][data-active] { color: var(--dock-fg); }
[data-dock-border-bar][aria-orientation="vertical"] [data-dock-border-tab][data-active]::before { content: ""; position: absolute; top: 4px; bottom: 4px; width: 2px; background: var(--dock-accent); }
[data-dock-border="left"] [data-dock-border-tab][data-active]::before { inset-inline-start: 0; }
[data-dock-border="right"] [data-dock-border-tab][data-active]::before { inset-inline-end: 0; }
[data-dock-border-bar][aria-orientation="horizontal"] [data-dock-border-tab][data-active]::before { content: ""; position: absolute; left: 8px; right: 8px; bottom: 0; height: 1.5px; background: var(--dock-accent); }
[data-dock-border-tab]:focus-visible { box-shadow: inset 0 0 0 1px var(--dock-ring); }
[data-dock-border-tab][data-dragging] { opacity: 0.45; }
[data-dock-border-icon] { display: grid; place-items: center; width: 22px; height: 22px; font-size: 13px; font-weight: 600; }
[data-dock-border-icon] svg { width: 20px; height: 20px; }
[data-dock-border-area] { position: relative; display: flex; flex-direction: column; flex: none; min-width: 0; min-height: 0; background: var(--dock-bg); }
[data-dock-border-area][data-unpinned] { position: absolute; z-index: 5; box-shadow: 0 8px 24px rgb(0 0 0 / 0.18); }
[data-dock-border="left"] > [data-dock-border-area][data-unpinned] { top: 0; bottom: 0; inset-inline-start: 100%; }
[data-dock-border="right"] > [data-dock-border-area][data-unpinned] { top: 0; bottom: 0; inset-inline-end: 100%; }
[data-dock-border="bottom"] > [data-dock-border-area][data-unpinned] { left: 0; right: 0; bottom: 100%; }
[data-dock-border="top"] > [data-dock-border-area][data-unpinned] { left: 0; right: 0; top: 100%; }
[data-dock-border-header] { display: flex; align-items: center; gap: 2px; height: 30px; flex: none; padding: 0 4px 0 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--dock-muted); }
[data-dock-border-title] { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
[data-dock-border-body] { position: relative; flex: 1 1 auto; min-width: 0; min-height: 0; }
[data-dock-border-sash] { position: absolute; z-index: 3; outline: none; }
[data-dock-border-sash][data-orientation="horizontal"] { top: 0; bottom: 0; width: 8px; cursor: col-resize; }
[data-dock-border-sash][data-orientation="vertical"] { left: 0; right: 0; height: 8px; cursor: row-resize; }
[data-dock-border-sash="left"] { inset-inline-end: -${8/2}px; }
[data-dock-border-sash="right"] { inset-inline-start: -${8/2}px; }
[data-dock-border-sash="bottom"] { top: -${8/2}px; }
[data-dock-border-sash="top"] { bottom: -${8/2}px; }
[data-dock-border-sash]:hover, [data-dock-border-sash]:focus-visible { background: color-mix(in oklab, var(--dock-sash-active) 70%, transparent); transition: background-color 120ms ease 300ms; }
[data-dock-border-sash]:focus-visible { transition-delay: 0ms; }

/* Lifecycle placeholders (DK89, DK90). */
[data-dock-panel-error], [data-dock-panel-pending] { display: grid; place-content: center; gap: 8px; height: 100%; padding: 16px; text-align: center; color: var(--dock-muted); }
/* DK110: density. Compact shortens strips and tabs; set data-density="compact" on the dock or any ancestor. */
[data-density="compact"] [data-dock], [data-dock][data-density="compact"] { --dock-strip-height: 24px; font-size: 12px; }
[data-density="compact"] [data-dock-tab], [data-dock][data-density="compact"] [data-dock-tab] { padding: 0 4px 0 8px; gap: 4px; }

/* DK107: coarse pointers get bigger sash and tab targets. */
@media (pointer: coarse) {
  [data-dock] { --dock-strip-height: 38px; }
  [data-dock-sash][data-orientation="horizontal"]::before { inset: 0 -${24/2}px; }
  [data-dock-sash][data-orientation="vertical"]::before { inset: -${24/2}px 0; }
  [data-dock-tab] { padding: 0 10px 0 14px; }
  [data-dock-tab-close] { visibility: visible; }
}

/* DK105: system colours keep the active tab, the drop preview and focus visible; no motion when it is not wanted. */
@media (forced-colors: active) {
  [data-dock-tab][data-active] { outline: 2px solid Highlight; outline-offset: -2px; }
  [data-dock-drop-preview] { background: transparent !important; border: 2px solid Highlight !important; }
  [data-dock-sash] { background: CanvasText; }
  [data-dock-sash]:focus-visible::before, [data-dock-sash][data-active]::before { background: Highlight; }
}
@media (prefers-reduced-motion: reduce) {
  [data-dock] *, [data-dock-drop-overlay] * { transition: none !important; animation: none !important; }
}

/* Floating windows (DK55): a float's group fills its window body. */
[data-dock-float] [data-dock-group] { border-radius: 0; }
`,b=r();function x(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{href:_,precedence:`default`,children:y}),(0,b.jsx)(l,{})]})}var S={width:14,height:14,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0};function C(){return(0,b.jsx)(`svg`,{...S,width:12,height:12,children:(0,b.jsx)(`path`,{d:`M4 4l8 8M12 4l-8 8`})})}function w(){return(0,b.jsx)(`svg`,{...S,children:(0,b.jsx)(`path`,{d:`M4 6l4 4 4-4`})})}function T(){return(0,b.jsxs)(`svg`,{...S,children:[(0,b.jsx)(`rect`,{x:`2.5`,y:`3`,width:`11`,height:`10`,rx:`1`}),(0,b.jsx)(`path`,{d:`M8 3v10`})]})}function E({restore:e}){return e?(0,b.jsx)(`svg`,{...S,children:(0,b.jsx)(`path`,{d:`M6 2.5v3.5H2.5M10 2.5v3.5h3.5M6 13.5V10H2.5M10 13.5V10h3.5`})}):(0,b.jsx)(`svg`,{...S,children:(0,b.jsx)(`path`,{d:`M2.5 6V2.5H6M13.5 6V2.5H10M2.5 10v3.5H6M13.5 10v3.5H10`})})}function D({pinned:e}){return(0,b.jsxs)(`svg`,{...S,children:[(0,b.jsx)(`path`,{d:`M6 2.5h4l-.5 4 2 2v1h-7v-1l2-2z`}),(0,b.jsx)(`path`,{d:`M8 9.5v4`}),e?null:(0,b.jsx)(`path`,{d:`M2.5 2.5l11 11`})]})}function O(){return(0,b.jsxs)(`svg`,{...S,fill:`currentColor`,stroke:`none`,children:[(0,b.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1.2`}),(0,b.jsx)(`circle`,{cx:`8`,cy:`8`,r:`1.2`}),(0,b.jsx)(`circle`,{cx:`12.5`,cy:`8`,r:`1.2`})]})}function k({children:e,commands:t,label:n}){return(0,b.jsxs)(m,{children:[(0,b.jsx)(u,{className:`contents`,children:e}),(0,b.jsx)(f,{"aria-label":n,className:`min-w-48 text-[13px]`,children:t.map(e=>(0,b.jsxs)(g.Fragment,{children:[e.separatorBefore?(0,b.jsx)(d,{}):null,(0,b.jsxs)(p,{disabled:e.disabled,onClick:()=>e.run(),children:[e.label,e.shortcut?(0,b.jsx)(h,{children:e.shortcut}):null]})]},e.id))})]})}function A({panels:e,group:t,onSelect:r,overflowing:o}){return(0,b.jsxs)(n,{children:[(0,b.jsx)(s,{className:`dkd-icon-button`,"aria-label":`All tabs in this group`,"data-overflowing":o?``:void 0,"data-dock-overflow":``,children:(0,b.jsx)(w,{})}),(0,b.jsx)(i,{align:`end`,className:`w-auto min-w-48 text-[13px]`,children:e.map(e=>(0,b.jsx)(a,{onClick:()=>r(e),children:(0,b.jsx)(`span`,{className:e.id===t.active?`font-medium`:`text-muted-foreground`,children:e.title})},e.id))})]})}function j(e){return e.map(e=>(0,b.jsxs)(g.Fragment,{children:[e.separatorBefore?(0,b.jsx)(o,{}):null,(0,b.jsx)(a,{disabled:e.disabled,onClick:()=>e.run(),children:e.label})]},e.id))}function M({commands:e,group:t}){let r=e.find(e=>e.id===`split-right`),a=e.find(e=>e.id===`maximize`),o=e.filter(e=>e.id!==`split-right`&&e.id!==`maximize`),c=a?.label.startsWith(`Restore`)??!1;return(0,b.jsxs)(b.Fragment,{children:[a&&(!a.disabled||c)?(0,b.jsx)(`button`,{type:`button`,className:`dkd-icon-button`,"aria-label":a.label,"aria-pressed":c,title:a.label,onClick:()=>a.run(),"data-dock-action":`maximize`,"data-group":t.id,children:(0,b.jsx)(E,{restore:c})}):null,r?(0,b.jsx)(`button`,{type:`button`,className:`dkd-icon-button`,"aria-label":r.label,title:r.label,disabled:r.disabled,onClick:()=>r.run(),"data-dock-action":r.id,children:(0,b.jsx)(T,{})}):null,(0,b.jsxs)(n,{children:[(0,b.jsx)(s,{className:`dkd-icon-button`,"aria-label":`More group actions`,"data-dock-action":`more`,children:(0,b.jsx)(O,{})}),(0,b.jsx)(i,{align:`end`,className:`w-auto min-w-44 text-[13px]`,children:j(o)})]})]})}function N({group:e}){return(0,b.jsx)(`div`,{"data-dock-watermark":``,children:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-1 text-[12px]`,children:[(0,b.jsx)(`span`,{className:`text-[13px] font-medium text-foreground/70`,children:e?`Empty group`:`No open panels`}),(0,b.jsx)(`span`,{children:e?`Drop a tab here or open a panel.`:`Open a panel to start.`})]})})}function P({panel:e,close:t}){return(0,b.jsxs)(`div`,{"data-dock-unknown":``,children:[(0,b.jsx)(`p`,{className:`text-[13px] font-medium text-foreground/80`,children:`This panel is not available`}),(0,b.jsxs)(`p`,{className:`text-[12px]`,children:[`Saved as `,(0,b.jsx)(`code`,{className:`font-mono`,children:e.component}),`, which this app no longer provides.`]}),(0,b.jsx)(`button`,{type:`button`,className:`mx-auto h-7 rounded-md border px-2.5 text-[12px] hover:bg-muted`,onClick:t,children:`Remove tab`})]})}function F({zone:e,rect:t}){return(0,b.jsx)(`div`,{"data-dock-drop-preview":``,"data-zone":e,"data-marker":t.width<=3||t.height<=3?``:void 0})}function I({panel:e,error:t,retry:n}){return(0,b.jsxs)(`div`,{"data-dock-panel-error":``,role:`alert`,children:[(0,b.jsxs)(`p`,{className:`text-[13px] font-medium text-foreground/80`,children:[e.title,` stopped working`]}),(0,b.jsx)(`p`,{className:`max-w-80 truncate font-mono text-[11px]`,children:t instanceof Error?t.message:String(t)}),(0,b.jsx)(`button`,{type:`button`,className:`mx-auto h-7 rounded-md border px-2.5 text-[12px] hover:bg-muted`,onClick:n,children:`Retry`})]})}function L({panel:e}){return(0,b.jsx)(`div`,{"data-dock-panel-pending":``,"aria-busy":`true`,children:(0,b.jsxs)(`span`,{className:`text-[12px]`,children:[`Loading `,e.title,`…`]})})}function R({panel:e,side:t,icon:n}){return t===`top`||t===`bottom`?(0,b.jsx)(`span`,{"data-dock-border-tab-title":``,children:e.title}):(0,b.jsx)(`span`,{"data-dock-border-icon":``,children:n??e.title.slice(0,1).toUpperCase()})}function z({panel:e,inline:t,unpinned:n,togglePin:r,hide:i}){return(0,b.jsxs)(`div`,{"data-dock-border-header":``,"data-inline":t?``:void 0,children:[t?null:(0,b.jsx)(`span`,{"data-dock-border-title":``,children:e.title}),(0,b.jsx)(`button`,{type:`button`,className:`dkd-icon-button`,"aria-label":n?`Keep open (pin)`:`Auto-hide (unpin)`,"aria-pressed":!n,title:n?`Keep open`:`Auto-hide`,onClick:r,"data-dock-action":`pin`,children:(0,b.jsx)(D,{pinned:!n})}),(0,b.jsx)(`button`,{type:`button`,className:`dkd-icon-button`,"aria-label":`Hide`,title:`Hide`,onClick:i,"data-dock-action":`hide`,children:(0,b.jsx)(C,{})})]})}var B={TabMenu:k,OverflowMenu:A,GroupActions:M,GroupPrefix:null,Watermark:N,UnknownPanel:P,renderTab:null,closeIcon:(0,b.jsx)(C,{}),DropOverlay:F,PanelError:I,PanelPending:L,BorderTab:R,BorderHeader:z,floatChrome:c};export{y as a,v as i,B as n,x as r,C as t};