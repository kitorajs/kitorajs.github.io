import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Row reorder`,description:"Drag-to-reorder for every layout. Whole-row vs handle-only modes, place handles anywhere via `<DataGridRowDragHandle>`, two preview flavors (a pill or the row itself) over the in-repo DnD kit, keyboard dragging and announcements, one dispatch path.",order:5};function i(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Row reorder`}),`
`,(0,n.jsxs)(r.p,{children:[`Drag rows / cards to a new position. The whole system is layered so you can switch the `,(0,n.jsx)(r.em,{children:`drag feel`}),`, the `,(0,n.jsx)(r.em,{children:`handle placement`}),`, the `,(0,n.jsx)(r.em,{children:`layout`}),`, or replace any piece — without touching the others.`]}),`
`,(0,n.jsx)(r.h2,{children:`Architecture`}),`
`,(0,n.jsx)(r.p,{children:`Three layers, three swap points:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Hook flavor`}),` — picks what follows the pointer. Both are presets over one engine, `,(0,n.jsx)(r.code,{children:`useRowReorderDnd`}),`, built on the in-repo DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`): pointer, touch long-press, keyboard (Space on a focusable grip, arrows, Space; Escape cancels), auto-scroll near the scroll container's edge, and screen-reader announcements through the kit's live region. No provider is needed: the hook owns its kit instance.`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useDataGridRowDragReorder`}),` — a small "N rows" pill follows the pointer. Used by the `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` table view (a `,(0,n.jsx)(r.code,{children:`<tr>`}),` cannot be cloned outside its table).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useDataGridFreeFlowDragReorder`}),` — a clone of the row follows the pointer (Trello / Linear feel); a selected batch shows as a stack of up to three clones with a count badge. Used by `,(0,n.jsx)(r.code,{children:`cardsLayout`}),` + `,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),` (and `,(0,n.jsx)(r.code,{children:`mediaGridLayout`}),` through `,(0,n.jsx)(r.code,{children:`useMediaGridDragReorder`}),`). Vertical rows cap the clone at 360px.`]}),`
`]}),`
`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsxs)(r.ol,{start:`2`,children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Drag handle mode`}),` — picks `,(0,n.jsx)(r.em,{children:`where`}),` the drag gesture originates.`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'whole-row'`}),` / `,(0,n.jsx)(r.code,{children:`'whole-card'`}),` — pointerdown anywhere on the row lifts it.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'icon'`}),` — the layout renders a built-in `,(0,n.jsx)(r.code,{children:`<GripVertical>`}),` handle. Only pressing the handle drags. Row body stays clickable.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'none'`}),` — no auto-handle. You mount `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle rowId>`}),` inside a cell renderer / custom slot. Multiple handles per row supported.`]}),`
`]}),`
`]}),`
`]}),`
`,`
`,(0,n.jsxs)(r.ol,{start:`3`,children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Adapter dispatch`}),` — picks which mutator runs.`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`dispatchRowMove(mutators, ids, beforeId)`}),` — auto-prefers `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),` over sequential `,(0,n.jsx)(r.code,{children:`moveRow`}),` calls. Caller of either hook just passes this helper as `,(0,n.jsx)(r.code,{children:`onMove`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`All three are independently configurable. The result: any combination users can think of is wired.`}),`
`,(0,n.jsx)(r.h2,{children:`30-second mount`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[1,"// Table layout (pill hook + built-in grip column; Space on the grip drags by keyboard)"]],[[11,"<"],[7,"DataGrid"],[11,"<"],[6,"User"],[11,">"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[8,"enableRowReorder"]," ",[11,"/>"]],[],[[1,"// Cards layout (free-flow hook + whole-card drag)"]],[[11,"<"],[7,"DataGridView"]],["  ",[8,"layouts"],[10,"="],[11,"{["],[5,"cardsLayout"],[11,"<"],[6,"User"],[11,">({"]," ",[9,"enableRowReorder"],[11,":"]," ",[4,"true"]," ",[11,"})]}"]],[[11,"/>"]],[],[[1,"// Cards layout — grip icon mode"]],[[11,"<"],[7,"DataGridView"]],["  ",[8,"layouts"],[10,"="],[11,"{["]],["    ",[5,"cardsLayout"],[11,"<"],[6,"User"],[11,">({"]],["      ",[9,"enableRowReorder"],[11,":"]," ",[4,"true"],[11,","]],["      ",[9,"dragHandle"],[11,":"]," ",[3,"'icon'"],[11,","]],["    ",[11,"}),"]],["  ",[11,"]}"]],[[11,"/>"]],[],[[1,"// Virt rows"]],[[11,"<"],[7,"DataGridVirtual"],[11,"<"],[6,"User"],[11,">"]],["  ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]],["  ",[8,"enableRowReorder"]],["  ",[8,"dragHandle"],[10,"="],[3,"\\"icon\\""],"      ",[1,"// (default)"]],[[11,"  "],[1,"// OR dragHandle=\\"whole-row\\""]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`// Table layout (pill hook + built-in grip column; Space on the grip drags by keyboard)
<DataGrid<User> columns={cols} enableRowReorder />

// Cards layout (free-flow hook + whole-card drag)
<DataGridView
  layouts={[cardsLayout<User>({ enableRowReorder: true })]}
/>

// Cards layout — grip icon mode
<DataGridView
  layouts={[
    cardsLayout<User>({
      enableRowReorder: true,
      dragHandle: 'icon',
    }),
  ]}
/>

// Virt rows
<DataGridVirtual<User>
  columns={cols}
  enableRowReorder
  dragHandle="icon"      // (default)
  // OR dragHandle="whole-row"
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`All of the above require the adapter to implement at least one of `,(0,n.jsx)(r.code,{children:`moveRow`}),` / `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),`. When neither is present, drag handlers auto-disable (no UI lies about being interactive).`]}),`
`,(0,n.jsx)(r.h2,{children:`Drag handle modes`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`dragHandle`}),` is the lever every reorder-capable layout exposes:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Mode`}),(0,n.jsx)(r.th,{children:`Where pointerdown starts a drag`}),(0,n.jsx)(r.th,{children:`Visual`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`'whole-row'`}),` / `,(0,n.jsx)(r.code,{children:`'whole-card'`})]}),(0,n.jsx)(r.td,{children:`Anywhere on the row / card`}),(0,n.jsxs)(r.td,{children:[`Row body shows `,(0,n.jsx)(r.code,{children:`cursor: grab`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'icon'`})}),(0,n.jsxs)(r.td,{children:[`Only on the auto-rendered `,(0,n.jsx)(r.code,{children:`<GripVertical>`})]}),(0,n.jsxs)(r.td,{children:[`Handle shows `,(0,n.jsx)(r.code,{children:`cursor: grab`}),`; row body stays `,(0,n.jsx)(r.code,{children:`auto`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'none'`})}),(0,n.jsxs)(r.td,{children:[`Only on your custom `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle>`}),` instances`]}),(0,n.jsx)(r.td,{children:`You control the visual`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`When you pick `,(0,n.jsx)(r.code,{children:`'whole-row'`}),`, an internal `,(0,n.jsx)(r.strong,{children:`5px movement threshold`}),` disambiguates click vs drag — single clicks open / select the row normally; only sustained motion lifts it. When you pick `,(0,n.jsx)(r.code,{children:`'icon'`}),` (or `,(0,n.jsx)(r.code,{children:`'none'`}),` with custom handles), there's no ambiguity — every pointerdown on the handle becomes a drag attempt.`]}),`
`,(0,n.jsx)(r.p,{children:`Defaults per layout:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Layout`}),(0,n.jsxs)(r.th,{children:[`Default `,(0,n.jsx)(r.code,{children:`dragHandle`})]}),(0,n.jsx)(r.th,{children:`Default rationale`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`<DataGrid>`}),` (table)`]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`'icon'`}),` (built-in grip column)`]}),(0,n.jsx)(r.td,{children:`Rows are wide; clicking anywhere = drag would conflict with text selection in cells`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridVirtual>`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'icon'`})}),(0,n.jsx)(r.td,{children:`Same as above`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`cardsLayout`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'whole-card'`})}),(0,n.jsx)(r.td,{children:`Cards are bounded by their grid cell; "lift the card" is a natural gesture`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`mediaGridLayout`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'whole-card'`})}),(0,n.jsx)(r.td,{children:`Gallery feel matches Photos / Pinterest`})]})]})]}),`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle>`}),` — handles anywhere`]}),`
`,(0,n.jsx)(r.p,{children:`The drop-in component. Place inside any cell renderer or custom slot.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"DataGridRowDragHandle"],[11,","]],["  ",[12,"defineColumns"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[[2,"import"]," ",[11,"{"]," ",[12,"GripVertical"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'lucide-react'"]],[],[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"User"],[11,">()(["]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'grip'"],[11,","]],["    ",[9,"header"],[11,":"]," ",[3,"''"],[11,","]],["    ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["      ",[11,"<"],[7,"DataGridRowDragHandle"]," ",[8,"rowId"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}>"]],["        ",[11,"<"],[7,"GripVertical"]," ",[8,"className"],[10,"="],[3,"\\"size-3.5\\""]," ",[11,"/>"]],["      ",[11,"</"],[7,"DataGridRowDragHandle"],[11,">"]],["    ",[11,"),"]],["  ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'name'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Name'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"]," ",[11,"},"]],[[11,"  "],[1,"// ..."]],[[11,"])"]],[],[[11,"<"],[7,"DataGridVirtual"],[11,"<"],[6,"User"],[11,">"]],["  ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]],["  ",[8,"enableRowReorder"]],["  ",[8,"dragHandle"],[10,"="],[3,"\\"none\\""],"   ",[1,"// disable the auto-grip column; you're rendering your own"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  DataGridRowDragHandle,
  defineColumns,
} from '@kitora/datagrid'
import { GripVertical } from 'lucide-react'

const columns = defineColumns<User>()([
  {
    id: 'grip',
    header: '',
    cell: (r) => (
      <DataGridRowDragHandle rowId={r.id}>
        <GripVertical className="size-3.5" />
      </DataGridRowDragHandle>
    ),
  },
  { id: 'name', header: 'Name', cell: (r) => r.name },
  // ...
])

<DataGridVirtual<User>
  columns={columns}
  enableRowReorder
  dragHandle="none"   // disable the auto-grip column; you're rendering your own
/>
`})}),`
`,(0,n.jsx)(r.h3,{children:`Multiple handles per row`}),`
`,(0,n.jsxs)(r.p,{children:[`Spread `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle rowId>`}),` as many times as you want. Each one is a fresh drag origin point pointing at the same row.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"Task"],[11,">()(["]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'grip-left'"],[11,","]],["    ",[9,"header"],[11,":"]," ",[3,"''"],[11,","]],["    ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"<"],[7,"DataGridRowDragHandle"]," ",[8,"rowId"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}><"],[7,"GripVertical"],[11,"/></"],[7,"DataGridRowDragHandle"],[11,">,"]],["  ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'title'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Title'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"title"]," ",[11,"},"]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'grip-right'"],[11,","]],["    ",[9,"header"],[11,":"]," ",[3,"''"],[11,","]],["    ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["      ",[11,"<"],[7,"DataGridRowDragHandle"]," ",[8,"rowId"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}"]," ",[8,"aria-label"],[10,"="],[3,"\\"Move row\\""],[11,">"]],["        ",[11,"<"],[7,"Move"]," ",[8,"className"],[10,"="],[3,"\\"size-3.5\\""]," ",[11,"/>"]],["      ",[11,"</"],[7,"DataGridRowDragHandle"],[11,">"]],["    ",[11,"),"]],["  ",[11,"},"]],[[11,"])"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const columns = defineColumns<Task>()([
  {
    id: 'grip-left',
    header: '',
    cell: (r) => <DataGridRowDragHandle rowId={r.id}><GripVertical/></DataGridRowDragHandle>,
  },
  { id: 'title', header: 'Title', cell: (r) => r.title },
  {
    id: 'grip-right',
    header: '',
    cell: (r) => (
      <DataGridRowDragHandle rowId={r.id} aria-label="Move row">
        <Move className="size-3.5" />
      </DataGridRowDragHandle>
    ),
  },
])
`})}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`asChild`}),` — turn any button into a handle`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`asChild`}),` (Radix-style) merges drag handlers onto your child element instead of wrapping it in a `,(0,n.jsx)(r.code,{children:`<span>`}),`. Use it to make existing `,(0,n.jsx)(r.code,{children:`<Button>`}),` / icons / links draggable without extra DOM:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridRowDragHandle"]," ",[8,"rowId"],[10,"="],[11,"{"],[12,"r"],[11,"."],[9,"id"],[11,"}"]," ",[8,"asChild"],[11,">"]],["  ",[11,"<"],[7,"Button"]," ",[8,"size"],[10,"="],[3,"\\"sm\\""]," ",[8,"variant"],[10,"="],[3,"\\"ghost\\""],[11,">"]],["    ",[11,"<"],[7,"Move"]," ",[8,"className"],[10,"="],[3,"\\"size-3.5\\""]," ",[11,"/>"]],["    Move"],["  ",[11,"</"],[7,"Button"],[11,">"]],[[11,"</"],[7,"DataGridRowDragHandle"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridRowDragHandle rowId={r.id} asChild>
  <Button size="sm" variant="ghost">
    <Move className="size-3.5" />
    Move
  </Button>
</DataGridRowDragHandle>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The button receives the kit's handle marker (`,(0,n.jsx)(r.code,{children:`data-dnd-handle`}),`) + `,(0,n.jsx)(r.code,{children:`data-drag-handle=""`}),`. Clicks still fire `,(0,n.jsx)(r.code,{children:`onClick`}),`; a press only becomes a drag past the kit's 3px mouse threshold (a 250ms long-press on touch). The span form is focusable (`,(0,n.jsx)(r.code,{children:`role="button"`}),`, `,(0,n.jsx)(r.code,{children:`tabIndex=0`}),`), so Space on it picks the row up. The handle must sit inside the row element that spreads `,(0,n.jsx)(r.code,{children:`itemProps(rowId)`}),`.`]}),`
`,(0,n.jsx)(r.h3,{children:`Graceful no-op`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle>`}),` reads the layout's reorder context. When that context isn't published (reorder not on, layout doesn't support it, or `,(0,n.jsx)(r.code,{children:`dragHandle`}),` resolves to off), the component renders children `,(0,n.jsx)(r.strong,{children:`pass-through with no handlers`}),`. So you can leave it in cell renderers permanently — it lights up when reorder is on and quietly disappears when off.`]}),`
`,(0,n.jsx)(r.h2,{children:`Hook-level API (for custom layouts)`}),`
`,(0,n.jsx)(r.p,{children:`If you're building your own layout, pull the hook directly:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"useDataGridFreeFlowDragReorder"],[11,","]],["  ",[12,"dispatchRowMove"],[11,","]],["  ",[12,"useDataGrid"],[11,","]],["  ",[12,"useDataGridUI"],[11,","]],["  ",[12,"DataGridReorderProvider"],[11,","]],["  ",[12,"DataGridRowDragHandle"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"function"]," ",[5,"MyGalleryLayout"],[11,"({"]," ",[12,"rows"]," ",[11,"})"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"mutators"],[11,","]," ",[12,"getRowId"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGrid"],[11,"()"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"selectedIds"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridUI"],[11,"()"]],["  ",[2,"const"]," ",[12,"rowIds"]," ",[10,"="]," ",[12,"rows"],[11,"."],[5,"map"],[11,"("],[12,"getRowId"],[11,")"]],[],["  ",[2,"const"]," ",[11,"{"]],["    ",[12,"itemProps"],[11,","]],["    ",[12,"handleProps"],[11,","]],["    ",[12,"isDragSource"],[11,","]],["    ",[12,"dropMark"],[11,","]],["    ",[12,"mode"],[11,","]],["  ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridFreeFlowDragReorder"],[11,"({"]],["    ",[9,"enabled"],[11,":"]," ",[4,"true"],[11,","]],["    ",[12,"rowIds"],[11,","]],["    ",[12,"selectedIds"],[11,","]],["    ",[9,"orientation"],[11,":"]," ",[3,"'horizontal'"],[11,","]],["    ",[9,"mode"],[11,":"]," ",[3,"'handle'"],[11,","],"    ",[1,"// or 'whole-row'"]],["    ",[5,"onMove"],[11,":"]," ",[11,"("],[12,"ids"],[11,","]," ",[12,"beforeId"],[11,")"]," ",[2,"=>"]," ",[5,"dispatchRowMove"],[11,"("],[12,"mutators"],[11,","]," ",[12,"ids"],[11,","]," ",[12,"beforeId"],[11,"),"]],["  ",[11,"})"]],[],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"DataGridReorderProvider"]],["      ",[8,"value"],[10,"="],[11,"{{"]," ",[12,"handleProps"],[11,","]," ",[12,"isDragSource"],[11,","]," ",[12,"mode"]," ",[11,"}}"]],["    ",[11,">"]],["      ",[11,"{"],[12,"rows"],[11,"."],[5,"map"],[11,"(("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["        ",[2,"const"]," ",[12,"id"]," ",[10,"="]," ",[5,"getRowId"],[11,"("],[12,"r"],[11,")"]],["        ",[2,"return"]," ",[11,"("]],[[11,"          "],[1,"// itemProps carries the kit's registration \`ref\`: spread it on the row element."]],["          ",[11,"<"],[7,"div"]," ",[8,"key"],[10,"="],[11,"{"],[12,"id"],[11,"}"]," ",[8,"data-row-id"],[10,"="],[11,"{"],[12,"id"],[11,"}"]," ",[11,"{"],[10,"..."],[5,"itemProps"],[11,"("],[12,"id"],[11,")}>"]],["            ",[11,"<"],[7,"DataGridRowDragHandle"]," ",[8,"rowId"],[10,"="],[11,"{"],[12,"id"],[11,"}>"]],["              ",[11,"<"],[7,"GripVertical"]," ",[11,"/>"]],["            ",[11,"</"],[7,"DataGridRowDragHandle"],[11,">"]],["            ",[11,"{"],[1,"/* row body */"],[11,"}"]],["          ",[11,"</"],[7,"div"],[11,">"]],["        ",[11,")"]],["      ",[11,"})}"]],["    ",[11,"</"],[7,"DataGridReorderProvider"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  useDataGridFreeFlowDragReorder,
  dispatchRowMove,
  useDataGrid,
  useDataGridUI,
  DataGridReorderProvider,
  DataGridRowDragHandle,
} from '@kitora/datagrid'

function MyGalleryLayout({ rows }) {
  const { mutators, getRowId } = useDataGrid()
  const { selectedIds } = useDataGridUI()
  const rowIds = rows.map(getRowId)

  const {
    itemProps,
    handleProps,
    isDragSource,
    dropMark,
    mode,
  } = useDataGridFreeFlowDragReorder({
    enabled: true,
    rowIds,
    selectedIds,
    orientation: 'horizontal',
    mode: 'handle',    // or 'whole-row'
    onMove: (ids, beforeId) => dispatchRowMove(mutators, ids, beforeId),
  })

  return (
    <DataGridReorderProvider
      value={{ handleProps, isDragSource, mode }}
    >
      {rows.map((r) => {
        const id = getRowId(r)
        return (
          // itemProps carries the kit's registration \`ref\`: spread it on the row element.
          <div key={id} data-row-id={id} {...itemProps(id)}>
            <DataGridRowDragHandle rowId={id}>
              <GripVertical />
            </DataGridRowDragHandle>
            {/* row body */}
          </div>
        )
      })}
    </DataGridReorderProvider>
  )
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Five touchpoints, no further plumbing — descendant cells can mount `,(0,n.jsx)(r.code,{children:`<DataGridRowDragHandle>`}),` freely.`]}),`
`,(0,n.jsx)(r.h2,{children:`Selection-aware drag`}),`
`,(0,n.jsxs)(r.p,{children:[`Both hook flavors are selection-aware: if the dragged row is part of the active selection (`,(0,n.jsx)(r.code,{children:`selectedIds`}),`), the `,(0,n.jsx)(r.strong,{children:`whole selection moves`}),` — preserving its document order. Otherwise just the single dragged row moves.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Visually, free-flow shows a stack of clones with a count badge (the kit's `,(0,n.jsx)(r.code,{children:`stackedPreview`}),`); the table's pill reads "N rows". The batch is chosen at press time through the kit's `,(0,n.jsx)(r.code,{children:`selection`}),` option, so a keyboard drag moves the same batch as a mouse drag.`]}),`
`,(0,n.jsx)(r.p,{children:`Dispatch:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`ids.length > 1 + adapter has `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),` → one server round-trip.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Otherwise → sequential `,(0,n.jsx)(r.code,{children:`moveRow(id, beforeId)`}),` calls, serialized so anchor order is stable.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Adapter contract`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"DataGridAdapter"],[11,"<"],[6,"TRow"],[11,">"]," ",[11,"{"]],[[11,"  "],[1,"// ...required methods"]],["  ",[5,"moveRow"],[10,"?"],[11,"("],[12,"rowId"],[10,":"]," ",[6,"string"],[11,","]," ",[12,"beforeRowId"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"bulkMoveRows"],[10,"?"],[11,"("],[12,"rowIds"],[10,":"]," ",[6,"string"],[11,"[],"]," ",[12,"beforeRowId"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface DataGridAdapter<TRow> {
  // ...required methods
  moveRow?(rowId: string, beforeRowId: string | null): MaybePromise<void>
  bulkMoveRows?(rowIds: string[], beforeRowId: string | null): MaybePromise<void>
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`beforeRowId`}),` semantics — drop in front of this row, or `,(0,n.jsx)(r.code,{children:`null`}),` to append at end.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The grid auto-hides drag affordances if neither is implemented; `,(0,n.jsx)(r.code,{children:`inspectCapabilities(adapter).moveRow`}),` / `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),` exposes this for custom UI.`]}),`
`,(0,n.jsx)(r.h2,{children:`Two flavors of drag — when to pick which`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsxs)(r.th,{children:[`Pill (`,(0,n.jsx)(r.code,{children:`useDataGridRowDragReorder`}),`)`]}),(0,n.jsxs)(r.th,{children:[`Free-flow (`,(0,n.jsx)(r.code,{children:`useDataGridFreeFlowDragReorder`}),`)`]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Preview`}),(0,n.jsx)(r.td,{children:`"N rows" pill under the pointer`}),(0,n.jsx)(r.td,{children:`Clone of the row; a stack with a count badge for a batch`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Implementation`}),(0,n.jsxs)(r.td,{children:[`DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`)`]}),(0,n.jsxs)(r.td,{children:[`DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Touch support`}),(0,n.jsx)(r.td,{children:`Long-press`}),(0,n.jsx)(r.td,{children:`Long-press`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Keyboard`}),(0,n.jsx)(r.td,{children:`Space on a grip, arrows, Space`}),(0,n.jsx)(r.td,{children:`Space on a grip, arrows, Space`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Wide rows`}),(0,n.jsx)(r.td,{children:`Pill never smears`}),(0,n.jsx)(r.td,{children:`Clone width capped (360px for vertical rows)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Used by`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`<DataGrid>`}),` table`]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),`, `,(0,n.jsx)(r.code,{children:`cardsLayout`}),`, `,(0,n.jsx)(r.code,{children:`mediaGridLayout`})]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Both share the same `,(0,n.jsx)(r.code,{children:`{ rowIds, selectedIds, orientation, onMove }`}),` shape and the same `,(0,n.jsx)(r.code,{children:`dispatchRowMove`}),` helper, and both return `,(0,n.jsx)(r.code,{children:`{ itemProps, handleProps, isDragSource, dropMark, mode }`}),`. Swap between them by changing the import. Cross-window drops (a native HTML5 feature) are not supported by either.`]}),`
`,(0,n.jsx)(r.h2,{children:`Live demos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/playground`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/playground`})})}),` — flip Row reorder on, switch between Whole row / Icon only via the sub-radio.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid`})}),` — classic table with built-in grip column.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/virtual`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/virtual`})}),` — virt table.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/media`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/media`})}),` — gallery with whole-card drag.`]}),`
`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};