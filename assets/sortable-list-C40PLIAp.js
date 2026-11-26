import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{r as a}from"./sortable-list-BWb-mKpb.js";var o=e({SortableListDisabledItems:()=>l}),s=i(),c=[`Pinned: Welcome`,`Inbox`,`Today`,`Pinned: Archive`,`Someday`];function l(){return(0,s.jsx)(a,{label:`Lists`,defaultItems:c,getId:e=>e,isDisabled:e=>e.startsWith(`Pinned`),indicator:`line`,renderItem:e=>(0,s.jsx)(`span`,{className:`truncate`,children:e}),className:`max-w-xs`})}var u=e({SortableListHorizontalWithHandle:()=>f}),d=[`Overview`,`Issues`,`Pull requests`,`Releases`];function f(){return(0,s.jsx)(a,{label:`Tabs`,orientation:`horizontal`,handle:!0,defaultItems:d,getId:e=>e,renderItem:e=>(0,s.jsx)(`span`,{className:`truncate`,children:e}),className:`max-w-xl`})}var p=e({SortableListVertical:()=>g}),m=t(n(),1),h=[`Write the brief`,`Review the designs`,`Plan the sprint`,`Ship the release`,`Write the changelog`];function g(){let[e,t]=(0,m.useState)(h);return(0,s.jsxs)(`div`,{className:`flex w-full max-w-xs flex-col gap-2`,children:[(0,s.jsx)(a,{label:`Tasks`,defaultItems:h,getId:e=>e,onItemsChange:e=>t(e),renderItem:e=>(0,s.jsx)(`span`,{className:`truncate`,children:e})}),(0,s.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`First: `,e[0]]})]})}var _=`import { SortableList } from "@kitora/dnd"

const ROWS = ["Pinned: Welcome", "Inbox", "Today", "Pinned: Archive", "Someday"]

// \`isDisabled\` pins rows: they refuse a drag but other rows still drop around them. \`indicator="line"\`
// draws a drop line instead of opening a gap. The kit already dims a pinned row, so its text keeps the normal colour.
export function SortableListDisabledItems() {
  return (
    <SortableList
      label="Lists"
      defaultItems={ROWS}
      getId={(row) => row}
      isDisabled={(row) => row.startsWith("Pinned")}
      indicator="line"
      renderItem={(row) => <span className="truncate">{row}</span>}
      className="max-w-xs"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./disabled-items-DKvEDnF4.js`),[]));var v=`import { SortableList } from "@kitora/dnd"

const TABS = ["Overview", "Issues", "Pull requests", "Releases"]

// \`orientation="horizontal"\` moves along the row (mirrored in right-to-left text), and \`handle\` limits
// the drag to a grip so the rest of each item stays clickable.
export function SortableListHorizontalWithHandle() {
  return <SortableList label="Tabs" orientation="horizontal" handle defaultItems={TABS} getId={(tab) => tab} renderItem={(tab) => <span className="truncate">{tab}</span>} className="max-w-xl" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./horizontal-with-handle-hH-N-q6H.js`),[]));var y=`import { useState } from "react"
import { SortableList } from "@kitora/dnd"

const TASKS = ["Write the brief", "Review the designs", "Plan the sprint", "Ship the release", "Write the changelog"]

// Drag a row, or focus it and press Space to lift, the arrow keys to move and Space to drop (Escape
// cancels); each step is announced. \`onItemsChange\` hands back the new order.
export function SortableListVertical() {
  const [order, setOrder] = useState<readonly string[]>(TASKS)
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <SortableList label="Tasks" defaultItems={TASKS} getId={(task) => task} onItemsChange={(items) => setOrder(items)} renderItem={(task) => <span className="truncate">{task}</span>} />
      <p className="text-xs text-muted-foreground">First: {order[0]}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./vertical-DDWBOOdi.js`),[]));var b={"./demos/sortable-list/disabled-items.tsx":o,"./demos/sortable-list/horizontal-with-handle.tsx":u,"./demos/sortable-list/vertical.tsx":p},x={"./demos/sortable-list/disabled-items.tsx":_,"./demos/sortable-list/horizontal-with-handle.tsx":v,"./demos/sortable-list/vertical.tsx":y};export{b as modules,x as sources};