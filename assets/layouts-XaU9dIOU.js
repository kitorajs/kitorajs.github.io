import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Layouts`,description:`Table / cards / kanban / media-grid + DataGridLayout interface for custom views.`,order:5};function i(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Layouts`}),`
`,(0,n.jsxs)(r.p,{children:[`Same data + adapter, different render. The grid ships four built-in
layouts and accepts pluggable custom ones via `,(0,n.jsx)(r.code,{children:`DataGridLayout`}),`.`]}),`
`,`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Layout id`}),(0,n.jsx)(r.th,{children:`Factory`}),(0,n.jsx)(r.th,{children:`What it draws`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`table`})}),(0,n.jsx)(r.td,{children:`(built-in)`}),(0,n.jsx)(r.td,{children:`Classic rows + columns — sort header, drag-resize, pin, inline edit, group-by sections, tree expansion`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`cards`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`cardsLayout()`})}),(0,n.jsx)(r.td,{children:`Responsive grid of cards — same data + selection + row actions`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`kanban`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`kanbanLayout()`})}),(0,n.jsx)(r.td,{children:`Group-by-column board with drag-to-column rerouting`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`media-grid`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`mediaGridLayout()`})}),(0,n.jsxs)(r.td,{children:[`Google-Photos-style gallery (see `,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/media-grid`,children:`MediaGrid`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Switch by setting `,(0,n.jsx)(r.code,{children:`useDataGridUI().layoutId`}),`, or mount the built-in
toolbar control `,(0,n.jsx)(r.code,{children:`<DataGridLayoutSwitcher layouts={[...]} />`}),`.`]}),`
`,`
`,`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`<DataGridView>`}),` — the renderer`]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Use `,(0,n.jsx)(r.code,{children:`<DataGridView>`}),` (not `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` directly) to support non-table
layouts. It reads `,(0,n.jsx)(r.code,{children:`useDataGridUI().layoutId`}),` and dispatches:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"DataGridView"],[11,","]],["  ",[12,"cardsLayout"],[11,","]],["  ",[12,"kanbanLayout"],[11,","]],["  ",[12,"mediaGridLayout"],[11,","]],["  ",[12,"DataGridLayoutSwitcher"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"layouts"]," ",[10,"="]," ",[11,"["]],["  ",[5,"cardsLayout"],[11,"<"],[6,"User"],[11,">({"]],["    ",[9,"headlineColumnId"],[11,":"]," ",[3,"'name'"],[11,","]],["    ",[9,"bodyColumnIds"],[11,":"]," ",[11,"["],[3,"'role'"],[11,","]," ",[3,"'status'"],[11,","]," ",[3,"'team'"],[11,"],"]],["  ",[11,"}),"]],["  ",[5,"kanbanLayout"],[11,"<"],[6,"User"],[11,">({"]],["    ",[9,"headlineColumnId"],[11,":"]," ",[3,"'name'"],[11,","]],["    ",[5,"groupBy"],[11,":"]," ",[11,"("],[12,"row"],[11,")"]," ",[2,"=>"]," ",[12,"row"],[11,"."],[9,"status"],[11,","]],["    ",[5,"patchFor"],[11,":"]," ",[11,"("],[12,"key"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[9,"status"],[11,":"]," ",[12,"key"]," ",[11,"}),"]],["    ",[9,"columns"],[11,":"]," ",[11,"["]],["      ",[11,"{"]," ",[9,"key"],[11,":"]," ",[3,"'active'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Active'"]," ",[11,"},"]],["      ",[11,"{"]," ",[9,"key"],[11,":"]," ",[3,"'invited'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Invited'"]," ",[11,"},"]],["      ",[11,"{"]," ",[9,"key"],[11,":"]," ",[3,"'paused'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Paused'"]," ",[11,"},"]],["    ",[11,"],"]],["  ",[11,"}),"]],[[11,"]"]],[],[[11,"<"],[7,"DataGridLayoutSwitcher"]," ",[8,"layouts"],[10,"="],[11,"{"],[12,"layouts"],[11,"}"]," ",[11,"/>"]],[[11,"<"],[7,"DataGridView"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[8,"layouts"],[10,"="],[11,"{"],[12,"layouts"],[11,"}"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  DataGridView,
  cardsLayout,
  kanbanLayout,
  mediaGridLayout,
  DataGridLayoutSwitcher,
} from '@kitora/datagrid'

const layouts = [
  cardsLayout<User>({
    headlineColumnId: 'name',
    bodyColumnIds: ['role', 'status', 'team'],
  }),
  kanbanLayout<User>({
    headlineColumnId: 'name',
    groupBy: (row) => row.status,
    patchFor: (key) => ({ status: key }),
    columns: [
      { key: 'active', label: 'Active' },
      { key: 'invited', label: 'Invited' },
      { key: 'paused', label: 'Paused' },
    ],
  }),
]

<DataGridLayoutSwitcher layouts={layouts} />
<DataGridView columns={columns} layouts={layouts} />
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`'table'`}),` is always present; passing `,(0,n.jsx)(r.code,{children:`layouts={[]}`}),` shows only the
table option.`]}),`
`,(0,n.jsx)(r.h2,{children:(0,n.jsx)(r.code,{children:`cardsLayout(options)`})}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"cardsLayout"],[11,"<"],[6,"TRow"],[11,">({"]],["  headlineColumnId?",[11,":"]," ",[12,"string"],"      ",[1,"// default: first column"]],["  ",[12,"subheadColumnId"],[10,"?:"]," ",[12,"string"]],["  ",[12,"bodyColumnIds"],[10,"?:"]," ",[12,"string"],[11,"[]"]],["  ",[12,"minCardWidth"],[10,"?:"]," ",[12,"string"],"          ",[1,"// default '16rem'"]],["  ",[12,"footer"],[10,"?:"]," ",[11,"("],[12,"row"],[11,")"]," ",[2,"=>"]," ",[12,"ReactNode"]],["  ",[12,"enableRowReorder"],[10,"?:"]," ",[12,"boolean"],"     ",[1,"// default false — see /docs/datagrid/row-reorder"]],["  ",[12,"dragHandle"],[10,"?:"]," ",[3,"'whole-card'"]," ",[10,"|"]," ",[3,"'icon'"]," ",[10,"|"]," ",[3,"'none'"],"  ",[1,"// default 'whole-card'"]],[[11,"})"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`cardsLayout<TRow>({
  headlineColumnId?: string      // default: first column
  subheadColumnId?: string
  bodyColumnIds?: string[]
  minCardWidth?: string          // default '16rem'
  footer?: (row) => ReactNode
  enableRowReorder?: boolean     // default false — see /docs/datagrid/row-reorder
  dragHandle?: 'whole-card' | 'icon' | 'none'  // default 'whole-card'
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Same data flow as the table. Cards inherit row actions, context
menu, selection, group-by sections. When `,(0,n.jsx)(r.code,{children:`enableRowReorder`}),` is on,
the cards become drag sources via the pointer-driven `,(0,n.jsx)(r.em,{children:`free-flow`}),`
hook — the dragged card visually lifts and follows the cursor.
`,(0,n.jsx)(r.code,{children:`dragHandle`}),` picks where the drag gesture originates (`,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/row-reorder`,children:`full guide`}),`).`]}),`
`,(0,n.jsx)(r.h2,{children:(0,n.jsx)(r.code,{children:`kanbanLayout(options)`})}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"kanbanLayout"],[11,"<"],[6,"TRow"],[11,">({"]],["  ",[5,"groupBy"],[11,":"]," ",[11,"("],[12,"row"],[11,")"]," ",[2,"=>"]," ",[12,"string"],"                 ",[1,"// key for the column the row belongs in"]],["  ",[12,"patchFor"],": ",[11,"("],[12,"key"],[11,")"]," ",[2,"=>"]," ",[12,"Partial"],[10,"<"],[12,"TRow"],[10,">"],"         ",[1,"// patch dispatched on drop"]],["  ",[12,"columns"],": ",[12,"KanbanColumnDef"],[11,"[]"],"               ",[1,"// ordered columns"]],["  ",[12,"headlineColumnId"],[10,"?:"]," ",[12,"string"]],["  ",[12,"subheadColumnId"],[10,"?:"]," ",[12,"string"]],[[11,"})"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`kanbanLayout<TRow>({
  groupBy: (row) => string                 // key for the column the row belongs in
  patchFor: (key) => Partial<TRow>         // patch dispatched on drop
  columns: KanbanColumnDef[]               // ordered columns
  headlineColumnId?: string
  subheadColumnId?: string
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Drag a card to another column → calls `,(0,n.jsx)(r.code,{children:`mutators.updateRow(rowId, patchFor(targetKey))`}),`. Auto-shows "Drop here" zones for empty
columns.`]}),`
`,(0,n.jsx)(r.h2,{children:`Opening a row from the keyboard`}),`
`,(0,n.jsxs)(r.p,{children:[`When `,(0,n.jsx)(r.code,{children:`onRowClick`}),` is set, every card (`,(0,n.jsx)(r.code,{children:`cardsLayout`}),`) and `,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),` row is a Tab stop (a kanban board is one Tab stop whose arrows walk its cards), and pressing `,(0,n.jsx)(r.strong,{children:`o`}),` on the focused card or row opens it, the keyboard twin of clicking it. `,(0,n.jsx)(r.strong,{children:`Enter`}),` opens as well when the row has no drag; on a draggable row (`,(0,n.jsx)(r.code,{children:`enableRowReorder`}),`, or any kanban card) Enter and Space belong to the keyboard drag (they pick the row up and drop it), so `,(0,n.jsx)(r.code,{children:`o`}),` is the one key that works everywhere. Only a plain key counts: Shift, Alt, Ctrl and Meta chords are left to the browser and the host. Each row carries the keys in `,(0,n.jsx)(r.code,{children:`aria-keyshortcuts`}),` (`,(0,n.jsx)(r.code,{children:`o`}),`, or `,(0,n.jsx)(r.code,{children:`Enter o`}),` without drag) so screen readers announce them, and `,(0,n.jsx)(r.code,{children:`<DataGridShortcutsHelp>`}),` lists `,(0,n.jsx)(r.code,{children:`o`}),` with the other grid keys. The table layout keeps its own row semantics.`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Custom layouts — `,(0,n.jsx)(r.code,{children:`DataGridLayout`}),` interface`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridLayout"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],["  ",[12,"id"],[10,":"]," ",[6,"string"]],["  ",[12,"label"],[10,":"]," ",[6,"string"]],["  ",[12,"icon"],[10,"?:"]," ",[6,"LucideIcon"]],["  ",[5,"render"],[10,":"]," ",[11,"("],[12,"ctx"],[10,":"]," ",[6,"LayoutCtx"],[11,"<"],[6,"TRow"],[11,">)"]," ",[2,"=>"]," ",[6,"ReactNode"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridLayout<TRow> {
  id: string
  label: string
  icon?: LucideIcon
  render: (ctx: LayoutCtx<TRow>) => ReactNode
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`LayoutCtx`}),` exposes everything you need to draw rows:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"LayoutCtx"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],["  ",[12,"rows"],[10,":"]," ",[6,"TRow"],[11,"[]"]],["  ",[12,"columns"],[10,":"]," ",[2,"readonly"]," ",[6,"DataGridColumn"],[11,"<"],[6,"TRow"],[11,">[]"]],["  ",[12,"loading"],[10,":"]," ",[6,"boolean"]],["  ",[12,"fetching"],[10,":"]," ",[6,"boolean"]],["  ",[12,"isFiltered"],[10,":"]," ",[6,"boolean"]],["  ",[5,"getRowId"],[10,":"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"string"]],["  ",[12,"density"],[10,":"]," ",[3,"'compact'"]," ",[10,"|"]," ",[3,"'comfortable'"]],["  ",[12,"emptyState"],[10,":"]," ",[6,"ReactNode"]],["  ",[12,"loadingState"],[10,":"]," ",[6,"ReactNode"]],[],["  ",[1,"/* selection */"]],["  ",[12,"selectedIds"],[10,":"]," ",[6,"string"],[11,"[]"]],["  ",[5,"isSelected"],[10,":"]," ",[11,"("],[12,"id"],[10,":"]," ",[6,"string"],[11,")"]," ",[2,"=>"]," ",[6,"boolean"]],["  ",[5,"toggleSelected"],[10,":"]," ",[11,"("],[12,"id"],[10,":"]," ",[6,"string"],[11,","]," ",[12,"value"],[10,"?:"]," ",[6,"boolean"],[11,")"]," ",[2,"=>"]," ",[6,"void"]],[],["  ",[1,"/* row interactions */"]],["  ",[5,"onRowClick"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"void"]],["  ",[5,"rowAccent"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"string"]," ",[10,"|"]," ",[6,"undefined"]],[],["  ",[1,"/* row actions */"]],["  ",[5,"leftActions"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"ActionItem"],[11,"[]"]],["  ",[5,"rightActions"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"ActionItem"],[11,"[]"]],["  ",[5,"rightMenuActions"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"ActionItem"],[11,"[]"]],["  ",[5,"contextMenuActions"],[10,"?:"]," ",[11,"("],[12,"row"],[10,":"]," ",[6,"TRow"],[11,")"]," ",[2,"=>"]," ",[6,"ActionItem"],[11,"[]"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface LayoutCtx<TRow> {
  rows: TRow[]
  columns: readonly DataGridColumn<TRow>[]
  loading: boolean
  fetching: boolean
  isFiltered: boolean
  getRowId: (row: TRow) => string
  density: 'compact' | 'comfortable'
  emptyState: ReactNode
  loadingState: ReactNode

  /* selection */
  selectedIds: string[]
  isSelected: (id: string) => boolean
  toggleSelected: (id: string, value?: boolean) => void

  /* row interactions */
  onRowClick?: (row: TRow) => void
  rowAccent?: (row: TRow) => string | undefined

  /* row actions */
  leftActions?: (row: TRow) => ActionItem[]
  rightActions?: (row: TRow) => ActionItem[]
  rightMenuActions?: (row: TRow) => ActionItem[]
  contextMenuActions?: (row: TRow) => ActionItem[]
}
`})}),`
`,(0,n.jsx)(r.p,{children:`Minimal custom layout:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"tableOfContents"],[10,":"]," ",[6,"DataGridLayout"],[11,"<"],[6,"Chapter"],[11,">"]," ",[10,"="]," ",[11,"{"]],["  ",[9,"id"],[11,":"]," ",[3,"'toc'"],[11,","]],["  ",[9,"label"],[11,":"]," ",[3,"'TOC'"],[11,","]],["  ",[5,"render"],[11,":"]," ",[11,"({"]," ",[12,"rows"],[11,","]," ",[12,"isSelected"],[11,","]," ",[12,"toggleSelected"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("]],["    ",[11,"<"],[7,"ol"]," ",[8,"className"],[10,"="],[3,"\\"space-y-1\\""],[11,">"]],["      ",[11,"{"],[12,"rows"],[11,"."],[5,"map"],[11,"(("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["        ",[11,"<"],[7,"li"]," ",[8,"key"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}>"]],["          ",[11,"<"],[7,"button"]],["            ",[8,"data-row-id"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}"]],["            ",[8,"data-selected"],[10,"="],[11,"{"],[5,"isSelected"],[11,"("],[12,"r"],[11,"."],[9,"id"],[11,")"]," ",[10,"||"]," ",[4,"undefined"],[11,"}"]],["            ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[5,"toggleSelected"],[11,"("],[12,"r"],[11,"."],[9,"id"],[11,")}"]],["            ",[8,"className"],[10,"="],[3,"\\"block w-full text-left\\""]],["          ",[11,">"]],["            ",[11,"{"],[12,"r"],[11,"."],[9,"title"],[11,"}"]],["          ",[11,"</"],[7,"button"],[11,">"]],["        ",[11,"</"],[7,"li"],[11,">"]],["      ",[11,"))}"]],["    ",[11,"</"],[7,"ol"],[11,">"]],["  ",[11,"),"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const tableOfContents: DataGridLayout<Chapter> = {
  id: 'toc',
  label: 'TOC',
  render: ({ rows, isSelected, toggleSelected }) => (
    <ol className="space-y-1">
      {rows.map((r) => (
        <li key={r.id}>
          <button
            data-row-id={r.id}
            data-selected={isSelected(r.id) || undefined}
            onClick={() => toggleSelected(r.id)}
            className="block w-full text-left"
          >
            {r.title}
          </button>
        </li>
      ))}
    </ol>
  ),
}
`})}),`
`,(0,n.jsx)(r.p,{children:`Two conventions worth following:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Emit `,(0,n.jsx)(r.code,{children:`data-row-id={rowId}`}),` on each selectable element — lets
`,(0,n.jsx)(r.code,{children:`useDataGridRubberBand`}),` + `,(0,n.jsx)(r.code,{children:`useDataGridLongPress`}),` work without
extra config.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Use the provided `,(0,n.jsx)(r.code,{children:`emptyState`}),` / `,(0,n.jsx)(r.code,{children:`loadingState`}),` for parity with the
built-in layouts.`]}),`
`]}),`
`,`
`,`
`,(0,n.jsx)(r.h2,{children:`Persisting the active layout`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`layoutId`}),` lives in `,(0,n.jsx)(r.code,{children:`useDataGridUI()`}),`. `,(0,n.jsx)(r.code,{children:`useDataGridUrlSync`}),` persists
it to the query string out of the box, so a `,(0,n.jsx)(r.code,{children:`?layout=kanban`}),` URL
hydrates the right view on reload.`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"useDataGridUrlSync"],[11,"({"]," ",[9,"namespace"],[11,":"]," ",[3,"'users'"]," ",[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`useDataGridUrlSync({ namespace: 'users' })
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Saved views (`,(0,n.jsx)(r.code,{children:`<DataGridViewSelector>`}),`) snapshot the layout too — pick
"Kanban draft" and you're back where you left it.`]}),`
`]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};