import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./italic-DFgWAEI1.js";import{t as i}from"./download-DkWKWhwG.js";import{t as a}from"./pin-CeSKZd8V.js";import{t as o}from"./redo-2-FKGgmyMW.js";import{t as s}from"./refresh-cw-Bmh3wpbh.js";import{t as c}from"./settings-DVlOJsLs.js";import{t as l}from"./star-DSb30TWj.js";import{t as u}from"./trash-2-BYfY5R1J.js";import{t as d}from"./undo-2-AaSwxjDx.js";import{t as f}from"./underline-C0z848xU.js";import{Bc as p,Cc as m,Di as h,Ic as g,Sn as _}from"./index-B9ukmIN1.js";import{t as v}from"./separator-BAbS8iiG.js";var y=e({IconButtonCompose:()=>C}),b=t(p(),1),x=g(),S=[{mark:`bold`,label:`Bold`,icon:(0,x.jsx)(n,{})},{mark:`italic`,label:`Italic`,icon:(0,x.jsx)(r,{})},{mark:`underline`,label:`Underline`,icon:(0,x.jsx)(f,{})}];function C(){let[e,t]=(0,b.useState)(new Set([`bold`])),n=e=>t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,x.jsxs)(`div`,{role:`toolbar`,"aria-label":`Formatting`,className:`inline-flex items-center gap-0.5 rounded-lg border bg-card p-1 shadow-xs`,children:[(0,x.jsx)(_,{label:`Undo`,children:(0,x.jsx)(d,{})}),(0,x.jsx)(_,{label:`Redo`,disabled:!0,children:(0,x.jsx)(o,{})}),(0,x.jsx)(v,{orientation:`vertical`,className:`mx-1 data-vertical:h-5 data-vertical:self-center`}),S.map(t=>(0,x.jsx)(_,{label:t.label,pressed:e.has(t.mark),onClick:()=>n(t.mark),children:t.icon},t.mark))]})}var w=e({IconButtonLoadingAndToggle:()=>T});function T(){let[e,t]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,x.jsx)(_,{label:`Refresh`,variant:`outline`,size:`default`,loading:e,onClick:()=>{t(!0),window.setTimeout(()=>t(!1),1500)},children:(0,x.jsx)(s,{})}),(0,x.jsx)(`span`,{className:`mx-1 h-5 w-px bg-border`,"aria-hidden":`true`}),(0,x.jsx)(_,{label:`Bold`,defaultPressed:!0,tooltip:!0,children:(0,x.jsx)(n,{})}),(0,x.jsx)(_,{label:`Italic`,pressed:i,onPressedChange:a,tooltip:!0,children:(0,x.jsx)(r,{})})]})}var E=e({IconButtonSizesAndStates:()=>D});function D(){let[e,t]=(0,b.useState)(!0),[n,r]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,x.jsx)(_,{label:`Settings`,size:`xs`,children:(0,x.jsx)(c,{})}),(0,x.jsx)(_,{label:`Settings`,children:(0,x.jsx)(c,{})}),(0,x.jsx)(_,{label:`Settings`,size:`default`,variant:`outline`,children:(0,x.jsx)(c,{})}),(0,x.jsx)(_,{label:`Settings`,size:`lg`,variant:`outline`,children:(0,x.jsx)(c,{})}),(0,x.jsx)(`span`,{className:`mx-1 h-5 w-px bg-border`,"aria-hidden":`true`}),(0,x.jsx)(_,{label:`Star`,pressed:e,onClick:()=>t(e=>!e),children:(0,x.jsx)(l,{})}),(0,x.jsx)(_,{label:`Pin`,pressed:n,onClick:()=>r(e=>!e),children:(0,x.jsx)(a,{})}),(0,x.jsx)(_,{label:`Settings`,disabled:!0,children:(0,x.jsx)(c,{})})]})}var O=e({IconButtonTooltips:()=>k});function k(){return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,x.jsx)(_,{label:`Copy link`,tooltip:!0,children:(0,x.jsx)(h,{})}),(0,x.jsx)(_,{label:`Download`,tooltip:(0,x.jsxs)(x.Fragment,{children:[`Download`,(0,x.jsx)(`kbd`,{className:`rounded-sm bg-background/20 px-1 font-mono text-[10px]`,children:`⌘S`})]}),"aria-keyshortcuts":`Meta+S`,children:(0,x.jsx)(i,{})}),(0,x.jsx)(_,{label:`Delete`,tooltip:!1,variant:`destructive-soft`,children:(0,x.jsx)(u,{})})]})}var A=`import { useState, type ReactNode } from "react"
import { Bold, Italic, Redo2, Underline, Undo2 } from "lucide-react"
import { IconButton } from "@kitora/ui/icon-button"
import { Separator } from "@kitora/ui/separator"

type Mark = "bold" | "italic" | "underline"

const MARKS: readonly { readonly mark: Mark; readonly label: string; readonly icon: ReactNode }[] = [
  { mark: "bold", label: "Bold", icon: <Bold /> },
  { mark: "italic", label: "Italic", icon: <Italic /> },
  { mark: "underline", label: "Underline", icon: <Underline /> },
]

export function IconButtonCompose() {
  const [on, setOn] = useState<ReadonlySet<Mark>>(new Set(["bold"]))
  const toggle = (mark: Mark) =>
    setOn((prev) => {
      const next = new Set(prev)
      if (next.has(mark)) next.delete(mark)
      else next.add(mark)
      return next
    })
  return (
    <div role="toolbar" aria-label="Formatting" className="inline-flex items-center gap-0.5 rounded-lg border bg-card p-1 shadow-xs">
      <IconButton label="Undo"><Undo2 /></IconButton>
      <IconButton label="Redo" disabled><Redo2 /></IconButton>
      <Separator orientation="vertical" className="mx-1 data-vertical:h-5 data-vertical:self-center" />
      {MARKS.map((m) => (
        <IconButton key={m.mark} label={m.label} pressed={on.has(m.mark)} onClick={() => toggle(m.mark)}>
          {m.icon}
        </IconButton>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>m(()=>import(`./compose-COR_lYVd.js`),[]));var j=`import { useState } from "react"
import { Bold, Italic, RefreshCw } from "lucide-react"
import { IconButton } from "@kitora/ui/icon-button"

/** A loading icon button (the spinner replaces the icon, the label stays its name) and real toggles, uncontrolled and controlled. */
export function IconButtonLoadingAndToggle() {
  const [refreshing, setRefreshing] = useState(false)
  const [italic, setItalic] = useState(false)
  const refresh = () => {
    setRefreshing(true)
    window.setTimeout(() => setRefreshing(false), 1500)
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <IconButton label="Refresh" variant="outline" size="default" loading={refreshing} onClick={refresh}>
        <RefreshCw />
      </IconButton>
      <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <IconButton label="Bold" defaultPressed tooltip>
        <Bold />
      </IconButton>
      <IconButton label="Italic" pressed={italic} onPressedChange={setItalic} tooltip>
        <Italic />
      </IconButton>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>m(()=>import(`./loading-and-toggle-CVtr5MiE.js`),[]));var M=`import { useState } from "react"
import { Pin, Settings, Star } from "lucide-react"
import { IconButton } from "@kitora/ui/icon-button"

export function IconButtonSizesAndStates() {
  const [starred, setStarred] = useState(true)
  const [pinned, setPinned] = useState(false)
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <IconButton label="Settings" size="xs"><Settings /></IconButton>
      <IconButton label="Settings"><Settings /></IconButton>
      <IconButton label="Settings" size="default" variant="outline"><Settings /></IconButton>
      <IconButton label="Settings" size="lg" variant="outline"><Settings /></IconButton>
      <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <IconButton label="Star" pressed={starred} onClick={() => setStarred((v) => !v)}><Star /></IconButton>
      <IconButton label="Pin" pressed={pinned} onClick={() => setPinned((v) => !v)}><Pin /></IconButton>
      <IconButton label="Settings" disabled><Settings /></IconButton>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>m(()=>import(`./sizes-and-states-BxEc4VpC.js`),[]));var N=`import { Copy, Download, Trash2 } from "lucide-react"
import { IconButton } from "@kitora/ui/icon-button"

export function IconButtonTooltips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <IconButton label="Copy link" tooltip><Copy /></IconButton>
      <IconButton
        label="Download"
        tooltip={
          <>
            Download
            <kbd className="rounded-sm bg-background/20 px-1 font-mono text-[10px]">⌘S</kbd>
          </>
        }
        aria-keyshortcuts="Meta+S"
      >
        <Download />
      </IconButton>
      <IconButton label="Delete" tooltip={false} variant="destructive-soft"><Trash2 /></IconButton>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>m(()=>import(`./tooltips-CJfmVk0O.js`),[]));var P={"./demos/icon-button/compose.tsx":y,"./demos/icon-button/loading-and-toggle.tsx":w,"./demos/icon-button/sizes-and-states.tsx":E,"./demos/icon-button/tooltips.tsx":O},F={"./demos/icon-button/compose.tsx":A,"./demos/icon-button/loading-and-toggle.tsx":j,"./demos/icon-button/sizes-and-states.tsx":M,"./demos/icon-button/tooltips.tsx":N};export{P as modules,F as sources};