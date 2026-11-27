import{zc as e}from"./index-BZuUy872.js";import{n as t}from"./lib-C0E9zsFn.js";var n=e(),r={title:`Getting started`,description:`Mount the headless task-list system in 30 seconds.`,order:0};function i(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Getting started`}),`
`,(0,n.jsxs)(r.p,{children:[`The task list system is `,(0,n.jsx)(r.strong,{children:`headless`}),` — UI primitives + a swappable data
adapter. Drop it into any React app, point it at your data, decide which
features to expose.`]}),`
`,(0,n.jsx)(r.h2,{children:`Install`}),`
`,(0,n.jsx)(r.p,{children:`It's already part of the kit. Import from a single barrel:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]],["  ",[12,"TaskListProvider"],[11,","]],["  ",[12,"ConnectedTaskListBoard"],[11,","]],["  ",[12,"createInMemoryAdapter"],[11,","]],["  ",[2,"type"]," ",[12,"TaskListAdapter"],[11,","]],["  ",[2,"type"]," ",[12,"TaskListFeatures"],[11,","]],[[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/task-list'"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import {
  TaskListProvider,
  ConnectedTaskListBoard,
  createInMemoryAdapter,
  type TaskListAdapter,
  type TaskListFeatures,
} from '@kitora/task-list'
`})}),`
`,(0,n.jsx)(r.h2,{children:`Minimal example`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"seed"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'./my-seed'"]],[],[[2,"function"]," ",[5,"App"],[11,"()"]," ",[11,"{"]],["  ",[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createInMemoryAdapter"],[11,"({"]," ",[9,"initial"],[11,":"]," ",[12,"seed"]," ",[11,"})"]],[],["  ",[2,"return"]," ",[11,"("]],["    ",[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"adapter"],[11,"}>"]],["      ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],["    ",[11,"</"],[7,"TaskListProvider"],[11,">"]],["  ",[11,")"]],[[11,"}"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { seed } from './my-seed'

function App() {
  const adapter = createInMemoryAdapter({ initial: seed })

  return (
    <TaskListProvider adapter={adapter}>
      <ConnectedTaskListBoard />
    </TaskListProvider>
  )
}
`})}),`
`,(0,n.jsx)(r.p,{children:`That's it. Every interactive feature — drag, multi-select, subtasks,
inline rename, context menu, status picker — turns on automatically because
the in-memory adapter implements every mutation.`}),`
`,(0,n.jsx)(r.h2,{children:`Three layers`}),`
`,(0,n.jsx)(r.p,{children:`The kit is split into independently usable layers:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`UI primitives`}),` (`,(0,n.jsx)(r.code,{children:`<TaskList>`}),`, `,(0,n.jsx)(r.code,{children:`<TaskListBoard>`}),`, `,(0,n.jsx)(r.code,{children:`<KanbanBoard>`}),`) —
pure React components driven by props. Use these directly when you want
full manual control over state.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Adapter contract`}),` (`,(0,n.jsx)(r.code,{children:`TaskListAdapter`}),`) — the data interface. Implement
to bridge any backend.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Provider + Connected components`}),` (`,(0,n.jsx)(r.code,{children:`<TaskListProvider>`}),` +
`,(0,n.jsx)(r.code,{children:`<ConnectedTaskListBoard>`}),`) — wire UI to adapter via React Context.`]}),`
`]}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,n.jsx)(r.p,{children:`You can mix and match. Use the provider for the batteries-included
experience, or skip it and pass props yourself.`}),`
`,(0,n.jsx)(r.h2,{children:`What's next`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/tasklists/docs/adapter`,children:`Adapter contract`}),` — implement load + mutations`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/tasklists/docs/features`,children:`Feature flags`}),` — turn things on / off`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/kits/tasklists/docs/recipes`,children:`Recipes`}),` — REST, optimistic UI, realtime sync`]}),`
`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};