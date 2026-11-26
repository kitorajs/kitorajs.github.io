import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i,bi as a}from"./index-B9ukmIN1.js";import{t as o}from"./badge-uhFB8J9R.js";import{t as s}from"./filter-bar-IkvKBg-Y.js";var c=e({FilterBarChipsWithAddClear:()=>d}),l=t(n(),1),u=i();function d(){let[e,t]=(0,l.useState)([{id:`status`,label:`Status`,value:`open`},{id:`priority`,label:`Priority`,value:`p0,p1`}]);return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-start`,children:(0,u.jsx)(s,{filters:e,onRemove:e=>t(t=>t.filter(t=>t.id!==e)),onClear:()=>t([]),available:[{id:`assignee`,label:`Assignee`},{id:`project`,label:`Project`},{id:`tag`,label:`Tag`}],onAdd:e=>t(t=>[...t,{id:e,label:e,value:`any`}])})})}var f=e({FilterBarComposeIssueList:()=>h}),p=[{id:`status`,label:`Status`},{id:`owner`,label:`Owner`},{id:`label`,label:`Label`}],m=[{id:`1`,title:`Fix login redirect`,status:`Open`},{id:`2`,title:`Dark mode chart colours`,status:`Open`},{id:`3`,title:`Upgrade the date picker`,status:`Closed`}];function h(){let[e,t]=(0,l.useState)([{id:`status`,label:`Status`,value:`Open`}]),n=e.find(e=>e.id===`status`)?.value,r=n?m.filter(e=>e.status===n):m;return(0,u.jsxs)(`div`,{className:`w-full max-w-md space-y-3`,children:[(0,u.jsx)(s,{filters:e,available:p,onRemove:e=>t(t=>t.filter(t=>t.id!==e)),onClear:()=>t([]),onAdd:e=>t(t=>t.some(t=>t.id===e)?t:[...t,{id:e,label:p.find(t=>t.id===e)?.label??e,value:`Open`}])}),(0,u.jsx)(`ul`,{className:`divide-y divide-border rounded-md border border-border bg-card text-sm`,children:r.map(e=>(0,u.jsxs)(`li`,{className:`flex items-center justify-between gap-2 px-3 py-2`,children:[e.title,(0,u.jsx)(o,{variant:`outline`,children:e.status})]},e.id))})]})}var g=e({FilterBarEditAndKeyboard:()=>v}),_={status:[`open`,`in review`,`closed`],priority:[`p0`,`p1`,`p2`],owner:[`me`,`anyone`]};function v(){let[e,t]=(0,l.useState)([{id:`status`,label:`Status`,value:`open`},{id:`priority`,label:`Priority`,value:`p0`},{id:`owner`,label:`Owner`,value:`me`}]);return(0,u.jsxs)(`div`,{className:`w-full max-w-lg space-y-2`,children:[(0,u.jsx)(s,{filters:e,onEdit:e=>t(t=>t.map(t=>{if(t.id!==e)return t;let n=_[e]??[t.value];return{...t,value:n[(n.indexOf(t.value)+1)%n.length]??t.value}})),onRemove:e=>t(t=>t.filter(t=>t.id!==e)),onClear:()=>t([])}),(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Click a chip to change its value. Tab to a chip and press Delete or Backspace to remove it.`})]})}var y=e({FilterBarRenderChipAndLabels:()=>b});function b(){let[e,t]=(0,l.useState)([{id:`statut`,label:`Statut`,value:`ouvert`},{id:`etiquette`,label:`Étiquette`,value:`bug`}]);return(0,u.jsx)(s,{filters:e,onRemove:e=>t(t=>t.filter(t=>t.id!==e)),onClear:()=>t([]),labels:{group:`Filtres`,clearAll:`Tout effacer`,remove:e=>`Retirer le filtre ${e.label}`,count:e=>e===0?`Aucun filtre`:`${e} filtre(s) actif(s)`},renderChip:(e,{remove:t,removeLabel:n})=>(0,u.jsxs)(o,{variant:`secondary`,className:`gap-1 pe-0.5`,children:[e.label,` : `,e.value,(0,u.jsx)(`button`,{type:`button`,onClick:t,"aria-label":n,className:`grid size-4 place-items-center rounded-full hover:bg-muted`,children:(0,u.jsx)(a,{className:`size-3`})})]})})}var x=`import { useState } from "react"
import { FilterBar } from "@kitora/ui/filter-bar"

export function FilterBarChipsWithAddClear() {
  const [filters, setFilters] = useState([
    { id: "status", label: "Status", value: "open" },
    { id: "priority", label: "Priority", value: "p0,p1" },
  ])
  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <FilterBar
        filters={filters}
        onRemove={(id) => setFilters((prev) => prev.filter((f) => f.id !== id))}
        onClear={() => setFilters([])}
        available={[
          { id: "assignee", label: "Assignee" },
          { id: "project", label: "Project" },
          { id: "tag", label: "Tag" },
        ]}
        onAdd={(id) => setFilters((prev) => [...prev, { id, label: id, value: "any" }])}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./chips-with-add-clear-zNUrxh_3.js`),[]));var S=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { FilterBar } from "@kitora/ui/filter-bar"
import type { FilterChip } from "@kitora/ui/filter-bar"

const available = [
  { id: "status", label: "Status" },
  { id: "owner", label: "Owner" },
  { id: "label", label: "Label" },
]

const issues = [
  { id: "1", title: "Fix login redirect", status: "Open" },
  { id: "2", title: "Dark mode chart colours", status: "Open" },
  { id: "3", title: "Upgrade the date picker", status: "Closed" },
]

export function FilterBarComposeIssueList() {
  const [filters, setFilters] = useState<FilterChip[]>([{ id: "status", label: "Status", value: "Open" }])
  const status = filters.find((f) => f.id === "status")?.value
  const rows = status ? issues.filter((i) => i.status === status) : issues
  return (
    <div className="w-full max-w-md space-y-3">
      <FilterBar
        filters={filters}
        available={available}
        onRemove={(id) => setFilters((prev) => prev.filter((f) => f.id !== id))}
        onClear={() => setFilters([])}
        onAdd={(id) =>
          setFilters((prev) =>
            prev.some((f) => f.id === id) ? prev : [...prev, { id, label: available.find((a) => a.id === id)?.label ?? id, value: "Open" }],
          )
        }
      />
      <ul className="divide-y divide-border rounded-md border border-border bg-card text-sm">
        {rows.map((i) => (
          <li key={i.id} className="flex items-center justify-between gap-2 px-3 py-2">
            {i.title}
            <Badge variant="outline">{i.status}</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./compose-Biq8LthP2.js`),[]));var C=`import { useState } from "react"
import { FilterBar } from "@kitora/ui/filter-bar"
import type { FilterChip } from "@kitora/ui/filter-bar"

const next: Record<string, string[]> = {
  status: ["open", "in review", "closed"],
  priority: ["p0", "p1", "p2"],
  owner: ["me", "anyone"],
}

export function FilterBarEditAndKeyboard() {
  const [filters, setFilters] = useState<FilterChip[]>([
    { id: "status", label: "Status", value: "open" },
    { id: "priority", label: "Priority", value: "p0" },
    { id: "owner", label: "Owner", value: "me" },
  ])
  const edit = (id: string) =>
    setFilters((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f
        const values = next[id] ?? [f.value]
        return { ...f, value: values[(values.indexOf(f.value) + 1) % values.length] ?? f.value }
      }),
    )
  return (
    <div className="w-full max-w-lg space-y-2">
      <FilterBar filters={filters} onEdit={edit} onRemove={(id) => setFilters((prev) => prev.filter((f) => f.id !== id))} onClear={() => setFilters([])} />
      <p className="text-xs text-muted-foreground">Click a chip to change its value. Tab to a chip and press Delete or Backspace to remove it.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./edit-and-keyboard-C1Q7JRii.js`),[]));var w=`import { useState } from "react"
import { X } from "lucide-react"
import { FilterBar } from "@kitora/ui/filter-bar"
import type { FilterChip } from "@kitora/ui/filter-bar"
import { Badge } from "@kitora/ui/badge"

export function FilterBarRenderChipAndLabels() {
  const [filters, setFilters] = useState<FilterChip[]>([
    { id: "statut", label: "Statut", value: "ouvert" },
    { id: "etiquette", label: "Étiquette", value: "bug" },
  ])
  return (
    <FilterBar
      filters={filters}
      onRemove={(id) => setFilters((prev) => prev.filter((f) => f.id !== id))}
      onClear={() => setFilters([])}
      labels={{ group: "Filtres", clearAll: "Tout effacer", remove: (chip) => \`Retirer le filtre \${chip.label}\`, count: (n) => (n === 0 ? "Aucun filtre" : \`\${n} filtre(s) actif(s)\`) }}
      renderChip={(chip, { remove, removeLabel }) => (
        <Badge variant="secondary" className="gap-1 pe-0.5">
          {chip.label} : {chip.value}
          <button type="button" onClick={remove} aria-label={removeLabel} className="grid size-4 place-items-center rounded-full hover:bg-muted">
            <X className="size-3" />
          </button>
        </Badge>
      )}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./render-chip-and-labels-DIURWbKa.js`),[]));var T={"./demos/filter-bar/chips-with-add-clear.tsx":c,"./demos/filter-bar/compose.tsx":f,"./demos/filter-bar/edit-and-keyboard.tsx":g,"./demos/filter-bar/render-chip-and-labels.tsx":y},E={"./demos/filter-bar/chips-with-add-clear.tsx":x,"./demos/filter-bar/compose.tsx":S,"./demos/filter-bar/edit-and-keyboard.tsx":C,"./demos/filter-bar/render-chip-and-labels.tsx":w};export{T as modules,E as sources};