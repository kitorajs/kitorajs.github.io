import{Ic as e}from"./index-B9ukmIN1.js";import{n as t}from"./lib-CKWRlO6G.js";var n=e(),r={title:`Panel lifecycle`,description:`Hook into your own panel's mount, visibility, and close from inside the component.`,order:3};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Panel lifecycle`}),`
`,(0,n.jsx)(r.p,{children:`Tabster auto-wires a React context per panel so any component inside
a tab can read its own handle without prop drilling — plus a
set of hooks for the common subscriptions.`}),`
`,(0,n.jsx)(r.h2,{children:`The hooks`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Hook`}),(0,n.jsx)(r.th,{children:`Use`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanel<P>()`})}),(0,n.jsxs)(r.td,{children:[`The panel's render props: `,(0,n.jsx)(r.code,{children:`{ id, title, params, isActive, api }`}),` (`,(0,n.jsx)(r.code,{children:`api`}),` is the dock's)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanelApi()`})}),(0,n.jsxs)(r.td,{children:[`The panel's own handle: `,(0,n.jsx)(r.code,{children:`{ id, isActive, isVisible, close(), setTitle() }`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterContainerApi()`})}),(0,n.jsx)(r.td,{children:`The dock's api — open sibling tabs from inside`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanelParams<P>()`})}),(0,n.jsx)(r.td,{children:`Typed params shorthand`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanelClose(fn)`})}),(0,n.jsx)(r.td,{children:`Run on close`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanelVisible(fn)`})}),(0,n.jsx)(r.td,{children:`Visibility change`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useTabsterPanelActive(fn)`})}),(0,n.jsx)(r.td,{children:`Focus / active change`})]})]})]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.p,{children:`Every hook works as long as the component renders inside a Tabster
panel — Tabster wraps each registered panel in a provider
automatically.`}),`
`,(0,n.jsx)(r.h2,{children:`Closing a session`}),`
`,(0,n.jsx)(r.p,{children:`The most common case: tear down a terminal / websocket / video stream
when the user closes the tab.`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTabsterPanelClose"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"TerminalPanel"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"session"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"TerminalSession"],[11,">()"]],[],["  ",[5,"useEffect"],[11,"(()"]," ",[2,"=>"]," ",[11,"{"]],["    ",[12,"session"],[11,"."],[9,"current"]," ",[10,"="]," ",[5,"openSession"],[11,"()"]],["  ",[11,"},"]," ",[11,"[])"]],[],[[11,"  "],[1,"// Fires when the tab is removed via the × button or api.removePanel."]],["  ",[5,"useTabsterPanelClose"],[11,"(()"]," ",[2,"=>"]," ",[11,"{"]],["    ",[12,"session"],[11,"."],[9,"current"],[11,"?."],[5,"close"],[11,"()"]],["  ",[11,"})"]],[],["  ",[2,"return"]," ",[11,"<"],[7,"Term"]," ",[11,"/>"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTabsterPanelClose } from '@kitora/tabster'

function TerminalPanel() {
  const session = useRef<TerminalSession>()

  useEffect(() => {
    session.current = openSession()
  }, [])

  // Fires when the tab is removed via the × button or api.removePanel.
  useTabsterPanelClose(() => {
    session.current?.close()
  })

  return <Term />
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Implementation: the dock unmounts the panel React tree on close, so
the hook piggy-backs on `,(0,n.jsx)(r.code,{children:`useEffect`}),` cleanup. The latest-handler-ref
pattern is built in — your callback can close over fresh state.`]}),`
`,(0,n.jsx)(r.h3,{children:`Tab-switch caveat`}),`
`,(0,n.jsxs)(r.p,{children:[`With `,(0,n.jsx)(r.code,{children:`renderer: 'onlyWhenVisible'`}),` (Tabster's default) the panel
`,(0,n.jsx)(r.strong,{children:`also unmounts on tab switch`}),` — meaning `,(0,n.jsx)(r.code,{children:`useTabsterPanelClose`}),` fires
on every switch, not just real close. For session-owning panels,
pin them to `,(0,n.jsx)(r.code,{children:`renderer: 'always'`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"PANELS"],[11,"."],[5,"spec"],[11,"({"]],["  ",[9,"id"],[11,":"]," ",[3,"'term.1'"],[11,","]],["  ",[9,"component"],[11,":"]," ",[3,"'terminal'"],[11,","]],["  ",[9,"title"],[11,":"]," ",[3,"'zsh'"],[11,","]],["  ",[9,"renderer"],[11,":"]," ",[3,"'always'"],[11,","],"          ",[1,"// ← stays mounted on switch"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`PANELS.spec({
  id: 'term.1',
  component: 'terminal',
  title: 'zsh',
  renderer: 'always',          // ← stays mounted on switch
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Now `,(0,n.jsx)(r.code,{children:`useTabsterPanelClose`}),` only fires when the user actually closes
the tab.`]}),`
`,(0,n.jsx)(r.h2,{children:`Pausing on hidden`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTabsterPanelVisible"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"VideoPanel"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"ref"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"HTMLVideoElement"],[11,">("],[4,"null"],[11,")"]],["  ",[5,"useTabsterPanelVisible"],[11,"(("],[12,"visible"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"if"]," ",[11,"("],[12,"visible"],[11,")"]," ",[12,"ref"],[11,"."],[9,"current"],[11,"?."],[5,"play"],[11,"()"]],["    ",[2,"else"]," ",[12,"ref"],[11,"."],[9,"current"],[11,"?."],[5,"pause"],[11,"()"]],["  ",[11,"})"]],["  ",[2,"return"]," ",[11,"<"],[7,"video"]," ",[8,"ref"],[10,"="],[11,"{"],[12,"ref"],[11,"}"]," ",[8,"src"],[10,"="],[3,"\\"...\\""]," ",[11,"/>"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTabsterPanelVisible } from '@kitora/tabster'

function VideoPanel() {
  const ref = useRef<HTMLVideoElement>(null)
  useTabsterPanelVisible((visible) => {
    if (visible) ref.current?.play()
    else ref.current?.pause()
  })
  return <video ref={ref} src="..." />
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Pairs well with `,(0,n.jsx)(r.code,{children:`renderer: 'always'`}),` — the panel stays mounted, just
hidden behind another tab. Useful for resize calls, pause/resume,
analytics.`]}),`
`,(0,n.jsx)(r.h2,{children:`Opening a sibling tab from inside`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTabsterContainerApi"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"FileExplorerPanel"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"dock"]," ",[10,"="]," ",[5,"useTabsterContainerApi"],[11,"()"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"button"]],["      ",[8,"onClick"],[10,"="],[11,"{()"]," ",[2,"=>"]," ",[11,"{"]],["        ",[12,"dock"],[11,"."],[5,"addPanel"],[11,"({"]],["          ",[9,"id"],[11,":"]," ",[3,"\`editor."],[11,"\${"],[12,"Date"],[11,"."],[5,"now"],[11,"()"],[11,"}"],[3,"\`"],[11,","]],["          ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]],["          ",[9,"title"],[11,":"]," ",[3,"'untitled.tsx'"],[11,","]],["        ",[11,"})"]],["      ",[11,"}}"]],["    ",[11,">"]],["      New tab"],["    ",[11,"</"],[7,"button"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTabsterContainerApi } from '@kitora/tabster'

function FileExplorerPanel() {
  const dock = useTabsterContainerApi()
  return (
    <button
      onClick={() => {
        dock.addPanel({
          id: \`editor.\${Date.now()}\`,
          component: 'editor',
          title: 'untitled.tsx',
        })
      }}
    >
      New tab
    </button>
  )
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`App-level close hook`}),`
`,(0,n.jsxs)(r.p,{children:[`For app-wide concerns (telemetry, analytics, persisting global list
state) wire the top-level `,(0,n.jsx)(r.code,{children:`onPanelClose`}),` instead — fires after every
removal without dispatching by id-prefix:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"Tabster"]],["  ..."],["  ",[8,"onPanelClose"],[10,"="],[11,"{("],[12,"id"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["    ",[12,"telemetry"],[11,"."],[5,"trackTabClose"],[11,"("],[12,"id"],[11,")"]],["  ",[11,"}}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<Tabster
  ...
  onPanelClose={(id) => {
    telemetry.trackTabClose(id)
  }}
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`For per-panel teardown (closing THIS terminal's session) prefer
`,(0,n.jsx)(r.code,{children:`useTabsterPanelClose`}),` inside the panel — keeps the cleanup co-located
with the resource that owns it.`]}),`
`,(0,n.jsx)(r.h2,{children:`Per-panel error boundary`}),`
`,(0,n.jsxs)(r.p,{children:[`Every panel is wrapped in an error boundary automatically — a render
throw in one tab won't crash the rest of the dock. The default fallback
shows the error message + a Reset button. Override via
`,(0,n.jsx)(r.code,{children:`panelErrorFallback`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"Tabster"]],["  ..."],["  ",[8,"panelErrorFallback"],[10,"="],[11,"{({"]," ",[12,"error"],[11,","]," ",[12,"reset"],[11,","]," ",[12,"panelId"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"p-4\\""],[11,">"]],["      ",[11,"<"],[7,"p"],[11,">{"],[12,"panelId"],[11,"}"]," crashed: ",[11,"{"],[12,"error"],[11,"."],[9,"message"],[11,"}</"],[7,"p"],[11,">"]],["      ",[11,"<"],[7,"button"]," ",[8,"onClick"],[10,"="],[11,"{"],[12,"reset"],[11,"}>"],"Retry",[11,"</"],[7,"button"],[11,">"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,")}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<Tabster
  ...
  panelErrorFallback={({ error, reset, panelId }) => (
    <div className="p-4">
      <p>{panelId} crashed: {error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  )}
/>
`})}),`
`,(0,n.jsx)(r.p,{children:`Reset re-mounts the panel subtree — useful after the underlying issue
is fixed (re-fetch data, etc.).`}),`
`,(0,n.jsx)(r.h2,{children:`Escape hatch — dock events`}),`
`,(0,n.jsx)(r.p,{children:`For events not yet wrapped, use the dock's own hooks inside the panel:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"usePanelEvent"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/dock'"]],[],[[5,"usePanelEvent"],[11,"(("],[12,"event"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["  ",[2,"if"]," ",[11,"("],[12,"event"],[11,"."],[9,"type"]," ",[10,"==="]," ",[3,"'moved'"],[11,")"]," ",[12,"console"],[11,"."],[5,"info"],[11,"("],[3,"'now in'"],[11,","]," ",[12,"event"],[11,"."],[9,"to"],[11,")"]],["  ",[2,"if"]," ",[11,"("],[12,"event"],[11,"."],[9,"type"]," ",[10,"==="]," ",[3,"'resized'"],[11,")"]," ",[12,"console"],[11,"."],[5,"info"],[11,"("],[12,"event"],[11,"."],[9,"width"],[11,","]," ",[12,"event"],[11,"."],[9,"height"],[11,")"]],[[11,"})"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { usePanelEvent } from '@kitora/dock'

usePanelEvent((event) => {
  if (event.type === 'moved') console.info('now in', event.to)
  if (event.type === 'resized') console.info(event.width, event.height)
})
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Events: `,(0,n.jsx)(r.code,{children:`shown`}),`, `,(0,n.jsx)(r.code,{children:`hidden`}),`, `,(0,n.jsx)(r.code,{children:`active`}),`, `,(0,n.jsx)(r.code,{children:`inactive`}),`, `,(0,n.jsx)(r.code,{children:`resized`}),`, `,(0,n.jsx)(r.code,{children:`moved`}),`.
For layout-wide changes, `,(0,n.jsx)(r.code,{children:`api.raw()?.subscribe((layout, action) => …)`}),`
reports every change with the action that caused it. The wrapped hooks
(`,(0,n.jsx)(r.code,{children:`useTabsterPanelClose`}),` / `,(0,n.jsx)(r.code,{children:`Visible`}),` / `,(0,n.jsx)(r.code,{children:`Active`}),`) cover the common cases.`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};