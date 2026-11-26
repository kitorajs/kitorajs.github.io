import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Pagination`,description:`Three modes (paged / infinite / numbered), one unified hook, swappable UI primitives. Build any pagination pattern in the wild without forking the kit.`,order:6};function i(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Pagination`}),`
`,(0,n.jsxs)(r.p,{children:[`The kit ships `,(0,n.jsx)(r.strong,{children:`three pagination modes`}),` and `,(0,n.jsx)(r.strong,{children:`eight UI primitives`}),` that map to the patterns real products use — cursor prev/next (Linear, GitHub), cursor infinite (Twitter, Bluesky), numbered offset (WordPress admin), or your own custom UI built on the same unified hook. Pick a mode at the provider, pick a UI primitive (or write one) at the body.`]}),`
`,(0,n.jsx)(r.h2,{children:`Architecture in 60 seconds`}),`
`,(0,n.jsx)(r.p,{children:`Three layers, three swap points:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`<DataGridProvider paginationMode="...">`})}),` picks the mode. Adapter contract changes shape (cursor vs offset query params), provider tracks the relevant state.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`useDataGridPagination()`})}),` — a discriminated-union hook that exposes mode-appropriate state + actions. Every UI primitive reads from this hook. Build your own in 20 lines.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`UI primitives`}),` — drop-in components. Mount one (or none, or several). Replace any of them with custom UI without touching the data layer.`]}),`
`]}),`
`,`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"numbered\\""],[11,">"]],["  ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"]],["  ",[11,"<"],[7,"DataGridNumberedPagination"]," ",[11,"/>"],"   ",[11,"{"],[1,"/* default UI — swappable */"],[11,"}"]],[[11,"</"],[7,"DataGridProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={adapter} paginationMode="numbered">
  <DataGrid columns={cols} />
  <DataGridNumberedPagination />   {/* default UI — swappable */}
</DataGridProvider>
`})}),`
`,(0,n.jsx)(r.p,{children:`That's it. The renderer (table / virt / cards / kanban / media-grid) doesn't know which mode is on — it just reads rows from the provider.`}),`
`,(0,n.jsx)(r.h2,{children:`The three modes`}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`paged`}),` (default) — cursor prev/next`]}),`
`,(0,n.jsxs)(r.p,{children:[`Linear / GitHub shape. The adapter accepts `,(0,n.jsx)(r.code,{children:`{ first, after }`}),` (forward) or `,(0,n.jsx)(r.code,{children:`{ last, before }`}),` (backward). The provider tracks one cursor + direction at a time; each step replaces the rows array.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Data shape:`})}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"adapter"],[11,"."],[5,"load"],[11,"({"]," ",[9,"first"],[11,":"]," ",[4,"20"],[11,","]," ",[9,"after"],[11,":"]," ",[3,"'user_482'"]," ",[11,"})"]],[[1,"// → { rows, pageInfo: { hasNextPage, endCursor, hasPreviousPage, startCursor } }"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`adapter.load({ first: 20, after: 'user_482' })
// → { rows, pageInfo: { hasNextPage, endCursor, hasPreviousPage, startCursor } }
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Default UI:`}),` `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),` — Prev / Next / page-size / "1-20 of 213" range readout.`]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`When to use:`}),` stable enterprise-style "click next" UX. Resilient to inserts/deletes in the underlying data (no offset drift). Cannot answer "jump to page 17".`]}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`infinite`}),` — cursor append (bidirectional)`]}),`
`,(0,n.jsxs)(r.p,{children:[`Twitter / Bluesky / Instagram feed shape. Same cursor adapter contract as `,(0,n.jsx)(r.code,{children:`paged`}),`, but the provider tracks `,(0,n.jsx)(r.strong,{children:`two cursors independently`}),` (`,(0,n.jsx)(r.code,{children:`topCursor`}),` + `,(0,n.jsx)(r.code,{children:`bottomCursor`}),`) and appends/prepends pages into a single growing rows array.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""],[11,">"]],["  ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"up\\""]," ",[11,"/>"],"   ",[11,"{"],[1,"/* (optional) deep-link prepends */"],[11,"}"]],["  ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"]],["  ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"down\\""]," ",[11,"/>"]," ",[11,"{"],[1,"/* appends as user scrolls */"],[11,"}"]],[[11,"</"],[7,"DataGridProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={adapter} paginationMode="infinite">
  <DataGridInfiniteAnchor direction="up" />   {/* (optional) deep-link prepends */}
  <DataGrid columns={cols} />
  <DataGridInfiniteAnchor direction="down" /> {/* appends as user scrolls */}
</DataGridProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`See the dedicated `,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/infinite-scroll`,children:`Infinite scroll`}),` doc for the full mental model, the windowing-vs-infinite comparison, and the 500k-row combo example.`]}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`numbered`}),` — offset / limit`]}),`
`,(0,n.jsxs)(r.p,{children:[`Classic admin-table shape. WordPress admin / SQL-tool / per-DB-row-management UIs. The adapter accepts `,(0,n.jsx)(r.code,{children:`{ offset, limit }`}),` and the provider derives offset from the current page number. Supports jump-to-page-N because pages are addressable.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Data shape:`})}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"adapter"],[11,"."],[5,"load"],[11,"({"]," ",[9,"offset"],[11,":"]," ",[4,"320"],[11,","]," ",[9,"limit"],[11,":"]," ",[4,"20"]," ",[11,"})"]],[[1,"// → { rows, totalCount: 530, pageInfo: { … } /* still emitted but ignored */ }"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`adapter.load({ offset: 320, limit: 20 })
// → { rows, totalCount: 530, pageInfo: { … } /* still emitted but ignored */ }
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Default UI:`}),` `,(0,n.jsx)(r.code,{children:`<DataGridNumberedPagination>`}),` (ellipsis: `,(0,n.jsx)(r.code,{children:`1 2 3 … 17 18 19 [Next]`}),`) often paired with `,(0,n.jsx)(r.code,{children:`<DataGridFirstLastButtons>`}),` + `,(0,n.jsx)(r.code,{children:`<DataGridJumpToPage>`}),`.`]}),`
`,`
`,`
`,`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`When to use:`}),` admin tables, jump-to-page-N matters, total page count visible. Trade-off: offset drifts under concurrent inserts/deletes (rows shift). For stable mid-feed deep-linking use `,(0,n.jsx)(r.code,{children:`paged`}),` or `,(0,n.jsx)(r.code,{children:`infinite`}),` instead.`]}),`
`,(0,n.jsx)(r.h2,{children:`Adapter contract — additive, non-breaking`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`DataGridQuery`}),` now has optional `,(0,n.jsx)(r.code,{children:`offset`}),` + `,(0,n.jsx)(r.code,{children:`limit`}),` alongside the existing cursor fields. Adapters declare which shapes they accept:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"adapter"],[10,":"]," ",[6,"DataGridAdapter"],[11,"<"],[6,"User"],[11,">"]," ",[10,"="]," ",[11,"{"]],["  ",[5,"load"],[11,":"]," ",[11,"("],[12,"q"],[11,")"]," ",[2,"=>"]," ",[5,"fetch"],[11,"("],[10,"..."],[11,"),"]],["  ",[9,"pagination"],[11,":"]," ",[11,"{"]," ",[9,"cursor"],[11,":"]," ",[4,"true"],[11,","]," ",[9,"offset"],[11,":"]," ",[4,"true"]," ",[11,"},"],"  ",[1,"// ← declare here"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const adapter: DataGridAdapter<User> = {
  load: (q) => fetch(...),
  pagination: { cursor: true, offset: true },  // ← declare here
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Defaults when omitted: `,(0,n.jsx)(r.code,{children:`{ cursor: true, offset: false }`}),` — every pre-existing adapter keeps working without changes.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`inspectCapabilities(adapter)`}),` returns `,(0,n.jsx)(r.code,{children:`{ cursorPagination, offsetPagination, … }`}),`. The provider raises a `,(0,n.jsx)(r.strong,{children:`named error`}),` at mount time if `,(0,n.jsx)(r.code,{children:`paginationMode`}),` doesn't match what the adapter supports — no silent "rows never load" bugs:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":'[["[DataGridProvider] paginationMode=\\"numbered\\" requires the adapter to declare"],["`pagination: { offset: true }`. The current adapter only supports cursor"],["pagination (first/after/last/before). Either switch to paginationMode=\\"paged\\" /"],["\\"infinite\\", or add offset/limit support to the adapter\'s load() method and set"],["pagination.offset to true."]]',"data-language":`text`,children:(0,n.jsx)(r.code,{className:`language-text`,children:`[DataGridProvider] paginationMode="numbered" requires the adapter to declare
\`pagination: { offset: true }\`. The current adapter only supports cursor
pagination (first/after/last/before). Either switch to paginationMode="paged" /
"infinite", or add offset/limit support to the adapter's load() method and set
pagination.offset to true.
`})}),`
`,(0,n.jsxs)(r.h2,{children:[`The unified hook — `,(0,n.jsx)(r.code,{children:`useDataGridPagination()`})]}),`
`,(0,n.jsxs)(r.p,{children:[`One hook abstracts every mode. Branch type-safely on `,(0,n.jsx)(r.code,{children:`.mode`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"p"]," ",[10,"="]," ",[5,"useDataGridPagination"],[11,"()"]],[],[[2,"if"]," ",[11,"("],[12,"p"],[11,"."],[9,"mode"]," ",[10,"==="]," ",[3,"'paged'"],[11,")"]," ",[11,"{"]],["  ",[12,"p"],[11,"."],[5,"goNext"],[11,"()"]],[[11,"  "],[1,"// p.hasNext / p.hasPrev / p.pageInfo / p.totalCount"]],[[11,"}"]],[[2,"if"]," ",[11,"("],[12,"p"],[11,"."],[9,"mode"]," ",[10,"==="]," ",[3,"'infinite'"],[11,")"]," ",[11,"{"]],["  ",[12,"p"],[11,"."],[5,"loadMore"],[11,"("],[3,"'down'"],[11,")"]],[[11,"  "],[1,"// p.hasMore / p.loadingMore"]],[[11,"}"]],[[2,"if"]," ",[11,"("],[12,"p"],[11,"."],[9,"mode"]," ",[10,"==="]," ",[3,"'numbered'"],[11,")"]," ",[11,"{"]],["  ",[12,"p"],[11,"."],[5,"goPage"],[11,"("],[4,"7"],[11,")"]],[[11,"  "],[1,"// p.page / p.totalPages / p.goFirst / p.goLast / p.goPrev / p.goNext"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const p = useDataGridPagination()

if (p.mode === 'paged') {
  p.goNext()
  // p.hasNext / p.hasPrev / p.pageInfo / p.totalCount
}
if (p.mode === 'infinite') {
  p.loadMore('down')
  // p.hasMore / p.loadingMore
}
if (p.mode === 'numbered') {
  p.goPage(7)
  // p.page / p.totalPages / p.goFirst / p.goLast / p.goPrev / p.goNext
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Why this matters:`}),` every default UI primitive in the kit is a thin wrapper over this hook (40-90 lines each). Replace any of them with your own UI without re-implementing the state machine.`]}),`
`,(0,n.jsx)(r.p,{children:`Example — a fully custom numbered paginator in 25 lines:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"MinimalNumberedPagination"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"p"]," ",[10,"="]," ",[5,"useDataGridPagination"],[11,"()"]],["  ",[2,"if"]," ",[11,"("],[12,"p"],[11,"."],[9,"mode"]," ",[10,"!=="]," ",[3,"'numbered'"],[11,")"]," ",[2,"return"]," ",[4,"null"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"flex gap-1\\""],[11,">"]],["      ",[11,"<"],[7,"button"]," ",[8,"disabled"],[10,"="],[11,"{"],[10,"!"],[12,"p"],[11,"."],[9,"hasPrev"],[11,"}"]," ",[8,"onClick"],[10,"="],[11,"{"],[12,"p"],[11,"."],[9,"goPrev"],[11,"}>"],"‹",[11,"</"],[7,"button"],[11,">"]],["      ",[11,"{"],[12,"Array"],[11,"."],[5,"from"],[11,"({"]," ",[9,"length"],[11,":"]," ",[12,"p"],[11,"."],[9,"totalPages"]," ",[11,"},"]," ",[11,"("],[12,"_"],[11,","]," ",[12,"i"],[11,")"]," ",[2,"=>"]," ",[12,"i"]," ",[10,"+"]," ",[4,"1"],[11,")."],[5,"map"],[11,"(("],[12,"n"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["        ",[11,"<"],[7,"button"]],["          ",[8,"key"],[10,"="],[11,"{"],[12,"n"],[11,"}"]],["          ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[12,"p"],[11,"."],[5,"goPage"],[11,"("],[12,"n"],[11,")}"]],["          ",[8,"aria-current"],[10,"="],[11,"{"],[12,"n"]," ",[10,"==="]," ",[12,"p"],[11,"."],[9,"page"]," ",[10,"?"]," ",[3,"'page'"]," ",[10,":"]," ",[4,"undefined"],[11,"}"]],["          ",[8,"style"],[10,"="],[11,"{{"]," ",[9,"fontWeight"],[11,":"]," ",[12,"n"]," ",[10,"==="]," ",[12,"p"],[11,"."],[9,"page"]," ",[10,"?"]," ",[3,"'bold'"]," ",[10,":"]," ",[3,"'normal'"]," ",[11,"}}"]],["        ",[11,">"]],["          ",[11,"{"],[12,"n"],[11,"}"]],["        ",[11,"</"],[7,"button"],[11,">"]],["      ",[11,"))}"]],["      ",[11,"<"],[7,"button"]," ",[8,"disabled"],[10,"="],[11,"{"],[10,"!"],[12,"p"],[11,"."],[9,"hasNext"],[11,"}"]," ",[8,"onClick"],[10,"="],[11,"{"],[12,"p"],[11,"."],[9,"goNext"],[11,"}>"],"›",[11,"</"],[7,"button"],[11,">"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function MinimalNumberedPagination() {
  const p = useDataGridPagination()
  if (p.mode !== 'numbered') return null
  return (
    <div className="flex gap-1">
      <button disabled={!p.hasPrev} onClick={p.goPrev}>‹</button>
      {Array.from({ length: p.totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => p.goPage(n)}
          aria-current={n === p.page ? 'page' : undefined}
          style={{ fontWeight: n === p.page ? 'bold' : 'normal' }}
        >
          {n}
        </button>
      ))}
      <button disabled={!p.hasNext} onClick={p.goNext}>›</button>
    </div>
  )
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`UI primitive matrix`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Primitive`}),(0,n.jsx)(r.th,{children:`Mode`}),(0,n.jsx)(r.th,{children:`What it renders`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridPagination>`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`paged`})}),(0,n.jsx)(r.td,{children:`Default — Prev / Next / page-size / range readout`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor direction="up | down">`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`infinite`})}),(0,n.jsx)(r.td,{children:`Default — IntersectionObserver sentinel auto-fetches`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridLoadMoreButton direction="up | down">`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`infinite`})}),(0,n.jsx)(r.td,{children:`Manual variant — button user clicks, no auto-fire`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridNumberedPagination>`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`numbered`})}),(0,n.jsxs)(r.td,{children:[`Default — ellipsis chips `,(0,n.jsx)(r.code,{children:`1 2 3 … 17 [Next]`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridJumpToPage>`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`numbered`})}),(0,n.jsxs)(r.td,{children:[`Inline `,(0,n.jsx)(r.code,{children:`Go to page __`}),` input, clamped to the last page (ui `,(0,n.jsx)(r.code,{children:`PaginationJumpToPage`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridFirstLastButtons show="first | last | both">`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`paged`}),` | `,(0,n.jsx)(r.code,{children:`numbered`})]}),(0,n.jsx)(r.td,{children:`⏮ ⏭ jump buttons`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridPageSizeSelect>`})}),(0,n.jsx)(r.td,{children:`any`}),(0,n.jsxs)(r.td,{children:[`Mode-agnostic "Per page: N" select (ui `,(0,n.jsx)(r.code,{children:`PaginationPageSize`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridPaginationStatus>`})}),(0,n.jsx)(r.td,{children:`any`}),(0,n.jsx)(r.td,{children:`Mode-aware status readout — "Showing 21–40 of 213" / "Page 3 of 27" / "Loaded 90 of 800"`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`<DataGridLiveTail>`})}),(0,n.jsx)(r.td,{children:`any`}),(0,n.jsx)(r.td,{children:`Sticky "N new ↓" badge + auto-scroll-to-bottom + pause-on-hover`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`defineDateBucketColumn()`}),` + `,(0,n.jsx)(r.code,{children:`<DataGridDateBucketActivator>`})]}),(0,n.jsx)(r.td,{children:`any`}),(0,n.jsx)(r.td,{children:`Slack-style "Today" / "Yesterday" inline section separators`})]})]})]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsxs)(r.p,{children:[`Mount one or many; mix-and-match across modes. Each is null in irrelevant modes — safe to mount unconditionally in a layout that supports multiple pagination modes (see the `,(0,n.jsx)(r.a,{href:`/kits/datagrid/playground`,children:`playground`}),` for live mode-flipping).`]}),`
`,(0,n.jsx)(r.h2,{children:`Recipes`}),`
`,(0,n.jsx)(r.h3,{children:`Numbered with all the trimmings`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"numbered\\""],[11,">"]],["  ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"]],[],["  ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"flex items-center justify-between\\""],[11,">"]],["    ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"flex items-center gap-2\\""],[11,">"]],["      ",[11,"<"],[7,"DataGridFirstLastButtons"]," ",[8,"show"],[10,"="],[3,"\\"first\\""]," ",[11,"/>"]],["      ",[11,"<"],[7,"DataGridNumberedPagination"]," ",[11,"/>"]],["      ",[11,"<"],[7,"DataGridFirstLastButtons"]," ",[8,"show"],[10,"="],[3,"\\"last\\""]," ",[11,"/>"]],["    ",[11,"</"],[7,"div"],[11,">"]],["    ",[11,"<"],[7,"DataGridJumpToPage"]," ",[11,"/>"]],["  ",[11,"</"],[7,"div"],[11,">"]],[[11,"</"],[7,"DataGridProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={adapter} paginationMode="numbered">
  <DataGrid columns={cols} />

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <DataGridFirstLastButtons show="first" />
      <DataGridNumberedPagination />
      <DataGridFirstLastButtons show="last" />
    </div>
    <DataGridJumpToPage />
  </div>
</DataGridProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Live at `,(0,n.jsx)(r.a,{href:`/kits/datagrid/numbered`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/numbered`})}),`.`]}),`
`,(0,n.jsx)(r.h3,{children:`Manual "Load more" infinite`}),`
`,(0,n.jsx)(r.p,{children:`When auto-scroll fetching is undesired (slow networks, "I want explicit control" users):`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""],[11,">"]],["  ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"]],["  ",[11,"<"],[7,"DataGridLoadMoreButton"]," ",[8,"direction"],[10,"="],[3,"\\"down\\""]," ",[11,"/>"],"   ",[11,"{"],[1,"/* instead of <DataGridInfiniteAnchor> */"],[11,"}"]],[[11,"</"],[7,"DataGridProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider adapter={adapter} paginationMode="infinite">
  <DataGrid columns={cols} />
  <DataGridLoadMoreButton direction="down" />   {/* instead of <DataGridInfiniteAnchor> */}
</DataGridProvider>
`})}),`
`,(0,n.jsx)(r.h3,{children:`Cursor pagination + show "page 3 of 27"`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`paged`}),` mode tracks one cursor at a time; it does `,(0,n.jsx)(r.em,{children:`not`}),` know the current page number. If you want a "page N of M" readout, either:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Adapter returns `,(0,n.jsx)(r.code,{children:`totalCount`}),` and you compute pages locally based on `,(0,n.jsx)(r.code,{children:`pageSize`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Or switch to `,(0,n.jsx)(r.code,{children:`numbered`}),` mode (built-in `,(0,n.jsx)(r.code,{children:`page`}),` / `,(0,n.jsx)(r.code,{children:`totalPages`}),`)`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`Capability-driven UI`}),`
`,(0,n.jsx)(r.p,{children:`For tools that ship multiple modes and let users pick at runtime, read both adapter capabilities and pick a default:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"caps"]," ",[10,"="]," ",[5,"inspectCapabilities"],[11,"("],[12,"adapter"],[11,")"]],[[2,"const"]," ",[12,"defaultMode"]," ",[10,"="]],["  ",[12,"caps"],[11,"."],[9,"offsetPagination"]," ",[10,"&&"]," ",[10,"!"],[12,"caps"],[11,"."],[9,"cursorPagination"]," ",[10,"?"]," ",[3,"'numbered'"]],["  ",[10,":"]," ",[12,"caps"],[11,"."],[9,"cursorPagination"]," ",[10,"?"]," ",[3,"'paged'"]],["  ",[10,":"]," ",[3,"'paged'"],"  ",[1,"// will throw at mount; surface a better error first"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const caps = inspectCapabilities(adapter)
const defaultMode =
  caps.offsetPagination && !caps.cursorPagination ? 'numbered'
  : caps.cursorPagination ? 'paged'
  : 'paged'  // will throw at mount; surface a better error first
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.a,{href:`/kits/datagrid/playground`,children:`playground`}),` demonstrates this dynamic — flipping `,(0,n.jsx)(r.code,{children:`paginationMode`}),` in real time without remounting the data layer.`]}),`
`,(0,n.jsx)(r.h2,{children:`Overlay primitives — work on top of any mode`}),`
`,(0,n.jsxs)(r.p,{children:[`Two primitives don't pick a mode — they sit `,(0,n.jsx)(r.em,{children:`on top of`}),` whichever mode you've chosen and add a behavior. Both work in `,(0,n.jsx)(r.code,{children:`paged`}),`, `,(0,n.jsx)(r.code,{children:`infinite`}),`, and `,(0,n.jsx)(r.code,{children:`numbered`}),` modes without conditionals.`]}),`
`,(0,n.jsx)(r.h3,{children:`Date-bucket separators — Slack / Discord shape`}),`
`,(0,n.jsx)(r.p,{children:`Render inline section headers between rows that fall into different "buckets" (typically calendar days). Shipped as two pieces:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`defineDateBucketColumn<TRow>({ bucketKey, format })`})}),` — a column factory. The returned column has no body cell; it carries `,(0,n.jsx)(r.code,{children:`meta.groupValue`}),` (your bucket key extractor) + `,(0,n.jsx)(r.code,{children:`meta.groupLabel`}),` (your formatter) that the existing groupBy infra renders as section headers.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`<DataGridDateBucketActivator />`})}),` — an imperative activator. Mount it inside the provider tree to set `,(0,n.jsx)(r.code,{children:`groupByColumnId`}),` to the bucket column on mount, restore on unmount. Skip it if you want manual control via `,(0,n.jsx)(r.code,{children:`<DataGridGroupBy>`}),` or `,(0,n.jsx)(r.code,{children:`defaultGroupByColumnId`}),`.`]}),`
`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"defineDateBucketColumn"],[11,","]],["  ",[12,"formatRelativeDay"],[11,","]],["  ",[12,"startOfDayKey"],[11,","]],["  ",[12,"DataGridDateBucketActivator"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"dateBucket"]," ",[10,"="]," ",[5,"defineDateBucketColumn"],[11,"<"],[6,"LogRow"],[11,">({"]],["  ",[5,"bucketKey"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[5,"startOfDayKey"],[11,"("],[2,"new"]," ",[5,"Date"],[11,"("],[12,"r"],[11,"."],[9,"createdAt"],[11,")),"]],["  ",[5,"format"],[11,":"]," ",[11,"("],[12,"key"],[11,")"]," ",[2,"=>"]," ",[5,"formatRelativeDay"],[11,"("],[2,"new"]," ",[5,"Date"],[11,"("],[12,"key"],[11,")),"],"  ",[1,"// \\"Today\\" / \\"Yesterday\\" / \\"Mar 14\\""]],[[11,"})"]],[],[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"LogRow"],[11,">()(["],[12,"dateBucket"],[11,","]," ",[10,"..."],[12,"regularCols"],[11,"])"]],[],[[11,"<"],[7,"DataGridUIProvider"]," ",[8,"defaultGroupByColumnId"],[10,"="],[3,"\\"date-bucket\\""],[11,">"]],["  ",[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}>"]],["    ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[11,"/>"]],["    ",[11,"<"],[7,"DataGridDateBucketActivator"]," ",[11,"/>"],"   ",[11,"{"],[1,"/* optional — enforces the grouping */"],[11,"}"]],["  ",[11,"</"],[7,"DataGridProvider"],[11,">"]],[[11,"</"],[7,"DataGridUIProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  defineDateBucketColumn,
  formatRelativeDay,
  startOfDayKey,
  DataGridDateBucketActivator,
} from '@kitora/datagrid'

const dateBucket = defineDateBucketColumn<LogRow>({
  bucketKey: (r) => startOfDayKey(new Date(r.createdAt)),
  format: (key) => formatRelativeDay(new Date(key)),  // "Today" / "Yesterday" / "Mar 14"
})

const columns = defineColumns<LogRow>()([dateBucket, ...regularCols])

<DataGridUIProvider defaultGroupByColumnId="date-bucket">
  <DataGridProvider adapter={adapter}>
    <DataGrid columns={columns} />
    <DataGridDateBucketActivator />   {/* optional — enforces the grouping */}
  </DataGridProvider>
</DataGridUIProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The exported helpers `,(0,n.jsx)(r.code,{children:`startOfDayKey(date)`}),` + `,(0,n.jsx)(r.code,{children:`formatRelativeDay(date, now?)`}),` cover the common Slack-style label set. For custom buckets (per-month, per-hour, by-user), pass your own functions to `,(0,n.jsx)(r.code,{children:`bucketKey`}),` + `,(0,n.jsx)(r.code,{children:`format`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Why piggy-back on groupBy instead of a custom render path? Because the same primitive then automatically works in cards / kanban / media-grid layouts that already read `,(0,n.jsx)(r.code,{children:`groupByColumnId`}),`. Zero per-layout duplication.`]}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`<DataGridLiveTail>`}),` — auto-scroll to newest`]}),`
`,(0,n.jsx)(r.p,{children:`For tail -f / Datadog Logs / Slack-newest-message shape — sticky "N new ↓" badge appears when new rows arrived but the user has scrolled away, click to catch up.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"LogStream"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"scrollRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"HTMLDivElement"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"relative\\""],[11,">"]],["      ",[11,"<"],[7,"div"]," ",[8,"ref"],[10,"="],[11,"{"],[12,"scrollRef"],[11,"}"]," ",[8,"className"],[10,"="],[3,"\\"max-h-[520px] overflow-y-auto\\""],[11,">"]],["        ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"cols"],[11,"}"]," ",[11,"/>"]],["      ",[11,"</"],[7,"div"],[11,">"]],["      ",[11,"<"],[7,"DataGridLiveTail"]],["        ",[8,"scrollContainerRef"],[10,"="],[11,"{"],[12,"scrollRef"],[11,"}"]],["        ",[8,"pauseWhen"],[10,"="],[11,"{["],[3,"'hover'"],[11,","]," ",[3,"'manualScroll'"],[11,"]}"]],["        ",[8,"stickThreshold"],[10,"="],[11,"{"],[4,"64"],[11,"}"]],["      ",[11,"/>"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function LogStream() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  return (
    <div className="relative">
      <div ref={scrollRef} className="max-h-[520px] overflow-y-auto">
        <DataGrid columns={cols} />
      </div>
      <DataGridLiveTail
        scrollContainerRef={scrollRef}
        pauseWhen={['hover', 'manualScroll']}
        stickThreshold={64}
      />
    </div>
  )
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`State machine: `,(0,n.jsx)(r.code,{children:`following ⇄ paused`}),`. While following, new rows trigger an auto-scroll to bottom. Pointer hover or manual scroll-up flips to paused; the badge counts new arrivals since pause. Click → resume + jump to bottom. Configurable `,(0,n.jsx)(r.code,{children:`pauseWhen`}),` (subset of `,(0,n.jsx)(r.code,{children:`'hover'`}),` and `,(0,n.jsx)(r.code,{children:`'manualScroll'`}),`) lets you disable a transition source — useful for kiosk-mode log viewers that should never pause.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Pairs naturally with `,(0,n.jsx)(r.code,{children:`adapter.subscribe`}),` (see below). Without subscribe, it still fires on row-count deltas from `,(0,n.jsx)(r.code,{children:`loadMore`}),`, manual `,(0,n.jsx)(r.code,{children:`refresh()`}),`, or any other source that grows the rows array.`]}),`
`,(0,n.jsxs)(r.h3,{children:[(0,n.jsx)(r.code,{children:`adapter.subscribe`}),` — realtime push channel`]}),`
`,(0,n.jsx)(r.p,{children:`Optional adapter method that opens a server-pushed event stream. The provider wires it on mount:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"adapter"],[11,"."],[9,"subscribe"],[10,"?"],[11,"({"]],["  ",[5,"onUpsert"],[11,":"]," ",[11,"("],[12,"row"],[11,")"]," ",[2,"=>"]," ",[11,"{"]," ",[1,"/* row id matches an existing row → replace; else append */"]," ",[11,"},"]],["  ",[5,"onRemove"],[11,":"]," ",[11,"("],[12,"rowId"],[11,")"]," ",[2,"=>"]," ",[11,"{"]," ",[1,"/* drop from rows */"]," ",[11,"},"]],[[11,"})"]," ",[2,"=>"]," ",[11,"()"]," ",[2,"=>"]," ",[2,"void"],"  ",[1,"// unsubscribe — called on unmount + adapter swap"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`adapter.subscribe?({
  onUpsert: (row) => { /* row id matches an existing row → replace; else append */ },
  onRemove: (rowId) => { /* drop from rows */ },
}) => () => void  // unsubscribe — called on unmount + adapter swap
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Capability-detected via `,(0,n.jsx)(r.code,{children:`inspectCapabilities(adapter).subscribe`}),`. Implementations:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`WebSocket / SSE`}),` — open the connection in `,(0,n.jsx)(r.code,{children:`subscribe()`}),`, return a closer.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Polling`}),` — `,(0,n.jsx)(r.code,{children:`setInterval`}),` that fetches deltas + invokes the handlers; clear on return.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Demo / test`}),` — the reference `,(0,n.jsx)(r.code,{children:`createInMemoryAdapter`}),` exposes `,(0,n.jsx)(r.code,{children:`push(row)`}),` + `,(0,n.jsx)(r.code,{children:`remove(rowId)`}),` methods. Calling them fans events out to every subscriber; the `,(0,n.jsx)(r.code,{children:`/kits/datagrid/log-stream`}),` demo wires a 1.5s interval that pushes synthetic log rows.`]}),`
`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createInMemoryAdapter"],[11,"<"],[6,"LogRow"],[11,">({"]," ",[9,"initial"],[11,":"]," ",[12,"rows"]," ",[11,"})"]],[],[[1,"// Later, from anywhere:"]],[[5,"setInterval"],[11,"(()"]," ",[2,"=>"]," ",[12,"adapter"],[11,"."],[5,"push"],[11,"("],[5,"makeLogRow"],[11,"()),"]," ",[4,"1500"],[11,")"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const adapter = createInMemoryAdapter<LogRow>({ initial: rows })

// Later, from anywhere:
setInterval(() => adapter.push(makeLogRow()), 1500)
`})}),`
`,(0,n.jsx)(r.h2,{children:`All patterns in the wild — status`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Pattern`}),(0,n.jsx)(r.th,{children:`Real-world example`}),(0,n.jsx)(r.th,{children:`Status`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Cursor prev/next`}),(0,n.jsx)(r.td,{children:`Linear, GitHub`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`paged`}),` mode`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Cursor infinite (auto)`}),(0,n.jsx)(r.td,{children:`Twitter, Instagram`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`infinite`}),` mode + `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Cursor infinite (manual)`}),(0,n.jsx)(r.td,{children:`Pinterest`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`infinite`}),` mode + `,(0,n.jsx)(r.code,{children:`<DataGridLoadMoreButton>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Cursor bidirectional`}),(0,n.jsx)(r.td,{children:`Bluesky deep-link`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`infinite`}),` mode, both `,(0,n.jsx)(r.code,{children:`direction="up"`}),` + `,(0,n.jsx)(r.code,{children:`"down"`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Numbered (offset)`}),(0,n.jsx)(r.td,{children:`WordPress admin`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`numbered`}),` mode`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Jump-to-page input`}),(0,n.jsx)(r.td,{children:`Old forums`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`<DataGridJumpToPage>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`First / Last buttons`}),(0,n.jsx)(r.td,{children:`Stripe Dashboard`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`<DataGridFirstLastButtons>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[`Keyset / `,(0,n.jsx)(r.code,{children:`search_after`})]}),(0,n.jsx)(r.td,{children:`Elasticsearch, MongoDB`}),(0,n.jsx)(r.td,{children:`✅ supported as cursor (server picks encoding)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Time-bucket section headers`}),(0,n.jsx)(r.td,{children:`Slack, Discord`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`defineDateBucketColumn()`}),` + `,(0,n.jsx)(r.code,{children:`<DataGridDateBucketActivator>`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Live tail / streaming`}),(0,n.jsx)(r.td,{children:`tail -f, Datadog Logs`}),(0,n.jsxs)(r.td,{children:[`✅ `,(0,n.jsx)(r.code,{children:`<DataGridLiveTail>`}),` + `,(0,n.jsx)(r.code,{children:`adapter.subscribe`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Hybrid (cursor + jump-to-anchor)`}),(0,n.jsx)(r.td,{children:`Bluesky "jump to date"`}),(0,n.jsx)(r.td,{children:`🟡 planned`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Hash / random-sampling feeds`}),(0,n.jsx)(r.td,{children:`TikTok For You`}),(0,n.jsx)(r.td,{children:`🟡 placeholder (recommendation engine — out of kit scope)`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`The full live ledger is at `,(0,n.jsx)(r.a,{href:`/kits/datagrid/features`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/features`})}),` — filter the table by "Pagination" to see every entry.`]}),`
`,(0,n.jsx)(r.h2,{children:`Live demos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:`/kits/datagrid/playground`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/playground`})})}),` — every pagination mode + every primitive in one place. Flip modes, swap UIs, change layouts side-by-side.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid`})}),` — classic `,(0,n.jsx)(r.code,{children:`paged`}),` cursor demo`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/infinite`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/infinite`})}),` — `,(0,n.jsx)(r.code,{children:`infinite`}),` mode table`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/media`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/media`})}),` — `,(0,n.jsx)(r.code,{children:`infinite`}),` mode gallery`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/numbered`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/numbered`})}),` — `,(0,n.jsx)(r.code,{children:`numbered`}),` mode admin table`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/log-stream`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/log-stream`})}),` — date-bucket separators + live tail + `,(0,n.jsx)(r.code,{children:`adapter.subscribe`})]}),`
`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};