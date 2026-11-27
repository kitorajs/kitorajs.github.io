import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{l as n,r,s as i}from"./model-BiVkNloq.js";import{n as a}from"./filter-BxYKSczh.js";import{n as o,r as s}from"./highlight-C_SIKKRc.js";import{Ec as c,Uc as l,zc as u}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as d}from"./example-B67lLz1F.js";import{t as f}from"./-kits.collections.shared-CrMBZThW.js";var p=e(l(),1),m=u(),h=[n(`fruit`,`Fruit`,[{id:`citrus`,label:`Citrus`,children:[{id:`lemon`,label:`Lemon`},{id:`lime`,label:`Lime`},{id:`yuzu`,label:`Yuzu`,keywords:[`japan`]}]},{id:`apple`,label:`Apple`}]),n(`veg`,`Vegetables`,[{id:`leek`,label:`Leek`},{id:`jalapeno`,label:`Jalapeño`}])];function g(){let[e,t]=(0,p.useState)(``),n=(0,p.useMemo)(()=>a(h,e),[e]),c=(0,p.useMemo)(()=>r(n.nodes,{expanded:new Set(e?n.expand:[`citrus`])}),[n,e]);return(0,m.jsxs)(`div`,{className:`max-w-2xl space-y-2`,children:[(0,m.jsx)(`input`,{"aria-label":`Query`,value:e,onChange:e=>t(e.target.value),placeholder:`Try “jala”, “japan” or “li”`,className:`h-7 w-64 rounded-md border border-input bg-background px-2 text-[13px] outline-none focus:border-ring`}),(0,m.jsxs)(`table`,{className:`w-full text-[12px] tabular-nums`,children:[(0,m.jsx)(`thead`,{className:`text-left text-muted-foreground`,children:(0,m.jsxs)(`tr`,{className:`border-b border-border`,children:[(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`kind`}),(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`key`}),(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`label`}),(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`level`}),(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`pos / size`}),(0,m.jsx)(`th`,{className:`py-1 pr-2 font-medium`,children:`index`})]})}),(0,m.jsx)(`tbody`,{className:`font-mono`,children:c.map(t=>(0,m.jsxs)(`tr`,{className:`border-b border-border/60 last:border-b-0`,children:[(0,m.jsx)(`td`,{className:`py-1 pr-2 text-muted-foreground`,children:t.kind}),(0,m.jsx)(`td`,{className:`py-1 pr-2`,children:t.key}),(0,m.jsx)(`td`,{className:`py-1 pr-2 font-sans`,children:t.kind===`header`?t.section.label:s(t.item.label,o(t.item.label,e)).map((e,t)=>e.match?(0,m.jsx)(`mark`,{className:`bg-primary/20 text-foreground`,children:e.text},t):(0,m.jsx)(`span`,{children:e.text},t))}),(0,m.jsx)(`td`,{className:`py-1 pr-2`,children:t.kind===`item`?t.level:``}),(0,m.jsx)(`td`,{className:`py-1 pr-2`,children:t.kind===`item`?`${t.posinset} / ${t.setsize}`:``}),(0,m.jsx)(`td`,{className:`py-1 pr-2`,children:t.kind===`item`?t.index:``})]},t.key))})]}),(0,m.jsxs)(`p`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:[i(c).length,` item rows · `,n.matched<0?`no query`:`${n.matched} matched themselves`]})]})}var _=`import { useMemo, useState } from "react"
import { queryRanges, splitRanges } from "@kitora/ui/highlight"
import { filterNodes, flatten, itemRows, section, type CollectionNode, type Entry } from "@kitora/collections"

const NODES: readonly CollectionNode<Entry>[] = [
  section("fruit", "Fruit", [
    { id: "citrus", label: "Citrus", children: [{ id: "lemon", label: "Lemon" }, { id: "lime", label: "Lime" }, { id: "yuzu", label: "Yuzu", keywords: ["japan"] }] },
    { id: "apple", label: "Apple" },
  ]),
  section("veg", "Vegetables", [{ id: "leek", label: "Leek" }, { id: "jalapeno", label: "Jalapeño" }]),
]

/** The headless core on its own: the same rows every component draws, as plain data. No component involved. */
export function HeadlessModel() {
  const [query, setQuery] = useState("")
  const result = useMemo(() => filterNodes(NODES, query), [query])
  const rows = useMemo(() => flatten(result.nodes, { expanded: new Set(query ? result.expand : ["citrus"]) }), [result, query])
  return (
    <div className="max-w-2xl space-y-2">
      <input aria-label="Query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try “jala”, “japan” or “li”" className="h-7 w-64 rounded-md border border-input bg-background px-2 text-[13px] outline-none focus:border-ring" />
      <table className="w-full text-[12px] tabular-nums">
        <thead className="text-left text-muted-foreground">
          <tr className="border-b border-border">
            <th className="py-1 pr-2 font-medium">kind</th>
            <th className="py-1 pr-2 font-medium">key</th>
            <th className="py-1 pr-2 font-medium">label</th>
            <th className="py-1 pr-2 font-medium">level</th>
            <th className="py-1 pr-2 font-medium">pos / size</th>
            <th className="py-1 pr-2 font-medium">index</th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-border/60 last:border-b-0">
              <td className="py-1 pr-2 text-muted-foreground">{row.kind}</td>
              <td className="py-1 pr-2">{row.key}</td>
              <td className="py-1 pr-2 font-sans">
                {row.kind === "header"
                  ? row.section.label
                  : splitRanges(row.item.label, queryRanges(row.item.label, query)).map((p, i) => (p.match ? <mark key={i} className="bg-primary/20 text-foreground">{p.text}</mark> : <span key={i}>{p.text}</span>))}
              </td>
              <td className="py-1 pr-2">{row.kind === "item" ? row.level : ""}</td>
              <td className="py-1 pr-2">{row.kind === "item" ? \`\${row.posinset} / \${row.setsize}\` : ""}</td>
              <td className="py-1 pr-2">{row.kind === "item" ? row.index : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[11px] text-muted-foreground tabular-nums">
        {itemRows(rows).length} item rows · {result.matched < 0 ? "no query" : \`\${result.matched} matched themselves\`}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>c(()=>import(`./model-BIQip168.js`),[]));function v(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Headless model`,children:`The core is plain functions over plain data: build your own view on the same rows the components draw.`}),(0,m.jsx)(d,{n:1,title:`Rows, filter, highlight`,blurb:"`filterNodes` keeps ancestors of matches and says which to open; `flatten` produces the rows; `highlight` splits labels for the match.",code:_,children:(0,m.jsx)(f,{testId:`model`,children:(0,m.jsx)(g,{})})})]})}export{v as component};