import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{l as n}from"./model-BiVkNloq.js";import{t as r}from"./tree-view-CNlvzqCD.js";import{Ec as i,Uc as a,zc as o}from"./index-BZuUy872.js";import{t as s}from"./listbox-DmG89G_3.js";import"./kit-gallery-BBavj2rC.js";import{t as c}from"./example-B67lLz1F.js";import{t as l}from"./-kits.collections.shared-CrMBZThW.js";var u=e(a(),1),d=o(),f=1e4,p=10,m=Array.from({length:p},(e,t)=>n(`g${t}`,`Batch ${t+1}`,Array.from({length:f/p},(e,n)=>{let r=f/p*t+n;return{id:`o${r}`,label:`Option ${r.toString().padStart(5,`0`)}`,hint:`#${r}`,disabled:r%97==13}}))),h=Array.from({length:50},(e,t)=>({id:`f${t}`,label:`folder-${t.toString().padStart(2,`0`)}`,children:Array.from({length:100},(e,n)=>({id:`f${t}/${n}`,label:`file-${t}-${n.toString().padStart(3,`0`)}.ts`,hint:`${n*37%900} B`}))}));function g(){let[e,t]=(0,u.useState)([]),[n,i]=(0,u.useState)([`f0`,`f1`]),a=(0,u.useMemo)(()=>h.map(e=>e.id),[]);return(0,d.jsxs)(`div`,{className:`grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2`,children:[(0,d.jsxs)(`div`,{className:`space-y-1`,children:[(0,d.jsxs)(`div`,{className:`flex items-center text-[12px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`10,000 options`}),(0,d.jsxs)(`span`,{className:`ml-auto text-muted-foreground tabular-nums`,children:[e.length.toLocaleString(),` selected`]})]}),(0,d.jsx)(s,{"aria-label":`Ten thousand options`,items:m,selectionMode:`multiple`,value:e,onChange:t,virtual:!0,height:320}),(0,d.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:`End jumps to the last row · type “Option 0420” · ⌘A selects all enabled`})]}),(0,d.jsxs)(`div`,{className:`space-y-1`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2 text-[12px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`5,050 tree rows`}),(0,d.jsx)(`button`,{type:`button`,className:`ml-auto h-6 rounded border border-border px-2 hover:bg-accent`,onClick:()=>i(a),children:`Expand all`}),(0,d.jsx)(`button`,{type:`button`,className:`h-6 rounded border border-border px-2 hover:bg-accent`,onClick:()=>i([]),children:`Collapse all`})]}),(0,d.jsx)(r,{"aria-label":`Large tree`,items:h,expanded:n,onExpandedChange:i,virtual:!0,height:320,className:`rounded-lg border border-border p-1`})]})]})}var _=`import { useMemo, useState } from "react"
import { Listbox, section, TreeView, type CollectionNode, type Entry } from "@kitora/collections"

const ROWS = 10_000
const GROUPS = 10

/** 10,000 options in 10 sections. */
const OPTIONS: readonly CollectionNode<Entry>[] = Array.from({ length: GROUPS }, (_, g) =>
  section(\`g\${g}\`, \`Batch \${g + 1}\`, Array.from({ length: ROWS / GROUPS }, (_, i) => {
    const n = g * (ROWS / GROUPS) + i
    return { id: \`o\${n}\`, label: \`Option \${n.toString().padStart(5, "0")}\`, hint: \`#\${n}\`, disabled: n % 97 === 13 }
  })),
)

/** 50 folders × 100 files. */
const TREE: readonly Entry[] = Array.from({ length: 50 }, (_, f) => ({
  id: \`f\${f}\`,
  label: \`folder-\${f.toString().padStart(2, "0")}\`,
  children: Array.from({ length: 100 }, (_, i) => ({ id: \`f\${f}/\${i}\`, label: \`file-\${f}-\${i.toString().padStart(3, "0")}.ts\`, hint: \`\${(i * 37) % 900} B\` })),
}))

/** Virtual windows: only the visible rows mount, while arrows, Home/End, typeahead and Shift ranges still cover every row. */
export function Scale() {
  const [value, setValue] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>(["f0", "f1"])
  const allFolders = useMemo(() => TREE.map((t) => t.id), [])
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-1">
        <div className="flex items-center text-[12px]">
          <span className="font-medium">10,000 options</span>
          <span className="ml-auto text-muted-foreground tabular-nums">{value.length.toLocaleString()} selected</span>
        </div>
        <Listbox aria-label="Ten thousand options" items={OPTIONS} selectionMode="multiple" value={value} onChange={setValue} virtual height={320} />
        <p className="text-[11px] text-muted-foreground">End jumps to the last row · type “Option 0420” · ⌘A selects all enabled</p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[12px]">
          <span className="font-medium">5,050 tree rows</span>
          <button type="button" className="ml-auto h-6 rounded border border-border px-2 hover:bg-accent" onClick={() => setExpanded(allFolders)}>
            Expand all
          </button>
          <button type="button" className="h-6 rounded border border-border px-2 hover:bg-accent" onClick={() => setExpanded([])}>
            Collapse all
          </button>
        </div>
        <TreeView aria-label="Large tree" items={TREE} expanded={expanded} onExpandedChange={setExpanded} virtual height={320} className="rounded-lg border border-border p-1" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./scale-Bl-gfoKK.js`),[]));function v(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(t,{title:`Scale`,children:`The virtual window mounts only the visible rows, while the roving source answers for every row, so keyboard navigation, typeahead and ranges cover all of them.`}),(0,d.jsx)(c,{n:1,title:`Ten thousand rows`,blurb:`A 10,000-option listbox in ten sections and a 5,050-row tree, both virtual.`,code:_,children:(0,d.jsx)(l,{testId:`scale`,children:(0,d.jsx)(g,{})})})]})}export{v as component};