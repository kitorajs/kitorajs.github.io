import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{r as n,s as r,t as i}from"./field-DApIfONr.js";import{Bc as a,Cc as o,Ic as s}from"./index-q72zUtm9.js";import{t as c}from"./badge-Be8rVEaF.js";import{t as l}from"./label-DjxTNoON.js";import{t as u}from"./search-input-DMTycdh7.js";var d=e({SearchInputComposeFilteredList:()=>h}),f=t(a(),1),p=s(),m=[{title:`Getting started`,tag:`Guide`},{title:`Theming tokens`,tag:`Guide`},{title:`Button`,tag:`Component`},{title:`Data table`,tag:`Component`},{title:`Changelog`,tag:`Release`}];function h(){let e=(0,f.useId)(),[t,n]=(0,f.useState)(``),r=m.filter(e=>e.title.toLowerCase().includes(t.toLowerCase()));return(0,p.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,p.jsx)(l,{htmlFor:e,className:`sr-only`,children:`Search docs`}),(0,p.jsx)(u,{id:e,value:t,onValueChange:n,placeholder:`Search docs…`,showClear:!0}),(0,p.jsxs)(`ul`,{className:`divide-y divide-border rounded-md border border-border bg-card`,children:[r.map(e=>(0,p.jsxs)(`li`,{className:`flex items-center justify-between gap-2 px-3 py-2 text-sm`,children:[e.title,(0,p.jsx)(c,{variant:`outline`,children:e.tag})]},e.title)),r.length===0&&(0,p.jsxs)(`li`,{className:`px-3 py-2 text-sm text-muted-foreground`,children:[`No results for “`,t,`”`]})]})]})}var g=e({SearchInputEventsAndLoading:()=>v}),_=[`Getting started`,`Theming`,`Forms and fields`,`Keyboard shortcuts`,`Right-to-left`];function v(){let[e,t]=(0,f.useState)(``),[a,o]=(0,f.useState)(null),[s,c]=(0,f.useState)(!1);(0,f.useEffect)(()=>{if(a===null)return;c(!0);let e=setTimeout(()=>c(!1),800);return()=>clearTimeout(e)},[a]);let l=a?_.filter(e=>e.toLowerCase().includes(a.toLowerCase())):[];return(0,p.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,p.jsxs)(i,{children:[(0,p.jsx)(r,{children:`Search the docs`}),(0,p.jsx)(u,{value:e,onValueChange:t,onSearch:o,onClear:()=>o(null),loading:s,placeholder:`Type, then press Enter`,containerClassName:`w-full`}),(0,p.jsx)(n,{children:`Enter searches, Escape clears.`})]}),(0,p.jsx)(`p`,{"aria-live":`polite`,className:`text-xs text-muted-foreground`,children:a===null?`No search yet.`:s?`Searching for “${a}”…`:`${l.length} result${l.length===1?``:`s`} for “${a}”: ${l.join(`, `)||`none`}`})]})}var y=e({SearchInputWithKShortcutHint:()=>b});function b(){return(0,p.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,p.jsx)(u,{placeholder:`Search anything…`,shortcut:`⌘K`,containerClassName:`w-full max-w-sm`})})}var x=`import { useId, useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Label } from "@kitora/ui/label"
import { SearchInput } from "@kitora/ui/search-input"

const docs = [
  { title: "Getting started", tag: "Guide" },
  { title: "Theming tokens", tag: "Guide" },
  { title: "Button", tag: "Component" },
  { title: "Data table", tag: "Component" },
  { title: "Changelog", tag: "Release" },
]

export function SearchInputComposeFilteredList() {
  const id = useId()
  const [q, setQ] = useState("")
  const hits = docs.filter((d) => d.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor={id} className="sr-only">
        Search docs
      </Label>
      <SearchInput id={id} value={q} onValueChange={setQ} placeholder="Search docs…" showClear />
      <ul className="divide-y divide-border rounded-md border border-border bg-card">
        {hits.map((d) => (
          <li key={d.title} className="flex items-center justify-between gap-2 px-3 py-2 text-sm">
            {d.title}
            <Badge variant="outline">{d.tag}</Badge>
          </li>
        ))}
        {hits.length === 0 && <li className="px-3 py-2 text-sm text-muted-foreground">No results for “{q}”</li>}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>o(()=>import(`./compose-CjeGYJDG.js`),[]));var S=`import { useEffect, useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { SearchInput } from "@kitora/ui/search-input"

const DOCS = ["Getting started", "Theming", "Forms and fields", "Keyboard shortcuts", "Right-to-left"]

export function SearchInputEventsAndLoading() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // A fake request: Enter starts it, a timer finishes it.
  useEffect(() => {
    if (submitted === null) return
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [submitted])

  const hits = submitted ? DOCS.filter((d) => d.toLowerCase().includes(submitted.toLowerCase())) : []

  return (
    <div className="grid w-full max-w-sm gap-3">
      <Field>
        <FieldLabel>Search the docs</FieldLabel>
        <SearchInput
          value={query}
          onValueChange={setQuery}
          onSearch={setSubmitted}
          onClear={() => setSubmitted(null)}
          loading={loading}
          placeholder="Type, then press Enter"
          containerClassName="w-full"
        />
        <FieldDescription>Enter searches, Escape clears.</FieldDescription>
      </Field>
      <p aria-live="polite" className="text-xs text-muted-foreground">
        {submitted === null ? "No search yet." : loading ? \`Searching for “\${submitted}”…\` : \`\${hits.length} result\${hits.length === 1 ? "" : "s"} for “\${submitted}”: \${hits.join(", ") || "none"}\`}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>o(()=>import(`./events-and-loading-BnSUFn-p.js`),[]));var C=`import { SearchInput } from "@kitora/ui/search-input"

export function SearchInputWithKShortcutHint() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SearchInput placeholder="Search anything…" shortcut="⌘K" containerClassName="w-full max-w-sm" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>o(()=>import(`./with-k-shortcut-hint-oWgDaMMc.js`),[]));var w={"./demos/search-input/compose.tsx":d,"./demos/search-input/events-and-loading.tsx":g,"./demos/search-input/with-k-shortcut-hint.tsx":y},T={"./demos/search-input/compose.tsx":x,"./demos/search-input/events-and-loading.tsx":S,"./demos/search-input/with-k-shortcut-hint.tsx":C};export{w as modules,T as sources};