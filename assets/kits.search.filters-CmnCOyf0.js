import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as o}from"./example-CZLJLtIC.js";import{c as s,n as c,o as l,r as u,s as d,t as f}from"./query-builder-C_65XMzT.js";import{t as p}from"./-kits.search.shared-BdaR6_vO.js";var m=e(n(),1),h=i();function g(e){let t=e;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}var _=g(42);function v(e){let t=e[Math.floor(_()*e.length)];if(t===void 0)throw Error(`pick from an empty list`);return t}var y=[`Ada Lovelace`,`Grace Hopper`,`Alan Turing`,`Katherine Johnson`,`Linus Torvalds`,`Margaret Hamilton`,`Dennis Ritchie`,`Barbara Liskov`,`Ken Thompson`,`Radia Perlman`,`Donald Knuth`,`Frances Allen`,`Edsger Dijkstra`,`Hedy Lamarr`,`John Carmack`,`Anita Borg`],b=[`Fix`,`Improve`,`Add`,`Investigate`,`Refactor`,`Document`],x=[`invoice PDF totals`,`search highlighting on mobile`,`CSV import date parsing`,`SSO redirect loop`,`webhook retries`,`rate limit headers`,`billing email copy`,`facet counts after filter`,`keyboard navigation in results`,`empty state for saved views`,`pagination on large accounts`,`audit log export`],S=Array.from({length:80},(e,t)=>({key:`ACME-${1200+t}`,title:`${v(b)} ${v(x)}`,status:v([`todo`,`progress`,`review`,`done`]),priority:v([`urgent`,`high`,`medium`,`low`]),points:v([1,2,3,5,8,13]),assignee:v(y.slice(0,8)),due:new Date(Date.UTC(2026,8,1)+Math.floor(_()*120)*864e5).toISOString().slice(0,10),labels:[`bug`,`frontend`,`backend`,`billing`,`a11y`].filter(()=>_()>.65),blocked:_()>.8})),C=[{id:`title`,label:`Title`,type:`text`},{id:`status`,label:`Status`,type:`select`,options:[{value:`todo`,label:`Todo`},{value:`progress`,label:`In progress`},{value:`review`,label:`In review`},{value:`done`,label:`Done`}]},{id:`priority`,label:`Priority`,type:`select`,options:[{value:`urgent`,label:`Urgent`},{value:`high`,label:`High`},{value:`medium`,label:`Medium`},{value:`low`,label:`Low`}]},{id:`points`,label:`Points`,type:`number`},{id:`assignee`,label:`Assignee`,type:`text`},{id:`due`,label:`Due date`,type:`date`},{id:`labels`,label:`Labels`,type:`select`,options:[`bug`,`frontend`,`backend`,`billing`,`a11y`].map(e=>({value:e,label:e}))},{id:`blocked`,label:`Blocked`,type:`boolean`}];function w(e,t){return Object.entries(e).find(([e])=>e===t)?.[1]}var T=[{name:`My urgent work`,json:{combinator:`and`,rules:[{field:`assignee`,operator:`contains`,value:`ada`},{field:`priority`,operator:`in`,value:[`urgent`,`high`]},{field:`status`,operator:`notIn`,value:[`done`]}]}},{name:`Big or blocked`,json:{combinator:`or`,rules:[{field:`points`,operator:`gte`,value:`8`},{field:`blocked`,operator:`isTrue`}]}},{name:`Due this autumn, not bugs`,json:{combinator:`and`,rules:[{field:`due`,operator:`between`,value:[`2026-09-01`,`2026-11-30`]},{combinator:`and`,not:!0,rules:[{field:`labels`,operator:`in`,value:[`bug`]}]}]}}],E={todo:`Todo`,progress:`In progress`,review:`In review`,done:`Done`},D={urgent:`text-red-700 dark:text-red-400`,high:`text-orange-700 dark:text-orange-400`,medium:`text-foreground`,low:`text-muted-foreground`};function O(e){let t=s(e,C);return t.ok?t.query:null}function k(){let[e,t]=(0,m.useState)(()=>O(T[0]?.json??{combinator:`and`,rules:[]})),[n,r]=(0,m.useState)(!1),i=(0,m.useMemo)(()=>e?S.filter(t=>d(e,t,C,w)):S,[e]);if(!e)return null;let o=u(e,C);return(0,h.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1 border-b px-3 py-1.5`,children:[(0,h.jsx)(`span`,{className:`mr-1 text-[12px] text-muted-foreground`,children:`Saved`}),T.map(e=>(0,h.jsx)(a,{size:`xs`,variant:`outline`,onClick:()=>{let n=O(e.json);n&&t(n)},children:e.name},e.name)),(0,h.jsx)(a,{size:`xs`,variant:`ghost`,onClick:()=>t({...e,children:[]}),children:`Clear`}),(0,h.jsxs)(a,{size:`xs`,variant:n?`soft`:`ghost`,className:`ml-auto`,"aria-pressed":n,onClick:()=>r(!n),children:[`{ }`,` JSON`]})]}),(0,h.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,h.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,h.jsx)(`div`,{className:`max-h-[45%] overflow-y-auto border-b p-3`,children:(0,h.jsx)(f,{fields:C,value:e,onChange:t})}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2 border-b bg-muted/30 px-3 py-1 text-[12px]`,children:[(0,h.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[i.length,` of `,S.length,` issues`]}),(0,h.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-mono text-muted-foreground`,title:l(e,C),children:o?l(e,C):`no active conditions`})]}),(0,h.jsxs)(`div`,{tabIndex:0,role:`region`,"aria-label":`Matching issues`,className:`min-h-0 flex-1 overflow-auto outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:[(0,h.jsxs)(`table`,{className:`w-full`,children:[(0,h.jsx)(`thead`,{className:`sticky top-0 bg-background text-left text-[11px] tracking-wide text-muted-foreground uppercase shadow-[0_1px_0_var(--border)]`,children:(0,h.jsx)(`tr`,{children:[`Key`,`Title`,`Status`,`Priority`,`Pts`,`Assignee`,`Due`,`Labels`].map(e=>(0,h.jsx)(`th`,{className:`px-2 py-1.5 font-medium whitespace-nowrap`,children:e},e))})}),(0,h.jsx)(`tbody`,{children:i.map(e=>(0,h.jsxs)(`tr`,{className:`border-t hover:bg-muted/40`,children:[(0,h.jsxs)(`td`,{className:`px-2 py-1 font-mono text-[12px] whitespace-nowrap text-muted-foreground`,children:[e.key,e.blocked?(0,h.jsx)(`span`,{className:`ml-1.5 rounded bg-destructive/10 px-1 font-sans text-[10px] font-medium text-destructive`,children:`blocked`}):null]}),(0,h.jsx)(`td`,{className:`max-w-72 truncate px-2 py-1`,children:e.title}),(0,h.jsx)(`td`,{className:`px-2 py-1 whitespace-nowrap`,children:E[e.status]??e.status}),(0,h.jsx)(`td`,{className:`px-2 py-1 capitalize ${D[e.priority]??``}`,children:e.priority}),(0,h.jsx)(`td`,{className:`px-2 py-1 text-right tabular-nums`,children:e.points}),(0,h.jsx)(`td`,{className:`px-2 py-1 whitespace-nowrap`,children:e.assignee}),(0,h.jsx)(`td`,{className:`px-2 py-1 whitespace-nowrap tabular-nums`,children:e.due}),(0,h.jsx)(`td`,{className:`px-2 py-1`,children:(0,h.jsx)(`span`,{className:`flex gap-1`,children:e.labels.map(e=>(0,h.jsx)(`span`,{className:`rounded bg-muted px-1 text-[11px]`,children:e},e))})})]},e.key))})]}),i.length===0?(0,h.jsx)(`p`,{className:`py-10 text-center text-muted-foreground`,children:`No issues match this filter.`}):null]})]}),n?(0,h.jsx)(`aside`,{className:`flex w-72 shrink-0 flex-col border-l p-2`,children:(0,h.jsx)(c,{fields:C,value:e,onChange:t,className:`flex-1`})}):null]})]})}var A=`import { useMemo, useState } from "react"
import { Button } from "@kitora/ui/button"
import { countActive, describeQuery, evaluateQuery, parseQuery, QueryBuilder, QueryJsonEditor, type QueryGroup, type QueryJson, type QueryField } from "@kitora/search"

// Demo data, generated from a seeded PRNG so every load (and the server render) is identical.
function prng(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}
const random = prng(42)
function pick<T>(list: readonly T[]): T {
  const item = list[Math.floor(random() * list.length)]
  if (item === undefined) throw new Error("pick from an empty list")
  return item
}

const PEOPLE = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Katherine Johnson", "Linus Torvalds", "Margaret Hamilton", "Dennis Ritchie", "Barbara Liskov", "Ken Thompson", "Radia Perlman", "Donald Knuth", "Frances Allen", "Edsger Dijkstra", "Hedy Lamarr", "John Carmack", "Anita Borg"]
const ISSUE_VERBS = ["Fix", "Improve", "Add", "Investigate", "Refactor", "Document"]
const ISSUE_OBJECTS = ["invoice PDF totals", "search highlighting on mobile", "CSV import date parsing", "SSO redirect loop", "webhook retries", "rate limit headers", "billing email copy", "facet counts after filter", "keyboard navigation in results", "empty state for saved views", "pagination on large accounts", "audit log export"]

interface Issue {
  readonly key: string
  readonly title: string
  readonly status: string
  readonly priority: string
  readonly points: number
  readonly assignee: string
  readonly due: string
  readonly labels: readonly string[]
  readonly blocked: boolean
}

const ISSUES: readonly Issue[] = Array.from({ length: 80 }, (_, i) => ({
  key: \`ACME-\${1200 + i}\`,
  title: \`\${pick(ISSUE_VERBS)} \${pick(ISSUE_OBJECTS)}\`,
  status: pick(["todo", "progress", "review", "done"]),
  priority: pick(["urgent", "high", "medium", "low"]),
  points: pick([1, 2, 3, 5, 8, 13]),
  assignee: pick(PEOPLE.slice(0, 8)),
  due: new Date(Date.UTC(2026, 8, 1) + Math.floor(random() * 120) * 86_400_000).toISOString().slice(0, 10),
  labels: ["bug", "frontend", "backend", "billing", "a11y"].filter(() => random() > 0.65),
  blocked: random() > 0.8,
}))

const ISSUE_FIELDS: readonly QueryField[] = [
  { id: "title", label: "Title", type: "text" },
  { id: "status", label: "Status", type: "select", options: [{ value: "todo", label: "Todo" }, { value: "progress", label: "In progress" }, { value: "review", label: "In review" }, { value: "done", label: "Done" }] },
  { id: "priority", label: "Priority", type: "select", options: [{ value: "urgent", label: "Urgent" }, { value: "high", label: "High" }, { value: "medium", label: "Medium" }, { value: "low", label: "Low" }] },
  { id: "points", label: "Points", type: "number" },
  { id: "assignee", label: "Assignee", type: "text" },
  { id: "due", label: "Due date", type: "date" },
  { id: "labels", label: "Labels", type: "select", options: ["bug", "frontend", "backend", "billing", "a11y"].map((v) => ({ value: v, label: v })) },
  { id: "blocked", label: "Blocked", type: "boolean" },
]

/** Reads an issue's raw value for a query field id. */
function readIssue(issue: Issue, fieldId: string): unknown {
  return Object.entries(issue).find(([key]) => key === fieldId)?.[1]
}

const PRESETS: readonly { readonly name: string; readonly json: QueryJson }[] = [
  { name: "My urgent work", json: { combinator: "and", rules: [{ field: "assignee", operator: "contains", value: "ada" }, { field: "priority", operator: "in", value: ["urgent", "high"] }, { field: "status", operator: "notIn", value: ["done"] }] } },
  { name: "Big or blocked", json: { combinator: "or", rules: [{ field: "points", operator: "gte", value: "8" }, { field: "blocked", operator: "isTrue" }] } },
  { name: "Due this autumn, not bugs", json: { combinator: "and", rules: [{ field: "due", operator: "between", value: ["2026-09-01", "2026-11-30"] }, { combinator: "and", not: true, rules: [{ field: "labels", operator: "in", value: ["bug"] }] }] } },
]
const STATUS_LABEL: Readonly<Record<string, string>> = { todo: "Todo", progress: "In progress", review: "In review", done: "Done" }
const PRIORITY_TONE: Readonly<Record<string, string>> = { urgent: "text-red-700 dark:text-red-400", high: "text-orange-700 dark:text-orange-400", medium: "text-foreground", low: "text-muted-foreground" }

function load(json: QueryJson): QueryGroup | null {
  const parsed = parseQuery(json, ISSUE_FIELDS)
  return parsed.ok ? parsed.query : null
}

// A filter builder over an issue list: nested AND/OR groups, NOT, typed operators per field, saved presets, the tree as
// readable text and as JSON, and the table filtering live as you edit.
export function FilterBuilder() {
  const [query, setQuery] = useState<QueryGroup | null>(() => load(PRESETS[0]?.json ?? { combinator: "and", rules: [] }))
  const [showJson, setShowJson] = useState(false)
  const rows = useMemo(() => (query ? ISSUES.filter((issue) => evaluateQuery(query, issue, ISSUE_FIELDS, readIssue)) : ISSUES), [query])
  if (!query) return null
  const active = countActive(query, ISSUE_FIELDS)
  return (
    <div className="flex h-full flex-col text-[13px]">
      <div className="flex flex-wrap items-center gap-1 border-b px-3 py-1.5">
        <span className="mr-1 text-[12px] text-muted-foreground">Saved</span>
        {PRESETS.map((preset) => (
          <Button key={preset.name} size="xs" variant="outline" onClick={() => { const next = load(preset.json); if (next) setQuery(next) }}>{preset.name}</Button>
        ))}
        <Button size="xs" variant="ghost" onClick={() => setQuery({ ...query, children: [] })}>Clear</Button>
        <Button size="xs" variant={showJson ? "soft" : "ghost"} className="ml-auto" aria-pressed={showJson} onClick={() => setShowJson(!showJson)}>{"{ }"} JSON</Button>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="max-h-[45%] overflow-y-auto border-b p-3">
            <QueryBuilder fields={ISSUE_FIELDS} value={query} onChange={setQuery} />
          </div>
          <div className="flex items-center gap-2 border-b bg-muted/30 px-3 py-1 text-[12px]">
            <span className="font-medium tabular-nums">{rows.length} of {ISSUES.length} issues</span>
            <span className="min-w-0 flex-1 truncate font-mono text-muted-foreground" title={describeQuery(query, ISSUE_FIELDS)}>{active ? describeQuery(query, ISSUE_FIELDS) : "no active conditions"}</span>
          </div>
          <div tabIndex={0} role="region" aria-label="Matching issues" className="min-h-0 flex-1 overflow-auto outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
            <table className="w-full">
              <thead className="sticky top-0 bg-background text-left text-[11px] tracking-wide text-muted-foreground uppercase shadow-[0_1px_0_var(--border)]">
                <tr>{["Key", "Title", "Status", "Priority", "Pts", "Assignee", "Due", "Labels"].map((h) => <th key={h} className="px-2 py-1.5 font-medium whitespace-nowrap">{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((issue) => (
                  <tr key={issue.key} className="border-t hover:bg-muted/40">
                    <td className="px-2 py-1 font-mono text-[12px] whitespace-nowrap text-muted-foreground">{issue.key}{issue.blocked ? <span className="ml-1.5 rounded bg-destructive/10 px-1 font-sans text-[10px] font-medium text-destructive">blocked</span> : null}</td>
                    <td className="max-w-72 truncate px-2 py-1">{issue.title}</td>
                    <td className="px-2 py-1 whitespace-nowrap">{STATUS_LABEL[issue.status] ?? issue.status}</td>
                    <td className={\`px-2 py-1 capitalize \${PRIORITY_TONE[issue.priority] ?? ""}\`}>{issue.priority}</td>
                    <td className="px-2 py-1 text-right tabular-nums">{issue.points}</td>
                    <td className="px-2 py-1 whitespace-nowrap">{issue.assignee}</td>
                    <td className="px-2 py-1 whitespace-nowrap tabular-nums">{issue.due}</td>
                    <td className="px-2 py-1"><span className="flex gap-1">{issue.labels.map((l) => <span key={l} className="rounded bg-muted px-1 text-[11px]">{l}</span>)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {rows.length === 0 ? <p className="py-10 text-center text-muted-foreground">No issues match this filter.</p> : null}
          </div>
        </div>
        {showJson ? (
          <aside className="flex w-72 shrink-0 flex-col border-l p-2">
            <QueryJsonEditor fields={ISSUE_FIELDS} value={query} onChange={setQuery} className="flex-1" />
          </aside>
        ) : null}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./filter-builder-eLQ4pfPC.js`),[]));function j(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Filter builder`,children:`Build a filter from nested AND/OR groups, negate a group, pick from typed operators (text, number, date ranges, pick lists, yes/no), load a saved preset, or edit the JSON. The issue table filters as you type.`}),(0,h.jsx)(o,{n:1,title:`Issue filters`,blurb:`Eight fields of five types, three presets, a readable summary and a JSON panel.`,code:A,children:(0,h.jsx)(p,{testId:`filter-builder`,height:680,children:(0,h.jsx)(k,{})})})]})}export{j as component};