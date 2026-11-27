import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./data-grid-sort-EPkq2g56.js";import{F as n,I as r,L as i,R as a,Y as o,Z as s}from"./data-grid-highlight-uXUikv3_.js";import{s as c}from"./kit-docs-Cf27Kpa-.js";import{Ec as l,Uc as u,zc as d}from"./index-BZuUy872.js";import{t as f}from"./badge-zOMNRv4l.js";import{n as p,r as m,t as h}from"./data-grid-first-last-buttons-CWZLd6eH.js";import{n as g}from"./data-grid-D-d5NLPR.js";import{t as _}from"./filter-bar-B3Rf92fT.js";import"./kit-gallery-BBavj2rC.js";import{t as v}from"./example-B67lLz1F.js";var y=e(u(),1),b=d(),x=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],S=[`admin`,`editor`,`viewer`],C=[`active`,`invited`,`paused`],w=[`free`,`pro`,`enterprise`],T=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`];function E(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/T.length),r=n>0?`${T[t%T.length]} ${n+1}`:T[t%T.length],i=r.toLowerCase().replace(/\s+/g,`.`);return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:S[t%S.length],status:C[t%C.length],team:x[t%x.length],tasks:t*13%47+1,plan:w[t%w.length]}})}var D=E(530),O=n()([{id:`name`,header:`Name`,cell:e=>(0,b.jsx)(`span`,{className:`font-medium`,children:e.name})},{id:`email`,header:`Email`,cell:e=>(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:e.email})},{id:`team`,header:`Team`,cell:e=>e.team},{id:`role`,header:`Role`,cell:e=>(0,b.jsx)(f,{variant:e.role===`admin`?`default`:`outline`,className:`capitalize`,children:e.role})},{id:`tasks`,header:`Tasks`,cell:e=>e.tasks,meta:{align:`end`}},{id:`plan`,header:`Plan`,cell:e=>e.plan,meta:{align:`end`}}]),k=r()([{id:`role`,label:`Role`,type:`select`,options:S.map(e=>({value:e,label:e})),toWhere:e=>({role:e.value})},{id:`status`,label:`Status`,type:`select`,options:C.map(e=>({value:e,label:e})),toWhere:e=>({status:e.value})},{id:`team`,label:`Team`,type:`select`,options:x.map(e=>({value:e,label:e})),toWhere:e=>({team:e.value})}]),A=i()([{fieldId:`name`,label:`Name`},{fieldId:`tasks`,label:`Tasks`}]);function j(){return(0,b.jsx)(s,{defaultPageSize:20,children:(0,b.jsx)(o,{adapter:(0,y.useMemo)(()=>a({initial:D,searchKeys:[`name`,`email`,`team`],search:{placeholder:`Search users…`,toWhere:e=>({_q:e})},filterFields:k,sortOptions:A,latencyMs:180}),[]),paginationMode:`numbered`,children:(0,b.jsx)(M,{})})})}function M(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:`rounded-lg border border-border bg-surface-1 p-2`,children:(0,b.jsx)(_,{rightSlot:(0,b.jsx)(t,{options:A})})}),(0,b.jsx)(`div`,{className:`mt-3`,children:(0,b.jsx)(g,{columns:O})}),(0,b.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center justify-between gap-3`,children:[(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,b.jsx)(h,{show:`first`}),(0,b.jsx)(m,{}),(0,b.jsx)(h,{show:`last`})]}),(0,b.jsx)(p,{})]})]})}var N=`import { useMemo } from "react"
import { DataGrid, DataGridFilterBar, DataGridFirstLastButtons, DataGridJumpToPage, DataGridNumberedPagination, DataGridProvider, DataGridSort, DataGridUIProvider, createInMemoryAdapter, defineColumns, defineFilterFields, defineSortOptions, type DataGridAdapter } from "@kitora/datagrid"
import { Badge } from "@kitora/ui/badge"

/**
 * Users table with numbered pages (\`paginationMode="numbered"\`).
 *
 * Classic offset-based "1 2 3 … 42 [Prev] [Next]" pagination.
 * Showcases the four numbered-mode primitives:
 *   <DataGridNumberedPagination>     — ellipsis-compressed page chips
 *   <DataGridJumpToPage>             — "Go to page __" input
 *   <DataGridFirstLastButtons>       — ⏮ ⏭ jump
 *   useDataGridPagination()          — the hook every primitive reads
 *
 * Seed is 530 users so the ellipsis logic actually kicks in
 * (530 / page-size 20 = 27 pages).
 */

// Sample data: swap createInMemoryAdapter for your REST / GraphQL adapter and drop this block.
interface User {
  id: string
  name: string
  email: string
  role: (typeof ROLES)[number]
  status: (typeof STATUSES)[number]
  team: string
  tasks: number
  plan: (typeof PLANS)[number]
}

const TEAMS = ["Platform", "Growth", "Design", "Infra", "Data"]
const ROLES = ["admin", "editor", "viewer"] as const
const STATUSES = ["active", "invited", "paused"] as const
const PLANS = ["free", "pro", "enterprise"] as const
const NAMES = ["Grace Bennett", "Linus Whitfield", "Maya Chamberlain", "Nina Holloway", "Owen Carmichael", "Petra Ashford", "Quinn Faulkner", "Riley Pendleton", "Sam Thatcher", "Tara Lockwood", "Wren Caldwell", "Beck Donovan", "Drew Sterling", "Cora Maxwell", "Eli Hawthorne", "Felix Brennan", "Hazel Garrison", "Iris Whitaker", "Jude Pemberton", "Kira Stanton"]

/** Deterministic sample users: the same count always gives the same rows. */
function makeUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => {
    const round = Math.floor(i / NAMES.length)
    const name = round > 0 ? \`\${NAMES[i % NAMES.length]} \${round + 1}\` : NAMES[i % NAMES.length]
    const handle = name.toLowerCase().replace(/\\s+/g, ".")
    return {
      id: \`u-\${i + 1}\`,
      name,
      email: \`\${handle}@kitora.dev\`,
      role: ROLES[i % ROLES.length],
      status: STATUSES[i % STATUSES.length],
      team: TEAMS[i % TEAMS.length],
      tasks: ((i * 13) % 47) + 1,
      plan: PLANS[i % PLANS.length],
    }
  })
}

const seed = makeUsers(530)

const columns = defineColumns<User>()([
  { id: 'name', header: 'Name', cell: (r) => <span className="font-medium">{r.name}</span> },
  { id: 'email', header: 'Email', cell: (r) => <span className="text-muted-foreground">{r.email}</span> },
  { id: 'team', header: 'Team', cell: (r) => r.team },
  {
    id: 'role',
    header: 'Role',
    cell: (r) => (
      <Badge variant={r.role === 'admin' ? 'default' : 'outline'} className="capitalize">
        {r.role}
      </Badge>
    ),
  },
  { id: 'tasks', header: 'Tasks', cell: (r) => r.tasks, meta: { align: 'end' } },
  { id: 'plan', header: 'Plan', cell: (r) => r.plan, meta: { align: 'end' } },
])

const filterFields = defineFilterFields()([
  {
    id: 'role',
    label: 'Role',
    type: 'select',
    options: ROLES.map((r) => ({ value: r, label: r })),
    toWhere: (cond) => ({ role: cond.value }),
  },
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: STATUSES.map((s) => ({ value: s, label: s })),
    toWhere: (cond) => ({ status: cond.value }),
  },
  {
    id: 'team',
    label: 'Team',
    type: 'select',
    options: TEAMS.map((t) => ({ value: t, label: t })),
    toWhere: (cond) => ({ team: cond.value }),
  },
])

const sortOptions = defineSortOptions()([
  { fieldId: 'name', label: 'Name' },
  { fieldId: 'tasks', label: 'Tasks' },
])

export function NumberedUsersGrid() {
  const adapter = useMemo<DataGridAdapter<User>>(
    () =>
      createInMemoryAdapter<User>({
        initial: seed,
        searchKeys: ['name', 'email', 'team'],
        search: { placeholder: 'Search users…', toWhere: (q) => ({ _q: q }) },
        filterFields,
        sortOptions,
        latencyMs: 180,
      }),
    [],
  )

  return (
    <DataGridUIProvider defaultPageSize={20}>
      <DataGridProvider adapter={adapter} paginationMode="numbered">
        <Body />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}

function Body() {
  return (
    <>

      <div className="rounded-lg border border-border bg-surface-1 p-2">
        <DataGridFilterBar rightSlot={<DataGridSort options={sortOptions} />} />
      </div>

      <div className="mt-3">
        <DataGrid<User> columns={columns} />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <DataGridFirstLastButtons show="first" />
          <DataGridNumberedPagination />
          <DataGridFirstLastButtons show="last" />
        </div>
        <DataGridJumpToPage />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>l(()=>import(`./numbered-DSsK5OIS.js`),[]));function P(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(c,{title:`Numbered`,children:[`Set`,` `,(0,b.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`paginationMode="numbered"`}),` `,`and the provider switches the adapter call from cursor-based`,` `,(0,b.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`first / after`}),` `,`to offset-based`,` `,(0,b.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`offset / limit`}),`. 530 rows → 27 pages of 20. Filter / sort change resets to page 1.`]}),(0,b.jsx)(v,{n:1,title:`Numbered pages with jump-to`,blurb:`Ellipsis-compressed page chips, first / last buttons and a go-to-page input, all reading useDataGridPagination().`,code:N,children:(0,b.jsx)(j,{})})]})}export{P as component};