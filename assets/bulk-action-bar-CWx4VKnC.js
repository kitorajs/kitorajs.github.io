import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./archive-CEi55kNz.js";import{t as r}from"./save-DJB_O8y8.js";import{t as i}from"./share-2-CIRrfyN2.js";import{t as a}from"./trash-2-0f767-k3.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-9y5uwRd3.js";import{t as u}from"./label-BCdE7eBP.js";import{t as d}from"./checkbox-C15B7P0U.js";import{n as f}from"./toolbar-Bpvkqm5p.js";import{t as p}from"./bulk-action-bar-DgxdnYTv.js";var m=e({BulkActionBarComposeSelectableList:()=>v}),h=t(o(),1),g=c(),_=[`invoice-001.pdf`,`invoice-002.pdf`,`report-q3.xlsx`,`logo.svg`];function v(){let[e,t]=(0,h.useState)([`invoice-001.pdf`]),n=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,g.jsx)(`ul`,{className:`divide-y divide-border rounded-md border border-border bg-card`,children:_.map(t=>(0,g.jsxs)(`li`,{className:`flex items-center gap-2 px-3 py-2`,children:[(0,g.jsx)(d,{id:`bulk-${t}`,checked:e.includes(t),onCheckedChange:e=>n(t,e===!0)}),(0,g.jsx)(u,{htmlFor:`bulk-${t}`,className:`font-normal`,children:t})]},t))}),(0,g.jsx)(p,{count:e.length,total:_.length,onClear:()=>t([]),children:(0,g.jsxs)(l,{size:`sm`,variant:`ghost`,className:`text-destructive hover:text-destructive`,children:[(0,g.jsx)(a,{}),`Delete`]})})]})})}var y=e({BulkActionBarSelectAllAndEscape:()=>S}),b=[`invoice-001.pdf`,`invoice-002.pdf`,`report-q3.xlsx`,`logo.svg`],x=48;function S(){let[e,t]=(0,h.useState)([`invoice-001.pdf`,`logo.svg`]),[r,i]=(0,h.useState)(!1),o=(e,n)=>{i(!1),t(t=>n?[...t,e]:t.filter(t=>t!==e))};return(0,g.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,g.jsx)(`ul`,{className:`divide-y divide-border rounded-md border border-border bg-card`,children:b.map(t=>(0,g.jsxs)(`li`,{className:`flex items-center gap-2 px-3 py-2`,children:[(0,g.jsx)(d,{id:`select-all-${t}`,checked:r||e.includes(t),onCheckedChange:e=>o(t,e===!0)}),(0,g.jsx)(u,{htmlFor:`select-all-${t}`,className:`font-normal`,children:t})]},t))}),(0,g.jsxs)(p,{count:r?x:e.length,total:x,onClear:()=>{i(!1),t([])},onSelectAll:()=>i(!0),children:[(0,g.jsxs)(f,{size:`sm`,variant:`ghost`,children:[(0,g.jsx)(n,{}),(0,g.jsx)(`span`,{className:`max-sm:sr-only`,children:`Archive`})]}),(0,g.jsxs)(f,{size:`sm`,variant:`ghost`,className:`text-destructive hover:text-destructive`,children:[(0,g.jsx)(a,{}),(0,g.jsx)(`span`,{className:`max-sm:sr-only`,children:`Delete`})]})]}),(0,g.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Tab into the bar, move with the arrow keys, press Escape to clear.`})]})}var C=e({BulkActionBarStickyToolbarAppearsOnSelection:()=>w});function w(){let[e,t]=(0,h.useState)(3);return(0,g.jsxs)(`div`,{className:`flex justify-center items-stretch flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(l,{size:`sm`,variant:`outline`,onClick:()=>t(e=>Math.max(0,e-1)),children:`-`}),(0,g.jsxs)(`span`,{className:`text-sm tabular-nums`,children:[`selected: `,e]}),(0,g.jsx)(l,{size:`sm`,variant:`outline`,onClick:()=>t(e=>e+1),children:`+`})]}),(0,g.jsxs)(p,{count:e,total:240,onClear:()=>t(0),children:[(0,g.jsxs)(l,{size:`sm`,variant:`ghost`,children:[(0,g.jsx)(r,{}),(0,g.jsx)(`span`,{className:`max-sm:sr-only`,children:`Archive`})]}),(0,g.jsxs)(l,{size:`sm`,variant:`ghost`,children:[(0,g.jsx)(i,{}),(0,g.jsx)(`span`,{className:`max-sm:sr-only`,children:`Move`})]}),(0,g.jsxs)(l,{size:`sm`,variant:`ghost`,className:`text-destructive hover:text-destructive`,children:[(0,g.jsx)(a,{}),(0,g.jsx)(`span`,{className:`max-sm:sr-only`,children:`Delete`})]})]})]})}var T=`import { useState } from "react"
import { Trash2 } from "lucide-react"
import { BulkActionBar } from "@kitora/ui/bulk-action-bar"
import { Checkbox } from "@kitora/ui/checkbox"
import { Label } from "@kitora/ui/label"
import { Button } from "@kitora/ui/button"

const FILES = ["invoice-001.pdf", "invoice-002.pdf", "report-q3.xlsx", "logo.svg"]

export function BulkActionBarComposeSelectableList() {
  const [selected, setSelected] = useState<string[]>(["invoice-001.pdf"])
  const toggle = (f: string, on: boolean) => setSelected((s) => (on ? [...s, f] : s.filter((x) => x !== f)))
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-md space-y-2">
        <ul className="divide-y divide-border rounded-md border border-border bg-card">
          {FILES.map((f) => (
            <li key={f} className="flex items-center gap-2 px-3 py-2">
              <Checkbox id={\`bulk-\${f}\`} checked={selected.includes(f)} onCheckedChange={(v) => toggle(f, v === true)} />
              <Label htmlFor={\`bulk-\${f}\`} className="font-normal">
                {f}
              </Label>
            </li>
          ))}
        </ul>
        <BulkActionBar count={selected.length} total={FILES.length} onClear={() => setSelected([])}>
          <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
            <Trash2 />
            Delete
          </Button>
        </BulkActionBar>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>s(()=>import(`./compose-CX5sa5gz.js`),[]));var E=`import { useState } from "react"
import { Archive, Trash2 } from "lucide-react"
import { BulkActionBar } from "@kitora/ui/bulk-action-bar"
import { Checkbox } from "@kitora/ui/checkbox"
import { Label } from "@kitora/ui/label"
import { ToolbarButton } from "@kitora/ui/toolbar"

const PAGE = ["invoice-001.pdf", "invoice-002.pdf", "report-q3.xlsx", "logo.svg"]
const TOTAL = 48

export function BulkActionBarSelectAllAndEscape() {
  const [selected, setSelected] = useState<string[]>(["invoice-001.pdf", "logo.svg"])
  const [all, setAll] = useState(false)
  const toggle = (file: string, on: boolean) => {
    setAll(false)
    setSelected((s) => (on ? [...s, file] : s.filter((x) => x !== file)))
  }
  const clear = () => {
    setAll(false)
    setSelected([])
  }
  return (
    <div className="w-full max-w-md space-y-2">
      <ul className="divide-y divide-border rounded-md border border-border bg-card">
        {PAGE.map((file) => (
          <li key={file} className="flex items-center gap-2 px-3 py-2">
            <Checkbox id={\`select-all-\${file}\`} checked={all || selected.includes(file)} onCheckedChange={(v) => toggle(file, v === true)} />
            <Label htmlFor={\`select-all-\${file}\`} className="font-normal">
              {file}
            </Label>
          </li>
        ))}
      </ul>
      <BulkActionBar count={all ? TOTAL : selected.length} total={TOTAL} onClear={clear} onSelectAll={() => setAll(true)}>
        <ToolbarButton size="sm" variant="ghost">
          <Archive />
          <span className="max-sm:sr-only">Archive</span>
        </ToolbarButton>
        <ToolbarButton size="sm" variant="ghost" className="text-destructive hover:text-destructive">
          <Trash2 />
          <span className="max-sm:sr-only">Delete</span>
        </ToolbarButton>
      </BulkActionBar>
      <p className="text-xs text-muted-foreground">Tab into the bar, move with the arrow keys, press Escape to clear.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>s(()=>import(`./select-all-and-escape-CPUAuK8Z.js`),[]));var D=`import { useState } from "react"
import { Save, Share2, Trash2 } from "lucide-react"
import { BulkActionBar } from "@kitora/ui/bulk-action-bar"
import { Button } from "@kitora/ui/button"

export function BulkActionBarStickyToolbarAppearsOnSelection() {
  const [count, setCount] = useState(3)
  return (
    <div className="flex justify-center items-stretch flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setCount((c) => Math.max(0, c - 1))}>
          -
        </Button>
        <span className="text-sm tabular-nums">selected: {count}</span>
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </div>
      <BulkActionBar count={count} total={240} onClear={() => setCount(0)}>
        <Button size="sm" variant="ghost">
          <Save />
          <span className="max-sm:sr-only">Archive</span>
        </Button>
        <Button size="sm" variant="ghost">
          <Share2 />
          <span className="max-sm:sr-only">Move</span>
        </Button>
        <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
          <Trash2 />
          <span className="max-sm:sr-only">Delete</span>
        </Button>
      </BulkActionBar>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>s(()=>import(`./sticky-toolbar-appears-on-selection-DVp4qZgb.js`),[]));var O={"./demos/bulk-action-bar/compose.tsx":m,"./demos/bulk-action-bar/select-all-and-escape.tsx":y,"./demos/bulk-action-bar/sticky-toolbar-appears-on-selection.tsx":C},k={"./demos/bulk-action-bar/compose.tsx":T,"./demos/bulk-action-bar/select-all-and-escape.tsx":E,"./demos/bulk-action-bar/sticky-toolbar-appears-on-selection.tsx":D};export{O as modules,k as sources};