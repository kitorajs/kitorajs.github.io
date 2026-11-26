import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DegXKoDd.js";import{t as r}from"./data-grid-sort-bWcwrxO1.js";import{F as i,I as a,L as o,P as s,R as c,Y as l,Z as u}from"./data-grid-highlight-CsF6qD_A.js";import{s as d}from"./kit-docs-DpYhPoxM.js";import{Bc as f,Cc as p,Ic as m,Uo as h,hi as g}from"./index-q72zUtm9.js";import{t as _}from"./badge-Be8rVEaF.js";import{t as v}from"./data-grid-undo-redo-CraC8wO4.js";import{t as y}from"./data-grid-virtual-e6x7-L1d.js";import{n as b,t as x}from"./data-grid-density-toggle-DBCHyMUO.js";import{t as S}from"./filter-bar-BfqbkqNz.js";import{t as C}from"./data-grid-column-visibility-De1OyIIM.js";import"./kit-gallery-Atvibnty.js";import{t as w}from"./example-B8EaWveR.js";var T=e(f(),1),E=m(),D=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],O=[`admin`,`editor`,`viewer`],k=[`active`,`invited`,`paused`],A=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`];function j(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/A.length),r=n>0?`${A[t%A.length]} ${n+1}`:A[t%A.length],i=r.toLowerCase().replace(/\s+/g,`.`);return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:O[t%O.length],status:k[t%k.length],team:D[t%D.length],tasks:t*13%47+1,score:t*13%100+1}})}var M=j(5e3),N=o()([{fieldId:`name`,label:`Name`},{fieldId:`team`,label:`Team`},{fieldId:`tasks`,label:`Tasks`},{fieldId:`score`,label:`Score`}]),P=a()([{id:`role`,label:`Role`,type:`select`,group:`User`,options:[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],toWhere:e=>({role:e.value})},{id:`status`,label:`Status`,type:`multi-select`,group:`User`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`},{value:`paused`,label:`Paused`}],toWhere:e=>({status:e.value})}]),F=e=>e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2),I={active:`bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]`,invited:`bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]`,paused:`bg-muted text-muted-foreground`},L=i()([{id:`name`,header:`User`,cell:e=>(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsx)(n,{className:`size-6`,children:(0,E.jsx)(t,{className:`text-[10px]`,children:F(e.name)})}),(0,E.jsx)(`span`,{className:`truncate font-medium`,children:e.name})]}),size:220,meta:{sortFieldId:`name`,label:`User`,searchable:!0}},{id:`email`,header:`Email`,cell:e=>(0,E.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:e.email}),size:240,meta:{searchable:!0,label:`Email`}},{id:`role`,header:`Role`,cell:e=>(0,E.jsx)(_,{variant:`outline`,className:`font-mono text-[10px] uppercase`,children:e.role}),size:96,meta:{filterFieldId:`role`}},{id:`status`,header:`Status`,cell:e=>(0,E.jsxs)(`span`,{className:g(`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase`,I[e.status]),children:[(0,E.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`}),e.status]}),size:110,meta:{filterFieldId:`status`}},{id:`team`,header:`Team`,cell:e=>(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:e.team}),size:110,meta:{sortFieldId:`team`,searchable:!0,label:`Team`}},{id:`tasks`,header:`Tasks`,cell:e=>(0,E.jsx)(`span`,{className:`font-mono tabular-nums`,children:e.tasks}),size:80,meta:{sortFieldId:`tasks`,align:`end`}},{id:`score`,header:`Score`,cell:e=>(0,E.jsx)(`span`,{className:`font-mono font-medium tabular-nums`,children:e.score}),size:80,meta:{sortFieldId:`score`,align:`end`}}]);function R(){let e=h();return(0,E.jsx)(u,{defaultPageSize:1/0,children:(0,E.jsxs)(l,{adapter:(0,T.useMemo)(()=>c({initial:M,sortOptions:N,filterFields:P,search:{placeholder:`Search 5,000 users…`,toWhere:e=>({_q:e})},searchKeys:[`name`,`email`,`team`]}),[]),children:[(0,E.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,E.jsx)(S,{rightSlot:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,E.jsx)(b,{columns:L}),(0,E.jsx)(r,{options:N}),(0,E.jsx)(x,{}),(0,E.jsx)(C,{columns:L})]})})}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(y,{columns:L,height:640,rowHeight:40})}),(0,E.jsxs)(`p`,{className:`mt-4 text-center text-[11px] text-muted-foreground`,children:[M.length.toLocaleString(e),` rows · DOM holds ~30 ·`,` `,(0,E.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono`,children:`useVirtualizer`}),` `,`overscan 8`]})]})})}var z=`import { useMemo } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { cn } from "@kitora/ui/utils"
import { DataGridColumnVisibility, DataGridDensityToggle, DataGridFilterBar, DataGridProvider, DataGridSearchColumns, DataGridSort, DataGridUIProvider, DataGridVirtual, createInMemoryAdapter, defineColumns, defineFilterFields, defineSortOptions, type DataGridAdapter } from "@kitora/datagrid"

/**
 * 5,000 virtualized user rows.
 *
 *   • 5,000 rows in memory, no cursor pagination
 *   • Only the visible ~30 rows render; scroll smooth at 60fps
 *   • All other features still on: search, filter, sort, density,
 *     selection, row actions, context menu, inline edit
 *
 * Trade-off vs a paged table (cursor pagination, group-by, tree):
 *   - flat list — no group sections, no chevron-tree
 *   - fixed row height (40px) — predictable virt math
 *   - no per-list pagination chrome
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

const seedRows = makeUsers(5000)

const sortOptions = defineSortOptions()([
	{ fieldId: 'name', label: 'Name' },
	{ fieldId: 'team', label: 'Team' },
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
	{
		id: 'status',
		label: 'Status',
		type: 'multi-select',
		group: 'User',
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'invited', label: 'Invited' },
			{ value: 'paused', label: 'Paused' },
		],
		toWhere: (cond) => ({ status: cond.value }),
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
		id: 'role',
		header: 'Role',
		cell: (row) => (
			<Badge variant="outline" className="font-mono text-[10px] uppercase">
				{row.role}
			</Badge>
		),
		size: 96,
		meta: { filterFieldId: 'role' },
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
		meta: { filterFieldId: 'status' },
	},
	{
		id: 'team',
		header: 'Team',
		cell: (row) => <span className="text-muted-foreground">{row.team}</span>,
		size: 110,
		meta: { sortFieldId: 'team', searchable: true, label: 'Team' },
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

export function VirtualUsersGrid() {
	// the reader's locale (the build's until hydration, so the server HTML matches)
	const locale = useDefaultLocale()
	/* No \`pageSize\` config + no pagination component → adapter returns
	 * every row, virtualizer renders only the visible window. */
	const adapter = useMemo<DataGridAdapter<User>>(
		() =>
			createInMemoryAdapter<User>({
				initial: seedRows,
				sortOptions,
				filterFields,
				search: {
					placeholder: 'Search 5,000 users…',
					toWhere: (q) => ({ _q: q }),
				},
				searchKeys: ['name', 'email', 'team'],
			}),
		[],
	)

	return (
		<DataGridUIProvider defaultPageSize={Infinity}>
			<DataGridProvider adapter={adapter}>

				<div className="mt-4 rounded-lg border border-border bg-surface-1 p-2">
					<DataGridFilterBar
						rightSlot={
							<div className="flex flex-wrap items-center gap-1">
								<DataGridSearchColumns columns={columns} />
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
					/>
				</div>

				<p className="mt-4 text-center text-[11px] text-muted-foreground">
					{seedRows.length.toLocaleString(locale)} rows · DOM holds ~30 ·{' '}
					<code className="rounded bg-muted px-1 py-0.5 font-mono">
						useVirtualizer
					</code>{' '}
					overscan 8
				</p>
			</DataGridProvider>
		</DataGridUIProvider>
	)
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>p(()=>import(`./virtual-Be0seSQc.js`),[]));var B=[`North`,`South`,`East`,`West`],V=Array.from({length:2e3},(e,t)=>({id:String(t+1),sensor:`DEMO-${String(t+1).padStart(4,`0`)}`,site:B[t%B.length]??`North`,temp:18+t*7%90/10,humidity:30+t*13%50,note:``})),H=i()([{id:`sensor`,header:`Sensor`,size:130,cell:e=>(0,E.jsx)(`span`,{className:`font-mono text-xs`,children:e.sensor})},{id:`site`,header:`Site`,size:100,cell:e=>e.site},{id:`temp`,header:`Temp °C`,size:110,cell:e=>e.temp.toFixed(1),meta:{align:`end`,edit:{type:`number`,patch:e=>({temp:typeof e==`number`?e:0})}}},{id:`humidity`,header:`Humidity %`,size:120,cell:e=>e.humidity,meta:{align:`end`,edit:{type:`number`,min:0,max:100,patch:e=>({humidity:typeof e==`number`?e:0})}}},{id:`note`,header:`Note`,size:200,cell:e=>e.note,meta:{edit:{type:`text`,patch:e=>({note:String(e??``)})}}}]),U=s()([{id:`where`,header:`Where`,children:[`sensor`,`site`]},{id:`reading`,header:`Reading`,children:[`temp`,`humidity`]}]);function W(){return(0,E.jsx)(u,{defaultPageSize:1/0,children:(0,E.jsxs)(l,{adapter:(0,T.useMemo)(()=>c({initial:V}),[]),children:[(0,E.jsx)(`div`,{className:`mb-2 flex justify-end`,children:(0,E.jsx)(v,{})}),(0,E.jsx)(y,{columns:H,columnGroups:U,cellSelection:!0,selectable:!1,height:360,rowHeight:36})]})})}var G=`import { useMemo } from "react"
import { DataGridProvider, DataGridUIProvider, DataGridUndoRedo, DataGridVirtual, createInMemoryAdapter, defineColumnGroups, defineColumns } from "@kitora/datagrid"

interface Reading {
  id: string
  sensor: string
  site: string
  temp: number
  humidity: number
  note: string
}

const SITES = ["North", "South", "East", "West"]

/** 2,000 obviously fake sensor readings, generated once. */
const readings: Reading[] = Array.from({ length: 2000 }, (_, i) => ({
  id: String(i + 1),
  sensor: \`DEMO-\${String(i + 1).padStart(4, "0")}\`,
  site: SITES[i % SITES.length] ?? "North",
  temp: 18 + ((i * 7) % 90) / 10,
  humidity: 30 + ((i * 13) % 50),
  note: "",
}))

// Temp, humidity and note are editable: Enter or F2 on the focused cell, or paste a block over a range.
const columns = defineColumns<Reading>()([
  { id: "sensor", header: "Sensor", size: 130, cell: (r) => <span className="font-mono text-xs">{r.sensor}</span> },
  { id: "site", header: "Site", size: 100, cell: (r) => r.site },
  { id: "temp", header: "Temp °C", size: 110, cell: (r) => r.temp.toFixed(1), meta: { align: "end", edit: { type: "number", patch: (v) => ({ temp: typeof v === "number" ? v : 0 }) } } },
  { id: "humidity", header: "Humidity %", size: 120, cell: (r) => r.humidity, meta: { align: "end", edit: { type: "number", min: 0, max: 100, patch: (v) => ({ humidity: typeof v === "number" ? v : 0 }) } } },
  { id: "note", header: "Note", size: 200, cell: (r) => r.note, meta: { edit: { type: "text", patch: (v) => ({ note: String(v ?? "") }) } } },
])

const groups = defineColumnGroups<typeof columns>()([
  { id: "where", header: "Where", children: ["sensor", "site"] },
  { id: "reading", header: "Reading", children: ["temp", "humidity"] },
])

export function VirtualCellsGrid() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: readings }), [])
  return (
    <DataGridUIProvider defaultPageSize={Infinity}>
      <DataGridProvider adapter={adapter}>
        <div className="mb-2 flex justify-end">
          <DataGridUndoRedo />
        </div>
        {/* Keys, copy and paste reach rows outside the window: Mod+End jumps to the last row and scrolls it in. */}
        <DataGridVirtual<Reading> columns={columns} columnGroups={groups} cellSelection selectable={false} height={360} rowHeight={36} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>p(()=>import(`./virtual-cells-BuvkUUfh.js`),[]));function K(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(d,{title:`Virt rows`,children:[`5,000 rows in memory, only ~30 in the DOM at any time. No pagination — pure virt scroll. Search / filter / sort narrow the dataset; virt window adapts. Powered by`,` `,(0,E.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`@tanstack/react-virtual`}),`.`]}),(0,E.jsx)(w,{n:1,title:`5,000 virtualized rows`,blurb:`No pagination: the adapter returns every row and the virtualizer keeps about 30 in the DOM. Search, filter, sort, density and column visibility all stay live.`,code:z,children:(0,E.jsx)(R,{})}),(0,E.jsx)(w,{n:2,title:`Cell ranges, copy, paste and undo in a virtual list`,blurb:`cellSelection and columnGroups on DataGridVirtual: one tab stop, aria-rowindex and aria-colindex on every row and cell (only the window is in the DOM). Keys move past the window and scroll the row in; Mod+A, Mod+C and Mod+V reach every row; edits and pastes undo with Mod+Z.`,code:G,children:(0,E.jsx)(W,{})})]})}export{K as component};