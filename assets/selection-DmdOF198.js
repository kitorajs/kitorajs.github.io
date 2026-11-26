import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Selection`,description:`Checkbox, shift-click range, ⌘-click, rubber-band, long-press, ⌘A / Esc, indicator chip, bulk actions, cell ranges.`,order:4};function i(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Selection`}),`
`,(0,n.jsxs)(r.p,{children:[`Multi-select is wired through one canonical state slice
(`,(0,n.jsx)(r.code,{children:`selectedIds`}),` in `,(0,n.jsx)(r.code,{children:`useDataGridUI()`}),`). Every entry point — checkbox,
shift-click, drag, keyboard — feeds into the same array, so bulk
actions / saved views / URL sync continue to work no matter how
rows were selected.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Entry points`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Gesture`}),(0,n.jsx)(r.th,{children:`Behavior`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Click row checkbox`})}),(0,n.jsx)(r.td,{children:`Toggle that row + set anchor`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Click row body`})}),(0,n.jsxs)(r.td,{children:[`Sets anchor; bubbles to `,(0,n.jsx)(r.code,{children:`onRowClick?(row)`}),` for detail open`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:`o`}),` on a focused card, kanban card or virtual row`]}),(0,n.jsxs)(r.td,{children:[`Opens it through the same `,(0,n.jsx)(r.code,{children:`onRowClick?(row)`}),`; `,(0,n.jsx)(r.strong,{children:`Enter`}),` opens too when the row has no drag (on a draggable row Enter and Space pick it up). See `,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/layouts#opening-a-row-from-the-keyboard`,children:`Layouts`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Shift+click any row`})}),(0,n.jsx)(r.td,{children:`Range select from anchor to current — works on body OR checkbox`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`⌘/Ctrl+click row`})}),(0,n.jsx)(r.td,{children:`Toggle that single row + update anchor`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Drag in empty area`})}),(0,n.jsx)(r.td,{children:`Rubber-band marquee (replaces selection)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Shift / ⌘ / Ctrl + drag a row`})}),(0,n.jsx)(r.td,{children:`Rubber-band (additive on shift); a modified press never starts a reorder`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:`Touch long-press`}),` (~450ms)`]}),(0,n.jsx)(r.td,{children:`Selects that row (mobile entry)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`⌘A / Ctrl+A`})}),(0,n.jsx)(r.td,{children:`Select every visible row on current page`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Esc`})}),(0,n.jsx)(r.td,{children:`Clear selection`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`× on indicator chip`})}),(0,n.jsx)(r.td,{children:`Clear selection`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`× on bulk-action bar`})}),(0,n.jsx)(r.td,{children:`Clear selection`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Components`}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`<DataGridSelectionIndicator>`})}),`
`,`
`,(0,n.jsx)(r.p,{children:`Inline "N selected" chip with × Clear button. Mount in your toolbar /
page-header / sticky-footer. Layout-agnostic — works in table /
cards / kanban / media-grid / custom.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"DataGridSelectionIndicator"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[11,"<"],[7,"DataGridFilterBar"]],["  ",[8,"rightSlot"],[10,"="],[11,"{"]],["    ",[11,"<>"]],["      ",[11,"<"],[7,"DataGridSort"]," ",[8,"options"],[10,"="],[11,"{"],[12,"sortOptions"],[11,"}"]," ",[11,"/>"]],["      ",[11,"<"],[7,"DataGridSelectionIndicator"]," ",[11,"/>"]],["    ",[11,"</>"]],["  ",[11,"}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { DataGridSelectionIndicator } from '@kitora/datagrid'

<DataGridFilterBar
  rightSlot={
    <>
      <DataGridSort options={sortOptions} />
      <DataGridSelectionIndicator />
    </>
  }
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Hidden by default when count = 0. Pass `,(0,n.jsx)(r.code,{children:`alwaysShow`}),` to keep a stable
slot.`]}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`<DataGridBulkActions>`})}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Floating bottom-center bar visible when selection > 0. Built-in
Delete button auto-shows when the adapter has `,(0,n.jsx)(r.code,{children:`bulkDelete`}),`. Custom
children for app-specific actions:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGridBulkActions"],[11,">"]],["  ",[11,"<"],[7,"Button"]," ",[8,"variant"],[10,"="],[3,"\\"outline\\""]," ",[8,"size"],[10,"="],[3,"\\"sm\\""]," ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[1,"/* ... */"],[11,"}>"]],["    ",[11,"<"],[7,"Mail"]," ",[11,"/>"]," Email selected"],["  ",[11,"</"],[7,"Button"],[11,">"]],[[11,"</"],[7,"DataGridBulkActions"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGridBulkActions>
  <Button variant="outline" size="sm" onClick={() => /* ... */}>
    <Mail /> Email selected
  </Button>
</DataGridBulkActions>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Composable hooks`}),`
`,(0,n.jsx)(r.p,{children:`All hooks below are layout-agnostic (work in any layout).`}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`useDataGridSelectMode(count)`})}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Google-Photos pattern. Returns `,(0,n.jsx)(r.code,{children:`{ selectMode, enter, exit, reset }`}),`.
Auto-derives `,(0,n.jsx)(r.code,{children:`selectMode`}),` from selection count (truthy when count > 0).
Use `,(0,n.jsx)(r.code,{children:`enter() / exit()`}),` for Apple-Photos-style explicit override.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]," ",[12,"selectMode"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridSelectMode"],[11,"("],[12,"selectedIds"],[11,"."],[9,"length"],[11,")"]],[],[[1,"// in click handler:"]],[[2,"if"]," ",[11,"("],[12,"selectMode"],[11,")"]," ",[5,"toggleRow"],[11,"("],[12,"id"],[11,")"]],[[2,"else"]," ",[5,"openDetail"],[11,"("],[12,"row"],[11,")"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const { selectMode } = useDataGridSelectMode(selectedIds.length)

// in click handler:
if (selectMode) toggleRow(id)
else openDetail(row)
`})}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`useDataGridRubberBand()`})}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Drag-rectangle marquee. Selector + row-id extractor parameterized;
defaults work for any layout that emits `,(0,n.jsx)(r.code,{children:`[data-row-id]`}),` on its rows.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"hostRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"HTMLDivElement"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[],[[5,"useDataGridRubberBand"],[11,"({"]],["  ",[9,"enabled"],[11,":"]," ",[4,"true"],[11,","]],["  ",[12,"hostRef"],[11,","]],["  ",[1,"/* defaults: selector = '[data-row-id]', getRowId = el.dataset.rowId */"]],["  ",[5,"onSelect"],[11,":"]," ",[11,"("],[12,"ids"],[11,","]," ",[11,"{"]," ",[12,"additive"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"{"]],["    ",[5,"setSelectedIds"],[11,"(("],[12,"prev"],[11,")"]," ",[2,"=>"]],["      ",[12,"additive"]," ",[10,"?"]," ",[12,"Array"],[11,"."],[5,"from"],[11,"("],[2,"new"]," ",[5,"Set"],[11,"(["],[10,"..."],[12,"prev"],[11,","]," ",[10,"..."],[12,"ids"],[11,"]))"]," ",[10,":"]," ",[12,"ids"],[11,","]],["    ",[11,")"]],["  ",[11,"},"]],["  ",[5,"onChange"],[11,":"]," ",[11,"("],[12,"rect"],[11,")"]," ",[2,"=>"]," ",[5,"setMarquee"],[11,"("],[12,"rect"],[11,"),"],"    ",[1,"// optional — for live preview"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const hostRef = useRef<HTMLDivElement | null>(null)

useDataGridRubberBand({
  enabled: true,
  hostRef,
  /* defaults: selector = '[data-row-id]', getRowId = el.dataset.rowId */
  onSelect: (ids, { additive }) => {
    setSelectedIds((prev) =>
      additive ? Array.from(new Set([...prev, ...ids])) : ids,
    )
  },
  onChange: (rect) => setMarquee(rect),    // optional — for live preview
})
`})}),`
`,(0,n.jsx)(r.p,{children:`Then paint the marquee rectangle yourself:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"{"],[12,"marquee"]," ",[10,"&&"]," ",[11,"("]],["  ",[11,"<"],[7,"div"]],["    ",[8,"aria-hidden"]],["    ",[8,"className"],[10,"="],[3,"\\"pointer-events-none fixed z-50 rounded-sm border-2 border-primary bg-primary/10\\""]],["    ",[8,"style"],[10,"="],[11,"{{"]," ",[9,"left"],[11,":"]," ",[12,"marquee"],[11,"."],[9,"left"],[11,","]," ",[9,"top"],[11,":"]," ",[12,"marquee"],[11,"."],[9,"top"],[11,","]," ",[9,"width"],[11,":"]," ",[12,"marquee"],[11,"."],[9,"width"],[11,","]," ",[9,"height"],[11,":"]," ",[12,"marquee"],[11,"."],[9,"height"]," ",[11,"}}"]],["  ",[11,"/>"]],[[11,")}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`{marquee && (
  <div
    aria-hidden
    className="pointer-events-none fixed z-50 rounded-sm border-2 border-primary bg-primary/10"
    style={{ left: marquee.left, top: marquee.top, width: marquee.width, height: marquee.height }}
  />
)}
`})}),`
`,(0,n.jsx)(r.p,{children:`Gesture model:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Pointerdown on a non-row element (background, padding) → start`}),`
`,(0,n.jsx)(r.li,{children:`Pointerdown on a row WITH Shift/Cmd/Ctrl → start (suppresses
DnD-kit row drag-reorder)`}),`
`,(0,n.jsx)(r.li,{children:`Pointerdown on a row plain → no-op (row owns the gesture)`}),`
`,(0,n.jsx)(r.li,{children:`5px movement threshold so plain clicks still work`}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`useDataGridLongPress()`})}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Touch long-press helper for mobile. Hold a row ~450ms → fires
`,(0,n.jsx)(r.code,{children:`onLongPress(rowId, event)`}),`. Synthetic click suppressed via
`,(0,n.jsx)(r.code,{children:`shouldSuppressClick()`}),`.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"lp"]," ",[10,"="]," ",[5,"useDataGridLongPress"],[11,"({"]],["  ",[9,"enabled"],[11,":"]," ",[4,"true"],[11,","]],["  ",[9,"duration"],[11,":"]," ",[4,"450"],[11,","]],["  ",[5,"onLongPress"],[11,":"]," ",[11,"("],[12,"rowId"],[11,")"]," ",[2,"=>"]," ",[5,"toggleRow"],[11,"("],[12,"rowId"],[11,"),"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const lp = useDataGridLongPress({
  enabled: true,
  duration: 450,
  onLongPress: (rowId) => toggleRow(rowId),
})
`})}),`
`,(0,n.jsx)(r.p,{children:`Mount on a host element:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"div"]," ",[8,"onPointerDown"],[10,"="],[11,"{"],[12,"lp"],[11,"."],[9,"onPointerDown"],[11,"}"]," ",[8,"onPointerUp"],[10,"="],[11,"{"],[12,"lp"],[11,"."],[9,"onPointerUp"],[11,"}"]," …>"]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<div onPointerDown={lp.onPointerDown} onPointerUp={lp.onPointerUp} …>
`})}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`useDataGridSelectionShortcuts()`})}),`
`,`
`,(0,n.jsx)(r.p,{children:`Focus-scoped global handlers for ⌘A and Esc:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"useDataGridSelectionShortcuts"],[11,"({"]],["  ",[12,"hostRef"],[11,","]],["  ",[5,"onSelectAll"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[5,"setSelectedIds"],[11,"("],[12,"allVisibleIds"],[11,"),"]],["  ",[5,"onClear"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[5,"setSelectedIds"],[11,"([]),"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`useDataGridSelectionShortcuts({
  hostRef,
  onSelectAll: () => setSelectedIds(allVisibleIds),
  onClear: () => setSelectedIds([]),
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Only fires when `,(0,n.jsx)(r.code,{children:`document.activeElement`}),` is inside `,(0,n.jsx)(r.code,{children:`hostRef.current`}),`,
so it doesn't trigger from unrelated parts of the page.`]}),`
`,(0,n.jsx)(r.h3,{children:(0,n.jsx)(r.code,{children:`buildDataGridDragGhost(count, opts?)`})}),`
`,(0,n.jsxs)(r.p,{children:[`Builds the tiny "N rows" / "N cards" pill element. The table view's row reorder (`,(0,n.jsx)(r.code,{children:`useDataGridRowDragReorder`}),`, on the DnD kit) renders it as the drag preview under the pointer, because a `,(0,n.jsx)(r.code,{children:`<tr>`}),` cannot be cloned outside its table. It is a plain element, so a custom layout can use it from its own kit `,(0,n.jsx)(r.code,{children:`renderPreview`}),`:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[5,"renderPreview"]," ",[10,"="]," ",[11,"("],[12,"host"],[11,","]," ",[12,"source"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"pill"]," ",[10,"="]," ",[5,"buildDataGridDragGhost"],[11,"("],[12,"source"],[11,"."],[9,"ids"],[11,"."],[9,"length"],[11,","]," ",[11,"{"]," ",[9,"noun"],[11,":"]," ",[3,"'row'"]," ",[11,"})"]],["  ",[12,"pill"],[11,"."],[9,"style"],[11,"."],[9,"position"]," ",[10,"="]," ",[3,"'relative'"]],["  ",[12,"pill"],[11,"."],[9,"style"],[11,"."],[9,"top"]," ",[10,"="]," ",[12,"pill"],[11,"."],[9,"style"],[11,"."],[9,"left"]," ",[10,"="]," ",[3,"'0'"]],["  ",[12,"host"],[11,"."],[5,"append"],[11,"("],[12,"pill"],[11,")"]],["  ",[2,"return"]," ",[11,"()"]," ",[2,"=>"]," ",[12,"pill"],[11,"."],[5,"remove"],[11,"()"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const renderPreview = (host, source) => {
  const pill = buildDataGridDragGhost(source.ids.length, { noun: 'row' })
  pill.style.position = 'relative'
  pill.style.top = pill.style.left = '0'
  host.append(pill)
  return () => pill.remove()
}
`})}),`
`,(0,n.jsx)(r.p,{children:`The free-flow hooks (cards, virtual table, MediaGrid) show the dragged row itself instead, stacked with a count badge for a multi-select batch.`}),`
`,(0,n.jsx)(r.h2,{children:`Full table example`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"UsersGrid"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"selectedIds"],[11,","]," ",[12,"setSelectedIds"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridUI"],[11,"()"]],["  ",[2,"const"]," ",[12,"hostRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"HTMLDivElement"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],["  ",[2,"const"]," ",[11,"["],[12,"marquee"],[11,","]," ",[12,"setMarquee"],[11,"]"]," ",[10,"="]," ",[5,"useState"],[11,"<"],[6,"DOMRect"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[],["  ",[5,"useDataGridRubberBand"],[11,"({"]],["    ",[9,"enabled"],[11,":"]," ",[4,"true"],[11,","]],["    ",[12,"hostRef"],[11,","]],["    ",[9,"onChange"],[11,":"]," ",[12,"setMarquee"],[11,","]],["    ",[5,"onSelect"],[11,":"]," ",[11,"("],[12,"ids"],[11,","]," ",[11,"{"]," ",[12,"additive"]," ",[11,"})"]," ",[2,"=>"]],["      ",[5,"setSelectedIds"],[11,"(("],[12,"prev"],[11,")"]," ",[2,"=>"]," ",[11,"("],[12,"additive"]," ",[10,"?"]," ",[11,"["],[10,"..."],[2,"new"]," ",[5,"Set"],[11,"(["],[10,"..."],[12,"prev"],[11,","]," ",[10,"..."],[12,"ids"],[11,"])]"]," ",[10,":"]," ",[12,"ids"],[11,")),"]],["  ",[11,"})"]],["  ",[5,"useDataGridLongPress"],[11,"({"]],["    ",[9,"enabled"],[11,":"]," ",[4,"true"],[11,","]],["    ",[5,"onLongPress"],[11,":"]," ",[11,"("],[12,"id"],[11,")"]," ",[2,"=>"]," ",[5,"setSelectedIds"],[11,"(("],[12,"prev"],[11,")"]," ",[2,"=>"]," ",[12,"prev"],[11,"."],[5,"includes"],[11,"("],[12,"id"],[11,")"]," ",[10,"?"]," ",[12,"prev"]," ",[10,":"]," ",[11,"["],[10,"..."],[12,"prev"],[11,","]," ",[12,"id"],[11,"]),"]],["  ",[11,"})"]],["  ",[5,"useDataGridSelectionShortcuts"],[11,"({"]],["    ",[12,"hostRef"],[11,","]],["    ",[5,"onClear"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[5,"setSelectedIds"],[11,"([]),"]],["    ",[5,"onSelectAll"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"const"]," ",[12,"rows"]," ",[10,"="]," ",[12,"hostRef"],[11,"."],[9,"current"],[11,"?."],[5,"querySelectorAll"],[11,"<"],[6,"HTMLElement"],[11,">("],[3,"'[data-row-id]'"],[11,")"]],["      ",[5,"setSelectedIds"],[11,"(["],[10,"..."],[11,"("],[12,"rows"]," ",[10,"??"]," ",[11,"[])]."],[5,"map"],[11,"(("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"dataset"],[11,"."],[9,"rowId"],[10,"!"],[11,")."],[5,"filter"],[11,"("],[12,"Boolean"],[11,"))"]],["    ",[11,"},"]],["  ",[11,"})"]],[],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"ref"],[10,"="],[11,"{"],[12,"hostRef"],[11,"}>"]],["      ",[11,"<"],[7,"DataGridFilterBar"]," ",[8,"rightSlot"],[10,"="],[11,"{<"],[7,"DataGridSelectionIndicator"]," ",[11,"/>}"]," ",[11,"/>"]],["      ",[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[11,"/>"]],["      ",[11,"<"],[7,"DataGridBulkActions"]," ",[11,"/>"]],["      ",[11,"{"],[12,"marquee"]," ",[10,"&&"]," ",[11,"<"],[7,"Marquee"]," ",[8,"rect"],[10,"="],[11,"{"],[12,"marquee"],[11,"}"]," ",[11,"/>}"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function UsersGrid() {
  const { selectedIds, setSelectedIds } = useDataGridUI()
  const hostRef = useRef<HTMLDivElement | null>(null)
  const [marquee, setMarquee] = useState<DOMRect | null>(null)

  useDataGridRubberBand({
    enabled: true,
    hostRef,
    onChange: setMarquee,
    onSelect: (ids, { additive }) =>
      setSelectedIds((prev) => (additive ? [...new Set([...prev, ...ids])] : ids)),
  })
  useDataGridLongPress({
    enabled: true,
    onLongPress: (id) => setSelectedIds((prev) => prev.includes(id) ? prev : [...prev, id]),
  })
  useDataGridSelectionShortcuts({
    hostRef,
    onClear: () => setSelectedIds([]),
    onSelectAll: () => {
      const rows = hostRef.current?.querySelectorAll<HTMLElement>('[data-row-id]')
      setSelectedIds([...(rows ?? [])].map((r) => r.dataset.rowId!).filter(Boolean))
    },
  })

  return (
    <div ref={hostRef}>
      <DataGridFilterBar rightSlot={<DataGridSelectionIndicator />} />
      <DataGrid columns={columns} />
      <DataGridBulkActions />
      {marquee && <Marquee rect={marquee} />}
    </div>
  )
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Anchor + range select`}),`
`,(0,n.jsxs)(r.p,{children:[`The table view tracks a `,(0,n.jsx)(r.code,{children:`selectionAnchor`}),` internally. Plain click
sets the anchor; subsequent shift-click extends from anchor to
current. Cmd-click toggles + updates anchor. Standard Finder / Mail
behavior.`]}),`
`,(0,n.jsx)(r.h2,{children:`Selection state lives in UI provider`}),`
`,(0,n.jsxs)(r.p,{children:[`Always reachable through `,(0,n.jsx)(r.code,{children:`useDataGridUI()`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]," ",[12,"selectedIds"],[11,","]," ",[12,"setSelectedIds"],[11,","]," ",[12,"isSelected"],[11,","]," ",[12,"toggleSelected"]," ",[11,"}"]," ",[10,"="]],["  ",[5,"useDataGridUI"],[11,"()"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const { selectedIds, setSelectedIds, isSelected, toggleSelected } =
  useDataGridUI()
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Saved views snapshot this; URL sync (`,(0,n.jsx)(r.code,{children:`useDataGridUrlSync`}),`) persists it
across reloads / sharing.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Cell ranges`}),`
`,(0,n.jsxs)(r.p,{children:[`Turn on `,(0,n.jsx)(r.code,{children:`cellSelection`}),` on `,(0,n.jsx)(r.code,{children:`<DataGrid>`}),` for spreadsheet-style ranges. The table becomes a WAI-ARIA grid (`,(0,n.jsx)(r.code,{children:`role="grid"`}),`, `,(0,n.jsx)(r.code,{children:`aria-multiselectable`}),`, `,(0,n.jsx)(r.code,{children:`aria-rowcount`}),`, `,(0,n.jsx)(r.code,{children:`aria-colcount`}),`, `,(0,n.jsx)(r.code,{children:`role="gridcell"`}),` with `,(0,n.jsx)(r.code,{children:`aria-selected`}),` on every data cell) with one tab stop, the focused cell. Utility columns (checkbox, drag grip, expand toggle, action slots) are never part of a range, and without the prop a grid keeps its plain table markup.`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Gesture`}),(0,n.jsx)(r.th,{children:`Behavior`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Press and drag across cells`})}),(0,n.jsx)(r.td,{children:`Selects the rectangle (text selection is off during the drag; the scroller auto-scrolls near its edges)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Shift+click a cell`})}),(0,n.jsx)(r.td,{children:`Extends the range from its anchor`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Arrows, Home / End, ⌘/Ctrl+Home / End, PageUp / PageDown`})}),(0,n.jsx)(r.td,{children:`Move the focused cell (Left and Right swap in a right-to-left page)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Shift + any of those`})}),(0,n.jsx)(r.td,{children:`Extends the range from its anchor`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Shift+Space`})}),(0,n.jsx)(r.td,{children:`Selects the focused cell's row`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:`⌘A / Ctrl+A`}),` in a cell`]}),(0,n.jsx)(r.td,{children:`Selects every data cell on the page (outside a cell it still selects rows)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Esc`})}),(0,n.jsx)(r.td,{children:`Clears the range; a second Esc clears the row selection`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Enter, F2, or a click on the focused editable cell`})}),(0,n.jsx)(r.td,{children:`Edits it; focus comes back to the cell after Enter or Esc`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Touch: tap, long press, tap`})}),(0,n.jsx)(r.td,{children:`A tap focuses a cell, a long press starts a range, a later tap extends it; a drag scrolls`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`With `,(0,n.jsx)(r.code,{children:`cellSelection`}),` on, a row drag starts only from its grip, so a drag over cells is always a range; ⌘/Ctrl+click still toggles the row and `,(0,n.jsx)(r.code,{children:`onRowClick`}),` still fires for a plain click that does not drag. The keys are `,(0,n.jsx)(r.code,{children:`@kitora/keyboard`}),` commands in the `,(0,n.jsx)(r.code,{children:`Data grid`}),` category (`,(0,n.jsx)(r.code,{children:`datagrid.cellUp`}),` … `,(0,n.jsx)(r.code,{children:`datagrid.extendRangeRight`}),`, `,(0,n.jsx)(r.code,{children:`datagrid.selectRowCells`}),`, `,(0,n.jsx)(r.code,{children:`datagrid.selectAllCells`}),`, `,(0,n.jsx)(r.code,{children:`datagrid.clearCellRange`}),`, `,(0,n.jsx)(r.code,{children:`datagrid.editCell`}),`), so a `,(0,n.jsx)(r.code,{children:`KeyboardProvider`}),` lists and remaps them; a text field inside the grid (an open editor, a filter box) keeps its own keys.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The range lives in `,(0,n.jsx)(r.code,{children:`DataGridUIProvider`}),` by ids, so it survives a refetch: `,(0,n.jsx)(r.code,{children:`cellSelection`}),` is `,(0,n.jsx)(r.code,{children:`{ anchor: CellRef; focus: CellRef } | null`}),` with `,(0,n.jsx)(r.code,{children:`CellRef = { rowId, columnId }`}),`. It is the provider's one controlled state: pass `,(0,n.jsx)(r.code,{children:`cellSelection`}),` with `,(0,n.jsx)(r.code,{children:`onCellSelectionChange`}),` to own it, or `,(0,n.jsx)(r.code,{children:`defaultCellSelection`}),` to seed it. `,(0,n.jsx)(r.code,{children:`useDataGridUI()`}),` exposes `,(0,n.jsx)(r.code,{children:`cellSelection`}),`, `,(0,n.jsx)(r.code,{children:`setCellSelection`}),`, `,(0,n.jsx)(r.code,{children:`clearCellSelection`}),` and `,(0,n.jsx)(r.code,{children:`selectedCellRange`}),`, the range as row and column indexes into the visible data rows and columns (the spreadsheet kit's `,(0,n.jsx)(r.code,{children:`CellRange`}),`). The range is cleared when sort, filters, search, the page, the page size, group-by, the column order or the hidden columns change, because a rectangle over other rows means something else.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]," ",[12,"selectedCellRange"]," ",[11,"}"]," ",[10,"="]," ",[5,"useDataGridUI"],[11,"()"]],[[1,"// { r0, c0, r1, c1 } or null"]],[],[[11,"<"],[7,"DataGrid"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[8,"cellSelection"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const { selectedCellRange } = useDataGridUI()
// { r0, c0, r1, c1 } or null

<DataGrid columns={columns} cellSelection />
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:[`In `,(0,n.jsx)(r.code,{children:`<DataGridVirtual>`})]}),` the same `,(0,n.jsx)(r.code,{children:`cellSelection`}),` (with `,(0,n.jsx)(r.code,{children:`copyHeaders`}),`, `,(0,n.jsx)(r.code,{children:`clipboardCodec`}),`, `,(0,n.jsx)(r.code,{children:`onPaste`}),`) and `,(0,n.jsx)(r.code,{children:`columnGroups`}),` props work over every row, not only the mounted window: the grid's `,(0,n.jsx)(r.code,{children:`aria-rowcount`}),` counts every row and each mounted row and cell carries `,(0,n.jsx)(r.code,{children:`aria-rowindex`}),` / `,(0,n.jsx)(r.code,{children:`aria-colindex`}),`; a key that moves the focus past the window scrolls the row in; Mod+A, copy and paste read and write the provider's rows; editable columns edit in place; edits and pastes undo with Mod+Z.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Cells in the range paint the design language's `,(0,n.jsx)(r.code,{children:`table`}),` selected fill (`,(0,n.jsx)(r.code,{children:`--dk-table-selected`}),`, else the selected-row tint) with a 1px outline on the rectangle's outer edges; pinned cells stay opaque, and `,(0,n.jsx)(r.code,{children:`forced-colors`}),` uses the system highlight.`]}),`
`,(0,n.jsx)(r.h2,{children:`Copy and paste`}),`
`,(0,n.jsxs)(r.p,{children:[`A grid with `,(0,n.jsx)(r.code,{children:`cellSelection`}),` owns the clipboard while one of its cells has focus (the spreadsheet kit's `,(0,n.jsx)(r.code,{children:`bindClipboard`}),`).`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Copy`}),` (Mod+C): the cell range when it spans more than one cell, else the selected rows (every visible data column), else the focused cell, as TSV a spreadsheet reads (the spreadsheet kit's `,(0,n.jsx)(r.code,{children:`toTsv`}),`; quotes, tabs and newlines are quoted). A cell copies `,(0,n.jsx)(r.code,{children:`meta.copyValue(row)`}),`, else `,(0,n.jsx)(r.code,{children:`meta.edit.read(row)`}),` for an editable column, else the row's own `,(0,n.jsx)(r.code,{children:`[col.id]`}),` field, else `,(0,n.jsx)(r.code,{children:`meta.searchValue(row)`}),`, else nothing; a cell hidden by `,(0,n.jsx)(r.code,{children:`meta.canRead`}),` copies empty. `,(0,n.jsx)(r.code,{children:`copyHeaders`}),` puts the header labels (`,(0,n.jsx)(r.code,{children:`meta.label`}),`, else a string header) on the first line. Rows come from the provider's data, so rows outside a virtual window copy too.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Paste`}),` (Mod+V): the text is decoded (`,(0,n.jsx)(r.code,{children:`parseTsv`}),`, or `,(0,n.jsx)(r.code,{children:`clipboardCodec.decode`}),`) and lands from the range's top-left cell (the focused cell without a range), tiled when the range is a whole multiple of the block and clipped at the last visible row and column; no rows are added. Only cells whose column has `,(0,n.jsx)(r.code,{children:`meta.edit`}),` and whose row passes `,(0,n.jsx)(r.code,{children:`meta.canEdit`}),` are written, coerced as the editor would: text as is, numbers through the number editor's parsing (empty to `,(0,n.jsx)(r.code,{children:`null`}),`), select values matched by value, then by label ignoring case. Each row's cells are merged into one patch and written with the adapter's `,(0,n.jsx)(r.code,{children:`updateRow`}),` (optimistic). `,(0,n.jsx)(r.code,{children:`onPaste`}),` receives `,(0,n.jsx)(r.code,{children:`{ applied, skipped: { rowId, columnId, reason }[] }`}),` with `,(0,n.jsx)(r.code,{children:`reason`}),` one of `,(0,n.jsx)(r.code,{children:`not-editable`}),`, `,(0,n.jsx)(r.code,{children:`read-only`}),`, `,(0,n.jsx)(r.code,{children:`invalid`}),`, and the grid announces "Pasted 12 cells, skipped 2". Without `,(0,n.jsx)(r.code,{children:`updateRow`}),` a paste does nothing and the event is left to the browser.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Context menu`}),`: right-clicking a cell outside the range takes that cell first; the menu then offers Copy cells, Copy rows, Copy with headers and Paste (which reads `,(0,n.jsx)(r.code,{children:`navigator.clipboard.readText()`}),`, so the browser may ask; a refusal is announced) above the row actions.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"DataGrid"]],["  ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]],["  ",[8,"cellSelection"]],["  ",[8,"copyHeaders"]],["  ",[8,"onPaste"],[10,"="],[11,"{({"]," ",[12,"applied"],[11,","]," ",[12,"skipped"]," ",[11,"})"]," ",[2,"=>"]," ",[12,"console"],[11,"."],[5,"log"],[11,"("],[12,"applied"],[11,","]," ",[12,"skipped"],[11,")}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<DataGrid
  columns={columns}
  cellSelection
  copyHeaders
  onPaste={({ applied, skipped }) => console.log(applied, skipped)}
/>
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};