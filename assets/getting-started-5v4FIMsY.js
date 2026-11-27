import{zc as e}from"./index-BZuUy872.js";import{n as t}from"./lib-C0E9zsFn.js";var n=e(),r={title:`Getting started`,description:`Headless datagrid in 30 seconds — adapter + provider + plug-in features.`,order:0};function i(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Datagrid — getting started`}),`
`,(0,n.jsx)(r.p,{children:`A power-user datagrid built on the same adapter pattern as the task
list and Tabster. The grid never owns data — it asks an adapter for a
page of rows, given the current search / filters / sort / pagination
state. Swap the adapter, plug it into any backend.`}),`
`,(0,n.jsx)(r.h2,{children:`Mental model`}),`
`,(0,n.jsx)(r.p,{children:`Three layers:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Adapter`}),` — implements `,(0,n.jsx)(r.code,{children:`DataGridAdapter<TRow>`}),`. Mandatory:
`,(0,n.jsx)(r.code,{children:`load(query)`}),`. Optional: `,(0,n.jsx)(r.code,{children:`updateRow`}),`, `,(0,n.jsx)(r.code,{children:`deleteRow`}),`, `,(0,n.jsx)(r.code,{children:`bulkDelete`}),`,
`,(0,n.jsx)(r.code,{children:`bulkUpdate`}),`, `,(0,n.jsx)(r.code,{children:`moveRow`}),`, `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),`, `,(0,n.jsx)(r.code,{children:`subscribe`}),`. The grid
hides affordances for any mutator you don't supply.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Providers`}),` — `,(0,n.jsx)(r.code,{children:`<DataGridUIProvider>`}),` holds UI state (search,
filters, sort, pagination, selection, columns, density, layout);
`,(0,n.jsx)(r.code,{children:`<DataGridProvider>`}),` runs the adapter and exposes rows +
capabilities. Both required; clean separation of data vs UI.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Plug-in feature components`}),` — `,(0,n.jsx)(r.code,{children:`<DataGridSearch>`}),`,
`,(0,n.jsx)(r.code,{children:`<DataGridSort>`}),`, `,(0,n.jsx)(r.code,{children:`<DataGridFilterBar>`}),`, `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),`,
`,(0,n.jsx)(r.code,{children:`<DataGridColumnVisibility>`}),`, `,(0,n.jsx)(r.code,{children:`<DataGridDensityToggle>`}),`,
`,(0,n.jsx)(r.code,{children:`<DataGridBulkActions>`}),`, `,(0,n.jsx)(r.code,{children:`<DataGridSelectionIndicator>`}),`, plus the
core `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` (or `,(0,n.jsx)(r.code,{children:`<DataGridView>`}),` for multi-layout).`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.h2,{children:`30-second example`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useMemo"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'react'"]],[[2,"import"]," ",[11,"{"]],["  ",[12,"DataGrid"],[11,","]],["  ",[12,"DataGridProvider"],[11,","]],["  ",[12,"DataGridUIProvider"],[11,","]],["  ",[12,"DataGridFilterBar"],[11,","]],["  ",[12,"DataGridPagination"],[11,","]],["  ",[12,"DataGridBulkActions"],[11,","]],["  ",[12,"createInMemoryAdapter"],[11,","]],["  ",[12,"defineColumns"],[11,","]],["  ",[12,"defineSortOptions"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"interface"]," ",[6,"User"]," ",[11,"{"]," ",[12,"id"],[10,":"]," ",[6,"string"],[11,";"]," ",[12,"name"],[10,":"]," ",[6,"string"],[11,";"]," ",[12,"email"],[10,":"]," ",[6,"string"],[11,";"]," ",[12,"team"],[10,":"]," ",[6,"string"]," ",[11,"}"]],[],[[2,"const"]," ",[12,"sortOptions"]," ",[10,"="]," ",[5,"defineSortOptions"],[11,"()(["]],["  ",[11,"{"]," ",[9,"fieldId"],[11,":"]," ",[3,"'name'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Name'"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"fieldId"],[11,":"]," ",[3,"'team'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Team'"]," ",[11,"},"]],[[11,"])"]],[],[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"User"],[11,">()(["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'name'"],[11,","],"  ",[9,"header"],[11,":"]," ",[3,"'Name'"],[11,","],"  ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"],[11,","],"  ",[9,"meta"],[11,":"]," ",[11,"{"]," ",[9,"sortFieldId"],[11,":"]," ",[3,"'name'"]," ",[11,"}"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'email'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Email'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"email"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'team'"],[11,","],"  ",[9,"header"],[11,":"]," ",[3,"'Team'"],[11,","],"  ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"team"],[11,","],"  ",[9,"meta"],[11,":"]," ",[11,"{"]," ",[9,"sortFieldId"],[11,":"]," ",[3,"'team'"]," ",[11,"}"]," ",[11,"},"]],[[11,"])"]],[],[[2,"export"]," ",[2,"function"]," ",[5,"UsersPage"],[11,"({"]," ",[12,"initial"]," ",[11,"}"],[10,":"]," ",[11,"{"]," ",[12,"initial"],[10,":"]," ",[6,"User"],[11,"[]"]," ",[11,"})"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"useMemo"],[11,"("]],["    ",[11,"()"]," ",[2,"=>"]," ",[5,"createInMemoryAdapter"],[11,"({"]," ",[12,"initial"],[11,","]," ",[12,"sortOptions"],[11,","]," ",[9,"searchKeys"],[11,":"]," ",[11,"["],[3,"'name'"],[11,","]," ",[3,"'email'"],[11,","]," ",[3,"'team'"],[11,"]"]," ",[11,"}),"]],["    ",[11,"["],[12,"initial"],[11,"],"]],["  ",[11,")"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"DataGridUIProvider"]," ",[8,"defaultPageSize"],[10,"="],[11,"{"],[4,"20"],[11,"}>"]],["      ",[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}>"]],["        ",[11,"<"],[7,"DataGridFilterBar"]," ",[11,"/>"]],["        ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[11,"/>"]],["        ",[11,"<"],[7,"DataGridPagination"]," ",[11,"/>"]],["        ",[11,"<"],[7,"DataGridBulkActions"]," ",[11,"/>"]],["      ",[11,"</"],[7,"DataGridProvider"],[11,">"]],["    ",[11,"</"],[7,"DataGridUIProvider"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useMemo } from 'react'
import {
  DataGrid,
  DataGridProvider,
  DataGridUIProvider,
  DataGridFilterBar,
  DataGridPagination,
  DataGridBulkActions,
  createInMemoryAdapter,
  defineColumns,
  defineSortOptions,
} from '@kitora/datagrid'

interface User { id: string; name: string; email: string; team: string }

const sortOptions = defineSortOptions()([
  { fieldId: 'name', label: 'Name' },
  { fieldId: 'team', label: 'Team' },
])

const columns = defineColumns<User>()([
  { id: 'name',  header: 'Name',  cell: (r) => r.name,  meta: { sortFieldId: 'name' } },
  { id: 'email', header: 'Email', cell: (r) => r.email },
  { id: 'team',  header: 'Team',  cell: (r) => r.team,  meta: { sortFieldId: 'team' } },
])

export function UsersPage({ initial }: { initial: User[] }) {
  const adapter = useMemo(
    () => createInMemoryAdapter({ initial, sortOptions, searchKeys: ['name', 'email', 'team'] }),
    [initial],
  )
  return (
    <DataGridUIProvider defaultPageSize={20}>
      <DataGridProvider adapter={adapter}>
        <DataGridFilterBar />
        <DataGrid columns={columns} />
        <DataGridPagination />
        <DataGridBulkActions />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Why this kit — swap any layer, the rest still works`}),`
`,(0,n.jsxs)(r.p,{children:[`The whole point of the architecture is that `,(0,n.jsx)(r.strong,{children:`every layer is replaceable in isolation`}),`. Use the defaults to ship in a day; swap any piece when your needs grow. The data layer, the pagination strategy, the renderer, and every individual UI primitive are independently pluggable.`]}),`
`,(0,n.jsx)(r.h3,{children:`1. Data — any backend`}),`
`,(0,n.jsx)(r.p,{children:`Adapter is one interface. Same UI, completely different data sources:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[5,"createInMemoryAdapter"],[11,"({"]," ",[12,"initial"]," ",[11,"})}"]," ",[11,"/>"],"  ",[11,"{"],[1,"/* prototype */"],[11,"}"]],[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"myRestAdapter"],[11,"}"]," ",[11,"/>"],"                       ",[11,"{"],[1,"/* prod REST */"],[11,"}"]],[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"myGraphQLAdapter"],[11,"}"]," ",[11,"/>"],"                    ",[11,"{"],[1,"/* prod GraphQL */"],[11,"}"]],[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"myPrismaAdapter"],[11,"}"]," ",[11,"/>"],"                     ",[11,"{"],[1,"/* SSR direct */"],[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={createInMemoryAdapter({ initial })} />  {/* prototype */}
<DataGridProvider adapter={myRestAdapter} />                       {/* prod REST */}
<DataGridProvider adapter={myGraphQLAdapter} />                    {/* prod GraphQL */}
<DataGridProvider adapter={myPrismaAdapter} />                     {/* SSR direct */}
`})}),`
`,(0,n.jsx)(r.p,{children:`Nothing else in the tree changes. Selection, filters, sort, search, shortcuts — all keep working.`}),`
`,(0,n.jsx)(r.h3,{children:`2. Pagination strategy — one prop`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"a"],[11,"}"]," ",[11,"/>"],"                            ",[11,"{"],[1,"/* paged (default) */"],[11,"}"]],[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"a"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""]," ",[11,"/>"],"  ",[11,"{"],[1,"/* infinite scroll */"],[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={a} />                            {/* paged (default) */}
<DataGridProvider adapter={a} paginationMode="infinite" />  {/* infinite scroll */}
`})}),`
`,(0,n.jsx)(r.p,{children:`Want to A/B paged vs infinite? Flip the prop. The features layer doesn't know which mode you picked.`}),`
`,(0,n.jsx)(r.h3,{children:`3. Renderer — same data, different shape`}),`
`,(0,n.jsx)(r.p,{children:`The same provider drives every renderer. Pick what suits the data:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"],"                              ",[11,"{"],[1,"/* classic table */"],[11,"}"]],[[11,"<"],[7,"DataGridVirtual"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"],"                       ",[11,"{"],[1,"/* windowed table */"],[11,"}"]],[[11,"<"],[7,"DataGridView"]," ",[8,"layouts"],[10,"="],[11,"{["],[5,"cardsLayout"],[11,"()]}"]," ",[11,"/>"],"               ",[11,"{"],[1,"/* card grid */"],[11,"}"]],[[11,"<"],[7,"DataGridView"]," ",[8,"layouts"],[10,"="],[11,"{["],[5,"kanbanLayout"],[11,"()]}"]," ",[11,"/>"],"              ",[11,"{"],[1,"/* kanban board */"],[11,"}"]],[[11,"<"],[7,"DataGridView"]," ",[8,"layouts"],[10,"="],[11,"{["],[5,"mediaGridLayout"],[11,"()]}"]," ",[11,"/>"],"           ",[11,"{"],[1,"/* gallery */"],[11,"}"]],[[11,"<"],[7,"DataGridView"]," ",[8,"layouts"],[10,"="],[11,"{["],[5,"mediaGridLayout"],[11,"(),"]," ",[5,"cardsLayout"],[11,"(),"]," ",[5,"kanbanLayout"],[11,"()]}"]," ",[11,"/>"]," ",[11,"{"],[1,"/* user-picked */"],[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGrid columns={cols} />                              {/* classic table */}
<DataGridVirtual columns={cols} />                       {/* windowed table */}
<DataGridView layouts={[cardsLayout()]} />               {/* card grid */}
<DataGridView layouts={[kanbanLayout()]} />              {/* kanban board */}
<DataGridView layouts={[mediaGridLayout()]} />           {/* gallery */}
<DataGridView layouts={[mediaGridLayout(), cardsLayout(), kanbanLayout()]} /> {/* user-picked */}
`})}),`
`,(0,n.jsx)(r.p,{children:`Selection, filters, sort, infinite scroll all carry across — switch renderers without losing state.`}),`
`,(0,n.jsx)(r.h3,{children:`4. Slot overrides — every primitive is replaceable`}),`
`,(0,n.jsx)(r.p,{children:`Each layout takes custom React components for every visual piece:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"mediaGridLayout"],[11,"({"]],["  ",[9,"Card"],[11,":"]," ",[12,"MyCustomCard"],[11,","],"         ",[11,"{"],[1,"/* reskin the whole card */"],[11,"}"]],["  ",[9,"Thumb"],[11,":"]," ",[12,"MyCustomThumb"],[11,","],"        ",[11,"{"],[1,"/* swap the thumbnail */"],[11,"}"]],["  ",[9,"Checkbox"],[11,":"]," ",[12,"MyCustomCheckbox"],[11,","],"  ",[11,"{"],[1,"/* swap the select chip */"],[11,"}"]],["  ",[9,"ActionOverlay"],[11,":"]," ",[12,"MyOverlay"],[11,","],"    ",[11,"{"],[1,"/* swap the hover actions */"],[11,"}"]],["  ",[9,"Meta"],[11,":"]," ",[12,"MyMeta"],[11,","],"                ",[11,"{"],[1,"/* swap the title / subtitle row */"],[11,"}"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`mediaGridLayout({
  Card: MyCustomCard,         {/* reskin the whole card */}
  Thumb: MyCustomThumb,        {/* swap the thumbnail */}
  Checkbox: MyCustomCheckbox,  {/* swap the select chip */}
  ActionOverlay: MyOverlay,    {/* swap the hover actions */}
  Meta: MyMeta,                {/* swap the title / subtitle row */}
})
`})}),`
`,(0,n.jsx)(r.p,{children:`The interaction layer (hover, multi-select, rubber-band, drag-reorder, keyboard nav) stays intact while you reshape the look completely.`}),`
`,(0,n.jsxs)(r.p,{children:[`Drag handles are pluggable the same way — pick `,(0,n.jsx)(r.code,{children:`dragHandle: 'whole-card' | 'icon' | 'none'`}),` on the layout, OR place `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle rowId>`}),` (with optional `,(0,n.jsx)(r.code,{children:`asChild`}),`) anywhere inside a cell renderer to turn any element into a drag handle. Multiple handles per row, custom buttons as handles — see the `,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/row-reorder`,children:`Row reorder doc`}),`.`]}),`
`,`
`,(0,n.jsx)(r.h3,{children:`5. Headless hooks — skip the components entirely`}),`
`,(0,n.jsx)(r.p,{children:`For fully bespoke UI, read state directly and render whatever you want:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]," ",[12,"rows"],[11,","]," ",[12,"infinite"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGrid"],[11,"()"],"              ",[1,"// raw row data + load-more"]],[[2,"const"]," ",[11,"{"]," ",[12,"selectedIds"],[11,","]," ",[12,"toggle"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridUI"],[11,"()"],"        ",[1,"// selection + UI state"]],[[5,"useDataGridInfiniteScrollSentinel"],[11,"({"]," ",[10,"..."]," ",[11,"})"],"             ",[1,"// your own load-more UI"]],[[5,"useDataGridSelectMode"],[11,"("],[12,"count"],[11,")"],"                            ",[1,"// your own select chrome"]],[[5,"useDataGridRubberBand"],[11,"({"]," ",[10,"..."]," ",[11,"})"],"                          ",[1,"// your own marquee"]],[[5,"useDataGridLongPress"],[11,"({"]," ",[10,"..."]," ",[11,"})"],"                           ",[1,"// your own touch handler"]],[[5,"useDataGridSelectionShortcuts"],[11,"({"]," ",[10,"..."]," ",[11,"})"],"                  ",[1,"// your own ⌘A / Esc"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const { rows, infinite } = useDataGrid()              // raw row data + load-more
const { selectedIds, toggle } = useDataGridUI()        // selection + UI state
useDataGridInfiniteScrollSentinel({ ... })             // your own load-more UI
useDataGridSelectMode(count)                            // your own select chrome
useDataGridRubberBand({ ... })                          // your own marquee
useDataGridLongPress({ ... })                           // your own touch handler
useDataGridSelectionShortcuts({ ... })                  // your own ⌘A / Esc
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Build a gallery from scratch in 50 lines — `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`}),` still fires, `,(0,n.jsx)(r.code,{children:`<DataGridBulkActions>`}),` still works, `,(0,n.jsx)(r.code,{children:`<DataGridFilterBar>`}),` still applies. The kit doesn't lock you into its components.`]}),`
`,`
`,(0,n.jsx)(r.h3,{children:`Why this works`}),`
`,(0,n.jsxs)(r.p,{children:[`The data layer (`,(0,n.jsx)(r.code,{children:`<DataGridProvider>`}),`) and UI-state layer (`,(0,n.jsx)(r.code,{children:`<DataGridUIProvider>`}),`) sit `,(0,n.jsx)(r.em,{children:`above`}),` every renderer. The renderer reads from both; the primitives read from both; your custom code reads from both. Nothing renderer-specific leaks upward, so:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Same selection model across table → cards → media-grid`}),`
`,(0,n.jsx)(r.li,{children:`Same filters / sort / search across every layout`}),`
`,(0,n.jsx)(r.li,{children:`Same infinite scroll across every layout`}),`
`,(0,n.jsx)(r.li,{children:`Same shortcuts (⌘A, Esc, ⌘-click, shift-range) across every layout`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`You can mix kit primitives with hand-rolled UI freely — the contract is the providers, not the components.`}),`
`,(0,n.jsx)(r.h2,{children:`Adapter capabilities`}),`
`,(0,n.jsxs)(r.p,{children:[`Implement only what you need. The grid inspects the adapter via
`,(0,n.jsx)(r.code,{children:`inspectCapabilities(adapter)`}),` and conditionally renders:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Adapter method`}),(0,n.jsx)(r.th,{children:`What appears`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`load`})}),(0,n.jsx)(r.td,{children:`(required) — rows, pagination, search-as-where, filter pills`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`updateRow`})}),(0,n.jsxs)(r.td,{children:[`Inline edit on cells with `,(0,n.jsx)(r.code,{children:`meta.edit`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`deleteRow`})}),(0,n.jsx)(r.td,{children:`Row context-menu "Delete" item`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`bulkDelete`})}),(0,n.jsxs)(r.td,{children:[`Bulk Delete button in `,(0,n.jsx)(r.code,{children:`<DataGridBulkActions>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`bulkUpdate`})}),(0,n.jsx)(r.td,{children:`"Edit selected (N)" in column-header menu`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`moveRow`})}),(0,n.jsx)(r.td,{children:`Single-row drag-reorder`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`bulkMoveRows`})}),(0,n.jsx)(r.td,{children:`Multi-row drag-reorder (drag your whole selection)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`duplicateRow`})}),(0,n.jsx)(r.td,{children:`Row context-menu "Duplicate" item`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`subscribe`})}),(0,n.jsxs)(r.td,{children:[`Realtime updates pushed via `,(0,n.jsx)(r.code,{children:`onUpsert`}),` / `,(0,n.jsx)(r.code,{children:`onRemove`})]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`You ship a baseline `,(0,n.jsx)(r.code,{children:`load`}),`-only adapter, then add mutators as your
backend grows. Each new method lights up its UI; nothing else changes.`]}),`
`,(0,n.jsx)(r.h2,{children:`Where to go from here`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/adapter`,children:`Adapter contract`})}),` — full surface +
REST/GraphQL recipe + in-memory reference impl.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/columns`,children:`Columns`})}),` — cell renderers, pinning,
inline-edit, drag-resize, aggregations, group-by.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/filters`,children:`Filters`})}),` — filter fields, the
filter picker, operators, `,(0,n.jsx)(r.code,{children:`buildWhere`}),` engine.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/selection`,children:`Selection`})}),` — checkboxes, shift-click
range, ⌘-click, rubber-band, long-press, ⌘A / Esc, indicator chip.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/row-reorder`,children:`Row reorder`})}),` — whole-row vs handle
modes, `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle>`}),`, place handles anywhere, two hook flavors.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/layouts`,children:`Layouts`})}),` — table / cards / kanban /
media-grid + custom layouts via `,(0,n.jsx)(r.code,{children:`DataGridLayout`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/media-grid`,children:`MediaGrid`})}),` — gallery view for
asset libraries.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/features`,children:`Features`})}),` — live matrix of every
feature, status, and shortcut.`]}),`
`]}),`
`]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};