import{zc as e}from"./index-BZuUy872.js";import{n as t}from"./lib-C0E9zsFn.js";var n=e(),r={title:`Feature flags`,description:`Turn any feature on or off via the features prop.`,order:2};function i(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Feature flags`}),`
`,(0,n.jsxs)(r.p,{children:[`Pass a `,(0,n.jsx)(r.code,{children:`features`}),` map to `,(0,n.jsx)(r.code,{children:`<TaskListProvider>`}),`. Anything you leave
`,(0,n.jsx)(r.code,{children:`undefined`}),` defaults to enabled when the adapter implements the underlying
mutation.`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Available flags`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Flag`}),(0,n.jsx)(r.th,{children:`What it controls`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`drag`})}),(0,n.jsx)(r.td,{children:`Drag-to-reorder within a list and across lists`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`dragSelection`})}),(0,n.jsx)(r.td,{children:`Whole-selection drag when the dragged task is selected`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`multiSelect`})}),(0,n.jsx)(r.td,{children:`Row select checkboxes + bulk action bar`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`subtasks`})}),(0,n.jsx)(r.td,{children:`Subtask expand chevron + nested rendering`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`inlineRename`})}),(0,n.jsx)(r.td,{children:`Double-click title to rename`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`contextMenu`})}),(0,n.jsx)(r.td,{children:`Right-click row menu`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`inlineComposer`})}),(0,n.jsx)(r.td,{children:`Inline task composer at top + bottom of each list`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`drawerPreview`})}),(0,n.jsx)(r.td,{children:`Right-side Sheet preview when a task is opened`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`statusPicker`})}),(0,n.jsx)(r.td,{children:`Click the row status icon → dropdown`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`reorderLists`})}),(0,n.jsx)(r.td,{children:`Drag lists by their header grip to reorder`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`collapsibleLists`})}),(0,n.jsx)(r.td,{children:`Click chevron to collapse / expand a list`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`kanban`})}),(0,n.jsx)(r.td,{children:`Render the kanban view tab`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`savedViews`})}),(0,n.jsx)(r.td,{children:`Save filter combinations as named presets`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`inlineComposer`}),` also accepts an object: `,(0,n.jsx)(r.code,{children:`{ top: false, bottom: true }`}),` to
show only one of the two composers.`]}),`
`,(0,n.jsx)(r.h2,{children:`Examples`}),`
`,(0,n.jsx)(r.h3,{children:`Read-only viewer`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"TaskListProvider"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"readOnlyAdapter"],[11,"}"]," ",[1,"// only implements load()"]],[[11,">"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TaskListProvider
  adapter={readOnlyAdapter} // only implements load()
>
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.p,{children:`Every interactive UI hides automatically because no mutation is wired.`}),`
`,(0,n.jsx)(r.h3,{children:`Full-feature, no kanban`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"TaskListProvider"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"fullAdapter"],[11,"}"]],["  ",[8,"features"],[10,"="],[11,"{{"]," ",[9,"kanban"],[11,":"]," ",[4,"false"]," ",[11,"}}"]],[[11,">"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TaskListProvider
  adapter={fullAdapter}
  features={{ kanban: false }}
>
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The Kanban view tab is suppressed even though `,(0,n.jsx)(r.code,{children:`updateTask`}),` is implemented
(which would otherwise enable it).`]}),`
`,(0,n.jsx)(r.h3,{children:`Mobile / minimal mode`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"<"],[7,"TaskListProvider"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"fullAdapter"],[11,"}"]],["  ",[8,"features"],[10,"="],[11,"{{"]],["    ",[9,"drag"],[11,":"]," ",[4,"false"],[11,","]],["    ",[9,"contextMenu"],[11,":"]," ",[4,"false"],[11,","]],["    ",[9,"multiSelect"],[11,":"]," ",[4,"false"],[11,","]],["    ",[9,"subtasks"],[11,":"]," ",[4,"false"],[11,","]],["    ",[9,"kanban"],[11,":"]," ",[4,"false"],[11,","]],["    ",[9,"inlineComposer"],[11,":"]," ",[11,"{"]," ",[9,"top"],[11,":"]," ",[4,"true"],[11,","]," ",[9,"bottom"],[11,":"]," ",[4,"false"]," ",[11,"},"]],["  ",[11,"}}"]],[[11,">"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TaskListProvider
  adapter={fullAdapter}
  features={{
    drag: false,
    contextMenu: false,
    multiSelect: false,
    subtasks: false,
    kanban: false,
    inlineComposer: { top: true, bottom: false },
  }}
>
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.p,{children:`Strips heavy interactions for small screens. Only the top composer + tap
to open detail remain.`}),`
`,(0,n.jsx)(r.h3,{children:`Force a feature even with no adapter support`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":'[[[11,"<"],[7,"TaskListProvider"]],["  ",[8,"adapter"],[10,"="],[11,"{"],[12,"partialAdapter"],[11,"}"]," ",[1,"// no `moveTask` implemented"]],["  ",[8,"features"],[10,"="],[11,"{{"]," ",[9,"drag"],[11,":"]," ",[4,"true"]," ",[11,"}}"]," ",[1,"// force-on anyway"]],[[11,">"]],["  ",[11,"<"],[7,"ConnectedTaskListBoard"]," ",[11,"/>"]],[[11,"</"],[7,"TaskListProvider"],[11,">"]]]',"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`<TaskListProvider
  adapter={partialAdapter} // no \`moveTask\` implemented
  features={{ drag: true }} // force-on anyway
>
  <ConnectedTaskListBoard />
</TaskListProvider>
`})}),`
`,(0,n.jsx)(r.p,{children:`The drag handles render, but drops will be no-ops since the adapter can't
persist the move. Useful for previews or progressive enhancement.`}),`
`,(0,n.jsx)(r.h2,{children:`Live demo`}),`
`,(0,n.jsxs)(r.p,{children:[`Open `,(0,n.jsx)(r.a,{href:`/kits/tasklists/headless`,children:(0,n.jsx)(r.code,{children:`/kits/tasklists/headless`})}),` — the
left panel has a Switch for every flag. Toggle them and watch the board
re-wire instantly.`]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};