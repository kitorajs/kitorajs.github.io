import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as a}from"./example-CZLJLtIC.js";import{a as o,c as s,i as c,n as l,o as u,t as d}from"./query-builder-C_65XMzT.js";import{t as f}from"./-kits.search.shared-BdaR6_vO.js";var p=e(n(),1),m=i(),h=[{id:`name`,label:`Name`,type:`text`},{id:`age`,label:`Age`,type:`number`},{id:`role`,label:`Role`,type:`select`,options:[{value:`admin`,label:`Admin`},{value:`member`,label:`Member`},{value:`guest`,label:`Guest`}]}],[g]=h;function _(){let[e,t]=(0,p.useState)(()=>c(g?[o(g)]:[]));return(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(d,{fields:h,value:e,onChange:t,maxDepth:1}),(0,m.jsx)(`p`,{className:`rounded-md bg-muted/50 px-2 py-1 font-mono text-[12px] text-muted-foreground`,children:u(e,h)||`(no complete conditions)`})]})}var v=`import { useState } from "react"
import { createGroup, createRule, describeQuery, QueryBuilder, type QueryField } from "@kitora/search"

const FIELDS: readonly QueryField[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "age", label: "Age", type: "number" },
  { id: "role", label: "Role", type: "select", options: [{ value: "admin", label: "Admin" }, { value: "member", label: "Member" }, { value: "guest", label: "Guest" }] },
]
const [NAME] = FIELDS

// One AND group. The operator list follows the field type; changing the field type resets operator and value.
export function BasicQueryGroup() {
  const [query, setQuery] = useState(() => createGroup(NAME ? [createRule(NAME)] : []))
  return (
    <div className="space-y-2">
      <QueryBuilder fields={FIELDS} value={query} onChange={setQuery} maxDepth={1} />
      <p className="rounded-md bg-muted/50 px-2 py-1 font-mono text-[12px] text-muted-foreground">{describeQuery(query, FIELDS) || "(no complete conditions)"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./query-group-CLQ0TE78.js`),[]));var y=[{id:`status`,label:`Status`,type:`select`,options:[{value:`open`,label:`Open`},{value:`closed`,label:`Closed`}]},{id:`points`,label:`Points`,type:`number`},{id:`due`,label:`Due`,type:`date`}],b=s({combinator:`and`,rules:[{field:`status`,operator:`in`,value:[`open`]},{combinator:`or`,rules:[{field:`points`,operator:`gte`,value:`5`},{field:`due`,operator:`before`,value:`2026-11-01`}]}]},y);function x(){let[e,t]=(0,p.useState)(()=>b.ok?b.query:null);return e?(0,m.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-[1fr_280px]`,children:[(0,m.jsx)(d,{fields:y,value:e,onChange:t}),(0,m.jsx)(l,{fields:y,value:e,onChange:t})]}):null}var S=`import { useState } from "react"
import { parseQuery, QueryBuilder, QueryJsonEditor, type QueryField, type QueryGroup } from "@kitora/search"

const FIELDS: readonly QueryField[] = [
  { id: "status", label: "Status", type: "select", options: [{ value: "open", label: "Open" }, { value: "closed", label: "Closed" }] },
  { id: "points", label: "Points", type: "number" },
  { id: "due", label: "Due", type: "date" },
]
const START = parseQuery({ combinator: "and", rules: [{ field: "status", operator: "in", value: ["open"] }, { combinator: "or", rules: [{ field: "points", operator: "gte", value: "5" }, { field: "due", operator: "before", value: "2026-11-01" }] }] }, FIELDS)

// Nested groups, and the same tree as JSON. Edit the JSON and Apply: it is validated against the fields, every error with its path.
export function BasicQueryJson() {
  const [query, setQuery] = useState<QueryGroup | null>(() => (START.ok ? START.query : null))
  if (!query) return null
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
      <QueryBuilder fields={FIELDS} value={query} onChange={setQuery} />
      <QueryJsonEditor fields={FIELDS} value={query} onChange={setQuery} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./query-json-DGCH57_u.js`),[]));function C(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: query builder`,children:"A query is plain data: a group with a combinator and children, each a rule (field · operator · value) or another group. `QueryBuilder` edits it."}),(0,m.jsx)(a,{n:1,title:`One group`,blurb:`Add conditions; the second row's AND/OR switches the group. Operators follow the field type.`,code:v,children:(0,m.jsx)(f,{testId:`basic-query-group`,children:(0,m.jsx)(_,{})})}),(0,m.jsx)(a,{n:2,title:`Nested groups and JSON`,blurb:`Groups nest; the same tree as JSON, validated against the fields when you apply it.`,code:S,children:(0,m.jsx)(f,{testId:`basic-query-json`,children:(0,m.jsx)(x,{})})})]})}export{C as component};