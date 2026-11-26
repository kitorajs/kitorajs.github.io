import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`MediaGrid`,description:`Google-Photos-style gallery view — composable cards, thumbnails, multi-select, drag-reorder.`,order:6};function i(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`MediaGrid`}),`
`,(0,n.jsx)(r.p,{children:`A gallery layout for the datagrid. Renders rows as media cards with
thumbnail + title + hover actions. Picks up adapter / search /
filters / pagination / selection / bulk actions from the standard
datagrid providers — same shell, different render.`}),`
`,(0,n.jsxs)(r.p,{children:[`Live demo: `,(0,n.jsx)(r.a,{href:`/kits/datagrid/media`,children:(0,n.jsx)(r.code,{children:`/kits/datagrid/media`})}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Mount in 60 seconds`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"DataGridView"],[11,","]],["  ",[12,"mediaGridLayout"],[11,","]],["  ",[12,"defineColumns"],[11,","]],["  ",[12,"createInMemoryAdapter"],[11,","]],["  ",[12,"DataGridProvider"],[11,","]],["  ",[12,"DataGridUIProvider"],[11,","]],["  ",[2,"type"]," ",[12,"MediaGridKind"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"interface"]," ",[6,"Asset"]," ",[11,"{"]],["  ",[12,"id"],[10,":"]," ",[6,"string"]],["  ",[12,"name"],[10,":"]," ",[6,"string"]],["  ",[12,"kind"],[10,":"]," ",[6,"MediaGridKind"]],["  ",[12,"url"],[10,"?:"]," ",[6,"string"]],["  ",[12,"size"],[10,":"]," ",[6,"string"]],[[11,"}"]],[],[[2,"const"]," ",[12,"columns"]," ",[10,"="]," ",[5,"defineColumns"],[11,"<"],[6,"Asset"],[11,">()(["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'name'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Name'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'kind'"],[11,","]," ",[9,"header"],[11,":"]," ",[3,"'Kind'"],[11,","]," ",[5,"cell"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"kind"]," ",[11,"},"]],[[11,"])"]],[],[[2,"const"]," ",[12,"layouts"]," ",[10,"="]," ",[11,"["]],["  ",[5,"mediaGridLayout"],[11,"<"],[6,"Asset"],[11,">({"]],["    ",[5,"thumbUrl"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"url"],[11,","]],["    ",[5,"thumbKind"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"kind"],[11,","]],["    ",[5,"title"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[9,"name"],[11,","]],["    ",[5,"subtitle"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[3,"\`"],[11,"\${"],[12,"r"],[11,"."],[9,"kind"],[11,"}"],[3," · "],[11,"\${"],[12,"r"],[11,"."],[9,"size"],[11,"}"],[3,"\`"],[11,","]],["    ",[9,"aspect"],[11,":"]," ",[3,"'square'"],[11,","]],["    ",[9,"columns"],[11,":"]," ",[11,"{"]," ",[9,"default"],[11,":"]," ",[4,"2"],[11,","]," ",[9,"sm"],[11,":"]," ",[4,"3"],[11,","]," ",[9,"md"],[11,":"]," ",[4,"4"],[11,","]," ",[9,"lg"],[11,":"]," ",[4,"5"],[11,","]," ",[9,"xl"],[11,":"]," ",[4,"6"]," ",[11,"},"]],["    ",[5,"onOpen"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[5,"navigate"],[11,"("],[3,"\`/asset/"],[11,"\${"],[12,"r"],[11,"."],[9,"id"],[11,"}"],[3,"\`"],[11,"),"]],["    ",[5,"actions"],[11,":"]," ",[11,"("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[11,"["]],["      ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'preview'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Preview'"],[11,","]," ",[9,"Icon"],[11,":"]," ",[12,"Eye"],[11,","]," ",[5,"onClick"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[5,"preview"],[11,"("],[12,"r"],[11,")"]," ",[11,"},"]],["      ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'open'"],[11,","],"    ",[9,"label"],[11,":"]," ",[3,"'Open'"],[11,","],"    ",[9,"Icon"],[11,":"]," ",[12,"ExternalLink"],[11,","]," ",[5,"onClick"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[5,"navigate"],[11,"("],[12,"r"],[11,"."],[9,"href"],[11,")"]," ",[11,"},"]],["    ",[11,"],"]],["  ",[11,"}),"]],[[11,"]"]],[],[[11,"<"],[7,"DataGridUIProvider"]," ",[8,"defaultLayoutId"],[10,"="],[3,"\\"media-grid\\""]," ",[8,"defaultPageSize"],[10,"="],[11,"{"],[4,"40"],[11,"}>"]],["  ",[11,"<"],[7,"DataGridProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}>"]],["    ",[11,"<"],[7,"DataGridView"],[11,"<"],[6,"Asset"],[11,">"]," ",[8,"columns"],[10,"="],[11,"{"],[12,"columns"],[11,"}"]," ",[8,"layouts"],[10,"="],[11,"{"],[12,"layouts"],[11,"}"]," ",[11,"/>"]],["  ",[11,"</"],[7,"DataGridProvider"],[11,">"]],[[11,"</"],[7,"DataGridUIProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  DataGridView,
  mediaGridLayout,
  defineColumns,
  createInMemoryAdapter,
  DataGridProvider,
  DataGridUIProvider,
  type MediaGridKind,
} from '@kitora/datagrid'

interface Asset {
  id: string
  name: string
  kind: MediaGridKind
  url?: string
  size: string
}

const columns = defineColumns<Asset>()([
  { id: 'name', header: 'Name', cell: (r) => r.name },
  { id: 'kind', header: 'Kind', cell: (r) => r.kind },
])

const layouts = [
  mediaGridLayout<Asset>({
    thumbUrl: (r) => r.url,
    thumbKind: (r) => r.kind,
    title: (r) => r.name,
    subtitle: (r) => \`\${r.kind} · \${r.size}\`,
    aspect: 'square',
    columns: { default: 2, sm: 3, md: 4, lg: 5, xl: 6 },
    onOpen: (r) => navigate(\`/asset/\${r.id}\`),
    actions: (r) => [
      { id: 'preview', label: 'Preview', Icon: Eye, onClick: () => preview(r) },
      { id: 'open',    label: 'Open',    Icon: ExternalLink, onClick: () => navigate(r.href) },
    ],
  }),
]

<DataGridUIProvider defaultLayoutId="media-grid" defaultPageSize={40}>
  <DataGridProvider adapter={adapter}>
    <DataGridView<Asset> columns={columns} layouts={layouts} />
  </DataGridProvider>
</DataGridUIProvider>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Selection UX (Google Photos pattern)`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Gesture`}),(0,n.jsx)(r.th,{children:`Behavior`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Hover card`}),(0,n.jsx)(r.td,{children:`Circle ✓ chip appears top-left`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Click ✓`}),(0,n.jsx)(r.td,{children:`Toggle selection — first ✓ enters select mode (auto)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Body click outside mode`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`options.onOpen?(row)`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Body click inside mode`}),(0,n.jsx)(r.td,{children:`Toggle selection`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Shift-click`}),(0,n.jsx)(r.td,{children:`Range select from last clicked`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`⌘/Ctrl-click`}),(0,n.jsx)(r.td,{children:`Toggle without auto-entering mode`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Drag empty area (gaps / padding)`}),(0,n.jsx)(r.td,{children:`Rubber-band marquee`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Shift / ⌘ / Ctrl + drag a card`}),(0,n.jsx)(r.td,{children:`Rubber-band (a modified press never starts a reorder)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Touch long-press (~450ms)`}),(0,n.jsx)(r.td,{children:`Enter mode + toggle`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Arrow keys`}),(0,n.jsx)(r.td,{children:`Geometric focus move across the grid`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Space`}),(0,n.jsx)(r.td,{children:`Toggle focused card`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Enter`}),(0,n.jsx)(r.td,{children:`Open focused card`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`⌘A`}),(0,n.jsx)(r.td,{children:`Select all visible`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Esc`}),(0,n.jsx)(r.td,{children:`Clear + exit mode`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Render overrides`}),`
`,(0,n.jsx)(r.p,{children:`Every visual slot is overridable. Default to the built-ins; reach for
the override when you need custom rendering.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"mediaGridLayout"],[11,"<"],[6,"Asset"],[11,">({"]],["  ",[12,"Card"],[11,","],"           ",[1,"// override the entire card"]],["  ",[12,"Thumb"],[11,","],"          ",[1,"// just the thumbnail"]],["  ",[12,"Checkbox"],[11,","],"       ",[1,"// selection chip"]],["  ",[12,"ActionOverlay"],[11,","],"  ",[1,"// bottom-right hover row"]],["  ",[12,"Meta"],[11,","],"           ",[1,"// title/subtitle line beneath thumb"]],["  ",[12,"thumbOverlay"],[11,","],"   ",[1,"// (row, selected) => ReactNode — absolute overlay above the thumb"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`mediaGridLayout<Asset>({
  Card,           // override the entire card
  Thumb,          // just the thumbnail
  Checkbox,       // selection chip
  ActionOverlay,  // bottom-right hover row
  Meta,           // title/subtitle line beneath thumb
  thumbOverlay,   // (row, selected) => ReactNode — absolute overlay above the thumb
})
`})}),`
`,(0,n.jsx)(r.p,{children:`Override props:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"MediaGridCardProps"],[10,"<"],[12,"TRow"],[10,">"],"          ",[1,"// { row, rowId, selected, selectMode, options, ctx, onToggle, onOpen }"]],[[12,"MediaGridThumbProps"],[10,"<"],[12,"TRow"],[10,">"],"          ",[1,"// { row, kind, src, aspect }"]],[[12,"MediaGridCheckboxProps"],"             ",[1,"// { checked, label, visible, onChange } — label is the accessible name (\\"Select <title>\\")"]],[[12,"MediaGridActionOverlayProps"],[10,"<"],[12,"TRow"],[10,">"],"  ",[1,"// { row, actions, hidden }"]],[[12,"MediaGridMetaProps"],[10,"<"],[12,"TRow"],[10,">"],"           ",[1,"// { row, title, subtitle }"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`MediaGridCardProps<TRow>          // { row, rowId, selected, selectMode, options, ctx, onToggle, onOpen }
MediaGridThumbProps<TRow>          // { row, kind, src, aspect }
MediaGridCheckboxProps             // { checked, label, visible, onChange } — label is the accessible name ("Select <title>")
MediaGridActionOverlayProps<TRow>  // { row, actions, hidden }
MediaGridMetaProps<TRow>           // { row, title, subtitle }
`})}),`
`,(0,n.jsx)(r.p,{children:`Example — custom thumbnail with blurhash placeholder:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"mediaGridLayout"],[11,"<"],[6,"Asset"],[11,">({"]],["  ",[5,"Thumb"],[11,":"]," ",[11,"({"]," ",[12,"row"],[11,","]," ",[12,"src"],[11,","]," ",[12,"aspect"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[11,"{"],[5,"cn"],[11,"("],[3,"'aspect-square relative bg-muted'"],[11,","]," ",[5,"aspectClass"],[11,"("],[12,"aspect"],[11,"))}>"]],["      ",[11,"<"],[7,"BlurhashCanvas"]," ",[8,"hash"],[10,"="],[11,"{"],[12,"row"],[11,"."],[9,"blurhash"],[11,"}"]," ",[11,"/>"]],["      ",[11,"{"],[12,"src"]," ",[10,"&&"]," ",[11,"<"],[7,"img"]," ",[8,"src"],[10,"="],[11,"{"],[12,"src"],[11,"}"]," ",[8,"className"],[10,"="],[3,"\\"absolute inset-0 size-full object-cover\\""]," ",[11,"/>}"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,"),"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`mediaGridLayout<Asset>({
  Thumb: ({ row, src, aspect }) => (
    <div className={cn('aspect-square relative bg-muted', aspectClass(aspect))}>
      <BlurhashCanvas hash={row.blurhash} />
      {src && <img src={src} className="absolute inset-0 size-full object-cover" />}
    </div>
  ),
})
`})}),`
`,(0,n.jsx)(r.h2,{children:`Asset kinds`}),`
`,(0,n.jsxs)(r.p,{children:[`Default `,(0,n.jsx)(r.code,{children:`<MediaGridThumb>`}),` paints:`]}),`
`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'image'`}),` + `,(0,n.jsx)(r.code,{children:`src`}),` → `,(0,n.jsx)(r.code,{children:`<img>`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'video'`}),` + `,(0,n.jsx)(r.code,{children:`src`}),` → `,(0,n.jsx)(r.code,{children:`<video poster>`}),` with play icon`]}),`
`,(0,n.jsx)(r.li,{children:`everything else → a kind-specific Lucide icon (audio / pdf / document / archive / code / folder / unknown) over a muted square`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Add custom kinds by passing your own `,(0,n.jsx)(r.code,{children:`Thumb`}),` renderer.`]}),`
`,(0,n.jsx)(r.h2,{children:`Drag-reorder`}),`
`,(0,n.jsxs)(r.p,{children:[`When the adapter has `,(0,n.jsx)(r.code,{children:`moveRow`}),` or `,(0,n.jsx)(r.code,{children:`bulkMoveRows`}),`, each card becomes a drag source, on the in-repo DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`, through the datagrid's shared `,(0,n.jsx)(r.code,{children:`useRowReorderDnd`}),`):`]}),`
`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Cursor in left half of target = drop `,(0,n.jsx)(r.strong,{children:`before`}),`, right half = drop `,(0,n.jsx)(r.strong,{children:`after`})]}),`
`,(0,n.jsx)(r.li,{children:`Drop indicator: vertical primary-tinted bar on the target's edge`}),`
`,(0,n.jsx)(r.li,{children:`Multi-drag: if dragged card is part of the active selection, all selected cards move together (in grid order)`}),`
`,(0,n.jsx)(r.li,{children:`Preview: the dragged card itself follows the pointer; a selected batch shows as a stack with a count badge`}),`
`,(0,n.jsx)(r.li,{children:`Touch: a 250ms long-press lifts a card; the kit auto-scrolls near the scroll edge`}),`
`,(0,n.jsxs)(r.li,{children:[`Keyboard: the grid uses the kit's `,(0,n.jsx)(r.code,{children:`none`}),` policy, so the keyboard never picks a card up, the kit adds no drag instructions, and Space / Enter keep selecting / opening`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Disable via `,(0,n.jsx)(r.code,{children:`options.enableDragReorder: false`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Aspect + columns`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"mediaGridLayout"],[11,"({"]],["  ",[9,"aspect"],[11,":"]," ",[3,"'square'"]," ",[10,"|"]," ",[3,"'4/3'"]," ",[10,"|"]," ",[3,"'16/9'"]," ",[10,"|"]," ",[3,"'3/4'"]," ",[10,"|"]," ",[3,"'auto'"],[11,","]],["  ",[9,"columns"],[11,":"]," ",[11,"{"]," ",[9,"default"],[11,":"]," ",[4,"2"],[11,","]," ",[9,"sm"],[11,":"]," ",[4,"3"],[11,","]," ",[9,"md"],[11,":"]," ",[4,"4"],[11,","]," ",[9,"lg"],[11,":"]," ",[4,"5"],[11,","]," ",[9,"xl"],[11,":"]," ",[4,"6"]," ",[11,"},"]],[[11,"})"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`mediaGridLayout({
  aspect: 'square' | '4/3' | '16/9' | '3/4' | 'auto',
  columns: { default: 2, sm: 3, md: 4, lg: 5, xl: 6 },
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Maps to Tailwind's `,(0,n.jsx)(r.code,{children:`grid-cols-N`}),` / `,(0,n.jsx)(r.code,{children:`sm:grid-cols-N`}),` etc.`]}),`
`,(0,n.jsx)(r.h2,{children:`Interaction toggles`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[5,"mediaGridLayout"],[11,"({"]],["  enableRubberBand?",[11,":"]," ",[12,"boolean"],"       ",[1,"// default true"]],["  ",[12,"enableLongPress"],[10,"?:"]," ",[12,"boolean"],"        ",[1,"// default true"]],["  ",[12,"enableKeyboardNav"],[10,"?:"]," ",[12,"boolean"],"      ",[1,"// default true"]],["  ",[12,"enableDragReorder"],[10,"?:"]," ",[12,"boolean"],"      ",[1,"// default true when adapter has a move mutator"]],[[11,"})"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`mediaGridLayout({
  enableRubberBand?: boolean       // default true
  enableLongPress?: boolean        // default true
  enableKeyboardNav?: boolean      // default true
  enableDragReorder?: boolean      // default true when adapter has a move mutator
})
`})}),`
`,(0,n.jsx)(r.h2,{children:`Composable hooks`}),`
`,(0,n.jsx)(r.p,{children:`Use directly when writing a custom gallery layout from scratch:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useMediaGridSelectMode(count)`}),` — auto-enter mode (re-export of
`,(0,n.jsx)(r.code,{children:`useDataGridSelectMode`}),`)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useMediaGridRubberBand({ enabled, hostRef, onSelect })`}),` — pre-bound
to `,(0,n.jsx)(r.code,{children:`[data-media-grid-card]`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useMediaGridLongPress({ enabled, onLongPress })`}),` — pre-bound to
`,(0,n.jsx)(r.code,{children:`[data-media-grid-card]`})]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`useMediaGridKeyboardNav({ enabled, hostRef, rowIds, onToggle, onOpen })`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`useMediaGridDragReorder({ enabled, rowIds, selectedIds, onMove })`}),` — returns `,(0,n.jsx)(r.code,{children:`{ dropMark, cardProps, isDragSource }`}),`; spread `,(0,n.jsx)(r.code,{children:`cardProps(rowId)`}),` (it carries the kit's `,(0,n.jsx)(r.code,{children:`ref`}),`) on each card wrapper`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsxs)(r.p,{children:[`Or use the layout-agnostic versions from
`,(0,n.jsx)(r.a,{href:`/kits/datagrid/docs/selection`,children:`selection docs`}),`.`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};