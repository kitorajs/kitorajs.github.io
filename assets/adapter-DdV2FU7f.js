import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Adapter & persistence`,description:`Plug Tabster into any storage backend with versioned snapshots and migrators.`,order:1};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Adapter & persistence`}),`
`,(0,n.jsx)(r.p,{children:`Tabster owns the layout shape. Storage is yours.`}),`
`,(0,n.jsx)(r.h2,{children:`The contract`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"TabsterAdapter"]," ",[11,"{"]],["  ",[5,"load"],[11,"()"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TabsterSnapshot"]," ",[10,"|"]," ",[6,"null"],[11,">"]],["  ",[5,"save"],[11,"("],[12,"snapshot"],[10,":"]," ",[6,"TabsterSnapshot"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"clear"],[10,"?"],[11,"()"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[[11,"}"]],[],[[2,"interface"]," ",[6,"TabsterSnapshot"]," ",[11,"{"]],["  ",[12,"version"],[10,":"]," ",[6,"number"]],["  ",[12,"layout"],[10,":"]," ",[6,"SerializedLayout"]],["  ",[12,"meta"],[10,"?:"]," ",[6,"Record"],[11,"<"],[6,"string"],[11,","]," ",[6,"unknown"],[11,">"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface TabsterAdapter {
  load(): MaybePromise<TabsterSnapshot | null>
  save(snapshot: TabsterSnapshot): MaybePromise<void>
  clear?(): MaybePromise<void>
}

interface TabsterSnapshot {
  version: number
  layout: SerializedLayout
  meta?: Record<string, unknown>
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Implement once; wire it via the `,(0,n.jsx)(r.code,{children:`adapter`}),` prop. Tabster handles loading
on boot, saving on every layout change (toggleable via `,(0,n.jsx)(r.code,{children:`autoPersist`}),`),
and routing it through your `,(0,n.jsx)(r.code,{children:`enterEditMode → save / discard`}),` flow.`]}),`
`,(0,n.jsx)(r.h2,{children:`Reference implementations`}),`
`,(0,n.jsx)(r.h3,{children:`localStorage`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"Tabster"],[11,","]," ",[12,"createLocalStorageAdapter"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createLocalStorageAdapter"],[11,"({"]," ",[9,"key"],[11,":"]," ",[3,"'my-app:dock'"]," ",[11,"})"]],[],[[11,"<"],[7,"Tabster"]," ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"}"]," ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { Tabster, createLocalStorageAdapter } from '@kitora/tabster'

const adapter = createLocalStorageAdapter({ key: 'my-app:dock' })

<Tabster panels={PANELS} initialPanels={INITIAL} adapter={adapter} />
`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Auto-prefixes the key with `,(0,n.jsx)(r.code,{children:`tabster:`}),` if you didn't.`]}),`
`,(0,n.jsxs)(r.li,{children:[`SSR-safe — `,(0,n.jsx)(r.code,{children:`load`}),` returns `,(0,n.jsx)(r.code,{children:`null`}),` when `,(0,n.jsx)(r.code,{children:`window`}),` is undefined.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Catches quota / private-mode errors and routes them to `,(0,n.jsx)(r.code,{children:`onError`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`In-memory`}),`
`,(0,n.jsx)(r.p,{children:`For tests, Storybook, or "I'll wire my own persistence later":`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"createInMemoryAdapter"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createInMemoryAdapter"],[11,"()"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { createInMemoryAdapter } from '@kitora/tabster'
const adapter = createInMemoryAdapter()
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The returned object also exposes `,(0,n.jsx)(r.code,{children:`peek()`}),` so tests can read state
without going through the contract.`]}),`
`,(0,n.jsx)(r.h3,{children:`Server-backed (your own)`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":'[[[2,"function"]," ",[5,"createRemoteAdapter"],[11,"("],[12,"userId"],[10,":"]," ",[6,"string"],[11,")"],[10,":"]," ",[6,"TabsterAdapter"]," ",[11,"{"]],["  ",[2,"return"]," ",[11,"{"]],["    ",[5,"load"],[11,":"]," ",[2,"async"]," ",[11,"()"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"const"]," ",[12,"res"]," ",[10,"="]," ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"`/api/users/"],[11,"${"],[12,"userId"],[11,"}"],[3,"/layout`"],[11,")"]],["      ",[2,"return"]," ",[12,"res"],[11,"."],[9,"ok"]," ",[10,"?"]," ",[2,"await"]," ",[12,"res"],[11,"."],[5,"json"],[11,"()"]," ",[10,":"]," ",[4,"null"]],["    ",[11,"},"]],["    ",[5,"save"],[11,":"]," ",[2,"async"]," ",[11,"("],[12,"snapshot"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"`/api/users/"],[11,"${"],[12,"userId"],[11,"}"],[3,"/layout`"],[11,","]," ",[11,"{"]],["        ",[9,"method"],[11,":"]," ",[3,"\'PUT\'"],[11,","]],["        ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"("],[12,"snapshot"],[11,"),"]],["      ",[11,"})"]],["    ",[11,"},"]],["    ",[5,"clear"],[11,":"]," ",[2,"async"]," ",[11,"()"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"await"]," ",[5,"fetch"],[11,"("],[3,"`/api/users/"],[11,"${"],[12,"userId"],[11,"}"],[3,"/layout`"],[11,","]," ",[11,"{"]," ",[9,"method"],[11,":"]," ",[3,"\'DELETE\'"]," ",[11,"})"]],["    ",[11,"},"]],["  ",[11,"}"]],[[11,"}"]]]',"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function createRemoteAdapter(userId: string): TabsterAdapter {
  return {
    load: async () => {
      const res = await fetch(\`/api/users/\${userId}/layout\`)
      return res.ok ? await res.json() : null
    },
    save: async (snapshot) => {
      await fetch(\`/api/users/\${userId}/layout\`, {
        method: 'PUT',
        body: JSON.stringify(snapshot),
      })
    },
    clear: async () => {
      await fetch(\`/api/users/\${userId}/layout\`, { method: 'DELETE' })
    },
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Throwing or rejecting is fine — Tabster catches and logs, then falls
back to `,(0,n.jsx)(r.code,{children:`initialPanels`}),` for `,(0,n.jsx)(r.code,{children:`load`}),`, and to a console warning for
`,(0,n.jsx)(r.code,{children:`save`}),`. No restore call ever crashes the dock.`]}),`
`,(0,n.jsx)(r.h2,{children:`Versioned snapshots + migrators`}),`
`,(0,n.jsxs)(r.p,{children:[`Bump `,(0,n.jsx)(r.code,{children:`version`}),` when the layout shape changes in a breaking way. Register
a migrator for each `,(0,n.jsx)(r.code,{children:`from → from + 1`}),` step:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"SCHEMA_VERSION"]," ",[10,"="]," ",[4,"3"]],[],[[2,"const"]," ",[12,"MIGRATORS"],[10,":"]," ",[6,"TabsterMigratorMap"]," ",[10,"="]," ",[11,"{"]],["  ",[4,"1"],[11,":"]," ",[11,"("],[12,"snap"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[10,"..."],[12,"snap"],[11,","]," ",[9,"version"],[11,":"]," ",[4,"2"],[11,","]," ",[9,"layout"],[11,":"]," ",[5,"renameOldComponents"],[11,"("],[12,"snap"],[11,"."],[9,"layout"],[11,")"]," ",[11,"}),"]],["  ",[4,"2"],[11,":"]," ",[11,"("],[12,"snap"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[10,"..."],[12,"snap"],[11,","]," ",[9,"version"],[11,":"]," ",[4,"3"],[11,","]," ",[9,"layout"],[11,":"]," ",[5,"addDefaults"],[11,"("],[12,"snap"],[11,"."],[9,"layout"],[11,")"]," ",[11,"}),"]],[[11,"}"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"panels"],[10,"="],[11,"{"],[12,"PANELS"],[11,"}"]],["  ",[8,"initialPanels"],[10,"="],[11,"{"],[12,"INITIAL"],[11,"}"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]],["  ",[8,"version"],[10,"="],[11,"{"],[12,"SCHEMA_VERSION"],[11,"}"]],["  ",[8,"migrators"],[10,"="],[11,"{"],[12,"MIGRATORS"],[11,"}"]],[[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const SCHEMA_VERSION = 3

const MIGRATORS: TabsterMigratorMap = {
  1: (snap) => ({ ...snap, version: 2, layout: renameOldComponents(snap.layout) }),
  2: (snap) => ({ ...snap, version: 3, layout: addDefaults(snap.layout) }),
}

<Tabster
  panels={PANELS}
  initialPanels={INITIAL}
  adapter={adapter}
  version={SCHEMA_VERSION}
  migrators={MIGRATORS}
/>
`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Migrators chain automatically from the stored version to the current.`}),`
`,(0,n.jsxs)(r.li,{children:[`If any migrator is missing or returns `,(0,n.jsx)(r.code,{children:`null`}),`, Tabster discards the
snapshot and falls back to `,(0,n.jsx)(r.code,{children:`initialPanels`}),`. The dock never enters a
broken state.`]}),`
`,(0,n.jsx)(r.li,{children:`Newer-than-current snapshots are also rejected (downgrade not
supported by default).`}),`
`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Layouts saved before the move to `,(0,n.jsx)(r.code,{children:`@kitora/dock`})]}),`
`,(0,n.jsxs)(r.p,{children:[`Tabster used to run on dockview, so a user's adapter may still hold a dockview layout inside its snapshot. Nothing to do: Tabster passes every loaded layout (adapter snapshots, `,(0,n.jsx)(r.code,{children:`initialLayout`}),`, `,(0,n.jsx)(r.code,{children:`loadLayout`}),`, `,(0,n.jsx)(r.code,{children:`restore`}),`) through `,(0,n.jsx)(r.code,{children:`DOCKVIEW_MIGRATOR`}),`, which converts dockview's grid, floating groups and popout groups (popouts come back as in-page floats) into the dock's schema, and the next save writes the new shape under the same key. Your own `,(0,n.jsx)(r.code,{children:`migrators`}),` (the snapshot `,(0,n.jsx)(r.code,{children:`version`}),` chain above) run first and are unchanged. To convert a stored layout yourself, for example in a server-side backfill:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"isDockviewLayout"],[11,","]," ",[12,"migrateDockviewLayout"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/tabster'"]],[],[[2,"if"]," ",[11,"("],[5,"isDockviewLayout"],[11,"("],[12,"snapshot"],[11,"."],[9,"layout"],[11,"))"]," ",[12,"snapshot"],[11,"."],[9,"layout"]," ",[10,"="]," ",[5,"migrateDockviewLayout"],[11,"("],[12,"snapshot"],[11,"."],[9,"layout"],[11,")"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`import { isDockviewLayout, migrateDockviewLayout } from '@kitora/tabster'

if (isDockviewLayout(snapshot.layout)) snapshot.layout = migrateDockviewLayout(snapshot.layout)
`})}),`
`,(0,n.jsx)(r.h2,{children:`Edit mode (draft / committed split)`}),`
`,(0,n.jsx)(r.p,{children:`Adapters auto-persist on every layout change by default. Turn it off
when you want explicit Save / Discard semantics:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"apiRef"]," ",[10,"="]," ",[5,"useRef"],[11,"<"],[6,"TabsterApi"]," ",[10,"|"]," ",[6,"null"],[11,">("],[4,"null"],[11,")"]],[],[[11,"<"],[7,"Tabster"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}"]],["  ",[8,"autoPersist"],[10,"="],[11,"{"],[4,"false"],[11,"}"],"      ",[1,"// optional — implied by entering edit mode"]],["  ",[8,"onReady"],[10,"="],[11,"{({"]," ",[12,"api"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"("],[12,"apiRef"],[11,"."],[9,"current"]," ",[10,"="]," ",[12,"api"],[11,")}"]],[[11,"/>"]],[],[[1,"// later, in a button:"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"enterEditMode"],[11,"()"],"   ",[1,"// snapshot current state"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"saveEditMode"],[11,"()"],"    ",[1,"// commit + persist"]],[[12,"apiRef"],[11,"."],[9,"current"],[11,"?."],[5,"discardEditMode"],[11,"()"]," ",[1,"// rollback to snapshot"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const apiRef = useRef<TabsterApi | null>(null)

<Tabster
  adapter={adapter}
  autoPersist={false}      // optional — implied by entering edit mode
  onReady={({ api }) => (apiRef.current = api)}
/>

// later, in a button:
apiRef.current?.enterEditMode()   // snapshot current state
apiRef.current?.saveEditMode()    // commit + persist
apiRef.current?.discardEditMode() // rollback to snapshot
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`enterEditMode`}),` pauses auto-persist; the user can rearrange freely.
`,(0,n.jsx)(r.code,{children:`saveEditMode`}),` flushes to the adapter. `,(0,n.jsx)(r.code,{children:`discardEditMode`}),` restores the
pre-edit snapshot via `,(0,n.jsx)(r.code,{children:`fromJSON()`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Imperative escape hatches`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[12,"api"],[11,"."],[5,"snapshot"],[11,"()"],"                  ",[1,"// → { version, layout }"]],[[12,"api"],[11,"."],[5,"restore"],[11,"("],[12,"snapshot"],[11,")"],"           ",[1,"// applies a snapshot"]],[[12,"api"],[11,"."],[5,"persist"],[11,"()"],"                   ",[1,"// force-save through the adapter"]],[[12,"api"],[11,"."],[5,"reload"],[11,"()"],"                    ",[1,"// re-read adapter + restore"]],[[12,"api"],[11,"."],[5,"isEditing"],[11,"()"],"                 ",[1,"// boolean"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`api.snapshot()                  // → { version, layout }
api.restore(snapshot)           // applies a snapshot
api.persist()                   // force-save through the adapter
api.reload()                    // re-read adapter + restore
api.isEditing()                 // boolean
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};