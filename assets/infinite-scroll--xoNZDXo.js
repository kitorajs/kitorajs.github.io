import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Infinite scroll`,description:"Append cursor pages on scroll — bidirectional, layout-agnostic. Composes with windowing (`<DataGridVirtual>`).",order:8};function i(e){let r={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Infinite scroll`}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Looking for the big picture?`}),` This is the deep-dive on `,(0,n.jsx)(r.em,{children:`infinite`}),` specifically. For the overview of all three modes (`,(0,n.jsx)(r.code,{children:`paged`}),` / `,(0,n.jsx)(r.code,{children:`infinite`}),` / `,(0,n.jsx)(r.code,{children:`numbered`}),`), the unified hook, and every UI primitive, start at the `,(0,n.jsxs)(r.a,{href:`/kits/datagrid/docs/pagination`,children:[(0,n.jsx)(r.strong,{children:`Pagination`}),` doc`]}),` instead.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Flip the data-layer provider to `,(0,n.jsx)(r.code,{children:`paginationMode="infinite"`}),` and mount one (or two) `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`}),` sentinels. Cursor pages append (or prepend) into the same `,(0,n.jsx)(r.code,{children:`rows`}),` array that drives every layout. Selection, filters, sort, search, shortcuts, bulk actions — everything keeps working because nothing else in the kit knows about pagination mode.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`30-second mount`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridUIProvider"]," ",[8,"defaultPageSize"],[10,"="],[11,"{"],[4,"30"],[11,"}>"]],["  ",[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""],[11,">"]],["    ",[11,"<"],[7,"DataGridFilterBar"]," ",[11,"/>"]],[],["    ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"up\\""]," ",[11,"/>"]],["    ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[11,"/>"]],["    ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"down\\""]," ",[11,"/>"]],["  ",[11,"</"],[7,"DataGridProvider"],[11,">"]],[[11,"</"],[7,"DataGridUIProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridUIProvider defaultPageSize={30}>
  <DataGridProvider adapter={adapter} paginationMode="infinite">
    <DataGridFilterBar />

    <DataGridInfiniteAnchor direction="up" />
    <DataGrid columns={columns} />
    <DataGridInfiniteAnchor direction="down" />
  </DataGridProvider>
</DataGridUIProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`That's it. Don't render `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),` — there's no "page N" to step through.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`How it works`}),`
`,(0,n.jsx)(r.p,{children:`Three pieces — one provider mode, one hook, one UI primitive.`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`<DataGridProvider paginationMode="infinite">`})}),` — overrides `,(0,n.jsx)(r.code,{children:`refresh()`}),` to always fetch the first cursor page on filter / sort / search change. Tracks `,(0,n.jsx)(r.code,{children:`topCursor`}),` + `,(0,n.jsx)(r.code,{children:`bottomCursor`}),` and exposes a `,(0,n.jsx)(r.code,{children:`loadMore(direction)`}),` method on the context.`]}),`
`]}),`
`,`
`,(0,n.jsxs)(r.ol,{start:`2`,children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`useDataGridInfiniteScrollSentinel({ enabled, onTrigger, rootRef?, rootMargin? })`})}),` — pure `,(0,n.jsx)(r.code,{children:`IntersectionObserver`}),` wrapper. Returns a `,(0,n.jsx)(r.code,{children:`ref`}),` you attach to any element. Fires `,(0,n.jsx)(r.code,{children:`onTrigger`}),` whenever the element enters the root's intersection rectangle.`]}),`
`]}),`
`,`
`,(0,n.jsxs)(r.ol,{start:`3`,children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor direction="up | down" />`})}),` — drop-in component combining the two. Reads `,(0,n.jsx)(r.code,{children:`useDataGrid().infinite.hasMore[direction]`}),` to decide whether to attach the observer. Renders a small "Loading more…" spinner while a page is in flight; renders "End of list" once `,(0,n.jsx)(r.code,{children:`hasMore[direction]`}),` flips false.`]}),`
`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Bidirectional`}),`
`,(0,n.jsxs)(r.p,{children:[`Both `,(0,n.jsx)(r.code,{children:`direction="up"`}),` and `,(0,n.jsx)(r.code,{children:`direction="down"`}),` are supported. In a typical "land on page 1 and scroll forward" flow, only the down anchor ever fires — `,(0,n.jsx)(r.code,{children:`hasPreviousPage`}),` starts false because nothing has been loaded before the first cursor.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The up direction matters when you `,(0,n.jsx)(r.strong,{children:`deep-link into the middle of a list`}),` (e.g. `,(0,n.jsx)(r.code,{children:`/users?cursor=u_500`}),` lands on user 500 mid-feed). The first load returns rows centered on that cursor and the adapter sets `,(0,n.jsx)(r.code,{children:`hasPreviousPage: true`}),`. Scrolling up fires the up sentinel; the provider issues a backward cursor query (`,(0,n.jsx)(r.code,{children:`{ last: pageSize, before: topCursor }`}),`) and `,(0,n.jsx)(r.strong,{children:`prepends`}),` the result.`]}),`
`,(0,n.jsx)(r.p,{children:`The provider exposes both edges separately so each direction loads independently — no coupling between up + down loads.`}),`
`,(0,n.jsx)(r.h2,{children:`Infinite scroll vs. windowing (virt rows)`}),`
`,(0,n.jsx)(r.p,{children:`These two are constantly confused — they solve different problems and stack cleanly.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Windowing`}),` (also called `,(0,n.jsx)(r.em,{children:`virtualization`}),` or `,(0,n.jsx)(r.em,{children:`virt rows`}),`) is the technique of rendering only the rows currently visible in the viewport — the "window" — and recycling DOM nodes as the user scrolls. It controls how many of the already-loaded rows are `,(0,n.jsx)(r.em,{children:`rendered to the DOM`}),`. In this kit, windowing ships as `,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),` (powered by `,(0,n.jsx)(r.code,{children:`@tanstack/react-virtual`}),`).`]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Infinite scroll`}),` controls how many rows get `,(0,n.jsx)(r.em,{children:`fetched from the server`}),`. It appends new cursor pages into the JS rows array as the user scrolls past a sentinel.`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsxs)(r.th,{children:[`Windowing (`,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),`)`]}),(0,n.jsxs)(r.th,{children:[`Infinite scroll (`,(0,n.jsx)(r.code,{children:`paginationMode="infinite"`}),`)`]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`What it controls`})}),(0,n.jsxs)(r.td,{children:[`How many rows are `,(0,n.jsx)(r.em,{children:`rendered to DOM`})]}),(0,n.jsxs)(r.td,{children:[`How many rows are `,(0,n.jsx)(r.em,{children:`fetched from server`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Solves`})}),(0,n.jsxs)(r.td,{children:[`DOM size — 100k `,(0,n.jsx)(r.code,{children:`<tr>`}),`s would melt the browser`]}),(0,n.jsx)(r.td,{children:`Network — fetching 100k rows up front is slow + wasteful`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`All rows in memory?`})}),(0,n.jsx)(r.td,{children:`Yes — all already-loaded rows live in the JS array`}),(0,n.jsx)(r.td,{children:`No — only the pages you've scrolled to are in memory`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Scroll trigger`})}),(0,n.jsx)(r.td,{children:`Recycle DOM nodes as window shifts`}),(0,n.jsx)(r.td,{children:`Sentinel hits viewport → fetch next cursor page`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Adapter calls`})}),(0,n.jsxs)(r.td,{children:[`One `,(0,n.jsx)(r.code,{children:`load()`}),` per filter / sort change`]}),(0,n.jsxs)(r.td,{children:[`Many `,(0,n.jsx)(r.code,{children:`load()`}),` calls — one per page as user scrolls`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`DOM at any moment`})}),(0,n.jsx)(r.td,{children:`~30 visible rows`}),(0,n.jsxs)(r.td,{children:[`All loaded pages (e.g. 300 rows after 10 pages) — `,(0,n.jsx)(r.em,{children:`unless`}),` you also stack windowing on top`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Lives at`})}),(0,n.jsxs)(r.td,{children:[`Layout layer (`,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),`)`]}),(0,n.jsxs)(r.td,{children:[`Provider layer (`,(0,n.jsx)(r.code,{children:`paginationMode="infinite"`}),`)`]})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`Concrete pairings:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Windowing only`}),` — adapter returns 5000 rows in one `,(0,n.jsx)(r.code,{children:`load()`}),`. JS array has 5000. DOM has ~30. Scrolling = DOM recycle. Network = one fat request.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Infinite only`}),` — adapter returns 30 per page. JS array grows: 30 → 60 → 90 → … DOM = JS array length. Scrolling = fire next fetch. Network = many small requests.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Both`}),` — adapter returns 30 per page. JS array grows: 30 → 60 → … DOM stays ~30 regardless. Scrolling does `,(0,n.jsx)(r.em,{children:`both`}),`: triggers the window shift AND triggers the next-page fetch when the sentinel hits.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`When to use which`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Server-side dataset is big`}),` (10k+ rows, paginated API) → `,(0,n.jsx)(r.strong,{children:`infinite`}),` (or just classic `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),`).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`All rows already in the client array`}),` (5k rows from one `,(0,n.jsx)(r.code,{children:`load()`}),`, 50k in a CSV import preview) → `,(0,n.jsx)(r.strong,{children:`windowing`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Both big`}),` (cursor-paginated feed AND each page is 500 rows) → `,(0,n.jsx)(r.strong,{children:`stack both`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Small list`}),` (< 200 rows total) → neither, just paged or unpaginated.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`That's why the kit puts infinite at the provider layer (data) and windowing at the layout layer (render). No overlap, no duplication, and you turn each one on independently.`}),`
`,(0,n.jsx)(r.h3,{children:`Plain-language version (no jargon)`}),`
`,(0,n.jsx)(r.p,{children:`Pretend the dataset is a library and the user is a reader.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Windowing`}),` is having only the books currently `,(0,n.jsx)(r.em,{children:`open on the table`}),` visible. The shelves still hold all the books — you just don't put every one of them on the table at once. The table is the DOM; the shelves are the JS rows array. Fixes "the table is too cluttered" (DOM bloat → slow scroll).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Infinite scroll`}),` is fetching new books `,(0,n.jsx)(r.em,{children:`from the warehouse to the shelves`}),` as the reader asks for more. The shelves don't start full — they grow over time. Fixes "the truck from the warehouse is too big" (one giant `,(0,n.jsx)(r.code,{children:`load()`}),` → slow first paint, big payload, big memory).`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`So:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Reading 5k books from a stocked library? Windowing only.`}),`
`,(0,n.jsx)(r.li,{children:`Reading from a 500k-book warehouse? Infinite scroll only — or you'll never get the first page rendered.`}),`
`,(0,n.jsx)(r.li,{children:`Both? Stack them. Infinite keeps trucks small; windowing keeps the table tidy.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`Why each alone has a ceiling`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Approach alone`}),(0,n.jsx)(r.th,{children:`Where it breaks`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Windowing only`})}),(0,n.jsxs)(r.td,{children:[`First `,(0,n.jsx)(r.code,{children:`load()`}),` still has to return `,(0,n.jsx)(r.em,{children:`all`}),` rows. Backend has to return everything (no LIMIT). 5k = fine, 50k = painful, 500k = the tab freezes for 10s on first paint.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Infinite only`})}),(0,n.jsxs)(r.td,{children:[`After 100 cursor pages of 30 rows each, the array has 3000 rows and the DOM has 3000 `,(0,n.jsx)(r.code,{children:`<tr>`}),`s. Scroll FPS tanks even though network was fine.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Both`})}),(0,n.jsx)(r.td,{children:`Network: one small page at a time. DOM: one window at a time. Scales to millions.`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Composing windowing with infinite`}),`
`,(0,n.jsxs)(r.p,{children:[`Windowing and infinite scroll are orthogonal concerns. The infinite-scroll primitive lives at the provider layer; the windowing primitive (`,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),`) lives at the layout layer. They compose without duplication:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridProvider"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""],[11,">"]],["  ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"up\\""]," ",[11,"/>"]],["  ",[11,"{"],[1,"/* DataGridVirtual reads rows from the same provider — as more pages"]],[[1,"      append, the virtualizer's range simply grows. */"],[11,"}"]],["  ",[11,"<"],[7,"DataGridVirtual"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[11,"/>"]],["  ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"down\\""]," ",[11,"/>"]],[[11,"</"],[7,"DataGridProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider paginationMode="infinite">
  <DataGridInfiniteAnchor direction="up" />
  {/* DataGridVirtual reads rows from the same provider — as more pages
      append, the virtualizer's range simply grows. */}
  <DataGridVirtual columns={columns} />
  <DataGridInfiniteAnchor direction="down" />
</DataGridProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The sentinel still needs to be in the DOM to fire. If the windowed scroll happens inside a fixed-height pane, place the down anchor `,(0,n.jsx)(r.em,{children:`inside`}),` that container's footer slot (or pass `,(0,n.jsx)(r.code,{children:`rootRef`}),` to scope the observer to that pane).`]}),`
`,(0,n.jsx)(r.h3,{children:`Full combo example — 500k-row feed`}),`
`,(0,n.jsx)(r.p,{children:`The shape that scales to millions. Network stays small (30 rows per cursor page), DOM stays small (~30 rendered), filter / sort / selection all keep working because the provider doesn't care which layout is rendering.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"DataGrid"],[11,","],"                       ",[1,"// (or DataGridVirtual — same data, different renderer)"]],["  ",[12,"DataGridVirtual"],[11,","]],["  ",[12,"DataGridFilterBar"],[11,","]],["  ",[12,"DataGridInfiniteAnchor"],[11,","]],["  ",[12,"DataGridProvider"],[11,","]],["  ",[12,"DataGridUIProvider"],[11,","]],["  ",[12,"createInMemoryAdapter"],[11,","]],["  ",[12,"defineColumns"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"User"],[11,">()(["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'name'"],[11,","],"  ",[9,"header"],[11,":"]," ",[3,"'Name'"],[11,","],"  ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'email'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Email'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"email"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'team'"],[11,","],"  ",[9,"header"],[11,":"]," ",[3,"'Team'"],[11,","],"  ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"team"]," ",[11,"},"]],[[11,"])"]],[],[[2,"export"]," ",[2,"function"]," ",[5,"MillionRowFeed"],[11,"({"]," ",[12,"adapter"]," ",[11,"})"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"DataGridUIProvider"]," ",[8,"defaultPageSize"],[10,"="],[11,"{"],[4,"30"],[11,"}>"]],["      ",[11,"{"],[1,"/* paginationMode=\\"infinite\\" → cursor pages append; classic"]],[[1,"          <DataGridPagination> is not rendered. */"],[11,"}"]],["      ",[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[8,"paginationMode"],[10,"="],[3,"\\"infinite\\""],[11,">"]],["        ",[11,"<"],[7,"DataGridFilterBar"]," ",[11,"/>"]],[],["        ",[11,"{"],[1,"/* (Optional) load the previous page if user lands mid-feed. */"],[11,"}"]],["        ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"up\\""]," ",[11,"/>"]],[],["        ",[11,"{"],[1,"/* Windowing — only ~30 rows mounted at a time regardless of"]],[[1,"            how many cursor pages the provider has appended. */"],[11,"}"]],["        ",[11,"<"],[7,"DataGridVirtual"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[8,"estimateRowHeight"],[10,"="],[11,"{"],[4,"44"],[11,"}"]," ",[11,"/>"]],[],["        ",[11,"{"],[1,"/* Sentinel below the windowed list — fires loadMore('down'). */"],[11,"}"]],["        ",[11,"<"],[7,"DataGridInfiniteAnchor"]," ",[8,"direction"],[10,"="],[3,"\\"down\\""]," ",[11,"/>"]],["      ",[11,"</"],[7,"DataGridProvider"],[11,">"]],["    ",[11,"</"],[7,"DataGridUIProvider"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  DataGrid,                       // (or DataGridVirtual — same data, different renderer)
  DataGridVirtual,
  DataGridFilterBar,
  DataGridInfiniteAnchor,
  DataGridProvider,
  DataGridUIProvider,
  createInMemoryAdapter,
  defineColumns,
} from '@kitora/datagrid'

const columns = defineColumns<User>()([
  { id: 'name',  header: 'Name',  cell: (r) => r.name },
  { id: 'email', header: 'Email', cell: (r) => r.email },
  { id: 'team',  header: 'Team',  cell: (r) => r.team },
])

export function MillionRowFeed({ adapter }) {
  return (
    <DataGridUIProvider defaultPageSize={30}>
      {/* paginationMode="infinite" → cursor pages append; classic
          <DataGridPagination> is not rendered. */}
      <DataGridProvider adapter={adapter} paginationMode="infinite">
        <DataGridFilterBar />

        {/* (Optional) load the previous page if user lands mid-feed. */}
        <DataGridInfiniteAnchor direction="up" />

        {/* Windowing — only ~30 rows mounted at a time regardless of
            how many cursor pages the provider has appended. */}
        <DataGridVirtual columns={columns} estimateRowHeight={44} />

        {/* Sentinel below the windowed list — fires loadMore('down'). */}
        <DataGridInfiniteAnchor direction="down" />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`What happens at runtime:`})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`First mount → adapter returns 30 rows. Virt renders the ~30 that fit on screen.`}),`
`,(0,n.jsx)(r.li,{children:`User scrolls down → virt recycles DOM nodes inside the existing window. Eventually the bottom sentinel enters the viewport.`}),`
`,(0,n.jsxs)(r.li,{children:[`Sentinel fires → provider calls `,(0,n.jsx)(r.code,{children:`adapter.load({ first: 30, after: bottomCursor })`}),` → appends 30 more rows.`]}),`
`,(0,n.jsx)(r.li,{children:`Virt's range expands automatically; still only ~30 in DOM. Sentinel moves further down.`}),`
`,(0,n.jsx)(r.li,{children:`User keeps scrolling → repeat.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`At 500k rows total, the JS array eventually holds whatever portion the user scrolled to (say 1k–5k); the DOM stays at ~30. Network is ~17 small requests for the first 500 rows, none of them blocking the first paint.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Tips:`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Pick `,(0,n.jsx)(r.code,{children:`defaultPageSize`}),` to slightly `,(0,n.jsx)(r.em,{children:`exceed`}),` one viewport's worth of rows. Too small → constant network chatter. Too big → wasted bytes for users who only scroll one page.`]}),`
`,(0,n.jsxs)(r.li,{children:[`If the virt scroller sits inside a fixed-height pane (not the body), pass `,(0,n.jsx)(r.code,{children:`rootRef`}),` to `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`}),` so the IntersectionObserver scopes to that container.`]}),`
`,(0,n.jsx)(r.li,{children:`Selection / filters / sort all keep working unchanged — neither windowing nor infinite scroll touches that state.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Customizing the anchor`}),`
`,(0,n.jsx)(r.p,{children:`Replace the spinner / end-state via children:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridInfiniteAnchor"]],["  ",[8,"direction"],[10,"="],[3,"\\"down\\""]],["  ",[8,"endSlot"],[10,"="],[11,"{<"],[7,"span"],[11,">"],"You've reached the end of the feed.",[11,"</"],[7,"span"],[11,">}"]],[[11,">"]],["  ",[11,"<"],[7,"MyCustomSpinner"]," ",[11,"/>"]],[[11,"</"],[7,"DataGridInfiniteAnchor"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridInfiniteAnchor
  direction="down"
  endSlot={<span>You've reached the end of the feed.</span>}
>
  <MyCustomSpinner />
</DataGridInfiniteAnchor>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Or skip `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`}),` entirely and call the hook directly to build a "Load more" button:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"LoadMoreButton"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"infinite"],[11,","]," ",[12,"paginationMode"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGrid"],[11,"()"]],["  ",[2,"if"]," ",[11,"("],[12,"paginationMode"]," ",[10,"!=="]," ",[3,"'infinite'"]," ",[10,"||"]," ",[10,"!"],[12,"infinite"],[11,"."],[9,"hasMore"],[11,"."],[9,"down"],[11,")"]," ",[2,"return"]," ",[4,"null"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"button"]," ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[12,"infinite"],[11,"."],[5,"loadMore"],[11,"("],[3,"'down'"],[11,")}>"]],["      ",[11,"{"],[12,"infinite"],[11,"."],[9,"loadingMore"],[11,"."],[9,"down"]," ",[10,"?"]," ",[3,"'Loading…'"]," ",[10,":"]," ",[3,"'Load more'"],[11,"}"]],["    ",[11,"</"],[7,"button"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function LoadMoreButton() {
  const { infinite, paginationMode } = useDataGrid()
  if (paginationMode !== 'infinite' || !infinite.hasMore.down) return null
  return (
    <button onClick={() => infinite.loadMore('down')}>
      {infinite.loadingMore.down ? 'Loading…' : 'Load more'}
    </button>
  )
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Adapter contract`}),`
`,(0,n.jsxs)(r.p,{children:[`No new adapter surface. Infinite scroll uses the same `,(0,n.jsx)(r.code,{children:`first / after / last / before`}),` cursor inputs and the same `,(0,n.jsx)(r.code,{children:`pageInfo: { hasNextPage, endCursor, hasPreviousPage, startCursor }`}),` outputs that `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),` already uses. If your adapter supports cursor pagination, infinite mode works.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The provider dedupes rows by `,(0,n.jsx)(r.code,{children:`getRowId`}),` on every append — overlapping pages won't double-render.`]}),`
`,(0,n.jsx)(r.h2,{children:`When to use which mode`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.code,{children:`paged`})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.code,{children:`infinite`})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`User wants to jump to "page 17"`}),(0,n.jsx)(r.td,{children:`✓`}),(0,n.jsx)(r.td,{children:`✗`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Total count + position readout matters`}),(0,n.jsx)(r.td,{children:`✓`}),(0,n.jsxs)(r.td,{children:[`partial — known after first load if adapter returns `,(0,n.jsx)(r.code,{children:`totalCount`}),`, but position is rows-loaded, not page-N`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Feeds / galleries / chat / activity logs`}),(0,n.jsx)(r.td,{children:`overkill`}),(0,n.jsx)(r.td,{children:`✓`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Deep-link mid-feed and scroll both ways`}),(0,n.jsx)(r.td,{children:`✗`}),(0,n.jsx)(r.td,{children:`✓ (bidirectional)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Bulk-select across the whole dataset`}),(0,n.jsx)(r.td,{children:`tricky`}),(0,n.jsxs)(r.td,{children:[`tricky — both modes need `,(0,n.jsx)(r.code,{children:`fetchAll()`}),` or an explicit "select all matching" affordance`]})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Live demos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/infinite`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/infinite`})}),` — same `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` table renderer, paginationMode flipped. 800-row seed.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/datagrid/media`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/media`})}),` — MediaGrid gallery, 240 assets, page size 40.`]}),`
`]}),`
`]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};