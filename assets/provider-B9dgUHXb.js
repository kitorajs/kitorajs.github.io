import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Provider & composition`,description:`Wire Tabster + outliner + arrange overlay together with one shared context.`,order:4};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Provider & composition`}),`
`,(0,n.jsxs)(r.p,{children:[`Tabster works as a single component. For richer UIs — adding a layout
outliner sidebar, an arrange-mode overlay, or per-group label chips —
several pieces need to share the same imperative api, names registry,
and DOM host. `,(0,n.jsx)(r.code,{children:`<TabsterProvider>`}),` owns that shared state so siblings
read it from context instead of receiving props from you.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Shape`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"TabsterProvider"],[11,">"]],["  ",[11,"<"],[7,"TabsterDockHost"],[11,">"]],["    ",[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]," ",[11,"/>"]],["    ",[11,"<"],[7,"TabsterArrangeOverlay"]," ",[8,"active"],[10,"="],[11,"{"],[12,"arrangeMode"],[11,"}"]," ",[11,"/>"]],["  ",[11,"</"],[7,"TabsterDockHost"],[11,">"]],["  ",[11,"<"],[7,"TabsterOutliner"]],["    ",[8,"panelCatalog"],[10,"="],[11,"{"],[12,"PANEL_CATALOG"],[11,"}"]],["    ",[8,"mode"],[10,"="],[11,"{"],[12,"outlinerMode"],[11,"}"]],["    ",[8,"onModeChange"],[10,"="],[11,"{"],[12,"setOutlinerMode"],[11,"}"]],["  ",[11,"/>"]],[[11,"</"],[7,"TabsterProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TabsterProvider>
  <TabsterDockHost>
    <Tabster panels={PANELS.panels} initialPanels={INITIAL} />
    <TabsterArrangeOverlay active={arrangeMode} />
  </TabsterDockHost>
  <TabsterOutliner
    panelCatalog={PANEL_CATALOG}
    mode={outlinerMode}
    onModeChange={setOutlinerMode}
  />
</TabsterProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`That's it — no `,(0,n.jsx)(r.code,{children:`api={}`}),` / `,(0,n.jsx)(r.code,{children:`hostRef={}`}),` / `,(0,n.jsx)(r.code,{children:`namesStore={}`}),` props.`]}),`
`,(0,n.jsx)(r.h2,{children:`Wiring details`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<TabsterProvider>`}),` creates a fresh `,(0,n.jsx)(r.code,{children:`TabsterGroupNamesStore`}),` on mount.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<TabsterDockHost>`}),` renders a `,(0,n.jsx)(r.code,{children:`relative min-w-0 flex-1`}),` div with a
ref registered on the provider — the arrange overlay positions tiles
relative to it.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<Tabster>`}),` reads the context and:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`auto-publishes its imperative api on `,(0,n.jsx)(r.code,{children:`onReady`})]}),`
`,(0,n.jsxs)(r.li,{children:[`auto-binds a `,(0,n.jsx)(r.code,{children:`createTabsterGroupLabel(store)`}),` if you didn't pass a
`,(0,n.jsx)(r.code,{children:`groupHeaderPrefix`}),` explicitly`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<TabsterOutliner>`}),` + `,(0,n.jsx)(r.code,{children:`<TabsterArrangeOverlay>`}),` fall back to the
context for `,(0,n.jsx)(r.code,{children:`api`}),`, `,(0,n.jsx)(r.code,{children:`namesStore`}),`, and `,(0,n.jsx)(r.code,{children:`hostRef`}),` — explicit props
still override.`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.h2,{children:`Why not always require the provider?`}),`
`,(0,n.jsx)(r.p,{children:`You don't need outliner / arrange / label chips to use Tabster. The
provider is opt-in. Standalone callers skip it entirely:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[10,"..."],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[10,"..."],[11,"}"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<Tabster panels={...} initialPanels={...} />
`})}),`
`,(0,n.jsx)(r.h2,{children:`Sharing a names store across routes`}),`
`,(0,n.jsx)(r.p,{children:`If you want group names to survive route changes, hoist the store and
inject it into the provider:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":'[[[2,"import"]," ",[11,"{"]," ",[12,"createGroupNamesStore"]," ",[11,"}"]," ",[2,"from"]," ",[3,"\'@kitora/tabster\'"]],[],[[2,"const"]," ",[12,"sharedStore"]," ",[10,"="]," ",[5,"createGroupNamesStore"],[11,"({"]],["  ",[5,"defaultName"],[11,":"]," ",[11,"("],[12,"n"],[11,")"]," ",[2,"=>"]," ",[3,"`Editor "],[11,"${"],[12,"n"],[11,"}"],[3,"`"],[11,","]],[[11,"})"]],[],[[2,"function"]," ",[5,"App"],[11,"()"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"TabsterProvider"]," ",[8,"namesStore"],[10,"="],[11,"{"],[12,"sharedStore"],[11,"}>"]],["      ",[11,"<"],[7,"Routes"]," ",[11,"/>"]],["    ",[11,"</"],[7,"TabsterProvider"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]',"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { createGroupNamesStore } from '@kitora/tabster'

const sharedStore = createGroupNamesStore({
  defaultName: (n) => \`Editor \${n}\`,
})

function App() {
  return (
    <TabsterProvider namesStore={sharedStore}>
      <Routes />
    </TabsterProvider>
  )
}
`})}),`
`,(0,n.jsx)(r.p,{children:`Reading the same store from a child:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTabsterContext"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"GroupNameDebugger"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"namesStore"]," ",[11,"}"]," ",[10,"="]," ",[5,"useTabsterContext"],[11,"()"]],[[11,"  "],[1,"// …"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTabsterContext } from '@kitora/tabster'

function GroupNameDebugger() {
  const { namesStore } = useTabsterContext()
  // …
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`useTabsterContext()`}),` throws when used outside a provider — pair with
`,(0,n.jsx)(r.code,{children:`useOptionalTabsterContext()`}),` for shared components that should work
both inside and outside.`]}),`
`,`
`,`
`,(0,n.jsx)(r.h2,{children:`Custom group-naming pattern`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"TabsterProvider"]],["  ",[8,"namesStoreOptions"],[10,"="],[11,"{{"]],["    ",[5,"defaultName"],[11,":"]," ",[11,"("],[12,"n"],[11,")"]," ",[2,"=>"]," ",[3,"\`Workspace "],[11,"\${"],[12,"n"],[11,"}"],[3,"\`"],[11,","]],["    ",[9,"initial"],[11,":"]," ",[11,"{"]," ",[3,"'group-1'"],[11,":"]," ",[3,"'Inbox'"]," ",[11,"},"],"     ",[1,"// seed values"]],["  ",[11,"}}"]],[[11,">"]],["  …"],[[11,"</"],[7,"TabsterProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TabsterProvider
  namesStoreOptions={{
    defaultName: (n) => \`Workspace \${n}\`,
    initial: { 'group-1': 'Inbox' },     // seed values
  }}
>
  …
</TabsterProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The seeded entries survive `,(0,n.jsx)(r.code,{children:`reconcile`}),` — they don't get overwritten
by the default pattern.`]}),`
`,(0,n.jsx)(r.h2,{children:`Standalone usage (no provider)`}),`
`,(0,n.jsx)(r.p,{children:`Every consumer still accepts explicit props as overrides. The earlier
"manual wiring" pattern continues to work:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"apiRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"TabsterApi"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[[2,"const"]," ",[12,"namesStore"]," ",[10,"="]," ",[5,"useMemo"],[11,"(()"]," ",[2,"=>"]," ",[5,"createGroupNamesStore"],[11,"(),"]," ",[11,"[])"]],[[2,"const"]," ",[12,"hostRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"HTMLDivElement"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[[2,"const"]," ",[12,"GroupLabel"]," ",[10,"="]," ",[5,"useMemo"],[11,"(()"]," ",[2,"=>"]," ",[5,"createTabsterGroupLabel"],[11,"("],[12,"namesStore"],[11,"),"]," ",[11,"["],[12,"namesStore"],[11,"])"]],[],[[11,"<"],[7,"div"]," ",[8,"ref"],[10,"="],[11,"{"],[12,"hostRef"],[11,"}"]," ",[8,"className"],[10,"="],[3,"\\"relative\\""],[11,">"]],["  ",[11,"<"],[7,"Tabster"]],["    ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]],["    ",[8,"onReady"],[10,"="],[11,"{({"]," ",[12,"api"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("],[12,"apiRef"],[11,"."],[9,"current"]," ",[10,"="]," ",[12,"api"],[11,")}"]],["    ",[8,"groupHeaderPrefix"],[10,"="],[11,"{"],[12,"GroupLabel"],[11,"}"]],["  ",[11,"/>"]],["  ",[11,"<"],[7,"TabsterArrangeOverlay"]],["    ",[8,"active"],[10,"="],[11,"{"],[12,"arrangeMode"],[11,"}"]],["    ",[8,"api"],[10,"="],[11,"{"],[12,"apiRef"],[11,"."],[9,"current"],[11,"}"]],["    ",[8,"hostRef"],[10,"="],[11,"{"],[12,"hostRef"],[11,"}"]],["    ",[8,"namesStore"],[10,"="],[11,"{"],[12,"namesStore"],[11,"}"]],["  ",[11,"/>"]],[[11,"</"],[7,"div"],[11,">"]],[[11,"<"],[7,"TabsterOutliner"]],["  ",[8,"api"],[10,"="],[11,"{"],[12,"apiRef"],[11,"."],[9,"current"],[11,"}"]],["  ",[8,"namesStore"],[10,"="],[11,"{"],[12,"namesStore"],[11,"}"]],["  ",[8,"panelCatalog"],[10,"="],[11,"{"],[12,"PANEL_CATALOG"],[11,"}"]],["  ",[8,"mode"],[10,"="],[11,"{"],[12,"outlinerMode"],[11,"}"]],["  ",[8,"onModeChange"],[10,"="],[11,"{"],[12,"setOutlinerMode"],[11,"}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const apiRef = useRef<TabsterApi | null>(null)
const namesStore = useMemo(() => createGroupNamesStore(), [])
const hostRef = useRef<HTMLDivElement | null>(null)
const GroupLabel = useMemo(() => createTabsterGroupLabel(namesStore), [namesStore])

<div ref={hostRef} className="relative">
  <Tabster
    panels={PANELS.panels}
    onReady={({ api }) => (apiRef.current = api)}
    groupHeaderPrefix={GroupLabel}
  />
  <TabsterArrangeOverlay
    active={arrangeMode}
    api={apiRef.current}
    hostRef={hostRef}
    namesStore={namesStore}
  />
</div>
<TabsterOutliner
  api={apiRef.current}
  namesStore={namesStore}
  panelCatalog={PANEL_CATALOG}
  mode={outlinerMode}
  onModeChange={setOutlinerMode}
/>
`})}),`
`,(0,n.jsx)(r.p,{children:`Use the provider when you have ≥ 2 siblings reading the same wiring.
For one-off Tabster mounts, skip it.`})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};