import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Adapter contract`,description:`Bridge any backend by implementing TaskListAdapter.`,order:1};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Adapter contract`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`TaskListAdapter`}),` is the only thing you have to implement. Every method is
`,(0,n.jsxs)(r.strong,{children:[`optional except `,(0,n.jsx)(r.code,{children:`load()`})]}),` — the connected components auto-derive which
features to expose from what you wire up.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Shape`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"interface"]," ",[6,"TaskListAdapter"]," ",[11,"{"]],[[11,"  "],[1,"// Required"]],["  ",[5,"load"],[11,"()"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TaskListGroup"],[11,"[]>"]],[],[[11,"  "],[1,"// Tasks (each optional)"]],["  ",[5,"createTask"],[10,"?"],[11,"("],[12,"groupId"],[11,","]," ",[12,"title"],[11,","]," ",[12,"position"],[10,"?:"]," ",[3,"'top'"]," ",[10,"|"]," ",[3,"'bottom'"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"Task"],[11,">"]],["  ",[5,"updateTask"],[10,"?"],[11,"("],[12,"taskId"],[11,","]," ",[12,"patch"],[10,":"]," ",[6,"Partial"],[11,"<"],[6,"Task"],[11,">)"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"deleteTask"],[10,"?"],[11,"("],[12,"taskId"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"duplicateTask"],[10,"?"],[11,"("],[12,"taskId"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"Task"],[11,">"]],["  ",[5,"moveTask"],[10,"?"],[11,"("],[12,"taskId"],[11,","]," ",[12,"targetGroupId"],[11,","]," ",[12,"beforeTaskId"],[10,":"]," ",[6,"string"]," ",[10,"|"]," ",[6,"null"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"addSubtask"],[10,"?"],[11,"("],[12,"parentId"],[11,","]," ",[12,"title"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"Task"],[11,">"]],[],[[11,"  "],[1,"// Bulk"]],["  ",[5,"bulkUpdate"],[10,"?"],[11,"("],[12,"taskIds"],[11,","]," ",[12,"patch"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"bulkMove"],[10,"?"],[11,"("],[12,"taskIds"],[11,","]," ",[12,"targetGroupId"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"bulkDelete"],[10,"?"],[11,"("],[12,"taskIds"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[],[[11,"  "],[1,"// Lists"]],["  ",[5,"createGroup"],[10,"?"],[11,"("],[12,"title"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TaskListGroup"],[11,">"]],["  ",[5,"renameGroup"],[10,"?"],[11,"("],[12,"groupId"],[11,","]," ",[12,"title"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"duplicateGroup"],[10,"?"],[11,"("],[12,"groupId"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"TaskListGroup"],[11,">"]],["  ",[5,"deleteGroup"],[10,"?"],[11,"("],[12,"groupId"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],["  ",[5,"reorderGroups"],[10,"?"],[11,"("],[12,"orderedIds"],[11,")"],[10,":"]," ",[6,"MaybePromise"],[11,"<"],[6,"void"],[11,">"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`interface TaskListAdapter {
  // Required
  load(): MaybePromise<TaskListGroup[]>

  // Tasks (each optional)
  createTask?(groupId, title, position?: 'top' | 'bottom'): MaybePromise<Task>
  updateTask?(taskId, patch: Partial<Task>): MaybePromise<void>
  deleteTask?(taskId): MaybePromise<void>
  duplicateTask?(taskId): MaybePromise<Task>
  moveTask?(taskId, targetGroupId, beforeTaskId: string | null): MaybePromise<void>
  addSubtask?(parentId, title): MaybePromise<Task>

  // Bulk
  bulkUpdate?(taskIds, patch): MaybePromise<void>
  bulkMove?(taskIds, targetGroupId): MaybePromise<void>
  bulkDelete?(taskIds): MaybePromise<void>

  // Lists
  createGroup?(title): MaybePromise<TaskListGroup>
  renameGroup?(groupId, title): MaybePromise<void>
  duplicateGroup?(groupId): MaybePromise<TaskListGroup>
  deleteGroup?(groupId): MaybePromise<void>
  reorderGroups?(orderedIds): MaybePromise<void>
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`MaybePromise<T>`}),` accepts both `,(0,n.jsx)(r.code,{children:`T`}),` and `,(0,n.jsx)(r.code,{children:`Promise<T>`}),` — sync adapters work
the same way as async ones.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Headless guarantees`}),`
`,(0,n.jsx)(r.p,{children:`The connected components inspect your adapter and toggle UI affordances
based on what's implemented:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Implement`}),(0,n.jsx)(r.th,{children:`UI activates`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`load`}),` only`]}),(0,n.jsx)(r.td,{children:`Read-only board`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`createTask`})}),(0,n.jsx)(r.td,{children:`Inline composers + "Add task" buttons`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`updateTask`})}),(0,n.jsx)(r.td,{children:`Status picker, inline rename, done toggle, kanban drops`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`deleteTask`})}),(0,n.jsx)(r.td,{children:`"Delete" in context menu`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`moveTask`})}),(0,n.jsx)(r.td,{children:`Drag-and-drop (within + across lists)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`addSubtask`})}),(0,n.jsx)(r.td,{children:`Subtask expand chevron + "Add subtask" item`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`bulkUpdate`}),` / `,(0,n.jsx)(r.code,{children:`bulkMove`}),` / `,(0,n.jsx)(r.code,{children:`bulkDelete`})]}),(0,n.jsx)(r.td,{children:`Bulk action bar items`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`createGroup`})}),(0,n.jsx)(r.td,{children:`"New list" + "Add list" buttons`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`renameGroup`})}),(0,n.jsx)(r.td,{children:`List rename (inline + dropdown)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`duplicateGroup`})}),(0,n.jsx)(r.td,{children:`"Duplicate list" in dropdown`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`reorderGroups`})}),(0,n.jsx)(r.td,{children:`Drag lists by their header grip to reorder`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`You can override this with the `,(0,n.jsx)(r.code,{children:`features`}),` prop on `,(0,n.jsx)(r.code,{children:`TaskListProvider`}),` —
either to disable a capability that the adapter supports, or force-enable
a UI you'll wire by other means.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`REST adapter example`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"restAdapter"],[10,":"]," ",[6,"TaskListAdapter"]," ",[10,"="]," ",[11,"{"]],["  ",[5,"load"],[11,":"]," ",[11,"()"]," ",[2,"=>"]],["    ",[5,"fetch"],[11,"("],[3,"'/api/lists'"],[11,")."],[5,"then"],[11,"(("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[5,"json"],[11,"()),"]],[],["  ",[5,"createTask"],[11,":"]," ",[11,"("],[12,"groupId"],[11,","]," ",[12,"title"],[11,","]," ",[12,"position"],[11,")"]," ",[2,"=>"]],["    ",[5,"fetch"],[11,"("],[3,"\`/api/lists/"],[11,"\${"],[12,"groupId"],[11,"}"],[3,"/tasks\`"],[11,","]," ",[11,"{"]],["      ",[9,"method"],[11,":"]," ",[3,"'POST'"],[11,","]],["      ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"({"]," ",[12,"title"],[11,","]," ",[12,"position"]," ",[11,"}),"]],["    ",[11,"})."],[5,"then"],[11,"(("],[12,"r"],[11,")"]," ",[2,"=>"]," ",[12,"r"],[11,"."],[5,"json"],[11,"()),"]],[],["  ",[5,"updateTask"],[11,":"]," ",[11,"("],[12,"taskId"],[11,","]," ",[12,"patch"],[11,")"]," ",[2,"=>"]],["    ",[5,"fetch"],[11,"("],[3,"\`/api/tasks/"],[11,"\${"],[12,"taskId"],[11,"}"],[3,"\`"],[11,","]," ",[11,"{"]],["      ",[9,"method"],[11,":"]," ",[3,"'PATCH'"],[11,","]],["      ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"("],[12,"patch"],[11,"),"]],["    ",[11,"})."],[5,"then"],[11,"(()"]," ",[2,"=>"]," ",[4,"undefined"],[11,"),"]],[],["  ",[5,"deleteTask"],[11,":"]," ",[11,"("],[12,"taskId"],[11,")"]," ",[2,"=>"]],["    ",[5,"fetch"],[11,"("],[3,"\`/api/tasks/"],[11,"\${"],[12,"taskId"],[11,"}"],[3,"\`"],[11,","]," ",[11,"{"]," ",[9,"method"],[11,":"]," ",[3,"'DELETE'"]," ",[11,"})."],[5,"then"],[11,"(()"]," ",[2,"=>"]," ",[4,"undefined"],[11,"),"]],[],["  ",[5,"moveTask"],[11,":"]," ",[11,"("],[12,"taskId"],[11,","]," ",[12,"targetGroupId"],[11,","]," ",[12,"beforeTaskId"],[11,")"]," ",[2,"=>"]],["    ",[5,"fetch"],[11,"("],[3,"\`/api/tasks/"],[11,"\${"],[12,"taskId"],[11,"}"],[3,"/move\`"],[11,","]," ",[11,"{"]],["      ",[9,"method"],[11,":"]," ",[3,"'POST'"],[11,","]],["      ",[9,"body"],[11,":"]," ",[12,"JSON"],[11,"."],[5,"stringify"],[11,"({"]," ",[12,"targetGroupId"],[11,","]," ",[12,"beforeTaskId"]," ",[11,"}),"]],["    ",[11,"})."],[5,"then"],[11,"(()"]," ",[2,"=>"]," ",[4,"undefined"],[11,"),"]],[],[[11,"  "],[1,"// skip what you don't need; the UI for those features won't render"]],[[11,"}"]],[],[[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"restAdapter"],[11,"}>"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`const restAdapter: TaskListAdapter = {
  load: () =>
    fetch('/api/lists').then((r) => r.json()),

  createTask: (groupId, title, position) =>
    fetch(\`/api/lists/\${groupId}/tasks\`, {
      method: 'POST',
      body: JSON.stringify({ title, position }),
    }).then((r) => r.json()),

  updateTask: (taskId, patch) =>
    fetch(\`/api/tasks/\${taskId}\`, {
      method: 'PATCH',
      body: JSON.stringify(patch),
    }).then(() => undefined),

  deleteTask: (taskId) =>
    fetch(\`/api/tasks/\${taskId}\`, { method: 'DELETE' }).then(() => undefined),

  moveTask: (taskId, targetGroupId, beforeTaskId) =>
    fetch(\`/api/tasks/\${taskId}/move\`, {
      method: 'POST',
      body: JSON.stringify({ targetGroupId, beforeTaskId }),
    }).then(() => undefined),

  // skip what you don't need; the UI for those features won't render
}

<TaskListProvider adapter={restAdapter}>
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Async + loading state`}),`
`,(0,n.jsxs)(r.p,{children:[`The provider exposes a `,(0,n.jsx)(r.code,{children:`loading`}),` flag while `,(0,n.jsx)(r.code,{children:`load()`}),` is in flight. Wrap
your board with a loading gate:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"useTaskList"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/task-list'"]],[],[[2,"function"]," ",[5,"Gate"],[11,"({"]," ",[12,"children"]," ",[11,"})"]," ",[11,"{"]],["  ",[2,"const"]," ",[11,"{"]," ",[12,"loading"]," ",[11,"}"]," ",[10,"="]," ",[5,"useTaskList"],[11,"()"]],["  ",[2,"if"]," ",[11,"("],[12,"loading"],[11,")"]," ",[2,"return"]," ",[11,"<"],[7,"p"],[11,">"],"Loading…",[11,"</"],[7,"p"],[11,">"]],["  ",[2,"return"]," ",[12,"children"]],[[11,"}"]],[],[[11,"<"],[7,"TaskListProvider"]," ",[8,"adapter"],[10,"="],[11,"{"],[12,"restAdapter"],[11,"}>"]],["  ",[11,"<"],[7,"Gate"],[11,">"]],["    ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],["  ",[11,"</"],[7,"Gate"],[11,">"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { useTaskList } from '@kitora/task-list'

function Gate({ children }) {
  const { loading } = useTaskList()
  if (loading) return <p>Loading…</p>
  return children
}

<TaskListProvider adapter={restAdapter}>
  <Gate>
    <ConnectedTaskListBoard />
  </Gate>
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.h2,{children:`Inspecting capabilities`}),`
`,(0,n.jsx)(r.p,{children:`If you want to render a status badge or feature chip from your own UI:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"inspectCapabilities"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/task-list'"]],[],[[2,"const"]," ",[12,"caps"]," ",[10,"="]," ",[5,"inspectCapabilities"],[11,"("],[12,"myAdapter"],[11,")"]],[[1,"// → { createTask: true, updateTask: true, deleteTask: false, ... }"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { inspectCapabilities } from '@kitora/task-list'

const caps = inspectCapabilities(myAdapter)
// → { createTask: true, updateTask: true, deleteTask: false, ... }
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};