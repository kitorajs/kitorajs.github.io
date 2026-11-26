import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Adapter contract`,description:`DataGridAdapter — load + mutators + subscribe. In-memory ref impl + REST/GraphQL recipes.`,order:1};function i(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Adapter contract`}),`
`,(0,n.jsxs)(r.p,{children:[`The datagrid is fully headless. It never knows your transport (REST,
GraphQL, Prisma, Supabase, whatever) — it only calls your adapter.
Implement `,(0,n.jsx)(r.code,{children:`DataGridAdapter<TRow, TWhere>`}),` to bridge it.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Shape`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridAdapter"],[11,"<"],[6,"TRow"],[11,","]," ",[6,"TWhere"]," ",[10,"="]," ",[6,"unknown"],[11,">"]," ",[11,"{"]],["  ",[1,"/** Mandatory — fetch a page given the live query. */"]],["  ",[5,"load"],[11,"("],[12,"query"],[10,":"]," ",[6,"DataGridQuery"],[11,"<"],[6,"TWhere"],[11,">)"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"DataGridResult"],[11,"<"],[6,"TRow"],[11,">>"]],[],["  ",[1,"/** Per-row mutators — each one is optional. */"]],["  ",[5,"updateRow"],[10,"?"],[11,"("],[12,"id"],[10,":"]," ",[6,"string"],[11,","]," ",[12,"patch"],[10,":"]," ",[6,"Partial"],[11,"<"],[6,"TRow"],[11,">)"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TRow"],[11,">"]],["  ",[5,"deleteRow"],[10,"?"],[11,"("],[12,"id"],[10,":"]," ",[6,"string"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"duplicateRow"],[10,"?"],[11,"("],[12,"id"],[10,":"]," ",[6,"string"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TRow"],[11,">"]],[],["  ",[1,"/** Bulk mutators. */"]],["  ",[5,"bulkUpdate"],[10,"?"],[11,"("],[12,"ids"],[10,":"]," ",[6,"string"],[11,"[],"]," ",[12,"patch"],[10,":"]," ",[6,"Partial"],[11,"<"],[6,"TRow"],[11,">)"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"bulkDelete"],[10,"?"],[11,"("],[12,"ids"],[10,":"]," ",[6,"string"],[11,"[])"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[],["  ",[1,"/** Row reorder. */"]],["  ",[5,"moveRow"],[10,"?"],[11,"("],[12,"rowId"],[10,":"]," ",[6,"string"],[11,","]," ",[12,"beforeRowId"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"bulkMoveRows"],[10,"?"],[11,"("],[12,"rowIds"],[10,":"]," ",[6,"string"],[11,"[],"]," ",[12,"beforeRowId"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[],["  ",[1,"/** Optional realtime push from your transport. */"]],["  ",[5,"subscribe"],[10,"?"],[11,"("],[12,"callbacks"],[10,":"]," ",[6,"SubscribeCallbacks"],[11,"<"],[6,"TRow"],[11,">)"],[10,":"]," ",[11,"()"]," ",[2,"=>"]," ",[6,"void"]],[],["  ",[1,"/** Optional declarative config. */"]],["  ",[12,"filterFields"],[10,"?:"]," ",[6,"FilterFieldDef"],[11,"[]"]],["  ",[12,"sortOptions"],[10,"?:"]," ",[6,"SortOption"],[11,"[]"]],["  ",[12,"search"],[10,"?:"]," ",[6,"SearchConfig"],[11,"<"],[6,"TWhere"],[11,">"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridAdapter<TRow, TWhere = unknown> {
  /** Mandatory — fetch a page given the live query. */
  load(query: DataGridQuery<TWhere>): MaybePromise<DataGridResult<TRow>>

  /** Per-row mutators — each one is optional. */
  updateRow?(id: string, patch: Partial<TRow>): MaybePromise<TRow>
  deleteRow?(id: string): MaybePromise<void>
  duplicateRow?(id: string): MaybePromise<TRow>

  /** Bulk mutators. */
  bulkUpdate?(ids: string[], patch: Partial<TRow>): MaybePromise<void>
  bulkDelete?(ids: string[]): MaybePromise<void>

  /** Row reorder. */
  moveRow?(rowId: string, beforeRowId: string | null): MaybePromise<void>
  bulkMoveRows?(rowIds: string[], beforeRowId: string | null): MaybePromise<void>

  /** Optional realtime push from your transport. */
  subscribe?(callbacks: SubscribeCallbacks<TRow>): () => void

  /** Optional declarative config. */
  filterFields?: FilterFieldDef[]
  sortOptions?: SortOption[]
  search?: SearchConfig<TWhere>
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`DataGridQuery`}),` is what the grid hands you on every load:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridQuery"],[11,"<"],[6,"TWhere"],[11,">"]," ",[11,"{"]],["  ",[12,"search"],[10,":"]," ",[6,"string"]],["  ",[12,"filters"],[10,":"]," ",[6,"FilterCondition"],[11,"[]"]],["  ",[12,"where"],[10,"?:"]," ",[6,"TWhere"],"               ",[1,"// resolved via filterFields + search.toWhere"]],["  ",[12,"sort"],[10,":"]," ",[6,"SortRule"],[11,"[]"]],["  ",[12,"first"],[10,"?:"]," ",[6,"number"],"               ",[1,"// page size"]],["  ",[12,"after"],[10,"?:"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],"        ",[1,"// cursor"]],["  ",[12,"direction"],[10,":"]," ",[3,"'forward'"]," ",[10,"|"]," ",[3,"'backward'"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridQuery<TWhere> {
  search: string
  filters: FilterCondition[]
  where?: TWhere               // resolved via filterFields + search.toWhere
  sort: SortRule[]
  first?: number               // page size
  after?: string | null        // cursor
  direction: 'forward' | 'backward'
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`And `,(0,n.jsx)(r.code,{children:`DataGridResult`}),` is what you return:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridResult"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],["  ",[12,"rows"],[10,":"]," ",[6,"TRow"],[11,"[]"]],["  ",[12,"pageInfo"],[10,":"]," ",[11,"{"]],["    ",[12,"endCursor"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"]],["    ",[12,"startCursor"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"]],["    ",[12,"hasNextPage"],[10,":"]," ",[6,"boolean"]],["    ",[12,"hasPreviousPage"],[10,":"]," ",[6,"boolean"]],["  ",[11,"}"]],["  ",[12,"totalCount"],[10,"?:"]," ",[6,"number"],"          ",[1,"// optional; drives \\"1-20 of 1,234\\""]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridResult<TRow> {
  rows: TRow[]
  pageInfo: {
    endCursor: string | null
    startCursor: string | null
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
  totalCount?: number          // optional; drives "1-20 of 1,234"
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`In-memory reference adapter`}),`
`,(0,n.jsx)(r.p,{children:`Use it for prototyping or as a pattern for your real adapter.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"createInMemoryAdapter"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createInMemoryAdapter"],[11,"<"],[6,"User"],[11,">({"]],["  ",[9,"initial"],[11,":"]," ",[12,"seedUsers"],[11,","]],["  ",[9,"searchKeys"],[11,":"]," ",[11,"["],[3,"'name'"],[11,","]," ",[3,"'email'"],[11,","]," ",[3,"'team'"],[11,"],"]],["  ",[1,"/* optional configs */"]],["  ",[12,"sortOptions"],[11,","]],["  ",[12,"filterFields"],[11,","]],["  ",[9,"search"],[11,":"]," ",[11,"{"]," ",[9,"placeholder"],[11,":"]," ",[3,"'Search users…'"],[11,","]," ",[5,"toWhere"],[11,":"]," ",[11,"("],[12,"q"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[9,"_q"],[11,":"]," ",[12,"q"]," ",[11,"})"]," ",[11,"},"]],["  ",[9,"latencyMs"],[11,":"]," ",[4,"250"],[11,","],"              ",[1,"// simulate a real network"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { createInMemoryAdapter } from '@kitora/datagrid'

const adapter = createInMemoryAdapter<User>({
  initial: seedUsers,
  searchKeys: ['name', 'email', 'team'],
  /* optional configs */
  sortOptions,
  filterFields,
  search: { placeholder: 'Search users…', toWhere: (q) => ({ _q: q }) },
  latencyMs: 250,              // simulate a real network
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Built-in support for: search-by-keys, sort, filter (via `,(0,n.jsx)(r.code,{children:`buildWhere`}),`),
cursor pagination, `,(0,n.jsx)(r.code,{children:`updateRow / deleteRow / duplicateRow / bulkUpdate / bulkDelete / moveRow / bulkMoveRows`}),`. Mutators run
locally on the in-memory array.`]}),`
`,(0,n.jsx)(r.h2,{children:`REST recipe`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"restAdapter"],[10,":"]," ",[6,"DataGridAdapter"],[11,"<"],[6,"User"],[11,">"]," ",[10,"="]," ",[11,"{"]],["  ",[5,"load"],[11,":"]," ",[2,"async"]," ",[11,"("],[12,"q"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"const"]," ",[12,"params"]," ",[10,"="]," ",[2,"new"]," ",[5,"URLSearchParams"],[11,"({"]],["      ",[9,"q"],[11,":"]," ",[12,"q"],[11,"."],[9,"search"],[11,","]],["      ",[9,"sort"],[11,":"]," ",[12,"q"],[11,"."],[9,"sort"],[11,"."],[5,"map"],[11,"(("],[12,"s"],[11,")"]," ",[2,"=>"]," ",[3,"\`"],[11,"\${"],[12,"s"],[11,"."],[9,"fieldId"],[11,"}"],[3,":"],[11,"\${"],[12,"s"],[11,"."],[9,"direction"],[11,"}"],[3,"\`"],[11,")."],[5,"join"],[11,"("],[3,"','"],[11,"),"]],["      ",[9,"first"],[11,":"]," ",[5,"String"],[11,"("],[12,"q"],[11,"."],[9,"first"]," ",[10,"??"]," ",[4,"20"],[11,"),"]],["      ",[9,"after"],[11,":"]," ",[12,"q"],[11,"."],[9,"after"]," ",[10,"??"]," ",[3,"''"],[11,","]],["    ",[11,"})"]],["    ",[2,"const"]," ",[12,"res"]," ",[10,"="]," ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"\`/api/users?"],[11,"\${"],[12,"params"],[11,"}"],[3,"\`"],[11,")"]],["    ",[2,"return"]," ",[12,"res"],[11,"."],[5,"json"],[11,"()"]," ",[2,"as"]," ",[6,"Promise"],[11,"<"],[6,"DataGridResult"],[11,"<"],[6,"User"],[11,">>"]],["  ",[11,"},"]],["  ",[5,"updateRow"],[11,":"]," ",[2,"async"]," ",[11,"("],[12,"id"],[11,","]," ",[12,"patch"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"const"]," ",[12,"res"]," ",[10,"="]," ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"\`/api/users/"],[11,"\${"],[12,"id"],[11,"}"],[3,"\`"],[11,","]," ",[11,"{"]],["      ",[9,"method"],[11,":"]," ",[3,"'PATCH'"],[11,","]],["      ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"("],[12,"patch"],[11,"),"]],["    ",[11,"})"]],["    ",[2,"return"]," ",[12,"res"],[11,"."],[5,"json"],[11,"()"]],["  ",[11,"},"]],["  ",[5,"bulkDelete"],[11,":"]," ",[2,"async"]," ",[11,"("],[12,"ids"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"'/api/users/bulk-delete'"],[11,","]," ",[11,"{"]],["      ",[9,"method"],[11,":"]," ",[3,"'POST'"],[11,","]],["      ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"({"]," ",[12,"ids"]," ",[11,"}),"]],["    ",[11,"})"]],["  ",[11,"},"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const restAdapter: DataGridAdapter<User> = {
  load: async (q) => {
    const params = new URLSearchParams({
      q: q.search,
      sort: q.sort.map((s) => \`\${s.fieldId}:\${s.direction}\`).join(','),
      first: String(q.first ?? 20),
      after: q.after ?? '',
    })
    const res = await fetch(\`/api/users?\${params}\`)
    return res.json() as Promise<DataGridResult<User>>
  },
  updateRow: async (id, patch) => {
    const res = await fetch(\`/api/users/\${id}\`, {
      method: 'PATCH',
      body: JSON.stringify(patch),
    })
    return res.json()
  },
  bulkDelete: async (ids) => {
    await fetch('/api/users/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids }),
    })
  },
}
`})}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsxs)(r.p,{children:[`Pagination is cursor-based — `,(0,n.jsx)(r.code,{children:`pageInfo.endCursor`}),` /
`,(0,n.jsx)(r.code,{children:`pageInfo.startCursor`}),` are the boundaries of the current page. Real
APIs (Linear, GitHub GraphQL) follow this shape natively.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`GraphQL recipe`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"gqlAdapter"],[10,":"]," ",[6,"DataGridAdapter"],[11,"<"],[6,"User"],[11,","]," ",[6,"UserWhere"],[11,">"]," ",[10,"="]," ",[11,"{"]],["  ",[5,"load"],[11,":"]," ",[2,"async"]," ",[11,"({"]," ",[12,"where"],[11,","]," ",[12,"sort"],[11,","]," ",[12,"first"],[11,","]," ",[12,"after"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"const"]," ",[11,"{"]," ",[12,"users"]," ",[11,"}"]," ",[10,"="]," ",[2,"await"]," ",[12,"client"],[11,"."],[5,"request"],[11,"("],[12,"USERS_QUERY"],[11,","]," ",[11,"{"]," ",[12,"where"],[11,","]," ",[12,"sort"],[11,","]," ",[12,"first"],[11,","]," ",[12,"after"]," ",[11,"})"]],["    ",[2,"return"]," ",[11,"{"]],["      ",[9,"rows"],[11,":"]," ",[12,"users"],[11,"."],[9,"edges"],[11,"."],[5,"map"],[11,"(("],[12,"e"],[11,")"]," ",[2,"=>"]," ",[12,"e"],[11,"."],[9,"node"],[11,"),"]],["      ",[9,"pageInfo"],[11,":"]," ",[12,"users"],[11,"."],[9,"pageInfo"],[11,","]],["      ",[9,"totalCount"],[11,":"]," ",[12,"users"],[11,"."],[9,"totalCount"],[11,","]],["    ",[11,"}"]],["  ",[11,"},"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const gqlAdapter: DataGridAdapter<User, UserWhere> = {
  load: async ({ where, sort, first, after }) => {
    const { users } = await client.request(USERS_QUERY, { where, sort, first, after })
    return {
      rows: users.edges.map((e) => e.node),
      pageInfo: users.pageInfo,
      totalCount: users.totalCount,
    }
  },
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Realtime`}),`
`,(0,n.jsxs)(r.p,{children:[`Implement `,(0,n.jsx)(r.code,{children:`subscribe`}),` to push updates from a WebSocket / SSE / Yjs
without re-fetching:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[["subscribe",[11,":"]," ",[11,"({"]," ",[12,"onUpsert"],[11,","]," ",[12,"onRemove"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"socket"]," ",[10,"="]," ",[5,"openWS"],[11,"("],[3,"'/users'"],[11,")"]],["  ",[12,"socket"],[11,"."],[5,"on"],[11,"("],[3,"'user.upsert'"],[11,","]," ",[12,"onUpsert"],[11,")"]],["  ",[12,"socket"],[11,"."],[5,"on"],[11,"("],[3,"'user.remove'"],[11,","]," ",[11,"("],[12,"id"],[11,")"]," ",[2,"=>"]," ",[5,"onRemove"],[11,"("],[12,"id"],[11,"))"]],["  ",[2,"return"]," ",[11,"()"]," ",[2,"=>"]," ",[12,"socket"],[11,"."],[5,"close"],[11,"()"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`subscribe: ({ onUpsert, onRemove }) => {
  const socket = openWS('/users')
  socket.on('user.upsert', onUpsert)
  socket.on('user.remove', (id) => onRemove(id))
  return () => socket.close()
}
`})}),`
`,(0,n.jsx)(r.p,{children:`Returned cleanup is called on unmount.`}),`
`,(0,n.jsx)(r.h2,{children:`Capability inspection`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`inspectCapabilities(adapter)`}),` returns a boolean map of every optional
method. The grid uses this internally to hide UI for missing mutators,
but you can read it too:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"inspectCapabilities"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"caps"]," ",[10,"="]," ",[5,"inspectCapabilities"],[11,"("],[12,"adapter"],[11,")"]],[[1,"// { updateRow: true, deleteRow: false, bulkDelete: false, … }"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`import { inspectCapabilities } from '@kitora/datagrid'

const caps = inspectCapabilities(adapter)
// { updateRow: true, deleteRow: false, bulkDelete: false, … }
`})}),`
`,(0,n.jsx)(r.p,{children:`Useful for branching your own toolbar / shortcuts.`}),`
`,(0,n.jsxs)(r.h2,{children:[`Imperative API via `,(0,n.jsx)(r.code,{children:`useDataGrid()`})]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Inside any component below `,(0,n.jsx)(r.code,{children:`<DataGridProvider>`}),`:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]," ",[12,"rows"],[11,","]," ",[12,"mutators"],[11,","]," ",[12,"capabilities"],[11,","]," ",[12,"totalCount"],[11,","]," ",[12,"refresh"],[11,","]," ",[12,"refetch"]," ",[11,"}"]," ",[10,"="]],["  ",[5,"useDataGrid"],[11,"<"],[6,"User"],[11,">()"]],[],[[12,"mutators"],[11,"."],[5,"updateRow"],[11,"?.("],[3,"'u-1'"],[11,","]," ",[11,"{"]," ",[9,"team"],[11,":"]," ",[3,"'Platform'"]," ",[11,"})"]],[[12,"mutators"],[11,"."],[5,"bulkDelete"],[11,"?.(["],[3,"'u-1'"],[11,","]," ",[3,"'u-2'"],[11,"])"]],[[5,"refresh"],[11,"()"],"                                       ",[1,"// re-run load with current query"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const { rows, mutators, capabilities, totalCount, refresh, refetch } =
  useDataGrid<User>()

mutators.updateRow?.('u-1', { team: 'Platform' })
mutators.bulkDelete?.(['u-1', 'u-2'])
refresh()                                       // re-run load with current query
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Optimistic updates: `,(0,n.jsx)(r.code,{children:`mutators.updateRow`}),` applies locally first, then
calls the adapter; rollback happens automatically on rejection.`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};