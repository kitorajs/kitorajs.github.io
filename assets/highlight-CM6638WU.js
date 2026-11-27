import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./highlight-C_SIKKRc.js";import{Ec as r,Uc as i,zc as a}from"./index-BZuUy872.js";import{t as o}from"./badge-zOMNRv4l.js";import{t as s}from"./search-input-CU_YJIb0.js";var c=e({HighlightCompose:()=>p}),l=t(i(),1),u=a(),d=[{name:`Zoë Müller`,role:`Design`},{name:`José Álvarez`,role:`Engineering`},{name:`Amélie Laurent`,role:`Product`},{name:`Joe Park`,role:`Engineering`},{name:`Renée Zhang`,role:`Support`}],f=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).toLowerCase();function p(){let[e,t]=(0,l.useState)(`jo`),r=f(e).split(/\s+/).filter(Boolean),i=d.filter(e=>r.every(t=>f(`${e.name} ${e.role}`).includes(t)));return(0,u.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,u.jsx)(s,{value:e,onValueChange:t,placeholder:`Search people`,"aria-label":`Search people`}),(0,u.jsxs)(`ul`,{className:`divide-y divide-border rounded-md border border-border text-[13px]`,children:[i.map(t=>(0,u.jsxs)(`li`,{className:`flex items-center justify-between gap-2 px-2.5 py-1.5`,children:[(0,u.jsx)(n,{text:t.name,query:e}),(0,u.jsx)(o,{variant:`secondary`,children:(0,u.jsx)(n,{text:t.role,query:e})})]},t.name)),i.length===0?(0,u.jsxs)(`li`,{className:`px-2.5 py-1.5 text-muted-foreground`,children:[`No one matches “`,e,`”`]}):null]})]})}var m=e({HighlightMatchOptions:()=>_}),h=`Cat, concat and CAT: the cat sat on the mat by the red door and the blue door.`,g=[`bg-amber-200/70 dark:bg-amber-400/30`,`bg-sky-200/70 dark:bg-sky-400/30`];function _(){return(0,u.jsxs)(`div`,{className:`flex max-w-xl flex-col gap-3 text-sm`,children:[(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`span`,{className:`me-2 text-xs text-muted-foreground`,children:`default`}),(0,u.jsx)(n,{text:h,query:`cat`,variant:`tint`})]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`span`,{className:`me-2 text-xs text-muted-foreground`,children:`wholeWord`}),(0,u.jsx)(n,{text:h,query:`cat`,variant:`tint`,matchOptions:{wholeWord:!0}})]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`span`,{className:`me-2 text-xs text-muted-foreground`,children:`caseSensitive`}),(0,u.jsx)(n,{text:h,query:`cat`,variant:`tint`,matchOptions:{caseSensitive:!0}})]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`span`,{className:`me-2 text-xs text-muted-foreground`,children:`a colour per term`}),(0,u.jsx)(n,{text:h,query:[`red`,`blue`],renderMatch:(e,t,n)=>(0,u.jsx)(`mark`,{className:`rounded-[2px] px-px text-inherit ${g[n]??``}`,children:e})})]})]})}var v=e({HighlightQueryRangesIndices:()=>y});function y(){return(0,u.jsxs)(`dl`,{className:`grid w-full max-w-md grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-[13px]`,children:[(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`query`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`Café crème brûlée`,query:`creme cafe`})}),(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`ranges`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`src/kit/registry.ts`,ranges:[{start:8,end:16}]})}),(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`indices`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`Open settings`,indices:[0,1,5,6,7]})}),(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`styled`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`Invoice overdue since Monday`,query:`overdue`,markClassName:`bg-amber-200/70 px-px no-underline dark:bg-amber-400/25`})})]})}var b=e({HighlightVariants:()=>x});function x(){return(0,u.jsxs)(`dl`,{className:`grid w-full max-w-md grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-[13px]`,children:[(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`underline`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`Open recent project`,query:`rec`})}),(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`tint`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`The invoice is overdue since Monday`,query:`overdue`,variant:`tint`})}),(0,u.jsx)(`dt`,{className:`text-muted-foreground`,children:`none`}),(0,u.jsx)(`dd`,{children:(0,u.jsx)(n,{text:`Design reviews`,query:`review`,variant:`none`,markClassName:`rounded-[2px] bg-primary/15 text-primary`})})]})}var S=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Highlight } from "@kitora/ui/highlight"
import { SearchInput } from "@kitora/ui/search-input"

const PEOPLE = [
  { name: "Zoë Müller", role: "Design" },
  { name: "José Álvarez", role: "Engineering" },
  { name: "Amélie Laurent", role: "Product" },
  { name: "Joe Park", role: "Engineering" },
  { name: "Renée Zhang", role: "Support" },
]

/** Accent- and case-insensitive, like Highlight itself: "jose" finds "José". */
const fold = (s: string) => s.normalize("NFD").replace(/\\p{M}/gu, "").toLowerCase()

export function HighlightCompose() {
  const [query, setQuery] = useState("jo")
  const words = fold(query).split(/\\s+/).filter(Boolean)
  const rows = PEOPLE.filter((p) => words.every((w) => fold(\`\${p.name} \${p.role}\`).includes(w)))
  return (
    <div className="grid w-full max-w-sm gap-2">
      <SearchInput value={query} onValueChange={setQuery} placeholder="Search people" aria-label="Search people" />
      <ul className="divide-y divide-border rounded-md border border-border text-[13px]">
        {rows.map((p) => (
          <li key={p.name} className="flex items-center justify-between gap-2 px-2.5 py-1.5">
            <Highlight text={p.name} query={query} />
            <Badge variant="secondary">
              <Highlight text={p.role} query={query} />
            </Badge>
          </li>
        ))}
        {rows.length === 0 ? <li className="px-2.5 py-1.5 text-muted-foreground">No one matches “{query}”</li> : null}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./compose-DJ3ijw4Q.js`),[]));var C=`import { Highlight } from "@kitora/ui/highlight"

const text = "Cat, concat and CAT: the cat sat on the mat by the red door and the blue door."
const colours = ["bg-amber-200/70 dark:bg-amber-400/30", "bg-sky-200/70 dark:bg-sky-400/30"]

export function HighlightMatchOptions() {
  return (
    <div className="flex max-w-xl flex-col gap-3 text-sm">
      <p>
        <span className="me-2 text-xs text-muted-foreground">default</span>
        <Highlight text={text} query="cat" variant="tint" />
      </p>
      <p>
        <span className="me-2 text-xs text-muted-foreground">wholeWord</span>
        <Highlight text={text} query="cat" variant="tint" matchOptions={{ wholeWord: true }} />
      </p>
      <p>
        <span className="me-2 text-xs text-muted-foreground">caseSensitive</span>
        <Highlight text={text} query="cat" variant="tint" matchOptions={{ caseSensitive: true }} />
      </p>
      <p>
        <span className="me-2 text-xs text-muted-foreground">a colour per term</span>
        <Highlight text={text} query={["red", "blue"]} renderMatch={(run, _index, term) => <mark className={\`rounded-[2px] px-px text-inherit \${colours[term] ?? ""}\`}>{run}</mark>} />
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./match-options-BJGGkveK.js`),[]));var w=`import { Highlight } from "@kitora/ui/highlight"

export function HighlightQueryRangesIndices() {
  return (
    <dl className="grid w-full max-w-md grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-[13px]">
      <dt className="text-muted-foreground">query</dt>
      <dd>
        <Highlight text="Café crème brûlée" query="creme cafe" />
      </dd>
      <dt className="text-muted-foreground">ranges</dt>
      <dd>
        <Highlight text="src/kit/registry.ts" ranges={[{ start: 8, end: 16 }]} />
      </dd>
      <dt className="text-muted-foreground">indices</dt>
      <dd>
        <Highlight text="Open settings" indices={[0, 1, 5, 6, 7]} />
      </dd>
      <dt className="text-muted-foreground">styled</dt>
      <dd>
        <Highlight text="Invoice overdue since Monday" query="overdue" markClassName="bg-amber-200/70 px-px no-underline dark:bg-amber-400/25" />
      </dd>
    </dl>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./query-ranges-indices-BkptDtBk.js`),[]));var T=`import { Highlight } from "@kitora/ui/highlight"

export function HighlightVariants() {
  return (
    <dl className="grid w-full max-w-md grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-[13px]">
      <dt className="text-muted-foreground">underline</dt>
      <dd>
        <Highlight text="Open recent project" query="rec" />
      </dd>
      <dt className="text-muted-foreground">tint</dt>
      <dd>
        <Highlight text="The invoice is overdue since Monday" query="overdue" variant="tint" />
      </dd>
      <dt className="text-muted-foreground">none</dt>
      <dd>
        <Highlight text="Design reviews" query="review" variant="none" markClassName="rounded-[2px] bg-primary/15 text-primary" />
      </dd>
    </dl>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./variants-BmGrJIkH.js`),[]));var E={"./demos/highlight/compose.tsx":c,"./demos/highlight/match-options.tsx":m,"./demos/highlight/query-ranges-indices.tsx":v,"./demos/highlight/variants.tsx":b},D={"./demos/highlight/compose.tsx":S,"./demos/highlight/match-options.tsx":C,"./demos/highlight/query-ranges-indices.tsx":w,"./demos/highlight/variants.tsx":T};export{E as modules,D as sources};