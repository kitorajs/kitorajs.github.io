import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-DQo0XDsx.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-B9ukmIN1.js";import{i as s}from"./virtual-list-Cq62zSLd.js";var c=e({VirtualListFixedRows:()=>f}),l=t(r(),1),u=a(),d=1e5;function f(){let e=(0,l.useRef)(null),[t,r]=(0,l.useState)(`50000`);return(0,u.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,u.jsxs)(`form`,{onSubmit:n=>{n.preventDefault();let r=Number.parseInt(t,10);Number.isFinite(r)&&e.current?.scrollToIndex(r,{align:`start`})},className:`flex items-center gap-1.5`,children:[(0,u.jsx)(n,{"aria-label":`Row to jump to`,inputMode:`numeric`,value:t,onChange:e=>r(e.target.value),className:`h-7 w-28 tabular-nums`}),(0,u.jsx)(o,{type:`submit`,size:`xs`,children:`Jump`})]}),(0,u.jsx)(s,{"aria-label":`One hundred thousand rows`,handleRef:e,count:d,rowHeight:28,height:240,itemClassName:`gap-2 border-b border-border/50 text-sm`,renderItem:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`span`,{className:`w-14 text-end text-[11px] tabular-nums text-muted-foreground`,children:[`#`,e]}),(0,u.jsxs)(`span`,{className:`truncate`,children:[`Row `,e.toLocaleString(`en-US`)]})]})})]})}var p=e({VirtualListVariableHeights:()=>g}),m=5e3,h=e=>1+e*7%3;function g(){return(0,u.jsx)(`div`,{className:`w-full max-w-md`,children:(0,u.jsx)(s,{"aria-label":`Activity`,count:m,estimateSize:e=>20+h(e)*18,height:260,itemClassName:`flex-col items-start justify-center border-b border-border/50 px-2 py-2 text-sm`,renderItem:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`span`,{className:`font-medium`,children:[`Event `,e+1]}),(0,u.jsx)(`span`,{className:`line-clamp-3 text-xs text-muted-foreground`,children:Array.from({length:h(e)},()=>`Deployed a new version of the web app.`).join(` `)})]})})})}var _=`import { useRef, useState, type FormEvent } from "react"
import { VirtualList, type VirtualListHandle } from "@kitora/collections/ui"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"

const COUNT = 100_000

// 100,000 rows of 28 px: only the visible ones (plus overscan) are in the DOM. The handle's
// \`scrollToIndex\` jumps to any row.
export function VirtualListFixedRows() {
  const list = useRef<VirtualListHandle>(null)
  const [row, setRow] = useState("50000")
  const jump = (event: FormEvent) => {
    event.preventDefault()
    const n = Number.parseInt(row, 10)
    if (Number.isFinite(n)) list.current?.scrollToIndex(n, { align: "start" })
  }
  return (
    <div className="w-full max-w-md space-y-2">
      <form onSubmit={jump} className="flex items-center gap-1.5">
        <Input aria-label="Row to jump to" inputMode="numeric" value={row} onChange={(event) => setRow(event.target.value)} className="h-7 w-28 tabular-nums" />
        <Button type="submit" size="xs">
          Jump
        </Button>
      </form>
      <VirtualList
        aria-label="One hundred thousand rows"
        handleRef={list}
        count={COUNT}
        rowHeight={28}
        height={240}
        itemClassName="gap-2 border-b border-border/50 text-sm"
        renderItem={(index) => (
          <>
            <span className="w-14 text-end text-[11px] tabular-nums text-muted-foreground">#{index}</span>
            <span className="truncate">Row {index.toLocaleString("en-US")}</span>
          </>
        )}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./fixed-rows-BWcwu4Q_.js`),[]));var v=`import { VirtualList } from "@kitora/collections/ui"

const COUNT = 5_000

/** A deterministic body length per row, so the server and the browser draw the same list. */
const lines = (index: number) => 1 + ((index * 7) % 3)

// Without a fixed \`rowHeight\` each mounted row is measured at its natural height; \`estimateSize\` is the
// first guess for rows not drawn yet, so a feed of one-, two- and three-line rows scrolls without gaps.
export function VirtualListVariableHeights() {
  return (
    <div className="w-full max-w-md">
      <VirtualList
        aria-label="Activity"
        count={COUNT}
        estimateSize={(index) => 20 + lines(index) * 18}
        height={260}
        itemClassName="flex-col items-start justify-center border-b border-border/50 px-2 py-2 text-sm"
        renderItem={(index) => (
          <>
            <span className="font-medium">Event {index + 1}</span>
            <span className="line-clamp-3 text-xs text-muted-foreground">{Array.from({ length: lines(index) }, () => "Deployed a new version of the web app.").join(" ")}</span>
          </>
        )}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./variable-heights-Eb_fb53o.js`),[]));var y={"./demos/virtual-list/fixed-rows.tsx":c,"./demos/virtual-list/variable-heights.tsx":p},b={"./demos/virtual-list/fixed-rows.tsx":_,"./demos/virtual-list/variable-heights.tsx":v};export{y as modules,b as sources};