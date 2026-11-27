import{h as e,n as t}from"./env-C9SKLn5e.js";var n=`data-dnd-preview`,r=`data-dnd-active`,i=`data-dnd-source`,a=`data-dnd-pressing`,o=`data-dnd-over`,s=`dnd-kit-base-style`,c=`
[${r}="dragging"] iframe { pointer-events: none; }
[${t}] { -webkit-touch-callout: none; -webkit-user-drag: none; }
`;function l(t=e()?document:null){if(!t||t.getElementById(s))return;let n=t.createElement(`style`);n.id=s,n.textContent=c,t.head.append(n)}var u=`data-dnd-placeholder`,d=`away`,f=`data-dnd-shifting`,p=`data-dnd-landed`,m=`data-dnd-indicator`,h=`data-dnd-count`,g=`dnd-kit-presentation-style`,_=`
[${f}] { transition: translate var(--dnd-duration, 200ms) var(--dnd-easing, cubic-bezier(0.2, 0.8, 0.2, 1)); }
[${u}="clone"] { opacity: var(--dnd-placeholder-opacity, 0.35); }
[${u}="${d}"] { opacity: 0; }
[${n}="clone"] > * { box-shadow: var(--dnd-preview-shadow, 0 6px 16px rgb(0 0 0 / 0.16)); }
[${p}="motion"] { animation: dnd-landed var(--dnd-flash-duration, 700ms) ease-out; }
[${p}="static"] { outline: 2px solid var(--dnd-flash-color, Highlight); outline-offset: 1px; }
@keyframes dnd-landed {
  from { outline: 2px solid var(--dnd-flash-color, Highlight); outline-offset: 1px; }
  to { outline: 2px solid transparent; outline-offset: 1px; }
}
[${m}] { background: var(--dnd-indicator-color, Highlight); border-radius: 2px; }
[${m}][data-position="inside"] { background: color-mix(in srgb, var(--dnd-indicator-color, Highlight) 12%, transparent); outline: 2px solid var(--dnd-indicator-color, Highlight); outline-offset: -2px; }
::view-transition-group(*.dnd) { animation-duration: var(--dnd-duration, 200ms); animation-timing-function: var(--dnd-easing, cubic-bezier(0.2, 0.8, 0.2, 1)); }
@media (prefers-reduced-motion: reduce) {
  [${f}] { transition: none; }
  [${p}="motion"] { animation: none; outline: 2px solid var(--dnd-flash-color, Highlight); outline-offset: 1px; }
}
@media (forced-colors: active) {
  [${m}] { background: Highlight; forced-color-adjust: none; }
  [${m}][data-position="inside"] { background: transparent; outline: 2px solid Highlight; }
  [${n}] > * { outline: 2px solid CanvasText; outline-offset: -1px; }
  [${u}="clone"] { outline: 2px dashed GrayText; outline-offset: -2px; }
  [${o}] { outline: 2px solid Highlight; outline-offset: -2px; }
  [${p}] { outline: 2px solid Highlight; outline-offset: 1px; }
  [${h}] { forced-color-adjust: none; background: Highlight; color: HighlightText; }
}
`;function v(t=e()?document:null){if(!t||t.getElementById(g))return;let n=t.createElement(`style`);n.id=g,n.textContent=_,t.head.append(n)}export{d as a,r as c,l as d,v as f,u as i,f as l,p as n,a as o,o as r,n as s,m as t,i as u};