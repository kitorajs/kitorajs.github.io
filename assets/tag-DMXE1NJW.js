import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{a,o}from"./badges-BZf8K0MK.js";var s=e({TagColorsAndRemove:()=>d}),c=t(r(),1),l=i(),u=[{id:`bug`,label:`bug`,color:`#ef4444`},{id:`p1`,label:`priority: high`,color:`#f59e0b`},{id:`web`,label:`web`,color:`#3b82f6`},{id:`a11y`,label:`accessibility`,color:`#8b5cf6`}];function d(){let[e,t]=(0,c.useState)(u);return(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,l.jsx)(o,{tags:e,onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))}),e.length<u.length?(0,l.jsx)(`button`,{type:`button`,className:`text-xs text-muted-foreground underline`,onClick:()=>t(u),children:`Reset`}):null]})}var f=e({TagOverflowAndFilter:()=>h}),p=[{id:`design`,label:`design`},{id:`docs`,label:`docs`},{id:`infra`,label:`infra`},{id:`mobile`,label:`mobile`},{id:`web`,label:`web`}],m=[`Open`,`Assigned to me`,`Has PR`];function h(){let[e,t]=(0,c.useState)([`Open`]);return(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,l.jsx)(o,{tags:p,max:3}),(0,l.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:m.map(n=>(0,l.jsx)(a,{selected:e.includes(n),onClick:()=>t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n]),children:n},n))})]})}var g=`import { useState } from "react"
import { TagList, type TagItem } from "@kitora/display"

const START: readonly TagItem[] = [
  { id: "bug", label: "bug", color: "#ef4444" },
  { id: "p1", label: "priority: high", color: "#f59e0b" },
  { id: "web", label: "web", color: "#3b82f6" },
  { id: "a11y", label: "accessibility", color: "#8b5cf6" },
]

// \`TagList\` draws each tag with its colour swatch; \`onRemove\` adds a labelled remove button per tag.
export function TagColorsAndRemove() {
  const [tags, setTags] = useState(START)
  return (
    <div className="flex flex-col items-center gap-2">
      <TagList tags={tags} onRemove={(tag) => setTags((all) => all.filter((t) => t.id !== tag.id))} />
      {tags.length < START.length ? (
        <button type="button" className="text-xs text-muted-foreground underline" onClick={() => setTags(START)}>
          Reset
        </button>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./colors-and-remove-D5zehcd7.js`),[]));var _=`import { useState } from "react"
import { Tag, TagList, type TagItem } from "@kitora/display"

const LABELS: readonly TagItem[] = [
  { id: "design", label: "design" },
  { id: "docs", label: "docs" },
  { id: "infra", label: "infra" },
  { id: "mobile", label: "mobile" },
  { id: "web", label: "web" },
]

const FILTERS = ["Open", "Assigned to me", "Has PR"] as const

// \`max\` folds the rest into a "+N" tag. A \`Tag\` with \`onClick\` becomes a toggle button whose \`selected\`
// state is \`aria-pressed\`.
export function TagOverflowAndFilter() {
  const [on, setOn] = useState<readonly string[]>(["Open"])
  return (
    <div className="flex flex-col items-center gap-3">
      <TagList tags={LABELS} max={3} />
      <div className="flex flex-wrap gap-1">
        {FILTERS.map((f) => (
          <Tag key={f} selected={on.includes(f)} onClick={() => setOn((all) => (all.includes(f) ? all.filter((x) => x !== f) : [...all, f]))}>
            {f}
          </Tag>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./overflow-and-filter-CJcQLBt_.js`),[]));var v={"./demos/tag/colors-and-remove.tsx":s,"./demos/tag/overflow-and-filter.tsx":f},y={"./demos/tag/colors-and-remove.tsx":g,"./demos/tag/overflow-and-filter.tsx":_};export{v as modules,y as sources};