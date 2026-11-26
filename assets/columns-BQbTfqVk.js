import{Ic as e}from"./index-B9ukmIN1.js";import{n as t}from"./lib-CKWRlO6G.js";var n=e(),r={title:`Columns`,description:`DataGridColumn shape — cell renderers, pinning, drag-resize, inline edit, aggregations, group-by, tree expansion.`,order:2};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Columns`}),`
`,(0,n.jsxs)(r.p,{children:[`Columns are defined once via `,(0,n.jsx)(r.code,{children:`defineColumns<TRow>()()`}),` (an identity
helper that preserves literal `,(0,n.jsx)(r.code,{children:`id`}),` types) and consumed by every
layer — the grid itself, the column-visibility menu, sort, group-by,
export, layouts.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Shape`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridColumn"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],["  ",[12,"id"],[10,":"]," ",[6,"string"]],["  ",[12,"header"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[11,"(("],[12,"ctx"],[10,":"]," ",[6,"ColumnHeader"],[11,"<"],[6,"TRow"],[11,">)"]," ",[2,"=>"]," ",[6,"ReactNode"],[11,")"]],["  ",[5,"cell"],[10,":"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,","]," ",[12,"rowIndex"],[10,":"]," ",[6,"number"],[11,")"]," ",[2,"=>"]," ",[6,"ReactNode"]],["  ",[12,"size"],[10,"?:"]," ",[6,"number"],"       ",[1,"// default width (px); default 160"]],["  ",[12,"minSize"],[10,"?:"]," ",[6,"number"]],["  ",[12,"maxSize"],[10,"?:"]," ",[6,"number"]],["  ",[12,"meta"],[10,"?:"]," ",[6,"ColumnMeta"],[11,"<"],[6,"TRow"],[11,">"]],[[11,"}"]],[],[[2,"interface"]," ",[6,"ColumnMeta"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],["  ",[12,"align"],[10,"?:"]," ",[3,"'start'"]," ",[10,"|"]," ",[3,"'center'"]," ",[10,"|"]," ",[3,"'end'"]," ",[10,"|"]," ",[3,"'left'"]," ",[10,"|"]," ",[3,"'right'"]," ",[1,"// start / end follow the reading direction"]],["  ",[12,"className"],[10,"?:"]," ",[6,"string"]],["  ",[12,"label"],[10,"?:"]," ",[6,"string"],"                    ",[1,"// visibility-menu label; falls back to id"]],["  ",[12,"sortFieldId"],[10,"?:"]," ",[6,"string"],"              ",[1,"// header gets a sort affordance"]],["  ",[12,"filterFieldId"],[10,"?:"]," ",[6,"string"],"            ",[1,"// header menu → opens filter picker for this field"]],["  ",[12,"hideable"],[10,"?:"]," ",[6,"boolean"],"                ",[1,"// default true"]],["  ",[12,"resizable"],[10,"?:"]," ",[6,"boolean"],"               ",[1,"// default true"]],["  ",[12,"draggable"],[10,"?:"]," ",[6,"boolean"],"               ",[1,"// header drag-reorder, default true"]],["  ",[12,"pin"],[10,"?:"]," ",[3,"'start'"]," ",[10,"|"]," ",[3,"'end'"]," ",[10,"|"]," ",[3,"'left'"]," ",[10,"|"]," ",[3,"'right'"]," ",[1,"// sticky pinned column"]],["  ",[12,"edit"],[10,"?:"]," ",[6,"ColumnEditConfig"],[11,"<"],[6,"TRow"],[11,">"],"     ",[1,"// click-to-edit cell (see below)"]],["  ",[12,"aggregate"],[10,"?:"]," ",[6,"AggregateConfig"],[11,"<"],[6,"TRow"],[11,">"]," ",[1,"// footer aggregation"]],["  ",[5,"copyValue"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"string"]," ",[1,"// right-click → Copy cell as text"]],["  ",[12,"treeChevron"],[10,"?:"]," ",[6,"boolean"],"             ",[1,"// column owns the tree expand chevron"]],["  ",[5,"hasChildren"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"boolean"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridColumn<TRow> {
  id: string
  header: string | ((ctx: ColumnHeader<TRow>) => ReactNode)
  cell: (row: TRow, rowIndex: number) => ReactNode
  size?: number       // default width (px); default 160
  minSize?: number
  maxSize?: number
  meta?: ColumnMeta<TRow>
}

interface ColumnMeta<TRow> {
  align?: 'start' | 'center' | 'end' | 'left' | 'right' // start / end follow the reading direction
  className?: string
  label?: string                    // visibility-menu label; falls back to id
  sortFieldId?: string              // header gets a sort affordance
  filterFieldId?: string            // header menu → opens filter picker for this field
  hideable?: boolean                // default true
  resizable?: boolean               // default true
  draggable?: boolean               // header drag-reorder, default true
  pin?: 'start' | 'end' | 'left' | 'right' // sticky pinned column
  edit?: ColumnEditConfig<TRow>     // click-to-edit cell (see below)
  aggregate?: AggregateConfig<TRow> // footer aggregation
  copyValue?: (row: TRow) => string // right-click → Copy cell as text
  treeChevron?: boolean             // column owns the tree expand chevron
  hasChildren?: (row: TRow) => boolean
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Custom cell rendering`}),`
`,(0,n.jsx)(r.p,{children:`Cells receive the row plus the row index. Compose freely.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"User"],[11,">()(["]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'user'"],[11,","]],["    ",[9,"header"],[11,":"]," ",[3,"'User'"],[11,","]],["    ",[5,"cell"],[11,":"]," ",[11,"("],[12,"row"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["      ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"flex items-center gap-2\\""],[11,">"]],["        ",[11,"<"],[7,"Avatar"]," ",[8,"src"],[10,"="],[11,"{"],[12,"row"],[11,"."],[9,"avatarUrl"],[11,"}"]," ",[8,"fallback"],[10,"="],[11,"{"],[5,"initials"],[11,"("],[12,"row"],[11,"."],[9,"name"],[11,")}"]," ",[11,"/>"]],["        ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"flex flex-col\\""],[11,">"]],["          ",[11,"<"],[7,"span"]," ",[8,"className"],[10,"="],[3,"\\"font-medium\\""],[11,">{"],[12,"row"],[11,"."],[9,"name"],[11,"}</"],[7,"span"],[11,">"]],["          ",[11,"<"],[7,"span"]," ",[8,"className"],[10,"="],[3,"\\"font-mono text-xs text-muted-foreground\\""],[11,">{"],[12,"row"],[11,"."],[9,"email"],[11,"}</"],[7,"span"],[11,">"]],["        ",[11,"</"],[7,"div"],[11,">"]],["      ",[11,"</"],[7,"div"],[11,">"]],["    ",[11,"),"]],["    ",[9,"size"],[11,":"]," ",[4,"240"],[11,","]],["    ",[9,"meta"],[11,":"]," ",[11,"{"]," ",[9,"sortFieldId"],[11,":"]," ",[3,"'name'"]," ",[11,"},"]],["  ",[11,"},"]],[[11,"])"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const columns = defineColumns<User>()([
  {
    id: 'user',
    header: 'User',
    cell: (row) => (
      <div className="flex items-center gap-2">
        <Avatar src={row.avatarUrl} fallback={initials(row.name)} />
        <div className="flex flex-col">
          <span className="font-medium">{row.name}</span>
          <span className="font-mono text-xs text-muted-foreground">{row.email}</span>
        </div>
      </div>
    ),
    size: 240,
    meta: { sortFieldId: 'name' },
  },
])
`})}),`
`,(0,n.jsx)(r.h2,{children:`Pinning`}),`
`,(0,n.jsxs)(r.p,{children:[`Pin a column to the inline start or end; it sticks while horizontal
scrolling. `,(0,n.jsx)(r.code,{children:`start`}),` and `,(0,n.jsx)(r.code,{children:`end`}),` follow the reading direction (under
`,(0,n.jsx)(r.code,{children:`dir="rtl"`}),` a `,(0,n.jsx)(r.code,{children:`start`}),` column sticks to the right edge, as MUI X does);
`,(0,n.jsx)(r.code,{children:`left`}),` and `,(0,n.jsx)(r.code,{children:`right`}),` keep their physical meaning in both directions.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"{"]," id",[11,":"]," ",[3,"'actions'"],[11,","]," header",[11,":"]," ",[3,"''"],[11,","]," cell",[11,":"]," ",[12,"rowMenu"],[11,","]," meta",[11,":"]," ",[11,"{"]," pin",[11,":"]," ",[3,"'end'"],[11,","]," hideable",[11,":"]," ",[4,"false"]," ",[11,"}"]," ",[11,"}"]],[[11,"{"]," id",[11,":"]," ",[3,"'name'"],[11,","]," header",[11,":"]," ",[3,"'Name'"],[11,","]," cell",[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"],[11,","]," meta",[11,":"]," ",[11,"{"]," pin",[11,":"]," ",[3,"'start'"]," ",[11,"}"]," ",[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`{ id: 'actions', header: '', cell: rowMenu, meta: { pin: 'end', hideable: false } }
{ id: 'name', header: 'Name', cell: (r) => r.name, meta: { pin: 'start' } }
`})}),`
`,(0,n.jsxs)(r.p,{children:[`A subtle gradient renders at the boundary so users see the divide; for
`,(0,n.jsx)(r.code,{children:`start`}),` / `,(0,n.jsx)(r.code,{children:`end`}),` it mirrors with the direction.`]}),`
`,(0,n.jsx)(r.h2,{children:`Drag-resize + drag-reorder`}),`
`,(0,n.jsxs)(r.p,{children:[`Both on by default. Disable per column via `,(0,n.jsx)(r.code,{children:`meta.resizable: false`}),` /
`,(0,n.jsx)(r.code,{children:`meta.draggable: false`}),`. Pinned columns reorder within their pinned
band only.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Column widths persist via `,(0,n.jsx)(r.code,{children:`useDataGridUI().columnSizes`}),` — saved
views capture them; URL sync persists them.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Inline editing`}),`
`,(0,n.jsxs)(r.p,{children:[`Wire `,(0,n.jsx)(r.code,{children:`meta.edit`}),` to enable click-to-edit. The editor type is
inferred from your config:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[["edit",[11,":"]," ",[11,"{"]],["  type",[11,":"]," ",[3,"'text'"]," ",[10,"|"]," ",[3,"'number'"]," ",[10,"|"]," ",[3,"'select'"],[11,","]],["  ",[1,"/* For 'select': */"]],["  ",[12,"options"],[10,"?:"]," ",[11,"{"]," ",[9,"value"],[11,":"]," ",[12,"string"],[11,","]," ",[9,"label"],[11,":"]," ",[12,"string"]," ",[11,"}[],"]],["  ",[1,"/* For 'number': */"]],["  ",[12,"min"],[10,"?:"]," ",[12,"number"],[11,","]," ",[12,"max"],[10,"?:"]," ",[12,"number"],[11,","]," ",[12,"step"],[10,"?:"]," ",[12,"number"],[11,","]],["  ",[1,"/* Current value. Default: the row's own [col.id] property. */"]],["  ",[12,"read"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[12,"string"]," ",[10,"|"]," ",[12,"number"]," ",[10,"|"]," ",[4,"null"]," ",[10,"|"]," ",[4,"undefined"],[11,","]],["  ",[1,"/* Required: the editor's value (string, or number | null for 'number')"]],[[1,"     as a Partial<TRow>. Narrow it here, e.g. check a select value is"]],[[1,"     a member of the field's union. */"]],["  patch",[11,":"]," ",[11,"("],[12,"value"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"number"]," ",[10,"|"]," ",[6,"null"],[11,")"]," ",[2,"=>"]," ",[12,"Partial"],[10,"<"],[12,"TRow"],[10,">"],[11,","]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`edit: {
  type: 'text' | 'number' | 'select',
  /* For 'select': */
  options?: { value: string, label: string }[],
  /* For 'number': */
  min?: number, max?: number, step?: number,
  /* Current value. Default: the row's own [col.id] property. */
  read?: (row: TRow) => string | number | null | undefined,
  /* Required: the editor's value (string, or number | null for 'number')
     as a Partial<TRow>. Narrow it here, e.g. check a select value is
     a member of the field's union. */
  patch: (value: string | number | null) => Partial<TRow>,
}
`})}),`
`,(0,n.jsx)(r.p,{children:`Behavior:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Double-click cell → editor opens with current value`}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`Enter`}),` commits via `,(0,n.jsx)(r.code,{children:`mutators.updateRow(id, patch)`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`Esc`}),` cancels`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`Blur`}),` commits`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Auto-hidden when the adapter doesn't implement `,(0,n.jsx)(r.code,{children:`updateRow`}),`. Pair
with `,(0,n.jsx)(r.code,{children:`mutators.bulkUpdate`}),` to surface the "Edit selected (N)" item
in the header menu.`]}),`
`,(0,n.jsx)(r.h2,{children:`Aggregations`}),`
`,(0,n.jsxs)(r.p,{children:[`Footer row appears when any column has `,(0,n.jsx)(r.code,{children:`meta.aggregate`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[["meta",[11,":"]," ",[11,"{"]],["  aggregate",[11,":"]," ",[11,"{"]],["    fn",[11,":"]," ",[3,"'sum'"]," ",[10,"|"]," ",[3,"'avg'"]," ",[10,"|"]," ",[3,"'min'"]," ",[10,"|"]," ",[3,"'max'"]," ",[10,"|"]," ",[3,"'count'"]," ",[10,"|"]," ",[11,"(("],[12,"rows"],[11,")"]," ",[2,"=>"]," ",[12,"ReactNode"],[11,"),"]],["    ",[12,"label"],[10,"?:"]," ",[12,"string"],[11,","]],["  ",[11,"},"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`meta: {
  aggregate: {
    fn: 'sum' | 'avg' | 'min' | 'max' | 'count' | ((rows) => ReactNode),
    label?: string,
  },
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Aggregates run over the `,(0,n.jsx)(r.strong,{children:`current page`}),` of rows by default — pass
`,(0,n.jsx)(r.code,{children:`scope: 'total'`}),` to use `,(0,n.jsx)(r.code,{children:`totalCount`}),` instead (caller's
responsibility to compute or fetch).`]}),`
`,(0,n.jsx)(r.h2,{children:`Hookups`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Header concern`}),(0,n.jsx)(r.th,{children:`Where it lives`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Sort affordance`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`meta.sortFieldId`}),` + adapter declares `,(0,n.jsx)(r.code,{children:`sortOptions`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Filter from header`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`meta.filterFieldId`}),` + adapter declares `,(0,n.jsx)(r.code,{children:`filterFields`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Column visibility menu`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridColumnVisibility columns={...}>`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Reorder`}),(0,n.jsxs)(r.td,{children:[`drag the header — disable via `,(0,n.jsx)(r.code,{children:`meta.draggable: false`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Resize`}),(0,n.jsxs)(r.td,{children:[`drag the inline-end edge (the left edge under `,(0,n.jsx)(r.code,{children:`dir="rtl"`}),`) — disable via `,(0,n.jsx)(r.code,{children:`meta.resizable: false`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Pin`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`meta.pin: 'start' | 'end'`}),` (or the physical `,(0,n.jsx)(r.code,{children:`'left' | 'right'`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Right-click cell context menu`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`meta.copyValue`}),` enables "Copy" item`]})]})]})]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Hiding columns`}),`
`,(0,n.jsx)(r.p,{children:`Every column is hideable by default. Mark must-show columns:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"{"]," id",[11,":"]," ",[3,"'actions'"],[11,","]," header",[11,":"]," ",[3,"''"],[11,","]," cell",[11,":"]," ",[12,"rowMenu"],[11,","]," meta",[11,":"]," ",[11,"{"]," hideable",[11,":"]," ",[4,"false"]," ",[11,"}"]," ",[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`{ id: 'actions', header: '', cell: rowMenu, meta: { hideable: false } }
`})}),`
`,(0,n.jsx)(r.h2,{children:`Group-by sections`}),`
`,(0,n.jsxs)(r.p,{children:[`Set `,(0,n.jsx)(r.code,{children:`useDataGridUI().groupByColumnId`}),` to any column id — rows group
under sticky section headers showing the group value + row count.
Toolbar control: `,(0,n.jsx)(r.code,{children:`<DataGridGroupBy columns={...}>`}),`.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Tree expansion`}),`
`,(0,n.jsxs)(r.p,{children:[`Adapters that expose `,(0,n.jsx)(r.code,{children:`childrenOf?(parentId)`}),` + `,(0,n.jsx)(r.code,{children:`hasChildren?`}),` light
up tree rows. One column owns the chevron via `,(0,n.jsx)(r.code,{children:`meta.treeChevron: true`}),`. Children fetch lazily on expand — the chevron shows a tiny
loading dot during the round-trip.`]}),`
`,(0,n.jsx)(r.h2,{children:`Density`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`useDataGridUI().density`}),` (`,(0,n.jsx)(r.code,{children:`'compact' | 'comfortable'`}),`) flows down
into cell padding. Toggle: `,(0,n.jsx)(r.code,{children:`<DataGridDensityToggle>`}),`.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Header groups`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`columnGroups`}),` on `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` adds header rows above the leaf headers, MUI X's `,(0,n.jsx)(r.code,{children:`columnGroupingModel`}),` shape. `,(0,n.jsx)(r.code,{children:`columns`}),` stays a flat list, so column order, visibility, sizes, pinning, saved views, CSV export and bulk edit work as before; the groups only say which headers span which columns.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"groups"]," ",[10,"="]," ",[5,"defineColumnGroups"],[11,"<"],[2,"typeof"]," ",[12,"columns"],[11,">()(["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'name'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Name'"],[11,","]," ",[9,"children"],[11,":"]," ",[11,"["],[3,"'first'"],[11,","]," ",[3,"'last'"],[11,"]"]," ",[11,"},"]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'contact'"],[11,","]],["    ",[9,"header"],[11,":"]," ",[3,"'Contact'"],[11,","]],["    ",[9,"description"],[11,":"]," ",[3,"'Where to reach the person'"],[11,","]],["    ",[9,"children"],[11,":"]," ",[11,"[{"]," ",[9,"id"],[11,":"]," ",[3,"'address'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Address'"],[11,","]," ",[9,"children"],[11,":"]," ",[11,"["],[3,"'street'"],[11,","]," ",[3,"'city'"],[11,"]"]," ",[11,"},"]," ",[3,"'email'"],[11,"],"]],["  ",[11,"},"]],[[11,"])"]],[],[[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[8,"columnGroups"],[10,"="],[11,"{"],[12,"groups"],[11,"}"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const groups = defineColumnGroups<typeof columns>()([
  { id: 'name', header: 'Name', children: ['first', 'last'] },
  {
    id: 'contact',
    header: 'Contact',
    description: 'Where to reach the person',
    children: [{ id: 'address', header: 'Address', children: ['street', 'city'] }, 'email'],
  },
])

<DataGrid columns={columns} columnGroups={groups} />
`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`One header row per nesting level. A group cell spans its visible, contiguous leaves; hide a column and its group narrows, and a group whose leaves are split (a column reordered between them, or a pin boundary) draws one cell per contiguous run, each with the group's label.`}),`
`,(0,n.jsx)(r.li,{children:`Pinned groups stick with their pinned leaves. Columns in no group (and the checkbox, grip and action columns) get an empty cell down to the leaf headers.`}),`
`,(0,n.jsx)(r.li,{children:`With groups set, a column can be dragged only within its innermost group, by pointer and by keyboard; dragging whole groups is not supported.`}),`
`,(0,n.jsxs)(r.li,{children:[`Group cells are `,(0,n.jsx)(r.code,{children:`<th scope="colgroup" colSpan>`}),` (with `,(0,n.jsx)(r.code,{children:`cellSelection`}),`, `,(0,n.jsx)(r.code,{children:`role="columnheader"`}),` and `,(0,n.jsx)(r.code,{children:`aria-colspan`}),`); `,(0,n.jsx)(r.code,{children:`description`}),` is the tooltip and the `,(0,n.jsx)(r.code,{children:`aria-description`}),`; a long label truncates with an ellipsis and a `,(0,n.jsx)(r.code,{children:`title`}),`. Leaf headers keep their `,(0,n.jsx)(r.code,{children:`aria-sort`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`They read the design language's `,(0,n.jsx)(r.code,{children:`table`}),` slot: the head height (`,(0,n.jsx)(r.code,{children:`--dk-table-head-h`}),`), weight (`,(0,n.jsx)(r.code,{children:`--dk-table-head-weight`}),`) and divider (`,(0,n.jsx)(r.code,{children:`--dk-table-divider`}),`).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`defineColumnGroups<typeof columns>()`}),` types the leaf ids from the column definitions, so they autocomplete and a typo does not compile.`]}),`
`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};