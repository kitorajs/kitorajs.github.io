import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./data-grid-sort-Bx_JdFDN.js";import{F as n,I as r,L as i,R as a,Y as o,Z as s}from"./data-grid-highlight-CpMXzsVp.js";import{s as c}from"./kit-docs-BUovISd0.js";import{Bc as l,Cc as u,Ic as d}from"./index-B9ukmIN1.js";import{t as f}from"./badge-uhFB8J9R.js";import{n as p,r as m,t as h}from"./data-grid-pagination-status-BevfPATg.js";import{n as g}from"./data-grid-a0FFXgkb.js";import{t as _}from"./data-grid-selection-indicator-DwQi65_p.js";import{t as v}from"./filter-bar-DmceuDdf.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";var b=e(l(),1),x=d(),S=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],C=[`admin`,`editor`,`viewer`],w=[`active`,`invited`,`paused`],T=[`free`,`pro`,`enterprise`],E=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`];function D(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/E.length),r=n>0?`${E[t%E.length]} ${n+1}`:E[t%E.length],i=r.toLowerCase().replace(/\s+/g,`.`);return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:C[t%C.length],status:w[t%w.length],team:S[t%S.length],tasks:t*13%47+1,plan:T[t%T.length]}})}var O=D(420),k=n()([{id:`name`,header:`Name`,cell:e=>(0,x.jsx)(`span`,{className:`font-medium`,children:e.name})},{id:`email`,header:`Email`,cell:e=>(0,x.jsx)(`span`,{className:`text-muted-foreground`,children:e.email})},{id:`team`,header:`Team`,cell:e=>e.team},{id:`role`,header:`Role`,cell:e=>(0,x.jsx)(f,{variant:e.role===`admin`?`default`:`outline`,className:`capitalize`,children:e.role})},{id:`tasks`,header:`Tasks`,cell:e=>e.tasks,meta:{align:`end`}},{id:`plan`,header:`Plan`,cell:e=>e.plan,meta:{align:`end`}}]),A=r()([{id:`role`,label:`Role`,type:`select`,options:C.map(e=>({value:e,label:e})),toWhere:e=>({role:e.value})},{id:`status`,label:`Status`,type:`select`,options:w.map(e=>({value:e,label:e})),toWhere:e=>({status:e.value})},{id:`team`,label:`Team`,type:`select`,options:S.map(e=>({value:e,label:e})),toWhere:e=>({team:e.value})}]),j=i()([{fieldId:`name`,label:`Name`},{fieldId:`tasks`,label:`Tasks`},{fieldId:`role`,label:`Role`}]);function M(){return(0,x.jsx)(s,{defaultPageSize:20,children:(0,x.jsx)(o,{adapter:(0,b.useMemo)(()=>a({initial:O,searchKeys:[`name`,`email`,`team`],search:{placeholder:`Search users…`,toWhere:e=>({_q:e})},filterFields:A,sortOptions:j,latencyMs:320}),[]),paginationMode:`infinite`,children:(0,x.jsx)(N,{})})})}function N(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,x.jsx)(v,{rightSlot:(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(_,{}),(0,x.jsx)(t,{options:j}),(0,x.jsx)(p,{})]})})}),(0,x.jsx)(`div`,{className:`mt-3 flex items-center justify-between gap-3 text-[11px]`,children:(0,x.jsx)(h,{})}),(0,x.jsxs)(`div`,{className:`mt-3`,children:[(0,x.jsx)(g,{columns:k}),(0,x.jsx)(m,{direction:`down`,endSlot:(0,x.jsx)(`span`,{className:`opacity-50`,children:`You've reached the end of the list`})})]})]})}var P=`import { useMemo } from "react"
import { DataGrid, DataGridFilterBar, DataGridLoadMoreButton, DataGridPageSizeSelect, DataGridPaginationStatus, DataGridProvider, DataGridSelectionIndicator, DataGridSort, DataGridUIProvider, createInMemoryAdapter, defineColumns, defineFilterFields, defineSortOptions, type DataGridAdapter } from "@kitora/datagrid"
import { Badge } from "@kitora/ui/badge"

/**
 * Users table with a manual "Load more" button.
 *
 * Same \`paginationMode="infinite"\` as an infinite-scroll table, but
 * instead of the auto-firing \`<DataGridInfiniteAnchor>\` sentinel this
 * page uses \`<DataGridLoadMoreButton>\` — the Pinterest / "Load more
 * results" pattern. User explicitly clicks the button to append the
 * next cursor page; no scroll-triggered fetches.
 *
 * Also showcases two mode-agnostic primitives that compose with any
 * pagination mode:
 *   <DataGridPageSizeSelect>     — standalone page-size dropdown
 *   <DataGridPaginationStatus>   — mode-aware readout ("Loaded N of M")
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

const seed = makeUsers(420)

const columns = defineColumns<User>()([
  {
    id: 'name',
    header: 'Name',
    cell: (r) => <span className="font-medium">{r.name}</span>,
  },
  {
    id: 'email',
    header: 'Email',
    cell: (r) => <span className="text-muted-foreground">{r.email}</span>,
  },
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
  {
    id: 'tasks',
    header: 'Tasks',
    cell: (r) => r.tasks,
    meta: { align: 'end' },
  },
  { id: 'plan', header: 'Plan', cell: (r) => r.plan, meta: { align: 'end' } },
])

const filterFields = defineFilterFields()([
  {
    id: 'role',
    label: 'Role',
    type: 'select',
    options: ROLES.map((r) => ({ value: r, label: r })),
    toWhere: (c) => ({ role: c.value }),
  },
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: STATUSES.map((s) => ({ value: s, label: s })),
    toWhere: (c) => ({ status: c.value }),
  },
  {
    id: 'team',
    label: 'Team',
    type: 'select',
    options: TEAMS.map((t) => ({ value: t, label: t })),
    toWhere: (c) => ({ team: c.value }),
  },
])

const sortOptions = defineSortOptions()([
  { fieldId: 'name', label: 'Name' },
  { fieldId: 'tasks', label: 'Tasks' },
  { fieldId: 'role', label: 'Role' },
])

export function LoadMoreUsersGrid() {
  const adapter = useMemo<DataGridAdapter<User>>(
    () =>
      createInMemoryAdapter<User>({
        initial: seed,
        searchKeys: ['name', 'email', 'team'],
        search: { placeholder: 'Search users…', toWhere: (q) => ({ _q: q }) },
        filterFields,
        sortOptions,
        latencyMs: 320,
      }),
    [],
  )

  return (
    <DataGridUIProvider defaultPageSize={20}>
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
              <DataGridPageSizeSelect />
            </div>
          }
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-[11px]">
        <DataGridPaginationStatus />
      </div>

      <div className="mt-3">
        <DataGrid<User> columns={columns} />
        <DataGridLoadMoreButton
          direction="down"
          endSlot={<span className="opacity-50">You&apos;ve reached the end of the list</span>}
        />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>u(()=>import(`./load-more-CmfIopmj.js`),[]));function F(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(c,{title:`Infinite (manual)`,children:[`Manual variant of infinite scroll — flip the provider to`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`paginationMode="infinite"`}),` `,`and mount`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`<DataGridLoadMoreButton>`}),` `,`instead of the auto-firing`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`<DataGridInfiniteAnchor>`}),`. Same underlying state, same`,` `,(0,x.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`infinite.loadMore()`}),` `,`plumbing — the button just waits for an explicit click. 420 total users; 320ms simulated latency so the loading state is visible.`]}),(0,x.jsx)(y,{n:1,title:`Load-more button`,blurb:`The same infinite state as the auto variant; the next page waits for an explicit click. Page-size select and a mode-aware status readout compose with any pagination mode.`,code:P,children:(0,x.jsx)(M,{})})]})}export{F as component};