import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./data-grid-sort-EPkq2g56.js";import{F as n,I as r,L as i,R as a,Y as o,Z as s}from"./data-grid-highlight-uXUikv3_.js";import{s as c}from"./kit-docs-Cf27Kpa-.js";import{Ec as l,Uc as u,zc as d}from"./index-BZuUy872.js";import{t as f}from"./badge-zOMNRv4l.js";import{t as p}from"./data-grid-infinite-anchor-Hl9xMOFU.js";import{n as m}from"./data-grid-D-d5NLPR.js";import{t as h}from"./data-grid-selection-indicator-BdogjHPK.js";import{t as g}from"./filter-bar-B3Rf92fT.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";var v=e(u(),1),y=d(),b=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],x=[`admin`,`editor`,`viewer`],S=[`active`,`invited`,`paused`],C=[`free`,`pro`,`enterprise`],w=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`];function T(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/w.length),r=n>0?`${w[t%w.length]} ${n+1}`:w[t%w.length],i=r.toLowerCase().replace(/\s+/g,`.`);return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:x[t%x.length],status:S[t%S.length],team:b[t%b.length],tasks:t*13%47+1,plan:C[t%C.length]}})}var E=T(800),D=n()([{id:`name`,header:`Name`,cell:e=>(0,y.jsx)(`span`,{className:`font-medium`,children:e.name})},{id:`email`,header:`Email`,cell:e=>(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:e.email})},{id:`team`,header:`Team`,cell:e=>e.team},{id:`role`,header:`Role`,cell:e=>(0,y.jsx)(f,{variant:e.role===`admin`?`default`:`outline`,className:`capitalize`,children:e.role})},{id:`tasks`,header:`Tasks`,cell:e=>e.tasks,meta:{align:`end`}},{id:`plan`,header:`Plan`,cell:e=>e.plan,meta:{align:`end`}}]),O=r()([{id:`name`,label:`Name`,type:`text`,toWhere:e=>({name:e.value})},{id:`role`,label:`Role`,type:`select`,options:x.map(e=>({value:e,label:e})),toWhere:e=>({role:e.value})},{id:`status`,label:`Status`,type:`select`,options:S.map(e=>({value:e,label:e})),toWhere:e=>({status:e.value})},{id:`team`,label:`Team`,type:`select`,options:b.map(e=>({value:e,label:e})),toWhere:e=>({team:e.value})}]),k=i()([{fieldId:`name`,label:`Name`},{fieldId:`tasks`,label:`Tasks`},{fieldId:`role`,label:`Role`}]);function A(){return(0,y.jsx)(s,{defaultPageSize:30,children:(0,y.jsx)(o,{adapter:(0,v.useMemo)(()=>a({initial:E,searchKeys:[`name`,`email`,`team`],search:{placeholder:`Search users…`,toWhere:e=>({_q:e})},filterFields:O,sortOptions:k,latencyMs:220}),[]),paginationMode:`infinite`,children:(0,y.jsx)(j,{})})})}function j(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,y.jsx)(g,{rightSlot:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,y.jsx)(h,{}),(0,y.jsx)(t,{options:k})]})})}),(0,y.jsxs)(`div`,{className:`mt-3`,children:[(0,y.jsx)(p,{direction:`up`}),(0,y.jsx)(m,{columns:D}),(0,y.jsx)(p,{direction:`down`})]})]})}var M=`import { useMemo } from "react"
import { DataGrid, DataGridFilterBar, DataGridInfiniteAnchor, DataGridProvider, DataGridSelectionIndicator, DataGridSort, DataGridUIProvider, createInMemoryAdapter, defineColumns, defineFilterFields, defineSortOptions, type DataGridAdapter } from "@kitora/datagrid"
import { Badge } from "@kitora/ui/badge"

/**
 * Infinite-scroll users table.
 *
 * Same \`<DataGrid>\` table renderer as a paged table; flips the provider
 * to \`paginationMode="infinite"\`. Drops \`<DataGridPagination>\` and mounts
 * a \`<DataGridInfiniteAnchor direction="down" />\` sentinel below the
 * table. Bidirectional anchors are wired — \`direction="up"\` is mounted
 * too and will fire if the adapter ever exposes a \`hasPreviousPage\`
 * (e.g. when starting from a mid-cursor deep link).
 *
 * The seed has 800 users so several cursor pages of 30 are required to
 * exhaust the list — scroll near the bottom and the next page appends.
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

const seed = makeUsers(800)

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
    id: 'name',
    label: 'Name',
    type: 'text',
    toWhere: (cond) => ({ name: cond.value }),
  },
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
  { fieldId: 'role', label: 'Role' },
])

export function InfiniteUsersGrid() {
  const adapter = useMemo<DataGridAdapter<User>>(
    () =>
      createInMemoryAdapter<User>({
        initial: seed,
        searchKeys: ['name', 'email', 'team'],
        search: { placeholder: 'Search users…', toWhere: (q) => ({ _q: q }) },
        filterFields,
        sortOptions,
        latencyMs: 220,
      }),
    [],
  )

  return (
    <DataGridUIProvider defaultPageSize={30}>
      <DataGridProvider adapter={adapter} paginationMode="infinite">
        <Body />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}

function Body() {
  return (
    <>

      <div className="mt-4 rounded-lg border border-border bg-surface-1 p-2">
        <DataGridFilterBar
          rightSlot={
            <div className="flex flex-wrap items-center gap-2">
              <DataGridSelectionIndicator />
              <DataGridSort options={sortOptions} />
            </div>
          }
        />
      </div>

      <div className="mt-3">
        <DataGridInfiniteAnchor direction="up" />
        <DataGrid<User> columns={columns} />
        <DataGridInfiniteAnchor direction="down" />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./infinite-KP-fGbL2.js`),[]));function N(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c,{title:`Infinite (auto)`,children:[`Same table renderer — provider flipped to`,` `,(0,y.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`paginationMode="infinite"`}),`. Sentinel below the table fires when scrolled into view; the next cursor page (size 30) appends to the rows array. Filter / sort changes reset to first page. 800 total rows.`]}),(0,y.jsx)(_,{n:1,title:`Scroll to load`,blurb:`A sentinel below the table appends the next cursor page (30 rows) when it scrolls into view; filter or sort changes reset to the first page.`,code:M,children:(0,y.jsx)(A,{})})]})}export{N as component};