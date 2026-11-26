import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Playground`,description:`A single page where every datagrid feature is reachable from a control panel — flip toggles + radios to see how each primitive behaves in isolation.`,order:9};function i(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Playground`}),`
`,(0,n.jsxs)(r.p,{children:[`Live at `,(0,n.jsx)(r.a,{href:`/kits/datagrid/playground`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/playground`})}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The playground is to the datagrid what `,(0,n.jsx)(r.code,{children:`/kits/tasklists/headless`}),` is to the task-list kit — a single page with a control panel on the left, the rendered datagrid on the right. Flip a switch, change a radio, swap a dropdown — the right-hand grid reconfigures instantly. The provider pair stays mounted across every flip; only the UI primitives swap.`]}),`
`,(0,n.jsx)(r.h2,{children:`Why it exists`}),`
`,(0,n.jsx)(r.p,{children:`Three reasons:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`See pluggability in practice.`}),` The "every layer is replaceable" claim only feels real once you watch the same data + the same selection state render as a table, then as a kanban, then as a media-grid — without a single network re-fetch.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Isolate one feature at a time.`}),` Bug reports often boil down to "does pagination still work when I disable selection?" The playground lets you reproduce that combo in three clicks.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Demo every primitive.`}),` Eight pagination UI components, three modes, five layouts, ten toolbar widgets, six behavior toggles. The playground is the only place you can hit them all.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Seven control groups`}),`
`,(0,n.jsx)(r.h3,{children:`1. Pagination mode (radio — single pick)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`paged`}),` — `,(0,n.jsx)(r.code,{children:`<DataGridProvider paginationMode="paged">`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`infinite`}),` — bidirectional`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`numbered`}),` — offset / limit`]}),`
`]}),`
`,`
`,(0,n.jsx)(r.p,{children:`Flipping mode automatically picks a sensible default for the next group so you never see an empty pagination slot.`}),`
`,(0,n.jsx)(r.h3,{children:`2. Pagination UI (radio — mode-aware)`}),`
`,(0,n.jsx)(r.p,{children:`The options change with the active mode:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`paged`}),` → `,(0,n.jsx)(r.code,{children:`<DataGridPagination>`}),` (or None)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`infinite`}),` → `,(0,n.jsx)(r.code,{children:`<DataGridInfiniteAnchor>`}),` · `,(0,n.jsx)(r.code,{children:`<DataGridLoadMoreButton>`}),` (or None)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`numbered`}),` → `,(0,n.jsx)(r.code,{children:`<DataGridNumberedPagination>`}),` alone, or the full kit (numbered + `,(0,n.jsx)(r.code,{children:`<DataGridFirstLastButtons>`}),` + `,(0,n.jsx)(r.code,{children:`<DataGridJumpToPage>`}),`)`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.h3,{children:`3. Layout (radio — single pick)`}),`
`,(0,n.jsx)(r.p,{children:`Same rows, different renderer:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Table — `,(0,n.jsx)(r.code,{children:`<DataGrid>`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Virt table — `,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`}),` (windowing kicks in)`]}),`
`,(0,n.jsxs)(r.li,{children:[`Cards — `,(0,n.jsx)(r.code,{children:`cardsLayout()`}),` via `,(0,n.jsx)(r.code,{children:`<DataGridView>`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Kanban — `,(0,n.jsx)(r.code,{children:`kanbanLayout()`}),` grouped by status`]}),`
`,(0,n.jsxs)(r.li,{children:[`MediaGrid — `,(0,n.jsx)(r.code,{children:`mediaGridLayout()`}),` with avatar thumbs`]}),`
`]}),`
`,`
`,`
`,`
`,(0,n.jsx)(r.h3,{children:`4. Toolbar (toggles — multi pick)`}),`
`,(0,n.jsx)(r.p,{children:`Each toolbar widget is independently togglable so you can see what disappears when:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridSearch>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridFilterBar>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridSort>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridColumnVisibility>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridDensityToggle>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridBulkActions>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridSelectionIndicator>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridGroupBy>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridExportButton>`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`<DataGridSearchColumns>`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<DataGridPageSizeSelect>`}),` — standalone page-size dropdown (mode-agnostic)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<DataGridPaginationStatus>`}),` — mode-aware status readout`]}),`
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
`,(0,n.jsx)(r.h3,{children:`5. Overlay primitives (toggles)`}),`
`,(0,n.jsxs)(r.p,{children:[`Sit on top of `,(0,n.jsx)(r.em,{children:`any`}),` pagination mode:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Date-bucket separators`}),` — drops a virtual `,(0,n.jsx)(r.code,{children:`defineDateBucketColumn`}),` into the column array + mounts `,(0,n.jsx)(r.code,{children:`<DataGridDateBucketActivator>`}),`. Groups rows by their `,(0,n.jsx)(r.code,{children:`joined`}),` day so you see Slack-style "Today / Yesterday / Mar 14" section headers. Works in every layout via the existing groupBy infra.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`<DataGridLiveTail>`})}),` — wraps the grid in a fixed-height scroll container + mounts the live-tail primitive. Sticky "N new ↓" pill appears when paused; click to resume + scroll to bottom. Watches `,(0,n.jsx)(r.code,{children:`useDataGrid().rows.length`}),` for new arrivals.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[`Streaming (`,(0,n.jsx)(r.code,{children:`adapter.push`}),`)`]}),` — fires `,(0,n.jsx)(r.code,{children:`setInterval`}),` that calls `,(0,n.jsx)(r.code,{children:`adapter.push(syntheticUser)`}),` every 1.5s. Real adapters open their push channel (WebSocket / SSE / poll) in `,(0,n.jsx)(r.code,{children:`subscribe()`}),`; the in-memory reference adapter exposes `,(0,n.jsx)(r.code,{children:`push()`}),` so demos like this can drive realtime without a fake socket. Combine with Live Tail to see auto-scroll-vs-pause behavior.`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.h3,{children:`6. Behaviors (toggles)`}),`
`,(0,n.jsx)(r.p,{children:`Renderer-level flags:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Row selection`}),`
`,(0,n.jsxs)(r.li,{children:[`Row reorder (drag rows) — when on, a sub-radio appears with two options: `,(0,n.jsx)(r.strong,{children:`Whole row / card`}),` (pointerdown anywhere lifts) or `,(0,n.jsx)(r.strong,{children:`Icon only (≡)`}),` (only the auto-grip drags; row body stays clickable). See the `,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/row-reorder`,children:`Row reorder`}),` doc for the full mode + handle-placement story.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Inline-edit column (adds a column with `,(0,n.jsx)(r.code,{children:`meta.edit`}),`)`]}),`
`,(0,n.jsx)(r.li,{children:`Sticky header`}),`
`,(0,n.jsx)(r.li,{children:`Column resize`}),`
`,(0,n.jsx)(r.li,{children:`Column reorder`}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`7. Tuning (dropdowns)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Page size: 10 / 20 / 50 / 100 / 200`}),`
`,(0,n.jsx)(r.li,{children:`Adapter latency: Instant / 100ms / 300ms / 800ms (simulates a real network)`}),`
`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Implementation note — `,(0,n.jsx)(r.code,{children:`key`}),` to force resets`]}),`
`,(0,n.jsxs)(r.p,{children:[`When `,(0,n.jsx)(r.code,{children:`paginationMode`}),` changes, cursor state from the previous mode would otherwise stay live and produce empty pages. The playground uses React's `,(0,n.jsx)(r.code,{children:`key`}),` prop on the providers to `,(0,n.jsx)(r.strong,{children:`remount on mode change`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":'[[[11,"<"],[7,"DataGridProvider"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]],["  ",[8,"paginationMode"],[10,"="],[11,"{"],[12,"cfg"],[11,"."],[9,"paginationMode"],[11,"}"]],["  ",[8,"key"],[10,"="],[11,"{"],[3,"`provider-"],[11,"${"],[12,"cfg"],[11,"."],[9,"paginationMode"],[11,"}"],[3,"-"],[11,"${"],[12,"cfg"],[11,"."],[9,"latencyMs"],[11,"}"],[3,"`"],[11,"}"]],[[11,">"]]]',"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridProvider
  adapter={adapter}
  paginationMode={cfg.paginationMode}
  key={\`provider-\${cfg.paginationMode}-\${cfg.latencyMs}\`}
>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Real apps don't usually flip mode at runtime — this is a playground-specific gymnastics. Sample code in your own routes can drop the `,(0,n.jsx)(r.code,{children:`key`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Reading the source`}),`
`,(0,n.jsxs)(r.p,{children:[`The playground is one file: `,(0,n.jsx)(r.a,{href:`https://github.com/ubgo/kitora/blob/main/src/routes/kits.datagrid.playground.tsx`,children:(0,n.jsx)(r.code,{children:`src/routes/kits.datagrid.playground.tsx`})}),` — ~430 lines. Mostly:`]}),`
`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`PlaygroundConfig`}),` type — one giant state shape`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`ControlPanel`}),` component — radios + toggles + dropdowns wired to `,(0,n.jsx)(r.code,{children:`setCfg`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`GridBody`}),` component — conditional renders driven by `,(0,n.jsx)(r.code,{children:`cfg`})]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`It's intentionally a single file so you can grep it as a reference cookbook ("how do I conditionally mount `,(0,n.jsx)(r.code,{children:`<DataGridGroupBy>`}),`?" → look at the toolbar block). For your own apps you'd factor into pieces.`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};