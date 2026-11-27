import{zc as e}from"./index-BZuUy872.js";import{n as t}from"./lib-C0E9zsFn.js";var n=e(),r={title:`Getting started`,description:`Mount a VSCode-style tabbed dock in 30 seconds.`,order:0};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Getting started`}),`
`,(0,n.jsxs)(r.p,{children:[`Tabster is the opinionated preset on Kitora's own docking engine, `,(0,n.jsx)(r.code,{children:`@kitora/dock`}),` (outliner, arrange overlay, group names, palette, edit mode and persistence adapters on top of it). It ships:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`VSCode-style tabs with drag-reorder (mouse, touch, pen, keyboard), dock-to-split, float, popout`}),`
`,(0,n.jsxs)(r.li,{children:[`A typed component registry — `,(0,n.jsx)(r.code,{children:`panels={{ id: ReactComponent }}`})]}),`
`,(0,n.jsx)(r.li,{children:`Imperative API for runtime panel management`}),`
`,(0,n.jsx)(r.li,{children:`Default keyboard map (override or disable per-shortcut)`}),`
`,(0,n.jsx)(r.li,{children:`Theme variants that read Kitora CSS tokens`}),`
`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"Tabster"],[11,","]," ",[2,"type"]," ",[12,"TabsterPanelSpec"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { Tabster, type TabsterPanelSpec } from '@kitora/tabster'
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Import tabster's small stylesheet once, at the app root (the dock host fill and the arrange-mode dim). The dock's own stylesheet comes with `,(0,n.jsx)(r.code,{children:`<Tabster>`}),` itself.`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[3,"'@kitora/tabster/styles.css'"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import '@kitora/tabster/styles.css'
`})}),`
`,(0,n.jsx)(r.h2,{children:`Minimal example`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"Tabster"],[11,","]," ",[2,"type"]," ",[12,"TabsterPanelSpec"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"function"]," ",[5,"Editor"],[11,"()"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"<"],[7,"pre"],[11,">"],"// editor body",[11,"</"],[7,"pre"],[11,">"]],[[11,"}"]],[],[[2,"const"]," ",[12,"PANELS"]," ",[10,"="]," ",[11,"{"]," ",[9,"editor"],[11,":"]," ",[12,"Editor"]," ",[11,"}"]],[],[[2,"const"]," ",[12,"INITIAL"],[10,":"]," ",[6,"TabsterPanelSpec"],[11,"[]"]," ",[10,"="]," ",[11,"["]],["  ",[11,"{"]," ",[9,"id"],[11,":"]," ",[3,"'a'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'a.tsx'"]," ",[11,"},"]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'b'"],[11,","]],["    ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]],["    ",[9,"title"],[11,":"]," ",[3,"'b.tsx'"],[11,","]],["    ",[9,"position"],[11,":"]," ",[11,"{"]," ",[9,"referencePanel"],[11,":"]," ",[3,"'a'"],[11,","]," ",[9,"direction"],[11,":"]," ",[3,"'right'"]," ",[11,"},"]],["  ",[11,"},"]],[[11,"]"]],[],[[2,"export"]," ",[2,"function"]," ",[5,"Demo"],[11,"()"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"div"]," ",[8,"style"],[10,"="],[11,"{{"]," ",[9,"height"],[11,":"]," ",[4,"600"]," ",[11,"}}>"]],["      ",[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]," ",[11,"/>"]],["    ",[11,"</"],[7,"div"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { Tabster, type TabsterPanelSpec } from '@kitora/tabster'

function Editor() {
  return <pre>// editor body</pre>
}

const PANELS = { editor: Editor }

const INITIAL: TabsterPanelSpec[] = [
  { id: 'a', component: 'editor', title: 'a.tsx' },
  {
    id: 'b',
    component: 'editor',
    title: 'b.tsx',
    position: { referencePanel: 'a', direction: 'right' },
  },
]

export function Demo() {
  return (
    <div style={{ height: 600 }}>
      <Tabster panels={PANELS} initialPanels={INITIAL} />
    </div>
  )
}
`})}),`
`,(0,n.jsx)(r.p,{children:`The container needs an explicit height: the dock fills its parent.`}),`
`,(0,n.jsx)(r.h2,{children:`Persisting layouts`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"KEY"]," ",[10,"="]," ",[3,"'app:layout'"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"}"]],["  ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]],["  ",[8,"initialLayout"],[10,"="],[11,"{"],[5,"loadJSON"],[11,"("],[12,"KEY"],[11,")"]," ",[10,"??"]," ",[4,"undefined"],[11,"}"]],["  ",[8,"onLayoutChange"],[10,"="],[11,"{("],[12,"layout"],[11,")"]," ",[2,"=>"]," ",[5,"saveJSON"],[11,"("],[12,"KEY"],[11,","]," ",[12,"layout"],[11,")}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const KEY = 'app:layout'

<Tabster
  panels={PANELS}
  initialPanels={INITIAL}
  initialLayout={loadJSON(KEY) ?? undefined}
  onLayoutChange={(layout) => saveJSON(KEY, layout)}
/>
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`fromJSON`}),` failures fall back to `,(0,n.jsx)(r.code,{children:`initialPanels`}),` rather than crashing —
schema-evolution mistakes don't brick the app.`]}),`
`,(0,n.jsx)(r.h2,{children:`Imperative API`}),`
`,(0,n.jsxs)(r.p,{children:[`Grab the API in `,(0,n.jsx)(r.code,{children:`onReady`}),`:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"apiRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"TabsterApi"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"}"]],["  ",[8,"onReady"],[10,"="],[11,"{({"]," ",[12,"api"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("],[12,"apiRef"],[11,"."],[9,"current"]," ",[10,"="]," ",[12,"api"],[11,")}"]],[[11,"/>"]],[],[[1,"// Later"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"addPanel"],[11,"({"]," ",[9,"id"],[11,":"]," ",[3,"'c'"],[11,","]," ",[9,"component"],[11,":"]," ",[3,"'editor'"],[11,","]," ",[9,"title"],[11,":"]," ",[3,"'new.tsx'"]," ",[11,"})"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"popoutPanel"],[11,"("],[3,"'c'"],[11,")"],"        ",[1,"// → real window.open"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"floatPanel"],[11,"("],[3,"'c'"],[11,")"],"         ",[1,"// → in-page floating window"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"dockPanel"],[11,"("],[3,"'c'"],[11,")"],"          ",[1,"// → back into the grid"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const apiRef = useRef<TabsterApi | null>(null)

<Tabster
  panels={PANELS}
  onReady={({ api }) => (apiRef.current = api)}
/>

// Later
apiRef.current?.addPanel({ id: 'c', component: 'editor', title: 'new.tsx' })
apiRef.current?.popoutPanel('c')        // → real window.open
apiRef.current?.floatPanel('c')         // → in-page floating window
apiRef.current?.dockPanel('c')          // → back into the grid
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};