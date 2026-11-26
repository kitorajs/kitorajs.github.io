import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r={title:`Recipes`,description:`Optimistic UI, realtime sync, custom rendering.`,order:3};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Recipes`}),`
`,(0,n.jsx)(r.h2,{children:`Optimistic UI`}),`
`,(0,n.jsx)(r.p,{children:`The provider currently waits for the adapter to resolve before re-rendering.
For snappier UX, dispatch an optimistic state update inside your adapter
and reconcile in the background:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"makeOptimisticAdapter"],[11,"("],[12,"real"],[10,":"]," ",[6,"TaskListAdapter"],[11,")"],[10,":"]," ",[6,"TaskListAdapter"]," ",[11,"{"]],["  ",[2,"let"]," ",[12,"cached"]," ",[10,"="]," ",[2,"await"]," ",[12,"real"],[11,"."],[5,"load"],[11,"()"]],[],["  ",[2,"return"]," ",[11,"{"]],["    ",[5,"load"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[12,"cached"],[11,","]],["    ",[5,"updateTask"],[11,":"]," ",[2,"async"]," ",[11,"("],[12,"id"],[11,","]," ",[12,"patch"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],[[11,"      "],[1,"// Apply locally first"]],["      ",[12,"cached"]," ",[10,"="]," ",[5,"mapList"],[11,"("],[12,"cached"],[11,","]," ",[11,"("],[12,"t"],[11,")"]," ",[2,"=>"]],["        ",[12,"t"],[11,"."],[9,"id"]," ",[10,"==="]," ",[12,"id"]," ",[10,"?"]," ",[11,"{"]," ",[10,"..."],[12,"t"],[11,","]," ",[10,"..."],[12,"patch"]," ",[11,"}"]," ",[10,":"]," ",[12,"t"],[11,","]],["      ",[11,")"]],[[11,"      "],[1,"// Then sync"]],["      ",[2,"try"]," ",[11,"{"]],["        ",[2,"await"]," ",[12,"real"],[11,"."],[5,"updateTask"],[11,"?.("],[12,"id"],[11,","]," ",[12,"patch"],[11,")"]],["      ",[11,"}"]," ",[2,"catch"]," ",[11,"("],[12,"err"],[11,")"]," ",[11,"{"]],[[11,"        "],[1,"// Rollback by reloading"]],["        ",[12,"cached"]," ",[10,"="]," ",[2,"await"]," ",[12,"real"],[11,"."],[5,"load"],[11,"()"]],["        ",[2,"throw"]," ",[12,"err"]],["      ",[11,"}"]],["    ",[11,"},"]],[[11,"    "],[1,"// …"]],["  ",[11,"}"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function makeOptimisticAdapter(real: TaskListAdapter): TaskListAdapter {
  let cached = await real.load()

  return {
    load: () => cached,
    updateTask: async (id, patch) => {
      // Apply locally first
      cached = mapList(cached, (t) =>
        t.id === id ? { ...t, ...patch } : t,
      )
      // Then sync
      try {
        await real.updateTask?.(id, patch)
      } catch (err) {
        // Rollback by reloading
        cached = await real.load()
        throw err
      }
    },
    // …
  }
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Realtime sync`}),`
`,(0,n.jsxs)(r.p,{children:[`For collaborative apps, push remote updates into the cache as they arrive.
The provider re-runs `,(0,n.jsx)(r.code,{children:`load()`}),` on every mutation, so the cleanest pattern is
to invalidate the cache on a server event and let the next interaction
trigger a refresh — or call `,(0,n.jsx)(r.code,{children:`refresh()`}),` manually:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTaskList"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/task-list'"]],[],[[2,"function"]," ",[5,"RealtimeBridge"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"refresh"]," ",[11,"}"]," ",[10,"="]," ",[5,"useTaskList"],[11,"()"]],[],["  ",[5,"useEffect"],[11,"(()"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"const"]," ",[12,"sse"]," ",[10,"="]," ",[2,"new"]," ",[5,"EventSource"],[11,"("],[3,"'/api/lists/stream'"],[11,")"]],["    ",[12,"sse"],[11,"."],[5,"addEventListener"],[11,"("],[3,"'change'"],[11,","]," ",[11,"()"]," ",[2,"=>"]," ",[5,"refresh"],[11,"())"]],["    ",[2,"return"]," ",[11,"()"]," ",[2,"=>"]," ",[12,"sse"],[11,"."],[5,"close"],[11,"()"]],["  ",[11,"},"]," ",[11,"["],[12,"refresh"],[11,"])"]],[],["  ",[2,"return"]," ",[4,"null"]],[[11,"}"]],[],[[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"restAdapter"],[11,"}>"]],["  ",[11,"<"],[7,"RealtimeBridge"]," ",[11,"/>"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTaskList } from '@kitora/task-list'

function RealtimeBridge() {
  const { refresh } = useTaskList()

  useEffect(() => {
    const sse = new EventSource('/api/lists/stream')
    sse.addEventListener('change', () => refresh())
    return () => sse.close()
  }, [refresh])

  return null
}

<TaskListProvider adapter={restAdapter}>
  <RealtimeBridge />
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Custom row rendering`}),`
`,(0,n.jsxs)(r.p,{children:[`The connected board uses our default `,(0,n.jsx)(r.code,{children:`<TaskList>`}),`. To swap the row
renderer entirely, drop down to the props-driven layer:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTaskList"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/task-list'"]],[],[[2,"function"]," ",[5,"MyBoard"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"groups"],[11,","]," ",[12,"mutators"]," ",[11,"}"]," ",[10,"="]," ",[5,"useTaskList"],[11,"()"]],[],["  ",[2,"return"]," ",[12,"groups"],[11,"."],[5,"map"],[11,"(("],[12,"g"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["    ",[11,"<"],[7,"section"]," ",[8,"key"],[10,"="],[11,"{"],[12,"g"],[11,"."],[9,"id"],[11,"}>"]],["      ",[11,"<"],[7,"h2"],[11,">{"],[12,"g"],[11,"."],[9,"title"],[11,"}</"],[7,"h2"],[11,">"]],["      ",[11,"{"],[12,"g"],[11,"."],[9,"tasks"],[11,"."],[5,"map"],[11,"(("],[12,"t"],[11,")"]," ",[2,"=>"]," ",[11,"("]],["        ",[11,"<"],[7,"MyCustomRow"]],["          ",[8,"key"],[10,"="],[11,"{"],[12,"t"],[11,"."],[9,"id"],[11,"}"]],["          ",[8,"task"],[10,"="],[11,"{"],[12,"t"],[11,"}"]],["          ",[8,"onDone"],[10,"="],[11,"{()"]," ",[2,"=>"]],["            ",[12,"mutators"],[11,"."],[5,"updateTask"],[11,"?.("],[12,"t"],[11,"."],[9,"id"],[11,","]," ",[11,"{"]," ",[9,"done"],[11,":"]," ",[4,"true"],[11,","]," ",[9,"status"],[11,":"]," ",[3,"'done'"]," ",[11,"})"]],["          ",[11,"}"]],["        ",[11,"/>"]],["      ",[11,"))}"]],["    ",[11,"</"],[7,"section"],[11,">"]],["  ",[11,"))"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTaskList } from '@kitora/task-list'

function MyBoard() {
  const { groups, mutators } = useTaskList()

  return groups.map((g) => (
    <section key={g.id}>
      <h2>{g.title}</h2>
      {g.tasks.map((t) => (
        <MyCustomRow
          key={t.id}
          task={t}
          onDone={() =>
            mutators.updateTask?.(t.id, { done: true, status: 'done' })
          }
        />
      ))}
    </section>
  ))
}
`})}),`
`,(0,n.jsx)(r.p,{children:`You keep the adapter + provider state; only the visuals change.`}),`
`,(0,n.jsx)(r.h2,{children:`Multiple boards on one page`}),`
`,(0,n.jsx)(r.p,{children:`Each board needs its own provider — the context isolates state:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"div"]," ",[8,"className"],[10,"="],[3,"\\"grid grid-cols-2 gap-6\\""],[11,">"]],["  ",[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"teamAdapter"],[11,"}>"]],["    ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],["  ",[11,"</"],[7,"TaskListProvider"],[11,">"]],["  ",[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"personalAdapter"],[11,"}>"]],["    ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],["  ",[11,"</"],[7,"TaskListProvider"],[11,">"]],[[11,"</"],[7,"div"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<div className="grid grid-cols-2 gap-6">
  <TaskListProvider adapter={teamAdapter}>
    <ConnectedTaskListBoard />
  </TaskListProvider>
  <TaskListProvider adapter={personalAdapter}>
    <ConnectedTaskListBoard />
  </TaskListProvider>
</div>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Persisting to localStorage`}),`
`,(0,n.jsxs)(r.p,{children:[`A 20-line adapter that mirrors `,(0,n.jsx)(r.code,{children:`createInMemoryAdapter`}),` but writes through
to `,(0,n.jsx)(r.code,{children:`localStorage`}),`:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"function"]," ",[5,"createLocalStorageAdapter"],[11,"("],[12,"key"],[10,":"]," ",[6,"string"],[11,","]," ",[12,"seed"],[10,":"]," ",[6,"TaskListGroup"],[11,"[])"],[10,":"]," ",[6,"TaskListAdapter"]," ",[11,"{"]],["  ",[2,"const"]," ",[5,"read"]," ",[10,"="]," ",[11,"()"]," ",[2,"=>"]," ",[11,"{"]],["    ",[2,"try"]," ",[11,"{"]],["      ",[2,"return"]," ",[12,"JSON"],[11,"."],[5,"parse"],[11,"("],[12,"localStorage"],[11,"."],[5,"getItem"],[11,"("],[12,"key"],[11,")"]," ",[10,"??"]," ",[3,"'null'"],[11,")"]," ",[10,"??"]," ",[12,"seed"]],["    ",[11,"}"]," ",[2,"catch"]," ",[11,"{"]],["      ",[2,"return"]," ",[12,"seed"]],["    ",[11,"}"]],["  ",[11,"}"]],["  ",[2,"const"]," ",[5,"write"]," ",[10,"="]," ",[11,"("],[12,"groups"],[10,":"]," ",[6,"TaskListGroup"],[11,"[])"]," ",[2,"=>"]],["    ",[12,"localStorage"],[11,"."],[5,"setItem"],[11,"("],[12,"key"],[11,","]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"("],[12,"groups"],[11,"))"]],[],["  ",[2,"let"]," ",[12,"cache"]," ",[10,"="]," ",[5,"read"],[11,"()"]],[],["  ",[2,"return"]," ",[11,"{"]],["    ",[5,"load"],[11,":"]," ",[11,"()"]," ",[2,"=>"]," ",[12,"cache"],[11,","]],["    ",[5,"createTask"],[11,":"]," ",[11,"("],[12,"gid"],[11,","]," ",[12,"title"],[11,","]," ",[12,"position"]," ",[10,"="]," ",[3,"'top'"],[11,")"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"const"]," ",[12,"t"]," ",[10,"="]," ",[11,"{"]," ",[9,"id"],[11,":"]," ",[12,"crypto"],[11,"."],[5,"randomUUID"],[11,"(),"]," ",[12,"title"],[11,","]," ",[9,"status"],[11,":"]," ",[3,"'todo'"]," ",[2,"as"]," ",[2,"const"]," ",[11,"}"]],["      ",[12,"cache"]," ",[10,"="]," ",[12,"cache"],[11,"."],[5,"map"],[11,"(("],[12,"g"],[11,")"]," ",[2,"=>"]],["        ",[12,"g"],[11,"."],[9,"id"]," ",[10,"==="]," ",[12,"gid"]],["          ",[10,"?"]," ",[11,"{"]," ",[10,"..."],[12,"g"],[11,","]," ",[9,"tasks"],[11,":"]," ",[12,"position"]," ",[10,"==="]," ",[3,"'top'"]," ",[10,"?"]," ",[11,"["],[12,"t"],[11,","]," ",[10,"..."],[12,"g"],[11,"."],[9,"tasks"],[11,"]"]," ",[10,":"]," ",[11,"["],[10,"..."],[12,"g"],[11,"."],[9,"tasks"],[11,","]," ",[12,"t"],[11,"]"]," ",[11,"}"]],["          ",[10,":"]," ",[12,"g"],[11,","]],["      ",[11,")"]],["      ",[5,"write"],[11,"("],[12,"cache"],[11,")"]],["      ",[2,"return"]," ",[12,"t"]],["    ",[11,"},"]],[[11,"    "],[1,"// …"]],["  ",[11,"}"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`function createLocalStorageAdapter(key: string, seed: TaskListGroup[]): TaskListAdapter {
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? 'null') ?? seed
    } catch {
      return seed
    }
  }
  const write = (groups: TaskListGroup[]) =>
    localStorage.setItem(key, JSON.stringify(groups))

  let cache = read()

  return {
    load: () => cache,
    createTask: (gid, title, position = 'top') => {
      const t = { id: crypto.randomUUID(), title, status: 'todo' as const }
      cache = cache.map((g) =>
        g.id === gid
          ? { ...g, tasks: position === 'top' ? [t, ...g.tasks] : [...g.tasks, t] }
          : g,
      )
      write(cache)
      return t
    },
    // …
  }
}
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};