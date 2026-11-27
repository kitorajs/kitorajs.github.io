import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-COZCc4NY.js";import{t as r}from"./data-grid-sort-EPkq2g56.js";import{F as i,I as a,L as o,R as s,Y as c,Z as l}from"./data-grid-highlight-uXUikv3_.js";import{s as u}from"./kit-docs-Cf27Kpa-.js";import{Ec as d,Go as f,Uc as p,_i as m,zc as h}from"./index-BZuUy872.js";import{t as g}from"./badge-zOMNRv4l.js";import{t as _}from"./data-grid-virtual-DeMoi-lo.js";import{n as v,t as y}from"./data-grid-density-toggle-B1wpjZHY.js";import{t as b}from"./data-grid-group-by-BMIUO39j.js";import{t as x}from"./filter-bar-B3Rf92fT.js";import{t as S}from"./data-grid-column-visibility-Bryz5j3T.js";import"./kit-gallery-BBavj2rC.js";import{t as C}from"./example-B67lLz1F.js";var w=e(p(),1),T=h(),E=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],D=[`admin`,`editor`,`viewer`],O=[`active`,`invited`,`paused`],k=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`];function A(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/k.length),r=n>0?`${k[t%k.length]} ${n+1}`:k[t%k.length],i=r.toLowerCase().replace(/\s+/g,`.`);return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:D[t%D.length],status:O[t%O.length],team:E[t%E.length],tasks:t*13%47+1,score:t*13%100+1}})}var j=A(3e3),M=o()([{fieldId:`name`,label:`Name`},{fieldId:`tasks`,label:`Tasks`},{fieldId:`score`,label:`Score`}]),N=a()([{id:`role`,label:`Role`,type:`select`,group:`User`,options:[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],toWhere:e=>({role:e.value})}]),P=e=>e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2),F={active:`bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]`,invited:`bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]`,paused:`bg-muted text-muted-foreground`},I=i()([{id:`name`,header:`User`,cell:e=>(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(n,{className:`size-6`,children:(0,T.jsx)(t,{className:`text-[10px]`,children:P(e.name)})}),(0,T.jsx)(`span`,{className:`truncate font-medium`,children:e.name})]}),size:220,meta:{sortFieldId:`name`,label:`User`,searchable:!0}},{id:`email`,header:`Email`,cell:e=>(0,T.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:e.email}),size:240,meta:{searchable:!0,label:`Email`}},{id:`team`,header:`Team`,cell:e=>(0,T.jsx)(g,{variant:`outline`,className:`font-mono text-[10px] uppercase`,children:e.team}),size:110,meta:{groupable:!0,label:`Team`,searchable:!0}},{id:`role`,header:`Role`,cell:e=>(0,T.jsx)(g,{variant:`outline`,className:`font-mono text-[10px] uppercase`,children:e.role}),size:96,meta:{filterFieldId:`role`,groupable:!0,label:`Role`}},{id:`status`,header:`Status`,cell:e=>(0,T.jsxs)(`span`,{className:m(`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase`,F[e.status]),children:[(0,T.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`}),e.status]}),size:110,meta:{groupable:!0,label:`Status`}},{id:`tasks`,header:`Tasks`,cell:e=>(0,T.jsx)(`span`,{className:`font-mono tabular-nums`,children:e.tasks}),size:80,meta:{sortFieldId:`tasks`,align:`end`}},{id:`score`,header:`Score`,cell:e=>(0,T.jsx)(`span`,{className:`font-mono font-medium tabular-nums`,children:e.score}),size:80,meta:{sortFieldId:`score`,align:`end`}}]);function L(){let e=f();return(0,T.jsx)(l,{defaultPageSize:1/0,defaultGroupByColumnId:`team`,children:(0,T.jsxs)(c,{adapter:(0,w.useMemo)(()=>s({initial:j,sortOptions:M,filterFields:N,search:{placeholder:`Search 3,000 users…`,toWhere:e=>({_q:e})},searchKeys:[`name`,`email`,`team`]}),[]),children:[(0,T.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,T.jsx)(x,{rightSlot:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,T.jsx)(v,{columns:I}),(0,T.jsx)(b,{columns:I}),(0,T.jsx)(r,{options:M}),(0,T.jsx)(y,{}),(0,T.jsx)(S,{columns:I})]})})}),(0,T.jsx)(`div`,{className:`mt-3`,children:(0,T.jsx)(_,{columns:I,height:640,rowHeight:40,groupHeaderHeight:36})}),(0,T.jsxs)(`p`,{className:`mt-4 text-center text-[11px] text-muted-foreground`,children:[j.length.toLocaleString(e),` rows · click a group header to collapse · group-by drives header insertion in the same virt list`]})]})})}var R=`import { useMemo } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { cn } from "@kitora/ui/utils"
import { DataGridColumnVisibility, DataGridDensityToggle, DataGridFilterBar, DataGridGroupBy, DataGridProvider, DataGridSearchColumns, DataGridSort, DataGridUIProvider, DataGridVirtual, createInMemoryAdapter, defineColumns, defineFilterFields, defineSortOptions, type DataGridAdapter } from "@kitora/datagrid"

/**
 * Users grid grouped by team, status or role: virtualized rows under group headers (Linear style).
 *
 *   • 3,000 rows, group-by team, status, or role
 *   • Single virt scroller renders interleaved [header, row, row, …]
 *   • Sticky group headers; click to collapse a group → rows skipped
 *   • Search / filter narrow the dataset; groups recompute live
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
  score: number
}

const TEAMS = ["Platform", "Growth", "Design", "Infra", "Data"]
const ROLES = ["admin", "editor", "viewer"] as const
const STATUSES = ["active", "invited", "paused"] as const
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
      score: ((i * 13) % 100) + 1,
    }
  })
}

const seedRows = makeUsers(3000)

const sortOptions = defineSortOptions()([
	{ fieldId: 'name', label: 'Name' },
	{ fieldId: 'tasks', label: 'Tasks' },
	{ fieldId: 'score', label: 'Score' },
])

const filterFields = defineFilterFields()([
	{
		id: 'role',
		label: 'Role',
		type: 'select',
		group: 'User',
		options: [
			{ value: 'admin', label: 'Admin' },
			{ value: 'editor', label: 'Editor' },
			{ value: 'viewer', label: 'Viewer' },
		],
		toWhere: (cond) => ({ role: cond.value }),
	},
])

const initials = (name: string) =>
	name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2)

const STATUS_COLORS: Record<User['status'], string> = {
	active: 'bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]',
	invited: 'bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]',
	paused: 'bg-muted text-muted-foreground',
}

const columns = defineColumns<User>()([
	{
		id: 'name',
		header: 'User',
		cell: (row) => (
			<div className="flex items-center gap-2">
				<Avatar className="size-6">
					<AvatarFallback className="text-[10px]">{initials(row.name)}</AvatarFallback>
				</Avatar>
				<span className="truncate font-medium">{row.name}</span>
			</div>
		),
		size: 220,
		meta: { sortFieldId: 'name', label: 'User', searchable: true },
	},
	{
		id: 'email',
		header: 'Email',
		cell: (row) => (
			<span className="font-mono text-[11px] text-muted-foreground">{row.email}</span>
		),
		size: 240,
		meta: { searchable: true, label: 'Email' },
	},
	{
		id: 'team',
		header: 'Team',
		cell: (row) => (
			<Badge variant="outline" className="font-mono text-[10px] uppercase">
				{row.team}
			</Badge>
		),
		size: 110,
		meta: { groupable: true, label: 'Team', searchable: true },
	},
	{
		id: 'role',
		header: 'Role',
		cell: (row) => (
			<Badge variant="outline" className="font-mono text-[10px] uppercase">
				{row.role}
			</Badge>
		),
		size: 96,
		meta: { filterFieldId: 'role', groupable: true, label: 'Role' },
	},
	{
		id: 'status',
		header: 'Status',
		cell: (row) => (
			<span
				className={cn(
					'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase',
					STATUS_COLORS[row.status],
				)}
			>
				<span className="size-1.5 rounded-full bg-current" />
				{row.status}
			</span>
		),
		size: 110,
		meta: { groupable: true, label: 'Status' },
	},
	{
		id: 'tasks',
		header: 'Tasks',
		cell: (row) => <span className="font-mono tabular-nums">{row.tasks}</span>,
		size: 80,
		meta: { sortFieldId: 'tasks', align: 'end' },
	},
	{
		id: 'score',
		header: 'Score',
		cell: (row) => (
			<span className="font-mono font-medium tabular-nums">{row.score}</span>
		),
		size: 80,
		meta: { sortFieldId: 'score', align: 'end' },
	},
])

export function GroupedUsersGrid() {
	// the reader's locale (the build's until hydration, so the server HTML matches)
	const locale = useDefaultLocale()
	const adapter = useMemo<DataGridAdapter<User>>(
		() =>
			createInMemoryAdapter<User>({
				initial: seedRows,
				sortOptions,
				filterFields,
				search: {
					placeholder: 'Search 3,000 users…',
					toWhere: (q) => ({ _q: q }),
				},
				searchKeys: ['name', 'email', 'team'],
			}),
		[],
	)

	return (
		<DataGridUIProvider
			defaultPageSize={Infinity}
			defaultGroupByColumnId="team"
		>
			<DataGridProvider adapter={adapter}>

				<div className="mt-4 rounded-lg border border-border bg-surface-1 p-2">
					<DataGridFilterBar
						rightSlot={
							<div className="flex flex-wrap items-center gap-1">
								<DataGridSearchColumns columns={columns} />
								<DataGridGroupBy columns={columns} />
								<DataGridSort options={sortOptions} />
								<DataGridDensityToggle />
								<DataGridColumnVisibility columns={columns} />
							</div>
						}
					/>
				</div>

				<div className="mt-3">
					<DataGridVirtual<User>
						columns={columns}
						height={640}
						rowHeight={40}
						groupHeaderHeight={36}
					/>
				</div>

				<p className="mt-4 text-center text-[11px] text-muted-foreground">
					{seedRows.length.toLocaleString(locale)} rows · click a group header to
					collapse · group-by drives header insertion in the same virt list
				</p>
			</DataGridProvider>
		</DataGridUIProvider>
	)
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>d(()=>import(`./grouped-BWae6CiC.js`),[]));function z(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{title:`Virt + grouped`,children:`3,000 rows, single virt scroller, sticky group headers (Linear "All issues" pattern). Switch the group-by column to slice the same dataset by team / role / status. Collapsed groups skip their rows entirely.`}),(0,T.jsx)(C,{n:1,title:`Sticky group headers in one virtual list`,blurb:`Group by team, role or status; headers interleave with rows in the same scroller and a click collapses a group.`,code:R,children:(0,T.jsx)(L,{})})]})}export{z as component};