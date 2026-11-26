import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Panel registry`,description:`Register panel components, lazy-load on demand, control when they mount and unmount.`,order:2};function i(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Panel registry`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`panels`}),` prop is the lookup table for every tab. Each key is a
`,(0,n.jsx)(r.strong,{children:`component name`}),` that `,(0,n.jsx)(r.code,{children:`TabsterPanelSpec.component`}),` references — when a
panel is added, Tabster mounts the corresponding component inside the
tab body.`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{{"]],["    ",[9,"editor"],[11,":"]," ",[12,"EditorPanel"],[11,","]],["    ",[9,"terminal"],[11,":"]," ",[12,"TerminalPanel"],[11,","]],["    ",[9,"notes"],[11,":"]," ",[12,"NotesPanel"],[11,","]],["  ",[11,"}}"]],["  ",[8,"initialPanels"],[10,"="],[11,"{["]],["    ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'a'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'a.tsx'"]," ",[11,"},"]],["    ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'b'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'terminal'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'zsh'"]," ",[11,"},"]],["  ",[11,"]}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<Tabster
  panels={{
    editor: EditorPanel,
    terminal: TerminalPanel,
    notes: NotesPanel,
  }}
  initialPanels={[
    { id: 'a', component: 'editor', title: 'a.tsx' },
    { id: 'b', component: 'terminal', title: 'zsh' },
  ]}
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Multiple panels can share the same `,(0,n.jsx)(r.code,{children:`component`}),` — that's how you get
five "editor" tabs from one component registration.`]}),`
`,(0,n.jsx)(r.h2,{children:`Typesafe registry`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`component: string`}),` works but typos crash only at runtime. Use
`,(0,n.jsx)(r.code,{children:`defineTabsterPanels`}),` for autocomplete + compile-time typo errors.`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"defineTabsterPanels"],[11,","]," ",[12,"Tabster"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[12,"PANELS"]," ",[10,"="]," ",[5,"defineTabsterPanels"],[11,"({"]],["  ",[9,"editor"],[11,":"]," ",[12,"EditorPanel"],[11,","]],["  ",[9,"terminal"],[11,":"]," ",[12,"TerminalPanel"],[11,","]],["  ",[9,"notes"],[11,":"]," ",[12,"NotesPanel"],[11,","]],[[11,"})"]],[],[[2,"const"]," ",[12,"INITIAL"]," ",[10,"="]," ",[12,"PANELS"],[11,"."],[5,"specs"],[11,"<{"]," ",[12,"path"],[10,"?:"]," ",[6,"string"]," ",[11,"}>(["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'a'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'a.tsx'"],[11,","]," ",[9,"params"],[11,":"]," ",[11,"{"]," ",[9,"path"],[11,":"]," ",[3,"'a.tsx'"]," ",[11,"}"]," ",[11,"},"]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'t'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'terminal'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'zsh'"]," ",[11,"},"]],[[11,"  "],[1,"// { id: 'x', component: 'editorr', title: '...' }  ← tsc error"]],[[11,"])"]],[],[[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]," ",[11,"/>"]],[],[[1,"// imperative path — same narrowing:"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"addPanel"],[11,"("]],["  ",[12,"PANELS"],[11,"."],[5,"spec"],[11,"({"]," ",[9,"id"],[11,":"]," ",[3,"'n'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'notes'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'README.md'"]," ",[11,"}),"]],[[11,")"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { defineTabsterPanels, Tabster } from '@kitora/tabster'

const PANELS = defineTabsterPanels({
  editor: EditorPanel,
  terminal: TerminalPanel,
  notes: NotesPanel,
})

const INITIAL = PANELS.specs<{ path?: string }>([
  { id: 'a', component: 'editor', title: 'a.tsx', params: { path: 'a.tsx' } },
  { id: 't', component: 'terminal', title: 'zsh' },
  // { id: 'x', component: 'editorr', title: '...' }  ← tsc error
])

<Tabster panels={PANELS.panels} initialPanels={INITIAL} />

// imperative path — same narrowing:
apiRef.current?.addPanel(
  PANELS.spec({ id: 'n', component: 'notes', title: 'README.md' }),
)
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The registry's `,(0,n.jsx)(r.code,{children:`.spec(...)`}),` / `,(0,n.jsx)(r.code,{children:`.specs([...])`}),` helpers are identity
functions — zero runtime cost, all type-level. `,(0,n.jsx)(r.code,{children:`<Tabster panels={...}>`}),`
still accepts the loose `,(0,n.jsx)(r.code,{children:`Record<string, TabsterPanelEntry>`}),` shape, so
opting out is free.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Lazy panels`}),`
`,(0,n.jsxs)(r.p,{children:[`Wrap dynamic imports in `,(0,n.jsx)(r.code,{children:`React.lazy()`}),` and Tabster will mount them
inside a `,(0,n.jsx)(r.code,{children:`<Suspense>`}),` boundary on first use.`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"lazy"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'react'"]],[],[[2,"const"]," ",[12,"PANELS"]," ",[10,"="]," ",[5,"defineTabsterPanels"],[11,"({"]],["  ",[9,"editor"],[11,":"]," ",[12,"EditorPanel"],[11,","],"                              ",[1,"// eager"]],["  ",[9,"notes"],[11,":"]," ",[5,"lazy"],[11,"(()"]," ",[2,"=>"]," ",[2,"import"],[11,"("],[3,"'./panels/notes'"],[11,")),"],"      ",[1,"// code-split"]],["  ",[9,"database"],[11,":"]," ",[5,"lazy"],[11,"(()"]," ",[2,"=>"]," ",[2,"import"],[11,"("],[3,"'./panels/database'"],[11,")),"]],[[11,"})"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]],["  ",[8,"panelFallback"],[10,"="],[11,"{<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"grid h-full place-items-center\\""],[11,">"],"Loading…",[11,"</"],[7,"div"],[11,">}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { lazy } from 'react'

const PANELS = defineTabsterPanels({
  editor: EditorPanel,                              // eager
  notes: lazy(() => import('./panels/notes')),      // code-split
  database: lazy(() => import('./panels/database')),
})

<Tabster
  panels={PANELS.panels}
  panelFallback={<div className="grid h-full place-items-center">Loading…</div>}
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`We deliberately don't auto-wrap bare `,(0,n.jsx)(r.code,{children:`() => import('./x')`}),` factories
because a zero-arg function component has the same shape and would
crash on render. Always wrap in `,(0,n.jsx)(r.code,{children:`lazy()`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Typed params`}),`
`,(0,n.jsxs)(r.p,{children:[`The generic `,(0,n.jsx)(r.code,{children:`P`}),` on `,(0,n.jsx)(r.code,{children:`TabsterPanelSpec<P>`}),` flows into the panel
component's `,(0,n.jsx)(r.code,{children:`params`}),` prop:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[2,"type"]," ",[11,"{"]," ",[12,"TabsterPanelRenderProps"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"interface"]," ",[6,"EditorParams"]," ",[11,"{"]],["  ",[12,"path"],[10,":"]," ",[6,"string"]],["  ",[12,"language"],[10,"?:"]," ",[3,"'ts'"]," ",[10,"|"]," ",[3,"'tsx'"]," ",[10,"|"]," ",[3,"'md'"]],[[11,"}"]],[],[[2,"function"]," ",[5,"EditorPanel"],[11,"("],[12,"props"],[10,":"]," ",[6,"TabsterPanelRenderProps"],[11,"<"],[6,"EditorParams"],[11,">)"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"<"],[7,"code"],[11,">{"],[12,"props"],[11,"."],[9,"params"],[11,"?."],[9,"path"],[11,"}</"],[7,"code"],[11,">"]],[[11,"}"]],[],[[1,"// later:"]],[[12,"PANELS"],[11,"."],[5,"spec"],[11,"<"],[6,"EditorParams"],[11,">({"]],["  ",[9,"id"],[11,":"]," ",[3,"'a'"],[11,","]],["  ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]],["  ",[9,"title"],[11,":"]," ",[3,"'a.tsx'"],[11,","]],["  ",[9,"params"],[11,":"]," ",[11,"{"]," ",[9,"path"],[11,":"]," ",[3,"'a.tsx'"],[11,","]," ",[9,"language"],[11,":"]," ",[3,"'tsx'"]," ",[11,"},"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import type { TabsterPanelRenderProps } from '@kitora/tabster'

interface EditorParams {
  path: string
  language?: 'ts' | 'tsx' | 'md'
}

function EditorPanel(props: TabsterPanelRenderProps<EditorParams>) {
  return <code>{props.params?.path}</code>
}

// later:
PANELS.spec<EditorParams>({
  id: 'a',
  component: 'editor',
  title: 'a.tsx',
  params: { path: 'a.tsx', language: 'tsx' },
})
`})}),`
`,(0,n.jsx)(r.p,{children:`Or read from inside the panel via the hooks:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTabsterPanelParams"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"EditorPanel"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"params"]," ",[10,"="]," ",[5,"useTabsterPanelParams"],[11,"<"],[6,"EditorParams"],[11,">()"]],["  ",[2,"return"]," ",[11,"<"],[7,"code"],[11,">{"],[12,"params"],[11,"?."],[9,"path"],[11,"}</"],[7,"code"],[11,">"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTabsterPanelParams } from '@kitora/tabster'

function EditorPanel() {
  const params = useTabsterPanelParams<EditorParams>()
  return <code>{params?.path}</code>
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Render strategy`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`renderer`}),` controls when the panel React tree is mounted:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Value`}),(0,n.jsx)(r.th,{children:`When mounted`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`'onlyWhenVisible'`}),` (default)`]}),(0,n.jsx)(r.td,{children:`On activation; unmounts when another tab is active`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`'always'`})}),(0,n.jsx)(r.td,{children:`On add; stays mounted across tab switches`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Use `,(0,n.jsx)(r.code,{children:`'always'`}),` for terminals, websockets, video, iframes — anything
that owns state you don't want to recreate on every tab switch:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"PANELS"],[11,"."],[5,"spec"],[11,"({"]],["  ",[9,"id"],[11,":"]," ",[3,"'term.1'"],[11,","]],["  ",[9,"component"],[11,":"]," ",[3,"'terminal'"],[11,","]],["  ",[9,"title"],[11,":"]," ",[3,"'zsh'"],[11,","]],["  ",[9,"renderer"],[11,":"]," ",[3,"'always'"],[11,","],"          ",[1,"// ← survives tab switch"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`PANELS.spec({
  id: 'term.1',
  component: 'terminal',
  title: 'zsh',
  renderer: 'always',          // ← survives tab switch
})
`})}),`
`,(0,n.jsx)(r.p,{children:`Or set the default for every panel:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]],["  ",[8,"defaultRenderer"],[10,"="],[3,"\\"always\\""]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<Tabster
  panels={PANELS.panels}
  defaultRenderer="always"
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Closing a panel (`,(0,n.jsx)(r.code,{children:`api.removePanel`}),`) always unmounts. Use
`,(0,n.jsx)(r.a,{href:`/kits/tabster/docs/lifecycle`,children:(0,n.jsx)(r.code,{children:`useTabsterPanelClose`})}),` to tear down the
underlying session.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Imperative add / remove`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"apiRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"TabsterApi"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[],[[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"."],[9,"panels"],[11,"}"]," ",[8,"onReady"],[10,"="],[11,"{({"]," ",[12,"api"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("],[12,"apiRef"],[11,"."],[9,"current"]," ",[10,"="]," ",[12,"api"],[11,")}"]," ",[11,"/>"]],[],[[1,"// somewhere:"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"addPanel"],[11,"("]],["  ",[12,"PANELS"],[11,"."],[5,"spec"],[11,"({"]],["    ",[9,"id"],[11,":"]," ",[3,"\`editor."],[11,"\${"],[12,"Date"],[11,"."],[5,"now"],[11,"()"],[11,"}"],[3,"\`"],[11,","]],["    ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]],["    ",[9,"title"],[11,":"]," ",[3,"'untitled.tsx'"],[11,","]],["    ",[9,"position"],[11,":"]," ",[11,"{"]," ",[9,"referencePanel"],[11,":"]," ",[3,"'a'"],[11,","]," ",[9,"direction"],[11,":"]," ",[3,"'right'"]," ",[11,"},"]],["  ",[11,"}),"]],[[11,")"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"removePanel"],[11,"("],[3,"'editor.123'"],[11,")"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"movePanel"],[11,"("],[3,"'editor.123'"],[11,","]," ",[11,"{"]," ",[9,"groupId"],[11,":"]," ",[3,"'sidebar'"]," ",[11,"})"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"popoutPanel"],[11,"("],[3,"'editor.123'"],[11,")"],"   ",[1,"// → real OS window"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"floatPanel"],[11,"("],[3,"'editor.123'"],[11,")"],"    ",[1,"// → in-page floating"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const apiRef = useRef<TabsterApi | null>(null)

<Tabster panels={PANELS.panels} onReady={({ api }) => (apiRef.current = api)} />

// somewhere:
apiRef.current?.addPanel(
  PANELS.spec({
    id: \`editor.\${Date.now()}\`,
    component: 'editor',
    title: 'untitled.tsx',
    position: { referencePanel: 'a', direction: 'right' },
  }),
)
apiRef.current?.removePanel('editor.123')
apiRef.current?.movePanel('editor.123', { groupId: 'sidebar' })
apiRef.current?.popoutPanel('editor.123')   // → real OS window
apiRef.current?.floatPanel('editor.123')    // → in-page floating
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`addPanel`}),` is idempotent — re-adding the same `,(0,n.jsx)(r.code,{children:`id`}),` is a no-op
(protects against React StrictMode double-effects).`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};