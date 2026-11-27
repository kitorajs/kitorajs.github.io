import{zc as e}from"./index-BZuUy872.js";import{n as t}from"./lib-C0E9zsFn.js";var n=e(),r={title:`UI primitives`,description:`Outliner sidebar, arrange-mode overlay, group label chips, inline rename — opt-in pieces that mount alongside Tabster.`,order:5};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`UI primitives`}),`
`,(0,n.jsxs)(r.p,{children:[`Tabster ships four composable UI primitives that read from
`,(0,n.jsx)(r.code,{children:`<TabsterProvider>`}),`. Mount the ones you want, skip the rest.`]}),`
`,`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`<TabsterOutliner>`}),` — layout tree`]}),`
`,`
`,(0,n.jsx)(r.p,{children:`A 280px sidebar that mirrors the live dock state: groups (collapsible)
with their panels (focus on click, drag to re-home, × to delete).
Plus per-group: add panel via type picker, move group in 5 directions,
maximize, delete, inline rename.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"TabsterOutliner"],[11,","]," ",[2,"type"]," ",[12,"TabsterOutlinerPanelType"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[[2,"import"]," ",[11,"{"]," ",[12,"FileText"],[11,","]," ",[12,"TerminalSquare"],[11,","]," ",[12,"GitBranch"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'lucide-react'"]],[],[[2,"const"]," ",[12,"PANEL_CATALOG"],[10,":"]," ",[6,"TabsterOutlinerPanelType"],[11,"[]"]," ",[10,"="]," ",[11,"["]],["  ",[11,"{"]," ",[9,"type"],[11,":"]," ",[3,"'editor'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Editor'"],[11,","]," ",[9,"Icon"],[11,":"]," ",[12,"FileText"],[11,","]," ",[9,"defaultTitle"],[11,":"]," ",[3,"'untitled.tsx'"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"type"],[11,":"]," ",[3,"'terminal'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Terminal'"],[11,","]," ",[9,"Icon"],[11,":"]," ",[12,"TerminalSquare"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"type"],[11,":"]," ",[3,"'git'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Source control'"],[11,","]," ",[9,"Icon"],[11,":"]," ",[12,"GitBranch"]," ",[11,"},"]],[[11,"]"]],[],[[2,"const"]," ",[12,"PANEL_ICONS"]," ",[10,"="]," ",[11,"{"]],["  ",[9,"editor"],[11,":"]," ",[12,"FileText"],[11,","]],["  ",[9,"terminal"],[11,":"]," ",[12,"TerminalSquare"],[11,","]],["  ",[9,"git"],[11,":"]," ",[12,"GitBranch"],[11,","]],[[11,"}"]],[],[[2,"const"]," ",[11,"["],[12,"mode"],[11,","]," ",[12,"setMode"],[11,"]"]," ",[10,"="]," ",[5,"useState"],[11,"<"],[6,"TabsterOutlinerMode"]," ",[10,"|"]," ",[3,"'hidden'"],[11,">("],[3,"'dock'"],[11,")"]],[],[[11,"{"],[12,"mode"]," ",[10,"!=="]," ",[3,"'hidden'"]," ",[10,"&&"]," ",[11,"("]],["  ",[11,"<"],[7,"TabsterOutliner"]],["    ",[8,"panelCatalog"],[10,"="],[11,"{"],[12,"PANEL_CATALOG"],[11,"}"]],["    ",[8,"panelIcons"],[10,"="],[11,"{"],[12,"PANEL_ICONS"],[11,"}"]],["    ",[8,"mode"],[10,"="],[11,"{"],[12,"mode"],[11,"}"]],["    ",[8,"onModeChange"],[10,"="],[11,"{"],[12,"setMode"],[11,"}"]],["  ",[11,"/>"]],[[11,")}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { TabsterOutliner, type TabsterOutlinerPanelType } from '@kitora/tabster'
import { FileText, TerminalSquare, GitBranch } from 'lucide-react'

const PANEL_CATALOG: TabsterOutlinerPanelType[] = [
  { type: 'editor', label: 'Editor', Icon: FileText, defaultTitle: 'untitled.tsx' },
  { type: 'terminal', label: 'Terminal', Icon: TerminalSquare },
  { type: 'git', label: 'Source control', Icon: GitBranch },
]

const PANEL_ICONS = {
  editor: FileText,
  terminal: TerminalSquare,
  git: GitBranch,
}

const [mode, setMode] = useState<TabsterOutlinerMode | 'hidden'>('dock')

{mode !== 'hidden' && (
  <TabsterOutliner
    panelCatalog={PANEL_CATALOG}
    panelIcons={PANEL_ICONS}
    mode={mode}
    onModeChange={setMode}
  />
)}
`})}),`
`,(0,n.jsx)(r.p,{children:`Modes:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'dock'`}),`   inline aside docked next to the main dock`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'float'`}),`  draggable floating overlay portaled to `,(0,n.jsx)(r.code,{children:`<body>`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`'hidden'`}),` — outliner unmounted by the caller`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`The header pin / hide buttons emit through `,(0,n.jsx)(r.code,{children:`onModeChange`}),` — the caller
owns the visibility state.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Drag a panel row onto another group's row to re-home the panel (`,(0,n.jsx)(r.code,{children:`panel.api.moveTo({ group })`}),`). The drag runs on the DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`): mouse, touch and pen, or the keyboard (focus a row, Space picks it up, the arrows step through the groups, Space drops, Escape cancels), with screen-reader announcements. In `,(0,n.jsx)(r.code,{children:`'float'`}),` mode the window moves by a press anywhere except a panel row, which drags the row instead.`]}),`
`,(0,n.jsxs)(r.p,{children:[`From the keyboard, `,(0,n.jsx)(r.strong,{children:`o`}),` on a focused panel row opens (focuses) that panel, and `,(0,n.jsx)(r.strong,{children:`F2`}),` renames the focused row, the same inline rename a double-click starts: on a panel row it renames the panel, on a group's collapse button it renames the group. Enter commits, Escape cancels, and focus returns to the row. Both keys are announced through `,(0,n.jsx)(r.code,{children:`aria-keyshortcuts`}),`. F2 is a `,(0,n.jsx)(r.code,{children:`@kitora/keyboard`}),` command (`,(0,n.jsx)(r.code,{children:`TABSTER_OUTLINER_RENAME_COMMAND`}),`, `,(0,n.jsx)(r.code,{children:`tabster.outliner.rename`}),`) that fires only while focus is inside the outliner and never from a text field, so a host can list or rebind it like any other key.`]}),`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`<TabsterArrangeOverlay>`}),` — edit-layout mode`]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`Overlays the dock with one draggable tile per group; each tile has 5
drop zones (top / right / bottom / left / center). Drag a tile onto
another tile's zone to relocate the source group via
`,(0,n.jsx)(r.code,{children:`group.api.moveTo({ group, position })`}),`. Dims panel contents
underneath so users see they're editing structure.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Tiles drag on the DnD kit (`,(0,n.jsx)(r.code,{children:`@kitora/dnd`}),`), so the keyboard works too: focus a tile, Space picks it up, the arrows step through the other tiles' zones (the dragged tile's own zones are skipped), Space drops, Escape cancels; each step and drop is announced.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"TabsterArrangeOverlay"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[11,"["],[12,"arrangeMode"],[11,","]," ",[12,"setArrangeMode"],[11,"]"]," ",[10,"="]," ",[5,"useState"],[11,"("],[4,"false"],[11,")"]],[],[[11,"<"],[7,"TabsterDockHost"],[11,">"]],["  ",[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]," ",[11,"/>"]],["  ",[11,"<"],[7,"TabsterArrangeOverlay"]," ",[8,"active"],[10,"="],[11,"{"],[12,"arrangeMode"],[11,"}"]," ",[11,"/>"]],[[11,"</"],[7,"TabsterDockHost"],[11,">"]],[[11,"<"],[7,"button"]," ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[5,"setArrangeMode"],[11,"("],[12,"v"]," ",[2,"=>"]," ",[10,"!"],[12,"v"],[11,")}>"]],["  ",[11,"{"],[12,"arrangeMode"]," ",[10,"?"]," ",[3,"'Done'"]," ",[10,":"]," ",[3,"'Arrange'"],[11,"}"]],[[11,"</"],[7,"button"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { TabsterArrangeOverlay } from '@kitora/tabster'

const [arrangeMode, setArrangeMode] = useState(false)

<TabsterDockHost>
  <Tabster panels={PANELS.panels} initialPanels={INITIAL} />
  <TabsterArrangeOverlay active={arrangeMode} />
</TabsterDockHost>
<button onClick={() => setArrangeMode(v => !v)}>
  {arrangeMode ? 'Done' : 'Arrange'}
</button>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Toggle the `,(0,n.jsx)(r.code,{children:`active`}),` prop and the overlay handles the rest: re-measures
group rects on every dock change, paints the dim layer, intercepts
drag-drop. Without provider, pass `,(0,n.jsx)(r.code,{children:`api`}),` / `,(0,n.jsx)(r.code,{children:`hostRef`}),` / `,(0,n.jsx)(r.code,{children:`namesStore`}),`
explicitly.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`tabster-arrange-mode`}),` CSS class is applied to the dock host
automatically while active — `,(0,n.jsx)(r.code,{children:`@kitora/tabster/styles.css`}),` (import it once at the app root) defines the dim
filter. Override with `,(0,n.jsx)(r.code,{children:`dimClassName`}),` if you want a different look.`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Group label chips — `,(0,n.jsx)(r.code,{children:`createTabsterGroupLabel`})]}),`
`,`
`,(0,n.jsxs)(r.p,{children:[`The dock doesn't show user-facing group names by default. Tabster
provides a chip renderer you bind to a shared `,(0,n.jsx)(r.code,{children:`TabsterGroupNamesStore`}),`
and pass via `,(0,n.jsx)(r.code,{children:`groupHeaderPrefix`}),`:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"createTabsterGroupLabel"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[12,"GroupLabel"]," ",[10,"="]," ",[5,"createTabsterGroupLabel"],[11,"("],[12,"namesStore"],[11,","]," ",[11,"{"]],["  ",[9,"fallback"],[11,":"]," ",[3,"'id'"],[11,","],"                    ",[1,"// or 'empty'"]],[[11,"})"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]],["  ",[8,"groupHeaderPrefix"],[10,"="],[11,"{"],[12,"GroupLabel"],[11,"}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { createTabsterGroupLabel } from '@kitora/tabster'

const GroupLabel = createTabsterGroupLabel(namesStore, {
  fallback: 'id',                    // or 'empty'
})

<Tabster
  panels={PANELS.panels}
  groupHeaderPrefix={GroupLabel}
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Under `,(0,n.jsx)(r.code,{children:`<TabsterProvider>`}),` you can skip this — Tabster auto-binds when
no prefix prop is provided.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Each chip shows a stable colored dot (hashed from group id) plus the
display name. Rename a group from the outliner (or via
`,(0,n.jsx)(r.code,{children:`namesStore.setName(id, name)`}),`) and the chip updates immediately.`]}),`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`<TabsterInlineRename>`}),` — double-click-to-rename input`]}),`
`,`
`,(0,n.jsx)(r.p,{children:`Tiny controlled input used internally by the outliner. Surfaced for
custom UIs:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"TabsterInlineRename"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[11,"["],[12,"editing"],[11,","]," ",[12,"setEditing"],[11,"]"]," ",[10,"="]," ",[5,"useState"],[11,"("],[4,"false"],[11,")"]],[[2,"const"]," ",[11,"["],[12,"name"],[11,","]," ",[12,"setName"],[11,"]"]," ",[10,"="]," ",[5,"useState"],[11,"("],[3,"'Untitled'"],[11,")"]],[],[[12,"editing"]," ",[10,"?"]," ",[11,"("]],["  ",[11,"<"],[7,"TabsterInlineRename"]],["    ",[8,"initial"],[10,"="],[11,"{"],[12,"name"],[11,"}"]],["    ",[8,"onCommit"],[10,"="],[11,"{("],[12,"next"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["      ",[5,"setEditing"],[11,"("],[4,"false"],[11,")"]],["      ",[2,"if"]," ",[11,"("],[12,"next"],[11,"."],[5,"trim"],[11,"())"]," ",[5,"setName"],[11,"("],[12,"next"],[11,"."],[5,"trim"],[11,"())"]],["    ",[11,"}}"]],["    ",[8,"onCancel"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[5,"setEditing"],[11,"("],[4,"false"],[11,")}"]],["  ",[11,"/>"]],[[11,")"]," ",[10,":"]," ",[11,"("]],["  ",[11,"<"],[7,"span"]," ",[8,"onDoubleClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[5,"setEditing"],[11,"("],[4,"true"],[11,")}>{"],[12,"name"],[11,"}</"],[7,"span"],[11,">"]],[[11,")"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { TabsterInlineRename } from '@kitora/tabster'

const [editing, setEditing] = useState(false)
const [name, setName] = useState('Untitled')

editing ? (
  <TabsterInlineRename
    initial={name}
    onCommit={(next) => {
      setEditing(false)
      if (next.trim()) setName(next.trim())
    }}
    onCancel={() => setEditing(false)}
  />
) : (
  <span onDoubleClick={() => setEditing(true)}>{name}</span>
)
`})}),`
`,(0,n.jsx)(r.p,{children:`Autofocus + select-on-mount, commits on Enter / blur, cancels on Esc.`}),`
`,(0,n.jsxs)(r.h2,{children:[`Names store — `,(0,n.jsx)(r.code,{children:`createGroupNamesStore`})]}),`
`,`
`,(0,n.jsx)(r.p,{children:`The registry that powers group labels + outliner rows + arrange tiles.
Has subscribe / setName / removeName / reconcile / getName. Tabster's
provider creates one automatically, but you can inject yours:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"createGroupNamesStore"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[12,"store"]," ",[10,"="]," ",[5,"createGroupNamesStore"],[11,"({"]],["  ",[5,"defaultName"],[11,":"]," ",[11,"("],[12,"n"],[11,")"]," ",[2,"=>"]," ",[3,"\`Editor "],[11,"\${"],[12,"n"],[11,"}"],[3,"\`"],[11,","]],["  ",[9,"initial"],[11,":"]," ",[11,"{"]," ",[3,"'group-abc'"],[11,":"]," ",[3,"'Inbox'"]," ",[11,"},"]],[[11,"})"]],[],[[11,"<"],[7,"TabsterProvider"]," ",[8,"namesStore"],[10,"="],[11,"{"],[12,"store"],[11,"}>"]],["  …"],[[11,"</"],[7,"TabsterProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { createGroupNamesStore } from '@kitora/tabster'

const store = createGroupNamesStore({
  defaultName: (n) => \`Editor \${n}\`,
  initial: { 'group-abc': 'Inbox' },
})

<TabsterProvider namesStore={store}>
  …
</TabsterProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`reconcile(liveIds)`}),` is called by the outliner on every dock layout
change — it auto-assigns a default name to unseen ids and
cleans up names for deleted groups. Seeded entries survive reconcile.`]}),`
`,(0,n.jsx)(r.h2,{children:`Palette utilities`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"paletteFor"],[11,","]," ",[12,"TABSTER_GROUP_PALETTE"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[12,"palette"]," ",[10,"="]," ",[5,"paletteFor"],[11,"("],[3,"'group-1'"],[11,")"]],[[1,"// { dot: 'bg-emerald-500', chip: 'bg-emerald-500/15 text-emerald-700 …' }"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { paletteFor, TABSTER_GROUP_PALETTE } from '@kitora/tabster'

const palette = paletteFor('group-1')
// { dot: 'bg-emerald-500', chip: 'bg-emerald-500/15 text-emerald-700 …' }
`})}),`
`,(0,n.jsx)(r.p,{children:`Use the same hash → palette mapping anywhere you want group colors
to match (custom outliner, breadcrumb, command palette result list).`})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};